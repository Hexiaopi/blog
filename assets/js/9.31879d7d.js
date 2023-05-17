(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{687:function(t,e,a){t.exports=a.p+"assets/img/dirty-read.63ad1a9f.png"},688:function(t,e,a){t.exports=a.p+"assets/img/non-repeatable-read.12d910d1.png"},689:function(t,e,a){t.exports=a.p+"assets/img/phantom-read.a628a0a7.png"},690:function(t,e,a){t.exports=a.p+"assets/img/row-version.5584803d.png"},691:function(t,e,a){t.exports=a.p+"assets/img/read-view.da79f6a5.png"},756:function(t,e,a){"use strict";a.r(e);var s=a(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"事务的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的特性"}},[t._v("#")]),t._v(" 事务的特性")]),t._v(" "),s("ul",[s("li",[t._v("原子性(Atomicity): 事务中的所有操作要么全部完成，要么全部不完成（回滚），不会在事务中间遇到错误而中断。")]),t._v(" "),s("li",[t._v("一致性(Consistency): 事务开始和结束时，数据都必须保持一致状态，即符合约束、完整性、默认值以及其它定义的规则。事务执行的结果不能破坏数据库的完整性和一致性。")]),t._v(" "),s("li",[t._v("隔离性(Isolation): 各个事务互相隔离，每个事务的执行都不会影响其它事务的执行或者结果。")]),t._v(" "),s("li",[t._v("持久性(Durability): 一个事务一旦提交成功，它对数据库中的数据的改变就是永久性的，即使发生数据库故障也不应该对其产生影响。")])]),t._v(" "),s("h2",{attrs:{id:"事务的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的实现"}},[t._v("#")]),t._v(" 事务的实现")]),t._v(" "),s("ul",[s("li",[t._v("Undo log：实现事务的原子性；")]),t._v(" "),s("li",[t._v("Redo log：实现事务的持久性；")]),t._v(" "),s("li",[t._v("锁/MVCC：实现事务的隔离性；锁机制来保证事务在执行时互相隔离，防止事务间相互干扰，即写-写问题。MVCC 机制是通过保存历史版本的方式来实现，事务可以读取数据在事务开始时的版本，而不受到事务期间其他事务所做的改变的影响，即写-读问题。")]),t._v(" "),s("li",[t._v("以上三者保证了事务的一致性；")])]),t._v(" "),s("h2",{attrs:{id:"并发事务带来的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发事务带来的问题"}},[t._v("#")]),t._v(" 并发事务带来的问题")]),t._v(" "),s("p",[t._v("当数据库上有多个事务同时执行的时候，就可能出现"),s("strong",[t._v("脏读(dirty read)")]),t._v("、"),s("strong",[t._v("不可重复读(non-repeatable read)")]),t._v("、"),s("strong",[t._v("幻读(phantom read)")]),t._v("，为了解决这些问题，就有了隔离级别的概念")]),t._v(" "),s("h3",{attrs:{id:"脏读问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脏读问题"}},[t._v("#")]),t._v(" 脏读问题")]),t._v(" "),s("blockquote",[s("p",[t._v("脏读是指：一个事务中访问到了另外一个事务未提交的数据")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(687),alt:"dirty-read"}})]),t._v(" "),s("h3",{attrs:{id:"不可重复读问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读问题"}},[t._v("#")]),t._v(" 不可重复读问题")]),t._v(" "),s("blockquote",[s("p",[t._v("不可重复读是指：一个事务多次读取同一行数据，但是在多次读取中数据发生了改变。")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(688),alt:"non-repeatable-read"}})]),t._v(" "),s("h3",{attrs:{id:"幻读问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#幻读问题"}},[t._v("#")]),t._v(" 幻读问题")]),t._v(" "),s("blockquote",[s("p",[t._v("幻读是指：一个事务多次执行同一条 SQL 语句，但结果集却不同，导致无法支撑后续的业务操作")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(689),alt:"phantom-read"}})]),t._v(" "),s("h2",{attrs:{id:"事务的隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的隔离级别"}},[t._v("#")]),t._v(" 事务的隔离级别")]),t._v(" "),s("p",[t._v("针对上面三种问题，分别有四种隔离级别：")]),t._v(" "),s("h3",{attrs:{id:"未提交读-read-uncommitted-ru"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未提交读-read-uncommitted-ru"}},[t._v("#")]),t._v(" 未提交读(read uncommitted，RU)")]),t._v(" "),s("blockquote",[s("p",[t._v("未提交读，是指一个事务还未提交时，它做的变更就能被别的事务看到。即"),s("strong",[t._v("没有提交却可以读")])])]),t._v(" "),s("h3",{attrs:{id:"提交读-read-committed-rc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交读-read-committed-rc"}},[t._v("#")]),t._v(" 提交读(read committed，RC)")]),t._v(" "),s("blockquote",[s("p",[t._v("提交读，是指一个事务提交之后，它做的变更才会被其他事务看到。即"),s("strong",[t._v("提交才可以读")])])]),t._v(" "),s("p",[t._v("👀 "),s("strong",[t._v("大多数数据库系统的默认隔离级别")])]),t._v(" "),s("h3",{attrs:{id:"可重复读-repeatable-read-rr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可重复读-repeatable-read-rr"}},[t._v("#")]),t._v(" 可重复读(repeatable read，RR)")]),t._v(" "),s("blockquote",[s("p",[t._v("可重复度，是指同一个事务执行过程看到的数据，总是跟这个事务在启动时看到的数据是一致的。即同一个事务多次请求读取数据，会看到同样的数据行。")])]),t._v(" "),s("p",[t._v("👀 "),s("strong",[t._v("MySQL的默认隔离级别")])]),t._v(" "),s("h3",{attrs:{id:"串行化-serializable-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#串行化-serializable-s"}},[t._v("#")]),t._v(" 串行化(serializable，S)")]),t._v(" "),s("blockquote",[s("p",[t._v("是最高的隔离级别，它通过强制事务排序，使之不可能相互冲突。")]),t._v(" "),s("p",[t._v("这个级别可能导致大量的超时现象和锁竞争。")])]),t._v(" "),s("p",[t._v("以上四种隔离级别解决问题如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("隔离级别\\解决问题")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("实现原理")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("未提交读")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("没有视图概念")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("提交读")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("每个SQL语句开始执行的时候创建视图")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("事务启动时创建视图，且整个事务期间都在用这个视图")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("串行化")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("加锁的方式避免并行访问")])])])]),t._v(" "),s("p",[t._v("各个隔离级别都有它自己的使用场景，需要根据业务情况来定，隔离级别从上到下，性能变差。")]),t._v(" "),s("h2",{attrs:{id:"mvcc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[t._v("#")]),t._v(" MVCC")]),t._v(" "),s("p",[t._v("MySQL InnoDB默认级别是可重复度隔离级别，为了解决不可重复读问题，InnoDB采用了MVCC(多版本并发控制)的方式。它为存储的每一行增加三个额外的隐藏字段")]),t._v(" "),s("ul",[s("li",[t._v("DATA_TRX_ID：产生当前记录项的事务ID")]),t._v(" "),s("li",[t._v("DELETE BIT：用于标识该记录是否是删除记录")]),t._v(" "),s("li",[t._v("DATA_ROLL_PTR：指向当前记录项的undo信息")])]),t._v(" "),s("h3",{attrs:{id:"mvcc下sql语句实际处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvcc下sql语句实际处理"}},[t._v("#")]),t._v(" MVCC下SQL语句实际处理")]),t._v(" "),s("h4",{attrs:{id:"select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" SELECT")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("InnoDB只查找版本早于当前事务版本的数据行（行的事务版本号<=当前事务的系统版本号），这样可以确保事务读取的行，要么是在事务开始前以及存在，要么是事务自身插入或者修改过的。")])]),t._v(" "),s("li",[s("p",[t._v("行的删除版本要么未定义，要么大于当前事务版本号，这样可以确保事务读取到的行，在事务开始之前未被删除。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("只有符合上述两个条件的记录，才能返回作为查询结果")])]),t._v(" "),s("h4",{attrs:{id:"insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[t._v("#")]),t._v(" INSERT")]),t._v(" "),s("blockquote",[s("p",[t._v("InnoDB为新插入的每一行保存当前事务版本号作为行版本号")])]),t._v(" "),s("h4",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),s("blockquote",[s("p",[t._v("InnoDB为删除的每一行保存当前事务版本号作为行删除标识")])]),t._v(" "),s("h4",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" UPDATE")]),t._v(" "),s("blockquote",[s("p",[t._v("InnoDB为插入一行新记录，保存当前事务版本作为行版本号，同时保存当前事务版本号到原来的行作为行删除标识")])]),t._v(" "),s("p",[t._v("MVCC多版本在事务启动时用到"),s("strong",[t._v("一致性读视图(consisten read view)")]),t._v("，那什么是事务的一致性视图呢？")]),t._v(" "),s("p",[t._v("InnoDB每个事务都有唯一的事务ID(transaction id)，它在事务开始的时候向InnoDB的事务系统申请的，是严格按照递增的顺序申请的。")]),t._v(" "),s("p",[t._v("每行数据也都是有多个版本的，每次事务更新数据的时候，都会生成一个新的数据版本，并且将事务ID赋值给这个数据版本的事务ID，同时旧的数据版本要保留。如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(690),alt:"行-版本"}})]),t._v(" "),s("p",[t._v("图中虚线框中同一行数据有4个版本，每个版本均有对应的事务ID。")]),t._v(" "),s("p",[t._v("InnoDB为每个事务构造了一个数组，用来保存这个事务启动瞬间，当前正在"),s("strong",[t._v("活跃")]),t._v("（启动还为提交）的所有事务ID，数组里面事务ID的最小值记为"),s("strong",[t._v("低水位")]),t._v("，事务ID的最大值+1记为"),s("strong",[t._v("高水位")]),t._v("。这个视图数组和高水位就组成了当前事务的一致性视图。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(691),alt:"视图"}})]),t._v(" "),s("p",[t._v("对于数据版本的事务ID，则存在以下情况：")]),t._v(" "),s("ul",[s("li",[t._v("如果落在绿色部分，表示这个版本是已提交事务或者当前事务自己生成的，这个版本数据是可见的；")]),t._v(" "),s("li",[t._v("如果落在红色部分，表示这个版本是由将来启动的事务生成的，则不可见；")]),t._v(" "),s("li",[t._v("如果落在黄色部分，存在两种情况\n"),s("ul",[s("li",[t._v("若row trx_id在数组中，表示这个版本是由"),s("strong",[t._v("还未提交的事务")]),t._v("生成的，这个版本数据是不可见的；")]),t._v(" "),s("li",[t._v("若row trx_id不在数组中，表示这个版本是由"),s("strong",[t._v("已经提交的事务")]),t._v("生成的，这个版本数据是可见的；")])])])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("我们以"),s("strong",[t._v("可重复读隔离级别")]),t._v("为例：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事务A")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务B")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务C")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction with consistent snapshot;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction with consistent snapshot;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("update t set k=k+1 where id=1;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("update t set k=k+1 where id=1;  "),s("br"),t._v("select k from t where id =1;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select k from t where id=1;"),s("br"),t._v("commit;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("commit;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("这里注意：")]),t._v(" "),s("p",[s("code",[t._v("begin/start transaction")]),t._v(" 命令并不是一个事务的起点，在执行到它们之后的第一个操作 InnoDB 表的语句，事务才真正启动。如果你想要马上启动一个事务，可以使用 "),s("code",[t._v("start transaction with consistent snapshot")]),t._v("这个命令。")]),t._v(" "),s("p",[t._v("这里我们假设事务A、B、C的版本号分别是100、101、102。")]),t._v(" "),s("p",[t._v("id=1这行数据存在以下版本：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事务ID")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("90（历史事务ID）")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("102")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("101")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("3")])])])]),t._v(" "),s("p",[t._v("事务A查询的时候，事务B还没有提交，因此3不可见。事务C虽然提交了，但是事务A启动时，就创建了一致性视图，对于事务A来说，它的视图数组是[99,100]，依旧不可见。")]),t._v(" "),s("p",[t._v("对于事务一致性视图来说，除了自己的更新总是可见以为，还有三种情况：")]),t._v(" "),s("ol",[s("li",[t._v("版本未提交，不可见；")]),t._v(" "),s("li",[t._v("版本已提交，但是是在视图创建后提交的，不可见。")]),t._v(" "),s("li",[t._v("版本已提交，而且是在视图前提交的，可见。")])]),t._v(" "),s("p",[t._v("那么问题来了，事务B更新的时候，如果按照一致性视图，不应该更新k=3呀，这里就需要一条规则："),s("strong",[t._v("更新数据都是先读后写")]),t._v("，这个读要属于"),s("strong",[t._v("当前读")]),t._v("，否则事务C就不生效了。")]),t._v(" "),s("p",[t._v("读存在两种读："),s("strong",[t._v("当前读")]),t._v("和"),s("strong",[t._v("快照读")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"快照读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照读"}},[t._v("#")]),t._v(" 快照读")]),t._v(" "),s("blockquote",[s("p",[t._v("读取的是记录的可见版本，不用加锁")])]),t._v(" "),s("p",[t._v("简单的select操作，属于快照读，例如：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ?；\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"当前读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前读"}},[t._v("#")]),t._v(" 当前读")]),t._v(" "),s("p",[s("strong",[t._v("幻读在当前读才有可能出现")]),t._v("，那么Innodb是如何防止幻读的呢，innodb提供了一个间隙锁的技术，行数结合间隙锁，达到最终目的。")]),t._v(" "),s("blockquote",[s("p",[t._v("读取的是记录的最新版本，并且，当前读返回的记录，都会加上锁，保证其他事务不会再并发修改这条记录。")])]),t._v(" "),s("p",[t._v("特殊的读操作，以及插入、更新、删除操作都属于当前读，例如：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("我们以"),s("strong",[t._v("读提交隔离级别")]),t._v("为例：")]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("start transaction with consistent snapshot;")]),t._v("在读提交隔离级别下没有意义，等价于普通的"),s("code",[t._v("start transaction")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事务A")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务B")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务C")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("update t set k=k+1 where id=1;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("update t set k=k+1 where id=1;  "),s("br"),t._v("select k from t where id =1;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select k from t where id=1;"),s("br"),t._v("commit;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("commit;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("事务A在执行"),s("code",[t._v("select k from t where id=1;")]),t._v("才创建一致性视图，此时事务C已提交，因此k=2;")]),t._v(" "),s("p",[t._v("同样事务B，事务C已提交，因此可见，且自己修改的肯定可见，因此k=3;")]),t._v(" "),s("h2",{attrs:{id:"那么mysql可重复读解决幻读了吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那么mysql可重复读解决幻读了吗"}},[t._v("#")]),t._v(" 那么MySQL可重复读解决幻读了吗？")]),t._v(" "),s("p",[t._v("我们试验为例：")]),t._v(" "),s("p",[t._v("假设存在表"),s("code",[t._v("dept")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" desc dept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+-------+-------------+------+-----+---------+-------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Type        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Null "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Default "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Extra "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+-------+-------------+------+-----+---------+-------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PRI "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" varchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+-------+-------------+------+-----+---------+-------+\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" rows "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("开启两个事务进行试验")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事务A")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务B")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("Empty set (0.01 sec)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("insert into dept values(1,'a');")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("Empty set (0.01 sec)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("commit;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("Empty set (0.01 sec)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("insert into dept values(1,'a');"),s("br"),t._v("Duplicate entry '1' for key 'PRIMARY'")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("事务A就很奇怪，明明查询不到数据，写入时却报主键重复错误😢("),s("strong",[t._v("幻读出现")]),t._v(")")]),t._v(" "),s("p",[t._v("继续试验：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事务A")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务B")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("1,a")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("insert into dept values(2,'b');")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("1,a")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("commit;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("1,a")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("update dept set value='z';"),s("br"),t._v("Query OK, 2 rows affected (0.00 sec)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("事务A又奇怪了，明明只有一条数据，为啥影响了两条数据😭（"),s("strong",[t._v("幻读出现")]),t._v("）")]),t._v(" "),s("p",[t._v("那么MySQL如何解决幻读呢")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事务A")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("事务B")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("start transaction;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept where id>=1 for update;"),s("br"),t._v("1,z"),s("br"),t._v("2,z")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("insert into dept values(3,'c');"),s("br"),t._v("Lock wait timeout exceeded; try restarting transaction")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("1,z"),s("br"),t._v("2,z")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("commit;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("insert into dept values(3,'c');")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("commit;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("select * from dept;"),s("br"),t._v("1,z"),s("br"),t._v("2,z"),s("br"),t._v("3,c")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("可以看到通过对"),s("code",[t._v("id>=1")]),t._v("加锁，成功解决幻读问题，但是如果在间隙锁之外进行数据操作，其实还是会出现幻读。因此MySQL可重复读隔离级别通过间隙锁部分解决幻读问题，并没有完全解决，如果要解决幻读问题只能使用串行化隔离级别。")])])}),[],!1,null,null,null);e.default=n.exports}}]);