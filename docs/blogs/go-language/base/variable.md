---
title: 变量
date: 2022-01-23
tags:
 - Go
 - 基础
categories:
 -  Go语言
---

## 变量

> 程序运行过程中，数据常常分配在内存中，我们在编码阶段用一个易于阅读的名字来定义这块内存，这块内存上存储的数据其值可以经常改变，我们就称为变量(variable)
>
> 变量的类型决定了变量在内存的长度和存储格式

### 声明

#### 一个变量

```go
var <variable_name> [variable_type]
```

例如：

```go
var x int			//自动初始化int的零值即0
var y = false //编译器自动推断为bool类型，并赋值为false
```

:eyes:

- 编译器确保变量被初始化为`零值`，避免出现不可预测行为
- 定义的变量如果未使用，会编译不通过

#### 多个变量

```go
//不同类型变量
var (
  i int 
  s string
)
//相同类型变量
var x,y int 
```

#### 短变量

```go
count := 10 //编译器自动推断为int类型
x,y := 0,1	//多个变量同时定义
```

:eyes:

- 必须给变量相同数量的值，由编译器推断类型

- 短变量声明只可存在函数中，不可全局声明

  ```go
  package main
  
  import "fmt"
  
  x:=0		//编译失败
  
  func main(){
  	fmt.Println(x)
  }
  ```

- 由于使用了`:=`，因此至少有一个`新声明的变量`出现在左值，否则编译失败

  ```go
  var x,y int
  x,y:=0,1 //编译失败
  x,z:=0,1 //z是新声明的变量
  ```

#### 匿名变量

> 匿名变量是以下划线`_`声明的，通常用于多值返回时忽略某个值

```go
result,_ := json.Marshal(s) //忽略err
```

### 零值

> Go语言中，当一个变量被定义为某一种数据类型后，Go语言回自动初始化其值为零值（Zero Value），零值并不等于空值，而是对应数据类型的默认值。

- 整型默认值为：0
- 浮点型默认值为：0.0
- 布尔类型的默认值是：false
- 字符串类型的默认值为：""
- 复数类型默认值为对应实部和虚部的零值：0+0i
- `function`、`interface`、`map`、`slice`、`channel`等类型为nil，表示没有分配内存地址
- `struct`和`array`则是分配了内存，其子元素对应上述的零值

### 作用域

变量的作用（使用）范围称为变量的作用域，通常来说，一段程序代码中所用到的变量并不总是有效或可用的，而限定这个变量的可用范围即作用域，根据作用域可将变量分为两种：全局变量和局部作变量。

作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了命名冲突。

#### 全局变量

>全局变量（Global Variables）是在函数外部定义的变量，它的作用范围涵盖了整个包。

#### 局部变量

> 局部变量（Local Variables）是在函数内部或`{}`内定义的变量，它的作用范围仅限域函数内部或`{}`内。

:eyes:

存在变量地址变化问题，须小心使用

```go
package main

import "fmt"

var x = 100

func main() {
	fmt.Println(&x, x)
	x = 101
	fmt.Println(&x, x)
	x := 102
	fmt.Println(&x, x)
	x, y := 200, 2
	fmt.Println(&x, x, y)
	{
		x, z := 300, 3
		fmt.Println(&x, x, z)
	}
	fmt.Println(&x, x)
}


//输出
0x1149268 100				//x初始地址和值
0x1149268 101				//只是修改了值
0xc0000140a0 102		//x被重新定义，x的地址已经发生变化
0xc0000140a0 200 2	//由于y是新声明的变量，x没有被重新定义，x的地址没有发生变化
0xc0000140a8 300 3	//新的作用域，x为新定义的变量，作用范围在该作用域内
0xc0000140a0 200		//离开作用域，x为上文的变量
```

### 声明原则

> 就近原则，尽可能在靠近第一次使用变量的位置声明该变量

例如：`$GORROT/src/net/http/request.go`

```go
var ErrNoCookie = errors.New("http: named cookie not present")

// Cookie returns the named cookie provided in the request or
// ErrNoCookie if not found.
// If multiple cookies match the given name, only one cookie will
// be returned.
func (r *Request) Cookie(name string) (*Cookie, error) {
	for _, c := range readCookies(r.Header, name) {
		return c, nil
	}
	return nil, ErrNoCookie
}
```
