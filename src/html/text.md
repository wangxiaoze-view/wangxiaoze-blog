---
title: 文本格式化标签
index: false
icon: discover
tag:
  - text
category:
  - Html
---

::: info 文本格式化
在网页中，我们可以看到各种各样的字体，加粗，形式等等； 需要将行为文字设置粗体，斜体或者下划线效果，这时就需要用到html文本格式化标签， 使文字以特殊的形式显示；
:::

主要用于突出重要性， 比普通文本重要；

## 加粗

``` html
<!-- 加粗，一般情况使用strong 语义更强烈 -->
<strong>加粗</strong>
<b>加粗</b>
```

## 倾斜

``` html
<!-- 倾斜，一般情况使用em 语义更强烈 -->
<em>倾斜</em>
<i>倾斜</i>
```

## 删除

``` html
<!-- 删除，一般情况使del 语义更强烈 -->
<del>删除</del>
<s>删除</s>
```

## 下划线

``` html
<!-- 下划线，一般情况使ins 语义更强烈 -->
<ins>下划线</ins>
<u>下划线</u>
```

## a标签，也叫链接标签

什么是链接标签呢？
简单的说就是一个标签指向的某一个链接，以不同的方式打开并跳转该链接，就是链接标签；

### 语法格式

``` html
<a href="跳转的链接" target="打开的方式，窗口弹出模式">文本，图片等</a>
```

- [x] href:指定链接的url地址，必要的属性，当设置了href的地址，那么就有了超链接的功能
- [x] target: 指定链接页面的打开方式， 其中 `_self` 是默认值， `_blank`在新窗口中打开；
- [x] 同时不仅可以支持url地址。也可以指向本地的html文件，只是吧链接换成了本地的html文件而已

### 在超链接的基础上，了解锚点链接

什么锚点链接？

锚点链接就是，当页面中有标题提示文案的，点击标签之后会跳转到对应的文案位置，简单的说，页面中有新闻标题，而tab组件呢，点击新闻，则会跳转到新闻列表页面；

锚点链接需要的对应关系， 首先， 超链接的`href`是一个id类， 就是`# + 定义的属性id`, 如

``` html
<a href="#news">新闻</a>

<h2 id=news></h2>

<!-- 这里的 news 需要和 标题标签的id对应 -->

```

而空锚点就是没有指定的地址；当点击的时候，会看见浏览器地址会有一个`#`，后面什么都没有的就是空锚点

``` html

<!-- 类似于这样的： text_o.html#  -->
<a href="#" >空锚点</a>
```

::: normal-demo 文本格式演示

```html
<<h2>加粗</h2>
<strong>加粗效果: strong</strong>
<b>加粗效果: b</b>

<h2>斜体</h2>
<em>斜体效果: em</em>
<i>斜体效果: i</i>

<h2>删除</h2>
<del>删除效果: del</del>
<s>删除效果：s</s>

<h2>下划线</h2>
<ins>下划线效果：ins</ins>
<u> 下划线效果：u</u>


<h2>超链接</h2>
<a href="https://wwww.baidu.com" target="_blank">新窗口打开百度</a>
<a href="https://www.w3cschool.cn/" target="_self">自身窗口打开w3c</a>

<h2>超链接打开html文件地址</h2>
<a href="/html/img.html" target="_self">打开图片标签</a>


<h2>锚点链接</h2>

<h4>空锚点</h4>
<a href="#">空锚点</a>
```

:::

锚点链接网页可访问： [点击访问](http://www.wangxiaoze.wang/html/text_o_a.html)
::: normal-demo 锚点链接

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box-h {
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .color-1 {
            background-color: aquamarine;
        }
        .color-2 {
            background-color: blanchedalmond;
        }
        .color-3 {
            background-color: cadetblue;
        }

        h2 {
            font-size: 30px;
        }

        .a-ul {
            position: fixed;
            z-index: 99;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            border: 1px solid #eee;
            list-style: none;
            padding: 0;
            margin: 0;
            background-color: #fff;
        }

        .item-a {
            width: 80px ;
            text-align: center;
            padding: 8px 15px;
            border-bottom: 1px solid #eee;
        }
    </style>
</head>
<body>
    <h1>展示锚点链接</h1>

    <ul class="a-ul">
        <li class="item-a"><a href="#news">新闻</a></li>
        <li class="item-a"><a href="#ty">体育</a></li>
        <li class="item-a"><a href="#games">游戏</a></li>
    </ul>

    <div class="box-container">

        <div class="box-h color-1" id="news">
            <h2>新闻</h2>
        </div>
        <div class="box-h color-2" id="ty">
            <h2>体育</h2>
        </div>
        <div class="box-h color-3" id="games">
            <h2>游戏</h2>
        </div>
    </div>
</body>
</html>
```

:::
