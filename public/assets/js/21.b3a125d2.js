(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{627:function(t,e,v){"use strict";v.r(e);var _=v(11),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),v("blockquote",[v("p",[t._v("Go语言基本数据类型（Data-types）划分方式有很多，这里按照"),v("strong",[t._v("数据类型")]),t._v("进行划分：值类型、复合类型、引用类型")])]),t._v(" "),v("h3",{attrs:{id:"值类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#值类型"}},[t._v("#")]),t._v(" 值类型")]),t._v(" "),v("blockquote",[v("p",[t._v("值类型即基本的数据类型，包括布尔类型（bool）、整型（int）、浮点型（float）、字节型（byte）、复数型（complex）、字符串型（string）和错误类型（error）。")]),t._v(" "),v("p",[t._v("值类型的变量在传递过程中，编译器对该变量的值进行一次拷贝。")])]),t._v(" "),v("h4",{attrs:{id:"布尔型-boolean"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布尔型-boolean"}},[t._v("#")]),t._v(" 布尔型(Boolean)")]),t._v(" "),v("p",[t._v("**关键字定义：**bool")]),t._v(" "),v("p",[t._v("**字节长度：**1")]),t._v(" "),v("p",[v("strong",[t._v("取值范围：")]),t._v("[true、false]")]),t._v(" "),v("p",[t._v("**零值：**false")]),t._v(" "),v("p",[t._v("👣")]),t._v(" "),v("ol",[v("li",[t._v("布尔类型不接受其他数据类型赋值；")]),t._v(" "),v("li",[t._v("布尔类型不能进行强制类型转换；")])]),t._v(" "),v("h4",{attrs:{id:"整型-integer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#整型-integer"}},[t._v("#")]),t._v(" 整型（Integer）")]),t._v(" "),v("p",[t._v("整型数据类型分为：有符号整型、无符号整型")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("字节长度")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("取值范围")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4/8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("32位系统即int32，64位系统即int64")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("int8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("$-2^7$~$2^7-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("int16")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("$-2^{15}$~$2^{15}-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("int32")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("$-2^{31}$~$2^{31}-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("int64")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("$-2^{63}$~$2^{63}-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("uint")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4/8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("32位系统即uint32，64位系统即uint64")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("uint8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0~$2^8-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("uint16")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0~$2^{16}-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0~$2^{32}-1$")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0~$2^{64}-1$")])])])]),t._v(" "),v("p",[t._v("**零值：**对应字节长度的0")]),t._v(" "),v("p",[t._v("👣")]),t._v(" "),v("ul",[v("li",[t._v("由于字节范围的限制，尤其需注意“溢出”问题，可使用math包中“Max”和“Min”开头的常量帮组检查溢出；")])]),t._v(" "),v("p",[v("strong",[t._v("整型数据的表示方法：")])]),t._v(" "),v("ul",[v("li",[t._v("十进制，如$-123$、0、256；")]),t._v(" "),v("li",[t._v("八进制，以“0”开头的数是八进制，如0123表示八进制数123，即十进制的83；")]),t._v(" "),v("li",[t._v("十六进制，以“0x”开头的数是十六进制数，如0x123表示十六进制数123，即十进制的291；")]),t._v(" "),v("li",[t._v("指数形式，由数字和字母$e$组成，如$1e3$或$10e2$代表十进制的1000；")])]),t._v(" "),v("h4",{attrs:{id:"浮点型-floating-point-number"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浮点型-floating-point-number"}},[t._v("#")]),t._v(" 浮点型（Floating-point-number）")]),t._v(" "),v("p",[t._v("浮点型数据，也称为实数（Real-number），可存储带有小数的数值。浮点型数据在内存中的存储形式和整数不同，是按照指数形式存储的，共有三部分组成：符号、尾数和指数。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("字节长度")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("精确位数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("float32")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("精确小数点后7位")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("float64")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("精确小数点后15位")])])])]),t._v(" "),v("p",[t._v("**零值：**0")]),t._v(" "),v("p",[v("strong",[t._v("浮点型数据的表示方法：")])]),t._v(" "),v("ul",[v("li",[t._v("十进制小数形式：由数字和小数点组成，如1.57、0.12、0.0都是十进制的小数形式；")]),t._v(" "),v("li",[t._v("指数形式：由数字和字母$e$组成，如$1.23e3$或$12.3e2$都表示$1.23\\times10^3$；字母$e$之前必须有数字且后面的指数必须为整数；")])]),t._v(" "),v("p",[t._v("👣")]),t._v(" "),v("ul",[v("li",[t._v("浮点型数据是由有限的存数单元组成的，能提供有效数字总是有限的，有效位以外的数字将被舍去，可能存在一些误差；")])]),t._v(" "),v("h4",{attrs:{id:"复数-complex-number"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复数-complex-number"}},[t._v("#")]),t._v(" 复数（Complex-number）")]),t._v(" "),v("blockquote",[v("p",[t._v("复数是由两个浮点数构成，一个表示实部（real），一个表示虚部（imag），形式如$a+bi$的数，这里的$a$、$b$是实数，$i$是虚数单位")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("字节长度")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("complex64")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("由两个float32构成，因此字节长度为4+4")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("complex128")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("由两个float64构成，因此字节长度为8+8")])])])]),t._v(" "),v("p",[t._v("对于一个复数$z=complex(x,y)$，可以通过Go语言内置函数$real(z)$获得该复数的实部，也可以通过函数$imag(z)$获得该复数的虚部；")]),t._v(" "),v("p",[t._v("**零值：**0+0i")]),t._v(" "),v("h4",{attrs:{id:"字节型-byte"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字节型-byte"}},[t._v("#")]),t._v(" 字节型（Byte）")]),t._v(" "),v("blockquote",[v("p",[t._v("字节型数据在计算机中主要是来表示和存储ASCII码，即处理字符，将一个字符存放到一个字符变量中，实际上并不是把该字符本身存放到内存单元中，而是将该字符的ASCII编码存放到内存单元中。")])]),t._v(" "),v("p",[t._v("**关键字定义：**byte")]),t._v(" "),v("p",[t._v("**字节长度：**1")]),t._v(" "),v("p",[v("strong",[t._v("取值范围：")]),t._v("[0~$2^8-1$]，byte本质就是uint8。")]),t._v(" "),v("p",[t._v("**零值：**0")]),t._v(" "),v("h4",{attrs:{id:"字符类型-rune"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符类型-rune"}},[t._v("#")]),t._v(" 字符类型（Rune）")]),t._v(" "),v("p",[t._v("关键字定义：rune")]),t._v(" "),v("blockquote",[v("p",[t._v("Go语言处理Unicode字符有个专用的数据类型rune，等价于int32。")])]),t._v(" "),v("p",[t._v("Unicode编码")]),t._v(" "),v("blockquote",[v("p",[t._v("随着计算机技术在世界范围内的广泛使用，国际标准化组织（ISO）统一制定了一种可以容纳世界上所有文字和符号的字符编码方案，即Unicode编码方案。由于涉及到不同计算机架构的大小端问题（Big Endian，Little Endian）于是存在不同的Unicode字符集转换格式（UCS Transformation Format,UTF)，例如：")]),t._v(" "),v("ul",[v("li",[t._v("UTF-8：使用1～4B不等长方案，西方字符通常只用一个字节，中文通常需要三个字节；")]),t._v(" "),v("li",[t._v("UTF-16：用2B无符号整数存储Unicode字符；")]),t._v(" "),v("li",[t._v("UTF-32：用4B无符号整数存储Unicode字符；")])])]),t._v(" "),v("h4",{attrs:{id:"uintptr类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uintptr类型"}},[t._v("#")]),t._v(" uintptr类型")]),t._v(" "),v("blockquote",[v("p",[t._v("Go语言中，uintptr是可以保存32位或64位的指针的无符号整数类型，和int类型一样，uintptr根据操作系统决定指针位数，32位操纵系统uintptr是32位的，64位操作系统uintptr是64位的。")])]),t._v(" "),v("h3",{attrs:{id:"复合类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复合类型"}},[t._v("#")]),t._v(" 复合类型")]),t._v(" "),v("blockquote",[v("p",[t._v("复合类型即比较复杂的数据类型，包括数组（array）、结构体（struct）。数组里存放的是一组相同类型的数据，结构体里存放的是不同类型的数据。")]),t._v(" "),v("p",[t._v("与值类型一致，复合类型变量在传递过程也是进行值拷贝。")])]),t._v(" "),v("h3",{attrs:{id:"引用类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[t._v("#")]),t._v(" 引用类型")]),t._v(" "),v("blockquote",[v("p",[t._v("引用类型即指针类型，包括指针（pointer）、切片（silence）、字典（map）、通道（channel）、接口（interface）和函数（function）。")])]),t._v(" "),v("p",[t._v("👀")]),t._v(" "),v("p",[t._v("值类型和引用类型的区别在于，在函数参数传递过程中")]),t._v(" "),v("ul",[v("li",[t._v("值类型的变量的值复制一份传递")]),t._v(" "),v("li",[t._v("引用类型的变量是把自己的内存地址传递，即拷贝地址")])])])}),[],!1,null,null,null);e.default=a.exports}}]);