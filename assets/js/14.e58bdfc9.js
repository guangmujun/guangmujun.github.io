(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{589:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-模板"}},[t._v("#")]),t._v(" 3 模板")]),t._v(" "),a("p",[t._v("为什么会有模板：")]),t._v(" "),a("ul",[a("li",[t._v("分离业务逻辑和表现逻辑")]),t._v(" "),a("li",[t._v("业务逻辑主要体现在视图函数处理事件上")]),t._v(" "),a("li",[t._v("表现逻辑主要体现在将处理后的结果展示出来")])]),t._v(" "),a("p",[a("strong",[t._v("模板")]),t._v(" ：一个包含响应文本的文件，用占位变量表示动态部分。 "),a("strong",[t._v("渲染")]),t._v(" ：使用真实值替换变量，再返回最终得到的响应字符串的过程。\n为了渲染模板，Flask使用了一个名为 "),a("strong",[t._v("Jinja2")]),t._v(" 的强大模板引擎。")]),t._v(" "),a("h2",{attrs:{id:"_3-1-jinjia2模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-jinjia2模板引擎"}},[t._v("#")]),t._v(" 3.1 Jinjia2模板引擎")]),t._v(" "),a("p",[a("strong",[t._v("渲染模板")]),t._v(" 模板默认存放在Flask程序文件夹的templates目录中， templates/index.html：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, Flask!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("修改视图函数以渲染模板： 使用render_template函数把Jinjia2模板引擎集成到程序中")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render_template\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("变量")]),t._v(" 可使用类似"+t._s(t.name)+"结构表示变量 在渲染模板时，模板引擎从使用的数据中获取这个变量值\nJinjia2能识别出所有类型的变量：列表、字典、对象等 用 "),a("strong",[t._v("过滤器")]),t._v(" 修改变量，如以首字母大写形式显示变量name的值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("```html\nHello, "+t._s(t._f("capitalize")(t.name))+"\n```\n")])])]),a("p",[t._v("部分常用过滤器：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("title")]),t._v("：将每个单词的首字母转化为大写")]),t._v(" "),a("li",[a("code",[t._v("lower")]),t._v("：全部字母转化为小写（upper大写)")]),t._v(" "),a("li",[a("code",[t._v("trim")]),t._v("：去掉值的首尾空格")]),t._v(" "),a("li",[a("code",[t._v("safe")]),t._v("：渲染值时不转义")])]),t._v(" "),a("p",[a("strong",[t._v("控制结构")])]),t._v(" "),a("ol",[a("li",[t._v("条件控制")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    {% if user %}\n    {% else %}\n    {% endif %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("循环控制")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% for comment in comments %}\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ comment }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% endfor %}\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("宏（函数）")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("   {% macro render_comment(comment) %}\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ comment }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endmacro %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("​")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<ul>\n    {% for comment in comments %}\n        "+t._s(t.render_comment(t.comment))+"\n    {% endfor %}\n</ul>\n")])])]),a("p",[t._v("导入宏")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("   {% import 'macros.html' as macros %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("​")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<ul>\n    {% for comment in comments %}\n        "+t._s(t.macros.render_comment(t.comment))+"\n    {% endfor %}\n</ul>\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("模板继承 重复使用代码的强大方式，先定义基模板，然后其他相关模板继承此基模板")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("extends")]),t._v("：声明模板继承自哪里")])]),t._v(" "),a("li",[a("p",[t._v("在模板中可以重新定义块的内容")])]),t._v(" "),a("li",[a("p",[t._v("当重新定义的块，其内容在基模板中不为空时，需要使用"),a("code",[t._v("super()")]),t._v("来获取原来的内容")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('{% extends "base.html" %}\n\n{% block title %}Flasky{% endblock %}\n\n{% block page_content %}\n    '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, {{ name|title }}!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% endblock %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-2-flask-bootstrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flask-bootstrap"}},[t._v("#")]),t._v(" 3.2 Flask-Bootstrap")]),t._v(" "),a("p",[t._v("Bootstrap是Twitter开发的一个开源框架（https://getbootstrap.com） 其提供的用户界面组件可用于创建简洁美观的网页")]),t._v(" "),a("ol",[a("li",[t._v("安装Flask扩展")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("  conda "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flask-bootstrap\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("初始化")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("```shell\nfrom flask_bootstrap import Bootstrap\n    bootstrap = Bootstrap(app)\n```\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("定义基模板 Flask-Bootstrap中的基模板提供了一个网页框架，引入了Bootstrap中的左右CSS和JavaScript文件")])]),t._v(" "),a("p",[t._v("​"),a("br"),t._v('\n{% extends "bootstrap/base.html" %}\n{% block title %}Flasky{% endblock %}')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{% block navbar %}\n<div class="navbar navbar-inverse" role="navigation">\n    <div class="container">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="/">Flasky</a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav">\n                <li><a href="/">Home</a> </li>\n            </ul>\n        </div>\n    </div>\n</div>\n{% endblock %}\n\n{% block content %}\n<div class="container">\n    {% block page_content %}{% endblock %}\n</div>\n{% endblock %}\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("定义其他模板 index.html")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{% extends "base.html" %}\n{% block title %}Flasky{% endblock %}\n\n{% block page_content %}\n<div class="page_content">\n   <h1>Hello, Flask!</h1>\n</div>\n{% endblock %}\n')])])]),a("p",[t._v("usr.html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('    {% extends "base.html" %}\n\n{% block title %}Flasky{% endblock %}\n\n{% block page_content %}\n<div class="page_content">\n   <h1>Hello, '+t._s(t._f("title")(t.name))+"!</h1>\n</div>\n{% endblock %}\n")])])]),a("p",[t._v("404.html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('    {% extends "base.html" %}\n\n{% block title %}Flasky - Page Not Found{% endblock %}\n\n{% block page_content %}\n<div class="page_content">\n   <h1>Not Found</h1>\n</div>\n{% endblock %}\n')])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("修改视图函数")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    \n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/<name>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'usr.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    \n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorhandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("page_not_found")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"_3-4-链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-链接"}},[t._v("#")]),t._v(" 3.4 链接")]),t._v(" "),a("p",[a("code",[t._v("url_for()")]),t._v("函数")]),t._v(" "),a("ul",[a("li",[t._v("输入：视图函数名称")]),t._v(" "),a("li",[t._v("输出：视图函数对应的URL")]),t._v(" "),a("li",[t._v("可选参数："),a("code",[t._v("_extennal=True")]),t._v("表示返回绝对路径")]),t._v(" "),a("li",[t._v("动态参数：通过关键字传入"),a("code",[t._v("url_for('user', name='join')")])])]),t._v(" "),a("h2",{attrs:{id:"_3-5-静态文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-静态文件"}},[t._v("#")]),t._v(" 3.5 静态文件")]),t._v(" "),a("p",[t._v("静态文件存放在程序根目录下的"),a("code",[t._v("static")]),t._v("文件夹中 URL映射中有一个static路由，"),a("code",[t._v("/static/<filename>")]),t._v("，是对静态文件的引用\n使用"),a("code",[t._v("url_for('static', filename='favicon.ico'")]),t._v("即可获得图标的URL "),a("strong",[t._v("定义收藏夹以及标签页的图标")]),t._v(" "),a("code",[t._v("favicon.ico")]),t._v("存放在"),a("code",[t._v("static")]),t._v("目录下 templates/base.html")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    {% block head %}\n        {{ super() }}\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("shorcut icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ url_for("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("static"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", filename="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("favicon.ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(") }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/x-icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ url_for("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("static"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", filename="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("favicon.ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(") }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/x-icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{% block title %}{% endblock %}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endblock %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"_3-6-flask-moment本地化日期和时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-flask-moment本地化日期和时间"}},[t._v("#")]),t._v(" 3.6 Flask-Moment本地化日期和时间")]),t._v(" "),a("p",[t._v("全世界统一的时间单位，UTC，协调世界时 不习惯UTC格式，所以需要格式的本地化操作 Flask-\nMoment能将moment.js集成到Jinjia2模板中，在浏览器中渲染日期和时间")]),t._v(" "),a("ol",[a("li",[t._v("安装")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("   conda "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flask-moment\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("初始化")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_moment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Moment\n    moment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Moment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("​")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("修改基模板")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("* 向已有内容中添加新内容，需使用`super()`\n* `moment.lang('zh-cn')`指定语言的格式为中文，默认是英文\n")])])]),a("p",[t._v("​")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  {% block content %}\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% block page_content %}{% endblock %}\n        {% block scripts %}\n        {{ super() }}\n        {{ moment.include_moment() }}\n        {{ moment.lang('zh-cn') }}\n        {% endblock %}\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endblock %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("修改其他模板")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("* `format('LLL')`渲染时间和日期，`LLLL`还会渲染出星期\n* `fromNow()`渲染出已经过去的时间描述，相关参考（https://moment.js/com/docs）\n")])])]),a("p",[t._v("​")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{% extends "base.html" %}\n{% block title %}Flasky{% endblock %}\n\n{% block page_content %}\n<div class="page_content">\n    <h1>Hello, Flask!</h1>\n    <p>The local date and time is '+t._s(t.moment(t.current_time).format("LLLL"))+"</p>\n    <p>That was "+t._s(t.moment(t.current_time).fromNow(t.refresh=t.True))+"</p>\n</div>\n{% endblock %}\n")])])]),a("h2",{attrs:{id:"效果展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果展示"}},[t._v("#")]),t._v(" 效果展示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210311173143.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210311173212.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[t._v("#")]),t._v(" 问题解决")]),t._v(" "),a("p",[t._v("问题1：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    jinja2.exceptions.TemplateSyntaxError: expected token "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end of statement block'")]),t._v(", got "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navbar'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("解决：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('    {% extends "bootstrap/base.html" %}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("少打了双引号 问题2：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("   jinja2.exceptions.TemplateNotFound: bootstrap/base.html\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("解决：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_bootstrap "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Bootstrap\n    bootstrap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Bootstrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("没有初始化bootstrap")])])}),[],!1,null,null,null);s.default=e.exports}}]);