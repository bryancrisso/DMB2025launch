var Sn=Array.isArray,In=Array.from,Rn=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,Dn=Object.prototype,On=Array.prototype,Ut=Object.getPrototypeOf;function xn(t){return typeof t=="function"}const Nn=()=>{};function kn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ct=4,$=8,nt=16,y=32,K=64,D=128,B=256,h=512,S=1024,L=2048,C=4096,M=8192,Gt=16384,vt=32768,Cn=65536,$t=1<<18,pt=1<<19,ut=Symbol("$state"),bn=Symbol("");function ht(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Kt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function Fn(t){throw new Error("props_invalid_value")}function qn(){throw new Error("state_descriptors_fixed")}function Ln(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Mn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Hn(t){return tn(rt(t))}function Yn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&T&&(E===null?dn([t]):E.push(t)),t}function nn(t,n){return u!==null&&at()&&u.f&(T|nt)&&(E===null||!E.includes(t))&&Qt(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),Et(t,S),at()&&l!==null&&l.f&h&&!(l.f&y)&&(_!==null&&_.includes(t)?(m(l,S),W(l)):g===null?En([t]):g.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var o=r[a],i=o.f;i&S||!e&&o===l||(m(o,n),i&(h|D)&&(i&T?Et(o,L):W(o)))}}const jn=1,Bn=2,Un=16,Vn=1,Gn=2,$n=4,Kn=8,Zn=16,zn=4,Wn=1,Xn=2,en="[",sn="[!",an="]",yt={},Jn=Symbol(),Qn="http://www.w3.org/2000/svg";function wt(t){console.warn("hydration_mismatch")}let R=!1;function tr(t){R=t}let d;function P(t){if(t===null)throw wt(),yt;return d=t}function nr(){return P(O(d))}function rr(t){if(R){if(O(d)!==null)throw wt(),yt;d=t}}function er(t=1){if(R){for(var n=t,r=d;n--;)r=O(r);d=r}}function sr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=O(n);n.remove(),n=e}}var it,on,Tt,mt;function ar(){if(it===void 0){it=window,on=document;var t=Element.prototype,n=Node.prototype;Tt=lt(n,"firstChild").get,mt=lt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function O(t){return mt.call(t)}function or(t,n){if(!R)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function lr(t,n){if(!R){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function ur(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=O(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),P(a),a}return P(e),e}function ir(t){t.textContent=""}function ln(t){var n=T|S;l===null?n|=D:l.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=ln(t);return n.equals=dt,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):b(e)}}}function gt(t){var n,r=l;G(t.parent);try{At(t),n=Lt(t)}finally{G(r)}return n}function St(t){var n=gt(t),r=(x||t.f&D)&&t.deps!==null?L:h;m(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){At(t),q(t,0),m(t,M),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){l===null&&u===null&&Wt(),u!==null&&u.f&D&&zt(),st&&Zt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function H(t,n,r,e=!0){var s=(t&K)!==0,a=l,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{ft(!0),z(o),o.f|=Gt}catch(c){throw b(o),c}finally{ft(i)}}else n!==null&&W(o);var w=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&pt)===0;if(!w&&!s&&e&&(a!==null&&un(o,a),u!==null&&u.f&T)){var A=u;(A.children??(A.children=[])).push(o)}return o}function _r(t){It();var n=l!==null&&(l.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=Rt(t);return e}}function cr(t){return It(),fn(t)}function vr(t){const n=H(K,t,!0);return()=>{b(n)}}function Rt(t){return H(ct,t,!1)}function fn(t){return H($,t,!0)}function pr(t){return _n(t)}function _n(t,n=0){return H($|nt|n,t,!0)}function hr(t,n=!0){return H($|y,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),V(null);try{n.call(null)}finally{_t(r),V(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}xt(t,n&&!r),Ot(t),q(t,0),m(t,M);var o=t.transitions;if(o!==null)for(const w of o)w.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dr(t,n){var r=[];kt(t,r,!0),vn(r,()=>{b(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function kt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&y)!==0;kt(e,n,a?r:!1),e=s}}}function Er(t){Ct(t,!0)}function Ct(t,n){if(t.f&C){Y(t)&&z(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let U=!1,Q=[];function bt(){U=!1;const t=Q.slice();Q=[],Vt(t)}function yr(t){U||(U=!0,queueMicrotask(bt)),Q.push(t)}function pn(){U&&bt()}const Pt=0,hn=1;let j=Pt,F=!1,N=!1,st=!1;function ft(t){N=t}function _t(t){st=t}let I=[],k=0;let u=null;function V(t){u=t}let l=null;function G(t){l=t}let E=null;function dn(t){E=t}let _=null,p=0,g=null;function En(t){g=t}let Ft=0,x=!1,f=null;function qt(){return++Ft}function at(){return!Z||f!==null&&f.l===null}function Y(t){var o,i;var n=t.f;if(n&S)return!0;if(n&L){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&St(a),e&&l!==null&&!x&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||m(t,h)}return!1}function yn(t,n,r){throw t}function Lt(t){var ot;var n=_,r=p,e=g,s=u,a=x,o=E,i=f,w=t.f;_=null,p=0,g=null,u=w&(y|K)?null:t,x=!N&&(w&D)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(q(t,p),c!==null&&p>0)for(c.length=p+_.length,v=0;v<_.length;v++)c[p+v]=_[v];else t.deps=c=_;if(!x)for(v=p;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&p<c.length&&(q(t,p),c.length=p);return A}finally{_=n,p=r,g=e,u=s,x=a,E=o,f=i}}function wn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(m(n,L),n.f&(D|B)||(n.f^=B),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)wn(t,r[e])}function z(t){var n=t.f;if(!(n&M)){m(t,h);var r=l;l=t;try{n&nt?cn(t):xt(t),Ot(t),Dt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){yn(s)}finally{l=r}}}function Mt(){k>1e3&&(k=0,Xt()),k++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var a=[];Yt(s,a),Tn(a)}}finally{N=r}}}function Tn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(M|C))&&Y(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function mn(){if(F=!1,k>1001)return;const t=I;I=[],Ht(t),F||(k=0)}function W(t){j===Pt&&(F||(F=!0,queueMicrotask(mn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|y)){if(!(r&h))return;n.f^=h}}I.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,o=a&&(s&h)!==0;if(!o&&!(s&C))if(s&$){a?r.f^=h:Y(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=j,r=I;try{Mt();const s=[];j=hn,I=s,F=!1,Ht(r);var e=t==null?void 0:t();return pn(),(I.length>0||s.length>0)&&jt(),k=0,e}finally{j=n,I=r}}async function wr(){await Promise.resolve(),jt()}function An(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&M){var e=gt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[p]===t?p++:_===null?_=[t]:_.push(t),g!==null&&l!==null&&l.f&h&&!(l.f&y)&&g.includes(t)&&(m(l,S),W(l))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,Y(a)&&St(a)),t.v}function Tr(t){const n=u;try{return u=null,t()}finally{u=n}}const gn=~(S|L|h);function m(t,n){t.f=t.f&gn|n}function mr(t,n=1){var r=+An(t);return nn(t,r+n),r}function Ar(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function gr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];G(a.effect),V(a.reaction),Rt(a.fn)}}finally{G(r),V(e)}}f=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{on as $,Ut as A,Bt as B,Ar as C,gr as D,vt as E,nn as F,Hn as G,sn as H,er as I,Z as J,Dn as K,bn as L,On as M,rt as N,qn as O,lt as P,l as Q,Ln as R,ut as S,Sn as T,Jn as U,Fn as V,Cn as W,mr as X,xn as Y,y as Z,K as _,_r as a,G as a0,Gn as a1,fr as a2,$n as a3,dt as a4,Vn as a5,Kn as a6,Zn as a7,Yn as a8,V as a9,C as aA,rn as aB,kt as aC,vn as aD,Bn as aE,jn as aF,Un as aG,Qn as aH,Kt as aI,u as aa,Rn as ab,ar as ac,J as ad,en as ae,O as af,yt as ag,an as ah,wt as ai,Pn as aj,ir as ak,In as al,vr as am,X as an,Nn as ao,b as ap,nt as aq,Gt as ar,Rt as as,zn as at,$t as au,Wn as av,Xn as aw,fn as ax,jt as ay,wr as az,Tr as b,f as c,kn as d,Sr as e,ln as f,An as g,_n as h,Er as i,hr as j,R as k,nr as l,sr as m,tr as n,d as o,dr as p,Mn as q,Vt as r,P as s,pr as t,cr as u,ur as v,or as w,rr as x,lr as y,yr as z};