import{r as a,u as l,b as s,c as e,d as t,e as i,k as n,j as o,af as u,aa as c,F as d,f as r,n as v,t as m,h as p,ag as k,W as f,g as x,m as g,S as h,a8 as y}from"./index.1697113787653.js";import{a as C}from"./href.1697113787653.js";const _={class:"onlinemall"},j={class:"px-4 w-2/3 m-auto"},z={class:"linkarea space-x-2 mt-4"},b=["onClick"],S={class:"linkscroll"},w={class:"linklist grid grid-cols-3 mt-2"},L={class:"links"},V=["src"],K={class:"linkTips"},F={class:"text-sm font-bold"},M={class:"text-xs"},T={class:"mt-2 flex items-center justify-end"},U={class:"flex justify-center"},W={__name:"onlineMall",setup(W){const q=a(["系统","推荐","在线工具","资讯","开发","设计","效率","娱乐","社交","阅读","金融","综合"]),A=l(),B=a("系统"),D=a(""),E=a(1),G=a(0),H=a([]),I=()=>{h({url:"/LinkStore/list",method:"post",data:{area:B.value,name:D.value,page:E.value}}).then((a=>{H.value=a.data.data,G.value=a.data.total}))},J=a=>{E.value=a,I()};return I(),(a,l)=>{const W=s("el-input"),N=s("el-icon"),O=s("el-button"),P=s("el-pagination");return e(),t("div",_,[i("div",j,[n(W,{modelValue:D.value,"onUpdate:modelValue":l[0]||(l[0]=a=>D.value=a),class:"iconSearch",placeholder:"搜索标签","suffix-icon":o(u),onKeydown:c(I,["enter"])},null,8,["modelValue","suffix-icon","onKeydown"])]),i("div",z,[(e(!0),t(d,null,r(q.value,(a=>(e(),t("div",{class:v(a===B.value?"text-rose-600":""),onClick:l=>(a=>{a!==B.value&&(B.value=a,E.value=1,I())})(a)},m(a),11,b)))),256))]),i("div",S,[i("div",w,[(e(!0),t(d,null,r(H.value,(a=>(e(),t("div",{key:a.id},[i("div",L,[i("img",{src:a.src,class:"linklogo",alt:""},null,8,V),i("div",K,[i("span",F,m(a.name),1),i("div",M,m(a.tips),1)])]),i("div",T,[n(N,{size:"20px",class:"hover:text-blue-400 hover",onClick:l=>o(C)(a.url,!0)},{default:p((()=>[n(o(k))])),_:2},1032,["onClick"]),n(O,{size:"small",class:"ml-2",round:"",onClick:l=>(a=>{let l={sort:99999,id:y(),name:a.name,size:a.size,src:a.src,url:a.url,type:a.type,app:a.app,origin_id:a.id};A.state.link.push(l),A.commit("updateLink"),h({url:"/LinkStore/install_num",method:"post",data:{id:a.id}}).finally((a=>{}))})(a)},{default:p((()=>[f("添加")])),_:2},1032,["onClick"])])])))),128))]),i("div",U,[G.value>15?(e(),x(P,{key:0,layout:"prev, pager, next","page-size":15,total:G.value,onCurrentChange:J},null,8,["total"])):g("",!0)])])])}}};export{W as default};
