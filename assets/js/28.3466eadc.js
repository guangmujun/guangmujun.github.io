(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{605:function(n,r,e){"use strict";e.r(r);var a=e(7),t=Object(a.a)({},(function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符"}},[n._v("#")]),n._v(" 字符")]),n._v(" "),e("ol",[e("li",[n._v("字符类型\n"),e("ol",[e("li",[n._v("char\n2. char[]")])])]),n._v(" "),e("li",[n._v("字符型与整型的相互转化\n"),e("ol",[e("li",[n._v("ASCII码")])])]),n._v(" "),e("li",[n._v("字符包装类型\n"),e("ol",[e("li",[e("code",[n._v("Character character = 'A'")]),n._v("\n2. 字符处理方法")]),n._v(" "),e("li",[n._v("isDigit")]),n._v(" "),e("li",[n._v("isLetter")]),n._v(" "),e("li",[n._v("isLowerCase")]),n._v(" "),e("li",[n._v("isSpaceChar")]),n._v(" "),e("li",[n._v("isWhitespace")]),n._v(" "),e("li",[n._v("toUpperCase")])])])]),n._v(" "),e("h2",{attrs:{id:"字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[n._v("#")]),n._v(" 字符串")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("赋值与转化")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("赋值：String")]),n._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[n._v("转化")]),n._v(" "),e("p",[n._v('String number = "1234";\nInteger packInt = Integer.parseInt(number);')])])])]),n._v(" "),e("li",[e("p",[n._v("超大数字赋值的问题")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(' String bigNumber = "79879486239846389573905783084252345252";\n')])])])])]),n._v(" "),e("p",[n._v("BigInteger bigInt = new BigInteger(bigNumber);")])]),n._v(" "),e("li",[e("p",[n._v("字符串格式化")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("字符串子串")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(' System.out.prinln(String.format("字符串：%s", name))\n')])])])]),n._v(" "),e("li",[e("p",[n._v("浮点数")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(' String.format("%.8f", 3.1415926451)  // 保留八位，默认是六位\n')])])])])]),n._v(" "),e("p",[n._v('String.format("%8d", 255)            // 八位，右对齐\nString.format("%-8d", 255)           // 八位，左对齐\nString.format("%08d", 255)           // 八位，左补0')])]),n._v(" "),e("li",[e("p",[n._v("判断字符串是否具备某种特征")]),n._v(" "),e("ol",[e("li",[n._v("isEmpty()\n2. equals()\n3. startsWith()\n4. endsWith()\n5. contains()")])])]),n._v(" "),e("li",[e("p",[n._v("在字符串内部根据条件定位")]),n._v(" "),e("ol",[e("li",[n._v("charAt()\n2. indexOf()\n3. lastIndexOf()")])])]),n._v(" "),e("li",[e("p",[n._v("根据某种规则修改字符串内容")]),n._v(" "),e("ol",[e("li",[n._v("toUpperCase()\n2. trim()：起吊首尾的空格\n3. concat()：在末尾添加字符串\n4. substring()：字符串截断\n5. replace()：替换")])])])]),n._v(" "),e("h2",{attrs:{id:"正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[n._v("#")]),n._v(" 正则表达式")]),n._v(" "),e("ol",[e("li",[n._v("利用正则串分隔字符\n"),e("ol",[e("li",[n._v("split的输入参数应该是一个字符串，像"),e("code",[n._v(".")]),n._v("和"),e("code",[n._v("|")]),n._v("这两个字符，均需要转义，还有很多字符需要转义\n2. 正则保留字符："),e("code",[n._v("() [] {} | - . + * \\")]),n._v("\n3. “或”运算的优先级不如圆括号，所以遇到复杂一点的“或”运算，应当把圆括号放在整个逻辑运算式子的外面\n4. "),e("code",[n._v("\\\\d")]),n._v("表示一位数字，"),e("code",[n._v("\\\\d{3}")]),n._v("表示三位数字")])])]),n._v(" "),e("li",[n._v("正则表达式\n"),e("ol",[e("li",[n._v("处理字符串格式的一种逻辑式子，利用若干保留字符定义匹配规则，通过一个式子来覆盖满足上述规则的所有字符串\n2. 举例，"),e("code",[n._v('"\\\\d{3}([0-9xX])"')]),n._v("可用于身份证后四位的验证")])])])]),n._v(" "),e("h2",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[n._v("#")]),n._v(" 实例")]),n._v(" "),e("p",[n._v("​"),e("br"),n._v("\n// 字符串与正则表达式\n// 提出字符串中的姓名、电话和详细的地址")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('package com.jiangsu.nanjing;\n\npublic class Test5 {\n    public static void main(String[] args) {\n//        oneAddress();\n        moreAddress();\n    }\n\n    private static void moreAddress(){\n        String[] infoArray = new String[]{\n                "张三 159612458696 北京市海淀区双清路30号",\n                "05910000000,福建省福州市闽侯县上街镇工贸路3号,李四",\n                "11900000000 王五 四川省凉山彝族自治州西昌市大水井12号",\n                "西藏自治区阿里地区格尔县狮泉河镇26号,赵柳 18805166900"\n        };\n\n        for (String info : infoArray){\n            // 分隔出姓名，电话和全部的地址\n            String[] splits = info.split(" |,");\n            String name = "", phone="", address="";\n            for (String str : splits){\n                if (isPhone(str)){\n                    phone = str;\n                }else if (name.equals("")){\n                    name = str;\n                }else if (str.length() > name.length()){\n                    address = str;\n                }else {\n                    address = name;\n                    name = str;\n                }\n            }\n            // 详细分隔地址\n            String[] areaArray = new String[] {"", address};\n            areaArray = getAreaName(areaArray[1], new String[]{"省", "自治区"});\n            String province = areaArray[0];\n            areaArray = getAreaName(areaArray[1], new String[]{"自治州", "地区", "盟", "市"});  //areaArray[1]表示除去省份后剩下的地址\n            String city = areaArray[0];\n            areaArray = getAreaName(areaArray[1], new String[]{"县", "市", "区", "旗"});  //areaArray[1]表示除去省份和城市后剩下的地址\n            String district = areaArray[0];\n            String detail = areaArray[1];  // 剩下的详细地址\n            if (province.length() <= 0){   // 直辖市的情况\n                province = city;\n            }\n\n            System.out.println(String.format("姓名：%s, 电话：%s, 地址：%s", name, phone, address));\n            System.out.println(String.format("省份：%s，地市：%s， 区县：%s，详细地址：%s", province, city, district, detail));\n        }\n    }\n\n    private static void oneAddress(){\n        String info = "张三 159612458696 北京市海淀区双清路30号";\n        String[] splits = info.split(" |, ");\n        String name = "", phone="", address="";\n        for (String str : splits){\n            if (isPhone(str)){\n                phone = str;\n            }else if (name.equals("")){\n                name = str;\n            }else if (str.length() > name.length()){\n                address = str;\n            }else {\n                address = name;\n                name = str;\n            }\n        }\n        System.out.println(String.format("姓名：%s, 电话：%s, 地址：%s", name, phone, address));\n    }\n\n    private static boolean isPhone(String phone){\n        String regex = "\\\\d+";\n        return phone.matches(regex);\n    }\n\n    private static String[] getAreaName(String address, String[] suffixArray){\n        String[] areaArray = new String[] {"", address};\n        int pos = 0;\n        for (String suffix : suffixArray){\n            pos = address.indexOf(suffix);\n            if (pos > 0){\n                areaArray[0] = address.substring(0, pos+suffix.length());  //提取完整的省份，比如福建省\n                areaArray[1] = address.substring(pos+suffix.length());     //保留剩下的地址\n                break;\n            }\n        }\n        return areaArray;\n    }\n\n}\n')])])]),e("p",[n._v("​")])])}),[],!1,null,null,null);r.default=t.exports}}]);