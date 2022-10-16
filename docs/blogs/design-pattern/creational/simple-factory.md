---
title: 设计模式-简单工厂
date: 2022-10-15
tags:
 - Go
 - 设计模式
categories:
 -  设计模式
sticky: 3
---


## 简单工厂模式

> 简单工厂模式又称为静态工厂方法(Static Factory Method)模式
>
> 接收参数并根据参数创建对应类，将对象的实例化和具体使用解耦。

### 角色

- SimpleFactory：简单工厂

  简单工厂负责实现创建所有实例的内部逻辑，可被外界直接调用，创建所需的产品对象。

- Product：抽象产品

  抽象产品是所创建的所有对象的父类，负责描述所有实例所共有的公共接口。

- ConcreteProduct：具体产品

  简单工厂创建的目标对象。

![图片](../images/simple-factory.png)


### 示例

```go
package simple_factory

import "fmt"

// 抽象产品
type Product interface {
	Show()
}

const (
	Product1 = 1 + iota
	Product2
)

// 工厂
type SimpleFactory struct{}

func (SimpleFactory) NewProduct(i int) Product {
	switch i {
	case Product1:
		return &ConcreteProduct1{}
	case Product2:
		return &ConcreteProduct2{}
	}
	return nil
}

// 具体产品1
type ConcreteProduct1 struct{}

func (*ConcreteProduct1) Show() {
	fmt.Println("Product1 show")
}

// 具体产品2
type ConcreteProduct2 struct{}

func (*ConcreteProduct2) Show() {
	fmt.Println("Product2 show")
}
```

让工厂生产产品时，只需要传入产品的参数，就可以获得该产品，如下：

```go
package simple_factory

func ExampleSimpleFactory_NewProduct1() {
	factory := SimpleFactory{}
	product := factory.NewProduct(Product1)
	product.Show()
	// Output:
	// Product1 show
}

func ExampleSimpleFactory_NewProduct2() {
	factory := SimpleFactory{}
	product := factory.NewProduct(Product2)
	product.Show()
	// Output:
	// Product2 show
}
```

### 优点

- 工厂和产品的职责区分明确。
- 客户端无需知道所创建具体产品的类名，只需要知道参数即可。
- 也可以引入配置文件，在不修改客户端代码的情况下更换和添加新的具体产品类。

### 缺点

- 简单工厂模式每增加一个产品就要增加一个具体的产品类和一个对于的具体工厂类，这增加了系统的复杂度，违背了**开闭**原则


### 应用场景

产品种类相对较少的情况下，考虑使用简单工厂模式。例如门这个产品，我们只需要给定的材料参数，工厂就会给我们创建木门、铁门、玻璃门等等。