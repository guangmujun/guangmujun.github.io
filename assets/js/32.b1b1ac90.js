(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{608:function(t,e,s){"use strict";s.r(e);var a=s(7),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu服务器上设置jupyter开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu服务器上设置jupyter开发环境"}},[t._v("#")]),t._v(" Ubuntu服务器上设置Jupyter开发环境")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("服务器中安装conda环境")])]),t._v(" "),s("li",[s("p",[t._v("conda中新建虚拟环境")]),t._v(" "),s("p",[t._v("conda create --name ensemble python=3.8")])]),t._v(" "),s("li",[s("p",[t._v("激活ensemble虚拟环境")]),t._v(" "),s("p",[t._v("conda activate ensemble")])]),t._v(" "),s("li",[s("p",[t._v("安装第三方库")]),t._v(" "),s("p",[t._v("conda install ipython")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("conda install jupyter\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("生成密钥,输入python进入到python shell，输入以下两行代码，然后输入两次自己需要设置的密码，记录生成的密钥")]),t._v(" "),s("p",[t._v("from notebook.auth import passwd")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("passwd()\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[t._v("退出python的shell，退出conda虚拟环境，配置jupyter")]),t._v(" "),s("p",[t._v("vim ~/.jupyter/jupyter_notebook_config.py")])])]),t._v(" "),s("p",[t._v("找到对应位置进行修改")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("    c.NotebookApp.ip = '*' \nc.NotebookApp.password = u'sha:ce...刚才复制的那个密文'\nc.NotebookApp.port = 6666 \nc.NotebookApp.open_browser = False \n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[s("p",[t._v("打开自己设置的端口，我这里自定义的是6666，默认是8888")]),t._v(" "),s("p",[t._v("sudo apt-get install iptables")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("iptables -I INPUT -p tcp --dport 6666 -j ACCEPT\niptables-save\n")])])]),s("p",[t._v("端口持久化")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("    sudo apt-get install iptables-persistent\nsudo netfilter-persistent save\nsudo netfilter-persistent reload\n")])])]),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[t._v("激活虚拟环境，设置在后台运行jupyter notebook")]),t._v(" "),s("p",[t._v("conda activate ensemble")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("nohup jupyter notebook &\n")])])]),s("ol",{attrs:{start:"9"}},[s("li",[t._v("浏览器中输入"),s("code",[t._v("服务器地址:端口号")]),t._v("，即可访问jupyter notebook "),s("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210315170019.png",alt:""}})])]),t._v(" "),s("blockquote",[s("p",[t._v("参考:")]),t._v(" "),s("ul",[s("li",[t._v("https://www.cnblogs.com/kxm87/p/9561054.html")]),t._v(" "),s("li",[t._v("https://www.cnblogs.com/qiangzi0221/p/8933722.html")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);