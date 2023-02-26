---
title: Array.prototype[@@iterator]()
index: false
icon: flower
isOriginal: true
tag:
  - iterator
category:
  - JavaScript
---

::: tip 🌏 简单介绍
💡 Iterator 是一种接口, 目的是为不同的数据结构提供统一的数据访问机制，任何数据结构只要部署了 Iterator 接口，就可以实现遍历操作
💡 但是 JavaScript 语言中没有接口的概念，我们可以把它理解成一种特殊的对象 - 迭代器对象，返回这个对象的方法叫做迭代器方法
:::

## 语法

```js
arr[Symbol.iterator]();
```

## Iterator(迭代器)的概念

Interator 的遍历过程是这样的：

- 创建一个指针对象，指向当前数据结构的起始位置；或者说：遍历器对象本质上就是一个指针对象
- 第一次调用指针对象的 `next` 方法，可以将指针对象指向数据结构的第一个成员；
- 第二次调用指针对象的 `next` 方法，可以将指针对象指向数据结构的第二个成员；
- .....
- 不断调用指针对象的 `next` 方法， 知道它指向数据结构的结束位置；

而一个迭代器具有一个 `next` 的方法， 每次调用都会返回一个结果；而且这个结果是一个 `object` 对象，包含俩个属性：

- value: 标识指针指向的对象的值
- done: 布尔值，表示集合遍历完成之后是否还有可用数据，有数据返回 `false`，否则返回 `true`；简单的说：就是没有数据结束了返回` true`, 否则 `false`；

数组的 `Iterator` 方法，默认情况下， 与 `arr.values()`返回值相同；`arr[Stmbol.iterator]`则返回 `values()`函数；

```js
let arr = [1, 2, 3];

arr[Symbol.iterator]().next().value; // 1
arr.values().next().value; // 1
arr[Symbol.iterator]().next().value === arr.values().next().value; // true
```

## 一个 🌰

```js
let arr = ["a", "b", "b"];
let eArr = arr[Symbol.iterator]();

eArr.next().value; // a
eArr.next().value; // b
eArr.next().value; // c
eArr.next().value; // d
eArr.next().value; // undefined
```

我们知道了这个 `iterator` 有一个 next 的方法，而这个 `next` 返回的是一个对象，这个对象包含 `value` 和 `done`;

## 模拟返回

根据上面的步骤，简单模拟一个`next`方法返回的例子；

```js
function customIterator(array) {
	let index = 0;
	return {
		next: function () {
			return index < array.length
				? { value: array[index++], done: false }
				: { value: undefined, done: true };
		},
	};
}

let it = customIterator([1, 2, 3]);

it.next().value; // 1
it.next().value; // 2
it.next().value; // 3
it.next().value; // undefined
```

解读：

- 定义了一个`customIterator`函数， 这个函数用来模拟`Iterator`接口的实现，作用返回一个迭代器对象；
- 对象有一个`next`方法，`next`方法通过闭包来保存指针 index,每次调用 `next`方法 `index`的值就会 `+1`，也就是指向下一个成员
- 根据 index 的指向返回对应的数据`value`， `done`表示循环是否完成；
