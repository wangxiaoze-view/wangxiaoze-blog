---
title: Hooks Loading
index: false
icon: flower
isOriginal: true
tag:
  - Loading
category:
  - 优化
---

::: tip 一个 vue 的小工具

项目中有这杨的一个场景，请求或者操作一些按钮需要加一个`loading`的效果，但对于一个成熟的系统来说, 那不会仅仅一个页面或者一个功能有`Loading`吧；
因为涉及到很多的页面与功能，总不会在每一个页面定义一个变量一个方法， 但是对于这样的优化怎么进行处理呢?
:::

## 背景

基于 vue3 部署项目，对于中后台来讲，最常见的组件就是 按钮和表格了，但是为了优化效果一般都会选择适用 Loading 动画展示， 但是频繁使用 Loading 效果的话，会导致一个问题
，如果一个页面多个 Loading 动画呢？ 难不成要定义多个变量去使用嘛？

这样导致代码的冗余性以及维护的艰难性，并且对于同一个页面尽量使用 一个 Loading 动画， 如果多个的话，可以联同一个去使用；

## 使用场景?

- 分页表格， 数据等待加载
- 按钮点击等待数据提交
- 骨架屏的加载
- 查询按钮 连同 分页表格数据的展示

## 如何优化处理?

在处理之前，我们可以想象，是否可以创建一个小工具，而这个工具就是为了加载 loading 效果而实现的，在这之前，并不需要每个页面都
定义变量或者方法;

首先在 `src` 目录下，创建目录 hooks，接着创建 `loading.js`，这个文件适用于展示按钮，表格 `Loading` 状态效果；

创建响应式 `proxy` 数据， `const loading = ref(false)`，对于 `Loading` 我们有默认值，可以修改，可以切换；

基于以上几点，进行扩展性的封装；

首先，创建一个方法 `useLoading`，参数为 `initValue = false`，默认值为 `false`， 代表 初始化的 `loading` 的状态为 `false`，

接着，编写俩个方法，去修改 `loading` 的值和切换；

## 加载过程

![加载过程图](/assets/images/hooks_loading.svg)

## 代码封装

```js
export default function userLoading(initVal = false) {
	const loading = ref(false);

	const setLoading = loading => {
		loading.value = loading;
	};

	const toggleLoading = () => {
		loading.value = !loading.value;
	};

	return {
		loading,
		setLoading,
		toggleLoading,
	};
}
```

## 使用

```vue
<script>
import useLoading from "./userLoading";
export default {
	setup() {
		// 初始化loading为false. 即不显示loading
		const { loading, setLoading } = useLoading(false);

		// 模拟点击事件
		const clickBtn = () => {
			// 点击按钮设为true
			setLoading(true);
			// 模拟请求， 3s 之后 loading关闭
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		};

		return {
			laoding,
			clickBtn,
		};
	},
};
</script>
```
