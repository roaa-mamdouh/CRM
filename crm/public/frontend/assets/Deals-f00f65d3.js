import{m as de,i as ee,v as pe,l as y,y as ue,x as te,j as F,a as me,r as U,b as o,g as k,w as C,e as m,t as h,u as w,d as c,p as f,z as ve,A as fe,h as ge,c as v,F as be,n as ae,q as ye,B as j}from"./index-0eaefc59.js";import{_ as ke,a as xe}from"./ViewControls-ea8a1da7.js";import{s as re,_ as Ce}from"./statuses-3fc2506d.js";import{_ as he}from"./CustomActions-1279e2a5.js";import{E as we}from"./EmailAtIcon-ea18fd59.js";import{P as Ve}from"./PhoneIcon-d5c29ca8.js";import{_ as De,N as se}from"./NoteModal-9ec37bf6.js";import{T as le}from"./TaskIcon-34a97eb2.js";import{C as Ee}from"./CommentIcon-41bc9ec7.js";import{I as H}from"./IndicatorIcon-47af6ea7.js";import{D as Me}from"./DealsIcon-b76f8dc7.js";import{_ as ze}from"./LayoutHeader-7a78345a.js";import{_ as $e}from"./DealsListView-f18c28b6.js";import{_ as Ue}from"./KanbanView-a9812809.js";import{E as Se}from"./views-c030bee3.js";import{F as Ie}from"./Fields-1ba220a0.js";import{u as ie,g as Re,w as Te,h as Ae,t as X,d as Y,f as qe,b as P,_ as oe,c as Z}from"./index-6ca2e8c7.js";import{_ as ne}from"./Switch.vue_vue_type_script_setup_true_lang-11e03378.js";import{T as Oe}from"./TaskModal-15bdd493.js";import{_ as Le}from"./QuickEntryModal-29485d1d.js";import{o as Be}from"./organizations-699f3844.js";import{c as je}from"./settings-54428612.js";import{_ as Pe}from"./Dropdown.vue_vue_type_script_setup_true_lang-f0b25d17.js";import"./FadedScrollableDiv-6a38addc.js";import"./IconPicker-1305b4fc.js";import"./DatePicker.vue_vue_type_script_setup_true_lang-7a0aab45.js";import"./PinIcon-2029f075.js";import"./DetailsIcon-14ab02af.js";import"./DragVerticalIcon-6ff98105.js";import"./ArrowUpRightIcon-b1c4647b.js";import"./ListBulkActions-19316d39.js";import"./AssignmentModal-a338d6bd.js";import"./ListRows-52338ae2.js";import"./ListFooter-ea25daad.js";const Qe={class:"bg-white px-4 pb-6 pt-5 sm:px-6"},Ke={class:"mb-5 flex items-center justify-between"},We={class:"text-2xl font-semibold leading-6 text-gray-900"},Ge={class:"flex items-center gap-1"},Je={class:"mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3"},He={class:"flex items-center gap-3 text-sm text-gray-600"},Xe={class:"flex items-center gap-3 text-sm text-gray-600"},Ye={class:"px-4 pb-7 pt-4 sm:px-6"},Ze={class:"flex flex-row-reverse gap-2"},Fe={__name:"DealModal",props:de({defaults:Object},{modelValue:{},modelModifiers:{},quickEntry:{},quickEntryModifiers:{}}),emits:["update:modelValue","update:quickEntry"],setup(O){const Q=O,{getUser:S,isManager:K}=ie(),{getDealStatus:L,statusOptions:T}=re(),D=ee(O,"modelValue"),E=pe(),g=y(null),_=ue({organization:"",organization_name:"",website:"",no_of_employees:"",territory:"",annual_revenue:"",industry:"",contact:"",salutation:"",first_name:"",last_name:"",email:"",mobile_no:"",gender:"",status:"",deal_owner:""}),u=y(!1),z=y(!1),$=y(!1),A=te({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["quickEntryFields","CRM Deal"],params:{doctype:"CRM Deal",type:"Quick Entry"},auto:!0,transform:i=>i.forEach(b=>{b.fields.forEach(p=>{p.name=="status"?(p.type="Select",p.options=l.value,p.prefix=L(_.status).iconColorClass):p.name=="deal_owner"&&(p.type="User")})})}),V=F(()=>{let i=A.data||[];if(!i.length)return[];let b=[];return $.value?b.push(i.find(p=>p.label==="Select Organization")):b.push(i.find(p=>p.label==="Organization Details")),z.value?b.push(i.find(p=>p.label==="Select Contact")):b.push(i.find(p=>p.label==="Contact Details")),i.forEach(p=>{["Select Organization","Organization Details","Select Contact","Contact Details"].includes(p.label)||b.push(p)}),b}),l=F(()=>{let i=T("deal");return _.status||(_.status=i[0].value),i});function q(){_.website&&!_.website.startsWith("http")&&(_.website="https://"+_.website),te({url:"crm.fcrm.doctype.crm_deal.crm_deal.create_deal",params:{args:_},auto:!0,validate(){if(g.value=null,_.annual_revenue&&(_.annual_revenue=_.annual_revenue.replace(/,/g,""),isNaN(_.annual_revenue)))return g.value=__("Annual Revenue should be a number"),g.value;if(_.mobile_no&&isNaN(_.mobile_no.replace(/[-+() ]/g,"")))return g.value=__("Mobile No should be a number"),g.value;if(_.email&&!_.email.includes("@"))return g.value=__("Invalid Email"),g.value;if(!_.status)return g.value=__("Status is required"),g.value;u.value=!0},onSuccess(i){ve("deal_created"),u.value=!1,D.value=!1,E.push({name:"Deal",params:{dealId:i}})},onError(i){if(u.value=!1,!i.messages){g.value=i.message;return}g.value=i.messages.join(`
`)}})}const W=ee(O,"quickEntry");function G(){W.value=!0,fe(()=>{D.value=!1})}return me(()=>{Object.assign(_,Q.defaults),_.deal_owner||(_.deal_owner=S().name),!_.status&&l.value[0].value&&(_.status=l.value[0].value)}),(i,b)=>{const p=U("Button"),I=U("FeatherIcon"),R=U("ErrorMessage"),J=U("Dialog");return o(),k(J,{modelValue:D.value,"onUpdate:modelValue":b[3]||(b[3]=M=>D.value=M),options:{size:"3xl"}},{body:C(()=>[m("div",Qe,[m("div",Ke,[m("div",null,[m("h3",We,h(i.__("Create Deal")),1)]),m("div",Ge,[w(K)()?(o(),k(p,{key:0,variant:"ghost",class:"w-7",onClick:G},{default:C(()=>[c(Se,{class:"h-4 w-4"})]),_:1})):f("",!0),c(p,{variant:"ghost",class:"w-7",onClick:b[0]||(b[0]=M=>D.value=!1)},{default:C(()=>[c(I,{name:"x",class:"h-4 w-4"})]),_:1})])]),m("div",null,[m("div",Je,[m("div",He,[m("div",null,h(i.__("Choose Existing Organization")),1),c(w(ne),{modelValue:$.value,"onUpdate:modelValue":b[1]||(b[1]=M=>$.value=M)},null,8,["modelValue"])]),m("div",Xe,[m("div",null,h(i.__("Choose Existing Contact")),1),c(w(ne),{modelValue:z.value,"onUpdate:modelValue":b[2]||(b[2]=M=>z.value=M)},null,8,["modelValue"])])]),V.value?(o(),k(Ie,{key:0,class:"border-t pt-4",sections:V.value,data:_},null,8,["sections","data"])):f("",!0),g.value?(o(),k(R,{key:1,class:"mt-4",message:i.__(g.value)},null,8,["message"])):f("",!0)])]),m("div",Ye,[m("div",Ze,[c(p,{variant:"solid",label:i.__("Create"),loading:u.value,onClick:q},null,8,["label","loading"])])])]),_:1},8,["modelValue"])}}},Ne={class:"flex gap-2 items-center"},et={key:0},tt={key:1},at={key:2},st={key:3,class:"truncate text-base"},lt={key:4,class:"truncate text-base"},ot={key:5,class:"truncate text-base"},nt={key:6,class:"text-gray-500"},ut={key:0,class:"truncate flex items-center gap-2"},rt={key:0},it={key:1},ct={key:2},_t={key:3,class:"truncate text-base"},dt={key:4,class:"truncate text-base"},pt={key:5,class:"flex items-center"},mt={key:6,class:"truncate text-base"},vt={class:"flex gap-2 items-center justify-between"},ft={class:"text-gray-600 flex items-center gap-1.5"},gt={key:0},bt=m("span",{class:"text-3xl leading-[0]"}," · ",-1),yt={key:1},kt=m("span",{class:"text-3xl leading-[0]"}," · ",-1),xt={key:2},Ct=m("span",{class:"text-3xl leading-[0]"}," · ",-1),ht={key:3},wt={key:2,class:"flex h-full items-center justify-center"},Vt={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},na={__name:"Deals",setup(O){const{makeCall:Q}=Re(),{getUser:S}=ie(),{getOrganization:K}=Be(),{getDealStatus:L}=re(),T=ge(),D=y(null),E=y(!1),g=y(!1),_=ue({}),u=y({}),z=y(1),$=y(1),A=y(20),V=y(null);function l(r,t){var s;function n(d){return d&&typeof d=="object"&&!Array.isArray(d)?d:{label:d}}return n((s=q.value)==null?void 0:s.find(d=>d.name==r)[t])}const q=F(()=>{var r,t,n,s,d,e,a;return(t=(r=u.value)==null?void 0:r.data)!=null&&t.data?u.value.data.view_type==="group_by"?(s=(n=u.value)==null?void 0:n.data.group_by_field)!=null&&s.name?W((d=u.value)==null?void 0:d.data.data,(e=u.value)==null?void 0:e.data.group_by_field):[]:u.value.data.view_type==="kanban"?G(u.value.data.data):i((a=u.value)==null?void 0:a.data.data):[]});function W(r,t){var s;let n=[];return(s=t.options)==null||s.forEach(d=>{let e=[];d?e=r.filter(x=>x[t.name]==d):e=r.filter(x=>!x[t.name]);let a={label:t.label,group:d||__(" "),collapsed:!1,rows:i(e)};t.name=="status"&&(a.icon=()=>{var x;return j(H,{class:(x=L(d))==null?void 0:x.iconColorClass})}),n.push(a)}),n||r}function G(r){let t=[];return r.forEach(n=>{var s;(s=n.data)==null||s.forEach(d=>{t.push(d)})}),i(t)}function i(r){return r.map(t=>{let n={};return u.value.data.rows.forEach(s=>{var d,e;if(n[s]=t[s],s=="organization")n[s]={label:t.organization,logo:(d=K(t.organization))==null?void 0:d.organization_logo};else if(s==="website")n[s]=Te(t.website);else if(s=="annual_revenue")n[s]=Ae(t.annual_revenue,t.currency);else if(s=="status")n[s]={label:t.status,color:(e=L(t.status))==null?void 0:e.iconColorClass};else if(s=="sla_status"){let a=t.sla_status,x=a,N=t.sla_status=="Failed"?"red":t.sla_status=="Fulfilled"?"green":"orange";a=="First Response Due"&&(a=__(X(t.response_by)),x=Y(t.response_by,Z),new Date(t.response_by)<new Date&&(N="red")),n[s]={label:x,value:a,color:N}}else if(s=="deal_owner")n[s]={label:t.deal_owner&&S(t.deal_owner).full_name,...t.deal_owner&&S(t.deal_owner)};else if(s=="_assign"){let a=JSON.parse(t._assign||"[]");!a.length&&t.deal_owner&&(a=[t.deal_owner]),n[s]=a.map(x=>({name:x,image:S(x).user_image,label:S(x).full_name}))}else if(["modified","creation"].includes(s))n[s]={label:Y(t[s],Z),timeAgo:__(X(t[s]))};else if(["first_response_time","first_responded_on","response_by"].includes(s)){let a=s=="response_by"?"response_by":"first_responded_on";n[s]={label:t[a]?Y(t[a],Z):"",timeAgo:t[s]?s=="first_response_time"?qe(t[s]):__(X(t[s])):""}}}),n._email_count=t._email_count,n._note_count=t._note_count,n._task_count=t._task_count,n._comment_count=t._comment_count,n})}function b(r){let t=u.value.params.column_field;t&&(_[t]=r.column.name),E.value=!0}function p(r){var s;let t=((s=l(r,"mobile_no"))==null?void 0:s.label)||"";return[{icon:j(Ve,{class:"h-4 w-4"}),label:__("Make a Call"),onClick:()=>Q(t),condition:()=>t&&je.value},{icon:j(se,{class:"h-4 w-4"}),label:__("New Note"),onClick:()=>M(r)},{icon:j(le,{class:"h-4 w-4"}),label:__("New Task"),onClick:()=>_e(r)}].filter(d=>d.condition?d.condition():!0)}const I=y(""),R=y(!1),J=y({title:"",content:""});function M(r){I.value=r,R.value=!0}const B=y(!1),ce=y({title:"",description:"",assigned_to:"",due_date:"",priority:"Low",status:"Backlog"});function _e(r){I.value=r,B.value=!0}return(r,t)=>{const n=U("FeatherIcon"),s=U("Button"),d=U("Badge");return o(),v(be,null,[c(ze,null,{"left-header":C(()=>[c(xe,{modelValue:V.value,"onUpdate:modelValue":t[0]||(t[0]=e=>V.value=e),routeName:"Deals"},null,8,["modelValue"])]),"right-header":C(()=>{var e;return[(e=D.value)!=null&&e.customListActions?(o(),k(he,{key:0,actions:D.value.customListActions},null,8,["actions"])):f("",!0),c(s,{variant:"solid",label:r.__("Create"),onClick:t[1]||(t[1]=a=>E.value=!0)},{prefix:C(()=>[c(n,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),c(ke,{ref_key:"viewControls",ref:V,modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e),loadMore:z.value,"onUpdate:loadMore":t[3]||(t[3]=e=>z.value=e),resizeColumn:$.value,"onUpdate:resizeColumn":t[4]||(t[4]=e=>$.value=e),updatedPageCount:A.value,"onUpdate:updatedPageCount":t[5]||(t[5]=e=>A.value=e),doctype:"CRM Deal",options:{allowedViews:["list","group_by","kanban"]}},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),w(T).params.viewType=="kanban"?(o(),k(Ue,{key:0,modelValue:u.value,"onUpdate:modelValue":t[7]||(t[7]=e=>u.value=e),options:{getRoute:e=>({name:"Deal",params:{dealId:e.name},query:{view:w(T).query.view,viewType:w(T).params.viewType}}),onNewClick:e=>b(e)},onUpdate:t[8]||(t[8]=e=>V.value.updateKanbanSettings(e)),onLoadMore:t[9]||(t[9]=e=>V.value.loadMoreKanban(e))},{title:C(({titleField:e,itemName:a})=>[m("div",Ne,[e==="status"?(o(),v("div",et,[c(H,{class:ae(l(a,e).color)},null,8,["class"])])):e==="organization"&&l(a,e).label?(o(),v("div",tt,[c(w(P),{class:"flex items-center",image:l(a,e).logo,label:l(a,e).label,size:"sm"},null,8,["image","label"])])):e==="deal_owner"&&l(a,e).full_name?(o(),v("div",at,[c(w(P),{class:"flex items-center",image:l(a,e).user_image,label:l(a,e).full_name,size:"sm"},null,8,["image","label"])])):f("",!0),["modified","creation","first_response_time","first_responded_on","response_by"].includes(e)?(o(),v("div",st,[c(w(oe),{text:l(a,e).label},{default:C(()=>[m("div",null,h(l(a,e).timeAgo),1)]),_:2},1032,["text"])])):e==="sla_status"?(o(),v("div",lt,[l(a,e).value?(o(),k(d,{key:0,variant:"subtle",theme:l(a,e).color,size:"md",label:l(a,e).value},null,8,["theme","label"])):f("",!0)])):l(a,e).label?(o(),v("div",ot,h(l(a,e).label),1)):(o(),v("div",nt,h(r.__("No Title")),1))])]),fields:C(({fieldName:e,itemName:a})=>[l(a,e).label?(o(),v("div",ut,[e==="status"?(o(),v("div",rt,[c(H,{class:ae(l(a,e).color)},null,8,["class"])])):e==="organization"?(o(),v("div",it,[l(a,e).label?(o(),k(w(P),{key:0,class:"flex items-center",image:l(a,e).logo,label:l(a,e).label,size:"xs"},null,8,["image","label"])):f("",!0)])):e==="deal_owner"?(o(),v("div",ct,[l(a,e).full_name?(o(),k(w(P),{key:0,class:"flex items-center",image:l(a,e).user_image,label:l(a,e).full_name,size:"xs"},null,8,["image","label"])):f("",!0)])):f("",!0),["modified","creation","first_response_time","first_responded_on","response_by"].includes(e)?(o(),v("div",_t,[c(w(oe),{text:l(a,e).label},{default:C(()=>[m("div",null,h(l(a,e).timeAgo),1)]),_:2},1032,["text"])])):e==="sla_status"?(o(),v("div",dt,[l(a,e).value?(o(),k(d,{key:0,variant:"subtle",theme:l(a,e).color,size:"md",label:l(a,e).value},null,8,["theme","label"])):f("",!0)])):e==="_assign"?(o(),v("div",pt,[c(Ce,{avatars:l(a,e).label,size:"xs"},null,8,["avatars"])])):(o(),v("div",mt,h(l(a,e).label),1))])):f("",!0)]),actions:C(({itemName:e})=>[m("div",vt,[m("div",ft,[c(we,{class:"h-4 w-4"}),l(e,"_email_count").label?(o(),v("span",gt,h(l(e,"_email_count").label),1)):f("",!0),bt,c(se,{class:"h-4 w-4"}),l(e,"_note_count").label?(o(),v("span",yt,h(l(e,"_note_count").label),1)):f("",!0),kt,c(le,{class:"h-4 w-4"}),l(e,"_task_count").label?(o(),v("span",xt,h(l(e,"_task_count").label),1)):f("",!0),Ct,c(Ee,{class:"h-4 w-4"}),l(e,"_comment_count").label?(o(),v("span",ht,h(l(e,"_comment_count").label),1)):f("",!0)]),c(w(Pe),{class:"flex items-center gap-2",options:p(e),variant:"ghost",onClick:t[6]||(t[6]=ye(()=>{},["stop","prevent"]))},{default:C(()=>[c(s,{icon:"plus",variant:"ghost"})]),_:2},1032,["options"])])]),_:1},8,["modelValue","options"])):u.value.data&&q.value.length?(o(),k($e,{key:1,ref_key:"dealsListView",ref:D,modelValue:u.value.data.page_length_count,"onUpdate:modelValue":t[10]||(t[10]=e=>u.value.data.page_length_count=e),list:u.value,"onUpdate:list":t[11]||(t[11]=e=>u.value=e),rows:q.value,columns:u.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:u.value.data.row_count,totalCount:u.value.data.total_count},onLoadMore:t[12]||(t[12]=()=>z.value++),onColumnWidthUpdated:t[13]||(t[13]=()=>$.value++),onUpdatePageCount:t[14]||(t[14]=e=>A.value=e),onApplyFilter:t[15]||(t[15]=e=>V.value.applyFilter(e)),onApplyLikeFilter:t[16]||(t[16]=e=>V.value.applyLikeFilter(e)),onLikeDoc:t[17]||(t[17]=e=>V.value.likeDoc(e))},null,8,["modelValue","list","rows","columns","options"])):u.value.data?(o(),v("div",wt,[m("div",Vt,[c(Me,{class:"h-10 w-10"}),m("span",null,h(r.__("No {0} Found",[r.__("Deals")])),1),c(s,{label:r.__("Create"),onClick:t[18]||(t[18]=e=>E.value=!0)},{prefix:C(()=>[c(n,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):f("",!0),E.value?(o(),k(Fe,{key:3,modelValue:E.value,"onUpdate:modelValue":t[19]||(t[19]=e=>E.value=e),quickEntry:g.value,"onUpdate:quickEntry":t[20]||(t[20]=e=>g.value=e),defaults:_},null,8,["modelValue","quickEntry","defaults"])):f("",!0),R.value?(o(),k(De,{key:4,modelValue:R.value,"onUpdate:modelValue":t[21]||(t[21]=e=>R.value=e),note:J.value,doctype:"CRM Deal",doc:I.value},null,8,["modelValue","note","doc"])):f("",!0),B.value?(o(),k(Oe,{key:5,modelValue:B.value,"onUpdate:modelValue":t[22]||(t[22]=e=>B.value=e),task:ce.value,doctype:"CRM Deal",doc:I.value},null,8,["modelValue","task","doc"])):f("",!0),g.value?(o(),k(Le,{key:6,modelValue:g.value,"onUpdate:modelValue":t[23]||(t[23]=e=>g.value=e),doctype:"CRM Deal"},null,8,["modelValue"])):f("",!0)],64)}}};export{na as default};
//# sourceMappingURL=Deals-f00f65d3.js.map