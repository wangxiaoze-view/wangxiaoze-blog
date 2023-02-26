---
title: parseInt 遇上 map
index: false
icon: flower
isOriginal: true
tag:
  - parseInt, map
category:
  - JavaScript
---

::: tip 🌏 简单介绍
💡 `parseInt` 是解析一个字符串并返回指定基数的十进制整数，`radix` 是`2-36`之间的整数，表示被解析字符串的基数。如果 `radix` 超过` 2-36` 的范围则返回 `NaN`;
:::

## parseInt 的解读

### 参数

> `parseInt`的参数有俩个， 第一个为解析的字符串， 第二个为指定的基数；语法： `parseInt(string, radix)`

- [x] string: 解析的字符串，如果不是字符的情况下，则将他转为字符 (`toString()` 抽象方法操作); 如字符前面是否空格默认将空格去除；
- [x] radix(可选参数): `2-36`范围内， 标识字符串的基数；

### 返回值

- [x] 解析出的一个整数， 数字；
- [x] 返回 NaN；如果返回`NaN`则满足俩点： 1. `radix`小于 2 或 大于 36； 2. 第一个非空格字符不能转换为数字。

### DEMO

```js
parseInt("1234", 5); // 194
// 解读
// 解析字符 "1234", 按5进制(5基数)进行转换， 转换公式为：
// 1*5^3 + 2*5^2 + 3*5^1 + 4*5^0 = 125 + 50 + 15 + 4 = 194;

parseInt("1234", 100); // NaN
// 解读
// 因为 radix 基数范围为 2-36， 而代码中的基数为100  则返回NaN
```

### radix 不同的情况： undefined, 0 或者未定义的情况；

1. 如果输入的字符以 `0x,0X`(一个 0，后面为大写或者小写的 x)开头， 那么 `radix` 被默认为 16，字符串的其余部分被当做 16 进制(基数)去解析；
2. 如果输入的字符以 `0, O `开头， `radix` 被假设为 8 进制或 10 进制；ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。因此，在使用 `parseInt` 时，一定要指定一个 radix。
3. 如果输入的 string 以任何其他值开头，`radix` 是 10 (十进制)。

```js
parseInt("0xF");
// 解读：
// 符合上面1情况， 以0x 或者 0X 开头， 默认为16进制（基数）
// parseInt("0xF") === parseInt("0xF", 16);

parseInt("021");
// 解读：
// 符合上面2情况， 以0 ， 默认为8进制或者10进制
// parseInt("021") === parseInt("021", 10);
```

## Array.map 的解读

### 参数

> `Array.map()`有三个参数， 如下源码：

```js
/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
```

- [x] value: 当前循环的值， 即 item
- [x] index: 当前循环的下标, 即 for index
- [x] array: 当前的数组

> 注解的内容：
> 对数组的每个元素调用定义的回调函数，并返回包含结果的数组。
> callbackfn 最多接受三个参数的函数。 map 方法为数组中的每个元素调用一次 callbackfn 函数。
> thisArg 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。

### Demo

```js
["1", "2", "3", "4"].map((item, index, arr) => {
	console.log(item, index, arr);
});
/**
  1 0 [ '1', '2', '3', '4' ]
  2 1 [ '1', '2', '3', '4' ]
  3 2 [ '1', '2', '3', '4' ]
  4 3 [ '1', '2', '3', '4' ]
**/
```

## Array.map 结合 parseInt

### 经典案例

```js
["1", "2", "3", "4"].map(parseInt);
```

### 解读

- Array.map(): 在循环时， 会循环四次，而 parseInt 则有俩个参数;

```js
["1", "2", "3", "4"].map((item, index) => {
	parseInt(item, index);
}); // [1, NaN, NaN, NaN]

/**
parseInt(1, 0)
parseInt(2, 1)
parseInt(3, 2)
parseInt(4, 3)
**/
```

> 可能说明是不正确的； 个人认为： 前面的字符开数需要小于基数;

- parseInt(1, 0) 则是按照 10 进制转换
- parseInt(2, 1) 基数应该是 2-36 范围的数， 则为 NaN
- parseInt(3, 2) 2 进制只有 0 和 1， 所以 3 为非法字符
- parseInt(4, 3) 3 基数只可以是字符 0, 1, 2 开头的字符
