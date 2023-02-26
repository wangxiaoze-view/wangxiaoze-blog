---
title: 简介
index: false
icon: flower
isOriginal: true
tag: 
  - 简介
category:
  - Css
---

::: info css出现的原因
`css`是层叠样式表，出现的原因是很简单，在用html布局之后， 会发现页面显得单调丑陋，整体单一，没有一点新鲜性，这是就知道了css的重要性了；

而html就是为了构建网页页面的结构的， 而`css`就好比是不同的衣服，装饰起来大气，漂亮
:::

css的样式语法很简单，格式为：`修改样式的元素 + 大括号 ， 大括号里面写样式`

``` css
div {
    color: #ff0000;
}
```

::: normal-demo 样式演示

```html
<style>
div {
    font-size: 20px;
    color: #ff0000;
}
</style>
 <div >这里是未使用段落标签</div>
```

:::

下面记录，工作中没有用到或者自己有点模糊的知识点：

## :empty

选择每个没有任何子级的元素（包括文本节点）

::: normal-demo 样式演示

```html
<style>
div:empty {
    width:100px;
    height:20px;
    background: #ff0000;
}
</style>
<div></div>
```

:::

## :out-of-range 和 :in-range

- [x] :out-of-range 匹配值在指定区间之外的 `<input>`元素, 使用的场景很简单，比如：一个输入数字的输入框，不在最小值和最大值的范围内，我显示红色
- [x] :in-range 匹配值在指定区间之内的 `<input>`元素, 使用的场景很简单，比如：一个输入数字的输入框，在最小值和最大值的范围内，我显示蓝色

::: normal-demo 样式演示

```html
<style>
input {
    width: 120px;
    height: 34px;
}
input:out-of-range {
    border:2px solid red;
    color: #ff0000;
}

input:in-range {
    border:2px solid blue;
    color: blue;
}
</style>
<input type="number" min="5" max="10" value="22" />
<input type="number" min="5" max="10"  value="7" />
```

:::

## :read-write 和 :read-only

- [x] :read-write 用于匹配可读及可写的元素
- [x] :read-only 用于匹配设置 "readonly"（只读） 属性的元素

::: normal-demo 样式演示

```html
<style>
input {
    width: 120px;
    height: 34px;
}
input:read-write {
    border:2px solid yellow;
    color: yellow;
}

input:read-only {
    border:2px solid red;
    color: red;
}
</style>
<input type="text"value="王小泽" />

<input type="text"value="王小泽" readonly />

```

:::

## :optional 和 :required

- [x] :optional 用于匹配可选的输入元素
- [x] :required 用于匹配设置了 "required" 属性的元素

::: normal-demo 样式演示

```html
<style>
input {
    width: 120px;
    height: 34px;
}
input:optional {
    background: red;
}

input:required {
    background: blue;
}
</style>
<input type="text"value="王小泽"  />

<input type="text"value="王小泽" required />

```

:::

## :valid 和 :invalid

- [x] :valid 用于匹配输入值为合法的元素
- [x] :invalid 用于匹配输入值为非法的元素

::: normal-demo 样式演示

```html
<style>
input {
    width: 120px;
    height: 34px;
}
input:valid {
    background: red;
}

input:invalid {
    background: blue;
}
</style>
<input type="email" value="wang@qq.com" />

<input type="email"value="王小泽" />

```

:::

## font 复合写法

格式解释： 字体样式「斜体？」 异体「小型大写字母」 字体粗细 字体大小/行高 字体

``` css
div {
    font: font-style font-variant font-weight font-sze/line-height font-family; 
}

```

::: normal-demo 样式演示

```html
<style>
div {
    font: oblique small-caps 700 14px/20px 'Courier New', Courier, monospace;
}
</style>
<div>font属性的混合写法</div>

```

:::

## 颜色

- [x] 十六进制： #FF0000
- [x] rgb颜色： rgb(红，绿，蓝) 如： rgb(0, 0, 255) or rgb(0%, 0%, 100%)
- [x] rgba颜色：rgba（红，绿，蓝，alpha） alpha参数是一个介于0.0（完全透明）和1.0（完全不透明）之间的参数。
- [x] hsl颜色：hsl（色调，饱和度，明度）
  - 色相是在色轮上的程度（从0到360）-0（或360）是红色的，120是绿色的，240是蓝色的。
  - 饱和度是一个百分比值;0％意味着灰色和100％的阴影，是全彩。
  - 亮度也是一个百分点;0％是黑色的，100％是白色的。
- [x] hsla颜色：HSLA（色调，饱和度，亮度，α），α是Alpha参数定义的不透明度。 Alpha参数是一个介于0.0（完全透明）和1.0（完全不透明）之间的参数。


对于简单的样式，属性说明，不在进行详细说明，本模块仅仅是针对于深层次的样式去记录，取动画效果，布局等等；不回记录简单的样式！

想了解简单的学习，可以参考 [W3Cschool](https://www.w3cschool.cn/html/)
