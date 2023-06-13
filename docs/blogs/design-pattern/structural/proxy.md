---
title: 设计模式-代理
date: 2022-12-10
tags:
 - Go
 - 结构型模式
categories:
 - 设计模式
---

![proxy](https://refactoringguru.cn/images/patterns/content/proxy/proxy-2x.png)

<!-- more -->

[[toc]]

## 什么是代理模式

代理模式(Proxy Pattern)：它的主要思想是通过一个代理对象来代替真实对象的访问，从而在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。

### 包含哪些角色

![代理模式](../images/proxy.png)

- Subject: 抽象主题
  
  通过接口或抽象类声明真实主题和代理对象实现的业务方法

- RealSubject: 真实主题
  
  实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象

- Proxy: 代理类
  
  提供了与真实主题相同的接口，其内部包含有对真实主题的引用，它可以访问、控制或扩展真实主题的功能。

### 代码示例

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

## 使用场景

- 静态代理：代理对象和目标对象在编译期就已经确定，代理对象需要实现和目标对象相同的接口，并持有目标对象的引用。静态代理的优点是简单易实现，缺点是代码冗余，每个代理类都需要重新编写。

- 远程代理：为一个位于不同地址空间的对象提供一个本地的代理对象，使客户端可以通过本地代理对象来访问远程对象，屏蔽了网络通信的细节。

- 虚拟代理：当一个对象的创建或者加载时需要很长时间，可以使用虚拟代理来延迟对象的加载或者创建，直到真正需要使用该对象时再进行加载或者创建。

- 保护代理：当对一个对象的访问需要进行安全控制时，可以使用安全代理来控制对象的访问权限，例如在对象被访问时需要进行认证或授权等。

- 缓存代理：当需要缓存一些计算结果时，可以使用缓存代理，以便在后续的访问中直接返回缓存的结果，避免重复计算。

- 日志记录代理：在访问被代理对象的过程中，使用日志记录代理可以记录所有访问记录，以便于问题排查和系统优化等。

### 远程代理

```go
// Subject 接口定义
type Subject interface {
    Request() string
}

// RemoteSubject 结构体实现 Subject 接口
type RemoteSubject struct {
    URL string
}

func (rs *RemoteSubject) Request() string {
    // 远程调用
    response, err := http.Get(rs.URL)
    if err != nil {
        return "Error: " + err.Error()
    }
    defer response.Body.Close()
    body, err := ioutil.ReadAll(response.Body)
    if err != nil {
        return "Error: " + err.Error()
    }
    return string(body)
}

// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RemoteSubject 对象
type Proxy struct {
    subject *RemoteSubject
}

func (p *Proxy) Request() string {
    // 在此处执行一些身份验证、日志记录等操作
    if p.subject == nil {
        p.subject = &RemoteSubject{
            URL: "http://www.example.com",
        }
    }
    return "Proxy -> " + p.subject.Request()
}

// client 代码
func main() {
    var subject Subject = &Proxy{}
    result := subject.Request()
    fmt.Println(result)
}
```

通过这种方式，我们可以将客户端和远程对象之间的耦合度降低，增加了系统的可维护性和可扩展性。

### 虚拟代理

```go
// Image 接口定义
type Image interface {
    Display()
}

// RealImage 结构体实现 Image 接口
type RealImage struct {
    filename string
}

func (ri *RealImage) Display() {
    fmt.Println("Displaying Real Image: ", ri.filename)
}

// Proxy 结构体实现 Image 接口，并在内部包含了一个 RealImage 对象
type Proxy struct {
    image *RealImage
    filename string
}

func (p *Proxy) Display() {
    // 使用虚拟代理，在真正需要使用 RealImage 对象时才进行创建和加载
    if p.image == nil {
        fmt.Println("Creating Real Image: ", p.filename)
        p.image = &RealImage{
            filename: p.filename,
        }
    }
    p.image.Display()
}

// client 代码
func main() {
    var image Image = &Proxy{
        filename: "example.jpg",
    }
    // 第一次调用 Display() 方法会创建和加载 RealImage 对象
    image.Display()
    // 第二次调用 Display() 方法直接使用已创建的 RealImage 对象
    image.Display()
}
```

通过这种方式，我们可以延迟 RealImage 对象的加载或者创建，直到客户端真正需要访问该对象时才进行加载或者创建，从而减少了系统的资源消耗，优化了系统的性能。

### 保护代理

```go
// Subject 接口定义
type Subject interface {
    Request()
}

// RealSubject 结构体实现 Subject 接口
type RealSubject struct {
    // RealSubject 对象需要进行身份认证或者授权等安全处理
    Username string
    Password string
}

func (rs *RealSubject) Request() {
    fmt.Println("Request processed by Real Subject")
}

// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RealSubject 对象
type Proxy struct {
    subject *RealSubject
    username string
    password string
}

func (p *Proxy) Authenticate() bool {
    // 在此处执行身份认证等操作
    if p.username == "admin" && p.password == "admin123" {
        return true
    }
    return false
}

func (p *Proxy) Request() {
    if p.subject == nil {
        p.subject = &RealSubject{
            Username: p.username,
            Password: p.password,
        }
    }
    // 在此处执行授权等操作
    if p.Authenticate() {
        p.subject.Request()
    } else {
        fmt.Println("Authorization failed!")
    }
}

// client 代码
func main() {
    var subject Subject = &Proxy{
        username: "admin",
        password: "admin123",
    }
    subject.Request()
}
```

我们通过认证和授权等操作来控制对 RealSubject 对象的访问权限，只有认证和授权成功之后才能访问 RealSubject 对象，否则返回授权失败的提示消息。通过这种方式，我们可以对系统中的访问进行更加细粒度的控制，增加了系统的安全性和鲁棒性。

### 缓存代理

```go
// Subject 接口定义
type Subject interface {
    Request(arg int) int
}

// RealSubject 结构体实现 Subject 接口
type RealSubject struct{}

func (rs *RealSubject) Request(arg int) int {
    fmt.Println("Processing request with argument:", arg)
    return arg * 2
}

// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RealSubject 对象和一个缓存 map
type Proxy struct {
    subject *RealSubject
    cache map[int]int
}

func (p *Proxy) Request(arg int) int {
    // 尝试从缓存中获取结果
    res, ok := p.cache[arg]
    if ok {
        fmt.Println("Return cached result:", res)
        return res
    }
    // 如果缓存中没有结果，则使用 RealSubject 对象进行计算
    if p.subject == nil {
        p.subject = &RealSubject{}
    }
    res = p.subject.Request(arg)
    // 将计算结果添加到缓存中，并返回结果
    p.cache[arg] = res
    return res
}

// client 代码
func main() {
    var subject Subject = &Proxy{
        cache: make(map[int]int),
    }
    subject.Request(10) // 缓存中没有结果，RealSubject 进行计算并添加到缓存中
    subject.Request(10) // 缓存中存在结果，直接返回缓存结果
}
```

通过这种方式，我们可以减少一些需要重复计算的操作，优化了系统的性能，并且可以快速响应客户端的请求。

### 日志记录代理

```go
// Subject 接口定义
type Subject interface {
    Request()
}

// RealSubject 结构体实现 Subject 接口
type RealSubject struct{}

func (rs *RealSubject) Request() {
    fmt.Println("Processing request...")
}

// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RealSubject 对象和一个日志记录器
type Proxy struct {
    subject *RealSubject
    logger *log.Logger
}

func (p *Proxy) Request() {
    p.logger.Print("Calling Request method...")
    if p.subject == nil {
        p.subject = &RealSubject{}
    }
    p.subject.Request()
    p.logger.Print("Request method finished.")
}

// client 代码
func main() {
    var subject Subject = &Proxy{
        logger: log.New(os.Stdout, "", log.Ldate|log.Ltime),
    }
    subject.Request() // 记录 Request 方法的调用信息和结果信息
}
```

通过这种方式，我们可以在系统中记录每一次对特定对象或方法的调用，以便后续系统调试或问题排查。

### 有哪些优缺点

#### 优点

- 代理模式能够协调调用者和被调用者，在一定程度上降低了系统的耦合度。
- 远程代理使得客户端可以访问在远程机器上的对象，远程机器坑具有更好的计算性能与处理速度，可以加快相应并处理客户端请求。
- 虚拟代理通过使用一个小对象来代表一个大对象，可以减少系统资源的消耗，对系统进行优化并提高运行速度。
- 保护代理可以控制对真实对象的使用权限。

#### 缺点

- 由于客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。
- 实现代理模式需要额外的工作，有些代理模式的实现非常复杂。

## 总结

### 代理模式和装饰器模式

- 语义上：代理模式是为了控制对被代理对象的访问，而装饰器模式是为了增加被装饰对象的功能。
- 使用方式上：装饰器模式需要将被装饰者作为参数传给装饰者的构造器，而被代理对象由代理对象创建，客户端不需要知道被代理类的存在。
- 使用者角度上：被代理对象是已经确定的，而被装饰者则在使用时根据需求进行组合。

### 代理模式和 Middleware

代理设计模式和 Middleware 之间存在相似之处，这两个模式都是为了实现对象间松耦合，增强维护性和扩展性。例如：日志记录、访问控制、速率限制等。唯一不同的地方是：代理模式是通过引入被代理类扩展其功能，而Go语言middleware是通过函数和闭包实现扩展函数功能，这归功于Go语言中函数是一等公民。
