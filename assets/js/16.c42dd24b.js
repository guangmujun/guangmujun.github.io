(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{592:function(e,t,l){"use strict";l.r(t);var n=l(7),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"异常"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[e._v("#")]),e._v(" 异常")]),e._v(" "),l("h3",{attrs:{id:"常见的程序异常"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见的程序异常"}},[e._v("#")]),e._v(" 常见的程序异常")]),e._v(" "),l("ol",[l("li",[e._v("数学运算异常\n"),l("ol",[l("li",[e._v("除数为0\n2. BigDecimal显示无限小数")])])]),e._v(" "),l("li",[e._v("数组越界异常\n"),l("ol",[l("li",[e._v("超过索引")])])]),e._v(" "),l("li",[e._v("字符串与日期格式异常\n"),l("ol",[l("li",[e._v("数据类型不对应")])])]),e._v(" "),l("li",[e._v("空指针异常\n"),l("ol",[l("li",[e._v("绝大多数类型都必须先给对象创建实例，然后才能访问该对象的各项成员属性和成员方法")])])]),e._v(" "),l("li",[e._v("类型转换异常\n"),l("ol",[l("li",[e._v("原始数据与目标数据不匹配")])])])]),e._v(" "),l("h3",{attrs:{id:"内存溢出错误"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#内存溢出错误"}},[e._v("#")]),e._v(" 内存溢出错误")]),e._v(" "),l("ol",[l("li",[e._v("程序运行时会申请两块内存空间,一块叫堆内存,一块叫栈内存")]),e._v(" "),l("li",[e._v("堆内存\n"),l("ol",[l("li",[e._v("承包了程序运行所需的大部分存储需求")])])]),e._v(" "),l("li",[e._v("栈内存\n"),l("ol",[l("li",[e._v("负责保管每次方法调用的现场数据")])])]),e._v(" "),l("li",[e._v("所以内存溢出问题,要么是堆内存溢出,要么是栈内存溢出。")])]),e._v(" "),l("h3",{attrs:{id:"异常的处理-扔出与捕捉"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#异常的处理-扔出与捕捉"}},[e._v("#")]),e._v(" 异常的处理：扔出与捕捉")]),e._v(" "),l("ol",[l("li",[e._v("扔出，throws")]),e._v(" "),l("li",[e._v("捕捉，try catch finally\n"),l("ol",[l("li",[e._v("可以自定义异常类\n2. catch可以写多个\n3. catch（Exception e）表示捕捉任何属于Exception类型的异常")])])])]),e._v(" "),l("h3",{attrs:{id:"预防异常的产生"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#预防异常的产生"}},[e._v("#")]),e._v(" 预防异常的产生")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("加校验")])]),e._v(" "),l("li",[l("p",[e._v("使用Optional规避空指针异常")]),e._v(" "),l("ol",[l("li",[e._v("先调用"),l("code",[e._v("ofNullable")]),e._v("方法设置对象实例\n2. 再调用"),l("code",[e._v("map")]),e._v("方法转换数据类型\n3. 接着调用"),l("code",[e._v("orElse")]),e._v("方法设置空指针时的取值")])]),e._v(" "),l("p",[e._v("public boolean isRedApple(){\nboolean isRed = Optional.ofNullable(this.color)\n.map(color -> color.toLowerCase())\n.orElse('null')\n.equals('red');\nreturn isRed;")])])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("}\n")])])]),l("h2",{attrs:{id:"反射"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[e._v("#")]),e._v(" 反射")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("利用反射可以操作私有属性以及私有方法")])]),e._v(" "),l("li",[l("p",[e._v("获得实例的Class对象的方法有")]),e._v(" "),l("ol",[l("li",[l("code",[e._v("类名.class")]),e._v("\n2. "),l("code",[e._v("实例名.getClass()")])])])]),e._v(" "),l("li",[l("p",[e._v("上述操作的反向操作：提供一个保存完整类名的字符串，即可由该字符串生成目标类的Class对象")]),e._v(" "),l("ol",[l("li",[l("code",[e._v("Class.forName(“完整类名”)")])])])]),e._v(" "),l("li",[l("p",[e._v("反射：通过字符串反向获得Class对象的操作")])]),e._v(" "),l("li",[l("p",[e._v("利用反射技术操作私有属性")]),e._v(" "),l("p",[e._v('private static void setReflectSex(Chicken chicken, int sex){\ntry{\nClass cls = Chicken.class;\nField sexField = cls.getDeclaredField("sex");//通过字段名称获取该类的字段对象\nif (sexField != null){\nsexField.setAccessible(true);//设置该字段为允许访问\nsexField.setInt(chicken, sex);//将某实例的该字段修改为指定数值\n}\n}catch(Exception e){\ne.printStackTrace();\n}')])])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("}\n")])])]),l("ol",{attrs:{start:"6"}},[l("li",[l("p",[e._v("利用反射技术操作私有方法")]),e._v(" "),l("ol",[l("li",[e._v("由于方法的输入输出可能存在不同，反射技术需要支持4中情况")]),e._v(" "),l("li",[e._v("有输入参数")]),e._v(" "),l("li",[e._v("无输入参数")]),e._v(" "),l("li",[e._v("有输出参数")]),e._v(" "),l("li",[e._v("无输出参数")]),e._v(" "),l("li",[e._v("无输入参数、有输出参数的实例")])]),e._v(" "),l("p",[e._v('private static String getReflectName(Chicken chicken){\nString name = "";\ntry{\nClass cls = Chicken.class;\nMethod method = cls.getDeclaredMethod("getName");//通过方法名称和参数列表获取该方法的method对象\nmethod.setAccessible(true);//将方法设置为允许访问\nname = (String) method.invoke(chicken);//调用某实例的方法并获得输出参数\n}catch(Exception e){\ne.printStackTrace();\n}\nreturn name;')])])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v('}\n\n\n3. 有输入参数、无输出参数的实例\n\n    private static void setReflectName(Chicken chicken, String name){\n   try{\n      Class cls = Chicken.calss;\n      Method method = cls.getDeclaredMethod("setName", String.class);//通过方法名称和参数列表获取方法的Method对象\n       method.setAccessible(true);\n       method.invoke(chicken, name);//携带输入参数调用某实例的方法\n   }catch(Exception e){\n       e.printStackTrace();\n   }\n}\n')])])]),l("h2",{attrs:{id:"注解"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[e._v("#")]),e._v(" 注解")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("系统自带的5种注解")]),e._v(" "),l("ol",[l("li",[e._v("@Override 重写\n2. @Deprecated 不赞成、已废弃\n3. @SuppressWarnings 屏蔽警告\n4. @FunctionalInterface 函数式接口\n5. @SafeVarargs 兼容可变参数中的泛型参数")])])]),e._v(" "),l("li",[l("p",[e._v("4种元注解")]),e._v(" "),l("ol",[l("li",[e._v("@Documented 表示他修饰的注解将被收录到Java的开发文档中\n2. @Target 表示他修饰的注解将作用于哪一类的代码实体\n3. @Retention 表示他修饰的注解将被编译器保留至哪个阶段\n4. @Inherited 表示他修饰的注解将允许被子类继承")])])]),e._v(" "),l("li",[l("p",[e._v("注解带有解释说明的含义，但注解是给编译器看的，编译器扫描到注解时，回去检查是否有问题")])]),e._v(" "),l("li",[l("p",[e._v("元注解的作用是给新定义的注解添加修饰，表明新注解能干什么……")])]),e._v(" "),l("li",[l("p",[e._v("利用注解技术检查空指针")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("自定义新的非空注解")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(" @Documented\n")])])])])]),e._v(" "),l("p",[e._v("@Target({ElementType.FIELD})\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface NotNull{}")]),e._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[l("p",[e._v("给非空字段添加非空注解")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(" public class Apple{\n")])])])])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(" @NotNull\n private String name;\n @NotNull\n private String color;\n")])])]),l("p",[e._v("}")]),e._v(" "),l("ol",{attrs:{start:"3"}},[l("li",[l("p",[e._v("利用发射机制校验被费控注解修饰了的所有字段")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(" public class NullCheck{\n")])])])])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(' public static boolean isValid(Object obj){\n     if (obj == null){\n         System.out.println("校验对象为空");\n         return false;\n     }\n     Class cls = obj.getClass();\n     List<String> invalidList = new ArrayList<String>();//申明一个字符串清单\n     try{\n         Field[] fileds = cls.getDeclaredFields();//获得对象的所有属性\n         for (Field field : fields){\n             if (filed.isAnnotationPresent(NotNull.class)){//如果该属性申明了NotNUll注解，就校验空字段\n                 if (filed != null){\n                     field.setAccessible(true);\n                     Object value = field.get(obj);//获取某实例的字段值\n                     if (value == null){\n                         invaliedList.add(field.getName());//将该字段的名称添加到无效清单中\n                     }\n                 }\n             }\n         }\n     }catch(Exception e){\n         e.printStackTrace();\n     }\n     if(invalidList.size() > 0){\n         String desc = String.format("%s类非空校验不通过的字段有：%s", cls.getName(), invalidList.toString());\n         System.out.prinln(desc);\n         return false;\n     }else{\n         return true;\n     }\n }\n')])])]),l("p",[e._v("}")]),e._v(" "),l("ol",{attrs:{start:"4"}},[l("li",[l("p",[e._v("在业务需要的地方调用校验方法")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(" private static void getRedAppleByForWithNullCheck(List<Apple> list){\n")])])])])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v(" List<Apple> redAppleList = new ArrayList<Appple>();\n if (list != null){\n     for (Apple item : list){\n         if (NullCheck.isValid(item)){\n             if (item.isRedApple()){\n                 redAppleList.add(item);\n             }\n         }\n     }\n }\n System.out.println(redAppleList.toString());\n")])])]),l("p",[e._v("}")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);