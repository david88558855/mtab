import{r as s,c as a,d as e,e as t,j as l,t as o,B as n,C as c,N as i,u as r,p as d,b as p,g as m,h as u,f as v,k as _,n as h,T as x,F as g,ab as w}from"./index.1702580971041.js";const E={class:"control-menu-item select-none"},H=["src"],V={class:"mxs:hidden"},b={__name:"control-menu",props:{data:{type:Object}},setup(n){const c=n,i=s(c.data.name),r=c.data.icon;return(s,n)=>(a(),e("div",E,[t("img",{src:l(r),alt:"",class:"mxs:w-7 mxs:h-7 w-6 h-6"},null,8,H),t("span",V,o(i.value),1)]))}};const f={class:"control-model"},j={class:"select-none control-menu flex-shrink-0 relative"},z={class:""},C={class:"closeController"},T=[t("path",{d:"M128.9 158H898a30 30 0 0 0 0-60H128.9a30 30 0 0 0 0 60zM128.9 925.64H898a30 30 0 0 0 0-60H128.9a30 30 0 1 0 0 60zM128.9 416H573a32.16 32.16 0 0 0 0-64.32H128.9a32.16 32.16 0 0 0 0 64.32zM128.9 671.92H573a32.16 32.16 0 0 0 0-64.32H128.9a32.16 32.16 0 0 0 0 64.32zM923.37 523.21L728.72 664.49a14.34 14.34 0 0 1-22.72-11.6V370.33a14.34 14.34 0 0 1 22.76-11.6L923.37 500a14.33 14.33 0 0 1 0 23.21z","p-id":"4964"},null,-1)],k={class:"control-setting select-none"},L={class:"control-setting-top p-3 pt-5"},M={class:"text-2xl"},y={class:"text-sm mt-2"},O={class:"control-box"},A={__name:"controller",setup(E){const H=window.isMobile,V=[{name:"个人中心",tips:"个人信息管理",icon:"/dist/assets/cover.1702580971041.svg",url:n((()=>c((()=>import("./user.17025809710412.js")),["assets/user.17025809710412.js","assets/user.1702580971041.css","assets/index.1702580971041.js","assets/index.17025809710415.css"])))},{name:"打开方式",tips:"搜索和标签打开方式",icon:"/dist/assets/openType.1702580971041.svg",url:n((()=>c((()=>import("./openType.1702580971041.js")),["assets/openType.1702580971041.js","assets/openType.1702580971041.css","assets/index.1702580971041.js","assets/index.17025809710415.css"])))},{name:"主题壁纸",tips:"主题自定义美化",icon:"/dist/assets/theme.1702580971041.svg",url:n((()=>c((()=>import("./theme.1702580971041.js")),["assets/theme.1702580971041.js","assets/index.1702580971041.js","assets/index.17025809710415.css"])))},{name:"关于",tips:"关于我们,产品反馈",icon:"/dist/assets/about.1702580971041.svg",url:n((()=>c((()=>import("./about.1702580971041.js")),["assets/about.1702580971041.js","assets/about.1702580971041.css","assets/index.1702580971041.js","assets/index.17025809710415.css"])))}],A=i(V[0]);r();const D=s(!1);return d.on("openController",((s=!0)=>{D.value=s})),(s,n)=>{const c=p("el-drawer");return a(),m(c,{modelValue:D.value,"onUpdate:modelValue":n[1]||(n[1]=s=>D.value=s),"lock-scroll":!0,"custom-class":"controller",size:l(H)?"360px":"460px","with-header":!1},{default:u((()=>[t("div",f,[t("div",j,[t("div",{style:{width:"100%",height:"100px"}},[t("img",{src:"/favicon",class:"select-none m-auto pt-5",style:{height:"80px"},alt:""})]),t("div",z,[(a(),e(g,null,v(V,((s,a)=>_(x,null,{default:u((()=>[_(b,{data:s,onClick:a=>(s=>{A.value=s})(s),class:h(l(A).name==s.name?"selectControl":"")},null,8,["data","onClick","class"])])),_:2},1024))),64))]),t("div",C,[(a(),e("svg",{onClick:n[0]||(n[0]=s=>D.value=!1),t:"1686737831621",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4963",width:"32",height:"32"},T))])]),t("div",k,[t("div",L,[t("span",M,o(l(A).name),1),t("p",y,o(l(A).tips),1)]),t("div",O,[(a(),m(w(l(A).url)))])])])])),_:1},8,["modelValue","size"])}}};export{A as default};
