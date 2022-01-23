(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{600:function(e,t,n){"use strict";n.r(t);var a=n(7),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"方法定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法定义"}},[e._v("#")]),e._v(" 方法定义")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("组成形式")]),e._v(" "),n("ol",[n("li",[e._v("public：可被其他代码文件访问\n2. static：静态的，可被外部直接访问\n3. void：没有返回值，int表示返回整型，double表示返回双精度数\n4. 输入参数：String[] 表示字符串数组")])])]),e._v(" "),n("li",[n("p",[e._v("输入参数")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("名称相同，但是参数个数与参数类型不同的方法，通过方法重载机制区分")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[e._v("输入参数在变量类型后面添加“…”，表示参数是可变参数，调用时填写的参数数量可多可少")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("可变参数与数组参数在方法内部的处理代码基本没有区别，但在外部调用时书写的参数形式是不一样的")])]),e._v(" "),n("p",[e._v("// 可变参数\nsetAlarm(1, -10, 3);")])])])])]),e._v(" "),n("p",[e._v("// 数组参数\nint[] addedArray= {1, -10, 3};\nsetAlarm(addedArray);")])]),e._v(" "),n("li",[n("p",[e._v("输出参数")]),e._v(" "),n("p",[e._v("if (n < 0):")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('System.out.println("……")；\nreturn;                     // return 语句表示该方法的剩余代码都不执行\n')])])]),n("h2",{attrs:{id:"基本类型包装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本类型包装"}},[e._v("#")]),e._v(" 基本类型包装")]),e._v(" "),n("p",[e._v("引入包装类型的目的：方便拓展应用场合")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("数值类型包装")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("基本数值类型变量不能直接调用方法 --\x3e Java另外为基本类型定义了对应的包装类型")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[e._v("包装变量赋值")]),e._v(" "),n("p",[e._v("Integer oneInteger = 1;\nInteger secondInteger = Integer.valueOf(2);")])])])]),e._v(" "),n("li",[n("p",[e._v("包装变量赋值给基本变量")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" byte oneByte = oneInteger.byteValue();  // 包装变量转换成字节变量\n")])])])])])]),e._v(" "),n("li",[n("p",[e._v("包装变量运算")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("可以使用常规的四则运算")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[e._v("判断两个包装变量是否相等时需要通过"),n("code",[e._v("equals")]),e._v("方法来校验")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("常见逻辑方法")])]),e._v(" "),n("p",[e._v("int a = 7, b = 8;\nint sum = Integer.sum(a, b);\nint max = Integer.max(a, b);\nint min = Integer.min(a, b);\nint conpareResult = Integer.compare(a, b); // 相等返回0，前者小返回-1，后者小返回1")])])])])])]),e._v(" "),n("li",[n("p",[e._v("布尔类型包装")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("逻辑方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" boolean c = true, d = false;\n")])])])])]),e._v(" "),n("p",[e._v("boolean andResult = Boolean.logicalAnd(c, d);\nboolean orResult = Boolean.logicalOr(c, d);\nboolean xorResult = Boolean.logicalXor(c, d);")])]),e._v(" "),n("li",[n("p",[e._v("大数字类型")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("大整数BigInteger")])]),e._v(" "),n("li",[n("p",[e._v("能够表示任意大小的整数")])]),e._v(" "),n("li",[n("p",[e._v("只能使用"),n("code",[e._v("valueOf")]),e._v("进行初始化")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("           BigInteger nine = BigInteger.valueOf(9);\n")])])])]),e._v(" "),n("li",[n("p",[e._v("通过专门的方法开展运算")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("           BigInteger sum = nine.add(four);\n")])])]),n("p",[e._v("BigInteger sub = nine.subtract(four);\nBigInteger mul = nine.multiply(four);\nBigInteger div = nine.divide(four);\nBigInteger remainer = nine.remainder(four);  // 取余")])]),e._v(" "),n("li",[n("p",[e._v("大小数BigDecimal")])]),e._v(" "),n("li",[n("p",[e._v("和大整数类似")])]),e._v(" "),n("li",[n("p",[e._v("不能直接表示无限小数，必须是一个有限的范围，所以需要制定保留位数和保留方式参数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("           BigDecimal one = BigDecimal.valueOf(100);\n")])])]),n("p",[e._v("BigDecimal three = BigDecimal.valueOf(3);\n// 方法一\nBigDecimal div = one.divide(three, 64, 4);\nSystem.out.println(div);")]),e._v(" "),n("p",[e._v("//方法二\nMathContext mc = new MathContext(64, RoundingMode.HALF_UP); // 一处定义，多处使用\nBigDecimal divByMC = one.divide(three, mc);\nSystem.out.println(divByMC);")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);