---
title: string字符串
date: 2022-01-23
tags:
 - Go
 - 基础
categories:
 -  Go语言
---

## 声明

**关键字定义：** string

**零值：** ""

```go
var str string
```

## 操作

字符串支持一些简单的运算或操作，如下：

|  操作  |      含义      |     示例      |   结果   |
| :----: | :------------: | :-----------: | :------: |
|  x+y   |   字符串连接   |  "Go"+"lang"  | "Golang" |
| len(x) | 计算字符串长度 | len("Golang") |    6     |
| str[i] |     取字符     |  "Golang"[3]  |    a     |

### 比较
支持各种比较关系运算符: `==`、`!=`、`>=`、`<=`、`>`、`<`
```go
package main

import "fmt"

func main() {
	// ==
	s1 := "世界和平"
	s2 := "世界" + "和平"
	fmt.Println(s1 == s2) // true

	// !=
	s1 = "Go"
	s2 = "C"
	fmt.Println(s1 != s2) // true

	// < and <=
	s1 = "12345"
	s2 = "23456"
	fmt.Println(s1 < s2)  // true
	fmt.Println(s1 <= s2) // true

	// > and >=
	s1 = "12345"
	s2 = "123"
	fmt.Println(s1 > s2)  // true
	fmt.Println(s1 >= s2) // true
}
```

### 遍历

::: tip
Go语言支持UTF-8格式编码，因此字符串中字符可以是ASCII字符，也可以是Unicode字符
- `byte`类型来表示ASCII字符
- `rune`类型来表示Unicode字符
:::
```go
str := "中国欢迎您"
```
因此Go字符串遍历也支持两种方式：`byte`和`rune`
#### byte遍历
```go
  str := "hello"
	for i := 0; i < len(str); i++ {
		fmt.Println(i, string(str[i]))
	}
  // 0 h
  // 1 e
  // 2 l
  // 3 l
  // 4 o
```
::: warning 
由于UTF-8中，大多数中文字符都使用三字节表示，因此通过rune方式遍历中文字符串是不可取的<Badge text="注意" type="warning"/>
:::
```go
	str := "你好"
	for i := 0; i < len(str); i++ {
		fmt.Println(i, string(str[i]))
	}
	// 0 ä
	// 1 ½
	// 2
	// 3 å
	// 4 ¥
	// 5 ½
```

#### rune遍历
::: tip
rune实际上类型是int32，因此打印时展示的是数字类型
:::
```go
  str := "hello"
  for i,s := range str{
    fmt.Println(i, string(s))
  }
  // 0 h
  // 1 e
  // 2 l
  // 3 l
  // 4 o
```
::: warning
遍历中文字符索引的变化<Badge text="注意" type="warning"/>
:::
```go
  str := "你好"
  for i, v := range str {
		fmt.Println(i, v, string(v))
	}
  //0 20320 你
  //3 22909 好
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
- len是字符串长度，因此len(s)是O(1)复杂度的操作

因此传参是可以将字符串作为参数，而不必传字符串指针。
::: warning
字符串的内容可以用类似数组下标的方式获取，例如str[0]，但与数组不同，字符串的内容初始化后不可修改<Badge text="注意" type="warning"/>，只能重新构造新的字符串，带来的好处是线程安全
:::
```go
package main

import "fmt"

func main() {
	var s string = "hello"
	s1 := []byte(s)
	s1[0] = 'z'
	fmt.Println(s, string(s1)) //hello zello
}
```


## 字符串高效构造方式
Go语言构造字符串的方式有：
- `+`
- `fmt.Sprintf`
- `strings.Join`
- `strings.Build`
- `bytes.Buffer`

但哪种方法最为高效呢？
```go
import (
	"bytes"
	"fmt"
	"strings"
	"testing"
)

var sl []string = []string{
	"Rob Pike ",
	"Robert Griesemer ",
	"Ken Thompson ",
}

func concatStringByOperator(sl []string) string {
	var s string
	for _, v := range sl {
		s += v
	}
	return s
}

func concatStringBySprintf(sl []string) string {
	var s string
	for _, v := range sl {
		s = fmt.Sprintf("%s%s", s, v)
	}
	return s
}

func concatStringByJoin(sl []string) string {
	return strings.Join(sl, "")
}

func concatStringByStringsBuilder(sl []string) string {
	var b strings.Builder
	for _, v := range sl {
		b.WriteString(v)
	}
	return b.String()
}

func concatStringByStringsBuilderWithInitSize(sl []string) string {
	var b strings.Builder
	b.Grow(64)
	for _, v := range sl {
		b.WriteString(v)
	}
	return b.String()
}

func concatStringByBytesBuffer(sl []string) string {
	var b bytes.Buffer
	for _, v := range sl {
		b.WriteString(v)
	}
	return b.String()
}

func concatStringByBytesBufferWithInitSize(sl []string) string {
	buf := make([]byte, 0, 64)
	b := bytes.NewBuffer(buf)
	for _, v := range sl {
		b.WriteString(v)
	}
	return b.String()
}
```
我们进行基准测试如下：
```go
package concat

import (
	testing
)

func BenchmarkConcatStringByOperator(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringByOperator(sl)
	}
}

func BenchmarkConcatStringBySprintf(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringBySprintf(sl)
	}
}

func BenchmarkConcatStringByJoin(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringByJoin(sl)
	}
}

func BenchmarkConcatStringByStringsBuilder(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringByStringsBuilder(sl)
	}
}

func BenchmarkConcatStringByStringsBuilderWithInitSize(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringByStringsBuilderWithInitSize(sl)
	}
}

func BenchmarkConcatStringByBytesBuffer(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringByBytesBuffer(sl)
	}
}

func BenchmarkConcatStringByBytesBufferWithInitSize(b *testing.B) {
	for n := 0; n < b.N; n++ {
		concatStringByBytesBufferWithInitSize(sl)
	}
}
```
测试结果
```
go test -benchmem -bench=. concat.go concat_test.go 
goos: darwin
goarch: amd64
cpu: Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz
BenchmarkConcatStringByOperator-8                        9819921               118.6 ns/op            80 B/op          2 allocs/op
BenchmarkConcatStringBySprintf-8                         2001465               596.3 ns/op           176 B/op          8 allocs/op
BenchmarkConcatStringByJoin-8                           16353861                69.96 ns/op           48 B/op          1 allocs/op
BenchmarkConcatStringByStringsBuilder-8                  8713630               134.5 ns/op           112 B/op          3 allocs/op
BenchmarkConcatStringByStringsBuilderWithInitSize-8     19554391                60.47 ns/op           64 B/op          1 allocs/op
BenchmarkConcatStringByBytesBuffer-8                    11406288               102.7 ns/op           112 B/op          2 allocs/op
BenchmarkConcatStringByBytesBufferWithInitSize-8        18708632                62.37 ns/op           48 B/op          1 allocs/op
PASS
ok      command-line-arguments  9.939s
```
:eyes:
- 预初始化的strings.Builder构建字符串效率最高
- fmt.Sprintf性能最差
- 未知字符串长度情况下使用strings.Join比较好