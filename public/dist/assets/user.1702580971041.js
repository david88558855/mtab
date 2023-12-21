import{r as e,b as l,c as a,d as t,e as i,k as n,h as o,S as r,Y as d,g as u,m as p}from"./index.1702580971041.js";const m={class:"userManager"},s={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},g={class:"mt-4 p-4 bg-white rounded-lg overflow-hidden w-full"},c={__name:"user",setup(c){const v={mail:"",password:"",manager:0},h=e(Object.assign({},v)),f=e(!1),_=e({email:""}),b=()=>{r({url:"/admin/userUpdate",method:"post",data:h.value}).then((e=>{1===e.code&&(f.value=!1,y())}))},w=e({current_page:1,per_page:50,total:0,refresh(e){w.value.current_page=e,y()}}),V=e([]),y=()=>{r({url:"/admin/UserList",method:"post",data:{search:_.value,page:w.value.current_page,limit:w.value.per_page}}).then((e=>{let l=e.data;V.value=l.data,Object.assign(w.value,l)}))};return y(),(e,r)=>{const c=l("el-input"),x=l("el-button"),k=l("el-table-column"),C=l("el-tag"),U=l("el-table"),z=l("el-pagination"),j=l("el-form-item"),I=l("el-option"),O=l("el-select"),P=l("el-form"),D=l("el-dialog");return a(),t("div",m,[i("div",s,[n(c,{modelValue:_.value.email,"onUpdate:modelValue":r[0]||(r[0]=e=>_.value.email=e),style:{width:"200px"},placeholder:"邮箱",clearable:""},null,8,["modelValue"]),n(x,{onClick:y,type:"primary"},{default:o((()=>[d("搜索")])),_:1})]),i("div",g,[n(U,{data:V.value,height:"calc(100vh - 203px)",he:""},{default:o((()=>[n(k,{prop:"id",label:"用户ID",align:"center","min-width":"100"}),n(k,{prop:"mail",label:"邮箱",align:"center","min-width":"200"}),n(k,{prop:"login_ip",label:"登录IP",align:"center","min-width":"200"}),n(k,{prop:"login_time",label:"上次登录时间",align:"center","min-width":"200"}),n(k,{prop:"register_ip",label:"注册IP",align:"center","min-width":"200"}),n(k,{prop:"create_time",label:"注册时间",align:"center","min-width":"200"}),n(k,{prop:"login_fail_count",label:"登录失败次数",align:"center","min-width":"150"}),n(k,{prop:"manager",label:"权限",align:"center","min-width":"100"},{default:o((e=>[0===e.row.manager?(a(),u(C,{key:0,type:"info",size:"small"},{default:o((()=>[d("用户")])),_:1})):p("",!0),1===e.row.manager?(a(),u(C,{key:1,type:"danger",size:"small"},{default:o((()=>[d("管理员")])),_:1})):p("",!0)])),_:1}),n(k,{fixed:"right",label:"操作","min-width":"80",align:"center"},{default:o((e=>[n(x,{type:"primary",onClick:l=>{return a=e.row,h.value=Object.assign({},v,a),void(f.value=!0);var a},size:"small"},{default:o((()=>[d("操作")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),n(z,{onCurrentChange:w.value.refresh,"page-size":50,class:"mt-6",layout:"total,prev, pager, next",total:w.value.total},null,8,["onCurrentChange","total"])]),n(D,{title:"编辑用户",modelValue:f.value,"onUpdate:modelValue":r[5]||(r[5]=e=>f.value=e),width:600,"close-on-click-modal":!1},{default:o((()=>[n(P,{modelValue:h.value,"onUpdate:modelValue":r[4]||(r[4]=e=>h.value=e),"label-width":"100px","label-position":"top"},{default:o((()=>[n(j,{label:"邮箱"},{default:o((()=>[n(c,{modelValue:h.value.mail,"onUpdate:modelValue":r[1]||(r[1]=e=>h.value.mail=e),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),n(j,{label:"设置密码"},{default:o((()=>[n(c,{modelValue:h.value.password,"onUpdate:modelValue":r[2]||(r[2]=e=>h.value.password=e),placeholder:"请设置新密码,否则请留空"},null,8,["modelValue"])])),_:1}),n(j,{label:"是否管理员"},{default:o((()=>[n(O,{modelValue:h.value.manager,"onUpdate:modelValue":r[3]||(r[3]=e=>h.value.manager=e),class:"w-full",placeholder:"请选择"},{default:o((()=>[n(I,{label:"用户",value:0}),n(I,{label:"管理员",value:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),n(x,{class:"mt-4 w-full",onClick:b,type:"primary",size:"large"},{default:o((()=>[d("提交")])),_:1})])),_:1},8,["modelValue"])])}}};export{c as default};
