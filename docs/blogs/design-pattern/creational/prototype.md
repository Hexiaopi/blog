---
title: 设计模式-原型
date: 2022-10-16
tags:
 - Go
 - 创建型模式
categories:
 - 设计模式
---

![prototype](https://refactoringguru.cn/images/patterns/content/prototype/prototype-2x.png)

<!-- more -->

[[toc]]

## 什么是原型模式

原型模式(Prototype Pattern)用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。它的核心思想是通过复制一个已经存在的对象来创建新的对象，而不是通过调用构造函数或者其他初始化方法。这样可以避免一些复杂的或者耗时的对象创建过程，提高程序的效率和灵活性。

### 包含哪些角色

![prototype](../images/prototype.png)

- Prototype：抽象原型

  抽象原型规定了clone()接口来复制新的对象

- ConcretePrototype：具体原型

  具体原型实现抽象原型的clone()方法，是可被复制的对象

### 代码示例

```go
package prototype

import "fmt"

type inode interface {
	print(string)
	clone() inode
}

type file struct {
	name string
}

func (f *file) print(indentation string) {
	fmt.Println(indentation + f.name)
}

func (f *file) clone() inode {
	return &file{name: f.name + "_clone"}
}

type folder struct {
	children []inode
	name     string
}

func (f *folder) print(indentation string) {
	fmt.Println(indentation + f.name)
	for _, i := range f.children {
		i.print(indentation + indentation)
	}
}

func (f *folder) clone() inode {
	cloneFolder := &folder{name: f.name + "_clone"}
	var tempChildren []inode
	for _, i := range f.children {
		copy := i.clone()
		tempChildren = append(tempChildren, copy)
	}
	cloneFolder.children = tempChildren
	return cloneFolder
}
```

使用示例如下：

```go
package prototype

func ExampleFile() {
	file1 := &file{name: "file1"}
	cloneFile := file1.clone()
	cloneFile.print("example_")
	// Output:
	// example_file1_clone
}

func ExampleFolder() {
	file1 := &file{name: "file1"}
	file2 := &file{name: "file2"}
	file3 := &file{name: "file3"}
	folder1 := &folder{
		name:     "folder1",
		children: []inode{file1, file2, file3},
	}
	cloneFolder := folder1.clone()
	cloneFolder.print("example_")
	// Output:
	// example_folder1_clone
	// example_example_file1_clone
	// example_example_file2_clone
	// example_example_file3_clone
}
```

### 应用场景

- 当对象创建过程很复杂或者很耗时时，可以通过复制一个已经存在的对象来简化和加快对象创建过程。
- 当需要生成大量相同或者相似的对象时，可以通过复制一个原型对象来减少内存消耗和提高性能。
- 当需要根据不同的需求和环境来动态地生成对象时，可以通过选择不同的原型对象来实现多态性和灵活性。

例如：

游戏中的子弹，通常数量规模很大，通过原型设计模式可以复制已经创建好的字段对象，这样可以节省内存和性能。

### 有哪些优缺点

#### 优点

- 可以避免重复的对象创建过程，节省时间和资源。
- 可以动态地生成对象，根据不同的需求和环境来选择合适的原型。
- 可以隐藏对象创建的细节，降低代码的耦合度和依赖性。

#### 缺点

- 需要实现克隆方法，可能会增加代码的复杂度和维护成本。
- 需要注意深拷贝和浅拷贝的区别，避免出现意外的副作用和错误。
- 需要保证原型对象的稳定性和安全性，避免被修改或者破坏。

## 总结

原型设计模式是一种创建型设计模式，它通过复制一个已经存在的对象来创建新的对象，而不是通过调用构造函数或者其他初始化方法。
在Go语言中，我们还需要注意深拷贝和浅拷贝的区别。深拷贝是指完全复制一个对象及其所有关联的对象，使得新对象和旧对象完全独立。浅拷贝是指只复制一个对象本身，而不复制其关联的对象，使得新对象和旧对象共享部分数据。
