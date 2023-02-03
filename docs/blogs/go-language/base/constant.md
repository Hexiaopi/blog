---
title: 常量
date: 2022-05-03
tags:
 - Go
 - 基础
categories:
 -  Go语言
---


## 常量

> 常量（constant），顾名思义，程序运行期间，其值不能改变的量。

### 声明

#### 一个常量

```
const <constant_name> [constant_type] = <赋值表达式>
```

例如

```go
const PI float32 = 3.1415926

const str = "Go" //编译器自动推断类型为string类型
```

#### 多个常量

```go
const a, b, c = 1, "Go", 'c' //自动推断a是整型、b是字符串类型、c是字节型
```

#### 常量组

例如：`$GOROOT/src/net/http/method.go`

```go
const (
	MethodGet     = "GET"
	MethodHead    = "HEAD"
	MethodPost    = "POST"
	MethodPut     = "PUT"
	MethodPatch   = "PATCH" // RFC 5789
	MethodDelete  = "DELETE"
	MethodConnect = "CONNECT"
	MethodOptions = "OPTIONS"
	MethodTrace   = "TRACE"
)
```

:eyes:

> 如果不指定类型和初始化值，则默认表示使用上行的赋值表达式

```go
const (
	x int = 1
	y						//y为1
	a = "a"
	b						//b为"a"
	c = ""
	d						//d为""
)
```

### 初始化

规则：

- **常量值必须是确定的，不能使用程序运行期间不确定的值** :eyes:

  ```go
  const (
    x = runtime.NumCPU()	//编译不通过，因为runtime.NumCPU()是在程序运行期间获取到的机器CPU个数
    y = len("hello world") //编译通过，内置函数len等可以使用
  )
  ```

- **常量的值在编译过程已确定，作为指令数据使用，没有内存分配** :bangbang:

  ```go
  package main
  
  import (
  	"fmt"
  )
  
  const x = 100
  
  func main() {
  	fmt.Println(&x,x)		//编译不通过，获取不到地址
  }
  ```