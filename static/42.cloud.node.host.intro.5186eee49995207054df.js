webpackJsonp([42],{829:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(11),r=l(u),a=n(3),o=l(a),c=n(7),i=l(c),d=n(5),s=l(d),f=n(4),p=l(f),m=n(1),v=l(m),h=n(38),b=n(1059),y=function(e){return{home:e.home,center:e.center}},_=function(e){function t(){var e;(0,o.default)(this,t);for(var n=arguments.length,l=Array(n),u=0;u<n;u++)l[u]=arguments[u];var a=(0,s.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(l)));return a.state={isAdmin:""},a}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.nodeId;this.context.router.push("/center/tree/"+e+"/permission/deploy")}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.home.curOrg,n=(e.center.linkUrl,t&&t.is_admin);return n?v.default.createElement("div",null,v.default.createElement("div",{className:"eip-unbound-box"},v.default.createElement("h2",null,"您现在还没有同步云服务器，也没有成功上报信息的私有物理机。"),v.default.createElement("p",null,"你可以按照下面按钮添加公有云账号，将云服务商的虚拟主机信息同步到系统中"),v.default.createElement("p",null,"或者在私有物理机上安装AGENT，上报物理机信息"),1==n?v.default.createElement("a",{className:"eip-unbound-link",href:"/manage",target:"view_window"},"绑定云账号"):null,v.default.createElement("img",{src:b,alt:"",className:"eip-unbound-img",style:{marginTop:0}}))):null}}]),t}(v.default.Component);_.contextTypes={router:v.default.PropTypes.object},t.default=(0,h.connect)(y,null)(_)},1059:function(e,t,n){e.exports=n.p+"355298bbe49d6dd9b333a95f247be5e0.png"}});