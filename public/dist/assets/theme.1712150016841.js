import{u as e,b as a,c as l,d as t,e as o,k as s,j as n,aq as m,an as i,ar as c}from"./index.1712150016841.js";import"./href.1712150016841.js";import"./dialog.1712150016841.js";const d={class:"theme-control space-y-2"},u={class:"labelItem h-11"},h=o("span",{class:"flex-shrink-0"},"开启Dock栏",-1),p={class:"labelItem h-11"},g=o("span",{class:"flex-shrink-0"},"时钟字体颜色",-1),f={class:"ml-auto"},r={class:"labelItem h-11"},V=o("span",{class:"flex-shrink-0"},"图标字体颜色",-1),C={class:"ml-auto"},x={class:"labelItem h-11"},b=o("span",{class:"flex-shrink-0"},"图标背景",-1),k={class:"labelItem h-11"},v=o("span",{class:"flex-shrink-0"},"图标大小",-1),I={class:"labelItem h-11"},U=o("span",{class:"flex-shrink-0"},"图标圆角",-1),G={class:"labelItem h-11"},j=o("span",{class:"flex-shrink-0"},"图标列距",-1),w={class:"labelItem h-11"},W=o("span",{class:"flex-shrink-0"},"标签Tooltip文字提示",-1),T={class:"labelItem h-11"},B=o("span",{class:"flex-shrink-0"},"页面分类功能开关",-1),L={class:"labelItem h-11"},R=o("span",{class:"flex-shrink-0"},"页面分类自动隐藏",-1),S={__name:"theme",setup(S){const _=e(),q=e=>{_.commit("updateConfig"),m(e)},y=e=>{i("--iconWidth",_.state.config.theme.iconWidth+"px"),_.commit("updateConfig")},D=()=>{_.commit("updateConfig")},z=()=>{_.commit("updateConfig"),c(_.state.config.theme.nameColor)};return(e,m)=>{const i=a("el-switch"),c=a("el-color-picker"),S=a("el-slider");return l(),t("div",d,[o("div",u,[h,s(i,{onChange:m[0]||(m[0]=e=>n(_).commit("updateConfig")),modelValue:n(_).state.config.theme.tabbar,"onUpdate:modelValue":m[1]||(m[1]=e=>n(_).state.config.theme.tabbar=e),class:"ml-auto"},null,8,["modelValue"])]),o("div",p,[g,o("div",f,[s(c,{modelValue:n(_).state.config.theme.timeColor,"onUpdate:modelValue":m[2]||(m[2]=e=>n(_).state.config.theme.timeColor=e),onChange:D},null,8,["modelValue"])])]),o("div",r,[V,o("div",C,[s(c,{modelValue:n(_).state.config.theme.nameColor,"onUpdate:modelValue":m[3]||(m[3]=e=>n(_).state.config.theme.nameColor=e),onChange:z},null,8,["modelValue"])])]),o("div",x,[b,s(i,{onChange:m[4]||(m[4]=e=>n(_).commit("updateConfig")),modelValue:n(_).state.config.theme.iconBg,"onUpdate:modelValue":m[5]||(m[5]=e=>n(_).state.config.theme.iconBg=e),class:"ml-auto"},null,8,["modelValue"])]),o("div",k,[v,s(S,{class:"w-9/12 ml-4",onChange:y,max:80,min:60,modelValue:n(_).state.config.theme.iconWidth,"onUpdate:modelValue":m[6]||(m[6]=e=>n(_).state.config.theme.iconWidth=e)},null,8,["modelValue"])]),o("div",I,[U,s(S,{class:"w-9/12 ml-4",onChange:q,min:6,max:20,modelValue:n(_).state.config.theme.iconRadius,"onUpdate:modelValue":m[7]||(m[7]=e=>n(_).state.config.theme.iconRadius=e)},null,8,["modelValue"])]),o("div",G,[j,s(S,{class:"w-9/12 ml-4",onChange:m[8]||(m[8]=e=>n(_).commit("updateConfig")),min:25,max:40,step:1,modelValue:n(_).state.config.theme.colsGap,"onUpdate:modelValue":m[9]||(m[9]=e=>n(_).state.config.theme.colsGap=e)},null,8,["modelValue"])]),o("div",w,[W,s(i,{onChange:m[10]||(m[10]=e=>n(_).commit("updateConfig")),modelValue:n(_).state.config.theme.LinkTitle,"onUpdate:modelValue":m[11]||(m[11]=e=>n(_).state.config.theme.LinkTitle=e),class:"ml-auto"},null,8,["modelValue"])]),o("div",T,[B,s(i,{onChange:m[12]||(m[12]=e=>n(_).commit("updateConfig")),modelValue:n(_).state.config.theme.pageGroup,"onUpdate:modelValue":m[13]||(m[13]=e=>n(_).state.config.theme.pageGroup=e),class:"ml-auto"},null,8,["modelValue"])]),o("div",L,[R,s(i,{onChange:m[14]||(m[14]=e=>n(_).commit("updateConfig")),modelValue:n(_).state.config.theme.pageGroupStatus,"onUpdate:modelValue":m[15]||(m[15]=e=>n(_).state.config.theme.pageGroupStatus=e),class:"ml-auto"},null,8,["modelValue"])])])}}};export{S as default};
