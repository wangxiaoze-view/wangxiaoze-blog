---
title: 文本
index: false
icon: flower
isOriginal: true
tag: 
  - text
category:
  - Css
---

## text-align

左对齐，右对齐，居中，俩端，继承父元元素

``` css
text-align: left | right | center | justify | inherit;
```

::: normal-demo 样式演示

```html
<p style="text-align: right;">右对齐</p>
<p style="text-align: center;">居中</p>
<p style="text-align: left;">左对齐</p>
<p style="text-align: justify;">俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐俩端对齐</p>

```

:::

## text-decoration

默认，下划线，上划线，删除线，继承父元素

``` css
text-decoration: none | underline | overline | line-through | inherit;
```

::: normal-demo 样式演示

```html
<p style="text-decoration: underline;">下划线</p>
<p style="text-decoration: overline;">上划线</p>
<p style="text-decoration: line-through;">删除线</p>

```

:::

## text-indent

固定的缩进, 基于父元素宽度的百分比的缩进,继承父元元素

``` css
text-decoration: length | % | inherit;
```

::: normal-demo 样式演示

```html
<p style="text-indent: 20px;">缩紧20px</p>
<p style="text-indent: 30%;">基于父元素，锁进30%</p>
```

:::

## text-overflow

修剪文本, 省略号, 自定义字符串「火狐才显示」

``` css
text-overflow: clip | ellipsis | string;
```

::: normal-demo 样式演示

```html
<style>
    .test {
        white-space:nowrap;
        overflow:hidden;
        width: 80px;
        border: 1px solid #ff0000;
    }
</style>
<p style="text-overflow: clip;" class="test">修剪文本修剪文本修剪文本修剪文本</p>
<p style="text-overflow: ellipsis;" class="test">省略号省略号省略号省略号省略号</p>
```

:::

## text-shadow

水平阴影的位置, 垂直阴影的位置, 模糊的距离, 颜色

``` css
text-shadow: h-shadow v-shadow blur color;
```

::: normal-demo 样式演示

```html
<p style="text-shadow: 20px 24px 14px #ff0000;">水平20px，垂直24px, 14px模糊，红色</p>
```

:::

## text-transform

默认 ｜ 每个单词以大写字母开头 ｜ 仅有大写字母，定义无大写字母 ｜ 仅有小写字母 ｜ 继承父元元素

``` css
text-transform: none | capitalize | uppercase |  lowercase ｜ inherit;
```

::: normal-demo 样式演示

```html
<p style="text-transform: capitalize;">『单词以大写字母开头』my name is wangxiaoze!</p>
<p style="text-transform: uppercase">『大写』my name is wangxiaoze!</p>
<p style="text-transform: lowercase">『小写』my name is wangxiaoze!</p>
```

:::

## word-break

css属性`word-break`指定了怎样在单词内断行

- normal：默认规则
- break-all: 对于 non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。「允许在单词内换行」
- keep-all: CJK 文本不断行。Non-CJK 文本表现同 normal。「只能在半角空格或连字符处换行。」
- break-word: MDN上显示已废弃

``` css
word-wrap: normal | breal-all | keep-all | break-word「已废弃」
```
