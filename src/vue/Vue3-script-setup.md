---
title: Vue3 script-setup语法糖
index: false
icon: flower
isOriginal: true
tag:
  - 性能
category:
  - 优化
---

::: tip 🌏 简单介绍
`<script setup>` 是单文件组件使用 组合式 API 编译时的语法糖，也是相对于 普通的 `<script>` 的词法， 还是有优势的
:::

- [x] 更少的样板内容，代码简洁
- [x] 纯 TypeScript 声明 Props 和 抛出事件
- [x] 其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理
- [x] 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)
- [x] 不用 return, 直接使用， 组件也是如此

## 基本语法

> 需要将 setup 添加到 `<script>` 代码块上：

```js
<script setup>console.log('script to setup');</script>
```

## 顶层的绑定会暴露给模板

> 在使用 script setup 的时候， 声明的变量、方法、import 引入的内容可以直接使用：

```js
<script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log("msg:" + msg)
}
</script>

<template>
  <div @click="log">{{ msg }}</div>
</template>
```

> import 引入的内容亦是如此

```js
<script setup>
  import {add} from './util';

</script>

<template>
  <div >{{ add(1, 2) }}</div>
</template>
```

## 响应式

> 需要使用响应式 api, 省略了 return 值

```js
// ref, ref的值可以直接使用，默认结构
// 普通的需要return, ref.value
<script setup>
  import {ref} from 'vue';

  const number = ref(3);

</script>

<template>
  <div @click="number++;">{{ number }}</div>
</template>
```

> reactive 和 ref 不一样:

- [x] ref 在 script-setup , 可以直接使用, 不用 return, 默认解构
- [x] reactive 在 script-setup , 不能直接使用， 需要用变量接受，不用 return, 如：

```js
<script setup>
const state = reactive({
	title: 'title',
})
</script>

<template>
  <div >{{ state.title }}</div>
</template>
```

## 使用组件

> script-setup 引入组件， 可直接使用， 不用再次 注册使用

```js
<script setup>
import TextButton from './TextButton.vue'
</script>

<template>
  <TextButton/>
</template>
```

> 动态组件和 vue2.x 使用方式一样。

```js
<script setup>
import TextButton1 from './TextButton.vue'
import TextButton2 from './TextButton.vue'
</script>

<template>
  <component :is="TextButton1" />
  <component :is="TextButton2" />
</template>
```

## 自定义指令

> 但这里有一个需要注意的限制：必须以 vNameOfDirective 的形式来命名本地自定义指令，以使得它们可以直接在模板中使用。

```js
<script setup>
  const vMyDirective = {
  	beforeMount: (el) => {
      // 在元素上做些操作
    }
  }

</script>
<template>
	<div v-my-directive></div>
</template>
```

## props 和 emit

> vue3 script-setup 和 vue2 的用法不一样

> 子组件 Tbutton.vue

```js
<script setup>

  // 声明props, 具体props类型 和 vue2 一致
const props = defineProps({
	title: {
		type: String,
		required: true,
		default: '我是按钮'
	}
})

// 声明抛出的事件名
const emit = defineEmits(['click', 'methodAddCount'])

const buttonClick = (attrs, slots) => {
	emit('click', {title: props.title, attrs, slots})
}
</script>

<template>
	<div class="button-root">
		<button class="t-button" @click="buttonClick($attrs, $slots)" :title="title">
			<slot name="content"></slot>
		</button>
	</div>
</template>
```

> 父组件 App.vue

```js
<script setup>

import TButton from './components/button/TButton.vue'
  // 声明props, 具体props类型 和 vue2 一致
const props = defineProps({
	title: {
		type: String,
		required: true,
		default: '我是按钮'
	}
})

// 接受子组件传出的值
const emitClick = ({...arg}) => {
  // 获取到子组件的 title
	state.title = arg.title;
  // 获取到子组件的 attr, {"data-title": "自定义attrs"}
	state.attrs = arg.attrs;
  // 获取到子组件的 slots, slot 名字为 content. 默认的为default
	state.slots = arg.slots && arg.slots.content()[0];
}
</script>

<template>
	<t-button ref="buttonRef" title="按钮传值" @click="emitClick" data-title="自定义attrs">
		<template #content>
			<span>按钮传值</span>
		</template>
	</t-button>
</template>
```

## defineExpose 属性暴露

> 子组件

```js
<script setup>

import {reactive, toRefs} from "vue";

  // 声明props, 具体props类型 和 vue2 一致
const props = defineProps({
	title: {
		type: String,
		required: true,
		default: '我是按钮'
	}
})

// 声明抛出的事件名
const emit = defineEmits(['click', 'methodAddCount'])

// 暴露的数据
const state = reactive({
	childrenTitle: '子组件的 childrenTitle',
	count: 1,
})

const buttonClick = (attrs, slots) => {
	emit('click', {title: props.title, attrs, slots})
}

// 将数据暴露出去
defineExpose({
	...toRefs(state),
})
</script>

<template>
	<div class="button-root">
		<button class="t-button" @click="buttonClick($attrs, $slots)" :title="title">
			<slot name="content"></slot>
		</button>
	</div>
</template>
```

> 父组件接收

```js
<script setup>

import TButton from './components/button/TButton.vue'
  // 声明props, 具体props类型 和 vue2 一致

const state = reactive({
	// get child info
	childrenInfo: {}
})

onMounted(() => {
	getChildrenInfo();
})

// 接收 子组件暴露的属性
const getChildrenInfo = () => {
	const {childrenTitle, count} = buttonRef.value;
	state.childrenInfo = {
		childrenTitle,
		count,
	}
}
</script>

<template>
	<t-button ref="buttonRef" title="按钮传值"  data-title="自定义attrs">
		<template #content>
			<span>按钮传值</span>
		</template>
	</t-button>
</template>
```
