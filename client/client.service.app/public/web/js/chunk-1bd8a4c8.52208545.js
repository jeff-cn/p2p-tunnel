(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bd8a4c8"],{"1a37":function(e,t,o){var n=o("e995");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("ebddeaf6",n,!0,{sourceMap:!1,shadowMode:!1})},"3c03":function(e,t,o){var n=o("870b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("14cf0b9e",n,!0,{sourceMap:!1,shadowMode:!1})},"49f5":function(e,t,o){"use strict";var n=o("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-f29e7028"),e=e(),Object(n["popScopeId"])(),e},l=Object(n["createTextVNode"])("配置"),c=r((function(){return Object(n["createElementVNode"])("div",{class:"t-c w-100"},"无内容，或配置失败，为未注册或未拥有配置权限",-1)})),d=Object(n["createTextVNode"])("取 消"),a=Object(n["createTextVNode"])("确 定");function u(e,t,o,r,u,i){var f=Object(n["resolveComponent"])("el-button"),m=Object(n["resolveComponent"])("el-input"),b=Object(n["resolveComponent"])("el-form-item"),s=Object(n["resolveComponent"])("el-form"),p=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("span",{onClick:t[0]||(t[0]=function(){return r.handleEdit&&r.handleEdit.apply(r,arguments)})},[Object(n["renderSlot"])(e.$slots,"default",{},(function(){return[Object(n["createVNode"])(f,{size:"small"},{default:Object(n["withCtx"])((function(){return[l]})),_:1})]}),!0)]),Object(n["createVNode"])(p,{title:"配置",modelValue:e.showAdd,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.showAdd=t}),center:"","close-on-click-modal":!1,"append-to-body":"",width:"80rem"},{footer:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{onClick:t[2]||(t[2]=function(t){return e.showAdd=!1})},{default:Object(n["withCtx"])((function(){return[d]})),_:1}),Object(n["createVNode"])(f,{type:"primary",loading:e.loading,onClick:r.handleSubmit},{default:Object(n["withCtx"])((function(){return[a]})),_:1},8,["loading","onClick"])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{label:"",prop:"Content","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{type:"textarea",modelValue:e.form.Content,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.Content=t}),autosize:{minRows:10,maxRows:30}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(b,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[c]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])],64)}var i=o("5530"),f=o("a1e9"),m=o("dd69"),b=o("3ef4"),s={props:["className"],emits:["success"],setup:function(e,t){var o=t.emit,n=Object(f["p"])({loading:!1,showAdd:!1,showEditor:!1,form:{ClassName:e.className,Content:""},rules:{}}),r=function(){n.showAdd=!0,n.showEditor=!1,Object(m["a"])(n.form.ClassName).then((function(e){n.form.Content=e}))},l=Object(f["r"])(null),c=function(){l.value.validate((function(e){if(!e)return!1;n.loading=!0,Object(m["c"])(n.form.ClassName,n.form.Content).then((function(e){e?b["a"].error(e):(n.loading=!1,n.showAdd=!1,b["a"].success("已保存"),o("success"))})).catch((function(e){b["a"].error(e),n.loading=!1}))}))};return Object(i["a"])(Object(i["a"])({},Object(f["z"])(n)),{},{formDom:l,handleEdit:r,handleSubmit:c})}},p=(o("fb9c"),o("56d2"),o("6b0d")),O=o.n(p);const j=O()(s,[["render",u],["__scopeId","data-v-f29e7028"]]);t["a"]=j},"56d2":function(e,t,o){"use strict";o("1a37")},"73cf":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-2cfdb8b8"),e=e(),Object(n["popScopeId"])(),e},l={class:"register-form"},c=r((function(){return Object(n["createElementVNode"])("h3",{class:"title t-c"},"将本客户端注册到服务器",-1)})),d={class:"t-c w-100",style:{"padding-bottom":".6rem"}},a=Object(n["createTextVNode"])("服务端配置"),u=Object(n["createTextVNode"])("服务端权限配置"),i={class:"inner"},f=Object(n["createTextVNode"])("使用ipv6"),m=Object(n["createTextVNode"])("自动注册"),b=Object(n["createTextVNode"])("p2p加密"),s=Object(n["createTextVNode"])("注册加密"),p=Object(n["createTextVNode"])("使用udp"),O=Object(n["createTextVNode"])("使用tcp"),j=Object(n["createTextVNode"])("使用原端口"),C=Object(n["createTextVNode"])("自动打洞"),g=Object(n["createTextVNode"])("断线重连"),V=Object(n["createTextVNode"])("> "),x=Object(n["createTextVNode"])("中继节点"),h=Object(n["createTextVNode"])("> "),w={class:"t-c w-100"},N=Object(n["createTextVNode"])("注册"),v=Object(n["createTextVNode"])("退出");function U(e,t,o,r,U,_){var S=Object(n["resolveComponent"])("el-button"),I=Object(n["resolveComponent"])("ConfigureModal"),R=Object(n["resolveComponent"])("el-input"),T=Object(n["resolveComponent"])("el-form-item"),y=Object(n["resolveComponent"])("el-col"),P=Object(n["resolveComponent"])("el-popover"),E=Object(n["resolveComponent"])("el-tooltip"),A=Object(n["resolveComponent"])("el-row"),k=Object(n["resolveComponent"])("el-checkbox"),D=Object(n["resolveComponent"])("el-collapse-item"),B=Object(n["resolveComponent"])("el-collapse"),L=Object(n["resolveComponent"])("el-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[c,Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(I,{className:"ServerConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,{size:"small"},{default:Object(n["withCtx"])((function(){return[a]})),_:1})]})),_:1}),Object(n["createVNode"])(I,{className:"ServiceAccessrConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,{size:"small"},{default:Object(n["withCtx"])((function(){return[u]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(L,{"label-width":"8rem",ref:"formDom",model:e.model,rules:e.rules},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"名称",prop:"Name"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.Name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model.Name=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的注册名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"短id",prop:"ShortId"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{placement:"top-start",title:"短id",trigger:"hover",content:"暂不可用"},{reference:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.ShortId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model.ShortId=t}),readonly:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"分组",prop:"GroupId"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"设置你的分组编号，两个客户端之间分组编号一致时相互可见",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{type:"password","show-password":"",modelValue:e.model.GroupId,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model.GroupId=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的分组编号"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"注册地址",prop:"ServerIp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.ServerIp,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.model.ServerIp=t}),placeholder:"域名或IP地址"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"udp端口",prop:"ServerUdpPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.ServerUdpPort,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.model.ServerUdpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"tcp端口",prop:"ServerTcpPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.ServerTcpPort,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.model.ServerTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(B,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(D,{title:"可选和其它",name:"1"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"ipv6",prop:"UseIpv6"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UseIpv6,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.model.UseIpv6=t}),disabled:""},{default:Object(n["withCtx"])((function(){return[f]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"绑定ip",prop:"BindIp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.BindIp,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.model.BindIp=t}),placeholder:"绑定ip",readonly:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"udp限速",prop:"UdpUploadSpeedLimit"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"udp发送速度限制（字节数,0不限制）",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.UdpUploadSpeedLimit,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.model.UdpUploadSpeedLimit=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"自动注册",prop:"AutoReg"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.AutoReg,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.model.AutoReg=t})},{default:Object(n["withCtx"])((function(){return[m]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"次数",prop:"AutoRegTimes"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"如果自动注册失败，将要重试几次",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.AutoRegTimes,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.model.AutoRegTimes=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"间隔",prop:"AutoRegInterval"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"间隔多久重试一次(ms)",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.AutoRegInterval,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.model.AutoRegInterval=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"延迟",prop:"AutoRegDelay"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"断线后多久重试",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.AutoRegDelay,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.model.AutoRegDelay=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"加密",prop:"ClientEncode"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"客户端之间通信使用加密",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.ClientEncode,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.model.ClientEncode=t})},{default:Object(n["withCtx"])((function(){return[b]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"密钥",prop:"ClientEncodePassword"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"加密密钥32位，为空则每次加密随机密钥，如果填写，则各客户端都填写",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ClientEncodePassword,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.model.ClientEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"加密",prop:"ServerEncode"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"客户端与服务端之间通信使用加密",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.ServerEncode,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.model.ServerEncode=t})},{default:Object(n["withCtx"])((function(){return[s]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"密钥",prop:"ServerEncodePassword"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"加密密钥 32位，为空则每次加密随机密钥，使用p2p.snltty.com服务器则必须留空",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ServerEncodePassword,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.model.ServerEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"udp",prop:"UseUdp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否使用udp",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UseUdp,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.model.UseUdp=t})},{default:Object(n["withCtx"])((function(){return[p]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"tcp",prop:"UseTcp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否使用tcp",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UseTcp,"onUpdate:modelValue":t[18]||(t[18]=function(t){return e.model.UseTcp=t})},{default:Object(n["withCtx"])((function(){return[O]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"原端口",prop:"UseOriginPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否使用原端口打洞",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UseOriginPort,"onUpdate:modelValue":t[19]||(t[19]=function(t){return e.model.UseOriginPort=t})},{default:Object(n["withCtx"])((function(){return[j]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"掉线超时",prop:"TimeoutDelay"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"多久时间无法连通则掉线ms,使用5的倍数",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{modelValue:e.model.TimeoutDelay,"onUpdate:modelValue":t[20]||(t[20]=function(t){return e.model.TimeoutDelay=t}),placeholder:"掉线超时"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{label:"","label-width":"80"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"自动打洞",prop:"UsePunchHole"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"发现新客户端后是否自动打洞",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UsePunchHole,"onUpdate:modelValue":t[21]||(t[21]=function(t){return e.model.UsePunchHole=t})},{default:Object(n["withCtx"])((function(){return[C]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"重连",prop:"UseReConnect"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"客户端之间掉线后，是否尝试重新连接",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UseReConnect,"onUpdate:modelValue":t[22]||(t[22]=function(t){return e.model.UseReConnect=t})},{default:Object(n["withCtx"])((function(){return[g]})),_:1},8,["modelValue"]),V]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(y,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{label:"中继节点",prop:"UseRelay"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{class:"box-item",effect:"dark",content:"是否允许本客户端作为中继节点",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:e.model.UseRelay,"onUpdate:modelValue":t[23]||(t[23]=function(t){return e.model.UseRelay=t})},{default:Object(n["withCtx"])((function(){return[x]})),_:1},8,["modelValue"]),h]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{label:"","label-width":"0",class:"t-c last"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",w,[Object(n["createVNode"])(S,{type:"primary",size:"large",loading:r.signInState.LocalInfo.IsConnecting,onClick:r.handleSubmit},{default:Object(n["withCtx"])((function(){return[N]})),_:1},8,["loading","onClick"]),r.signInState.LocalInfo.UdpConnected||r.signInState.LocalInfo.TcpConnected?(Object(n["openBlock"])(),Object(n["createBlock"])(S,{key:0,type:"info",size:"large",loading:r.signInState.LocalInfo.IsConnecting,onClick:r.handleExit},{default:Object(n["withCtx"])((function(){return[v]})),_:1},8,["loading","onClick"])):Object(n["createCommentVNode"])("",!0)])]})),_:1})]})),_:1},8,["model","rules"])])])}var _=o("5530"),S=(o("a9e3"),o("e9c4"),o("d3b7"),o("3ca3"),o("ddb0"),o("a1e9")),I=o("9709"),R=o("ea39"),T=o("3ef4"),y=o("5c40"),P=o("49f5"),E={components:{ConfigureModal:P["a"]},setup:function(){var e=Object(S["r"])(null),t=Object(I["a"])(),o=Object(S["p"])({model:{ShortId:0,Name:"",ServerIp:"",ServerUdpPort:0,ServerTcpPort:0,AutoReg:!1,AutoRegTimes:10,AutoRegInterval:5e3,AutoRegDelay:5e3,GroupId:"",ClientEncode:!1,ClientEncodePassword:"",ServerEncode:!1,ServerEncodePassword:"",UsePunchHole:!1,TimeoutDelay:2e4,UseUdp:!1,UseTcp:!1,UseRelay:!0,UseIpv6:!1,BindIp:"0.0.0.0",UseOriginPort:!0,UseReConnect:!1,UdpUploadSpeedLimit:0},rules:{Name:[{required:!0,message:"必填",trigger:"blur"}],ServerIp:[{required:!0,message:"必填",trigger:"blur"}],AutoRegTimes:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegInterval:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],TimeoutDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ServerUdpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],ServerTcpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],UdpUploadSpeedLimit:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:2147483647,message:"数字 0-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ShortId:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:255,message:"数字 0-255",trigger:"blur",transform:function(e){return Number(e)}}]}}),n={},r=function(){Object(R["a"])().then((function(e){n=e,o.model.ShortId=t.ClientConfig.ShortId=n.ClientConfig.ShortId,o.model.Name=t.ClientConfig.Name=n.ClientConfig.Name,o.model.GroupId=t.ClientConfig.GroupId=n.ClientConfig.GroupId,o.model.AutoReg=t.ClientConfig.AutoReg=n.ClientConfig.AutoReg,o.model.AutoRegTimes=t.ClientConfig.AutoRegTimes=n.ClientConfig.AutoRegTimes,o.model.AutoRegInterval=t.ClientConfig.AutoRegInterval=n.ClientConfig.AutoRegInterval,o.model.AutoRegDelay=t.ClientConfig.AutoRegDelay=n.ClientConfig.AutoRegDelay,o.model.ClientEncode=t.ClientConfig.Encode=n.ClientConfig.Encode,o.model.ClientEncodePassword=t.ClientConfig.ClientEncodePassword=n.ClientConfig.EncodePassword,o.model.UsePunchHole=t.ClientConfig.UsePunchHole=n.ClientConfig.UsePunchHole,o.model.UseReConnect=t.ClientConfig.UseReConnect=n.ClientConfig.UseReConnect,o.model.TimeoutDelay=t.ClientConfig.TimeoutDelay=n.ClientConfig.TimeoutDelay,o.model.UseIpv6=t.ClientConfig.UseIpv6=n.ClientConfig.UseIpv6,o.model.BindIp=t.ClientConfig.BindIp=n.ClientConfig.BindIp,o.model.UseUdp=t.ClientConfig.UseUdp=n.ClientConfig.UseUdp,o.model.UseTcp=t.ClientConfig.UseTcp=n.ClientConfig.UseTcp,o.model.UseRelay=t.ClientConfig.UseRelay=n.ClientConfig.UseRelay,o.model.UseOriginPort=t.ClientConfig.UseOriginPort=n.ClientConfig.UseOriginPort,o.model.UdpUploadSpeedLimit=t.ClientConfig.UdpUploadSpeedLimit=n.ClientConfig.UdpUploadSpeedLimit,o.model.ServerIp=t.ServerConfig.Ip=n.ServerConfig.Ip,o.model.ServerUdpPort=t.ServerConfig.UdpPort=n.ServerConfig.UdpPort,o.model.ServerTcpPort=t.ServerConfig.TcpPort=n.ServerConfig.TcpPort,o.model.ServerEncode=t.ServerConfig.Encode=n.ServerConfig.Encode,o.model.ServerEncodePassword=t.ServerConfig.ServerEncodePassword=n.ServerConfig.EncodePassword})).catch((function(e){}))},l=function(){e.value.validate((function(e){if(!e)return!1;var l=JSON.parse(JSON.stringify(n));l.ClientConfig.ShortId=+o.model.ShortId,l.ClientConfig.Name=o.model.Name,l.ClientConfig.GroupId=o.model.GroupId,l.ClientConfig.AutoReg=o.model.AutoReg,l.ClientConfig.AutoRegTimes=+o.model.AutoRegTimes,l.ClientConfig.AutoRegInterval=+o.model.AutoRegInterval,l.ClientConfig.AutoRegDelay=+o.model.AutoRegDelay,l.ClientConfig.Encode=o.model.ClientEncode,l.ClientConfig.EncodePassword=o.model.ClientEncodePassword,l.ClientConfig.UsePunchHole=o.model.UsePunchHole,l.ClientConfig.TimeoutDelay=+o.model.TimeoutDelay,l.ClientConfig.UseUdp=o.model.UseUdp,l.ClientConfig.UseTcp=o.model.UseTcp,l.ClientConfig.UseRelay=o.model.UseRelay,l.ClientConfig.UseIpv6=o.model.UseIpv6,l.ClientConfig.BindIp=o.model.BindIp,l.ClientConfig.UseOriginPort=o.model.UseOriginPort,l.ClientConfig.UseReConnect=o.model.UseReConnect,l.ClientConfig.UdpUploadSpeedLimit=+o.model.UdpUploadSpeedLimit,l.ServerConfig.Ip=o.model.ServerIp,l.ServerConfig.UdpPort=+o.model.ServerUdpPort,l.ServerConfig.TcpPort=+o.model.ServerTcpPort,l.ServerConfig.Encode=o.model.ServerEncode,l.ServerConfig.EncodePassword=o.model.ServerEncodePassword,t.LocalInfo.IsConnecting=!0,Promise.all([Object(R["b"])(),Object(R["d"])(l)]).then((function(){Object(R["c"])().then((function(e){r()})).catch((function(e){T["a"].error(e)}))})).catch((function(e){T["a"].error(e)}))}))},c=function(){Object(R["b"])()};return Object(y["rb"])((function(){r()})),Object(_["a"])(Object(_["a"])({},Object(S["z"])(o)),{},{signInState:t,formDom:e,handleSubmit:l,handleExit:c})}},A=(o("dec6"),o("6b0d")),k=o.n(A);const D=k()(E,[["render",U],["__scopeId","data-v-2cfdb8b8"]]);t["default"]=D},"7ebf":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".el-row[data-v-2cfdb8b8]{width:100%}.el-form-item.last[data-v-2cfdb8b8]{margin-bottom:0}.register-form[data-v-2cfdb8b8]{padding:2rem}.register-form .inner[data-v-2cfdb8b8]{border:1px solid #eee;padding:2rem;border-radius:4px}.el-collapse[data-v-2cfdb8b8]{margin-bottom:1rem}@media screen and (max-width:768px){.el-col[data-v-2cfdb8b8]{margin-top:.6rem}}",""]),e.exports=t},"870b":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,"#editor[data-v-f29e7028]{width:100%}",""]),e.exports=t},d336:function(e,t,o){var n=o("7ebf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("50b70682",n,!0,{sourceMap:!1,shadowMode:!1})},dec6:function(e,t,o){"use strict";o("d336")},e995:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".jsoneditor-outer{height:30rem;margin:0;padding:0;border:1px solid #ddd}.jsoneditor-statusbar,div.jsoneditor-menu{display:none}",""]),e.exports=t},fb9c:function(e,t,o){"use strict";o("3c03")}}]);