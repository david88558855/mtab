import{u as e,r as a,K as t,b as o,c as l,d as s,e as n,j as c,k as i,h as r,C as d,a3 as m,J as u,E as g,V as f}from"./index.1712150016841.js";import{a as b}from"./href.1712150016841.js";import"./dialog.1712150016841.js";const p={class:"theme-control space-y-2"},h={class:"labelItem relative"},k=["src"],w=["src"],y={class:"absolute bottom-7 w-full flex justify-center left-0"},v={class:"labelItem h-11"},x=n("span",{class:"flex-shrink-0"},"背景模糊值",-1),C={class:"labelItem h-11"},_=n("span",{class:"flex-shrink-0"},"遮罩透明度",-1),j={__name:"wallpaper",setup(j){const I=e(),V=a(""),M={userid:t.get("user_id"),token:t.get("token","")},U=e=>{1===e.code?(I.state.config.theme.backgroundImage=e.data.url,I.state.config.theme.backgroundMime=0,I.commit("updateConfig")):u.warning(e.msg)},B=()=>{b("tab://background"),g.emit("openController",!1)},D=async()=>{const e=await f({url:"/api/DefBg"});I.state.config.theme.backgroundImage=e.data.background,I.state.config.theme.backgroundMime=e.data.mime,I.commit("updateConfig")};return(e,a)=>{var t,u;const g=o("el-button"),f=o("el-upload"),b=o("el-slider");return l(),s("div",p,[n("div",h,[0===c(I).state.config.theme.backgroundMime?(l(),s("img",{key:0,class:"rounded-lg w-full",style:{"aspect-ratio":"10 / 5.625","object-fit":"cover"},ref_key:"image",ref:V,src:null==(u=null==(t=c(I).state.config)?void 0:t.theme)?void 0:u.backgroundImage,alt:"壁纸"},null,8,k)):(l(),s("video",{key:1,ref_key:"image",ref:V,controlsList:"nodownload nofullscreen noremoteplayback",class:"rounded-lg w-full",style:{"aspect-ratio":"10 / 5.625","object-fit":"cover"},src:c(I).state.config.theme.backgroundImage,autoplay:"",loop:"",muted:""},null,8,w)),n("div",y,[i(f,{headers:M,class:"upload-demo","show-file-list":!1,"on-success":U,action:c(m)+c(I).state.site.upload},{default:r((()=>[i(g,{class:"bg-black border-none text-white mr-3"},{default:r((()=>[d("上传")])),_:1})])),_:1},8,["action"]),i(g,{class:"bg-black border-none text-white",onClick:B},{default:r((()=>[d("在线壁纸")])),_:1}),i(g,{class:"bg-black border-none text-white",onClick:D},{default:r((()=>[d("默认")])),_:1})])]),n("div",v,[x,i(b,{class:"w-9/12 ml-4",onChange:a[0]||(a[0]=e=>c(I).commit("updateConfig")),max:20,modelValue:c(I).state.config.theme.blur,"onUpdate:modelValue":a[1]||(a[1]=e=>c(I).state.config.theme.blur=e)},null,8,["modelValue"])]),n("div",C,[_,i(b,{class:"w-9/12 ml-4",onChange:a[2]||(a[2]=e=>c(I).commit("updateConfig")),max:1,step:.01,modelValue:c(I).state.config.theme.opacity,"onUpdate:modelValue":a[3]||(a[3]=e=>c(I).state.config.theme.opacity=e)},null,8,["step","modelValue"])])])}}};export{j as default};
