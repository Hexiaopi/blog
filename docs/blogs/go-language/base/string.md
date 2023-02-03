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

**零值：** “”

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
for i := 0; i < len(str); i++ {
	fmt.Println(i, string(str[i]))
}
```

### rune遍历

```go
for i,s := range str{
  fmt.Println(i, string(s))
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

## 字符串高效构造方式
Go语言构造字符串的方式有：
- `+`
- `fmt.Sprintf`
- `strings.Join`
- `strings.Build`
- `bytes.Buffer`

但哪种方法最为高效呢？

### 构造函数
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
### 性能测试
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
### 测试结果
```
goos: darwin
goarch: amd64
cpu: Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz
BenchmarkConcatStringByOperator-8                       10788649                99.73 ns/op           80 B/op            2 allocs/op
BenchmarkConcatStringBySprintf-8                         2642611               450.7 ns/op           176 B/op            8 allocs/op
BenchmarkConcatStringByJoin-8                           21215736                54.73 ns/op           48 B/op            1 allocs/op
BenchmarkConcatStringByStringsBuilder-8                 10769900               109.9 ns/op           112 B/op            3 allocs/op
BenchmarkConcatStringByStringsBuilderWithInitSize-8     22048483                48.37 ns/op           64 B/op            1 allocs/op
BenchmarkConcatStringByBytesBuffer-8                    12242702                81.83 ns/op          112 B/op            2 allocs/op
BenchmarkConcatStringByBytesBufferWithInitSize-8        21283641                49.62 ns/op           48 B/op            1 allocs/op
PASS
ok      command-line-arguments  9.156s
```