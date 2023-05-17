(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{814:function(t,e,s){"use strict";s.r(e);var a=s(11),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("API接口文档常常包含以下内容")]),t._v(" "),s("ul",[s("li",[t._v("接口详细列表，包含接口功能，请求方法、输入参数、输出参数、请求示例")]),t._v(" "),s("li",[t._v("CHANGELOG：API接口文档变更历史，方便进行回溯")]),t._v(" "),s("li",[t._v("通用的请求参数、返回参数、认证方法或者加密算法")]),t._v(" "),s("li",[t._v("接口中使用的数据结构")]),t._v(" "),s("li",[t._v("错误码描述")])])]),t._v(" "),s("p",[t._v("常见的API接口规范为：RESTful API规范")]),t._v(" "),s("h2",{attrs:{id:"uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" URI")]),t._v(" "),s("blockquote",[s("p",[t._v("URI表示资源，资源一般对应后端实体，例如：用户为user\n资源集合通常使用复数形式，例如：users")])]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("blockquote",[s("p",[t._v("通过HTTP方法对资源进行CRUD")])]),t._v(" "),s("p",[t._v("GET：查询资源集合或一个资源")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /users\nGET /users?page=1&amp;size=10 (根据条件查询)\nGET /user/:id (:id为用户id)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("POST：创建一个资源")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('POST /user (创建用户)\n{\n  "name": "hexiaopi",\n  "sex": "male",\n  "age": 28\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("PUT：更新一个资源（全量更新）")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('PUT /user/hexiaopi (更新用户信息)\n{\n  "name": "hexiaopi",\n  "sex": "male",\n  "age": 29\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("PATCH：更新一个资源（部分更新，例如只更新用户的状态等）")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('PATCH /user/hexiaopi (更新用户信息)\n[\n  { "op":"replace", "path":"/name", "value":"hexiaojin" }\n]\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("DELETE：删除一个资源")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE /user/:id\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("安全性和幂等性")]),t._v(" "),s("blockquote",[s("p",[t._v("安全性：不会改变资源状态，可以理解为只读的；\n幂等性：执行1次和执行N次，对资源状态改变效果是等价的；")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Request")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("安全性")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("幂等性")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("PATCH")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("这里的幂等性关注的是资源状态改变效果，而非两次相同的请求得到相同的结果。")]),t._v(" "),s("p",[t._v("例如：删除某一个资源，第一次成功删除，下次再删除就不一定成功了。但是对于这条资源的最终状态来说，都是一样的，即该资源已删除。")])]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("h3",{attrs:{id:"错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),s("blockquote",[s("p",[t._v("返回错误码及其描述\nAPI包含两类异常：业务异常和非业务异常")]),t._v(" "),s("p",[t._v("业务异常须返回相应的HTTP状态码，例如：")]),t._v(" "),s("ul",[s("li",[t._v("请求未授权对应HTTP状态码401；")]),t._v(" "),s("li",[t._v("请求参数校验失败对应HTTP状态码400；")])]),t._v(" "),s("p",[t._v("非业务异常统一返回状态码500")])]),t._v(" "),s("h2",{attrs:{id:"接口版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口版本"}},[t._v("#")]),t._v(" 接口版本")]),t._v(" "),s("blockquote",[s("p",[t._v("接口版本常常发生在不兼容场景。\n常见通过URI中增加版本号信息，例如：")]),t._v(" "),s("ul",[s("li",[t._v("/api/v1/user")]),t._v(" "),s("li",[t._v("/api/v2/user")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);