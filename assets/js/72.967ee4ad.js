(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{552:function(v,_,t){"use strict";t.r(_);var s=t(5),e=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"有哪些请求方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有哪些请求方法"}},[v._v("#")]),v._v(" 有哪些请求方法？")]),v._v(" "),t("p",[t("code",[v._v("http/1.1")]),v._v("规定了以下请求方法(注意，都是大写):")]),v._v(" "),t("ul",[t("li",[v._v("GET: 通常用来获取资源")]),v._v(" "),t("li",[v._v("HEAD: 获取资源的元信息")]),v._v(" "),t("li",[v._v("POST: 提交数据，即上传数据")]),v._v(" "),t("li",[v._v("PUT: 修改数据")]),v._v(" "),t("li",[v._v("DELETE: 删除资源(几乎用不到)")]),v._v(" "),t("li",[v._v("CONNECT: 建立连接隧道，用于代理服务器")]),v._v(" "),t("li",[v._v("OPTIONS: 列出可对资源实行的请求方法，用来跨域请求")]),v._v(" "),t("li",[v._v("TRACE: 追踪请求-响应的传输路径")])]),v._v(" "),t("h2",{attrs:{id:"get-和-post-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-有什么区别"}},[v._v("#")]),v._v(" GET 和 POST 有什么区别？")]),v._v(" "),t("p",[v._v("首先最直观的是语义上的区别。")]),v._v(" "),t("p",[v._v("而后又有这样一些具体的差别:")]),v._v(" "),t("ul",[t("li",[v._v("从"),t("strong",[v._v("缓存")]),v._v("的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("编码")]),v._v("的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("参数")]),v._v("的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("幂等性")]),v._v("的角度，"),t("code",[v._v("GET")]),v._v("是"),t("strong",[v._v("幂等")]),v._v("的，而"),t("code",[v._v("POST")]),v._v("不是。("),t("code",[v._v("幂等")]),v._v("表示执行相同的操作，结果也是相同的)")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("TCP")]),v._v("的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。("),t("strong",[v._v("火狐")]),v._v("浏览器除外，它的 POST 请求只发一个 TCP 包)")])])])}),[],!1,null,null,null);_.default=e.exports}}]);