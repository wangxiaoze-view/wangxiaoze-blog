---
title: 水印
index: false
icon: flower
isOriginal: true
tag:
  - 水印
category:
  - JavaScript
---

::: tip 🌏 简单介绍
💡 这段时间实现的功能中包含了一个前端页面水印的功能；而这个功能实际应用场景不仅显示，而是为了对业务数据信息实行安全校验的情况；避免部分情况导致的信息泄露而找不到追踪人；虽然从根本完全就解决不了信息泄露的情况，但同时也避免了一些不必要的问题
:::

由于项目是公司老项目【node + jq】，在开发功能之前考虑到页面元素层级嵌套过深，元素定位层级的问题；多多少少也是有不少的坑；

- [x] 页面元素嵌套，每个页面加水印，如何在不改动的前提下优化?
- [x] 元素定位，有大有小？
- [x] 背景颜色？ 给 div 设置背景色 background: #fff, 导致水印显示问题?或者元素显示不全？
- [x] 不遮挡元素？在元素之下？不影响之前的功能?

## 实现

### 架构，考虑

在改动不大的前提下，去添加一个水印的功能， 那无非写插件方案, 项目中都会引入公共文件，那么在公共文件中写入一个水印的插件，在页面初始化完成之后统一调用即可；

目前项目中的元素定位 z-index 大小不一，有大有小，导致水印的插件的层级定位问题；如果放在元素之下，先项目的架构方案不适合本水印想法；

例如，企业微信聊天背景的水印来讲，无非就是一个背景以及 ListView 遮罩覆盖的问题，而公司项目却不适合这样的方案；

如果指定页面加入水印， 那么水印的功能就废了，加水印的背景就是为了避免视觉的传递上(截图)导致的信息泄露问题，因为每个页面都设计到了用户的部分信息， 那么最好的方案就是每个页面都加水印；

每个水印都加水印即显示了公司的规范，同时也做到用户在部分操作情况下导致的信息泄露问题；

既要考虑每个页面都要引入水印，那么我的快乐又来了，项目中使用 iframe 展示不同页面的形式，又在每个页面都会引入公共文件，那么在每个页面的 body 之下加一个特殊展示水印的模块即可；

### 确定方案，上手实现

既然是原生项目，那么就不考虑那么多了， 也不考虑自定义的水印方案；这里就不用数据的设计模式了；

那就简单的写一个方法去实现就好了；因为水印模式就是 透明底色 + 灰色文字 + 转向角度，不必搞得太麻烦；毕竟时间有限；

首先，定义方法，考虑设计到的技术以及参数；

```js
// 定义方法名 _canvasToWatermark()

// 使用 canvas 转背景图实现;

// 参数设计到 canvas 定位的元素以及文本样式

// 如下：
function _canvasToWatermark({
	container = document.body, // 目标元素 root
	width = "450px", // 宽度
	height = "260px", // 高度
	textAlign = "center", // 文本居中
	textBaseline = "middle",
	font = "14px Helvetica,Arial,sans-serif", // 字体样式
	fillStyle = "rgba(222,221,221,0.5)", // 颜色
	content = "水印", // 文本
	rotate = "20", // 角度
	zIndex = 1,
	isShowTime = true,
} = {}) {}
```

```js
function _canvasToWatermark({
	container = document.body,
	width = "450px",
	height = "260px",
	textAlign = "center",
	textBaseline = "middle",
	font = "14px Helvetica,Arial,sans-serif",
	fillStyle = "rgba(222,221,221,0.5)",
	content = "安帮客水印",
	rotate = "20",
	zIndex = 1,
	isShowTime = true,
} = {}) {
	// 设置canvas 的宽度以及高度
	let canvas = document.createElement("canvas");
	canvas.setAttribute("width", width);
	canvas.setAttribute("height", height);
	const ctx = canvas.getContext("2d");
	// ctx.textAlign = textAlign;
	// ctx.textBaseline = textBaseline;
	ctx.font = font;
	ctx.fillStyle = fillStyle;

	ctx.translate(parseFloat(width) / 6, parseFloat(height) / 2);
	ctx.rotate((-parseFloat(rotate) / 180) * Math.PI);
	ctx.fillText(content, parseFloat(width) / 6, parseFloat(height) / 2);
	if (isShowTime) {
		ctx.fillText(
			Date.now().formatDate("YYYY-MM-DD"),
			parseFloat(width) / 6,
			parseFloat(height) / 2 + 20
		);
	}

	const base64Url = canvas.toDataURL();
	const abkWm = document.querySelector(".abk__wm");
	const watermarkDiv = abkWm || document.createElement("div");

	const styleStr = `
           position: absolute;
           top:0;
           left:0;
           bottom:0;
           right:0;
           width:100%;
           height:100%;
           z-index: ${zIndex};
           pointer-events:none;
           background-repeat:repeat;
           background:url('${base64Url}')`;
	// 不能使用background--image，  避免有的页面 background: #fff 覆盖掉

	watermarkDiv.setAttribute("style", styleStr);
	watermarkDiv.classList.add("abk__wm");

	// 避免首页与 iframe 元素重叠
	if (!container.classList.contains("abk-wm-empty")) {
		container.setAttribute(
			"style",
			`
            height: auto;
            min-height: 100%;
            position: relative;
        `
		);
		!abkWm && container.insertBefore(watermarkDiv, container.firstChild);
	}

	if (typeof module != "undefined" && module.exports) {
		//CMD
		module.exports = _canvasToWatermark;
	} else if (typeof define == "function" && define.amd) {
		// AMD
		define(function () {
			return _canvasToWatermark;
		});
	} else {
		window._canvasToWatermark = _canvasToWatermark;
	}
}

_canvasToWatermark({ content: "水印！！！" });
```

## 上图

![水印演示效果  ](/assets/images/watermark.png)
