import{_ as T,a as W}from"./ViewControls-4fe56d83.js";import{_ as E}from"./CustomActions-a217a3f8.js";import{O as I}from"./OrganizationsIcon-ee772c59.js";import{_ as D}from"./LayoutHeader-eee8b844.js";import{_ as j}from"./OrganizationModal-6994d635.js";import{_ as S}from"./QuickEntryModal-d0d6fb81.js";import{m as B,h as H,i as R,j as L,s as J,k as Q,l as y,r as U,b as i,c,d as a,w as u,u as p,F as M,f as h,g as _,n as q,p as b,e as A,t as O,q as G}from"./index-44d5e71e.js";import{_ as K,H as N,a as X,f as Y,b as Z,g as ee,c as te,d as oe,e as le}from"./ListBulkActions-e8f07fb0.js";import{b as ae,_ as se,w as ne,h as ie,d as ue,t as re,c as de}from"./index-f8842404.js";import{_ as me}from"./Dropdown.vue_vue_type_script_setup_true_lang-12b7bb51.js";import{_ as pe}from"./ListFooter-bcd33ede.js";import"./FadedScrollableDiv-d2244b1c.js";import"./IconPicker-495e01ca.js";import"./views-c6d92e18.js";import"./DatePicker.vue_vue_type_script_setup_true_lang-794b5ef3.js";import"./PinIcon-892715bb.js";import"./settings-eb655a0b.js";import"./DetailsIcon-163fe66d.js";import"./DragVerticalIcon-a9ef58cc.js";import"./Fields-613332f3.js";import"./IndicatorIcon-8b86ca34.js";import"./AddressModal-f05a16ba.js";import"./WebsiteIcon-723387b8.js";import"./Switch.vue_vue_type_script_setup_true_lang-8c5606e7.js";import"./AssignmentModal-05490a15.js";const fe={key:0},ve=["onClick"],ce={key:1},ye={key:2},ke=["onClick"],_e={__name:"OrganizationsListView",props:B({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:B(["loadMore","updatePageCount","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(d,{expose:$,emit:V}){const m=V,s=H(),C=R(d,"modelValue"),g=R(d,"list"),x=L(()=>{var e,o;return!!((o=(e=g.value.params)==null?void 0:e.filters)!=null&&o._liked_by)}),{user:k}=J();function z(e){if(e)return JSON.parse(e).includes(k)}Q(C,(e,o)=>{e!==o&&m("updatePageCount",e)});const f=y(null);return $({customListActions:L(()=>{var e;return(e=f.value)==null?void 0:e.customListActions})}),(e,o)=>{const r=U("Button"),t=U("FormControl");return i(),c(M,null,[a(p(oe),{columns:d.columns,rows:d.rows,options:{getRowRoute:l=>({name:"Organization",params:{organizationId:l.name},query:{view:p(s).query.view,viewType:p(s).params.viewType}}),selectable:d.options.selectable,showTooltip:d.options.showTooltip,resizeColumn:d.options.resizeColumn},"row-key":"name"},{default:u(()=>[a(p(K),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:o[1]||(o[1]=l=>m("columnWidthUpdated"))},{default:u(()=>[(i(!0),c(M,null,h(d.columns,l=>(i(),_(p(X),{key:l.key,item:l,onColumnWidthUpdated:n=>m("columnWidthUpdated",l)},{default:u(()=>[l.key=="_liked_by"?(i(),_(r,{key:0,variant:"ghosted",class:q(["!h-4",x.value?"fill-red-500":"fill-white"]),onClick:o[0]||(o[0]=()=>m("applyLikeFilter"))},{default:u(()=>[a(N,{class:"h-4 w-4"})]),_:1},8,["class"])):b("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),a(p(Y),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:u(()=>[(i(!0),c(M,null,h(d.rows,l=>(i(),_(p(ee),{key:l.name,row:l},{default:u(({idx:n,column:w,item:v})=>[a(p(Z),{item:v},{prefix:u(()=>[w.key==="organization_name"?(i(),c("div",fe,[v.label?(i(),_(p(ae),{key:0,class:"flex items-center",image:v.logo,label:v.label,size:"sm"},null,8,["image","label"])):b("",!0)])):b("",!0)]),default:u(({label:P})=>[["modified","creation"].includes(w.key)?(i(),c("div",{key:0,class:"truncate text-base",onClick:F=>m("applyFilter",{event:F,idx:n,column:w,item:v,firstColumn:d.columns[0]})},[a(p(se),{text:v.label},{default:u(()=>[A("div",null,O(v.timeAgo),1)]),_:2},1032,["text"])],8,ve)):w.type==="Check"?(i(),c("div",ce,[a(t,{type:"checkbox",modelValue:v,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):w.key==="_liked_by"?(i(),c("div",ye,[w.key=="_liked_by"?(i(),_(r,{key:0,variant:"ghosted",class:q(z(v)?"fill-red-500":"fill-white"),onClick:G(()=>m("likeDoc",{name:l.name,liked:z(v)}),["stop","prevent"])},{default:u(()=>[a(N,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):b("",!0)])):(i(),c("div",{key:3,class:"truncate text-base",onClick:F=>m("applyFilter",{event:F,idx:n,column:w,item:v,firstColumn:d.columns[0]})},O(P),9,ke))]),_:2},1032,["item"])]),_:2},1032,["row"]))),128))]),_:1}),a(p(te),null,{actions:u(({selections:l,unselectAll:n})=>[a(p(me),{options:f.value.bulkActions(l,n)},{default:u(()=>[a(r,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["columns","rows","options"]),a(p(pe),{class:"border-t sm:px-5 px-3 py-2",modelValue:C.value,"onUpdate:modelValue":o[2]||(o[2]=l=>C.value=l),options:{rowCount:d.options.rowCount,totalCount:d.options.totalCount},onLoadMore:o[3]||(o[3]=l=>m("loadMore"))},null,8,["modelValue","options"]),a(le,{ref_key:"listBulkActionsRef",ref:f,modelValue:g.value,"onUpdate:modelValue":o[4]||(o[4]=l=>g.value=l),doctype:"CRM Organization",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}},Ce={key:1,class:"flex h-full items-center justify-center"},ge={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},He={__name:"Organizations",setup(d){const $=y(null),V=y(!1),m=y(!1),s=y({}),C=y(1),g=y(1),x=y(20),k=y(null),z=L(()=>{var f,e,o;return!((e=(f=s.value)==null?void 0:f.data)!=null&&e.data)||!["list","group_by"].includes(s.value.data.view_type)?[]:(o=s.value)==null?void 0:o.data.data.map(r=>{var l;let t={};return(l=s.value)==null||l.data.rows.forEach(n=>{t[n]=r[n],n==="organization_name"?t[n]={label:r.organization_name,logo:r.organization_logo}:n==="website"?t[n]=ne(r.website):n==="annual_revenue"?t[n]=ie(r.annual_revenue,r.currency):["modified","creation"].includes(n)&&(t[n]={label:ue(r[n],de),timeAgo:__(re(r[n]))})}),t})});return(f,e)=>{const o=U("FeatherIcon"),r=U("Button");return i(),c(M,null,[a(D,null,{"left-header":u(()=>[a(W,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=t=>k.value=t),routeName:"Organizations"},null,8,["modelValue"])]),"right-header":u(()=>{var t;return[(t=$.value)!=null&&t.customListActions?(i(),_(E,{key:0,actions:$.value.customListActions},null,8,["actions"])):b("",!0),a(r,{variant:"solid",label:f.__("Create"),onClick:e[1]||(e[1]=l=>V.value=!0)},{prefix:u(()=>[a(o,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),a(T,{ref_key:"viewControls",ref:k,modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value=t),loadMore:C.value,"onUpdate:loadMore":e[3]||(e[3]=t=>C.value=t),resizeColumn:g.value,"onUpdate:resizeColumn":e[4]||(e[4]=t=>g.value=t),updatedPageCount:x.value,"onUpdate:updatedPageCount":e[5]||(e[5]=t=>x.value=t),doctype:"CRM Organization"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),s.value.data&&z.value.length?(i(),_(_e,{key:0,ref_key:"organizationsListView",ref:$,modelValue:s.value.data.page_length_count,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value.data.page_length_count=t),list:s.value,"onUpdate:list":e[7]||(e[7]=t=>s.value=t),rows:z.value,columns:s.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:s.value.data.row_count,totalCount:s.value.data.total_count},onLoadMore:e[8]||(e[8]=()=>C.value++),onColumnWidthUpdated:e[9]||(e[9]=()=>g.value++),onUpdatePageCount:e[10]||(e[10]=t=>x.value=t),onApplyFilter:e[11]||(e[11]=t=>k.value.applyFilter(t)),onApplyLikeFilter:e[12]||(e[12]=t=>k.value.applyLikeFilter(t)),onLikeDoc:e[13]||(e[13]=t=>k.value.likeDoc(t))},null,8,["modelValue","list","rows","columns","options"])):s.value.data?(i(),c("div",Ce,[A("div",ge,[a(I,{class:"h-10 w-10"}),A("span",null,O(f.__("No {0} Found",[f.__("Organizations")])),1),a(r,{label:f.__("Create"),onClick:e[14]||(e[14]=t=>V.value=!0)},{prefix:u(()=>[a(o,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):b("",!0),a(j,{modelValue:V.value,"onUpdate:modelValue":e[15]||(e[15]=t=>V.value=t),quickEntry:m.value,"onUpdate:quickEntry":e[16]||(e[16]=t=>m.value=t)},null,8,["modelValue","quickEntry"]),m.value?(i(),_(S,{key:2,modelValue:m.value,"onUpdate:modelValue":e[17]||(e[17]=t=>m.value=t),doctype:"CRM Organization"},null,8,["modelValue"])):b("",!0)],64)}}};export{He as default};
//# sourceMappingURL=Organizations-56ae83c2.js.map
