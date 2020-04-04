# 1.采用自定义获取增强数据类，此Dataset类中重新定义了对数据进行数据增强的多种方式，不仅限于pytorch中自带的增强方式。
# 首先附上自定义的数据增强的函数代码：

# 方式一，以重新定义重载方法类的方式定义多种增强方式，在dataset类中的get_item方法中的compose中加入自定义的方法，即可调用。
  1 # 数据增强的多种方式，使用自定义的方法。调用只需在dataloader.py文件中的get_item函数中调用类自身参数
  2 # transforms，transforms中集合了compose，compose中列出详细所使用的增强方式。
  3 from __future__ import division
  4 import cv2
  5 import numpy as np
  6 from numpy import random
  7 import math
  8 from sklearn.utils import shuffle
  9 # 常用的增强方式几乎都在这里，只需在compose中列出类名即可
 10 __all__ = ['Compose','RandomHflip', 'RandomUpperCrop', 'Resize', 'UpperCrop', 'RandomBottomCrop',
 11             "RandomErasing",'BottomCrop', 'Normalize', 'RandomSwapChannels', 'RandomRotate', 
 12             'RandomHShift',"CenterCrop","RandomVflip",'ExpandBorder', 'RandomResizedCrop',
 13             'RandomDownCrop', 'DownCrop', 'ResizedCrop',"FixRandomRotate"]
 14     # 组合
 15     # “随机翻转”，“随机顶部切割”，“调整大小”，“上切割”，“随机底部切割”、
 16     # “随机擦除”，“底部切割”，“正则化”，“随机交换频道”，“随机旋转”，
 17     # “随机HShift”，“中央切割”，“随机Vflip”，“扩展边界”，“随机调整切割”，
 18     # “随机下降”，“下降切割”， “调整切割”，“固定随机化”。
 19 
 20 
 21 # 每个增强方式类需要调用普通方法描述如下：
 22 def rotate_nobound(image, angle, center=None, scale=1.):
 23     (h, w) = image.shape[:2]
 24 
 25 
 26     # if the center is None, initialize it as the center of
 27     # the image
 28     if center is None:
 29         center = (w // 2, h // 2)
 30 
 31     # perform the rotation
 32     M = cv2.getRotationMatrix2D(center, angle, scale)
 33     rotated = cv2.warpAffine(image, M, (w, h))
 34 
 35     return rotated
 36 
 37 def scale_down(src_size, size):
 38     w, h = size
 39     sw, sh = src_size
 40     if sh < h:
 41         w, h = float(w * sh) / h, sh
 42     if sw < w:
 43         w, h = sw, float(h * sw) / w
 44     return int(w), int(h)
 45 
 46 
 47 def fixed_crop(src, x0, y0, w, h, size=None):
 48     out = src[y0:y0 + h, x0:x0 + w]
 49     if size is not None and (w, h) != size:
 50         out = cv2.resize(out, (size[0], size[1]), interpolation=cv2.INTER_CUBIC)
 51     return out
 52 
 53 # 固定随机旋转
 54 class FixRandomRotate(object):
 55     def __init__(self, angles=[0,90,180,270], bound=False):
 56         self.angles = angles
 57         self.bound = bound
 58 
 59     def __call__(self,img):
 60         do_rotate = random.randint(0, 4)
 61         angle=self.angles[do_rotate]
 62         if self.bound:
 63             img = rotate_bound(img, angle)
 64         else:
 65             img = rotate_nobound(img, angle)
 66         return img
 67 
 68 def center_crop(src, size):
 69     h, w = src.shape[0:2]
 70     new_w, new_h = scale_down((w, h), size)
 71 
 72     x0 = int((w - new_w) / 2)
 73     y0 = int((h - new_h) / 2)
 74 
 75     out = fixed_crop(src, x0, y0, new_w, new_h, size)
 76     return out
 77 
 78 
 79 def bottom_crop(src, size):
 80     h, w = src.shape[0:2]
 81     new_w, new_h = scale_down((w, h), size)
 82 
 83     x0 = int((w - new_w) / 2)
 84     y0 = int((h - new_h) * 0.75)
 85 
 86     out = fixed_crop(src, x0, y0, new_w, new_h, size)
 87     return out
 88 
 89 def rotate_bound(image, angle):
 90     # grab the dimensions of the image and then determine the
 91     # center
 92     h, w = image.shape[:2]
 93 
 94     (cX, cY) = (w // 2, h // 2)
 95 
 96     M = cv2.getRotationMatrix2D((cX, cY), angle, 1.0)
 97     cos = np.abs(M[0, 0])
 98     sin = np.abs(M[0, 1])
 99 
100     # compute the new bounding dimensions of the image
101     nW = int((h * sin) + (w * cos))
102     nH = int((h * cos) + (w * sin))
103 
104     # adjust the rotation matrix to take into account translation
105     M[0, 2] += (nW / 2) - cX
106     M[1, 2] += (nH / 2) - cY
107 
108     rotated = cv2.warpAffine(image, M, (nW, nH))
109 
110     return rotated
111 
112 
113 
114 # 常用增强方式，以类的方式体现：
115 # 将多个transform组合起来使用
116 crop切割  filp旋转
117 class Compose(object):
118     def __init__(self, transforms):
119         self.transforms = transforms
120     def __call__(self, img):
121         for t in self.transforms:
122             img = t(img)
123         return img
124 class RandomRotate(object):
125     def __init__(self, angles, bound=False):
126         self.angles = angles
127         self.bound = bound
128 
129     def __call__(self,img):
130         do_rotate = random.randint(0, 2)
131         if do_rotate:
132             angle = np.random.uniform(self.angles[0], self.angles[1])
133             if self.bound:
134                 img = rotate_bound(img, angle)
135             else:
136                 img = rotate_nobound(img, angle)
137         return img
138 class RandomBrightness(object):
139     def __init__(self, delta=10):
140         assert delta >= 0
141         assert delta <= 255
142         self.delta = delta
143 
144     def __call__(self, image):
145         if random.randint(2):
146             delta = random.uniform(-self.delta, self.delta)
147             image = (image + delta).clip(0.0, 255.0)
148             # print('RandomBrightness,delta ',delta)
149         return image
150 
151 
152 class RandomContrast(object):
153     def __init__(self, lower=0.9, upper=1.05):
154         self.lower = lower
155         self.upper = upper
156         assert self.upper >= self.lower, "contrast upper must be >= lower."
157         assert self.lower >= 0, "contrast lower must be non-negative."
158 
159     # expects float image
160     def __call__(self, image):
161         if random.randint(2):
162             alpha = random.uniform(self.lower, self.upper)
163             # print('contrast:', alpha)
164             image = (image * alpha).clip(0.0,255.0)
165         return image
166 
167 
168 class RandomSaturation(object):
169     def __init__(self, lower=0.8, upper=1.2):
170         self.lower = lower
171         self.upper = upper
172         assert self.upper >= self.lower, "contrast upper must be >= lower."
173         assert self.lower >= 0, "contrast lower must be non-negative."
174 
175     def __call__(self, image):
176         if random.randint(2):
177             alpha = random.uniform(self.lower, self.upper)
178             image[:, :, 1] *= alpha
179             # print('RandomSaturation,alpha',alpha)
180         return image
181 
182 
183 class RandomHue(object):
184     def __init__(self, delta=18.0):
185         assert delta >= 0.0 and delta <= 360.0
186         self.delta = delta
187 
188     def __call__(self, image):
189         if random.randint(2):
190             alpha = random.uniform(-self.delta, self.delta)
191             image[:, :, 0] += alpha
192             image[:, :, 0][image[:, :, 0] > 360.0] -= 360.0
193             image[:, :, 0][image[:, :, 0] < 0.0] += 360.0
194             # print('RandomHue,alpha:', alpha)
195         return image
196 
197 
198 class ConvertColor(object):
199     def __init__(self, current='BGR', transform='HSV'):
200         self.transform = transform
201         self.current = current
202 
203     def __call__(self, image):
204         if self.current == 'BGR' and self.transform == 'HSV':
205             image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
206         elif self.current == 'HSV' and self.transform == 'BGR':
207             image = cv2.cvtColor(image, cv2.COLOR_HSV2BGR)
208         else:
209             raise NotImplementedError
210         return image
211 
212 class RandomSwapChannels(object):
213     def __call__(self, img):
214         if np.random.randint(2):
215             order = np.random.permutation(3)
216             return img[:,:,order]
217         return img
218 
219 class RandomCrop(object):
220     def __init__(self, size):
221         self.size = size
222     def __call__(self, image):
223         h, w, _ = image.shape
224         new_w, new_h = scale_down((w, h), self.size)
225 
226         if w == new_w:
227             x0 = 0
228         else:
229             x0 = random.randint(0, w - new_w)
230 
231         if h == new_h:
232             y0 = 0
233         else:
234             y0 = random.randint(0, h - new_h)
235 
236         out = fixed_crop(image, x0, y0, new_w, new_h, self.size)
237         return out
238 
239 
240 
241 class RandomResizedCrop(object):
242     def __init__(self, size,scale=(0.49, 1.0), ratio=(1., 1.)):
243         self.size = size
244         self.scale = scale
245         self.ratio = ratio
246 
247     def __call__(self,img):
248         if random.random() < 0.2:
249             return cv2.resize(img,self.size)
250         h, w, _ = img.shape
251         area = h * w
252         d=1
253         for attempt in range(10):
254             target_area = random.uniform(self.scale[0], self.scale[1]) * area
255             aspect_ratio = random.uniform(self.ratio[0], self.ratio[1])
256 
257 
258             new_w = int(round(math.sqrt(target_area * aspect_ratio)))
259             new_h = int(round(math.sqrt(target_area / aspect_ratio)))
260 
261             if random.random() < 0.5:
262                 new_h, new_w = new_w, new_h
263 
264             if new_w < w and new_h < h:
265                 x0 = random.randint(0, w - new_w)
266                 y0 = (random.randint(0, h - new_h))//d
267                 out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
268 
269                 return out
270 
271         # Fallback
272         return center_crop(img, self.size)
273 
274 
275 class DownCrop():
276     def __init__(self, size,  select, scale=(0.36,0.81)):
277         self.size = size
278         self.scale = scale
279         self.select = select
280 
281     def __call__(self,img, attr_idx):
282         if attr_idx not in self.select:
283             return img, attr_idx
284         if attr_idx == 0:
285             self.scale=(0.64,1.0)
286         h, w, _ = img.shape
287         area = h * w
288 
289         s = (self.scale[0]+self.scale[1])/2.0
290 
291         target_area = s * area
292 
293         new_w = int(round(math.sqrt(target_area)))
294         new_h = int(round(math.sqrt(target_area)))
295 
296         if new_w < w and new_h < h:
297             dw = w-new_w
298             x0 = int(0.5*dw)
299             y0 = h-new_h
300             out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
301             return out, attr_idx
302 
303         # Fallback
304         return center_crop(img, self.size), attr_idx
305 
306 
307 class ResizedCrop(object):
308     def __init__(self, size, select,scale=(0.64, 1.0), ratio=(3. / 4., 4. / 3.)):
309         self.size = size
310         self.scale = scale
311         self.ratio = ratio
312         self.select = select
313 
314     def __call__(self,img, attr_idx):
315         if attr_idx not in self.select:
316             return img, attr_idx
317         h, w, _ = img.shape
318         area = h * w
319         d=1
320         if attr_idx == 2:
321             self.scale=(0.36,0.81)
322             d=2
323         if attr_idx == 0:
324             self.scale=(0.81,1.0)
325 
326         target_area = (self.scale[0]+self.scale[1])/2.0 * area
327         # aspect_ratio = random.uniform(self.ratio[0], self.ratio[1])
328 
329 
330         new_w = int(round(math.sqrt(target_area)))
331         new_h = int(round(math.sqrt(target_area)))
332 
333         # if random.random() < 0.5:
334         #     new_h, new_w = new_w, new_h
335 
336         if new_w < w and new_h < h:
337             x0 =  (w - new_w)//2
338             y0 = (h - new_h)//d//2
339             out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
340             # cv2.imshow('{}_img'.format(idx2attr_map[attr_idx]), img)
341             # cv2.imshow('{}_crop'.format(idx2attr_map[attr_idx]), out)
342             #
343             # cv2.waitKey(0)
344             return out, attr_idx
345 
346         # Fallback
347         return center_crop(img, self.size), attr_idx
348 
349 class RandomHflip(object):
350     def __call__(self, image):
351         if random.randint(2):
352             return cv2.flip(image, 1)
353         else:
354             return image
355 class RandomVflip(object):
356     def __call__(self, image):
357         if random.randint(2):
358             return cv2.flip(image, 0)
359         else:
360             return image
361 
362 
363 class Hflip(object):
364     def __init__(self,doHflip):
365         self.doHflip = doHflip
366 
367     def __call__(self, image):
368         if self.doHflip:
369             return cv2.flip(image, 1)
370         else:
371             return image
372 
373 
374 class CenterCrop(object):
375     def __init__(self, size):
376         self.size = size
377 
378     def __call__(self, image):
379         return center_crop(image, self.size)
380 
381 class UpperCrop():
382     def __init__(self, size, scale=(0.09, 0.64)):
383         self.size = size
384         self.scale = scale
385 
386     def __call__(self,img):
387         h, w, _ = img.shape
388         area = h * w
389 
390         s = (self.scale[0]+self.scale[1])/2.0
391 
392         target_area = s * area
393 
394         new_w = int(round(math.sqrt(target_area)))
395         new_h = int(round(math.sqrt(target_area)))
396 
397         if new_w < w and new_h < h:
398             dw = w-new_w
399             x0 = int(0.5*dw)
400             y0 = 0
401             out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
402             return out
403 
404         # Fallback
405         return center_crop(img, self.size)
406 
407 
408 
409 class RandomUpperCrop(object):
410     def __init__(self, size, select, scale=(0.09, 0.64), ratio=(3. / 4., 4. / 3.)):
411         self.size = size
412         self.scale = scale
413         self.ratio = ratio
414         self.select = select
415 
416     def __call__(self,img, attr_idx):
417         if random.random() < 0.2:
418             return img, attr_idx
419         if attr_idx not in self.select:
420             return img, attr_idx
421 
422         h, w, _ = img.shape
423         area = h * w
424         for attempt in range(10):
425             s = random.uniform(self.scale[0], self.scale[1])
426             d = 0.1 + (0.3 - 0.1) / (self.scale[1] - self.scale[0]) * (s - self.scale[0])
427             target_area = s * area
428             aspect_ratio = random.uniform(self.ratio[0], self.ratio[1])
429             new_w = int(round(math.sqrt(target_area * aspect_ratio)))
430             new_h = int(round(math.sqrt(target_area / aspect_ratio)))
431 
432 
433             # new_w = int(round(math.sqrt(target_area)))
434             # new_h = int(round(math.sqrt(target_area)))
435 
436             if new_w < w and new_h < h:
437                 dw = w-new_w
438                 x0 = random.randint(int((0.5-d)*dw), int((0.5+d)*dw)+1)
439                 y0 = (random.randint(0, h - new_h))//10
440                 out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
441                 return out, attr_idx
442 
443         # Fallback
444         return center_crop(img, self.size), attr_idx
445 class RandomDownCrop(object):
446     def __init__(self, size, select, scale=(0.36, 0.81), ratio=(3. / 4., 4. / 3.)):
447         self.size = size
448         self.scale = scale
449         self.ratio = ratio
450         self.select = select
451 
452     def __call__(self,img, attr_idx):
453         if random.random() < 0.2:
454             return img, attr_idx
455         if attr_idx not in self.select:
456             return img, attr_idx
457         if attr_idx == 0:
458             self.scale=(0.64,1.0)
459 
460         h, w, _ = img.shape
461         area = h * w
462         for attempt in range(10):
463             s = random.uniform(self.scale[0], self.scale[1])
464             d = 0.1 + (0.3 - 0.1) / (self.scale[1] - self.scale[0]) * (s - self.scale[0])
465             target_area = s * area
466             aspect_ratio = random.uniform(self.ratio[0], self.ratio[1])
467             new_w = int(round(math.sqrt(target_area * aspect_ratio)))
468             new_h = int(round(math.sqrt(target_area / aspect_ratio)))
469             #
470             # new_w = int(round(math.sqrt(target_area)))
471             # new_h = int(round(math.sqrt(target_area)))
472 
473             if new_w < w and new_h < h:
474                 dw = w-new_w
475                 x0 = random.randint(int((0.5-d)*dw), int((0.5+d)*dw)+1)
476                 y0 = (random.randint((h - new_h)*9//10, h - new_h))
477                 out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
478 
479                 # cv2.imshow('{}_img'.format(idx2attr_map[attr_idx]), img)
480                 # cv2.imshow('{}_crop'.format(idx2attr_map[attr_idx]), out)
481                 #
482                 # cv2.waitKey(0)
483 
484                 return out, attr_idx
485 
486         # Fallback
487         return center_crop(img, self.size), attr_idx
488 
489 class RandomHShift(object):
490     def __init__(self, select, scale=(0.0, 0.2)):
491         self.scale = scale
492         self.select = select
493 
494     def __call__(self,img, attr_idx):
495         if attr_idx not in self.select:
496             return img, attr_idx
497         do_shift_crop = random.randint(0, 2)
498         if do_shift_crop:
499             h, w, _ = img.shape
500             min_shift = int(w*self.scale[0])
501             max_shift = int(w*self.scale[1])
502             shift_idx = random.randint(min_shift, max_shift)
503             direction = random.randint(0,2)
504             if direction:
505                 right_part = img[:, -shift_idx:, :]
506                 left_part = img[:, :-shift_idx, :]
507             else:
508                 left_part = img[:, :shift_idx, :]
509                 right_part = img[:, shift_idx:, :]
510             img = np.concatenate((right_part, left_part), axis=1)
511 
512         # Fallback
513         return img, attr_idx
514 
515 
516 class RandomBottomCrop(object):
517     def __init__(self, size, select, scale=(0.4, 0.8)):
518         self.size = size
519         self.scale = scale
520         self.select = select
521 
522     def __call__(self,img, attr_idx):
523         if attr_idx not in self.select:
524             return img, attr_idx
525 
526         h, w, _ = img.shape
527         area = h * w
528         for attempt in range(10):
529             s = random.uniform(self.scale[0], self.scale[1])
530             d = 0.25 + (0.45 - 0.25) / (self.scale[1] - self.scale[0]) * (s - self.scale[0])
531             target_area = s * area
532 
533             new_w = int(round(math.sqrt(target_area)))
534             new_h = int(round(math.sqrt(target_area)))
535 
536             if new_w < w and new_h < h:
537                 dw = w-new_w
538                 dh = h - new_h
539                 x0 = random.randint(int((0.5-d)*dw), min(int((0.5+d)*dw)+1,dw))
540                 y0 = (random.randint(max(0,int(0.8*dh)-1), dh))
541                 out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
542                 return out, attr_idx
543 
544         # Fallback
545         return bottom_crop(img, self.size), attr_idx
546 
547 
548 class BottomCrop():
549     def __init__(self, size,  select, scale=(0.4, 0.8)):
550         self.size = size
551         self.scale = scale
552         self.select = select
553 
554     def __call__(self,img, attr_idx):
555         if attr_idx not in self.select:
556             return img, attr_idx
557 
558         h, w, _ = img.shape
559         area = h * w
560 
561         s = (self.scale[0]+self.scale[1])/3.*2.
562 
563         target_area = s * area
564 
565         new_w = int(round(math.sqrt(target_area)))
566         new_h = int(round(math.sqrt(target_area)))
567 
568         if new_w < w and new_h < h:
569             dw = w-new_w
570             dh = h-new_h
571             x0 = int(0.5*dw)
572             y0 = int(0.9*dh)
573             out = fixed_crop(img, x0, y0, new_w, new_h, self.size)
574             return out, attr_idx
575 
576         # Fallback
577         return bottom_crop(img, self.size), attr_idx
578 
579 
580 
581 class Resize(object):
582     def __init__(self, size, inter=cv2.INTER_CUBIC):
583         self.size = size
584         self.inter = inter
585 
586     def __call__(self, image):
587         return cv2.resize(image, (self.size[0], self.size[0]), interpolation=self.inter)
588 
589 class ExpandBorder(object):
590     def __init__(self,  mode='constant', value=255, size=(336,336), resize=False):
591         self.mode = mode
592         self.value = value
593         self.resize = resize
594         self.size = size
595 
596     def __call__(self, image):
597         h, w, _ = image.shape
598         if h > w:
599             pad1 = (h-w)//2
600             pad2 = h - w - pad1
601             if self.mode == 'constant':
602                 image = np.pad(image, ((0, 0), (pad1, pad2), (0, 0)),
603                                self.mode, constant_values=self.value)
604             else:
605                 image = np.pad(image,((0,0), (pad1, pad2),(0,0)), self.mode)
606         elif h < w:
607             pad1 = (w-h)//2
608             pad2 = w-h - pad1
609             if self.mode == 'constant':
610                 image = np.pad(image, ((pad1, pad2),(0, 0), (0, 0)),
611                                self.mode,constant_values=self.value)
612             else:
613                 image = np.pad(image, ((pad1, pad2), (0, 0), (0, 0)),self.mode)
614         if self.resize:
615             image = cv2.resize(image, (self.size[0], self.size[0]),interpolation=cv2.INTER_LINEAR)
616         return image
617 class AstypeToInt():
618     def __call__(self, image, attr_idx):
619         return image.clip(0,255.0).astype(np.uint8), attr_idx
620 
621 class AstypeToFloat():
622     def __call__(self, image, attr_idx):
623         return image.astype(np.float32), attr_idx
624 
625 import matplotlib.pyplot as plt
626 class Normalize(object):
627     def __init__(self,mean, std):
628         '''
629         :param mean: RGB order
630         :param std:  RGB order
631         '''
632         self.mean = np.array(mean).reshape(3,1,1)
633         self.std = np.array(std).reshape(3,1,1)
634     def __call__(self, image):
635         '''
636         :param image:  (H,W,3)  RGB
637         :return:
638         '''
639         # plt.figure(1)
640         # plt.imshow(image)
641         # plt.show()
642         return (image.transpose((2, 0, 1)) / 255. - self.mean) / self.std
643 
644 class RandomErasing(object):
645     def __init__(self, select,EPSILON=0.5,sl=0.02, sh=0.09, r1=0.3, mean=[0.485, 0.456, 0.406]):
646         self.EPSILON = EPSILON
647         self.mean = mean
648         self.sl = sl
649         self.sh = sh
650         self.r1 = r1
651         self.select = select
652 
653     def __call__(self, img,attr_idx):
654         if attr_idx not in self.select:
655             return img,attr_idx
656 
657         if random.uniform(0, 1) > self.EPSILON:
658             return img,attr_idx
659 
660         for attempt in range(100):
661             area = img.shape[1] * img.shape[2]
662 
663             target_area = random.uniform(self.sl, self.sh) * area
664             aspect_ratio = random.uniform(self.r1, 1 / self.r1)
665 
666             h = int(round(math.sqrt(target_area * aspect_ratio)))
667             w = int(round(math.sqrt(target_area / aspect_ratio)))
668 
669             if w <= img.shape[2] and h <= img.shape[1]:
670                 x1 = random.randint(0, img.shape[1] - h)
671                 y1 = random.randint(0, img.shape[2] - w)
672                 if img.shape[0] == 3:
673                     # img[0, x1:x1+h, y1:y1+w] = random.uniform(0, 1)
674                     # img[1, x1:x1+h, y1:y1+w] = random.uniform(0, 1)
675                     # img[2, x1:x1+h, y1:y1+w] = random.uniform(0, 1)
676                     img[0, x1:x1 + h, y1:y1 + w] = self.mean[0]
677                     img[1, x1:x1 + h, y1:y1 + w] = self.mean[1]
678                     img[2, x1:x1 + h, y1:y1 + w] = self.mean[2]
679                     # img[:, x1:x1+h, y1:y1+w] = torch.from_numpy(np.random.rand(3, h, w))
680                 else:
681                     img[0, x1:x1 + h, y1:y1 + w] = self.mean[1]
682                     # img[0, x1:x1+h, y1:y1+w] = torch.from_numpy(np.random.rand(1, h, w))
683                 return img,attr_idx
684 
685         return img,attr_idx
686 
687 if __name__ == '__main__':
688     import matplotlib.pyplot as plt
689 
690 
691     class FSAug(object):
692         def __init__(self):
693             self.augment = Compose([
694                 AstypeToFloat(),
695                 # RandomHShift(scale=(0.,0.2),select=range(8)),
696                 # RandomRotate(angles=(-20., 20.), bound=True),
697                 ExpandBorder(select=range(8), mode='symmetric'),# symmetric
698                 # Resize(size=(336, 336), select=[ 2, 7]),
699                 AstypeToInt()
700             ])
701 
702         def __call__(self, spct,attr_idx):
703             return self.augment(spct,attr_idx)
704 
705 
706     trans = FSAug()
707 
708     img_path = '/media/gserver/data/FashionAI/round2/train/Images/coat_length_labels/0b6b4a2146fc8616a19fcf2026d61d50.jpg'
709     img = cv2.cvtColor(cv2.imread(img_path),cv2.COLOR_BGR2RGB)
710     img_trans,_ = trans(img,5)
711     # img_trans2,_ = trans(img,6)
712 
713     plt.figure()
714     plt.subplot(221)
715     plt.imshow(img)
716 
717     plt.subplot(222)
718     plt.imshow(img_trans)
719 
720     # plt.subplot(223)
721     # plt.imshow(img_trans2)
722     # plt.imshow(img_trans2)
723     plt.show()
