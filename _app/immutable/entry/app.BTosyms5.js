const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.D7WwNhNv.js","../chunks/disclose-version.Dwf9aJr3.js","../chunks/runtime.GVfat9TT.js","../chunks/render.DG7MIfGb.js","../chunks/if.DTPrTWU8.js","../chunks/snippet.BYmvWrvW.js","../chunks/index.e5_sTC9e.js","../chunks/entry.COqhf-e1.js","../chunks/index-client.C118bCj9.js","../chunks/legacy.zk8F-9sn.js","../chunks/attributes.CqfCEIqR.js","../chunks/props.DbHSsOtG.js","../chunks/lifecycle.DqI8IWNB.js","../assets/0.F7LdIBVq.css","../nodes/1.JWUuqgql.js","../nodes/2.BLDccuOv.js","../chunks/preload-helper.C1FmrZbK.js","../assets/2.BQI4Pdzj.css","../nodes/3.Cddcfsg9.js","../nodes/4.B7RF96li.js","../nodes/5.Dwfx-iK0.js","../nodes/6.-kXYNG36.js","../nodes/7.lGdrSt1l.js"])))=>i.map(i=>d[i]);
var B=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||B("Cannot "+r);var c=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),O=(e,t,r)=>t.has(e)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),T=(e,t,r,n)=>(F(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);import{_ as h}from"../chunks/preload-helper.C1FmrZbK.js";import{k as M,o as J,h as K,E as Q,i as U,l as W,p as X,ag as Z,aA as $,b as tt,a8 as et,S as rt,g as m,z as x,aB as at,am as st,a7 as ot,w as it,u as nt,a as ct,aC as ut,G as R,y as ft,A as k,F as _t,B as mt,x as dt,C as lt,f as L}from"../chunks/runtime.GVfat9TT.js";import{h as ht,m as vt,u as gt,s as yt}from"../chunks/render.DG7MIfGb.js";import{c as p,a as y,t as N,d as Et}from"../chunks/disclose-version.Dwf9aJr3.js";import{i as w}from"../chunks/if.DTPrTWU8.js";import{p as D,a as bt}from"../chunks/props.DbHSsOtG.js";import{o as Pt}from"../chunks/index-client.C118bCj9.js";function I(e,t,r){M&&J();var n=e,a,o;K(()=>{a!==(a=t())&&(o&&(X(o),o=null),a&&(o=U(()=>r(n,a))))},Q),M&&(n=W)}function q(e,t){return e===t||(e==null?void 0:e[rt])===t}function V(e={},t,r,n){return Z(()=>{var a,o;return $(()=>{a=o,o=[],tt(()=>{e!==r(...o)&&(t(e,...o),a&&q(r(...a),e)&&t(null,...a))})}),()=>{et(()=>{o&&q(r(...o),e)&&t(null,...o)})}}),e}function Rt(e){return class extends xt{constructor(t){super({component:e,...t})}}}var d,u;class xt{constructor(t){O(this,d);O(this,u);var o;var r=new Map,n=(s,i)=>{var l=ot(i);return r.set(s,l),l};const a=new Proxy({...t.props||{},$$events:{}},{get(s,i){return m(r.get(i)??n(i,Reflect.get(s,i)))},has(s,i){return m(r.get(i)??n(i,Reflect.get(s,i))),Reflect.has(s,i)},set(s,i,l){return x(r.get(i)??n(i,l),l),Reflect.set(s,i,l)}});T(this,u,(t.hydrate?ht:vt)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&at(),T(this,d,a.$$events);for(const s of Object.keys(c(this,u)))s==="$set"||s==="$destroy"||s==="$on"||st(this,s,{get(){return c(this,u)[s]},set(i){c(this,u)[s]=i},enumerable:!0});c(this,u).$set=s=>{Object.assign(a,s)},c(this,u).$destroy=()=>{gt(c(this,u))}}$set(t){c(this,u).$set(t)}$on(t,r){c(this,d)[t]=c(this,d)[t]||[];const n=(...a)=>r.call(this,...a);return c(this,d)[t].push(n),()=>{c(this,d)[t]=c(this,d)[t].filter(a=>a!==n)}}$destroy(){c(this,u).$destroy()}}d=new WeakMap,u=new WeakMap;const Ft={};var At=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ot=N("<!> <!>",1);function Tt(e,t){it(t,!0);let r=D(t,"components",23,()=>[]),n=D(t,"data_0",3,null),a=D(t,"data_1",3,null);nt(()=>t.stores.page.set(t.page)),ct(()=>{t.stores,t.page,t.constructors,r(),t.form,n(),a(),t.stores.page.notify()});let o=k(!1),s=k(!1),i=k(null);Pt(()=>{const v=t.stores.page.subscribe(()=>{m(o)&&(x(s,!0),ut().then(()=>{x(i,bt(document.title||"untitled page"))}))});return x(o,!0),v});const l=L(()=>t.constructors[1]);var C=Ot(),S=R(C);w(S,()=>t.constructors[1],v=>{var _=p();const E=L(()=>t.constructors[0]);var b=R(_);I(b,()=>m(E),(g,A)=>{V(A(g,{get data(){return n()},get form(){return t.form},children:(f,pt)=>{var j=p(),G=R(j);I(G,()=>m(l),(Y,H)=>{V(H(Y,{get data(){return a()},get form(){return t.form}}),P=>r()[1]=P,()=>{var P;return(P=r())==null?void 0:P[1]})}),y(f,j)},$$slots:{default:!0}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),y(v,_)},v=>{var _=p();const E=L(()=>t.constructors[0]);var b=R(_);I(b,()=>m(E),(g,A)=>{V(A(g,{get data(){return n()},get form(){return t.form}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),y(v,_)});var z=_t(S,2);w(z,()=>m(o),v=>{var _=At(),E=mt(_);w(E,()=>m(s),b=>{var g=Et();dt(()=>yt(g,m(i))),y(b,g)}),lt(_),y(v,_)}),y(e,C),ft()}const Mt=Rt(Tt),qt=[()=>h(()=>import("../nodes/0.D7WwNhNv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),()=>h(()=>import("../nodes/1.JWUuqgql.js"),__vite__mapDeps([14,1,2,9,3,12,7,8]),import.meta.url),()=>h(()=>import("../nodes/2.BLDccuOv.js"),__vite__mapDeps([15,1,2,9,6,3,4,10,11,16,12,17]),import.meta.url),()=>h(()=>import("../nodes/3.Cddcfsg9.js"),__vite__mapDeps([18,1,2,9]),import.meta.url),()=>h(()=>import("../nodes/4.B7RF96li.js"),__vite__mapDeps([19,1,2,9]),import.meta.url),()=>h(()=>import("../nodes/5.Dwfx-iK0.js"),__vite__mapDeps([20,1,2,9,3,4,5,6,7,8]),import.meta.url),()=>h(()=>import("../nodes/6.-kXYNG36.js"),__vite__mapDeps([21,1,2,9,3,4]),import.meta.url),()=>h(()=>import("../nodes/7.lGdrSt1l.js"),__vite__mapDeps([22,1,2,9]),import.meta.url)],Nt=[0],zt={"/":[2],"/about":[3],"/charity":[4],"/faq":[5],"/tickets":[6],"/work":[7]},kt={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},Lt=Object.fromEntries(Object.entries(kt.transport).map(([e,t])=>[e,t.decode])),Gt=!1,Yt=(e,t)=>Lt[e](t);export{Yt as decode,Lt as decoders,zt as dictionary,Gt as hash,kt as hooks,Ft as matchers,qt as nodes,Mt as root,Nt as server_loads};