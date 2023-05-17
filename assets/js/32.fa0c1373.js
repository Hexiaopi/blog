(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{705:function(t,s,a){t.exports=a.p+"assets/img/factory-method.b1e1b797.png"},771:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://refactoringguru.cn/images/patterns/content/factory-method/factory-method-zh-2x.png",alt:"factory-method"}})]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#什么是工厂方法模式"}},[t._v("什么是工厂方法模式")]),n("ul",[n("li",[n("a",{attrs:{href:"#包含哪些角色"}},[t._v("包含哪些角色")])]),n("li",[n("a",{attrs:{href:"#代码示例"}},[t._v("代码示例")])]),n("li",[n("a",{attrs:{href:"#应用场景"}},[t._v("应用场景")])])])]),n("li",[n("a",{attrs:{href:"#总结"}},[t._v("总结")]),n("ul",[n("li",[n("a",{attrs:{href:"#优点"}},[t._v("优点")])]),n("li",[n("a",{attrs:{href:"#缺点"}},[t._v("缺点")])])])]),n("li",[n("a",{attrs:{href:"#对比"}},[t._v("对比")]),n("ul",[n("li",[n("a",{attrs:{href:"#简单工厂和工厂方法"}},[t._v("简单工厂和工厂方法")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"什么是工厂方法模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是工厂方法模式"}},[t._v("#")]),t._v(" 什么是工厂方法模式")]),t._v(" "),n("p",[t._v("工厂方法模式(Factory Method Pattern)也叫虚拟构造器(Virtual Constructor)模式，由于简单工厂模式违背了开闭原则，而工厂方法模式对简单工厂模式进一步抽象，其好处是可以使系统在不修改原来代码的情况下引进新的产品，即满足开闭原则。")]),t._v(" "),n("h3",{attrs:{id:"包含哪些角色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包含哪些角色"}},[t._v("#")]),t._v(" 包含哪些角色")]),t._v(" "),n("p",[n("img",{attrs:{src:a(705),alt:"工厂方法模式"}})]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Abstract Factory：抽象工厂")]),t._v(" "),n("p",[t._v("提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法NewProduct()来创建产品。")])]),t._v(" "),n("li",[n("p",[t._v("Concrete Factory：具体工厂")]),t._v(" "),n("p",[t._v("实现了抽象工厂的方法，完成具体产品的创建。")])]),t._v(" "),n("li",[n("p",[t._v("Product：抽象产品")]),t._v(" "),n("p",[t._v("定义了产品的规范，描述了产品的主要特性和功能。")])]),t._v(" "),n("li",[n("p",[t._v("Concrete Product：具体产品")]),t._v(" "),n("p",[t._v("实现了抽象产品定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。")])])]),t._v(" "),n("h3",{attrs:{id:"代码示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" factory_method\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象产品")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Product "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象工厂")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AbstractFactory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Product\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体产品1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ConcreteProduct1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ConcreteProduct1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Product1 show"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体工厂1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ConcreteFactory1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConcreteFactory1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Product "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ConcreteProduct1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体产品2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ConcreteProduct2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ConcreteProduct2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Product2 show"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体工厂2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ConcreteFactory2 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConcreteFactory2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Product "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ConcreteProduct2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br")])]),n("p",[t._v("使用工厂创建产品示例如下：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" factory_method\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExampleConcreteFactory1_NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" factory AbstractFactory\n\tfactory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConcreteFactory1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tproduct "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tproduct"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output:")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Product1 show")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExampleConcreteFactory2_NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" factory AbstractFactory\n\tfactory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConcreteFactory2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tproduct "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tproduct"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output:")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Product2 show")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("h3",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),n("p",[t._v("例如：电视工厂有TCL电视工厂、海信电视工厂，我们只需要提供品牌名称，就可以获取对应工厂的电视。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("h3",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),n("ul",[n("li",[t._v("用户只需要知道具体工厂的名称就可得到所要的产品，无须知道产品的具体创建过程。")]),t._v(" "),n("li",[t._v("灵活性增强，对于新产品的创建，只需要多写一个相应的工厂类。")]),t._v(" "),n("li",[t._v("典型的解耦框架，高层模块只需要知道产品的抽象类，无须关心其他实现类，满足迪米特法则、依赖倒置原则和里氏替换原则。")])]),t._v(" "),n("h3",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),n("ul",[n("li",[t._v("类的个数容易过多，增加复杂度。")]),t._v(" "),n("li",[t._v("增加系统的抽象性和理解难度。")]),t._v(" "),n("li",[n("strong",[t._v("抽象产品只能生产一种产品")]),t._v("。此弊端可使用抽象工厂模式解决。")])]),t._v(" "),n("h2",{attrs:{id:"对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),n("h3",{attrs:{id:"简单工厂和工厂方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂和工厂方法"}},[t._v("#")]),t._v(" 简单工厂和工厂方法")]),t._v(" "),n("p",[t._v("简单工厂模式是由一个工厂类负责创建所有产品的实例，客户端只需要告诉工厂要创建哪种产品，工厂就会返回相应的产品实例。简单工厂模式的优点是将创建实例的逻辑集中到了一个工厂类中，客户端不需要直接与具体产品类打交道，减少了客户端和产品类之间的依赖关系和耦合度。但是简单工厂模式的缺点是，一旦有新的产品添加到系统中，就需要修改工厂类的代码，违反了开闭原则。")]),t._v(" "),n("p",[t._v("工厂方法模式是将每个具体产品的创建逻辑交给对应的工厂类来实现。每个具体工厂类负责创建一个具体产品类的实例，这样客户端只需面对抽象工厂和抽象产品接口，而不需要知道具体的产品类。工厂方法模式的优点是符合开闭原则，新增加一种产品时，只需要增加相应的具体产品类和具体工厂类即可，不需要修改现有代码。但是，工厂方法模式的缺点是增加了系统中类的个数，增加了系统的复杂度。")]),t._v(" "),n("p",[t._v("因此，在实际应用中，需要根据具体业务场景选择合适的设计模式。如果产品种类不多且不经常变动，可以考虑使用简单工厂模式；如果产品种类较多，需要频繁添加新的产品，可以选择工厂方法模式。")])])}),[],!1,null,null,null);s.default=r.exports}}]);