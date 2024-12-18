import{m as N,h as ie,i as J,j as G,s as ke,k as be,l as $,r as T,b as t,c as r,d as u,w as v,u as f,F as ee,f as ge,g as y,n as W,p,e as h,t as E,q as re,v as we,x as le,y as de,a as Ce,z as he,A as xe,B as K}from"./index-94cddbf2.js";import{_ as Ve,a as $e}from"./ViewControls-ec6f393f.js";import{_ as ce,s as _e}from"./statuses-7de18649.js";import{_ as Le}from"./CustomActions-4aa71942.js";import{E as Me}from"./EmailAtIcon-3871ac2e.js";import{P as se}from"./PhoneIcon-206b2bf3.js";import{_ as ze,N as oe}from"./NoteModal-ee3b9103.js";import{T as ne}from"./TaskIcon-a509cbac.js";import{C as Ee}from"./CommentIcon-552fbe88.js";import{I as H}from"./IndicatorIcon-4dd9059c.js";import{L as Ue}from"./LeadsIcon-86dc61b1.js";import{_ as Ae}from"./LayoutHeader-1f47b812.js";import{_ as Re,H as ue,a as Te,b as Ie,c as Be,d as qe,e as Se}from"./ListBulkActions-9825310d.js";import{_ as De}from"./ListRows-818fdf9d.js";import{b as B,_ as te,u as me,g as je,w as Pe,t as X,d as Y,f as We,c as Z}from"./index-79582337.js";import{_ as pe}from"./Dropdown.vue_vue_type_script_setup_true_lang-f30ca23a.js";import{_ as Oe}from"./ListFooter-74d62f00.js";import{_ as Qe}from"./KanbanView-0440ca11.js";import{E as Fe}from"./views-29c7636e.js";import{F as Ke}from"./Fields-0a7d93b5.js";import{T as He}from"./TaskModal-d3bb0e4f.js";import{_ as Je}from"./QuickEntryModal-c9cc5254.js";import{c as Ge}from"./settings-76fff180.js";import"./FadedScrollableDiv-9739b5b1.js";import"./IconPicker-43902fe0.js";import"./DatePicker.vue_vue_type_script_setup_true_lang-3cf9a372.js";import"./PinIcon-b877dc18.js";import"./DetailsIcon-24bf3ae4.js";import"./DragVerticalIcon-2b8c1048.js";import"./ArrowUpRightIcon-1f7d0656.js";import"./AssignmentModal-b1255d73.js";import"./Switch.vue_vue_type_script_setup_true_lang-34bdad39.js";const Xe={key:0,class:"flex items-center"},Ye={key:0},Ze={key:1},Ne={key:2},es={key:3},ss={key:4},ts=["onClick"],as={key:1},ls={key:2,class:"truncate text-base"},os={key:3},ns=["onClick"],us={__name:"LeadsListView",props:N({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:N(["loadMore","updatePageCount","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(w,{expose:O,emit:q}){const L=q,S=ie(),A=J(w,"modelValue"),x=J(w,"list"),I=G(()=>{var n,b;return!!((b=(n=x.value.params)==null?void 0:n.filters)!=null&&b._liked_by)}),{user:C}=ke();function c(n){if(n)return JSON.parse(n).includes(C)}be(A,(n,b)=>{n!==b&&L("updatePageCount",n)});const R=$(null);return O({customListActions:G(()=>{var n;return(n=R.value)==null?void 0:n.customListActions})}),(n,b)=>{const V=T("Button"),o=T("Badge"),D=T("FormControl");return t(),r(ee,null,[u(f(qe),{class:W(n.$attrs.class),columns:w.columns,rows:w.rows,options:{getRowRoute:k=>({name:"Lead",params:{leadId:k.name},query:{view:f(S).query.view,viewType:f(S).params.viewType}}),selectable:w.options.selectable,showTooltip:w.options.showTooltip,resizeColumn:w.options.resizeColumn},"row-key":"name"},{default:v(()=>[u(f(Re),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:b[1]||(b[1]=k=>L("columnWidthUpdated"))},{default:v(()=>[(t(!0),r(ee,null,ge(w.columns,k=>(t(),y(f(Te),{key:k.key,item:k,onColumnWidthUpdated:i=>L("columnWidthUpdated",k)},{default:v(()=>[k.key=="_liked_by"?(t(),y(V,{key:0,variant:"ghosted",class:W(["!h-4",I.value?"fill-red-500":"fill-white"]),onClick:b[0]||(b[0]=()=>L("applyLikeFilter"))},{default:v(()=>[u(ue,{class:"h-4 w-4"})]),_:1},8,["class"])):p("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),u(De,{rows:w.rows},{default:v(({idx:k,column:i,item:d,row:M})=>[i.key==="_assign"?(t(),r("div",Xe,[u(ce,{avatars:d,size:"sm",onClick:j=>L("applyFilter",{event:j,idx:k,column:i,item:d,firstColumn:w.columns[0]})},null,8,["avatars","onClick"])])):(t(),y(f(Ie),{key:1,item:d},{prefix:v(()=>[i.key==="status"?(t(),r("div",Ye,[u(H,{class:W(d.color)},null,8,["class"])])):i.key==="lead_name"?(t(),r("div",Ze,[d.label?(t(),y(f(B),{key:0,class:"flex items-center",image:d.image,label:d.image_label,size:"sm"},null,8,["image","label"])):p("",!0)])):i.key==="organization"?(t(),r("div",Ne,[d?(t(),y(f(B),{key:0,class:"flex items-center",image:d,label:d,size:"sm"},null,8,["image","label"])):p("",!0)])):i.key==="lead_owner"?(t(),r("div",es,[d.full_name?(t(),y(f(B),{key:0,class:"flex items-center",image:d.user_image,label:d.full_name,size:"sm"},null,8,["image","label"])):p("",!0)])):i.key==="mobile_no"?(t(),r("div",ss,[u(se,{class:"h-4 w-4"})])):p("",!0)]),default:v(({label:j})=>[["modified","creation","first_response_time","first_responded_on","response_by"].includes(i.key)?(t(),r("div",{key:0,class:"truncate text-base",onClick:U=>L("applyFilter",{event:U,idx:k,column:i,item:d,firstColumn:w.columns[0]})},[u(f(te),{text:d.label},{default:v(()=>[h("div",null,E(d.timeAgo),1)]),_:2},1032,["text"])],8,ts)):i.key==="_liked_by"?(t(),r("div",as,[i.key=="_liked_by"?(t(),y(V,{key:0,variant:"ghosted",class:W(c(d)?"fill-red-500":"fill-white"),onClick:re(()=>L("likeDoc",{name:M.name,liked:c(d)}),["stop","prevent"])},{default:v(()=>[u(ue,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):p("",!0)])):i.key==="sla_status"?(t(),r("div",ls,[d.value?(t(),y(o,{key:0,variant:"subtle",theme:d.color,size:"md",label:d.value,onClick:U=>L("applyFilter",{event:U,idx:k,column:i,item:d,firstColumn:w.columns[0]})},null,8,["theme","label","onClick"])):p("",!0)])):i.type==="Check"?(t(),r("div",os,[u(D,{type:"checkbox",modelValue:d,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):(t(),r("div",{key:4,class:"truncate text-base",onClick:U=>L("applyFilter",{event:U,idx:k,column:i,item:d,firstColumn:w.columns[0]})},E(j),9,ns))]),_:2},1032,["item"]))]),_:1},8,["rows"]),u(f(Be),null,{actions:v(({selections:k,unselectAll:i})=>[u(f(pe),{options:R.value.bulkActions(k,i)},{default:v(()=>[u(V,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["class","columns","rows","options"]),A.value?(t(),y(f(Oe),{key:0,class:"border-t sm:px-5 px-3 py-2",modelValue:A.value,"onUpdate:modelValue":b[2]||(b[2]=k=>A.value=k),options:{rowCount:w.options.rowCount,totalCount:w.options.totalCount},onLoadMore:b[3]||(b[3]=k=>L("loadMore"))},null,8,["modelValue","options"])):p("",!0),u(Se,{ref_key:"listBulkActionsRef",ref:R,modelValue:x.value,"onUpdate:modelValue":b[4]||(b[4]=k=>x.value=k),doctype:"CRM Lead"},null,8,["modelValue"])],64)}}},is={class:"bg-white px-4 pb-6 pt-5 sm:px-6"},rs={class:"mb-5 flex items-center justify-between"},ds={class:"text-2xl font-semibold leading-6 text-gray-900"},cs={class:"flex items-center gap-1"},_s={class:"px-4 pb-7 pt-4 sm:px-6"},ms={class:"flex flex-row-reverse gap-2"},ps={__name:"LeadModal",props:N({defaults:Object},{modelValue:{},modelModifiers:{},quickEntry:{},quickEntryModifiers:{}}),emits:["update:modelValue","update:quickEntry"],setup(w){const O=w,{getUser:q,isManager:L}=me(),{getLeadStatus:S,statusOptions:A}=_e(),x=J(w,"modelValue"),I=we(),C=$(null),c=$(!1),R=le({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["quickEntryFields","CRM Lead"],params:{doctype:"CRM Lead",type:"Quick Entry"},auto:!0,transform:i=>i.forEach(d=>{d.fields.forEach(M=>{M.name=="status"?(M.type="Select",M.options=V.value,M.prefix=S(n.status).iconColorClass):M.name=="lead_owner"&&(M.type="User")})})}),n=de({salutation:"",first_name:"",last_name:"",email:"",mobile_no:"",gender:"",organization:"",website:"",no_of_employees:"",territory:"",annual_revenue:"",industry:"",status:"",lead_owner:""}),b=le({url:"frappe.client.insert",makeParams(i){return{doc:{doctype:"CRM Lead",...i}}}}),V=G(()=>{let i=A("lead");return n.status||(n.status=i[0].value),i});function o(){n.website&&!n.website.startsWith("http")&&(n.website="https://"+n.website),b.submit(n,{validate(){if(C.value=null,!n.first_name)return C.value=__("First Name is mandatory"),C.value;if(n.annual_revenue&&(n.annual_revenue=n.annual_revenue.replace(/,/g,""),isNaN(n.annual_revenue)))return C.value=__("Annual Revenue should be a number"),C.value;if(n.mobile_no&&isNaN(n.mobile_no.replace(/[-+() ]/g,"")))return C.value=__("Mobile No should be a number"),C.value;if(n.email&&!n.email.includes("@"))return C.value=__("Invalid Email"),C.value;if(!n.status)return C.value=__("Status is required"),C.value;c.value=!0},onSuccess(i){he("lead_created"),c.value=!1,x.value=!1,I.push({name:"Lead",params:{leadId:i.name}})},onError(i){if(c.value=!1,!i.messages){C.value=i.message;return}C.value=i.messages.join(`
`)}})}const D=J(w,"quickEntry");function k(){D.value=!0,xe(()=>{x.value=!1})}return Ce(()=>{Object.assign(n,O.defaults),n.lead_owner||(n.lead_owner=q().name),!n.status&&V.value[0].value&&(n.status=V.value[0].value)}),(i,d)=>{const M=T("Button"),j=T("FeatherIcon"),U=T("ErrorMessage"),P=T("Dialog");return t(),y(P,{modelValue:x.value,"onUpdate:modelValue":d[1]||(d[1]=Q=>x.value=Q),options:{size:"3xl"}},{body:v(()=>[h("div",is,[h("div",rs,[h("div",null,[h("h3",ds,E(i.__("Create Lead")),1)]),h("div",cs,[f(L)()?(t(),y(M,{key:0,variant:"ghost",class:"w-7",onClick:k},{default:v(()=>[u(Fe,{class:"h-4 w-4"})]),_:1})):p("",!0),u(M,{variant:"ghost",class:"w-7",onClick:d[0]||(d[0]=Q=>x.value=!1)},{default:v(()=>[u(j,{name:"x",class:"h-4 w-4"})]),_:1})])]),h("div",null,[f(R).data?(t(),y(Ke,{key:0,sections:f(R).data,data:n},null,8,["sections","data"])):p("",!0),C.value?(t(),y(U,{key:1,class:"mt-4",message:i.__(C.value)},null,8,["message"])):p("",!0)])]),h("div",_s,[h("div",ms,[u(M,{variant:"solid",label:i.__("Create"),loading:c.value,onClick:o},null,8,["label","loading"])])])]),_:1},8,["modelValue"])}}},fs={class:"flex items-center gap-2"},vs={key:0},ys={key:1},ks={key:2},bs={key:3},gs={key:4},ws={key:5,class:"truncate text-base"},Cs={key:6,class:"truncate text-base"},hs={key:7,class:"truncate text-base"},xs={key:8,class:"text-gray-500"},Vs={key:0,class:"truncate flex items-center gap-2"},$s={key:0},Ls={key:1},Ms={key:2},zs={key:3},Es={key:4,class:"truncate text-base"},Us={key:5,class:"truncate text-base"},As={key:6,class:"flex items-center"},Rs={key:7,class:"truncate text-base"},Ts={class:"flex gap-2 items-center justify-between"},Is={class:"text-gray-600 flex items-center gap-1.5"},Bs={key:0},qs=h("span",{class:"text-3xl leading-[0]"}," · ",-1),Ss={key:1},Ds=h("span",{class:"text-3xl leading-[0]"}," · ",-1),js={key:2},Ps=h("span",{class:"text-3xl leading-[0]"}," · ",-1),Ws={key:3},Os={key:2,class:"flex h-full items-center justify-center"},Qs={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},ht={__name:"Leads",setup(w){const{makeCall:O}=je(),{getUser:q}=me(),{getLeadStatus:L}=_e(),S=ie(),A=$(null),x=$(!1),I=$(!1),C=de({}),c=$({}),R=$(1),n=$(1),b=$(20),V=$(null);function o(m,s){var g;function _(l){return l&&typeof l=="object"&&!Array.isArray(l)?l:{label:l}}return _((g=D.value)==null?void 0:g.find(l=>l.name==m)[s])}const D=G(()=>{var m,s,_,g,l,e,a;return(s=(m=c.value)==null?void 0:m.data)!=null&&s.data?c.value.data.view_type==="group_by"?(g=(_=c.value)==null?void 0:_.data.group_by_field)!=null&&g.name?k((l=c.value)==null?void 0:l.data.data,(e=c.value)==null?void 0:e.data.group_by_field):[]:c.value.data.view_type==="kanban"?i(c.value.data.data):d((a=c.value)==null?void 0:a.data.data):[]});function k(m,s){var g;let _=[];return(g=s.options)==null||g.forEach(l=>{let e=[];l?e=m.filter(z=>z[s.name]==l):e=m.filter(z=>!z[s.name]);let a={label:s.label,group:l||__(" "),collapsed:!1,rows:d(e)};s.name=="status"&&(a.icon=()=>{var z;return K(H,{class:(z=L(l))==null?void 0:z.iconColorClass})}),_.push(a)}),_||m}function i(m){let s=[];return m.forEach(_=>{var g;(g=_.data)==null||g.forEach(l=>{s.push(l)})}),d(s)}function d(m){return m.map(s=>{var g;let _={};return(g=c.value)==null||g.data.rows.forEach(l=>{var e;if(_[l]=s[l],l=="lead_name")_[l]={label:s.lead_name,image:s.image,image_label:s.first_name};else if(l=="organization")_[l]=s.organization;else if(l==="website")_[l]=Pe(s.website);else if(l=="status")_[l]={label:s.status,color:(e=L(s.status))==null?void 0:e.iconColorClass};else if(l=="sla_status"){let a=s.sla_status,z=a,ae=s.sla_status=="Failed"?"red":s.sla_status=="Fulfilled"?"green":"orange";a=="First Response Due"&&(a=__(X(s.response_by)),z=Y(s.response_by,Z),new Date(s.response_by)<new Date&&(ae="red")),_[l]={label:z,value:a,color:ae}}else if(l=="lead_owner")_[l]={label:s.lead_owner&&q(s.lead_owner).full_name,...s.lead_owner&&q(s.lead_owner)};else if(l=="_assign"){let a=JSON.parse(s._assign||"[]");!a.length&&s.lead_owner&&(a=[s.lead_owner]),_[l]=a.map(z=>({name:z,image:q(z).user_image,label:q(z).full_name}))}else if(["modified","creation"].includes(l))_[l]={label:Y(s[l],Z),timeAgo:__(X(s[l]))};else if(["first_response_time","first_responded_on","response_by"].includes(l)){let a=l=="response_by"?"response_by":"first_responded_on";_[l]={label:s[a]?Y(s[a],Z):"",timeAgo:s[l]?l=="first_response_time"?We(s[l]):__(X(s[l])):""}}}),_._email_count=s._email_count,_._note_count=s._note_count,_._task_count=s._task_count,_._comment_count=s._comment_count,_})}function M(m){let s=c.value.params.column_field;s&&(C[s]=m.column.name),x.value=!0}function j(m){var g;let s=((g=o(m,"mobile_no"))==null?void 0:g.label)||"";return[{icon:K(se,{class:"h-4 w-4"}),label:__("Make a Call"),onClick:()=>O(s),condition:()=>s&&Ge.value},{icon:K(oe,{class:"h-4 w-4"}),label:__("New Note"),onClick:()=>fe(m)},{icon:K(ne,{class:"h-4 w-4"}),label:__("New Task"),onClick:()=>ye(m)}].filter(l=>l.condition?l.condition():!0)}const U=$(""),P=$(!1),Q=$({title:"",content:""});function fe(m){U.value=m,P.value=!0}const F=$(!1),ve=$({title:"",description:"",assigned_to:"",due_date:"",priority:"Low",status:"Backlog"});function ye(m){U.value=m,F.value=!0}return(m,s)=>{const _=T("FeatherIcon"),g=T("Button"),l=T("Badge");return t(),r(ee,null,[u(Ae,null,{"left-header":v(()=>[u($e,{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=e=>V.value=e),routeName:"Leads"},null,8,["modelValue"])]),"right-header":v(()=>{var e;return[(e=A.value)!=null&&e.customListActions?(t(),y(Le,{key:0,actions:A.value.customListActions},null,8,["actions"])):p("",!0),u(g,{variant:"solid",label:m.__("Create"),onClick:s[1]||(s[1]=a=>x.value=!0)},{prefix:v(()=>[u(_,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),u(Ve,{ref_key:"viewControls",ref:V,modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=e=>c.value=e),loadMore:R.value,"onUpdate:loadMore":s[3]||(s[3]=e=>R.value=e),resizeColumn:n.value,"onUpdate:resizeColumn":s[4]||(s[4]=e=>n.value=e),updatedPageCount:b.value,"onUpdate:updatedPageCount":s[5]||(s[5]=e=>b.value=e),doctype:"CRM Lead",filters:{converted:0},options:{allowedViews:["list","group_by","kanban"]}},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),f(S).params.viewType=="kanban"?(t(),y(Qe,{key:0,modelValue:c.value,"onUpdate:modelValue":s[7]||(s[7]=e=>c.value=e),options:{getRoute:e=>({name:"Lead",params:{leadId:e.name},query:{view:f(S).query.view,viewType:f(S).params.viewType}}),onNewClick:e=>M(e)},onUpdate:s[8]||(s[8]=e=>V.value.updateKanbanSettings(e)),onLoadMore:s[9]||(s[9]=e=>V.value.loadMoreKanban(e))},{title:v(({titleField:e,itemName:a})=>[h("div",fs,[e==="status"?(t(),r("div",vs,[u(H,{class:W(o(a,e).color)},null,8,["class"])])):e==="organization"&&o(a,e).label?(t(),r("div",ys,[u(f(B),{class:"flex items-center",image:o(a,e).logo,label:o(a,e).label,size:"sm"},null,8,["image","label"])])):e==="lead_name"&&o(a,e).label?(t(),r("div",ks,[u(f(B),{class:"flex items-center",image:o(a,e).image,label:o(a,e).image_label,size:"sm"},null,8,["image","label"])])):e==="lead_owner"&&o(a,e).full_name?(t(),r("div",bs,[u(f(B),{class:"flex items-center",image:o(a,e).user_image,label:o(a,e).full_name,size:"sm"},null,8,["image","label"])])):e==="mobile_no"?(t(),r("div",gs,[u(se,{class:"h-4 w-4"})])):p("",!0),["modified","creation","first_response_time","first_responded_on","response_by"].includes(e)?(t(),r("div",ws,[u(f(te),{text:o(a,e).label},{default:v(()=>[h("div",null,E(o(a,e).timeAgo),1)]),_:2},1032,["text"])])):e==="sla_status"?(t(),r("div",Cs,[o(a,e).value?(t(),y(l,{key:0,variant:"subtle",theme:o(a,e).color,size:"md",label:o(a,e).value},null,8,["theme","label"])):p("",!0)])):o(a,e).label?(t(),r("div",hs,E(o(a,e).label),1)):(t(),r("div",xs,E(m.__("No Title")),1))])]),fields:v(({fieldName:e,itemName:a})=>[o(a,e).label?(t(),r("div",Vs,[e==="status"?(t(),r("div",$s,[u(H,{class:W(o(a,e).color)},null,8,["class"])])):e==="organization"&&o(a,e).label?(t(),r("div",Ls,[u(f(B),{class:"flex items-center",image:o(a,e).logo,label:o(a,e).label,size:"xs"},null,8,["image","label"])])):e==="lead_name"?(t(),r("div",Ms,[o(a,e).label?(t(),y(f(B),{key:0,class:"flex items-center",image:o(a,e).image,label:o(a,e).image_label,size:"xs"},null,8,["image","label"])):p("",!0)])):e==="lead_owner"?(t(),r("div",zs,[o(a,e).full_name?(t(),y(f(B),{key:0,class:"flex items-center",image:o(a,e).user_image,label:o(a,e).full_name,size:"xs"},null,8,["image","label"])):p("",!0)])):p("",!0),["modified","creation","first_response_time","first_responded_on","response_by"].includes(e)?(t(),r("div",Es,[u(f(te),{text:o(a,e).label},{default:v(()=>[h("div",null,E(o(a,e).timeAgo),1)]),_:2},1032,["text"])])):e==="sla_status"?(t(),r("div",Us,[o(a,e).value?(t(),y(l,{key:0,variant:"subtle",theme:o(a,e).color,size:"md",label:o(a,e).value},null,8,["theme","label"])):p("",!0)])):e==="_assign"?(t(),r("div",As,[u(ce,{avatars:o(a,e).label,size:"xs"},null,8,["avatars"])])):(t(),r("div",Rs,E(o(a,e).label),1))])):p("",!0)]),actions:v(({itemName:e})=>[h("div",Ts,[h("div",Is,[u(Me,{class:"h-4 w-4"}),o(e,"_email_count").label?(t(),r("span",Bs,E(o(e,"_email_count").label),1)):p("",!0),qs,u(oe,{class:"h-4 w-4"}),o(e,"_note_count").label?(t(),r("span",Ss,E(o(e,"_note_count").label),1)):p("",!0),Ds,u(ne,{class:"h-4 w-4"}),o(e,"_task_count").label?(t(),r("span",js,E(o(e,"_task_count").label),1)):p("",!0),Ps,u(Ee,{class:"h-4 w-4"}),o(e,"_comment_count").label?(t(),r("span",Ws,E(o(e,"_comment_count").label),1)):p("",!0)]),u(f(pe),{class:"flex items-center gap-2",options:j(e),variant:"ghost",onClick:s[6]||(s[6]=re(()=>{},["stop","prevent"]))},{default:v(()=>[u(g,{icon:"plus",variant:"ghost"})]),_:2},1032,["options"])])]),_:1},8,["modelValue","options"])):c.value.data&&D.value.length?(t(),y(us,{key:1,ref_key:"leadsListView",ref:A,modelValue:c.value.data.page_length_count,"onUpdate:modelValue":s[10]||(s[10]=e=>c.value.data.page_length_count=e),list:c.value,"onUpdate:list":s[11]||(s[11]=e=>c.value=e),rows:D.value,columns:c.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:c.value.data.row_count,totalCount:c.value.data.total_count},onLoadMore:s[12]||(s[12]=()=>R.value++),onColumnWidthUpdated:s[13]||(s[13]=()=>n.value++),onUpdatePageCount:s[14]||(s[14]=e=>b.value=e),onApplyFilter:s[15]||(s[15]=e=>V.value.applyFilter(e)),onApplyLikeFilter:s[16]||(s[16]=e=>V.value.applyLikeFilter(e)),onLikeDoc:s[17]||(s[17]=e=>V.value.likeDoc(e))},null,8,["modelValue","list","rows","columns","options"])):c.value.data?(t(),r("div",Os,[h("div",Qs,[u(Ue,{class:"h-10 w-10"}),h("span",null,E(m.__("No {0} Found",[m.__("Leads")])),1),u(g,{label:m.__("Create"),onClick:s[18]||(s[18]=e=>x.value=!0)},{prefix:v(()=>[u(_,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):p("",!0),x.value?(t(),y(ps,{key:3,modelValue:x.value,"onUpdate:modelValue":s[19]||(s[19]=e=>x.value=e),quickEntry:I.value,"onUpdate:quickEntry":s[20]||(s[20]=e=>I.value=e),defaults:C},null,8,["modelValue","quickEntry","defaults"])):p("",!0),P.value?(t(),y(ze,{key:4,modelValue:P.value,"onUpdate:modelValue":s[21]||(s[21]=e=>P.value=e),note:Q.value,doctype:"CRM Lead",doc:U.value},null,8,["modelValue","note","doc"])):p("",!0),F.value?(t(),y(He,{key:5,modelValue:F.value,"onUpdate:modelValue":s[22]||(s[22]=e=>F.value=e),task:ve.value,doctype:"CRM Lead",doc:U.value},null,8,["modelValue","task","doc"])):p("",!0),I.value?(t(),y(Je,{key:6,modelValue:I.value,"onUpdate:modelValue":s[23]||(s[23]=e=>I.value=e)},null,8,["modelValue"])):p("",!0)],64)}}};export{ht as default};
//# sourceMappingURL=Leads-bd5976b8.js.map