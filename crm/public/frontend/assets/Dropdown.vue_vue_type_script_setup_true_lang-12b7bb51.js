import{l as I,ah as A,O as U,cC as Ee,j as M,cD as ke,cE as Oe,af as Pe,cx as _e,ap as $e,cy as Q,ai as X,ak as re,an as Ce,aL as Re,cG as Ne,ao as oe,a as ae,al as Le,ag as he,A as $,dd as We,am as Be,de as Ve,df as k,aq as x,dg as He,av as le,dh as ye,ae as Ye,u as z,k as j,br as je,bN as qe,bU as be,bq as we,L as Se,ca as ze,bd as Ue,c3 as Ge,v as Je,b as P,g as V,w as L,d as te,Q as Ke,a8 as Qe,C as se,a5 as Xe,H as Ze,t as ne,n as ie,c as q,f as ue,p as ce,F as fe,G as de,D as et,e as tt,aD as nt}from"./index-44d5e71e.js";let me=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function pe(e){var t,a;let o=(t=e.innerText)!=null?t:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return o;let i=!1;for(let u of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),i=!0;let n=i?(a=l.innerText)!=null?a:"":o;return me.test(n)&&(n=n.replace(me,"")),n}function rt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let a=e.getAttribute("aria-labelledby");if(a){let o=a.split(" ").map(l=>{let i=document.getElementById(l);if(i){let n=i.getAttribute("aria-label");return typeof n=="string"?n.trim():pe(i).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return pe(e).trim()}function at(e){let t=I(""),a=I("");return()=>{let o=A(e);if(!o)return"";let l=o.innerText;if(t.value===l)return a.value;let i=rt(o).trim().toLowerCase();return t.value=l,a.value=i,i}}var ot=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ot||{}),lt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(lt||{});function st(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ie=Symbol("MenuContext");function Z(e){let t=Be(Ie,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Z),a}return t}let it=U({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:a}){let o=I(1),l=I(null),i=I(null),n=I([]),u=I(""),s=I(null),f=I(1);function p(r=c=>c){let c=s.value!==null?n.value[s.value]:null,m=Ye(r(n.value.slice()),v=>A(v.dataRef.domRef)),h=c?m.indexOf(c):null;return h===-1&&(h=null),{items:m,activeItemIndex:h}}let d={menuState:o,buttonRef:l,itemsRef:i,items:n,searchQuery:u,activeItemIndex:s,activationTrigger:f,closeMenu:()=>{o.value=1,s.value=null},openMenu:()=>o.value=0,goToItem(r,c,m){let h=p(),v=Ve(r===k.Specific?{focus:k.Specific,id:c}:{focus:r},{resolveItems:()=>h.items,resolveActiveIndex:()=>h.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});u.value="",s.value=v,f.value=m??1,n.value=h.items},search(r){let c=u.value!==""?0:1;u.value+=r.toLowerCase();let m=(s.value!==null?n.value.slice(s.value+c).concat(n.value.slice(0,s.value+c)):n.value).find(v=>v.dataRef.textValue.startsWith(u.value)&&!v.dataRef.disabled),h=m?n.value.indexOf(m):-1;h===-1||h===s.value||(s.value=h,f.value=1)},clearSearch(){u.value=""},registerItem(r,c){let m=p(h=>[...h,{id:r,dataRef:c}]);n.value=m.items,s.value=m.activeItemIndex,f.value=1},unregisterItem(r){let c=p(m=>{let h=m.findIndex(v=>v.id===r);return h!==-1&&m.splice(h,1),m});n.value=c.items,s.value=c.activeItemIndex,f.value=1}};return Ee([l,i],(r,c)=>{var m;d.closeMenu(),ke(c,Oe.Loose)||(r.preventDefault(),(m=A(l))==null||m.focus())},M(()=>o.value===0)),Pe(Ie,d),_e(M(()=>$e(o.value,{0:Q.Open,1:Q.Closed}))),()=>{let r={open:o.value===0,close:d.closeMenu};return X({ourProps:{},theirProps:e,slot:r,slots:t,attrs:a,name:"Menu"})}}}),ut=U({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:o}){var l;let i=(l=e.id)!=null?l:`headlessui-menu-button-${re()}`,n=Z("MenuButton");o({el:n.buttonRef,$el:n.buttonRef});function u(d){switch(d.key){case x.Space:case x.Enter:case x.ArrowDown:d.preventDefault(),d.stopPropagation(),n.openMenu(),$(()=>{var r;(r=A(n.itemsRef))==null||r.focus({preventScroll:!0}),n.goToItem(k.First)});break;case x.ArrowUp:d.preventDefault(),d.stopPropagation(),n.openMenu(),$(()=>{var r;(r=A(n.itemsRef))==null||r.focus({preventScroll:!0}),n.goToItem(k.Last)});break}}function s(d){switch(d.key){case x.Space:d.preventDefault();break}}function f(d){e.disabled||(n.menuState.value===0?(n.closeMenu(),$(()=>{var r;return(r=A(n.buttonRef))==null?void 0:r.focus({preventScroll:!0})})):(d.preventDefault(),n.openMenu(),st(()=>{var r;return(r=A(n.itemsRef))==null?void 0:r.focus({preventScroll:!0})})))}let p=Ce(M(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var d;let r={open:n.menuState.value===0},{...c}=e,m={ref:n.buttonRef,id:i,type:p.value,"aria-haspopup":"menu","aria-controls":(d=A(n.itemsRef))==null?void 0:d.id,"aria-expanded":n.menuState.value===0,onKeydown:u,onKeyup:s,onClick:f};return X({ourProps:m,theirProps:c,slot:r,attrs:t,slots:a,name:"MenuButton"})}}}),ct=U({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:o}){var l;let i=(l=e.id)!=null?l:`headlessui-menu-items-${re()}`,n=Z("MenuItems"),u=I(null);o({el:n.itemsRef,$el:n.itemsRef}),Re({container:M(()=>A(n.itemsRef)),enabled:M(()=>n.menuState.value===0),accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});function s(r){var c;switch(u.value&&clearTimeout(u.value),r.key){case x.Space:if(n.searchQuery.value!=="")return r.preventDefault(),r.stopPropagation(),n.search(r.key);case x.Enter:if(r.preventDefault(),r.stopPropagation(),n.activeItemIndex.value!==null){let m=n.items.value[n.activeItemIndex.value];(c=A(m.dataRef.domRef))==null||c.click()}n.closeMenu(),ye(A(n.buttonRef));break;case x.ArrowDown:return r.preventDefault(),r.stopPropagation(),n.goToItem(k.Next);case x.ArrowUp:return r.preventDefault(),r.stopPropagation(),n.goToItem(k.Previous);case x.Home:case x.PageUp:return r.preventDefault(),r.stopPropagation(),n.goToItem(k.First);case x.End:case x.PageDown:return r.preventDefault(),r.stopPropagation(),n.goToItem(k.Last);case x.Escape:r.preventDefault(),r.stopPropagation(),n.closeMenu(),$(()=>{var m;return(m=A(n.buttonRef))==null?void 0:m.focus({preventScroll:!0})});break;case x.Tab:r.preventDefault(),r.stopPropagation(),n.closeMenu(),$(()=>He(A(n.buttonRef),r.shiftKey?le.Previous:le.Next));break;default:r.key.length===1&&(n.search(r.key),u.value=setTimeout(()=>n.clearSearch(),350));break}}function f(r){switch(r.key){case x.Space:r.preventDefault();break}}let p=Ne(),d=M(()=>p!==null?(p.value&Q.Open)===Q.Open:n.menuState.value===0);return()=>{var r,c;let m={open:n.menuState.value===0},{...h}=e,v={"aria-activedescendant":n.activeItemIndex.value===null||(r=n.items.value[n.activeItemIndex.value])==null?void 0:r.id,"aria-labelledby":(c=A(n.buttonRef))==null?void 0:c.id,id:i,onKeydown:s,onKeyup:f,role:"menu",tabIndex:0,ref:n.itemsRef};return X({ourProps:v,theirProps:h,slot:m,attrs:t,slots:a,features:oe.RenderStrategy|oe.Static,visible:d.value,name:"MenuItems"})}}}),ft=U({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:a,expose:o}){var l;let i=(l=e.id)!=null?l:`headlessui-menu-item-${re()}`,n=Z("MenuItem"),u=I(null);o({el:u,$el:u});let s=M(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===i:!1),f=at(u),p=M(()=>({disabled:e.disabled,get textValue(){return f()},domRef:u}));ae(()=>n.registerItem(i,p)),Le(()=>n.unregisterItem(i)),he(()=>{n.menuState.value===0&&s.value&&n.activationTrigger.value!==0&&$(()=>{var g,D;return(D=(g=A(u))==null?void 0:g.scrollIntoView)==null?void 0:D.call(g,{block:"nearest"})})});function d(g){if(e.disabled)return g.preventDefault();n.closeMenu(),ye(A(n.buttonRef))}function r(){if(e.disabled)return n.goToItem(k.Nothing);n.goToItem(k.Specific,i)}let c=We();function m(g){c.update(g)}function h(g){c.wasMoved(g)&&(e.disabled||s.value||n.goToItem(k.Specific,i,0))}function v(g){c.wasMoved(g)&&(e.disabled||s.value&&n.goToItem(k.Nothing))}return()=>{let{disabled:g}=e,D={active:s.value,disabled:g,close:n.closeMenu},{...F}=e;return X({ourProps:{id:i,ref:u,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:r,onPointerenter:m,onMouseenter:m,onPointermove:h,onMousemove:h,onPointerleave:v,onMouseleave:v},theirProps:{...a,...F},slot:D,attrs:a,slots:t,name:"MenuItem"})}}});function H(e){return je()?(qe(e),!0):!1}function S(e){return typeof e=="function"?e():z(e)}const Y=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dt=e=>e!=null,mt=Object.prototype.toString,pt=e=>mt.call(e)==="[object Object]",C=()=>{},vt=gt();function gt(){var e,t;return Y&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function De(e,t){function a(...o){return new Promise((l,i)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(i)})}return a}const Me=e=>e();function xe(e,t={}){let a,o,l=C;const i=u=>{clearTimeout(u),l(),l=C};return u=>{const s=S(e),f=S(t.maxWait);return a&&i(a),s<=0||f!==void 0&&f<=0?(o&&(i(o),o=null),Promise.resolve(u())):new Promise((p,d)=>{l=t.rejectOnCancel?d:p,f&&!o&&(o=setTimeout(()=>{a&&i(a),o=null,p(u())},f)),a=setTimeout(()=>{o&&i(o),o=null,p(u())},s)})}}function ht(e=Me){const t=I(!0);function a(){t.value=!1}function o(){t.value=!0}const l=(...i)=>{t.value&&e(...i)};return{isActive:be(t),pause:a,resume:o,eventFilter:l}}function yt(e){return e||we()}function qt(e,t=200,a={}){return De(xe(t,a),e)}function Ae(e,t,a={}){const{eventFilter:o=Me,...l}=a;return j(e,De(o,t),l)}function bt(e,t,a={}){const{eventFilter:o,...l}=a,{eventFilter:i,pause:n,resume:u,isActive:s}=ht(o);return{stop:Ae(e,t,{...l,eventFilter:i}),pause:n,resume:u,isActive:s}}function wt(e,t={}){if(!Se(e))return ze(e);const a=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const o in e.value)a[o]=Ue(()=>({get(){return e.value[o]},set(l){var i;if((i=S(t.replaceRef))!=null?i:!0)if(Array.isArray(e.value)){const u=[...e.value];u[o]=l,e.value=u}else{const u={...e.value,[o]:l};Object.setPrototypeOf(u,Object.getPrototypeOf(e.value)),e.value=u}else e.value[o]=l}}));return a}function Fe(e,t=!0,a){yt()?ae(e,a):t?e():$(e)}const St=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,It=/[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function Dt(e,t,a,o){let l=e<12?"AM":"PM";return o&&(l=l.split("").reduce((i,n)=>i+=`${n}.`,"")),a?l.toLowerCase():l}function W(e){const t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])}function Mt(e,t,a={}){var o;const l=e.getFullYear(),i=e.getMonth(),n=e.getDate(),u=e.getHours(),s=e.getMinutes(),f=e.getSeconds(),p=e.getMilliseconds(),d=e.getDay(),r=(o=a.customMeridiem)!=null?o:Dt,c={Yo:()=>W(l),YY:()=>String(l).slice(-2),YYYY:()=>l,M:()=>i+1,Mo:()=>W(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(a.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(a.locales,{month:"long"}),D:()=>String(n),Do:()=>W(n),DD:()=>`${n}`.padStart(2,"0"),H:()=>String(u),Ho:()=>W(u),HH:()=>`${u}`.padStart(2,"0"),h:()=>`${u%12||12}`.padStart(1,"0"),ho:()=>W(u%12||12),hh:()=>`${u%12||12}`.padStart(2,"0"),m:()=>String(s),mo:()=>W(s),mm:()=>`${s}`.padStart(2,"0"),s:()=>String(f),so:()=>W(f),ss:()=>`${f}`.padStart(2,"0"),SSS:()=>`${p}`.padStart(3,"0"),d:()=>d,dd:()=>e.toLocaleDateString(a.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(a.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(a.locales,{weekday:"long"}),A:()=>r(u,s),AA:()=>r(u,s,!1,!0),a:()=>r(u,s,!0),aa:()=>r(u,s,!0,!0)};return t.replace(It,(m,h)=>{var v,g;return(g=h??((v=c[m])==null?void 0:v.call(c)))!=null?g:m})}function xt(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(St);if(t){const a=t[2]-1||0,o=(t[7]||"0").substring(0,3);return new Date(t[1],a,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(e)}function zt(e,t="HH:mm:ss",a={}){return M(()=>Mt(xt(S(e)),S(t),a))}function At(e,t=1e3,a={}){const{immediate:o=!0,immediateCallback:l=!1}=a;let i=null;const n=I(!1);function u(){i&&(clearInterval(i),i=null)}function s(){n.value=!1,u()}function f(){const p=S(t);p<=0||(n.value=!0,l&&e(),u(),i=setInterval(e,p))}if(o&&Y&&f(),Se(t)||typeof t=="function"){const p=j(t,()=>{n.value&&Y&&f()});H(p)}return H(s),{isActive:n,pause:s,resume:f}}function Ut(e,t,a={}){const{debounce:o=0,maxWait:l=void 0,...i}=a;return Ae(e,t,{...i,eventFilter:xe(o,{maxWait:l})})}function Gt(e,t,a){const o=j(e,(...l)=>($(()=>o()),t(...l)),a);return o}function N(e){var t;const a=S(e);return(t=a==null?void 0:a.$el)!=null?t:a}const _=Y?window:void 0,Jt=Y?window.document:void 0;function R(...e){let t,a,o,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,l]=e,t=_):[t,a,o,l]=e,!t)return C;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const i=[],n=()=>{i.forEach(p=>p()),i.length=0},u=(p,d,r,c)=>(p.addEventListener(d,r,c),()=>p.removeEventListener(d,r,c)),s=j(()=>[N(t),S(l)],([p,d])=>{if(n(),!p)return;const r=pt(d)?{...d}:d;i.push(...a.flatMap(c=>o.map(m=>u(p,c,m,r))))},{immediate:!0,flush:"post"}),f=()=>{s(),n()};return H(f),f}let ve=!1;function Kt(e,t,a={}){const{window:o=_,ignore:l=[],capture:i=!0,detectIframe:n=!1}=a;if(!o)return C;vt&&!ve&&(ve=!0,Array.from(o.document.body.children).forEach(r=>r.addEventListener("click",C)),o.document.documentElement.addEventListener("click",C));let u=!0;const s=r=>l.some(c=>{if(typeof c=="string")return Array.from(o.document.querySelectorAll(c)).some(m=>m===r.target||r.composedPath().includes(m));{const m=N(c);return m&&(r.target===m||r.composedPath().includes(m))}}),p=[R(o,"click",r=>{const c=N(e);if(!(!c||c===r.target||r.composedPath().includes(c))){if(r.detail===0&&(u=!s(r)),!u){u=!0;return}t(r)}},{passive:!0,capture:i}),R(o,"pointerdown",r=>{const c=N(e);u=!s(r)&&!!(c&&!r.composedPath().includes(c))},{passive:!0}),n&&R(o,"blur",r=>{setTimeout(()=>{var c;const m=N(e);((c=o.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(r)},0)})].filter(Boolean);return()=>p.forEach(r=>r())}function Ft(){const e=I(!1),t=we();return t&&ae(()=>{e.value=!0},t),e}function Te(e){const t=Ft();return M(()=>(t.value,!!e()))}function Tt(e,t={}){const{immediate:a=!0,fpsLimit:o=void 0,window:l=_}=t,i=I(!1),n=o?1e3/o:null;let u=0,s=null;function f(r){if(!i.value||!l)return;u||(u=r);const c=r-u;if(n&&c<n){s=l.requestAnimationFrame(f);return}u=r,e({delta:c,timestamp:r}),s=l.requestAnimationFrame(f)}function p(){!i.value&&l&&(i.value=!0,u=0,s=l.requestAnimationFrame(f))}function d(){i.value=!1,s!=null&&l&&(l.cancelAnimationFrame(s),s=null)}return a&&p(),H(d),{isActive:be(i),pause:d,resume:p}}function Et(e,t={}){const{window:a=_}=t,o=Te(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let l;const i=I(!1),n=f=>{i.value=f.matches},u=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",n):l.removeListener(n))},s=he(()=>{o.value&&(u(),l=a.matchMedia(S(e)),"addEventListener"in l?l.addEventListener("change",n):l.addListener(n),i.value=l.matches)});return H(()=>{s(),u(),l=void 0}),i}const J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__",kt=Ot();function Ot(){return K in J||(J[K]=J[K]||{}),J[K]}function Pt(e,t){return kt[e]||t}function _t(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const $t={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ge="vueuse-storage";function Qt(e,t,a,o={}){var l;const{flush:i="pre",deep:n=!0,listenToStorageChanges:u=!0,writeDefaults:s=!0,mergeDefaults:f=!1,shallow:p,window:d=_,eventFilter:r,onError:c=y=>{console.error(y)},initOnMounted:m}=o,h=(p?Ge:I)(typeof t=="function"?t():t);if(!a)try{a=Pt("getDefaultStorage",()=>{var y;return(y=_)==null?void 0:y.localStorage})()}catch(y){c(y)}if(!a)return h;const v=S(t),g=_t(v),D=(l=o.serializer)!=null?l:$t[g],{pause:F,resume:B}=bt(h,()=>ee(h.value),{flush:i,deep:n,eventFilter:r});d&&u&&Fe(()=>{R(d,"storage",T),R(d,ge,E),m&&T()}),m||T();function G(y,w){d&&d.dispatchEvent(new CustomEvent(ge,{detail:{key:e,oldValue:y,newValue:w,storageArea:a}}))}function ee(y){try{const w=a.getItem(e);if(y==null)G(w,null),a.removeItem(e);else{const O=D.write(y);w!==O&&(a.setItem(e,O),G(w,O))}}catch(w){c(w)}}function b(y){const w=y?y.newValue:a.getItem(e);if(w==null)return s&&v!=null&&a.setItem(e,D.write(v)),v;if(!y&&f){const O=D.read(w);return typeof f=="function"?f(O,v):g==="object"&&!Array.isArray(O)?{...v,...O}:O}else return typeof w!="string"?w:D.read(w)}function T(y){if(!(y&&y.storageArea!==a)){if(y&&y.key==null){h.value=v;return}if(!(y&&y.key!==e)){F();try{(y==null?void 0:y.newValue)!==D.write(h.value)&&(h.value=b(y))}catch(w){c(w)}finally{y?$(B):B()}}}}function E(y){T(y.detail)}return h}function Xt(e,t={}){var a,o;const{pointerTypes:l,preventDefault:i,stopPropagation:n,exact:u,onMove:s,onEnd:f,onStart:p,initialValue:d,axis:r="both",draggingElement:c=_,containerElement:m,handle:h=e}=t,v=I((a=S(d))!=null?a:{x:0,y:0}),g=I(),D=b=>l?l.includes(b.pointerType):!0,F=b=>{S(i)&&b.preventDefault(),S(n)&&b.stopPropagation()},B=b=>{var T;if(S(t.disabled)||!D(b)||S(u)&&b.target!==S(e))return;const E=S(m),y=(T=E==null?void 0:E.getBoundingClientRect)==null?void 0:T.call(E),w=S(e).getBoundingClientRect(),O={x:b.clientX-(E?w.left-y.left+E.scrollLeft:w.left),y:b.clientY-(E?w.top-y.top+E.scrollTop:w.top)};(p==null?void 0:p(O,b))!==!1&&(g.value=O,F(b))},G=b=>{if(S(t.disabled)||!D(b)||!g.value)return;const T=S(m),E=S(e).getBoundingClientRect();let{x:y,y:w}=v.value;(r==="x"||r==="both")&&(y=b.clientX-g.value.x,T&&(y=Math.min(Math.max(0,y),T.scrollWidth-E.width))),(r==="y"||r==="both")&&(w=b.clientY-g.value.y,T&&(w=Math.min(Math.max(0,w),T.scrollHeight-E.height))),v.value={x:y,y:w},s==null||s(v.value,b),F(b)},ee=b=>{S(t.disabled)||!D(b)||g.value&&(g.value=void 0,f==null||f(v.value,b),F(b))};if(Y){const b={capture:(o=t.capture)!=null?o:!0};R(h,"pointerdown",B,b),R(c,"pointermove",G,b),R(c,"pointerup",ee,b)}return{...wt(v),position:v,isDragging:M(()=>!!g.value),style:M(()=>`left:${v.value.x}px;top:${v.value.y}px;`)}}function Ct(e,t,a={}){const{root:o,rootMargin:l="0px",threshold:i=.1,window:n=_,immediate:u=!0}=a,s=Te(()=>n&&"IntersectionObserver"in n),f=M(()=>{const m=S(e);return(Array.isArray(m)?m:[m]).map(N).filter(dt)});let p=C;const d=I(u),r=s.value?j(()=>[f.value,N(o),d.value],([m,h])=>{if(p(),!d.value||!m.length)return;const v=new IntersectionObserver(t,{root:N(h),rootMargin:l,threshold:i});m.forEach(g=>g&&v.observe(g)),p=()=>{v.disconnect(),p=C}},{immediate:u,flush:"post"}):C,c=()=>{p(),r(),d.value=!1};return H(c),{isSupported:s,isActive:d,pause(){p(),d.value=!1},resume(){d.value=!0},stop:c}}function Zt(e,t={}){const{window:a=_,scrollTarget:o,threshold:l=0}=t,i=I(!1);return Ct(e,n=>{let u=i.value,s=0;for(const f of n)f.time>=s&&(s=f.time,u=f.isIntersecting);i.value=u},{root:o,window:a,threshold:l}),i}function Rt(e={}){const{controls:t=!1,interval:a="requestAnimationFrame"}=e,o=I(new Date),l=()=>o.value=new Date,i=a==="requestAnimationFrame"?Tt(l,{immediate:!0}):At(l,a,{immediate:!0});return t?{now:o,...i}:o}const Nt=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],Lt={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function Wt(e){return e.toISOString().slice(0,10)}function en(e,t={}){const{controls:a=!1,updateInterval:o=3e4}=t,{now:l,...i}=Rt({interval:o,controls:!0}),n=M(()=>Bt(new Date(S(e)),t,S(l)));return a?{timeAgo:n,...i}:n}function Bt(e,t={},a=Date.now()){var o;const{max:l,messages:i=Lt,fullDateFormatter:n=Wt,units:u=Nt,showSecond:s=!1,rounding:f="round"}=t,p=typeof f=="number"?v=>+v.toFixed(f):Math[f],d=+a-+e,r=Math.abs(d);function c(v,g){return p(Math.abs(v)/g.value)}function m(v,g){const D=c(v,g),F=v>0,B=h(g.name,D,F);return h(F?"past":"future",B,F)}function h(v,g,D){const F=i[v];return typeof F=="function"?F(g,D):F.replace("{0}",g.toString())}if(r<6e4&&!s)return i.justNow;if(typeof l=="number"&&r>l)return n(new Date(e));if(typeof l=="string"){const v=(o=u.find(g=>g.name===l))==null?void 0:o.max;if(v&&r>v)return n(new Date(e))}for(const[v,g]of u.entries()){if(c(d,g)<=0&&u[v-1])return m(d,u[v-1]);if(r<g.max)return m(d,g)}return i.invalid}function tn(e={}){const{window:t=_,initialWidth:a=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:l=!0,includeScrollbar:i=!0}=e,n=I(a),u=I(o),s=()=>{t&&(i?(n.value=t.innerWidth,u.value=t.innerHeight):(n.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(s(),Fe(s),R("resize",s,{passive:!0}),l){const f=Et("(orientation: portrait)");j(f,()=>s())}return{width:n,height:u}}const Vt={key:0,class:"flex h-7 items-center px-2 text-sm font-medium text-text-icons-gray-6"},Ht=["onClick"],Yt={class:"whitespace-nowrap"},nn=U({__name:"Dropdown",props:{button:{},options:{default:()=>[]},placement:{default:"left"}},setup(e){const t=Je(),a=e,o=s=>{let f=s.onClick||null;return!f&&s.route&&t&&(f=()=>t.push(s.route)),{label:s.label,icon:s.icon,group:s.group,component:s.component,onClick:f}},l=s=>(s||[]).filter(Boolean).filter(f=>f.condition?f.condition():!0).map(f=>o(f)),i=M(()=>{var f;return((f=a.options[0])!=null&&f.group?a.options:[{group:"",items:a.options}]).map((p,d)=>({key:d,group:p.group,hideLabel:p.hideLabel||!1,items:l(p.items)}))}),n=M(()=>({enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"})),u=M(()=>a.placement==="left"?"bottom-start":a.placement==="right"?"bottom-end":a.placement==="center"?"bottom-center":"bottom");return(s,f)=>(P(),V(z(it),{as:"div",class:"relative inline-block text-left"},{default:L(({open:p})=>[te(nt,{transition:n.value,show:p,placement:u.value},{target:L(()=>[te(z(ut),{as:"div"},{default:L(()=>[s.$slots.default?Ke(s.$slots,"default",Qe(se({key:0},{open:p}))):(P(),V(Xe,se({key:1,active:p},s.button),{default:L(()=>{var d;return[Ze(ne(s.button?((d=s.button)==null?void 0:d.label)||null:"Options"),1)]}),_:2},1040,["active"]))]),_:2},1024)]),body:L(()=>[te(z(ct),{class:ie(["mt-2 min-w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none",{"left-0 origin-top-left":s.placement=="left","right-0 origin-top-right":s.placement=="right","inset-x-0 origin-top":s.placement=="center"}])},{default:L(()=>[(P(!0),q(fe,null,ue(i.value,d=>(P(),q("div",{key:d.key,class:"p-1.5"},[d.group&&!d.hideLabel?(P(),q("div",Vt,ne(d.group),1)):ce("",!0),(P(!0),q(fe,null,ue(d.items,r=>(P(),V(z(ft),{key:r.label},{default:L(({active:c})=>[r.component?(P(),V(de(r.component),{key:0,active:c},null,8,["active"])):(P(),q("button",{key:1,class:ie([c?"bg-gray-100":"text-text-icons-gray-6","group flex h-7 w-full items-center rounded px-2 text-base"]),onClick:r.onClick},[r.icon&&typeof r.icon=="string"?(P(),V(et,{key:0,name:r.icon,class:"mr-2 h-4 w-4 flex-shrink-0 text-text-icons-gray-6","aria-hidden":"true"},null,8,["name"])):r.icon?(P(),V(de(r.icon),{key:1,class:"mr-2 h-4 w-4 flex-shrink-0 text-text-icons-gray-6"})):ce("",!0),tt("span",Yt,ne(r.label),1)],10,Ht))]),_:2},1024))),128))]))),128))]),_:1},8,["class"])]),_:2},1032,["transition","show","placement"])]),_:3}))}});export{ft as M,ut as S,nn as _,Zt as a,qt as b,tn as c,H as d,N as e,Jt as f,S as g,Gt as h,ct as i,it as j,Xt as k,zt as l,en as m,Kt as o,Fe as t,Qt as u,Ut as w};
//# sourceMappingURL=Dropdown.vue_vue_type_script_setup_true_lang-12b7bb51.js.map
