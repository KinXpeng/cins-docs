---
title: Git
order: 9
nav:
  title: 进阶
  order: 2
---

## 切换分支与远程仓库关联

```js
// 1.拉取远程分支origin/branch到本地并创建一个新的关联分支
git checkout -b newbranch origin/branch
// 2.将本地分支上传到远端，同时关联newbranch和远端branch分支
git push --set-upstream origin newbranch:origin/branch
// 3.将本地newbranch分支与远端branch分支关联
git branch --set-upstream-to=origin/branch newbranch
```

## 使用 gum 配置多个 git 账号

```js
// 安装
npm i -g @gauseen/gum

// 列出本地配置
gum list

// 使用
Usage: gum [options] [command]

Options:
  -V, --version               output the version number
  -h, --help                  display help for command

Commands:
  list                        List all the user config group
  set [options] <group-name>  Set one group for user config
    --name                    User name
    --email                   User email
  use [options] <group-name>  Use one group name for user config
    --global                  Git global config
  delete <group-name>         Delete one group
  help [command]              display help for command

// 使用示例
gum set github --name KinXpeng --email xxxx@163.com
```

## 切换分支时保存本地更改

```js
// 保存当前未commit的代码
git stash

// 保存当前未commit的代码并添加备注
git stash save "备注的内容"

// 列出stash的所有记录
git stash list

// 删除stash的所有记录
git stash clear

// 应用最近一次的stash
git stash apply

// 应用最近一次的stash，随后删除该记录
git stash pop
```

## 切换分支合并分支

```js
// 切换分支（切换前需commit当前代码）
git checkout dev1

// 在dev1上合并dev2,合并后需push到远程仓库
git merge dev2
git push
```

## 使用 https 克隆时避免重复输入密码

```js
// 第一步是在本地仓库中执行以下命令，将账号密码保存到git的配置文件中：
git config --global credential.helper store

// 第二步是在进行https协议的git操作时，输入一次用户名和密码。
// 之后就可以自动使用保存的账号密码进行操作了。

/* 或者使用下面这种方式保存 */
git config --global credential.helper manager-core
```

## 将某一分支代码覆盖另一分支

```js
git push origin dev1:dev2 -f
```
