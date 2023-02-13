---
title: goroutine和调度原理
date: 2023-02-13
tags:
 - Go
 - 基础
categories:
 -  Go语言
---

Go语言原生支持并发能力，而goroutine是Go语言原生支持并发的具体实现，本篇将为你揭开goroutine的面纱。

![goroutine](http://cdn.cjhe.top/blog/goroutine.png)

<!-- more -->

## goroutine
goroutine是由Go运行时管理的用户层轻量级线程，相比较操作系统线程，goroutine的资源占用和使用代价都要小的多，一个goroutine初始只需要2KB的内存，而线程需要MB级别的空间，这样在有限的内存空间里，可以创建的giroutine的数量相比较线程数量多的多。其次由于线程切换需要拷贝大量的上下文，这就导致线程切换耗时较高。

## GPM模型
![goroutine](./images/goroutine.png)
GPM模型中：
- G代表goroutine，存储了goroutine的执行栈信息、goroutine状态及goroutine的任务函数等
- P代表process，逻辑处理器，所有的P都在程序启动时创建，P的数量决定了系统内最大可并行的G的数量，最多有GOMAXPROCS(可配置)个
- M代表thread即用户态线程，M在绑定有效的P后，进入到一个调度循环：从各种队列、P的本地队列获取G，切换到G的执行栈上并执行G的函数，调用goexit做清理工作并回到M。如此反复。

此外还有：
- 全局队列(Global Queue)：存放等待运行的G
- P的本地队列(Local Queue)：存放的也是等待运行的G，数量不超过256个。
  - 当G新建goroutine G'时，G'优先加入到P的本地队列(局部性，G和G'相关)
  - 如果队列满了，则会把本地队列中的一半G移动到全局队列

## 调度策略
::: tip
其思想：复用线程M，避免频繁的创建、销毁
:::
### work stealing机制
当本地队列无可运行的G时，会尝试从其他P队列中偷取G，而不是销毁M

### hand off机制
当M因为G进行系统调用阻塞时，M会释放绑定的P，将P转移给其他空闲的M进行执行，如果没有，则新建M
