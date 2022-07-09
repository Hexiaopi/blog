---
title: slice切片
date: 2022-01-23
tags:
 - Go
categories:
 -  Go语言
---

## 切片

> 切片（slice）简称动态数组，既然是动态，切片的长度可以动态伸缩。

切片的结构定义：`$GOROOT/src/runtime/slice.go`

```go
type slice struct {
	array unsafe.Pointer
	len   int
	cap   int
}
```

切片的定义包含三个字段：

- array：指向数组某元素的指针，该元素也是切片的起始元素；
- len：表示切片的长度，即切片当前元素的个数；
- cap：表示切片的最大容量；

### 声明

```go
var (
	a []int							// 指针为nil，len和cap为0
	b = []int{}					// 空切片，不等于nil，表示空的集合
	c = []int{1,2,3}		// 指向包含三个元素的数组：[1，2，3]。len和cap为3
	d = c[:2]						// 与c指向同一个数组，但是len为2，cap为3
	e = c[0:2:cap(c)]		// 与c指向同一个数组，但是len为2，cap为cap(c)的大小，即3
	f = c[:0]						// 与c指向同一个数组，但是len为0，cap为3
	g = make([]int,3)		// 指向新的数组，包含三个元素：[0,0,0]。len和cap为3
	h = make([]int,2,3)	// 指向新的数组，包含三个元素：[0,0,0]。len为2，cap为3
	i = make([]int,0,3)	// 指向新的数组，包含三个元素：[0,0,0]。len为0，cap为3
)
```

👣

​	切片的容量必须大于等于切片的长度。

### 操作

和数组类似，可以使用`len()`和`cap()`函数获取切片的长度和容量。此外可以使用`append()`对切片追加元素，但`append()`远不止这个功能。

#### 添加切片元素

**在切片尾部追加元素：**

```go
var a []int										//指针为nil，len和cap为0
a = append(a,1)								//追加一个元素，len和cap都为1
a = append(a,2,3,4)						//追加三个元素，len和cap都为4
a = append(a []int{5,6,7}...)	//追加一个切片，len为7，cap为8
```

在追加元素过程中，如果容量不足，`append()`操作会导致重新分配内存，例如第二行对为nil的切片申请空间，但申请的内存并不一定为所需的空间，如第四行。

**在切片头部追加元素：**

```go
var a = []int{1,2,3}							//len和cap都为3
a = append([]int{0},a...)					//在开头添加一个元素，len和cap都为4
a = append([]int{-3,-2,-1},a...)	//在开头添加一个切片，len为7，cap为8
```

在切片开头追加元素会导致内存的重新分配，已有的元素会复制一份。因此从切片的头部追加元素的性能很差，也很少使用到。

**在切片中间追加元素：**

```go
var a = []int{1,2,7}
a = append(a[:2],append([]int{3},a[2:]...)...) 			//追加一个元素，现在包含元素[1,2,3,7]
a = append(a[:3],append([]int{4,5,6},a[3:]...)...)	//追加一个切片，现在包含元素[1,2,3,4,5,6,7]
```

同样，在切片中间追加元素，会创建许多临时切片，性能比较差。可以使用`copy()`函数完成类似的功能：

```go
var a = []int{1,2,4}		// [1,2,4],cap=3
a = append(a,0)					// [1,2,4,0],cap=6
copy(a[3:],a[2:])				// [1,2,0,4],cap=6
a[2] = 3								// [1,2,3,4],cap=6
```

`copy(target,source)`函数，将source的内容复制到target，相比较append，节省了临时切片的创建。

:eyes:

切片添加操作可能会导致容量不够，申请新的空间，导致指针发生变化！

```go
package main

import "fmt"

func SliceRise(s []int) {
	s = append(s, 0)
	for i := range s {
		s[i]++
	}
}

func main() {
	s1 := []int{1, 2}
	s2 := s1
	s2 = append(s2, 3)
	SliceRise(s1)
	SliceRise(s2)
	fmt.Println(s1, s2)
}
//output [1 2] [2 3 4]
//s1传入SliceRise函数前len和cap均为2，传入后容量不够，申请新的空间，因此s指向的指针已经发生变化，但未作用到s1
//s2传入SliceRise函数前len为3，cap为4，传入后容量够，因此不需要申请新的空间，因此s2的值会发生变化。
```

#### 删除切片元素

**在切片头部删除元素**

```go
var a = []int{1,2,3}					// [1,2,3],len=3,cap=3
a = append([]int{},a[1:]...)  // [2,3],len=2,cap=2
```

这里的len和cap都为2，是因为重新分配了内存空间

**在切片中部删除元素**

```go
var a = []int{1,2,3,4}			// [1,2,3,4],len=4,cap=4
a = append(a[:1],a[2:]...)	// [1,3,4],len=3,cap=4
```

**在切片尾部删除元素**

```go
var a = []int{1,2,3}		// [1,2,3],len=3,cap=3
a = a[:2]								// [2,3],len=2,cap=3
```

**删除尾部一个元素**

```go
a = a[:len(a)-1]
```

**删除尾部N个元素**

```go
a = a[:len(a)-N]
```

