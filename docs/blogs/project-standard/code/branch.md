---
title: 分支规范
date: 2020-02-11
tags:
 - 规范
 - 分支
categories:
 -  项目规范
---

![git-model](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015122301.png)
::: tip
一个好的代码分支应该是怎样的:question:
:::

<!-- more -->

## 分支模型

我们经常使用Git用于管理版本，但如果没有清晰的流程和规范，会导致难以协调和维护。
Vincent Driessen 为了解决这个问题，提出[A Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)

![git-model](../images/git-model@2x.png)

## master分支

这个分支保持最近发布到生产环境的代码。
::: warning 注意

- 不能在这个分支直接修改
- 生产环境运行的代码和该分支保持一致
- master分支每合并一个hotfix/release分支，都会打一个版本标签
:::

## develop分支

这个分支是我们的主开发分支
::: warning 注意
feature/release/hotfix都需要合并到该分支
:::

## feature分支

这个分支是用来开发新的功能，一旦开发完成，合并到develop分支并进入下一个release
::: warning 注意

- 分支命名建议：`feature/xxx-xxx`
- 合并到develop分支需要删除该分支，如果有bug，在对应的release分支进行修复
- feature分支合并到develop分支之前先pull一下develop分支，避免冲突
:::

## release分支

当需要发布一个新的release的时候，基于develop分支创建一个release分支
::: tip 提示

- 分支名建议命名`release/xxx-xxx`
- 测试人员基于release分支进行测试，如有bug，也在该分支修复，再测试。
- 完成release分支后需要合并到master和develop分支
:::

## hotfix分支

当在现网发现bug时，需要创建一个hotfix分支进行修复，完成后合并到master和develop，hotfix的改动会进入下一个release
::: warning 注意

- 建议命名：`hotfix/xxx-xxx`
- 只能基于master分支创建hotfix分支
:::
