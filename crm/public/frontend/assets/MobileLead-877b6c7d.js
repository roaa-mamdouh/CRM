import{a as ne}from"./FadedScrollableDiv-d2244b1c.js";import{D as ie}from"./DetailsIcon-163fe66d.js";import{u as re,A as de,E as ue,a as me,S as ce,b as _e}from"./useActiveTabManager-5729630a.js";import{C as pe}from"./CommentIcon-34bc4e38.js";import{P as fe}from"./PhoneIcon-c4a5b6b9.js";import{T as ve}from"./TaskIcon-41a3f866.js";import{N as be}from"./NoteModal-c0696905.js";import{W as ye}from"./WhatsAppIcon-e519cf18.js";import{I as ge}from"./IndicatorIcon-8b86ca34.js";import{O as xe}from"./OrganizationsIcon-ee772c59.js";import{C as Ce}from"./ContactsIcon-c26dc44d.js";import{_ as we}from"./LayoutHeader-eee8b844.js";import{_ as he}from"./AssignmentModal-05490a15.js";import{s as Ie,_ as Ve}from"./statuses-12883252.js";import{_ as W}from"./views-c6d92e18.js";import{_ as Le}from"./Section-866fa152.js";import{g as ke,S as Ae,_ as Te}from"./view-67dd7097.js";import{_ as ze}from"./CustomActions-a217a3f8.js";import{g as Se,e as C,s as Ue,i as $e}from"./index-f8842404.js";import{c as De}from"./contacts-8b95bc33.js";import{i as Ee,c as Me,w as Ne}from"./settings-eb655a0b.js";import{h as Re,v as qe,l as m,x as E,I as M,a as Oe,j as G,k as Be,r as N,b as n,c,u as s,g as _,w as p,p as v,G as je,e as r,d as i,L as R,F as H,n as J,f as Fe,t as w}from"./index-44d5e71e.js";import{_ as Pe}from"./Breadcrumbs.vue_vue_type_script_setup_true_lang-f62edb55.js";import{_ as We}from"./Dropdown.vue_vue_type_script_setup_true_lang-12b7bb51.js";import{_ as K}from"./Switch.vue_vue_type_script_setup_true_lang-8c5606e7.js";import"./Email2Icon-f91ce801.js";import"./CalendarIcon-82335e5a.js";import"./callLog-a8cebf6e.js";import"./IconPicker-495e01ca.js";import"./FileUploader-1bae2b25.js";import"./LeadsIcon-b3b59295.js";import"./DealsIcon-b0065eff.js";import"./EmailTemplateModal-7714e68d.js";import"./TaskModal-38b94265.js";import"./ArrowUpRightIcon-c7d9b987.js";const Ge={class:"relative flex h-10.5 items-center justify-between gap-2 py-2.5 pl-2"},He={class:"absolute right-0"},Je={key:1,class:"flex h-12 items-center justify-between gap-2 border-b px-3 py-2.5"},Ke={class:"flex items-center gap-2"},Qe={key:2,class:"flex h-full overflow-hidden"},Xe={key:0},Ye={key:1,class:"flex flex-1 flex-col justify-between overflow-hidden"},Ze={class:"flex flex-col overflow-y-auto"},ea={class:"mb-4 flex items-center gap-2 text-gray-600"},aa={class:"block text-base"},ta={class:"ml-6"},sa={class:"flex items-center justify-between text-base"},oa={key:1,class:"mt-2.5 text-base"},la={class:"mb-4 mt-6 flex items-center gap-2 text-gray-600"},na={class:"block text-base"},ia={class:"ml-6"},ra={class:"flex items-center justify-between text-base"},da={key:1,class:"mt-2.5 text-base"},Wa={__name:"MobileLead",props:{leadId:{type:String,required:!0}},setup(Q){const{$dialog:X,$socket:Y}=Se(),{getContactByName:h,contacts:Z}=De(),{statusOptions:ee,getLeadStatus:ae}=Ie(),f=Re(),U=qe(),I=Q,$=m([]),q=m([]),a=E({url:"crm.fcrm.doctype.crm_lead.api.get_lead",params:{name:I.leadId},cache:["lead",I.leadId],onSuccess:async t=>{let e={doc:t,$dialog:X,$socket:Y,router:U,updateField:T,createToast:C,deleteDoc:oe,resource:{lead:a,fieldsLayout:V},call:M};Ue(t);let l=await $e(t,e);$.value=l.actions||[],q.value=l.statuses||[]}});Oe(()=>{a.data||a.fetch()});const D=m(!1),k=m(!1);function O(t,e,l){e=Array.isArray(t)?"":e,!(!Array.isArray(t)&&te(t,e))&&E({url:"frappe.client.set_value",params:{doctype:"CRM Lead",name:I.leadId,fieldname:t,value:e},auto:!0,onSuccess:()=>{a.reload(),D.value=!0,C({title:__("Lead updated"),icon:"check",iconClasses:"text-green-600"}),l==null||l()},onError:y=>{var S;C({title:__("Error updating lead"),text:__((S=y.messages)==null?void 0:S[0]),icon:"x",iconClasses:"text-red-600"})}})}function te(t,e){var y;let l=a.data.fields_meta||{};return(y=l[t])!=null&&y.reqd&&!e?(C({title:__("Error Updating Lead"),text:__("{0} is a required field",[l[t].label]),icon:"x",iconClasses:"text-red-600"}),!0):!1}const se=G(()=>{let t=[{label:__("Leads"),route:{name:"Leads"}}];if(f.query.view||f.query.viewType){let e=ke(f.query.view,f.query.viewType,"CRM Lead");e&&t.push({label:__(e.label),icon:e.icon,route:{name:"Leads",params:{viewType:f.query.viewType},query:{view:f.query.view}}})}return t.push({label:a.data.lead_name||__("Untitled"),route:{name:"Lead",params:{leadId:a.data.name}}}),t}),A=G(()=>[{name:"Details",label:__("Details"),icon:ie,condition:()=>Ee.value},{name:"Activity",label:__("Activity"),icon:de},{name:"Emails",label:__("Emails"),icon:ue},{name:"Comments",label:__("Comments"),icon:pe},{name:"Calls",label:__("Calls"),icon:fe,condition:()=>Me.value},{name:"Tasks",label:__("Tasks"),icon:ve},{name:"Notes",label:__("Notes"),icon:be},{name:"Attachments",label:__("Attachments"),icon:me},{name:"WhatsApp",label:__("WhatsApp"),icon:ye,condition:()=>Ne.value}].filter(e=>e.condition?e.condition():!0)),{tabIndex:b}=re(A,"lastLeadTab");Be(A,t=>{if(t&&f.params.tabName){let e=t.findIndex(l=>l.name.toLowerCase()===f.params.tabName.toLowerCase());e!==-1&&(b.value=e)}});const V=E({url:"crm.api.doc.get_sidebar_fields",cache:["fieldsLayout",I.leadId],params:{doctype:"CRM Lead",name:I.leadId},auto:!0});function T(t,e,l){O(t,e,()=>{a.data[t]=e,l==null||l()})}async function oe(t){await M("frappe.client.delete",{doctype:"CRM Lead",name:t}),U.push({name:"Leads"})}const z=m(!1),g=m(!1),x=m(!1),u=m(""),L=m("");async function B(t){let e=!1;if(g.value&&!u.value){C({title:__("Error"),text:__("Please select an existing contact"),icon:"x",iconClasses:"text-red-600"});return}if(x.value&&!L.value){C({title:__("Error"),text:__("Please select an existing organization"),icon:"x",iconClasses:"text-red-600"});return}if(g.value&&u.value&&(a.data.salutation=h(u.value).salutation,a.data.first_name=h(u.value).first_name,a.data.last_name=h(u.value).last_name,a.data.email_id=h(u.value).email_id,a.data.mobile_no=h(u.value).mobile_no,g.value=!1,e=!0),x.value&&L.value&&(a.data.organization=L.value,x.value=!1,e=!0),e)O({salutation:a.data.salutation,first_name:a.data.first_name,last_name:a.data.last_name,email_id:a.data.email_id,mobile_no:a.data.mobile_no,organization:a.data.organization},"",()=>B(!0)),z.value=!1;else{let l=await M("crm.fcrm.doctype.crm_lead.crm_lead.convert_to_deal",{lead:a.data.name});l&&(t&&await Z.reload(),U.push({name:"Deal",params:{dealId:l}}))}}return(t,e)=>{var j,F;const l=N("FeatherIcon"),y=N("Button"),S=N("Dialog");return n(),c(H,null,[s(a).data?(n(),_(we,{key:0},{default:p(()=>[r("header",Ge,[i(s(Pe),{items:se.value},{prefix:p(({item:o})=>[o.icon?(n(),_(ne,{key:0,icon:o.icon,class:"mr-2 h-4"},null,8,["icon"])):v("",!0)]),_:1},8,["items"]),r("div",He,[i(s(We),{options:s(ee)("lead",T,q.value)},{default:p(({open:o})=>[i(y,{label:s(a).data.status,class:J(s(ae)(s(a).data.status).colorClass)},{prefix:p(()=>[i(ge)]),suffix:p(()=>[i(l,{name:o?"chevron-up":"chevron-down",class:"h-4"},null,8,["name"])]),_:2},1032,["label","class"])]),_:1},8,["options"])])])]),_:1})):v("",!0),s(a).data?(n(),c("div",Je,[(n(),_(je(((j=s(a).data._assignedTo)==null?void 0:j.length)==1?"Button":"div"),null,{default:p(()=>[i(Ve,{avatars:s(a).data._assignedTo,onClick:e[0]||(e[0]=o=>k.value=!0)},null,8,["avatars"])]),_:1})),r("div",Ke,[$.value?(n(),_(ze,{key:0,actions:$.value},null,8,["actions"])):v("",!0),i(y,{label:t.__("Convert"),variant:"solid",onClick:e[1]||(e[1]=o=>z.value=!0)},null,8,["label"])])])):v("",!0),(F=s(a))!=null&&F.data?(n(),c("div",Qe,[i(s(Te),{modelValue:s(b),"onUpdate:modelValue":e[7]||(e[7]=o=>R(b)?b.value=o:null),tabs:A.value,tablistClass:"!px-3",class:"overflow-auto"},{default:p(({tab:o})=>[o.name=="Details"?(n(),c("div",Xe,[s(a).data.sla_status?(n(),_(ce,{key:0,modelValue:s(a).data,"onUpdate:modelValue":e[2]||(e[2]=d=>s(a).data=d),onUpdateField:T},null,8,["modelValue"])):v("",!0),s(V).data?(n(),c("div",Ye,[r("div",Ze,[(n(!0),c(H,null,Fe(s(V).data,(d,P)=>(n(),c("div",{key:d.label,class:J(["flex flex-col px-2 py-3 sm:p-3",{"border-b":P!==s(V).data.length-1}])},[i(Le,{"is-opened":d.opened,label:d.label},{default:p(()=>[i(Ae,{fields:d.fields,isLastSection:P==s(V).data.length-1,modelValue:s(a).data,"onUpdate:modelValue":e[3]||(e[3]=le=>s(a).data=le),onUpdate:T},null,8,["fields","isLastSection","modelValue"])]),_:2},1032,["is-opened","label"])],2))),128))])])):v("",!0)])):(n(),_(_e,{key:1,doctype:"CRM Lead",tabs:A.value,reload:D.value,"onUpdate:reload":e[4]||(e[4]=d=>D.value=d),tabIndex:s(b),"onUpdate:tabIndex":e[5]||(e[5]=d=>R(b)?b.value=d:null),modelValue:s(a),"onUpdate:modelValue":e[6]||(e[6]=d=>R(a)?a.value=d:null)},null,8,["tabs","reload","tabIndex","modelValue"]))]),_:1},8,["modelValue","tabs"])])):v("",!0),k.value?(n(),_(he,{key:3,modelValue:k.value,"onUpdate:modelValue":e[8]||(e[8]=o=>k.value=o),assignees:s(a).data._assignedTo,"onUpdate:assignees":e[9]||(e[9]=o=>s(a).data._assignedTo=o),doc:s(a).data,doctype:"CRM Lead"},null,8,["modelValue","assignees","doc"])):v("",!0),i(S,{modelValue:z.value,"onUpdate:modelValue":e[14]||(e[14]=o=>z.value=o),options:{title:t.__("Convert to Deal"),size:"xl",actions:[{label:t.__("Convert"),variant:"solid",onClick:B}]}},{"body-content":p(()=>[r("div",ea,[i(xe,{class:"h-4 w-4"}),r("label",aa,w(t.__("Organization")),1)]),r("div",ta,[r("div",sa,[r("div",null,w(t.__("Choose Existing")),1),i(s(K),{modelValue:x.value,"onUpdate:modelValue":e[10]||(e[10]=o=>x.value=o)},null,8,["modelValue"])]),x.value?(n(),_(W,{key:0,class:"form-control mt-2.5",variant:"outline",size:"md",value:L.value,doctype:"CRM Organization",onChange:e[11]||(e[11]=o=>L.value=o)},null,8,["value"])):(n(),c("div",oa,w(t.__("New organization will be created based on the data in details section")),1))]),r("div",la,[i(Ce,{class:"h-4 w-4"}),r("label",na,w(t.__("Contact")),1)]),r("div",ia,[r("div",ra,[r("div",null,w(t.__("Choose Existing")),1),i(s(K),{modelValue:g.value,"onUpdate:modelValue":e[12]||(e[12]=o=>g.value=o)},null,8,["modelValue"])]),g.value?(n(),_(W,{key:0,class:"form-control mt-2.5",variant:"outline",size:"md",value:u.value,doctype:"Contact",onChange:e[13]||(e[13]=o=>u.value=o)},null,8,["value"])):(n(),c("div",da,w(t.__("New contact will be created based on the person's details")),1))])]),_:1},8,["modelValue","options"])],64)}}};export{Wa as default};
//# sourceMappingURL=MobileLead-877b6c7d.js.map
