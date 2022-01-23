(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{649:function(t,r,s){"use strict";s.r(r);var a=s(7),p=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frp内网穿透的那些事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frp内网穿透的那些事"}},[t._v("#")]),t._v(" FRP内网穿透的那些事")]),t._v(" "),s("h2",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),s("p",[t._v("本地跑起了一些服务，希望处在外网的用户能够访问到本地的服务，\n比如，在个人的电脑上开发了一个Web应用，此应用在本地可正常使用，我们希望外网的用户，通过访问某个链接，也能够正常使用我们运行在本地的Web应用，\n所以，我们就需要做内网穿透这件事~")]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ul",[s("li",[t._v("一台具有公网IP的服务器")]),t._v(" "),s("li",[t._v("本地能够跑起来的服务")])]),t._v(" "),s("h2",{attrs:{id:"操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com.cnpmjs.org/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),s("OutboundLink")],1),t._v("下载对应系统版本的frp，我的客户端和服务端都是linux系统，所以都下载的"),s("code",[t._v("frp_0.36.0_linux_amd64.tar.gz")])])]),t._v(" "),s("li",[s("p",[t._v("在客户端和服务端分别将下载好的压缩包，解压到自定义的位置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("frps开头的文件，主要用于服务端 "),s("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318154321.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("frpc开头的文件，主要用于客户端 "),s("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318154357.png",alt:""}})])])])])]),t._v(" "),s("li",[s("p",[t._v("服务端的配置，修改"),s("code",[t._v("frps.ini")]),t._v("，详细的配置可参考"),s("a",{attrs:{href:"https://gofrp.org/docs/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方中文文档"),s("OutboundLink")],1),t._v("，此处演示对本地tcp协议的6666端口的映射，文件内容如下，默认即可")]),t._v(" "),s("p",[t._v("[common]")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("bind_port = 7000\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("注意：服务器上的7000端口一定要开启，后续才能成功映射，"),s("a",{attrs:{href:"https://guangmujun.cn/archives/447",target:"_blank",rel:"noopener noreferrer"}},[t._v("端口开启参考"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("服务端启动")]),t._v(" "),s("p",[t._v("./frps -c ./frps.ini")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318155016.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[t._v("客户端配置，修改"),s("code",[t._v("frpc.ini")]),t._v("，输入公网IP地址，添加[tcp6666]那一块，名字可自定义，type为tcp，local_ip为127.0.0.1，local_port为6666，remote_port可以自定义，也可以使用6666")]),t._v(" "),s("p",[t._v("[common]")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("server_addr = 公网IP地址\nserver_port = 7000\n\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n\n[tcp6666]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 6666\nremote_port = 6666\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[s("p",[t._v("客户端启动")]),t._v(" "),s("p",[t._v("./frpc -c ./frpc.ini")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318155623.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[t._v("使用"),s("code",[t._v("公网IP：remote_port")]),t._v("即可通过外网访问到本地在6666端口运行的服务")])]),t._v(" "),s("li",[s("p",[t._v("后台运行")]),t._v(" "),s("p",[t._v("nohup ./frps -c ./frps.ini &")]),t._v(" "),s("p",[t._v("nohup ./frpc -c ./frpc.ini &")])])]),t._v(" "),s("blockquote",[s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("https://guangmujun.cn/archives/447")])]),t._v(" "),s("li",[s("p",[t._v("https://www.mintimate.cn/2020/05/06/frp/")])]),t._v(" "),s("li",[s("p",[t._v("https://github.com.cnpmjs.org/fatedier/frp")])]),t._v(" "),s("li",[s("p",[t._v("https://gofrp.org/docs/setup/")])])])])])}),[],!1,null,null,null);r.default=p.exports}}]);