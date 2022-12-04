---
title: 设计模式-装饰器
date: 2022-12-04
tags:
 - Go
 - 设计模式
categories:
 -  设计模式
---

![decorator](https://refactoringguru.cn/images/patterns/content/decorator/decorator-2x.png)

<!-- more -->

## 装饰器模式
> 装饰器模式（Decorator Pattern）：能够在运行时动态地为原始对象增加一些额外的功能，使其变得更加强大。
>
> 装饰器非常类似于**继承**，它们都是为了增强原始对象的功能，区别在于方式的不同，后者是在编译时(compile-time)静态地通过对原始类的继承完成，而前者则是在程序运行时(run-time)通过对原始对象地”包装“完成。

![decorator](../images/decorator.png)

### 角色
- Component: 组件接口，所有被装饰组件及装饰器对应的接口标准；
- ConcreteComponent: 需要被装饰的组件，实现组件接口标准；
- Decorator: 装饰器，装饰器的高层抽象类，同样实现组件接口标准；
- ConcreteDecorator: 装饰器实现，继承自装饰器抽象类的具体子类装饰器，可以有多种实现，在被装饰组件对象的基础上为其添加新的特性。

### 示例
```go
package decorator

import "fmt"

type Component interface {
	execute()
}

type ConcreteComponent struct{}

func (c ConcreteComponent) execute() {
	fmt.Println("concrete component execute")
}

type Decorator struct {
	component Component
}

func (d *Decorator) Decorator(c Component) {
	d.component = c
}

func (d Decorator) execute() {
	d.component.execute()
}

type ConcreteDecortor1 struct {
	Decorator
}

func (c ConcreteDecortor1) addedFunction() {
	fmt.Println("concrete decortor1 add function")
}

func (c ConcreteDecortor1) execute() {
	c.addedFunction()
	c.Decorator.execute()
}

type ConcreteDecortor2 struct {
	Decorator
}

func (c ConcreteDecortor2) addedFunction() {
	fmt.Println("concrete decortor2 add function")
}

func (c ConcreteDecortor2) execute() {
	c.addedFunction()
	c.Decorator.execute()
}
```
使用示例
```go
package decorator

func ExampleComponent() {
	c := ConcreteComponent{}
	c.execute()
	var c1 ConcreteDecortor1
	c1.Decorator.Decorator(c)
	c1.execute()
	var c2 ConcreteDecortor2
	c2.Decorator.Decorator(c)
	c2.execute()
	// Output:
	// concrete component execute
	// concrete decortor1 add function
	// concrete component execute
	// concrete decortor2 add function
	// concrete component execute
}
```

### 优点
1. 无需创建新子类即可扩展对象的行为
2. 可以在运行时添加或删除对象的功能
3. 可以用多个装饰封装对象来组合几种行为
4. 满足**单一职责原则**，可以将实现不同行为的一个大类拆分为多个较小的类

### 缺点
1. 在封装器栈中删除特定封装器比较困难
2. 实现行为不受装饰栈顺序影响的装饰比较困困难