---
title: 搜索查询调用接口异常
index: false
icon: flower
isOriginal: true
tag:
  - search
category:
  - 优化
---

## 背景

::: tip 一个系统功能异常优化
普通的输入框，做一个搜索的功能，那么对于搜索，输入直接调用接口就好了， 为什么还要值得做记录总结呢？

是因为，搜索查询并不是你想象中的直接调用接口就可以了；考虑的因素也是挺多的，例如，搜索优化，不对服务器造成并发影响；
间隔搜索等等，一般行为，为了不频繁请求接口，我们都会使用`节流函数`优化，或者失去焦点再去请求也是可以的；

但是对于及查及显示的功能原则，这是就不能使用失焦查询了；这里的功能例如： 地址查询等等；

那么输入查询也会出现另外的一个弊端， 那就是中文字符的影响，下面会说明 `bug` 复现的过程和解决方案!

:::

## 适用场景

- 常见的搜索查询无非就那么几种，端与端的搜索也就是移动端与 pc 端；
- 如果是移动端仅仅需要处理的是频繁请求的问题；避免频繁请求造成的服务器的压力;
- 如果是 pc 端，就不是仅仅需要处理频繁请求的问题了； 并且你在 `input` 的情况下还要处理另外一种情况，输入中文有中文字符的情况；
- 平常的搜索都是输入框， 按钮查询搜索;

## 问题分析复盘

在原有的功能上去选择化的维护与扩展；其中有关联单号，其实是个搜索查询功能, 查询输入的手机号关联的业主最新前三单的信息;

因为当时考虑用户搜索查询方便，特处理输入框的事件为 oninput, 这样直接输入查询内容，在处理频繁请求的基础上去请求数据；这样就可以随查随时显示了；

而不选择 onchange, onblur 是因为俩者都是失去焦点再去请求;

针对三者的区别，我做了一下总结：

- `oninput`: 只要输入， 输入框由内容则会执行，但是这里要区分一个问题：
- `onchange, onblur相同点`: 俩者都是失去焦点之后再出处理对应的逻辑；
- `onchange, onblur不同点`: `oncahnge`是在输入的基础上才会执行，而`onblur`不论是否输入都会执行；

**但是：`oninput`要做一个区别，就是 pc 有其他输入法的情况下是以正常执行的，输入框不会有输入的文字或者字母， 而 Windows 自带的输入法，在输入框切换中文再去输入的情况，会将输入的英文先显示在输入框中，那样就会出现输入一个字符就会去请求一次；这样的情况就可以造成接口返回异常或者错误信息;**

## 效果预览

> 以下效果都是在 `windows`下的效果；

### 使用其他的输入法

![使用其他的输入法](/assets/images/search_1.png)

### windows 自带的输入法

![自带的输入法](/assets/images/search_2.png)

> windows 自带的输入法，在这样的情况下会走请求， 还是有特殊符号的情况，如果在这样的情况下后端可能会报错；

## 解决方案

- 将 `oninput` 事件换成 `onchange, onblur` 事件，只有当失去焦点的情况下才会去请求， 这样可能会造成功能疑惑问题；都输入了怎么不执行呢？怎么没有数据呢？怎么操作？
- 同样，继续使用 oninput 事件；不过在这基础上还要执行俩个事件 `compositionstart, compositionend`;
- `compositionstart` 开始新的输入合成时会触发， `compositionend` 当文本段落的组成完成或取消时，`compositionend` 事件将被触发 (具有特殊字符的触发，需要一系列键和其他输入，如语音识别或移动中的字词建议)。[compositionend](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionend_event) [compositionstart](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionstart_event)

## 实例代码

```js
// isInput 判断的是是否合并结束， 默认结束
let isInput = true;
getOrderDemo
	.on(
		"input",
		throttle(function () {
			// 如果合并结束完成则， 进行下一步的逻辑操作; 没有结束合并  不会执行;
			if (isInput) {
				let val = $(this)
					.val()
					.replace(/\s|\r|\t|\n/g, "");
				// ...code there 执行对应的逻辑操作;
			}
		}, 500)
	)
	.on("keyup", function () {})
	.on("compositionstart", function () {
		// 当执行如图二的情况下，说明还在合并，并没有结束
		isInput = false;
	})
	.on("compositionend", function () {
		// 执行到这一步说明  合并结束， 当合并结束时，执行input
		isInput = true;
	});
```
