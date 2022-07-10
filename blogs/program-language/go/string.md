---
title: string字符串
date: 2022-01-23
tags:
 - Go
categories:
 -  Go语言
---

## 声明

**关键字定义：**string

**零值：**“”

```go
var str string
```

👣

- 字符串的内容可以用类似数组下标的方式获取，例如str[0]，但与数组不同，字符串的内容初始化后不可修改，只能重新构造新的字符串，带来的好处是线程安全；
- Go语言支持UTF-8格式编码，因此字符串中字符可以是ASCII字符，也可以是Unicode字符；
- Go语言字符串可使用内置函数`len()`来计算ASCII字符的长度，可以使用`utf8.RuneCountInString()`来计算Unicode字符的长度；

## 操作

字符串支持一些简单的运算或操作，如下：

|  操作  |      含义      |     示例      |   结果   |
| :----: | :------------: | :-----------: | :------: |
|  x+y   |   字符串连接   |  "Go"+"lang"  | "Golang" |
| len(x) | 计算字符串长度 | len("Golang") |    6     |
| str[i] |     取字符     |  "Golang"[3]  |    a     |

## 遍历

> 由于字符可以使用两种方式表示：
>
> - `byte`来表示ASCII字符
> - `rune`来表示Unicode字符
> 
> 因此Go字符串遍历也支持两种方式：`byte`和`rune`

### byte遍历

```go
for i:=0;i<len(str);i++{
  fmt.Println(i,string(str[i]))
}
```

### rune遍历

```go
for i,s:=range str{
  fmt.Println(i,string(s))
}
```

## 底层结构

参见`$GOROOT/src/runtime/string.go`

```go
type stringStruct struct {
	str unsafe.Pointer
	len int
}
```

- str是指针，指向底层数据结构，其实是`[]byte`
- len是字符串长度

因此传参是可以将字符串作为参数，而不必传字符串指针。
