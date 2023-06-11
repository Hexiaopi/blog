---
title: 设计模式-对象池
date: 2023-04-16
tags:
 - Go
 - 创建型模式
categories:
 - 设计模式
---

<!-- more -->

[[toc]]

## 什么是对象池模式

对象池模式(Object Pool Pattern)：它通过预先创建和初始化一组对象，然后将它们存放在一个池中，以便在需要时重复使用。这样可以减少频繁创建和销毁对象的开销，提高应用程序的性能和效率。

### 包含哪些角色

![object-pool](../images/object-pool.png)

- Pool：对象池

  对象池维护活动对象列表和空闲对象列表

- Object：对象

  对象被客户端使用

### 代码示例

```go
package object_pool

import (
	"sync"
)

type pool struct {
	mutex     *sync.Mutex
	idle      []interface{}
	active    []interface{}
	newObject func() interface{}
}

func NewPool(newFunc func() interface{}) *pool {
	return &pool{
		mutex:     &sync.Mutex{},
		idle:      make([]interface{}, 0),
		active:    make([]interface{}, 0),
		newObject: newFunc,
	}
}

func (p *pool) Acquire() interface{} {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	var object interface{}
	if len(p.idle) == 0 {
		object = p.newObject()
	} else {
		object = p.idle[0]
		p.idle = p.idle[1:]
	}
	p.active = append(p.active, object)
	return object
}

func (p *pool) Release(target interface{}) {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	p.idle = append(p.idle, target)
	for i := range p.active {
		if p.active[i] == target {
			p.active = append(p.active[:i], p.active[i+1:]...)
			break
		}
	}
}
```

使用示例

```go
package object_pool

import (
	"fmt"
)

func ExamplePool() {
	newConnDB := func() interface{} {
		return "conn-db"
	}
	pool := NewPool(newConnDB)
	object1 := pool.Acquire()
	fmt.Println(len(pool.idle))
	fmt.Println(len(pool.active))

	object2 := pool.Acquire()
	fmt.Println(len(pool.idle))
	fmt.Println(len(pool.active))

	pool.Release(object1)
	fmt.Println(len(pool.idle))
	fmt.Println(len(pool.active))

	pool3 := pool.Acquire()
	fmt.Println(len(pool.idle))
	fmt.Println(len(pool.active))

	pool.Release(object2)
	pool.Release(pool3)
	fmt.Println(len(pool.idle))
	fmt.Println(len(pool.active))
	// Output:
	// 0
	// 1
	// 0
	// 2
	// 1
	// 1
	// 0
	// 2
	// 2
	// 0
}
```

### 使用场景

- 资源受限的场景，比如不需要可伸缩性的环境（CPU、内存等物理资源有限），CPU性能不够强劲，内存比较紧张，垃圾收集，内存抖动会造成比较大的影响，需要提高内存管理效率，响应性比吞吐量更为重要。
- 在内存中数量受限的对象，比如数据库连接、网络连接、线程等。
- 创建成本高的对象，比如初始化时间长、占用资源多、需要复杂的配置等。

### 有哪些优缺点

#### 优点

- 提升性能：减少创建和销毁对象的开销，节省内存和CPU资源，提高响应速度。
- 减少GC压力：复用对象池中的对象，避免频繁的垃圾回收，降低内存抖动和暂停时间。
- 易于实现：对象池模式相对容易实现，可用于多种情况。它是一种经过验证的设计模式，已在许多应用程序和编程语言中成功使用。

#### 缺点

- 增加依赖性：将对象返回对象池中的操作依赖于客户端，如果客户端忘记将对象返回对象池中，将导致该对象无法被其他组件使用。
- 增加复杂性：对象池模式可以通过添加额外的抽象层来增加应用程序的复杂性。这会使代码更难理解和维护，尤其是涉及到多线程和并发的场景。
- 存在脏对象问题：所谓的脏对象就是指的是当对象被放回对象池后，还保留着刚刚被客户端调用时生成的数据。脏对象可能带来两个问题：
  - 脏对象持有上次使用的引用，导致内存泄露等问题。
  - 脏对象如果下一次使用时没有做清理，可能影响程序的处理数据。
- 生命周期问题：处于对象池中的对象生命周期要比普通的对象要长久。这可能导致一些难以预料的问题，比如对象状态不一致、资源占用过多等。

## 总结

对象池模式是一种创建型设计模式，它通过预先创建和初始化一组对象，然后将它们存放在一个池中，以便在需要时重复使用。这样可以减少频繁创建和销毁对象的开销，提高应用程序的性能和效率。在使用对象池设计模式时，需要注意：

- 对象池的大小应该根据实际需求和资源情况来确定，不要过大或过小。
- 对象池中的对象应该是无状态或者可重置状态的，以避免状态污染和数据不一致。
- 对象池中的对象应该是线程安全或者线程隔离的，以避免并发问题和竞争条件。
- 对象池中的对象应该在使用完毕后及时归还，以避免资源泄露和浪费。
