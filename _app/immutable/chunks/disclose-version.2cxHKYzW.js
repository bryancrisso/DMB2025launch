import{aa as c,h as g,ax as E,k as o,ao as w,ap as m,t as p,s as h,l as r,a9 as _,P as y,ay as N,az as x,o as A}from"./runtime.t_YcfR8o.js";let n;function M(){n=void 0}function P(a){let t=null,e=o;var u;if(o){for(t=r,n===void 0&&(n=_(document.head));n!==null&&(n.nodeType!==8||n.data!==w);)n=m(n);n===null?p(!1):n=h(m(n))}o||(u=document.head.appendChild(c()));try{g(()=>a(u),E)}finally{e&&(p(!0),n=r,h(t))}}function T(a){var t=document.createElement("template");return t.innerHTML=a,t.content}function d(a,t){var e=y;e.nodes_start===null&&(e.nodes_start=a,e.nodes_end=t)}function R(a,t){var e=(t&N)!==0,u=(t&x)!==0,s,f=!a.startsWith("<!>");return()=>{if(o)return d(r,null),r;s===void 0&&(s=T(f?a:"<!>"+a),e||(s=_(s)));var i=u?document.importNode(s,!0):s.cloneNode(!0);if(e){var v=_(i),l=i.lastChild;d(v,l)}else d(i,i);return i}}function D(a,t,e="svg"){var u=!a.startsWith("<!>"),s=`<${e}>${u?a:"<!>"+a}</${e}>`,f;return()=>{if(o)return d(r,null),r;if(!f){var i=T(s),v=_(i);f=_(v)}var l=f.cloneNode(!0);return d(l,l),l}}function F(a=""){if(!o){var t=c(a+"");return d(t,t),t}var e=r;return e.nodeType!==3&&(e.before(e=c()),h(e)),d(e,e),e}function I(){if(o)return d(r,null),r;var a=document.createDocumentFragment(),t=document.createComment(""),e=c();return a.append(t,e),d(t,e),a}function L(a,t){if(o){y.nodes_end=r,A();return}a!==null&&a.before(t)}const b="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(b);export{L as a,d as b,I as c,F as d,P as h,D as n,M as r,R as t};