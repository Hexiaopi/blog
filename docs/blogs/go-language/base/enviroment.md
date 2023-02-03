---
title: 项目环境
date: 2022-01-23
tags:
 - Go
 - 基础
categories:
 -  Go语言
---


当下载完Go安装包后，需设置3个环境变量，分别是：
1. GOROOR：Go语言安装根目录的路径，这是下载的Go语言安装路径。
2. GOPATH：工作区目录的路径，这是我们写代码存放的地方。
3. GOBIN：Go程序生成的可执行文件的路径。

可使用命令`go env`来查看当前的设置。

这里重点关注GOPATH，因为这是我们项目存放的地方，且需按照Go语言的源码组织方式组织我们的项目。GOPATH包含多个工作区，每个工作区包含三个文件夹，分别是：

1. src：Go语言的源码文件（source file）。
2. pkg：安装后的归档文件（archive file），即程序编译后生产的静态库文件。同时会根据操作系统和计算机架构生产平台相关目录，例如是linux_amd64则表示是Linux系统，CPU是amd64架构。
3. bin：可执行文件（executable file）。

![GOPATH](./images/GOPATH.png)

此外，还有几个环境变量需要关注

4. GO111MODULE，通过设置on、off、auto来控制是否开启Go Modules特性。
   - on，代表开启Go Modules特性，会让Go编译器忽略GOPATH和vendor文件夹，只根据go.mod下载依赖；
   - off，代表关闭，继续使用GOPATH模式；
   - auto，Go1.14和之后的版本中都是默认值，如果源码在$GOPATH/src下，且没有包含go.mod，则关闭Go Modules特性，否则开启；
5. GOPROXY，Go包下载代理服务器，因为墙的原因，国内无法访问国外的一些网站，但一些依赖包需要从国外的网站下载，为了解决这个问题，需要设置一个代理服务器。例如：`GOPROXY="https://goproxy.cn,direct"`，其中direct的作用是当遇见404错误，则直接去目标地址（比如Github）去获取，而不再使用代理服务器。
6. GOPRIVATE，用于配置访问私有化仓库的代理，例如：`GOPRIVATE=git.xxx.com/`