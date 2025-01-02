import{_,E as B,D as F}from"./views-667c7fe0.js";import{I as S}from"./IndicatorIcon-3e54691f.js";import{u as E,a as i,_ as I}from"./index-1e2016ce.js";import{_ as $,r as b,b as n,c as o,F as g,f as v,n as h,t as k,p as u,e as V,H as C,g as r,E as D,w as y,d,u as p}from"./index-ffb8c1be.js";import{_ as L}from"./DatePicker.vue_vue_type_script_setup_true_lang-b1dc2368.js";const T={class:"flex flex-col gap-4"},w={key:0,class:"flex h-7 mb-3 max-w-fit cursor-pointer items-center gap-2 text-base font-semibold leading-5"},N={key:0,class:"settings-field"},z={key:0,class:"mb-2 text-sm text-gray-600"},P={key:0,class:"text-red-500"},j={key:3,class:"flex items-center gap-2"},A=["onClick"],H={key:0,class:"text-red-500"},M={key:4,class:"flex gap-1"},O={class:"cursor-pointer"},q={__name:"Fields",props:{sections:Array,data:Object},setup(a){const{getUser:x}=E(),l=s=>s.placeholder?__(s.placeholder):["Select","Link"].includes(s.type)?__("Select {0}",[__(s.label)]):__("Enter {0}",[__(s.label)]);return(s,G)=>{const m=b("FormControl"),U=b("Button");return n(),o("div",T,[(n(!0),o(g,null,v(a.sections,c=>(n(),o("div",{key:c.label,class:h(["section first:border-t-0 first:pt-0",c.hideBorder?"":"border-t pt-4"])},[c.hideLabel?u("",!0):(n(),o("div",w,k(c.label),1)),V("div",{class:h(["grid gap-4",c.columns?"grid-cols-"+c.columns:"grid-cols-2 sm:grid-cols-3"])},[(n(!0),o(g,null,v(c.fields,e=>(n(),o("div",{key:e.name},[(e.type=="Check"||e.read_only&&a.data[e.name]||!e.read_only||!e.hidden)&&(!e.depends_on||e.display_via_depends_on)?(n(),o("div",N,[e.type!="Check"?(n(),o("div",z,[C(k(s.__(e.label))+" ",1),e.mandatory||e.mandatory_depends_on&&e.mandatory_via_depends_on?(n(),o("span",P,"*")):u("",!0)])):u("",!0),e.read_only&&e.type!=="Check"?(n(),r(m,{key:1,type:"text",placeholder:l(e),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,disabled:!0},null,8,["placeholder","modelValue","onUpdate:modelValue"])):e.type==="Select"?(n(),r(m,{key:2,type:"select",class:h(["form-control",e.prefix?"prefix":""]),options:e.options,modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,placeholder:l(e)},D({_:2},[e.prefix?{name:"prefix",fn:y(()=>[d(S,{class:h(e.prefix)},null,8,["class"])]),key:"0"}:void 0]),1032,["class","options","modelValue","onUpdate:modelValue","placeholder"])):e.type=="Check"?(n(),o("div",j,[d(m,{class:"form-control",type:"checkbox",modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,onChange:t=>a.data[e.name]=t.target.checked,disabled:!!e.read_only},null,8,["modelValue","onUpdate:modelValue","onChange","disabled"]),V("label",{class:"text-sm text-gray-600",onClick:t=>a.data[e.name]=!a.data[e.name]},[C(k(s.__(e.label))+" ",1),e.mandatory?(n(),o("span",H,"*")):u("",!0)],8,A)])):e.type==="Link"?(n(),o("div",M,[d(_,{class:"form-control flex-1",value:a.data[e.name],doctype:e.options,filters:e.filters,onChange:t=>a.data[e.name]=t,placeholder:l(e),onCreate:e.create},null,8,["value","doctype","filters","onChange","placeholder","onCreate"]),a.data[e.name]&&e.edit?(n(),r(U,{key:0,class:"shrink-0",label:s.__("Edit"),onClick:t=>e.edit(a.data[e.name])},{prefix:y(()=>[d(B,{class:"h-4 w-4"})]),_:2},1032,["label","onClick"])):u("",!0)])):e.type==="User"?(n(),r(_,{key:5,class:"form-control",value:p(x)(a.data[e.name]).full_name,doctype:e.options,filters:e.filters,onChange:t=>a.data[e.name]=t,placeholder:l(e),hideMe:!0},{prefix:y(()=>[d(i,{class:"mr-2",user:a.data[e.name],size:"sm"},null,8,["user"])]),"item-prefix":y(({option:t})=>[d(i,{class:"mr-2",user:t.value,size:"sm"},null,8,["user"])]),"item-label":y(({option:t})=>[d(p(I),{text:t.value},{default:y(()=>[V("div",O,k(p(x)(t.value).full_name),1)]),_:2},1032,["text"])]),_:2},1032,["value","doctype","filters","onChange","placeholder"])):e.type==="Datetime"?(n(),r(p(F),{key:6,modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,placeholder:l(e),"input-class":"border-none"},null,8,["modelValue","onUpdate:modelValue","placeholder"])):e.type==="Date"?(n(),r(p(L),{key:7,modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,placeholder:l(e),"input-class":"border-none"},null,8,["modelValue","onUpdate:modelValue","placeholder"])):["Small Text","Text","Long Text"].includes(e.type)?(n(),r(m,{key:8,type:"textarea",placeholder:l(e),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t},null,8,["placeholder","modelValue","onUpdate:modelValue"])):["Int"].includes(e.type)?(n(),r(m,{key:9,type:"number",placeholder:l(e),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t},null,8,["placeholder","modelValue","onUpdate:modelValue"])):(n(),r(m,{key:10,type:"text",placeholder:l(e),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,disabled:!!e.read_only},null,8,["placeholder","modelValue","onUpdate:modelValue","disabled"]))])):u("",!0)]))),128))],2)],2))),128))])}}},X=$(q,[["__scopeId","data-v-36537092"]]);export{X as F};
//# sourceMappingURL=Fields-19464095.js.map