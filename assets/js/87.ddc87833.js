(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{567:function(v,_,t){"use strict";t.r(_);var T=t(5),s=Object(T.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("由于 HTTPS 在安全方面已经做的非常好了，HTTP 改进的关注点放在了性能方面。对于 HTTP/2 而言，它对于性能的提升主要在于两点:")]),v._v(" "),t("ul",[t("li",[v._v("头部压缩")]),v._v(" "),t("li",[v._v("多路复用")])]),v._v(" "),t("p",[v._v("当然还有一些颠覆性的功能实现:")]),v._v(" "),t("ul",[t("li",[v._v("设置请求优先级")]),v._v(" "),t("li",[v._v("服务器推送")])]),v._v(" "),t("p",[v._v("这些重大的提升本质上也是为了解决 HTTP 本身的问题而产生的。接下来我们来看看 HTTP/2 解决了哪些问题，以及解决方式具体是如何的。")]),v._v(" "),t("h2",{attrs:{id:"头部压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头部压缩"}},[v._v("#")]),v._v(" 头部压缩")]),v._v(" "),t("p",[v._v("在 HTTP/1.1 及之前的时代，"),t("strong",[v._v("请求体")]),v._v("一般会有响应的压缩编码过程，通过"),t("code",[v._v("Content-Encoding")]),v._v("头部字段来指定，但你有没有想过头部字段本身的压缩呢？当请求字段非常复杂的时候，尤其对于 GET 请求，请求报文几乎全是请求头，这个时候还是存在非常大的优化空间的。HTTP/2 针对头部字段，也采用了对应的压缩算法——HPACK，对请求头进行压缩。")]),v._v(" "),t("p",[v._v("HPACK 算法是专门为 HTTP/2 服务的，它主要的亮点有两个：")]),v._v(" "),t("ul",[t("li",[v._v("首先是在服务器和客户端之间建立哈希表，将用到的字段存放在这张表中，那么在传输的时候对于之前出现过的值，只需要把"),t("strong",[v._v("索引")]),v._v("(比如0，1，2，...)传给对方即可，对方拿到索引查表就行了。这种"),t("strong",[v._v("传索引")]),v._v("的方式，可以说让请求头字段得到极大程度的精简和复用。\n"),t("img",{attrs:{src:v.$withBase("/http/009.png")}})])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("小贴士")]),v._v(" "),t("p",[v._v('HTTP/2 当中废除了起始行的概念，将起始行中的请求方法、URI、状态码转换成了头字段，不过这些字段都有一个":"前缀，用来和其它请求头区分开。')])]),v._v(" "),t("ul",[t("li",[v._v("其次是对于整数和字符串进行"),t("strong",[v._v("哈夫曼编码")]),v._v("，哈夫曼编码的原理就是先将所有出现的字符建立一张索引表，然后让出现次数多的字符对应的索引尽可能短，传输的时候也是传输这样的"),t("strong",[v._v("索引序列")]),v._v("，可以达到非常高的压缩率。")])]),v._v(" "),t("h2",{attrs:{id:"多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[v._v("#")]),v._v(" 多路复用")]),v._v(" "),t("h3",{attrs:{id:"http-队头阻塞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-队头阻塞"}},[v._v("#")]),v._v(" HTTP 队头阻塞")]),v._v(" "),t("p",[v._v("我们之前讨论了 HTTP 队头阻塞的问题，其根本原因在于HTTP 基于"),t("code",[v._v("请求-响应")]),v._v("的模型，在同一个 TCP 长连接中，前面的请求没有得到响应，后面的请求就会被阻塞。")]),v._v(" "),t("p",[v._v("后面我们又讨论到用"),t("strong",[v._v("并发连接")]),v._v("和"),t("strong",[v._v("域名分片")]),v._v("的方式来解决这个问题，但这并没有真正从 HTTP 本身的层面解决问题，只是增加了 TCP 连接，分摊风险而已。而且这么做也有弊端，多条 TCP 连接会竞争"),t("strong",[v._v("有限的带宽")]),v._v("，让真正优先级高的请求不能优先处理。")]),v._v(" "),t("p",[v._v("而 HTTP/2 便从 HTTP 协议本身解决了"),t("code",[v._v("队头阻塞")]),v._v("问题。注意，这里并不是指的"),t("code",[v._v("TCP队头阻塞")]),v._v("，而是"),t("code",[v._v("HTTP队头阻塞")]),v._v("，两者并不是一回事。TCP 的队头阻塞是在"),t("code",[v._v("数据包")]),v._v("层面，单位是"),t("code",[v._v("数据包")]),v._v("，前一个报文没有收到便不会将后面收到的报文上传给 HTTP，而HTTP 的队头阻塞是在 "),t("code",[v._v("HTTP 请求-响应")]),v._v("层面，前一个请求没处理完，后面的请求就要阻塞住。两者所在的层次不一样。")]),v._v(" "),t("p",[v._v("那么 HTTP/2 如何来解决所谓的队头阻塞呢？")]),v._v(" "),t("h3",{attrs:{id:"二进制分帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[v._v("#")]),v._v(" 二进制分帧")]),v._v(" "),t("p",[v._v("首先，HTTP/2 认为明文传输对机器而言太麻烦了，不方便计算机的解析，因为对于文本而言会有多义性的字符，比如回车换行到底是内容还是分隔符，在内部需要用到状态机去识别，效率比较低。于是 HTTP/2 干脆把报文全部换成二进制格式，全部传输"),t("code",[v._v("01")]),v._v("串，方便了机器的解析。")]),v._v(" "),t("p",[v._v("原来"),t("code",[v._v("Headers + Body")]),v._v("的报文格式如今被拆分成了一个个二进制的帧，用"),t("strong",[v._v("Headers帧")]),v._v("存放头部字段，"),t("strong",[v._v("Data帧")]),v._v("存放请求体数据。分帧之后，服务器看到的不再是一个个完整的 HTTP 请求报文，而是一堆乱序的二进制帧。这些二进制帧不存在先后关系，因此也就不会排队等待，也就没有了 HTTP 的队头阻塞问题。")]),v._v(" "),t("p",[v._v("通信双方都可以给对方发送二进制帧，这种二进制帧的"),t("strong",[v._v("双向传输的序列")]),v._v("，也叫做"),t("code",[v._v("流")]),v._v("(Stream)。HTTP/2 用"),t("code",[v._v("流")]),v._v("来在一个 TCP 连接上来进行多个数据帧的通信，这就是"),t("strong",[v._v("多路复用")]),v._v("的概念。")]),v._v(" "),t("p",[v._v("可能你会有一个疑问，既然是乱序首发，那最后如何来处理这些乱序的数据帧呢？")]),v._v(" "),t("p",[v._v("首先要声明的是，所谓的乱序，指的是不同 ID 的 Stream 是乱序的，但同一个 Stream ID 的帧一定是按顺序传输的。二进制帧到达后对方会将 Stream ID 相同的二进制帧组装成完整的"),t("strong",[v._v("请求报文")]),v._v("和"),t("strong",[v._v("响应报文")]),v._v("。当然，在二进制帧当中还有其他的一些字段，实现了"),t("strong",[v._v("优先级")]),v._v("和"),t("strong",[v._v("流量控制")]),v._v("等功能，我们放到下一节再来介绍。")]),v._v(" "),t("h2",{attrs:{id:"服务器推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[v._v("#")]),v._v(" 服务器推送")]),v._v(" "),t("p",[v._v("另外值得一说的是 HTTP/2 的服务器推送(Server Push)。在 HTTP/2 当中，服务器已经不再是完全被动地接收请求，响应请求，它也能新建 stream 来给客户端发送消息，当 TCP 连接建立之后，比如浏览器请求一个 HTML 文件，服务器就可以在返回 HTML 的基础上，将 HTML 中引用到的其他资源文件一起返回给客户端，减少客户端的等待。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("当然，HTTP/2 新增那么多的特性，是不是 HTTP 的语法要重新学呢？不需要，HTTP/2 完全兼容之前 HTTP 的语法和语义，如"),t("strong",[v._v("请求头、URI、状态码、头部字段")]),v._v("都没有改变，完全不用担心。同时，在安全方面，HTTP 也支持 TLS，并且现在主流的浏览器都公开只支持加密的 HTTP/2, 因此你现在能看到的 HTTP/2 也基本上都是跑在 TLS 上面的了。最后放一张分层图给大家参考:")]),v._v(" "),t("p",[t("img",{attrs:{src:v.$withBase("/http/008.png")}})])])}),[],!1,null,null,null);_.default=s.exports}}]);