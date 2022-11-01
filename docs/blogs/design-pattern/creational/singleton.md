---
title: 设计模式-单例
date: 2022-10-17
tags:
 - Go
 - 设计模式
categories:
 -  设计模式
---

![singleton](https://refactoringguru.cn/images/patterns/content/singleton/singleton-2x.png)

<!-- more -->

## 单例模式

> 单例模式(Singleton Pattern)指一个类只有一个实例，且该类能自行创建这个实例的一种模式。

### 特点

1. 单例类只有一个实例对象；
2. 该单例对象必须由单例类自行创建；
3. 单例类对外提供一个访问该单例的全局访问点；

Go语言创建单例的办法

1. Sync.Mutex，在GetInstance方法中加锁
2. init()函数，引入singleton包时进行初始化
3. sync.Once，在GetInstance方法中调用once.Do

### 示例

#### 示例1：Sync.Mutex
```go
package singleton

import (
	"fmt"
	"sync"
)

var lock = &sync.Mutex{}

type single1 struct{}

var singleInstance1 *single1

func GetInstance1() *single1 {
	if singleInstance1 == nil {
		lock.Lock()
		defer lock.Unlock()
		if singleInstance1 == nil {
			fmt.Println("Creating Single Instance Now")
			singleInstance1 = &single1{}
		} else {
			fmt.Println("Single Instance already created-1")
		}
	} else {
		fmt.Println("Single Instance already created-2")
	}
	return singleInstance1
}
```
使用示例如下：
```go
package singleton

import (
	"sync"
	"testing"
)

func TestGetInstance1(t *testing.T) {
	var wg sync.WaitGroup
	wg.Add(100)
	for i := 0; i < 100; i++ {
		go func() {
			defer wg.Done()
			GetInstance1()
		}()
	}
	wg.Wait()
}
```

#### 示例2：init()函数
```go
package singleton

type single2 struct{}

var singleInstance2 *single2

func init() {
	singleInstance2 = &single2{}
}

func GetInstance2() *single2 {
	return singleInstance2
}
```
使用示例如下：
```go
package singleton

import (
	"fmt"
	"sync"
	"testing"
)

func TestGetInstance2(t *testing.T) {
	var wg sync.WaitGroup
	wg.Add(100)
	for i := 0; i < 100; i++ {
		go func() {
			defer wg.Done()
			instance2 := GetInstance2()
			fmt.Printf("get single instance address %p and is nil? %t\n", instance2, instance2 == nil)
		}()
	}
	wg.Wait()
}
```

#### 示例3：sync.Once
```go
package singleton

import (
	"fmt"
	"sync"
)

var once sync.Once

type single3 struct{}

var singleInstance3 *single3

func GetInstance3() *single3 {
	if singleInstance3 == nil {
		once.Do(
			func() {
				fmt.Println("Creating Single Instance Now")
				singleInstance3 = &single3{}
			})
	} else {
		fmt.Println("Single Instance already created-2")
	}
	return singleInstance3
}
```
使用示例如下：
```go
package singleton

import (
	"sync"
	"testing"
)

func TestGetInstance3(t *testing.T) {
	var wg sync.WaitGroup
	wg.Add(100)
	for i := 0; i < 100; i++ {
		go func() {
			defer wg.Done()
			GetInstance3()
		}()
	}
	wg.Wait()
}
```

### 应用场景

- DB实例--我们只想创建DB对象的一个实例，并且该实例将在整个应用程序中使用。
- 日志实例--同样，只应创建一个日志实例，并应在整个应用程序中使用它。