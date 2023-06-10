(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{719:function(t,o,e){t.exports=e.p+"assets/img/goroutine.b2f8a786.png"},792:function(t,o,e){"use strict";e.r(o);var r=e(11),v=Object(r.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Go语言原生支持并发能力，而goroutine是Go语言原生支持并发的具体实现，本篇将为你揭开goroutine的面纱。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://cdn.cjhe.top/blog/goroutine.png",alt:"goroutine"}})]),t._v(" "),r("h2",{attrs:{id:"goroutine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#goroutine"}},[t._v("#")]),t._v(" goroutine")]),t._v(" "),r("p",[t._v("goroutine是由Go运行时管理的用户层轻量级线程，相比较操作系统线程，goroutine的资源占用和使用代价都要小的多，一个goroutine初始只需要2KB的内存，而线程需要MB级别的空间，这样在有限的内存空间里，可以创建的goroutine的数量相比较线程数量多的多。其次由于线程切换需要拷贝大量的上下文，这就导致线程切换耗时较高。")]),t._v(" "),r("h2",{attrs:{id:"gpm模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpm模型"}},[t._v("#")]),t._v(" GPM模型")]),t._v(" "),r("p",[r("img",{attrs:{src:e(719),alt:"goroutine"}})]),t._v(" "),r("p",[t._v("GPM模型中：")]),t._v(" "),r("ul",[r("li",[t._v("G代表"),r("code",[t._v("goroutine")]),t._v("，存储了"),r("code",[t._v("goroutine")]),t._v("的执行栈信息、"),r("code",[t._v("goroutine")]),t._v("状态及"),r("code",[t._v("goroutine")]),t._v("的任务函数等")]),t._v(" "),r("li",[t._v("P代表"),r("code",[t._v("processor")]),t._v("，逻辑处理器，所有的P都在程序启动时创建，P的数量决定了系统内最大可并行的G的数量，最多有"),r("code",[t._v("GOMAXPROCS")]),t._v("(可配置)个")]),t._v(" "),r("li",[t._v("M代表"),r("code",[t._v("thread")]),t._v("即用户态线程，M在绑定有效的P后，进入到一个调度循环：从各种队列、P的本地队列获取G，切换到G的执行栈上并执行G的函数，调用"),r("code",[t._v("goexit")]),t._v("做清理工作并回到M，如此反复。")])]),t._v(" "),r("p",[t._v("此外还有：")]),t._v(" "),r("ul",[r("li",[t._v("全局队列(Global Queue)：存放等待运行的G")]),t._v(" "),r("li",[t._v("P的本地队列(Local Queue)：存放的也是等待运行的G，数量不超过256个。\n"),r("ul",[r("li",[t._v("当G新建goroutine G'时，G'优先加入到P的本地队列(局部性，G和G'相关)")]),t._v(" "),r("li",[t._v("如果本地队列满了，则会把本地队列中的一半G移动到全局队列")])])])]),t._v(" "),r("h2",{attrs:{id:"调度策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调度策略"}},[t._v("#")]),t._v(" 调度策略")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"title"}),r("p",[t._v("其思想：复用线程M，避免频繁的创建、销毁")])]),r("h3",{attrs:{id:"work-stealing机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#work-stealing机制"}},[t._v("#")]),t._v(" work stealing机制")]),t._v(" "),r("p",[t._v("当本地队列无可运行的G时，会尝试从其他P队列中偷取G，而不是销毁M")]),t._v(" "),r("h3",{attrs:{id:"hand-off机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hand-off机制"}},[t._v("#")]),t._v(" hand off机制")]),t._v(" "),r("p",[t._v("当M因为G进行系统调用阻塞时，M会释放绑定的P，此时的M和G都进入阻塞状态")]),t._v(" "),r("ul",[r("li",[t._v("如果此时有空闲的M，P会与其绑定并执行剩余的G，")]),t._v(" "),r("li",[t._v("如果没有空闲的M，则会创建新的M")])]),t._v(" "),r("p",[t._v("当系统调用返回后，阻塞在该系统调用的G会尝试获取一个可用的P")]),t._v(" "),r("ul",[r("li",[t._v("如果有可用的P，之前运行该G的M将绑定P继续运行G")]),t._v(" "),r("li",[t._v("如果没有可用的P，那么G于M之间的关联将解除，同时G会标记为runable，放入全局队列等待调度")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"title"}),r("ul",[r("li",[t._v("网络I/O不会阻塞M，仅阻塞G")]),t._v(" "),r("li",[t._v("文件I/O会阻塞M，这就是为什么大量文件I/O操作会导致大量线程被创建的原因。")])])]),r("h3",{attrs:{id:"抢占调度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抢占调度"}},[t._v("#")]),t._v(" 抢占调度")]),t._v(" "),r("p",[t._v("与操作系统按"),r("strong",[t._v("时间片")]),t._v("调度线程不同，Go中没有"),r("strong",[t._v("时间片")]),t._v("的概念。如果某个G没有进行系统调用，没有进行I/O操作、没有阻塞在一个channel操作上，那么"),r("strong",[t._v("M是如何让G停下来并调度下一个可运行的G呢")]),t._v("？"),r("Badge",{attrs:{text:"注意",type:"warning"}}),t._v("\n答案是：G被抢占调度的")],1),t._v(" "),r("ul",[r("li",[t._v("Go1.2版本在每个函数或方法的入口增加一段额外的代码，让运行时有机会检查是否需要执行抢占调度；（对没有函数调用的G无效）")]),t._v(" "),r("li",[t._v("Go程序运行时会启动一个名为"),r("code",[t._v("sysmon")]),t._v("的M（称为监控线程），该M无须绑定P即可运行（以g0这个G的形式），该M对于长时间运行（超过10ms）的G发出抢占式调度。")])]),t._v(" "),r("h2",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/rfjysi-LB-uFiGiZjh-XNw",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章-Golang调度器GMP原理与调度全分析"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/35720729/",target:"_blank",rel:"noopener noreferrer"}},[t._v("书籍-Go语言精进之路"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=v.exports}}]);