  1 import os 
  2 import random 
  3 import time
  4 import json
  5 import torch
  6 import torchvision
  7 import numpy as np 
  8 import pandas as pd 
  9 import warnings
 10 from datetime import datetime
 11 from torch import nn,optim
 12 from config import config 
 13 from collections import OrderedDict
 14 from torch.autograd import Variable 
 15 from torch.utils.data import DataLoader
 16 from dataset.dataloader import *
 17 from sklearn.model_selection import train_test_split,StratifiedKFold
 18 from timeit import default_timer as timer
 19 from models.model import *
 20 from utils import *
 21 
 22 #1. 设置随机种子 and cudnn performance
 23 random.seed(config.seed)
 24 np.random.seed(config.seed)
 25 torch.manual_seed(config.seed)
 26 torch.cuda.manual_seed_all(config.seed)
 27 os.environ["CUDA_VISIBLE_DEVICES"] = config.gpus
 28 torch.backends.cudnn.benchmark = True
 29 warnings.filterwarnings('ignore')
 30 
 31 #2. 评估函数，通过Losses，topk的不断更新来评估模型
 32 def evaluate(val_loader,model,criterion):
 33     #2.1 AverageMeter类是Computes and stores the average and current value
 34     # 创建三个其对象，以用于评估
 35     losses = AverageMeter()
 36     top1 = AverageMeter()
 37     top2 = AverageMeter()
 38     #2.2 开启评估模式 and confirm model has been transfered to cuda
 39     model.cuda()
 40     model.eval()
 41     with torch.no_grad():
 42         for i,(input,target) in enumerate(val_loader):
 43             input = Variable(input).cuda()
 44             target = Variable(torch.from_numpy(np.array(target)).long()).cuda()
 45             #target = Variable(target).cuda()
 46             #2.2.1 compute output
 47             output = model(input)
 48             loss = criterion(output,target)
 49 
 50             #2.2.2 measure accuracy and record loss
 51             precision1,precision2 = accuracy(output,target,topk=(1,2))
 52             losses.update(loss.item(),input.size(0))
 53             top1.update(precision1[0],input.size(0))
 54             top2.update(precision2[0],input.size(0))
 55 
 56     return [losses.avg,top1.avg,top2.avg]
 57 
 58 #3. test model on public dataset and save the probability matrix
 59 
 60 def test(test_loader,model,folds):
 61     #3.1 confirm the model converted to cuda
 62     # 得出的结果是概率，再用softmax得出最终分类结果
 63     csv_map = OrderedDict({"filename":[],"probability":[]})
 64     model.cuda()
 65     model.eval()
 66     with open("./submit/baseline.json","w",encoding="utf-8") as f :
 67         submit_results = []
 68         for i,(input,filepath) in enumerate(tqdm(test_loader)):
 69             # filepath??????
 70             # 通过模型得到输出概率结果，再用softmax得出预测结果，写入文件。
 71             #3.2 change everything to cuda and get only basename
 72             filepath = [os.path.basename(x) for x in filepath]
 73             with torch.no_grad():
 74                 image_var = Variable(input).cuda()
 75                 #3.3.output
 76                 #print(filepath)
 77                 #print(input,input.shape)
 78                 y_pred = model(image_var)
 79                 #print(y_pred.shape)
 80                 smax = nn.Softmax(1)
 81                 smax_out = smax(y_pred)
 82             #3.4 save probability to csv files
 83             csv_map["filename"].extend(filepath)
 84             for output in smax_out:
 85                 prob = ";".join([str(i) for i in output.data.tolist()])
 86                 csv_map["probability"].append(prob)
 87         result = pd.DataFrame(csv_map)
 88         result["probability"] = result["probability"].map(lambda x : [float(i) for i in x.split(";")])
 89         for index, row in result.iterrows():
 90             # 因为44，45类删除，所以预测结果加2
 91             pred_label = np.argmax(row['probability'])
 92             if pred_label > 43:
 93                 pred_label = pred_label + 2
 94             submit_results.append({"image_id":row['filename'],"disease_class":pred_label})
 95         json.dump(submit_results,f,ensure_ascii=False,cls = MyEncoder)
 96 
 97 #4. more details to build main function    
 98 def main():
 99     fold = 0
100     #4.1 mkdirs
101     if not os.path.exists(config.submit):
102         os.mkdir(config.submit)
103     if not os.path.exists(config.weights):
104         os.mkdir(config.weights)
105     if not os.path.exists(config.best_models):
106         os.mkdir(config.best_models)
107     if not os.path.exists(config.logs):
108         os.mkdir(config.logs)
109     if not os.path.exists(config.weights + config.model_name + os.sep +str(fold) + os.sep):
110         os.makedirs(config.weights + config.model_name + os.sep +str(fold) + os.sep)
111     if not os.path.exists(config.best_models + config.model_name + os.sep +str(fold) + os.sep):
112         os.makedirs(config.best_models + config.model_name + os.sep +str(fold) + os.sep)       
113     #4.2 get model and optimizer
114     model = get_net()
115     #model = torch.nn.DataParallel(model)
116     model.cuda()
117     #optimizer = optim.SGD(model.parameters(),lr = config.lr,momentum=0.9,weight_decay=config.weight_decay)
118     optimizer = optim.Adam(model.parameters(),lr = config.lr,amsgrad=True,weight_decay=config.weight_decay)
119     criterion = nn.CrossEntropyLoss().cuda()
120     #criterion = FocalLoss().cuda()
121     log = Logger()
122     log.open(config.logs + "log_train.txt",mode="a")
123     log.write("\n----------------------------------------------- [START %s] %s\n\n" % (datetime.now().strftime('%Y-%m-%d %H:%M:%S'), '-' * 51))
124     #4.3 some parameters for  K-fold and restart model
125     start_epoch = 0
126     best_precision1 = 0
127     best_precision_save = 0
128     resume = False
129     
130     #4.4 restart the training process
131     if resume:
132         checkpoint = torch.load(config.best_models + str(fold) + "/model_best.pth.tar")
133         start_epoch = checkpoint["epoch"]
134         fold = checkpoint["fold"]
135         best_precision1 = checkpoint["best_precision1"]
136         model.load_state_dict(checkpoint["state_dict"])
137         optimizer.load_state_dict(checkpoint["optimizer"])
138 
139     #4.5 get files and split for K-fold dataset
140     #4.5.1 read files
141     train_ = get_files(config.train_data,"train")
142     #val_data_list = get_files(config.val_data,"val")
143     test_files = get_files(config.test_data,"test")
144 
145     """ 
146     #4.5.2 split
147     split_fold = StratifiedKFold(n_splits=3)
148     folds_indexes = split_fold.split(X=origin_files["filename"],y=origin_files["label"])
149     folds_indexes = np.array(list(folds_indexes))
150     fold_index = folds_indexes[fold]
151 
152     #4.5.3 using fold index to split for train data and val data
153     train_data_list = pd.concat([origin_files["filename"][fold_index[0]],origin_files["label"][fold_index[0]]],axis=1)
154     val_data_list = pd.concat([origin_files["filename"][fold_index[1]],origin_files["label"][fold_index[1]]],axis=1)
155     """
156     train_data_list,val_data_list = train_test_split(train_,test_size = 0.15,stratify=train_["label"])
157     #4.5.4 load dataset
158     train_dataloader = DataLoader(ZiyiDataset(train_data_list),batch_size=config.batch_size,shuffle=True,collate_fn=collate_fn,pin_memory=True)
159     val_dataloader = DataLoader(ZiyiDataset(val_data_list,train=False),batch_size=config.batch_size,shuffle=True,collate_fn=collate_fn,pin_memory=False)
160     test_dataloader = DataLoader(ZiyiDataset(test_files,test=True),batch_size=1,shuffle=False,pin_memory=False)
161     #scheduler = optim.lr_scheduler.ReduceLROnPlateau(optimizer,"max",verbose=1,patience=3)
162     scheduler =  optim.lr_scheduler.StepLR(optimizer,step_size = 10,gamma=0.1)
163     # optim.lr_scheduler 提供了基于多种epoch数目调整学习率的方法
164     # step_size(整数类型): 调整学习率的步长,每过step_size次,更新一次学习率
165     # gamma(float 类型):学习率下降的乘数因子
166     #4.5.5.1 define metrics
167     train_losses = AverageMeter()
168     train_top1 = AverageMeter()
169     train_top2 = AverageMeter()
170     valid_loss = [np.inf,0,0]
171     model.train()
172     #logs
173     log.write('** start training here! **\n')
174     log.write('                           |------------ VALID -------------|----------- TRAIN -------------|------Accuracy------|------------|\n')
175     log.write('lr       iter     epoch    | loss   top-1  top-2            | loss   top-1  top-2           |    Current Best    | time       |\n')
176     log.write('-------------------------------------------------------------------------------------------------------------------------------\n')
177     #4.5.5 train
178     start = timer()
179     for epoch in range(start_epoch,config.epochs):
180         # 一个epoch为所有数据迭代一次进入模型拟合的过程，其中又分为batch_size来分批次进行
181         scheduler.step(epoch)
182         # train
183         #global iter
184         for iter,(input,target) in enumerate(train_dataloader):
185             #4.5.5 switch to continue train process
186             model.train()
187             input = Variable(input).cuda()
188             target = Variable(torch.from_numpy(np.array(target)).long()).cuda()
189             #target = Variable(target).cuda()
190             output = model(input)
191             loss = criterion(output,target)
192 
193             precision1_train,precision2_train = accuracy(output,target,topk=(1,2))
194             train_losses.update(loss.item(),input.size(0))
195             train_top1.update(precision1_train[0],input.size(0))
196             train_top2.update(precision2_train[0],input.size(0))
197             #backward
198             optimizer.zero_grad()
199             loss.backward()
200             optimizer.step()
201             lr = get_learning_rate(optimizer)
202             print('\r',end='',flush=True)
203             print('%0.4f %5.1f %6.1f        | %0.3f  %0.3f  %0.3f         | %0.3f  %0.3f  %0.3f         |         %s         | %s' % (\
204                          lr, iter/len(train_dataloader) + epoch, epoch,
205                          valid_loss[0], valid_loss[1], valid_loss[2],
206                          train_losses.avg, train_top1.avg, train_top2.avg,str(best_precision_save),
207                          time_to_str((timer() - start),'min'))
208             , end='',flush=True)
209         #evaluate
210         lr = get_learning_rate(optimizer)
211         #evaluate every half epoch
212         valid_loss = evaluate(val_dataloader,model,criterion)
213         is_best = valid_loss[1] > best_precision1
214         best_precision1 = max(valid_loss[1],best_precision1)
215         try:
216             best_precision_save = best_precision1.cpu().data.numpy()
217         except:
218             pass
219         save_checkpoint({
220                     "epoch":epoch + 1,
221                     "model_name":config.model_name,
222                     "state_dict":model.state_dict(),
223                     "best_precision1":best_precision1,
224                     "optimizer":optimizer.state_dict(),
225                     "fold":fold,
226                     "valid_loss":valid_loss,
227         },is_best,fold)
228         #adjust learning rate
229         #scheduler.step(valid_loss[1])
230         print("\r",end="",flush=True)
231         log.write('%0.4f %5.1f %6.1f        | %0.3f  %0.3f  %0.3f          | %0.3f  %0.3f  %0.3f         |         %s         | %s' % (\
232                         lr, 0 + epoch, epoch,
233                         valid_loss[0], valid_loss[1], valid_loss[2],
234                         train_losses.avg,    train_top1.avg,    train_top2.avg, str(best_precision_save),
235                         time_to_str((timer() - start),'min'))
236                 )
237         log.write('\n')
238         time.sleep(0.01)
239     best_model = torch.load(config.best_models + os.sep+config.model_name+os.sep+ str(fold) +os.sep+ 'model_best.pth.tar')
240     model.load_state_dict(best_model["state_dict"])
241     test(test_dataloader,model,fold)
242 
243 if __name__ =="__main__":
244     main()
