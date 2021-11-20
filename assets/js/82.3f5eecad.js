(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{561:function(s,a,r){"use strict";r.r(a);var e=r(5),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("p",[s._v("我们知道在 HTTP 是基于"),r("code",[s._v("请求-响应")]),s._v("模型的协议，一般由客户端发请求，服务器来进行响应。")]),s._v(" "),r("p",[s._v("当然，也有特殊情况，就是代理服务器的情况。引入代理之后，作为代理的服务器相当于一个中间人的角色，对于客户端而言，表现为服务器进行响应；而对于源服务器，表现为客户端发起请求，具有"),r("strong",[s._v("双重身份")]),s._v("。")]),s._v(" "),r("p",[s._v("那代理服务器到底是用来做什么的呢？")]),s._v(" "),r("h2",{attrs:{id:"功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),r("ol",[r("li",[r("p",[r("strong",[s._v("负载均衡")]),s._v("。客户端的请求只会先到达代理服务器，后面到底有多少源服务器，IP 都是多少，客户端是不知道的。因此，这个代理服务器可以拿到这个请求之后，可以通过特定的算法分发给不同的源服务器，让各台源服务器的负载尽量平均。当然，这样的算法有很多，包括"),r("strong",[s._v("随机算法")]),s._v("、"),r("strong",[s._v("轮询")]),s._v("、"),r("strong",[s._v("一致性hash")]),s._v("、"),r("strong",[s._v("LRU")]),r("code",[s._v("(最近最少使用)")]),s._v("等等，不过这些算法并不是本文的重点，大家有兴趣自己可以研究一下。")])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("保障安全")]),s._v("。利用"),r("strong",[s._v("心跳")]),s._v("机制监控后台的服务器，一旦发现故障机就将其踢出集群。并且对于上下行的数据进行过滤，对非法 IP 限流，这些都是代理服务器的工作。")])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("缓存代理")]),s._v("。将内容缓存到代理服务器，使得客户端可以直接从代理服务器获得而不用到源服务器那里。下一节详细拆解。")])])]),s._v(" "),r("h2",{attrs:{id:"相关头部字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关头部字段"}},[s._v("#")]),s._v(" 相关头部字段")]),s._v(" "),r("h3",{attrs:{id:"via"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#via"}},[s._v("#")]),s._v(" Via")]),s._v(" "),r("p",[s._v("代理服务器需要标明自己的身份，在 HTTP 传输中留下自己的痕迹，怎么办呢？")]),s._v(" "),r("p",[s._v("通过"),r("code",[s._v("Via")]),s._v("字段来记录。举个例子，现在中间有两台代理服务器，在客户端发送请求后会经历这样一个过程:")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("客户端 -> 代理1 -> 代理2 -> 源服务器\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("在源服务器收到请求后，会在"),r("code",[s._v("请求头")]),s._v("拿到这个字段:")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("Via: proxy_server1, proxy_server2\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("而源服务器响应时，最终在客户端会拿到这样的"),r("code",[s._v("响应头")]),s._v(":")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("Via: proxy_server2, proxy_server1\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("可以看到，"),r("code",[s._v("Via")]),s._v("中代理的顺序即为在 HTTP 传输中报文传达的顺序。")]),s._v(" "),r("h3",{attrs:{id:"x-forwarded-for"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#x-forwarded-for"}},[s._v("#")]),s._v(" X-Forwarded-For")]),s._v(" "),r("p",[s._v("字面意思就是"),r("code",[s._v("为谁转发")]),s._v(", 它记录的是"),r("strong",[s._v("请求方")]),s._v("的"),r("code",[s._v("IP")]),s._v("地址(注意，和"),r("code",[s._v("Via")]),s._v("区分开，"),r("code",[s._v("X-Forwarded-For")]),s._v("记录的是请求方这一个IP)。")]),s._v(" "),r("h3",{attrs:{id:"x-real-ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#x-real-ip"}},[s._v("#")]),s._v(" X-Real-IP")]),s._v(" "),r("p",[s._v("是一种获取用户真实 IP 的字段，不管中间经过多少代理，这个字段始终记录最初的客户端的IP。")]),s._v(" "),r("p",[s._v("相应的，还有"),r("code",[s._v("X-Forwarded-Host")]),s._v("和"),r("code",[s._v("X-Forwarded-Proto")]),s._v("，分别记录"),r("strong",[s._v("客户端")]),s._v("(注意哦，不包括代理)的"),r("code",[s._v("域名")]),s._v("和"),r("code",[s._v("协议名")]),s._v("。")]),s._v(" "),r("h2",{attrs:{id:"x-forwarded-for产生的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#x-forwarded-for产生的问题"}},[s._v("#")]),s._v(" X-Forwarded-For产生的问题")]),s._v(" "),r("p",[s._v("前面可以看到，"),r("code",[s._v("X-Forwarded-For")]),s._v("这个字段记录的是请求方的 IP，这意味着每经过一个不同的代理，这个字段的名字都要变，从"),r("code",[s._v("客户端")]),s._v("到"),r("code",[s._v("代理1")]),s._v("，这个字段是客户端的 IP，从"),r("code",[s._v("代理1")]),s._v("到"),r("code",[s._v("代理2")]),s._v("，这个字段就变为了代理1的 IP。")]),s._v(" "),r("p",[s._v("但是这会产生两个问题:")]),s._v(" "),r("ol",[r("li",[r("p",[s._v("意味着代理必须解析 HTTP 请求头，然后修改，比直接转发数据性能下降。")])]),s._v(" "),r("li",[r("p",[s._v("在 HTTPS 通信加密的过程中，原始报文是不允许修改的。")])])]),s._v(" "),r("p",[s._v("由此产生了"),r("code",[s._v("代理协议")]),s._v("，一般使用明文版本，只需要在 HTTP 请求行上面加上这样格式的文本即可:")]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// PROXY + TCP4/TCP6 + 请求方地址 + 接收方地址 + 请求端口 + 接收端口")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PROXY")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCP4")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("p",[s._v("这样就可以解决"),r("code",[s._v("X-Forwarded-For")]),s._v("带来的问题了。\nX-Forwarded-For")])])}),[],!1,null,null,null);a.default=t.exports}}]);