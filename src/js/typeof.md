---
title: 数据类型的判断
index: false
icon: flower
isOriginal: true
tag:
  - typeof
category:
  - JavaScript
---

::: tip 🌏 简单介绍
💡 ES5 中有五种基本（原始）数据类型 `undefined，null，boolean，number，string，ES6` 中新增了一种基本数据类型：`Symbol` 。`typeof` 是我们开发中最常用的判断数据类型的 JS 原生内置运算符，但是有局限性。
:::

## typeof

如果在项目实际开发过程中，习惯性的使用 typeof 进行数据类型判断；尽管这样的内置方法是最快最便捷的，但是在一定程度上， 也是会有局限性的；

typeof 的局限性暂时不说， 拿一个例子来说，在开发某个功能的时候，后端给了我这样一组数据， 这数据类型可能是数组，也可能是对象， 还有可能是 null；

如果给你这么一组数据， 你会怎么进行数据类型的判断；使用 typeof 判断； 也是可也， 但这里就要说明一下它的局限性了；参考下图:

![typeof](/assets/images/typeof-1.png)

是不是你会怀疑， 为什么会是 `“object”` ;

- [x] `typeof null` 返回的是 `object`, 在最初的版本中，使用的为 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 `null` 表示为全零，所以将它错误的判断为 `object`，然后被 ECMAScript 沿用了 。
- [x] `typeof` 不能准确的判断具体是什么对象；例如：`typeof new Date()` 不会返回的是 Date 对象，而数组也是最不能忍受的；

## instanceof

`instanceof`也可以判断对象类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`。但是，并不适用于一些基本数据类型。

![instanceof](/assets/images/instanceof.png)

## Object.prototype.toString()

### 它是一个什么？参考资料 [Object.prototype.toString()](https://es5.github.io/#x15.2.4.2)。

![typeof](/assets/images/typeof-2.png)

> 当 toString 方法被调用的时候，下面的步骤会被执行：

1. 如果 this 值是 undefined，就返回 [object Undefined]；
2. 如果 this 的值是 null，就返回 [object Null]；
3. 让 O 成为 ToObject(this) 的结果；
4. 让 class 成为 O 的内部属性 [[Class]] 的值；
5. 最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串；

简单的说，`Object.prototype.toString.call()`默认返回的格式为`[object 数据类型]`； 如果 `this 为 undefined `的情况，则：`[object Undefined]`; 可参考以下 demo:

```js
console.log(Object.prototype.toString.call([])); // [object Array]
```

### 可以校验那些数据类型呢?

- [x] 至少下面的图片中的类型都是可以校验的;
- [x] 包括基本类型和复杂类型；

![typeof](/assets/images/typeof-3.png)

进一步的我们可以封装一个 检验数据类型的方法，可参考如下代码：

```js
let dataMap = {};

"Number String Boolean Null Undefined Null Object Array Date Error RegExp Function Math JSON"
	.split(" ")
	.map(item => {
		dataMap[`[object ${item}]`] = item.toLowerCase();
	});

function type(obj) {
	// 添加这行代码是因为 在IE6 会有兼容性 直接返回 [object Object]
	if (obj == null) {
		return obj + "";
	}
	return typeof obj === "object" || typeof obj === "function"
		? dataMap[Object.prototype.toString.call(obj)] || "object"
		: typeof obj;
}

type(null); // null
type(function test() {}); // function
```

## constructor

> 这种方式是判断对象的构造函数是谁，从而进行判断；

![constructor](/assets/images/constructor.png)

> plainObject, EmptyObject, isArrayLike 暂未研究

### 参考文献

- [x] [js 类型判断专题(上)](https://github.com/mqyqingfeng/Blog/issues/28)
- [x] [js 类型判断专题(下)](https://github.com/mqyqingfeng/Blog/issues/30)
