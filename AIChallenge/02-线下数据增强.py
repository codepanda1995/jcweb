#   方式二：  用于线下增强数据，采用的方法是

# 高斯噪声
# 亮度变化
# 左右翻转
# 上下翻转
# 色彩抖动
# 对化
# 锐度变化
  
  1 from PIL import Image,ImageEnhance,ImageFilter,ImageOps
  2 import os
  3 import shutil
  4 import numpy as np
  5 import cv2
  6 import random
  7 from skimage.util import random_noise
  8 from skimage import exposure
  9 
 10 
 11 image_number = 0
 12 
 13 raw_path = "./data/train/"
 14 
 15 new_path = "./aug/train/"
 16 
 17 # 加高斯噪声
 18 def addNoise(img):
 19     '''
 20     注意：输出的像素是[0,1]之间,所以乘以5得到[0,255]之间
 21     '''
 22     return random_noise(img, mode='gaussian', seed=13, clip=True)*255
 23 
 24 def changeLight(img):
 25     rate = random.uniform(0.5, 1.5)
 26     # print(rate)
 27     img = exposure.adjust_gamma(img, rate) #大于1为调暗，小于1为调亮;1.05
 28     return img
 29 
 30 try:
 31     for i in range(59):
 32         os.makedirs(new_path + os.sep + str(i))
 33     except:
 34         pass
 35 
 36 for raw_dir_name in range(59):
 37 
 38     raw_dir_name = str(raw_dir_name)
 39 
 40     saved_image_path = new_path + raw_dir_name+"/"
 41 
 42     raw_image_path = raw_path + raw_dir_name+"/"
 43 
 44     if not os.path.exists(saved_image_path):
 45 
 46         os.mkdir(saved_image_path)
 47 
 48     raw_image_file_name = os.listdir(raw_image_path)
 49 
 50     raw_image_file_path = []
 51 
 52     for i in raw_image_file_name:
 53 
 54         raw_image_file_path.append(raw_image_path+i)
 55 
 56     for x in raw_image_file_path:
 57 
 58         img = Image.open(x)
 59         cv_image = cv2.imread(x)
 60 
 61         # 高斯噪声
 62         gau_image = addNoise(cv_image)
 63         # 随机改变
 64         light = changeLight(cv_image)
 65         light_and_gau = addNoise(light)
 66 
 67         cv2.imwrite(saved_image_path + "gau_" + os.path.basename(x),gau_image)
 68         cv2.imwrite(saved_image_path + "light_" + os.path.basename(x),light)
 69         cv2.imwrite(saved_image_path + "gau_light" + os.path.basename(x),light_and_gau)
 70         #img = img.resize((800,600))
 71 
 72         #1.翻转 
 73 
 74         img_flip_left_right = img.transpose(Image.FLIP_LEFT_RIGHT)
 75 
 76         img_flip_top_bottom = img.transpose(Image.FLIP_TOP_BOTTOM)
 77 
 78         #2.旋转 
 79 
 80         #img_rotate_90 = img.transpose(Image.ROTATE_90)
 81 
 82         #img_rotate_180 = img.transpose(Image.ROTATE_180)
 83 
 84         #img_rotate_270 = img.transpose(Image.ROTATE_270)
 85 
 86         #img_rotate_90_left = img_flip_left_right.transpose(Image.ROTATE_90)
 87 
 88         #img_rotate_270_left = img_flip_left_right.transpose(Image.ROTATE_270)
 89 
 90         #3.亮度
 91 
 92         #enh_bri = ImageEnhance.Brightness(img)
 93         #brightness = 1.5
 94         #image_brightened = enh_bri.enhance(brightness)
 95 
 96         #4.色彩
 97 
 98         #enh_col = ImageEnhance.Color(img)
 99         #color = 1.5
100 
101         #image_colored = enh_col.enhance(color)
102 
103         #5.对比度
104 
105         enh_con = ImageEnhance.Contrast(img)
106 
107         contrast = 1.5
108 
109         image_contrasted = enh_con.enhance(contrast)
110 
111         #6.锐度
112 
113         #enh_sha = ImageEnhance.Sharpness(img)
114         #sharpness = 3.0
115 
116         #image_sharped = enh_sha.enhance(sharpness)
117 
118         #保存 
119 
120         img.save(saved_image_path + os.path.basename(x))
121 
122         img_flip_left_right.save(saved_image_path + "left_right_" + os.path.basename(x))
123 
124         img_flip_top_bottom.save(saved_image_path + "top_bottom_" + os.path.basename(x))
125 
126         #img_rotate_90.save(saved_image_path + "rotate_90_" + os.path.basename(x))
127 
128         #img_rotate_180.save(saved_image_path + "rotate_180_" + os.path.basename(x))
129 
130         #img_rotate_270.save(saved_image_path + "rotate_270_" + os.path.basename(x))
131 
132         #img_rotate_90_left.save(saved_image_path + "rotate_90_left_" + os.path.basename(x))
133 
134         #img_rotate_270_left.save(saved_image_path + "rotate_270_left_" + os.path.basename(x))
135 
136         #image_brightened.save(saved_image_path + "brighted_" + os.path.basename(x))
137 
138         #image_colored.save(saved_image_path + "colored_" + os.path.basename(x))
139 
140         image_contrasted.save(saved_image_path + "contrasted_" + os.path.basename(x))
141 
142         #image_sharped.save(saved_image_path + "sharped_" + os.path.basename(x))
143 
144         image_number += 1
145 
146         print("convert pictur" "es :%s size:%s mode:%s" % (image_number, img.size, img.mode))
147 
148  
