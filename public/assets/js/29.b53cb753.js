(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{640:function(s,t,a){"use strict";a.r(t);var e=a(11),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("一个好的代码目录应该是怎样的❓")])]),s._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("blockquote",[a("p",[s._v("可以通过以下维度进行考量：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("命名清晰：目录命名需要简洁，清晰的表达出该目录实现的功能，做到一看到该目录名就知道是干嘛的；")])]),s._v(" "),a("li",[a("p",[s._v("功能明确：目录的功能必须明确，例如：api目录是接口服务、service目录是业务逻辑；")])]),s._v(" "),a("li",[a("p",[s._v("功能齐全：例如测试、构建、脚本、工具、文档等；")])])])]),s._v(" "),a("p",[s._v("这里参考Go语言公认项目目录"),a("a",{attrs:{href:"https://github.com/golang-standards/project-layout",target:"_blank",rel:"noopener noreferrer"}},[s._v("project-layout"),a("OutboundLink")],1),s._v("结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── api\n├── assets\n├── build\n│   ├── ci\n│   └── package\n├── cmd\n│   └── _your_app_\n├── configs\n├── deployments\n├── docs\n├── examples\n├── githooks\n├── init\n├── internal\n│   ├── app\n│   │   └── _your_app_\n│   └── pkg\n│       └── _your_private_lib_\n├── pkg\n│   └── _your_public_lib_\n├── scripts\n├── test\n├── third_party\n├── tools\n├── vendor\n├── web\n│   ├── app\n│   ├── static\n│   └── template\n└── website\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h2",{attrs:{id:"go目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go目录"}},[s._v("#")]),s._v(" Go目录")]),s._v(" "),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[s._v("#")]),s._v(" cmd")]),s._v(" "),a("blockquote",[a("p",[s._v("该项目的主要应用，每个应用程序的目录名称应与执行文件的名称相匹配，例如："),a("code",[s._v("/cmd/myapp")])])]),s._v(" "),a("h3",{attrs:{id:"internal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal"}},[s._v("#")]),s._v(" internal")]),s._v(" "),a("blockquote",[a("p",[s._v("存放私有应用和库代码，如果一些代码，你不希望在其他在其他应用和库中被导入，可以放在internal目录下")])]),s._v(" "),a("h3",{attrs:{id:"pkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pkg"}},[s._v("#")]),s._v(" pkg")]),s._v(" "),a("blockquote",[a("p",[s._v("与internal相反，该目录存放可供其他应用程序使用的库代码。")])]),s._v(" "),a("h3",{attrs:{id:"vendor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vendor"}},[s._v("#")]),s._v(" vendor")]),s._v(" "),a("blockquote",[a("p",[s._v("该目录存放项目依赖，可通过"),a("code",[s._v("go mod vendor")]),s._v("创建。\n[!ATTENTION]\n如果开发的是Go语言库，不要提交vendor依赖包")])]),s._v(" "),a("h2",{attrs:{id:"服务应用程序目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务应用程序目录"}},[s._v("#")]),s._v(" 服务应用程序目录")]),s._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" api")]),s._v(" "),a("blockquote",[a("p",[s._v("OpenAPI/Swagger规范、JSON模式文件、协议定义文件")])]),s._v(" "),a("h2",{attrs:{id:"web应用程序目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web应用程序目录"}},[s._v("#")]),s._v(" Web应用程序目录")]),s._v(" "),a("h3",{attrs:{id:"web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[s._v("#")]),s._v(" web")]),s._v(" "),a("blockquote",[a("p",[s._v("前端代码存放目录，用来存放Web静态资源，服务端模块和单页应用（SPAs）")])]),s._v(" "),a("h2",{attrs:{id:"通用应用目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用应用目录"}},[s._v("#")]),s._v(" 通用应用目录")]),s._v(" "),a("h3",{attrs:{id:"configs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configs"}},[s._v("#")]),s._v(" configs")]),s._v(" "),a("blockquote",[a("p",[s._v("配置文件")])]),s._v(" "),a("h3",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[s._v("#")]),s._v(" init")]),s._v(" "),a("blockquote",[a("p",[s._v("系统初始化（systemd、upstart、sysv）和进程管理器(runit、supervisord)配置文件，在非容器化部署的项目中会使用到。")])]),s._v(" "),a("h3",{attrs:{id:"scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[s._v("#")]),s._v(" scripts")]),s._v(" "),a("blockquote",[a("p",[s._v("执行各种构建、安装、分析等操作的脚本。这些脚本使根级 Makefile 小而简单（例如，https://github.com/hashicorp/terraform/blob/master/Makefile）。")])]),s._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[s._v("#")]),s._v(" build")]),s._v(" "),a("blockquote",[a("p",[s._v("打包和持续集成")]),s._v(" "),a("p",[s._v("将云 (AMI)、容器 (Docker)、操作系统（deb、rpm、pkg）包配置和脚本放在"),a("code",[s._v("/build/package")]),s._v("目录中。")]),s._v(" "),a("p",[s._v("将CI（travis、circle、drone）配置和脚本放在"),a("code",[s._v("/build/ci")]),s._v("目录中。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("一些 CI 工具（例如 Travis CI）对其配置文件的位置非常挑剔。尝试将配置文件放在/build/ci将它们链接到 CI 工具期望它们的位置的目录中（如果可能）。")])]),a("h3",{attrs:{id:"deployments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployments"}},[s._v("#")]),s._v(" deployments")]),s._v(" "),a("blockquote",[a("p",[s._v("IaaS、PaaS、系统和容器编排部署配置和模板（docker-compose、kubernetes/helm、mesos、terraform、bosh）。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("在某些存储库（尤其是使用 kubernetes 部署的应用程序）中，此目录称为"),a("code",[s._v("deploy")]),s._v(".")])]),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[s._v("#")]),s._v(" test")]),s._v(" "),a("blockquote",[a("p",[s._v("其他外部测试应用程序和测试数据。对于更大的项目，有一个数据子目录是有意义的。例如："),a("code",[s._v("/test/data")]),s._v("或者"),a("code",[s._v("/test/testdata")])])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("Go 也会忽略以“.”开头的目录或文件。或“_”，因此您可以更灵活地命名测试数据目录。")])]),a("h2",{attrs:{id:"其他目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他目录"}},[s._v("#")]),s._v(" 其他目录")]),s._v(" "),a("h3",{attrs:{id:"docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[s._v("#")]),s._v(" docs")]),s._v(" "),a("blockquote",[a("p",[s._v("设计和用户文档，除了"),a("code",[s._v("godoc")]),s._v("生成的文档之外")])]),s._v(" "),a("h3",{attrs:{id:"tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[s._v("#")]),s._v(" tools")]),s._v(" "),a("blockquote",[a("p",[s._v("该项目的支持工具")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("这些工具可以从"),a("code",[s._v("pkg")]),s._v("和"),a("code",[s._v("internal")]),s._v("目录导入代码")])]),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" examples")]),s._v(" "),a("blockquote",[a("p",[s._v("应用程序和公共库的示例")])]),s._v(" "),a("h3",{attrs:{id:"third-party"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#third-party"}},[s._v("#")]),s._v(" third_party")]),s._v(" "),a("blockquote",[a("p",[s._v("外部帮助工具")])]),s._v(" "),a("h3",{attrs:{id:"githooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#githooks"}},[s._v("#")]),s._v(" githooks")]),s._v(" "),a("blockquote",[a("p",[s._v("Git钩子")])]),s._v(" "),a("h3",{attrs:{id:"assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assets"}},[s._v("#")]),s._v(" assets")]),s._v(" "),a("blockquote",[a("p",[s._v("其他资产，例如：图像、徽标等")])]),s._v(" "),a("h3",{attrs:{id:"website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#website"}},[s._v("#")]),s._v(" website")]),s._v(" "),a("blockquote",[a("p",[s._v("项目网站数据")])]),s._v(" "),a("h2",{attrs:{id:"不应该拥有的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不应该拥有的目录"}},[s._v("#")]),s._v(" 不应该拥有的目录")]),s._v(" "),a("h3",{attrs:{id:"src"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src"}},[s._v("#")]),s._v(" src")]),s._v(" "),a("blockquote",[a("p",[s._v("Go语言的工作空间包含："),a("code",[s._v("pkg")]),s._v("、"),a("code",[s._v("bin")]),s._v("、"),a("code",[s._v("src")]),s._v("。且项目代码放在"),a("code",[s._v("src")]),s._v("目录下，如果一个Go项目包含"),a("code",[s._v("src")]),s._v("目录，则项目路径将会变成："),a("code",[s._v("/some/path/to/workspace/src/your_project/src/your_code.go")]),s._v("，就变得非常丑。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);