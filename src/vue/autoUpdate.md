---
title: vue实现自动更新网站内容
index: false
icon: flower
isOriginal: true
tag:
  - 简介
category:
  - JavaScript
---

::: info 背景介绍

对于常规网站或者系统来讲， 总会有提示更新或者更新记录的进程。而对于轻量间接的 web 来说同时也有这样的功能；

如果你在维护一个系统或者网站的时候，是会怎么提示用户你的系统更新呢? 发邮件吗？发短信通知吗？ 都不是， 如发邮件，发短信通知成本太大，且容易造成垃圾短信或者邮件被拦截从而不知；

想要用户明确系统有工程师在维护且开发，是要有明确提示的；如果细小的功能或者业务，可能不被了解或者使用，那就很长一段时间内用户感知该系统是否已停止更新或者维护呢？在这样的情况下，就要通知到客户群，针对优化更新部分作为日志去分享或者培训； 较为耗费人力时间；花费时间去告知用户我的系统优化了哪些功能并以书面的形式告知， 麻烦且浪费时间；

针对与这些问题，该如何解决呢? 优雅的一个想法是什么样子呢？

:::

日志更新功能想法：（一般组件库，系统工具会有， 像业务系统非必要）

添加更新日志的功能， 可查看以往更新系统的记录；(包括更新时间，内容，修复的什么问题。。。)

以网页的形式告知用户更新的内容；更加清晰明了；

## 系统资源，功能的更新想法：

### 想法一：以接口的形式访问版本是否为新旧版本 （不推荐）

通过接口轮询，根据接口返回的版本与现在版本做比较，如返回的新版本则提示用户需要更新系统资源了；不过采用这样的方式去实现这样的功能是最为不推荐的；

首先，定时器消耗进程，长时间请求同一个接口且页面不关闭的情况下会一直消耗进程；长时间下去会造成页面出现很大的性能问题； 同时，就算性能较好的情况下，如何让用户去更新系统呢? 难不成走接口再去实现? 或者使用部署代码 再去实现吗? 很明显这样的情况不能被采用；

- 难点一：轮询接口， 进程消耗导致的性能问题；卡顿，操作不便。。。
- 难点二：怎样让用户点击更新或者系统自动更新呢？部署代码？
  很明显， 这样的情况下，有俩大难点等待处理；

只能说想法一，仅仅解决了版本的比较问题以及通知用户有新的版本需要更新；实际效果并不是我要看到的；就算最后实现更新，依旧还是性能问题的卡顿；

### 想法二：Webpack + pwa 工程化管理 (推荐)

对于 `Vue，webpack` 并不默认，而对于 pwa 却有点模糊了；

#### 简单说一下 pwa 工程化：

pwa 化主要解决了两大问题, [去了解](https://www.jianshu.com/p/7845a13a67d7)

- 使 web app 有沉浸式体验，也就是更靠近原生体验。如：去掉浏览器的地址栏和底部工具栏；在桌面上生成图标，方便再次进入。
- 提供独立于浏览器的缓存，并且可以接收服务器的推送。如：在没有网络，或者网络状态较差的时候，仍可访问缓存在本地的数据.

既然 `pwa` 可以接受服务器的推送，我们是不是可以把他当成一个简易服务器， 然后再去检测系统的更新呢?

对于安装 vue + pwa 的步骤这里就省略了；

创建成功之后， 打开 src 目录我们可以看到多了一个配置文件 registerServiceWorker.js， 这个文件可以理解成资源服务器，我的理解就是检测文件的哈希值从而达到检测系统是否需要更新的效果；

```js
import { register } from "register-service-worker";
// todo: 切记： 只能在生产环境使用;
if (process.env.NODE_ENV === "production") {
	register(`${process.env.BASE_URL}service-worker.js`, {
		ready() {
			console.log(
				"App is being served from cache by a service worker.\n" +
					"For more details, visit https://goo.gl/AFskqB"
			);
		},
		registered() {
			console.log("Service worker has been registered.");
		},
		cached() {
			console.log("Content has been cached for offline use.");
		},
		updatefound() {
			// todo: 这里可以提示， 资源正在下载
			alert("资源正在下载");
			console.log("New content is downloading.");
		},
		updated() {
			// todo: 这里可以提示， 资源下载成功，自动刷新页面
			alert("资源下载成功， 10s后自动刷新");
			setTimeout(() => {
				window.location.reload();
			}, 10000);
			console.log("New content is available; please refresh.");
		},
		offline() {
			console.log(
				"No internet connection found. App is running in offline mode."
			);
		},
		error(error) {
			console.error("Error during service worker registration:", error);
		},
	});
}
```

要想使用 pwa 那么就要简单的配置一下 webpack; pwa 搭配 webpack 效果更佳哦~

```js
// vue.config.js
module.exports = {
	pwa: {
		workboxOptions: {
			skipWaiting: true,
			clientsClaim: true,
		},
		themeColor: "#ffffff",
		msTileColor: "#ffffff",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
		manifestOptions: {
			name: "安帮客",
			short_name: "安帮客",
			background_color: "#ffffff",
		},
	},
};
```

打包测试一下 `pnpm run build`

![打包效果图](/assets/images/auto_1.png)

打包之后， 多了俩个文件: `precache-manifest， service-worker`

![打包效果图](/assets/images/auto_2.png)
![打包效果图](/assets/images/auto_3.png)

部署到线上环境:
![打包效果图](/assets/images/auto_4.png)

可以进行修改测试,
![打包效果图](/assets/images/auto_5.png)

## 功能扩展 （只是想法，个人觉得可以试一下；但未知问题还未确定；）

- 扩展一： 如某一个功能，没更新之前的版本有一个按钮， 但是这个功能只有在新版本才会有，我点击按钮提示更新， 但是不更新仍可以使用旧的版本， 只是该功能只有在更新之后才会有；不会影响-之前的版本；实现一个不更新版本仍可以使用旧版本的功能；
- 扩展二：告知用户该系统又在维护或者开发，

**个人理解： 其实就是根据文件哈希值的变化去检测文件是否更新， 更新之后作相对应的操作； 然后刷新页面从而达到预期的效果；**

## 思维导图

![打包效果图](/assets/images/auto_fx.png)
