---
title: Go并发模式
date: 2023-02-26
tags:
 - Go
 - 基础
categories:
 -  Go语言
---

Go语言推荐CSP模型进行并发处理，而非通过共享内存。这里总结一些并发模式或者称作范式，去管理控制协程。

<!-- more -->

[[toc]]

# Go并发模式
我们都知道Go语言开启协程只需要`go func(){ }`，有时候需要与goroutine之间建立联系，方便进一步控制与处理。
因此总结一些范式，优雅的管理goroutine。

## 退出模式
使用关键字`go`很容易启动goroutine，这样创建的协程和当前协程已经分离，我们并不知道

### 等待指定协程退出
```go {15}
package main

import (
	"fmt"
	"time"
)

type signal struct{}

func worker() {
	println("worker is working...")
	time.Sleep(1 * time.Second)
}

func spawn(f func()) <-chan signal {
	c := make(chan signal)
	go func() {
		println("worker start to work...")
		f()
		c <- signal(struct{}{})
	}()
	return c
}

func main() {
	println("start a worker...")
	c := spawn(worker)
	<-c
	fmt.Println("worker work done!")
}
```
::: tip
  spawn函数创建的新goroutine与调用spawn函数的goroutine（main goroutine）之间通过channel建立了联系。
:::

### 等待多个协程退出
```go {19}
package main

import (
	"fmt"
	"sync"
	"time"
)

type signal struct{}

func worker(i int) {
	fmt.Printf("worker %d: is working...\n", i)
	time.Sleep(1 * time.Second)
	fmt.Printf("worker %d: works done\n", i)
}

func spawnGroup(f func(i int), num int) <-chan signal {
	c := make(chan signal)
	var wg sync.WaitGroup

	for i := 0; i < num; i++ {
		wg.Add(1)
		go func(i int) {
			fmt.Printf("worker %d: start to work...\n", i)
			f(i)
			wg.Done()
		}(i + 1)
	}

	go func() {
		wg.Wait()
		c <- signal(struct{}{})
	}()
	return c
}

func main() {
	fmt.Println("the group of workers start to work...")
	c := spawnGroup(worker, 5)
	<-c
	fmt.Println("the group of workers work done!")
}
```

::: tip
  通过sync.WaitGroup，对于每一个协程处理前进行wg.Add(1)，退出时执行wg.Done()，并等待所有的协程退出wg.Wait()。保障所有的协程都会结束。
:::

## 管道模式-pipeline
管道是Unix/Linux上一种典型的并发程序设计模式，例如执行：

```bash
ls -l | grep "\.go"
```

就可以利用管道机制过滤出当前路径下以".go"结尾的文件列表。

`ls -l`的输出作为`grep "\.go"`的输入很容易将两个功能模块串在一起。

```text
   ┌──────────────┐                                      ┌───────────────┐                                   ┌──────────────┐
   │    channel   │  ───────────►  goroutines ──────────►│    channel    │ ──────────► goroutines ─────────► │   channel    │
   └──────────────┘                                      └───────────────┘                                   └──────────────┘
```

Go通常使用channel原语构建管道模式

```go
package main

import "fmt"

func echo(nums []int) <-chan int {
	out := make(chan int, len(nums))
	go func() {
		for _, n := range nums {
			out <- n
		}
		close(out)
	}()
	return out
}

func square(in <-chan int) <-chan int {
	out := make(chan int)
	go func() {
		for n := range in {
			out <- n * n
		}
		close(out)
	}()
	return out
}

func odd(in <-chan int) <-chan int {
	out := make(chan int)
	go func() {
		for n := range in {
			if n%2 != 0 {
				out <- n
			}
		}
		close(out)
	}()
	return out
}

func main() {
	var nums = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	for n := range square(odd(echo(nums))) {
		fmt.Println(n)
	}
}
```

`echo`的结果作为`odd`的入参，`odd`的结果作为`square`的入参。这样我们很容易扩展其他功能函数，例如：`sum`

参考资料：

[Go Concurrency Patterns: Pipelines and cancellation](https://go.dev/blog/pipelines)

[GO编程模式：PIPELINE](https://coolshell.cn/articles/21228.html)

### 扇出，扇入模式

扇出模式，即多个相同goroutine从同一个channel读取数据并处理

```text

                                                 ┌──────────────┐
               ┌──────────► goroutines ────────► │    channel   │
               │                                 └──────────────┘
               │
               │
  ┌────────────┴─┐                               ┌──────────────┐
  │    channel   ├────────► goroutines ────────► │    channel   │
  └────────────┬─┘                               └──────────────┘
               │
               │
               │                                 ┌──────────────┐
               └──────────► goroutines─────────► │    channel   │
                                                 └──────────────┘


```

扇入模式，从多个channel读取数据并处理，将结果放入一个channel

```text

 ┌──────────────┐
 │    channel   ├─────────┐
 └──────────────┘         │
                          │
                          │
 ┌──────────────┐         ▼                ┌──────────────┐
 │    channel   ├───────►goroutines───────►│    channel   │
 └──────────────┘         ▲                └──────────────┘
                          │
                          │
 ┌──────────────┐         │
 │    channel   ├─────────┘
 └──────────────┘

```

```go
package main

import (
	"fmt"
	"sync"
)

func echo(nums []int) <-chan int {
	out := make(chan int, len(nums))
	go func() {
		for _, n := range nums {
			out <- n
		}
		close(out)
	}()
	return out
}

func square(in <-chan int) <-chan int {
	out := make(chan int)
	go func() {
		for n := range in {
			out <- n * n
		}
		close(out)
	}()
	return out
}

func merge(cs ...<-chan int) <-chan int {
	var wg sync.WaitGroup
	out := make(chan int)
	output := func(c <-chan int) {
		for n := range c {
			out <- n
		}
		wg.Done()
	}
	wg.Add(len(cs))
	for _, c := range cs {
		go output(c)
	}
	go func() {
		wg.Wait()
		close(out)
	}()
	return out
}

func main() {
	var nums = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	in := echo(nums)
	c1 := square(in)
	c2 := square(in)

	for n := range merge(c1, c2) {
		fmt.Println(n)
	}
}
```

其中：
- c1、c2是两个相同的goroutine从同一个channel取数据进行平方计算，这就是扇出；
- merge从c1、c2两个channel里取数据合并到一个channel里，这就是扇入；

## 超时与取消模式