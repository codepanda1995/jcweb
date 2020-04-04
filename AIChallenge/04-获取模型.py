# 获取模型较为简单，单一模型采取pytorch中的预训练模型，添加所需要的层，进行微调然后迁移学习新数据。
 1 import torchvision
 2 import torch.nn.functional as F 
 3 from torch import nn
 4 from config import config
 5 
 6 def generate_model():
 7     class DenseModel(nn.Module):
 8         def __init__(self, pretrained_model):
 9             super(DenseModel, self).__init__()
10             self.classifier = nn.Linear(pretrained_model.classifier.in_features, config.num_classes)
11 
12             for m in self.modules():
13                 if isinstance(m, nn.Conv2d):
14                     nn.init.kaiming_normal(m.weight)
15                 elif isinstance(m, nn.BatchNorm2d):
16                     m.weight.data.fill_(1)
17                     m.bias.data.zero_()
18                 elif isinstance(m, nn.Linear):
19                     m.bias.data.zero_()
20 
21             self.features = pretrained_model.features
22             self.layer1 = pretrained_model.features._modules['denseblock1']
23             self.layer2 = pretrained_model.features._modules['denseblock2']
24             self.layer3 = pretrained_model.features._modules['denseblock3']
25             self.layer4 = pretrained_model.features._modules['denseblock4']
26 
27         def forward(self, x):
28             features = self.features(x)
29             out = F.relu(features, inplace=True)
30             out = F.avg_pool2d(out, kernel_size=8).view(features.size(0), -1)
31             out = F.sigmoid(self.classifier(out))
32             return out
33 
34     return DenseModel(torchvision.models.densenet169(pretrained=True))
35 
36 def get_net():
37     #return MyModel(torchvision.models.resnet101(pretrained = True))
38     model = torchvision.models.resnet50(pretrained = True)    
39     #for param in model.parameters():
40     #    param.requires_grad = False
41     # pytorch添加层的方式直接在Model.层名=层具体形式
42     model.avgpool = nn.AdaptiveAvgPool2d(1)
43     model.fc = nn.Linear(2048,config.num_classes)  #添加全连接层以作分类任务，num_classes为分类个数
44     return model
