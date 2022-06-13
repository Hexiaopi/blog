---
title: 版本规范
date: 2020-01-25
tags:
 - 规范
 - 版本
categories:
 -  项目规范
---

**语义化版本规范**
>语义化版本规范（SemVer,Semantic Versioning）是Github起草的一个具有指导意义的、统一的版本号表示规范。
>它规定了版本号的表示、增加和比较方式，以及不同版本号代表的含义。

语义化版本格式为：`主版本号.此版本号.修订号（X.Y.Z）`，其中X、Y和Z为非负整数，且禁止在数字前方补零。
例如：v1.2.3

版本号增加的含义：
- 主版本号（MAJOR）：当做了不兼容的API修改。一般用于大的功能变动，影响到之前的功能。
- 次版本号（MINOR）：当做了向下兼容的功能性新增及修改。一般用于不影响之前逻辑的功能优化，或者新的功能。
- 修订号（PATCH）：当做了向下兼容的问题修正，一般用于问题修复。

关于语义化版本规范详细内容参考：[semver.org](https://semver.org/lang/zh-CN/)

另外可以使用一些工具规范版本号：
- [gsemver](https://github.com/arnaud-deprez/gsemver)
  - 使用`gsemver bump`命令就可以根据Git历史提交约定生成下一个版本
- [cz-cli](https://github.com/commitizen/cz-cli)