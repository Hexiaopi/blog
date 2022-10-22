---
title: 设计模式-桥接
date: 2022-10-22
tags:
 - Go
 - 设计模式
categories:
 -  设计模式
---

![bridge](https://refactoringguru.cn/images/patterns/content/bridge/bridge-2x.png)

<!-- more -->

## 问题
假设某个汽车厂商生产三种品牌的汽车：Big、Tiny和Boss，每种品牌又可以选择燃油、纯电和混合动力。如果用传统的继承来表示各个最终车型，一共有3个抽象类加9个最终子类：

```ascii
                   ┌───────┐
                   │  Car  │
                   └───────┘
                       ▲
    ┌──────────────────┼───────────────────┐
    │                  │                   │
┌───────┐          ┌───────┐          ┌───────┐
│BigCar │          │TinyCar│          │BossCar│
└───────┘          └───────┘          └───────┘
    ▲                  ▲                  ▲
    │                  │                  │
    │ ┌───────────────┐│ ┌───────────────┐│ ┌───────────────┐
    ├─│  BigFuelCar   │├─│  TinyFuelCar  │├─│  BossFuelCar  │
    │ └───────────────┘│ └───────────────┘│ └───────────────┘
    │ ┌───────────────┐│ ┌───────────────┐│ ┌───────────────┐
    ├─│BigElectricCar │├─│TinyElectricCar│├─│BossElectricCar│
    │ └───────────────┘│ └───────────────┘│ └───────────────┘
    │ ┌───────────────┐│ ┌───────────────┐│ ┌───────────────┐
    └─│ BigHybridCar  │└─│ TinyHybridCar │└─│ BossHybridCar │
      └───────────────┘  └───────────────┘  └───────────────┘
```

如果要新增一个品牌，或者加一个新的引擎（比如核动力），那么子类的数量增长更快。

桥接模式就是为了避免直接继承带来的子类爆炸。

## 桥接模式
>桥接模式(Bridge Pattern)：是一种结构型设计模式， 可将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构， 从而能在开发时分别使用。

![bridge](../images/bridge.png)


### 角色

- Abstraction: 抽象类
- RefinedAbstraction: 扩充抽象类
- Implementor: 实现类接口
- ConCreteImplementor: 具体实现类

### 示例
```go
package bridge

import "fmt"

type Implementor interface {
	OperationImpl()
}

type ConcreateImplA struct{}

func (ConcreateImplA) OperationImpl() {
	fmt.Println("ConcreateImplA")
}

type ConcreateImplB struct{}

func (ConcreateImplB) OperationImpl() {
	fmt.Println("ConcreateImplB")
}

type Abstraction struct {
	Impl Implementor
}

func (a Abstraction) Operation() {
	fmt.Println("Abstraction")
	a.Impl.OperationImpl()
}

type RefineAbstraction struct {
	Impl Implementor
}

func (ra RefineAbstraction) Operation() {
	fmt.Println("RefineAbstraction")
	ra.Impl.OperationImpl()
}
```
使用示例如下：
```go
package bridge

func ExampleOperation() {
	a := ConcreateImplA{}
	b := ConcreateImplB{}
	abstractA := Abstraction{Impl: a}
	abstractA.Operation()
	abstractB := Abstraction{Impl: b}
	abstractB.Operation()
	refineA := RefineAbstraction{Impl: a}
	refineA.Operation()
	refineB := RefineAbstraction{Impl: b}
	refineB.Operation()
	// Output:
	// Abstraction
	// ConcreateImplA
	// Abstraction
	// ConcreateImplB
	// RefineAbstraction
	// ConcreateImplA
	// RefineAbstraction
	// ConcreateImplB
}
```

### 优点

- 抽象与实现分离，扩展能力强
- 符合开闭原则
- 符合合成复用原则
- 实现细节对客户透明

### 缺点

- 由于聚合关系建立在抽象层，要求开发者针对抽象化进行设计与编程，
//能正确地识别出系统中两个独立变化的维度，这增加了系统的理解与设计难度。