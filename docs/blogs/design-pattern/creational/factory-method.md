---
title: 设计模式-工厂方法
date: 2022-10-15
tags:
 - Go
 - 设计模式
categories:
 -  设计模式
---

![factory-method](https://refactoringguru.cn/images/patterns/content/factory-method/factory-method-zh-2x.png)

<!-- more -->

## 工厂方法模式

> 工厂方法模式(Factory Method Pattern)也叫虚拟构造器(Virtual Constructor)模式，由于简单工厂模式违背了开闭原则，而工厂方法模式对简单工厂模式进一步抽象，其好处是可以使系统在不修改原来代码的情况下引进新的产品，即满足开闭原则。

### 角色

- Abstract Factory：抽象工厂

  提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法NewProduct()来创建产品。

- Concrete Factory：具体工厂

  实现了抽象工厂的方法，完成具体产品的创建。

- Product：抽象产品

  定义了产品的规范，描述了产品的主要特性和功能。

- Concrete Product：具体产品

  实现了抽象产品定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。

![工厂方法模式](../images/factory-method.png)

### 示例

```go
package factory_method

import "fmt"

// 抽象产品
type Product interface {
	Show()
}

// 抽象工厂
type AbstractFactory interface {
	NewProduct() Product
}

// 具体产品1
type ConcreteProduct1 struct{}

func (*ConcreteProduct1) Show() {
	fmt.Println("Product1 show")
}

// 具体工厂1
type ConcreteFactory1 struct{}

func (ConcreteFactory1) NewProduct() Product {
	return &ConcreteProduct1{}
}

// 具体产品2
type ConcreteProduct2 struct{}

func (*ConcreteProduct2) Show() {
	fmt.Println("Product2 show")
}

// 具体工厂2
type ConcreteFactory2 struct{}

func (ConcreteFactory2) NewProduct() Product {
	return &ConcreteProduct2{}
}
```
使用工厂创建产品示例如下：
```go
package factory_method

func ExampleConcreteFactory1_NewProduct() {
	var factory AbstractFactory
	factory = ConcreteFactory1{}
	product := factory.NewProduct()
	product.Show()
	// Output:
	// Product1 show
}

func ExampleConcreteFactory2_NewProduct() {
	var factory AbstractFactory
	factory = ConcreteFactory2{}
	product := factory.NewProduct()
	product.Show()
	// Output:
	// Product2 show
}
```

### 优点

- 用户只需要知道具体工厂的名称就可得到所要的产品，无须知道产品的具体创建过程。
- 灵活性增强，对于新产品的创建，只需要多写一个相应的工厂类。
- 典型的解耦框架，高层模块只需要知道产品的抽象类，无须关心其他实现类，满足迪米特法则、依赖倒置原则和里氏替换原则。

### 缺点

- 类的个数容易过多，增加复杂度。
- 增加系统的抽象性和理解难度。
- **抽象产品只能生产一种产品**。此弊端可使用抽象工厂模式解决。

### 应用场景

例如：电视工厂有TCL电视工厂、海信电视工厂，我们只需要提供品牌名称，就可以获取对应工厂的电视。

### 简单工厂和工厂方法
工厂模式相比较简单工厂需要额外创建诸多Factory类，也会增加代码的复杂性
- 如果每个Factory类只是做简单的new操作，功能非常单薄，就没必要使用工厂方法模式
- 如果对象的创建逻辑比较复杂，而是要组合其他类对象，做各种初始化操作的时候，推荐使用工厂方法模式，将复杂的创建逻辑拆分到多个工厂类中。