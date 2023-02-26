---
title: Vue项目性能优化
index: false
icon: flower
isOriginal: true
tag:
  - 性能
category:
  - 优化
---

::: tip 🌏 优化背景
前段时间搞了一个新项目, 用的全新 vue3 和 vant3 的框架，访问项目时长 1 分多都没有加载出来, 其实引入的框架就只有 vant 和一些插件， 对于单页面而言，这是有很大的问题的，页面记载缓慢，资源下载慢, 一个 vender.js 文件 达到了 mb，对于一个新项目而言， 怎么会这么大呢？这时就应该先去考虑一下项目如何优化。怎样实现 11s 到 1s 的效果。
:::

## 🧭 优化方向

- [x] 文件拆分，代码，图片，文件压缩， Gzip 压缩
- [x] node_modules 包体积过大的文件拆分，优化分包策略
- [x] 优化路由懒加载
- [x] 拆分第三方插件, 改用 cdn 链接
- [x] loading 动画
- [x] 骨架屏

##🔧 开始优化

## 体积优化

### ⚡ 排查冗余依赖，文件资源，图片

- 删除项目中多余的依赖
- 静态资源全部放入 assets 文件夹下

### ⚡ 图片压缩

- 手动将图片进行压缩, 但是这样比较麻烦
- 引入插件 image-webpack-loade，进行压缩

```js
// install
npm i image-webpack-loader -D

// vue.config.js
chainWebpack: (config) => {
  // 判断环境
  if (isProd) {
    // 图片压缩处理
    const imgRule = config.module.rule('images')
    imgRule
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
  }
}
```

### ⚡ 优化 vant 体积, cdn 加速

- vant UI 库全局引入， 会将 vant 打包在 vender 文件中， 我们将它拆出来，使用 cdn 链接

```js
const isProcess =
	process.env.NODE_ENV === "production" ||
	process.env.NODE_ENV === "test" ||
	process.env.NODE_ENV === "pre";
// 使用cdn
const cdn = {
	css: ["https://cdn.jsdelivr.net/npm/vant@3.2.3/lib/index.css"],
	js: [
		"https://cdn.jsdelivr.net/npm/vue@3.2.6/dist/vue.global.prod.js",
		"https://cdn.jsdelivr.net/npm/vue-router@4.0.11/dist/vue-router.global.prod.js",
		"https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js",
		"https://cdn.jsdelivr.net/npm/axios@0.21.4/dist/axios.min.js",
		"https://cdn.jsdelivr.net/npm/vant@3.2.3/lib/vant.min.js",
	],
	// 第三方插件拆分
	externals: {
		vue: "Vue",
		"vue-router": "VueRouter",
		vuex: "Vuex",
		axios: "axios",
		vant: "vant",
	},
};
// 本地不会拆分
configureWebpack: {
	externals: {
		isProcess ? cdn.externals : {};
	}
}
```

### ⚡ 优化 moment 体积

项目中默认是 useBuiltIns: 'entry'将所有 polyfill 都引入了，导致包比较大。我们可以使用 useBuiltIns: 'entry'调整下策略，按需引入，项目中没使用到的 API 就不做 polyfill 处理了

```js
// babel.config.js
module.exports = {
	presets: [
		"@vue/cli-plugin-babel/preset",
		[
			"@babel/preset-env",
			{
				useBuiltIns: "usage", // entry，usage
				corejs: 3,
			},
		],
	],
	plugins,
};
```

## 传输优化

### ⚡ 优化分包策略

vue-cli3 的默认优化是将所有 npm 依赖都打进 chunk-vendor，但这种做法在依赖多的情况下导致 chunk-vendor 过大

```js
optimization: isProd
	? {
			splitChunks: {
				chunks: "all",
				maxInitialRequests: Infinity, // 默认为3，调整为允许无限入口资源
				minSize: 20000, // 20K以下的依赖不做拆分
				cacheGroups: {
					vendors: {
						// 拆分依赖，避免单文件过大拖慢页面展示
						// 得益于HTTP2多路复用，不用太担心资源请求太多的问题
						name(module) {
							// 拆包
							const packageName = module.context.match(
								/[\\/]node_modules[\\/](.*?)([\\/]|$)/
							)[1];
							// 进一步将Ant组件拆分出来,请根据情况来
							// const packageName = module.context.match(/[\\/]node_modules[\\/](?:ant-design-vue[\\/]es[\\/])?(.*?)([\\/]|$)/)[1]
							return `npm.${packageName.replace("@", "")}`; // 部分服务器不允许URL带@
						},
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						chunks: "initial",
					},
				},
			},
			runtimeChunk: { name: entrypoint => `runtime-${entrypoint.name}` },
	  }
	: {};
```

### ⚡ 路由懒加载

SPA 中一个很重要的提速手段就是路由懒加载，当打开页面时才去加载对应文件，我们利用 Vue 的异步组件和 webpack 的代码分割（import()）就可以轻松实现懒加载了。
但当路由过多时，请合理地用 webpack 的魔法注释对路由进行分组，太多的 chunk 会影响构建时的速度

```js
{
    path: 'register',
    name: 'register',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user/register'),
}

```

### ⚡gzip 压缩

Gzip 压缩是一种强力压缩手段，针对文本文件时通常能减少 2/3 的体积。

HTTP 协议中用头部字段 Accept-Encoding 和 Content-Encoding 对「采用何种编码格式传输正文」进行了协定，请求头的 Accept-Encoding 会列出客户端支持的编码格式。当响应头的 Content-Encoding 指定了 gzip 时，浏览器则会进行对应解压

一般浏览器都支持 gzip，所以 Accept-Encoding 也会自动带上 gzip，所以我们需要让资源服务器在 Content-Encoding 指定 gzip，并返回 gzip 文件

- Nginx 配置

```sh
#开启和关闭gzip模式
gzip on;
#gizp压缩起点，文件大于1k才进行压缩
gzip_min_length 1k;
# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
gzip_comp_level 6;
# 进行压缩的文件类型。
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;
# nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩
gzip_static on
# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;
# 设置gzip压缩针对的HTTP协议版本
gzip_http_version 1.1;
```

- 构建是生成 gzip 文件

```js
// vue.config.js
const CompressionPlugin = require("compression-webpack-plugin");
// gzip压缩处理
chainWebpack: config => {
	if (isProd) {
		config.plugin("compression-webpack-plugin").use(
			new CompressionPlugin({
				test: /\.js$|\.html$|\.css$/, // 匹配文件名
				threshold: 10240, // 对超过10k的数据压缩
				deleteOriginalAssets: false, // 不删除源文件
			})
		);
	}
};
```

### ⚡prefetch ， preload

```html
<% for (var i in htmlWebpackPlugin.options.cdn &&
htmlWebpackPlugin.options.cdn.css) { %>
<link
	href="<%= htmlWebpackPlugin.options.cdn.css[i] %>"
	rel="preload"
	as="style"
/>
<link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
<% } %> <% for (var i in htmlWebpackPlugin.options.cdn &&
htmlWebpackPlugin.options.cdn.js) { %>
<link
	href="<%= htmlWebpackPlugin.options.cdn.js[i] %>"
	rel="preload"
	as="script"
/>
<% } %>
```

```js
config.plugins.delete("prefetch");
config.plugins.delete("preload");
```

### 模板演示

```html
<!DOCTYPE html>
<html lang="">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<script
			type="text/javascript"
			src="https://webapi.amap.com/maps?v=1.4.4&key=13df4ba40de83428e30e3031ee61cb59"
		></script>
		<!-- <script type="text/javascript" src="../src//util//remogeo.js"></script> -->
		<!-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> -->
		<!-- <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" name="viewport" /> -->
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no,user-scalable=no"
		/>
		<link rel="icon" href="<%= BASE_URL %>favicon.ico" />
		<title><%= htmlWebpackPlugin.options.title %></title>
		<script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
		<script src="https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js"></script>
		<% for (var i in htmlWebpackPlugin.options.cdn &&
		htmlWebpackPlugin.options.cdn.css) { %>
		<link
			href="<%= htmlWebpackPlugin.options.cdn.css[i] %>"
			rel="preload"
			as="style"
		/>
		<link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
		<% } %> <% for (var i in htmlWebpackPlugin.options.cdn &&
		htmlWebpackPlugin.options.cdn.js) { %>
		<link
			href="<%= htmlWebpackPlugin.options.cdn.js[i] %>"
			rel="preload"
			as="script"
		/>
		<% } %>
	</head>
	<body>
		<noscript>
			<strong
				>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
				properly without JavaScript enabled. Please enable it to
				continue.</strong
			>
		</noscript>
		<div id="app"></div>
		<!-- built files will be auto injected -->
		<% for (var i in htmlWebpackPlugin.options.cdn &&
		htmlWebpackPlugin.options.cdn.js) { %>
		<script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
		<% } %>
	</body>
	<script>
		// 		if (AMap.UA.ios) {
		//       var remoGeo = new RemoGeoLocation();

		//       navigator.geolocation.getCurrentPosition = function () {
		//         return remoGeo.getCurrentPosition.apply(remoGeo, arguments);
		//       };

		//       navigator.geolocation.watchPosition = function () {
		//         return remoGeo.watchPosition.apply(remoGeo, arguments);
		//       };
		//  }
	</script>
</html>
```

```js
const webpack = require("webpack");
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const vConsolePlugin = require("vconsole-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

const isProcess =
	process.env.NODE_ENV === "production" ||
	process.env.NODE_ENV === "test" ||
	process.env.NODE_ENV === "pre";

// 配置 cdn, 拆分模块
const cdn = {
	css: ["https://cdn.jsdelivr.net/npm/vant@3.2.3/lib/index.css"],
	js: [
		"https://cdn.jsdelivr.net/npm/vue@3.2.6/dist/vue.global.prod.js",
		"https://cdn.jsdelivr.net/npm/vue-router@4.0.11/dist/vue-router.global.prod.js",
		"https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js",
		"https://cdn.jsdelivr.net/npm/axios@0.21.4/dist/axios.min.js",
		"https://cdn.jsdelivr.net/npm/vant@3.2.3/lib/vant.min.js",
		"https://file.anbangke.com/js/map_index.js",
	],
	externals: {
		vue: "Vue",
		"vue-router": "VueRouter",
		vuex: "Vuex",
		axios: "axios",
		vant: "vant",
		AMap: "AMap",
	},
};

const vueConfig = {
	configureWebpack: {
		optimization: {
			splitChunks: {
				chunks: "all",
				minSize: 30000,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				automaticNameDelimiter: "~",
				name: true,
				cacheGroups: {
					vendors: {
						chunks: "all",
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							const packageName = module.context.match(
								/[\\/]node_modules[\\/](.*?)([\\/]|$)/
							)[1];
							return `chunk.${packageName.replace("@", "")}`;
						},
						priority: -10,
						reuseExistingChunk: true,
					},
					"crypto-js": {
						name: "chunk-crypto-js",
						test: /[\\/]node_modules[\\/]_?crypto-js(.*)/,
						priority: 10,
					},
					vant: {
						name: "chunk-vant-js",
						test: /[\\/]node_modules[\\/]_?vant(.*)/,
						priority: 20,
					},
					"core-js": {
						name: "chunk-core-js",
						test: /[\\/]node_modules[\\/]_?core-js(.*)/,
						priority: 25,
					},
					common: {
						// split async commons chunk
						name: "chunk-common",
						minChunks: 2,
						priority: -20,
						chunks: "initial",
						reuseExistingChunk: true,
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
				},
			},
		},
		plugins: [
			// Ignore all locale files of moment.js
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 5,
				minChunkSize: 100,
			}),
			new CompressionWebpackPlugin({
				algorithm: "gzip",
				test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
				threshold: 10240,
				deleteOriginalAssets: false, // 不删除源文件
				minRatio: 0.8,
			}),
			new vConsolePlugin({
				filter: [],
				enable: process.env.NODE_ENV != "production",
			}),
		],
		// if prod, add externals
		externals: isProcess ? cdn.externals : {},
	},
	outputDir: "dist",
	assetsDir: "static",
	lintOnSave: true, // 是否开启eslint保存检测
	productionSourceMap: false, // 是否在构建生产包时生成 sourceMap
	chainWebpack: config => {
		config.resolve.alias
			.set("@", resolve("src"))
			.set("@v", resolve("src/views"))
			.set("@c", resolve("src/components"))
			.set("@u", resolve("src/util"));
		config.optimization.runtimeChunk("single");
		config.plugin("html").tap(args => {
			args[0].title = "";
			// 配置环境cdn
			if (isProcess) {
				args[0].cdn = cdn;
			}
			return args;
		});
		// 预览打包模块
		// config.plugin('webpack-bundle-analyzer')
		// 	.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
		// 	.end()
		// 关闭Prefetch, 在首屏会把这十几个路由文件，都一口气下载了 删除预加载
		config.plugins.delete("prefetch");
		config.plugins.delete("preload");
		// 压缩代码
		config.optimization.minimize(true);
	},
	devServer: {
		host: "0.0.0.0", //局域网和本地访问
		port: 80,
		hot: true,
		open: false,
		overlay: {
			warning: false,
			error: true,
		},
		disableHostCheck: true,
	},
};
module.exports = vueConfig;
```

### 演示效果

![打包演示效果](/assets/images/vue-pre.png)
