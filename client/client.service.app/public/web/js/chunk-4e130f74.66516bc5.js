(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e130f74"],{1586:function(e,t,o){"use strict";o("2538")},2538:function(e,t,o){var r=o("6ed5");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=o("499e").default;n("69a1c9a8",r,!0,{sourceMap:!1,shadowMode:!1})},"6ed5":function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,".el-row[data-v-5af23bb0]{width:100%}.el-form-item.last[data-v-5af23bb0]{margin-bottom:0}.register-form[data-v-5af23bb0]{padding:2rem}.register-form .inner[data-v-5af23bb0]{border:1px solid #eee;padding:2rem;border-radius:4px}.el-collapse[data-v-5af23bb0]{margin-bottom:1rem}@media screen and (max-width:768px){.el-col[data-v-5af23bb0]{margin-top:.6rem}}",""]),e.exports=t},"73cf":function(e,t,o){"use strict";o.r(t);var r=o("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-5af23bb0"),e=e(),Object(r["popScopeId"])(),e},l={class:"register-form"},c=n((function(){return Object(r["createElementVNode"])("h3",{class:"title t-c"},"将本客户端注册到服务器",-1)})),d={class:"t-c w-100",style:{"padding-bottom":".6rem"}},a=Object(r["createTextVNode"])("服务端配置"),u=Object(r["createTextVNode"])("服务端权限配置"),i={class:"inner"},m=Object(r["createTextVNode"])("使用ipv6"),b=Object(r["createTextVNode"])("自动注册"),f=Object(r["createTextVNode"])("p2p加密"),s=Object(r["createTextVNode"])("注册加密"),p=Object(r["createTextVNode"])("使用udp"),O=Object(r["createTextVNode"])("使用tcp"),j=Object(r["createTextVNode"])("使用原端口"),C=Object(r["createTextVNode"])("自动打洞"),g=Object(r["createTextVNode"])("断线重连"),V=Object(r["createTextVNode"])("> "),x=Object(r["createTextVNode"])("中继节点"),h=Object(r["createTextVNode"])("> "),w={class:"t-c w-100"},N=Object(r["createTextVNode"])("注册"),U=Object(r["createTextVNode"])("退出");function v(e,t,o,n,v,_){var S=Object(r["resolveComponent"])("el-button"),I=Object(r["resolveComponent"])("ConfigureModal"),P=Object(r["resolveComponent"])("el-input"),R=Object(r["resolveComponent"])("el-form-item"),T=Object(r["resolveComponent"])("el-col"),y=Object(r["resolveComponent"])("el-popover"),E=Object(r["resolveComponent"])("el-tooltip"),A=Object(r["resolveComponent"])("el-row"),k=Object(r["resolveComponent"])("el-checkbox"),D=Object(r["resolveComponent"])("el-collapse-item"),L=Object(r["resolveComponent"])("el-collapse"),B=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[c,Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(I,{className:"ServerConfigure"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S,{size:"small"},{default:Object(r["withCtx"])((function(){return[a]})),_:1})]})),_:1}),Object(r["createVNode"])(I,{className:"ServiceAccessrConfigure"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S,{size:"small"},{default:Object(r["withCtx"])((function(){return[u]})),_:1})]})),_:1})]),Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(B,{"label-width":"8rem",ref:"formDom",model:e.model,rules:e.rules},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"名称",prop:"ClientName"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.ClientName,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model.ClientName=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的注册名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"短id",prop:"ShortId"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y,{placement:"top-start",title:"短id",trigger:"hover",content:"暂不可用"},{reference:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.ShortId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model.ShortId=t}),readonly:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"分组",prop:"GroupId"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"设置你的分组编号，两个客户端之间分组编号一致时相互可见",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{type:"password","show-password":"",modelValue:e.model.GroupId,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model.GroupId=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的分组编号"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"注册地址",prop:"ServerIp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.ServerIp,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.model.ServerIp=t}),placeholder:"域名或IP地址"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"udp端口",prop:"ServerUdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.ServerUdpPort,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.model.ServerUdpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"tcp端口",prop:"ServerTcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.ServerTcpPort,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.model.ServerTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(D,{title:"可选和其它",name:"1"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"ipv6",prop:"UseIpv6"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UseIpv6,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.model.UseIpv6=t}),disabled:""},{default:Object(r["withCtx"])((function(){return[m]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"绑定ip",prop:"BindIp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.BindIp,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.model.BindIp=t}),placeholder:"绑定ip",readonly:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"udp限速",prop:"UdpUploadSpeedLimit"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"udp发送速度限制（字节数,0不限制）",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.UdpUploadSpeedLimit,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.model.UdpUploadSpeedLimit=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"自动注册",prop:"AutoReg"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.AutoReg,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.model.AutoReg=t})},{default:Object(r["withCtx"])((function(){return[b]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"次数",prop:"AutoRegTimes"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"如果自动注册失败，将要重试几次",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.AutoRegTimes,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.model.AutoRegTimes=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"间隔",prop:"AutoRegInterval"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"间隔多久重试一次(ms)",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.AutoRegInterval,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.model.AutoRegInterval=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"延迟",prop:"AutoRegDelay"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"断线后多久重试",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.AutoRegDelay,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.model.AutoRegDelay=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"加密",prop:"ClientEncode"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"客户端之间通信使用加密",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.ClientEncode,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.model.ClientEncode=t})},{default:Object(r["withCtx"])((function(){return[f]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"密钥",prop:"ClientEncodePassword"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"加密密钥32位，为空则每次加密随机密钥，如果填写，则各客户端都填写",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ClientEncodePassword,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.model.ClientEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"加密",prop:"ServerEncode"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"客户端与服务端之间通信使用加密",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.ServerEncode,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.model.ServerEncode=t})},{default:Object(r["withCtx"])((function(){return[s]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"密钥",prop:"ServerEncodePassword"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"加密密钥 32位，为空则每次加密随机密钥，使用p2p.snltty.com服务器则必须留空",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ServerEncodePassword,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.model.ServerEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"udp",prop:"UseUdp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否使用udp",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UseUdp,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.model.UseUdp=t})},{default:Object(r["withCtx"])((function(){return[p]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"tcp",prop:"UseTcp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否使用tcp",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UseTcp,"onUpdate:modelValue":t[18]||(t[18]=function(t){return e.model.UseTcp=t})},{default:Object(r["withCtx"])((function(){return[O]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"原端口",prop:"UseOriginPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否使用原端口打洞",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UseOriginPort,"onUpdate:modelValue":t[19]||(t[19]=function(t){return e.model.UseOriginPort=t})},{default:Object(r["withCtx"])((function(){return[j]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"掉线超时",prop:"TimeoutDelay"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"多久时间无法连通则掉线ms,使用5的倍数",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{modelValue:e.model.TimeoutDelay,"onUpdate:modelValue":t[20]||(t[20]=function(t){return e.model.TimeoutDelay=t}),placeholder:"掉线超时"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"","label-width":"80"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(A,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"自动打洞",prop:"UsePunchHole"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"发现新客户端后是否自动打洞",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UsePunchHole,"onUpdate:modelValue":t[21]||(t[21]=function(t){return e.model.UsePunchHole=t})},{default:Object(r["withCtx"])((function(){return[C]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"重连",prop:"UseReConnect"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"客户端之间掉线后，是否尝试重新连接",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UseReConnect,"onUpdate:modelValue":t[22]||(t[22]=function(t){return e.model.UseReConnect=t})},{default:Object(r["withCtx"])((function(){return[g]})),_:1},8,["modelValue"]),V]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(T,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(R,{label:"中继节点",prop:"UseRelay"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否允许本客户端作为中继节点",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{modelValue:e.model.UseRelay,"onUpdate:modelValue":t[23]||(t[23]=function(t){return e.model.UseRelay=t})},{default:Object(r["withCtx"])((function(){return[x]})),_:1},8,["modelValue"]),h]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(R,{label:"","label-width":"0",class:"t-c last"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",w,[Object(r["createVNode"])(S,{type:"primary",size:"large",loading:n.signInState.LocalInfo.IsConnecting,onClick:n.handleSubmit},{default:Object(r["withCtx"])((function(){return[N]})),_:1},8,["loading","onClick"]),n.signInState.LocalInfo.UdpConnected||n.signInState.LocalInfo.TcpConnected||n.signInState.LocalInfo.IsConnecting?(Object(r["openBlock"])(),Object(r["createBlock"])(S,{key:0,type:"info",size:"large",onClick:n.handleExit},{default:Object(r["withCtx"])((function(){return[U]})),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0)])]})),_:1})]})),_:1},8,["model","rules"])])])}var _=o("5530"),S=(o("a9e3"),o("a1e9")),I=o("9709"),P=o("ea39"),R=o("3ef4"),T=o("5c40"),y=o("49f5"),E={components:{ConfigureModal:y["a"]},setup:function(){var e=Object(S["r"])(null),t=Object(I["a"])(),o=Object(S["p"])({model:{ShortId:0,ClientName:"",ServerIp:"",ServerUdpPort:0,ServerTcpPort:0,AutoReg:!1,AutoRegTimes:10,AutoRegInterval:5e3,AutoRegDelay:5e3,GroupId:"",ClientEncode:!1,ClientEncodePassword:"",ServerEncode:!1,ServerEncodePassword:"",UsePunchHole:!1,TimeoutDelay:2e4,UseUdp:!1,UseTcp:!1,UseRelay:!0,UseIpv6:!1,BindIp:"0.0.0.0",UseOriginPort:!0,UseReConnect:!1,UdpUploadSpeedLimit:0},rules:{ClientName:[{required:!0,message:"必填",trigger:"blur"}],ServerIp:[{required:!0,message:"必填",trigger:"blur"}],AutoRegTimes:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegInterval:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],TimeoutDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ServerUdpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],ServerTcpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],UdpUploadSpeedLimit:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:2147483647,message:"数字 0-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ShortId:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:255,message:"数字 0-255",trigger:"blur",transform:function(e){return Number(e)}}]}}),r=function(){Object(P["a"])().then((function(e){o.model.ShortId=t.ClientConfig.ShortId=e.ClientConfig.ShortId,o.model.ClientName=t.ClientConfig.Name=e.ClientConfig.Name,o.model.GroupId=t.ClientConfig.GroupId=e.ClientConfig.GroupId,o.model.AutoReg=t.ClientConfig.AutoReg=e.ClientConfig.AutoReg,o.model.AutoRegTimes=t.ClientConfig.AutoRegTimes=e.ClientConfig.AutoRegTimes,o.model.AutoRegInterval=t.ClientConfig.AutoRegInterval=e.ClientConfig.AutoRegInterval,o.model.AutoRegDelay=t.ClientConfig.AutoRegDelay=e.ClientConfig.AutoRegDelay,o.model.ClientEncode=t.ClientConfig.Encode=e.ClientConfig.Encode,o.model.ClientEncodePassword=t.ClientConfig.ClientEncodePassword=e.ClientConfig.EncodePassword,o.model.UsePunchHole=t.ClientConfig.UsePunchHole=e.ClientConfig.UsePunchHole,o.model.UseReConnect=t.ClientConfig.UseReConnect=e.ClientConfig.UseReConnect,o.model.TimeoutDelay=t.ClientConfig.TimeoutDelay=e.ClientConfig.TimeoutDelay,o.model.UseIpv6=t.ClientConfig.UseIpv6=e.ClientConfig.UseIpv6,o.model.BindIp=t.ClientConfig.BindIp=e.ClientConfig.BindIp,o.model.UseUdp=t.ClientConfig.UseUdp=e.ClientConfig.UseUdp,o.model.UseTcp=t.ClientConfig.UseTcp=e.ClientConfig.UseTcp,o.model.UseRelay=t.ClientConfig.UseRelay=e.ClientConfig.UseRelay,o.model.UseOriginPort=t.ClientConfig.UseOriginPort=e.ClientConfig.UseOriginPort,o.model.UdpUploadSpeedLimit=t.ClientConfig.UdpUploadSpeedLimit=e.ClientConfig.UdpUploadSpeedLimit,o.model.ServerIp=t.ServerConfig.Ip=e.ServerConfig.Ip,o.model.ServerUdpPort=t.ServerConfig.UdpPort=e.ServerConfig.UdpPort,o.model.ServerTcpPort=t.ServerConfig.TcpPort=e.ServerConfig.TcpPort,o.model.ServerEncode=t.ServerConfig.Encode=e.ServerConfig.Encode,o.model.ServerEncodePassword=t.ServerConfig.ServerEncodePassword=e.ServerConfig.EncodePassword})).catch((function(e){}))},n=function(){e.value.validate((function(e){if(!e)return!1;var n={ClientConfig:{ShortId:+o.model.ShortId,Name:o.model.ClientName,GroupId:o.model.GroupId,AutoReg:o.model.AutoReg,AutoRegTimes:+o.model.AutoRegTimes,AutoRegInterval:+o.model.AutoRegInterval,AutoRegDelay:+o.model.AutoRegDelay,Encode:o.model.ClientEncode,EncodePassword:o.model.ClientEncodePassword,UsePunchHole:o.model.UsePunchHole,TimeoutDelay:+o.model.TimeoutDelay,UseUdp:o.model.UseUdp,UseTcp:o.model.UseTcp,UseRelay:o.model.UseRelay,UseIpv6:o.model.UseIpv6,BindIp:o.model.BindIp,UseOriginPort:o.model.UseOriginPort,UseReConnect:o.model.UseReConnect,UdpUploadSpeedLimit:+o.model.UdpUploadSpeedLimit},ServerConfig:{Ip:o.model.ServerIp,UdpPort:+o.model.ServerUdpPort,TcpPort:+o.model.ServerTcpPort,Encode:o.model.ServerEncode,EncodePassword:o.model.ServerEncodePassword}};t.LocalInfo.IsConnecting=!0,Object(P["d"])(n).then((function(){Object(P["c"])().then((function(e){r()})).catch((function(e){R["a"].error(e)}))})).catch((function(e){R["a"].error(e)}))}))},l=function(){Object(P["b"])()};return Object(T["rb"])((function(){r()})),Object(_["a"])(Object(_["a"])({},Object(S["z"])(o)),{},{signInState:t,formDom:e,handleSubmit:n,handleExit:l})}},A=(o("1586"),o("6b0d")),k=o.n(A);const D=k()(E,[["render",v],["__scopeId","data-v-5af23bb0"]]);t["default"]=D}}]);