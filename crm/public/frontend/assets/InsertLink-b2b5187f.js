import{_ as d,a5 as m,a3 as g,ab as L,r as i,b as f,c as p,Q as c,a8 as D,a9 as h,d as a,w as l,T as _,H as w,F as v}from"./index-44d5e71e.js";const x={name:"InsertLink",props:["editor"],components:{Button:m,FormControl:g,Dialog:L},data(){return{setLinkDialog:{url:"",show:!1}}},methods:{openDialog(){let t=this.editor.getAttributes("link").href;t&&(this.setLinkDialog.url=t),this.setLinkDialog.show=!0},setLink(t){t===""?this.editor.chain().focus().extendMarkRange("link").unsetLink().run():this.editor.chain().focus().extendMarkRange("link").setLink({href:t}).run(),this.setLinkDialog.show=!1,this.setLinkDialog.url=""},reset(){this.setLinkDialog=this.$options.data().setLinkDialog}}};function V(t,e,C,b,n,s){const r=i("FormControl"),u=i("Button"),k=i("Dialog");return f(),p(v,null,[c(t.$slots,"default",D(h({onClick:s.openDialog}))),a(k,{options:{title:"Set Link"},modelValue:n.setLinkDialog.show,"onUpdate:modelValue":e[3]||(e[3]=o=>n.setLinkDialog.show=o),onAfterLeave:s.reset},{"body-content":l(()=>[a(r,{type:"text",label:"URL",modelValue:n.setLinkDialog.url,"onUpdate:modelValue":e[0]||(e[0]=o=>n.setLinkDialog.url=o),onKeydown:e[1]||(e[1]=_(o=>s.setLink(o.target.value),["enter"]))},null,8,["modelValue"])]),actions:l(()=>[a(u,{variant:"solid",onClick:e[2]||(e[2]=o=>s.setLink(n.setLinkDialog.url)),class:"w-full"},{default:l(()=>[w(" Save ")]),_:1})]),_:1},8,["modelValue","onAfterLeave"])],64)}const F=d(x,[["render",V]]);export{F as default};
//# sourceMappingURL=InsertLink-b2b5187f.js.map
