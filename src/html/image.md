---
title: 图片标签
index: false
icon: discover
tag:
  - img
category:
  - Html
---

::: info 图片标签
在网页中，图片在网页中占着重要的角色，而图像是由`<img/>`标签组成的，但是图片是没有闭合标签的；
:::

## 语法

``` html
<img sec="你的图片地址" alt="提示文案" />
```

## src

src是`source`的缩写， 代表着资源， 原属性的值是图像的url地址；

而`src`的地址，可以是本地地址，也可以是网络地址， 本地地址就是你计算机中的图片地址。如：`d:/myImage/car.png`， 而网络地址就是`https://www.xxx.com/image/car.png`等；

## alt

alt属性用来为图像定义一串预备的可替换的文本;

使用的场景很简单，例如，我有一个网络地址，但是这个网络地址的图片是没有的，那么这时就可以使用alt属性，来展示这张图片的含义；

## width， height，border

这个就很好理解了， 就是改变图片的宽度和高度， 给图片加一个边框，但是这样的边框是 `10px`的黑色边框， 如果想要自定义颜色， 可以使用css样式去修改

``` html
<img src="XXX" alt="网络图片" width="200" height="100" border="10" >
```

## align 对齐方式

默认情况下，图像在页面中将显示为左侧对齐，在`<img>`标签中您可以使用align属性将设置图像的对齐方式：center(居中)或right(右侧)。

``` html
<img src="XXX" alt="网络图片" width="200" height="100" border="10"  align="center">
```

::: normal-demo Demo 演示

```html
<h2>可访问的网络图片，宽度200 高度100 边框10</h2>
<img src="https://pic.3gbizhi.com/2019/1004/20191004022220800.jpeg" alt="网络图片" width="200" height="100" border="10">


<h2>不可访问的网络图片，alt为：网络图片，加载失败</h2>
<img src="https://pic.3gbizhi.com/2019/1004/20191004022220800-111.jpeg" alt="网络图片， 加载失败" width="200" height="100"
    border="10">


<h2>align为right</h2>
<img src="https://pic.3gbizhi.com/2019/1004/20191004022220800.jpeg" alt="网络图片" width="200" height="100"
    border="10" align="right">
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("非常强大");
});
```

:::
