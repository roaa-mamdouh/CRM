import{m as k,i as h,l as b,j as U,a as j,r as f,b as i,g as _,w as l,d,u as g,e as C,t as E,c as I,f as J,q as L,p as M,F as O,I as y,z as V}from"./index-44d5e71e.js";import{u as q,a as w,_ as x}from"./index-f8842404.js";import{_ as P}from"./views-c6d92e18.js";const R={class:"cursor-pointer"},T={class:"mt-3 flex flex-wrap items-center gap-2"},W={__name:"AssignmentModal",props:k({doc:{type:Object,default:null},docs:{type:Set,default:new Set},doctype:{type:String,default:""}},{modelValue:{},modelModifiers:{},assignees:{},assigneesModifiers:{}}),emits:k(["reload"],["update:modelValue","update:assignees"]),setup(v,{emit:A}){const t=v,B=A,m=h(v,"modelValue"),n=h(v,"assignees"),r=b([]),c=b(""),{getUser:p}=q(),S=e=>{n.value=n.value.filter(s=>s.name!==e)},z=U(()=>t.doc?t.doctype=="CRM Lead"?t.doc.lead_owner:t.doc.deal_owner:""),$=e=>{c.value="";let s={name:e,image:p(e).user_image,label:p(e).full_name};n.value.find(o=>o.name===e)||n.value.push(s)};function D(){if(n.value.length===0){c.value="Please select at least one assignee";return}const e=r.value.filter(o=>!n.value.find(u=>u.name===o.name)).map(o=>o.name),s=n.value.filter(o=>!r.value.find(u=>u.name===o.name)).map(o=>o.name);if(e.length)for(let o of e)y("frappe.desk.form.assign_to.remove",{doctype:t.doctype,name:t.doc.name,assign_to:o});s.length&&(t.docs.size?(V("bulk_assign_to",{doctype:t.doctype}),y("frappe.desk.form.assign_to.add_multiple",{doctype:t.doctype,name:JSON.stringify(Array.from(t.docs)),assign_to:s,bulk_assign:!0,re_assign:!0}).then(()=>{B("reload")})):(V("assign_to",{doctype:t.doctype}),y("frappe.desk.form.assign_to.add",{doctype:t.doctype,name:t.doc.name,assign_to:s}))),m.value=!1}return j(()=>{r.value=[...n.value]}),(e,s)=>{const o=f("FeatherIcon"),u=f("Button"),F=f("ErrorMessage"),N=f("Dialog");return i(),_(N,{modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=a=>m.value=a),options:{title:e.__("Assign To"),size:"xl",actions:[{label:e.__("Cancel"),variant:"subtle",onClick:()=>{n.value=[...r.value],m.value=!1}},{label:e.__("Update"),variant:"solid",onClick:()=>D()}]},onClose:s[2]||(s[2]=()=>{n.value=[...r.value]})},{"body-content":l(()=>[d(P,{class:"form-control",value:"",doctype:"User",onChange:s[0]||(s[0]=a=>$(a)&&(e.$refs.input.value="")),placeholder:e.__("John Doe"),hideMe:!0},{"item-prefix":l(({option:a})=>[d(w,{class:"mr-2",user:a.value,size:"sm"},null,8,["user"])]),"item-label":l(({option:a})=>[d(g(x),{text:a.value},{default:l(()=>[C("div",R,E(g(p)(a.value).full_name),1)]),_:2},1032,["text"])]),_:1},8,["placeholder"]),C("div",T,[(i(!0),I(O,null,J(n.value,a=>(i(),_(g(x),{text:a.name,key:a.name},{default:l(()=>[d(u,{label:g(p)(a.name).full_name,theme:"gray",variant:"outline"},{prefix:l(()=>[d(w,{user:a.name,size:"sm"},null,8,["user"])]),suffix:l(()=>[a.name!==z.value?(i(),_(o,{key:0,class:"h-3.5",name:"x",onClick:L(G=>S(a.name),["stop"])},null,8,["onClick"])):M("",!0)]),_:2},1032,["label"])]),_:2},1032,["text"]))),128))]),c.value?(i(),_(F,{key:0,class:"mt-2",message:e.__(c.value)},null,8,["message"])):M("",!0)]),_:1},8,["modelValue","options"])}}};export{W as _};
//# sourceMappingURL=AssignmentModal-05490a15.js.map
