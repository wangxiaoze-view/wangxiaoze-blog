---
title: 使用pm2管理Node项目
index: false
icon: flower
isOriginal: true
tag:
  - pm2
category:
  - Node
---

::: tip 🌏 简单介绍
💡 项目使用 node 开发, 开发过程中会遇到 node 一旦报错就会停止服务的问题，每次还要重新启动，比较麻烦，也是非常不方便的， 为了解决这样的问题，建议使用 pm2 去管理项目
:::

## PM2 是什么？

PM2（Process Manager 2 ）是具有内置负载均衡器的 Node.js 应用程序的生产运行时和进程管理器。 它允许您永久保持应用程序活跃，无需停机即可重新加载它们，并促进常见的 Devops 任务。

### PM2 特性

- [x] 日志管理：应用程序日志保存在服务器的硬盘中~/.pm2/logs/
- [x] 负载均衡：PM2 可以通过创建共享同一服务器端口的多个子进程来扩展您的应用程序。这样做还允许您以零秒停机时间重新启动应用程序。
- [x] 终端监控：可以在终端中监控您的应用程序并检查应用程序运行状况（CPU 使用率，使用的内存，请求/分钟等）。
- [x] SSH 部署：自动部署，避免逐个在所有服务器中进行 ssh。
- [x] 静态服务：支持静态服务器功能
- [x] 多平台支持：适用于 Linux（稳定）和 macOS（稳定）和 Windows（稳定）

### 安装使用

```sh
  // npm方式
npm install pm2 -g

// yarn方式
yarn global add pm2
```

### 启动服务

```sh
// 启动
pm2 start app.js

// 更改名字启动
pm2 start app.js --name xxx
```

### 停止服务

```sh
// 停止对应的id服务
pm2 stop [id]

// 停止所有
pm2 stop all

// 停止当前服务
pm2 stop [AppName]
```

### 删除服务

```sh
// 删除对应的id服务
pm2 delete [id]

// 删除所有
pm2 delete all

// 删除当前服务
pm2 delete [AppName]
```

### 开机自启

// 开机自启

```sh
pm2 startup
7. 更新pm2
pm2 updatePM2
pm2 update
```

### 监听项目

```sh
// 当项目文件发生变化后, 自动重启
pm2 start app.js --watch
```

### 静态服务器

```sh
// 将目录dist作为静态服务器根目录，端口为9090
pm2 serve ./dist 9090
```

### 重启服务

```sh
// 重启对应的id服务
pm2 reload  [id]

// 重启所有
pm2 reload  all

// 重启当前服务
pm2 reload  [AppName]
```

### 查看 pm2 启动的项目

```sh
pm2 list
```

### 显示每个应用程序占用情况

```sh
pm2 monit
```

### 显示应用程序所有信息

```sh
// 对应的id服务
pm2 show  [id]

// 当前服务
pm2 show  [AppName]
```

### 日志查看

```sh
// 对应的id服务
pm2 logs  [id]

// 所有
pm2 logs

// 当前服务
pm2 logs  [AppName]
```

## 🛸 参考资料

● [PM2 介绍及简易使用手册](http://auan.cn/internet/2059.html)
