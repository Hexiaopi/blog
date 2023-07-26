(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{813:function(e,s,t){"use strict";t.r(s);var a=t(11),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"commit-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-message"}},[e._v("#")]),e._v(" Commit Message")]),e._v(" "),t("p",[e._v("Git每次提交代码，都需要写"),t("code",[e._v("Commit message")]),e._v("，好的规范例如："),t("a",{attrs:{href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"}},[e._v("Angular规范"),t("OutboundLink")],1),e._v("，可以帮助我们：")]),e._v(" "),t("ul",[t("li",[e._v("根据摘要信息就可以知道每次变更哪些内容")]),e._v(" "),t("li",[e._v("可以过滤某些commit，例如只关注新增加的功能")]),e._v(" "),t("li",[e._v("根据commit生成"),t("code",[e._v("Change log")])])]),e._v(" "),t("p",[e._v("在Angular规范中，Commit Message包含三个部分：Header、Body、Footer，格式如下：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("&lt;type>(&lt;scope>): &lt;subject>\n// 空一行\n&lt;body>\n// 空一行\n&lt;footer>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("ul",[t("li",[t("code",[e._v("<scope>")]),e._v("必须用括号()括起来")]),e._v(" "),t("li",[t("code",[e._v("<type>(<scope>)")]),e._v("后必须紧跟冒号，冒号后紧跟空格")]),e._v(" "),t("li",[t("code",[e._v("<body>")]),e._v("和"),t("code",[e._v("<footer>")]),e._v("之前两个空行也必须要有")])]),e._v(" "),t("p",[e._v("建议每行字符控制在"),t("code",[e._v("72")]),e._v("个字符之内")])]),t("h3",{attrs:{id:"header-必须项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#header-必须项"}},[e._v("#")]),e._v(" Header（必须项）")]),e._v(" "),t("p",[e._v("示例：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fix($compile): couple of unit tests for IE9\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h4",{attrs:{id:"type-必须项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-必须项"}},[e._v("#")]),e._v(" type（必须项）")]),e._v(" "),t("blockquote",[t("p",[e._v("type用来说明commit的类型：")])]),e._v(" "),t("ul",[t("li",[e._v("feat：新功能（feature）")]),e._v(" "),t("li",[e._v("fix：修补bug")]),e._v(" "),t("li",[e._v("perf: 提高代码性能的变更")]),e._v(" "),t("li",[e._v("docs：文档（documentation）")]),e._v(" "),t("li",[e._v("style： 格式（不影响代码运行的变动）")]),e._v(" "),t("li",[e._v("refactor：优化重构（即不是新增功能，也不是修改bug的代码变动，例如：变量重命名、冗余代码删除、代码简化或增加注释）")]),e._v(" "),t("li",[e._v("test：增加测试")]),e._v(" "),t("li",[e._v("chore：构建过程或辅助工具的变动")])]),e._v(" "),t("p",[e._v("type为"),t("code",[e._v("feat")]),e._v("和"),t("code",[e._v("fix")]),e._v("的可以出现在"),t("code",[e._v("Change log")]),e._v("中，其他建议不要")]),e._v(" "),t("h4",{attrs:{id:"scope-可选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope-可选项"}},[e._v("#")]),e._v(" scope（可选项）")]),e._v(" "),t("blockquote",[t("p",[e._v("scope用于说明commit影响范围，视项目不同而不同。\n如果项目包含多个组件，建议每个组件作为scope\n如果项目只有一个组件，建议根据分成作为scope，例如数据层、控制层、视图层")])]),e._v(" "),t("h4",{attrs:{id:"subject-可选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subject-可选项"}},[e._v("#")]),e._v(" subject（可选项）")]),e._v(" "),t("blockquote",[t("p",[e._v("subject是commit的简短描述，建议：")]),e._v(" "),t("ul",[t("li",[e._v("以动词开头、使用第一人称现在时")]),e._v(" "),t("li",[e._v("第一个字母小写")]),e._v(" "),t("li",[e._v("结尾不加句号")])])]),e._v(" "),t("h3",{attrs:{id:"body-可选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#body-可选项"}},[e._v("#")]),e._v(" Body（可选项）")]),e._v(" "),t("blockquote",[t("p",[e._v("Body用于对本次commit的详细描述，可以分多行。建议：\n说明本次修改的冬季\n和上一版本相比的改动点")])]),e._v(" "),t("p",[e._v("示例：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("More detailed explanatory text, if necessary.  Wrap it to \nabout 72 characters or so. \n\nFurther paragraphs come after blank lines.\n\n- Bullet points are okay, too\n- Use a hanging indent\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h3",{attrs:{id:"footer-可选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#footer-可选项"}},[e._v("#")]),e._v(" Footer（可选项）")]),e._v(" "),t("blockquote",[t("p",[e._v("用来说明本次commit导致的后果，常用来说明：")]),e._v(" "),t("ul",[t("li",[e._v("不兼容的改动，以"),t("code",[e._v("BREAKING CHANGE")]),e._v("开头")]),e._v(" "),t("li",[e._v("关闭的Issue列表\n示例：")])])]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("BREAKING CHANGE: isolate scope bindings definition has changed.\n\n    To migrate the code follow the example below:\n\n    Before:\n\n    scope: {\n      myAttr: 'attribute',\n    }\n\n    After:\n\n    scope: {\n      myAttr: '@',\n    }\n\n    The removed `inject` wasn't generaly useful for directives so there should be no code using it.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br")])]),t("p",[e._v("或")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Closes #123, #245, #992\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"change-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-log"}},[e._v("#")]),e._v(" Change Log")]),e._v(" "),t("p",[e._v("我们可以使用一些工具根据git提交记录自动生成"),t("code",[e._v("CHANGELOG")]),e._v("，例如：\n"),t("a",{attrs:{href:"https://github.com/git-chglog/git-chglog",target:"_blank",rel:"noopener noreferrer"}},[e._v("git-chglog"),t("OutboundLink")],1),e._v("，本项目的"),t("code",[e._v("CHANGELOG")]),e._v("就是使用该工具自动生成，非常方便。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("git-chglog -o CHANGELOG.md\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"semver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#semver"}},[e._v("#")]),e._v(" SemVer")]),e._v(" "),t("p",[e._v("可以使用"),t("a",{attrs:{href:"https://github.com/arnaud-deprez/gsemver",target:"_blank",rel:"noopener noreferrer"}},[e._v("gsemver"),t("OutboundLink")],1),e._v("工具根据git提交记录生成下一个版本")])])}),[],!1,null,null,null);s.default=n.exports}}]);