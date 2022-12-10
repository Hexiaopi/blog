---
title: 设计模式-代理
date: 2022-12-10
tags:
 - Go
 - 设计模式
categories:
 -  设计模式
---

![proxy](https://refactoringguru.cn/images/patterns/content/proxy/proxy-2x.png)

<!-- more -->

## 代理模式
> 代理模式(Proxy Pattern):由于某些原因需要给某对象提供一个代理以控制对该对象的访问。这时，访问对象不适合或者不能直接引用目标对象，代理对象作为访问对象和目标对象之间的中介。

![代理模式](../images/proxy.png)

### 角色

- Subject: 抽象主题，通过接口或抽象类声明真实主题和代理对象实现的业务方法
- RealSubject: 真实主题，实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象
- Proxy: 代理类，提供了与真实主题相同的接口，其内部包含有对真实主题的引用，它可以访问、控制或扩展真实主题的功能。

### 示例
```go
package proxy

import "fmt"

type Subject interface {
	Request()
}

type RealSubject struct {
}

func (r RealSubject) Request() {
	fmt.Println("do request")
}

type Proxy struct {
	realSubject Subject
}

func (p *Proxy) preRequest() {
	fmt.Println("pre request")
}

func (p *Proxy) postRequest() {
	fmt.Println("post request")
}

func (p *Proxy) Request() {
	p.preRequest()
	p.realSubject.Request()
	p.postRequest()
}
```
使用示例如下：
```go
package proxy

func ExampleRequest() {
	var subject Subject
	subject = Proxy{realSubject: RealSubject{}}
	subject.Request()
	// Output:
	// pre request
	// do request
	// post request
}
```

### 优点

- 代理模式能够协调调用者和被调用者，在一定程度上降低了系统的耦合度
- 远程代理使得客户端可以访问在远程机器上的对象，远程机器坑具有更好的计算性能与处理速度，可以加快相应并处理客户端请求
- 虚拟代理通过使用一个小对象来代表一个大对象，可以减少系统资源的消耗，对系统进行优化并提高运行速度
- **保护代理**可以控制对真实对象的使用权限

### 缺点

- 由于客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢
- 实现代理模式需要额外的工作，有些代理模式的实现非常复杂

### 对比
代理模式和装饰器模式理念和实现有类似，但装饰器模式往往更加关注位其他对象增加功能，让客户端更加灵活地进行组件搭配；而代理模式更强调的则是一种对访问的观看，甚至是将被代理对象完全封装而隐藏起来，使其对客户端完全透明。

