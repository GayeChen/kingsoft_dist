webpackJsonp([36],{432:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return function(n,u){t=60,(0,H.default)("/cloud/tree/"+t+"/eip").then(function(t){return e&&e(t),n((0,x.callback)(t,rt))})}}function l(t,e,n,u){return function(r,l){(0,H.default)("/cloud/com/"+t+"/prd/"+e+"/avaiip",n,"PUT",!0).then(function(t){return u&&u(t),r((0,x.callback)(t,lt))})}}function a(t,e,n){return function(u,r){(0,H.default)("/cloud/tree/"+t+"/eip",e,"PUT",!0).then(function(t){n&&n(t)})}}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return function(u,r){(0,H.default)(Y+"/",t,n,!0).then(function(t){return e&&e(t),u((0,x.callback)(t,F))})}}function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"PUT";return function(u,r){(0,H.default)(Y+("/"+t.id),t,n,!0).then(function(t){return e&&e(t),u((0,x.callback)(t,F))})}}function o(t){return(0,x.callback)(t,z)}function d(t){return(0,x.callback)(t,W)}function f(t){return(0,x.callback)(t,tt)}function s(t){return(0,x.callback)(t,$)}function E(t){return(0,x.callback)(t,Q)}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return function(u,r){(0,H.default)(Y+("/"+t.id),{},n).then(function(t){return e&&e(t),u((0,x.callback)(t,z))})}}function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return function(u,r){(0,H.default)(Y+("/"+t.id+"/vpc"),{},n).then(function(t){return e&&e(t),u((0,x.callback)(t,Q))})}}function m(t,e,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"PUT";return function(r,l){(0,H.default)("/cloud/tree/"+t+"/host",e,u,!0).then(function(t){return n&&n(t),r((0,x.callback)(t,ut))})}}function T(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"DELETE";return function(u,r){(0,H.default)(Y+("/"+t.id),t,n,!0).then(function(t){return e&&e(t),u((0,x.callback)(t,M))})}}function P(t,e){return function(n,u){(0,H.default)(J+("/"+t+"/vpc"),{}).then(function(t){return e&&e(t),n((0,x.callback)(t,W))})}}function I(t,e,n){return function(u,r){(0,H.default)(K+("/"+t.id+"/vpc"),e,"POST",!0).then(function(t){return n&&n(t),u((0,x.callback)(t,q))})}}function v(t,e,n){return function(u,r){(0,H.default)(X+("/"+t+"?assigned=true"),e,"PUT",!0).then(function(t){return n&&n(t),u((0,x.callback)(t,$))})}}function h(t,e,n){return function(u,r){(0,H.default)(Z+("/"+t+"?assigned=true"),e,"PUT",!0).then(function(t){return n&&n(t),u((0,x.callback)(t,$))})}}function y(t,e){return function(n,u){(0,H.default)(X+("/"+t+"?assigned=false"),{},"GET").then(function(t){return e&&e(t),n((0,x.callback)(t,tt))})}}function b(t,e,n){return function(u,r){(0,H.default)("/cloud/com/"+t+"/avaihost",e,"PUT",!0).then(function(t){return n&&n(t),u((0,x.callback)(t,tt))})}}function g(t,e,n,u){return function(r,l){(0,H.default)("/cloud/com/"+t+"/prd/"+e+"/availb",n,"PUT",!0).then(function(t){return u&&u(t),r((0,x.callback)(t,at))})}}function k(t,e){return function(n,u){(0,H.default)("/cloud/tree/"+t+"/elb?s=0").then(function(t){return e&&e(t),n((0,x.callback)(t,ct))})}}function D(t,e,n){return function(u,r){(0,H.default)("/cloud/tree/"+t+"/elb",e,"PUT",!0).then(function(t){n&&n(t)})}}function L(t,e){return function(n,u){(0,H.default)("/cloud/tree/"+t+"/host/",{},"GET").then(function(t){return e&&e(t),n((0,x.callback)(t,$))})}}function B(t,e,n){return function(u,r){(0,H.default)(Z+("/"+t+"?prdID="+e),{},"GET").then(function(t){return n&&n(t),u((0,x.callback)(t,et))})}}function C(t,e){return function(n,u){(0,H.default)(Z+("/"+t+"?prdID=0"),{},"GET").then(function(t){return e&&e(t),n((0,x.callback)(t,nt))})}}function U(t,e){return function(n,u){(0,H.default)(j+("/"+t+"/prd"),{},"GET").then(function(t){return e&&e(t),n((0,x.callback)(t,w))})}}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments[1],n=it[e.type];return n?n(t,e):t}Object.defineProperty(e,"__esModule",{value:!0}),e.actions=e.GET_USED_LBSERVICE=e.GET_AVAILABLE_LBSERVICE=e.GET_AVAILABLE_EIPS=e.GET_EIPS_BY_NODEID=e.UPDATE_PRD_HOST=e.GET_UNBIND_ELB=e.GET_BIND_ELB=e.GET_UNBIND_HOST=e.GET_BIND_HOST=e.ELB_API=e.HOST_API=e.PRODUCT_VPC_INFO=e.PRODUCT_INFO=e.BIND_VPC=e.GET_VPC=e.BIND_VPC_API=e.VPC_API=e.PRODUCT_LIST_API=e.PRODUCT_API=e.PRODUCT_LIST=e.DEL_PRODUCT=e.PRODUCT=void 0;var A,S=n(23),G=u(S),N=n(45),V=u(N);e.getEipByNodeId=r,e.getAvailableEip=l,e.updateEipInfo=a,e.product=c,e.editProduct=i,e.setCurProduct=o,e.setCurVpcList=d,e.setCurUnbindHost=f,e.setCurBindHost=s,e.setCurProductVpc=E,e.getProductInfo=p,e.getProductVpcInfo=_,e.updatePrdHost=m,e.delProduct=T,e.getVpcs=P,e.bindVpcs=I,e.setPrdHost=v,e.setPrdElb=h,e.getUnbindHost=y,e.getUnbindHostByVpcs=b,e.getAvailableServiceByAccid=g,e.getUsedServiceByAccid=k,e.updateElbInfo=D,e.getBindHost=L,e.getBindElb=B,e.getUnbindElb=C,e.productList=U,e.default=O;var R=n(77),H=u(R),x=n(322),F=e.PRODUCT="PRODUCT",M=e.DEL_PRODUCT="DEL_PRODUCT",w=e.PRODUCT_LIST="PRODUCT_LIST",Y=e.PRODUCT_API="/cloud/prd",j=e.PRODUCT_LIST_API="/cloud/com",J=e.VPC_API="/cloud/tree",K=e.BIND_VPC_API="/cloud/prd",W=e.GET_VPC="GET_VPC",q=e.BIND_VPC="BIND_VPC",z=e.PRODUCT_INFO="PRODUCT_INFO",Q=e.PRODUCT_VPC_INFO="PRODUCT_VPC_INFO",X=e.HOST_API="/cloud/res/hosts/prd",Z=e.ELB_API="/cloud/res/elb/org",$=e.GET_BIND_HOST="GET_BIND_HOST",tt=e.GET_UNBIND_HOST="GET_UNBIND_HOST",et=e.GET_BIND_ELB="GET_BIND_ELB",nt=e.GET_UNBIND_ELB="GET_UNBIND_ELB",ut=e.UPDATE_PRD_HOST="UPDATE_PRD_HOST",rt=e.GET_EIPS_BY_NODEID="GET_EIPS_BY_NODEID",lt=e.GET_AVAILABLE_EIPS="GET_AVAILABLE_EIPS",at=e.GET_AVAILABLE_LBSERVICE="GET_AVAILABLE_LBSERVICE",ct=e.GET_USED_LBSERVICE="GET_USED_LBSERVICE",it=(e.actions={product:c,productList:U,editProduct:i,getVpcs:P,bindVpcs:I},A={},(0,G.default)(A,F,function(t,e){return(0,V.default)({},t)}),(0,G.default)(A,z,function(t,e){return(0,V.default)({},t,{curProduct:e.data})}),(0,G.default)(A,Q,function(t,e){return(0,V.default)({},t,{curProductVpc:e.data})}),(0,G.default)(A,w,function(t,e){return(0,V.default)({},t,e.data)}),(0,G.default)(A,$,function(t,e){return(0,V.default)({},t,{curBindHost:e.data})}),(0,G.default)(A,tt,function(t,e){return(0,V.default)({},t,{curUnBindHost:e.data})}),(0,G.default)(A,et,function(t,e){return(0,V.default)({},t,{curBindElb:e.data})}),(0,G.default)(A,nt,function(t,e){return(0,V.default)({},t,{curUnBindElb:e.data})}),(0,G.default)(A,at,function(t,e){return(0,V.default)({},t,{availableLbService:e.data})}),(0,G.default)(A,ct,function(t,e){return(0,V.default)({},t,{usedLbService:e.data})}),(0,G.default)(A,rt,function(t,e){return(0,V.default)({},t,{eiplist:e.data})}),(0,G.default)(A,lt,function(t,e){return(0,V.default)({},t,{availableEiplist:e.data})}),(0,G.default)(A,W,function(t,e){return(0,V.default)({},t,{vpcs:e.data})}),A),ot={prdHostCounter:0}},1579:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(504),l=u(r),a=n(11),c=u(a),i=n(3),o=u(i),d=n(6),f=u(d),s=n(5),E=u(s),p=n(4),_=u(p);n(536);var m=n(1),T=u(m),P=n(41),I=n(99),v=n(2286),h=u(v),y=l.default.SubMenu;n(2779);var b=function(t){return{home:t.home}},g=function(t){function e(t){return(0,o.default)(this,e),(0,E.default)(this,(e.__proto__||(0,c.default)(e)).call(this,t))}return(0,_.default)(e,t),(0,f.default)(e,[{key:"componentWillMount",value:function(){null===this.props.children&&this.props.history.push("/center/deploy/setting/acc/add")}},{key:"componentDidMount",value:function(){null===this.props.children&&this.props.history.push("/center/deploy/setting/acc/add")}},{key:"render",value:function(){var t=h.default.get(this.props,"home.curOrg.is_admin"),e=T.default.createElement("div",{className:"setting-slider",style:{width:"180px",minHeight:document.documentElement.clientHeight-74,backgroundColor:"#F2F2F2",borderRight:"1px solid #dee3e4",position:"relative"}},T.default.createElement(l.default,{mode:"inline",defaultOpenKeys:["1","2","3","4"]},T.default.createElement("div",{style:{paddingLeft:"24px",backgroundColor:"#f2f2f2"}},T.default.createElement(l.default.ItemGroup,{title:T.default.createElement("span",{style:{color:"#a7a7a7"}},"设置",T.default.createElement("span",{style:{right:"10px",top:"22px",position:"absolute",display:"inline-block",width:"90px",height:"1px",backgroundColor:"#ccc"}}))})),1==t&&T.default.createElement(y,{key:"1",title:T.default.createElement("span",{style:{}},"云账号管理")},T.default.createElement(l.default.Item,{key:"1-1"},T.default.createElement(I.Link,{to:"/center/deploy/setting/acc/add"},"创建")),T.default.createElement(l.default.Item,{key:"1-2"},T.default.createElement(I.Link,{to:"/center/deploy/setting/acc/list"},"管理"))),T.default.createElement(y,{key:"2",title:T.default.createElement("span",{style:{}},"监控报警组")},T.default.createElement(l.default.Item,{key:"2-1"},T.default.createElement(I.Link,{to:"/center/deploy/setting/monitor/groups"},"管理"))),1==t?T.default.createElement(y,{key:"3",title:T.default.createElement("span",{style:{}},"权限管理")},T.default.createElement(l.default.Item,{key:"3-1"},T.default.createElement(I.Link,{to:"/center/deploy/setting/permission/member/359"},"授权")),T.default.createElement(l.default.Item,{key:"3-2"},T.default.createElement(I.Link,{to:"/center/deploy/setting/permission/role/list"},"角色")),T.default.createElement(l.default.Item,{key:"3-3"},T.default.createElement(I.Link,{to:"/center/deploy/setting/permission/authority"},"查看权限"))):null,1==t&&T.default.createElement(y,{key:"4",title:T.default.createElement("span",{style:{}},"公司管理")},T.default.createElement(l.default.Item,{key:"4-1"},T.default.createElement(I.Link,{to:"/center/deploy/setting/company/invite"},"邀请")),T.default.createElement(l.default.Item,{key:"4-2"},T.default.createElement(I.Link,{to:"/center/deploy/setting/company/members"},"成员")),T.default.createElement(l.default.Item,{key:"4-3"},T.default.createElement(I.Link,{to:"/center/deploy/setting/company/ops"},"操作日志"))),T.default.createElement(y,{key:"5",title:T.default.createElement("span",{style:{}},"个人中心")},T.default.createElement(l.default.Item,{key:"5-4"},T.default.createElement(I.Link,{to:"/center/deploy/setting/company/exit"},"退出公司")))));return T.default.createElement("div",null,T.default.createElement("div",{style:{float:"left"}},e),T.default.createElement("div",{style:{position:"relative",marginLeft:180,backgroundColor:"#FFFFFF"}},this.props.children))}}]),e}(m.Component);e.default=(0,P.connect)(b)(g)},1971:function(t,e,n){e=t.exports=n(39)(),e.push([t.id,".setting-slider .ant-menu-item{padding-left:24px!important;background:#f2f2f2}.setting-slider .ant-menu-item:hover,.setting-slider .ant-menu-submenu-title:hover,.setting-slider .ant-menu-submenu:hover,.setting-slider .ant-menu.ant-menu-root{background:#f2f2f2}",""])},2286:function(t,e,n){"use strict";function u(t){}var r=function(t){return void 0!==t&&null!==t},l=/[\[\]\.]+/,a=function(t,e,n){if(!r(t))return{};var u=Array.isArray(e)?e:e.split(l),a=null,c=t,i=[],o=!0,d=!1,f=void 0;try{for(var s,E=u[Symbol.iterator]();!(o=(s=E.next()).done);o=!0){var p=s.value;if(0!==p.length&&(a=c,c=c[p],i.push(p),!r(c))){if(!n)return{path:i};a[p]={},c=a[p]}}}catch(t){d=!0,f=t}finally{try{!o&&E.return&&E.return()}finally{if(d)throw f}}return{value:c,path:i}},c=function(t,e){return u("`exist()` is deprecated, please use `exist.detect()`."),r(a(t,e).value)};c.detect=function(t,e){var n=a(t,e);return!!r(n.value)||n.path},c.get=function(t,e,n){var u=a(t,e).value;return r(u)?u:n},c.set=function(t,e,n,u){var c=Array.isArray(e)?e:e.split(l),i=c.pop(),o=a(t,c,u).value;return!!r(o)&&(o[i]=n,!0)};var i=function(){};c.invoke=function(t,e){var n=Array.isArray(e)?e:e.split(l),u=n.pop(),c=a(t,n).value;if(r(c)){var o=c[u];if("function"==typeof o)return o.bind(c)}return i},t.exports=c},2779:function(t,e,n){var u=n(1971);"string"==typeof u&&(u=[[t.id,u,""]]);n(40)(u,{});u.locals&&(t.exports=u.locals)}});