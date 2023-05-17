(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{606:function(s,t,e){s.exports=e.p+"assets/img/MySQL-Read-Simple.b44f0ff6.png"},692:function(s,t,e){s.exports=e.p+"assets/img/MySQL-Write-Process.d881b48c.png"},757:function(s,t,e){"use strict";e.r(t);var a=e(11),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"执行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[s._v("#")]),s._v(" 执行流程")]),s._v(" "),a("blockquote",[a("p",[s._v("查询语句执行的流程，更新语句也会执行类似的过程，稍有差别的地方是更新语句会将更新表的所有缓存清理，这就是为什么不建议使用查询缓存。")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(606),alt:"交互流程"}})]),s._v(" "),a("h3",{attrs:{id:"日志模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志模块"}},[s._v("#")]),s._v(" 日志模块")]),s._v(" "),a("blockquote",[a("p",[s._v("更重要的是MySQL的日志模块，这是数据库提供高可用以及事务的重要模块")])]),s._v(" "),a("p",[s._v("我们以InnoDB引擎和一条更新语句为例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:e(692),alt:"写流程"}})]),s._v(" "),a("ul",[a("li",[s._v("蓝色框是MySQL服务层处理过程")]),s._v(" "),a("li",[s._v("绿色框是InnoDB引擎层处理过程")])]),s._v(" "),a("p",[s._v("其中：")]),s._v(" "),a("ul",[a("li",[s._v("undolog用于InnoDB记录事务回滚日志")]),s._v(" "),a("li",[s._v("redolog用于InnoDB记录事务前滚日志，保障事务"),a("code",[s._v("crash-safe")])]),s._v(" "),a("li",[s._v("binlog是MySQL服务层归档日志")])]),s._v(" "),a("ol",[a("li",[s._v("执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。")]),s._v(" "),a("li",[s._v("执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。")]),s._v(" "),a("li",[s._v("引擎记录undolog")]),s._v(" "),a("li",[s._v("引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。")]),s._v(" "),a("li",[s._v("执行器生成这个操作的 binlog，并把 binlog 写入磁盘。")]),s._v(" "),a("li",[s._v("执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。")])]),s._v(" "),a("p",[s._v("redolog的写入拆成了两个步骤：prepare和commit，这就是"),a("strong",[s._v("两阶段提交")])])])}),[],!1,null,null,null);t.default=r.exports}}]);