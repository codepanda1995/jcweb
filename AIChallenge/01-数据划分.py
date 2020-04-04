#首先对数据集进行划分，类型为每个类单独放一个文件夹
import json
import shutil
import os
from glob import glob
from tqdm import tqdm
# 此文件的作用是创建每个类的文件夹，以及根据给出来的Json中已经做好的分类，对数据进行对号入座划分。
# 加载json文件得出一个字典，然后根据Key值来提取每个文件到相应的文件夹中，（注意去除了不合理数据）

try:
    for i in range(0,59):
        os.mkdir("./data/train/" + str(i))
except:
    pass
     
file_train = json.load(open("./data/temp/labels/AgriculturalDisease_train_annotations.json","r",encoding="utf-8"))
file_val = json.load(open("./data/temp/labels/AgriculturalDisease_validation_annotations.json","r",encoding="utf-8"))

file_list = file_train + file_val
 
for file in tqdm(file_list):
    filename = file["image_id"]
    origin_path = "./data/temp/images/" + filename
    ids = file["disease_class"]
    if ids ==  44:
        continue
    if ids == 45:
        continue
    if ids > 45:
        ids = ids -2
    save_path = "./data/train/" + str(ids) + "/"
    shutil.copy(origin_path,save_path)
