import{l as x,b as n,c as g,Q as I,a8 as A,a9 as J,e as s,n as V,S as P,j as T,x as O,k as E,r as L,d as i,w as _,t as k,u as p,aa as U,T as q,q as M,g as S,p as w,W as K,Z as H,m as R,i as X,a as G,R as Q,F as Z,f as Y,ab as ee,A as te,I as le,z as ae}from"./index-44d5e71e.js";import{_ as se}from"./Section-866fa152.js";import{S as oe}from"./view-67dd7097.js";import{E as ie,c as ne}from"./views-c6d92e18.js";import{D as F,a as de}from"./DragVerticalIcon-a9ef58cc.js";import{_ as re}from"./Switch.vue_vue_type_script_setup_true_lang-8c5606e7.js";import{b as ue}from"./Dropdown.vue_vue_type_script_setup_true_lang-12b7bb51.js";const je={__name:"Resizer",props:{defaultWidth:{type:Number,default:352},minWidth:{type:Number,default:16*16},maxWidth:{type:Number,default:30*16},side:{type:String,default:"left"},parent:{type:Object,default:null}},setup(r){const l=r,h=x(!1),o=x(l.defaultWidth);function b(){document.addEventListener("mousemove",u),document.addEventListener("mouseup",()=>{document.body.classList.remove("select-none"),document.body.classList.remove("cursor-col-resize"),document.querySelectorAll(".select-text1").forEach(a=>{a.classList.remove("select-text1"),a.classList.add("select-text")}),localStorage.setItem("sidebarWidth",o.value),h.value=!1,document.removeEventListener("mousemove",u)})}function u(a){h.value=!0,document.body.classList.add("select-none"),document.body.classList.add("cursor-col-resize"),document.querySelectorAll(".select-text").forEach(t=>{t.classList.remove("select-text"),t.classList.add("select-text1")}),o.value=l.side=="left"?a.clientX:window.innerWidth-a.clientX;let v=l.parent?d():0;o.value=o.value-v;let c=[l.defaultWidth-10,l.defaultWidth+10];o.value>c[0]&&o.value<c[1]&&(o.value=l.defaultWidth),o.value<l.minWidth&&(o.value=l.minWidth),o.value>l.maxWidth&&(o.value=l.maxWidth)}function d(){return l.parent?l.parent.getBoundingClientRect()[l.side]:0}return(a,v)=>(n(),g("div",{class:"relative",style:P({width:`${o.value}px`})},[I(a.$slots,"default",A(J({sidebarResizing:h.value,sidebarWidth:o.value}))),s("div",{class:V(["absolute z-10 h-full w-1 cursor-col-resize bg-gray-300 opacity-0 transition-opacity hover:opacity-100",{"opacity-100":h.value,"left-0":r.side=="right","right-0":r.side=="left"}]),onMousedown:b},null,34)],4))}},ce={class:"flex flex-col gap-3"},me={class:"flex items-center justify-between rounded px-2.5 py-2 bg-gray-50"},fe=["onClick"],pe={key:0},ve={key:1,class:"flex gap-2 items-center"},ye={class:"flex gap-1 items-center"},_e={class:"px-2.5 py-2 border rounded text-base leading-4 text-gray-800 flex items-center justify-between gap-2"},ge={class:"flex items-center gap-2"},be={class:"flex flex-col gap-1"},he={class:"text-gray-500 text-sm"},xe={key:1,class:"flex justify-center items-center border rounded border-dashed p-3"},ke={class:"text-sm text-gray-500"},Se={class:"mt-5.5"},Ce={__name:"SidePanelLayoutBuilder",props:{sections:Object,doctype:String},setup(r){const l=r,h=["Table","Geolocation","Attach","Attach Image","HTML","Signature"],o=T(()=>({doctype:l.doctype,restricted_fieldtypes:h,as_array:!0})),b=O({url:"crm.api.doc.get_fields_meta",params:o.value,cache:["fieldsMeta",l.doctype],auto:!0});function u(d,a){a&&d.fields.push(a)}return E(()=>l.doctype,()=>b.fetch(o.value),{immediate:!0}),(d,a)=>{const v=L("FeatherIcon"),c=L("Button");return n(),g("div",null,[i(p(F),{list:r.sections,"item-key":"label",class:"flex flex-col gap-5.5"},{item:_(({element:t})=>[s("div",ce,[s("div",me,[s("div",{class:"flex max-w-fit cursor-pointer items-center gap-2 text-base leading-4",onClick:e=>t.opened=!t.opened},[i(v,{name:"chevron-right",class:V(["h-4 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":t.opened}])},null,8,["class"]),t.editingLabel?(n(),g("div",ve,[i(p(U),{modelValue:t.label,"onUpdate:modelValue":e=>t.label=e,onKeydown:q(e=>t.editingLabel=!1,["enter"]),onBlur:e=>t.editingLabel=!1,onClick:a[0]||(a[0]=M(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onKeydown","onBlur"]),t.editingLabel?(n(),S(c,{key:0,icon:"check",class:"!size-4 rounded-sm",variant:"ghost",onClick:M(e=>t.editingLabel=!1,["stop"])},null,8,["onClick"])):w("",!0)])):(n(),g("div",pe,k(d.__(t.label)||d.__("Untitled")),1))],8,fe),s("div",ye,[t.editingLabel?w("",!0):(n(),S(c,{key:0,class:"!size-4 rounded-sm",variant:"ghost",onClick:e=>t.editingLabel=!0},{default:_(()=>[i(ie,{class:"h-3.5"})]),_:2},1032,["onClick"])),t.editable!==!1?(n(),S(c,{key:1,class:"!size-4 rounded-sm",icon:"x",variant:"ghost",onClick:e=>r.sections.splice(r.sections.indexOf(t),1)},null,8,["onClick"])):w("",!0)])]),K(s("div",null,[i(p(F),{list:t.fields,group:"fields","item-key":"label",class:"flex flex-col gap-1.5",handle:".cursor-grab"},{item:_(({element:e})=>[s("div",_e,[s("div",ge,[i(de,{class:"h-3.5 cursor-grab"}),s("div",null,k(e.label),1)]),i(c,{variant:"ghost",icon:"x",class:"!size-4 rounded-sm",onClick:C=>t.fields.splice(t.fields.indexOf(e),1)},null,8,["onClick"])])]),_:2},1032,["list"]),p(b).data&&t.editable!==!1?(n(),S(ne,{key:0,value:"",options:p(b).data,onChange:e=>u(t,e)},{target:_(({togglePopover:e})=>[i(c,{class:"w-full h-8 mt-1.5 !border-gray-200 hover:!border-gray-300",variant:"outline",onClick:C=>e(),label:d.__("Add Field")},{prefix:_(()=>[i(v,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])]),"item-label":_(({option:e})=>[s("div",be,[s("div",null,k(e.label),1),s("div",he,k(`${e.fieldname} - ${e.fieldtype}`),1)])]),_:2},1032,["options","onChange"])):(n(),g("div",xe,[s("div",ke,k(d.__("This section is not editable")),1)]))],512),[[H,t.opened]])])]),_:1},8,["list"]),s("div",Se,[i(c,{class:"w-full h-8",variant:"subtle",label:d.__("Add Section"),onClick:a[1]||(a[1]=t=>r.sections.push({label:d.__("New Section"),opened:!0,fields:[]}))},{prefix:_(()=>[i(v,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])}}},we={class:"flex items-center gap-2 text-2xl font-semibold leading-6 text-gray-900"},$e={class:"flex flex-col gap-5.5"},Le={class:"flex justify-between gap-2"},Ve={key:0,class:"flex gap-4"},ze={key:0,class:"flex flex-1 flex-col border rounded"},We={key:1,class:"flex flex-1 justify-center items-center text-gray-600 bg-gray-50 rounded border border-gray-50"},Ne={class:"flex flex-row-reverse gap-2"},Ie={__name:"SidePanelModal",props:R({doctype:{type:String,default:"CRM Lead"}},{modelValue:{},modelModifiers:{}}),emits:R(["reload"],["update:modelValue"]),setup(r,{emit:l}){const h=r,o=l,b=X(r,"modelValue"),u=x(h.doctype),d=x(!1),a=x(!1),v=x(!1),c=x({});function t(){return{doctype:u.value,type:"Side Panel"}}const e=O({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["sidebar-sections",u.value],params:t(),onSuccess(m){e.originalData=JSON.parse(JSON.stringify(m))}});E(()=>e==null?void 0:e.data,()=>{a.value=JSON.stringify(e==null?void 0:e.data)!==JSON.stringify(e==null?void 0:e.originalData)},{deep:!0}),G(()=>ue(C,100)());function C(){te(()=>{e.params=t(),e.reload()})}function D(){let m=JSON.parse(JSON.stringify(e.data));m.forEach(f=>{f.fields&&(f.fields=f.fields.map($=>$.fieldname||$.name).filter(Boolean))}),d.value=!0,le("crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.save_fields_layout",{doctype:u.value,type:"Side Panel",layout:JSON.stringify(m)}).then(()=>{d.value=!1,b.value=!1,ae("side_panel_layout_builder",{doctype:u.value}),o("reload")})}return(m,f)=>{const $=L("FormControl"),z=L("Button");return n(),S(p(ee),{modelValue:b.value,"onUpdate:modelValue":f[3]||(f[3]=y=>b.value=y),options:{size:"3xl"}},{"body-title":_(()=>[s("h3",we,[s("div",null,k(m.__("Edit Field Layout")),1),a.value?(n(),S(p(Q),{key:0,label:m.__("Not Saved"),variant:"subtle",theme:"orange"},null,8,["label"])):w("",!0)])]),"body-content":_(()=>[s("div",$e,[s("div",Le,[i($,{type:"select",class:"w-1/4",modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=y=>u.value=y),options:["CRM Lead","CRM Deal","Contact","CRM Organization"],onChange:C},null,8,["modelValue"]),i(p(re),{modelValue:v.value,"onUpdate:modelValue":f[1]||(f[1]=y=>v.value=y),label:v.value?m.__("Hide preview"):m.__("Show preview"),size:"sm"},null,8,["modelValue","label"])]),p(e).data?(n(),g("div",Ve,[i(Ce,{class:"flex flex-1 flex-col pr-2",sections:p(e).data,doctype:u.value},null,8,["sections","doctype"]),v.value?(n(),g("div",ze,[(n(!0),g(Z,null,Y(p(e).data,(y,W)=>{var N;return n(),g("div",{key:y.label,class:V(["flex flex-col py-1.5 px-1",{"border-b":W!==((N=p(e).data)==null?void 0:N.length)-1}])},[i(se,{"is-opened":y.opened,label:y.label},{default:_(()=>{var B;return[i(oe,{fields:y.fields,isLastSection:W==((B=y.data)==null?void 0:B.length)-1,modelValue:c.value,"onUpdate:modelValue":f[2]||(f[2]=j=>c.value=j)},null,8,["fields","isLastSection","modelValue"])]}),_:2},1032,["is-opened","label"])],2)}),128))])):(n(),g("div",We,k(m.__("Toggle on for preview")),1))])):w("",!0)])]),actions:_(()=>[s("div",Ne,[i(z,{loading:d.value,label:m.__("Save"),variant:"solid",onClick:D},null,8,["loading","label"]),i(z,{label:m.__("Reset"),onClick:C},null,8,["label"])])]),_:1},8,["modelValue"])}}};export{je as _,Ie as a};
//# sourceMappingURL=SidePanelModal-61bc5f39.js.map