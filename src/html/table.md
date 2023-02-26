---
title: 表格
index: false
icon: discover
isOriginal: true
tag: 
  - table
category:
  - Html
---

::: info 表格
在网页中，表格的作用也是很关键的，对于后台系统展示数据的离不开表格的，使用表格可以让展示的数据更加规整，可读性也是非常好的；

表格在布局的行为上并不是用来布局的， 就是单纯的展示数据；
:::

## 语法

``` html
<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>

```

- [x] `<table></table>`是用来定义表格的标签的
- [x] `<tr></tr>`行标签
- [x] `<td></td>`单元格

## 属性

- [x] align: left, right, center, 单元格的对其方式
- [X] border: 单元格周围是否有边框， 不写则没有
- [x] cellpadding: 单元格与内容的空白间距，默认1像素
- [x] cellspacing: 单元格之间的空白  
- [x] width: 表格的宽度

::: normal-demo 表格预览

```html
<table border="1" width="100%" cellpadding="14" cellspacing="10" >
    <thead>
        <tr>
            <th align="right">姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>20</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>22</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>2位同学</td>
            <td>20岁左右</td>
        </tr>
    </tfoot>
</table>

<h2>优化一下美观度</h2>
<table border="1" width="100%" cellpadding="14" cellspacing="0" >
    <thead>
        <tr>
            <th align="right">姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>20</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>22</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>2位同学</td>
            <td>20岁左右</td>
        </tr>
    </tfoot>
</table>
```

:::

## 单元格的合并

### 跨行合并

跨行合并是合并单元格的方式之一，

``` html

<td rowspan="合并单元格的个数"></td>

```

夸列合并是合并单元格的另外一种方式

``` html
<td colspan="合并单元格的个数"></td>
```

::: normal-demo 单元格合并预览

```html
<table border="1" cellpadding="14" cellspacing="0" width="100%" >
<thead>
    <tr>
        <td colspan="7" align="center" >个人简历</td>
    </tr>
    
</thead>
<tbody>
    <tr>
        <td>姓名</td>
        <td>张三</td>
        <td>年龄</td>
        <td>20</td>
        <td>联系方式</td>
        <td>12111111111</th>
        <td rowspan="3" align="center">照片</th>
    </tr>
    <tr>
        <td>家庭住址</td>
        <td>山西省</td>
        <td>身份</td>
        <td>团圆</td>
        <td>邮箱</td>
        <td>wang@qq.com</th>
    </tr>
    <tr>
        <td>姓名</td>
        <td>张三</td>
        <td>年龄</td>
        <td>20</td>
        <td>联系方式</td>
        <td>12111111111</th>
    </tr>
</tbody>
</table>
```

:::
