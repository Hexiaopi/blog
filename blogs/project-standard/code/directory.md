---
title: 目录规范
date: 2020-02-09
tags:
 - 规范
categories:
 -  项目规范
---

::: tip
一个好的代码目录应该是怎样的:question:
:::

<!-- more -->

## 目录结构


> 可以通过以下维度进行考量：
> 
> - 命名清晰：目录命名需要简洁，清晰的表达出该目录实现的功能，做到一看到该目录名就知道是干嘛的；
>
> - 功能明确：目录的功能必须明确，例如：api目录是接口服务、service目录是业务逻辑；
>
> - 功能齐全：例如测试、构建、脚本、工具、文档等；

这里参考Go语言公认项目目录[project-layout](https://github.com/golang-standards/project-layout)结构如下：

```
.
├── api
├── assets
├── build
│   ├── ci
│   └── package
├── cmd
│   └── _your_app_
├── configs
├── deployments
├── docs
├── examples
├── githooks
├── init
├── internal
│   ├── app
│   │   └── _your_app_
│   └── pkg
│       └── _your_private_lib_
├── pkg
│   └── _your_public_lib_
├── scripts
├── test
├── third_party
├── tools
├── vendor
├── web
│   ├── app
│   ├── static
│   └── template
└── website
```

## Go目录

### cmd
> 该项目的主要应用，每个应用程序的目录名称应与执行文件的名称相匹配，例如：`/cmd/myapp`

### internal
> 存放私有应用和库代码，如果一些代码，你不希望在其他在其他应用和库中被导入，可以放在internal目录下

### pkg
> 与internal相反，该目录存放可供其他应用程序使用的库代码。

### vendor
> 该目录存放项目依赖，可通过`go mod vendor`创建。
> [!ATTENTION]
> 如果开发的是Go语言库，不要提交vendor依赖包

## 服务应用程序目录

### api
> OpenAPI/Swagger规范、JSON模式文件、协议定义文件

## Web应用程序目录

### web
> 前端代码存放目录，用来存放Web静态资源，服务端模块和单页应用（SPAs）

## 通用应用目录

### configs
> 配置文件

### init
> 系统初始化（systemd、upstart、sysv）和进程管理器(runit、supervisord)配置文件，在非容器化部署的项目中会使用到。

### scripts
> 执行各种构建、安装、分析等操作的脚本。这些脚本使根级 Makefile 小而简单（例如，https://github.com/hashicorp/terraform/blob/master/Makefile）。

### build
> 打包和持续集成
> 
> 将云 (AMI)、容器 (Docker)、操作系统（deb、rpm、pkg）包配置和脚本放在`/build/package`目录中。
>
> 将CI（travis、circle、drone）配置和脚本放在`/build/ci`目录中。


::: warning 注意
一些 CI 工具（例如 Travis CI）对其配置文件的位置非常挑剔。尝试将配置文件放在/build/ci将它们链接到 CI 工具期望它们的位置的目录中（如果可能）。
:::

### deployments
> IaaS、PaaS、系统和容器编排部署配置和模板（docker-compose、kubernetes/helm、mesos、terraform、bosh）。
::: warning 注意
在某些存储库（尤其是使用 kubernetes 部署的应用程序）中，此目录称为`deploy`.
:::

### test
> 其他外部测试应用程序和测试数据。对于更大的项目，有一个数据子目录是有意义的。例如：`/test/data`或者`/test/testdata`
::: warning 注意
Go 也会忽略以“.”开头的目录或文件。或“_”，因此您可以更灵活地命名测试数据目录。
:::

## 其他目录

### docs
> 设计和用户文档，除了`godoc`生成的文档之外

### tools
> 该项目的支持工具
::: warning 注意
这些工具可以从`pkg`和`internal`目录导入代码
:::

### examples
> 应用程序和公共库的示例

### third_party
> 外部帮助工具

### githooks
> Git钩子

### assets
> 其他资产，例如：图像、徽标等

### website
> 项目网站数据

## 不应该拥有的目录
### src
> Go语言的工作空间包含：`pkg`、`bin`、`src`。且项目代码放在`src`目录下，如果一个Go项目包含`src`目录，则项目路径将会变成：`/some/path/to/workspace/src/your_project/src/your_code.go`，就变得非常丑。
