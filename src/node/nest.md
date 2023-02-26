---
title: 初识Nest！
index: false
icon: flower
isOriginal: true
tag:
  - nest
category:
  - Node
---

::: tip 🌏 简单介绍
💡 前段时间线下了解并实战了一些 `TypeScript`，逐步对 `TS` 有了基本了解， 但对于公司老项目而言，仅仅是将 `Node` 作为前端页面的路由转换器；其他的一些就没涉及到；
最近对 `nest` 比较好奇，今天使用了一下，感觉还是不错的，`nest+ts` 的同时使用，个人感觉就是类似于 `express` 但完全不同，难度不太大，基本上就可以直接上手操作一些简单的；
:::

## 框架简介

- [x] Nest 是为了构建高效可扩展的 Nodejs 服务端的应用框架，内置完全支持 ts；
- [x] Nest 框架底层 HTTP 平台默认是基于 Express 实现的，所以无需担心第三方库的缺失。 Nest 旨在成为一个与平台无关的框架。 通过平台，可以创建可重用的逻辑部件，开发人员可以利用这些部件来跨越多种不同类型的应用程序。 nest 目前有两个支持开箱即用的 HTTP 平台：express 和 fastify 可以在项目中直接引入。

关于如何创建项目，命令行就在这里不介绍了；像前端的命令行基本都是一致的；

项目文件的介绍在官网查阅；

## 对于启动项目的理解

有一个项目入口文件，`main.ts`；通过内置命令创建一个端口`3000`的服务，而引入的`module`文件指向对于项目文件的`module`文件；如下代码

```js
import { Module } from "@nestjs/common";
import { AppController, UserController } from "./app.controller";
// 这里是我自定义写了一个简单的控制器
import { UserService } from "./app.user";
import { AppService } from "./app.service";

@Module({
	imports: [],
	// 引入controller控制器
	controllers: [AppController, UserController],
	// 引入指向controller控制器的方法
	providers: [AppService, UserService],
})
// 导出 方便在main.js 调用
export class AppModule {}
```

上面代码中引入的模块是以数组的形式存在的，可以引入不同的控制器；

当然我们在新建一个新的控制器，目的是为了查询数据库里的用户信息；

```js

// app.controller.ts
@Controller('user')
export class UserController{
  // 指向的UserService类
  constructor(private readonly userService: UserService) {
  }

  @Get('findOne')
  // 这个接口需要接受的参数
  findUser(@Query() query: any){
    return this.userService.findAll(query.id);
  }

}



// app.user.ts
import {Injectable} from '@nestjs/common'

@Injectable()
export class UserService{
  // 接受id
  findAll(sid: string) :string {
    console.log(sid);
    if (sid === '123456') {
      return '123456'
    }

    return 'not 123456';
  }
}
```

简单介绍一下， 后期等用到真正开发的时候具体说明； 仅仅做一个文档记录看法；

## 个人观点

- 使用 ts 更好的确定数据类型，不会做一些没必要的逻辑
- 代码明确，看上去类似于 java；又和加 java 不同；
