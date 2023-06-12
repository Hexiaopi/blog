---
title: 设计模式-适配器
date: 2022-10-18
tags:
 - Go
 - 结构型模式
categories:
 - 设计模式
---

![adapter](https://refactoringguru.cn/images/patterns/content/adapter/adapter-zh-2x.png)

<!-- more -->

[[toc]]

## 什么是适配器模式

适配器模式(Adapter Pattern)：它将一个接口转换成用户期望的另一个接口，使的接口不兼容的那些类可以相互合作。

### 包含哪些角色

![适配器](../images/adapter.png)

- Target: 目标角色

  该角色定义是用户期望的接口

- Adapter: 适配器角色
  
  将适配者的接口转换为目标接口的类，它是适配器模式的核心

- Adaptee: 适配者
  
  需要被适配的接口，它与目标角色接口不一致

### 代码示例

```go
package adapter

import "fmt"

// Target是适配的目标接口
type Target interface {
	Request()
}

// Adaptee是被适配的目标接口
type Adaptee interface {
	SpecificRequest()
}

// AdapteeImpl是被适配的目标类
type AdapteeImpl struct{}

func (impl *AdapteeImpl) SpecificRequest() {
	fmt.Println("adapteeImpl SpecificRequest")
}

// NewAdaptee是被适配接口的工厂函数
func NewAdaptee() Adaptee {
	return &AdapteeImpl{}
}

// Adapter是转换Adaptee为Target接口的适配器
type Adapter struct {
	Adaptee
}

// Adapter适配器实现目标接口
func (a Adapter) Request() {
	a.SpecificRequest()
}

// NewAdapter是Adapter的工厂函数，将Adaptee转化为Target
func NewAdapter(adaptee Adaptee) Target {
	return &Adapter{Adaptee: adaptee}
}
```

使用示例如下：

```go
package adapter

func ExampleRequest() {
	adaptee := NewAdaptee()
	target := NewAdapter(adaptee)
	target.Request()
	// Output:
	// adapteeImpl SpecificRequest
}
```

### 应用场景

- 当我们想要使用一个已经存在的类，但是它的接口不符合我们的需求时，我们可以使用适配器来转换接口，而不需要修改原来的类。
- 当我们想要复用一些已有的功能，但是这些功能来自于不同的系统或者库时，我们可以使用适配器来统一接口，而不需要修改原来的系统或者库。
- 当我们想要在不同的环境中使用同一个类时，我们可以使用适配器来适应不同的环境，而不需要修改原来的类。

### 有哪些优缺点

#### 优点

- 提高代码的重用性：适配器设计模式可以将已经存在的代码与新的代码进行整合，提高了现有代码的重用率。
- 可以让不兼容的代码协同工作：适配器设计模式可以将一个类的接口转换成另一个类的接口，让其它不兼容的代码可以一起工作。
- 保证系统的稳定性：适配器设计模式可以让已有的系统保持稳定，不必对其进行修改，只是增加新的功能。满足开闭原则。

#### 缺点

- 增加代码复杂性：适配器设计模式需要在原有的类和适配器类中定义大量的代码，会增加系统的复杂度。
- 降低代码的可读性：适配器设计模式在现有类的基础上增加了适配器类，使得代码的可读性下降。
- 新增了一个中间层，可能会影响系统的性能：适配器设计模式新增了适配器类，可能会影响系统的性能，增加系统的运行开销。
