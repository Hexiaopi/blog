---
title: 小心break🤦‍♂️
date: 2022-05-18
tags:
 - Go
 - 基础
categories:
 -  Go语言
---


这里展示break的一个例子
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	exit := make(chan interface{})

	go func() {
		for {
			select {
			case <-time.After(time.Second):
				fmt.Println("tick")
			case <-exit:
				fmt.Println("exiting...")
				break
			}
		}
		fmt.Println("exit!")
	}()

	time.Sleep(3 * time.Second)
	exit <- struct{}{}

	// wait child goroutine exit
	time.Sleep(3 * time.Second)
}
```

```
输出结果如下：
tick
tick
exiting...
tick
tick
```

> 按道理当收到exit信号时，协程应该退出，但此时协程仍旧在打印tick
>
> 其实break语句只是跳出最内部的for、swich或select的执行。上面例子中只是跳出了select语句，并未跳出for循环。

这里并不是坑，只是如果从其他语言转到Go语言的童鞋，想当然的以为会跳到最外层，而事实是并没有。

那么我们该怎么跳到最外层呢？

1、通过break [label]

```go {12,19}
package main

import (
	"fmt"
	"time"
)

func main() {
	exit := make(chan interface{})

	go func() {
	loop:
		for {
			select {
			case <-time.After(time.Second):
				fmt.Println("tick")
			case <-exit:
				fmt.Println("exiting...")
				break loop
			}
		}
		fmt.Println("exit!")
	}()

	time.Sleep(3 * time.Second)
	exit <- struct{}{}

	// wait child goroutine exit
	time.Sleep(3 * time.Second)
}
```

```
输出结果如下：
tick
tick
exiting...
exit!
```

> 代码执行到`break loop`时，程序将提至loop所指代的for循环的执行

2、通过goto [label]

```go {18,21}
package main

import (
	"fmt"
	"time"
)

func main() {
	exit := make(chan interface{})

	go func() {
		for {
			select {
			case <-time.After(time.Second):
				fmt.Println("tick")
			case <-exit:
				fmt.Println("exiting...")
				goto loop
			}
		}
	loop:
		fmt.Println("exit!")
	}()

	time.Sleep(3 * time.Second)
	exit <- struct{}{}

	// wait child goroutine exit
	time.Sleep(3 * time.Second)
}
```

```
输出结果如下
tick
tick
exiting...
exit!
```