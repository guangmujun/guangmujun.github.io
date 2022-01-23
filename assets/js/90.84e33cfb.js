(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{666:function(t,a,n){"use strict";n.r(a);var e=n(7),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),n("p",[t._v("简述：给定观察数据来 "),n("strong",[t._v("评估模型参数")]),t._v(" 扩展：利用已知的样本结果信息，反推最具可能导致这些样本结果出现的模型的参数值\n理解：假如一个模型满足某个分布（分布的参数值未知），采样出的样本同样应满足这个分布，我们根据已知的样本结果信息，利用MLE便可以估计出较为合适的模型参数")]),t._v(" "),n("h2",{attrs:{id:"似然函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#似然函数"}},[t._v("#")]),t._v(" 似然函数")]),t._v(" "),n("p",[t._v("对于$p(x|\\theta)$，其中$x$表示某一个具体的数据，$\\theta$表示模型的参数 1. 概率函数（probability functiom）\n$\\theta$已知，$x$是变量，描述对于不同的样本点$x$，其出现的概率是多少 2. 似然函数（likelihood function）\n$x$已知，$\\theta$是变量，描述对于不同的模型参数，出现$x$这个样本点的概率是多少")]),t._v(" "),n("h2",{attrs:{id:"假设"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#假设"}},[t._v("#")]),t._v(" 假设")]),t._v(" "),n("p",[t._v("MLE的输入是已知的样本结果，即对总体数据有个采样的过程，需要假设此采样都是独立同分布的")]),t._v(" "),n("h2",{attrs:{id:"举例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),n("p",[t._v("问题： 假如有一个罐子，里面有黑白两种颜色的球，数目多少不知，两种颜色的比例也不知。我\n们想知道罐中白球和黑球的比例，但我们不能把罐中的球全部拿出来数。现在我们可以每次任意从已经摇匀的罐中拿一个球出来，记录球的颜色，然后把拿出来的球\n再放回罐中。这个过程可以重复，我们可以用记录的球的颜色来估计罐中黑白球的比例。假如在前面的一百次重复记录中，有七十次是白球，请问罐中白球所占的比例最有可能是多少？\n解答： 我们假设罐中白球的比例是p，那么黑球的比例就是1-p。因为每抽一个球出来，在记录颜色之后，我们把抽出的球放回了罐中并摇匀，所以\n"),n("strong",[t._v("每次抽出来的球的颜色服从同一独立分布。")]),t._v("\n这里我们把一次抽出来球的颜色称为一次抽样。题目中在一百次抽样中，七十次是白球的,三十次为黑球事件的概率是P(样本结果|Model)。\n如果第一次抽象的结果记为x1,第二次抽样的结果记为x2....那么样本结果为(x1,x2.....,x100)。这样，我们可以得到如下表达式：\nP(样本结果|Model) = P(x1,x2,…,x100|Model) = P(x1|Mel)P(x2|M)…P(x100|M) =\n$p^{70}(1-p)^{30}$ 好的，我们已经有了观察样本结果出现的概率表达式了。\n那么我们要求的模型的参数，也就是求的式中的p，求解出p的值，就相当于知道了样本的分布情况，则对应的模型参数就可以求解出来。\n如何确定p值？MLE中采取的方法是让这个样本结果出现的可能性最大，即使\n$p^{70}(1-p)^{30}$最大，所以对其求导后使其为0，求解出对应的p值即可。 那么既然事情已经发生了，为什么不让这个出现的结果的可能性最大呢？\n"),n("strong",[t._v("这也就是最大似然估计的核心。")])]),t._v(" "),n("blockquote",[n("p",[t._v("参考 https://zhuanlan.zhihu.com/p/26614750")])])])}),[],!1,null,null,null);a.default=s.exports}}]);