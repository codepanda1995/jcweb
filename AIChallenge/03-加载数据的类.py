from torch.utils.data import Dataset
  2 from torchvision import transforms as T 
  3 from config import config
  4 from PIL import Image 
  5 from itertools import chain 
  6 from glob import glob
  7 from tqdm import tqdm
  8 import random 
  9 import numpy as np 
 10 import pandas as pd 
 11 import os 
 12 import cv2
 13 import torch 
 14 
 15 #1.set random seed
 16 random.seed(config.seed)
 17 np.random.seed(config.seed)
 18 torch.manual_seed(config.seed)
 19 torch.cuda.manual_seed_all(config.seed)
 20 
 21 #2.define dataset
 22 class ZiyiDataset(Dataset):
 23     def __init__(self,label_list,transforms=None,train=True,test=False):
 24         self.test = test 
 25         self.train = train 
 26         imgs = []
 27         if self.test:
 28             for index,row in label_list.iterrows():
 29                 imgs.append((row["filename"]))
 30             self.imgs = imgs 
 31         else:
 32             for index,row in label_list.iterrows():
 33                 imgs.append((row["filename"],row["label"]))
 34             self.imgs = imgs
 35         if transforms is None:
 36             if self.test or not train:
 37                 self.transforms = T.Compose([
 38                     T.Resize((config.img_weight,config.img_height)),
 39                     T.ToTensor(),
 40                     T.Normalize(mean = [0.485,0.456,0.406],
 41                                 std = [0.229,0.224,0.225])])
 42             else:
 43                 self.transforms  = T.Compose([
 44                     T.Resize((config.img_weight,config.img_height)),
 45                     T.RandomRotation(30),
 46                     T.RandomHorizontalFlip(),
 47                     T.RandomVerticalFlip(),
 48                     T.RandomAffine(45),
 49                     T.ToTensor(),
 50                     T.Normalize(mean = [0.485,0.456,0.406],
 51                                 std = [0.229,0.224,0.225])])
 52         else:
 53             self.transforms = transforms
 54     def __getitem__(self,index):
 55         if self.test:
 56             filename = self.imgs[index]
 57             img = Image.open(filename)
 58             img = self.transforms(img)
 59             return img,filename
 60         else:
 61             filename,label = self.imgs[index] 
 62             img = Image.open(filename)
 63             img = self.transforms(img)
 64             return img,label
 65     def __len__(self):
 66         return len(self.imgs)
 67 
 68 def collate_fn(batch):
 69     imgs = []
 70     label = []
 71     for sample in batch:
 72         imgs.append(sample[0])
 73         label.append(sample[1])
 74 
 75     return torch.stack(imgs, 0), \
 76            label
 77 
 78 def get_files(root,mode):
 79     #for test
 80     if mode == "test":
 81         files = []
 82         for img in os.listdir(root):
 83             files.append(root + img)
 84         files = pd.DataFrame({"filename":files})
 85         return files
 86     elif mode != "test": 
 87         #for train and val       
 88         all_data_path,labels = [],[]
 89         image_folders = list(map(lambda x:root+x,os.listdir(root)))
 90         jpg_image_1 = list(map(lambda x:glob(x+"/*.jpg"),image_folders))
 91         jpg_image_2 = list(map(lambda x:glob(x+"/*.JPG"),image_folders))
 92         all_images = list(chain.from_iterable(jpg_image_1 + jpg_image_2))
 93         print("loading train dataset")
 94         for file in tqdm(all_images):
 95             all_data_path.append(file)
 96             labels.append(int(file.split("/")[-2]))
 97         all_files = pd.DataFrame({"filename":all_data_path,"label":labels})
 98         return all_files
 99     else:
100         print("check the mode please!")
101     
 