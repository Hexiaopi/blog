---
title: break
date: 2022-05-18
tags:
 - Go
categories:
 -  Go语言
---



```GO
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
> 其实break语句只是跳出最内存的for、swich或select的执行。上面例子中只是跳出了select语句，并未跳出for循环。

通过break [label]，可以实现我们的目的

```go
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