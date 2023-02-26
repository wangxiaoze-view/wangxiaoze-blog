---
title: DIV 和 span 盒子
index: false
icon: discover
tag:
  - box
category:
  - Html
---

::: info 文本格式化
`div`和`span`没有特殊的语义含义的， 就是代表着一个盒子，用来装载内容的；
:::

主要用于突出重要性， 比普通文本重要；

## div

`div`用来布局，但是一行只能一个吗就相当于最大的盒子；

``` html
<div>我是一个块级标签，div, 用来装载内容</div>
```

## span

``` html
<span>span 行级标签，用于修饰文本内容</span>
```

可以参考以下效果：

<iframe
  :src="$withBase('/html/div_span.html')"
  width="100%"
  height="240"
  frameborder="0"
  scrolling="yes"
  leftmargin="0"
  topmargin="0"
/>
