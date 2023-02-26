---
title: git基础学习
index: false
icon: flower
isOriginal: true
tag:
  - 简介
category:
  - git
---

## 温馨提示

::: info 提示：
基础`git`暂时这样整理完成，后期可继续整理;
:::

## 配置 user 信息

### 全局配置 user

```sh
git config --global user.name "username"
git config --global user.email "username@example.com"
```

### config 的三个作用域

缺省等同于 local；

```sh
# local只对某个仓库有效
git config --local

# global对当前用户所有仓库有效
git config --global

# system 对系统所有登录的用户有效
git config --system
```

显示 config 的配置，加`--list`

```sh
git config --list --local
git config --list --global
git config --list --system
```

## 创建一个仓库并配置 local 用户信息

### 俩种场景

1. 把已有的项目代码纳入 git 管理

```sh
cd 项目代码所有的文件夹
git init
```

2. 新建的项目直接使用 git 管理

```sh
cd 某个文件夹
# 会在当前路径创建和项目名称相同的文件夹
git init your_project
cd your_project
```

当 git 初始化完成之后，创建一个`local`的用户；

```sh
cd your_project
git config --local user.name "你的用户名"
git config --local user.email "你的密码"
```

添加完成之后，我们可以通过命令`git config --local --list`可以快速查看配置的用户信息；

```sh
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
user.name=这里显示的是你配置的用户名
user.email=这显示的是你配置的电子邮箱
```

配置成功之后，通过命令提交文件；

```sh
# 在这之前，可以先创建一个文件 README.md
git add README.md
git commit -m "Add README.md"
```

提交成功之后会默认创建一个`master`的分支，可以通过命令`git log` 查看

```sh
git log

# 日志信息如下
commit 3ffd6982361494c34c5ade40cd69777f1993812c (HEAD -> master)
Author: 显示的是你用户名 <显示的是你的电子邮箱>
Date:   Thu Jan 5 21:20:49 2023 +0800

    Add Readme
```

## 给文件名重命名

```sh
# 步骤一：
mv index.html index.copy.html


Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.copy.html

no changes added to commit (use "git add" and/or "git commit -a")
```

这里虽然我们已经更新了文件名字，但是对于 git 仓库里还是会存在原来的文件名，这是我们删除原来的，添加最新的；

```sh
# 步骤二： 删除原来的
git rm index.html
# 步骤三： 添加最新的
git add index.copy.html
# 查看状态
git status
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    index.html -> index.copy.html
```

这里可以使用 git 命令撤销会退， 但是这是一个危险操作，会把暂存区的文件会退；`git reset --hard`

```sh
# 简化上面的操作，变更的文件 以及变更后的文件, 这里的效果简化成上面的三步骤
git mv index.html index.copy.index
```

这里变更或者移动文件可以参考文献： [git mv 命令](https://www.yiibai.com/git/git_mv.html)

## git 的版本历史

```sh
# 无参数
git log

# 所有分支log, 但是这种情况对于多分支 多提交是比较累的(没有眼睛或者*号) 可以使用 --graph（有眼睛或者*号）
git log --all
# 图形化的用用法 || gitk
git log --all --graph


# 简介模式、
git log --oneline
64b9a4b (HEAD -> master) Move index.html to index.copy.html
ebe990b Add index
3ffd698 Add Readme

# 最近的几个commit
git log -n2 --oneline
64b9a4b (HEAD -> master) Move index.html to index.copy.html
ebe990b Add index


# 查看分支
git branch -v
* master 64b9a4b Move index.html to index.copy.html
```

**`git log --all --graph`** 的效果如下：

![git log --all --graph](/assets/images/1672927465614.jpg)

## 怎么删除不需要的分支？

```sh
# 部分情况下可能会删除不掉
git branch -d 分支名

git branch -D 分支名

# 例如：
git branch -d temp
```

## 怎么修改最新的 commit 的 message?

> 使用场景很简单， 就是最新提交的 commit message 不是很明确的情况下，需要使用该命令区修改最新提交 commit message 的；

```sh
git commit --amend
# 直接 输入i进行编辑， wq保存退出

```

例子：
比如我在 git 提交了 3 条 commit, 如下：

```sh
commit 3
Author: cs <123@qq.com>
Date: 2023
  add: 第三次提交

commit 2
Author: cs <123@qq.com>
Date: 2023
  add: 第二次提交

commit 1
Author: cs <123@qq.com>
Date: 2023
  add: 第一次提交
```

由于第三次提交的提交消息我输错了。我想修改最新的即第三次提交的 commit message;

这时可以使用`git commit --amend`, 进去之后直接操作 vim。修稿你的 commit message 就可以了；

```sh
# 解释： 这里就是你 git commit --amend命令之后的界面“， 直接将下面的消息文案修改为你想要的commit message就可以
add: 添加服务

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Jan 6 21:36:05 2023 +0800
#
# On branch master
# Changes to be committed:
#       new file:   server.js
#
```

## 怎么修改老旧的 commit 的 message?

```sh
# 变基
git rebase -i 变更的上一个分支id
```

例子：
比如我在 git 提交了 3 条 commit, 如下：

```sh
commit 3
Author: cs <123@qq.com>
Date: 2023
  add: 第三次提交

commit 2
Author: cs <123@qq.com>
Date: 2023
  add: 第二次提交

commit 1
Author: cs <123@qq.com>
Date: 2023
  add: 第一次提交
```

但是我想修改第二次提交的 commit message; 可以使用`git rebase -i 1`;
这里的`1` 是你想要修改第几次提交的父级 id;

```sh
# 效果如下
pick 3 add: 第三次提交
# 这是第二条的， 吧pick 修改为 reword 或者 r 就可以了； 记得保存
pick 2 add: 第二次提交

# Rebase 3ffd698..70639fd onto 3ffd698 (1 command)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]

```

## 把多个(连续的)commit 合并成 1 个

```sh
git rebase -i 合并commit的父级id
```

我想要将 第三次 和 第二次提交的消息合并成 1 个，可以使用`git rebase -i 1`, 这里的`1`是你为谁合并的父级 id；

```sh
# 效果如下
# 这里保留最新的一次的pick, 将其他的pick修改为 squash || s
pick 3 add: 第三次提交
pick 2 add: 第二次提交

# 修改如下： 3 是最新的 2 是最早提交的  吧 最新的合并到最早提交的
pick 3 add: 第三次提交
squash 2 add: 第二次提交


# Rebase 52f2b39..2f79131 onto 52f2b39 (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
```

## 怎样吧间隔的几个 commit 整理成 1 个？

```sh
git rebase -i 间隔的父级id
```

例子：
比如我在 git 提交了 4 条 commit, 如下：

```sh
commit 4
Author: cs <123@qq.com>
Date: 2023
  add: 第四次提交

commit 3
Author: cs <123@qq.com>
Date: 2023
  add: 第三次提交

commit 2
Author: cs <123@qq.com>
Date: 2023
  add: 第二次提交

commit 1
Author: cs <123@qq.com>
Date: 2023
  add: 第一次提交
```

合并 4 和 2， 可以这么使用`git rebase -i 1`,

```sh
# 效果如下
pick 4 add: 第四次提交
pick 3 add: 第三次提交
pick 2 add: 第二次提交

# 修改如下： 将4合并到2 ， 2 是最早提交的，4是最新提交的。 将 2那一行添加在4下面，删除原来的2的那一行，
# 并且将 4下面的2的那一行 的 pick 修改为 squash即可
pick 4 add: 第四次提交
squash 2 add: 第三次提交
pick 3 add: 第三次提交

# Rebase 52f2b39..2f79131 onto 52f2b39 (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
```

## 暂存区和 HEAD 之间的差异？

```sh
git diff --cached
```

```js
// HEAD 上的文件
console.log("api");
```

本地修改文件, 并添加到暂存区；

```js
// HEAD 上的文件
console.log("api");

let a = 100;
```

然后通过命令`git diff --cached`比较俩个文件的区别”

```sh
diff --git a/api.js b/api.js
index 8558a46..26731b7 100644
--- a/api.js
+++ b/api.js

@@ -1 +1,3 @@
-console.log('api')
\ No newline at end of file

+console.log('api')
+
+let a = 100;
\ No newline at end of file

```

## 怎样通过比较工作区和暂存区所含文件的差异？

```sh
# 所有文件
git diff

# api.js
git diff -- api.js
```

预览的效果类似 上面的效果；

## 暂存区恢复成和 HEAD 一样？

```sh
# 恢复所有
git reset HEAD

# 恢复某一个文件
git reset HEAD api.js
```

## 让工作区文件恢复成暂存区一样？

```sh
git checkout -- 文件名
```

## 取消暂存区部分文件的修改？

```sh
git checkout -- api.js  main.js
```

## 消除最近的几次提交？（版本回退）

```sh
git reset --hard 回退版本id
```

例子：
比如我在 git 提交了 3 条 commit, 如下：

```sh
commit 3
Author: cs <123@qq.com>
Date: 2023
  add: 第三次提交

commit 2
Author: cs <123@qq.com>
Date: 2023
  add: 第二次提交

commit 1
Author: cs <123@qq.com>
Date: 2023
  add: 第一次提交
```

但是我不想要第三次提交，想要消除（回退 2 的提交），可以使用 `git reset --hard 2`,

## 不同提交文件的差异？

```sh
# 所有的文文件
git diff 分支1 分支2

# 指定文件
git diff 分支1 分支2 -- index.js

# 指定的分支id 2 是temp分支的commit id,  1是master分支的commit id
git diff 2 1 -- index.js
```

```sh
# git diff 分支1 分支2
diff --git a/api.js b/api.js
index 26731b7..0afa981 100644
--- a/api.js
+++ b/api.js
@@ -1,3 +1,5 @@
 console.log('api')

-let a = 100;
\ No newline at end of file
+let a = 100;
+
+const b = 1000;
```

## 正确删除文件的方法？

```sh
git rm 文件名

# 暂存区 放弃更改
git reset --hard HEAD
```

## 开发中紧急任务怎么处理？

```sh
# 添加存放区，暂存区是一个干净的状态；
git stash

git stash list
# stash@{0}: WIP on master: 886f134 edit: 修改diff

# 1: 拿出来，放在工作区 2: git stash list 对用的信息还存在，可以重复使用
# 即这条信息还存在： {stash@{0}: WIP on master: 886f134 edit: 修改diff}
git stash apply

# 丢掉 Dropped refs/stash@{0} (6fc8e582adf57857a5a2af6eafbe375d6eae287f)
git stash pop

```

## 指定不需要的 git 管理文件？ `.gitignore 文件`

```sh
node_modules/
src/.vuepress/.cache/
src/.vuepress/.temp/
src/.vuepress/dist/
```

## 其他整理

### 选项解释

```sh
-d --delete：删除

-D --delete --force的快捷键

-f --force：强制

-m --move：移动或重命名

-M --move --force的快捷键

-r --remote：远程

-a --all：所有
```

### 分支管理

- 新建分支: `git branch` 分支名
  - `git branch -r` 查看远程分支
  - `git branch -a` 查看远程和本地分支
  - `git branch -f` 新建分支但不切换
  - `git branch -b` 新建分支并切换
  - `git branch -d|-D` 删除本地分支
  - `git branch -m|-M` 强制重命名
- 切换分支: `git checkout 分支名`
- 列出分支: `git branch`
- 删除分支: `git branch -d 分支名`
- 合并分支: `git merge 需要合并的分支`
- 合并分支: `git rebase 合并到的分支`

### 相对引用

- `^`向上移动一个记录 `git checkout 分支 HEAD^`
- 使用 `~` 向上移动多个提交记录，如 `~3`

### 撤销变更

- `git reset` 本地回滚上一步，原来指向的提交记录就跟从来没有提交过一样
- `git revert` 远程回滚，但会生成一条提交记录

### 查看历史

- `git log`
  - `git log --oneline` 查看历史记录的简洁的版本。
  - `git log --graph` 查看历史中什么时候出现了分支、合并。
  - `git log --reverse` 逆向显示所有日志。
