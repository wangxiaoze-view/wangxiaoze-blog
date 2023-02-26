---
title: 背景
index: false
icon: flower
isOriginal: true
tag: 
  - background
category:
  - Css
---

::: info 背景相关点后期会以demo展示
:::

## backface-visibility

属性定义当元素不面向屏幕时是否可见， 如果在旋转元素不希望看到其背面时，该属性很有用。

- [x] visible: 背面是可见的
- [X] hidden: 背面是不可见的

``` css
backface-visibility: visible | hidden;
```

可以点击右上角的`codepen`查看

::: normal-demo 样式演示

```html
<style>
  div {
    width: 100px;
    text-align: center;
    transform: rotateY(180deg);
  }
  .div1 {
    background-color: #ff0000;
    backface-visibility: hidden;
    -webkit-backface-visibility:hidden;
    -moz-backface-visibility:hidden;
    -ms-backface-visibility:hidden;
  }

  .div2 {
    background-color: blue;
    backface-visibility: visible;
    -webkit-backface-visibility:visible;
    -moz-backface-visibility:visible;
    -ms-backface-visibility:visible;
  }
</style>
<div class="div1">第一个div</div>
<div class="div2">第二个div</div>
```

:::

## background

背景颜色 ｜ 背景图片 ｜ 背景位置 ｜ 图片大小 ｜ 重复背景图片 ｜ 定位区域 ｜ 绘画区域 ｜ 是否固定 ｜ 指定使用的一个或多个背景图片

``` css
background:bg-color bg-image position/ bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
```

下面会对背景展开说明；

## backgrond-color

- color， 设置背景的颜色
- transplant：背景透明

## background-image

- none: 无图片背景
- url(xx): 使用绝对或者相对地址指定背景图片；网络图片也是可以的

## background-repeat

- inherit: 父级继承
- no-repeat: 是否重复背景，不重复
- repeat：水平和垂直方向上重复显示背景图片
- repeat-x: x轴方向显示重复背景图片
- repeat-y: y轴方向显示重复背景图片

## background-attachment

> 属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动

- scroll: 当页面滚动，背景图片跟着页面一起看 「此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。」
- fixed：将背景图片固定在页面的可见区域; 即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
- local：此关键属性值表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。

## background-position

- length: 具体的单位，cm,mm,px
- percentage: 根据页面元素框的宽度和高度的百分比设置图片
- top：设置背景图片顶部居中显示
- center：设置背景图片居中显示
- bottom：设置背景图片底部居中显示
- left：设置背景图片左部居中显示
- right：设置背景图片右部居中显示

# **css3 新特性**

## backgroud-clip

> 指定背景的显示范围， 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面

- border-box: 从border区域（不含border）开始向外裁剪背景
- padding-box：从padding区域（不含padding）开始向外裁剪背景
- content-box：从content区域开始向外裁剪
- text: 背景被裁剪成文字的前景色。

## background-origin

> 规定了指定背景图片background-image 属性的原点位置的背景相对区域。

- border-box: 从border区域（含border）开始显示背景
- padding-box: 从padding区域（含padding）开始显示背景
- content-box：从content区域开始显示背景

更好的理解： [background-origin](https://www.w3school.com.cn/tiy/c.asp?f=css_background-origin)

## backgrouund-size

背景图片的尺寸

- length： 长度值
- percentage: 0% - 100%
- auto: 原始尺寸
- cover：等比例完全覆盖容器， 可能会超出容器
- contain：背景图片等比例放倒宽度高度与容器的宽度和高度相等
