---
title: 响应式网页
index: false
icon: flower
isOriginal: true
tag: 
  - media
category:
  - Css
---

::: info 响应式网页的概念
响应式网页设计是流行的一种网页设计形式，主要特色是页面布局能根据不同设备「平板电脑，台式电脑，手机」让内容适应性的展示，从而
让用户在不同设备上能够友好的浏览网页内容；
:::

## 响应式网页的优缺点

### 优点

- 对用户友好，几乎可以适应所有的设备屏幕
- 后台数据库统一，在pc编辑了数据更新之后，能在不同设备的内容都会统一；
- 方便维护，维护成本小

### 缺点

- 增加加载时间，增加许多设备特性的代码，如设备宽度，分辨率和设备类型；同时也增加了读取代码的加载时间
- 开发时间，考虑的因素比较多，兼容也会多，所有在增大了开发时间

## 技术原理

- meta标签，对网站发展非常重要，用于鉴别作者，设定页面格式，内容提要，关键字；
- 媒体查询，就是不同设备对应的不同的样式
- 三方框架

## 像素与屏幕分辨率

### 像素

像素又叫图像元素，表示图像中的最小单位；像素是尺寸单位，不是画质单位

对一张数字图片放大，可以看到很多色彩是有小方点组成；

### 屏幕分辨率

屏幕分辨率就是屏幕上显示的像素个数，以水平分辨率和垂直分辨率老衡量大小；

分辨率越高，展示的效果越精细和细腻；

## 设备像素和css像素

### 设备像素

设备像素是物理概念，值得是设备中使用的物理像素；例如：ihone5的屏幕分辨率为64px*1136px；

衡量一个物理设备的屏幕分辨率高低使用ppi；即像素密度；表示每英尺所拥有的像素数目；

ppi数值越高，显示图片的密度就越高；

### css像素

css像素指的是使用的逻辑像素； 在css规范中，长度单位可以分为俩类，绝对单位以及相对单位；

px是一个相对单位，相对的是设备像素；

## 视口

视口Viewport和窗口window的相对的概念；适口是与设备相关的一个矩形区域，左边单位与设备相关；

视口属性以及媒体查询；可查阅w3c；

### 常用的布局类型

- 单列布局
- 均分多列布局
- 不均分多列布局
- 单一固定布局
- 响应式固定布局
- 响应式弹性布局

### 响应式网页布局设计与实现

- 模块内容不变，页面中整体模块内容不发生变化，通过调整模块宽度，可以将模块内容从挤压调整至拉伸，从平铺到换行
- 模块内容改变，通过媒体查询，检测当前设备的宽度，动态隐藏或显示模块内容，增加或减少模块的数量；