(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{615:function(a,t,e){"use strict";e.r(t);var r=e(7),l=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"窗口函数概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#窗口函数概念"}},[a._v("#")]),a._v(" 窗口函数概念")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("窗口函数也称为OLAP函数，online analytical processing，对数据库数据进行实时分析处理。")])]),a._v(" "),e("li",[e("p",[a._v("常规的SELECT都是对整张表进行查询，而窗口函数让我们有选择的去某一部分数据进行汇总、计算和排序。")])]),a._v(" "),e("li",[e("p",[a._v("实例")]),a._v(" "),e("p",[a._v("SELECT product_name, product_type, sale_price,\nRANK() OVER (PARTITION BY product_type\nORDER BY sale_price) AS ranking")])]),a._v(" "),e("li",[e("p",[a._v("实例结果 "),e("img",{attrs:{src:"http://datawhale.club/uploads/default/optimized/1X/cdd92aff39de15d0ab7fff9cbdd7fe86bfd2d85e_2_690x273.png",alt:"ch0501"}})])]),a._v(" "),e("li",[e("p",[a._v("实例结果说明")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("* PARTITION BY：按照商品种类进行分组，一个商品种类就是一个小的窗口\n* ORDER BY：在每一个种类中进行排序\n")])])]),e("h2",{attrs:{id:"窗口函数种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#窗口函数种类"}},[a._v("#")]),a._v(" 窗口函数种类")]),a._v(" "),e("h3",{attrs:{id:"专用窗口函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#专用窗口函数"}},[a._v("#")]),a._v(" 专用窗口函数")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("RANK函数 计算排序，存在相同位次的记录时，则会跳过之前的位次")])]),a._v(" "),e("li",[e("p",[a._v("DENSE_RANK函数 计算排序，存在相同位次的记录时，不会跳过之前的位次")])]),a._v(" "),e("li",[e("p",[a._v("ROW_NUMBER函数 计算排序，赋予唯一的位次")])]),a._v(" "),e("li",[e("p",[a._v("实例 "),e("img",{attrs:{src:"http://datawhale.club/uploads/default/original/1X/807a4a60172e617d24e39a62b59de7a7693f6950.png",alt:"ch0503"}})])])]),a._v(" "),e("h3",{attrs:{id:"聚合函数在窗口函数上的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数在窗口函数上的应用"}},[a._v("#")]),a._v(" 聚合函数在窗口函数上的应用")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("实例")]),a._v(" "),e("p",[a._v("SELECT product_id,product_name, sale_price,")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SUM(sale_price) OVER (ORDER BY product_id) AS current_sum,\nAVG(sale_price) OVER (ORDER BY product_id) AS current_avg,\nFROM product;\n")])])]),e("p",[a._v("​")]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("实例结果 计算的是累积到当前行的多有的数据的聚合 "),e("img",{attrs:{src:"http://datawhale.club/uploads/default/optimized/1X/c857f00b1a380dadef9e44a95f17ea9c5eab1d77_2_690x269.png",alt:"wpH8v3sNIdtgdHGD"}}),a._v(" "),e("a",{attrs:{href:"http://datawhale.club/uploads/default/original/1X/d7ba5cb4b9522d1b2c0062dd8b4d3e17c6b2c96e.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://datawhale.club/uploads/default/optimized/1X/d7ba5cb4b9522d1b2c0062dd8b4d3e17c6b2c96e_2_690x272.png",alt:"dWSYUjbCNhTZrFhy"}}),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"窗口函数应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#窗口函数应用"}},[a._v("#")]),a._v(" 窗口函数应用")]),a._v(" "),e("p",[a._v("计算移动平均")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("实例")]),a._v(" "),e("p",[a._v("SELECT product_id, product_name, sale_price,")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("AVG(sale_price) OVER (ORDER BY product_id\n                        ROWS 2 PRECEDING) AS moving_avg,\n   AVG(sale_price) OVER (ORDER BY product_id\n                        ROWS BETWEEN 1 PRECEDING\n                        AND 1 FOLLOWING) AS moving_avg\nFROM product\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[a._v("结果 ROWS 2 PRECEDING：将框架（窗口）指定为“前n行+自身行” "),e("img",{attrs:{src:"http://datawhale.club/uploads/default/optimized/1X/e9b7c8a740b9de6a49dbb53c058e521e108af125_2_690x247.png",alt:"eGGd2Je3pieslAVk"}}),a._v(" ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING：将框架指定为“前n行+自身+后n行” "),e("img",{attrs:{src:"http://datawhale.club/uploads/default/optimized/1X/c49518669b1f29f2771fa61c32954c9d53e64beb_2_690x242.png",alt:"K1bOj3XhGTQe4tBx"}})])]),a._v(" "),e("li",[e("p",[a._v("注意事项")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("* 只能在SELECT中使用\n* 其中的ORDER BY子句不影响最终结果的排序\n")])])]),e("h2",{attrs:{id:"rollup运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup运算符"}},[a._v("#")]),a._v(" ROLLUP运算符")]),a._v(" "),e("p",[a._v("得到分类的合计")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("实例")]),a._v(" "),e("p",[a._v("SELECT product_type, regist_date,")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SUM(sale_price) AS sum_price\nFROM product\nGROUP BY product_type, regist_date WITH ROLLUP\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("结果")])]),a._v(" "),e("p",[e("img",{attrs:{src:"http://datawhale.club/uploads/default/original/1X/c897a5b33abff6f803a06d229bc1bd865e31ed7b.png",alt:"WNKuoQVZwiB56i19"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);