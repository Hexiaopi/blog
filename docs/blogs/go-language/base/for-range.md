---
title: for-range遍历
date: 2022-05-14
tags:
 - Go
 - 基础
categories:
 -  Go语言
---

> `for range`同常使用在遍历：数组、指向数组的指针、切片、字符串、map和channel等表达式
>
> 在遍历期间对其值得修改操作要小心！！！

## 数组遍历

```go
package main

import "fmt"

func main() {
	var a = [5]int{1, 2, 3, 4, 5}
	var r [5]int
	fmt.Println(a)
	for i, v := range a {
		if i == 0 {
			a[1] = 12
			a[2] = 13
		}
		r[i] = v
	}
	fmt.Println(r)
	fmt.Println(a)
}
```

```
输出结果如下：
[1 2 3 4 5]
[1 2 3 4 5]
[1 12 13 4 5]
```

> 在i=0时，我们修改了a[1]=12、a[2]=13，但v还是原来的值，这是因为遍历时使用的是数组a的副本，也就没有真实的反应到数组a本身，因此r拿到的数据时a副本的数据，数组a本身并未发生变化。

## 数组指针遍历

```go
package main

import "fmt"

func main() {
	var a = [5]int{1, 2, 3, 4, 5}
	var r [5]int
	fmt.Println(a)
	for i, v := range &a {
		if i == 0 {
			a[1] = 12
			a[2] = 13
		}
		r[i] = v
	}
	fmt.Println(r)
	fmt.Println(a)
}
```

```
输出结果如下：
[1 2 3 4 5]
[1 12 13 4 5]
[1 12 13 4 5]
```

> 此次遍历的是*[5]int作为range的表达式，虽然也是副本，但副本所指向的内存空间是同样的。因此r的值可以改变

## 切片遍历

```go
package main

import "fmt"

func main() {
	var a = [5]int{1, 2, 3, 4, 5}
	var r [5]int
	fmt.Println(a)
	for i, v := range a[:] {
		if i == 0 {
			a[1] = 12
			a[2] = 13
		}
		r[i] = v
	}
	fmt.Println(r)
	fmt.Println(a)
}
```

```
输出结果如下：
[1 2 3 4 5]
[1 12 13 4 5]
[1 12 13 4 5]
```

> 有切片的底层结构，我们知道切片由（`*T`，`len`，`cap`）三元组组成，其中`*T`指向底层数组a。在range遍历时，它实际上复制的是一个切片，且切片的`*T`指向的是同一个底层数组a，因此会修改相同的底层数据。

:eyes:

**但如果切片发生了扩容，导致长度发生了改变，for range遍历的仍是原来的长度**

```go
package main

import "fmt"

func main() {
	var a = []int{1, 2, 3, 4, 5}
	var r = make([]int, 0)
	fmt.Println(a)
	for i, v := range a {
		if i == 0 {
			a[1] = 12
			a[2] = 13
			a = append(a, 6, 7)
		}
		r = append(r, v)
	}
	fmt.Println(a)
	fmt.Println(r)
}
```

```
输出结果如下：
[1 2 3 4 5]
[1 12 13 4 5 6 7]
[1 12 13 4 5]
```

> 切片a在遍历时附加了两个元素，len有5加到7，但由于for range使用的是切片a的副本，仍是长度5。

## 字符串遍历

:eyes:

`string`类型是不可变的，每次循环的单位是一个`rune`,而不是`byte`，虽然底层结构是`byte`。如果遍历过程中存在非法UTF8字节序列，那么将返回`0xfffd`这个特殊值，且下次遍历从下一个`byte`开始，而不是`rune`

```go
package main

import "fmt"

func main() {
	var s = "中国人"

	for i, v := range s {
		fmt.Printf("%d %s 0x%x\n", i, string(v), v)
	}
	fmt.Println("")

	//byte sequence of s: 0xe4 0xb8 0xad 0xe5 0x9b 0xbd 0xe4 0xba 0xba
	var sl = []byte{0xe4, 0xb8, 0xad, 0xe5, 0x9b, 0xbd, 0xe4, 0xba, 0xba}
	for _, v := range sl {
		fmt.Printf("0x%x ", v)
	}
	fmt.Println("\n")

	for i, v := range string(sl) {
		fmt.Printf("%d %v 0x%x\n", i, string(v), v)
	}

	fmt.Println("\n")

  //修改为非法字符
	sl[3] = 0xd0
	sl[4] = 0xd6
	sl[5] = 0xb9

	for i, v := range string(sl) {
		fmt.Printf("%d %v 0x%x\n", i, string(v), v)
	}
}
```

```
输出结果如下：
0 中 0x4e2d
3 国 0x56fd
6 人 0x4eba

0xe4 0xb8 0xad 0xe5 0x9b 0xbd 0xe4 0xba 0xba 

0 中 0x4e2d
3 国 0x56fd
6 人 0x4eba


0 中 0x4e2d
3 � 0xfffd
4 ֹ 0x5b9
6 人 0x4eba
```

> 我们看到在遍历第4个字节时，发现时非法UTF8字符，则返回的是特殊值，且下标i从4开始。

## 字典遍历

> 字典遍历过程中，对其新增和删除结果是未知的

```go
package main

import "fmt"

func main() {
	var m = map[string]int{
		"tony": 21,
		"tom":  22,
		"jim":  23,
	}

	for k, v := range m {
		fmt.Println(k, v)
	}
	fmt.Println("\n")

	counter := 0
	for k, v := range m {
		if counter == 0 {
			delete(m, "tony")
		}
		counter++
		fmt.Println(k, v)
	}
	fmt.Println("counter is ", counter)
	fmt.Println("\n")

	m["tony"] = 21
	counter = 0

	for k, v := range m {
		if counter == 0 {
			m["lucy"] = 24
		}
		counter++
		fmt.Println(k, v)
	}
	fmt.Println("counter is ", counter)
}
```

> 其输出结果是未知的，可能counter是：
>
> - 3、3、4
> - 3、2、4
> - 3、3、3
> - 3、2、3
>
> 这是因为map的遍历是无序的

