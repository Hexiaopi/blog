---
title: 设计模式-工厂方法
date: 2022-10-15
tags:
 - Go
 - 创建型模式
categories:
 - 设计模式
---

![factory-method](https://refactoringguru.cn/images/patterns/content/factory-method/factory-method-zh-2x.png)

<!-- more -->

[[toc]]

## 什么是工厂方法模式

工厂方法模式(Factory Method Pattern)也叫虚拟构造器(Virtual Constructor)模式，由于简单工厂模式违背了开闭原则，而工厂方法模式对简单工厂模式进一步抽象，其好处是可以使系统在不修改原来代码的情况下引进新的产品，即满足开闭原则。

### 包含哪些角色

![工厂方法模式](../images/factory-method.png)

- Abstract Factory：抽象工厂

  提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法来创建产品。

- Concrete Factory：具体工厂

  实现了抽象工厂的方法，完成具体产品的创建。

- Product：抽象产品

  定义了产品的规范，描述了产品的主要特性和功能。

- Concrete Product：具体产品

  实现了抽象产品定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。

### 代码示例

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

### 应用场景

- 当创建对象需要使用大量重复的代码时，可以使用工厂方法模式来简化代码和提高可读性。
- 当客户端不关心对象的创建过程和实现细节时，可以使用工厂方法模式来隐藏对象的创建逻辑，只需要知道工厂类和产品接口即可。
- 当一个类通过其子类来指定创建哪个对象时，可以使用工厂方法模式来实现多态和动态绑定，让子类决定具体的产品类。
- 当需要根据不同的环境或条件来创建不同的对象时，可以使用工厂方法模式来根据不同的工厂类来创建对应的产品类。

举例：

- 换灯泡：假设你有一个灯泡接口，它有一个方法是发光，你有不同的灯泡实现类，比如白炽灯、节能灯、LED灯等，每种灯泡都有自己的工厂类，负责创建对应的灯泡对象。这样你就可以根据需要选择不同的工厂来创建不同的灯泡，而不用直接使用new关键字。
- 日志记录器：假设你有一个日志记录器接口，它有一个方法是记录日志，你有不同的日志记录器实现类，比如文件日志记录器、数据库日志记录器、网络日志记录器等，每种日志记录器都有自己的工厂类，负责创建对应的日志记录器对象。这样你就可以根据需要选择不同的工厂来创建不同的日志记录器，而不用直接使用new关键字。
- 电脑商店：假设你有一个电脑接口，它有一些方法是显示配置、运行程序等，你有不同的电脑实现类，比如联想电脑、华为电脑、苹果电脑等，每种电脑都有自己的工厂类，负责创建对应的电脑对象。这样你就可以根据需要选择不同的工厂来创建不同的电脑，而不用直接使用new关键字。

### 有哪些优缺点

#### 优点

- 遵循了开闭原则，扩展性极强。增加新的产品类时，只需增加对应的工厂类，不需要修改原有代码。
- 降低了系统的耦合性，将对象的创建和使用分离，使得各个模块各司其职。
- 利用了面向接口编程的思路，创建的对象是一个符合通用接口的通用对象，这个对象的具体实现可以随意替换。

#### 缺点

- 增加了系统的复杂度，类的个数容易过多，增加了系统抽象性和理解难度。
- 增加了系统的开销，每次创建对象时都要创建一个工厂对象，消耗资源和时间。
- **抽象产品只能是一种产品**。此弊端可使用抽象工厂模式解决。

## 总结

### 简单工厂和工厂方法对比

- 简单工厂模式只有一个工厂类，用来创建同一等级结构中的任意产品，而工厂方法模式有多个工厂类，每个工厂类负责创建一个具体的产品。
- 简单工厂模式不支持扩展增加产品，如果要增加新的产品类，就要修改工厂类的代码，违反了开闭原则。而工厂方法模式支持扩展增加产品，只要增加相应的工厂类即可，不需要修改原有代码。
- 简单工厂模式使用静态方法来创建对象，这样无法形成基于继承的结构。而工厂方法模式使用抽象类和多态来创建对象，这样可以形成基于继承的结构。
