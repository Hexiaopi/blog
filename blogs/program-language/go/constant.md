---
title: 常量
date: 2022-05-03
tags:
 - Go
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

- 常量值必须是确定的，不能使用程序运行期间不确定的值

  ```go
  const (
    x = runtime.NumCPU()	//编译不通过，因为runtime.NumCPU()是在程序运行期间获取到的机器CPU个数
    y = len("hello world") //编译通过，内置函数len等可以使用
  )
  ```

- 常量的值在编译过程已确定，作为指令数据使用，没有内存分配

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

### 枚举

> 枚举，一组常量值，通常用于限定值的范围。

例如：

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

:eyes:**规则说明：**

- 常量组每定义一个常量**iota**就会自动递增1
- 每遇到一个const关键字，iota就会重置为0
- 如果按行递增（如上例所示），可省略后续的iota关键字
- iota只跟常量组的行号有关，跟个数无关，即便是同一行，值也都一样

```go
package main

import "fmt"

const (
	a = 'A'
	b
	c = iota //iota=2
	d				 //iota=3
)

const (
	e = 'E'
	f = iota //iota=1
)

const (
	g, h = iota, iota + 10 //0,10 (iota=0)
	i, j                   //1,11 (iota=1)
)

func main() {
	fmt.Println(a, b, c, d, e, f, g, h, i, j)
}

//输出
//65 65 2 3 69 1 0 10 1 11
```