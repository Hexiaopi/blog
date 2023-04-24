---
title: 设计模式-责任链
date: 2022-12-13
tags:
 - Go
 - 行为型模式
categories:
 -  设计模式
---

![责任链](https://refactoringguru.cn/images/patterns/content/chain-of-responsibility/chain-of-responsibility-2x.png)

<!-- more -->

[[toc]]

## 什么是责任链模式

责任链模式(Chain of Responsibility)：为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。

```ascii
     ┌─────────┐
     │ Request │
     └─────────┘
          │
┌ ─ ─ ─ ─ ┼ ─ ─ ─ ─ ┐
          ▼
│  ┌─────────────┐  │
   │ ProcessorA  │
│  └─────────────┘  │
          │
│         ▼         │
   ┌─────────────┐
│  │ ProcessorB  │  │
   └─────────────┘
│         │         │
          ▼
│  ┌─────────────┐  │
   │ ProcessorC  │
│  └─────────────┘  │
          │
└ ─ ─ ─ ─ ┼ ─ ─ ─ ─ ┘
          │
          ▼
```

### 包含哪些角色

- Handler: 抽象处理者
  
  包含一个处理请求的接口和一个设置后续处理者

- Concrete Handler: 具体处理者

  实现抽象处理者接口

- Client: 客户端
  
  创建处理链，并让链头开始执行处理

### 代码示例

```go
package chainofresponsibility

import "fmt"

type Handler interface {
	Handle()
	SetNext(Handler)
}

type ConcreteHandler1 struct {
	next Handler
}

func (h *ConcreteHandler1) Handle() {
	fmt.Println("concrete handler1")
	if h.next != nil {
		h.next.Handle()
	}
}

func (h *ConcreteHandler1) SetNext(handler Handler) {
	h.next = handler
}

type ConcreteHandler2 struct {
	next Handler
}

func (h *ConcreteHandler2) Handle() {
	fmt.Println("concrete handler2")
	if h.next != nil {
		h.next.Handle()
	}
}

func (h *ConcreteHandler2) SetNext(handler Handler) {
	h.next = handler
}
```

使用示例

```go
package chainofresponsibility

func ExampleHandler() {
	h1 := ConcreteHandler1{}
	h2 := ConcreteHandler2{}
	h1.SetNext(&h2)
	h1.Handle()
	// Output:
	// concrete handler1
	// concrete handler2
}
```

### 使用场景

- 审批流程：经理、主管、Boss
- 医院流程：挂号处、医生、收银处、药房

## 总结

### 优点

- 可以控制请求处理的顺序；
- 单一职责原则，具体的处理者只关心自己的业务；
- 开闭原则，可以不更改现有代码的情况下新增处理者；

### 缺点

- 各个处理者须有共同的处理函数
