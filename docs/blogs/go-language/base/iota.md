---
title: 魔幻的iota枚举
date: 2023-02-03
tags:
 - Go
 - 基础
categories:
 -  Go语言
---

::: tip
iota的出现使得枚举值更加方便，但注意哦，并不简单。主要是对iota定义不理解，我整理了一些iota的使用注意事项
:::

<!-- more -->

## iota

> iota是Go语言的一个预定义标识符，它表示的是const声明块或声明行中每个常量所处位置的**偏移值**（从0开始）。

### 规则：如果按行递增，可省略后续的iota关键字

例如：

```go
const (
	Sunday    = iota //0
	Monday           //1
	Tuesday          //2
	Wednesday        //3
	Thursday         //4
	Friday           //5
	Saturday         //6
)
```

这与常量的规则：**如果不指定类型和初始化值，则默认表示使用上行的赋值表达式**一致

上面等价于

```go
const (
	Sunday    = iota //0
	Monday    = iota //1
	Tuesday   = iota //2
	Wednesday = iota //3
	Thursday  = iota //4
	Friday    = iota //5
	Saturday  = iota //6
)
```

### 规则：iota只跟常量组的偏移位置有关

:bangbang:

例如：

```go
const (
	a = 'A'
	b
	c = iota //iota=2
	d        //iota=3

	e = iota //iota=4
	f        //iota=5
)
```

虽然c是第一次使用iota标识符定义，但在const块中位置属于第3，此时iota为2；

d与e之间虽然有空行，但e的偏移位置属于第5，因此iota为4；

### 规则：每遇到一个const关键字，iota就会重置为0

例如：

```go
const x = iota //iota=0
const y = iota //iota=0
```

### 规则：iota跟个数无关，即便是同一行，值也都一样

:bangbang:

例如：

```go
const (
	g, h = iota, iota + 10 //0,10 (iota=0)
	i, j                   //1,11 (iota=1)
)
```

虽然g,h是两个常量，但由于在同一行，iota的值一样

### 规则：如果想从1开始，则可以通过`_`忽略第一个iota

例如：

```go
const (
	_          = iota
	KB float64 = 1 << (10 * iota) //2^10
	MB                            //2^20
	GB                            //...
	TB
	PB
	EB
	ZB
	YB
)
```
