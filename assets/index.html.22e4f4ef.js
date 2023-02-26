const e=JSON.parse('{"key":"v-74473916","path":"/git/","title":"git基础学习","lang":"zh-CN","frontmatter":{"title":"git基础学习","index":false,"icon":"flower","isOriginal":true,"tag":["简介"],"category":["git"],"description":"温馨提示 提示： 基础git暂时这样整理完成，后期可继续整理; 配置 user 信息 全局配置 user config 的三个作用域 缺省等同于 local； 显示 config 的配置，加--list 创建一个仓库并配置 local 用户信息 俩种场景 1. 把已有的项目代码纳入 git 管理 2. 新建的项目直接使用 git 管理 当 git 初始...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/git/"}],["meta",{"property":"og:site_name","content":"王小泽的前端笔记"}],["meta",{"property":"og:title","content":"git基础学习"}],["meta",{"property":"og:description","content":"温馨提示 提示： 基础git暂时这样整理完成，后期可继续整理; 配置 user 信息 全局配置 user config 的三个作用域 缺省等同于 local； 显示 config 的配置，加--list 创建一个仓库并配置 local 用户信息 俩种场景 1. 把已有的项目代码纳入 git 管理 2. 新建的项目直接使用 git 管理 当 git 初始..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-26T09:21:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"简介"}],["meta",{"property":"article:modified_time","content":"2023-02-26T09:21:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"温馨提示","slug":"温馨提示","link":"#温馨提示","children":[]},{"level":2,"title":"配置 user 信息","slug":"配置-user-信息","link":"#配置-user-信息","children":[{"level":3,"title":"全局配置 user","slug":"全局配置-user","link":"#全局配置-user","children":[]},{"level":3,"title":"config 的三个作用域","slug":"config-的三个作用域","link":"#config-的三个作用域","children":[]}]},{"level":2,"title":"创建一个仓库并配置 local 用户信息","slug":"创建一个仓库并配置-local-用户信息","link":"#创建一个仓库并配置-local-用户信息","children":[{"level":3,"title":"俩种场景","slug":"俩种场景","link":"#俩种场景","children":[]}]},{"level":2,"title":"给文件名重命名","slug":"给文件名重命名","link":"#给文件名重命名","children":[]},{"level":2,"title":"git 的版本历史","slug":"git-的版本历史","link":"#git-的版本历史","children":[]},{"level":2,"title":"怎么删除不需要的分支？","slug":"怎么删除不需要的分支","link":"#怎么删除不需要的分支","children":[]},{"level":2,"title":"怎么修改最新的 commit 的 message?","slug":"怎么修改最新的-commit-的-message","link":"#怎么修改最新的-commit-的-message","children":[]},{"level":2,"title":"怎么修改老旧的 commit 的 message?","slug":"怎么修改老旧的-commit-的-message","link":"#怎么修改老旧的-commit-的-message","children":[]},{"level":2,"title":"把多个(连续的)commit 合并成 1 个","slug":"把多个-连续的-commit-合并成-1-个","link":"#把多个-连续的-commit-合并成-1-个","children":[]},{"level":2,"title":"怎样吧间隔的几个 commit 整理成 1 个？","slug":"怎样吧间隔的几个-commit-整理成-1-个","link":"#怎样吧间隔的几个-commit-整理成-1-个","children":[]},{"level":2,"title":"暂存区和 HEAD 之间的差异？","slug":"暂存区和-head-之间的差异","link":"#暂存区和-head-之间的差异","children":[]},{"level":2,"title":"怎样通过比较工作区和暂存区所含文件的差异？","slug":"怎样通过比较工作区和暂存区所含文件的差异","link":"#怎样通过比较工作区和暂存区所含文件的差异","children":[]},{"level":2,"title":"暂存区恢复成和 HEAD 一样？","slug":"暂存区恢复成和-head-一样","link":"#暂存区恢复成和-head-一样","children":[]},{"level":2,"title":"让工作区文件恢复成暂存区一样？","slug":"让工作区文件恢复成暂存区一样","link":"#让工作区文件恢复成暂存区一样","children":[]},{"level":2,"title":"取消暂存区部分文件的修改？","slug":"取消暂存区部分文件的修改","link":"#取消暂存区部分文件的修改","children":[]},{"level":2,"title":"消除最近的几次提交？（版本回退）","slug":"消除最近的几次提交-版本回退","link":"#消除最近的几次提交-版本回退","children":[]},{"level":2,"title":"不同提交文件的差异？","slug":"不同提交文件的差异","link":"#不同提交文件的差异","children":[]},{"level":2,"title":"正确删除文件的方法？","slug":"正确删除文件的方法","link":"#正确删除文件的方法","children":[]},{"level":2,"title":"开发中紧急任务怎么处理？","slug":"开发中紧急任务怎么处理","link":"#开发中紧急任务怎么处理","children":[]},{"level":2,"title":"指定不需要的 git 管理文件？ .gitignore 文件","slug":"指定不需要的-git-管理文件-gitignore-文件","link":"#指定不需要的-git-管理文件-gitignore-文件","children":[]},{"level":2,"title":"其他整理","slug":"其他整理","link":"#其他整理","children":[{"level":3,"title":"选项解释","slug":"选项解释","link":"#选项解释","children":[]},{"level":3,"title":"分支管理","slug":"分支管理","link":"#分支管理","children":[]},{"level":3,"title":"相对引用","slug":"相对引用","link":"#相对引用","children":[]},{"level":3,"title":"撤销变更","slug":"撤销变更","link":"#撤销变更","children":[]},{"level":3,"title":"查看历史","slug":"查看历史","link":"#查看历史","children":[]}]}],"git":{"createdTime":1677403289000,"updatedTime":1677403289000,"contributors":[{"name":"wangxiaoze","email":"wangxiaoze@petalmail.com","commits":1}]},"readingTime":{"minutes":9.86,"words":2958},"autoDesc":true,"localizedDate":"2023年2月26日","filePathRelative":"git/README.md"}');export{e as data};
