!(function () {
  var Z7=Object.defineProperty,O7=Object.defineProperties;var k7=Object.getOwnPropertyDescriptors;var H6=Object.getOwnPropertySymbols;var k8=Object.prototype.hasOwnProperty,R8=Object.prototype.propertyIsEnumerable;var j3=Math.pow,O8=(d,f,a)=>f in d?Z7(d,f,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[f]=a,Q1=(d,f)=>{for(var a in f||(f={}))k8.call(f,a)&&O8(d,a,f[a]);if(H6)for(var a of H6(f))R8.call(f,a)&&O8(d,a,f[a]);return d},$0=(d,f)=>O7(d,k7(f));var rt=(d,f)=>{var a={};for(var n in d)k8.call(d,n)&&f.indexOf(n)<0&&(a[n]=d[n]);if(d!=null&&H6)for(var n of H6(d))f.indexOf(n)<0&&R8.call(d,n)&&(a[n]=d[n]);return a};(function(){var __webpack_modules__={68589:function(d,f,a){"use strict";a.d(f,{Z:function(){return a5}});function n(m1){if(m1.sheet)return m1.sheet;for(var T1=0;T1<document.styleSheets.length;T1++)if(document.styleSheets[T1].ownerNode===m1)return document.styleSheets[T1]}function l(m1){var T1=document.createElement("style");return T1.setAttribute("data-emotion",m1.key),m1.nonce!==void 0&&T1.setAttribute("nonce",m1.nonce),T1.appendChild(document.createTextNode("")),T1.setAttribute("data-s",""),T1}var o=function(){function m1(V0){var A0=this;this._insertTag=function(R0){var J0;A0.tags.length===0?A0.insertionPoint?J0=A0.insertionPoint.nextSibling:A0.prepend?J0=A0.container.firstChild:J0=A0.before:J0=A0.tags[A0.tags.length-1].nextSibling,A0.container.insertBefore(R0,J0),A0.tags.push(R0)},this.isSpeedy=V0.speedy===void 0?!0:V0.speedy,this.tags=[],this.ctr=0,this.nonce=V0.nonce,this.key=V0.key,this.container=V0.container,this.prepend=V0.prepend,this.insertionPoint=V0.insertionPoint,this.before=null}var T1=m1.prototype;return T1.hydrate=function(A0){A0.forEach(this._insertTag)},T1.insert=function(A0){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(l(this));var R0=this.tags[this.tags.length-1];if(!1)var J0;if(this.isSpeedy){var L5=n(R0);try{L5.insertRule(A0,L5.cssRules.length)}catch(w5){}}else R0.appendChild(document.createTextNode(A0));this.ctr++},T1.flush=function(){this.tags.forEach(function(A0){return A0.parentNode&&A0.parentNode.removeChild(A0)}),this.tags=[],this.ctr=0},m1}(),s=Math.abs,h=String.fromCharCode,p=Object.assign;function u(m1,T1){return M(m1,0)^45?(((T1<<2^M(m1,0))<<2^M(m1,1))<<2^M(m1,2))<<2^M(m1,3):0}function z(m1){return m1.trim()}function x(m1,T1){return(m1=T1.exec(m1))?m1[0]:m1}function g(m1,T1,V0){return m1.replace(T1,V0)}function I(m1,T1){return m1.indexOf(T1)}function M(m1,T1){return m1.charCodeAt(T1)|0}function w(m1,T1,V0){return m1.slice(T1,V0)}function C(m1){return m1.length}function _(m1){return m1.length}function H(m1,T1){return T1.push(m1),m1}function b(m1,T1){return m1.map(T1).join("")}var E=1,L=1,P=0,S=0,F=0,j="";function J(m1,T1,V0,A0,R0,J0,L5){return{value:m1,root:T1,parent:V0,type:A0,props:R0,children:J0,line:E,column:L,length:L5,return:""}}function e1(m1,T1){return p(J("",null,null,"",null,null,0),m1,{length:-m1.length},T1)}function t1(){return F}function X(){return F=S>0?M(j,--S):0,L--,F===10&&(L=1,E--),F}function Q(){return F=S<P?M(j,S++):0,L++,F===10&&(L=1,E++),F}function R(){return M(j,S)}function f1(){return S}function a1(m1,T1){return w(j,m1,T1)}function D(m1){switch(m1){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z(m1){return E=L=1,P=C(j=m1),S=0,[]}function U(m1){return j="",m1}function Y(m1){return z(a1(S-1,w1(m1===91?m1+2:m1===40?m1+1:m1)))}function N(m1){return U(z1(Z(m1)))}function W(m1){for(;(F=R())&&F<33;)Q();return D(m1)>2||D(F)>3?"":" "}function z1(m1){for(;Q();)switch(D(F)){case 0:append(G1(S-1),m1);break;case 2:append(Y(F),m1);break;default:append(from(F),m1)}return m1}function E1(m1,T1){for(;--T1&&Q()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return a1(m1,f1()+(T1<6&&R()==32&&Q()==32))}function w1(m1){for(;Q();)switch(F){case m1:return S;case 34:case 39:m1!==34&&m1!==39&&w1(F);break;case 40:m1===41&&w1(m1);break;case 92:Q();break}return S}function c1(m1,T1){for(;Q()&&m1+F!==57;)if(m1+F===84&&R()===47)break;return"/*"+a1(T1,S-1)+"*"+h(m1===47?m1:Q())}function G1(m1){for(;!D(R());)Q();return a1(m1,S)}var B1="-ms-",S1="-moz-",C1="-webkit-",S0="comm",L0="rule",Q0="decl",D0="@page",z5="@media",g5="@import",o0="@charset",H0="@viewport",x0="@supports",U1="@document",V1="@namespace",s1="@keyframes",h1="@font-face",u1="@counter-style",F1="@font-feature-values";function Z1(m1,T1){for(var V0="",A0=_(m1),R0=0;R0<A0;R0++)V0+=T1(m1[R0],R0,m1,T1)||"";return V0}function u0(m1,T1,V0,A0){switch(m1.type){case g5:case Q0:return m1.return=m1.return||m1.value;case S0:return"";case s1:return m1.return=m1.value+"{"+Z1(m1.children,A0)+"}";case L0:m1.value=m1.props.join(",")}return C(V0=Z1(m1.children,A0))?m1.return=m1.value+"{"+V0+"}":""}function l0(m1){var T1=_(m1);return function(V0,A0,R0,J0){for(var L5="",w5=0;w5<T1;w5++)L5+=m1[w5](V0,A0,R0,J0)||"";return L5}}function v0(m1){return function(T1){T1.root||(T1=T1.return)&&m1(T1)}}function G0(m1,T1,V0,A0){if(m1.length>-1&&!m1.return)switch(m1.type){case DECLARATION:m1.return=prefix(m1.value,m1.length,V0);return;case KEYFRAMES:return serialize([copy(m1,{value:replace(m1.value,"@","@"+WEBKIT)})],A0);case RULESET:if(m1.length)return combine(m1.props,function(R0){switch(match(R0,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return serialize([copy(m1,{props:[replace(R0,/:(read-\w+)/,":"+MOZ+"$1")]})],A0);case"::placeholder":return serialize([copy(m1,{props:[replace(R0,/:(plac\w+)/,":"+WEBKIT+"input-$1")]}),copy(m1,{props:[replace(R0,/:(plac\w+)/,":"+MOZ+"$1")]}),copy(m1,{props:[replace(R0,/:(plac\w+)/,MS+"input-$1")]})],A0)}return""})}}function X0(m1){switch(m1.type){case RULESET:m1.props=m1.props.map(function(T1){return combine(tokenize(T1),function(V0,A0,R0){switch(charat(V0,0)){case 12:return substr(V0,1,strlen(V0));case 0:case 40:case 43:case 62:case 126:return V0;case 58:R0[++A0]==="global"&&(R0[A0]="",R0[++A0]="\f"+substr(R0[A0],A0=1,-1));case 32:return A0===1?"":V0;default:switch(A0){case 0:return m1=V0,sizeof(R0)>1?"":V0;case(A0=sizeof(R0)-1):case 2:return A0===2?V0+m1+m1:V0+m1;default:return V0}}})})}}function F0(m1){return U(g1("",null,null,null,[""],m1=Z(m1),0,[0],m1))}function g1(m1,T1,V0,A0,R0,J0,L5,w5,k5){for(var j5=0,U5=0,q5=L5,$5=0,At=0,ft=0,tt=1,pt=1,m5=1,V5=0,yt="",Tt=R0,Dt=J0,Lt=A0,dt=yt;pt;)switch(ft=V5,V5=Q()){case 40:if(ft!=108&&M(dt,q5-1)==58){I(dt+=g(Y(V5),"&","&\f"),"&\f")!=-1&&(m5=-1);break}case 34:case 39:case 91:dt+=Y(V5);break;case 9:case 10:case 13:case 32:dt+=W(ft);break;case 92:dt+=E1(f1()-1,7);continue;case 47:switch(R()){case 42:case 47:H(K(c1(Q(),f1()),T1,V0),k5);break;default:dt+="/"}break;case 123*tt:w5[j5++]=C(dt)*m5;case 125*tt:case 59:case 0:switch(V5){case 0:case 125:pt=0;case 59+U5:At>0&&C(dt)-q5&&H(At>32?n1(dt+";",A0,V0,q5-1):n1(g(dt," ","")+";",A0,V0,q5-2),k5);break;case 59:dt+=";";default:if(H(Lt=y(dt,T1,V0,j5,U5,R0,w5,yt,Tt=[],Dt=[],q5),J0),V5===123)if(U5===0)g1(dt,T1,Lt,Lt,Tt,J0,q5,w5,Dt);else switch($5===99&&M(dt,3)===110?100:$5){case 100:case 109:case 115:g1(m1,Lt,Lt,A0&&H(y(m1,Lt,Lt,0,0,R0,w5,yt,R0,Tt=[],q5),Dt),R0,Dt,q5,w5,A0?Tt:Dt);break;default:g1(dt,Lt,Lt,Lt,[""],Dt,0,w5,Dt)}}j5=U5=At=0,tt=m5=1,yt=dt="",q5=L5;break;case 58:q5=1+C(dt),At=ft;default:if(tt<1){if(V5==123)--tt;else if(V5==125&&tt++==0&&X()==125)continue}switch(dt+=h(V5),V5*tt){case 38:m5=U5>0?1:(dt+="\f",-1);break;case 44:w5[j5++]=(C(dt)-1)*m5,m5=1;break;case 64:R()===45&&(dt+=Y(Q())),$5=R(),U5=q5=C(yt=dt+=G1(f1())),V5++;break;case 45:ft===45&&C(dt)==2&&(tt=0)}}return J0}function y(m1,T1,V0,A0,R0,J0,L5,w5,k5,j5,U5){for(var q5=R0-1,$5=R0===0?J0:[""],At=_($5),ft=0,tt=0,pt=0;ft<A0;++ft)for(var m5=0,V5=w(m1,q5+1,q5=s(tt=L5[ft])),yt=m1;m5<At;++m5)(yt=z(tt>0?$5[m5]+" "+V5:g(V5,/&\f/g,$5[m5])))&&(k5[pt++]=yt);return J(m1,T1,V0,R0===0?L0:w5,k5,j5,U5)}function K(m1,T1,V0){return J(m1,T1,V0,S0,h(t1()),w(m1,2,-2),0)}function n1(m1,T1,V0,A0){return J(m1,T1,V0,Q0,w(m1,0,A0),w(m1,A0+1,-1),A0)}var y1=function(T1,V0,A0){for(var R0=0,J0=0;R0=J0,J0=R(),R0===38&&J0===12&&(V0[A0]=1),!D(J0);)Q();return a1(T1,S)},L1=function(T1,V0){var A0=-1,R0=44;do switch(D(R0)){case 0:R0===38&&R()===12&&(V0[A0]=1),T1[A0]+=y1(S-1,V0,A0);break;case 2:T1[A0]+=Y(R0);break;case 4:if(R0===44){T1[++A0]=R()===58?"&\f":"",V0[A0]=T1[A0].length;break}default:T1[A0]+=h(R0)}while(R0=Q());return T1},J1=function(T1,V0){return U(L1(Z(T1),V0))},D1=new WeakMap,i0=function(T1){if(!(T1.type!=="rule"||!T1.parent||T1.length<1)){for(var V0=T1.value,A0=T1.parent,R0=T1.column===A0.column&&T1.line===A0.line;A0.type!=="rule";)if(A0=A0.parent,!A0)return;if(!(T1.props.length===1&&V0.charCodeAt(0)!==58&&!D1.get(A0))&&!R0){D1.set(T1,!0);for(var J0=[],L5=J1(V0,J0),w5=A0.props,k5=0,j5=0;k5<L5.length;k5++)for(var U5=0;U5<w5.length;U5++,j5++)T1.props[j5]=J0[k5]?L5[k5].replace(/&\f/g,w5[U5]):w5[U5]+" "+L5[k5]}}},f0=function(T1){if(T1.type==="decl"){var V0=T1.value;V0.charCodeAt(0)===108&&V0.charCodeAt(2)===98&&(T1.return="",T1.value="")}},h0="emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",k1=function(T1){return T1.type==="comm"&&T1.children.indexOf(h0)>-1},j1=function(T1){return function(V0,A0,R0){if(!(V0.type!=="rule"||T1.compat)){var J0=V0.value.match(/(:first|:nth|:nth-last)-child/g);if(J0){for(var L5=V0.parent===R0[0],w5=L5?R0[0].children:R0,k5=w5.length-1;k5>=0;k5--){var j5=w5[k5];if(j5.line<V0.line)break;if(j5.column<V0.column){if(k1(j5))return;break}}J0.forEach(function(U5){console.error('The pseudo class "'+U5+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+U5.split("-child")[0]+'-of-type".')})}}}},$1=function(T1){return T1.type.charCodeAt(1)===105&&T1.type.charCodeAt(0)===64},w0=function(T1,V0){for(var A0=T1-1;A0>=0;A0--)if(!$1(V0[A0]))return!0;return!1},e0=function(T1){T1.type="",T1.value="",T1.return="",T1.children="",T1.props=""},t0=function(T1,V0,A0){$1(T1)&&(T1.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),e0(T1)):w0(V0,A0)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),e0(T1)))};function R1(m1,T1){switch(u(m1,T1)){case 5103:return C1+"print-"+m1+m1;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return C1+m1+m1;case 5349:case 4246:case 4810:case 6968:case 2756:return C1+m1+S1+m1+B1+m1+m1;case 6828:case 4268:return C1+m1+B1+m1+m1;case 6165:return C1+m1+B1+"flex-"+m1+m1;case 5187:return C1+m1+g(m1,/(\w+).+(:[^]+)/,C1+"box-$1$2"+B1+"flex-$1$2")+m1;case 5443:return C1+m1+B1+"flex-item-"+g(m1,/flex-|-self/,"")+m1;case 4675:return C1+m1+B1+"flex-line-pack"+g(m1,/align-content|flex-|-self/,"")+m1;case 5548:return C1+m1+B1+g(m1,"shrink","negative")+m1;case 5292:return C1+m1+B1+g(m1,"basis","preferred-size")+m1;case 6060:return C1+"box-"+g(m1,"-grow","")+C1+m1+B1+g(m1,"grow","positive")+m1;case 4554:return C1+g(m1,/([^-])(transform)/g,"$1"+C1+"$2")+m1;case 6187:return g(g(g(m1,/(zoom-|grab)/,C1+"$1"),/(image-set)/,C1+"$1"),m1,"")+m1;case 5495:case 3959:return g(m1,/(image-set\([^]*)/,C1+"$1$`$1");case 4968:return g(g(m1,/(.+:)(flex-)?(.*)/,C1+"box-pack:$3"+B1+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+C1+m1+m1;case 4095:case 3583:case 4068:case 2532:return g(m1,/(.+)-inline(.+)/,C1+"$1$2")+m1;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(m1)-1-T1>6)switch(M(m1,T1+1)){case 109:if(M(m1,T1+4)!==45)break;case 102:return g(m1,/(.+:)(.+)-([^]+)/,"$1"+C1+"$2-$3$1"+S1+(M(m1,T1+3)==108?"$3":"$2-$3"))+m1;case 115:return~I(m1,"stretch")?R1(g(m1,"stretch","fill-available"),T1)+m1:m1}break;case 4949:if(M(m1,T1+1)!==115)break;case 6444:switch(M(m1,C(m1)-3-(~I(m1,"!important")&&10))){case 107:return g(m1,":",":"+C1)+m1;case 101:return g(m1,/(.+:)([^;!]+)(;|!.+)?/,"$1"+C1+(M(m1,14)===45?"inline-":"")+"box$3$1"+C1+"$2$3$1"+B1+"$2box$3")+m1}break;case 5936:switch(M(m1,T1+11)){case 114:return C1+m1+B1+g(m1,/[svh]\w+-[tblr]{2}/,"tb")+m1;case 108:return C1+m1+B1+g(m1,/[svh]\w+-[tblr]{2}/,"tb-rl")+m1;case 45:return C1+m1+B1+g(m1,/[svh]\w+-[tblr]{2}/,"lr")+m1}return C1+m1+B1+m1+m1}return m1}var K1=function(T1,V0,A0,R0){if(T1.length>-1&&!T1.return)switch(T1.type){case Q0:T1.return=R1(T1.value,T1.length);break;case s1:return Z1([e1(T1,{value:g(T1.value,"@","@"+C1)})],R0);case L0:if(T1.length)return b(T1.props,function(J0){switch(x(J0,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z1([e1(T1,{props:[g(J0,/:(read-\w+)/,":"+S1+"$1")]})],R0);case"::placeholder":return Z1([e1(T1,{props:[g(J0,/:(plac\w+)/,":"+C1+"input-$1")]}),e1(T1,{props:[g(J0,/:(plac\w+)/,":"+S1+"$1")]}),e1(T1,{props:[g(J0,/:(plac\w+)/,B1+"input-$1")]})],R0)}return""})}},_0=[K1],P0=function(T1){var V0=T1.key;if(V0==="css"){var A0=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(A0,function(tt){var pt=tt.getAttribute("data-emotion");pt.indexOf(" ")!==-1&&(document.head.appendChild(tt),tt.setAttribute("data-s",""))})}var R0=T1.stylisPlugins||_0,J0={},L5,w5=[];L5=T1.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+V0+' "]'),function(tt){for(var pt=tt.getAttribute("data-emotion").split(" "),m5=1;m5<pt.length;m5++)J0[pt[m5]]=!0;w5.push(tt)});var k5,j5=[i0,f0];{var U5,q5=[u0,v0(function(tt){U5.insert(tt)})],$5=l0(j5.concat(R0,q5)),At=function(pt){return Z1(F0(pt),$5)};k5=function(pt,m5,V5,yt){U5=V5,At(pt?pt+"{"+m5.styles+"}":m5.styles),yt&&(ft.inserted[m5.name]=!0)}}var ft={key:V0,sheet:new o({key:V0,container:L5,nonce:T1.nonce,speedy:T1.speedy,prepend:T1.prepend,insertionPoint:T1.insertionPoint}),nonce:T1.nonce,inserted:J0,registered:{},insert:k5};return ft.sheet.hydrate(w5),ft},a5=P0},91457:function(d,f){"use strict";function a(n){var l=Object.create(null);return function(o){return l[o]===void 0&&(l[o]=n(o)),l[o]}}f.Z=a},20449:function(d,f,a){"use strict";a.d(f,{T:function(){return w},a:function(){return b},w:function(){return M}});var n=a(93236),l=a(68589),o=a(51163),s=function(f1){var a1=new WeakMap;return function(D){if(a1.has(D))return a1.get(D);var Z=f1(D);return a1.set(D,Z),Z}},h=s,p=a(81301),u=a(25454),z={}.hasOwnProperty,x=(0,n.createContext)(typeof HTMLElement!="undefined"?(0,l.Z)({key:"css"}):null),g=x.Provider,I=function(){return useContext(x)},M=function(f1){return(0,n.forwardRef)(function(a1,D){var Z=(0,n.useContext)(x);return f1(a1,Z,D)})},w=(0,n.createContext)({}),C=function(){return useContext(w)},_=function(f1,a1){if(typeof a1=="function"){var D=a1(f1);return D}return(0,o.Z)({},f1,a1)},H=h(function(R){return h(function(f1){return _(R,f1)})}),b=function(f1){var a1=(0,n.useContext)(w);return f1.theme!==a1&&(a1=H(a1)(f1.theme)),(0,n.createElement)(w.Provider,{value:a1},f1.children)};function E(R){var f1=R.displayName||R.name||"Component",a1=function(U,Y){var N=useContext(w);return createElement(R,_extends({theme:N,ref:Y},U))},D=forwardRef(a1);return D.displayName="WithTheme("+f1+")",hoistNonReactStatics(D,R)}var L=function(f1){var a1=f1.split(".");return a1[a1.length-1]},P=function(f1){var a1=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(f1);if(a1||(a1=/^([A-Za-z0-9$.]+)@/.exec(f1),a1))return L(a1[1])},S=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),F=function(f1){return f1.replace(/\$/g,"-")},j=function(f1){if(f1)for(var a1=f1.split(`
  `),D=0;D<a1.length;D++){var Z=P(a1[D]);if(Z){if(S.has(Z))break;if(/^[A-Z]/.test(Z))return F(Z)}}},J="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",e1="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",t1=function(f1,a1){var D={};for(var Z in a1)z.call(a1,Z)&&(D[Z]=a1[Z]);if(D[J]=f1,!1)var U;return D},X=function(f1){var a1=f1.cache,D=f1.serialized,Z=f1.isStringTag;registerStyles(a1,D,Z);var U=useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(a1,D,Z)});return null},Q=null},90098:function(d,f,a){"use strict";a.d(f,{F4:function(){return C},xB:function(){return M}});var n=a(93236),l=a(68589),o=a(20449),s=a(72535),h=a.n(s),p=a(3986),u=a(81301),z=a(25454),x={name:"@emotion/react",version:"11.10.6",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":"./macro.js"},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.js","macro.d.ts","macro.js.flow"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.10.6","@emotion/cache":"^11.10.5","@emotion/serialize":"^1.1.1","@emotion/use-insertion-effect-with-fallbacks":"^1.0.0","@emotion/utils":"^1.2.0","@emotion/weak-memoize":"^0.3.0","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.10.6","@emotion/css-prettifier":"1.1.1","@emotion/server":"11.10.0","@emotion/styled":"11.10.6","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":"./macro.js"}}}},g=function(J,e1){var t1=arguments;if(e1==null||!hasOwnProperty.call(e1,"css"))return createElement.apply(void 0,t1);var X=t1.length,Q=new Array(X);Q[0]=Emotion,Q[1]=createEmotionProps(J,e1);for(var R=2;R<X;R++)Q[R]=t1[R];return createElement.apply(null,Q)},I=!1,M=(0,o.w)(function(j,J){var e1=j.styles,t1=(0,u.O)([e1],void 0,(0,n.useContext)(o.T)),X=(0,n.useRef)();return(0,z.j)(function(){var Q=J.key+"-global",R=new J.sheet.constructor({key:Q,nonce:J.sheet.nonce,container:J.sheet.container,speedy:J.sheet.isSpeedy}),f1=!1,a1=document.querySelector('style[data-emotion="'+Q+" "+t1.name+'"]');return J.sheet.tags.length&&(R.before=J.sheet.tags[0]),a1!==null&&(f1=!0,a1.setAttribute("data-emotion",Q),R.hydrate([a1])),X.current=[R,f1],function(){R.flush()}},[J]),(0,z.j)(function(){var Q=X.current,R=Q[0],f1=Q[1];if(f1){Q[1]=!1;return}if(t1.next!==void 0&&(0,p.My)(J,t1.next,!0),R.tags.length){var a1=R.tags[R.tags.length-1].nextElementSibling;R.before=a1,R.flush()}J.insert("",t1,R,!1)},[J,t1.name]),null});function w(){for(var j=arguments.length,J=new Array(j),e1=0;e1<j;e1++)J[e1]=arguments[e1];return(0,u.O)(J)}var C=function(){var J=w.apply(void 0,arguments),e1="animation-"+J.name;return{name:e1,styles:"@keyframes "+e1+"{"+J.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},_=function j(J){for(var e1=J.length,t1=0,X="";t1<e1;t1++){var Q=J[t1];if(Q!=null){var R=void 0;switch(typeof Q){case"boolean":break;case"object":{if(Array.isArray(Q))R=j(Q);else{R="";for(var f1 in Q)Q[f1]&&f1&&(R&&(R+=" "),R+=f1)}break}default:R=Q}R&&(X&&(X+=" "),X+=R)}}return X};function H(j,J,e1){var t1=[],X=getRegisteredStyles(j,t1,e1);return t1.length<2?e1:X+J(t1)}var b=function(J){var e1=J.cache,t1=J.serializedArr,X=useInsertionEffectAlwaysWithSyncFallback(function(){for(var Q=0;Q<t1.length;Q++)var R=insertStyles(e1,t1[Q],!1)});return null},E=null;if(!1)var L,P,S,F},81301:function(d,f,a){"use strict";a.d(f,{O:function(){return t1}});function n(X){for(var Q=0,R,f1=0,a1=X.length;a1>=4;++f1,a1-=4)R=X.charCodeAt(f1)&255|(X.charCodeAt(++f1)&255)<<8|(X.charCodeAt(++f1)&255)<<16|(X.charCodeAt(++f1)&255)<<24,R=(R&65535)*1540483477+((R>>>16)*59797<<16),R^=R>>>24,Q=(R&65535)*1540483477+((R>>>16)*59797<<16)^(Q&65535)*1540483477+((Q>>>16)*59797<<16);switch(a1){case 3:Q^=(X.charCodeAt(f1+2)&255)<<16;case 2:Q^=(X.charCodeAt(f1+1)&255)<<8;case 1:Q^=X.charCodeAt(f1)&255,Q=(Q&65535)*1540483477+((Q>>>16)*59797<<16)}return Q^=Q>>>13,Q=(Q&65535)*1540483477+((Q>>>16)*59797<<16),((Q^Q>>>15)>>>0).toString(36)}var l=n,o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s=o,h=a(91457),p=`You have illegal escape sequence in your template literal, most likely inside content's property value.
  Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
  You can read more about this here:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,u="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",z=/[A-Z]|^ms/g,x=/_EMO_([^_]+?)_([^]*?)_EMO_/g,g=function(Q){return Q.charCodeAt(1)===45},I=function(Q){return Q!=null&&typeof Q!="boolean"},M=(0,h.Z)(function(X){return g(X)?X:X.replace(z,"-$&").toLowerCase()}),w=function(Q,R){switch(Q){case"animation":case"animationName":if(typeof R=="string")return R.replace(x,function(f1,a1,D){return e1={name:a1,styles:D,next:e1},a1})}return s[Q]!==1&&!g(Q)&&typeof R=="number"&&R!==0?R+"px":R};if(!1)var C,_,H,b,E,L;var P=null;function S(X,Q,R){if(R==null)return"";if(R.__emotion_styles!==void 0)return R;switch(typeof R){case"boolean":return"";case"object":{if(R.anim===1)return e1={name:R.name,styles:R.styles,next:e1},R.name;if(R.styles!==void 0){var f1=R.next;if(f1!==void 0)for(;f1!==void 0;)e1={name:f1.name,styles:f1.styles,next:e1},f1=f1.next;var a1=R.styles+";";return a1}return F(X,Q,R)}case"function":{if(X!==void 0){var D=e1,Z=R(X);return e1=D,S(X,Q,Z)}break}case"string":if(!1)var U,Y;break}if(Q==null)return R;var N=Q[R];return N!==void 0?N:R}function F(X,Q,R){var f1="";if(Array.isArray(R))for(var a1=0;a1<R.length;a1++)f1+=S(X,Q,R[a1])+";";else for(var D in R){var Z=R[D];if(typeof Z!="object")Q!=null&&Q[Z]!==void 0?f1+=D+"{"+Q[Z]+"}":I(Z)&&(f1+=M(D)+":"+w(D,Z)+";");else if(Array.isArray(Z)&&typeof Z[0]=="string"&&(Q==null||Q[Z[0]]===void 0))for(var U=0;U<Z.length;U++)I(Z[U])&&(f1+=M(D)+":"+w(D,Z[U])+";");else{var Y=S(X,Q,Z);switch(D){case"animation":case"animationName":{f1+=M(D)+":"+Y+";";break}default:f1+=D+"{"+Y+"}"}}}return f1}var j=/label:\s*([^\s;\n{]+)\s*(;|$)/g,J,e1,t1=function(Q,R,f1){if(Q.length===1&&typeof Q[0]=="object"&&Q[0]!==null&&Q[0].styles!==void 0)return Q[0];var a1=!0,D="";e1=void 0;var Z=Q[0];Z==null||Z.raw===void 0?(a1=!1,D+=S(f1,R,Z)):D+=Z[0];for(var U=1;U<Q.length;U++)D+=S(f1,R,Q[U]),a1&&(D+=Z[U]);var Y;j.lastIndex=0;for(var N="",W;(W=j.exec(D))!==null;)N+="-"+W[1];var z1=l(D)+N;return{name:z1,styles:D,next:e1}}},25454:function(d,f,a){"use strict";var n;a.d(f,{L:function(){return h},j:function(){return p}});var l=a(93236),o=function(z){return z()},s=(n||(n=a.t(l,2)))["useInsertionEffect"]?(n||(n=a.t(l,2)))["useInsertionEffect"]:!1,h=s||o,p=s||l.useLayoutEffect},3986:function(d,f,a){"use strict";a.d(f,{My:function(){return s},fp:function(){return l},hC:function(){return o}});var n=!0;function l(h,p,u){var z="";return u.split(" ").forEach(function(x){h[x]!==void 0?p.push(h[x]+";"):z+=x+" "}),z}var o=function(p,u,z){var x=p.key+"-"+u.name;(z===!1||n===!1)&&p.registered[x]===void 0&&(p.registered[x]=u.styles)},s=function(p,u,z){o(p,u,z);var x=p.key+"-"+u.name;if(p.inserted[u.name]===void 0){var g=u;do{var I=p.insert(u===g?"."+x:"",g,p.sheet,!0);g=g.next}while(g!==void 0)}}},34688:function(d,f,a){"use strict";a.d(f,{kG:function(){return g}});function n(I){return Math.floor(Math.log(I)*Math.LOG10E)}function l(I,M){if(typeof I.repeat=="function")return I.repeat(M);for(var w=new Array(M),C=0;C<w.length;C++)w[C]=I;return w.join("")}function o(I,M,w,C){I.get(M)||I.set(M,Object.create(null));var _=I.get(M);_[w]=C}function s(I,M,w){for(var C=0,_=Object.keys(w);C<_.length;C++){var H=_[C];o(I,M,H,w[H])}}function h(I,M,w){return p(I,M,w)[w]}function p(I,M){for(var w=[],C=2;C<arguments.length;C++)w[C-2]=arguments[C];var _=I.get(M);if(!_)throw new TypeError("".concat(M," InternalSlot has not been initialized"));return w.reduce(function(H,b){return H[b]=_[b],H},Object.create(null))}function u(I){return I.type==="literal"}function z(I,M,w){var C=w.value;Object.defineProperty(I,M,{configurable:!0,enumerable:!1,writable:!0,value:C})}var x=/-u(?:-[0-9a-z]{2,8})+/gi;function g(I,M,w){if(w===void 0&&(w=Error),!I)throw new w(M)}},19956:function(d,f,a){"use strict";a.d(f,{A:function(){return M},Z:function(){return n}});function n(w,C){var _=C&&C.cache?C.cache:I,H=C&&C.serializer?C.serializer:x,b=C&&C.strategy?C.strategy:p;return b(w,{cache:_,serializer:H})}function l(w){return w==null||typeof w=="number"||typeof w=="boolean"}function o(w,C,_,H){var b=l(H)?H:_(H),E=C.get(b);return typeof E=="undefined"&&(E=w.call(this,H),C.set(b,E)),E}function s(w,C,_){var H=Array.prototype.slice.call(arguments,3),b=_(H),E=C.get(b);return typeof E=="undefined"&&(E=w.apply(this,H),C.set(b,E)),E}function h(w,C,_,H,b){return _.bind(C,w,H,b)}function p(w,C){var _=w.length===1?o:s;return h(w,this,_,C.cache.create(),C.serializer)}function u(w,C){return h(w,this,s,C.cache.create(),C.serializer)}function z(w,C){return h(w,this,o,C.cache.create(),C.serializer)}var x=function(){return JSON.stringify(arguments)};function g(){this.cache=Object.create(null)}g.prototype.get=function(w){return this.cache[w]},g.prototype.set=function(w,C){this.cache[w]=C};var I={create:function(){return new g}},M={variadic:u,monadic:z}},72988:function(d,f,a){"use strict";a.d(f,{wD:function(){return o},VG:function(){return p},rp:function(){return z},Ii:function(){return _},O4:function(){return h},uf:function(){return u},Wh:function(){return C},Jo:function(){return I},yx:function(){return M},Wi:function(){return g},HI:function(){return w},pe:function(){return x},Qc:function(){return F0}});var n=a(96583),l;(function(y){y[y.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",y[y.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",y[y.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",y[y.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",y[y.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",y[y.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",y[y.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",y[y.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",y[y.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",y[y.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",y[y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",y[y.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",y[y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",y[y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",y[y.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",y[y.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",y[y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",y[y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",y[y.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",y[y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",y[y.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",y[y.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",y[y.INVALID_TAG=23]="INVALID_TAG",y[y.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",y[y.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",y[y.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(l||(l={}));var o;(function(y){y[y.literal=0]="literal",y[y.argument=1]="argument",y[y.number=2]="number",y[y.date=3]="date",y[y.time=4]="time",y[y.select=5]="select",y[y.plural=6]="plural",y[y.pound=7]="pound",y[y.tag=8]="tag"})(o||(o={}));var s;(function(y){y[y.number=0]="number",y[y.dateTime=1]="dateTime"})(s||(s={}));function h(y){return y.type===o.literal}function p(y){return y.type===o.argument}function u(y){return y.type===o.number}function z(y){return y.type===o.date}function x(y){return y.type===o.time}function g(y){return y.type===o.select}function I(y){return y.type===o.plural}function M(y){return y.type===o.pound}function w(y){return y.type===o.tag}function C(y){return!!(y&&typeof y=="object"&&y.type===s.number)}function _(y){return!!(y&&typeof y=="object"&&y.type===s.dateTime)}function H(y){return{type:o.literal,value:y}}function b(y,K){return{type:o.number,value:y,style:K}}var E=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,L=/[\t-\r \x85\u200E\u200F\u2028\u2029]/,P=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function S(y){var K={};return y.replace(P,function(n1){var y1=n1.length;switch(n1[0]){case"G":K.era=y1===4?"long":y1===5?"narrow":"short";break;case"y":K.year=y1===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":K.month=["numeric","2-digit","short","long","narrow"][y1-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":K.day=["numeric","2-digit"][y1-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":K.weekday=y1===4?"short":y1===5?"narrow":"short";break;case"e":if(y1<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");K.weekday=["short","long","narrow","short"][y1-4];break;case"c":if(y1<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");K.weekday=["short","long","narrow","short"][y1-4];break;case"a":K.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":K.hourCycle="h12",K.hour=["numeric","2-digit"][y1-1];break;case"H":K.hourCycle="h23",K.hour=["numeric","2-digit"][y1-1];break;case"K":K.hourCycle="h11",K.hour=["numeric","2-digit"][y1-1];break;case"k":K.hourCycle="h24",K.hour=["numeric","2-digit"][y1-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":K.minute=["numeric","2-digit"][y1-1];break;case"s":K.second=["numeric","2-digit"][y1-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":K.timeZoneName=y1<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),K}var F=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function j(y){if(y.length===0)throw new Error("Number skeleton cannot be empty");for(var K=y.split(F).filter(function($1){return $1.length>0}),n1=[],y1=0,L1=K;y1<L1.length;y1++){var J1=L1[y1],D1=J1.split("/");if(D1.length===0)throw new Error("Invalid number skeleton");for(var i0=D1[0],f0=D1.slice(1),h0=0,k1=f0;h0<k1.length;h0++){var j1=k1[h0];if(j1.length===0)throw new Error("Invalid number skeleton")}n1.push({stem:i0,options:f0})}return n1}function J(y){return y.replace(/^(.*?)-/,"")}var e1=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,t1=/^(@+)?(\+|#+)?[rs]?$/g,X=/(\*)(0+)|(#+)(0+)|(0+)/g,Q=/^(0+)$/;function R(y){var K={};return y[y.length-1]==="r"?K.roundingPriority="morePrecision":y[y.length-1]==="s"&&(K.roundingPriority="lessPrecision"),y.replace(t1,function(n1,y1,L1){return typeof L1!="string"?(K.minimumSignificantDigits=y1.length,K.maximumSignificantDigits=y1.length):L1==="+"?K.minimumSignificantDigits=y1.length:y1[0]==="#"?K.maximumSignificantDigits=y1.length:(K.minimumSignificantDigits=y1.length,K.maximumSignificantDigits=y1.length+(typeof L1=="string"?L1.length:0)),""}),K}function f1(y){switch(y){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function a1(y){var K;if(y[0]==="E"&&y[1]==="E"?(K={notation:"engineering"},y=y.slice(2)):y[0]==="E"&&(K={notation:"scientific"},y=y.slice(1)),K){var n1=y.slice(0,2);if(n1==="+!"?(K.signDisplay="always",y=y.slice(2)):n1==="+?"&&(K.signDisplay="exceptZero",y=y.slice(2)),!Q.test(y))throw new Error("Malformed concise eng/scientific notation");K.minimumIntegerDigits=y.length}return K}function D(y){var K={},n1=f1(y);return n1||K}function Z(y){for(var K={},n1=0,y1=y;n1<y1.length;n1++){var L1=y1[n1];switch(L1.stem){case"percent":case"%":K.style="percent";continue;case"%x100":K.style="percent",K.scale=100;continue;case"currency":K.style="currency",K.currency=L1.options[0];continue;case"group-off":case",_":K.useGrouping=!1;continue;case"precision-integer":case".":K.maximumFractionDigits=0;continue;case"measure-unit":case"unit":K.style="unit",K.unit=J(L1.options[0]);continue;case"compact-short":case"K":K.notation="compact",K.compactDisplay="short";continue;case"compact-long":case"KK":K.notation="compact",K.compactDisplay="long";continue;case"scientific":K=(0,n.pi)((0,n.pi)((0,n.pi)({},K),{notation:"scientific"}),L1.options.reduce(function(f0,h0){return(0,n.pi)((0,n.pi)({},f0),D(h0))},{}));continue;case"engineering":K=(0,n.pi)((0,n.pi)((0,n.pi)({},K),{notation:"engineering"}),L1.options.reduce(function(f0,h0){return(0,n.pi)((0,n.pi)({},f0),D(h0))},{}));continue;case"notation-simple":K.notation="standard";continue;case"unit-width-narrow":K.currencyDisplay="narrowSymbol",K.unitDisplay="narrow";continue;case"unit-width-short":K.currencyDisplay="code",K.unitDisplay="short";continue;case"unit-width-full-name":K.currencyDisplay="name",K.unitDisplay="long";continue;case"unit-width-iso-code":K.currencyDisplay="symbol";continue;case"scale":K.scale=parseFloat(L1.options[0]);continue;case"integer-width":if(L1.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");L1.options[0].replace(X,function(f0,h0,k1,j1,$1,w0){if(h0)K.minimumIntegerDigits=k1.length;else{if(j1&&$1)throw new Error("We currently do not support maximum integer digits");if(w0)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Q.test(L1.stem)){K.minimumIntegerDigits=L1.stem.length;continue}if(e1.test(L1.stem)){if(L1.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");L1.stem.replace(e1,function(f0,h0,k1,j1,$1,w0){return k1==="*"?K.minimumFractionDigits=h0.length:j1&&j1[0]==="#"?K.maximumFractionDigits=j1.length:$1&&w0?(K.minimumFractionDigits=$1.length,K.maximumFractionDigits=$1.length+w0.length):(K.minimumFractionDigits=h0.length,K.maximumFractionDigits=h0.length),""});var J1=L1.options[0];J1==="w"?K=(0,n.pi)((0,n.pi)({},K),{trailingZeroDisplay:"stripIfInteger"}):J1&&(K=(0,n.pi)((0,n.pi)({},K),R(J1)));continue}if(t1.test(L1.stem)){K=(0,n.pi)((0,n.pi)({},K),R(L1.stem));continue}var D1=f1(L1.stem);D1&&(K=(0,n.pi)((0,n.pi)({},K),D1));var i0=a1(L1.stem);i0&&(K=(0,n.pi)((0,n.pi)({},K),i0))}return K}var U={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function Y(y,K){for(var n1="",y1=0;y1<y.length;y1++){var L1=y.charAt(y1);if(L1==="j"){for(var J1=0;y1+1<y.length&&y.charAt(y1+1)===L1;)J1++,y1++;var D1=1+(J1&1),i0=J1<2?1:3+(J1>>1),f0="a",h0=N(K);for((h0=="H"||h0=="k")&&(i0=0);i0-- >0;)n1+=f0;for(;D1-- >0;)n1=h0+n1}else L1==="J"?n1+="H":n1+=L1}return n1}function N(y){var K=y.hourCycle;if(K===void 0&&y.hourCycles&&y.hourCycles.length&&(K=y.hourCycles[0]),K)switch(K){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n1=y.language,y1;n1!=="root"&&(y1=y.maximize().region);var L1=U[y1||""]||U[n1||""]||U["".concat(n1,"-001")]||U["001"];return L1[0]}var W,z1=new RegExp("^".concat(E.source,"*")),E1=new RegExp("".concat(E.source,"*$"));function w1(y,K){return{start:y,end:K}}var c1=!!String.prototype.startsWith,G1=!!String.fromCodePoint,B1=!!Object.fromEntries,S1=!!String.prototype.codePointAt,C1=!!String.prototype.trimStart,S0=!!String.prototype.trimEnd,L0=!!Number.isSafeInteger,Q0=L0?Number.isSafeInteger:function(y){return typeof y=="number"&&isFinite(y)&&Math.floor(y)===y&&Math.abs(y)<=9007199254740991},D0=!0;try{var z5=s1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");D0=((W=z5.exec("a"))===null||W===void 0?void 0:W[0])==="a"}catch(y){D0=!1}var g5=c1?function(K,n1,y1){return K.startsWith(n1,y1)}:function(K,n1,y1){return K.slice(y1,y1+n1.length)===n1},o0=G1?String.fromCodePoint:function(){for(var K=[],n1=0;n1<arguments.length;n1++)K[n1]=arguments[n1];for(var y1="",L1=K.length,J1=0,D1;L1>J1;){if(D1=K[J1++],D1>1114111)throw RangeError(D1+" is not a valid code point");y1+=D1<65536?String.fromCharCode(D1):String.fromCharCode(((D1-=65536)>>10)+55296,D1%1024+56320)}return y1},H0=B1?Object.fromEntries:function(K){for(var n1={},y1=0,L1=K;y1<L1.length;y1++){var J1=L1[y1],D1=J1[0],i0=J1[1];n1[D1]=i0}return n1},x0=S1?function(K,n1){return K.codePointAt(n1)}:function(K,n1){var y1=K.length;if(!(n1<0||n1>=y1)){var L1=K.charCodeAt(n1),J1;return L1<55296||L1>56319||n1+1===y1||(J1=K.charCodeAt(n1+1))<56320||J1>57343?L1:(L1-55296<<10)+(J1-56320)+65536}},U1=C1?function(K){return K.trimStart()}:function(K){return K.replace(z1,"")},V1=S0?function(K){return K.trimEnd()}:function(K){return K.replace(E1,"")};function s1(y,K){return new RegExp(y,K)}var h1;if(D0){var u1=s1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");h1=function(K,n1){var y1;u1.lastIndex=n1;var L1=u1.exec(K);return(y1=L1[1])!==null&&y1!==void 0?y1:""}}else h1=function(K,n1){for(var y1=[];;){var L1=x0(K,n1);if(L1===void 0||v0(L1)||G0(L1))break;y1.push(L1),n1+=L1>=65536?2:1}return o0.apply(void 0,y1)};var F1=function(){function y(K,n1){n1===void 0&&(n1={}),this.message=K,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n1.ignoreTag,this.locale=n1.locale,this.requiresOtherClause=!!n1.requiresOtherClause,this.shouldParseSkeletons=!!n1.shouldParseSkeletons}return y.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},y.prototype.parseMessage=function(K,n1,y1){for(var L1=[];!this.isEOF();){var J1=this.char();if(J1===123){var D1=this.parseArgument(K,y1);if(D1.err)return D1;L1.push(D1.val)}else{if(J1===125&&K>0)break;if(J1===35&&(n1==="plural"||n1==="selectordinal")){var i0=this.clonePosition();this.bump(),L1.push({type:o.pound,location:w1(i0,this.clonePosition())})}else if(J1===60&&!this.ignoreTag&&this.peek()===47){if(y1)break;return this.error(l.UNMATCHED_CLOSING_TAG,w1(this.clonePosition(),this.clonePosition()))}else if(J1===60&&!this.ignoreTag&&Z1(this.peek()||0)){var D1=this.parseTag(K,n1);if(D1.err)return D1;L1.push(D1.val)}else{var D1=this.parseLiteral(K,n1);if(D1.err)return D1;L1.push(D1.val)}}}return{val:L1,err:null}},y.prototype.parseTag=function(K,n1){var y1=this.clonePosition();this.bump();var L1=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:o.literal,value:"<".concat(L1,"/>"),location:w1(y1,this.clonePosition())},err:null};if(this.bumpIf(">")){var J1=this.parseMessage(K+1,n1,!0);if(J1.err)return J1;var D1=J1.val,i0=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Z1(this.char()))return this.error(l.INVALID_TAG,w1(i0,this.clonePosition()));var f0=this.clonePosition(),h0=this.parseTagName();return L1!==h0?this.error(l.UNMATCHED_CLOSING_TAG,w1(f0,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:o.tag,value:L1,children:D1,location:w1(y1,this.clonePosition())},err:null}:this.error(l.INVALID_TAG,w1(i0,this.clonePosition())))}else return this.error(l.UNCLOSED_TAG,w1(y1,this.clonePosition()))}else return this.error(l.INVALID_TAG,w1(y1,this.clonePosition()))},y.prototype.parseTagName=function(){var K=this.offset();for(this.bump();!this.isEOF()&&l0(this.char());)this.bump();return this.message.slice(K,this.offset())},y.prototype.parseLiteral=function(K,n1){for(var y1=this.clonePosition(),L1="";;){var J1=this.tryParseQuote(n1);if(J1){L1+=J1;continue}var D1=this.tryParseUnquoted(K,n1);if(D1){L1+=D1;continue}var i0=this.tryParseLeftAngleBracket();if(i0){L1+=i0;continue}break}var f0=w1(y1,this.clonePosition());return{val:{type:o.literal,value:L1,location:f0},err:null}},y.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!u0(this.peek()||0))?(this.bump(),"<"):null},y.prototype.tryParseQuote=function(K){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(K==="plural"||K==="selectordinal")break;return null;default:return null}this.bump();var n1=[this.char()];for(this.bump();!this.isEOF();){var y1=this.char();if(y1===39)if(this.peek()===39)n1.push(39),this.bump();else{this.bump();break}else n1.push(y1);this.bump()}return o0.apply(void 0,n1)},y.prototype.tryParseUnquoted=function(K,n1){if(this.isEOF())return null;var y1=this.char();return y1===60||y1===123||y1===35&&(n1==="plural"||n1==="selectordinal")||y1===125&&K>0?null:(this.bump(),o0(y1))},y.prototype.parseArgument=function(K,n1){var y1=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE,w1(y1,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(l.EMPTY_ARGUMENT,w1(y1,this.clonePosition()));var L1=this.parseIdentifierIfPossible().value;if(!L1)return this.error(l.MALFORMED_ARGUMENT,w1(y1,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE,w1(y1,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:o.argument,value:L1,location:w1(y1,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE,w1(y1,this.clonePosition())):this.parseArgumentOptions(K,n1,L1,y1);default:return this.error(l.MALFORMED_ARGUMENT,w1(y1,this.clonePosition()))}},y.prototype.parseIdentifierIfPossible=function(){var K=this.clonePosition(),n1=this.offset(),y1=h1(this.message,n1),L1=n1+y1.length;this.bumpTo(L1);var J1=this.clonePosition(),D1=w1(K,J1);return{value:y1,location:D1}},y.prototype.parseArgumentOptions=function(K,n1,y1,L1){var J1,D1=this.clonePosition(),i0=this.parseIdentifierIfPossible().value,f0=this.clonePosition();switch(i0){case"":return this.error(l.EXPECT_ARGUMENT_TYPE,w1(D1,f0));case"number":case"date":case"time":{this.bumpSpace();var h0=null;if(this.bumpIf(",")){this.bumpSpace();var k1=this.clonePosition(),j1=this.parseSimpleArgStyleIfPossible();if(j1.err)return j1;var $1=V1(j1.val);if($1.length===0)return this.error(l.EXPECT_ARGUMENT_STYLE,w1(this.clonePosition(),this.clonePosition()));var w0=w1(k1,this.clonePosition());h0={style:$1,styleLocation:w0}}var e0=this.tryParseArgumentClose(L1);if(e0.err)return e0;var t0=w1(L1,this.clonePosition());if(h0&&g5(h0==null?void 0:h0.style,"::",0)){var R1=U1(h0.style.slice(2));if(i0==="number"){var j1=this.parseNumberSkeletonFromString(R1,h0.styleLocation);return j1.err?j1:{val:{type:o.number,value:y1,location:t0,style:j1.val},err:null}}else{if(R1.length===0)return this.error(l.EXPECT_DATE_TIME_SKELETON,t0);var K1=R1;this.locale&&(K1=Y(R1,this.locale));var $1={type:s.dateTime,pattern:K1,location:h0.styleLocation,parsedOptions:this.shouldParseSkeletons?S(K1):{}},_0=i0==="date"?o.date:o.time;return{val:{type:_0,value:y1,location:t0,style:$1},err:null}}}return{val:{type:i0==="number"?o.number:i0==="date"?o.date:o.time,value:y1,location:t0,style:(J1=h0==null?void 0:h0.style)!==null&&J1!==void 0?J1:null},err:null}}case"plural":case"selectordinal":case"select":{var P0=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(l.EXPECT_SELECT_ARGUMENT_OPTIONS,w1(P0,(0,n.pi)({},P0)));this.bumpSpace();var a5=this.parseIdentifierIfPossible(),m1=0;if(i0!=="select"&&a5.value==="offset"){if(!this.bumpIf(":"))return this.error(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,w1(this.clonePosition(),this.clonePosition()));this.bumpSpace();var j1=this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(j1.err)return j1;this.bumpSpace(),a5=this.parseIdentifierIfPossible(),m1=j1.val}var T1=this.tryParsePluralOrSelectOptions(K,i0,n1,a5);if(T1.err)return T1;var e0=this.tryParseArgumentClose(L1);if(e0.err)return e0;var V0=w1(L1,this.clonePosition());return i0==="select"?{val:{type:o.select,value:y1,options:H0(T1.val),location:V0},err:null}:{val:{type:o.plural,value:y1,options:H0(T1.val),offset:m1,pluralType:i0==="plural"?"cardinal":"ordinal",location:V0},err:null}}default:return this.error(l.INVALID_ARGUMENT_TYPE,w1(D1,f0))}},y.prototype.tryParseArgumentClose=function(K){return this.isEOF()||this.char()!==125?this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE,w1(K,this.clonePosition())):(this.bump(),{val:!0,err:null})},y.prototype.parseSimpleArgStyleIfPossible=function(){for(var K=0,n1=this.clonePosition();!this.isEOF();){var y1=this.char();switch(y1){case 39:{this.bump();var L1=this.clonePosition();if(!this.bumpUntil("'"))return this.error(l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,w1(L1,this.clonePosition()));this.bump();break}case 123:{K+=1,this.bump();break}case 125:{if(K>0)K-=1;else return{val:this.message.slice(n1.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n1.offset,this.offset()),err:null}},y.prototype.parseNumberSkeletonFromString=function(K,n1){var y1=[];try{y1=j(K)}catch(L1){return this.error(l.INVALID_NUMBER_SKELETON,n1)}return{val:{type:s.number,tokens:y1,location:n1,parsedOptions:this.shouldParseSkeletons?Z(y1):{}},err:null}},y.prototype.tryParsePluralOrSelectOptions=function(K,n1,y1,L1){for(var J1,D1=!1,i0=[],f0=new Set,h0=L1.value,k1=L1.location;;){if(h0.length===0){var j1=this.clonePosition();if(n1!=="select"&&this.bumpIf("=")){var $1=this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_SELECTOR,l.INVALID_PLURAL_ARGUMENT_SELECTOR);if($1.err)return $1;k1=w1(j1,this.clonePosition()),h0=this.message.slice(j1.offset,this.offset())}else break}if(f0.has(h0))return this.error(n1==="select"?l.DUPLICATE_SELECT_ARGUMENT_SELECTOR:l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,k1);h0==="other"&&(D1=!0),this.bumpSpace();var w0=this.clonePosition();if(!this.bumpIf("{"))return this.error(n1==="select"?l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,w1(this.clonePosition(),this.clonePosition()));var e0=this.parseMessage(K+1,n1,y1);if(e0.err)return e0;var t0=this.tryParseArgumentClose(w0);if(t0.err)return t0;i0.push([h0,{value:e0.val,location:w1(w0,this.clonePosition())}]),f0.add(h0),this.bumpSpace(),J1=this.parseIdentifierIfPossible(),h0=J1.value,k1=J1.location}return i0.length===0?this.error(n1==="select"?l.EXPECT_SELECT_ARGUMENT_SELECTOR:l.EXPECT_PLURAL_ARGUMENT_SELECTOR,w1(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!D1?this.error(l.MISSING_OTHER_CLAUSE,w1(this.clonePosition(),this.clonePosition())):{val:i0,err:null}},y.prototype.tryParseDecimalInteger=function(K,n1){var y1=1,L1=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(y1=-1);for(var J1=!1,D1=0;!this.isEOF();){var i0=this.char();if(i0>=48&&i0<=57)J1=!0,D1=D1*10+(i0-48),this.bump();else break}var f0=w1(L1,this.clonePosition());return J1?(D1*=y1,Q0(D1)?{val:D1,err:null}:this.error(n1,f0)):this.error(K,f0)},y.prototype.offset=function(){return this.position.offset},y.prototype.isEOF=function(){return this.offset()===this.message.length},y.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},y.prototype.char=function(){var K=this.position.offset;if(K>=this.message.length)throw Error("out of bound");var n1=x0(this.message,K);if(n1===void 0)throw Error("Offset ".concat(K," is at invalid UTF-16 code unit boundary"));return n1},y.prototype.error=function(K,n1){return{val:null,err:{kind:K,message:this.message,location:n1}}},y.prototype.bump=function(){if(!this.isEOF()){var K=this.char();K===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=K<65536?1:2)}},y.prototype.bumpIf=function(K){if(g5(this.message,K,this.offset())){for(var n1=0;n1<K.length;n1++)this.bump();return!0}return!1},y.prototype.bumpUntil=function(K){var n1=this.offset(),y1=this.message.indexOf(K,n1);return y1>=0?(this.bumpTo(y1),!0):(this.bumpTo(this.message.length),!1)},y.prototype.bumpTo=function(K){if(this.offset()>K)throw Error("targetOffset ".concat(K," must be greater than or equal to the current offset ").concat(this.offset()));for(K=Math.min(K,this.message.length);;){var n1=this.offset();if(n1===K)break;if(n1>K)throw Error("targetOffset ".concat(K," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},y.prototype.bumpSpace=function(){for(;!this.isEOF()&&v0(this.char());)this.bump()},y.prototype.peek=function(){if(this.isEOF())return null;var K=this.char(),n1=this.offset(),y1=this.message.charCodeAt(n1+(K>=65536?2:1));return y1!=null?y1:null},y}();function Z1(y){return y>=97&&y<=122||y>=65&&y<=90}function u0(y){return Z1(y)||y===47}function l0(y){return y===45||y===46||y>=48&&y<=57||y===95||y>=97&&y<=122||y>=65&&y<=90||y==183||y>=192&&y<=214||y>=216&&y<=246||y>=248&&y<=893||y>=895&&y<=8191||y>=8204&&y<=8205||y>=8255&&y<=8256||y>=8304&&y<=8591||y>=11264&&y<=12271||y>=12289&&y<=55295||y>=63744&&y<=64975||y>=65008&&y<=65533||y>=65536&&y<=983039}function v0(y){return y>=9&&y<=13||y===32||y===133||y>=8206&&y<=8207||y===8232||y===8233}function G0(y){return y>=33&&y<=35||y===36||y>=37&&y<=39||y===40||y===41||y===42||y===43||y===44||y===45||y>=46&&y<=47||y>=58&&y<=59||y>=60&&y<=62||y>=63&&y<=64||y===91||y===92||y===93||y===94||y===96||y===123||y===124||y===125||y===126||y===161||y>=162&&y<=165||y===166||y===167||y===169||y===171||y===172||y===174||y===176||y===177||y===182||y===187||y===191||y===215||y===247||y>=8208&&y<=8213||y>=8214&&y<=8215||y===8216||y===8217||y===8218||y>=8219&&y<=8220||y===8221||y===8222||y===8223||y>=8224&&y<=8231||y>=8240&&y<=8248||y===8249||y===8250||y>=8251&&y<=8254||y>=8257&&y<=8259||y===8260||y===8261||y===8262||y>=8263&&y<=8273||y===8274||y===8275||y>=8277&&y<=8286||y>=8592&&y<=8596||y>=8597&&y<=8601||y>=8602&&y<=8603||y>=8604&&y<=8607||y===8608||y>=8609&&y<=8610||y===8611||y>=8612&&y<=8613||y===8614||y>=8615&&y<=8621||y===8622||y>=8623&&y<=8653||y>=8654&&y<=8655||y>=8656&&y<=8657||y===8658||y===8659||y===8660||y>=8661&&y<=8691||y>=8692&&y<=8959||y>=8960&&y<=8967||y===8968||y===8969||y===8970||y===8971||y>=8972&&y<=8991||y>=8992&&y<=8993||y>=8994&&y<=9e3||y===9001||y===9002||y>=9003&&y<=9083||y===9084||y>=9085&&y<=9114||y>=9115&&y<=9139||y>=9140&&y<=9179||y>=9180&&y<=9185||y>=9186&&y<=9254||y>=9255&&y<=9279||y>=9280&&y<=9290||y>=9291&&y<=9311||y>=9472&&y<=9654||y===9655||y>=9656&&y<=9664||y===9665||y>=9666&&y<=9719||y>=9720&&y<=9727||y>=9728&&y<=9838||y===9839||y>=9840&&y<=10087||y===10088||y===10089||y===10090||y===10091||y===10092||y===10093||y===10094||y===10095||y===10096||y===10097||y===10098||y===10099||y===10100||y===10101||y>=10132&&y<=10175||y>=10176&&y<=10180||y===10181||y===10182||y>=10183&&y<=10213||y===10214||y===10215||y===10216||y===10217||y===10218||y===10219||y===10220||y===10221||y===10222||y===10223||y>=10224&&y<=10239||y>=10240&&y<=10495||y>=10496&&y<=10626||y===10627||y===10628||y===10629||y===10630||y===10631||y===10632||y===10633||y===10634||y===10635||y===10636||y===10637||y===10638||y===10639||y===10640||y===10641||y===10642||y===10643||y===10644||y===10645||y===10646||y===10647||y===10648||y>=10649&&y<=10711||y===10712||y===10713||y===10714||y===10715||y>=10716&&y<=10747||y===10748||y===10749||y>=10750&&y<=11007||y>=11008&&y<=11055||y>=11056&&y<=11076||y>=11077&&y<=11078||y>=11079&&y<=11084||y>=11085&&y<=11123||y>=11124&&y<=11125||y>=11126&&y<=11157||y===11158||y>=11159&&y<=11263||y>=11776&&y<=11777||y===11778||y===11779||y===11780||y===11781||y>=11782&&y<=11784||y===11785||y===11786||y===11787||y===11788||y===11789||y>=11790&&y<=11798||y===11799||y>=11800&&y<=11801||y===11802||y===11803||y===11804||y===11805||y>=11806&&y<=11807||y===11808||y===11809||y===11810||y===11811||y===11812||y===11813||y===11814||y===11815||y===11816||y===11817||y>=11818&&y<=11822||y===11823||y>=11824&&y<=11833||y>=11834&&y<=11835||y>=11836&&y<=11839||y===11840||y===11841||y===11842||y>=11843&&y<=11855||y>=11856&&y<=11857||y===11858||y>=11859&&y<=11903||y>=12289&&y<=12291||y===12296||y===12297||y===12298||y===12299||y===12300||y===12301||y===12302||y===12303||y===12304||y===12305||y>=12306&&y<=12307||y===12308||y===12309||y===12310||y===12311||y===12312||y===12313||y===12314||y===12315||y===12316||y===12317||y>=12318&&y<=12319||y===12320||y===12336||y===64830||y===64831||y>=65093&&y<=65094}function X0(y){y.forEach(function(K){if(delete K.location,g(K)||I(K))for(var n1 in K.options)delete K.options[n1].location,X0(K.options[n1].value);else u(K)&&C(K.style)||(z(K)||x(K))&&_(K.style)?delete K.style.location:w(K)&&X0(K.children)})}function F0(y,K){K===void 0&&(K={}),K=(0,n.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},K);var n1=new F1(y,K).parse();if(n1.err){var y1=SyntaxError(l[n1.err.kind]);throw y1.location=n1.err.location,y1.originalMessage=n1.err.message,y1}return K!=null&&K.captureLocation||X0(n1.val),n1.val}var g1=null},94879:function(d,f,a){"use strict";a.d(f,{$6:function(){return x},OV:function(){return h},Qe:function(){return u},Rw:function(){return o},X9:function(){return z},bc:function(){return l},gb:function(){return p},wI:function(){return s}});var n=a(96583),l;(function(g){g.FORMAT_ERROR="FORMAT_ERROR",g.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",g.INVALID_CONFIG="INVALID_CONFIG",g.MISSING_DATA="MISSING_DATA",g.MISSING_TRANSLATION="MISSING_TRANSLATION"})(l||(l={}));var o=function(g){(0,n.ZT)(I,g);function I(M,w,C){var _=this,H=C?C instanceof Error?C:new Error(String(C)):void 0;return _=g.call(this,"[@formatjs/intl Error ".concat(M,"] ").concat(w,`
  `).concat(H?`
  `.concat(H.message,`
  `).concat(H.stack):""))||this,_.code=M,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(_,I),_}return I}(Error),s=function(g){(0,n.ZT)(I,g);function I(M,w){return g.call(this,l.UNSUPPORTED_FORMATTER,M,w)||this}return I}(o),h=function(g){(0,n.ZT)(I,g);function I(M,w){return g.call(this,l.INVALID_CONFIG,M,w)||this}return I}(o),p=function(g){(0,n.ZT)(I,g);function I(M,w){return g.call(this,l.MISSING_DATA,M,w)||this}return I}(o),u=function(g){(0,n.ZT)(I,g);function I(M,w,C){return g.call(this,l.FORMAT_ERROR,"".concat(M,`
  Locale: `).concat(w,`
  `),C)||this}return I}(o),z=function(g){(0,n.ZT)(I,g);function I(M,w,C,_){var H=g.call(this,"".concat(M,`
  MessageID: `).concat(C==null?void 0:C.id,`
  Default Message: `).concat(C==null?void 0:C.defaultMessage,`
  Description: `).concat(C==null?void 0:C.description,`
  `),w,_)||this;return H.descriptor=C,H}return I}(u),x=function(g){(0,n.ZT)(I,g);function I(M,w){var C=g.call(this,l.MISSING_TRANSLATION,'Missing message: "'.concat(M.id,'" for locale "').concat(w,'", using ').concat(M.defaultMessage?"default message (".concat(typeof M.defaultMessage=="string"?M.defaultMessage:M.defaultMessage.map(function(_){var H;return(H=_.value)!==null&&H!==void 0?H:JSON.stringify(_)}).join(),")"):"id"," as fallback."))||this;return C.descriptor=M,C}return I}(o)},73324:function(d,f,a){"use strict";a.d(f,{L6:function(){return h},Sn:function(){return x},TB:function(){return M},Z0:function(){return z},ax:function(){return I}});var n=a(96583),l=a(48551),o=a(19956),s=a(94879);function h(w,C,_){return _===void 0&&(_={}),C.reduce(function(H,b){return b in w?H[b]=w[b]:b in _&&(H[b]=_[b]),H},{})}var p=function(w){},u=function(w){},z={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:p,onWarn:u};function x(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function g(w){return{create:function(){return{get:function(C){return w[C]},set:function(C,_){w[C]=_}}}}}function I(w){w===void 0&&(w=x());var C=Intl.RelativeTimeFormat,_=Intl.ListFormat,H=Intl.DisplayNames,b=(0,o.Z)(function(){for(var P,S=[],F=0;F<arguments.length;F++)S[F]=arguments[F];return new((P=Intl.DateTimeFormat).bind.apply(P,(0,n.ev)([void 0],S,!1)))},{cache:g(w.dateTime),strategy:o.A.variadic}),E=(0,o.Z)(function(){for(var P,S=[],F=0;F<arguments.length;F++)S[F]=arguments[F];return new((P=Intl.NumberFormat).bind.apply(P,(0,n.ev)([void 0],S,!1)))},{cache:g(w.number),strategy:o.A.variadic}),L=(0,o.Z)(function(){for(var P,S=[],F=0;F<arguments.length;F++)S[F]=arguments[F];return new((P=Intl.PluralRules).bind.apply(P,(0,n.ev)([void 0],S,!1)))},{cache:g(w.pluralRules),strategy:o.A.variadic});return{getDateTimeFormat:b,getNumberFormat:E,getMessageFormat:(0,o.Z)(function(P,S,F,j){return new l.C(P,S,F,(0,n.pi)({formatters:{getNumberFormat:E,getDateTimeFormat:b,getPluralRules:L}},j||{}))},{cache:g(w.message),strategy:o.A.variadic}),getRelativeTimeFormat:(0,o.Z)(function(){for(var P=[],S=0;S<arguments.length;S++)P[S]=arguments[S];return new(C.bind.apply(C,(0,n.ev)([void 0],P,!1)))},{cache:g(w.relativeTime),strategy:o.A.variadic}),getPluralRules:L,getListFormat:(0,o.Z)(function(){for(var P=[],S=0;S<arguments.length;S++)P[S]=arguments[S];return new(_.bind.apply(_,(0,n.ev)([void 0],P,!1)))},{cache:g(w.list),strategy:o.A.variadic}),getDisplayNames:(0,o.Z)(function(){for(var P=[],S=0;S<arguments.length;S++)P[S]=arguments[S];return new(H.bind.apply(H,(0,n.ev)([void 0],P,!1)))},{cache:g(w.displayNames),strategy:o.A.variadic})}}function M(w,C,_,H){var b=w&&w[C],E;if(b&&(E=b[_]),E)return E;H(new s.wI("No ".concat(C," format named: ").concat(_)))}},6054:function(d,f,a){"use strict";a.d(f,{f:function(){return z},m:function(){return p}});var n=a(37635),l=a.n(n),o=a(57213),s=a.n(o),h=a(18280),p,u="/";function z(I){var M;return I.type==="hash"?M=(0,h.q_)():I.type==="memory"?M=(0,h.PP)(I):M=(0,h.lX)(),I.basename&&(u=I.basename),p=s()(s()({},M),{},{push:function(C,_){M.push(x(C,M),_)},replace:function(C,_){M.replace(x(C,M),_)},get location(){return M.location},get action(){return M.action}}),M}function x(I,M){if(typeof I=="string")return"".concat(g(u)).concat(I);if(l()(I)==="object"){var w=M.location.pathname;return s()(s()({},I),{},{pathname:I.pathname?"".concat(g(u)).concat(I.pathname):w})}else throw new Error("Unexpected to: ".concat(I))}function g(I){return I.slice(-1)==="/"?I.slice(0,-1):I}},67722:function(d,f,a){"use strict";a.d(f,{Dl:function(){return L},dY:function(){return C1},_H:function(){return g},ql:function(){return n.ql},rU:function(){return n.rU},OL:function(){return n.OL},m8:function(){return n.m8},fp:function(){return n.fp},il:function(){return V1},Sc:function(){return R1},Ov:function(){return n.Ov},yh:function(){return Nt},YB:function(){return p},bU:function(){return _0.b},TH:function(){return n.TH},OK:function(){return R0},pC:function(){return n.pC},UO:function(){return n.UO},Qt:function(){return n.Qt},eL:function(){return q5},lr:function(){return n.lr},tx:function(){return b1},WF:function(){return M.W},OO:function(){return ut}});var n=a(57378),l=a(96583),o=a(93236),s=a(81213),h=a(15318);function p(){var V=o.useContext(s._y);return(0,h.lq)(V),V}function u(V,G){var O=V.values,r1=(0,l._T)(V,["values"]),d1=G.values,_1=(0,l._T)(G,["values"]);return(0,h.wU)(d1,O)&&(0,h.wU)(r1,_1)}function z(V){var G=p(),O=G.formatMessage,r1=G.textComponent,d1=r1===void 0?o.Fragment:r1,_1=V.id,Y1=V.description,N1=V.defaultMessage,q1=V.values,M0=V.children,z0=V.tagName,j0=z0===void 0?d1:z0,U0=V.ignoreTag,W0={id:_1,description:Y1,defaultMessage:N1},r5=O(W0,q1,{ignoreTag:U0});return typeof M0=="function"?M0(Array.isArray(r5)?r5:[r5]):j0?o.createElement(j0,null,o.Children.toArray(r5)):o.createElement(o.Fragment,null,r5)}z.displayName="FormattedMessage";var x=o.memo(z,u);x.displayName="MemoizedFormattedMessage";var g=x,I=a(19673),M=a(44738),w=a(20929),C=a(62621),_=a(42018),H=a(7972);function b(){return b=Object.assign?Object.assign.bind():function(V){for(var G=1;G<arguments.length;G++){var O=arguments[G];for(var r1 in O)Object.prototype.hasOwnProperty.call(O,r1)&&(V[r1]=O[r1])}return V},b.apply(this,arguments)}var E=function(G){return o.createElement(H.ErrorBoundary,{fallbackRender:function(r1){var d1=r1.error;return o.createElement(C.Z,{type:"error"},o.createElement("p",null,o.createElement("strong",null,d1.message||"This demo has been crashed.")),d1.stack&&o.createElement("p",null,o.createElement("details",{open:!0},o.createElement("summary",null,"Error stack"),o.createElement("pre",null,d1.stack))))}},G.children)},L=function(G){var O=(0,M.W)(),r1=O.demos,d1=(0,n.Ov)(),_1=d1.basename,Y1=r1[G.demo.id],N1=Y1.component,q1=Y1.asset;return G.demo.inline?o.createElement(E,null,(0,o.createElement)(N1)):o.createElement(_.Z,b({asset:q1,demoUrl:G.previewerProps.demoUrl||"".concat(_1).concat(w.SP_ROUTE_PREFIX,"demos/").concat(G.demo.id)},G.previewerProps),G.previewerProps.iframe?null:o.createElement(E,null,(0,o.createElement)(N1)))};function P(){return P=Object.assign?Object.assign.bind():function(V){for(var G=1;G<arguments.length;G++){var O=arguments[G];for(var r1 in O)Object.prototype.hasOwnProperty.call(O,r1)&&(V[r1]=O[r1])}return V},P.apply(this,arguments)}function S(V,G){return t1(V)||e1(V,G)||j(V,G)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(V,G){if(V){if(typeof V=="string")return J(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return J(V,G)}}function J(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function e1(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function t1(V){if(Array.isArray(V))return V}var X=function(G){var O=useRouteMeta(),r1=O.frontmatter,d1=useCallback(function(M0,z0){var j0,U0=[];if((j0=M0.demo)!==null&&j0!==void 0&&j0.cols&&M0.demo.cols>1&&(typeof window=="undefined"||window.innerWidth>1024)){for(var W0=0;W0<z0.length;W0+=M0.demo.cols)z0.slice(W0,W0+M0.demo.cols).forEach(function(r5,q0){var i5;(i5=U0[q0])!==null&&i5!==void 0||(U0[q0]=[]),U0[q0].push(r5)});return U0}else U0.push(z0);return U0},[]),_1=useState(function(){return d1(r1,G.items)}),Y1=S(_1,2),N1=Y1[0],q1=Y1[1];return useEffect(function(){var M0=function(){return q1(d1(r1,G.items))};return window.addEventListener("resize",M0),function(){return window.removeEventListener("resize",M0)}},[]),React.createElement("div",{style:{display:"flex",margin:-8},"data-dumi-demo-grid":!0},N1.map(function(M0,z0){return React.createElement("section",{style:{flex:1,padding:8,width:0},key:String(z0)},M0.map(function(j0){return React.createElement(DumiDemo,P({key:j0.demo.id},j0))}))}))},Q=function(G){var O=G.tabs,r1=G.tabKey,d1=G.onChange,_1=p();return Boolean(O==null?void 0:O.length)?o.createElement("ul",{className:"dumi-default-content-tabs"},o.createElement("li",{onClick:function(){return d1()},"data-active":!r1||void 0},o.createElement("button",{type:"button"},_1.formatMessage({id:"content.tabs.default"}))),O.map(function(Y1){return o.createElement("li",{key:Y1.key,onClick:function(){return d1(Y1)},"data-active":r1===Y1.key||void 0},o.createElement("button",{type:"button"},Y1.meta.frontmatter.title))})):null},R=Q;function f1(V,G){return Y(V)||U(V,G)||D(V,G)||a1()}function a1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(V,G){if(V){if(typeof V=="string")return Z(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return Z(V,G)}}function Z(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function U(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function Y(V){if(Array.isArray(V))return V}var N="tab",W=function(){var G=(0,n.TH)(),O=G.pathname,r1=(0,n.lr)(),d1=f1(r1,1),_1=d1[0],Y1=(0,o.useCallback)(function(N1){N1?_1.set(N,N1):_1.delete(N),n.m8.push({pathname:O,search:_1.toString()})},[_1]);return[_1.get(N),Y1]},z1=function(){var G,O=useRouteMeta(),r1=O.tabs,d1=W(),_1=f1(d1,1),Y1=_1[0];return r1==null||(G=r1.find(function(N1){var q1=N1.key;return Y1===q1}))===null||G===void 0?void 0:G.meta};function E1(V,G){return S1(V)||B1(V,G)||c1(V,G)||w1()}function w1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c1(V,G){if(V){if(typeof V=="string")return G1(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return G1(V,G)}}function G1(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function B1(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function S1(V){if(Array.isArray(V))return V}var C1=function(G){var O=q5(),r1=O.tabs,d1=W(),_1=E1(d1,2),Y1=_1[0],N1=_1[1],q1=(0,o.useState)(function(){return r1==null?void 0:r1.find(function(r5){var q0=r5.key;return q0===Y1})}),M0=E1(q1,2),z0=M0[0],j0=M0[1],U0=(0,M.W)(),W0=U0.setLoading;return(0,o.useEffect)(function(){W0(!1)},[]),o.createElement(o.Fragment,null,o.createElement(R,{tabs:r1,tabKey:Y1,onChange:function(q0){j0(q0),N1(q0==null?void 0:q0.key)}}),z0?o.createElement(z0.components.default):G.children)},S0=a(71401),L0=a(21643);function Q0(V,G){return H0(V)||o0(V,G)||z5(V,G)||D0()}function D0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z5(V,G){if(V){if(typeof V=="string")return g5(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return g5(V,G)}}function g5(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function o0(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function H0(V){if(Array.isArray(V))return V}var x0="https://codesandbox.io/api/v1/sandboxes/define";function U1(V){var G,O,r1,d1,_1,Y1=Boolean((G=V.asset.dependencies)===null||G===void 0?void 0:G["index.tsx"]),N1=Y1?".tsx":".jsx",q1={},M0={},z0="index".concat(N1);return Object.entries(V.asset.dependencies).forEach(function(j0){var U0=Q0(j0,2),W0=U0[0],r5=U0[1],q0=r5.type,i5=r5.value;q0==="NPM"?M0[W0]=i5:q1[W0===z0?"App".concat(N1):W0]={content:i5,isBinary:!1}}),(r1=M0[O="react"])!==null&&r1!==void 0||(M0[O]="latest"),(_1=M0[d1="react-dom"])!==null&&_1!==void 0||(M0[d1]=M0.react),q1["sandbox.config.json"]={content:JSON.stringify({template:Y1?"create-react-app-typescript":"create-react-app"},null,2),isBinary:!1},q1["package.json"]={content:JSON.stringify({name:V.title,description:V.description||"An auto-generated demo by dumi",main:z0,dependencies:M0,devDependencies:Y1?{typescript:"^4"}:{}},null,2),isBinary:!1},q1["index.html"]={content:'<div style="margin: 16px;" id="root"></div>',isBinary:!1},q1[z0]={content:(0,L0.AM)(M0.react),isBinary:!1},(0,S0.Z)({files:q1})}var V1=function(G,O){var r1,d1=document.createElement("form"),_1=document.createElement("input"),Y1=U1(G);d1.method="POST",d1.target="_blank",d1.style.display="none",d1.action=(O==null?void 0:O.api)||x0,d1.appendChild(_1),d1.setAttribute("data-demo",((r1=G.assets)===null||r1===void 0?void 0:r1.id)||""),_1.name="parameters",_1.value=Y1,document.body.appendChild(d1),d1.submit(),d1.remove()},s1=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],h1={clickToLoad:function(V){return F1("ctl",V)},devToolsHeight:function(V){return Z1("devtoolsheight",V)},forceEmbedLayout:function(V){return F1("embed",V)},hideDevTools:function(V){return F1("hidedevtools",V)},hideExplorer:function(V){return F1("hideExplorer",V)},hideNavigation:function(V){return F1("hideNavigation",V)},showSidebar:function(V){return function(G,O){return typeof O=="boolean"?"showSidebar="+(O?"1":"0"):""}(0,V)},openFile:function(V){return function(G,O){return(Array.isArray(O)?O:[O]).filter(function(r1){return typeof r1=="string"&&r1.trim()!==""}).map(function(r1){return"file="+encodeURIComponent(r1.trim())})}(0,V).join("&")},terminalHeight:function(V){return Z1("terminalHeight",V)},theme:function(V){return u0("theme",["light","dark"],V)},view:function(V){return u0("view",["preview","editor"],V)}};function u1(V){V===void 0&&(V={});var G=Object.entries(V).map(function(O){var r1=O[0],d1=O[1];return d1!=null&&h1.hasOwnProperty(r1)?h1[r1](d1):""}).filter(Boolean);return G.length?"?"+G.join("&"):""}function F1(V,G){return G===!0?V+"=1":""}function Z1(V,G){return typeof G=="number"&&G>=0&&G<=100?V+"="+Math.round(G):""}function u0(V,G,O){return typeof O=="string"&&G.includes(O)?V+"="+O:""}function l0(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function v0(V,G){return""+X0(G)+V+u1(G)}function G0(V,G){var O={forceEmbedLayout:!0};return G&&typeof G=="object"&&Object.assign(O,G),""+X0(O)+V+u1(O)}function X0(V){return V===void 0&&(V={}),typeof V.origin=="string"?V.origin:"https://stackblitz.com"}function F0(V,G,O){if(!G||!V||!V.parentNode)throw new Error("Invalid Element");V.id&&(G.id=V.id),V.className&&(G.className=V.className),function(r1,d1){d1&&typeof d1=="object"&&(Object.hasOwnProperty.call(d1,"height")&&(r1.height=""+d1.height),Object.hasOwnProperty.call(d1,"width")&&(r1.width=""+d1.width)),r1.height||(r1.height="300"),r1.width||r1.setAttribute("style","width:100%;")}(G,O),V.parentNode.replaceChild(G,V)}function g1(V){if(typeof V=="string"){var G=document.getElementById(V);if(!G)throw new Error("Could not find element with id '"+V+"'");return G}if(V instanceof HTMLElement)return V;throw new Error("Invalid element: "+V)}function y(V){return V&&V.newWindow===!1?"_self":"_blank"}function K(){return K=Object.assign||function(V){for(var G=1;G<arguments.length;G++){var O=arguments[G];for(var r1 in O)Object.prototype.hasOwnProperty.call(O,r1)&&(V[r1]=O[r1])}return V},K.apply(this,arguments)}var n1=function(){function V(O){this.port=void 0,this.pending={},this.port=O,this.port.onmessage=this.messageListener.bind(this)}var G=V.prototype;return G.request=function(O){var r1=this,d1=O.type,_1=O.payload,Y1=l0();return new Promise(function(N1,q1){r1.pending[Y1]={resolve:N1,reject:q1},r1.port.postMessage({type:d1,payload:K({},_1,{__reqid:Y1})})})},G.messageListener=function(O){var r1;if(typeof((r1=O.data.payload)==null?void 0:r1.__reqid)=="string"){var d1=O.data,_1=d1.type,Y1=d1.payload,N1=Y1.__reqid,q1=Y1.__error;this.pending[N1]&&(Y1.__success?this.pending[N1].resolve(function(M0){var z0=K({},M0);return delete z0.__reqid,delete z0.__success,delete z0.__error,Object.keys(z0).length?z0:null}(Y1)):this.pending[N1].reject(q1?_1+": "+q1:_1),delete this.pending[N1])}},V}(),y1=function(){function V(O,r1){var d1=this;this._rdc=void 0,this.editor={openFile:function(_1){return d1._rdc.request({type:"SDK_OPEN_FILE",payload:{path:_1}})},setCurrentFile:function(_1){return d1._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:_1}})},setTheme:function(_1){return d1._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:_1}})},setView:function(_1){return d1._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:_1}})},showSidebar:function(_1){return _1===void 0&&(_1=!0),d1._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:_1}})}},this.preview={origin:"",getUrl:function(){return d1._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(_1){var Y1;return(Y1=_1==null?void 0:_1.url)!=null?Y1:null})},setUrl:function(_1){if(_1===void 0&&(_1="/"),typeof _1!="string"||!_1.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+_1+"'");return d1._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:_1}})}},this._rdc=new n1(O),Object.defineProperty(this.preview,"origin",{value:typeof r1.previewOrigin=="string"?r1.previewOrigin:null,writable:!1})}var G=V.prototype;return G.applyFsDiff=function(O){var r1=function(d1){return d1!==null&&typeof d1=="object"};if(!r1(O)||!r1(O.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(O.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:O})},G.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},G.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},V}(),L1=[],J1=function(V){var G=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l0(),this.element=V,this.pending=new Promise(function(O,r1){var d1=function(M0){var z0=M0.data;(z0==null?void 0:z0.action)==="SDK_INIT_SUCCESS"&&z0.id===G.id&&(G.vm=new y1(M0.ports[0],z0.payload),O(G.vm),Y1())},_1=function(){var M0;(M0=G.element.contentWindow)==null||M0.postMessage({action:"SDK_INIT",id:G.id},"*")};function Y1(){window.clearInterval(q1),window.removeEventListener("message",d1)}window.addEventListener("message",d1),_1();var N1=0,q1=window.setInterval(function(){if(G.vm)Y1();else{if(N1>=20)return Y1(),r1("Timeout: Unable to establish a connection with the StackBlitz VM"),void L1.forEach(function(M0,z0){M0.id===G.id&&L1.splice(z0,1)});N1++,_1()}},500)}),L1.push(this)};function D1(V,G){var O=document.createElement("input");return O.type="hidden",O.name=V,O.value=G,O}function i0(V){if(!s1.includes(V.template)){var G=s1.map(function(d1){return"'"+d1+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+G)}var O=V.template==="node",r1=document.createElement("form");return r1.method="POST",r1.setAttribute("style","display:none!important;"),r1.appendChild(D1("project[title]",V.title)),r1.appendChild(D1("project[description]",V.description)),r1.appendChild(D1("project[template]",V.template)),V.dependencies&&(O?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r1.appendChild(D1("project[dependencies]",JSON.stringify(V.dependencies)))),V.settings&&r1.appendChild(D1("project[settings]",JSON.stringify(V.settings))),Object.keys(V.files).forEach(function(d1){var _1="project[files]"+function(N1){return"["+N1.replace(/\[/g,"%5B").replace(/\]/g,"%5D")+"]"}(d1),Y1=V.files[d1];typeof Y1=="string"&&r1.appendChild(D1(_1,Y1))}),r1}function f0(V){var G,O,r1,d1;return V!=null&&V.contentWindow?(d1=(O=V)instanceof Element?"element":"id",(G=(r1=L1.find(function(_1){return _1[d1]===O}))!=null?r1:null)!=null?G:new J1(V)).pending:Promise.reject("Provided element is not an iframe.")}var h0={connect:f0,embedGithubProject:function(V,G,O){var r1=g1(V),d1=document.createElement("iframe");return d1.src=G0("/github/"+G,O),F0(r1,d1,O),f0(d1)},embedProject:function(V,G,O){var r1,d1=g1(V),_1=function(N1,q1){var M0=i0(N1);return M0.action=G0("/run",q1),M0.id="sb","<html><head><title></title></head><body>"+M0.outerHTML+"<script>document.getElementById('"+M0.id+"').submit();<\/script></body></html>"}(G,O),Y1=document.createElement("iframe");return F0(d1,Y1,O),(r1=Y1.contentDocument)==null||r1.write(_1),f0(Y1)},embedProjectId:function(V,G,O){var r1=g1(V),d1=document.createElement("iframe");return d1.src=G0("/edit/"+G,O),F0(r1,d1,O),f0(d1)},openGithubProject:function(V,G){var O=v0("/github/"+V,G),r1=y(G);window.open(O,r1)},openProject:function(V,G){(function(O,r1){var d1=i0(O);d1.action=v0("/run",r1),d1.target=y(r1),document.body.appendChild(d1),d1.submit(),document.body.removeChild(d1)})(V,G)},openProjectId:function(V,G){var O=v0("/edit/"+V,G),r1=y(G);window.open(O,r1)}};function k1(V,G){return t0(V)||e0(V,G)||$1(V,G)||j1()}function j1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $1(V,G){if(V){if(typeof V=="string")return w0(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return w0(V,G)}}function w0(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function e0(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function t0(V){if(Array.isArray(V))return V}var R1=function(G){var O,r1,d1,_1,Y1,N1=Boolean((O=G.asset.dependencies)===null||O===void 0?void 0:O["index.tsx"]),q1=N1?".tsx":".jsx",M0={},z0="index".concat(q1),j0={"index.html":'<div style="margin: 16px;" id="root"></div>'},U0={title:G.title||"",description:G.description||"An auto-generated demo by dumi",template:"create-react-app",files:{}};Object.entries(G.asset.dependencies).forEach(function(W0){var r5=k1(W0,2),q0=r5[0],i5=r5[1],M5=i5.type,nt=i5.value;M5==="NPM"?M0[q0]=nt:j0[q0===z0?"App".concat(q1):q0]=nt}),(d1=M0[r1="react"])!==null&&d1!==void 0||(M0[r1]="latest"),(Y1=M0[_1="react-dom"])!==null&&Y1!==void 0||(M0[_1]=M0.react),j0["package.json"]=JSON.stringify({name:G.title,description:G.description||"An auto-generated demo by dumi",dependencies:M0,devDependencies:N1?{typescript:"^4"}:{}},null,2),j0[z0]=(0,L0.AM)(M0.react),U0.files=j0,h0.openProject(U0)},K1=function(){var G=useSiteData(),O=G.components;return{components:O}},_0=a(27648);function P0(V,G){return A0(V)||V0(V,G)||m1(V,G)||a5()}function a5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m1(V,G){if(V){if(typeof V=="string")return T1(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return T1(V,G)}}function T1(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function V0(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function A0(V){if(Array.isArray(V))return V}var R0=function(){var G=(0,_0.b)(),O=(0,L0.RX)(),r1=(0,M.W)(),d1=r1.themeConfig,_1=Nt(),Y1=(0,L0.M7)(),N1=(0,o.useState)(function(){if(d1.nav)return Array.isArray(d1.nav)?d1.nav:d1.nav[G.id];var z0=Object.entries(_1).map(function(j0){var U0=P0(j0,2),W0=U0[0],r5=U0[1],q0=Object.values(O).reduce(function(i5,M5){return M5.path.startsWith(W0.slice(1))&&(0,L0.qu)(i5,"nav",M5.meta.frontmatter),i5},{});return{title:q0.title||r5[0].title||r5[0].children[0].title,order:q0.order||0,link:r5[0].children[0].link,activePath:W0}});return z0.sort(Y1)}),q1=P0(N1,1),M0=q1[0];return M0};function J0(V,G){return U5(V)||j5(V,G)||w5(V,G)||L5()}function L5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w5(V,G){if(V){if(typeof V=="string")return k5(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return k5(V,G)}}function k5(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function j5(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function U5(V){if(Array.isArray(V))return V}var q5=function(){var G=(0,n.Qt)(),O=G.route,r1=(0,n.TH)(),d1=r1.pathname,_1=(0,n.Ov)(),Y1=_1.clientRoutes,N1=(0,o.useCallback)(function(){var U0;if(O.path===d1&&!("isLayout"in O))U0=O.meta;else{var W0,r5,q0=(W0=(0,n.fp)(Y1,d1))===null||W0===void 0?void 0:W0.pop();U0=q0==null||(r5=q0.route)===null||r5===void 0?void 0:r5.meta}return U0||{frontmatter:{},toc:[],texts:[]}},[Y1.length,d1]),q1=(0,o.useState)(N1),M0=J0(q1,2),z0=M0[0],j0=M0[1];return(0,L0.LI)(function(){j0(N1)},[Y1.length,d1]),z0};function $5(V,G){var O=Object.keys(V);if(Object.getOwnPropertySymbols){var r1=Object.getOwnPropertySymbols(V);G&&(r1=r1.filter(function(d1){return Object.getOwnPropertyDescriptor(V,d1).enumerable})),O.push.apply(O,r1)}return O}function At(V){for(var G=1;G<arguments.length;G++){var O=arguments[G]!=null?arguments[G]:{};G%2?$5(Object(O),!0).forEach(function(r1){ft(V,r1,O[r1])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(O)):$5(Object(O)).forEach(function(r1){Object.defineProperty(V,r1,Object.getOwnPropertyDescriptor(O,r1))})}return V}function ft(V,G,O){return G in V?Object.defineProperty(V,G,{value:O,enumerable:!0,configurable:!0,writable:!0}):V[G]=O,V}function tt(V,G){var O=typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(!O){if(Array.isArray(V)||(O=Lt(V))||G&&V&&typeof V.length=="number"){O&&(V=O);var r1=0,d1=function(){};return{s:d1,n:function(){return r1>=V.length?{done:!0}:{done:!1,value:V[r1++]}},e:function(M0){throw M0},f:d1}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _1=!0,Y1=!1,N1;return{s:function(){O=O.call(V)},n:function(){var M0=O.next();return _1=M0.done,M0},e:function(M0){Y1=!0,N1=M0},f:function(){try{!_1&&O.return!=null&&O.return()}finally{if(Y1)throw N1}}}}function pt(V){return yt(V)||V5(V)||Lt(V)||m5()}function m5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V5(V){if(typeof Symbol!="undefined"&&V[Symbol.iterator]!=null||V["@@iterator"]!=null)return Array.from(V)}function yt(V){if(Array.isArray(V))return dt(V)}function Tt(V,G){return P2(V)||ta(V,G)||Lt(V,G)||Dt()}function Dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(V,G){if(V){if(typeof V=="string")return dt(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return dt(V,G)}}function dt(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function ta(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function P2(V){if(Array.isArray(V))return V}var r2="$default-group-title",v2=function(G,O){return"base"in O?G.replace(O.base.slice(1),"").replace(/^\//,""):G},Nt=function(){var G=(0,_0.b)(),O=(0,L0.RX)(),r1=(0,M.W)(),d1=r1.themeConfig,_1=(0,L0.M7)(),Y1=(0,o.useState)(function(){var M0=Object.values(O).reduce(function(j0,U0){var W0=v2(U0.path,G);if(W0&&U0.meta){var r5,q0,i5,M5="/".concat(U0.path.replace(/\/[^/]+$/,"")),nt=(0,L0.qu)({order:0},"group",U0.meta.frontmatter),R5=nt.title,G5=nt.order,D5=R5||r2;(r5=j0[M5])!==null&&r5!==void 0||(j0[M5]={}),j0[M5][D5]={title:R5,order:((q0=j0[M5][D5])===null||q0===void 0?void 0:q0.order)||G5,children:[].concat(pt(((i5=j0[M5][D5])===null||i5===void 0?void 0:i5.children)||[]),[{title:U0.meta.frontmatter.title,link:"/".concat(U0.path),order:U0.meta.frontmatter.order||0,frontmatter:U0.meta.frontmatter}])}}return j0},{}),z0=Object.entries(M0).reduce(function(j0,U0){var W0=Tt(U0,2),r5=W0[0],q0=W0[1];return j0[r5]=Object.values(q0).sort(_1),j0[r5].forEach(function(i5){return i5.children.sort(_1)}),j0},{});return Object.assign(z0,d1.sidebar)}),N1=Tt(Y1,1),q1=N1[0];return q1};function ca(V){var G={order:0,title:""},O=tt(V),r1;try{for(O.s();!(r1=O.n()).done;){var d1=r1.value,_1=tt(d1.children),Y1;try{for(_1.s();!(Y1=_1.n()).done;){var N1=Y1.value;"frontmatter"in N1&&pickRouteSortMeta(G,"nav",N1.frontmatter)}}catch(q1){_1.e(q1)}finally{_1.f()}}}catch(q1){O.e(q1)}finally{O.f()}return G}var l1=function(){var G=Nt(),O=useRouteDataComparer(),r1=useState(function(){var Y1=Object.entries(G).sort(function(N1,q1){return q1[0].split("/").length-N1[0].split("/").length}).reduce(function(N1,q1){var M0=Tt(q1,2),z0=M0[0],j0=M0[1],U0=z0.replace(/\/[^/]+$/,"");if(U0){var W0;if((W0=N1[U0])!==null&&W0!==void 0||(N1[U0]=At({path:U0,children:G[U0]||[]},ca(G[U0]||[]))),N1[z0])N1[z0].children.sort(O),N1[U0].children.push(N1[z0]),delete N1[z0];else{var r5;(r5=N1[U0].children).push.apply(r5,pt(j0))}}else j0.sort(O),N1[z0]=At({path:z0,children:j0},ca(j0));return N1},{});return Object.values(Y1)}),d1=Tt(r1,1),_1=d1[0];return _1},b1=function(){var G=(0,_0.b)(),O=Nt(),r1=(0,n.TH)(),d1=r1.pathname,_1=v2(d1.slice(1),G),Y1=_1?d1.replace(/(\/[^/]+)(\/[^/]+\/?)$/,"$1"):d1;return Y1?O[Y1]:[]},y0='"use strict";(()=>{var P=Object.create;var k=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(i,e,n)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,I=(i,e)=>{for(var n in e||(e={}))E.call(e,n)&&O(i,n,e[n]);if(R)for(var n of R(e))L.call(e,n)&&O(i,n,e[n]);return i};var N=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var F=(i,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of D(e))!E.call(i,r)&&r!==n&&k(i,r,{get:()=>e[r],enumerable:!(u=z(e,r))||u.enumerable});return i};var W=(i,e,n)=>(n=i!=null?P(B(i)):{},F(e||!i||!i.__esModule?k(n,"default",{value:i,enumerable:!0}):n,i));var j=N((K,w)=>{w.exports=function(i){var e={};function n(u){if(e[u])return e[u].exports;var r=e[u]={exports:{},id:u,loaded:!1};return i[u].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=i,n.c=e,n.p="",n(0)}([function(i,e,n){i.exports=n(1)},function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(2);Object.defineProperty(e,"combineChunks",{enumerable:!0,get:function(){return u.combineChunks}}),Object.defineProperty(e,"fillInChunks",{enumerable:!0,get:function(){return u.fillInChunks}}),Object.defineProperty(e,"findAll",{enumerable:!0,get:function(){return u.findAll}}),Object.defineProperty(e,"findChunks",{enumerable:!0,get:function(){return u.findChunks}})},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.findAll=function(t){var g=t.autoEscape,c=t.caseSensitive,f=c===void 0?!1:c,d=t.findChunks,o=d===void 0?r:d,h=t.sanitize,v=t.searchWords,T=t.textToHighlight;return l({chunksToHighlight:u({chunks:o({autoEscape:g,caseSensitive:f,sanitize:h,searchWords:v,textToHighlight:T})}),totalLength:T?T.length:0})},u=e.combineChunks=function(t){var g=t.chunks;return g=g.sort(function(c,f){return c.start-f.start}).reduce(function(c,f){if(c.length===0)return[f];var d=c.pop();if(f.start<=d.end){var o=Math.max(d.end,f.end);c.push({highlight:!1,start:d.start,end:o})}else c.push(d,f);return c},[]),g},r=function(t){var g=t.autoEscape,c=t.caseSensitive,f=t.sanitize,d=f===void 0?p:f,o=t.searchWords,h=t.textToHighlight;return h=d(h),o.filter(function(v){return v}).reduce(function(v,T){T=d(T),g&&(T=a(T));for(var m=new RegExp(T,c?"g":"gi"),y=void 0;y=m.exec(h);){var S=y.index,$=m.lastIndex;$>S&&v.push({highlight:!1,start:S,end:$}),y.index===m.lastIndex&&m.lastIndex++}return v},[])};e.findChunks=r;var l=e.fillInChunks=function(t){var g=t.chunksToHighlight,c=t.totalLength,f=[],d=function(v,T,m){T-v>0&&f.push({start:v,end:T,highlight:m})};if(g.length===0)d(0,c,!1);else{var o=0;g.forEach(function(h){d(o,h.start,!1),d(h.start,h.end,!0),o=h.end}),d(o,c,!1)}return f};function p(s){return s}function a(s){return s.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")}}])});var C=W(j()),H="tab";function M(i,e,n,u,r){let l=r!==void 0,p=u.reduce((a,s)=>(s.tocIndex===r&&(a[s.paraId]=(a[s.paraId]||"").concat(s.value)),a),[]).filter(Boolean);return Boolean(p.length)||l?{rawTitle:i,title:e,link:n,paragraphs:u.reduce((a,s)=>{var t,g;return s.tocIndex===r&&((g=a[t=s.paraId])!=null||(a[t]=""),a[s.paraId]+=s.value),a},[]).filter(Boolean)}:null}function x(i){return[i.title,i.subtitle].filter(Boolean).join(" ")}function _(i,e,n){let u=[],r=Object.values(e).reduce((l,p)=>{var a,s;return p.asset&&((s=l[a=p.routeId])!=null||(l[a]=[]),l[p.routeId].push(p)),l},{});return Object.values(i).forEach(l=>{var p;if("meta"in l&&!("isLayout"in l)){let a=l.meta,s=l.path.replace(/^([^/])/,"/$1")||"/",t=n.find(o=>s===o.link||s.startsWith(`${o.activePath}/`)),g=(r[l.id]||[]).map(o=>{var h;return(h=o.asset)==null?void 0:h.id}),c=M("",x(a.frontmatter),s,a.texts),f=a.toc.reduce((o,h,v)=>(!g.includes(h.id)&&h.depth>1&&o.push(M(h.title,`${x(a.frontmatter)} - ${h.title}`,`${s}#${h.id}`,a.texts,v)),o),[]),d=(a.tabs||[]).reduce((o,{key:h,meta:v})=>{let T=M("",`${x(a.frontmatter)} - ${v.frontmatter.title}`,`${s}?${H}=${h}`,v.texts);return T&&o.push(T),o.push(...v.toc.map((m,y)=>M(m.title,`${x(a.frontmatter)} - ${v.frontmatter.title} - ${m.title}`,`${s}?${H}=${h}#${m.id}`,v.texts,y))),o},[]);u.push({navTitle:t==null?void 0:t.title,navOrder:t?n.indexOf(t):1/0,title:x(a.frontmatter),link:s,sections:[...c?[c]:[],...f,...d],demos:((p=r[l.id])==null?void 0:p.map(o=>({link:`${s}#${o.asset.id}`,rawTitle:o.asset.title||"",title:o.asset.title||x(a.frontmatter),description:o.asset.description||"",keywords:o.asset.keywords||[]})))||[]})}}),u}function b(i="",e,n=1){let u=(0,C.findAll)({textToHighlight:i,searchWords:e,autoEscape:!0}),r={};return[u.map(({start:l,end:p,highlight:a},s)=>{let t={text:i.slice(l,p)};return s===0&&!a&&u.length>1&&t.text.length>20&&(t.text=`...${t.text.slice(-20)}`),a&&(t.highlighted=!0,r[e.find(g=>t.text.includes(g))]=n),t}),r]}function Y(i,e){let n=e.split(" "),u=new RegExp(e.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(" ","|"),"gi"),r={};return i.forEach(l=>{var a,s;let p=[];if(l.sections.forEach(t=>{for(let g of t.paragraphs)if(u.test(g)){let[c,f]=b(t.title,n,10),[d,o]=b(g,n);p.push({type:"content",link:t.link,priority:Object.values(I(I({},o),f)).reduce((h,v)=>h+v,0),highlightTitleTexts:c,highlightTexts:d});return}if(u.test(t.rawTitle)){let[g,c]=b(t.title,n,10);p.push({type:"title",link:t.link,priority:Object.values(c).reduce((f,d)=>f+d,0),highlightTitleTexts:g,highlightTexts:b(t.paragraphs[0]||"",n)[0]})}}),l.demos.forEach(t=>{if(u.test(t.rawTitle)||u.test(t.description)){let[g,c]=b(t.title,n,10),[f,d]=b(t.description,n);p.push({type:"demo",link:t.link,priority:Object.values(I(I({},d),c)).reduce((o,h)=>o+h,0),highlightTitleTexts:g,highlightTexts:f})}}),u.test(l.title)){let[t,g]=b(l.title,n,100);p.push({type:"page",link:l.link,priority:Object.values(g).reduce((c,f)=>c+f,0),highlightTitleTexts:t,highlightTexts:b(((a=l.sections[0])==null?void 0:a.paragraphs[0])||"",n)[0]})}if(p.length){let t=l.navTitle||"$ROOT";(s=r[t])!=null||(r[t]={title:l.navTitle,priority:l.navOrder*1e3,hints:[]}),r[t].hints.push(...p)}}),Object.values(r).forEach(({hints:l})=>{l.sort((p,a)=>a.priority-p.priority)}),Object.values(r).sort((l,p)=>p.priority-l.priority)}var A;self.onmessage=({data:i})=>{switch(i.action){case"generate-metadata":A=_(i.args.routes,i.args.demos,i.args.nav);break;case"get-search-result":self.postMessage(Y(A,i.args.keywords));break;default:}};})();\n';function E0(V,G){var O=Object.keys(V);if(Object.getOwnPropertySymbols){var r1=Object.getOwnPropertySymbols(V);G&&(r1=r1.filter(function(d1){return Object.getOwnPropertyDescriptor(V,d1).enumerable})),O.push.apply(O,r1)}return O}function N0(V){for(var G=1;G<arguments.length;G++){var O=arguments[G]!=null?arguments[G]:{};G%2?E0(Object(O),!0).forEach(function(r1){e5(V,r1,O[r1])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(O)):E0(Object(O)).forEach(function(r1){Object.defineProperty(V,r1,Object.getOwnPropertyDescriptor(O,r1))})}return V}function e5(V,G,O){return G in V?Object.defineProperty(V,G,{value:O,enumerable:!0,configurable:!0,writable:!0}):V[G]=O,V}function s5(V,G){return O5(V)||st(V,G)||B5(V,G)||n5()}function n5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B5(V,G){if(V){if(typeof V=="string")return b5(V,G);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return b5(V,G)}}function b5(V,G){(G==null||G>V.length)&&(G=V.length);for(var O=0,r1=new Array(G);O<G;O++)r1[O]=V[O];return r1}function st(V,G){var O=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var r1=[],d1=!0,_1=!1,Y1,N1;try{for(O=O.call(V);!(d1=(Y1=O.next()).done)&&(r1.push(Y1.value),!(G&&r1.length===G));d1=!0);}catch(q1){_1=!0,N1=q1}finally{try{!d1&&O.return!=null&&O.return()}finally{if(_1)throw N1}}return r1}}function O5(V){if(Array.isArray(V))return V}var P5;typeof window!="undefined"&&(P5=new Worker(URL.createObjectURL(new Blob([y0],{type:"application/javascript"}))));var ut=function(){var G=(0,o.useRef)(),O=(0,L0.RX)(),r1=(0,M.W)(),d1=r1.demos,_1=(0,o.useState)(!1),Y1=s5(_1,2),N1=Y1[0],q1=Y1[1],M0=(0,o.useState)(""),z0=s5(M0,2),j0=z0[0],U0=z0[1],W0=R0(),r5=(0,o.useState)([]),q0=s5(r5,2),i5=q0[0],M5=q0[1],nt=(0,o.useCallback)(function(R5){q1(!0),U0(R5)},[]);return(0,o.useEffect)(function(){P5.onmessage=function(R5){M5(R5.data),q1(!1)}},[]),(0,o.useEffect)(function(){var R5=Object.entries(d1).reduce(function(G5,D5){var Y5=s5(D5,2),at=Y5[0],A5=Y5[1],v1=A5.asset,A1=A5.routeId;return N0(N0({},G5),{},e5({},at,{asset:v1,routeId:A1}))},{});P5.postMessage({action:"generate-metadata",args:{routes:JSON.parse(JSON.stringify(O)),nav:W0,demos:R5}})},[O,d1,W0]),(0,o.useEffect)(function(){var R5=j0.trim();R5?(clearTimeout(G.current),G.current=window.setTimeout(function(){P5.postMessage({action:"get-search-result",args:{keywords:R5}})},200)):M5([])},[j0]),{keywords:j0,setKeywords:nt,result:i5,loading:N1}}},91964:function(d,f,a){"use strict";a.d(f,{k:function(){return n},s:function(){return l}});var n=[{id:"zh-CN",name:"\u4E2D\u6587",base:"/"},{id:"en-US",name:"\u82F1\u6587",base:"/en-US"}],l={"en-US":{a:"A","header.search.placeholder":"Search","previewer.actions.code.expand":"Show Code","previewer.actions.code.shrink":"Hide Code","previewer.actions.codesandbox":"Open in CodeSandbox","previewer.actions.codepen":"Open in CodePen (Not implemented)","previewer.actions.stackblitz":"Open in StackBlitz","previewer.actions.separate":"Open in separate page","404.title":"PAGE NOT FOUND","404.back":"Back to homepage","api.component.name":"Name","api.component.description":"Description","api.component.type":"Type","api.component.default":"Default","api.component.required":"(required)","api.component.loading":"Properties definition is resolving, wait a moment...","api.component.not.found":"Properties definition not found for {id} component","content.tabs.default":"Doc","search.not.found":"No content was found","layout.sidebar.btn":"Sidebar","header.search.loading":"Searching...","algolia.searchBox.resetButtonTitle":"Clear the query","algolia.searchBox.resetButtonAriaLabel":"Clear the query","algolia.searchBox.cancelButtonText":"Cancel","algolia.searchBox.cancelButtonAriaLabel":"Cancel","algolia.startScreen.recentSearchesTitle":"Recent","algolia.startScreen.noRecentSearchesText":"No recent searches","algolia.startScreen.saveRecentSearchButtonTitle":"Save this search","algolia.startScreen.removeRecentSearchButtonTitle":"Remove this search from history","algolia.startScreen.favoriteSearchesTitle":"Favorite","algolia.startScreen.removeFavoriteSearchButtonTitle":"Remove this search from favorites","algolia.errorScreen.titleText":"Unable to fetch results","algolia.errorScreen.helpText":"You might want to check your network connection.","algolia.footer.selectText":"to select","algolia.footer.selectKeyAriaLabel":"Enter key","algolia.footer.navigateText":"to navigate","algolia.footer.navigateUpKeyAriaLabel":"Arrow up","algolia.footer.navigateDownKeyAriaLabel":"Arrow down","algolia.footer.closeText":"to close","algolia.footer.closeKeyAriaLabel":"Escape key","algolia.footer.searchByText":"Search by","algolia.noResultsScreen.noResultsText":"No results for","algolia.noResultsScreen.suggestedQueryText":"Try searching for","algolia.noResultsScreen.reportMissingResultsText":"Believe this query should return results?","algolia.noResultsScreen.reportMissingResultsLinkText":"Let us know.","theme.header":"Theme Config","theme.cancel":"Cancel","theme.confirm":"Save Theme","theme.choose":"Choose"},"zh-CN":{a:"\u563F","header.search.placeholder":"\u641C\u7D22","previewer.actions.code.expand":"\u5C55\u5F00\u4EE3\u7801","previewer.actions.code.shrink":"\u6536\u8D77\u4EE3\u7801","previewer.actions.codesandbox":"\u5728 CodeSandbox \u4E2D\u6253\u5F00","previewer.actions.codepen":"\u5728 CodePen \u4E2D\u6253\u5F00\uFF08\u672A\u5B9E\u73B0\uFF09","previewer.actions.stackblitz":"\u5728 StackBlitz \u4E2D\u6253\u5F00","previewer.actions.separate":"\u5728\u72EC\u7ACB\u9875\u9762\u4E2D\u6253\u5F00","404.title":"\u9875\u9762\u672A\u627E\u5230","404.back":"\u8FD4\u56DE\u9996\u9875","api.component.name":"\u5C5E\u6027\u540D","api.component.description":"\u63CF\u8FF0","api.component.type":"\u7C7B\u578B","api.component.default":"\u9ED8\u8BA4\u503C","api.component.required":"(\u5FC5\u9009)","api.component.loading":"\u5C5E\u6027\u5B9A\u4E49\u6B63\u5728\u89E3\u6790\u4E2D\uFF0C\u7A0D\u7B49\u7247\u523B...","api.component.not.found":"\u672A\u627E\u5230 {id} \u7EC4\u4EF6\u7684\u5C5E\u6027\u5B9A\u4E49","content.tabs.default":"\u6587\u6863","search.not.found":"\u672A\u627E\u5230\u76F8\u5173\u5185\u5BB9","layout.sidebar.btn":"\u4FA7\u8FB9\u83DC\u5355","header.search.loading":"\u6B63\u5728\u641C\u7D22...","algolia.searchBox.resetButtonTitle":"\u6E05\u9664\u67E5\u8BE2","algolia.searchBox.resetButtonAriaLabel":"\u6E05\u9664\u67E5\u8BE2","algolia.searchBox.cancelButtonText":"\u53D6\u6D88","algolia.searchBox.cancelButtonAriaLabel":"\u53D6\u6D88","algolia.startScreen.recentSearchesTitle":"\u6700\u8FD1","algolia.startScreen.noRecentSearchesText":"\u65E0\u6700\u8FD1\u641C\u7D22","algolia.startScreen.saveRecentSearchButtonTitle":"\u4FDD\u5B58\u8BE5\u641C\u7D22","algolia.startScreen.removeRecentSearchButtonTitle":"\u4ECE\u5386\u53F2\u8BB0\u5F55\u4E2D\u5220\u9664\u8BE5\u641C\u7D22","algolia.startScreen.favoriteSearchesTitle":"\u6536\u85CF","algolia.startScreen.removeFavoriteSearchButtonTitle":"\u4ECE\u6536\u85CF\u4E2D\u5220\u9664\u8BE5\u641C\u7D22","algolia.errorScreen.titleText":"\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C","algolia.errorScreen.helpText":"\u4F60\u53EF\u80FD\u8981\u68C0\u67E5\u4E00\u4E0B\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5.","algolia.footer.selectText":"\u9009\u62E9","algolia.footer.selectKeyAriaLabel":"\u9009\u62E9\u952E","algolia.footer.navigateText":"\u6D4F\u89C8","algolia.footer.navigateUpKeyAriaLabel":"\u5411\u4E0A","algolia.footer.navigateDownKeyAriaLabel":"\u5411\u4E0B","algolia.footer.closeText":"\u5173\u95ED","algolia.footer.closeKeyAriaLabel":"\u9000\u51FA\u952E","algolia.footer.searchByText":"\u641C\u7D22\u65B9\u5F0F","algolia.noResultsScreen.noResultsText":"\u65E0\u7ED3\u679C","algolia.noResultsScreen.suggestedQueryText":"\u5C1D\u8BD5\u641C\u7D22","algolia.noResultsScreen.reportMissingResultsText":"\u786E\u8BA4\u8FD9\u4E2A\u67E5\u8BE2\u5E94\u8BE5\u8FD4\u56DE\u7ED3\u679C?","algolia.noResultsScreen.reportMissingResultsLinkText":"\u8BF7\u544A\u8BC9\u6211\u4EEC.","theme.header":"\u4E3B\u9898\u8BBE\u7F6E","theme.cancel":"\u53D6\u6D88","theme.confirm":"\u4FDD\u5B58\u4E3B\u9898","theme.choose":"\u9009\u62E9"}}},42359:function(d,f,a){"use strict";a.d(f,{wx:function(){return Ve},DE:function(){return f2},C3:function(){return Va},eA:function(){return Te}});var n=a(54306),l=a.n(n),o=a(93236),s={},h={title:"Mini program",toc:"menu",filename:"docs/advance/miniProgram/index.en-US.md",order:1,nav:{title:"Advance",order:2},description:"uni sdk\uFF08Get SDK,It is also available on uniapp.\uFF09"},p=[{id:"the-webview-is-used-in-uniapp",depth:2,title:"The webview is used in uniapp"},{id:"h5-page-return-applet",depth:4,title:"h5 page return applet"},{id:"h5-go-to-the-home-page-after-entering-multiple-layers",depth:4,title:"h5 Go to the home page after entering multiple layers"}],u=[{value:"uni sdk\uFF08",paraId:0,tocIndex:1},{value:"Get SDK",paraId:0,tocIndex:1},{value:",It is also available on uniapp.\uFF09",paraId:0,tocIndex:1},{value:`import '@/utils/uni-webview.js'; // uni-webview SDK

  // uniapp SDK
  const userAgent = navigator.userAgent;
  `,paraId:1,tocIndex:1},{value:"Specific use",paraId:2,tocIndex:1},{value:`// \u8DF3\u8F6C
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // Determine whether it is wechat mini program environment
    let params = {
      msg: 'testdata',
    };
    // Pay attention to encoding when passing json data
    wx.miniProgram.navigateTo({
      url: \`/pages/navigation/navigation?data=\${encodeURIComponent(
        JSON.stringify(params),
      )}\`,
    });

    // The tab page in the applet cannot be redirected (e.g. to the home page).
    wx.miniProgram.navigateTo({
      // Wrong example
      url: '/pages/index/index',
    });

    wx.miniProgram.navigateBack(); // Correct example
  }
  `,paraId:3,tocIndex:1},{value:`// The sdk also needs to be imported

  // Monitor whether to return to the home page
  history.pushState(null, null, document.URL);
  // The popstate event is triggered when the applet is clicked back
  window.addEventListener(
    'popstate',
    () => {
      if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
        // Wechat mini program environment
        wx.miniProgram.navigateBack({
          delta: history.length,
        });
      }
    },
    false,
  );
  `,paraId:4,tocIndex:2}],z={},x={title:"Introduction",toc:"menu",filename:"docs/column/introduction/index.en-US.md",order:0,nav:{title:"Column",order:3}},g=[{id:"introduction",depth:2,title:"Introduction"},{id:"notice",depth:2,title:"Notice"}],I=[{value:"Collect some front-end complications, common problems.",paraId:0,tocIndex:0},{value:"About front-end performance optimization.",paraId:0,tocIndex:0},{value:"Some exception handling on the front end.",paraId:0,tocIndex:0},{value:"Some front-end related knowledge documentation.",paraId:0,tocIndex:0},{value:"Some of this column is not yet available in English",paraId:1,tocIndex:1}],M={},w={title:"Introduction",toc:"menu",filename:"docs/guide/introduction/index.en-US.md",order:0,nav:{title:"Guide",order:0},description:"CINS: For convenient development, the integration of common regular, upload, array and other methods, greatly improve the efficiency of work development!"},C=[{id:"what-is-cins",depth:2,title:"What is cins?"},{id:"features",depth:2,title:"Features"}],_=[{value:"CINS: For ",paraId:0,tocIndex:0},{value:"convenient development",paraId:0,tocIndex:0},{value:", the integration of common regular, upload, array and other methods, greatly improve the efficiency of work development!",paraId:0,tocIndex:0},{value:"Common",paraId:1,tocIndex:0},{value:" methods do not install dependencies.",paraId:1,tocIndex:0},{value:"Advance",paraId:1,tocIndex:0},{value:" integrates a variety of more complex methods and the writing of some components.",paraId:1,tocIndex:0},{value:"Column",paraId:1,tocIndex:0},{value:" collected some basics, some questions, and links to useful documentation.",paraId:1,tocIndex:0},{value:"\u{1F4E6} Out of the box, focus on method use and project development.",paraId:2,tocIndex:1},{value:"\u{1F4CB} No dependencies, not just methods.",paraId:2,tocIndex:1},{value:"\u{1F3F7} Based on TypeScript \uFF0Cused by js and ts.",paraId:2,tocIndex:1},{value:"\u{1F3A8} Easy and convenient to use, according to the need to improve the method.",paraId:2,tocIndex:1},{value:"\u{1F4F1} Cross-platform universal, multi-end co-progress.",paraId:2,tocIndex:1},{value:"\u{1F4E1} One-click copy can be used to save development costs.",paraId:2,tocIndex:1}],H=a(25359),b=a.n(H),E=a(93525),L=a.n(E),P=a(49811),S=a.n(P),F=a(37635),j=a.n(F),J,e1={"docs-advance-component-demo-0":{component:function(){J={value:!0};var ht=H5(a(93236)),d0=a(3966);a(18983),a(62138);function B0(h5){if(typeof WeakMap!="function")return null;var ot=new WeakMap,T5=new WeakMap;return(B0=function(gt){return gt?T5:ot})(h5)}function H5(h5,ot){if(!ot&&h5&&h5.__esModule)return h5;if(h5===null||j()(h5)!=="object"&&typeof h5!="function")return{default:h5};var T5=B0(ot);if(T5&&T5.has(h5))return T5.get(h5);var it={},gt=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N5 in h5)if(N5!=="default"&&Object.prototype.hasOwnProperty.call(h5,N5)){var n2=gt?Object.getOwnPropertyDescriptor(h5,N5):null;n2&&(n2.get||n2.set)?Object.defineProperty(it,N5,n2):it[N5]=h5[N5]}return it.default=h5,T5&&T5.set(h5,it),it}return function(){var h5=(0,ht.useState)([]),ot=l()(h5,2),T5=ot[0],it=ot[1],gt=function(){var Ct=S()(b()().mark(function Bt(kt){var Xt;return b()().wrap(function(M2){for(;;)switch(M2.prev=M2.next){case 0:return M2.next=2,(0,d0.dropHandler)(kt,[".jpg",".jpeg",".bmp",".webp",".gif",".png"],1048576);case 2:Xt=M2.sent,it([].concat(L()(T5),L()(Xt)));case 4:case"end":return M2.stop()}},Bt)}));return function(kt){return Ct.apply(this,arguments)}}(),N5=function(Bt){if(Bt==="clear"){it([]);return}var kt=document.createElement("input");kt.type="file",Bt==="file"?kt.multiple=!0:Bt==="directory"&&(kt.webkitdirectory=!0),kt.onchange=function(){var Xt=S()(b()().mark(function i2(M2){var Aa,p2,va;return b()().wrap(function(ra){for(;;)switch(ra.prev=ra.next){case 0:Aa=M2.target,p2=Aa.files,va=(0,d0.addFiles)(p2,[".jpg",".jpeg",".bmp",".webp",".gif",".png"],1048576),it(va);case 4:case"end":return ra.stop()}},i2)}));return function(i2){return Xt.apply(this,arguments)}}(),kt.click()},n2=function(){console.log("Upload file list=>>>",T5)};return o.createElement("div",{className:"upload"},o.createElement("div",{className:"upload-drag",onDragEnter:d0.dragInHandler,onDragOver:d0.dragInHandler,onDrop:gt},o.createElement("div",null,o.createElement("p",{className:"tips"},"Drag a file or folder here to upload"),o.createElement("p",{className:"tips-info"},"(Limit the upload size to 1 MB and support only image files)"))),o.createElement("button",{className:"cins-button",onClick:function(){return N5("file")}},"Select file"),o.createElement("button",{className:"cins-button",onClick:function(){return N5("directory")}},"Select folder"),o.createElement("button",{className:"cins-button",onClick:function(){return N5("clear")}},"Clear"),o.createElement("button",{className:"cins-button",onClick:n2},"\u4E0A\u4F20"),o.createElement("span",{className:"upload-desc"},"(Open the console to view the upload list)"),o.createElement("div",{className:"upload-files"},o.createElement("p",{className:"files-row title"},o.createElement("span",null,"Sn"),o.createElement("span",null,"File name"),o.createElement("span",null,"Upload status"),o.createElement("span",null,"Upload progress")),T5.map(function(Ct,Bt){return o.createElement("p",{className:"files-row",key:Bt},o.createElement("span",null,Bt+1),o.createElement("span",null,Ct.file.name),o.createElement("span",null,Ct.status),o.createElement("span",null,Ct.progress))})))}}(),asset:{type:"BLOCK",id:"docs-advance-component-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
  import { dragInHandler, dropHandler, addFiles } from './_utils/upload';
  import './_styles/index.less';
  import './_styles/upload.css';
  export default () => {
    const [filesList, setFilesList] = useState<Array<any>>([]);
    const handleDrop = async (e: any) => {
      let resultList = await dropHandler(
        e,
        ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
        1024 * 1024,
      );
      // console.log(resultList);
      setFilesList([...filesList, ...resultList]);
    };

    // Select
    const handleSelect = (type: string) => {
      if (type === 'clear') {
        setFilesList([]);
        return;
      }
      const input: HTMLInputElement = document.createElement('input');
      input.type = 'file';
      if (type === 'file') {
        // File
        input.multiple = true;
      } else if (type === 'directory') {
        // Directory
        input.webkitdirectory = true;
      }

      input.onchange = async ({ target }) => {
        const files = (target as EventTarget & { files: FileList }).files;
        const resultList = addFiles(
          files,
          ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
          1024 * 1024,
        );
        setFilesList(resultList);
        // console.log(resultList);
      };
      input.click();
    };

    // Upload
    const handleUpload = () => {
      console.log('Upload file list=>>>', filesList);
    };
    return (
      <div className="upload">
        <div
          className="upload-drag"
          onDragEnter={dragInHandler}
          onDragOver={dragInHandler}
          onDrop={handleDrop}
        >
          <div>
            <p className="tips">Drag a file or folder here to upload</p>
            <p className="tips-info">
              (Limit the upload size to 1 MB and support only image files)
            </p>
          </div>
        </div>
        <button className="cins-button" onClick={() => handleSelect('file')}>
          Select file
        </button>
        <button className="cins-button" onClick={() => handleSelect('directory')}>
          Select folder
        </button>
        <button className="cins-button" onClick={() => handleSelect('clear')}>
          Clear
        </button>
        <button className="cins-button" onClick={handleUpload}>
          \u4E0A\u4F20
        </button>
        <span className="upload-desc">
          (Open the console to view the upload list)
        </span>
        <div className="upload-files">
          <p className="files-row title">
            <span>Sn</span>
            <span>File name</span>
            <span>Upload status</span>
            <span>Upload progress</span>
          </p>
          {filesList.map((item, index) => (
            <p className="files-row" key={index}>
              <span>{index + 1}</span>
              <span>{item.file.name}</span>
              <span>{item.status}</span>
              <span>{item.progress}</span>
            </p>
          ))}
        </div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/upload.css":{type:"FILE",value:a(47484).Z},"_styles/index.less":{type:"FILE",value:a(30213).Z},"_utils/upload.ts":{type:"FILE",value:a(7311).Z}}}}},t1={title:"Component",toc:"menu",filename:"docs/advance/component/index.en-US.md",order:2,nav:{title:"Advance",order:2}},X=[{id:"upload-component",depth:2,title:"Upload component"},{id:"mobile-prompt-component",depth:2,title:"Mobile prompt component"},{id:"import",depth:4,title:"Import"},{id:"success-message",depth:4,title:"Success message"},{id:"failure-prompt",depth:4,title:"Failure prompt"}],Q=[{value:"Component style reference: ",paraId:0,tocIndex:1},{value:"Toast.success('tips')",paraId:0,tocIndex:1},{value:"Component ",paraId:0,tocIndex:1},{value:"get js",paraId:0,tocIndex:1},{value:" in ",paraId:0,tocIndex:1},{value:"prompt.js",paraId:0,tocIndex:1},{value:`import { Prompt } from '@/utils/prompt.js';
  `,paraId:1,tocIndex:2},{value:`Prompt({
    type: 'success',
    message: 'Successful operation',
  });
  `,paraId:2,tocIndex:3},{value:`Prompt({
    type: 'error',
    message: 'Operation failed, please click<a>click here for details</a>',
    callback: () => {
      // Click the callback function after the a label.
    },
  });
  `,paraId:3,tocIndex:4}],R={},f1={title:"Interview",toc:"menu",filename:"docs/column/interview/index.en-US.md",order:3,nav:{title:"Column",order:3}},a1=[],D=[{value:" There is no English document, please go to the Chinese column.",paraId:0}],Z={},U={title:"Questions",toc:"menu",filename:"docs/column/questions/index.en-US.md",order:2,nav:{title:"Column",order:3}},Y=[{id:"best-exception-handling-ever",depth:2,title:'"Best" exception handling ever'},{id:"failed-to-load-js-on-the-page",depth:2,title:"Failed to load js on the page"}],N=[{value:"try {\n  // any code\n} catch (e) {\n  location.href = `https://www.baidu.com/s?wd=${e.message}`;\n  // location.href = `https://stackoverflow.com/search?q=js+${e.message}`;\n}\n",paraId:0,tocIndex:0},{value:`// Note that this code is written in the header script and executed first
  // 1.When to try again
  // 2.How to retry

  // Indicates the domain name you want to replace
  const domains = ['https://aaa.com', 'https://bbb.com', 'https://ccc.com'];
  // Maximum retry times
  const maxRetry = 3;
  // Information that a js has retried (subscript and number of times)
  const retryInfo = {};
  window.addEventListener(
    'error',
    (e) => {
      const tag = e.target;
      if (tag.tagName === 'SCRIPT' && !(e instanceof ErrorEvent)) {
        // script loading failure
        const url = new URL(tag.src);
        if (!retryInfo[url.pathname]) {
          // Check whether a retry has been performed
          retryInfo[url.pathname] = {
            times: 0, // Number of tries
            nextIndex: 0, // Subscript of the domain name for the next retry
          };
        }
        const info = retryInfo[url.pathname];
        // Block subsequent page loading
        document.write(\`<script src="\${url.toString()}">\\<\\/script>\`);

        // const script = document.createElement('script')
        // url.host = domains[info.nextIndex]
        // script.src = url.toString()
        // document.body.insertBefore(script, tag)

        // Retry times and index changes
        info.times++;
        info.nextIndex = (info.nextIndex + 1) % domains.length;
      }
    },
    true,
  );
  `,paraId:1,tocIndex:1}],W={},z1={title:"Date & Time",toc:"menu",filename:"docs/usually/datetime/index.en-US.md",order:3,nav:{title:"Usually",order:1}},E1=[{id:"date-and-time-formatting",depth:2,title:"Date and time formatting"},{id:"return-the-day-of-the-week-according-to-the-date",depth:2,title:"Return the day of the week according to the date"},{id:"n-days-before-the-date",depth:2,title:"n days before the date"},{id:"n-months-ago-today",depth:2,title:"n months ago today"},{id:"minutes-and-seconds-are-converted-to-time-stampsjs",depth:2,title:"Minutes and seconds are converted to time stamps\uFF08JS\uFF09"},{id:"is-it-a-working-day",depth:2,title:"Is it a working day?"},{id:"the-number-of-days-in-a-month-or-year",depth:2,title:"The number of days in a month or year"},{id:"every-day-of-the-year-and-month",depth:2,title:"Every day of the year and month"},{id:"calculate-the-sum-of-start-time-and-time-length",depth:2,title:"Calculate the sum of start time and time length"},{id:"gets-the-duration-between-two-times",depth:2,title:"Gets the duration between two times"},{id:"gets-the-day-of-the-year-in-which-a-date-is-located",depth:2,title:"Gets the day of the year in which a date is located"},{id:"count-the-number-of-days-between-two-dates",depth:2,title:"Count the number of days between two dates"},{id:"time-greeting",depth:2,title:"Time greeting"}],w1=[{value:`/**
   * Time format conversion
   * @param {Date} date
   * @param {string} format
   * @return {string}
   *  YYYY\uFF1AFour-digit year
      MM\uFF1ADouble digit month\uFF0801-12\uFF09
      DD\uFF1ATwo-digit date\uFF0801-31\uFF09
      HH\uFF1ATwo-digit hour\uFF0800-23\uFF09
      mm\uFF1ATwo-digit minutes\uFF0800-59\uFF09
      ss\uFF1ATwo-digit second\uFF0800-59\uFF09
   */
  const formatDateTime = (date: Date, format: string): string => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hour)
      .replace('mm', minute)
      .replace('ss', second);
  };

  const formatted = formatDateTime(new Date(), 'YYYY-MM-DD HH:mm:ss');
  console.log(formatted); // "2023-03-26 12:34:56"
  `,paraId:0,tocIndex:0},{value:`/**
   * Day of the week by date (week of the day of return without date)
   * @param {String} date
   * @returns {String} week
   * Invoke the sample
   * dateToWeek('2022-09-20')
     // Tuesday
     dateToWeek()
     // Wednesday
   */
  const dateToWeek = (date: string): string => {
    let weeks = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = (date ? new Date(date) : new Date()).getDay();
    return weeks[day];
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * @param {number} n The default value is 0. If days is 0, the current date is returned. If days is 1, the previous date is returned
   * @return {string}  A few days before the date
   * */
  const getNDaysAgo = (n: number = 0): string => {
    if (isNaN(n) || n < 0) {
      throw new Error('Invalid number of days');
    }
    const pastDate = new Date(Date.now() - n * 24 * 60 * 60 * 1000);
    const year = pastDate.getFullYear();
    const month = (pastDate.getMonth() + 1).toString().padStart(2, '0');
    const day = pastDate.getDate().toString().padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  };
  `,paraId:2,tocIndex:2},{value:`/**
   * @param {number} m A negative number of months is the current date of the previous m months
   * @return {string} Date a few months ago
   * */
  const dateOfMonths = (m: number = 0): string => {
    const date = new Date();
    date.setMonth(date.getMonth() + m);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  };
  `,paraId:3,tocIndex:3},{value:`/**
   * @param {string|null} time Hour Minute Second // 20:00:01 ->> xxxxxx
   * @return {number|undefined} The time stamp
   * */
  const timeToSec = (time: string | null): number | undefined => {
    if (!time) {
      return undefined;
    }
    const [hourStr, minStr, secStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const min = parseInt(minStr, 10);
    const sec = secStr ? parseInt(secStr, 10) : 0;
    return hour * 3600 + min * 60 + sec;
  };
  `,paraId:4,tocIndex:4},{value:`/**
   * Is it a working day?
   * @param date date '2022-09-01'
   * @return boolean
   * */
  export const isWeekday = (date: string): boolean => {
    return new Date(date).getDay() % 6 !== 0;
  };
  `,paraId:5,tocIndex:5},{value:`/**
   * Incoming Year and Month Gets the number of days in the month of the year
   * @param {number} year
   * @param {number} month
   * @return {number} days
   **/
  const getMonthDays = (year: number, month: number): number => {
    const date = new Date(year, month, 0); // If the number of the current day is 0, js automatically processes it as the last day of the previous month
    return date.getDate();
  };
  `,paraId:6,tocIndex:6},{value:`/**
   * Get each day of the specified year
   * @param {number} year
   * @param {number} month
   * @return {Array<Item>}
   **/
  interface Item {
    yeardate: string;
    date: string;
  }

  const getDateList = (year: number, month: number): Array<Item> => {
    const lastDateOfMonth = new Date(year, month, 0).getDate();
    const formattedMonth = month.toString().padStart(2, '0');
    const result: Array<Item> = [];
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const formattedDate = i.toString().padStart(2, '0');
      const yeardate = \`\${year}-\${formattedMonth}-\${formattedDate}\`;
      const date = \`\${formattedMonth}-\${formattedDate}\`;
      result.push({ yeardate, date });
    }
    return result;
  };
  `,paraId:7,tocIndex:7},{value:`/**
   * The endtime of single appoint block
   * @param {string} stime 15:40
   * @param {number} duration 22
   * @return {string} =>>>  16:02
   */
  const getEndTime = (stime: string, duration: number): string => {
    let [hour, minute] = stime.split(':');
    let _hour = Number(hour);
    let _minute = Number(minute) + duration;
    if (_minute >= 60) {
      _hour += Math.floor(_minute / 60);
      _minute = _minute % 60;
    }
    const _hourStr = _hour < 10 ? '0' + _hour : _hour.toString();
    const _minuteStr = _minute < 10 ? '0' + _minute : _minute.toString();
    return _hourStr + ':' + _minuteStr;
  };
  `,paraId:8,tocIndex:8},{value:`/**
   * Gets the duration between two times
   * @param {string} time1 15:40
   * @param {string} time2 17:33
   * @param {number} num 1 Period Standard duration. The default value is one hour
   * @param {number} type 'start' / 'end' // start => It's a positive number,and vice versa is negative.
   * @return {number} =>>>  1.8833333333333333 // Calculate the difference between the two times as a multiple of num
   */
  const timeToInteger = (
    time1: string,
    time2: string,
    num: number,
    type: 'start' | 'end',
  ): number => {
    const [stime1, etime1] = time1.split(':').map(Number);
    const [stime2, etime2] = time2.split(':').map(Number);
    let h = 0,
      m = 0;
    if (type == 'start') {
      h = stime1 - stime2;
      m = etime1 - etime2;
    } else if (type == 'end') {
      h = stime2 - stime1;
      m = etime2 - etime1;
    }
    let decimals = m / (60 * num);
    return h / num + decimals;
  };
  `,paraId:9,tocIndex:9},{value:`/**
   * Gets the day of the year in which a date is located
   * @param {string} date '2022-12-27'
   * @return {number} =>>>  361
   */
  const dateOfYear = (date) => {
    date = new Date(date);
    const _days = Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24,
    );
    return _days;
  };
  `,paraId:10,tocIndex:10},{value:`/**
   * Count the number of days between two dates
   * @param {string} date1 '2022-12-27'
   * @param {string} date2 '2022-12-28'
   * @return {number}  =>>>  1
   */
  const daysDistance = (date1, date2) => {
    date1 = Date.parse(date1);
    date2 = Date.parse(date2);
    const _ms = date2 - date1;
    const _days = Math.floor(_ms / (24 * 3600 * 1000));
    return _days;
  };
  `,paraId:11,tocIndex:11},{value:`/**
   * Time greeting
   * @param param current time,string
   * @description param  \`formatAxis('2022-12-12 09:12:11')\` Output 'Good morning'
   * @returns Returns the concatenated time string
   */
  const formatAxis = (param: string): string => {
    let hour: number = new Date(param).getHours();
    if (hour < 6) return 'Good early morning';
    else if (hour < 9) return 'Good morning';
    else if (hour < 12) return 'Good antemeridiem';
    else if (hour < 14) return 'Good nooning';
    else if (hour < 17) return 'Good afternoon';
    else if (hour < 19) return 'Good evenfall';
    else if (hour < 22) return 'Good evening';
    else return 'Good nighttime';
  };
  `,paraId:12,tocIndex:12}],c1={},G1={title:"Location",toc:"menu",filename:"docs/usually/location/index.en-US.md",order:8,nav:{title:"Usually",order:1}},B1=[{id:"h5-to-obtain-position",depth:2,title:"H5 To obtain position"},{id:"baidu-map-latitude-and-longitude-into-tencent-map-latitude-and-longitude",depth:2,title:"Baidu map latitude and longitude into Tencent map latitude and longitude"},{id:"tencent-map-to-baidu-map-latitude-and-longitude",depth:2,title:"Tencent map to Baidu map latitude and longitude"},{id:"tencent-map-api",depth:2,title:"Tencent map API"}],S1=[{value:`/**
   * Latitude and longitude acquisition
   * Optimization was performed based on the acquisition position of h5
   * @return {object} The value of the parameter
   * An authorization popup will be displayed when obtaining the location
   **/

  const getLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let data = {
              lat: latitude,
              lng: longitude,
            };
            resolve(data);
          },
          () => {
            reject('Failed to get location');
          },
        );
      } else {
        reject(
          'Your device does not support current geolocation information retrieval',
        );
      }
    });
  };
  `,paraId:0,tocIndex:0},{value:`/**
   * Baidu map latitude and longitude into Tencent map latitude and longitude
   * @param {Number} lat
   * @param {Number} lng
   * @returns
   */
  const bdMapToTxMap = (
    lat: number,
    lng: number,
  ): { lng: number; lat: number } => {
    let pi = (3.14159265358979324 * 3000.0) / 180.0;
    let x = lng - 0.0065;
    let y = lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * pi);
    lng = z * Math.cos(theta);
    lat = z * Math.sin(theta);
    return { lng: lng, lat: lat };
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * Tencent map to Baidu map latitude and longitude
   * @param {Number} lat
   * @param {Number} lng
   * @return {Object}
   */
  const txMapToBdMap = (lng: number, lat: number) => {
    const x_pi = (Math.PI * 3000.0) / 180.0;
    let x = lng;
    let y = lat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
    let lngs = z * Math.cos(theta) + 0.0065;
    let lats = z * Math.sin(theta) + 0.006;
    return {
      lng: lngs,
      lat: lats,
    };
  };
  `,paraId:2,tocIndex:2},{value:"Request ",paraId:3,tocIndex:3},{value:"API",paraId:3,tocIndex:3},{value:" Cross-domain problems may be encountered ",paraId:3,tocIndex:3},{value:"jsonp",paraId:3,tocIndex:3},{value:" request resolution across domains\u3002",paraId:3,tocIndex:3},{value:"Get ",paraId:3,tocIndex:3},{value:"jsonp",paraId:3,tocIndex:3},{value:" File\u3002",paraId:3,tocIndex:3},{value:"jsonp.js",paraId:3,tocIndex:3},{value:" Content is not much, source code as follows.",paraId:3,tocIndex:3},{value:`const jsonp = (url: string, data?: Record<string, any>): Promise<any> => {
    return new Promise((resolve, reject) => {
      // 1. init url
      let dataString = url.indexOf('?') === -1 ? '?' : '&';
      const callbackName = \`jsonpCB_\${Date.now()}\`;
      url += \`\${dataString}callback=\${callbackName}\`;

      if (data) {
        // 2. put params to url
        for (let k in data) {
          url += \`&\${k}=\${data[k]}\`;
        }
      }

      const scriptNode = document.createElement('script');
      scriptNode.src = url;

      // 3. callback
      window[callbackName] = (result: any) => {
        result ? resolve(result) : reject('No data returned');
        delete window[callbackName];
        document.body.removeChild(scriptNode);
      };

      // 4. error
      scriptNode.addEventListener(
        'error',
        () => {
          reject('The interface failed to return data.');
          delete window[callbackName];
          document.body.removeChild(scriptNode);
        },
        false,
      );

      // 5. start
      document.body.appendChild(scriptNode);
    });
  };

  export { jsonp };
  `,paraId:4,tocIndex:3},{value:"Method of use \uFF08",paraId:5,tocIndex:3},{value:"Official website of key Application",paraId:5,tocIndex:3},{value:"\uFF09",paraId:5,tocIndex:3},{value:`import { jsonp } from './jsonp';

  interface LocationData {
    lat: number;
    lng: number;
  }

  interface LocationResult {
    status: number;
    message: string;
    result: LocationData;
  }

  const getLocation = (): Promise<LocationData> => {
    const key = 'YOUR_TENCENT_MAP_API_KEY';
    return new Promise((resolve, reject) => {
      jsonp<LocationResult>('https://apis.map.qq.com/ws/location/v1/ip', {
        key,
        output: 'jsonp',
      })
        .then((res) => {
          if (res.status === 0) {
            const locationData = res.result;
            resolve(locationData);
          } else {
            reject(res.message);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  `,paraId:6,tocIndex:3}],C1={},S0={title:"Changelog",toc:"menu",filename:"docs/guide/changelog/index.en-US.md",order:1,nav:{title:"Guide",order:0}},L0=[{id:"common",depth:3,title:"Common"},{id:"advance",depth:3,title:"Advance"},{id:"column",depth:3,title:"Column"}],Q0=[{value:"2023/03/27 Http - Added ",paraId:0,tocIndex:0},{value:"Axios advanced encapsulation.",paraId:0,tocIndex:0},{value:"2023/03/14 File - Added ",paraId:0,tocIndex:0},{value:"Slice upload.",paraId:0,tocIndex:0},{value:"2023/03/13 Array Object - Added ",paraId:0,tocIndex:0},{value:"To reinvent the solution.",paraId:0,tocIndex:0},{value:"2023/02/09 Common - Added ",paraId:0,tocIndex:0},{value:"Determines if the function passed in is marked async.",paraId:0,tocIndex:0},{value:"2023/02/07 File - Added ",paraId:0,tocIndex:0},{value:"Combine pictures and text into one image.",paraId:0,tocIndex:0},{value:"2023/02/06 File - Added ",paraId:0,tocIndex:0},{value:"Download the file using the url.",paraId:0,tocIndex:0},{value:"2023/02/03 File - Added ",paraId:0,tocIndex:0},{value:"ImgUrlToBase64.",paraId:0,tocIndex:0},{value:"2023/01/10 File - Added ",paraId:0,tocIndex:0},{value:"FileToBase64.",paraId:0,tocIndex:0},{value:"2023/01/10 Added ",paraId:0,tocIndex:0},{value:"Common->File",paraId:0,tocIndex:0},{value:" menu.",paraId:0,tocIndex:0},{value:"2023/01/10 Cache - Added ",paraId:0,tocIndex:0},{value:"Storage.",paraId:0,tocIndex:0},{value:"2023/01/10 Common - Added ",paraId:0,tocIndex:0},{value:"Color conversion.",paraId:0,tocIndex:0},{value:"2023/01/10 Regex - Added ",paraId:0,tocIndex:0},{value:"Amount separation.",paraId:0,tocIndex:0},{value:"2023/01/10 Common - Added ",paraId:0,tocIndex:0},{value:"Matching text discoloration.",paraId:0,tocIndex:0},{value:"2023/01/10 Common - Added ",paraId:0,tocIndex:0},{value:"Turn numbers into Chinese uppercase.",paraId:0,tocIndex:0},{value:"2023/01/10 Regex - Added ",paraId:0,tocIndex:0},{value:"Cryptographic strength.",paraId:0,tocIndex:0},{value:"2023/01/10 Regex - Added ",paraId:0,tocIndex:0},{value:"Cryptographic strength.",paraId:0,tocIndex:0},{value:"2023/01/10 Regex - Added ",paraId:0,tocIndex:0},{value:"Postal code.",paraId:0,tocIndex:0},{value:"2023/01/10 Datetime - Added ",paraId:0,tocIndex:0},{value:"Time greeting.",paraId:0,tocIndex:0},{value:"2023/01/09 Array Object - Added ",paraId:0,tocIndex:0},{value:"Determines whether two objects are the same.",paraId:0,tocIndex:0},{value:"2022/12/29 Datetime - Added ",paraId:0,tocIndex:0},{value:"Count the number of days between two dates.",paraId:0,tocIndex:0},{value:"2022/12/29 Common - Added ",paraId:0,tocIndex:0},{value:"Deep clone(MessageChannel).",paraId:0,tocIndex:0},{value:"2022/12/29 Common - Added ",paraId:0,tocIndex:0},{value:"Deep clone(Map).",paraId:0,tocIndex:0},{value:"2022/12/27 Array Object - Added ",paraId:0,tocIndex:0},{value:"Filter object attributes.",paraId:0,tocIndex:0},{value:"2022/12/27 Common - Added ",paraId:0,tocIndex:0},{value:"Copy the text to the clipboard.",paraId:0,tocIndex:0},{value:"2022/12/27 Datetime - Added ",paraId:0,tocIndex:0},{value:"Gets the day of the year in which a date is located.",paraId:0,tocIndex:0},{value:"2022/12/02 Datetime - Added ",paraId:0,tocIndex:0},{value:"gets the duration between two times.",paraId:0,tocIndex:0},{value:"2022/12/02 Datetime - Added ",paraId:0,tocIndex:0},{value:"calculate the sum of start time and time length.",paraId:0,tocIndex:0},{value:"2022/11/30 Common - Added ",paraId:0,tocIndex:0},{value:"convert the data of json to URL parameters.",paraId:0,tocIndex:0},{value:"2022/11/30 Datetime - Added ",paraId:0,tocIndex:0},{value:"every day of a certain year and a certain month.",paraId:0,tocIndex:0},{value:"2022/11/30 Datetime - Added ",paraId:0,tocIndex:0},{value:"the number of days in a month and a year.",paraId:0,tocIndex:0},{value:"2022/11/28 Common - Added ",paraId:0,tocIndex:0},{value:"deep copy.",paraId:0,tocIndex:0},{value:"2022/11/18 Regex - Added ",paraId:0,tocIndex:0},{value:"regular syntax reference.",paraId:0,tocIndex:0},{value:"2022/11/17 Regex - Added ",paraId:0,tocIndex:0},{value:"regulars compatible with mobile phone numbers and landline numbers.",paraId:0,tocIndex:0},{value:"2023/03/24 CSS - Added ",paraId:1,tocIndex:1},{value:"Underline dynamic effect.",paraId:1,tocIndex:1},{value:"2023/03/10 CSS - Added ",paraId:1,tocIndex:1},{value:"Pinyin labeling.",paraId:1,tocIndex:1},{value:"2023/03/14 Component - Added ",paraId:1,tocIndex:1},{value:"Upload component.",paraId:1,tocIndex:1},{value:"2023/03/10 CSS - Added ",paraId:1,tocIndex:1},{value:"The css implements intelligent text adaptation.",paraId:1,tocIndex:1},{value:"2023/03/07 CSS - Added ",paraId:1,tocIndex:1},{value:"Implement different backgrounds for buttons.",paraId:1,tocIndex:1},{value:"2023/03/03 Added ",paraId:1,tocIndex:1},{value:"Winnow->Tips",paraId:1,tocIndex:1},{value:" menu.",paraId:1,tocIndex:1},{value:"2023/02/15 CSS - Added ",paraId:1,tocIndex:1},{value:"Beyond multiline omission.",paraId:1,tocIndex:1},{value:"2023/02/06 Component - Added ",paraId:1,tocIndex:1},{value:"mobile prompt component.",paraId:1,tocIndex:1},{value:"2023/02/06 Added ",paraId:1,tocIndex:1},{value:"Winnow->Component",paraId:1,tocIndex:1},{value:" menu.",paraId:1,tocIndex:1},{value:"2023/02/03 Mini program - Added ",paraId:1,tocIndex:1},{value:"the webview is used in uniapp.",paraId:1,tocIndex:1},{value:"2023/02/03 Added ",paraId:1,tocIndex:1},{value:"Winnow->Mini program",paraId:1,tocIndex:1},{value:" menu.",paraId:1,tocIndex:1},{value:"2022/12/03 CSS - Added ",paraId:1,tocIndex:1},{value:"achieve button throttling effect by CSS.",paraId:1,tocIndex:1},{value:"2022/12/02 CSS - Added ",paraId:1,tocIndex:1},{value:"pseudo class to achieve the prompt icon effect.",paraId:1,tocIndex:1},{value:"2022/12/01 CSS - Added ",paraId:1,tocIndex:1},{value:"the site turns gray.",paraId:1,tocIndex:1},{value:"2022/11/28 CSS - Added ",paraId:1,tocIndex:1},{value:"a text stroke.",paraId:1,tocIndex:1},{value:"2022/11/02 CSS - Added ",paraId:1,tocIndex:1},{value:"the input box jitter.",paraId:1,tocIndex:1},{value:"2023/03/24 Share - Added ",paraId:2,tocIndex:2},{value:"Algorithmic data",paraId:2,tocIndex:2},{value:" & ",paraId:2,tocIndex:2},{value:"Front-end interview",paraId:2,tocIndex:2},{value:".",paraId:2,tocIndex:2},{value:"2023/03/24 Column - Added ",paraId:2,tocIndex:2},{value:"Share",paraId:2,tocIndex:2},{value:" menu.",paraId:2,tocIndex:2},{value:"2023/03/16 Column - Added ",paraId:2,tocIndex:2},{value:"JS",paraId:2,tocIndex:2},{value:" menu.",paraId:2,tocIndex:2},{value:"2023/03/16 Column - Added ",paraId:2,tocIndex:2},{value:"React",paraId:2,tocIndex:2},{value:" menu.",paraId:2,tocIndex:2},{value:"2023/03/16 Column - Added ",paraId:2,tocIndex:2},{value:"Interview",paraId:2,tocIndex:2},{value:" menu.",paraId:2,tocIndex:2},{value:"2023/03/13 Questions - Added ",paraId:2,tocIndex:2},{value:"Failed to load js on the page.",paraId:2,tocIndex:2},{value:"2023/02/09 Column - Added ",paraId:2,tocIndex:2},{value:"Questions",paraId:2,tocIndex:2},{value:" menu.",paraId:2,tocIndex:2},{value:"2023/02/08 Column - Added ",paraId:2,tocIndex:2},{value:"SEO menu ->front-end performance optimization.",paraId:2,tocIndex:2},{value:"2023/02/07 Added ",paraId:2,tocIndex:2},{value:"Column",paraId:2,tocIndex:2},{value:" navigation menu.",paraId:2,tocIndex:2}],D0={},z5={title:"Usually",toc:"menu",filename:"docs/usually/common/index.en-US.md",order:1,nav:{title:"Usually",order:1}},g5=[{id:"introduction",depth:2,title:"Introduction"},{id:"address-bar-parameters",depth:2,title:"Address Bar Parameters"},{id:"a-single-parameter",depth:3,title:"A single parameter"},{id:"multiple-parameters",depth:3,title:"Multiple parameters"},{id:"json-to-get-parameter",depth:2,title:"json to get parameter"},{id:"check-data-type",depth:2,title:"Check data type"},{id:"method-1",depth:3,title:"Method 1"},{id:"method-2",depth:3,title:"Method 2"},{id:"debounce",depth:2,title:"Debounce"},{id:"throttle",depth:2,title:"Throttle"},{id:"cell-phone-number-desensitization",depth:2,title:"Cell phone number desensitization"},{id:"case-and-case-conversion",depth:2,title:"Case and case conversion"},{id:"andoird-or-ios",depth:2,title:"Andoird or ios"},{id:"generate-uuid",depth:2,title:"Generate uuid"},{id:"listens-to-the-current-window-state",depth:2,title:"Listens to the current window state"},{id:"web-share-api",depth:2,title:"Web Share API"},{id:"deep-clone",depth:2,title:"Deep clone"},{id:"jsonparse",depth:3,title:"JSON.parse"},{id:"hash",depth:3,title:"hash"},{id:"map",depth:3,title:"Map"},{id:"messagechannel",depth:3,title:"MessageChannel"},{id:"copy-the-text-to-the-clipboard",depth:2,title:"Copy the text to the clipboard"},{id:"turn-numbers-into-chinese-uppercase",depth:2,title:"Turn numbers into Chinese uppercase"},{id:"method-1-1",depth:3,title:"Method 1"},{id:"method-2-1",depth:3,title:"Method 2"},{id:"matching-text-discoloration",depth:2,title:"Matching text discoloration"},{id:"color-conversion",depth:2,title:"Color conversion"},{id:"determines-if-the-function-passed-in-is-marked-async",depth:2,title:"Determines if the function passed in is marked async"}],o0=[{value:"A collection of methods that are commonly used but not very informative.",paraId:0,tocIndex:0},{value:"There are multiple solutions, and there are separate menus for those that fall into one category.",paraId:0,tocIndex:0},{value:"Although the methods are common and simple, they are useful.",paraId:0,tocIndex:0},{value:"Summary is not easy, don't spray if you don't like.",paraId:0,tocIndex:0},{value:`/**
   * Get Address Bar Parameters
   * @param  { string } key Gets the name of the parameter
   * @return { string|null } The parameter value
   * */
  const getRouteParam = (key: string): string | null => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (urlSearchParams.has(key)) {
      return urlSearchParams.get(key);
    }

    const hashParams = new URLSearchParams(window.location.hash.substr(1));
    if (hashParams.has(key)) {
      return hashParams.get(key);
    }

    const state = window.history.state;
    if (state && typeof state === 'object' && key in state) {
      return state[key];
    }

    const entries = window.location.search
      .slice(1)
      .split('&')
      .map((entry) => entry.split('='));
    for (const [entryKey, entryValue] of entries) {
      if (decodeURIComponent(entryKey) === key) {
        return decodeURIComponent(entryValue);
      }
    }
    return null;
  };
  `,paraId:1,tocIndex:2},{value:`/**
   * Analytical URL parameters
   * @param { string } url
   * @return { object }
   * */
  const getParamsAsJson = (url: string): object => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    const params = new URLSearchParams(queryString);
    const result: { [key: string]: string } = {};
    params.forEach((value, key) => (result[key] = value));
    return result;
  };
  `,paraId:2,tocIndex:3},{value:`/**
   * Convert the data of json to URL parameters
   * @param { object } json
   * @return { string }
   * */

  // \u793A\u4F8B
  let json = {
    id: 1,
    name: 'test',
    address: '\u5317\u4EAC\u5E02',
    sex: true,
    other: 'xxxxx',
  };
  // result ==> id=1&name=test&address=\u5317\u4EAC\u5E02&sex=true&other=xxxxx
  const jsonToParams = (json: object): string => {
    const paramsArray = [];
    for (const [key, value] of Object.entries(json)) {
      paramsArray.push([key, value]);
    }
    const params = new URLSearchParams(paramsArray);
    return params.toString();
  };
  `,paraId:3,tocIndex:4},{value:"Supports multiple types of verification",paraId:4,tocIndex:5},{value:`Method 1 supports only the first seven types
  `,paraId:4,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"null",paraId:5,tocIndex:5},{value:"undefined",paraId:5,tocIndex:5},{value:"object",paraId:5,tocIndex:5},{value:"array",paraId:5,tocIndex:5},{value:"date",paraId:5,tocIndex:5},{value:"regexp",paraId:5,tocIndex:5},{value:"map",paraId:5,tocIndex:5},{value:"set",paraId:5,tocIndex:5},{value:`/**
   * Check data type
   * @param { unknown } value
   * @return { string } type
   * */
  const typeOf = (value: unknown): string => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  };
  `,paraId:6,tocIndex:6},{value:`/**
   * Check data type
   * @param { unknown } value
   * @return { string } type
   * */
  const getType = (value: unknown): string => {
    if (typeof value === 'object') {
      if (value === null) {
        return 'null';
      }
      if (Array.isArray(value)) {
        return 'array';
      }
      if (value instanceof Date) {
        return 'date';
      }
      if (value instanceof RegExp) {
        return 'regexp';
      }
      if (value instanceof Map) {
        return 'map';
      }
      if (value instanceof Set) {
        return 'set';
      }
      return 'object';
    }
    return typeof value;
  };
  `,paraId:7,tocIndex:7},{value:`/**
   * Debounce
   * @param { Function } function Function
   * @param { number } time The time interval
   * */
  const debounce = (() => {
    let timer: NodeJS.Timeout | null = null;
    return (callback: () => void, wait: number = 800) => {
      timer && clearTimeout(timer);
      timer = setTimeout(callback, wait);
    };
  })();
  `,paraId:8,tocIndex:8},{value:`/**
   * Throttle
   * @param { Function } function Function
   * @param { number } time The time interval
   * */
  const throttle = (() => {
    let last: number = 0;
    return (callback: () => void, wait: number = 800) => {
      let now = +new Date();
      if (now - last > wait) {
        callback();
        last = now;
      }
    };
  })();
  `,paraId:9,tocIndex:9},{value:`/**
   * Cell phone number desensitization
   * @param mobile Phone number 13122223333 -> 131****3333
   * @return mobile Desensitized cell phone number
   * */
  const hideMobile = (mobile: number | string) => {
    return String(mobile).replace(/^(\\d{3})\\d{4}(\\d{4})$/, '$1****$2');
  };
  `,paraId:10,tocIndex:10},{value:`/**
   * Case and case conversion
   * @param str The string to be converted
   * @param type 1-All uppercase 2-All lowercase 3-Capitalize the first letter
   * @return str
   * */
  const turnCase = (str: string, type: number) => {
    switch (type) {
      case 1:
        return str.toUpperCase();
      case 2:
        return str.toLowerCase();
      case 3:
        return str[0].toUpperCase() + str.substring(1).toLowerCase();
      default:
        return str;
    }
  };
  `,paraId:11,tocIndex:11},{value:`/**
   * Andoird or ios
   * @return type
   * */
  const getOSType = (): string => {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
      return 'ios';
    }
    if (isAndroid) {
      return 'android';
    }
    return 'other';
  };
  `,paraId:12,tocIndex:12},{value:`/**
   * uuid
   * @return uuid
   * */
  const uuid = () => {
    const temp_url = URL.createObjectURL(new Blob());
    const uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url); // Release this url
    return uuid.substring(uuid.lastIndexOf('/') + 1);
  };
  `,paraId:13,tocIndex:13},{value:`document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState); // visible/hidden
  });
  `,paraId:14,tocIndex:14},{value:"navigator.share()\uFF1AReturn a promise that will resolve if the share is successfu. This interface calls the native sharing mechanism and takes the data you want to share as an argument. Note that it can only be called when the user presses a link or button. In other words, it requires transient activation.",paraId:15,tocIndex:15},{value:`/**
   * Page sharing
   * @param {string} url - Links to share
   * @param {string} text - Text to be shared
   * @param {string} title - Titles to share
   * @param {File[]} files - An array of File objects to share
   * */
  interface ShareData {
    url: string;
    text: string;
    title: string;
    files: File[];
  }

  const shareQuote = async (shareData: ShareData): Promise<void> => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error(error);
    }
  };
  `,paraId:16,tocIndex:15},{value:`/**
   * @param { object | array} obj
   * @return
   **/
  const deepClone = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  };
  `,paraId:17,tocIndex:17},{value:`/**
   * Deep copy
   * @param {object} obj The object to copy
   * @param hash
   * @returns Returns the new object after copy
   */
  const deepClone = <T>(obj: T, hash = new WeakMap<any, any>()): T => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj) as unknown as T;
    }

    if (obj instanceof RegExp) {
      return new RegExp(obj) as unknown as T;
    }

    if (hash.has(obj)) {
      return hash.get(obj);
    }

    let newobj: any = Array.isArray(obj) ? [] : {};

    hash.set(obj, newobj);

    for (let key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        newobj[key] = deepClone(value, hash);
      } else {
        newobj[key] = value;
      }
    }

    return newobj;
  };
  `,paraId:18,tocIndex:18},{value:`/**
   * \u6DF1\u62F7\u8D1D
   * @param {object|array} obj \u8981\u62F7\u8D1D\u7684\u5BF9\u8C61
   * @returns \u8FD4\u56DE\u62F7\u8D1D\u540E\u7684\u5BF9\u8C61
   */
  const deepClone = <T>(obj: T): T => {
    const objectMap = new Map();
    const _deepClone = (value: any): any => {
      const type = typeof value;
      if (type !== 'object' || type === null) {
        return value;
      }
      if (objectMap.has(value)) {
        return objectMap.get(value);
      }
      const result = Array.isArray(value) ? [] : {};
      objectMap.set(value, result);
      for (const key in value) {
        result[key] = _deepClone(value[key]);
      }
      return result;
    };
    return _deepClone(obj);
  };
  `,paraId:19,tocIndex:19},{value:`/**
   * @param { object | array} obj
   *  deepClone({ a: 1, b: [{ c: 1 }] }).then((res) => {
   *    console.log(res);
   *  });
   **/
  const deepClone = (obj) => {
    return new Promise((resolve) => {
      const { port1, port2 } = new MessageChannel();
      port1.postMessage(obj);
      port2.onmessage = (msg) => {
        resolve(msg.data);
      };
    });
  };
  `,paraId:20,tocIndex:20},{value:`/**
   * @param { string } text content
   */
  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text);
  };
  `,paraId:21,tocIndex:21},{value:`/**
   * Turn numbers into Chinese uppercase
   * @param val string
   * @param unit
   * @returns
   */
  const numberToUppercase = (
    val: any,
    unit = '\u4EDF\u4F70\u62FE\u4EBF\u4EDF\u4F70\u62FE\u4E07\u4EDF\u4F70\u62FE\u5143\u89D2\u5206',
    v = '',
  ): string => {
    val += '00';
    let lookup = val.indexOf('.');
    if (lookup >= 0) val = val.substring(0, lookup) + val.substr(lookup + 1, 2);
    unit = unit.substr(unit.length - val.length);
    for (let i = 0; i < val.length; i++) {
      v += '\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396'.substr(val.substr(i, 1), 1) + unit.substr(i, 1);
    }
    v = v
      .replace(/\u96F6\u89D2\u96F6\u5206$/, '\u6574')
      .replace(/\u96F6[\u4EDF\u4F70\u62FE]/g, '\u96F6')
      .replace(/\u96F6{2,}/g, '\u96F6')
      .replace(/\u96F6([\u4EBF|\u4E07])/g, '$1')
      .replace(/\u96F6+\u5143/, '\u5143')
      .replace(/\u4EBF\u96F6{0,3}\u4E07/, '\u4EBF')
      .replace(/^\u5143/, '\u96F6\u5143');
    return v;
  };
  `,paraId:22,tocIndex:23},{value:`/**
   * Digital amount to Chinese amount
   * @param {number} num The number to be converted
   * @return {string}  Returns the processed string
   */
  const toChineseNumber = (num: number): string => {
    if (isNaN(num)) {
      return '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6570\u5B57\uFF01';
    }
    const fraction = ['\u89D2', '\u5206'];
    const digit = ['\u96F6', '\u58F9', '\u8D30', '\u53C1', '\u8086', '\u4F0D', '\u9646', '\u67D2', '\u634C', '\u7396'];
    const unit = [
      ['\u5143', '\u4E07', '\u4EBF'],
      ['', '\u62FE', '\u4F70', '\u4EDF'],
    ];
    const head = num < 0 ? '\u8D1F' : '';
    num = Math.abs(num);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
      s += (
        digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]
      ).replace(/\u96F6./, '');
    }
    s = s || '\u6574';
    num = Math.floor(num);
    for (
      let i = 0;
      i < unit[0].length && num > 0;
      i++, num = Math.floor(num / 10)
    ) {
      let p = '';
      for (
        let j = 0;
        j < unit[1].length && num > 0;
        j++, num = Math.floor(num / 10)
      ) {
        p = digit[num % 10] + unit[1][j] + p;
      }
      s = p.replace(/(\u96F6.)*\u96F6$/, '').replace(/^$/, '\u96F6') + unit[0][i] + s;
    }
    return head + s.replace(/(\u96F6.)*\u96F6\u5143/, '\u5143').replace(/(\u96F6.)+/g, '\u96F6');
  };

  // Example usage
  console.log(toChineseNumber(123456789.12)); // \u8F93\u51FA "\u58F9\u4EBF\u8D30\u4EDF\u53C1\u4F70\u8086\u62FE\u4F0D\u4E07\u9646\u4EDF\u67D2\u4F70\u634C\u62FE\u7396\u5143\u58F9\u89D2\u8D30\u5206"
  `,paraId:23,tocIndex:24},{value:`/**
   * Matching text discoloration
   * @param val
   * @param text
   * @param color
   * @returns
   */
  const textColor = (val: string, text = '', color = 'red'): string => {
    let v = text.replace(
      new RegExp(val, 'gi'),
      \`<span style='color: \${color}'>\${val}</span>\`,
    );
    return v;
  };
  `,paraId:24,tocIndex:25},{value:`/**
   * Color conversion function
   * @method hexToRgb hex conversion rgb
   * @method rgbToHex rgb conversion Hex
   * @method getDarkColor Depth color value
   * @method getLightColor Lighten the color value
   */
  const useChangeColor = () => {
    // str string
    const hexToRgb = (str: string): any => {
      let hexs: any = '';
      let reg = /^\\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(str)) {
        console.log('Incorrect hex was entered.');
        return '';
      }
      str = str.replace('#', '');
      hexs = str.match(/../g);
      for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
      return hexs;
    };
    // r Stand for red | g Stand for green | b Stand for blue
    const rgbToHex = (r: any, g: any, b: any): string => {
      let reg = /^\\d{1,3}$/;
      if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
        console.log('Incorrect rgb was entered.');
        return '';
      }
      let hexs = [r.toString(16), g.toString(16), b.toString(16)];
      for (let i = 0; i < 3; i++)
        if (hexs[i].length == 1) hexs[i] = \`0\${hexs[i]}\`;
      return \`#\${hexs.join('')}\`;
    };
    // color string | level from 0 - 1
    const getDarkColor = (color: string, level: number): string => {
      let reg = /^\\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(color)) {
        console.log('Incorrect hex was entered.');
        return '';
      }
      let rgb = useChangeColor().hexToRgb(color);
      for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
      return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
    };
    // color  | level from 0 - 1
    const getLightColor = (color: string, level: number): string => {
      let reg = /^\\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(color)) {
        console.log('Incorrect hex was entered.');
        return '';
      }
      let rgb = useChangeColor().hexToRgb(color);
      for (let i = 0; i < 3; i++)
        rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
      return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
    };
    return {
      hexToRgb,
      rgbToHex,
      getDarkColor,
      getLightColor,
    };
  };
  `,paraId:25,tocIndex:26},{value:`/**
   * Determines if the function passed in is marked async
   * @param { Function } func Incoming function
   * @return { Boolean }
   */
  const isAsyncFunction = (func) => {
    return func[Symbol.toStringTag] === 'AsyncFunction';
  };
  `,paraId:26,tocIndex:27}],H0={},x0={title:"\u5C0F\u7A0B\u5E8F",toc:"menu",filename:"docs/advance/miniProgram/index.md",order:1,nav:{title:"\u8FDB\u9636",order:2},description:"\u5F15\u5165 uni \u7684 SDK\uFF08\u83B7\u53D6 SDK\uFF0C\u4E5F\u53EF\u5728 uniapp \u5B98\u7F51\u83B7\u53D6\u3002\uFF09"},U1=[{id:"uniapp-\u4E2D\u4F7F\u7528-webview",depth:2,title:"uniapp \u4E2D\u4F7F\u7528 webview"},{id:"h5-\u9875\u9762\u8FD4\u56DE\u5C0F\u7A0B\u5E8F",depth:4,title:"h5 \u9875\u9762\u8FD4\u56DE\u5C0F\u7A0B\u5E8F"},{id:"h5-\u9875\u9762\u8FDB\u5165\u591A\u5C42\u540E\u56DE\u5230\u9996\u9875",depth:4,title:"h5 \u9875\u9762\u8FDB\u5165\u591A\u5C42\u540E\u56DE\u5230\u9996\u9875"}],V1=[{value:"\u5F15\u5165 uni \u7684 SDK\uFF08",paraId:0,tocIndex:1},{value:"\u83B7\u53D6 SDK",paraId:0,tocIndex:1},{value:"\uFF0C\u4E5F\u53EF\u5728 uniapp \u5B98\u7F51\u83B7\u53D6\u3002\uFF09",paraId:0,tocIndex:1},{value:`import '@/utils/uni-webview.js'; // uni-webview SDK

  // uniapp SDK
  const userAgent = navigator.userAgent;
  `,paraId:1,tocIndex:1},{value:"\u5177\u4F53\u4F7F\u7528",paraId:2,tocIndex:1},{value:`// \u8DF3\u8F6C
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // \u5224\u65AD\u662F\u5426\u4E3A\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u73AF\u5883
    let params = {
      msg: '\u6D4B\u8BD5\u6570\u636E',
    };
    // \u4F20\u9012json\u6570\u636E\u65F6\u6CE8\u610F\u7F16\u7801
    wx.miniProgram.navigateTo({
      url: \`/pages/navigation/navigation?data=\${encodeURIComponent(
        JSON.stringify(params),
      )}\`,
    });

    // \u5C0F\u7A0B\u5E8F\u4E2D\u7684tab\u9875\u4E0D\u53EF\u8DF3\u8F6C\uFF08\u4F8B\u5982\u8DF3\u8F6C\u5230\u9996\u9875\uFF09
    wx.miniProgram.navigateTo({
      // \u9519\u8BEF\u4F8B\u5B50
      url: '/pages/index/index',
    });

    wx.miniProgram.navigateBack(); // \u6B63\u786E\u4F8B\u5B50
  }
  `,paraId:3,tocIndex:1},{value:`// \u9996\u5148\u540C\u6837\u9700\u8981\u4E0A\u8FF0\u5F15\u5165SDK

  // \u76D1\u542C\u662F\u5426\u56DE\u5230\u9996\u9875
  history.pushState(null, null, document.URL);
  // \u70B9\u51FB\u5C0F\u7A0B\u5E8F\u8FD4\u56DE\u65F6\u4F1A\u89E6\u53D1popstate\u4E8B\u4EF6
  window.addEventListener(
    'popstate',
    () => {
      if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
        // \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u73AF\u5883
        wx.miniProgram.navigateBack({
          delta: history.length,
        });
      }
    },
    false,
  );
  `,paraId:4,tocIndex:2}],s1={},h1={title:"\u4ECB\u7ECD",toc:"menu",filename:"docs/column/introduction/index.md",order:0,nav:{title:"\u4E13\u680F",order:3}},u1=[{id:"\u4ECB\u7ECD",depth:2,title:"\u4ECB\u7ECD"},{id:"\u6CE8\u610F\u4E8B\u9879",depth:2,title:"\u6CE8\u610F\u4E8B\u9879"}],F1=[{value:"\u6536\u96C6\u4E00\u4E9B\u524D\u7AEF\u7684\u7591\u96BE\u6742\u75C7\u3001\u5E38\u89C1\u95EE\u9898",paraId:0,tocIndex:0},{value:"\u5173\u4E8E\u524D\u7AEF SEO \u6027\u80FD\u4F18\u5316",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u7684\u4E00\u4E9B\u5F02\u5E38\u5904\u7406",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u76F8\u5173\u7684\u4E00\u4E9B\u77E5\u8BC6\u6587\u6863",paraId:0,tocIndex:0},{value:"\u6B64\u4E13\u680F\u90E8\u5206\u5185\u5BB9\u6682\u65E0\u82F1\u6587\u6587\u6863",paraId:1,tocIndex:1}],Z1={},u0={title:"Array Object",toc:"menu",filename:"docs/usually/array/index.en-US.md",order:2,nav:{title:"Usually",order:1}},l0=[{id:"determines-whether-two-objects-are-the-same",depth:2,title:"Determines whether two objects are the same"},{id:"fuzzy-search",depth:2,title:"Fuzzy search"},{id:"traverse-the-tree-nodes",depth:2,title:"Traverse the tree nodes"},{id:"filter-object-attributes",depth:2,title:"Filter object attributes"},{id:"duplicate-removal",depth:2,title:"Duplicate removal"},{id:"array-objects-are-de-weighted-according-to-fields",depth:3,title:"Array objects are de-weighted according to fields"},{id:"array-array-object-deweight",depth:3,title:"Array, array object deweight"},{id:"to-reinvent-the-solution",depth:3,title:"To reinvent the solution"}],v0=[{value:`/**
   * Determines whether two objects are the same
   * @param a One object to compare
   * @param b There's object two to compare
   * @returns Returns true if the same is true, reverse if the opposite is true
   */
  const isObjectValueEqual = <T>(a: T, b: T): boolean => {
    if (!a || !b) return false;
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) return false;
    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i];
      let propA = a[propName as keyof typeof a];
      let propB = b[propName as keyof typeof b];
      if (!b.hasOwnProperty(propName)) return false;
      if (propA instanceof Object) {
        if (!isObjectValueEqual(propA, propB)) return false;
      } else if (propA !== propB) {
        return false;
      }
    }
    return true;
  };
  `,paraId:0,tocIndex:0},{value:`/**
   * Fuzzy search
   * @param {Array<any>} list The original array
   * @param {string} keyword Keywords for query
   * @param {string} attribute The array needs to retrieve attributes
   * @return arr
   * */
  const fuzzyQuery = <T>(list: T[], keyword: string, attribute: keyof T): T[] => {
    const reg = new RegExp(keyword);
    const arr: T[] = [];
    for (let i = 0; i < list.length; i++) {
      if (reg.test(list[i][attribute])) {
        arr.push(list[i]);
      }
    }
    return arr;
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * Traverse the tree nodes
   * @param {Array<any>} data Tree data
   * @param {Function} callback The callback function
   * @param {string} childrenName Array of child nodes
   * */
  const foreachTree = (
    data: Array<any>,
    callback: (params: any) => void,
    childrenName = 'children',
  ) => {
    data.forEach((item) => {
      callback(item);
      if (item[childrenName]?.length) {
        foreachTree(item[childrenName], callback, childrenName);
      }
    });
  };
  `,paraId:2,tocIndex:2},{value:`/**
   * @param { object } obj
   * @param { string } attrName
   * @return { Object } The filtered object
   * pickAttrs({a:1,b:2,c:3},'a','b') ==>>>> { a: 1, b: 2 }
   *
   */
  const pickAttrs = (obj, ...props) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([k]) => props.includes(k)),
    );
  };
  `,paraId:3,tocIndex:3},{value:`/**
   * Array objects are de-weighted according to fields
   * @param arr The array to be removed
   * @param key Based on the name of the field to be deleted
   * @return arr
   * */
  const uniqueArrayObject = (arr: Array<any> = [], key: string) => {
    if (arr.length === 0) return;
    let list: Array<any> = [];
    const map: any = {};
    arr.forEach((item) => {
      if (!map[item[key]]) {
        map[item[key]] = item;
      }
    });
    list = Object.values(map);
    return list;
  };
  `,paraId:4,tocIndex:5},{value:`/**
   * Array, array object deweight
   * @param arr Array contents
   * @param attr Key values to be de-duplicated (array objects\uFF09
   * @returns
   */
  declare type EmptyArrayType<T = any> = T[];
  declare type EmptyObjectType<T = any> = {
    [key: string]: T;
  };
  const removeDuplicate = (arr: EmptyArrayType, attr?: any) => {
    if (!Object.keys(arr).length) {
      return arr;
    } else {
      if (attr) {
        const obj: EmptyObjectType = {};
        return arr.reduce((cur: EmptyArrayType[], item: EmptyArrayType) => {
          obj[item[attr]]
            ? ''
            : (obj[item[attr]] = true && item[attr] && cur.push(item));
          return cur;
        }, []);
      } else {
        return [...new Set(arr)];
      }
    }
  };
  `,paraId:5,tocIndex:6},{value:`/**
   * @param { any } list Data to judge
   * @return  Returns the de-duplicated data
   */
  const duplicateRemoval = (list) => {
    const newArr = [...list];
    for (let i = 0; i < newArr.length; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (equals(newArr[i], newArr[j])) {
          newArr.splice(j, 1);
          j--;
        }
      }
    }

    // Determine whether two values are equal
    function equals(val1, val2) {
      if (isType(val1, 'object') && isType(val2, 'object')) {
        const keys1 = Object.keys(val1),
          keys2 = Object.keys(val2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (const k of keys1) {
          if (!keys2.includes(k)) {
            return false;
          }
          if (!equals(val1[k], val2[k])) {
            return false;
          }
        }
        return true;
      } else {
        return val1 === val2;
      }
    }

    // Determine data type
    function isType(value, type) {
      type = type[0].toUpperCase() + type.substring(1).toLowerCase();
      return Object.prototype.toString.call(value) === \`[object \${type}]\`;
    }
    return newArr;
  };
  `,paraId:6,tocIndex:7}],G0={},X0={title:"Cache",toc:"menu",filename:"docs/usually/cache/index.en-US.md",order:5,nav:{title:"Usually",order:1}},F0=[{id:"browser-cache",depth:2,title:"Browser cache"},{id:"session--local",depth:3,title:"Session & Local"},{id:"localstorage",depth:3,title:"LocalStorage"},{id:"sessionstorage",depth:3,title:"SessionStorage"},{id:"cookie",depth:2,title:"Cookie"},{id:"set-cookie",depth:3,title:"Set Cookie"},{id:"get-cookie",depth:3,title:"Get Cookie"},{id:"clear-cookie",depth:3,title:"Clear Cookie"}],g1=[{value:`// Use example
  Storage.set('key', { name: 'John Doe' }); // set localStorage
  Storage.set('key', { name: 'John Doe' }, true); // set sessionStorage
  const value = Storage.get('key'); // get localStorage
  const value = Storage.get('key', true); // get sessionStorage
  Storage.remove('key'); // remove localStorage
  Storage.remove('key', true); // remove sessionStorage
  Storage.clear(); // clear localStorage
  Storage.clear(true); // clear sessionStorage

  const Storage = {
    // Set cache
    set(key: string, val: any, isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.setItem(key, JSON.stringify(val));
    },
    // Fetch cache
    get(key: string, isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      const json = storage.getItem(key);
      return JSON.parse(json);
    },
    // Remove cache
    remove(key: string, isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.removeItem(key);
    },
    // Remove all cache
    clear(isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.clear();
    },
  };
  `,paraId:0,tocIndex:1},{value:`/**
   * window.localStorage
   * @method set
   * @method get
   * @method remove
   * @method clear
   */
  const Local = {
    // Set permanent cache
    set<T>(key: string, val: T) {
      window.localStorage.setItem(key, JSON.stringify(val));
    },
    // Get permanent cache
    get<T>(key: string): T | null {
      const json = window.localStorage.getItem(key);
      return json ? JSON.parse(json) : null;
    },
    // Remove permanent cache
    remove(key: string) {
      window.localStorage.removeItem(key);
    },
    // Remove all permanent caches
    clear() {
      window.localStorage.clear();
    },
  };
  `,paraId:1,tocIndex:2},{value:`/**
   * window.sessionStorage
   * @method set
   * @method get
   * @method remove
   * @method clear
   */
  const Session = {
    // Set temporary cache
    set<T>(key: string, val: T) {
      window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    // Get temporary cache
    get<T>(key: string): T | null {
      const json = window.sessionStorage.getItem(key);
      return json ? JSON.parse(json) : null;
    },
    // Remove temporary cache
    remove(key: string) {
      window.sessionStorage.removeItem(key);
    },
    // Remove all temporary cache
    clear() {
      window.sessionStorage.clear();
    },
  };
  `,paraId:2,tocIndex:3},{value:`/**
   * @param {string} name
   * @param {string} value
   * @param {number} expiresInMinutes
   */
  const setCookie = (
    name: string,
    value: string,
    expiresInMinutes: number = 30,
  ): void => {
    const expirationDate = new Date(
      Date.now() + expiresInMinutes * 60 * 1000,
    ).toUTCString();
    document.cookie = \`\${name}=\${value};expires=\${expirationDate};path=/\`;
  };
  `,paraId:3,tocIndex:5},{value:`/**
   * @param {string} name
   * @return {string}
   */
  const getCookie = (name: string): string => {
    const nameString = name + '=';
    const value = document.cookie
      .split(';')
      .find((item) => item.trim().startsWith(nameString));
    return value ? value.substring(nameString.length) : '';
  };
  `,paraId:4,tocIndex:6},{value:`/**
    @param {string} name 
  */
  const clearCookie = (name: string) => {
    set(name, '', -1);
  };
  `,paraId:5,tocIndex:7}],y={},K={title:"Regex",toc:"menu",filename:"docs/usually/regex/index.en-US.md",order:4,nav:{title:"Usually",order:1},description:". - All characters except line breaks."},n1=[{id:"regular-syntax-reference",depth:2,title:"Regular syntax reference"},{id:"license-plate-number",depth:2,title:"License plate number"},{id:"general-license-plate",depth:3,title:"General license plate"},{id:"trailer",depth:3,title:"Trailer"},{id:"mobile-phone-no",depth:2,title:"Mobile phone no."},{id:"phone-number-or-landline-number",depth:2,title:"Phone number or landline number"},{id:"id-number",depth:2,title:"ID number"},{id:"id-card",depth:2,title:"Id card"},{id:"email-address-format",depth:2,title:"Email address format"},{id:"whether-the-account-is-valid",depth:2,title:"Whether the account is valid"},{id:"hexadecimal-color",depth:2,title:"Hexadecimal color"},{id:"the-integer",depth:2,title:"The integer"},{id:"non-negative-integer",depth:2,title:"Non-negative integer"},{id:"positive-integer",depth:2,title:"Positive integer"},{id:"are-floating-point-numbers",depth:2,title:"Are floating point Numbers"},{id:"non-negative-floating-point-number",depth:2,title:"Non-negative floating point number"},{id:"postal-code",depth:2,title:"Postal code"},{id:"password",depth:2,title:"Password"},{id:"cryptographic-strength",depth:3,title:"Cryptographic strength"},{id:"password-format",depth:3,title:"Password format"},{id:"strong-cipher-1",depth:3,title:"Strong cipher 1"},{id:"strong-cipher-2",depth:3,title:"Strong cipher 2"},{id:"ip-address",depth:2,title:"IP address"},{id:"amount-separation",depth:2,title:"Amount separation"}],y1=[{value:`
    `,paraId:0},{value:".",paraId:1,tocIndex:0},{value:" - All characters except line breaks.",paraId:1,tocIndex:0},{value:`
    `,paraId:0},{value:"^",paraId:2,tocIndex:0},{value:" - The beginning of a string.",paraId:2,tocIndex:0},{value:`
    `,paraId:0},{value:"$",paraId:3,tocIndex:0},{value:" - End of a string.",paraId:3,tocIndex:0},{value:`
    `,paraId:0},{value:"\\d,\\w,\\s",paraId:4,tocIndex:0},{value:" - Matches digits, characters, and Spaces.",paraId:4,tocIndex:0},{value:`
    `,paraId:0},{value:"\\D,\\W,\\S",paraId:5,tocIndex:0},{value:" - Matches non-digits, non-characters, and non-spaces.",paraId:5,tocIndex:0},{value:`
    `,paraId:0},{value:"[abc]",paraId:6,tocIndex:0},{value:" - Matches a letter in a, b, or c.",paraId:6,tocIndex:0},{value:`
    `,paraId:0},{value:"[a-z]",paraId:7,tocIndex:0},{value:" - Matches a letter from a to z.",paraId:7,tocIndex:0},{value:`
    `,paraId:0},{value:"[^abc]",paraId:8,tocIndex:0},{value:" - Matches any letter other than a, b, or c.",paraId:8,tocIndex:0},{value:`
    `,paraId:0},{value:"aa|bb",paraId:9,tocIndex:0},{value:" - Matches aa or bb.",paraId:9,tocIndex:0},{value:`
    `,paraId:0},{value:"?",paraId:10,tocIndex:0},{value:" - 0 or 1 matches.",paraId:10,tocIndex:0},{value:`
    `,paraId:0},{value:"*",paraId:11,tocIndex:0},{value:" - Matches 0 or more times.",paraId:11,tocIndex:0},{value:`
    `,paraId:0},{value:"+",paraId:12,tocIndex:0},{value:" - Match 1 or more times.",paraId:12,tocIndex:0},{value:`
    `,paraId:0},{value:"{n}",paraId:13,tocIndex:0},{value:" - Match n times.",paraId:13,tocIndex:0},{value:`
    `,paraId:0},{value:"n,",paraId:14,tocIndex:0},{value:" - Matches more than n times.",paraId:14,tocIndex:0},{value:`
    `,paraId:0},{value:"{m,n}",paraId:15,tocIndex:0},{value:" - At least m matches and at most n matches.",paraId:15,tocIndex:0},{value:`
    `,paraId:0},{value:"(expr)",paraId:16,tocIndex:0},{value:" - Capture the expr subpattern and use it with \\1.",paraId:16,tocIndex:0},{value:`
    `,paraId:0},{value:"(?:expr)",paraId:17,tocIndex:0},{value:" - The captured subpattern is ignored.",paraId:17,tocIndex:0},{value:`
    `,paraId:0},{value:"(?=expr)",paraId:18,tocIndex:0},{value:" - Forward precheck mode expr.",paraId:18,tocIndex:0},{value:`
    `,paraId:0},{value:"(?!expr)",paraId:19,tocIndex:0},{value:" - Negative pre-check mode expr.",paraId:19,tocIndex:0},{value:`/**
   * Check whether it is license plate number (excluding trailer)
   * Special vehicle calibration is currently not supported
   * @param str
   * @returns
   */
  const isVehicleNumber = (str: string): boolean => {
    // Traditional fuel
    // New energy

    const pattern =
      /^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C]{1}[A-Z]{1}(([A-HJK]{1}[A-HJ-NP-Z0-9]{1}[0-9]{4})|([0-9]{5}[A-HJK]{1})|(?=(.*[A-HJ-NP-Z]){0,2})(?=(.*[0-9]){3,5})[A-HJ-NP-Z0-9]{5})$/;
    return pattern.test(str);
  };
  `,paraId:20,tocIndex:2},{value:`/**
   * Check whether it is a license plate number
   * @param str
   * @returns
   */
  const isTrailerNumber = (str: string): boolean => {
    const pattern =
      /^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886]{1}[A-Z]{1}[A-Z0-9]{4}[\u6302]{1}$/;
    return pattern.test(str);
  };
  `,paraId:21,tocIndex:3},{value:`/**
   *	The mainland mobile phone number has 11 digits. Matching format: the first three digits are fixed + the last eight digits are arbitrary
   *	The first three bytes in this method are:
   * 13+any number
   * 145,147,149
   * 15+Any number divided by 4(Don't write ^4, that way the letter will be considered correct)
   * 166
   * 17+3,5,6,7,8
   * 18+any number
   * 198,199
   */
  const isMobilePhone = (str: string): boolean => {
    const pattern =
      /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
    return pattern.test(str);
  };
  `,paraId:22,tocIndex:4},{value:`/**
   *	Mainland mobile phone number 11 digits
   *  Landline: The area code:3-4 digits Number: 5-8 digits
   */
  const isMobileOrLandline = (str: string): boolean => {
    const pattern = /^((0\\d{2,3}\\d{5,8})|(1[3456789]\\d{9}))$/;
    return pattern.test(str);
  };
  `,paraId:23,tocIndex:5},{value:`/**
   * Verification certificate number
   * @returns
   */
  const isIDNumber = (str: string): boolean => {
    // 15-digit ID regular expression
    const arg1 = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
    // 18-digit ID regular expression
    const arg2 =
      /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[X])$/;

    // The ordinary e-passport is issued to Chinese citizens who go abroad for non-official reasons such as residence, family visit, study, employment, travel and business activities. The passport number format is E+8 digits
    const arg3 = /^E\\d{8}$/;

    // Official passport:SE+7 digital coding
    const arg4 = /^SE\\d{7}$/;

    // Diplomatic passport:DE+7 digital coding
    const arg5 = /^DE\\d{7}$/;

    // Ordinary Service Passport:PE+7 digital coding
    const arg6 = /^PE\\d{7}$/;

    // Passports of the Macao Special Administrative Region shall be issued to Chinese citizens who have permanent identity cards of the Macao Special Administrative Region in the following format:MA+7 serial number
    const arg7 = /^MA[A-Z0-9]{7}$/;

    // Hong Kong Special Administrative Region passports are issued to Chinese citizens who have a Hong Kong permanent identity card and the right of abode in the Hong Kong Special Administrative Region. The passport number format is:K+8 serial number
    const arg8 = /^K[A-Z0-9]{7}$/;

    if (
      arg1.test(str) ||
      arg2.test(str) ||
      arg3.test(str) ||
      arg4.test(str) ||
      arg5.test(str) ||
      arg6.test(str) ||
      arg7.test(str) ||
      arg8.test(str)
    ) {
      return true;
    } else {
      return false;
    }
  };
  `,paraId:24,tocIndex:6},{value:`/**
   * Verify the ID number
   * @returns
   */
  const isIdentityNumber = (str: string): boolean => {
    // 18-digit ID regular expression
    const pattern =
      /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[X])$/;
    return pattern.test(str);
  };
  `,paraId:25,tocIndex:7},{value:`/**
   * Check whether the email box format is correct
   * @param str
   * @returns
   */
  const isEmail = (str: string): boolean => {
    const pattern = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$/;
    return pattern.test(str);
  };
  `,paraId:26,tocIndex:8},{value:`/**
   * Valid account (start with a letter, 5-16 bytes allowed, alphanumeric underscore allowed)
   * @param str
   * @returns
   */
  const isValidAccount = (str: string): boolean => {
    const pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    return pattern.test(str);
  };
  `,paraId:27,tocIndex:9},{value:`/**
   * Checks whether the color is hexadecimal
   * @param str
   * @returns
   */
  const isHexColor = (str: string): boolean => {
    const pattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return pattern.test(str);
  };
  `,paraId:28,tocIndex:10},{value:`/**
   * Check whether the value is an integer
   * @param str
   * @returns
   */
  const isInteger = (str: string): boolean => {
    const pattern = /^-?\\\\d+$/;
    return pattern.test(str);
  };
  `,paraId:29,tocIndex:11},{value:`/**
   * Check whether it is a non-negative integer (positive integer +0)
   * @param str
   * @returns
   */
  const isNonNegativeInteger = (str: string): boolean => {
    const pattern = /^\\d+$/;
    return pattern.test(str);
  };
  `,paraId:30,tocIndex:12},{value:`/**
   * Check whether the value is a positive integer
   * @param str
   * @returns
   */
  const isPositiveInteger = (str: string): boolean => {
    const pattern = /^[0-9]*[1-9][0-9]*$/;
    return pattern.test(str);
  };
  `,paraId:31,tocIndex:13},{value:`/**
   * Checks for positive floating point numbers
   * @param str
   * @returns
   */
  const isFPNumber = (str: string): boolean => {
    const pattern =
      /^(([0-9]+\\\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
    return pattern.test(str);
  };
  `,paraId:32,tocIndex:14},{value:`/**
   * Check for nonnegative floating point numbers (positive floating point numbers +0)
   * @param str
   * @returns
   */
  const isNonNegFloatNumber = (str: string): boolean => {
    const pattern = /^(\\+)?\\d+(\\.\\d+)?$/;
    return pattern.test(str);
  };
  `,paraId:33,tocIndex:15},{value:`/**
   * Postal code
   * @param str string
   * @returns
   */
  const verifyPostalCode = (str: string): boolean => {
    if (!/^[1-9][0-9]{5}$/.test(str)) return false;
    else return true;
  };
  `,paraId:34,tocIndex:16},{value:`/**
   * Cryptographic strength
   * @param str string
   * @description Weak: pure numbers, pure letters, pure special characters
   * @description Medium: Letters + digits, letters + special characters, digits + special characters
   * @description Strong: letters + digits + special characters
   * @returns Returns the processed string: weak, medium, and strong
   */
  const verifyPasswordStrength = (str: string): boolean => {
    let v = '';
    // Weak: pure numbers, pure letters, pure special characters
    if (/^(?:\\d+|[a-zA-Z]+|[!@#$%^&\\.*]+){6,16}$/.test(str)) v = 'Weak';
    // Medium: Letters + digits, letters + special characters, digits + special characters
    if (
      /^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&\\.*]+$)[a-zA-Z\\d!@#$%^&\\.*]{6,16}$/.test(
        str,
      )
    )
      v = 'Medium';
    // Strong: letters + digits + special characters
    if (
      /^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\\d!@#$%^&\\.*]+$)[a-zA-Z\\d!@#$%^&\\.*]{6,16}$/.test(
        str,
      )
    )
      v = 'Strong';
    // result
    return v;
  };
  `,paraId:35,tocIndex:18},{value:`/**
   * Password format (The value must start with a letter and contain only letters, digits, and underscores (_))
   * @param str string
   * @returns
   */
  const verifyPassword = (str: string): boolean => {
    if (!/^[a-zA-Z]\\w{5,15}$/.test(str)) return false;
    else return true;
  };
  `,paraId:36,tocIndex:19},{value:`/**
   * Strong cipher (The value contains 6 to 16 letters, digits, and special characters)
   * @param str string
   * @returns
   */
  const verifyPasswordPowerful = (str: string): boolean => {
    if (
      !/^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\\d!@#$%^&\\.*]+$)[a-zA-Z\\d!@#$%^&\\.*]{6,16}$/.test(
        str,
      )
    )
      return false;
    else return true;
  };
  `,paraId:37,tocIndex:20},{value:`/**
   * Strong password (must contain a combination of uppercase and lowercase letters and numbers, cannot use special characters, and must be 8-16 in length) :
   * @param str
   * @returns
   */
  const isStrongPassword(str: string): boolean => {
    const pattern = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/;
    return pattern.test(str);
  }
  `,paraId:38,tocIndex:21},{value:`/**
   * IP address
   * @param str string
   * @returns
   */
  const verifyIPAddress = (str: string): boolean => {
    if (
      !/^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/.test(
        str,
      )
    )
      return false;
    else return true;
  };
  `,paraId:39,tocIndex:22},{value:`/**
   * The amount is separated by a ', '
   * @param str
   * @returns
   */
  const numberComma = (str: string): string => {
    let v: any = verifyNumberIntegerAndFloat(str);
    v = v.toString().split('.');
    v[0] = v[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
    v = v.join('.');
    return v;
  };
  `,paraId:40,tocIndex:23}],L1={},J1={title:"Tips",toc:"menu",filename:"docs/advance/tips/index.en-US.md",order:3,nav:{title:"Advance",order:2}},D1=[{id:"picture-size-adaptive",depth:2,title:"Picture size adaptive"}],i0=[{value:"html",paraId:0,tocIndex:0},{value:`<template>
    <div>
      <img src="./1.jpg" />
    </div>
  </template>
  `,paraId:1,tocIndex:0},{value:"css",paraId:2,tocIndex:0},{value:`<style>
    div {
      display: flex;
      align-items: center;
    }
    /* vmin\uFF1ATake the smaller values vw and vh */
    /* vmax\uFF1ATake the larger values vw and vh */
    img {
      width: 100vmin;
      height: 100vmin;
    }
  </style>
  `,paraId:3,tocIndex:0}],f0={},h0={title:"React",toc:"menu",filename:"docs/column/react/index.en-US.md",order:4,nav:{title:"Column",order:3}},k1=[],j1=[{value:" There is no English document, please go to the Chinese column.",paraId:0}],$1={},w0={title:"Share",toc:"menu",filename:"docs/column/share/index.en-US.md",order:6,nav:{title:"Column",order:3},description:"JavaScript \u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 JavaScript \u6559\u7A0B"},e0=[{id:"javascript--typescript",depth:2,title:"JavaScript / TypeScript"},{id:"css-style",depth:2,title:"CSS Style"},{id:"algorithmic-data",depth:2,title:"Algorithmic data"},{id:"front-end-interview",depth:2,title:"Front-end interview"},{id:"to-be-continued",depth:2,title:"To be continued..."}],t0=[{value:"JavaScript \u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 JavaScript \u6559\u7A0B",paraId:0,tocIndex:0},{value:"ES6 \u5165\u95E8\u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 ES6 \u5165\u95E8\u6559\u7A0B",paraId:1,tocIndex:0},{value:"JavaScript 30 | \u4F7F\u7528\u539F\u751F JavaScript \u5728 30 \u5929\u5185\u5B8C\u6210 30 \u4E2A\u9879\u76EE",paraId:2,tocIndex:0},{value:"\u73B0\u4EE3 JavaScript \u6559\u7A0B | \u6700\u8FD1\u5F88\u6D41\u884C\u7684 JavaScript \u6559\u7A0B",paraId:3,tocIndex:0},{value:"JS \u4EE3\u7801\u89C4\u8303 | \u4F18\u79C0\u7684 JS \u4EE3\u7801\u89C4\u8303",paraId:4,tocIndex:0},{value:"Favorite JavaScript utilities in single line of code - 1 LOC",paraId:5,tocIndex:0},{value:"JS Bin - Collaborative JavaScript Debugging",paraId:6,tocIndex:0},{value:"jQuery API \u4E2D\u6587\u6587\u6863 | jQuery API \u4E2D\u6587\u5728\u7EBF\u624B\u518C | jquery api \u4E0B\u8F7D | jquery api chm",paraId:7,tocIndex:0},{value:"jQuery API Documentation",paraId:8,tocIndex:0},{value:"JavaScript \u6559\u7A0B | \u83DC\u9E1F\u6559\u7A0B",paraId:9,tocIndex:0},{value:"TypeScript \u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 TypeScript \u6559\u7A0B",paraId:10,tocIndex:0},{value:"TypeScript: JavaScript With Syntax For Types",paraId:11,tocIndex:0},{value:"CSS Tricks \u6548\u679C\u5927\u5168 | CSS \u7684\u5404\u79CD\u6548\u679C\u5B9E\u73B0 \u6709\u5F88\u591A\u52A8\u753B\u6548\u679C",paraId:12,tocIndex:1},{value:"CSS Inspiration | CSS \u7075\u611F\u7684\u8BDE\u751F\u5730 \u6211\u6BCF\u5929\u90FD\u4F1A\u770B\u4E00\u770B\u7684\u7F51\u7AD9",paraId:13,tocIndex:1},{value:"CSS \u5E38\u7528\u6837\u5F0F | \u6709\u5F88\u591A\u5E38\u7528\u7684 CSS \u6837\u5F0F",paraId:14,tocIndex:1},{value:"Animista | CSS \u52A8\u753B\u5E93 \u4E3B\u6253\u6309\u9700\u5B9A\u5236 CSS \u52A8\u753B\u6548\u679C",paraId:15,tocIndex:1},{value:"SpinKit | CSS \u4EE3\u7801\u7247\u6BB5 \u6C47\u96C6\u4E86\u5404\u79CD\u52A0\u8F7D\u6548\u679C\u7684 CSS \u4EE3\u7801\u7247\u6BB5",paraId:16,tocIndex:1},{value:"CSS Minifier | \u5728\u7EBF CSS \u4EE3\u7801\u7B80\u5316/\u538B\u7F29\u5DE5\u5177",paraId:17,tocIndex:1},{value:"Sass: Sass \u6587\u6863 | Sass \u4E2D\u6587\u7F51 \u6210\u719F\u3001\u7A33\u5B9A\u3001\u5F3A\u5927\u7684 CSS \u6269\u5C55\u8BED\u8A00",paraId:18,tocIndex:1},{value:"Less \u5FEB\u901F\u5165\u95E8 | Less.js \u4E2D\u6587\u6587\u6863 \u5C06 CSS \u8D4B\u4E88\u4E86\u52A8\u6001\u8BED\u8A00\u7279\u6027\u7684\u6837\u5F0F\u8BED\u8A00",paraId:19,tocIndex:1},{value:"stylus | CSS \u6269\u5C55 \u5BCC\u6709\u53D8\u73B0\u91CC\u3001\u52A8\u6001\u3001\u5065\u58EE\u7684 CSS",paraId:20,tocIndex:1},{value:"CSS \u5B57\u4F53\u6548\u679C - \u5B64\u72EC\u591C\u83BA - \u535A\u5BA2\u56ED",paraId:21,tocIndex:1},{value:"Smooth Shadow",paraId:22,tocIndex:1},{value:"Clippy \u2014 CSS clip-path maker",paraId:23,tocIndex:1},{value:"Fancy Border Radius Generator",paraId:24,tocIndex:1},{value:"cubic-bezier(.06,.81,.8,.6) \u273F",paraId:25,tocIndex:1},{value:"CSS Gradient \u2014 Generator, Maker, and Background",paraId:26,tocIndex:1},{value:"CSS Grid Generator",paraId:27,tocIndex:1},{value:"Free Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS",paraId:28,tocIndex:1},{value:"Get Waves \u2013 Create SVG waves for your next design",paraId:29,tocIndex:1},{value:"Svg Wave - A free & beautiful gradient SVG wave Generator.",paraId:30,tocIndex:1},{value:"loading.io - Your SVG + GIF + PNG Ajax Loading Icons and Animation Generator",paraId:31,tocIndex:1},{value:"Neumorphism/Soft UI CSS shadow generator",paraId:32,tocIndex:1},{value:"JavaScript \u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784 | \u591A\u79CD\u57FA\u4E8E JavaScript \u7684\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784",paraId:33,tocIndex:2},{value:"leetcode \u89E3\u9898\u4E4B\u8DEF | \u79C1\u85CF LeetCode \u89E3\u9898\u653B\u7565 ",paraId:34,tocIndex:2},{value:"\u4E94\u5206\u949F\u5B66\u7B97\u6CD5 | \u6BCF\u5929\u62FF\u51FA\u4E94\u5206\u949F \u5B66\u5B66\u7B97\u6CD5",paraId:35,tocIndex:2},{value:"\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u9879\u76EE\u63A8\u8350 | Github \u4E0A 170K+Star \u7684\u524D\u7AEF\u5B66\u4E60\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u9898\u76EE",paraId:36,tocIndex:2},{value:"JavaScript \u5341\u5927\u7ECF\u5178\u6392\u5E8F\u7B97\u6CD5 | JavaScript \u6392\u5E8F\u5FC5\u4F1A\u9898\u76EE \u4F5C\u8005\u529F\u529B\u5F88\u6DF1 \u503C\u5F97\u5B66\u4E60",paraId:37,tocIndex:2},{value:"\u7B97\u6CD5\u53EF\u89C6\u5316\u5DE5\u5177 | \u7528\u53EF\u89C6\u5316\u5DE5\u5177\u548C\u4EA4\u4E92\u65B9\u5F0F \u8BA9\u4F60\u4ECE\u4EE3\u7801\u4E2D\u53EF\u89C6\u5316\u7B97\u6CD5",paraId:38,tocIndex:2},{value:"\u7B97\u6CD5\u53EF\u89C6\u5316\u6765\u6E90",paraId:39,tocIndex:2},{value:"\u7B97\u6CD5\u7684\u5DE5\u4F5C\u65B9\u5F0F | \u53D8\u91CF\u548C\u64CD\u4F5C\u7684\u53EF\u89C6\u5316\u8868\u793A \u589E\u5F3A\u4E86\u63A7\u5236\u6D41\u548C\u5B9E\u9645\u6E90\u4EE3\u7801",paraId:40,tocIndex:2},{value:"\u524D\u7AEF\u9762\u8BD5\u5E38\u8003\u95EE\u9898\u6574\u7406 | \u6309\u6A21\u5757\u548C\u77E5\u8BC6\u70B9\u5206\u7C7B ",paraId:41,tocIndex:3},{value:"\u524D\u7AEF\u5F00\u53D1\u9762\u8BD5\u9898",paraId:42,tocIndex:3},{value:"WEB \u524D\u7AEF\u9762\u8BD5\u5B9D\u5178",paraId:43,tocIndex:3},{value:"\u6398\u91D1\u524D\u7AEF\u9762\u8BD5\u9898\u5408\u96C6",paraId:44,tocIndex:3},{value:"\u524D\u7AEF\u9762\u8BD5\u5F00\u6E90\u9879\u76EE\u6C47\u603B | Github \u4E0A 100K+ Star \u7684\u524D\u7AEF\u9762\u8BD5\u5F00\u6E90\u9879\u76EE\u6C47\u603B",paraId:45,tocIndex:3},{value:"\u524D\u7AEF\u9762\u8BD5\u9898 - \u6765\u8BED\u96C0",paraId:46,tocIndex:3},{value:"\u524D\u7AEF\u5E38\u89C1\u9762\u8BD5\u9898\u603B\u7ED3 | \u5927\u5382\u9762\u8BD5\u9898\u6BCF\u65E5\u4E00\u9898",paraId:47,tocIndex:3}],R1={},K1={title:"\u4ECB\u7ECD",toc:"menu",filename:"docs/guide/introduction/index.md",order:0,nav:{title:"\u6307\u5357",order:0},description:"cins: \u4E3A\u4FBF\u6377\u5F00\u53D1\u800C\u751F\uFF0C\u96C6\u6210\u4E86\u5E38\u7528\u7684\u6B63\u5219\u3001\u4E0A\u4F20\u3001\u6570\u7EC4\u7B49\u65B9\u6CD5\uFF0C\u6781\u5927\u7684\u63D0\u5347\u4E86\u5DE5\u4F5C\u5F00\u53D1\u7684\u6548\u7387\uFF01"},_0=[{id:"\u4EC0\u4E48\u662F-cins",depth:2,title:"\u4EC0\u4E48\u662F cins\uFF1F"},{id:"\u7279\u6027",depth:2,title:"\u7279\u6027"}],P0=[{value:"cins: \u4E3A",paraId:0,tocIndex:0},{value:"\u4FBF\u6377\u5F00\u53D1",paraId:0,tocIndex:0},{value:"\u800C\u751F\uFF0C\u96C6\u6210\u4E86\u5E38\u7528\u7684\u6B63\u5219\u3001\u4E0A\u4F20\u3001\u6570\u7EC4\u7B49\u65B9\u6CD5\uFF0C\u6781\u5927\u7684\u63D0\u5347\u4E86\u5DE5\u4F5C\u5F00\u53D1\u7684\u6548\u7387\uFF01",paraId:0,tocIndex:0},{value:"\u5E38\u7528",paraId:1,tocIndex:0},{value:"\u65B9\u6CD5\u65E0\u9700\u5B89\u88C5\u4F9D\u8D56\uFF0CCV \u5373\u7528\u3002",paraId:1,tocIndex:0},{value:"\u8FDB\u9636",paraId:1,tocIndex:0},{value:"\u4E2D\u96C6\u6210\u4E86\u591A\u79CD\u8F83\u4E3A\u590D\u6742\u7684\u65B9\u6CD5\u4EE5\u53CA\u4E00\u4E9B\u7EC4\u4EF6\u7684\u7F16\u5199\u3002",paraId:1,tocIndex:0},{value:"\u4E13\u680F",paraId:1,tocIndex:0},{value:"\u4E2D\u6536\u96C6\u4E86\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\u3001\u4E00\u4E9B\u95EE\u9898\u4EE5\u53CA\u597D\u7528\u7684\u6587\u6863\u94FE\u63A5\u3002",paraId:1,tocIndex:0},{value:"\u{1F4E6} \u5F00\u7BB1\u5373\u7528\uFF0C\u5C06\u6CE8\u610F\u529B\u96C6\u4E2D\u65B9\u6CD5\u4F7F\u7528\u548C\u9879\u76EE\u5F00\u53D1\u4E0A\u3002",paraId:2,tocIndex:1},{value:"\u{1F4CB} \u65E0\u9700\u4F9D\u8D56\uFF0C\u4E0D\u6B62\u4E8E\u65B9\u6CD5\u3002",paraId:2,tocIndex:1},{value:"\u{1F3F7} \u57FA\u4E8E TypeScript \u7C7B\u578B\u5B9A\u4E49\uFF0Cjs \u548C ts \u5747\u53EF\u4F7F\u7528\u3002",paraId:2,tocIndex:1},{value:"\u{1F3A8} \u8F7B\u677E\u4FBF\u6377\u4F7F\u7528\uFF0C\u6839\u636E\u9700\u6C42\u6539\u8FDB\u65B9\u6CD5\u3002",paraId:2,tocIndex:1},{value:"\u{1F4F1} \u8DE8\u5E73\u53F0\u901A\u7528\uFF0C\u591A\u7AEF\u5171\u8FDB\u3002",paraId:2,tocIndex:1},{value:"\u{1F4E1} \u4E00\u952E\u590D\u5236\u5373\u53EF\u4F7F\u7528\uFF0C\u8282\u7EA6\u5F00\u53D1\u6210\u672C\u3002",paraId:2,tocIndex:1}],a5={},m1={title:"File",toc:"menu",filename:"docs/usually/file/index.en-US.md",order:7,nav:{title:"Usually",order:1},description:"window.open"},T1=[{id:"upload",depth:2,title:"Upload"},{id:"filetobase64",depth:2,title:"FileToBase64"},{id:"imgurltobase64",depth:2,title:"imgUrlToBase64"},{id:"download-the-file-using-the-url",depth:2,title:"Download the file using the url"},{id:"combine-pictures-and-text-into-one-image",depth:2,title:"Combine pictures and text into one image"},{id:"slice-upload",depth:2,title:"Slice upload"}],V0=[{value:`/**
    Unified Upload Method
    @param {IUploadParams}  
    @return {Array} FileList
  */
  interface IUploadParams {
    type: string; // Upload File Type
    multiple?: boolean; // Whether multiple files can be uploaded
    size?: number; // Upload file size\uFF08The unit is KB\uFF09
    isDirectory?: boolean; // Whether to upload file directories
  }

  const upload = ({
    type,
    multiple = false,
    size,
    isDirectory = false,
  }: IUploadParams): Promise<FileList> => {
    return new Promise((resolve, reject) => {
      const input: HTMLInputElement = document.createElement('input');
      input.type = 'file';
      input.accept = type;
      input.multiple = multiple;
      input.webkitdirectory = isDirectory; // \u517C\u5BB9\u4E0D\u540C\u6D4F\u89C8\u5668
      input.onchange = ({ target }) => {
        const files = (target as EventTarget & { files: FileList }).files;
        if (size) {
          // \u9650\u5236\u5927\u5C0F
          for (let i = 0; i < files.length; i++) {
            if (files[i].size && files[i].size / 1024 > size) {
              reject('\u4E0A\u4F20\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF01');
              return;
            }
          }
        }
        resolve(files);
      };
      input.click();
    });
  };
  `,paraId:0,tocIndex:0},{value:`/**
   * Base64
   * @param file
   * @returns {Promise<string>}
   */
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
    });
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * @param {string} url
   * @return {Promise<string>}
   */
  const imgUrlToBase64 = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject('Please pass in the url content');
      }

      if (/\\.(png|jpe?g|gif|svg|webp)(\\?.*)?$/.test(url)) {
        // Picture address
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
          const blob = xhr.response;
          const fileReader = new FileReader();
          fileReader.readAsDataURL(blob);
          fileReader.onload = () => {
            const result = fileReader.result as string;
            resolve(result);
          };
          fileReader.onerror = () => {
            reject('File reading failure');
          };
        };
        xhr.onerror = () => {
          reject('Network error');
        };
        xhr.send();
      } else {
        // Non-picture address
        reject('Not(png/jpe?g/gif/svg/webp) address');
      }
    });
  };
  `,paraId:2,tocIndex:2},{value:"window.open",paraId:3,tocIndex:3},{value:`window.open(url, '_blank');
  `,paraId:4,tocIndex:3},{value:"Tag a",paraId:5,tocIndex:3},{value:`const a = document.createElement('a'); // Create a new A tag
  a.href = url; // File link
  a.download = name; // Download name
  a.click();
  a.remove();
  `,paraId:6,tocIndex:3},{value:"blob",paraId:7,tocIndex:3},{value:`// There may be cross-domain issues
  fetch(url).then((res) =>
    res.blob().then((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name; // Download name
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }),
  );
  `,paraId:8,tocIndex:3},{value:"Download dependency",paraId:9,tocIndex:4},{value:`npm install html2canvas --save
  `,paraId:10,tocIndex:4},{value:"Import it what page you need",paraId:11,tocIndex:4},{value:`import html2canvas from 'html2canvas';
  `,paraId:12,tocIndex:4},{value:"Page",paraId:13,tocIndex:4},{value:`<template>
    <div>
      <div class="download_img" ref="canvas">
        <img
          src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"
          alt=""
        />
        <p>testName</p>
      </div>
      <el-button type="primary" @click="handleDownload('test')"
        >Download pictures and text</el-button
      >
    </div>
  </template>
  `,paraId:14,tocIndex:4},{value:"Build download by ",paraId:15,tocIndex:4},{value:"ref",paraId:15,tocIndex:4},{value:`// \u4E0B\u8F7D
  const handleDownload = (name: string) => {
    window.scrollTo(0, 0);
    const node = document.getElementById('canvas') || document.body;
    const width = node.offsetWidth;
    const height = node.offsetHeight;
    const scale = 4;
    html2canvas(node, {
      width,
      height,
      backgroundColor: '#ffffff',
      dpi: window.devicePixelRatio * 2,
      scale,
      x: 0,
      y: 0,
      scrollX: -3,
      scrollY: -10,
      useCORS: true,
      allowTaint: true,
    }).then((canvas: HTMLCanvasElement) => {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = name;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  `,paraId:16,tocIndex:4},{value:"Get ",paraId:17,tocIndex:5},{value:"spark-md5",paraId:17,tocIndex:5},{value:"\u5207\u7247\u4E0A\u4F20",paraId:18,tocIndex:5},{value:`// \u5207\u7247\u4E0A\u4F20
  const sliceUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }
      const chunks = createChunks(file, 10 * 1024 * 1024);
      const result = await hash(chunks);
      console.log(result); // hash\u503C
    };
    input.click();
  };
  `,paraId:19,tocIndex:5},{value:"\u83B7\u53D6 hash \u503C",paraId:20,tocIndex:5},{value:`// \u83B7\u53D6hash\u503C
  const hash = (chunks: Blob[]) => {
    return new Promise<string>((resolve) => {
      // \u6B64\u5904\u9700\u8981\u5F15\u5165md5
      const spark = new SparkMD5.ArrayBuffer();
      function _read(i: number) {
        if (i >= chunks.length) {
          resolve(spark.end());
          return; // \u8BFB\u53D6\u5B8C\u6210
        }
        const blob = chunks[i];
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const bytes = e.target?.result as ArrayBuffer; // \u8BFB\u53D6\u5230\u7684\u5B57\u8282\u6570\u7EC4
          spark.append(bytes);
          _read(i + 1);
        };
        reader.readAsArrayBuffer(blob);
      }
      _read(0);
    });
  };
  `,paraId:21,tocIndex:5},{value:"\u5207\u7247",paraId:22,tocIndex:5},{value:`// \u5207\u7247
  const createChunks = (file: File, chunkSize: number): Blob[] => {
    const result = [];
    for (let i = 0; i < file.size; i += chunkSize) {
      result.push(file.slice(i, i + chunkSize));
    }
    return result;
  };
  `,paraId:23,tocIndex:5}],A0={},R0={title:"Http",toc:"menu",filename:"docs/usually/http/index.en-US.md",order:6,nav:{title:"Usually",order:1}},J0=[{id:"axios-base-package",depth:2,title:"Axios base package"},{id:"requestts-file",depth:3,title:"request.ts File"},{id:"apits-file",depth:3,title:"api.ts File"},{id:"axios-advanced-encapsulation",depth:2,title:"Axios advanced encapsulation"},{id:"requestts-file-1",depth:3,title:"request.ts File"},{id:"apits-use-example",depth:3,title:"api.ts use example"}],L5=[{value:"request.ts",paraId:0},{value:`import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

  const baseURL =
    process.env.NODE_ENV === 'production' ? window.location.origin : '/api';

  const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 20000,
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // Add your custom logic here
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data;
      }
      return Promise.reject(response);
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  export const get = <T>(url: string, params?: any, config = {}): Promise<T> => {
    return instance
      .get(url, { params, ...config })
      .then((response: AxiosResponse<T>) => {
        return response.data;
      });
  };

  export const post = <T>(url: string, data?: any, config = {}): Promise<T> => {
    return instance.post(url, data, config).then((response: AxiosResponse<T>) => {
      return response.data;
    });
  };
  `,paraId:1,tocIndex:1},{value:"api.ts",paraId:0},{value:`import { get, post } from './request';

  /***** The test interface *****/
  export const handleGetTest = (params: any) => post('/api1', params);
  export const handlePostTest = (param: any) => get('/api2', params);
  `,paraId:2,tocIndex:2},{value:"request.ts",paraId:0},{value:`import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource,
  } from 'axios';

  // Defines an interface that defines a request response data structure
  interface ApiResponse<T = any> {
    code: number;
    message: string;
    data: T;
  }

  // Create a custom Axios instance to set the default request configuration
  const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000, // Request timeout, in milliseconds
  });

  // Defines an interceptor that processes a request before it is sent
  apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
    // Before a request is sent, you can set request headers in config.headers, for example, Authorization Token
    config.headers.Authorization =
      'Bearer ' + localStorage.getItem('access_token');
    return config;
  });

  // Defines an interceptor to process the response when it arrives
  apiClient.interceptors.response.use((response: AxiosResponse<ApiResponse>) => {
    // After the response arrives, you can handle the error globally according to the status code, error code, and error message in the response
    if (response.data.code !== 200) {
      // Handling errors, such as an error message or an error page
    }
    return response.data;
  });

  // Encapsulate request methods, using Promises to encapsulate asynchronous operations and support for canceling requests and setting timeouts
  export const apiRequest = <T = any>(
    config: AxiosRequestConfig,
    timeout?: number,
  ): Promise<T> => {
    const source: CancelTokenSource = axios.CancelToken.source(); // Create a token to cancel the request
    return new Promise<T>((resolve, reject) => {
      const timeoutId = timeout
        ? setTimeout(() => {
            source.cancel('Request timeout'); // Cancel request after timeout
          }, timeout)
        : undefined;
      apiClient({
        ...config,
        cancelToken: source.token, // Tokens are added to the request configuration to support cancellation requests
      })
        .then((response) => {
          clearTimeout(timeoutId); // Clear timeout timer
          resolve(response.data);
        })
        .catch((error) => {
          clearTimeout(timeoutId); // Clear timeout timer
          if (axios.isCancel(error)) {
            // The request has been cancelled
          } else {
            reject(error);
          }
        });
    });
  };

  // Encapsulation upload file method, using FormData to encapsulate file data
  export const apiUpload = <T = any>(
    url: string,
    file: File,
    onUploadProgress?: (progressEvent: ProgressEvent) => void,
  ): Promise<T> => {
    const formData = new FormData();
    formData.append('file', file);
    return apiRequest<T>({
      method: 'POST',
      url,
      data: formData,
      onUploadProgress,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  `,paraId:3,tocIndex:4},{value:"api.ts",paraId:0},{value:`import { apiRequest, apiUpload, ApiResponse } from './request';

  // Request data sample
  interface ExampleData {
    id: number;
    name: string;
    age: number;
  }

  // Send request example
  apiRequest<ExampleData>({
    url: '/example',
    method: 'get',
    params: { id: 1 },
  })
    .then((data) => {
      console.log(data); // Processing response data
    })
    .catch((error) => {
      console.log(error); // Processing request error
    });

  // Example cancel request
  const cancelTokenSource = axios.CancelToken.source();
  apiRequest<ExampleData>({
    url: '/example',
    method: 'get',
    params: { id: 1 },
    cancelToken: cancelTokenSource.token, // Add a token to cancel the request
  })
    .then((data) => {
      console.log(data); // Processing response data
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log('Request cancelled'); // Processing request cancelled
      } else {
        console.log(error); // Processing request error
      }
    });
  // Cancel request
  cancelTokenSource.cancel('Reason for request cancellation');

  // Example for setting the timeout period
  apiRequest<ExampleData>(
    {
      url: '/example',
      method: 'get',
      params: { id: 1 },
    },
    5000,
  ) // Example Set the timeout period to 5000 milliseconds
    .then((data) => {
      console.log(data); // Processing response data
    })
    .catch((error) => {
      console.log(error); // Processing response error
    });

  // Example of uploading Files
  const uploadFile = async () => {
    try {
      // Call the apiUpload method to upload a file, and pass in parameters such as the file, upload progress callback function, and request address
      const result = await apiUpload('/upload', file, (progressEvent) => {
        // During the upload process, you can obtain the upload progress and achieve effects such as a file upload progress bar
        console.log(
          'Uploading progress:' +
            (progressEvent.loaded / progressEvent.total) * 100 +
            '%',
        );
      });
      console.log('Upload successfully:', result);
    } catch (error) {
      console.log('Upload failure:', error);
    }
  };
  `,paraId:4,tocIndex:5}],w5,k5={"docs-advance-component-demo-0":{component:function(){w5={value:!0};var ht=H5(a(93236)),d0=a(3966);a(18983),a(62138);function B0(h5){if(typeof WeakMap!="function")return null;var ot=new WeakMap,T5=new WeakMap;return(B0=function(gt){return gt?T5:ot})(h5)}function H5(h5,ot){if(!ot&&h5&&h5.__esModule)return h5;if(h5===null||j()(h5)!=="object"&&typeof h5!="function")return{default:h5};var T5=B0(ot);if(T5&&T5.has(h5))return T5.get(h5);var it={},gt=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N5 in h5)if(N5!=="default"&&Object.prototype.hasOwnProperty.call(h5,N5)){var n2=gt?Object.getOwnPropertyDescriptor(h5,N5):null;n2&&(n2.get||n2.set)?Object.defineProperty(it,N5,n2):it[N5]=h5[N5]}return it.default=h5,T5&&T5.set(h5,it),it}return function(){var h5=(0,ht.useState)([]),ot=l()(h5,2),T5=ot[0],it=ot[1],gt=function(){var Ct=S()(b()().mark(function Bt(kt){var Xt;return b()().wrap(function(M2){for(;;)switch(M2.prev=M2.next){case 0:return M2.next=2,(0,d0.dropHandler)(kt,[".jpg",".jpeg",".bmp",".webp",".gif",".png"],1048576);case 2:Xt=M2.sent,it([].concat(L()(T5),L()(Xt)));case 4:case"end":return M2.stop()}},Bt)}));return function(kt){return Ct.apply(this,arguments)}}(),N5=function(Bt){if(Bt==="clear"){it([]);return}var kt=document.createElement("input");kt.type="file",Bt==="file"?kt.multiple=!0:Bt==="directory"&&(kt.webkitdirectory=!0),kt.onchange=function(){var Xt=S()(b()().mark(function i2(M2){var Aa,p2,va;return b()().wrap(function(ra){for(;;)switch(ra.prev=ra.next){case 0:Aa=M2.target,p2=Aa.files,va=(0,d0.addFiles)(p2,[".jpg",".jpeg",".bmp",".webp",".gif",".png"],1048576),it([].concat(L()(T5),L()(va)));case 4:case"end":return ra.stop()}},i2)}));return function(i2){return Xt.apply(this,arguments)}}(),kt.click()},n2=function(){console.log("\u4E0A\u4F20\u6587\u4EF6\u5217\u8868=>>>",T5)};return o.createElement("div",{className:"upload"},o.createElement("div",{className:"upload-drag",onDragEnter:d0.dragInHandler,onDragOver:d0.dragInHandler,onDrop:gt},o.createElement("div",null,o.createElement("p",{className:"tips"},"\u5C06\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u62D6\u52A8\u5230\u6B64\u5904\u8FDB\u884C\u4E0A\u4F20"),o.createElement("p",{className:"tips-info"},"\uFF08\u9650\u5236\u4E0A\u4F20\u5927\u5C0F1M\uFF0C\u4EC5\u652F\u6301\u56FE\u7247\u683C\u5F0F\u7684\u6587\u4EF6\uFF09"))),o.createElement("button",{className:"cins-button",onClick:function(){return N5("file")}},"\u9009\u62E9\u6587\u4EF6"),o.createElement("button",{className:"cins-button",onClick:function(){return N5("directory")}},"\u9009\u62E9\u6587\u4EF6\u5939"),o.createElement("button",{className:"cins-button",onClick:function(){return N5("clear")}},"\u6E05\u7A7A"),o.createElement("button",{className:"cins-button",onClick:n2},"\u4E0A\u4F20"),o.createElement("span",{className:"upload-desc"},"\uFF08\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4E0A\u4F20\u5217\u8868\uFF09"),o.createElement("div",{className:"upload-files"},o.createElement("p",{className:"files-row title"},o.createElement("span",null,"\u5E8F\u53F7"),o.createElement("span",null,"\u6587\u4EF6\u540D\u79F0"),o.createElement("span",null,"\u4E0A\u4F20\u72B6\u6001"),o.createElement("span",null,"\u4E0A\u4F20\u8FDB\u5EA6")),T5.map(function(Ct,Bt){return o.createElement("p",{className:"files-row",key:Bt},o.createElement("span",null,Bt+1),o.createElement("span",null,Ct.file.name),o.createElement("span",null,Ct.status),o.createElement("span",null,Ct.progress))})))}}(),asset:{type:"BLOCK",id:"docs-advance-component-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
  import { dragInHandler, dropHandler, addFiles } from './_utils/upload';
  import './_styles/index.less';
  import './_styles/upload.css';
  export default () => {
    const [filesList, setFilesList] = useState<Array<any>>([]);
    const handleDrop = async (e: any) => {
      let resultList = await dropHandler(
        e,
        ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
        1024 * 1024,
      );
      // console.log(resultList);
      setFilesList([...filesList, ...resultList]);
    };

    // \u9009\u62E9
    const handleSelect = (type: string) => {
      if (type === 'clear') {
        setFilesList([]);
        return;
      }
      const input: HTMLInputElement = document.createElement('input');
      input.type = 'file';
      if (type === 'file') {
        // \u6587\u4EF6
        input.multiple = true;
      } else if (type === 'directory') {
        // \u6587\u4EF6\u5939
        input.webkitdirectory = true;
      }

      input.onchange = async ({ target }) => {
        const files = (target as EventTarget & { files: FileList }).files;
        const resultList = addFiles(
          files,
          ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
          1024 * 1024,
        );
        setFilesList([...filesList, ...resultList]);
        // console.log(resultList);
      };
      input.click();
    };

    // \u4E0A\u4F20
    const handleUpload = () => {
      console.log('\u4E0A\u4F20\u6587\u4EF6\u5217\u8868=>>>', filesList);
    };
    return (
      <div className="upload">
        <div
          className="upload-drag"
          onDragEnter={dragInHandler}
          onDragOver={dragInHandler}
          onDrop={handleDrop}
        >
          <div>
            <p className="tips">\u5C06\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u62D6\u52A8\u5230\u6B64\u5904\u8FDB\u884C\u4E0A\u4F20</p>
            <p className="tips-info">\uFF08\u9650\u5236\u4E0A\u4F20\u5927\u5C0F1M\uFF0C\u4EC5\u652F\u6301\u56FE\u7247\u683C\u5F0F\u7684\u6587\u4EF6\uFF09</p>
          </div>
        </div>
        <button className="cins-button" onClick={() => handleSelect('file')}>
          \u9009\u62E9\u6587\u4EF6
        </button>
        <button className="cins-button" onClick={() => handleSelect('directory')}>
          \u9009\u62E9\u6587\u4EF6\u5939
        </button>
        <button className="cins-button" onClick={() => handleSelect('clear')}>
          \u6E05\u7A7A
        </button>
        <button className="cins-button" onClick={handleUpload}>
          \u4E0A\u4F20
        </button>
        <span className="upload-desc">\uFF08\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4E0A\u4F20\u5217\u8868\uFF09</span>
        <div className="upload-files">
          <p className="files-row title">
            <span>\u5E8F\u53F7</span>
            <span>\u6587\u4EF6\u540D\u79F0</span>
            <span>\u4E0A\u4F20\u72B6\u6001</span>
            <span>\u4E0A\u4F20\u8FDB\u5EA6</span>
          </p>
          {filesList.map((item, index) => (
            <p className="files-row" key={index}>
              <span>{index + 1}</span>
              <span>{item.file.name}</span>
              <span>{item.status}</span>
              <span>{item.progress}</span>
            </p>
          ))}
        </div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/upload.css":{type:"FILE",value:a(47484).Z},"_utils/upload.ts":{type:"FILE",value:a(7311).Z},"_styles/index.less":{type:"FILE",value:a(30213).Z}}}}},j5={title:"\u7EC4\u4EF6",toc:"menu",filename:"docs/advance/component/index.md",order:2,nav:{title:"\u8FDB\u9636",order:2}},U5=[{id:"\u4E0A\u4F20\u7EC4\u4EF6",depth:2,title:"\u4E0A\u4F20\u7EC4\u4EF6"},{id:"\u79FB\u52A8\u7AEF\u63D0\u793A\u7EC4\u4EF6",depth:2,title:"\u79FB\u52A8\u7AEF\u63D0\u793A\u7EC4\u4EF6"},{id:"\u5F15\u5165",depth:4,title:"\u5F15\u5165"},{id:"\u6210\u529F\u63D0\u793A",depth:4,title:"\u6210\u529F\u63D0\u793A"},{id:"\u5931\u8D25\u63D0\u793A",depth:4,title:"\u5931\u8D25\u63D0\u793A"}],q5=[{value:"\u7EC4\u4EF6\u6837\u5F0F\u53C2\u8003 vant \u7684",paraId:0,tocIndex:1},{value:"Toast.success('\u63D0\u793A')",paraId:0,tocIndex:1},{value:"\u7EC4\u4EF6 ",paraId:0,tocIndex:1},{value:"js \u83B7\u53D6",paraId:0,tocIndex:1},{value:"\u4E2D\u7684 ",paraId:0,tocIndex:1},{value:"prompt.js",paraId:0,tocIndex:1},{value:`import { Prompt } from '@/utils/prompt.js';
  `,paraId:1,tocIndex:2},{value:`Prompt({
    type: 'success',
    message: '\u64CD\u4F5C\u6210\u529F',
  });
  `,paraId:2,tocIndex:3},{value:`Prompt({
    type: 'error',
    message: '\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u70B9\u51FB<a>\u6B64\u5904\u67E5\u770B\u8BE6\u60C5</a>',
    callback: () => {
      // \u70B9\u51FBa\u6807\u7B7E\u540E\u7684\u56DE\u8C03\u51FD\u6570
    },
  });
  `,paraId:3,tocIndex:4}],$5,At={"docs-advance-css-demo-0":{component:function(){$5={value:!0};var ht=B0(a(93236));a(36035),a(21233);function d0(H5){if(typeof WeakMap!="function")return null;var h5=new WeakMap,ot=new WeakMap;return(d0=function(it){return it?ot:h5})(H5)}function B0(H5,h5){if(!h5&&H5&&H5.__esModule)return H5;if(H5===null||j()(H5)!=="object"&&typeof H5!="function")return{default:H5};var ot=d0(h5);if(ot&&ot.has(H5))return ot.get(H5);var T5={},it=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var gt in H5)if(gt!=="default"&&Object.prototype.hasOwnProperty.call(H5,gt)){var N5=it?Object.getOwnPropertyDescriptor(H5,gt):null;N5&&(N5.get||N5.set)?Object.defineProperty(T5,gt,N5):T5[gt]=H5[gt]}return T5.default=H5,ot&&ot.set(H5,T5),T5}return function(){var H5=(0,ht.useState)(!1),h5=l()(H5,2),ot=h5[0],T5=h5[1],it=(0,ht.useState)(""),gt=l()(it,2),N5=gt[0],n2=gt[1],Ct=function(Xt){var i2=/^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;return i2.test(Xt)},Bt=function(){Ct(N5)?console.log("The format of mobile phone number is correct!"):(T5(!0),setTimeout(function(){T5(!1)},820))};return o.createElement("div",{className:"apply-shake-input"},o.createElement("input",{className:ot?"apply-shake cins-input":"cins-input",status:Ct(N5)||!N5?"":"error",placeholder:"Please enter your mobile number",value:N5,onChange:function(Xt){return n2(Xt.target.value)}}),o.createElement("button",{className:"cins-button",onClick:Bt},"Verify"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
  import './_styles/index.less';
  import './_styles/shake.css';

  export default () => {
    const [shake, setShake] = useState(false);
    const [value, setValue] = useState('');
    // Verify mobile phone number
    const isMobilePhone = (str: string): boolean => {
      const pattern =
        /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
      return pattern.test(str);
    };
    const trigger = () => {
      if (isMobilePhone(value)) {
        console.log('The format of mobile phone number is correct!');
      } else {
        setShake(true);
        setTimeout(() => {
          setShake(false);
        }, 820);
      }
    };
    return (
      <div className="apply-shake-input">
        <input
          className={shake ? 'apply-shake cins-input' : 'cins-input'}
          status={isMobilePhone(value) || !value ? '' : 'error'}
          placeholder="Please enter your mobile number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="cins-button" onClick={trigger}>
          Verify
        </button>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/shake.css":{type:"FILE",value:a(57281).Z},"_styles/index.less":{type:"FILE",value:a(89994).Z}}}},"docs-advance-css-demo-1":{component:function(){$5={value:!0};var ht=d0(a(93236));a(86527);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"stroke-text"},"Hello,here is CINS\uFF01")}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/stroke.css';
  export default () => {
    return <div className="stroke-text">Hello,here is CINS\uFF01</div>;
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/stroke.css":{type:"FILE",value:a(45168).Z}}}},"docs-advance-css-demo-2":{component:function(){$5={value:!0};var ht=d0(a(93236));a(63311);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"content"},o.createElement("div",{className:"gray-text"},"Default state, colorful!"),o.createElement("div",{className:"gray-text silence"},"Default state, colorful!"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/gray.css';
  export default () => {
    return (
      <div className="content">
        <div className="gray-text">Default state, colorful!</div>
        <div className="gray-text silence">Default state, colorful!</div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/gray.css":{type:"FILE",value:a(7084).Z}}}},"docs-advance-css-demo-3":{component:function(){$5={value:!0};var ht=d0(a(93236));a(72481);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"pseudo-text"},"It's a reminder with an icon on it!")}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/pseudo.css';
  export default () => {
    return <div className="pseudo-text">It's a reminder with an icon on it!</div>;
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/pseudo.css":{type:"FILE",value:a(19581).Z}}}},"docs-advance-css-demo-4":{component:function(){$5={value:!0};var ht=d0(a(93236));a(36035),a(45153);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){var B0=function(){alert("The button has been clicked\uFF01")};return o.createElement("div",{className:"throttle-button"},o.createElement("div",{className:"button-wrap"},o.createElement("button",{className:"cins-button",onClick:B0},"No throttling"),o.createElement("span",null,"\uFF08No break trigger\uFF09")),o.createElement("div",{className:"button-wrap"},o.createElement("button",{onClick:B0,className:"cins-button ant-throttle"},"Throttle"),o.createElement("span",null,"\uFF082s trigger once\uFF09")))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/index.less';
  import './_styles/throttle.css';
  export default () => {
    const throttleTips = () => {
      alert('The button has been clicked\uFF01');
    };
    return (
      <div className="throttle-button">
        <div className="button-wrap">
          <button className="cins-button" onClick={throttleTips}>
            No throttling
          </button>
          <span>\uFF08No break trigger\uFF09</span>
        </div>
        <div className="button-wrap">
          <button onClick={throttleTips} className="cins-button ant-throttle">
            Throttle
          </button>
          <span>\uFF082s trigger once\uFF09</span>
        </div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/throttle.css":{type:"FILE",value:a(83330).Z},"_styles/index.less":{type:"FILE",value:a(89994).Z}}}},"docs-advance-css-demo-5":{component:function(){$5={value:!0};var ht=d0(a(93236));a(87091);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"throttle-wrap"},o.createElement("div",{className:"ellipsis-overflow"},"Test the ability to use ellipses beyond a line of text."),o.createElement("div",{className:"ellipsis-double ellipsis"},"Test the ellipsis function for more than two lines of text. Test the ellipsis function for more than two lines of text."),o.createElement("div",{className:"ellipsis-triple ellipsis"},"Test the ability to use ellipses beyond multiple lines, test the ability to use ellipses beyond multiple lines, test the ability to use ellipses beyond multiple lines."))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/ellipsis.css';
  export default () => {
    return (
      <div className="throttle-wrap">
        <div className="ellipsis-overflow">
          Test the ability to use ellipses beyond a line of text.
        </div>
        <div className="ellipsis-double ellipsis">
          Test the ellipsis function for more than two lines of text. Test the
          ellipsis function for more than two lines of text.
        </div>
        <div className="ellipsis-triple ellipsis">
          Test the ability to use ellipses beyond multiple lines, test the ability
          to use ellipses beyond multiple lines, test the ability to use ellipses
          beyond multiple lines.
        </div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/ellipsis.css":{type:"FILE",value:a(49181).Z}}}},"docs-advance-css-demo-6":{component:function(){$5={value:!0};var ht=d0(a(93236));a(8787);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"symbol-legend"},o.createElement("span",null,"unloaded"),o.createElement("span",{className:"loading"},"loading"),o.createElement("span",{className:"complete"},"complete"),o.createElement("span",{className:"leave"},"leave"),o.createElement("span",{className:"timeout"},"timeout"),o.createElement("span",{className:"late"},"late"),o.createElement("span",{className:"selected"},"selected"),o.createElement("span",{className:"recommend"},"recommend"),o.createElement("span",{className:"other"},"other"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/symbol.css';
  export default () => {
    return (
      <div className="symbol-legend">
        <span>unloaded</span>
        <span className="loading">loading</span>
        <span className="complete">complete</span>
        <span className="leave">leave</span>
        <span className="timeout">timeout</span>
        <span className="late">late</span>
        <span className="selected">selected</span>
        <span className="recommend">recommend</span>
        <span className="other">other</span>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/symbol.css":{type:"FILE",value:a(77178).Z}}}},"docs-advance-css-demo-7":{component:function(){$5={value:!0};var ht=d0(a(93236));a(6233);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"mix-adaptive"},o.createElement("span",null,"The css implements intelligent text adaptation"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/adaptive.css';
  export default () => {
    return (
      <div className="mix-adaptive">
        <span>The css implements intelligent text adaptation</span>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/adaptive.css":{type:"FILE",value:a(28874).Z}}}},"docs-advance-css-demo-8":{component:function(){$5={value:!0};var ht=d0(a(93236));a(36035);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"ft-max ft-bold align-center"},o.createElement("ruby",null,"\u62FC",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"p\u012Bn"),o.createElement("rp",null,"\uFF09")),o.createElement("ruby",null,"\u97F3",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"y\u012Bn"),o.createElement("rp",null,"\uFF09")),o.createElement("ruby",null,"\u6807",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"bi\u0101o"),o.createElement("rp",null,"\uFF09")),o.createElement("ruby",null,"\u6CE8",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"zh\xF9"),o.createElement("rp",null,"\uFF09")))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/index.less';
  export default () => {
    return (
      <div className="ft-max ft-bold align-center">
        <ruby>
          \u62FC<rp>\uFF08</rp>
          <rt>p\u012Bn</rt>
          <rp>\uFF09</rp>
        </ruby>
        <ruby>
          \u97F3<rp>\uFF08</rp>
          <rt>y\u012Bn</rt>
          <rp>\uFF09</rp>
        </ruby>
        <ruby>
          \u6807<rp>\uFF08</rp>
          <rt>bi\u0101o</rt>
          <rp>\uFF09</rp>
        </ruby>
        <ruby>
          \u6CE8<rp>\uFF08</rp>
          <rt>zh\xF9</rt>
          <rp>\uFF09</rp>
        </ruby>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/index.less":{type:"FILE",value:a(89994).Z}}}},"docs-advance-css-demo-9":{component:function(){$5={value:!0};var ht=d0(a(93236));a(46172);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"underline"},o.createElement("span",null,"Mouse hover text appears underline dynamic effect"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/underline.css';
  export default () => {
    return (
      <div className="underline">
        <span>Mouse hover text appears underline dynamic effect</span>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/underline.css":{type:"FILE",value:a(29286).Z}}}}},ft={title:"CSS",toc:"menu",filename:"docs/advance/css/index.en-US.md",order:0,nav:{title:"Advance",order:2}},tt=[{id:"input-box-jitter",depth:2,title:"Input box jitter"},{id:"stroke-of-text",depth:2,title:"Stroke of text"},{id:"the-site-turns-gray",depth:2,title:"The site turns gray"},{id:"pseudo-class-to-achieve-the-prompt-icon-effect",depth:2,title:"Pseudo class to achieve the prompt icon effect"},{id:"css-throttle",depth:2,title:"CSS Throttle"},{id:"beyond-multiline-omission",depth:2,title:"Beyond multiline omission"},{id:"implement-different-backgrounds-for-buttons",depth:2,title:"Implement different backgrounds for buttons"},{id:"the-css-implements-intelligent-text-adaptation",depth:2,title:"The css implements intelligent text adaptation"},{id:"pinyin-labeling",depth:2,title:"Pinyin labeling"},{id:"underline-dynamic-effect",depth:2,title:"Underline dynamic effect"}],pt=[],m5={},V5={title:"\u9762\u8BD5\u76F8\u5173",toc:"menu",filename:"docs/column/interview/index.md",order:3,nav:{title:"\u4E13\u680F",order:3},description:"axios \u662F\u4E00\u4E2A\u57FA\u4E8E Promise \u7528\u4E8E\u6D4F\u89C8\u5668\u548C nodejs \u7684 HTTP \u5BA2\u6237\u7AEF\uFF0C\u662F Promise \u7684\u5B9E\u73B0\u7248\u672C\uFF0C\u652F\u6301 Promise API"},yt=[{id:"eval",depth:2,title:"eval"},{id:"promise",depth:2,title:"Promise"},{id:"\u6027\u80FD\u4F18\u5316",depth:2,title:"\u6027\u80FD\u4F18\u5316"},{id:"\u4EC0\u4E48\u662F\u8DE8\u57DF\u57DF\u540D\u534F\u8BAE\u7AEF\u53E3\u53F7",depth:2,title:"\u4EC0\u4E48\u662F\u8DE8\u57DF\uFF08\u57DF\u540D\u3001\u534F\u8BAE\u3001\u7AEF\u53E3\u53F7\uFF09"},{id:"js-\u6570\u636E\u7C7B\u578B\u57FA\u7840\u5F15\u7528",depth:2,title:"js \u6570\u636E\u7C7B\u578B\uFF08\u57FA\u7840/\u5F15\u7528\uFF09"},{id:"\u517C\u5BB9\u95EE\u9898",depth:2,title:"\u517C\u5BB9\u95EE\u9898"},{id:"bfcblock-formatting-contexts\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587",depth:2,title:"BFC\uFF08Block Formatting Contexts\uFF09\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587"},{id:"\u76D2\u6A21\u578B\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D",depth:2,title:"\u76D2\u6A21\u578B\uFF0C\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D"},{id:"link-\u4E0Eimport-\u7684\u533A\u522B",depth:2,title:"link \u4E0E@import \u7684\u533A\u522B"},{id:"\u8DE8\u57DF\u539F\u56E0\u548C\u89E3\u51B3\u65B9\u6848",depth:2,title:"\u8DE8\u57DF\u539F\u56E0\u548C\u89E3\u51B3\u65B9\u6848"},{id:"\u539F\u578B\u539F\u578B\u94FE\u548C\u95ED\u5305",depth:2,title:"\u539F\u578B\u3001\u539F\u578B\u94FE\u548C\u95ED\u5305"},{id:"es6-\u65B0\u589Eletconst-\u548C-var-\u7684\u533A\u522B\u7BAD\u5934\u51FD\u6570\u62D3\u5C55\u8FD0\u7B97\u7B26\u89E3\u6784\u8D4B\u503Casync-awaitpromise",depth:2,title:"es6 \u65B0\u589E\uFF08let\u3001const \u548C var \u7684\u533A\u522B\uFF09\u7BAD\u5934\u51FD\u6570\u3001\u62D3\u5C55\u8FD0\u7B97\u7B26\u3001\u89E3\u6784\u8D4B\u503C\u3001async await\u3001Promise"},{id:"cookie-\u548C-localstoragesessionstorage-\u7684\u533A\u522B",depth:2,title:"cookie \u548C localStorage\u3001sessionStorage \u7684\u533A\u522B"},{id:"this-\u6307\u5411callapply-\u548C-bind",depth:2,title:"this \u6307\u5411\uFF08call\u3001apply \u548C bind\uFF09"},{id:"undefined-\u548C-null-\u7684\u533A\u522B",depth:2,title:"undefined \u548C null \u7684\u533A\u522B"},{id:"\u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B",depth:2,title:"\u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B"},{id:"\u9632\u6296\u4E0E\u8282\u6D41",depth:2,title:"\u9632\u6296\u4E0E\u8282\u6D41"},{id:"http-\u72B6\u6001\u7801",depth:2,title:"http \u72B6\u6001\u7801"},{id:"vue-\u7684\u751F\u547D\u5468\u671F",depth:2,title:"vue \u7684\u751F\u547D\u5468\u671F"},{id:"\u8DEF\u7531\u6709\u54EA\u51E0\u79CD\u5BFC\u822A\u94A9\u5B50",depth:2,title:"\u8DEF\u7531\u6709\u54EA\u51E0\u79CD\u5BFC\u822A\u94A9\u5B50"},{id:"vue-\u53CC\u5411\u7ED1\u5B9A\u7684\u539F\u7406",depth:2,title:"vue \u53CC\u5411\u7ED1\u5B9A\u7684\u539F\u7406"},{id:"\u72B6\u6001\u7BA1\u7406\u7684\u4F7F\u7528vuex-\u7684\u4F7F\u7528\u4E0E\u539F\u7406",depth:2,title:"\u72B6\u6001\u7BA1\u7406\u7684\u4F7F\u7528\u3001vuex \u7684\u4F7F\u7528\u4E0E\u539F\u7406"},{id:"computed-\u4E0E-watch-\u7684\u533A\u522B",depth:2,title:"computed \u4E0E watch \u7684\u533A\u522B"},{id:"1computed",depth:3,title:"1.computed"},{id:"2watch",depth:3,title:"2.watch"},{id:"vue-\u7EC4\u4EF6\u5C01\u88C5\u7684\u8FC7\u7A0B",depth:2,title:"vue \u7EC4\u4EF6\u5C01\u88C5\u7684\u8FC7\u7A0B"},{id:"\u5C5E\u6027\u6539\u53D8\u4F46\u6CA1\u6709\u6E32\u67D3\u7684\u89E3\u51B3\u65B9\u6848",depth:2,title:"\u5C5E\u6027\u6539\u53D8\u4F46\u6CA1\u6709\u6E32\u67D3\u7684\u89E3\u51B3\u65B9\u6848"},{id:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u7684\u65B9\u6848-cdn-\u52A0\u901F",depth:2,title:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u7684\u65B9\u6848 cdn \u52A0\u901F"},{id:"1\u9875\u9762\u7EA7\u522B\u7684\u4F18\u5316",depth:3,title:"1.\u9875\u9762\u7EA7\u522B\u7684\u4F18\u5316"},{id:"2\u4EE3\u7801\u7EA7\u522B\u7684\u4F18\u5316",depth:3,title:"2.\u4EE3\u7801\u7EA7\u522B\u7684\u4F18\u5316"},{id:"\u4F18\u96C5\u964D\u7EA7\u548C\u6E10\u8FDB\u589E\u5F3A\u662F\u4EC0\u4E48\u610F\u601D",depth:2,title:"\u4F18\u96C5\u964D\u7EA7\u548C\u6E10\u8FDB\u589E\u5F3A\u662F\u4EC0\u4E48\u610F\u601D"},{id:"pxemrem-\u7684\u533A\u522B",depth:2,title:"px\u3001em\u3001rem \u7684\u533A\u522B"},{id:"webpackgulp-\u548C-grunt-\u7684\u533A\u522B",depth:2,title:"webpack\u3001gulp \u548C grunt \u7684\u533A\u522B"},{id:"loader-\u548C-plugin-\u7684\u533A\u522B",depth:2,title:"loader \u548C plugin \u7684\u533A\u522B"},{id:"router\u548Croute-\u7684\u533A\u522B",depth:2,title:"$router\u548C$route \u7684\u533A\u522B"},{id:"\u5C0F\u7A0B\u5E8F\u91CC\u5F00\u9875\u9762\u6700\u591A\u5F00\u591A\u5C11",depth:2,title:"\u5C0F\u7A0B\u5E8F\u91CC\u5F00\u9875\u9762\u6700\u591A\u5F00\u591A\u5C11"},{id:"udp-\u548C-tcp-\u7684\u533A\u522B",depth:2,title:"UDP \u548C TCP \u7684\u533A\u522B"},{id:"nodejs-\u4E2D\u7684-stream\u6D41",depth:2,title:"nodeJS \u4E2D\u7684 stream\uFF08\u6D41\uFF09"},{id:"vue-\u6E32\u67D3\u65B9\u5F0Frender-\u548C-template-\u7684\u533A\u522B",depth:2,title:"vue \u6E32\u67D3\u65B9\u5F0F\uFF1Arender \u548C template \u7684\u533A\u522B"},{id:"xss-\u548C-csrf",depth:2,title:"XSS \u548C CSRF"},{id:"\u524D\u7AEF\u9875\u9762\u52A0\u8F7D\u6D41\u7A0B\u4ECE-tcp-\u8BF7\u6C42\u5230\u9875\u9762\u4EA4\u4E92",depth:2,title:"\u524D\u7AEF\u9875\u9762\u52A0\u8F7D\u6D41\u7A0B\uFF0C\u4ECE tcp \u8BF7\u6C42\u5230\u9875\u9762\u4EA4\u4E92"},{id:"\u4EFB\u52A1\u961F\u5217",depth:2,title:"\u4EFB\u52A1\u961F\u5217"},{id:"vue-\u4E2D\u7684-nexttick",depth:2,title:"Vue \u4E2D\u7684 nextTick"},{id:"vue-\u5185\u90E8\u9875\u9762\u7684\u6267\u884C\u987A\u5E8F",depth:2,title:"Vue \u5185\u90E8\u9875\u9762\u7684\u6267\u884C\u987A\u5E8F"},{id:"\u6267\u884C\u6808",depth:2,title:"\u6267\u884C\u6808"},{id:"\u6D4F\u89C8\u5668\u4E2D\u7684-event-loop",depth:2,title:"\u6D4F\u89C8\u5668\u4E2D\u7684 Event Loop"},{id:"\u5783\u573E\u56DE\u6536\u673A\u5236",depth:2,title:"\u5783\u573E\u56DE\u6536\u673A\u5236"},{id:"\u8BBE\u8BA1\u6A21\u5F0F",depth:2,title:"\u8BBE\u8BA1\u6A21\u5F0F"},{id:"\u8BED\u6CD5\u7CD6",depth:2,title:"\u8BED\u6CD5\u7CD6"},{id:"css-\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7",depth:2,title:"css \u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7\uFF1F"},{id:"\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u88AB\u7EE7\u627F",depth:2,title:"\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u88AB\u7EE7\u627F\uFF1F"},{id:"type-of-arraynull-\u8FD4\u56DE\u4EC0\u4E48null-\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u5BF9\u8C61type-of-function-\u8FD4\u56DE\u7684\u662F\u4EC0\u4E48",depth:2,title:"type of array\u3001null \u8FD4\u56DE\u4EC0\u4E48\uFF1Fnull \u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u5BF9\u8C61\uFF1Ftype of function \u8FD4\u56DE\u7684\u662F\u4EC0\u4E48\uFF1F"},{id:"this-\u6307\u5411\u95EE\u9898vue-\u4E2D-this-\u6307\u5411\u54EA\u91CC-\u5F53\u524D\u7684\u5B9E\u4F8B\u5BF9\u8C61\u6C38\u8FDC\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\u5417",depth:2,title:"this \u6307\u5411\u95EE\u9898\uFF1Fvue \u4E2D this \u6307\u5411\u54EA\u91CC\uFF1F-\u5F53\u524D\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u6C38\u8FDC\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\u5417\uFF1F"}],Tt=[{value:`// eval() \u51FD\u6570\u53EF\u8BA1\u7B97\u67D0\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5E76\u6267\u884C\u5176\u4E2D\u7684\u7684 JavaScript \u4EE3\u7801\u3002
  var x = 10;
  console.log(eval(x + 17));
  // \u8F93\u51FA\u7ED3\u679C\uFF1A27
  `,paraId:0,tocIndex:0},{value:"axios \u662F\u4E00\u4E2A\u57FA\u4E8E Promise \u7528\u4E8E\u6D4F\u89C8\u5668\u548C nodejs \u7684 HTTP \u5BA2\u6237\u7AEF\uFF0C\u662F Promise \u7684\u5B9E\u73B0\u7248\u672C\uFF0C\u652F\u6301 Promise API",paraId:1,tocIndex:1},{value:"\u5728 JavaScript \u4E2D\uFF0C\u6240\u6709\u4EE3\u7801\u90FD\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u4E5F\u5C31\u662F\u540C\u6B65\u6267\u884C\u7684\u3002\u800C Promise \u5C31\u4E3A==\u5F02\u6B65\u7F16\u7A0B==\u63D0\u4F9B\u4E86\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u3002",paraId:2,tocIndex:1},{value:`const promise = new Promise((resolve, reject) => {
    // do something here ...
    if (success) {
      resolve(value); // fulfilled
    } else {
      reject(error); // rejected
    }
  });
  `,paraId:3,tocIndex:1},{value:"\u8BE5\u6784\u9020\u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5206\u522B\u662F",paraId:4,tocIndex:1},{value:"resolve",paraId:4,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"reject",paraId:4,tocIndex:1},{value:"\u3002",paraId:4,tocIndex:1},{value:`
  \u5F53\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u6210\u529F\u540E\uFF0C\u4F1A\u5C06\u5F02\u6B65\u64CD\u4F5C\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165`,paraId:4,tocIndex:1},{value:"resolve",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u5E76\u6267\u884C\uFF0C\u6B64\u65F6 ",paraId:4,tocIndex:1},{value:"Promise",paraId:4,tocIndex:1},{value:"\u5BF9\u8C61\u72B6\u6001\u4ECE",paraId:4,tocIndex:1},{value:"pending",paraId:4,tocIndex:1},{value:"\u53D8\u4E3A",paraId:4,tocIndex:1},{value:"fulfilled",paraId:4,tocIndex:1},{value:"\uFF1B",paraId:4,tocIndex:1},{value:`
  \u5931\u8D25\u5219\u4F1A\u5C06\u5F02\u6B65\u64CD\u4F5C\u7684\u9519\u8BEF\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165`,paraId:4,tocIndex:1},{value:"reject",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u5E76\u6267\u884C\uFF0C\u6B64\u65F6 ",paraId:4,tocIndex:1},{value:"Promise",paraId:4,tocIndex:1},{value:"\u5BF9\u8C61\u72B6\u6001\u4ECE",paraId:4,tocIndex:1},{value:"pending",paraId:4,tocIndex:1},{value:"\u53D8\u4E3A",paraId:4,tocIndex:1},{value:"rejected",paraId:4,tocIndex:1},{value:"\uFF1B",paraId:4,tocIndex:1},{value:"\u6211\u4EEC\u901A\u8FC7",paraId:5,tocIndex:1},{value:"then",paraId:5,tocIndex:1},{value:"\u65B9\u6CD5\uFF0C\u5206\u522B\u6307\u5B9A resolved \u72B6\u6001\u548C rejected \u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:`promise.then(
    function (value) {
      // success
    },
    function (error) {
      // failure
    },
  );
  Promise.all([p1, p2, p3]);
  // \u628Apromise\u6254\u5230\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\uFF0C\u5FC5\u987B\u786E\u4FDD\u6240\u6709\u7684promise\u5BF9\u8C61\u90FD\u662Fresolve\u72B6\u6001\uFF0C\u624D\u4F1A\u8FD4\u56DE
  Promise.race([p1, p2, p3]);
  // \u53EA\u8981\u6709\u4E00\u4E2A\u662Fresolve\u72B6\u6001\uFF0C\u5C31\u8FD4\u56DE
  `,paraId:6,tocIndex:1},{value:"https://www.bilibili.com/video/BV1gW411H7B3?from=search&seid=9803203589622689357",paraId:7,tocIndex:1},{value:"http \u7684==3 \u6B21\u63E1\u624B==\uFF08\u524D\u7AEF\u9875\u9762\u7684\u52A0\u8F7D\u6D41\u7A0B\uFF0C\u4ECE TCP \u8BF7\u6C42\u5230\u9875\u9762\u4EA4\u4E92\u8FC7\u7A0B\uFF09\uFF0C\u5E38\u89C1\u72B6\u6001\u7801",paraId:8,tocIndex:1},{value:"http \u662F\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u662F\u4E92\u8054\u7F51\u4E0A\u5E94\u7528\u6700\u5E7F\u6CDB\u7684\u4E00\u79CD\u7F51\u7EDC\u534F\u8BAE",paraId:9,tocIndex:1},{value:"http==\u5E38\u89C1\u72B6\u6001\u7801==",paraId:10,tocIndex:1},{value:"1xx\uFF1A\u6307\u793A\u4FE1\u606F--\u8868\u793A\u8BF7\u6C42\u5DF2\u63A5\u6536\uFF0C\u7EE7\u7EED\u5904\u7406\u3002",paraId:11,tocIndex:1},{value:"2xx\uFF1A\u6210\u529F--\u8868\u793A\u8BF7\u6C42\u5DF2\u88AB\u6210\u529F\u63A5\u6536\u3001\u7406\u89E3\u3001\u63A5\u53D7\u3002",paraId:11,tocIndex:1},{value:"3xx\uFF1A\u91CD\u5B9A\u5411--\u8981\u5B8C\u6210\u8BF7\u6C42\u5FC5\u987B\u8FDB\u884C\u66F4\u8FDB\u4E00\u6B65\u7684\u64CD\u4F5C\u3002",paraId:11,tocIndex:1},{value:"4xx\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF--\u8BF7\u6C42\u6709\u8BED\u6CD5\u9519\u8BEF\u6216\u8BF7\u6C42\u65E0\u6CD5\u5B9E\u73B0\u3002",paraId:11,tocIndex:1},{value:"5xx\uFF1A\u670D\u52A1\u5668\u7AEF\u9519\u8BEF--\u670D\u52A1\u5668\u672A\u80FD\u5B9E\u73B0\u5408\u6CD5\u7684\u8BF7\u6C42\u3002",paraId:11,tocIndex:1},{value:"HTTP \u8BF7\u6C42\u4E0E\u54CD\u5E94\u6B65\u9AA4",paraId:12,tocIndex:1},{value:"\u5EFA\u7ACB\u8FDE\u63A5",paraId:13,tocIndex:1},{value:"\u5148\u89E3\u6790 DNS\uFF0C\u628A localhost \u53D8\u6210 ip\uFF08127.0.0.1\uFF09\uFF0C\u7136\u540E\u6839\u636E 127.0.0.1 \u548C\u7AEF\u53E3\u53F7 8080\uFF08\u6CA1\u6709\u7AEF\u53E3\u53F7\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u7AEF\u53E3\uFF09\u5EFA\u7ACB socket\u3002\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u901A\u8FC7\u201C\u4E09\u6B21\u63E1\u624B\u201D\u5EFA\u7ACB TCP \u8FDE\u63A5\uFF0C\u786E\u5B9A\u901A\u8BAF\u6B63\u5E38\u3002",paraId:14,tocIndex:1},{value:"\u53D1\u9001\u8BF7\u6C42\u547D\u4EE4",paraId:15,tocIndex:1},{value:"socket \u5EFA\u7ACB\u597D\u4E4B\u540E\uFF0C\u5BA2\u6237\u7AEF\u5F00\u59CB\u5411 web \u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u547D\u4EE4\uFF08GET/POST \u7B49\uFF09\u3002",paraId:16,tocIndex:1},{value:"\u53D1\u9001\u8BF7\u6C42\u5934\uFF08\u548C\u8BF7\u6C42\u6B63\u6587\uFF08\u5982\u679C\u6709\uFF09\uFF09",paraId:17,tocIndex:1},{value:"\u5BA2\u6237\u7AEF\u5148\u53D1\u9001\u4E0E\u81EA\u8EAB\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u518D\u53D1\u9001\u7A7A\u884C\u8868\u793A\u8BF7\u6C42\u5934\u53D1\u9001\u5B8C\u6BD5\uFF0C\u5982\u679C\u662F post \u5219\u7EE7\u7EED\u53D1\u9001\u8BF7\u6C42\u6B63\u6587\u3002",paraId:18,tocIndex:1},{value:"\u56DE\u4F20\u72B6\u6001\u884C",paraId:19,tocIndex:1},{value:"\u5E94\u7B54\u7B2C\u4E00\u6B65\uFF0C\u53D1\u9001\u534F\u8BAE\u7248\u672C\u548C\u72B6\u6001\u7801\uFF08200\u3001503\u3001404 \u7B49\uFF09",paraId:20,tocIndex:1},{value:"\u56DE\u4F20\u5E94\u7B54\u5934",paraId:21,tocIndex:1},{value:"\u5E94\u7B54\u7B2C\u4E8C\u6B65\uFF0C\u5148\u53D1\u9001\u81EA\u8EAB\u76F8\u5173\u4FE1\u606F\u3001Content-Type(\u5FC5\u987B)\u53CA\u88AB\u8BF7\u6C42\u7684\u6587\u6863\uFF0C\u5728\u53D1\u9001\u7A7A\u884C\u5B9D\u77F3\u5E94\u7B54\u5934\u53D1\u9001\u5B8C\u6BD5\u3002",paraId:22,tocIndex:1},{value:"\u56DE\u4F20\u5E94\u7B54\u6B63\u6587",paraId:23,tocIndex:1},{value:"\u5E94\u7B54\u7B2C\u4E09\u6B65\uFF0C\u6839\u636E\u5E94\u7B54\u5934\u7684 Content-Type \u6307\u5B9A\u7684\u683C\u5F0F\u53D1\u9001\u5E94\u7B54\u6B63\u6587\u3002",paraId:24,tocIndex:1},{value:"\u5173\u95ED\u8FDE\u63A5",paraId:25,tocIndex:1},{value:"\u4E00\u6B21\u4F1A\u8BDD\u5B8C\u6210\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86 Connection\uFF1Akeep-alive \u5219 TCP \u8FDE\u63A5\u4E0D\u5173\u95ED\uFF0C\u5426\u5219\u5173\u95ED\u8FDE\u63A5\u3002",paraId:26,tocIndex:1},{value:"==TCP \u4E09\u6B21\u63E1\u624B==",paraId:27,tocIndex:1},{value:"\u7B2C\u4E00\u6B21\u63E1\u624B",paraId:28,tocIndex:1},{value:"\u5EFA\u7ACB\u8FDE\u63A5\u3002\u5BA2\u6237\u7AEF\u53D1\u9001\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\uFF0C\u5C06 SYN \u4F4D\u7F6E\u4E3A 1\uFF0CSequence Number \u4E3A x\uFF1B\u7136\u540E\uFF0C\u5BA2\u6237\u7AEF\u8FDB\u5165 SYN_SEND \u72B6\u6001\uFF0C\u7B49\u5F85\u670D\u52A1\u5668\u7684\u786E\u8BA4\uFF1B",paraId:29,tocIndex:1},{value:"\u7B2C\u4E8C\u6B21\u63E1\u624B",paraId:30,tocIndex:1},{value:"\u670D\u52A1\u5668\u6536\u5230 SYN \u62A5\u6587\u6BB5\u3002\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u7684 SYN \u62A5\u6587\u6BB5\uFF0C\u9700\u8981\u5BF9\u8FD9\u4E2A SYN \u62A5\u6587\u6BB5\u8FDB\u884C\u786E\u8BA4\uFF0C\u8BBE\u7F6E Acknowledgment Number \u4E3A x+1(Sequence Number+1)\uFF1B\u540C\u65F6\uFF0C\u81EA\u5DF1\u81EA\u5DF1\u8FD8\u8981\u53D1\u9001 SYN \u8BF7\u6C42\u4FE1\u606F\uFF0C\u5C06 SYN \u4F4D\u7F6E\u4E3A 1\uFF0CSequence Number \u4E3A y\uFF1B\u670D\u52A1\u5668\u7AEF\u5C06\u4E0A\u8FF0\u6240\u6709\u4FE1\u606F\u653E\u5230\u4E00\u4E2A\u62A5\u6587\u6BB5\uFF08\u5373 SYN+ACK \u62A5\u6587\u6BB5\uFF09\u4E2D\uFF0C\u4E00\u5E76\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u670D\u52A1\u5668\u8FDB\u5165 SYN_RECV \u72B6\u6001\uFF1B",paraId:31,tocIndex:1},{value:"\u7B2C\u4E09\u6B21\u63E1\u624B",paraId:32,tocIndex:1},{value:"\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u5668\u7684 SYN+ACK \u62A5\u6587\u6BB5\u3002\u7136\u540E\u5C06 Acknowledgment Number \u8BBE\u7F6E\u4E3A y+1\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001 ACK \u62A5\u6587\u6BB5\uFF0C\u8FD9\u4E2A\u62A5\u6587\u6BB5\u53D1\u9001\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u90FD\u8FDB\u5165 ESTABLISHED \u72B6\u6001\uFF0C\u5B8C\u6210 TCP \u4E09\u6B21\u63E1\u624B\u3002",paraId:33,tocIndex:1},{value:`\u4E3A\u4EC0\u4E48\u8981\u4E09\u6B21\u63E1\u624B
  `,paraId:34,tocIndex:1},{value:"\u4E3A\u4E86\u9632\u6B62\u5DF2\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u7A81\u7136\u53C8\u4F20\u9001\u5230\u4E86\u670D\u52A1\u7AEF\uFF0C\u56E0\u800C\u4EA7\u751F\u9519\u8BEF\u3002",paraId:35,tocIndex:1},{value:"\u5177\u4F53\u4F8B\u5B50\uFF1A\u201C\u5DF2\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u201D\u7684\u4EA7\u751F\u5728\u8FD9\u6837\u4E00\u79CD\u60C5\u51B5\u4E0B\uFF1Aclient \u53D1\u51FA\u7684\u7B2C\u4E00\u4E2A\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u5E76\u6CA1\u6709\u4E22\u5931\uFF0C\u800C\u662F\u5728\u67D0\u4E2A\u7F51\u7EDC\u7ED3\u70B9\u957F\u65F6\u95F4\u7684\u6EDE\u7559\u4E86\uFF0C\u4EE5\u81F4\u5EF6\u8BEF\u5230\u8FDE\u63A5\u91CA\u653E\u4EE5\u540E\u7684\u67D0\u4E2A\u65F6\u95F4\u624D\u5230\u8FBE server\u3002\u672C\u6765\u8FD9\u662F\u4E00\u4E2A\u65E9\u5DF2\u5931\u6548\u7684\u62A5\u6587\u6BB5\u3002\u4F46 server \u6536\u5230\u6B64\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u540E\uFF0C\u5C31\u8BEF\u8BA4\u4E3A\u662F client \u518D\u6B21\u53D1\u51FA\u7684\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u8BF7\u6C42\u3002\u4E8E\u662F\u5C31\u5411 client \u53D1\u51FA\u786E\u8BA4\u62A5\u6587\u6BB5\uFF0C\u540C\u610F\u5EFA\u7ACB\u8FDE\u63A5\u3002\u5047\u8BBE\u4E0D\u91C7\u7528\u201C\u4E09\u6B21\u63E1\u624B\u201D\uFF0C\u90A3\u4E48\u53EA\u8981 server \u53D1\u51FA\u786E\u8BA4\uFF0C\u65B0\u7684\u8FDE\u63A5\u5C31\u5EFA\u7ACB\u4E86\u3002\u7531\u4E8E\u73B0\u5728 client \u5E76\u6CA1\u6709\u53D1\u51FA\u5EFA\u7ACB\u8FDE\u63A5\u7684\u8BF7\u6C42\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u7406\u776C server \u7684\u786E\u8BA4\uFF0C\u4E5F\u4E0D\u4F1A\u5411 server \u53D1\u9001\u6570\u636E\u3002\u4F46 server \u5374\u4EE5\u4E3A\u65B0\u7684\u8FD0\u8F93\u8FDE\u63A5\u5DF2\u7ECF\u5EFA\u7ACB\uFF0C\u5E76\u4E00\u76F4\u7B49\u5F85 client \u53D1\u6765\u6570\u636E\u3002\u8FD9\u6837\uFF0Cserver \u7684\u5F88\u591A\u8D44\u6E90\u5C31\u767D\u767D\u6D6A\u8D39\u6389\u4E86\u3002\u91C7\u7528\u201C\u4E09\u6B21\u63E1\u624B\u201D\u7684\u529E\u6CD5\u53EF\u4EE5\u9632\u6B62\u4E0A\u8FF0\u73B0\u8C61\u53D1\u751F\u3002\u4F8B\u5982\u521A\u624D\u90A3\u79CD\u60C5\u51B5\uFF0Cclient \u4E0D\u4F1A\u5411 server \u7684\u786E\u8BA4\u53D1\u51FA\u786E\u8BA4\u3002server \u7531\u4E8E\u6536\u4E0D\u5230\u786E\u8BA4\uFF0C\u5C31\u77E5\u9053 client \u5E76\u6CA1\u6709\u8981\u6C42\u5EFA\u7ACB\u8FDE\u63A5\u3002\u201D",paraId:35,tocIndex:1},{value:"\u56DB\u6B21\u6325\u624B",paraId:36,tocIndex:1},{value:"\u7B2C\u4E00\u6B21\u5206\u624B",paraId:37,tocIndex:1},{value:"\u4E3B\u673A 1\uFF08\u53EF\u4EE5\u4F7F\u5BA2\u6237\u7AEF\uFF0C\u4E5F\u53EF\u4EE5\u662F\u670D\u52A1\u5668\u7AEF\uFF09\uFF0C\u8BBE\u7F6E Sequence Number\uFF0C\u5411\u4E3B\u673A 2 \u53D1\u9001\u4E00\u4E2A FIN \u62A5\u6587\u6BB5\uFF1B\u6B64\u65F6\uFF0C\u4E3B\u673A 1 \u8FDB\u5165 FIN_WAIT_1 \u72B6\u6001\uFF1B\u8FD9\u8868\u793A\u4E3B\u673A 1 \u6CA1\u6709\u6570\u636E\u8981\u53D1\u9001\u7ED9\u4E3B\u673A 2 \u4E86\uFF1B",paraId:38,tocIndex:1},{value:"\u7B2C\u4E8C\u6B21\u5206\u624B",paraId:39,tocIndex:1},{value:"\u4E3B\u673A 2 \u6536\u5230\u4E86\u4E3B\u673A 1 \u53D1\u9001\u7684 FIN \u62A5\u6587\u6BB5\uFF0C\u5411\u4E3B\u673A 1 \u56DE\u4E00\u4E2A ACK \u62A5\u6587\u6BB5\uFF0CAcknowledgment Number \u4E3A Sequence Number \u52A0 1\uFF1B\u4E3B\u673A 1 \u8FDB\u5165 FIN_WAIT_2 \u72B6\u6001\uFF1B\u4E3B\u673A 2 \u544A\u8BC9\u4E3B\u673A 1\uFF0C\u6211\u201C\u540C\u610F\u201D\u4F60\u7684\u5173\u95ED\u8BF7\u6C42\uFF1B",paraId:40,tocIndex:1},{value:"\u7B2C\u4E09\u6B21\u5206\u624B",paraId:41,tocIndex:1},{value:"\u4E3B\u673A 2 \u5411\u4E3B\u673A 1 \u53D1\u9001 FIN \u62A5\u6587\u6BB5\uFF0C\u8BF7\u6C42\u5173\u95ED\u8FDE\u63A5\uFF0C\u540C\u65F6\u4E3B\u673A 2 \u8FDB\u5165 LAST_ACK \u72B6\u6001\uFF1B",paraId:42,tocIndex:1},{value:"\u7B2C\u56DB\u6B21\u5206\u624B",paraId:43,tocIndex:1},{value:"\u4E3B\u673A 1 \u6536\u5230\u4E3B\u673A 2 \u53D1\u9001\u7684 FIN \u62A5\u6587\u6BB5\uFF0C\u5411\u4E3B\u673A 2 \u53D1\u9001 ACK \u62A5\u6587\u6BB5\uFF0C\u7136\u540E\u4E3B\u673A 1 \u8FDB\u5165 TIME_WAIT \u72B6\u6001\uFF1B\u4E3B\u673A 2 \u6536\u5230\u4E3B\u673A 1 \u7684 ACK \u62A5\u6587\u6BB5\u4EE5\u540E\uFF0C\u5C31\u5173\u95ED\u8FDE\u63A5\uFF1B\u6B64\u65F6\uFF0C\u4E3B\u673A 1 \u7B49\u5F85 2MSL \u540E\u4F9D\u7136\u6CA1\u6709\u6536\u5230\u56DE\u590D\uFF0C\u5219\u8BC1\u660E Server \u7AEF\u5DF2\u6B63\u5E38\u5173\u95ED\uFF0C\u90A3\u597D\uFF0C\u4E3B\u673A 1 \u4E5F\u53EF\u4EE5\u5173\u95ED\u8FDE\u63A5\u4E86\u3002",paraId:44,tocIndex:1},{value:"\u4E3A\u4EC0\u4E48\u8981\u56DB\u6B21\u5206\u624B",paraId:45,tocIndex:1},{value:"TCP \u534F\u8BAE\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u7684\u8FD0\u8F93\u5C42\u901A\u4FE1\u534F\u8BAE\u3002TCP \u662F\u5168\u53CC\u5DE5\u6A21\u5F0F\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\uFF0C\u5F53\u4E3B\u673A 1 \u53D1\u51FA FIN \u62A5\u6587\u6BB5\u65F6\uFF0C\u53EA\u662F\u8868\u793A\u4E3B\u673A 1 \u5DF2\u7ECF\u6CA1\u6709\u6570\u636E\u8981\u53D1\u9001\u4E86\uFF0C\u4E3B\u673A 1 \u544A\u8BC9\u4E3B\u673A 2\uFF0C\u5B83\u7684\u6570\u636E\u5DF2\u7ECF\u5168\u90E8\u53D1\u9001\u5B8C\u6BD5\u4E86\uFF1B\u4F46\u662F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4E3B\u673A 1 \u8FD8\u662F\u53EF\u4EE5\u63A5\u53D7\u6765\u81EA\u4E3B\u673A 2 \u7684\u6570\u636E\uFF1B\u5F53\u4E3B\u673A 2 \u8FD4\u56DE ACK \u62A5\u6587\u6BB5\u65F6\uFF0C\u8868\u793A\u5B83\u5DF2\u7ECF\u77E5\u9053\u4E3B\u673A 1 \u6CA1\u6709\u6570\u636E\u53D1\u9001\u4E86\uFF0C\u4F46\u662F\u4E3B\u673A 2 \u8FD8\u662F\u53EF\u4EE5\u53D1\u9001\u6570\u636E\u5230\u4E3B\u673A 1 \u7684\uFF1B\u5F53\u4E3B\u673A 2 \u4E5F\u53D1\u9001\u4E86 FIN \u62A5\u6587\u6BB5\u65F6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u8868\u793A\u4E3B\u673A 2 \u4E5F\u6CA1\u6709\u6570\u636E\u8981\u53D1\u9001\u4E86\uFF0C\u5C31\u4F1A\u544A\u8BC9\u4E3B\u673A 1\uFF0C\u6211\u4E5F\u6CA1\u6709\u6570\u636E\u8981\u53D1\u9001\u4E86\uFF0C\u4E4B\u540E\u5F7C\u6B64\u5C31\u4F1A\u6109\u5FEB\u7684\u4E2D\u65AD\u8FD9\u6B21 TCP \u8FDE\u63A5\u3002",paraId:46,tocIndex:1},{value:"https://blog.csdn.net/qq_33616529/article/details/78288883",paraId:47,tocIndex:1},{value:"\u57DF\u540D\uFF08\u5305\u62EC\u4E8C\u7EA7\u57DF\u540D\uFF09\u3001\u534F\u8BAE\uFF08http/https\uFF09\u3001\u7AEF\u53E3\u53F7\u8FD9\u4E09\u8005\u5176\u4E2D\u6709\u4E00\u4E2A\u4E0D\u540C\u5C31\u662F\u5C5E\u4E8E\u8DE8\u57DF",paraId:48,tocIndex:3},{value:"\u57FA\u7840\u6570\u636E\u7C7B\u578B",paraId:49,tocIndex:4},{value:"\u5B57\u7B26\u4E32\uFF08String\uFF09",paraId:50,tocIndex:4},{value:"\u6570\u5B57\uFF08Number\uFF09",paraId:50,tocIndex:4},{value:"\u5E03\u5C14\uFF08Boolean\uFF09",paraId:50,tocIndex:4},{value:"\u5BF9\u7A7A\uFF08Null\uFF09",paraId:50,tocIndex:4},{value:"\u672A\u5B9A\u4E49\uFF08Undefined\uFF09",paraId:50,tocIndex:4},{value:"Symbol\uFF08\u5B83\u662F es6 \u5F15\u5165\u7684\u4E00\u79CD\u65B0\u7684\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF0C\u8868\u793A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C\uFF09",paraId:50,tocIndex:4},{value:"\u5F15\u7528\u6570\u636E\u7C7B\u578B",paraId:51,tocIndex:4},{value:"\u5BF9\u8C61\uFF08Object\uFF09\uFF08\u6570\u7EC4\uFF08Array\uFF09\u3001\u51FD\u6570\uFF08Function\uFF09\u90FD\u5C5E\u4E8E object \u7C7B\u578B\uFF09",paraId:52,tocIndex:4},{value:"BFC \u5C31\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20\uFF0C\u53CD\u4E4B\u4E5F\u5982\u6B64\u3002",paraId:53,tocIndex:6},{value:"\u56E0\u4E3A BFC \u5185\u90E8\u7684\u5143\u7D20\u548C\u5916\u90E8\u7684\u5143\u7D20\u7EDD\u5BF9\u4E0D\u4F1A\u4E92\u76F8\u5F71\u54CD\uFF0C\u56E0\u6B64\uFF0C \u5F53 BFC \u5916\u90E8\u5B58\u5728\u6D6E\u52A8\u65F6\uFF0C\u5B83\u4E0D\u5E94\u8BE5\u5F71\u54CD BFC \u5185\u90E8 Box \u7684\u5E03\u5C40\uFF0CBFC \u4F1A\u901A\u8FC7\u53D8\u7A84\uFF0C\u800C\u4E0D\u4E0E\u6D6E\u52A8\u6709\u91CD\u53E0\u3002\u540C\u6837\u7684\uFF0C\u5F53 BFC \u5185\u90E8\u6709\u6D6E\u52A8\u65F6\uFF0C\u4E3A\u4E86\u4E0D\u5F71\u54CD\u5916\u90E8\u5143\u7D20\u7684\u5E03\u5C40\uFF0CBFC \u8BA1\u7B97\u9AD8\u5EA6\u65F6\u4F1A\u5305\u62EC\u6D6E\u52A8\u7684\u9AD8\u5EA6\u3002\u907F\u514D margin \u91CD\u53E0\u4E5F\u662F\u8FD9\u6837\u7684\u4E00\u4E2A\u9053\u7406\u3002",paraId:53,tocIndex:6},{value:"\u9875\u9762\u5C31\u662F\u7531\u4E00\u4E2A\u4E2A\u76D2\u6A21\u578B\u5806\u780C\u8D77\u6765\u7684\uFF0C\u6BCF\u4E2A HTML \u5143\u7D20\u90FD\u53EF\u4EE5\u53EB\u505A\u76D2\u6A21\u578B\uFF0C\u76D2\u6A21\u578B\u7531\u5916\u800C\u5185\u5305\u62EC\uFF1A\u8FB9\u8DDD\uFF08margin\uFF09\u3001\u8FB9\u6846\uFF08border\uFF09\u3001\u586B\u5145\uFF08padding\uFF09\u3001\u5185\u5BB9\uFF08content\uFF09\u3002\u5B83\u5728\u9875\u9762\u4E2D\u6240\u5360\u7684\u5B9E\u9645\u5BBD\u5EA6\u662F margin + border + paddint + content \u7684\u5BBD\u5EA6\u76F8\u52A0\u3002",paraId:54,tocIndex:7},{value:"\u65B9\u6CD5",paraId:55,tocIndex:7},{value:`<template>
    <div class="parent">
      <div class="child"></div>
    </div>
  </template>

  <style>
  /*\u7B2C\u4E00\u79CD*/
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  /*\u7B2C\u4E8C\u79CD*/
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  `,paraId:56,tocIndex:7},{value:"link \u5C5E\u4E8E HTML \u6807\u7B7E\uFF0C\u800C@import \u662F CSS \u63D0\u4F9B\u7684;",paraId:57,tocIndex:8},{value:"\u9875\u9762\u88AB\u52A0\u8F7D\u7684\u65F6\uFF0Clink \u4F1A\u540C\u65F6\u88AB\u52A0\u8F7D\uFF0C\u800C@import \u5F15\u7528\u7684 CSS \u4F1A\u7B49\u5230\u9875\u9762\u88AB\u52A0\u8F7D\u5B8C\u518D\u52A0\u8F7D;",paraId:57,tocIndex:8},{value:"import \u53EA\u5728 IE5 \u4EE5\u4E0A\u624D\u80FD\u8BC6\u522B\uFF0C\u800C link \u662F HTML \u6807\u7B7E\uFF0C\u65E0\u517C\u5BB9\u95EE\u9898;",paraId:57,tocIndex:8},{value:"link \u65B9\u5F0F\u7684\u6837\u5F0F\u7684\u6743\u91CD \u9AD8\u4E8E@import \u7684\u6743\u91CD.",paraId:57,tocIndex:8},{value:"\u539F\u56E0\u89C1\u7B2C 5 \u70B9",paraId:58,tocIndex:9},{value:"vue.config.js \u4E2D",paraId:59,tocIndex:9},{value:`devServer: {
    host: "localhost", //\u8981\u8BBE\u7F6E\u5F53\u524D\u8BBF\u95EE\u7684ip \u5426\u5219\u5931\u6548
    port: 8080, //\u5F53\u524Dweb\u670D\u52A1\u7AEF\u53E3
    open: true, //\u6D4F\u89C8\u5668\u81EA\u52A8\u6253\u5F00\u9875\u9762
    proxy: {
      "/api": {
        target: "https://www.kinxpeng.com/", //\u76EE\u6807\u5730\u5740
        ws: true, //\u662F\u5426\u4EE3\u7406websocket
        changeOrigin: true, //\u662F\u5426\u8DE8\u57DF
        pathRewrite: {
          "^/api": "https://www.kinxpeng.com/", //url\u91CD\u5199
        },
      },
    },
  },
  `,paraId:60,tocIndex:9},{value:"cookie \u53EA\u6709 4KB \u7684\u5927\u5C0F",paraId:61,tocIndex:12},{value:"\u6539\u53D8\u51FD\u6570\u8FD0\u884C\u65F6\u7684 this \u6307\u5411",paraId:62,tocIndex:13},{value:"call\u3001apply \u4E0E bind \u7684\u5DEE\u522B",paraId:63,tocIndex:13},{value:"call \u548C apply \u6539\u53D8\u4E86\u51FD\u6570\u7684 this \u4E0A\u4E0B\u6587\u540E\u4FBF\u6267\u884C\u8BE5\u51FD\u6570,\u800C bind \u5219\u662F\u8FD4\u56DE\u6539\u53D8\u4E86\u4E0A\u4E0B\u6587\u540E\u7684\u4E00\u4E2A\u51FD\u6570\u3002",paraId:64,tocIndex:13},{value:"call\u3001apply \u7684\u533A\u522B(call \u4F20\u5165\u7684\u53C2\u6570\u4E3A\u53C2\u6570\u5217\u8868\u5F62\u5F0F)",paraId:65,tocIndex:13},{value:"\u4ED6\u4EEC\u4FE9\u4E4B\u95F4\u7684\u5DEE\u522B\u5728\u4E8E\u53C2\u6570\u7684\u533A\u522B\uFF0Ccall \u548C apply \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u8981\u6539\u53D8\u4E0A\u4E0B\u6587\u7684\u5BF9\u8C61\uFF0C\u800C==call==\u4ECE\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5F00\u59CB\u4EE5==\u53C2\u6570\u5217\u8868==\u7684\u5F62\u5F0F\u5C55\u73B0\uFF0C==apply==\u5219\u662F\u628A\u9664\u4E86\u6539\u53D8\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u53C2\u6570\u653E\u5728\u4E00\u4E2A==\u6570\u7EC4==\u91CC\u9762\u4F5C\u4E3A\u5B83\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002",paraId:66,tocIndex:13},{value:`let arr1 = [1, 2, 19, 6];
  console.log(Math.max.call(null, 1, 2, 19, 6)); // 19
  console.log(Math.max.call(null, arr1)); // NaN
  console.log(Math.max.apply(null, arr1)); //  19 \u76F4\u63A5\u53EF\u4EE5\u7528arr1\u4F20\u9012\u8FDB\u53BB
  `,paraId:67,tocIndex:13},{value:`function fn() {
    console.log(this);
  }
  // apply\u65B9\u6CD5\u7ED3\u679C\u540C\u4E0B
  fn.call(); // \u666E\u901A\u6A21\u5F0F\u4E0Bthis\u662Fwindow\uFF0C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0Bthis\u662Fundefined
  fn.call(null); // \u666E\u901A\u6A21\u5F0F\u4E0Bthis\u662Fwindow\uFF0C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0Bthis\u662Fnull
  fn.call(undefined); // \u666E\u901A\u6A21\u5F0F\u4E0Bthis\u662Fwindow\uFF0C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0Bthis\u662Fundefined
  `,paraId:68,tocIndex:13},{value:`console.log(null == undefined); //true
  console.log(null === undefined); //false
  `,paraId:69,tocIndex:14},{value:'null \u8868\u793A"\u6CA1\u6709\u5BF9\u8C61"\uFF0C\u5373\u8BE5\u5904\u4E0D\u5E94\u8BE5\u6709\u503C\u3002\u5178\u578B\u7528\u6CD5\u662F\uFF1A',paraId:70,tocIndex:14},{value:"\uFF081\uFF09 \u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8868\u793A\u8BE5\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u3002",paraId:71,tocIndex:14},{value:"\uFF082\uFF09 \u4F5C\u4E3A\u5BF9\u8C61\u539F\u578B\u94FE\u7684\u7EC8\u70B9\u3002",paraId:72,tocIndex:14},{value:'undefined \u8868\u793A"\u7F3A\u5C11\u503C"\uFF0C\u5C31\u662F\u6B64\u5904\u5E94\u8BE5\u6709\u4E00\u4E2A\u503C\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u5B9A\u4E49\u3002\u5178\u578B\u7528\u6CD5\u662F\uFF1A',paraId:73,tocIndex:14},{value:"\uFF081\uFF09\u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8E undefined\u3002",paraId:74,tocIndex:14},{value:"\uFF082) \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8E undefined\u3002",paraId:75,tocIndex:14},{value:"\uFF083\uFF09\u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u4E3A undefined\u3002",paraId:76,tocIndex:14},{value:"\uFF084\uFF09\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DE undefined\u3002",paraId:77,tocIndex:14},{value:"\u5916\u5F62\u4E0D\u540C",paraId:78,tocIndex:15},{value:"\u7BAD\u5934\u51FD\u6570\u4F7F\u7528\u7BAD\u5934\u5B9A\u4E49\uFF0C\u666E\u901A\u51FD\u6570\u4E2D\u6CA1\u6709",paraId:79,tocIndex:15},{value:"\u7BAD\u5934\u51FD\u6570\u90FD\u662F\u533F\u540D\u51FD\u6570",paraId:80,tocIndex:15},{value:"\u666E\u901A\u51FD\u6570\u53EF\u4EE5\u6709\u533F\u540D\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u6709\u5177\u4F53\u540D\u51FD\u6570\uFF0C\u4F46\u662F\u7BAD\u5934\u51FD\u6570\u90FD\u662F\u533F\u540D\u51FD\u6570\u3002",paraId:81,tocIndex:15},{value:"\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u7528\u4E8E\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u80FD\u4F7F\u7528 new",paraId:82,tocIndex:15},{value:"\u666E\u901A\u51FD\u6570\u53EF\u4EE5\u7528\u4E8E\u6784\u9020\u51FD\u6570\uFF0C\u4EE5\u6B64\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u3002",paraId:83,tocIndex:15},{value:`function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let admin = new Person('\u5C0F\u660E', 18);
  console.log(admin.name); // \u5C0F\u660E
  console.log(admin.age); // 18
  `,paraId:84,tocIndex:15},{value:"this \u6307\u5411\u4E0D\u540C",paraId:85,tocIndex:15},{value:"\u666E\u901A\u51FD\u6570\u6307\u5411\u8C03\u7528\u5B83\u7684\u5BF9\u8C61",paraId:86,tocIndex:15},{value:"\u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709 this\uFF08\u4EFB\u4F55\u65B9\u6CD5\u90FD\u6539\u53D8\u4E0D\u4E86\u5176\u6307\u5411\uFF0C\u5982 call() , bind() , apply()\uFF09",paraId:87,tocIndex:15},{value:"\u51FD\u6570\u8282\u6D41\u662F\u6307\u4E00\u5B9A\u65F6\u95F4\u5185 js \u65B9\u6CD5\u53EA\u8DD1\u4E00\u6B21",paraId:88,tocIndex:16},{value:`// \u51FD\u6570\u8282\u6D41
  var canRun = true;
  document.getElementById('throttle').onscroll = function () {
    if (!canRun) {
      // \u5224\u65AD\u662F\u5426\u5DF2\u7A7A\u95F2\uFF0C\u5982\u679C\u5728\u6267\u884C\u4E2D\uFF0C\u5219\u76F4\u63A5return
      return;
    }
    canRun = false;
    setTimeout(function () {
      console.log('\u51FD\u6570\u8282\u6D41');
      canRun = true;
    }, 300);
  };
  `,paraId:89,tocIndex:16},{value:"\u51FD\u6570\u8282\u6D41\u7684\u8981\u70B9\u662F\uFF0C\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u5F53\u6807\u5FD7\u4F4D\uFF0C\u8BB0\u5F55\u5F53\u524D\u4EE3\u7801\u662F\u5426\u5728\u6267\u884C\u3002",paraId:90,tocIndex:16},{value:"\u5982\u679C\u7A7A\u95F2\uFF0C\u5219\u53EF\u4EE5\u6B63\u5E38\u89E6\u53D1\u65B9\u6CD5\u6267\u884C\u3002",paraId:91,tocIndex:16},{value:"\u5982\u679C\u4EE3\u7801\u6B63\u5728\u6267\u884C\uFF0C\u5219\u53D6\u6D88\u8FD9\u6B21\u65B9\u6CD5\u6267\u884C\uFF0C\u76F4\u63A5 return\u3002",paraId:92,tocIndex:16},{value:"\u7528 setTimeout \u89C4\u5B9A\u6700\u5C0F\u7684\u65F6\u95F4\u95F4\u9694 300\uFF0C\u63A5\u7740\u518D\u6267\u884C setTimeout \u65B9\u6CD5\u4F53\u91CC\u9762\u7684\u5185\u5BB9\u3002",paraId:93,tocIndex:16},{value:"\u51FD\u6570\u9632\u6296\u662F\u6307\u9891\u7E41\u89E6\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709\u8DB3\u591F\u7684\u7A7A\u95F2\u65F6\u95F4\uFF0C\u624D\u6267\u884C\u4EE3\u7801\u4E00\u6B21\u3002",paraId:94,tocIndex:16},{value:"\u51FD\u6570\u9632\u6296\u7684\u5E94\u7528\u573A\u666F\uFF0C\u6700\u5E38\u89C1\u7684\u5C31\u662F\u7528\u6237\u6CE8\u518C\u65F6\u5019\u7684\u624B\u673A\u53F7\u7801\u9A8C\u8BC1\u548C\u90AE\u7BB1\u9A8C\u8BC1\u4E86\u3002\u53EA\u6709\u7B49\u7528\u6237\u8F93\u5165\u5B8C\u6BD5\u540E\uFF0C\u524D\u7AEF\u624D\u9700\u8981\u68C0\u67E5\u683C\u5F0F\u662F\u5426\u6B63\u786E\uFF0C\u5982\u679C\u4E0D\u6B63\u786E\uFF0C\u518D\u5F39\u51FA\u63D0\u793A\u8BED\u3002",paraId:95,tocIndex:16},{value:`// \u51FD\u6570\u9632\u6296
  var timer = false;
  document.getElementById('debounce').onscroll = function () {
    clearTimeout(timer); // \u6E05\u9664\u672A\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u91CD\u7F6E\u56DE\u521D\u59CB\u5316\u72B6\u6001
    timer = setTimeout(function () {
      console.log('\u51FD\u6570\u9632\u6296');
    }, 300);
  };
  `,paraId:96,tocIndex:16},{value:"\u51FD\u6570\u9632\u6296\u7684\u8981\u70B9\uFF0C\u4E5F\u662F\u9700\u8981\u4E00\u4E2A setTimeout \u6765\u8F85\u52A9\u5B9E\u73B0\u3002\u5EF6\u8FDF\u6267\u884C\u9700\u8981\u8DD1\u7684\u4EE3\u7801\u3002",paraId:97,tocIndex:16},{value:"\u5982\u679C\u65B9\u6CD5\u591A\u6B21\u89E6\u53D1\uFF0C\u5219\u628A\u4E0A\u6B21\u8BB0\u5F55\u7684\u5EF6\u8FDF\u6267\u884C\u4EE3\u7801\u7528 clearTimeout \u6E05\u6389\uFF0C\u91CD\u65B0\u5F00\u59CB\u3002",paraId:98,tocIndex:16},{value:"\u5982\u679C\u8BA1\u65F6\u5B8C\u6BD5\uFF0C\u6CA1\u6709\u65B9\u6CD5\u8FDB\u6765\u8BBF\u95EE\u89E6\u53D1\uFF0C\u5219\u6267\u884C\u4EE3\u7801\u3002",paraId:99,tocIndex:16},{value:"100 continue \u7EE7\u7EED",paraId:100,tocIndex:17},{value:"2xx",paraId:101,tocIndex:17},{value:"200 ok \u6B63\u5E38\u8FD4\u56DE\u4FE1\u606F",paraId:102,tocIndex:17},{value:"201 \u8BF7\u6C42\u6210\u529F\u5E76\u4E14\u670D\u52A1\u5668\u521B\u5EFA\u4E86\u65B0\u7684\u8D44\u6E90",paraId:102,tocIndex:17},{value:"202 \u670D\u52A1\u5668\u5DF2\u63A5\u53D7\u8BF7\u6C42\uFF0C\u4F46\u5C1A\u672A\u5904\u7406",paraId:102,tocIndex:17},{value:"3xx",paraId:103,tocIndex:17},{value:"301 \u8BF7\u6C42\u7684\u7F51\u9875\u5DF2\u6C38\u4E45\u79FB\u52A8\u5230\u65B0\u4F4D\u7F6E",paraId:104,tocIndex:17},{value:"302 \u4E34\u65F6\u91CD\u5B9A\u5411",paraId:104,tocIndex:17},{value:"303 \u4E34\u65F6\u6027\u91CD\u5B9A\u5411\uFF0C\u4E14\u603B\u662F\u4F7F\u7528 GET \u8BF7\u6C42\u65B0\u7684 URL",paraId:104,tocIndex:17},{value:"304 \u81EA\u4ECE\u4E0A\u6B21\u8BF7\u6C42\u540E\uFF0C\u8BF7\u6C42\u7684\u7F51\u9875\u672A\u4FEE\u6539\u8FC7",paraId:104,tocIndex:17},{value:"4xx",paraId:105,tocIndex:17},{value:"400 \u670D\u52A1\u5668\u65E0\u6CD5\u7406\u89E3\u8BF7\u6C42\u7684\u683C\u5F0F",paraId:106,tocIndex:17},{value:"401 \u8BF7\u6C42\u672A\u6388\u6743",paraId:106,tocIndex:17},{value:"403 \u7981\u6B62\u8BBF\u95EE",paraId:106,tocIndex:17},{value:"404 \u627E\u4E0D\u5230\u5982\u4F55\u4E0E url \u76F8\u5339\u914D\u7684\u8D44\u6E90",paraId:106,tocIndex:17},{value:"5xx",paraId:107,tocIndex:17},{value:"500 \u670D\u52A1\u5668\u7AEF\u9519\u8BEF",paraId:108,tocIndex:17},{value:"503 \u670D\u52A1\u5668\u6682\u65F6\u65E0\u6CD5\u5904\u7406\u8BF7\u6C42(\u53EF\u80FD\u662F\u8FC7\u8F7D\u6216\u7EF4\u62A4)",paraId:109,tocIndex:17},{value:"\u4E00\u4E2A\u751F\u547D\u5468\u671F\u7684\u987A\u5E8F",paraId:110,tocIndex:18},{value:"beforeCreated",paraId:111,tocIndex:18},{value:`created
  `,paraId:111,tocIndex:18},{value:"data \u5DF2\u521D\u59CB\u5316\uFF0C\u8BA1\u7B97\u5C5E\u6027\uFF0Cevent/watch \u4E8B\u4EF6\u56DE\u8C03\uFF0C\u4F46 dom \u6811\u5E76\u672A\u6302\u8F7D",paraId:112,tocIndex:18},{value:`beforeMount
  `,paraId:111,tocIndex:18},{value:"\u5728\u6302\u8F7D\u524D\u88AB\u8C03\u7528\uFF0Crender \u51FD\u6570\u9996\u6B21\u88AB\u8C03\u7528\u751F\u6210\u865A\u62DF dom",paraId:113,tocIndex:18},{value:`mounted
  `,paraId:111,tocIndex:18},{value:"\u6302\u8F7D\u5B8C\u6210\uFF0Cdom \u6811\u5DF2\u7ECF\u6E32\u67D3\u5230\u9875\u9762\uFF0C\u53EF\u4EE5\u8FDB\u884C dom \u64CD\u4F5C",paraId:114,tocIndex:18},{value:"beforeUpdate",paraId:111,tocIndex:18},{value:"updated",paraId:111,tocIndex:18},{value:"beforeDestroy",paraId:111,tocIndex:18},{value:"destroyed",paraId:111,tocIndex:18},{value:"\u5168\u5C40\u5B88\u536B",paraId:115,tocIndex:19},{value:`// \u4E00\u822C\u7528\u4E8E\u767B\u5F55\u9A8C\u8BC1
  router.beforeEach((to, from, next) => {
    // do someting
  });
  `,paraId:116,tocIndex:19},{value:"[beforeResolve]\uFF1A\u8FD9\u4E2A\u94A9\u5B50\u548C beforeEach \u7C7B\u4F3C\uFF0C\u4E5F\u662F\u8DEF\u7531\u8DF3\u8F6C\u524D\u89E6\u53D1\uFF0C\u53C2\u6570\u4E5F\u662F to,from,next \u4E09\u4E2A",paraId:117,tocIndex:19},{value:`
  [afterEach]\uFF1A\u548C beforeEach \u76F8\u53CD\uFF0C\u5B83\u662F\u5728\u8DEF\u7531\u8DF3\u8F6C\u5B8C\u6210\u4E4B\u540E\u89E6\u53D1\uFF0C\u53C2\u6570\u5305\u62EC to\u3001from\uFF0C==\u6CA1\u6709\u4E86 next==`,paraId:117,tocIndex:19},{value:"\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B",paraId:118,tocIndex:19},{value:"[beforeEnter]\uFF1A\u548C beforeEach \u5B8C\u5168\u76F8\u540C\uFF0C\u5982\u679C\u90FD\u8BBE\u7F6E\u5219\u5728 beforeEach \u4E4B\u540E\u7D27\u968F\u6267\u884C\uFF0C\u53C2\u6570\u6709 to\u3001from\u3001next\u3002",paraId:119,tocIndex:19},{value:`cont router = new VueRouter({
    routes: [
      {
        path: '/file',
        component: File,
        beforeEnter: (to, from ,next) => {
        // do someting
        }
      }
    ]
  });
  `,paraId:120,tocIndex:19},{value:"\u5C40\u90E8\u5B88\u536B",paraId:121,tocIndex:19},{value:"\u662F\u6307\u5728\u7EC4\u4EF6\u5185\u6267\u884C\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u7C7B\u4F3C\u4E8E\u6570\u7EC4\u5185\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u76F8\u5F53\u4E8E\u4E3A\u914D\u7F6E\u8DEF\u7531\u7684\u7EC4\u4EF6\u6DFB\u52A0\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u3002\u94A9\u5B50\u51FD\u6570\u6309\u6267\u884C\u987A\u5E8F\u5305\u62EC beforeRouteEnter\u3001beforeRouteUpdate(2.2 \u65B0\u589E)\u3001beforeRouteLeave \u4E09\u4E2A",paraId:122,tocIndex:19},{value:`routes:[
     {
        path:'/b',
        component:B,
        beforeEnter:(to,form,next)=>{
           .....
        }
     }
  ]
  `,paraId:123,tocIndex:19},{value:"vue \u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u662F\u901A\u8FC7 \u6570\u636E\u52AB\u6301 \u7ED3\u5408 \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7684\uFF0C \u4E5F\u5C31\u662F\u8BF4\u6570\u636E\u548C\u89C6\u56FE\u540C\u6B65\uFF0C\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u89C6\u56FE\u8DDF\u7740\u53D8\u5316\uFF0C\u89C6\u56FE\u53D8\u5316\uFF0C\u6570\u636E\u4E5F\u968F\u4E4B\u53D1\u751F\u6539\u53D8\uFF1B",paraId:124,tocIndex:20},{value:"\u6838\u5FC3\uFF1A\u5173\u4E8E VUE \u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u5176\u6838\u5FC3\u662F Object.defineProperty()\u65B9\u6CD5\uFF1B",paraId:125,tocIndex:20},{value:"3.\u4ECB\u7ECD\u4E00\u4E0B Object.defineProperty()\u65B9\u6CD5",paraId:126,tocIndex:20},{value:`
  \uFF081\uFF09Object.defineProperty(obj, prop, descriptor) \uFF0C\u8FD9\u4E2A\u8BED\u6CD5\u5185\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4E3A obj \uFF08\u8981\u5B9A\u4E49\u5176\u4E0A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF09 prop \uFF08\u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\uFF09 descriptor \uFF08\u5177\u4F53\u7684\u6539\u53D8\u65B9\u6CD5\uFF09`,paraId:126,tocIndex:20},{value:`
  \uFF082\uFF09\u7B80\u5355\u5730\u8BF4\uFF0C\u5C31\u662F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u6765\u5B9A\u4E49\u4E00\u4E2A\u503C\u3002\u5F53\u8C03\u7528\u65F6\u6211\u4EEC\u4F7F\u7528\u4E86\u5B83\u91CC\u9762\u7684 get \u65B9\u6CD5\uFF0C\u5F53\u6211\u4EEC\u7ED9\u8FD9\u4E2A\u5C5E\u6027\u8D4B\u503C\u65F6\uFF0C\u53C8\u7528\u5230\u4E86\u5B83\u91CC\u9762\u7684 set \u65B9\u6CD5\uFF1B`,paraId:126,tocIndex:20},{value:"\u7528 js \u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u53CC\u5411\u7ED1\u5B9A",paraId:127,tocIndex:20},{value:`<!--html-->
  <div class="box">
    <input id="a" type="text" />
    <p id="b"></p>
  </div>
  `,paraId:128,tocIndex:20},{value:`// js
  let obj = {};
  Object.defineProperty(obj, 'val', {
    //  get: function () {
    //    console.log("get\u88AB\u8C03\u7528\u4E86");
    //  },
    set: function (val) {
      $('#a').val(val);
      $('#b').html(val);
    },
  });
  document.addEventListener('keyup', function (e) {
    obj.val = e.target.value;
  });
  `,paraId:129,tocIndex:20},{value:"Vuex \u662F\u4E13\u95E8\u4E3A Vuejs \u5E94\u7528\u7A0B\u5E8F\u8BBE\u8BA1\u7684",paraId:130,tocIndex:21},{value:"\u72B6\u6001\u7BA1\u7406\u5DE5\u5177",paraId:130,tocIndex:21},{value:"\u3002",paraId:130,tocIndex:21},{value:"computed \u548C watch \u7684\u4F7F\u7528\u573A\u666F\u5E76\u4E0D\u4E00\u6837\uFF0Ccomputed \u7684\u8BDD\u662F",paraId:131,tocIndex:22},{value:"\u901A\u8FC7\u51E0\u4E2A\u6570\u636E\u7684\u53D8\u5316\uFF0C\u6765\u5F71\u54CD\u4E00\u4E2A\u6570\u636E\uFF0C",paraId:131,tocIndex:22},{value:"\u800C watch\uFF0C\u5219\u662F\u53EF\u4EE5",paraId:131,tocIndex:22},{value:"\u4E00\u4E2A\u6570\u636E\u7684\u53D8\u5316\uFF0C\u53BB\u5F71\u54CD\u591A\u4E2A\u6570\u636E\u3002",paraId:131,tocIndex:22},{value:"\u652F\u6301\u7F13\u5B58\uFF0C\u53EA\u6709==\u4F9D\u8D56\u6570\u636E\u53D1\u751F\u6539\u53D8==\uFF0C\u624D\u4F1A\u91CD\u65B0\u8FDB\u884C\u8BA1\u7B97",paraId:132,tocIndex:23},{value:"\u4E0D\u652F\u6301\u5F02\u6B65\uFF0C\u5F53 computed \u5185\u6709\u5F02\u6B65\u64CD\u4F5C\u65F6\u65E0\u6548\uFF0C\u65E0\u6CD5\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316",paraId:132,tocIndex:23},{value:"\u5982\u679C computed \u5C5E\u6027\u5C5E\u6027\u503C\u662F\u51FD\u6570\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4F1A\u8D70 get \u65B9\u6CD5\uFF1B\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u5C5E\u6027\u7684\u5C5E\u6027\u503C\uFF1B\u5728 computed \u4E2D\u7684\uFF0C\u5C5E\u6027\u90FD\u6709\u4E00\u4E2A get \u548C\u4E00\u4E2A set \u65B9\u6CD5\uFF0C\u5F53\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u8C03\u7528 set \u65B9\u6CD5\u3002",paraId:132,tocIndex:23},{value:"\u4E0D\u652F\u6301\u7F13\u5B58\uFF0C\u4F46\u6570\u636E\u6539\u53D8\uFF0C\u76F4\u63A5\u4F1A\u89E6\u53D1\u76F8\u5E94\u7684\u64CD\u4F5C\uFF1B",paraId:133,tocIndex:24},{value:"watch \u652F\u6301\u5F02\u6B65\uFF1B",paraId:133,tocIndex:24},{value:"\u76D1\u542C\u7684\u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6700\u65B0\u7684\u503C\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8F93\u5165\u4E4B\u524D\u7684\u503C\uFF0C\u7528\u6765\u76D1\u542C input \u7136\u540E\u8FDB\u884C\u4E00\u4E9B\u5373\u65F6\u641C\u7D22\u64CD\u4F5C\u4EC0\u4E48\u7684\u3002",paraId:133,tocIndex:24},{value:"\u9996\u5148\uFF0C\u4F7F\u7528 Vue.extend()\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6",paraId:134,tocIndex:25},{value:`var myCom = Vue.extend({
    template: '<div>\u8FD9\u662F\u6211\u7684\u7EC4\u4EF6</div>',
  });
  `,paraId:135,tocIndex:25},{value:"\u7136\u540E\uFF0C\u4F7F\u7528 Vue.component()\u65B9\u6CD5\u6CE8\u518C\u7EC4\u4EF6",paraId:136,tocIndex:25},{value:`// Vue.component('my-com',myCom);
  /*\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6*/
  var app1 = new Vue({
    el: '#app1',
    components: {
      'my-com': myCom,
    },
  });

  var app2 = new Vue({
    el: '#app2',
  });
  `,paraId:137,tocIndex:25},{value:"\u63A5\u7740\uFF0C\u5982\u679C\u5B50\u7EC4\u4EF6\u9700\u8981\u6570\u636E\uFF0C\u53EF\u4EE5\u5728 props \u4E2D\u63A5\u53D7\u5B9A\u4E49",paraId:138,tocIndex:25},{value:"\u6700\u540E\uFF0C\u5B50\u7EC4\u4EF6\u4FEE\u6539\u597D\u6570\u636E\u4E4B\u540E\uFF0C\u60F3\u628A\u6570\u636E\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 emit()\u65B9\u6CD5",paraId:139,tocIndex:25},{value:"\u9996\u5148\uFF0C\u5728 Vue 2x \u4E2D\u6570\u636E\u7684\u54CD\u5E94\u5F0F\u5904\u7406\u662F\u57FA\u4E8E Object.defineProperty() \u7684\uFF0C\u4F46\u662F\u5B83\u53EA\u4F1A\u4FA6\u542C\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5E76\u4E0D\u80FD\u4FA6\u542C\u5BF9\u8C61\u3002\u6240\u4EE5\uFF0C\u5728\u6DFB\u52A0\u5BF9\u8C61\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u901A\u5E38\u9700\u8981\u8FD9\u6837",paraId:140,tocIndex:26},{value:`Vue.$set(object, 'name', value);
  `,paraId:141,tocIndex:26},{value:"\u4F46\u662F\u9762\u8BD5\u7684\u65F6\u5019\u9762\u8BD5\u5B98\u95EE Object.defineProperty()\u4E0D\u80FD\u76D1\u542C\u53D8\u5316\uFF0C\u4E3A\u4EC0\u4E48 push\u3001unshift\u3001splice \u4E5F\u80FD\u89E6\u53D1\u8FD9\u5C31\u8981\u5206\u6790 vue \u6E90\u7801\uFF0C\u5728\u6E90\u7801\u4E2D\u6211\u4EEC\u53D1\u73B0 vue \u91CD\u5199\u76D1\u542C\u4E86 push\u3001unshift\u3001splice\uFF1B",paraId:142,tocIndex:26},{value:"(1) \u51CF\u5C11 HTTP \u8BF7\u6C42",paraId:143,tocIndex:28},{value:"CSS \u7CBE\u7075\u56FE",paraId:144,tocIndex:28},{value:"\u5982\u679C\u53EF\u4EE5\uFF0C\u5C3D\u91CF\u5C06\u5916\u90E8\u7684\u811A\u672C\u3001\u6837\u5F0F\u8FDB\u884C\u5408\u5E76\uFF0C\u591A\u4E2A\u5408\u4E3A\u4E00\u4E2A\u3002\u4E14 CSS\uFF0CJS\uFF0Cimage \u90FD\u53EF\u4EE5\u7528\u76F8\u5E94\u5DE5\u5177\u8FDB\u884C\u538B\u7F29",paraId:144,tocIndex:28},{value:"\u80FD\u4F7F\u7528 CSS \u66FF\u4EE3\u6548\u679C\u7684\u5C3D\u91CF\u5C11\u4F7F\u7528\u56FE\u7247",paraId:144,tocIndex:28},{value:"\u56FE\u7247\u61D2\u52A0\u8F7D\u3002\u53EF\u4EE5\u5728\u67D0\u4E9B\u6761\u4EF6\u4E0B\u6216\u8005\u9875\u9762\u521A\u52A0\u8F7D\u65F6\u51CF\u5C11 HTTP \u8BF7\u6C42\u6570\u3002",paraId:144,tocIndex:28},{value:"CDN \u6258\u7BA1",paraId:144,tocIndex:28},{value:"(2) \u51CF\u5C11 DNS \u67E5\u8BE2\uFF1ADNS \u7F13\u5B58\u3001\u5C06\u8D44\u6E90\u5206\u5E03\u5230\u6070\u5F53\u6570\u91CF\u7684\u4E3B\u673A\u540D",paraId:145,tocIndex:28},{value:`
  (3) \u5C06\u5916\u90E8\u811A\u672C\u7F6E\u5E95`,paraId:145,tocIndex:28},{value:`
  \u5916\u94FE\u811A\u672C\u5728\u52A0\u8F7D\u65F6\uFF0C\u4F1A\u963B\u585E\u5176\u4ED6\u8D44\u6E90\u3002 \u6700\u7B80\u5355\u53EF\u4F9D\u8D56\u7684\u65B9\u6CD5\u662F\u5C06\u811A\u672C\u5C3D\u53EF\u80FD\u5F80\u540E\u632A\uFF0C\u51CF\u5C11\u5BF9\u5E76\u53D1\u4E0B\u8F7D\u7684\u5F71\u54CD\u3002`,paraId:145,tocIndex:28},{value:`
  (4) \u5C06 CSS \u653E\u5728 head \u4E2D`,paraId:145,tocIndex:28},{value:`
  (5) \u5F02\u6B65\u6267\u884C inline \u811A\u672C\u3002\u53EF\u4F7F\u7528 script \u7684 defer \u5C5E\u6027\uFF0C\u4F7F\u7528 setTimeout\uFF0CHTML5 \u4E2D\u7684 web workers \u673A\u5236\u7B49`,paraId:145,tocIndex:28},{value:`
  (6) \u5408\u7406\u8BBE\u7F6E HTTP \u7F13\u5B58\uFF1AExpires \u4E0E Cache-control`,paraId:145,tocIndex:28},{value:"(1) javascript",paraId:146,tocIndex:29},{value:"\u7528 innerHTML \u4EE3\u66FF DOM \u64CD\u4F5C\uFF0C\u51CF\u5C11 DOM \u64CD\u4F5C\u6B21\u6570\uFF0C\u4F18\u5316 javascript \u6027\u80FD",paraId:147,tocIndex:29},{value:"\u614E\u7528 with\u3002with \u76F8\u5F53\u4E8E\u589E\u52A0\u4E86\u4F5C\u7528\u57DF\u94FE\u7684\u957F\u5EA6\uFF0C\u8FC7\u957F\u7684\u4F5C\u7528\u57DF\u94FE\u4F1A\u5BFC\u81F4\u67E5\u627E\u6027\u80FD\u4E0B\u964D",paraId:148,tocIndex:29},{value:"\u51CF\u5C11\u4F5C\u7528\u57DF\u94FE\u67E5\u627E\u3002\u82E5\u5728\u5FAA\u73AF\u4E2D\u9700\u8981\u8BBF\u95EE\u975E\u672C\u4F5C\u7528\u57DF\u4E0B\u7684\u53D8\u91CF\uFF0C\u5728\u904D\u5386\u4E4B\u524D\u7528\u5C40\u90E8\u53D8\u91CF\u7F13\u5B58\u8BE5\u53D8\u91CF\uFF0C\u5E76\u5728\u904D\u5386\u7ED3\u675F\u4E4B\u540E\u518D\u91CD\u590D\u90A3\u4E2A\u53D8\u91CF\u3002\u5168\u5C40\u53D8\u91CF\u5904\u4E8E\u4F5C\u7528\u57DF\u94FE\u7684\u6700\u9876\u7AEF\uFF0C\u8BBF\u95EE\u65F6\u67E5\u627E\u6B21\u6570\u662F\u6700\u591A\u7684\uFF0C\u6240\u4EE5\u5C11\u7528\u5168\u5C40\u53D8\u91CF\u3002\u540C\u65F6\u4E5F\u8981\u6CE8\u610F\u51CF\u5C11\u95ED\u5305\u7684\u4F7F\u7528\u3002",paraId:149,tocIndex:29},{value:"\u6570\u636E\u8BBF\u95EE\u3002js \u4E2D\u5BF9\u76F4\u63A5\u91CF\uFF08\u5B57\u7B26\u4E32\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u548C\u5C40\u90E8\u53D8\u91CF\u7684\u8BBF\u95EE\u6700\u5FEB\u3002\u6240\u4EE5\u5F53\uFF1Aa.\u5BF9\u4EFB\u4F55\u5BF9\u8C61\u5C5E\u6027\u8BBF\u95EE\u8D85\u8FC7 1 \u6B21\uFF1Bb. \u5BF9\u4EFB\u4F55\u6570\u7EC4\u6210\u5458\u8BBF\u95EE\u6B21\u6570\u8D85\u8FC7 1 \u6B21\u3002\u53EF\u4EE5\u5C06\u6570\u636E\u653E\u5165\u5C40\u90E8\u53D8\u91CF\u4EE5\u52A0\u5FEB\u8BBF\u95EE\u901F\u5EA6\u3002",paraId:150,tocIndex:29},{value:"(2) CSS",paraId:151,tocIndex:29},{value:"\u4F7F\u7528 link \u800C\u4E0D\u4F7F\u7528@import\u3002link \u5728\u9875\u9762\u52A0\u8F7D\u65F6 CSS \u540C\u65F6\u88AB\u52A0\u8F7D\uFF0C@import \u5F15\u5165\u7684 CSS \u8981\u7B49\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u540E\u518D\u52A0\u8F7D",paraId:152,tocIndex:29},{value:"\u8BBE\u7F6E className \u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528 css \u8868\u8FBE\u5F0F",paraId:153,tocIndex:29},{value:"\u907F\u514D\u6B63\u5219\u7684\u5C5E\u6027\u9009\u62E9\u5668\u3002",paraId:154,tocIndex:29},{value:"\uFF083\uFF09\u5F02\u6B65\u52A0\u8F7D",paraId:155,tocIndex:29},{value:"\u4F7F\u7528 Ajax \u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\uFF0C\u4F8B\u5982\uFF0C\u6EDA\u52A8\u9875\u9762\u52A0\u8F7D\u540E\u9762\u7684\u5185\u5BB9\uFF0C\u8FD9\u79CD\u4E5F\u6BD4\u8F83\u5E38\u89C1\u3002",paraId:156,tocIndex:29},{value:"https://blog.csdn.net/m0_46680765/article/details/107354878?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control",paraId:157,tocIndex:29},{value:"\u6E10\u8FDB\u589E\u5F3A\u548C\u4F18\u96C5\u964D\u7EA7\u8FD9\u4E24\u4E2A\u6982\u5FF5\u662F\u5728 CSS3 \u51FA\u73B0\u4E4B\u540E\u706B\u8D77\u6765\u7684\u3002\u7531\u4E8E\u4F4E\u7EA7\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 CSS3\uFF0C\u4F46\u662F CSS3 \u7279\u6548\u592A\u4F18\u79C0\u4E0D\u5FCD\u653E\u5F03\uFF0C\u6240\u4EE5\u5728\u9AD8\u7EA7\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 CSS3\uFF0C\u800C\u5728\u4F4E\u7EA7\u6D4F\u89C8\u5668\u53EA\u4FDD\u8BC1\u6700\u57FA\u672C\u7684\u529F\u80FD\u3002\u4E8C\u8005\u7684\u76EE\u7684\u90FD\u662F\u5173\u6CE8\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u7684\u4E0D\u540C\u4F53\u9A8C\uFF0C\u4F46\u662F\u5B83\u4EEC\u4FA7\u91CD\u70B9\u4E0D\u540C\uFF0C\u6240\u4EE5\u5BFC\u81F4\u4E86\u5DE5\u4F5C\u6D41\u7A0B\u4E0A\u7684\u4E0D\u540C\u3002",paraId:158,tocIndex:30},{value:"\u4F18\u96C5\u964D\u7EA7\uFF08Graceful Degradation\uFF09",paraId:159,tocIndex:30},{value:"\uFF1A\u4E00\u5F00\u59CB\u5C31\u6784\u5EFA\u7AD9\u70B9\u7684\u5B8C\u6574\u529F\u80FD\uFF0C\u7136\u540E\u9488\u5BF9\u6D4F\u89C8\u5668\u6D4B\u8BD5\u548C\u4FEE\u590D\u3002\u6BD4\u5982\u4E00\u5F00\u59CB\u4F7F\u7528 CSS3 \u7684\u7279\u6027\u6784\u5EFA\u4E86\u4E00\u4E2A\u5E94\u7528\uFF0C\u7136\u540E\u9010\u6B65\u9488\u5BF9\u5404\u5927\u6D4F\u89C8\u5668\u8FDB\u884C hack \u4F7F\u5176\u53EF\u4EE5\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E0A\u6B63\u5E38\u6D4F\u89C8\u3002",paraId:159,tocIndex:30},{value:"\u6E10\u8FDB\u589E\u5F3A\uFF08Progressive Enhancement\uFF09",paraId:160,tocIndex:30},{value:"\uFF1A\u4E00\u5F00\u59CB\u5C31\u9488\u5BF9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u8FDB\u884C\u6784\u5EFA\u9875\u9762\uFF0C\u5B8C\u6210\u57FA\u672C\u7684\u529F\u80FD\uFF0C\u7136\u540E\u518D\u9488\u5BF9\u9AD8\u7EA7\u6D4F\u89C8\u5668\u8FDB\u884C\u6548\u679C\u3001\u4EA4\u4E92\u3001\u8FFD\u52A0\u529F\u80FD\u8FBE\u5230\u66F4\u597D\u7684\u4F53\u9A8C\u3002",paraId:160,tocIndex:30},{value:"\u4F18\u96C5\u964D\u7EA7\u548C\u6E10\u8FDB\u589E\u5F3A\u90FD\u5173\u6CE8\u4E8E\u540C\u4E00\u7F51\u7AD9\u5728\u4E0D\u540C\u8BBE\u5907\u91CC\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u7684\u8868\u73B0\u7A0B\u5EA6\u3002",paraId:161,tocIndex:30},{value:"\u6E10\u8FDB\u589E\u5F3A\u7684\u5199\u6CD5\uFF0C\u4F18\u5148\u8003\u8651\u8001\u7248\u672C\u6D4F\u89C8\u5668\u7684\u53EF\u7528\u6027\uFF0C\u6700\u540E\u624D\u8003\u8651\u65B0\u7248\u672C\u7684\u53EF\u7528\u6027\u3002",paraId:162,tocIndex:30},{value:"\u4F18\u96C5\u964D\u7EA7\u7684\u5199\u6CD5\uFF0C\u4F18\u5148\u8003\u8651\u65B0\u7248\u672C\u6D4F\u89C8\u5668\u7684\u53EF\u7528\u6027\uFF0C\u6700\u540E\u624D\u8003\u8651\u8001\u7248\u672C\u7684\u53EF\u7528\u6027\u3002",paraId:162,tocIndex:30},{value:`.transition {
    /*\u6E10\u8FDB\u589E\u5F3A\u5199\u6CD5*/
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .transition {
    /*\u4F18\u96C5\u964D\u7EA7\u5199\u6CD5*/
    transition: all 0.5s;
    -o-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  `,paraId:163,tocIndex:30},{value:"px \u662F\u7EDD\u5BF9\u5355\u4F4D\uFF0C\u4E0D\u4F1A\u6539\u53D8",paraId:164,tocIndex:31},{value:`em \u662F\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20
  `,paraId:164,tocIndex:31},{value:"\u5982\u5F53\u524D\u5BF9\u884C\u5185\u6587\u672C\u7684\u5B57\u4F53\u5C3A\u5BF8\u672A\u88AB\u4EBA\u4E3A\u8BBE\u7F6E\uFF0C\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u5B57\u4F53\u5C3A\u5BF8\u3002",paraId:165,tocIndex:31},{value:"em \u7684\u503C\u5E76\u4E0D\u662F\u56FA\u5B9A\u7684\uFF1B",paraId:165,tocIndex:31},{value:"em \u4F1A\u7EE7\u627F\u7236\u7EA7\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u3002",paraId:165,tocIndex:31},{value:"rem \u662F\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20\uFF08\u76F8\u5BF9\u4E8E html \u5143\u7D20\uFF09",paraId:164,tocIndex:31},{value:"gulp/grunt \u662F\u4E00\u79CD\u80FD\u591F\u4F18\u5316\u524D\u7AEF\u7684\u5F00\u53D1\u7684\u6D41\u7A0B\u7684\u5DE5\u5177\uFF0C\u800C webpack \u662F\u4E00\u79CD\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4E0D\u8FC7 webpack \u7684\u4F18\u70B9\u662F\u5728\u5F88\u591A\u573A\u666F\u4E0B\u53EF\u4EE5\u4EE3\u66FF gulp \u6216 grunt \u7C7B\u7684\u5DE5\u5177\u3002",paraId:166,tocIndex:32},{value:"Grunt \u548C Gulp \u7684\u5DE5\u4F5C\u65B9\u5F0F\u662F\uFF1A\u5728\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6307\u660E\u5BF9\u67D0\u4E9B\u6587\u4EF6\u8FDB\u884C\u7C7B\u4F3C\u7F16\u8BD1\uFF0C\u7EC4\u5408\uFF0C\u538B\u7F29\u7B49\u4EFB\u52A1\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u5DE5\u5177\u4E4B\u540E\u53EF\u4EE5\u81EA\u52A8\u66FF\u4F60\u5B8C\u6210\u8FD9\u4E9B\u4EFB\u52A1\u3002",paraId:166,tocIndex:32},{value:"Webpack \u7684\u5DE5\u4F5C\u65B9\u5F0F\u662F\uFF1A\u628A\u4F60\u7684\u9879\u76EE\u5F53\u505A\u4E00\u4E2A\u6574\u4F53\uFF0C\u901A\u8FC7\u4E00\u4E2A\u7ED9\u5B9A\u7684\u4E3B\u6587\u4EF6\uFF08\u5982\uFF1Aindex.js\uFF09\uFF0CWebpack \u5C06\u4ECE\u8FD9\u4E2A\u6587\u4EF6\u5F00\u59CB\u627E\u5230\u4F60\u7684\u9879\u76EE\u7684\u6240\u6709\u4F9D\u8D56\u6587\u4EF6\uFF0C\u4F7F\u7528 loaders \u5904\u7406\u5B83\u4EEC\uFF0C\u6700\u540E\u6253\u5305\u4E3A\u4E00\u4E2A\uFF08\u6216\u591A\u4E2A\uFF09\u6D4F\u89C8\u5668\u53EF\u8BC6\u522B\u7684 JavaScript \u6587\u4EF6\u3002",paraId:166,tocIndex:32},{value:"loader \u662F\u8FD0\u884C\u5728 NodeJS \u4E2D\uFF0C\u53EF\u4EE5\u7528 options \u5BF9\u8C61\u8FDB\u884C\u914D\u7F6E\u3002plugin \u53EF\u4EE5\u4E3A loader \u5E26\u6765\u66F4\u591A\u7279\u6027\u3002loader \u53EF\u4EE5\u8FDB\u884C\u538B\u7F29\uFF0C\u6253\u5305\uFF0C\u8BED\u8A00\u7FFB\u8BD1\u7B49\u7B49\u3002",paraId:167,tocIndex:33},{value:"loader \u4ECE\u6A21\u677F\u8DEF\u5F84\u89E3\u6790\uFF0Cnpm install node_modules\u3002\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49 loader\uFF0C\u547D\u540D XXX-loader\u3002",paraId:168,tocIndex:33},{value:"\u3010Plugin\u3011\uFF1A\u76EE\u7684\u5728\u4E8E\u89E3\u51B3 loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B\uFF0C\u4ECE\u6253\u5305\u4F18\u5316\u548C\u538B\u7F29\uFF0C\u5230\u91CD\u65B0\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\uFF0C\u529F\u80FD\u5F3A\u5927\u5230\u53EF\u4EE5\u7528\u6765\u5904\u7406\u5404\u79CD\u5404\u6837\u7684\u4EFB\u52A1\u3002",paraId:169,tocIndex:33},{value:`$router \u662F VueRouter \u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u901A\u8FC7 Vue.use(VueRouter)\u548C Vu \u6784\u9020\u51FD\u6570\u5F97\u5230\u4E00\u4E2A router \u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u662F\u4E00\u4E2A\u5168\u5C40\u7684\u5BF9\u8C61\uFF0C\u4ED6\u5305\u542B\u4E86\u6240\u6709\u7684\u8DEF\u7531\uFF0C\u5305\u542B\u4E86\u8BB8\u591A\u5173\u952E\u7684\u5BF9\u8C61\u548C\u5C5E\u6027\u3002
  `,paraId:170,tocIndex:34},{value:"$router.push({path:'home'})\uFF0C\u672C\u8D28\u662F\u5411 history \u6808\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u8DEF\u7531\uFF0C\u5728\u6211\u4EEC\u770B\u6765\u662F\u5207\u6362\u8DEF\u7531\uFF0C\u4F46\u672C\u8D28\u662F\u5728\u6DFB\u52A0\u4E00\u4E2A history \u8BB0\u5F55",paraId:171,tocIndex:34},{value:"$router.replace({path:'home'})\uFF0C//\u66FF\u6362\u8DEF\u7531\uFF0C\u6CA1\u6709\u5386\u53F2\u8BB0\u5F55",paraId:171,tocIndex:34},{value:"$route\u662F\u4E00\u4E2A\u8DF3\u8F6C\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u4E2A\u8DEF\u7531\u90FD\u4F1A\u6709\u4E00\u4E2A$route \u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A\u5C40\u90E8\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BF9\u5E94\u7684 name\uFF0Cpath\uFF0Cparams\uFF0Cquery \u7B49",paraId:170,tocIndex:34},{value:"10 \u4E2A",paraId:172,tocIndex:35},{value:"UDP \u4E09\u4E2A\u7279\u70B9\uFF08\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u4E0D\u9700\u8981\u9A8C\u8BC1\u6570\u636E\u62A5\u6587\uFF0C\u4E0D\u9700\u8981\u6D41\u91CF\u63A7\u5236\uFF0C\u53EA\u4F1A\u628A\u60F3\u53D1\u7684\u6570\u636E\u62A5\u6587",paraId:173,tocIndex:36},{value:"\u4E00\u80A1\u8111\u7684\u4E22\u7ED9\u5BF9\u7AEF \uFF09",paraId:174,tocIndex:36},{value:"\u9762\u5411\u65E0\u8FDE\u63A5",paraId:175,tocIndex:36},{value:"\u4E0D\u53EF\u9760\u6027",paraId:176,tocIndex:36},{value:"\u9AD8\u6548\uFF08\u4F8B\u5982\u76F4\u64AD\uFF09",paraId:177,tocIndex:36},{value:"TCP \u8FDE\u63A5\u65F6\u4E09\u6B21\u63E1\u624B\u3001\u65AD\u5F00\u65F6\u56DB\u6B21\u63E1\u624B",paraId:178,tocIndex:36},{value:"nodejs \u4E2D\u7684\u6D41\u662F\u53EF\u8BFB\u7684\u3001\u6216\u53EF\u5199\u7684\u3001\u6216\u53EF\u8BFB\u53EF\u5199\u7684\u3002\u5E76\u4E14\u6D41\u7EE7\u627F\u4E86 EventEmitter\u3002\u56E0\u6B64\u6240\u6709\u7684\u6D41\u90FD\u662F EventEmitter \u7684\u5B9E\u5217\u3002",paraId:179,tocIndex:37},{value:`Node.js \u4E2D\u6709\u56DB\u79CD\u57FA\u672C\u7684\u6D41\u7C7B\u578B\uFF0C\u5982\u4E0B\uFF1A
  `,paraId:179,tocIndex:37},{value:"Readable--\u53EF\u8BFB\u7684\u6D41(\u6BD4\u5982 fs.createReadStream())",paraId:180,tocIndex:37},{value:"Writable--\u53EF\u5199\u7684\u6D41(\u6BD4\u5982 fs.createWriteStream())",paraId:180,tocIndex:37},{value:"Duplex--\u53EF\u8BFB\u5199\u7684\u6D41",paraId:180,tocIndex:37},{value:"Transform---\u5728\u8BFB\u5199\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4FEE\u6539\u548C\u53D8\u6362\u6570\u636E\u7684 Duplex \u6D41",paraId:180,tocIndex:37},{value:"render----js \u7684\u65B9\u5F0F\u505A\u6E32\u67D3",paraId:181,tocIndex:38},{value:"render\uFF08\u63D0\u4F9B\uFF09\u662F\u4E00\u79CD\u7F16\u8BD1\u65B9\u5F0F",paraId:182,tocIndex:38},{value:"render \u91CC\u6709\u4E00\u4E2A\u51FD\u6570 h\uFF0C\u8FD9\u4E2A h \u7684\u4F5C\u7528\u662F\u5C06\u5355\u6587\u4EF6\u7EC4\u4EF6\u8FDB\u884C\u865A\u62DF DOM \u7684\u521B\u5EFA\uFF0C\u7136\u540E\u518D\u901A\u8FC7 render \u8FDB\u884C\u89E3\u6790\u3002",paraId:182,tocIndex:38},{value:"h \u5C31\u662F createElement()\u65B9\u6CD5\uFF1AcreateElement(\u6807\u7B7E\u540D\u79F0,\u5C5E\u6027\u914D\u7F6E,children)",paraId:182,tocIndex:38},{value:"template----html \u7684\u65B9\u5F0F\u505A\u6E32\u67D3",paraId:183,tocIndex:38},{value:"template \u4E5F\u662F\u4E00\u79CD\u7F16\u8BD1\u65B9\u5F0F\uFF0C\u4F46\u662F template \u6700\u7EC8\u8FD8\u662F\u8981\u901A\u8FC7 render \u7684\u65B9\u5F0F\u518D\u6B21\u8FDB\u884C\u7F16\u8BD1\u3002",paraId:184,tocIndex:38},{value:"XSS",paraId:185,tocIndex:39},{value:"XSS\uFF08Cross Site Scripting\uFF09:==\u8DE8\u57DF\u811A\u672C\u653B\u51FB==\u3002",paraId:186,tocIndex:39},{value:"XSS \u7B80\u5355\u70B9\u6765\u8BF4\uFF0C\u5C31\u662F\u653B\u51FB\u8005\u60F3\u5C3D\u4E00\u5207\u529E\u6CD5\u5C06\u53EF\u4EE5\u6267\u884C\u7684\u4EE3\u7801\u6CE8\u5165\u5230\u7F51\u9875\u4E2D\u3002",paraId:187,tocIndex:39},{value:"XSS \u53EF\u4EE5\u5206\u4E3A\u591A\u79CD\u7C7B\u578B\uFF0C\u4F46\u662F\u603B\u4F53\u4E0A\u6211\u8BA4\u4E3A\u5206\u4E3A\u4E24\u7C7B\uFF1A\u6301\u4E45\u578B\u548C\u975E\u6301\u4E45\u578B\u3002",paraId:188,tocIndex:39},{value:"\u6301\u4E45\u578B\u4E5F\u5C31\u662F\u653B\u51FB\u7684\u4EE3\u7801\u88AB\u670D\u52A1\u7AEF\u5199\u5165\u8FDB\u6570\u636E\u5E93\u4E2D\uFF0C\u8FD9\u79CD\u653B\u51FB\u5371\u5BB3\u6027\u5F88\u5927\uFF0C\u56E0\u4E3A\u5982\u679C\u7F51\u7AD9\u8BBF\u95EE\u91CF\u5F88\u5927\u7684\u8BDD\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u5927\u91CF\u6B63\u5E38\u8BBF\u95EE\u9875\u9762\u7684\u7528\u6237\u90FD\u53D7\u5230\u653B\u51FB\u3002",paraId:189,tocIndex:39},{value:"XSS \u653B\u51FB\u7684\u6838\u5FC3\u539F\u7406\u662F\uFF1A\u4E0D\u9700\u8981\u4F60\u505A\u4EFB\u4F55\u7684\u767B\u5F55\u8BA4\u8BC1\uFF0C\u5B83\u4F1A\u901A\u8FC7\u5408\u6CD5\u7684\u64CD\u4F5C\uFF08\u6BD4\u5982\u5728 url \u4E2D\u8F93\u5165\u3001\u5728\u8BC4\u8BBA\u6846\u4E2D\u8F93\u5165\uFF09\uFF0C\u5411\u4F60\u7684\u9875\u9762\u6CE8\u5165\u811A\u672C\uFF08\u53EF\u80FD\u662F js\u3001hmtl \u4EE3\u7801\u5757\u7B49\uFF09\u3002",paraId:190,tocIndex:39},{value:"CSRF",paraId:191,tocIndex:39},{value:"CSRF \u4E2D\u6587\u540D\u4E3A==\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020==\u3002\u539F\u7406\u5C31\u662F\u653B\u51FB\u8005\u6784\u9020\u51FA\u4E00\u4E2A\u540E\u7AEF\u8BF7\u6C42\u5730\u5740\uFF0C\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u6216\u8005\u901A\u8FC7\u67D0\u4E9B\u9014\u5F84\u81EA\u52A8\u53D1\u8D77\u8BF7\u6C42\u3002\u5982\u679C\u7528\u6237\u662F\u5728\u767B\u5F55\u72B6\u6001\u4E0B\u7684\u8BDD\uFF0C\u540E\u7AEF\u5C31\u4EE5\u4E3A\u662F\u7528\u6237\u5728\u64CD\u4F5C\uFF0C\u4ECE\u800C\u8FDB\u884C\u76F8\u5E94\u7684\u903B\u8F91\u3002",paraId:192,tocIndex:39},{value:"\u6D4F\u89C8\u5668\u67E5\u627E\u57DF\u540D\u5BF9\u5E94\u7684 IP \u5730\u5740\uFF08\u57DF\u540D\u89E3\u6790\u7684\u8FC7\u7A0B\uFF0C\u5148\u8FDB\u884C\u7F13\u5B58\u7684\u67E5\u770B\uFF09",paraId:193,tocIndex:40},{value:"\u5148\u68C0\u67E5\u81EA\u5DF1\u672C\u5730\u7684 hosts \u6587\u4EF6\u662F\u5426\u6709\u8FD9\u4E2A\u7F51\u5740\u6620\u5C04\u5173\u7CFB",paraId:194,tocIndex:40},{value:"\u67E5\u627E\u672C\u5730 DNS \u89E3\u6790\u5668\u7F13\u5B58",paraId:194,tocIndex:40},{value:"\u4F1A\u627E TCP/ip \u53C2\u6570\u4E2D\u8BBE\u7F6E\u7684\u9996\u9009 DNS \u670D\u52A1\u5668",paraId:194,tocIndex:40},{value:"\u6D4F\u89C8\u5668\u6839\u636E IP \u5730\u5740\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB socket \u8FDE\u63A5",paraId:195,tocIndex:40},{value:"\u5728\u53D1\u9001 http \u8BF7\u6C42\u524D\uFF0C\u9700\u8981\u57DF\u540D\u89E3\u6790(DNS \u89E3\u6790)\uFF0C\u89E3\u6790\u83B7\u53D6\u76F8\u5E94\u7684 IP \u5730\u5740",paraId:196,tocIndex:40},{value:"\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u8D77 tcp \u8FDE\u63A5\uFF0C\u4E0E\u6D4F\u89C8\u5668\u5EFA\u7ACB tcp \u4E09\u6B21\u63E1\u624B",paraId:196,tocIndex:40},{value:"\u63E1\u624B\u6210\u529F\u540E\uFF0C\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u9001 http \u8BF7\u6C42\uFF0C\u8BF7\u6C42\u6570\u636E\u5305",paraId:196,tocIndex:40},{value:"\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u901A\u4FE1\uFF1A \u6D4F\u89C8\u5668\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42",paraId:197,tocIndex:40},{value:"\u670D\u52A1\u5668\u5904\u7406\u6536\u5230\u7684\u8BF7\u6C42\uFF0C\u5C06\u6570\u636E\u8FD4\u56DE\u81F3\u6D4F\u89C8\u5668",paraId:198,tocIndex:40},{value:"\u6D4F\u89C8\u5668\u6536\u5230 HTTP \u54CD\u5E94",paraId:198,tocIndex:40},{value:"\u8BFB\u53D6\u9875\u9762\u5185\u5BB9\uFF0C\u6D4F\u89C8\u5668\u6E32\u67D3\uFF0C\u89E3\u6790 html \u6E90\u7801",paraId:198,tocIndex:40},{value:"\u751F\u6210 Dom \u6811\u3001\u89E3\u6790 css \u6837\u5F0F\u3001js \u4EA4\u4E92",paraId:198,tocIndex:40},{value:"\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4EA4\u4E92",paraId:198,tocIndex:40},{value:"ajax \u67E5\u8BE2",paraId:198,tocIndex:40},{value:"\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u65AD\u5F00\u8FDE\u63A5",paraId:199,tocIndex:40},{value:"Js \u4E2D\uFF0C\u6709\u4E24\u7C7B\u4EFB\u52A1\u961F\u5217\uFF1A\u5B8F\u4EFB\u52A1\u961F\u5217\uFF08macro tasks\uFF09\u548C\u5FAE\u4EFB\u52A1\u961F\u5217\uFF08micro tasks\uFF09\u3002==\u5B8F\u4EFB\u52A1\u961F\u5217\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u5FAE\u4EFB\u52A1\u961F\u5217\u53EA\u6709\u4E00\u4E2A==",paraId:200,tocIndex:41},{value:"\u5B8F\u4EFB\u52A1\uFF1Ascript\uFF08\u5168\u5C40\u4EFB\u52A1\uFF09, setTimeout, setInterval, setImmediate, I/O, UI rendering.",paraId:200,tocIndex:41},{value:"\u5FAE\u4EFB\u52A1\uFF1Aprocess.nextTick \uFF08node.js \u4E2D\u8FDB\u7A0B\u76F8\u5173\u7684\u5BF9\u8C61\uFF09, Promise, Object.observer, MutationObserver\u3002",paraId:200,tocIndex:41},{value:"Vue.nextTick",paraId:201,tocIndex:42},{value:"\u7528\u4E8E==\u5EF6\u8FDF\u6267\u884C==\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5B83\u63A5\u53D7 2 \u4E2A\u53C2\u6570\uFF08\u56DE\u8C03\u51FD\u6570\u548C\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u56DE\u8C03\u51FD\u6570\uFF0C\u90A3\u4E48\u5C06\u8FD4\u56DE",paraId:201,tocIndex:42},{value:"promise",paraId:201,tocIndex:42},{value:"\u5BF9\u8C61\u3002",paraId:201,tocIndex:42},{value:"\u628A\u6A21\u677F\u7F16\u8BD1\u4E3A render \u51FD\u6570",paraId:202,tocIndex:43},{value:"\u5B9E\u4F8B\u8FDB\u884C\u6302\u8F7D, \u6839\u636E\u6839\u8282\u70B9 render \u51FD\u6570\u7684\u8C03\u7528\uFF0C\u9012\u5F52\u7684\u751F\u6210\u865A\u62DF dom",paraId:202,tocIndex:43},{value:"\u5BF9\u6BD4\u865A\u62DF dom\uFF0C\u6E32\u67D3\u5230\u771F\u5B9E dom",paraId:202,tocIndex:43},{value:"\u7EC4\u4EF6\u5185\u90E8 data \u53D1\u751F\u53D8\u5316\uFF0C\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u5F15\u7528 data \u4F5C\u4E3A props \u91CD\u65B0\u8C03\u7528 render \u51FD\u6570\uFF0C\u751F\u6210\u865A\u62DF dom, \u8FD4\u56DE\u5230\u6B65\u9AA4 3",paraId:202,tocIndex:43},{value:"\u53EF\u4EE5\u628A\u6267\u884C\u6808\u8BA4\u4E3A\u662F\u4E00\u4E2A\u5B58\u50A8\u51FD\u6570\u8C03\u7528\u7684\u6808\u7ED3\u6784\uFF0C\u9075\u5FAA==\u5148\u8FDB\u540E\u51FA==\u7684\u539F\u5219\u3002\u6267\u884C JS \u4EE3\u7801\u7684\u65F6\u5019\u5176\u5B9E\u5C31\u662F\u5F80\u6267\u884C\u6808\u4E2D\u653E\u5165\u51FD\u6570\u3002",paraId:203,tocIndex:44},{value:"\u5176\u5B9E\u5F53\u9047\u5230\u5F02\u6B65\u7684\u4EE3\u7801\u65F6\uFF0C\u4F1A\u88AB\u6302\u8D77\u5E76\u5728\u9700\u8981\u6267\u884C\u7684\u65F6\u5019\u52A0\u5165\u5230 Task\uFF08\u6709\u591A\u79CD Task\uFF09 \u961F\u5217\u4E2D\u3002\u4E00\u65E6\u6267\u884C\u6808\u4E3A\u7A7A\uFF0CEvent Loop \u5C31\u4F1A\u4ECE Task \u961F\u5217\u4E2D\u62FF\u51FA\u9700\u8981\u6267\u884C\u7684\u4EE3\u7801\u5E76\u653E\u5165\u6267\u884C\u6808\u4E2D\u6267\u884C\uFF0C\u6240\u4EE5\u672C\u8D28\u4E0A\u6765\u8BF4 JS \u4E2D\u7684\u5F02\u6B65\u8FD8\u662F\u540C\u6B65\u884C\u4E3A\u3002",paraId:203,tocIndex:44},{value:"==Event Loop \u7684\u6267\u884C\u987A\u5E8F==",paraId:204,tocIndex:45},{value:"\u9996\u5148\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8FD9\u5C5E\u4E8E\u5B8F\u4EFB\u52A1",paraId:205,tocIndex:45},{value:"\u5F53\u6267\u884C\u5B8C\u6240\u6709\u540C\u6B65\u4EE3\u7801\u540E\uFF0C\u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u67E5\u8BE2\u662F\u5426\u6709\u5F02\u6B65\u4EE3\u7801\u9700\u8981\u6267\u884C",paraId:205,tocIndex:45},{value:"\u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1",paraId:205,tocIndex:45},{value:"\u5F53\u6267\u884C\u5B8C\u6240\u6709\u5FAE\u4EFB\u52A1\u540E\uFF0C\u5982\u6709\u5FC5\u8981\u4F1A\u6E32\u67D3\u9875\u9762",paraId:205,tocIndex:45},{value:"\u7136\u540E\u5F00\u59CB\u4E0B\u4E00\u8F6E Event Loop\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F setTimeout \u4E2D\u7684\u56DE\u8C03\u51FD\u6570",paraId:205,tocIndex:45},{value:"JavaScript \u4E2D\u7684\u5185\u5B58\u7BA1\u7406\u662F\u81EA\u52A8\u6267\u884C\u7684\uFF0C\u800C\u4E14\u662F\u4E0D\u53EF\u89C1\u7684\u3002\u6211\u4EEC\u521B\u5EFA\u57FA\u672C\u7C7B\u578B\u3001\u5BF9\u8C61\u3001\u51FD\u6570\u2026\u2026\u6240\u6709\u8FD9\u4E9B\u90FD\u9700\u8981\u5185\u5B58\u3002",paraId:206,tocIndex:46},{value:"\u53EF\u8FBE\u6027",paraId:207,tocIndex:46},{value:"JavaScript \u4E2D\u5185\u5B58\u7BA1\u7406\u7684\u4E3B\u8981\u6982\u5FF5\u662F\u53EF\u8FBE\u6027\u3002",paraId:208,tocIndex:46},{value:"\u7B80\u5355\u5730\u8BF4\uFF0C\u201C\u53EF\u8FBE\u6027\u201D \u503C\u5C31\u662F\u90A3\u4E9B\u4EE5\u67D0\u79CD\u65B9\u5F0F\u53EF\u8BBF\u95EE\u6216\u53EF\u7528\u7684\u503C\uFF0C\u5B83\u4EEC\u88AB\u4FDD\u8BC1\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002",paraId:208,tocIndex:46},{value:"\u65E0\u6CD5\u8BBF\u95EE\u7684\u6570\u636E\u6A21\u5757",paraId:209,tocIndex:46},{value:"\u6709\u53EF\u80FD\u6574\u4E2A\u76F8\u4E92\u8FDE\u63A5\u7684\u5BF9\u8C61\u53D8\u5F97\u4E0D\u53EF\u8BBF\u95EE\u5E76\u4ECE\u5185\u5B58\u4E2D\u5220\u9664\u3002",paraId:210,tocIndex:46},{value:"\u4EC0\u4E48\u662F\u5783\u573E",paraId:211,tocIndex:46},{value:"\u4E00\u822C\u6765\u8BF4==\u6CA1\u6709\u88AB\u5F15\u7528\u7684\u5BF9\u8C61==\u5C31\u662F\u5783\u573E\uFF0C\u5C31\u662F\u8981\u88AB\u6E05\u9664\uFF0C \u6709\u4E2A\u4F8B\u5916\u5982\u679C\u51E0\u4E2A\u5BF9\u8C61\u5F15\u7528\u5F62\u6210\u4E00\u4E2A\u73AF\uFF0C\u4E92\u76F8\u5F15\u7528\uFF0C\u4F46\u6839\u8BBF\u95EE\u4E0D\u5230\u5B83\u4EEC\uFF0C\u8FD9\u51E0\u4E2A\u5BF9\u8C61\u4E5F\u662F\u5783\u573E\uFF0C\u4E5F\u8981\u88AB\u6E05\u9664\u3002",paraId:212,tocIndex:46},{value:"\u5982\u4F55\u68C0\u5783\u573E",paraId:213,tocIndex:46},{value:"\u4E00\u79CD\u7B97\u6CD5\u662F\u6807\u8BB0 ",paraId:214,tocIndex:46},{value:"\u6807\u8BB0-\u6E05\u9664",paraId:214,tocIndex:46},{value:" \u7B97\u6CD5\u3002",paraId:214,tocIndex:46},{value:`\u8BBE\u8BA1\u539F\u5219
  `,paraId:215,tocIndex:47},{value:`\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF08SRP\uFF09
  `,paraId:216,tocIndex:47},{value:"\u4E00\u4E2A\u5BF9\u8C61\u6216\u65B9\u6CD5\u53EA\u505A\u4E00\u4EF6\u4E8B\u60C5\u3002\u5982\u679C\u4E00\u4E2A\u65B9\u6CD5\u627F\u62C5\u4E86\u8FC7\u591A\u7684\u804C\u8D23\uFF0C\u90A3\u4E48\u5728\u9700\u6C42\u7684\u53D8\u8FC1\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u6539\u5199\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53EF\u80FD\u6027\u5C31\u8D8A\u5927\u3002\u5E94\u8BE5\u628A\u5BF9\u8C61\u6216\u65B9\u6CD5\u5212\u5206\u6210\u8F83\u5C0F\u7684\u7C92\u5EA6\u3002",paraId:217,tocIndex:47},{value:`\u6700\u5C11\u77E5\u8BC6\u539F\u5219\uFF08LKP\uFF09
  `,paraId:216,tocIndex:47},{value:"\u4E00\u4E2A\u8F6F\u4EF6\u5B9E\u4F53\u5E94\u5F53 \u5C3D\u53EF\u80FD\u5C11\u5730\u4E0E\u5176\u4ED6\u5B9E\u4F53\u53D1\u751F\u76F8\u4E92\u4F5C\u7528 \u3002",paraId:218,tocIndex:47},{value:"\u5E94\u5F53\u5C3D\u91CF\u51CF\u5C11\u5BF9\u8C61\u4E4B\u95F4\u7684\u4EA4\u4E92\u3002\u5982\u679C\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u4E0D\u5FC5\u5F7C\u6B64\u76F4\u63A5\u901A\u4FE1\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u5C31\u4E0D\u8981\u53D1\u751F\u76F4\u63A5\u7684 \u76F8\u4E92\u8054\u7CFB\uFF0C\u53EF\u4EE5\u8F6C\u4EA4\u7ED9\u7B2C\u4E09\u65B9\u8FDB\u884C\u5904\u7406\u3002",paraId:218,tocIndex:47},{value:`\u5F00\u653E-\u5C01\u95ED\u539F\u5219\uFF08OCP\uFF09
  `,paraId:216,tocIndex:47},{value:"\u8F6F\u4EF6\u5B9E\u4F53\uFF08\u7C7B\u3001\u6A21\u5757\u3001\u51FD\u6570\uFF09\u7B49\u5E94\u8BE5\u662F\u53EF\u4EE5 \u6269\u5C55\u7684\uFF0C\u4F46\u662F\u4E0D\u53EF\u4FEE\u6539\u3002",paraId:219,tocIndex:47},{value:"\u5F53\u9700\u8981\u6539\u53D8\u4E00\u4E2A\u7A0B\u5E8F\u7684\u529F\u80FD\u6216\u8005\u7ED9\u8FD9\u4E2A\u7A0B\u5E8F\u589E\u52A0\u65B0\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528\u589E\u52A0\u4EE3\u7801\u7684\u65B9\u5F0F\uFF0C\u5C3D\u91CF\u907F\u514D\u6539\u52A8\u7A0B\u5E8F\u7684\u6E90\u4EE3\u7801\uFF0C\u9632\u6B62\u5F71\u54CD\u539F\u7CFB\u7EDF\u7684\u7A33\u5B9A\u3002",paraId:219,tocIndex:47},{value:"\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u8BED\u6CD5\u7CD6(syntactic sugar)\u662F\u6307\u7F16\u7A0B\u8BED\u8A00\u4E2D\u53EF\u4EE5\u66F4\u5BB9\u6613\u7684\u8868\u8FBE\u4E00\u4E2A\u64CD\u4F5C\u7684\u8BED\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u7A0B\u5E8F\u5458\u66F4\u52A0\u5BB9\u6613\u53BB\u4F7F\u7528\u8FD9\u95E8\u8BED\u8A00\uFF1A\u64CD\u4F5C\u53EF\u4EE5\u53D8\u5F97\u66F4\u52A0\u6E05\u6670\u3001\u65B9\u4FBF\uFF0C\u6216\u8005\u66F4\u52A0\u7B26\u5408\u7A0B\u5E8F\u5458\u7684\u7F16\u7A0B\u4E60\u60EF\u3002",paraId:220,tocIndex:48},{value:"\uFF01important \u884C\u5185\u6837\u5F0F id \u7C7B\u9009\u62E9\u5668 \u5143\u7D20\u9009\u62E9\u5668 \u7EE7\u627F\u6216\u8005*",paraId:221,tocIndex:49},{value:"\u5B57\u4F53\u5C5E\u6027 font \uFF0Cfont-family\uFF0Cfont-weight\uFF0Cfont-style\uFF0Cfon",paraId:222,tocIndex:50},{value:`
  \u6587\u672C\u7CFB\u5217`,paraId:222,tocIndex:50},{value:"\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002",paraId:223,tocIndex:52}],Dt={},Lt={title:"\u5E38\u89C1\u95EE\u9898",toc:"menu",filename:"docs/column/questions/index.md",order:2,nav:{title:"\u4E13\u680F",order:3}},dt=[{id:"\u53F2\u4E0A\u6700\u4F73\u5F02\u5E38\u5904\u7406",depth:2,title:"\u53F2\u4E0A\u201C\u6700\u4F73\u201D\u5F02\u5E38\u5904\u7406"},{id:"\u9875\u9762\u4E2D-js-\u52A0\u8F7D\u5931\u8D25",depth:2,title:"\u9875\u9762\u4E2D js \u52A0\u8F7D\u5931\u8D25"}],ta=[{value:"try {\n  // any code\n} catch (e) {\n  location.href = `https://www.baidu.com/s?wd=${e.message}`;\n  // location.href = `https://stackoverflow.com/search?q=js+${e.message}`;\n}\n",paraId:0,tocIndex:0},{value:`// \u6CE8\u610F\u5C06\u6B64\u6BB5\u4EE3\u7801\u5199\u5728\u5934\u90E8\u7684script\u4E2D\uFF0C\u4F18\u5148\u6267\u884C
  // 1.\u4F55\u65F6\u91CD\u8BD5
  // 2.\u5982\u4F55\u91CD\u8BD5

  // \u9700\u8981\u66FF\u6362\u7684\u57DF\u540D
  const domains = ['https://aaa.com', 'https://bbb.com', 'https://ccc.com'];
  // \u6700\u5927\u91CD\u8BD5\u6B21\u6570
  const maxRetry = 3;
  // \u67D0\u4E2Ajs\u5DF2\u7ECF\u91CD\u8BD5\u7684\u4FE1\u606F\uFF08\u4E0B\u6807\u53CA\u6B21\u6570\uFF09
  const retryInfo = {};
  window.addEventListener(
    'error',
    (e) => {
      const tag = e.target;
      if (tag.tagName === 'SCRIPT' && !(e instanceof ErrorEvent)) {
        // script\u52A0\u8F7D\u5931\u8D25
        const url = new URL(tag.src);
        if (!retryInfo[url.pathname]) {
          // \u5224\u65AD\u662F\u5426\u91CD\u8BD5\u8FC7
          retryInfo[url.pathname] = {
            times: 0, // \u91CD\u8BD5\u7684\u6B21\u6570
            nextIndex: 0, // \u4E0B\u4E00\u6B21\u91CD\u8BD5\u7684\u57DF\u540D\u4E0B\u6807
          };
        }
        const info = retryInfo[url.pathname];
        // \u963B\u585E\u9875\u9762\u540E\u7EED\u7684\u52A0\u8F7D
        document.write(\`<script src="\${url.toString()}">\\<\\/script>\`);

        // const script = document.createElement('script')
        // url.host = domains[info.nextIndex]
        // script.src = url.toString()
        // document.body.insertBefore(script, tag)

        // \u91CD\u8BD5\u6B21\u6570\u53CA\u4E0B\u6807\u66F4\u6539
        info.times++;
        info.nextIndex = (info.nextIndex + 1) % domains.length;
      }
    },
    true,
  );
  `,paraId:1,tocIndex:1}],P2={},r2={title:"SEO",toc:"menu",filename:"docs/column/seo/index.en-US.md",order:1,nav:{title:"Column",order:3},description:"Improving the loading speed of the first screen is the most important link in front-end performance optimization. Here, the author sorted out some conventional and effective suggestions for the first screen optimization."},v2=[{id:"front-end-performance-optimization",depth:2,title:"Front-end performance optimization"},{id:"route-lazy-loading",depth:2,title:"Route lazy loading"},{id:"component-lazy-loading",depth:2,title:"Component lazy loading"},{id:"use-tree-shaking-wisely",depth:2,title:"Use Tree shaking wisely"},{id:"skeleton-screen-optimizes-white-screen-duration",depth:2,title:"Skeleton screen optimizes white screen duration"},{id:"long-list-virtual-scroll",depth:2,title:"Long list virtual scroll"},{id:"web-worker-optimizes-long-tasks",depth:2,title:"Web Worker optimizes long tasks"},{id:"requestanimationframe",depth:2,title:"requestAnimationFrame"},{id:"6-loading-modes-of-js",depth:2,title:"6 loading modes of js"},{id:"optimization-of-pictures",depth:2,title:"Optimization of pictures"},{id:"optimization-summary",depth:2,title:"Optimization Summary"},{id:"reference-articles",depth:2,title:"Reference articles"}],Nt=[{value:"Improving the loading speed of the first screen is the most important link in front-end performance optimization. Here, the author sorted out some conventional and effective suggestions for the first screen optimization.",paraId:0,tocIndex:0},{value:"Objective: To verify the effectiveness of the scheme and to understand and master its principle by comparing the performance changes before and after optimization.",paraId:1,tocIndex:0},{value:"SPA project,One route corresponds to one page. If no processing is done, all pages will be packaged into a file after the project is packaged,When the user opens the home page,",paraId:2,tocIndex:1},{value:"all resources are loaded at once",paraId:2,tocIndex:1},{value:",the homepage is slow to load and the user experience is reduced.",paraId:2,tocIndex:1},{value:"Change all routes to lazy loading:",paraId:3,tocIndex:1},{value:`const routes = [
    {
      path: '/',
      name: 'Home',
      // Routing level code decomposition
      // This generates a separate block for the route(home.[hash].js)
      // It is lazily loaded when accessing the route.
      component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
    },
  ];
  `,paraId:4,tocIndex:1},{value:"After repacking ",paraId:5,tocIndex:1},{value:"home.js",paraId:5,tocIndex:1},{value:" and ",paraId:5,tocIndex:1},{value:"app.js",paraId:5,tocIndex:1},{value:". The file size will change,lazy route loading greatly compresses the home page resources of a project and reduces the white screen time of the home page.",paraId:5,tocIndex:1},{value:"Principle of lazy route loading:",paraId:6,tocIndex:1},{value:"Implementation of the lazy loading premise:ES6 Load modules dynamically\u2014\u2014",paraId:7,tocIndex:1},{value:"import()",paraId:7,tocIndex:1},{value:",where import() invoked,used as the starting point of the separated module,that is, the requested module and all the submodules it references,will be separated into a separate chunk.",paraId:7,tocIndex:1},{value:"\u2014\u2014From",paraId:8,tocIndex:1},{value:"\u300Awebpack\u2014\u2014\u6A21\u5757\u65B9\u6CD5\u300B",paraId:8,tocIndex:1},{value:" - ",paraId:8,tocIndex:1},{value:"import()",paraId:8,tocIndex:1},{value:"To implement lazy loading, you must first separate the submodules for lazy loading and package them into a separate file.",paraId:9,tocIndex:1},{value:"webpackChunkName",paraId:10,tocIndex:1},{value:" : webpack sets the name of the code block when it splits the library code (lodash) asynchronously during packaging. webpack combines any asynchronous module with the same block name into the same asynchronous block.",paraId:10,tocIndex:1},{value:"In addition to lazy loading of routes, lazy loading of components also plays an important role in many scenarios.",paraId:11,tocIndex:2},{value:"Take for example:",paraId:12,tocIndex:2},{value:"home page and about page,all import dialogInfo dialog component,the box is not loaded as soon as you enter the page, but needs to be manually triggered by the user before being displayed.",paraId:13,tocIndex:2},{value:"home page sample:",paraId:14,tocIndex:2},{value:`<template>
    <div class="homeView">
      <p>home page</p>
      <el-button @click="dialogVisible = !dialogVisible">Open dialog</el-button>
      <dialogInfo v-if="dialogVisible" />
    </div>
  </template>
  <script>
    import dialogInfo from '@/components/dialogInfo';
    export default {
      name: 'homeView',
      components: {
        dialogInfo,
      },
    };
  <\/script>
  `,paraId:15,tocIndex:2},{value:"After the project is packaged, home.js and about.js includes the code for the pop-up component(search dialogInfo component in dist).",paraId:16,tocIndex:2},{value:"When the user opens the home page, all of the page's resources are loaded at once,",paraId:17,tocIndex:2},{value:"what is expected is that the user triggers the button and then loads the resources of the pop-up component",paraId:17,tocIndex:2},{value:",in this scenario, lazy loading is a good way to introduce.",paraId:17,tocIndex:2},{value:"Lazy loading of the pop-up component:",paraId:18,tocIndex:2},{value:`<script>
  const dialogInfo = () => import(/* webpackChunkName: "dialogInfo" */ '@/components/dialogInfo');
  export default {
    name: 'homeView',
    components: {
      dialogInfo
    }
  }
  <\/script>
  `,paraId:19,tocIndex:2},{value:"After repacking, there is no code for the pop-up component in home.js and about.js,this component is packaged independently as dialogInfo.js,",paraId:20,tocIndex:2},{value:"when the user clicks the button, it loads dialogInfo.js and dialogInfo.css",paraId:20,tocIndex:2},{value:".",paraId:20,tocIndex:2},{value:"Ultimately, the project's home page resources are further reduced by using component routing laziness.",paraId:21,tocIndex:2},{value:"Usage scenario of component lazy loading",paraId:22,tocIndex:2},{value:"Sometimes it is not good to split resources too finely, which can lead to an increase in http requests from the browser.",paraId:23,tocIndex:2},{value:"Three scenarios for lazy component loading are summarized:",paraId:24,tocIndex:2},{value:"1\uFF09The file size of js is large,if the page opens slowly, you can split resources by lazy component loading and use browsers to download resources in parallel to improve the download speed(such as the home page).",paraId:25,tocIndex:2},{value:"2\uFF09This component is not displayed as soon as it enters the page, but only triggered under certain conditions (such as a pop-up component).",paraId:26,tocIndex:2},{value:"3\uFF09The component reusability is high, many pages have been introduced, using the component lazy loading pull out of the component, on the one hand can make good use of cache,it also reduces the file size of js(such as table components, graphic components, and so on).",paraId:27,tocIndex:2},{value:"How Tree shaking works:Eliminate unnecessary js code and reduce code volume.",paraId:28,tocIndex:3},{value:"Take for example:",paraId:29,tocIndex:3},{value:`// util.js
  export function targetType(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
  }
  export function deepClone(target) {
    return JSON.parse(JSON.stringify(target));
  }
  `,paraId:30,tocIndex:3},{value:"Only used targetType in the project,but not used deepClone,after the project is packaged,deepClone will not be packaged into the project.",paraId:31,tocIndex:3},{value:"tree-shaking principle:",paraId:32,tocIndex:3},{value:"Depending on the modular nature of ES6,ES6 module dependencies are determined,independent of state at run time, reliable static analysis,that's the basis of tree-shaking.",paraId:33,tocIndex:3},{value:"Static analysis is the ability to literally analyze code without having to execute it.The previous modularity,For example, Common.js is dynamically loaded,it is only after execution that we know what module is being referenced. It cannot be optimized using static analysis. It is based on this that tree-shaking is possible.",paraId:34,tocIndex:3},{value:"Tree shaking is not a panacea",paraId:35,tocIndex:3},{value:"That's not to say that all useless code can be eliminated. It is still the code above, when written tree-shaking, that stops working.",paraId:36,tocIndex:3},{value:`// util.js
  export default {
    targetType(target) {
      return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
    },
    deepClone(target) {
      return JSON.parse(JSON.stringify(target));
    },
  };

  // \u5F15\u5165\u5E76\u4F7F\u7528
  import util from '../util';
  util.targetType(null);
  `,paraId:37,tocIndex:3},{value:"In the same way,only used targetType in the project,but not used deepClone,after the project is packaged,deepClone will be packaged into the project.",paraId:38,tocIndex:3},{value:"The reason is that export default exports an object. It cannot determine which variables of an object are not being used using static analysis. Therefore, tree-shaking only takes effect on variables exported using export.",paraId:39,tocIndex:3},{value:"That's why functional programming is becoming more and more popular. It is taking advantage of the volume of tree-shaking projects. It is also one of the reasons why vue3 is fully embracing functional programming.",paraId:40,tocIndex:3},{value:"Using a skeleton screen can shorten the white screen time and improve user experience. Most of the mainstream websites in China use skeleton screens, especially for mobile projects.",paraId:41,tocIndex:4},{value:"SPA single page application,whether vue or react,the original html was blank,you need to mount the content to the root node by loading js,side effect of this mechanism: long white screen.",paraId:42,tocIndex:4},{value:"Common skeleton screen plug-ins are based on this principle, placing the contents of the skeleton screen directly into the root node of the html file when the project is packaged.",paraId:43,tocIndex:4},{value:"Skeleton screen is really the best choice for optimizing white screen, greatly shortening white screen time,use examples are available ",paraId:44,tocIndex:4},{value:"ElementUI",paraId:44,tocIndex:4},{value:"and ",paraId:44,tocIndex:4},{value:"Vant",paraId:44,tocIndex:4},{value:".",paraId:44,tocIndex:4},{value:"There are many scenes in the home page that need to render a long list. When there are too many render strips, the rendering time will be very long, and the page will be stuck when scrolling, so the overall experience is very bad.",paraId:45,tocIndex:5},{value:"Virtual scrolling - refers to list items that render only visible areas, not visible areas",paraId:46,tocIndex:5},{value:"are not rendered,dynamically updating the viewable area while scrolling, this scheme is particularly effective when optimizing large amounts of data rendering.",paraId:46,tocIndex:5},{value:"Basic principles of virtual scrolling:",paraId:47,tocIndex:5},{value:"Calculate the total height of the list,And when triggered, the event is rolled according to scrollTop constantly update startIndex and endIndex,to intercept the corresponding element from the list data.",paraId:48,tocIndex:5},{value:"Virtual scroll plug-in",paraId:49,tocIndex:5},{value:"There are many plug-ins for virtual scrolling,such as vue-virtual-scroller\u3001vue-virtual-scroll-list\u3001react-tiny-virtual-list\u3001react-virtualized and so on.",paraId:50,tocIndex:5},{value:"Here is a brief introduction use of",paraId:51,tocIndex:5},{value:"vue-virtual-scroller",paraId:51,tocIndex:5},{value:":",paraId:51,tocIndex:5},{value:`npm install vue-virtual-scroller

  // main.js
  import VueVirtualScroller from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

  Vue.use(VueVirtualScroller)

  // \u4F7F\u7528
  <template>
    <RecycleScroller
      class="scroller"
      :items="list"
      :item-size="32"
      key-field="id"
      v-slot="{ item }">
        <div class="user"> {{ item.name }} </div>
    </RecycleScroller>
  </template>
  `,paraId:52,tocIndex:5},{value:"The plug-in mainly has RecycleScroller.vue\u3001DynamicScroller.vue components,among them RecycleScroller need the height of item is static,that is, the height of each item in the list is the same,but DynamicScroller is compatible with the case where the height of the item is dynamic.",paraId:53,tocIndex:5},{value:"Since browser rendering threads GUI and js engine threads are mutually exclusive,when there are a lot of long tasks on the page, it can cause the page to block,the interface is stuck or frames are dropped.",paraId:54,tocIndex:6},{value:"Long task to view the page:",paraId:55,tocIndex:6},{value:"Open the ",paraId:56,tocIndex:6},{value:"console",paraId:56,tocIndex:6},{value:" and select the ",paraId:56,tocIndex:6},{value:"Performance",paraId:56,tocIndex:6},{value:" tool,click the ",paraId:56,tocIndex:6},{value:"Start",paraId:56,tocIndex:6},{value:" button, expand the ",paraId:56,tocIndex:6},{value:"Main",paraId:56,tocIndex:6},{value:" option,you'll find a lot of red triangles,these are long tasks (long tasks: tasks that take longer than 50ms to execute).",paraId:56,tocIndex:6},{value:"Test experiment:",paraId:57,tocIndex:6},{value:"If you drop the following code directly into the main thread, the page will remain stuck during the calculation and cannot be operated.",paraId:58,tocIndex:6},{value:`let sum = 0;
  for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random();
    }
  }
  `,paraId:59,tocIndex:6},{value:"When the above code is executed using the Web Worker, the page can be operated normally and there is no deadlock in the calculation process:",paraId:60,tocIndex:6},{value:`// worker.js
  onmessage = function (e) {
    // onmessage gets the initial value passed in
    let sum = e.data;
    for (let i = 0; i < 200000; i++) {
      for (let i = 0; i < 10000; i++) {
        sum += Math.random();
      }
    }
    // Pass on the results of the calculation
    postMessage(sum);
  };
  `,paraId:61,tocIndex:6},{value:"See the detailed usage and case of Web Worker ",paraId:62,tocIndex:6},{value:"\u4E00\u6587\u5F7B\u5E95\u4E86\u89E3 Web Worker\uFF0C\u5341\u4E07\u3001\u767E\u4E07\u6761\u6570\u636E\u90FD\u662F\u5F1F\u5F1F \u{1F525}",paraId:62,tocIndex:6},{value:"\u3002",paraId:62,tocIndex:6},{value:"Communication duration of the Web Worker",paraId:63,tocIndex:6},{value:"It is not necessary to use a Web Worker for tasks that take longer than 50ms to execute. You need to consider the communication time first.",paraId:64,tocIndex:6},{value:"If the execution time of an operation is 100ms, but the communication time is 300ms, the Web Worker may be slower.",paraId:65,tocIndex:6},{value:"For example, if you create a web worker, the browser will load the corresponding worker.js resource.",paraId:66,tocIndex:6},{value:"If the task operation duration - communication duration > 50ms, Web Worker is recommended.",paraId:67,tocIndex:6},{value:"requestAnimationFrame",paraId:68,tocIndex:7},{value:" It is an api that browsers provide specifically for animation,it refreshes at the same rate as the monitor,making animation of the situation in setTimeout/setInterval can be solved using the api.",paraId:68,tocIndex:7},{value:"The difference between setTimeout/setInterval\u3001requestAnimationFrame:",paraId:69,tocIndex:7},{value:"Engine level",paraId:70,tocIndex:7},{value:"setTimeout/setInterval belong to js engine,requestAnimationFrame belong to GUI engine. JS engine and GUI engine is mutually exclusive,this means that the GUI engine will block the js engine's calculations when rendering.",paraId:71,tocIndex:7},{value:"2\uFF09Whether the time is accurate",paraId:72,tocIndex:7},{value:"requestAnimationFrame the refresh rate is fixed and accurate,but setTimeout/setInterval is a macro task,according to the event polling mechanism, other tasks will block or delay the execution of the js task, and the timer will be inaccurate.",paraId:73,tocIndex:7},{value:"3\uFF09Performance level",paraId:74,tocIndex:7},{value:"When pages are hidden or minimized,setTimeout/setInterval the timer still performs the animation task in the background,but use requestAnimationFrame, when the page is inactive, the screen refresh task is suspended.",paraId:75,tocIndex:7},{value:"1\uFF09Normal mode",paraId:76,tocIndex:8},{value:`<script src="index.js"><\/script>
  `,paraId:77,tocIndex:8},{value:"In this case js blocks dom rendering and the browser must wait for index.js to load and execute before it can do anything else.",paraId:78,tocIndex:8},{value:"2\uFF09async mode",paraId:79,tocIndex:8},{value:`<script async src="index.js"><\/script>
  `,paraId:80,tocIndex:8},{value:"async mode,it loads asynchronously,js won't block DOM's rendering,async loading is out of order,when it finishes loading, js executes immediately.",paraId:81,tocIndex:8},{value:"Application scenario:If the js resource has no dependencies on DOM element,async patterns can be used when data is not generated that is required by other resources, such as buried statistics.",paraId:82,tocIndex:8},{value:"3\uFF09defer mode",paraId:83,tocIndex:8},{value:`<script defer src="index.js"><\/script>
  `,paraId:84,tocIndex:8},{value:"defer mode,js is also loaded asynchronously,the defer resource will come before\xA0",paraId:85,tocIndex:8},{value:"DOMContentLoaded",paraId:85,tocIndex:8},{value:" execute,and defer is loaded sequentially.",paraId:85,tocIndex:8},{value:"If there are multiple script tags with defer set, then defer is executed in the order introduced, even if the later script resources return first.",paraId:86,tocIndex:8},{value:"So defer can be used to control the execution order of the js files, like elements-ui.js and vue.js. Since elements-ui.js depend on vue, defer must be introduced to vue.js before elements-ui.js.",paraId:87,tocIndex:8},{value:`<script defer src="vue.js"><\/script>
  <script defer src="element-ui.js"><\/script>
  `,paraId:88,tocIndex:8},{value:"Use defer scenario: Use defer as a general rule, especially if you need to control the loading order of resources.",paraId:89,tocIndex:8},{value:"4\uFF09module mode",paraId:90,tocIndex:8},{value:`<script type="module">import {a} from './a.js'<\/script>
  `,paraId:91,tocIndex:8},{value:"In mainstream modern browsers, the properties of the script tag ",paraId:92,tocIndex:8},{value:'type="module"',paraId:92,tocIndex:8},{value:" can be added,the browser will send an HTTP request to its internal import reference to obtain the module content. At this time, the script will behave like defer, download in the background, and wait for DOM parsing.",paraId:92,tocIndex:8},{value:"Vite uses browsers to support native ",paraId:93,tocIndex:8},{value:"es module",paraId:93,tocIndex:8},{value:" modules,skip the packaging process during development to improve compilation efficiency.",paraId:93,tocIndex:8},{value:"5\uFF09 preload",paraId:94,tocIndex:8},{value:`<link rel="preload" as="script" href="index.js">
  `,paraId:95,tocIndex:8},{value:"The preload attribute of the link tag: used to load some required dependencies ahead of time.",paraId:96,tocIndex:8},{value:"The index.html file generated by the package of vue2 project will automatically add preload to all the resources required by the home page to realize the advance loading of key resources.",paraId:97,tocIndex:8},{value:"preload features:",paraId:98,tocIndex:8},{value:"1\uFF09Resources loaded by preload are processed before the browser rendering mechanism and do not block onload events;",paraId:99,tocIndex:8},{value:"2\uFF09The process of loading and executing the JS script loaded by preload is separate, that is, preload will preload the corresponding script code and call it when needed;",paraId:100,tocIndex:8},{value:"6\uFF09prefetch",paraId:101,tocIndex:8},{value:`<link rel="prefetch" as="script" href="index.js">
  `,paraId:102,tocIndex:8},{value:"Prefetch is a mechanism to use the idle time of the browser to load the resources that the page may use in the future; It can usually be used to load the resources required by other pages (not the first page) to speed up the opening of subsequent pages.",paraId:103,tocIndex:8},{value:"prefetch features:",paraId:104,tocIndex:8},{value:"1\uFF09The resources loaded by preview can obtain resources that are not required by the current page, and put them in the cache for at least 5 minutes (regardless of whether the resources can be cached or not).",paraId:105,tocIndex:8},{value:"2\uFF09When the page jumps, the unfinished prefetch request will not be interrupted.",paraId:106,tocIndex:8},{value:"Summary of loading methods",paraId:107,tocIndex:8},{value:"Async and defer are the exclusive attributes of the script tag. For other resources in the web page, you can preload them through the link's preload and prefetch attributes.",paraId:108,tocIndex:8},{value:"Now the modern framework has added preload and prefetch to the packaging process. Through flexible configuration, we can use these preload functions. At the same time, we can also add async and defer attributes to the script tag to process resources, which can significantly improve performance.",paraId:109,tocIndex:8},{value:"Usually, most performance optimization work is focused on JS, but pictures are also a very important part of the page.",paraId:110,tocIndex:9},{value:"Especially for mobile terminals, there is no need to load the original image and waste bandwidth. How to compress images and make them display faster, there are many optimization works to be done.",paraId:111,tocIndex:9},{value:"Dynamic tailoring of images Many cloud services, such as ",paraId:112,tocIndex:9},{value:"Alibaba Cloud",paraId:112,tocIndex:9},{value:" or ",paraId:112,tocIndex:9},{value:"Qiniuyun",paraId:112,tocIndex:9},{value:",They all provide the dynamic cropping function of the image, which is very good. It's really worth the money. Just add parameters dynamically to the URL address of the image, and you can get the size you need, for example:",paraId:112,tocIndex:9},{value:"http://7xkv1q.com1.z0.glb.clouddn.com/grape.jpg?imageView2/1/w/200/h/200",paraId:112,tocIndex:9},{value:"After dynamic cropping, the loading speed will be significantly improved.",paraId:113,tocIndex:9},{value:"Lazy loading of pictures",paraId:114,tocIndex:9},{value:"For some home pages with large amount of pictures, users only need to present the pictures in the visible area of the screen after opening the page. When users slide the page, they load the pictures that appear in the screen to optimize the loading effect of the pictures.",paraId:115,tocIndex:9},{value:"Implementation principle of image lazy loading:",paraId:116,tocIndex:9},{value:"Since the browser will automatically send a request to the src attribute of the img tag in the page and download the image, you can temporarily store the src value through the html5 custom attribute data-xxx, and then reassign the value of data-xxx to the src attribute of the img when the image appears in the visible area of the screen.",paraId:117,tocIndex:9},{value:`<img src="" alt="" data-src="./images/1.jpg">
  <img src="" alt="" data-src="./images/2.jpg">
  `,paraId:118,tocIndex:9},{value:"Take the ",paraId:119,tocIndex:9},{value:"vue-lazyload",paraId:119,tocIndex:9},{value:" plug-in as an example:",paraId:119,tocIndex:9},{value:`// install
  npm install vue-lazyload

  // main.js register
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)
  // Configuration item
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png', // Bitmap occupation in case of image loading failure
    loading: 'dist/loading.gif', // Bitmap occupation in case of image loading failure
    attempt: 1
  })

  // Use with the v-lazy instruction
  <ul>
    <li v-for="img in list">
      <img v-lazy="img.src" :key="img.src" >
    </li>
  </ul>
  `,paraId:120,tocIndex:9},{value:"Use font icon",paraId:121,tocIndex:9},{value:"Font icons are the best choice for small icons on the page. The most common one is ",paraId:122,tocIndex:9},{value:"iconfont",paraId:122,tocIndex:9},{value:"Advantages of font icons:",paraId:123,tocIndex:9},{value:"1\uFF09Lightweight: An icon font is smaller than a series of images. Once the font is loaded, the icon will be rendered immediately, reducing http requests.",paraId:124,tocIndex:9},{value:"2\uFF09Flexibility: You can change colors, generate shadows, transparency, rotation, etc. at will.",paraId:125,tocIndex:9},{value:"3\uFF09Compatibility: almost all browsers are supported, please feel free to use.",paraId:126,tocIndex:9},{value:"Picture to base64 format",paraId:127,tocIndex:9},{value:"Convert small images into base64 encoded strings and write them into HTML or CSS to reduce http requests.",paraId:128,tocIndex:9},{value:"Advantages and disadvantages of converting to base64 format:",paraId:129,tocIndex:9},{value:"It often deals with very small images, because after Base64 encoding, the image size will expand to 4/3 of the original file. If Base64 encoding is also used for large images, the size of the latter will increase significantly. Even if the http request is reduced, it cannot make up for the performance cost caused by this huge volume, which is more than worth the loss.",paraId:130,tocIndex:9},{value:"When transmitting very small images, the file volume expansion brought by Base64 and the time cost of browser parsing Base64 can be ignored compared with the cost of http requests saved by it. Only then can it truly reflect its performance advantages.",paraId:131,tocIndex:9},{value:"Projects can use ",paraId:132,tocIndex:9},{value:"url loader",paraId:132,tocIndex:9},{value:" to transfer pictures to base64:",paraId:132,tocIndex:9},{value:`// install
  npm\xA0install\xA0url-loader\xA0--save-dev

  // config
  module.exports\xA0=\xA0{
  \xA0\xA0module:\xA0{
  \xA0\xA0\xA0\xA0rules:\xA0[{
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0test:\xA0/.(png|jpg|gif)$/i,
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0use:\xA0[{
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0loader:\xA0'url-loader',
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0options:\xA0{
                // Convert images smaller than 10kb to base64
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0limit:\xA01024 * 10
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}]
  \xA0\xA0\xA0\xA0\xA0}]
  \xA0\xA0}
  };
  `,paraId:133,tocIndex:9},{value:"This article mainly introduces the performance optimization at the code level. After the above series of optimization, the opening speed of the home page has been significantly improved. Although these are some conventional solutions, there are not many knowledge points that can be dug deeply.",paraId:134,tocIndex:10},{value:"\u8DEF\u7531\u61D2\u52A0\u8F7D\u539F\u7406\u53CA\u4F7F\u7528",paraId:135,tocIndex:11},{value:"vue-skeleton-webpack-plugin \u9AA8\u67B6\u5C4F\u63D2\u4EF6\u4F7F\u7528",paraId:136,tocIndex:11},{value:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316-\u865A\u62DF\u6EDA\u52A8",paraId:137,tocIndex:11},{value:"requestAnimationFrame \u5236\u4F5C\u52A8\u753B",paraId:138,tocIndex:11},{value:"\u6D45\u8C08 script \u6807\u7B7E\u4E2D\u7684 async \u548C defer ",paraId:139,tocIndex:11},{value:"Tree-Shaking \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5 - \u539F\u7406\u7BC7",paraId:140,tocIndex:11},{value:"\u4F7F\u7528 Preload&Prefetch \u4F18\u5316\u524D\u7AEF\u9875\u9762\u7684\u8D44\u6E90\u52A0\u8F7D",paraId:141,tocIndex:11},{value:"Notes",paraId:142,tocIndex:11},{value:" This article is from ",paraId:142,tocIndex:11},{value:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u2014\u2014\u9996\u9875\u8D44\u6E90\u538B\u7F29 63%\u3001\u767D\u5C4F\u65F6\u95F4\u7F29\u77ED 86%",paraId:142,tocIndex:11},{value:",In case of infringement, please contact me to delete it!",paraId:142,tocIndex:11}],ca={},l1={title:"\u65E5\u671F\u65F6\u95F4",toc:"menu",filename:"docs/usually/datetime/index.md",order:3,nav:{title:"\u5E38\u7528",order:1}},b1=[{id:"\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316",depth:2,title:"\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316"},{id:"\u6839\u636E\u65E5\u671F\u8FD4\u56DE\u661F\u671F\u51E0",depth:2,title:"\u6839\u636E\u65E5\u671F\u8FD4\u56DE\u661F\u671F\u51E0"},{id:"n-\u5929\u524D\u7684\u65E5\u671F",depth:2,title:"n \u5929\u524D\u7684\u65E5\u671F"},{id:"n-\u6708\u524D\u7684\u4ECA\u5929",depth:2,title:"n \u6708\u524D\u7684\u4ECA\u5929"},{id:"\u65F6\u5206\u79D2\u8F6C\u6362\u4E3A\u65F6\u95F4\u6233",depth:2,title:"\u65F6\u5206\u79D2\u8F6C\u6362\u4E3A\u65F6\u95F4\u6233"},{id:"\u662F\u5426\u4E3A\u5DE5\u4F5C\u65E5",depth:2,title:"\u662F\u5426\u4E3A\u5DE5\u4F5C\u65E5"},{id:"\u67D0\u5E74\u67D0\u6708\u7684\u5929\u6570",depth:2,title:"\u67D0\u5E74\u67D0\u6708\u7684\u5929\u6570"},{id:"\u67D0\u5E74\u67D0\u6708\u7684\u6BCF\u4E00\u5929",depth:2,title:"\u67D0\u5E74\u67D0\u6708\u7684\u6BCF\u4E00\u5929"},{id:"\u8BA1\u7B97\u5F00\u59CB\u65F6\u95F4\u4E0E\u65F6\u957F\u7684\u548C",depth:2,title:"\u8BA1\u7B97\u5F00\u59CB\u65F6\u95F4\u4E0E\u65F6\u957F\u7684\u548C"},{id:"\u83B7\u53D6\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u65F6\u957F",depth:2,title:"\u83B7\u53D6\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u65F6\u957F"},{id:"\u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u4F4D\u4E8E\u5F53\u5E74\u7684\u7B2C\u51E0\u5929",depth:2,title:"\u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u4F4D\u4E8E\u5F53\u5E74\u7684\u7B2C\u51E0\u5929"},{id:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5929\u6570",depth:2,title:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5929\u6570"},{id:"\u65F6\u95F4\u95EE\u5019\u8BED",depth:2,title:"\u65F6\u95F4\u95EE\u5019\u8BED"}],y0=[{value:`/**
   * \u65F6\u95F4\u683C\u5F0F\u8F6C\u5316
   * @param {Date} date
   * @param {string} format
   * @return {string}
   *  YYYY\uFF1A\u56DB\u4F4D\u6570\u5E74\u4EFD
      MM\uFF1A\u4E24\u4F4D\u6570\u6708\u4EFD\uFF0801-12\uFF09
      DD\uFF1A\u4E24\u4F4D\u6570\u65E5\u671F\uFF0801-31\uFF09
      HH\uFF1A\u4E24\u4F4D\u6570\u5C0F\u65F6\uFF0800-23\uFF09
      mm\uFF1A\u4E24\u4F4D\u6570\u5206\u949F\uFF0800-59\uFF09
      ss\uFF1A\u4E24\u4F4D\u6570\u79D2\u949F\uFF0800-59\uFF09
   */
  const formatDateTime = (date: Date, format: string): string => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hour)
      .replace('mm', minute)
      .replace('ss', second);
  };

  const formatted = formatDateTime(new Date(), 'YYYY-MM-DD HH:mm:ss');
  console.log(formatted); // \u8F93\u51FA "2023-03-26 12:34:56"
  `,paraId:0,tocIndex:0},{value:`/**
   * \u6839\u636E\u65E5\u671F\u8FD4\u56DE\u661F\u671F\u51E0\uFF08\u4E0D\u4F20\u65E5\u671F\u8FD4\u56DE\u5F53\u5929\u7684\u661F\u671F\uFF09
   * @param {String} date
   * @returns {String} week
   * \u8C03\u7528\u793A\u4F8B
   * dateToWeek('2022-09-20')
     // \u4E8C
     dateToWeek()
     // \u4E09
   */
  const dateToWeek = (date: string): string => {
    let weeks = ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'];
    let day = (date ? new Date(date) : new Date()).getDay();
    return weeks[day];
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * @param {number} n  \u5929\u6570\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0Cdays\u4E3A0\u65F6\u8FD4\u56DE\u5F53\u524D\u65E5\u671F\uFF0Cdays\u4E3A1\u65F6\u8FD4\u56DE\u4E00\u5929\u524D\u65E5\u671F
   * @return {string}  \u51E0\u5929\u524D\u7684\u65E5\u671F
   * */
  const getNDaysAgo = (n: number = 0): string => {
    if (isNaN(n) || n < 0) {
      throw new Error('Invalid number of days');
    }
    const pastDate = new Date(Date.now() - n * 24 * 60 * 60 * 1000);
    const year = pastDate.getFullYear();
    const month = (pastDate.getMonth() + 1).toString().padStart(2, '0');
    const day = pastDate.getDate().toString().padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  };
  `,paraId:2,tocIndex:2},{value:`/**
   * @param {number} m \u6708\u6570 \u8D1F\u6570\u65F6\u4E3A\u524Dm\u4E2A\u6708\u7684\u5F53\u524D\u65E5\u671F
   * @return {string} \u51E0\u6708\u524D\u7684\u65E5\u671F
   * */
  const dateOfMonths = (m: number = 0): string => {
    const date = new Date();
    date.setMonth(date.getMonth() + m);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  };
  `,paraId:3,tocIndex:3},{value:`/**
   * @param {string|null} time \u65F6\u5206\u79D2 // 20:00:01 ->> xxxxxx
   * @return {number|undefined} \u65F6\u95F4\u6233
   * */
  const timeToSec = (time: string | null): number | undefined => {
    if (!time) {
      return undefined;
    }
    const [hourStr, minStr, secStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const min = parseInt(minStr, 10);
    const sec = secStr ? parseInt(secStr, 10) : 0;
    return hour * 3600 + min * 60 + sec;
  };
  `,paraId:4,tocIndex:4},{value:`/**
   * \u5224\u65AD\u67D0\u5929\u662F\u5426\u662F\u5DE5\u4F5C\u65E5
   * @param date \u65E5\u671F '2022-09-01'
   * @return boolean
   * */
  export const isWeekday = (date: string): boolean => {
    return new Date(date).getDay() % 6 !== 0;
  };
  `,paraId:5,tocIndex:5},{value:`/**
   * \u4F20\u5165\u5E74\u4EFD\u548C\u6708\u4EFD \u83B7\u53D6\u8BE5\u5E74\u5BF9\u5E94\u6708\u4EFD\u7684\u5929\u6570
   * @param {number} year
   * @param {number} month
   * @return {number} days
   **/
  const getMonthDays = (year: number, month: number): number => {
    const date = new Date(year, month, 0); //\u5F53\u5929\u6570\u4E3A0 js\u81EA\u52A8\u5904\u7406\u4E3A\u4E0A\u4E00\u6708\u7684\u6700\u540E\u4E00\u5929
    return date.getDate();
  };
  `,paraId:6,tocIndex:6},{value:`/**
   * \u83B7\u53D6\u6307\u5B9A\u5E74\u6708\u7684\u6BCF\u4E00\u5929
   * @param {number} year
   * @param {number} month
   * @return {Array<Item>}
   **/
  interface Item {
    yeardate: string;
    date: string;
  }

  const getDateList = (year: number, month: number): Array<Item> => {
    const lastDateOfMonth = new Date(year, month, 0).getDate();
    const formattedMonth = month.toString().padStart(2, '0');
    const result: Array<Item> = [];
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const formattedDate = i.toString().padStart(2, '0');
      const yeardate = \`\${year}-\${formattedMonth}-\${formattedDate}\`;
      const date = \`\${formattedMonth}-\${formattedDate}\`;
      result.push({ yeardate, date });
    }
    return result;
  };
  `,paraId:7,tocIndex:7},{value:`/**
   * \u83B7\u53D6\u5355\u4E2A\u6307\u5B9A\u5757\u7684\u7ED3\u675F\u65F6\u95F4
   * @param {string} stime 15:40
   * @param {number} duration 22
   * @return {string} =>>>  16:02
   */
  const getEndTime = (stime: string, duration: number): string => {
    let [hour, minute] = stime.split(':');
    let _hour = Number(hour);
    let _minute = Number(minute) + duration;
    if (_minute >= 60) {
      _hour += Math.floor(_minute / 60);
      _minute = _minute % 60;
    }
    const _hourStr = _hour < 10 ? '0' + _hour : _hour.toString();
    const _minuteStr = _minute < 10 ? '0' + _minute : _minute.toString();
    return _hourStr + ':' + _minuteStr;
  };
  `,paraId:8,tocIndex:8},{value:`/**
   * \u83B7\u53D6\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u65F6\u957F
   * @param {string} time1 15:40
   * @param {string} time2 17:33
   * @param {number} num 1 \u65F6\u6BB5\u7684\u6807\u51C6\u65F6\u957F\uFF0C\u9ED8\u8BA4\u4E3A\u4E00\u5C0F\u65F6
   * @param {number} type 'start' / 'end' // start\u7B97\u51FA\u6765\u662F\u6B63\u6570\uFF0C\u53CD\u4E4B\u4E3A\u8D1F\u6570
   * @return {number} =>>>  1.8833333333333333 // \u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u7684\u5DEE\u4E3Anum\u7684\u500D\u6570
   */
  const timeToInteger = (
    time1: string,
    time2: string,
    num: number,
    type: 'start' | 'end',
  ): number => {
    const [stime1, etime1] = time1.split(':').map(Number);
    const [stime2, etime2] = time2.split(':').map(Number);
    let h = 0,
      m = 0;
    if (type == 'start') {
      h = stime1 - stime2;
      m = etime1 - etime2;
    } else if (type == 'end') {
      h = stime2 - stime1;
      m = etime2 - etime1;
    }
    let decimals = m / (60 * num);
    return h / num + decimals;
  };
  `,paraId:9,tocIndex:9},{value:`/**
   * \u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u4F4D\u4E8E\u5F53\u5E74\u7684\u7B2C\u51E0\u5929
   * @param {string} date '2022-12-27'
   * @return {number} =>>>  361
   */
  const dateOfYear = (date) => {
    date = new Date(date);
    const _days = Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24,
    );
    return _days;
  };
  `,paraId:10,tocIndex:10},{value:`/**
   * \u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5929\u6570
   * @param {string} date1 '2022-12-27'
   * @param {string} date2 '2022-12-28'
   * @return {number}  =>>>  1
   */
  const daysDistance = (date1, date2) => {
    date1 = Date.parse(date1);
    date2 = Date.parse(date2);
    const _ms = date2 - date1;
    const _days = Math.floor(_ms / (24 * 3600 * 1000));
    return _days;
  };
  `,paraId:11,tocIndex:11},{value:`/**
   * \u65F6\u95F4\u95EE\u5019\u8BED
   * @param param \u5F53\u524D\u65F6\u95F4\uFF0Cstring\u683C\u5F0F
   * @description param \u8C03\u7528 \`formatAxis('2022-12-12 09:12:11')\` \u8F93\u51FA \`\u4E0A\u5348\u597D\`
   * @returns \u8FD4\u56DE\u62FC\u63A5\u540E\u7684\u65F6\u95F4\u5B57\u7B26\u4E32
   */
  const formatAxis = (param: string): string => {
    let hour: number = new Date(param).getHours();
    if (hour < 6) return '\u51CC\u6668\u597D';
    else if (hour < 9) return '\u65E9\u4E0A\u597D';
    else if (hour < 12) return '\u4E0A\u5348\u597D';
    else if (hour < 14) return '\u4E2D\u5348\u597D';
    else if (hour < 17) return '\u4E0B\u5348\u597D';
    else if (hour < 19) return '\u508D\u665A\u597D';
    else if (hour < 22) return '\u665A\u4E0A\u597D';
    else return '\u591C\u91CC\u597D';
  };
  `,paraId:12,tocIndex:12}],E0={},N0={title:"\u4F4D\u7F6E",toc:"menu",filename:"docs/usually/location/index.md",order:8,nav:{title:"\u5E38\u7528",order:1}},e5=[{id:"h5-\u83B7\u53D6\u4F4D\u7F6E",depth:2,title:"H5 \u83B7\u53D6\u4F4D\u7F6E"},{id:"\u767E\u5EA6\u5730\u56FE\u7ECF\u7EAC\u5EA6\u8F6C\u4E3A\u817E\u8BAF\u5730\u56FE\u7ECF\u7EAC\u5EA6",depth:2,title:"\u767E\u5EA6\u5730\u56FE\u7ECF\u7EAC\u5EA6\u8F6C\u4E3A\u817E\u8BAF\u5730\u56FE\u7ECF\u7EAC\u5EA6"},{id:"\u817E\u8BAF\u5730\u56FE\u8F6C\u767E\u5EA6\u5730\u56FE\u7ECF\u7EAC\u5EA6",depth:2,title:"\u817E\u8BAF\u5730\u56FE\u8F6C\u767E\u5EA6\u5730\u56FE\u7ECF\u7EAC\u5EA6"},{id:"\u817E\u8BAF\u5730\u56FE-api",depth:2,title:"\u817E\u8BAF\u5730\u56FE API"}],s5=[{value:`/**
   * \u7ECF\u7EAC\u5EA6\u83B7\u53D6
   * \u57FA\u4E8Eh5\u7684\u83B7\u53D6\u4F4D\u7F6E\u8FDB\u884C\u4F18\u5316
   * @return {object} \u53C2\u6570\u7684\u503C
   * \u83B7\u53D6\u4F4D\u7F6E\u65F6\u4F1A\u6709\u6388\u6743\u5F39\u7A97\u63D0\u793A
   **/

  const getLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let data = {
              lat: latitude,
              lng: longitude,
            };
            resolve(data);
          },
          () => {
            reject('\u83B7\u53D6\u4F4D\u7F6E\u5931\u8D25');
          },
        );
      } else {
        reject('\u60A8\u7684\u8BBE\u5907\u4E0D\u652F\u6301\u5F53\u524D\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u83B7\u53D6');
      }
    });
  };
  `,paraId:0,tocIndex:0},{value:`/**
   * \u767E\u5EA6\u5730\u56FE\u7ECF\u7EAC\u5EA6\u8F6C\u4E3A\u817E\u8BAF\u5730\u56FE\u7ECF\u7EAC\u5EA6
   * @param lat {Number} \u7EAC\u5EA6
   * @param lng {Number} \u7ECF\u5EA6
   * @return {Object} \u8FD4\u56DE\u7ECF\u8FC7\u8F6C\u6362\u540E\u7684\u7ECF\u7EAC\u5EA6\u5BF9\u8C61\uFF0C\u5305\u62EClng\u548Clat\u4E24\u4E2A\u5C5E\u6027
   */
  const bdMapToTxMap = (
    lat: number,
    lng: number,
  ): { lng: number; lat: number } => {
    let pi = (3.14159265358979324 * 3000.0) / 180.0;
    let x = lng - 0.0065;
    let y = lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * pi);
    lng = z * Math.cos(theta);
    lat = z * Math.sin(theta);
    return { lng: lng, lat: lat };
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * \u817E\u8BAF\u5730\u56FE\u8F6C\u767E\u5EA6\u5730\u56FE\u7ECF\u7EAC\u5EA6
   * @param {Number} lat
   * @param {Number} lng
   * @return {Object}
   */
  const txMapToBdMap = (lng: number, lat: number) => {
    const x_pi = (Math.PI * 3000.0) / 180.0;
    let x = lng;
    let y = lat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
    let lngs = z * Math.cos(theta) + 0.0065;
    let lats = z * Math.sin(theta) + 0.006;
    return {
      lng: lngs,
      lat: lats,
    };
  };
  `,paraId:2,tocIndex:2},{value:"\u8BF7\u6C42 ",paraId:3,tocIndex:3},{value:"API",paraId:3,tocIndex:3},{value:" \u65F6\u53EF\u80FD\u4F1A\u9047\u5230\u8DE8\u57DF\u95EE\u9898\uFF0C\u53EF\u91C7\u7528 ",paraId:3,tocIndex:3},{value:"jsonp",paraId:3,tocIndex:3},{value:" \u8BF7\u6C42\u89E3\u51B3\u8DE8\u57DF\u3002",paraId:3,tocIndex:3},{value:"\u83B7\u53D6 ",paraId:3,tocIndex:3},{value:"jsonp",paraId:3,tocIndex:3},{value:" \u6587\u4EF6\u3002",paraId:3,tocIndex:3},{value:"jsonp.js",paraId:3,tocIndex:3},{value:" \u5185\u5BB9\u4E0D\u591A\uFF0C\u6E90\u7801\u5982\u4E0B\u3002",paraId:3,tocIndex:3},{value:`const jsonp = (url: string, data?: Record<string, any>): Promise<any> => {
    return new Promise((resolve, reject) => {
      // 1. \u521D\u59CB\u5316 url
      let dataString = url.indexOf('?') === -1 ? '?' : '&';
      const callbackName = \`jsonpCB_\${Date.now()}\`;
      url += \`\${dataString}callback=\${callbackName}\`;

      if (data) {
        // 2. \u5C06\u53C2\u6570\u6DFB\u52A0\u5230 url \u4E0A
        for (let k in data) {
          url += \`&\${k}=\${data[k]}\`;
        }
      }

      const scriptNode = document.createElement('script');
      scriptNode.src = url;

      // 3. callback
      window[callbackName] = (result: any) => {
        result ? resolve(result) : reject('\u6CA1\u6709\u8FD4\u56DE\u6570\u636E');
        delete window[callbackName];
        document.body.removeChild(scriptNode);
      };

      // 4. error
      scriptNode.addEventListener(
        'error',
        () => {
          reject('\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u5931\u8D25');
          delete window[callbackName];
          document.body.removeChild(scriptNode);
        },
        false,
      );

      // 5. start
      document.body.appendChild(scriptNode);
    });
  };

  export { jsonp };
  `,paraId:4,tocIndex:3},{value:"\u4F7F\u7528\u65B9\u6CD5 \uFF08",paraId:5,tocIndex:3},{value:"\u7533\u8BF7 key \u5B98\u7F51",paraId:5,tocIndex:3},{value:"\uFF09",paraId:5,tocIndex:3},{value:`import { jsonp } from './jsonp';

  interface LocationData {
    lat: number;
    lng: number;
  }

  interface LocationResult {
    status: number;
    message: string;
    result: LocationData;
  }

  const getLocation = (): Promise<LocationData> => {
    const key = 'YOUR_TENCENT_MAP_API_KEY';
    return new Promise((resolve, reject) => {
      jsonp<LocationResult>('https://apis.map.qq.com/ws/location/v1/ip', {
        key,
        output: 'jsonp',
      })
        .then((res) => {
          if (res.status === 0) {
            const locationData = res.result;
            resolve(locationData);
          } else {
            reject(res.message);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  `,paraId:6,tocIndex:3}],n5={},B5={title:"JS",toc:"menu",filename:"docs/column/js/index.en-US.md",order:5,nav:{title:"Column",order:3}},b5=[],st=[{value:" There is no English document, please go to the Chinese column.",paraId:0}],O5={},P5={title:"\u66F4\u65B0\u65E5\u5FD7",toc:"menu",filename:"docs/guide/changelog/index.md",order:1,nav:{title:"\u6307\u5357",order:0}},ut=[{id:"\u5E38\u7528",depth:3,title:"\u5E38\u7528"},{id:"\u8FDB\u9636",depth:3,title:"\u8FDB\u9636"},{id:"\u4E13\u680F",depth:3,title:"\u4E13\u680F"}],V=[{value:"2023/03/27 \u8BF7\u6C42 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"axios \u8FDB\u9636\u5C01\u88C5",paraId:0,tocIndex:0},{value:"2023/03/14 \u6587\u4EF6 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5207\u7247\u4E0A\u4F20",paraId:0,tocIndex:0},{value:"2023/03/13 \u6570\u7EC4\u5BF9\u8C61 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u53BB\u91CD\u5168\u65B0\u89E3\u51B3\u65B9\u6848",paraId:0,tocIndex:0},{value:"2023/02/09 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5224\u65AD\u4F20\u5165\u7684\u51FD\u6570\u662F\u5426\u6807\u8BB0\u4E86 async",paraId:0,tocIndex:0},{value:"2023/02/07 \u6587\u4EF6 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5C06\u56FE\u7247\u548C\u6587\u5B57\u5408\u6210\u4E00\u5F20\u56FE",paraId:0,tocIndex:0},{value:"2023/02/06 \u6587\u4EF6 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 URL \u4E0B\u8F7D\u6587\u4EF6",paraId:0,tocIndex:0},{value:"2023/02/03 \u6587\u4EF6 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"ImgUrl \u8F6C base64",paraId:0,tocIndex:0},{value:"2023/02/03 \u6587\u4EF6 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"File \u8F6C base64",paraId:0,tocIndex:0},{value:"2023/01/31 \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5E38\u7528->\u6587\u4EF6",paraId:0,tocIndex:0},{value:"\u83DC\u5355",paraId:0,tocIndex:0},{value:"2023/01/10 \u7F13\u5B58 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u6D4F\u89C8\u5668\u7F13\u5B58",paraId:0,tocIndex:0},{value:"2023/01/10 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u989C\u8272\u8F6C\u6362",paraId:0,tocIndex:0},{value:"2023/01/10 \u6B63\u5219 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u91D1\u989D\u5206\u9694",paraId:0,tocIndex:0},{value:"2023/01/10 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5339\u914D\u6587\u5B57\u53D8\u8272",paraId:0,tocIndex:0},{value:"2023/01/10 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u6570\u5B57\u8F6C\u4E2D\u6587\u5927\u5199",paraId:0,tocIndex:0},{value:"2023/01/10 \u6B63\u5219 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"IP \u5730\u5740",paraId:0,tocIndex:0},{value:"2023/01/10 \u6B63\u5219 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5BC6\u7801\u5F3A\u5EA6",paraId:0,tocIndex:0},{value:"2023/01/10 \u6B63\u5219 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u90AE\u653F\u7F16\u7801",paraId:0,tocIndex:0},{value:"2023/01/10 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u65F6\u95F4\u95EE\u5019\u8BED",paraId:0,tocIndex:0},{value:"2023/01/09 \u6570\u7EC4\u5BF9\u8C61 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u76F8\u540C",paraId:0,tocIndex:0},{value:"2022/12/29 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5929\u6570",paraId:0,tocIndex:0},{value:"2022/12/29 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u6DF1\u62F7\u8D1D\uFF08MessageChannel \u7684\u65B9\u5F0F\uFF09",paraId:0,tocIndex:0},{value:"2022/12/29 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u6DF1\u62F7\u8D1D\uFF08Map \u7684\u65B9\u5F0F\uFF09",paraId:0,tocIndex:0},{value:"2022/12/27 \u6570\u7EC4\u5BF9\u8C61 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u7B5B\u9009\u5BF9\u8C61\u5C5E\u6027",paraId:0,tocIndex:0},{value:"2022/12/27 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u590D\u5236\u6587\u672C\u5230\u526A\u8D34\u677F",paraId:0,tocIndex:0},{value:"2022/12/27 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u4F4D\u4E8E\u5F53\u5E74\u7684\u7B2C\u51E0\u5929",paraId:0,tocIndex:0},{value:"2022/12/02 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u83B7\u53D6\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u65F6\u957F",paraId:0,tocIndex:0},{value:"2022/12/02 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u8BA1\u7B97\u5F00\u59CB\u65F6\u95F4\u4E0E\u65F6\u957F\u7684\u548C",paraId:0,tocIndex:0},{value:"2022/11/30 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u5C06 json \u6570\u636E\u8F6C\u6362\u4E3A URL \u53C2\u6570",paraId:0,tocIndex:0},{value:"2022/11/30 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u67D0\u5E74\u67D0\u6708\u7684\u6BCF\u4E00\u5929",paraId:0,tocIndex:0},{value:"2022/11/30 \u65E5\u671F\u65F6\u95F4 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u67D0\u5E74\u67D0\u6708\u7684\u5929\u6570",paraId:0,tocIndex:0},{value:"2022/11/28 \u5E38\u7528 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u6DF1\u62F7\u8D1D",paraId:0,tocIndex:0},{value:"2022/11/18 \u6B63\u5219 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u6B63\u5219\u8BED\u6CD5\u53C2\u8003",paraId:0,tocIndex:0},{value:"2022/11/17 \u6B63\u5219 - \u65B0\u589E\u4E86",paraId:0,tocIndex:0},{value:"\u624B\u673A\u53F7\u548C\u5EA7\u673A\u53F7\u517C\u5BB9\u7684\u6B63\u5219",paraId:0,tocIndex:0},{value:"2023/03/24 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u4E0B\u5212\u7EBF\u52A8\u6001\u6548\u679C",paraId:1,tocIndex:1},{value:"2023/03/10 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u62FC\u97F3\u6807\u6CE8",paraId:1,tocIndex:1},{value:"2023/03/14 \u7EC4\u4EF6 - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u4E0A\u4F20\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:"2023/03/10 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"CSS \u5B9E\u73B0\u6587\u5B57\u667A\u80FD\u9002\u914D",paraId:1,tocIndex:1},{value:"2023/03/07 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"CSS \u5B9E\u73B0\u6309\u94AE\u7684\u4E0D\u540C\u80CC\u666F",paraId:1,tocIndex:1},{value:"2023/03/03 \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u7CBE\u9009->\u5C0F\u6280\u5DE7",paraId:1,tocIndex:1},{value:"\u83DC\u5355",paraId:1,tocIndex:1},{value:"2023/02/15 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u8D85\u51FA\u591A\u884C\u7701\u7565",paraId:1,tocIndex:1},{value:"2023/02/06 \u7EC4\u4EF6 - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u79FB\u52A8\u7AEF\u63D0\u793A\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:"2023/02/06 \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u7CBE\u9009->\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:"\u83DC\u5355",paraId:1,tocIndex:1},{value:"2023/02/03 \u5C0F\u7A0B\u5E8F - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"uniapp \u4E2D\u4F7F\u7528 webview",paraId:1,tocIndex:1},{value:"2023/02/03 \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u7CBE\u9009->\u5C0F\u7A0B\u5E8F",paraId:1,tocIndex:1},{value:"\u83DC\u5355",paraId:1,tocIndex:1},{value:"2022/12/03 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"CSS \u5B9E\u73B0\u6309\u94AE\u8282\u6D41\u6548\u679C",paraId:1,tocIndex:1},{value:"2022/12/02 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"CSS \u4F2A\u7C7B\u5B9E\u73B0\u63D0\u793A\u8BED\u56FE\u6807\u6548\u679C",paraId:1,tocIndex:1},{value:"2022/12/01 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u7F51\u7AD9\u53D8\u7070\u6548\u679C",paraId:1,tocIndex:1},{value:"2022/11/28 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u6587\u5B57\u63CF\u8FB9",paraId:1,tocIndex:1},{value:"2022/11/02 CSS - \u65B0\u589E\u4E86",paraId:1,tocIndex:1},{value:"\u8F93\u5165\u6846\u6296\u52A8",paraId:1,tocIndex:1},{value:"2023/03/24 \u6587\u6863\u5206\u4EAB - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"\u7B97\u6CD5\u6570\u636E",paraId:2,tocIndex:2},{value:"\u548C",paraId:2,tocIndex:2},{value:"\u524D\u7AEF\u9762\u8BD5",paraId:2,tocIndex:2},{value:"2023/03/24 \u4E13\u680F - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"\u6587\u6863\u5206\u4EAB",paraId:2,tocIndex:2},{value:"\u83DC\u5355",paraId:2,tocIndex:2},{value:"2023/03/16 \u4E13\u680F - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"JS \u57FA\u7840",paraId:2,tocIndex:2},{value:"\u83DC\u5355",paraId:2,tocIndex:2},{value:"2023/03/16 \u4E13\u680F - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"React \u57FA\u7840",paraId:2,tocIndex:2},{value:"\u83DC\u5355",paraId:2,tocIndex:2},{value:"2023/03/16 \u4E13\u680F - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"\u9762\u8BD5\u76F8\u5173",paraId:2,tocIndex:2},{value:"\u83DC\u5355",paraId:2,tocIndex:2},{value:"2023/03/13 \u5E38\u89C1\u95EE\u9898 - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"\u9875\u9762\u4E2D js \u52A0\u8F7D\u5931\u8D25",paraId:2,tocIndex:2},{value:"2023/02/09 \u4E13\u680F - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"\u5E38\u89C1\u95EE\u9898",paraId:2,tocIndex:2},{value:"\u83DC\u5355",paraId:2,tocIndex:2},{value:"2023/02/08 \u4E13\u680F - \u65B0\u589E\u4E86",paraId:2,tocIndex:2},{value:"SEO \u83DC\u5355->\u524D\u7AEF\u6027\u80FD\u4F18\u5316",paraId:2,tocIndex:2},{value:"2023/02/07 \u65B0\u589E",paraId:2,tocIndex:2},{value:"\u4E13\u680F",paraId:2,tocIndex:2},{value:"\u5BFC\u822A\u83DC\u5355",paraId:2,tocIndex:2}],G={},O={title:"\u5E38\u7528",toc:"menu",filename:"docs/usually/common/index.md",order:1,nav:{title:"\u5E38\u7528",order:1}},r1=[{id:"\u4ECB\u7ECD",depth:2,title:"\u4ECB\u7ECD"},{id:"\u5730\u5740\u680F\u53C2\u6570",depth:2,title:"\u5730\u5740\u680F\u53C2\u6570"},{id:"\u5355\u4E2A\u53C2\u6570",depth:3,title:"\u5355\u4E2A\u53C2\u6570"},{id:"\u591A\u4E2A\u53C2\u6570",depth:3,title:"\u591A\u4E2A\u53C2\u6570"},{id:"json-\u8F6C-get-\u53C2\u6570",depth:2,title:"json \u8F6C get \u53C2\u6570"},{id:"\u6821\u9A8C\u6570\u636E\u7C7B\u578B",depth:2,title:"\u6821\u9A8C\u6570\u636E\u7C7B\u578B"},{id:"\u65B9\u6CD5\u4E00",depth:3,title:"\u65B9\u6CD5\u4E00"},{id:"\u65B9\u6CD5\u4E8C",depth:3,title:"\u65B9\u6CD5\u4E8C"},{id:"\u9632\u6296",depth:2,title:"\u9632\u6296"},{id:"\u8282\u6D41",depth:2,title:"\u8282\u6D41"},{id:"\u624B\u673A\u53F7\u8131\u654F",depth:2,title:"\u624B\u673A\u53F7\u8131\u654F"},{id:"\u5927\u5C0F\u5199\u8F6C\u6362",depth:2,title:"\u5927\u5C0F\u5199\u8F6C\u6362"},{id:"\u5224\u65AD\u624B\u673A\u662F-andoird-\u8FD8\u662F-ios",depth:2,title:"\u5224\u65AD\u624B\u673A\u662F Andoird \u8FD8\u662F IOS"},{id:"\u751F\u6210-uuid",depth:2,title:"\u751F\u6210 uuid"},{id:"\u76D1\u542C\u5F53\u524D\u7A97\u53E3\u72B6\u6001",depth:2,title:"\u76D1\u542C\u5F53\u524D\u7A97\u53E3\u72B6\u6001"},{id:"web-share-api",depth:2,title:"Web Share API"},{id:"\u6DF1\u62F7\u8D1D",depth:2,title:"\u6DF1\u62F7\u8D1D"},{id:"jsonparse-\u7684\u65B9\u5F0F",depth:3,title:"JSON.parse \u7684\u65B9\u5F0F"},{id:"hash-\u7684\u65B9\u5F0F",depth:3,title:"hash \u7684\u65B9\u5F0F"},{id:"map-\u7684\u65B9\u5F0F",depth:3,title:"Map \u7684\u65B9\u5F0F"},{id:"messagechannel-\u7684\u65B9\u5F0F",depth:3,title:"MessageChannel \u7684\u65B9\u5F0F"},{id:"\u590D\u5236\u6587\u672C\u5230\u526A\u8D34\u677F",depth:2,title:"\u590D\u5236\u6587\u672C\u5230\u526A\u8D34\u677F"},{id:"\u6570\u5B57\u8F6C\u4E2D\u6587\u5927\u5199",depth:2,title:"\u6570\u5B57\u8F6C\u4E2D\u6587\u5927\u5199"},{id:"\u65B9\u6CD5\u4E00-1",depth:3,title:"\u65B9\u6CD5\u4E00"},{id:"\u65B9\u6CD5\u4E8C-1",depth:3,title:"\u65B9\u6CD5\u4E8C"},{id:"\u5339\u914D\u6587\u5B57\u53D8\u8272",depth:2,title:"\u5339\u914D\u6587\u5B57\u53D8\u8272"},{id:"\u989C\u8272\u8F6C\u6362",depth:2,title:"\u989C\u8272\u8F6C\u6362"},{id:"\u5224\u65AD\u4F20\u5165\u7684\u51FD\u6570\u662F\u5426\u6807\u8BB0\u4E86-async",depth:2,title:"\u5224\u65AD\u4F20\u5165\u7684\u51FD\u6570\u662F\u5426\u6807\u8BB0\u4E86 async"}],d1=[{value:"\u6C47\u96C6\u4E86\u4E00\u4E9B\u5E38\u7528\u4F46\u662F\u5185\u5BB9\u4E0D\u662F\u5F88\u591A\u7684\u65B9\u6CD5\u3002",paraId:0,tocIndex:0},{value:"\u5173\u4E8E\u6709\u591A\u79CD\u89E3\u51B3\u65B9\u5F0F\uFF0C\u5F52\u7EB3\u4E3A\u4E00\u7C7B\u7684\u65B9\u6CD5\u6709\u5355\u72EC\u83DC\u5355\u6C47\u603B\u3002",paraId:0,tocIndex:0},{value:"\u867D\u7136\u65B9\u6CD5\u90FD\u5F88\u5E38\u89C1\u4E14\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F46\u662F\u5F88\u5B9E\u7528\u3002",paraId:0,tocIndex:0},{value:"\u6C47\u603B\u4E0D\u6613\uFF0C\u4E0D\u559C\u52FF\u55B7\u3002",paraId:0,tocIndex:0},{value:`/**
   * \u83B7\u53D6\u5730\u5740\u680F\u53C2\u6570(\u652F\u6301hash\u548Chistory\u8DEF\u7531)
   * @param {string} key \u83B7\u53D6\u53C2\u6570\u7684name
   * @return {string|null} \u53C2\u6570\u503C
   * */
  const getRouteParam = (key: string): string | null => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (urlSearchParams.has(key)) {
      return urlSearchParams.get(key);
    }

    const hashParams = new URLSearchParams(window.location.hash.substr(1));
    if (hashParams.has(key)) {
      return hashParams.get(key);
    }

    const state = window.history.state;
    if (state && typeof state === 'object' && key in state) {
      return state[key];
    }

    const entries = window.location.search
      .slice(1)
      .split('&')
      .map((entry) => entry.split('='));
    for (const [entryKey, entryValue] of entries) {
      if (decodeURIComponent(entryKey) === key) {
        return decodeURIComponent(entryValue);
      }
    }
    return null;
  };
  `,paraId:1,tocIndex:2},{value:`/**
   * \u89E3\u6790URL\u53C2\u6570
   * @param {string} url
   * @return {object}
   * */
  const getParamsAsJson = (url: string): object => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    const params = new URLSearchParams(queryString);
    const result: { [key: string]: string } = {};
    params.forEach((value, key) => (result[key] = value));
    return result;
  };
  `,paraId:2,tocIndex:3},{value:`/**
   * \u5C06json\u6570\u636E\u8F6C\u6362\u4E3AURL\u53C2\u6570
   * @param {object} json
   * @return {string}
   * */

  // \u793A\u4F8B
  let json = {
    id: 1,
    name: 'test',
    address: '\u5317\u4EAC\u5E02',
    sex: true,
    other: 'xxxxx',
  };
  // \u7ED3\u679C ==> id=1&name=test&address=\u5317\u4EAC\u5E02&sex=true&other=xxxxx
  const jsonToParams = (json: object): string => {
    const paramsArray = [];
    for (const [key, value] of Object.entries(json)) {
      paramsArray.push([key, value]);
    }
    const params = new URLSearchParams(paramsArray);
    return params.toString();
  };
  `,paraId:3,tocIndex:4},{value:"\u652F\u6301\u591A\u79CD\u7C7B\u578B\u7684\u6821\u9A8C",paraId:4,tocIndex:5},{value:`\u65B9\u6CD5\u4E00\u4EC5\u652F\u6301\u524D 7 \u79CD\u7C7B\u578B
  `,paraId:4,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"null",paraId:5,tocIndex:5},{value:"undefined",paraId:5,tocIndex:5},{value:"object",paraId:5,tocIndex:5},{value:"array",paraId:5,tocIndex:5},{value:"date",paraId:5,tocIndex:5},{value:"regexp",paraId:5,tocIndex:5},{value:"map",paraId:5,tocIndex:5},{value:"set",paraId:5,tocIndex:5},{value:`/**
   * \u6821\u9A8C\u6570\u636E\u7C7B\u578B
   * @param {unknown} value \u6570\u636E
   * @return {string} type
   * */
  const typeOf = (value: unknown): string => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  };
  `,paraId:6,tocIndex:6},{value:`/**
   * \u6821\u9A8C\u6570\u636E\u7C7B\u578B
   * @param {unknown} value \u6570\u636E
   * @return {string} type
   * */
  const getType = (value: unknown): string => {
    if (typeof value === 'object') {
      if (value === null) {
        return 'null';
      }
      if (Array.isArray(value)) {
        return 'array';
      }
      if (value instanceof Date) {
        return 'date';
      }
      if (value instanceof RegExp) {
        return 'regexp';
      }
      if (value instanceof Map) {
        return 'map';
      }
      if (value instanceof Set) {
        return 'set';
      }
      return 'object';
    }
    return typeof value;
  };
  `,paraId:7,tocIndex:7},{value:`/**
   * \u9632\u6296
   * @param {Function} function \u9700\u8981\u9632\u6296\u7684\u51FD\u6570
   * @param {number} time \u9632\u6296\u65F6\u95F4\u95F4\u9694
   * */
  const debounce = (() => {
    let timer: NodeJS.Timeout | null = null;
    return (callback: () => void, wait: number = 800) => {
      timer && clearTimeout(timer);
      timer = setTimeout(callback, wait);
    };
  })();
  `,paraId:8,tocIndex:8},{value:`/**
   * \u8282\u6D41
   * @param {Function} function \u9700\u8981\u8282\u6D41\u7684\u51FD\u6570
   * @param {number} time \u8282\u6D41\u65F6\u95F4\u95F4\u9694
   * */
  const throttle = (() => {
    let last: number = 0;
    return (callback: () => void, wait: number = 800) => {
      let now = +new Date();
      if (now - last > wait) {
        callback();
        last = now;
      }
    };
  })();
  `,paraId:9,tocIndex:9},{value:`/**
   * \u624B\u673A\u53F7\u8131\u654F
   * @param mobile \u624B\u673A\u53F7 13122223333 -> 131****3333
   * @return mobile \u5DF2\u8131\u654F\u7684\u624B\u673A\u53F7
   * */
  const hideMobile = (mobile: number | string) => {
    return String(mobile).replace(/^(\\d{3})\\d{4}(\\d{4})$/, '$1****$2');
  };
  `,paraId:10,tocIndex:10},{value:`/**
   * \u5927\u5C0F\u5199\u8F6C\u6362
   * @param str \u5F85\u8F6C\u6362\u7684\u5B57\u7B26\u4E32
   * @param type 1-\u5168\u5927\u5199 2-\u5168\u5C0F\u5199 3-\u9996\u5B57\u6BCD\u5927\u5199
   * @return str
   * */
  const turnCase = (str: string, type: number) => {
    switch (type) {
      case 1:
        return str.toUpperCase();
      case 2:
        return str.toLowerCase();
      case 3:
        return str[0].toUpperCase() + str.substring(1).toLowerCase();
      default:
        return str;
    }
  };
  `,paraId:11,tocIndex:11},{value:`/**
   * \u5224\u65AD\u624B\u673A\u662FAndoird\u8FD8\u662FIOS
   * @return type
   * */
  const getOSType = (): string => {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
      return 'ios';
    }
    if (isAndroid) {
      return 'android';
    }
    return 'other';
  };
  `,paraId:12,tocIndex:12},{value:`/**
   * uuid
   * @return uuid
   * */
  const uuid = () => {
    const temp_url = URL.createObjectURL(new Blob());
    const uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url); //\u91CA\u653E\u8FD9\u4E2Aurl
    return uuid.substring(uuid.lastIndexOf('/') + 1);
  };
  `,paraId:13,tocIndex:13},{value:`document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState); // visible/hidden
  });
  `,paraId:14,tocIndex:14},{value:"navigator.share()\uFF1A\u8FD4\u56DE\u4E00\u4E2A promise\uFF0C\u5982\u679C\u5206\u4EAB\u6210\u529F\u7684\u8BDD\uFF0C\u8BE5 promise \u5C06\u4F1A resolve\u3002\u8BE5\u63A5\u53E3\u4F1A\u8C03\u7528\u539F\u751F\u5206\u4EAB\u673A\u5236\uFF0C\u5E76\u63A5\u6536\u4F60\u60F3\u5206\u4EAB\u7684\u6570\u636E\u4F5C\u4E3A\u53C2\u6570\u3002\u6CE8\u610F\uFF0C\u5B83\u53EA\u80FD\u5728\u7528\u6237\u6309\u4E0B\u94FE\u63A5\u6216\u6309\u94AE\u65F6\u8C03\u7528\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u9700\u8981 transient activation\uFF08\u77AC\u65F6\u6FC0\u6D3B\uFF09\u3002",paraId:15,tocIndex:15},{value:`/**
   * \u9875\u9762\u5206\u4EAB
   * @param {string} url - \u8981\u5206\u4EAB\u7684\u94FE\u63A5
   * @param {string} text - \u8981\u5206\u4EAB\u7684\u6587\u672C
   * @param {string} title - \u8981\u5206\u4EAB\u7684\u6807\u9898
   * @param {File[]} files - \u8981\u5206\u4EAB\u7684File\u5BF9\u8C61\u6570\u7EC4
   * */
  interface ShareData {
    url: string;
    text: string;
    title: string;
    files: File[];
  }

  const shareQuote = async (shareData: ShareData): Promise<void> => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error(error);
    }
  };
  `,paraId:16,tocIndex:15},{value:`/**
   * \u5BF9\u8C61\u6216\u6570\u7EC4\u6DF1\u62F7\u8D1D
   * @param {object|array} obj \u8981\u6DF1\u62F7\u8D1D\u7684\u5BF9\u8C61\u6216\u6570\u7EC4
   * @return \u8FD4\u56DE\u6DF1\u62F7\u8D1D\u540E\u7684\u5BF9\u8C61\u6216\u6570\u7EC4
   */
  const deepClone = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  };
  `,paraId:17,tocIndex:17},{value:`/**
   * \u6DF1\u62F7\u8D1D
   * @param {object} obj \u8981\u62F7\u8D1D\u7684\u5BF9\u8C61
   * @param hash \u54C8\u5E0C\u8868\uFF0C\u7528\u4E8E\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898
   * @return \u8FD4\u56DE\u62F7\u8D1D\u540E\u7684\u65B0\u5BF9\u8C61
   */
  const deepClone = <T>(obj: T, hash = new WeakMap<any, any>()): T => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj) as unknown as T;
    }

    if (obj instanceof RegExp) {
      return new RegExp(obj) as unknown as T;
    }

    if (hash.has(obj)) {
      return hash.get(obj);
    }

    let newobj: any = Array.isArray(obj) ? [] : {};

    hash.set(obj, newobj);

    for (let key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        newobj[key] = deepClone(value, hash);
      } else {
        newobj[key] = value;
      }
    }

    return newobj;
  };
  `,paraId:18,tocIndex:18},{value:`/**
   * \u6DF1\u62F7\u8D1D
   * @param {object|array} obj \u8981\u62F7\u8D1D\u7684\u5BF9\u8C61
   * @returns \u8FD4\u56DE\u62F7\u8D1D\u540E\u7684\u5BF9\u8C61
   */
  const deepClone = <T>(obj: T): T => {
    const objectMap = new Map();
    const _deepClone = (value: any): any => {
      const type = typeof value;
      if (type !== 'object' || type === null) {
        return value;
      }
      if (objectMap.has(value)) {
        return objectMap.get(value);
      }
      const result = Array.isArray(value) ? [] : {};
      objectMap.set(value, result);
      for (const key in value) {
        result[key] = _deepClone(value[key]);
      }
      return result;
    };
    return _deepClone(obj);
  };
  `,paraId:19,tocIndex:19},{value:`/**
   * @param {object | array} obj
   *  deepClone({a: 1, b: [{c: 1}]}).then((res) => {
   *    console.log(res);
   * });
   **/
  const deepClone = (obj) => {
    return new Promise((resolve) => {
      const { port1, port2 } = new MessageChannel();
      port1.postMessage(obj);
      port2.onmessage = (msg) => {
        resolve(msg.data);
      };
    });
  };
  `,paraId:20,tocIndex:20},{value:`/**
   * @param {string} \u6587\u672C\u5185\u5BB9
   */
  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text);
  };
  `,paraId:21,tocIndex:21},{value:`/**
   * \u6570\u5B57\u8F6C\u4E2D\u6587\u5927\u5199
   * @param val \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @param unit \u9ED8\u8BA4\uFF1A\u4EDF\u4F70\u62FE\u4EBF\u4EDF\u4F70\u62FE\u4E07\u4EDF\u4F70\u62FE\u5143\u89D2\u5206
   * @returns \u8FD4\u56DE\u5904\u7406\u540E\u7684\u5B57\u7B26\u4E32
   */
  const numberToUppercase = (
    val: any,
    unit = '\u4EDF\u4F70\u62FE\u4EBF\u4EDF\u4F70\u62FE\u4E07\u4EDF\u4F70\u62FE\u5143\u89D2\u5206',
    v = '',
  ): string => {
    // \u5F53\u524D\u5185\u5BB9\u5B57\u7B26\u4E32\u6DFB\u52A0 2\u4E2A0\uFF0C\u4E3A\u4EC0\u4E48??
    val += '00';
    // \u8FD4\u56DE\u67D0\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u503C\u5728\u5B57\u7B26\u4E32\u4E2D\u9996\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u6CA1\u6709\u51FA\u73B0\uFF0C\u5219\u8BE5\u65B9\u6CD5\u8FD4\u56DE -1
    let lookup = val.indexOf('.');
    // substring\uFF1A\u4E0D\u5305\u542B\u7ED3\u675F\u4E0B\u6807\u5185\u5BB9\uFF0Csubstr\uFF1A\u5305\u542B\u7ED3\u675F\u4E0B\u6807\u5185\u5BB9
    if (lookup >= 0) val = val.substring(0, lookup) + val.substr(lookup + 1, 2);
    // \u6839\u636E\u5185\u5BB9 val \u7684\u957F\u5EA6\uFF0C\u622A\u53D6\u8FD4\u56DE\u5BF9\u5E94\u5927\u5199
    unit = unit.substr(unit.length - val.length);
    // \u5FAA\u73AF\u622A\u53D6\u62FC\u63A5\u5927\u5199
    for (let i = 0; i < val.length; i++) {
      v += '\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396'.substr(val.substr(i, 1), 1) + unit.substr(i, 1);
    }
    // \u6B63\u5219\u5904\u7406
    v = v
      .replace(/\u96F6\u89D2\u96F6\u5206$/, '\u6574')
      .replace(/\u96F6[\u4EDF\u4F70\u62FE]/g, '\u96F6')
      .replace(/\u96F6{2,}/g, '\u96F6')
      .replace(/\u96F6([\u4EBF|\u4E07])/g, '$1')
      .replace(/\u96F6+\u5143/, '\u5143')
      .replace(/\u4EBF\u96F6{0,3}\u4E07/, '\u4EBF')
      .replace(/^\u5143/, '\u96F6\u5143');
    // \u8FD4\u56DE\u7ED3\u679C
    return v;
  };
  `,paraId:22,tocIndex:23},{value:`/**
   * \u6570\u5B57\u91D1\u989D\u8F6C\u4E2D\u6587\u91D1\u989D
   * @param {number} num \u9700\u8981\u8F6C\u6362\u7684\u6570\u5B57
   * @return {string} \u8FD4\u56DE\u5904\u7406\u540E\u7684\u5B57\u7B26\u4E32
   */
  const toChineseNumber = (num: number): string => {
    if (isNaN(num)) {
      return '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6570\u5B57\uFF01';
    }
    const fraction = ['\u89D2', '\u5206'];
    const digit = ['\u96F6', '\u58F9', '\u8D30', '\u53C1', '\u8086', '\u4F0D', '\u9646', '\u67D2', '\u634C', '\u7396'];
    const unit = [
      ['\u5143', '\u4E07', '\u4EBF'],
      ['', '\u62FE', '\u4F70', '\u4EDF'],
    ];
    const head = num < 0 ? '\u8D1F' : '';
    num = Math.abs(num);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
      s += (
        digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]
      ).replace(/\u96F6./, '');
    }
    s = s || '\u6574';
    num = Math.floor(num);
    for (
      let i = 0;
      i < unit[0].length && num > 0;
      i++, num = Math.floor(num / 10)
    ) {
      let p = '';
      for (
        let j = 0;
        j < unit[1].length && num > 0;
        j++, num = Math.floor(num / 10)
      ) {
        p = digit[num % 10] + unit[1][j] + p;
      }
      s = p.replace(/(\u96F6.)*\u96F6$/, '').replace(/^$/, '\u96F6') + unit[0][i] + s;
    }
    return head + s.replace(/(\u96F6.)*\u96F6\u5143/, '\u5143').replace(/(\u96F6.)+/g, '\u96F6');
  };

  // \u793A\u4F8B\u7528\u6CD5
  console.log(toChineseNumber(123456789.12)); // \u8F93\u51FA "\u58F9\u4EBF\u8D30\u4EDF\u53C1\u4F70\u8086\u62FE\u4F0D\u4E07\u9646\u4EDF\u67D2\u4F70\u634C\u62FE\u7396\u5143\u58F9\u89D2\u8D30\u5206"
  `,paraId:23,tocIndex:24},{value:`/**
   * \u5339\u914D\u6587\u5B57\u53D8\u8272\uFF08\u641C\u7D22\u65F6\uFF09
   * @param val \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @param text \u8981\u5904\u7406\u7684\u5B57\u7B26\u4E32\u503C
   * @param color \u641C\u7D22\u5230\u65F6\u5B57\u4F53\u9AD8\u4EAE\u989C\u8272
   * @returns \u8FD4\u56DE\u5904\u7406\u540E\u7684\u5B57\u7B26\u4E32
   */
  const textColor = (val: string, text = '', color = 'red'): string => {
    // \u8FD4\u56DE\u5185\u5BB9\uFF0C\u6DFB\u52A0\u989C\u8272
    let v = text.replace(
      new RegExp(val, 'gi'),
      \`<span style='color: \${color}'>\${val}</span>\`,
    );
    // \u8FD4\u56DE\u7ED3\u679C
    return v;
  };
  `,paraId:24,tocIndex:25},{value:`/**
   * \u989C\u8272\u8F6C\u6362\u51FD\u6570
   * @method hexToRgb hex \u989C\u8272\u8F6C rgb \u989C\u8272
   * @method rgbToHex rgb \u989C\u8272\u8F6C Hex \u989C\u8272
   * @method getDarkColor \u52A0\u6DF1\u989C\u8272\u503C
   * @method getLightColor \u53D8\u6D45\u989C\u8272\u503C
   */
  const useChangeColor = () => {
    // str \u989C\u8272\u503C\u5B57\u7B26\u4E32
    const hexToRgb = (str: string): any => {
      let hexs: any = '';
      let reg = /^\\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(str)) {
        console.log('\u8F93\u5165\u9519\u8BEF\u7684hex');
        return '';
      }
      str = str.replace('#', '');
      hexs = str.match(/../g);
      for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
      return hexs;
    };
    // r \u4EE3\u8868\u7EA2\u8272 | g \u4EE3\u8868\u7EFF\u8272 | b \u4EE3\u8868\u84DD\u8272
    const rgbToHex = (r: any, g: any, b: any): string => {
      let reg = /^\\d{1,3}$/;
      if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
        console.log('\u8F93\u5165\u9519\u8BEF\u7684rgb\u989C\u8272\u503C');
        return '';
      }
      let hexs = [r.toString(16), g.toString(16), b.toString(16)];
      for (let i = 0; i < 3; i++)
        if (hexs[i].length == 1) hexs[i] = \`0\${hexs[i]}\`;
      return \`#\${hexs.join('')}\`;
    };
    // color \u989C\u8272\u503C\u5B57\u7B26\u4E32 | level \u53D8\u6D45\u7684\u7A0B\u5EA6\uFF0C\u96500-1\u4E4B\u95F4
    const getDarkColor = (color: string, level: number): string => {
      let reg = /^\\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(color)) {
        console.log('\u8F93\u5165\u9519\u8BEF\u7684hex\u989C\u8272\u503C');
        return '';
      }
      let rgb = useChangeColor().hexToRgb(color);
      for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
      return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
    };
    // color \u989C\u8272\u503C\u5B57\u7B26\u4E32 | level \u52A0\u6DF1\u7684\u7A0B\u5EA6\uFF0C\u96500-1\u4E4B\u95F4
    const getLightColor = (color: string, level: number): string => {
      let reg = /^\\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(color)) {
        console.log('\u8F93\u5165\u9519\u8BEF\u7684hex\u989C\u8272\u503C');
        return '';
      }
      let rgb = useChangeColor().hexToRgb(color);
      for (let i = 0; i < 3; i++)
        rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
      return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
    };
    return {
      hexToRgb,
      rgbToHex,
      getDarkColor,
      getLightColor,
    };
  };
  `,paraId:25,tocIndex:26},{value:`/**
   * \u5224\u65AD\u4F20\u5165\u7684\u51FD\u6570\u662F\u5426\u6807\u8BB0\u4E86async
   * @param {Function} func \u4F20\u5165\u7684\u51FD\u6570
   * @return {Boolean}
   */
  const isAsyncFunction = (func) => {
    return func[Symbol.toStringTag] === 'AsyncFunction';
  };
  `,paraId:26,tocIndex:27}],_1={},Y1={title:"\u6570\u7EC4\u5BF9\u8C61",toc:"menu",filename:"docs/usually/array/index.md",order:2,nav:{title:"\u5E38\u7528",order:1}},N1=[{id:"\u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u76F8\u540C",depth:2,title:"\u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u76F8\u540C"},{id:"\u6A21\u7CCA\u641C\u7D22",depth:2,title:"\u6A21\u7CCA\u641C\u7D22"},{id:"\u904D\u5386\u6811\u8282\u70B9",depth:2,title:"\u904D\u5386\u6811\u8282\u70B9"},{id:"\u7B5B\u9009\u5BF9\u8C61\u5C5E\u6027",depth:2,title:"\u7B5B\u9009\u5BF9\u8C61\u5C5E\u6027"},{id:"\u53BB\u91CD",depth:2,title:"\u53BB\u91CD"},{id:"\u6570\u7EC4\u5BF9\u8C61\u6839\u636E\u5B57\u6BB5\u53BB\u91CD",depth:3,title:"\u6570\u7EC4\u5BF9\u8C61\u6839\u636E\u5B57\u6BB5\u53BB\u91CD"},{id:"\u6570\u7EC4\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",depth:3,title:"\u6570\u7EC4\u3001\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},{id:"\u53BB\u91CD\u5168\u65B0\u89E3\u51B3\u65B9\u6848",depth:3,title:"\u53BB\u91CD\u5168\u65B0\u89E3\u51B3\u65B9\u6848"}],q1=[{value:`/**
   * \u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u76F8\u540C
   * @param a \u8981\u6BD4\u8F83\u7684\u5BF9\u8C61\u4E00
   * @param b \u8981\u6BD4\u8F83\u7684\u5BF9\u8C61\u4E8C
   * @returns \u76F8\u540C\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u53CD
   */
  const isObjectValueEqual = <T>(a: T, b: T): boolean => {
    if (!a || !b) return false;
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) return false;
    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i];
      let propA = a[propName as keyof typeof a];
      let propB = b[propName as keyof typeof b];
      if (!b.hasOwnProperty(propName)) return false;
      if (propA instanceof Object) {
        if (!isObjectValueEqual(propA, propB)) return false;
      } else if (propA !== propB) {
        return false;
      }
    }
    return true;
  };
  `,paraId:0,tocIndex:0},{value:`/**
   * \u6A21\u7CCA\u641C\u7D22
   * @param {Array<any>} list \u539F\u6570\u7EC4
   * @param {string} keyword \u67E5\u8BE2\u7684\u5173\u952E\u8BCD
   * @param {string} attribute \u6570\u7EC4\u9700\u8981\u68C0\u7D22\u5C5E\u6027
   * @return arr
   * */
  const fuzzyQuery = <T>(list: T[], keyword: string, attribute: keyof T): T[] => {
    const reg = new RegExp(keyword);
    const arr: T[] = [];
    for (let i = 0; i < list.length; i++) {
      if (reg.test(list[i][attribute])) {
        arr.push(list[i]);
      }
    }
    return arr;
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * \u904D\u5386\u6811\u8282\u70B9
   * @param {Array<any>} data \u6811\u6570\u636E
   * @param {Function} callback \u56DE\u8C03\u51FD\u6570
   * @param {string} childrenName \u5B50\u8282\u70B9\u6570\u7EC4
   * */
  const foreachTree = (
    data: Array<any>,
    callback: (params: any) => void,
    childrenName = 'children',
  ) => {
    data.forEach((item) => {
      callback(item);
      if (item[childrenName]?.length) {
        foreachTree(item[childrenName], callback, childrenName);
      }
    });
  };
  `,paraId:2,tocIndex:2},{value:`/**
   * @param {object} \u5BF9\u8C61
   * @param {string} \u5C5E\u6027\u540D\uFF08\u591A\u4E2A\u5C5E\u6027\u4EE5\u9017\u53F7\u9694\u5F00\uFF09
   * @return {Object} \u7B5B\u9009\u540E\u7684\u5BF9\u8C61
   * pickAttrs({a:1,b:2,c:3},'a','b') ==>>>> {a: 1, b: 2}
   */
  const pickAttrs = (obj, ...props) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([k]) => props.includes(k)),
    );
  };
  `,paraId:3,tocIndex:3},{value:`/**
   * \u6570\u7EC4\u5BF9\u8C61\u6839\u636E\u5B57\u6BB5\u53BB\u91CD
   * @param arr \u8981\u53BB\u91CD\u7684\u6570\u7EC4
   * @param key \u6839\u636E\u53BB\u91CD\u7684\u5B57\u6BB5\u540D
   * @return arr
   * */
  const uniqueArrayObject = (arr: Array<any> = [], key: string) => {
    if (arr.length === 0) return;
    let list: Array<any> = [];
    const map: any = {};
    arr.forEach((item) => {
      if (!map[item[key]]) {
        map[item[key]] = item;
      }
    });
    list = Object.values(map);
    return list;
  };
  `,paraId:4,tocIndex:5},{value:`/**
   * \u6570\u7EC4\u3001\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD
   * @param arr \u6570\u7EC4\u5185\u5BB9
   * @param attr \u9700\u8981\u53BB\u91CD\u7684\u952E\u503C\uFF08\u6570\u7EC4\u5BF9\u8C61\uFF09
   * @returns
   */
  declare type EmptyArrayType<T = any> = T[];
  declare type EmptyObjectType<T = any> = {
    [key: string]: T;
  };
  const removeDuplicate = (arr: EmptyArrayType, attr?: any) => {
    if (!Object.keys(arr).length) {
      return arr;
    } else {
      if (attr) {
        const obj: EmptyObjectType = {};
        return arr.reduce((cur: EmptyArrayType[], item: EmptyArrayType) => {
          obj[item[attr]]
            ? ''
            : (obj[item[attr]] = true && item[attr] && cur.push(item));
          return cur;
        }, []);
      } else {
        return [...new Set(arr)];
      }
    }
  };
  `,paraId:5,tocIndex:6},{value:`/**
   * @param {any} list \u9700\u8981\u5224\u65AD\u7684\u6570\u636E
   * @return  \u8FD4\u56DE\u53BB\u91CD\u540E\u7684\u6570\u636E
   */
  const duplicateRemoval = (list) => {
    const newArr = [...list];
    for (let i = 0; i < newArr.length; i++) {
      // \u53BB\u6389i+1\u5F00\u59CB\u540E\u7EED\u7684\u503C
      for (let j = i + 1; j < newArr.length; j++) {
        if (equals(newArr[i], newArr[j])) {
          // \u53BB\u6389\u8BE5\u503C
          newArr.splice(j, 1);
          j--;
        }
      }
    }

    // \u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49
    function equals(val1, val2) {
      if (isType(val1, 'object') && isType(val2, 'object')) {
        const keys1 = Object.keys(val1),
          keys2 = Object.keys(val2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (const k of keys1) {
          if (!keys2.includes(k)) {
            return false;
          }
          if (!equals(val1[k], val2[k])) {
            return false;
          }
        }
        return true;
      } else {
        return val1 === val2;
      }
    }

    // \u5224\u65AD\u6570\u636E\u7C7B\u578B
    function isType(value, type) {
      type = type[0].toUpperCase() + type.substring(1).toLowerCase();
      return Object.prototype.toString.call(value) === \`[object \${type}]\`;
    }
    return newArr;
  };
  `,paraId:6,tocIndex:7}],M0={},z0={title:"\u7F13\u5B58",toc:"menu",filename:"docs/usually/cache/index.md",order:5,nav:{title:"\u5E38\u7528",order:1}},j0=[{id:"\u6D4F\u89C8\u5668\u7F13\u5B58",depth:2,title:"\u6D4F\u89C8\u5668\u7F13\u5B58"},{id:"session-\u548C-local-\u5408\u5E76",depth:3,title:"Session \u548C Local \u5408\u5E76"},{id:"\u6D4F\u89C8\u5668\u6C38\u4E45\u7F13\u5B58",depth:3,title:"\u6D4F\u89C8\u5668\u6C38\u4E45\u7F13\u5B58"},{id:"\u6D4F\u89C8\u5668\u4E34\u65F6\u7F13\u5B58",depth:3,title:"\u6D4F\u89C8\u5668\u4E34\u65F6\u7F13\u5B58"},{id:"cookie",depth:2,title:"Cookie"},{id:"\u8BBE\u7F6E-cookie",depth:3,title:"\u8BBE\u7F6E Cookie"},{id:"\u83B7\u53D6-cookie",depth:3,title:"\u83B7\u53D6 Cookie"},{id:"\u6E05\u9664-cookie",depth:3,title:"\u6E05\u9664 Cookie"}],U0=[{value:`// \u4F7F\u7528\u793A\u4F8B
  Storage.set('key', { name: 'John Doe' }); // \u8BBE\u7F6E localStorage \u7F13\u5B58
  Storage.set('key', { name: 'John Doe' }, true); // \u8BBE\u7F6E sessionStorage \u7F13\u5B58
  const value = Storage.get('key'); // \u83B7\u53D6 localStorage \u7F13\u5B58
  const value = Storage.get('key', true); // \u83B7\u53D6 sessionStorage \u7F13\u5B58
  Storage.remove('key'); // \u79FB\u9664 localStorage \u7F13\u5B58
  Storage.remove('key', true); // \u79FB\u9664 sessionStorage \u7F13\u5B58
  Storage.clear(); // \u6E05\u7A7A localStorage \u7F13\u5B58
  Storage.clear(true); // \u6E05\u7A7A sessionStorage \u7F13\u5B58

  const Storage = {
    // \u8BBE\u7F6E\u7F13\u5B58
    set(key: string, val: any, isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.setItem(key, JSON.stringify(val));
    },
    // \u83B7\u53D6\u7F13\u5B58
    get(key: string, isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      const json = storage.getItem(key);
      return JSON.parse(json);
    },
    // \u79FB\u9664\u7F13\u5B58
    remove(key: string, isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.removeItem(key);
    },
    // \u79FB\u9664\u5168\u90E8\u7F13\u5B58
    clear(isSession: boolean = false) {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.clear();
    },
  };
  `,paraId:0,tocIndex:1},{value:`/**
   * window.localStorage \u6D4F\u89C8\u5668\u6C38\u4E45\u7F13\u5B58
   * @method set \u8BBE\u7F6E\u6C38\u4E45\u7F13\u5B58
   * @method get \u83B7\u53D6\u6C38\u4E45\u7F13\u5B58
   * @method remove \u79FB\u9664\u6C38\u4E45\u7F13\u5B58
   * @method clear \u79FB\u9664\u5168\u90E8\u6C38\u4E45\u7F13\u5B58
   */
  const Local = {
    // \u8BBE\u7F6E\u4E34\u65F6\u7F13\u5B58
    set<T>(key: string, val: T) {
      window.localStorage.setItem(key, JSON.stringify(val));
    },
    // \u83B7\u53D6\u4E34\u65F6\u7F13\u5B58
    get<T>(key: string): T | null {
      const json = window.localStorage.getItem(key);
      return json ? JSON.parse(json) : null;
    },
    // \u79FB\u9664\u4E34\u65F6\u7F13\u5B58
    remove(key: string) {
      window.localStorage.removeItem(key);
    },
    // \u79FB\u9664\u5168\u90E8\u4E34\u65F6\u7F13\u5B58
    clear() {
      window.localStorage.clear();
    },
  };
  `,paraId:1,tocIndex:2},{value:`/**
   * window.sessionStorage \u6D4F\u89C8\u5668\u4E34\u65F6\u7F13\u5B58
   * @method set \u8BBE\u7F6E\u4E34\u65F6\u7F13\u5B58
   * @method get \u83B7\u53D6\u4E34\u65F6\u7F13\u5B58
   * @method remove \u79FB\u9664\u4E34\u65F6\u7F13\u5B58
   * @method clear \u79FB\u9664\u5168\u90E8\u4E34\u65F6\u7F13\u5B58
   */
  const Session = {
    // \u8BBE\u7F6E\u4E34\u65F6\u7F13\u5B58
    set<T>(key: string, val: T) {
      window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    // \u83B7\u53D6\u4E34\u65F6\u7F13\u5B58
    get<T>(key: string): T | null {
      const json = window.sessionStorage.getItem(key);
      return json ? JSON.parse(json) : null;
    },
    // \u79FB\u9664\u4E34\u65F6\u7F13\u5B58
    remove(key: string) {
      window.sessionStorage.removeItem(key);
    },
    // \u79FB\u9664\u5168\u90E8\u4E34\u65F6\u7F13\u5B58
    clear() {
      window.sessionStorage.clear();
    },
  };
  `,paraId:2,tocIndex:3},{value:`/**
   * @param {string} name cookie\u540D\u79F0
   * @param {string} value cookie\u7684\u503C
   * @param {number} expiresInMinutes \u8FC7\u671F\u65F6\u95F4
   */
  const setCookie = (
    name: string,
    value: string,
    expiresInMinutes: number = 30,
  ): void => {
    const expirationDate = new Date(
      Date.now() + expiresInMinutes * 60 * 1000,
    ).toUTCString();
    document.cookie = \`\${name}=\${value};expires=\${expirationDate};path=/\`;
  };
  `,paraId:3,tocIndex:5},{value:`/**
   * @param {string} name
   * @return {string}
   */
  const getCookie = (name: string): string => {
    const nameString = name + '=';
    const value = document.cookie
      .split(';')
      .find((item) => item.trim().startsWith(nameString));
    return value ? value.substring(nameString.length) : '';
  };
  `,paraId:4,tocIndex:6},{value:`/**
    @param {string} name 
  */
  const clearCookie = (name: string) => {
    set(name, '', -1);
  };
  `,paraId:5,tocIndex:7}],W0={},r5={title:"\u6B63\u5219",toc:"menu",filename:"docs/usually/regex/index.md",order:4,nav:{title:"\u5E38\u7528",order:1},description:". - \u9664\u6362\u884C\u7B26\u4EE5\u5916\u7684\u6240\u6709\u5B57\u7B26\u3002"},q0=[{id:"\u6B63\u5219\u8BED\u6CD5\u53C2\u8003",depth:2,title:"\u6B63\u5219\u8BED\u6CD5\u53C2\u8003"},{id:"\u8F66\u724C\u53F7",depth:2,title:"\u8F66\u724C\u53F7"},{id:"\u4E00\u822C\u8F66\u724C",depth:3,title:"\u4E00\u822C\u8F66\u724C"},{id:"\u6302\u8F66",depth:3,title:"\u6302\u8F66"},{id:"\u624B\u673A\u53F7",depth:2,title:"\u624B\u673A\u53F7"},{id:"\u624B\u673A\u53F7\u6216\u8005\u5EA7\u673A\u53F7",depth:2,title:"\u624B\u673A\u53F7\u6216\u8005\u5EA7\u673A\u53F7"},{id:"\u8BC1\u4EF6\u53F7",depth:2,title:"\u8BC1\u4EF6\u53F7"},{id:"\u8EAB\u4EFD\u8BC1",depth:2,title:"\u8EAB\u4EFD\u8BC1"},{id:"\u90AE\u7BB1\u683C\u5F0F",depth:2,title:"\u90AE\u7BB1\u683C\u5F0F"},{id:"\u5E10\u53F7\u662F\u5426\u5408\u6CD5",depth:2,title:"\u5E10\u53F7\u662F\u5426\u5408\u6CD5"},{id:"\u5341\u516D\u8FDB\u5236\u989C\u8272",depth:2,title:"\u5341\u516D\u8FDB\u5236\u989C\u8272"},{id:"\u6574\u6570",depth:2,title:"\u6574\u6570"},{id:"\u975E\u8D1F\u6574\u6570",depth:2,title:"\u975E\u8D1F\u6574\u6570"},{id:"\u6B63\u6574\u6570",depth:2,title:"\u6B63\u6574\u6570"},{id:"\u6B63\u6D6E\u70B9\u6570",depth:2,title:"\u6B63\u6D6E\u70B9\u6570"},{id:"\u975E\u8D1F\u6D6E\u70B9\u6570",depth:2,title:"\u975E\u8D1F\u6D6E\u70B9\u6570"},{id:"\u90AE\u653F\u7F16\u7801",depth:2,title:"\u90AE\u653F\u7F16\u7801"},{id:"\u5BC6\u7801",depth:2,title:"\u5BC6\u7801"},{id:"\u5BC6\u7801\u5F3A\u5EA6",depth:3,title:"\u5BC6\u7801\u5F3A\u5EA6"},{id:"\u5BC6\u7801\u683C\u5F0F",depth:3,title:"\u5BC6\u7801\u683C\u5F0F"},{id:"\u5F3A\u5BC6\u7801-1",depth:3,title:"\u5F3A\u5BC6\u7801 1"},{id:"\u5F3A\u5BC6\u7801-2",depth:3,title:"\u5F3A\u5BC6\u7801 2"},{id:"ip-\u5730\u5740",depth:2,title:"IP \u5730\u5740"},{id:"\u91D1\u989D\u5206\u9694",depth:2,title:"\u91D1\u989D\u5206\u9694"}],i5=[{value:`
    `,paraId:0},{value:".",paraId:1,tocIndex:0},{value:" - \u9664\u6362\u884C\u7B26\u4EE5\u5916\u7684\u6240\u6709\u5B57\u7B26\u3002",paraId:1,tocIndex:0},{value:`
    `,paraId:0},{value:"^",paraId:2,tocIndex:0},{value:" - \u5B57\u7B26\u4E32\u5F00\u5934\u3002",paraId:2,tocIndex:0},{value:`
    `,paraId:0},{value:"$",paraId:3,tocIndex:0},{value:" - \u5B57\u7B26\u4E32\u7ED3\u5C3E\u3002",paraId:3,tocIndex:0},{value:`
    `,paraId:0},{value:"\\d,\\w,\\s",paraId:4,tocIndex:0},{value:" - \u5339\u914D\u6570\u5B57\u3001\u5B57\u7B26\u3001\u7A7A\u683C\u3002",paraId:4,tocIndex:0},{value:`
    `,paraId:0},{value:"\\D,\\W,\\S",paraId:5,tocIndex:0},{value:" - \u5339\u914D\u975E\u6570\u5B57\u3001\u975E\u5B57\u7B26\u3001\u975E\u7A7A\u683C\u3002",paraId:5,tocIndex:0},{value:`
    `,paraId:0},{value:"[abc]",paraId:6,tocIndex:0},{value:" - \u5339\u914D a\u3001b \u6216 c \u4E2D\u7684\u4E00\u4E2A\u5B57\u6BCD\u3002",paraId:6,tocIndex:0},{value:`
    `,paraId:0},{value:"[a-z]",paraId:7,tocIndex:0},{value:" - \u5339\u914D a \u5230 z \u4E2D\u7684\u4E00\u4E2A\u5B57\u6BCD\u3002",paraId:7,tocIndex:0},{value:`
    `,paraId:0},{value:"[^abc]",paraId:8,tocIndex:0},{value:" - \u5339\u914D\u9664\u4E86 a\u3001b \u6216 c \u4E2D\u7684\u5176\u4ED6\u5B57\u6BCD\u3002",paraId:8,tocIndex:0},{value:`
    `,paraId:0},{value:"aa|bb",paraId:9,tocIndex:0},{value:" - \u5339\u914D aa \u6216 bb\u3002",paraId:9,tocIndex:0},{value:`
    `,paraId:0},{value:"?",paraId:10,tocIndex:0},{value:" - 0 \u6B21\u6216 1 \u6B21\u5339\u914D\u3002",paraId:10,tocIndex:0},{value:`
    `,paraId:0},{value:"*",paraId:11,tocIndex:0},{value:" - \u5339\u914D 0 \u6B21\u6216\u591A\u6B21\u3002",paraId:11,tocIndex:0},{value:`
    `,paraId:0},{value:"+",paraId:12,tocIndex:0},{value:" - \u5339\u914D 1 \u6B21\u6216\u591A\u6B21\u3002",paraId:12,tocIndex:0},{value:`
    `,paraId:0},{value:"{n}",paraId:13,tocIndex:0},{value:" - \u5339\u914D n \u6B21\u3002",paraId:13,tocIndex:0},{value:`
    `,paraId:0},{value:"n,",paraId:14,tocIndex:0},{value:" - \u5339\u914D n \u6B21\u4EE5\u4E0A\u3002",paraId:14,tocIndex:0},{value:`
    `,paraId:0},{value:"{m,n}",paraId:15,tocIndex:0},{value:" - \u6700\u5C11 m \u6B21\uFF0C\u6700\u591A n \u6B21\u5339\u914D\u3002",paraId:15,tocIndex:0},{value:`
    `,paraId:0},{value:"(expr)",paraId:16,tocIndex:0},{value:" - \u6355\u83B7 expr \u5B50\u6A21\u5F0F,\u4EE5 \\1 \u4F7F\u7528\u5B83\u3002",paraId:16,tocIndex:0},{value:`
    `,paraId:0},{value:"(?:expr)",paraId:17,tocIndex:0},{value:" - \u5FFD\u7565\u6355\u83B7\u7684\u5B50\u6A21\u5F0F\u3002",paraId:17,tocIndex:0},{value:`
    `,paraId:0},{value:"(?=expr)",paraId:18,tocIndex:0},{value:" - \u6B63\u5411\u9884\u67E5\u6A21\u5F0F expr\u3002",paraId:18,tocIndex:0},{value:`
    `,paraId:0},{value:"(?!expr)",paraId:19,tocIndex:0},{value:" - \u8D1F\u5411\u9884\u67E5\u6A21\u5F0F expr\u3002",paraId:19,tocIndex:0},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u8F66\u724C\u53F7\uFF08\u4E0D\u542B\u6302\u8F66\uFF09
   * \u6682\u4E0D\u652F\u6301\u7279\u79CD\u8F66\u8F86\u6821\u9A8C
   * @param str
   * @returns
   */
  const isVehicleNumber = (str: string): boolean => {
    // \u4F20\u7EDF\u71C3\u6CB9
    // \u65B0\u80FD\u6E90

    const pattern =
      /^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C]{1}[A-Z]{1}(([A-HJK]{1}[A-HJ-NP-Z0-9]{1}[0-9]{4})|([0-9]{5}[A-HJK]{1})|(?=(.*[A-HJ-NP-Z]){0,2})(?=(.*[0-9]){3,5})[A-HJ-NP-Z0-9]{5})$/;
    return pattern.test(str);
  };
  `,paraId:20,tocIndex:2},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u6302\u8F66\u724C\u53F7
   * @param str
   * @returns
   */
  const isTrailerNumber = (str: string): boolean => {
    const pattern =
      /^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886]{1}[A-Z]{1}[A-Z0-9]{4}[\u6302]{1}$/;
    return pattern.test(str);
  };
  `,paraId:21,tocIndex:3},{value:`/**
   *	\u5927\u9646\u624B\u673A\u53F7\u780111\u4F4D\u6570\uFF0C\u5339\u914D\u683C\u5F0F\uFF1A\u524D\u4E09\u4F4D\u56FA\u5B9A\u683C\u5F0F+\u540E8\u4F4D\u4EFB\u610F\u6570
   *	\u6B64\u65B9\u6CD5\u4E2D\u524D\u4E09\u4F4D\u683C\u5F0F\u6709\uFF1A
   * 13+\u4EFB\u610F\u6570
   * 145,147,149
   * 15+\u96644\u7684\u4EFB\u610F\u6570(\u4E0D\u8981\u5199^4\uFF0C\u8FD9\u6837\u7684\u8BDD\u5B57\u6BCD\u4E5F\u4F1A\u88AB\u8BA4\u4E3A\u662F\u6B63\u786E\u7684)
   * 166
   * 17+3,5,6,7,8
   * 18+\u4EFB\u610F\u6570
   * 198,199
   */
  const isMobilePhone = (str: string): boolean => {
    const pattern =
      /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
    return pattern.test(str);
  };
  `,paraId:22,tocIndex:4},{value:`/**
   *	\u5927\u9646\u624B\u673A\u53F7\u780111\u4F4D\u6570
   *  \u5EA7\u673A: \u533A\u53F73-4\u4F4D \u53F7\u7801: 5-8\u4F4D
   */
  const isMobileOrLandline = (str: string): boolean => {
    const pattern = /^((0\\d{2,3}\\d{5,8})|(1[3456789]\\d{9}))$/;
    return pattern.test(str);
  };
  `,paraId:23,tocIndex:5},{value:`/**
   * \u6821\u9A8C\u8BC1\u4EF6\u53F7
   * @returns
   */
  const isIDNumber = (str: string): boolean => {
    //15\u4F4D\u6570\u8EAB\u4EFD\u8BC1\u6B63\u5219\u8868\u8FBE\u5F0F
    const arg1 = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
    //18\u4F4D\u6570\u8EAB\u4EFD\u8BC1\u6B63\u5219\u8868\u8FBE\u5F0F
    const arg2 =
      /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[X])$/;

    // \u666E\u901A\u7535\u5B50\u62A4\u7167\u9881\u53D1\u7ED9\u56E0\u5B9A\u5C45\u3001\u63A2\u4EB2\u3001\u5B66\u4E60\u3001\u5C31\u4E1A\u3001\u65C5\u884C\u3001\u4ECE\u4E8B\u5546\u52A1\u6D3B\u52A8\u7B49\u975E\u516C\u52A1\u539F\u56E0\u51FA\u56FD\u7684\u4E2D\u56FD\u516C\u6C11\uFF0C\u62A4\u7167\u53F7\u7801\u683C\u5F0F\u5E02\uFF1AE+8 \u4F4D\u6570\u5B57\u7F16\u53F7
    const arg3 = /^E\\d{8}$/;

    // \u516C\u52A1\u62A4\u7167\uFF1ASE+7 \u4F4D\u6570\u5B57\u7F16\u7801
    const arg4 = /^SE\\d{7}$/;

    // \u5916\u4EA4\u62A4\u7167\uFF1ADE+7 \u4F4D\u6570\u5B57\u7F16\u7801
    const arg5 = /^DE\\d{7}$/;

    // \u516C\u52A1\u666E\u901A\u62A4\u7167\uFF1APE+7 \u4F4D\u6570\u5B57\u7F16\u7801
    const arg6 = /^PE\\d{7}$/;

    // \u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A\u62A4\u7167 \u53D1\u7ED9\u6709\u6FB3\u95E8\u7279\u533A\u6C38\u4E45\u6027\u5C45\u6C11\u8EAB\u4EFD\u8BC1\u7684\u4E2D\u56FD\u516C\u6C11\uFF0C\u62A4\u7167\u53F7\u7801\u683C\u5F0F\u662F\uFF1AMA+7 \u4F4D\u7F16\u53F7
    const arg7 = /^MA[A-Z0-9]{7}$/;

    // \u9999\u6E2F\u7279\u522B\u884C\u653F\u533A\u62A4\u7167 \u53D1\u7ED9\u6709\u9999\u6E2F\u6C38\u4E45\u6027\u5C45\u6C11\u8EAB\u4EFD\u8BC1\uFF0C\u5E76\u4EAB\u6709\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A\u5C45\u7559\u6743\u7684\u4E2D\u56FD\u516C\u6C11\uFF0C\u62A4\u7167\u53F7\u683C\u5F0F\u662F\uFF1AK+8 \u4F4D\u7F16\u53F7
    const arg8 = /^K[A-Z0-9]{7}$/;

    if (
      arg1.test(str) ||
      arg2.test(str) ||
      arg3.test(str) ||
      arg4.test(str) ||
      arg5.test(str) ||
      arg6.test(str) ||
      arg7.test(str) ||
      arg8.test(str)
    ) {
      return true;
    } else {
      return false;
    }
  };
  `,paraId:24,tocIndex:6},{value:`/**
   * \u6821\u9A8C\u8EAB\u4EFD\u8BC1\u4EF6\u53F7
   * @returns
   */
  const isIdentityNumber = (str: string): boolean => {
    //18\u4F4D\u6570\u8EAB\u4EFD\u8BC1\u6B63\u5219\u8868\u8FBE\u5F0F
    const pattern =
      /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[X])$/;
    return pattern.test(str);
  };
  `,paraId:25,tocIndex:7},{value:`/**
   * \u6821\u9A8C\u90AE\u7BB1\u683C\u5F0F\u662F\u5426\u6B63\u786E
   * @param str
   * @returns
   */
  const isEmail = (str: string): boolean => {
    const pattern = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$/;
    return pattern.test(str);
  };
  `,paraId:26,tocIndex:8},{value:`/**
   * \u5E10\u53F7\u662F\u5426\u5408\u6CD5(\u5B57\u6BCD\u5F00\u5934\uFF0C\u5141\u8BB85-16\u5B57\u8282\uFF0C\u5141\u8BB8\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF)
   * @param str
   * @returns
   */
  const isValidAccount = (str: string): boolean => {
    const pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    return pattern.test(str);
  };
  `,paraId:27,tocIndex:9},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u5341\u516D\u8FDB\u5236\u989C\u8272
   * @param str
   * @returns
   */
  const isHexColor = (str: string): boolean => {
    const pattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return pattern.test(str);
  };
  `,paraId:28,tocIndex:10},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u6574\u6570
   * @param str
   * @returns
   */
  const isInteger = (str: string): boolean => {
    const pattern = /^-?\\\\d+$/;
    return pattern.test(str);
  };
  `,paraId:29,tocIndex:11},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u975E\u8D1F\u6574\u6570(\u6B63\u6574\u6570+0)
   * @param str
   * @returns
   */
  const isNonNegativeInteger = (str: string): boolean => {
    const pattern = /^\\d+$/;
    return pattern.test(str);
  };
  `,paraId:30,tocIndex:12},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u6B63\u6574\u6570
   * @param str
   * @returns
   */
  const isPositiveInteger = (str: string): boolean => {
    const pattern = /^[0-9]*[1-9][0-9]*$/;
    return pattern.test(str);
  };
  `,paraId:31,tocIndex:13},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u6B63\u6D6E\u70B9\u6570
   * @param str
   * @returns
   */
  const isFPNumber = (str: string): boolean => {
    const pattern =
      /^(([0-9]+\\\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
    return pattern.test(str);
  };
  `,paraId:32,tocIndex:14},{value:`/**
   * \u6821\u9A8C\u662F\u5426\u4E3A\u975E\u8D1F\u6D6E\u70B9\u6570(\u6B63\u6D6E\u70B9\u6570+0)
   * @param str
   * @returns
   */
  const isNonNegFloatNumber = (str: string): boolean => {
    const pattern = /^(\\+)?\\d+(\\.\\d+)?$/;
    return pattern.test(str);
  };
  `,paraId:33,tocIndex:15},{value:`/**
   * \u90AE\u653F\u7F16\u7801
   * @param str \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @returns
   */
  const verifyPostalCode = (str: string): boolean => {
    if (!/^[1-9][0-9]{5}$/.test(str)) return false;
    else return true;
  };
  `,paraId:34,tocIndex:16},{value:`/**
   * \u5BC6\u7801\u5F3A\u5EA6
   * @param str \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @description \u5F31\uFF1A\u7EAF\u6570\u5B57\uFF0C\u7EAF\u5B57\u6BCD\uFF0C\u7EAF\u7279\u6B8A\u5B57\u7B26
   * @description \u4E2D\uFF1A\u5B57\u6BCD+\u6570\u5B57\uFF0C\u5B57\u6BCD+\u7279\u6B8A\u5B57\u7B26\uFF0C\u6570\u5B57+\u7279\u6B8A\u5B57\u7B26
   * @description \u5F3A\uFF1A\u5B57\u6BCD+\u6570\u5B57+\u7279\u6B8A\u5B57\u7B26
   * @returns \u8FD4\u56DE\u5904\u7406\u540E\u7684\u5B57\u7B26\u4E32\uFF1A\u5F31\u3001\u4E2D\u3001\u5F3A
   */
  const verifyPasswordStrength = (str: string): boolean => {
    let v = '';
    // \u5F31\uFF1A\u7EAF\u6570\u5B57\uFF0C\u7EAF\u5B57\u6BCD\uFF0C\u7EAF\u7279\u6B8A\u5B57\u7B26
    if (/^(?:\\d+|[a-zA-Z]+|[!@#$%^&\\.*]+){6,16}$/.test(str)) v = '\u5F31';
    // \u4E2D\uFF1A\u5B57\u6BCD+\u6570\u5B57\uFF0C\u5B57\u6BCD+\u7279\u6B8A\u5B57\u7B26\uFF0C\u6570\u5B57+\u7279\u6B8A\u5B57\u7B26
    if (
      /^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&\\.*]+$)[a-zA-Z\\d!@#$%^&\\.*]{6,16}$/.test(
        str,
      )
    )
      v = '\u4E2D';
    // \u5F3A\uFF1A\u5B57\u6BCD+\u6570\u5B57+\u7279\u6B8A\u5B57\u7B26
    if (
      /^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\\d!@#$%^&\\.*]+$)[a-zA-Z\\d!@#$%^&\\.*]{6,16}$/.test(
        str,
      )
    )
      v = '\u5F3A';
    // \u8FD4\u56DE\u7ED3\u679C
    return v;
  };
  `,paraId:35,tocIndex:18},{value:`/**
   * \u5BC6\u7801 (\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~16\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF)
   * @param str \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @returns \u8FD4\u56DE true: \u5BC6\u7801\u6B63\u786E
   */
  const verifyPassword = (str: string): boolean => {
    // false: \u5BC6\u7801\u4E0D\u6B63\u786E
    if (!/^[a-zA-Z]\\w{5,15}$/.test(str)) return false;
    // true: \u5BC6\u7801\u6B63\u786E
    else return true;
  };
  `,paraId:36,tocIndex:19},{value:`/**
   * \u5F3A\u5BC6\u7801 (\u5B57\u6BCD+\u6570\u5B57+\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u57286-16\u4E4B\u95F4)
   * @param str \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @returns \u8FD4\u56DE true: \u5F3A\u5BC6\u7801\u6B63\u786E
   */
  const verifyPasswordPowerful = (str: string): boolean => {
    // false: \u5F3A\u5BC6\u7801\u4E0D\u6B63\u786E
    if (
      !/^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\\d!@#$%^&\\.*]+$)[a-zA-Z\\d!@#$%^&\\.*]{6,16}$/.test(
        str,
      )
    )
      return false;
    // true: \u5F3A\u5BC6\u7801\u6B63\u786E
    else return true;
  };
  `,paraId:37,tocIndex:20},{value:`/**
   * \u5F3A\u5BC6\u7801(\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\u7684\u7EC4\u5408\uFF0C\u4E0D\u80FD\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u57288-16\u4E4B\u95F4)\uFF1A
   * @param str
   * @returns
   */
  const isStrongPassword(str: string): boolean => {
    const pattern = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/;
    return pattern.test(str);
  }
  `,paraId:38,tocIndex:21},{value:`/**
   * IP\u5730\u5740
   * @param str \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @returns
   */
  const verifyIPAddress = (str: string): boolean => {
    if (
      !/^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/.test(
        str,
      )
    )
      return false;
    else return true;
  };
  `,paraId:39,tocIndex:22},{value:`/**
   * \u91D1\u989D\u7528 \`,\` \u533A\u5206\u5F00
   * @param str \u5F53\u524D\u503C\u5B57\u7B26\u4E32
   * @returns \u8FD4\u56DE\u5904\u7406\u540E\u7684\u5B57\u7B26\u4E32
   */
  const numberComma = (str: string): string => {
    // \u8C03\u7528\u5C0F\u6570\u6216\u6574\u6570(\u4E0D\u53EF\u4EE5\u8D1F\u6570)\u65B9\u6CD5
    let v: any = verifyNumberIntegerAndFloat(str);
    // \u5B57\u7B26\u4E32\u8F6C\u6210\u6570\u7EC4
    v = v.toString().split('.');
    // \\B \u5339\u914D\u975E\u5355\u8BCD\u8FB9\u754C\uFF0C\u4E24\u8FB9\u90FD\u662F\u5355\u8BCD\u5B57\u7B26\u6216\u8005\u4E24\u8FB9\u90FD\u662F\u975E\u5355\u8BCD\u5B57\u7B26
    v[0] = v[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
    // \u6570\u7EC4\u8F6C\u5B57\u7B26\u4E32
    v = v.join('.');
    // \u8FD4\u56DE\u7ED3\u679C
    return v;
  };
  `,paraId:40,tocIndex:23}],M5={},nt={title:"\u6280\u5DE7",toc:"menu",filename:"docs/advance/tips/index.md",order:3,nav:{title:"\u8FDB\u9636",order:2}},R5=[{id:"\u56FE\u7247\u5927\u5C0F\u81EA\u9002\u5E94",depth:2,title:"\u56FE\u7247\u5927\u5C0F\u81EA\u9002\u5E94"}],G5=[{value:"html \u90E8\u5206",paraId:0,tocIndex:0},{value:`<template>
    <div>
      <img src="./1.jpg" />
    </div>
  </template>
  `,paraId:1,tocIndex:0},{value:"css \u90E8\u5206",paraId:2,tocIndex:0},{value:`<style>
    div {
      display: flex;
      align-items: center;
    }
    /* vmin\uFF1A\u53D6 vw \u548C vh \u8F83\u5C0F\u7684\u503C */
    /* vmax\uFF1A\u53D6 vw \u548C vh \u8F83\u5927\u7684\u503C */
    img {
      width: 100vmin;
      height: 100vmin;
    }
  </style>
  `,paraId:3,tocIndex:0}],D5={},Y5={title:"React\u57FA\u7840",toc:"menu",filename:"docs/column/react/index.md",order:4,nav:{title:"\u4E13\u680F",order:3},description:"React \u5C31\u662F Facebook \u7684\u4E00\u4E2A\u5F00\u6E90 JS \u6846\u67B6\uFF0C\u4E13\u6CE8\u7684\u5C42\u9762\u4E3A View \u5C42\uFF0C\u4E0D\u5305\u62EC\u6570\u636E\u8BBF\u95EE\u5C42\u6216\u8005\u90A3\u79CD Hash \u8DEF\u7531\uFF08\u4E0D\u8FC7 React \u6709\u63D2\u4EF6\u652F\u6301\uFF09\uFF0C\u4E0E Angularjs\uFF0CEmberjs \u7B49\u5927\u800C\u5168\u7684\u6846\u67B6\u4E0D\u540C\uFF0CReact \u4E13\u6CE8\u7684\u4E2D\u5FC3\u662F Component\uFF0C\u5373\u7EC4\u4EF6\u3002React \u8BA4\u4E3A\u4E00\u5207\u9875\u9762\u5143 \u7D20\u90FD\u53EF\u4EE5\u62BD\u8C61\u6210\u7EC4\u4EF6\uFF0C\u6BD4\u5982\u4E00\u4E2A\u8868\u5355\uFF0C\u6216\u8005\u8868\u5355\u4E2D\u7684\u67D0\u4E00\u9879\u3002"},at=[{id:"react-\u9762\u8BD5\u4E13\u9898",depth:2,title:"React \u9762\u8BD5\u4E13\u9898"},{id:"reactjs-\u662F-mvvm-\u6846\u67B6\u5417",depth:2,title:"React.js \u662F MVVM \u6846\u67B6\u5417?"},{id:"hooks-\u7528\u8FC7\u5417\u804A\u804A-react-\u4E2D-class-\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B",depth:2,title:"hooks \u7528\u8FC7\u5417\uFF1F\u804A\u804A react \u4E2D class \u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B"},{id:"react-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F",depth:2,title:"React \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F"},{id:"1\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u901A\u4FE1",depth:3,title:"1\uFF09\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u901A\u4FE1"},{id:"2\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u901A\u4FE1",depth:3,title:"2\uFF09\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u901A\u4FE1"},{id:"3\u8DE8\u7EA7\u7EC4\u4EF6\u901A\u4FE1",depth:3,title:"3\uFF09\u8DE8\u7EA7\u7EC4\u4EF6\u901A\u4FE1"},{id:"4\u975E\u5D4C\u5957\u5173\u7CFB\u7684\u7EC4\u4EF6\u901A\u4FE1",depth:3,title:"4\uFF09\u975E\u5D4C\u5957\u5173\u7CFB\u7684\u7EC4\u4EF6\u901A\u4FE1"},{id:"setstate-\u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5",depth:2,title:"setState \u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5"},{id:"\u751F\u547D\u5468\u671F",depth:2,title:"\u751F\u547D\u5468\u671F"},{id:"\u8BF4\u4E00\u4E0B-react-fiber",depth:2,title:"\u8BF4\u4E00\u4E0B react-fiber"},{id:"1\u80CC\u666F",depth:3,title:"1\uFF09\u80CC\u666F"},{id:"2\u5B9E\u73B0\u539F\u7406",depth:3,title:"2\uFF09\u5B9E\u73B0\u539F\u7406"},{id:"portals",depth:2,title:"Portals"},{id:"\u4F55\u65F6\u8981\u4F7F\u7528\u5F02\u6B65\u7EC4\u4EF6\u5982\u548C\u4F7F\u7528\u5F02\u6B65\u7EC4\u4EF6",depth:2,title:"\u4F55\u65F6\u8981\u4F7F\u7528\u5F02\u6B65\u7EC4\u4EF6\uFF1F\u5982\u548C\u4F7F\u7528\u5F02\u6B65\u7EC4\u4EF6"},{id:"react-\u4E8B\u4EF6\u7ED1\u5B9A\u539F\u7406",depth:2,title:"React \u4E8B\u4EF6\u7ED1\u5B9A\u539F\u7406"},{id:"reactlazy-\u5B9E\u73B0\u7684\u539F\u7406",depth:2,title:"React.lazy() \u5B9E\u73B0\u7684\u539F\u7406"}],A5=[{value:"React \u5C31\u662F Facebook \u7684\u4E00\u4E2A\u5F00\u6E90 JS \u6846\u67B6\uFF0C\u4E13\u6CE8\u7684\u5C42\u9762\u4E3A View \u5C42\uFF0C\u4E0D\u5305\u62EC\u6570\u636E\u8BBF\u95EE\u5C42\u6216\u8005\u90A3\u79CD Hash \u8DEF\u7531\uFF08\u4E0D\u8FC7 React \u6709\u63D2\u4EF6\u652F\u6301\uFF09\uFF0C\u4E0E Angularjs\uFF0CEmberjs \u7B49\u5927\u800C\u5168\u7684\u6846\u67B6\u4E0D\u540C\uFF0CReact \u4E13\u6CE8\u7684\u4E2D\u5FC3\u662F Component\uFF0C\u5373\u7EC4\u4EF6\u3002React \u8BA4\u4E3A\u4E00\u5207\u9875\u9762\u5143 \u7D20\u90FD\u53EF\u4EE5\u62BD\u8C61\u6210\u7EC4\u4EF6\uFF0C\u6BD4\u5982\u4E00\u4E2A\u8868\u5355\uFF0C\u6216\u8005\u8868\u5355\u4E2D\u7684\u67D0\u4E00\u9879\u3002",paraId:0,tocIndex:1},{value:"React \u53EF\u4EE5\u4F5C\u4E3A MVVM \u4E2D\u7B2C\u4E8C\u4E2A V\uFF0C\u4E5F\u5C31\u662F View\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F MVVM \u6846\u67B6\u3002MVVM \u4E00\u4E2A\u6700\u663E\u8457\u7684\u7279\u5F81\uFF1A\u53CC\u5411\u7ED1\u5B9A\u3002React \u6CA1\u6709\u8FD9\u4E2A\uFF0C\u5B83\u662F\u5355\u5411\u6570\u636E\u7ED1\u5B9A\u7684\u3002React \u662F\u4E00\u4E2A\u5355\u5411\u6570\u636E\u6D41\u7684\u5E93\uFF0C\u72B6\u6001\u9A71\u52A8\u89C6\u56FE\u3002react \u6574\u4F53\u662F\u51FD\u6570\u5F0F\u7684\u601D\u60F3\uFF0C\u628A\u7EC4\u4EF6\u8BBE\u8BA1\u6210\u7EAF\u7EC4\u4EF6\uFF0C\u72B6\u6001\u548C\u903B\u8F91\u901A\u8FC7\u53C2\u6570\u4F20\u5165\uFF0C\u6240\u4EE5\u5728 react \u4E2D\uFF0C\u662F\u5355\u5411\u6570\u636E\u6D41\uFF0C\u63A8\u5D07\u7ED3\u5408 immutable \u6765\u5B9E\u73B0\u6570\u636E\u4E0D\u53EF\u53D8\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u7EC4\u4EF6\u662F\u4F7F\u7528 ES6 \u7684 class\xA0 \u6765\u5B9A\u4E49\u7684\u7EC4\u4EF6\u3002 \u51FD\u6570\u7EC4\u4EF6\u662F\u63A5\u6536\u4E00\u4E2A\u5355\u4E00\u7684 \xA0",paraId:2,tocIndex:2},{value:"props",paraId:2,tocIndex:2},{value:"\xA0 \u5BF9\u8C61\u5E76\u8FD4\u56DE\u4E00\u4E2A React \u5143\u7D20\u3002",paraId:2,tocIndex:2},{value:'\u5173\u4E8E React \u7684\u4E24\u5957 API\uFF08\u7C7B\uFF08class\uFF09API \u548C\u57FA\u4E8E\u51FD\u6570\u7684\u94A9\u5B50\uFF08hooks\uFF09 API\uFF09\u3002\u5B98\u65B9\u63A8\u8350\u4F7F\u7528\u94A9\u5B50\uFF08\u51FD\u6570\uFF09\uFF0C\u800C\u4E0D\u662F\u7C7B\u3002\u56E0\u4E3A\u94A9\u5B50\u66F4\u7B80\u6D01\uFF0C\u4EE3\u7801\u91CF\u5C11\uFF0C\u7528\u8D77\u6765\u6BD4\u8F83"\u8F7B"\uFF0C\u800C\u7C7B\u6BD4\u8F83"\u91CD"\u3002\u800C\u4E14\uFF0C\u94A9\u5B50\u662F\u51FD\u6570\uFF0C\u66F4\u7B26\u5408 React \u51FD\u6570\u5F0F\u7684\u672C\u8D28\u3002',paraId:3,tocIndex:2},{value:"\u51FD\u6570\u4E00\u822C\u6765\u8BF4\uFF0C\u53EA\u5E94\u8BE5\u505A\u4E00\u4EF6\u4E8B\uFF0C\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002 \u5982\u679C\u4F60\u6709\u591A\u4E2A\u64CD\u4F5C\uFF0C\u6BCF\u4E2A\u64CD\u4F5C\u5E94\u8BE5\u5199\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u51FD\u6570\u3002\u800C\u4E14\uFF0C\u6570\u636E\u7684\u72B6\u6001\u5E94\u8BE5\u4E0E\u64CD\u4F5C\u65B9\u6CD5\u5206\u79BB\u3002\u6839\u636E\u51FD\u6570\u8FD9\u79CD\u7406\u5FF5\uFF0CReact \u7684\u51FD\u6570\u7EC4\u4EF6\u53EA\u5E94\u8BE5\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF1A\u8FD4\u56DE\u7EC4\u4EF6\u7684 HTML \u4EE3\u7801\uFF0C\u800C\u6CA1\u6709\u5176\u4ED6\u7684\u529F\u80FD\u3002\u51FD\u6570\u7684\u8FD4\u56DE\u7ED3\u679C\u53EA\u4F9D\u8D56\u4E8E\u5B83\u7684\u53C2\u6570\u3002\u4E0D\u6539\u53D8\u51FD\u6570\u4F53\u5916\u90E8\u6570\u636E\u3001\u51FD\u6570\u6267\u884C\u8FC7\u7A0B\u91CC\u9762\u6CA1\u6709\u526F\u4F5C\u7528\u3002",paraId:4,tocIndex:2},{value:"\u7C7B\uFF08class\uFF09\u662F\u6570\u636E\u548C\u903B\u8F91\u7684\u5C01\u88C5\u3002 \u4E5F\u5C31\u662F\u8BF4\uFF0C\u7EC4\u4EF6\u7684\u72B6\u6001\u548C\u64CD\u4F5C\u65B9\u6CD5\u662F\u5C01\u88C5\u5728\u4E00\u8D77\u7684\u3002\u5982\u679C\u9009\u62E9\u4E86\u7C7B\u7684\u5199\u6CD5\uFF0C\u5C31\u5E94\u8BE5\u628A\u76F8\u5173\u7684\u6570\u636E\u548C\u64CD\u4F5C\uFF0C\u90FD\u5199\u5728\u540C\u4E00\u4E2A class \u91CC\u9762\u3002",paraId:5,tocIndex:2},{value:"\u7C7B\u7EC4\u4EF6\u7684\u7F3A\u70B9",paraId:6,tocIndex:2},{value:" :",paraId:6,tocIndex:2},{value:"\u5927\u578B\u7EC4\u4EF6\u5F88\u96BE\u62C6\u5206\u548C\u91CD\u6784\uFF0C\u4E5F\u5F88\u96BE\u6D4B\u8BD5\u3002",paraId:7,tocIndex:2},{value:`
  \u4E1A\u52A1\u903B\u8F91\u5206\u6563\u5728\u7EC4\u4EF6\u7684\u5404\u4E2A\u65B9\u6CD5\u4E4B\u4E2D\uFF0C\u5BFC\u81F4\u91CD\u590D\u903B\u8F91\u6216\u5173\u8054\u903B\u8F91\u3002`,paraId:7,tocIndex:2},{value:`
  \u7EC4\u4EF6\u7C7B\u5F15\u5165\u4E86\u590D\u6742\u7684\u7F16\u7A0B\u6A21\u5F0F\uFF0C\u6BD4\u5982 render props \u548C\u9AD8\u9636\u7EC4\u4EF6\u3002`,paraId:7,tocIndex:2},{value:`
  \u96BE\u4EE5\u7406\u89E3\u7684 class\uFF0C\u7406\u89E3 JavaScript \u4E2D \xA0`,paraId:7,tocIndex:2},{value:"this",paraId:7,tocIndex:2},{value:"\xA0 \u7684\u5DE5\u4F5C\u65B9\u5F0F\u3002",paraId:7,tocIndex:2},{value:"\u533A\u522B",paraId:8,tocIndex:2},{value:"\uFF1A",paraId:8,tocIndex:2},{value:"\u51FD\u6570\u7EC4\u4EF6\u7684\u6027\u80FD\u6BD4\u7C7B\u7EC4\u4EF6\u7684\u6027\u80FD\u8981\u9AD8\uFF0C\u56E0\u4E3A\u7C7B\u7EC4\u4EF6\u4F7F\u7528\u7684\u65F6\u5019\u8981\u5B9E\u4F8B\u5316\uFF0C\u800C\u51FD\u6570\u7EC4\u4EF6\u76F4\u63A5\u6267\u884C\u51FD\u6570\u53D6\u8FD4\u56DE\u7ED3\u679C\u5373\u53EF\u3002",paraId:9,tocIndex:2},{value:"1.\u72B6\u6001\u7684\u6709\u65E0",paraId:10,tocIndex:2},{value:`
  hooks \u51FA\u73B0\u4E4B\u524D\uFF0C\u51FD\u6570\u7EC4\u4EF6`,paraId:10,tocIndex:2},{value:"\u6CA1\u6709\u5B9E\u4F8B",paraId:10,tocIndex:2},{value:"\uFF0C",paraId:10,tocIndex:2},{value:"\u6CA1\u6709\u751F\u547D\u5468\u671F",paraId:10,tocIndex:2},{value:"\uFF0C",paraId:10,tocIndex:2},{value:"\u6CA1\u6709state",paraId:10,tocIndex:2},{value:"\uFF0C",paraId:10,tocIndex:2},{value:"\u6CA1\u6709this",paraId:10,tocIndex:2},{value:"\uFF0C\u6240\u4EE5\u6211\u4EEC\u79F0\u51FD\u6570\u7EC4\u4EF6\u4E3A\u65E0\u72B6\u6001\u7EC4\u4EF6\u3002 hooks \u51FA\u73B0\u4E4B\u524D\uFF0Creact \u4E2D\u7684\u51FD\u6570\u7EC4\u4EF6\u901A\u5E38\u53EA\u8003\u8651\u8D1F\u8D23 UI \u7684\u6E32\u67D3\uFF0C\u6CA1\u6709\u81EA\u8EAB\u7684\u72B6\u6001\u6CA1\u6709\u4E1A\u52A1\u903B\u8F91\u4EE3\u7801\uFF0C\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\u3002\u5B83\u7684\u8F93\u51FA\u53EA\u7531\u53C2\u6570 props \u51B3\u5B9A\uFF0C\u4E0D\u53D7\u5176\u4ED6\u4EFB\u4F55\u56E0\u7D20\u5F71\u54CD\u3002",paraId:10,tocIndex:2},{value:"2.\u8C03\u7528\u65B9\u5F0F\u7684\u4E0D\u540C",paraId:11,tocIndex:2},{value:`
  \u51FD\u6570\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u5C06\u91CD\u65B0\u8C03\u7528\u7EC4\u4EF6\u65B9\u6CD5\u8FD4\u56DE\u65B0\u7684 react \u5143\u7D20\u3002\u7C7B\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u5C06 new \u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528 render \u7C7B\u65B9\u6CD5\u8FD4\u56DE react \u5143\u7D20\uFF0C\u8FD9\u4E5F\u8BF4\u660E\u4E3A\u4EC0\u4E48\u7C7B\u7EC4\u4EF6\u4E2D this \u662F\u53EF\u53D8\u7684\u3002`,paraId:11,tocIndex:2},{value:"3.\u56E0\u4E3A\u8C03\u7528\u65B9\u5F0F\u4E0D\u540C\uFF0C\u5728\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\u4E2D\u4F1A\u51FA\u73B0\u95EE\u9898",paraId:12,tocIndex:2},{value:`
  \u5728\u64CD\u4F5C\u4E2D\u6539\u53D8\u72B6\u6001\u503C\uFF0C\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u83B7\u53D6\u6700\u65B0\u7684\u72B6\u6001\u503C\uFF0C\u800C\u51FD\u6570\u7EC4\u4EF6\u5219\u4F1A\u6309\u7167\u987A\u5E8F\u8FD4\u56DE\u72B6\u6001\u503C`,paraId:12,tocIndex:2},{value:"React Hooks\uFF08\u94A9\u5B50\u7684\u4F5C\u7528\uFF09",paraId:13,tocIndex:2},{value:"Hook",paraId:14,tocIndex:2},{value:"\xA0 \u662F React 16.8 \u7684\u65B0\u589E\u7279\u6027\u3002\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u7F16\u5199 class \u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 state \u4EE5\u53CA\u5176\u4ED6\u7684 React \u7279\u6027\u3002",paraId:14,tocIndex:2},{value:"React Hooks \u7684\u51E0\u4E2A\u5E38\u7528\u94A9\u5B50:",paraId:15,tocIndex:2},{value:"useState()",paraId:16,tocIndex:2},{value:" //\u72B6\u6001\u94A9\u5B50",paraId:16,tocIndex:2},{value:"useContext()",paraId:16,tocIndex:2},{value:" //\u5171\u4EAB\u72B6\u6001\u94A9\u5B50",paraId:16,tocIndex:2},{value:"useReducer()",paraId:16,tocIndex:2},{value:" //action \u94A9\u5B50",paraId:16,tocIndex:2},{value:"useEffect()",paraId:16,tocIndex:2},{value:" //\u526F\u4F5C\u7528\u94A9\u5B50",paraId:16,tocIndex:2},{value:"\u8FD8\u6709\u51E0\u4E2A\u4E0D\u5E38\u89C1\u7684\u5927\u6982\u7684\u8BF4\u4E0B\uFF0C\u540E\u7EED\u4F1A\u4E13\u95E8\u5199\u7BC7\u6587\u7AE0\u63CF\u8FF0\u4E0B",paraId:17,tocIndex:2},{value:"1.useCallback \u8BB0\u5FC6\u51FD\u6570 \u4E00\u822C\u628A",paraId:18,tocIndex:2},{value:"\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7406\u89E3\u4E3A class \u7EC4\u4EF6 render \u51FD\u6570\u7684\u8BED\u6CD5\u7CD6",paraId:18,tocIndex:2},{value:"\uFF0C\u6240\u4EE5\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5185\u90E8\u6240\u6709\u7684\u4EE3\u7801\u90FD\u4F1A\u91CD\u65B0\u6267\u884C\u4E00\u904D\u3002\u800C\u6709\u4E86 useCallback \u5C31\u4E0D\u4E00\u6837\u4E86\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 useCallback \u83B7\u5F97\u4E00\u4E2A\u8BB0\u5FC6\u540E\u7684\u51FD\u6570\u3002",paraId:18,tocIndex:2},{value:`function App() {
    const memoizedHandleClick = useCallback(() => {
      console.log('Click happened');
    }, []); // \u7A7A\u6570\u7EC4\u4EE3\u8868\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\u4E0B\u8BE5\u51FD\u6570\u90FD\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8
    return (
      <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>
    );
  }
  `,paraId:19,tocIndex:2},{value:"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879\u4E00\u65E6\u503C\u6216\u8005\u5F15\u7528\u53D1\u751F\u6539\u53D8\uFF0CuseCallback \u5C31\u4F1A\u91CD\u65B0\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u8BB0\u5FC6\u51FD\u6570\u63D0\u4F9B\u7ED9\u540E\u9762\u8FDB\u884C\u6E32\u67D3\u3002",paraId:20,tocIndex:2},{value:"2.useMemo \u8BB0\u5FC6\u7EC4\u4EF6 useCallback \u7684\u529F\u80FD\u5B8C\u5168\u53EF\u4EE5\u7531 useMemo \u6240\u53D6\u4EE3\uFF0C\u5982\u679C\u4F60\u60F3\u901A\u8FC7\u4F7F\u7528 useMemo \u8FD4\u56DE\u4E00\u4E2A\u8BB0\u5FC6\u51FD\u6570\u4E5F\u662F\u5B8C\u5168\u53EF\u4EE5\u7684\u3002 \u552F\u4E00\u7684\u533A\u522B\u662F\uFF1A",paraId:21,tocIndex:2},{value:"useCallback \u4E0D\u4F1A\u6267\u884C\u7B2C\u4E00\u4E2A\u53C2\u6570\u51FD\u6570\uFF0C\u800C\u662F\u5C06\u5B83\u8FD4\u56DE\u7ED9\u4F60\uFF0C\u800C useMemo \u4F1A\u6267\u884C\u7B2C\u4E00\u4E2A\u51FD\u6570\u5E76\u4E14\u5C06\u51FD\u6570\u6267\u884C\u7ED3\u679C\u8FD4\u56DE\u7ED9\u4F60",paraId:21,tocIndex:2},{value:"\u3002",paraId:21,tocIndex:2},{value:`
  \u6240\u4EE5 useCallback \u5E38\u7528\u8BB0\u5FC6\u4E8B\u4EF6\u51FD\u6570\uFF0C\u751F\u6210\u8BB0\u5FC6\u540E\u7684\u4E8B\u4EF6\u51FD\u6570\u5E76\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u4F7F\u7528\u3002\u800C useMemo \u66F4\u9002\u5408\u7ECF\u8FC7\u51FD\u6570\u8BA1\u7B97\u5F97\u5230\u4E00\u4E2A\u786E\u5B9A\u7684\u503C\uFF0C\u6BD4\u5982\u8BB0\u5FC6\u7EC4\u4EF6\u3002`,paraId:21,tocIndex:2},{value:"3.useRef \u4FDD\u5B58\u5F15\u7528\u503C",paraId:22,tocIndex:2},{value:"useRef \u8DDF createRef \u7C7B\u4F3C\uFF0C\u90FD\u53EF\u4EE5\u7528\u6765\u751F\u6210\u5BF9 DOM \u5BF9\u8C61\u7684\u5F15\u7528\u3002useRef \u8FD4\u56DE\u7684\u503C\u4F20\u9012\u7ED9\u7EC4\u4EF6\u6216\u8005 DOM \u7684 ref \u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7 ref.current \u503C",paraId:23,tocIndex:2},{value:"\u8BBF\u95EE\u7EC4\u4EF6\u6216\u771F\u5B9E\u7684 DOM \u8282\u70B9\uFF0C\u91CD\u70B9\u662F\u7EC4\u4EF6\u4E5F\u662F\u53EF\u4EE5\u8BBF\u95EE\u5230\u7684",paraId:23,tocIndex:2},{value:"\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5BF9 DOM \u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982\u76D1\u542C\u4E8B\u4EF6\u7B49\u7B49\u3002",paraId:23,tocIndex:2},{value:"4.useImperativeHandle \u7A7F\u900F Ref",paraId:24,tocIndex:2},{value:"\u901A\u8FC7 useImperativeHandle \u7528\u4E8E\u8BA9\u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5185\u7684\u7D22\u5F15",paraId:25,tocIndex:2},{value:"5.useLayoutEffect \u540C\u6B65\u6267\u884C\u526F\u4F5C\u7528",paraId:26,tocIndex:2},{value:"\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 useEffect \u5C31\u53EF\u4EE5\u5E2E\u6211\u4EEC\u5904\u7406\u7EC4\u4EF6\u7684\u526F\u4F5C\u7528\uFF0C\u4F46\u662F\u5982\u679C\u60F3\u8981\u540C\u6B65\u8C03\u7528\u4E00\u4E9B\u526F\u4F5C\u7528\uFF0C\u6BD4\u5982\u5BF9 DOM \u7684\u64CD\u4F5C\uFF0C\u5C31\u9700\u8981\u4F7F\u7528 useLayoutEffect\uFF0CuseLayoutEffect \u4E2D\u7684\u526F\u4F5C\u7528\u4F1A\u5728 DOM \u66F4\u65B0\u4E4B\u540E\u540C\u6B65\u6267\u884C\u3002",paraId:27,tocIndex:2},{value:"useEffect \u548C useLayoutEffect \u6709\u4EC0\u4E48\u533A\u522B",paraId:28,tocIndex:2},{value:"\uFF1A\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u8C03\u7528\u65F6\u673A\u4E0D\u540C\uFF0CuseLayoutEffect \u548C\u539F\u6765 componentDidMount&componentDidUpdate \u4E00\u81F4\uFF0C\u5728 react \u5B8C\u6210 DOM \u66F4\u65B0\u540E\u9A6C\u4E0A\u540C\u6B65\u8C03\u7528\u7684\u4EE3\u7801\uFF0C\u4F1A\u963B\u585E\u9875\u9762\u6E32\u67D3\u3002\u800C useEffect \u662F\u4F1A\u5728\u6574\u4E2A\u9875\u9762\u6E32\u67D3\u5B8C\u624D\u4F1A\u8C03\u7528\u7684\u4EE3\u7801\u3002",paraId:28,tocIndex:2},{value:"\u5B98\u65B9\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528useEffect",paraId:28,tocIndex:2},{value:"react \u7EC4\u4EF6\u95F4\u901A\u4FE1\u5E38\u89C1\u7684\u51E0\u79CD\u60C5\u51B5:",paraId:29,tocIndex:3},{value:"\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u901A\u4FE1",paraId:30,tocIndex:3},{value:"\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u901A\u4FE1",paraId:31,tocIndex:3},{value:"\u8DE8\u7EA7\u7EC4\u4EF6\u901A\u4FE1",paraId:32,tocIndex:3},{value:"\u975E\u5D4C\u5957\u5173\u7CFB\u7684\u7EC4\u4EF6\u901A\u4FE1",paraId:33,tocIndex:3},{value:"\u7236\u7EC4\u4EF6\u901A\u8FC7 props \u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u9700\u8981\u7684\u4FE1\u606F\u3002\u7236\u4F20\u5B50\u662F\u5728\u7236\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u7ED1\u5B9A\u4E00\u4E2A\u6B63\u5E38\u7684\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5C31\u662F\u6307\u5177\u4F53\u7684\u503C\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\uFF0C\u7528 props \u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u8FD9\u4E2A\u503C",paraId:34,tocIndex:4},{value:`// \u5B50\u7EC4\u4EF6: Child
  const Child = (props) => {
    return <p>{props.name}</p>;
  };

  // \u7236\u7EC4\u4EF6 Parent
  const Parent = () => {
    return <Child name="\u4EAC\u7A0B\u4E00\u706F"></Child>;
  };
  `,paraId:35,tocIndex:4},{value:"props+\u56DE\u8C03\u7684\u65B9\u5F0F\uFF0C\u4F7F\u7528\u516C\u5171\u7EC4\u4EF6\u8FDB\u884C\u72B6\u6001\u63D0\u5347\u3002\u5B50\u4F20\u7236\u662F\u5148\u5728\u7236\u7EC4\u4EF6\u4E0A\u7ED1\u5B9A\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5F53\u5B50\u7EC4\u4EF6\u9700\u8981\u7ED9\u7236\u7EC4\u4EF6\u4F20\u503C\u7684\u65F6\u5019\uFF0C\u5219\u901A\u8FC7 props \u8C03\u7528\u8BE5\u51FD\u6570\u5C06\u53C2\u6570\u4F20\u5165\u5230\u8BE5\u51FD\u6570\u5F53\u4E2D\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u5728\u7236\u7EC4\u4EF6\u4E2D\u7684\u51FD\u6570\u4E2D\u63A5\u6536\u5230\u8BE5\u53C2\u6570\u4E86\uFF0C\u8FD9\u4E2A\u53C2\u6570\u5219\u4E3A\u5B50\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684\u503C",paraId:36,tocIndex:5},{value:`// \u5B50\u7EC4\u4EF6: Child
  const Child = (props) => {
    const cb = (msg) => {
      return () => {
        props.callback(msg);
      };
    };
    return <button onClick={cb('\u4EAC\u7A0B\u4E00\u706F\u6B22\u8FCE\u4F60!')}>\u4EAC\u7A0B\u4E00\u706F\u6B22\u8FCE\u4F60</button>;
  };

  // \u7236\u7EC4\u4EF6 Parent
  class Parent extends Component {
    callback(msg) {
      console.log(msg);
    }
    render() {
      return <Child callback={this.callback.bind(this)}></Child>;
    }
  }
  `,paraId:37,tocIndex:5},{value:"\u5373\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u5411\u66F4\u6DF1\u5C42\u5B50\u7EC4\u4EF6\u901A\u4FE1\u3002",paraId:38,tocIndex:6},{value:"\u4F7F\u7528 props\uFF0C\u5229\u7528\u4E2D\u95F4\u7EC4\u4EF6\u5C42\u5C42\u4F20\u9012,\u4F46\u662F\u5982\u679C\u7236\u7EC4\u4EF6\u7ED3\u6784\u8F83\u6DF1\uFF0C\u90A3\u4E48\u4E2D\u95F4\u6BCF\u4E00\u5C42\u7EC4\u4EF6\u90FD\u8981\u53BB\u4F20\u9012 props\uFF0C\u589E\u52A0\u4E86\u590D\u6742\u5EA6\uFF0C\u5E76\u4E14\u8FD9\u4E9B props \u5E76\u4E0D\u662F\u4E2D\u95F4\u7EC4\u4EF6\u81EA\u5DF1\u9700\u8981\u7684\u3002",paraId:39,tocIndex:6},{value:"\u4F7F\u7528 context\uFF0Ccontext \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5927\u5BB9\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u8981\u901A\u4FE1\u7684\u5185\u5BB9\u653E\u5728\u8FD9\u4E2A\u5BB9\u5668\u4E2D\uFF0C\u8FD9\u6837\u4E0D\u7BA1\u5D4C\u5957\u591A\u6DF1\uFF0C\u90FD\u53EF\u4EE5\u968F\u610F\u53D6\u7528\uFF0C\u5BF9\u4E8E\u8DE8\u8D8A\u591A\u5C42\u7684\u5168\u5C40\u6570\u636E\u53EF\u4EE5\u4F7F\u7528 context \u5B9E\u73B0\u3002",paraId:39,tocIndex:6},{value:`// context\u65B9\u5F0F\u5B9E\u73B0\u8DE8\u7EA7\u7EC4\u4EF6\u901A\u4FE1
  // Context \u8BBE\u8BA1\u76EE\u7684\u662F\u4E3A\u4E86\u5171\u4EAB\u90A3\u4E9B\u5BF9\u4E8E\u4E00\u4E2A\u7EC4\u4EF6\u6811\u800C\u8A00\u662F\u201C\u5168\u5C40\u201D\u7684\u6570\u636E

  const BatteryContext = createContext();

  //  \u5B50\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6
  class GrandChild extends Component {
    render() {
      return (
        <BatteryContext.Consumer>
          {(color) => <h1 style={{ color: color }}>\u6211\u662F\u7EA2\u8272\u7684:{color}</h1>}
        </BatteryContext.Consumer>
      );
    }
  }

  //  \u5B50\u7EC4\u4EF6
  const Child = () => {
    return <GrandChild />;
  };
  // \u7236\u7EC4\u4EF6
  class Parent extends Component {
    state = {
      color: 'red',
    };
    render() {
      const { color } = this.state;
      return (
        <BatteryContext.Provider value={color}>
          <Child></Child>
        </BatteryContext.Provider>
      );
    }
  }
  `,paraId:40,tocIndex:6},{value:"\u5373\u6CA1\u6709\u4EFB\u4F55\u5305\u542B\u5173\u7CFB\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u5144\u5F1F\u7EC4\u4EF6\u4EE5\u53CA\u4E0D\u5728\u540C\u4E00\u4E2A\u7236\u7EA7\u4E2D\u7684\u975E\u5144\u5F1F\u7EC4\u4EF6\u3002",paraId:41,tocIndex:7},{value:"\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u901A\u4FE1\uFF08\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF09\uFF0C\u4F7F\u7528 pubsub-js",paraId:42,tocIndex:7},{value:"\u53EF\u4EE5\u901A\u8FC7 redux \u7B49\u8FDB\u884C\u5168\u5C40\u72B6\u6001\u7BA1\u7406",paraId:43,tocIndex:7},{value:"\u5982\u679C\u662F\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u53EF\u4EE5\u627E\u5230\u8FD9\u4E24\u4E2A\u5144\u5F1F\u8282\u70B9\u5171\u540C\u7684\u7236\u8282\u70B9, \u7ED3\u5408\u7236\u5B50\u95F4\u901A\u4FE1\u65B9\u5F0F\u8FDB\u884C\u901A\u4FE1\u3002",paraId:44,tocIndex:7},{value:"\u4E5F\u53EF\u4EE5 new \u4E00\u4E2A Vue \u7684 EventBus,\u8FDB\u884C\u4E8B\u4EF6\u76D1\u542C\uFF0C\u4E00\u8FB9\u6267\u884C\u76D1\u542C\uFF0C\u4E00\u8FB9\u6267\u884C\u65B0\u589E VUE \u7684 eventBus \u5C31\u662F\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u662F\u53EF\u4EE5\u5728 React \u4E2D\u4F7F\u7528\u7684;",paraId:45,tocIndex:7},{value:"1.\u5F02\u6B65\u60C5\u51B5 \u5728",paraId:46,tocIndex:8},{value:"React\u4E8B\u4EF6\u5F53\u4E2D\u662F\u5F02\u6B65\u64CD\u4F5C",paraId:46,tocIndex:8},{value:"2.\u540C\u6B65\u60C5\u51B5 \u5982\u679C\u662F\u5728",paraId:47,tocIndex:8},{value:"setTimeout\u4E8B\u4EF6\u6216\u8005\u81EA\u5B9A\u4E49\u7684dom\u4E8B\u4EF6",paraId:47,tocIndex:8},{value:"\u4E2D\uFF0C\u90FD\u662F\u540C\u6B65\u7684",paraId:47,tocIndex:8},{value:`//setTimeout\u4E8B\u4EF6
  import React, { Component } from 'react';
  class Count extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    render() {
      return (
        <>
          <p>count:{this.state.count}</p>
          <button onClick={this.btnAction}>\u589E\u52A0</button>
        </>
      );
    }

    btnAction = () => {
      //\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539state\uFF0C\u9700\u8981\u901A\u8FC7setState\u8FDB\u884C\u4FEE\u6539
      //\u540C\u6B65
      setTimeout(() => {
        this.setState({
          count: this.state.count + 1,
        });
        console.log(this.state.count);
      });
    };
  }

  export default Count;
  `,paraId:48,tocIndex:8},{value:`//\u81EA\u5B9A\u4E49dom\u4E8B\u4EF6
  import React, { Component } from 'react';
  class Count extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    render() {
      return (
        <>
          <p>count:{this.state.count}</p>
          <button id="btn">\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6</button>
        </>
      );
    }

    componentDidMount() {
      //\u81EA\u5B9A\u4E49dom\u4E8B\u4EF6\uFF0C\u4E5F\u662F\u540C\u6B65\u4FEE\u6539
      document.querySelector('#btn').addEventListener('click', () => {
        this.setState({
          count: this.state.count + 1,
        });
        console.log(this.state.count);
      });
    }
  }

  export default Count;
  `,paraId:49,tocIndex:8},{value:`\u5B89\u88C5
  \u5F53\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u88AB\u521B\u5EFA\u5E76\u63D2\u5165\u5230 DOM \u4E2D\u65F6\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u6309\u4EE5\u4E0B\u987A\u5E8F\u8C03\u7528\uFF1A

  constructor()
  static getDerivedStateFromProps()
  render()
  componentDidMount()

  \u66F4\u65B0\u4E2D
  \u66F4\u65B0\u53EF\u80FD\u7531\u9053\u5177\u6216\u72B6\u6001\u7684\u66F4\u6539\u5F15\u8D77\u3002\u5F53\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u65F6\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u6309\u4EE5\u4E0B\u987A\u5E8F\u8C03\u7528\uFF1A

  static getDerivedStateFromProps()
  shouldComponentUpdate()
  render()
  getSnapshotBeforeUpdate()
  componentDidUpdate()

  \u5378\u8F7D
  \u5F53\u7EC4\u4EF6\u4ECE DOM \u4E2D\u79FB\u9664\u65F6\u8C03\u7528\u6B64\u65B9\u6CD5\uFF1A

  componentWillUnmount()
  `,paraId:50,tocIndex:9},{value:"react-fiber \u4EA7\u751F\u7684\u6839\u672C\u539F\u56E0\uFF0C\u662F",paraId:51,tocIndex:11},{value:"\u5927\u91CF\u7684\u540C\u6B65\u8BA1\u7B97\u4EFB\u52A1\u963B\u585E\u4E86\u6D4F\u89C8\u5668\u7684 UI \u6E32\u67D3",paraId:51,tocIndex:11},{value:"\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CJS \u8FD0\u7B97\u3001\u9875\u9762\u5E03\u5C40\u548C\u9875\u9762\u7ED8\u5236\u90FD\u662F\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u7684\u4E3B\u7EBF\u7A0B\u5F53\u4E2D\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u662F\u4E92\u65A5\u7684\u5173\u7CFB\u3002\u5982\u679C JS \u8FD0\u7B97\u6301\u7EED\u5360\u7528\u4E3B\u7EBF\u7A0B\uFF0C\u9875\u9762\u5C31\u6CA1\u6CD5\u5F97\u5230\u53CA\u65F6\u7684\u66F4\u65B0\u3002\u5F53\u6211\u4EEC\u8C03\u7528",paraId:51,tocIndex:11},{value:"setState",paraId:51,tocIndex:11},{value:"\u66F4\u65B0\u9875\u9762\u7684\u65F6\u5019\uFF0CReact \u4F1A\u904D\u5386\u5E94\u7528\u7684\u6240\u6709\u8282\u70B9\uFF0C\u8BA1\u7B97\u51FA\u5DEE\u5F02\uFF0C\u7136\u540E\u518D\u66F4\u65B0 UI\u3002\u5982\u679C\u9875\u9762\u5143\u7D20\u5F88\u591A\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5360\u7528\u7684\u65F6\u673A\u5C31\u53EF\u80FD\u8D85\u8FC7 16 \u6BEB\u79D2\uFF0C\u5C31\u5BB9\u6613\u51FA\u73B0\u6389\u5E27\u7684\u73B0\u8C61\u3002",paraId:51,tocIndex:11},{value:"react \u5185\u90E8\u8FD0\u8F6C\u5206\u4E09\u5C42\uFF1A",paraId:52,tocIndex:12},{value:"Virtual DOM \u5C42\uFF0C\u63CF\u8FF0\u9875\u9762\u957F\u4EC0\u4E48\u6837\u3002",paraId:53,tocIndex:12},{value:"Reconciler \u5C42\uFF0C\u8D1F\u8D23\u8C03\u7528\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF0C\u8FDB\u884C Diff \u8FD0\u7B97\u7B49\u3002",paraId:53,tocIndex:12},{value:"Renderer \u5C42\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u5E73\u53F0\uFF0C\u6E32\u67D3\u51FA\u76F8\u5E94\u7684\u9875\u9762\uFF0C\u6BD4\u8F83\u5E38\u89C1\u7684\u662F ReactDOM \u548C ReactNative\u3002",paraId:53,tocIndex:12},{value:"Fiber \u5176\u5B9E\u6307\u7684\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u53EF\u4EE5\u7528\u4E00\u4E2A\u7EAF JS \u5BF9\u8C61\u6765\u8868\u793A",paraId:54,tocIndex:12},{value:"\uFF1A",paraId:54,tocIndex:12},{value:`const fiber = {
      stateNode,    // \u8282\u70B9\u5B9E\u4F8B
      child,        // \u5B50\u8282\u70B9
      sibling,      // \u5144\u5F1F\u8282\u70B9
      return,       // \u7236\u8282\u70B9
  }
  `,paraId:55,tocIndex:12},{value:"\u4E3A\u4E86\u5B9E\u73B0\u4E0D\u5361\u987F\uFF0C\u5C31\u9700\u8981\u6709\u4E00\u4E2A\u8C03\u5EA6\u5668 (Scheduler) \u6765\u8FDB\u884C\u4EFB\u52A1\u5206\u914D\u3002\u4F18\u5148\u7EA7\u9AD8\u7684\u4EFB\u52A1\uFF08\u5982\u952E\u76D8\u8F93\u5165\uFF09\u53EF\u4EE5\u6253\u65AD\u4F18\u5148\u7EA7\u4F4E\u7684\u4EFB\u52A1\uFF08\u5982 Diff\uFF09\u7684\u6267\u884C\uFF0C\u4ECE\u800C\u66F4\u5FEB\u7684\u751F\u6548\u3002\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u6709\u516D\u79CD\uFF1A",paraId:56,tocIndex:12},{value:"synchronous\uFF0C\u4E0E\u4E4B\u524D\u7684 Stack Reconciler \u64CD\u4F5C\u4E00\u6837\uFF0C\u540C\u6B65\u6267\u884C",paraId:57,tocIndex:12},{value:"task\uFF0C\u5728 next tick \u4E4B\u524D\u6267\u884C",paraId:57,tocIndex:12},{value:"animation\uFF0C\u4E0B\u4E00\u5E27\u4E4B\u524D\u6267\u884C",paraId:57,tocIndex:12},{value:"high\uFF0C\u5728\u4E0D\u4E45\u7684\u5C06\u6765\u7ACB\u5373\u6267\u884C",paraId:57,tocIndex:12},{value:"low\uFF0C\u7A0D\u5FAE\u5EF6\u8FDF\u6267\u884C\u4E5F\u6CA1\u5173\u7CFB",paraId:57,tocIndex:12},{value:"offscreen\uFF0C\u4E0B\u4E00\u6B21 render \u65F6\u6216 scroll \u65F6\u624D\u6267\u884C",paraId:57,tocIndex:12},{value:"Fiber Reconciler\uFF08react \uFF09\u6267\u884C\u8FC7\u7A0B\u5206\u4E3A 2 \u4E2A\u9636\u6BB5\uFF1A",paraId:58,tocIndex:12},{value:"\u9636\u6BB5\u4E00\uFF0C\u751F\u6210 Fiber \u6811\uFF0C\u5F97\u51FA\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u4FE1\u606F\u3002\u8FD9\u4E00\u6B65\u662F\u4E00\u4E2A\u6E10\u8FDB\u7684\u8FC7\u7A0B\uFF0C\u53EF\u4EE5\u88AB\u6253\u65AD\u3002\u9636\u6BB5\u4E00\u53EF\u88AB\u6253\u65AD\u7684\u7279\u6027\uFF0C\u8BA9\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4EFB\u52A1\u5148\u6267\u884C\uFF0C\u4ECE\u6846\u67B6\u5C42\u9762\u5927\u5927\u964D\u4F4E\u4E86\u9875\u9762\u6389\u5E27\u7684\u6982\u7387\u3002",paraId:59,tocIndex:12},{value:"\u9636\u6BB5\u4E8C\uFF0C\u5C06\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u4E00\u6B21\u8FC7\u6279\u91CF\u66F4\u65B0\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u80FD\u88AB\u6253\u65AD\u3002",paraId:59,tocIndex:12},{value:"Fiber \u6811\uFF1AReact \u5728 render \u7B2C\u4E00\u6B21\u6E32\u67D3\u65F6\uFF0C\u4F1A\u901A\u8FC7 React.createElement \u521B\u5EFA\u4E00\u9897 Element \u6811\uFF0C\u53EF\u4EE5\u79F0\u4E4B\u4E3A Virtual DOM Tree\uFF0C\u7531\u4E8E\u8981\u8BB0\u5F55\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u52A0\u5165\u4E86 Fiber\uFF0C\u6BCF\u4E00\u4E2A Element \u4F1A\u5BF9\u5E94\u4E00\u4E2A Fiber Node\uFF0C\u5C06 Fiber Node \u94FE\u63A5\u8D77\u6765\u7684\u7ED3\u6784\u6210\u4E3A Fiber Tree\u3002Fiber Tree \u4E00\u4E2A\u91CD\u8981\u7684\u7279\u70B9\u662F\u94FE\u8868\u7ED3\u6784\uFF0C\u5C06\u9012\u5F52\u904D\u5386\u7F16\u7A0B\u5FAA\u73AF\u904D\u5386\uFF0C\u7136\u540E\u914D\u5408 requestIdleCallback API, \u5B9E\u73B0\u4EFB\u52A1\u62C6\u5206\u3001\u4E2D\u65AD\u4E0E\u6062\u590D\u3002",paraId:60,tocIndex:12},{value:"\u4ECE Stack Reconciler \u5230 Fiber Reconciler\uFF0C\u6E90\u7801\u5C42\u9762\u5176\u5B9E\u5C31\u662F\u5E72\u4E86\u4E00\u4EF6\u9012\u5F52\u6539\u5FAA\u73AF\u7684\u4E8B\u60C5",paraId:61,tocIndex:12},{value:"\u4F20\u9001\u95E8 \u261E",paraId:62,tocIndex:12},{value:"# \u6DF1\u5165\u4E86\u89E3 Fiber",paraId:62,tocIndex:12},{value:"Portals \u63D0\u4F9B\u4E86\u4E00\u79CD\u4E00\u6D41\u7684\u65B9\u5F0F\u6765\u5C06\u5B50\u7EC4\u4EF6\u6E32\u67D3\u5230\u5B58\u5728\u4E8E\u7236\u7EC4\u4EF6\u7684 DOM \u5C42\u6B21\u7ED3\u6784\u4E4B\u5916\u7684 DOM \u8282\u70B9\u4E2D\u3002\u7ED3\u6784\u4E0D\u53D7\u5916\u754C\u7684\u63A7\u5236\u7684\u60C5\u51B5\u4E0B\u5C31\u53EF\u4EE5\u4F7F\u7528 portals \u8FDB\u884C\u521B\u5EFA",paraId:63,tocIndex:13},{value:"\u52A0\u8F7D\u5927\u7EC4\u4EF6\u7684\u65F6\u5019",paraId:64,tocIndex:14},{value:"\u8DEF\u7531\u5F02\u6B65\u52A0\u8F7D\u7684\u65F6\u5019",paraId:64,tocIndex:14},{value:"react \u4E2D\u8981\u914D\u5408 Suspense \u4F7F\u7528",paraId:65,tocIndex:14},{value:`// \u5F02\u6B65\u61D2\u52A0\u8F7D
  const Box = lazy(() => import('./components/Box'));
  // \u4F7F\u7528\u7EC4\u4EF6\u7684\u65F6\u5019\u8981\u7528suspense\u8FDB\u884C\u5305\u88F9
  <Suspense fallback={<div>loading...</div>}>{show && <Box />}</Suspense>;
  `,paraId:66,tocIndex:14},{value:"React \u5E76\u4E0D\u662F\u5C06 click \u4E8B\u4EF6\u7ED1\u5728\u8BE5 div \u7684\u771F\u5B9E DOM \u4E0A\uFF0C\u800C\u662F",paraId:67,tocIndex:15},{value:"\u5728document\u5904\u76D1\u542C\u6240\u6709\u652F\u6301\u7684\u4E8B\u4EF6",paraId:67,tocIndex:15},{value:"\uFF0C\u5F53\u4E8B\u4EF6\u53D1\u751F\u5E76\u5192\u6CE1\u81F3 document \u5904\u65F6\uFF0CReact \u5C06\u4E8B\u4EF6\u5185\u5BB9\u5C01\u88C5\u5E76\u4EA4\u7531\u771F\u6B63\u7684\u5904\u7406\u51FD\u6570\u8FD0\u884C\u3002\u8FD9\u6837\u7684\u65B9\u5F0F\u4E0D\u4EC5\u51CF\u5C11\u4E86\u5185\u5B58\u6D88\u8017\uFF0C\u8FD8\u80FD\u5728\u7EC4\u4EF6\u6302\u8F7D\u9500\u6BC1\u65F6\u7EDF\u4E00\u8BA2\u9605\u548C\u79FB\u9664\u4E8B\u4EF6\u3002",paraId:67,tocIndex:15},{value:`
  \u53E6\u5916\u5192\u6CE1\u5230 document \u4E0A\u7684\u4E8B\u4EF6\u4E5F\u4E0D\u662F\u539F\u751F\u6D4F\u89C8\u5668\u4E8B\u4EF6\uFF0C\u800C\u662F React \u81EA\u5DF1\u5B9E\u73B0\u7684\u5408\u6210\u4E8B\u4EF6\uFF08SyntheticEvent\uFF09\u3002\u56E0\u6B64\u6211\u4EEC\u5982\u679C\u4E0D\u60F3\u8981\u4E8B\u4EF6\u5192\u6CE1\u7684\u8BDD\uFF0C\u8C03\u7528 event.stopPropagation \u662F\u65E0\u6548\u7684\uFF0C\u800C\u5E94\u8BE5\u8C03\u7528 `,paraId:67,tocIndex:15},{value:"event.preventDefault",paraId:67,tocIndex:15},{value:"\u3002",paraId:67,tocIndex:15},{value:"React \u7684\u61D2\u52A0\u8F7D\u793A\u4F8B\uFF1A",paraId:68,tocIndex:16},{value:`import React, { Suspense } from 'react';

  const OtherComponent = React.lazy(() => import('./OtherComponent'));

  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
  `,paraId:69,tocIndex:16},{value:"React.lazy \u539F\u7406",paraId:70,tocIndex:16},{value:"\u4EE5\u4E0B React \u6E90\u7801\u57FA\u4E8E 16.8.0 \u7248\u672C",paraId:71,tocIndex:16},{value:"React.lazy \u7684\u6E90\u7801\u5B9E\u73B0\u5982\u4E0B\uFF1A",paraId:72,tocIndex:16},{value:`export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
    let lazyType = {

    $$
    typeof: REACT_LAZY_TYPE,
    \\_ctor: ctor,
    // React uses these fields to store the result.
    \\_status: -1,
    \\_result: null,
    };

    return lazyType;
  }
  `,paraId:73,tocIndex:16},{value:"\u53EF\u4EE5\u770B\u5230\u5176\u8FD4\u56DE\u4E86\u4E00\u4E2A LazyComponent \u5BF9\u8C61\u3002",paraId:74,tocIndex:16},{value:"\u800C\u5BF9\u4E8E LazyComponent \u5BF9\u8C61\u7684\u89E3\u6790\uFF1A",paraId:75,tocIndex:16},{value:`case LazyComponent: {
    const elementType = workInProgress.elementType;
    return mountLazyComponent(
      current,
      workInProgress,
      elementType,
      updateExpirationTime,
      renderExpirationTime,
    );
  }
  `,paraId:76,tocIndex:16},{value:`function mountLazyComponent(
    _current,
    workInProgress,
    elementType,
    updateExpirationTime,
    renderExpirationTime,
  ) {
    ...
    let Component = readLazyComponentType(elementType);
    ...
  }
  `,paraId:77,tocIndex:16},{value:`// Pending = 0, Resolved = 1, Rejected = 2
  export function readLazyComponentType<T>(lazyComponent: LazyComponent<T>): T {
    const status = lazyComponent._status;
    const result = lazyComponent._result;
    switch (status) {
      case Resolved: {
        const Component: T = result;
        return Component;
      }
      case Rejected: {
        const error: mixed = result;
        throw error;
      }
      case Pending: {
        const thenable: Thenable<T, mixed> = result;
        throw thenable;
      }
      default: {
        // lazyComponent \u9996\u6B21\u88AB\u6E32\u67D3
        lazyComponent._status = Pending;
        const ctor = lazyComponent._ctor;
        const thenable = ctor();
        thenable.then(
          (moduleObject) => {
            if (lazyComponent._status === Pending) {
              const defaultExport = moduleObject.default;
              lazyComponent._status = Resolved;
              lazyComponent._result = defaultExport;
            }
          },
          (error) => {
            if (lazyComponent._status === Pending) {
              lazyComponent._status = Rejected;
              lazyComponent._result = error;
            }
          },
        );
        // Handle synchronous thenables.
        switch (lazyComponent._status) {
          case Resolved:
            return lazyComponent._result;
          case Rejected:
            throw lazyComponent._result;
        }
        lazyComponent._result = thenable;
        throw thenable;
      }
    }
  }
  `,paraId:78,tocIndex:16},{value:"\u6CE8\uFF1A\u5982\u679C readLazyComponentType \u51FD\u6570\u591A\u6B21\u5904\u7406\u540C\u4E00\u4E2A lazyComponent\uFF0C\u5219\u53EF\u80FD\u8FDB\u5165 Pending\u3001Rejected \u7B49 case \u4E2D\u3002",paraId:79,tocIndex:16},{value:"\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u5BF9\u4E8E\u6700\u521D React.lazy() \u6240\u8FD4\u56DE\u7684 LazyComponent \u5BF9\u8C61\uFF0C\u5176 _status \u9ED8\u8BA4\u662F -1\uFF0C\u6240\u4EE5\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u4F1A\u8FDB\u5165 readLazyComponentType \u51FD\u6570\u4E2D\u7684 default \u7684\u903B\u8F91\uFF0C\u8FD9\u91CC\u624D\u4F1A\u771F\u6B63\u5F02\u6B65\u6267\u884C import(url)\u64CD\u4F5C\uFF0C\u7531\u4E8E\u5E76\u672A\u7B49\u5F85\uFF0C\u968F\u540E\u4F1A\u68C0\u67E5\u6A21\u5757\u662F\u5426 Resolved\uFF0C\u5982\u679C\u5DF2\u7ECF Resolved \u4E86\uFF08\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5\uFF09\u5219\u76F4\u63A5\u8FD4\u56DE moduleObject.default\uFF08\u52A8\u6001\u52A0\u8F7D\u7684\u6A21\u5757\u7684\u9ED8\u8BA4\u5BFC\u51FA\uFF09\uFF0C\u5426\u5219\u5C06\u901A\u8FC7 throw \u5C06 thenable \u629B\u51FA\u5230\u4E0A\u5C42\u3002",paraId:80,tocIndex:16},{value:"\u4E3A\u4EC0\u4E48\u8981 throw \u5B83\uFF1F\u8FD9\u5C31\u8981\u6D89\u53CA\u5230 Suspense \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u6211\u4EEC\u63A5\u7740\u5F80\u4E0B\u5206\u6790\u3002",paraId:81,tocIndex:16},{value:"Suspense \u539F\u7406",paraId:82,tocIndex:16},{value:"\u7531\u4E8E React \u6355\u83B7\u5F02\u5E38\u5E76\u5904\u7406\u7684\u4EE3\u7801\u903B\u8F91\u6BD4\u8F83\u591A\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8D34\u6E90\u7801\uFF0C\u611F\u5174\u8DA3\u53EF\u4EE5\u53BB\u770B throwException \u4E2D\u7684\u903B\u8F91\uFF0C\u5176\u4E2D\u5C31\u5305\u542B\u4E86\u5982\u4F55\u5904\u7406\u6355\u83B7\u7684\u5F02\u5E38\u3002\u7B80\u5355\u63CF\u8FF0\u4E00\u4E0B\u5904\u7406\u8FC7\u7A0B\uFF0CReact \u6355\u83B7\u5230\u5F02\u5E38\u4E4B\u540E\uFF0C\u4F1A\u5224\u65AD\u5F02\u5E38\u662F\u4E0D\u662F\u4E00\u4E2A thenable\uFF0C\u5982\u679C\u662F\u5219\u4F1A\u627E\u5230 SuspenseComponent \uFF0C\u5982\u679C thenable \u5904\u4E8E pending \u72B6\u6001\uFF0C\u5219\u4F1A\u5C06\u5176 children \u90FD\u6E32\u67D3\u6210 fallback \u7684\u503C\uFF0C\u4E00\u65E6 thenable \u88AB resolve \u5219 SuspenseComponent \u7684\u5B50\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\u4E00\u6B21\u3002",paraId:83,tocIndex:16},{value:"\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528 componentDidCatch \u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684 Suspense \u7EC4\u4EF6\uFF0C\u5982\u4E0B\uFF1A",paraId:84,tocIndex:16},{value:`class Suspense extends React.Component {
    state = {
      promise: null,
    };

    componentDidCatch(err) {
      // \u5224\u65AD err \u662F\u5426\u662F thenable
      if (
        err !== null &&
        typeof err === 'object' &&
        typeof err.then === 'function'
      ) {
        this.setState({ promise: err }, () => {
          err.then(() => {
            this.setState({
              promise: null,
            });
          });
        });
      }
    }

    render() {
      const { fallback, children } = this.props;
      const { promise } = this.state;
      return <>{promise ? fallback : children}</>;
    }
  }
  `,paraId:85,tocIndex:16},{value:"\u81F3\u6B64\uFF0C\u6211\u4EEC\u5206\u6790\u5B8C\u4E86 React \u7684\u61D2\u52A0\u8F7D\u539F\u7406\u3002\u7B80\u5355\u6765\u8BF4\uFF0CReact \u5229\u7528 React.lazy \u4E0E import()\u5B9E\u73B0\u4E86\u6E32\u67D3\u65F6\u7684\u52A8\u6001\u52A0\u8F7D \uFF0C\u5E76\u5229\u7528 Suspense \u6765\u5904\u7406\u5F02\u6B65\u52A0\u8F7D\u8D44\u6E90\u65F6\u9875\u9762\u5E94\u8BE5\u5982\u4F55\u663E\u793A\u7684\u95EE\u9898\u3002",paraId:86,tocIndex:16},{value:"\u53C2\u8003\u4F20\u9001\u95E8 \u261E ",paraId:87,tocIndex:16},{value:"React Lazy \u7684\u5B9E\u73B0\u539F\u7406",paraId:87,tocIndex:16},{value:"$$",paraId:88,tocIndex:16},{value:`
  $$`,paraId:88,tocIndex:16}],v1={},A1={title:"\u6587\u6863\u5206\u4EAB",toc:"menu",filename:"docs/column/share/index.md",order:6,nav:{title:"\u4E13\u680F",order:3},description:"JavaScript \u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 JavaScript \u6559\u7A0B"},W1=[{id:"javascript--typescript",depth:2,title:"JavaScript / TypeScript"},{id:"css-\u6837\u5F0F",depth:2,title:"CSS \u6837\u5F0F"},{id:"\u7B97\u6CD5\u6570\u636E",depth:2,title:"\u7B97\u6CD5\u6570\u636E"},{id:"\u524D\u7AEF\u9762\u8BD5",depth:2,title:"\u524D\u7AEF\u9762\u8BD5"},{id:"\u672A\u5B8C\u5F85\u7EED",depth:2,title:"\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002"}],K0=[{value:"JavaScript \u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 JavaScript \u6559\u7A0B",paraId:0,tocIndex:0},{value:"ES6 \u5165\u95E8\u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 ES6 \u5165\u95E8\u6559\u7A0B",paraId:1,tocIndex:0},{value:"JavaScript 30 | \u4F7F\u7528\u539F\u751F JavaScript \u5728 30 \u5929\u5185\u5B8C\u6210 30 \u4E2A\u9879\u76EE",paraId:2,tocIndex:0},{value:"\u73B0\u4EE3 JavaScript \u6559\u7A0B | \u6700\u8FD1\u5F88\u6D41\u884C\u7684 JavaScript \u6559\u7A0B",paraId:3,tocIndex:0},{value:"JS \u4EE3\u7801\u89C4\u8303 | \u4F18\u79C0\u7684 JS \u4EE3\u7801\u89C4\u8303",paraId:4,tocIndex:0},{value:"Favorite JavaScript utilities in single line of code - 1 LOC",paraId:5,tocIndex:0},{value:"JS Bin - Collaborative JavaScript Debugging",paraId:6,tocIndex:0},{value:"jQuery API \u4E2D\u6587\u6587\u6863 | jQuery API \u4E2D\u6587\u5728\u7EBF\u624B\u518C | jquery api \u4E0B\u8F7D | jquery api chm",paraId:7,tocIndex:0},{value:"jQuery API Documentation",paraId:8,tocIndex:0},{value:"JavaScript \u6559\u7A0B | \u83DC\u9E1F\u6559\u7A0B",paraId:9,tocIndex:0},{value:"TypeScript \u6559\u7A0B | \u901A\u4FD7\u6613\u61C2\u7684 TypeScript \u6559\u7A0B",paraId:10,tocIndex:0},{value:"TypeScript: JavaScript With Syntax For Types",paraId:11,tocIndex:0},{value:"CSS Tricks \u6548\u679C\u5927\u5168 | CSS \u7684\u5404\u79CD\u6548\u679C\u5B9E\u73B0 \u6709\u5F88\u591A\u52A8\u753B\u6548\u679C",paraId:12,tocIndex:1},{value:"CSS Inspiration | CSS \u7075\u611F\u7684\u8BDE\u751F\u5730 \u6211\u6BCF\u5929\u90FD\u4F1A\u770B\u4E00\u770B\u7684\u7F51\u7AD9",paraId:13,tocIndex:1},{value:"CSS \u5E38\u7528\u6837\u5F0F | \u6709\u5F88\u591A\u5E38\u7528\u7684 CSS \u6837\u5F0F",paraId:14,tocIndex:1},{value:"Animista | CSS \u52A8\u753B\u5E93 \u4E3B\u6253\u6309\u9700\u5B9A\u5236 CSS \u52A8\u753B\u6548\u679C",paraId:15,tocIndex:1},{value:"SpinKit | CSS \u4EE3\u7801\u7247\u6BB5 \u6C47\u96C6\u4E86\u5404\u79CD\u52A0\u8F7D\u6548\u679C\u7684 CSS \u4EE3\u7801\u7247\u6BB5",paraId:16,tocIndex:1},{value:"CSS Minifier | \u5728\u7EBF CSS \u4EE3\u7801\u7B80\u5316/\u538B\u7F29\u5DE5\u5177",paraId:17,tocIndex:1},{value:"Sass: Sass \u6587\u6863 | Sass \u4E2D\u6587\u7F51 \u6210\u719F\u3001\u7A33\u5B9A\u3001\u5F3A\u5927\u7684 CSS \u6269\u5C55\u8BED\u8A00",paraId:18,tocIndex:1},{value:"Less \u5FEB\u901F\u5165\u95E8 | Less.js \u4E2D\u6587\u6587\u6863 \u5C06 CSS \u8D4B\u4E88\u4E86\u52A8\u6001\u8BED\u8A00\u7279\u6027\u7684\u6837\u5F0F\u8BED\u8A00",paraId:19,tocIndex:1},{value:"stylus | CSS \u6269\u5C55 \u5BCC\u6709\u53D8\u73B0\u91CC\u3001\u52A8\u6001\u3001\u5065\u58EE\u7684 CSS",paraId:20,tocIndex:1},{value:"CSS \u5B57\u4F53\u6548\u679C - \u5B64\u72EC\u591C\u83BA - \u535A\u5BA2\u56ED",paraId:21,tocIndex:1},{value:"Smooth Shadow",paraId:22,tocIndex:1},{value:"Clippy \u2014 CSS clip-path maker",paraId:23,tocIndex:1},{value:"Fancy Border Radius Generator",paraId:24,tocIndex:1},{value:"cubic-bezier(.06,.81,.8,.6) \u273F",paraId:25,tocIndex:1},{value:"CSS Gradient \u2014 Generator, Maker, and Background",paraId:26,tocIndex:1},{value:"CSS Grid Generator",paraId:27,tocIndex:1},{value:"Free Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS",paraId:28,tocIndex:1},{value:"Get Waves \u2013 Create SVG waves for your next design",paraId:29,tocIndex:1},{value:"Svg Wave - A free & beautiful gradient SVG wave Generator.",paraId:30,tocIndex:1},{value:"loading.io - Your SVG + GIF + PNG Ajax Loading Icons and Animation Generator",paraId:31,tocIndex:1},{value:"Neumorphism/Soft UI CSS shadow generator",paraId:32,tocIndex:1},{value:"JavaScript \u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784 | \u591A\u79CD\u57FA\u4E8E JavaScript \u7684\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784",paraId:33,tocIndex:2},{value:"leetcode \u89E3\u9898\u4E4B\u8DEF | \u79C1\u85CF LeetCode \u89E3\u9898\u653B\u7565 ",paraId:34,tocIndex:2},{value:"\u4E94\u5206\u949F\u5B66\u7B97\u6CD5 | \u6BCF\u5929\u62FF\u51FA\u4E94\u5206\u949F \u5B66\u5B66\u7B97\u6CD5",paraId:35,tocIndex:2},{value:"\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u9879\u76EE\u63A8\u8350 | Github \u4E0A 170K+Star \u7684\u524D\u7AEF\u5B66\u4E60\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u9898\u76EE",paraId:36,tocIndex:2},{value:"JavaScript \u5341\u5927\u7ECF\u5178\u6392\u5E8F\u7B97\u6CD5 | JavaScript \u6392\u5E8F\u5FC5\u4F1A\u9898\u76EE \u4F5C\u8005\u529F\u529B\u5F88\u6DF1 \u503C\u5F97\u5B66\u4E60",paraId:37,tocIndex:2},{value:"\u7B97\u6CD5\u53EF\u89C6\u5316\u5DE5\u5177 | \u7528\u53EF\u89C6\u5316\u5DE5\u5177\u548C\u4EA4\u4E92\u65B9\u5F0F \u8BA9\u4F60\u4ECE\u4EE3\u7801\u4E2D\u53EF\u89C6\u5316\u7B97\u6CD5",paraId:38,tocIndex:2},{value:"\u7B97\u6CD5\u53EF\u89C6\u5316\u6765\u6E90",paraId:39,tocIndex:2},{value:"\u7B97\u6CD5\u7684\u5DE5\u4F5C\u65B9\u5F0F | \u53D8\u91CF\u548C\u64CD\u4F5C\u7684\u53EF\u89C6\u5316\u8868\u793A \u589E\u5F3A\u4E86\u63A7\u5236\u6D41\u548C\u5B9E\u9645\u6E90\u4EE3\u7801",paraId:40,tocIndex:2},{value:"\u524D\u7AEF\u9762\u8BD5\u5E38\u8003\u95EE\u9898\u6574\u7406 | \u6309\u6A21\u5757\u548C\u77E5\u8BC6\u70B9\u5206\u7C7B ",paraId:41,tocIndex:3},{value:"\u524D\u7AEF\u5F00\u53D1\u9762\u8BD5\u9898",paraId:42,tocIndex:3},{value:"WEB \u524D\u7AEF\u9762\u8BD5\u5B9D\u5178",paraId:43,tocIndex:3},{value:"\u6398\u91D1\u524D\u7AEF\u9762\u8BD5\u9898\u5408\u96C6",paraId:44,tocIndex:3},{value:"\u524D\u7AEF\u9762\u8BD5\u5F00\u6E90\u9879\u76EE\u6C47\u603B | Github \u4E0A 100K+ Star \u7684\u524D\u7AEF\u9762\u8BD5\u5F00\u6E90\u9879\u76EE\u6C47\u603B",paraId:45,tocIndex:3},{value:"\u524D\u7AEF\u9762\u8BD5\u9898 - \u6765\u8BED\u96C0",paraId:46,tocIndex:3},{value:"\u524D\u7AEF\u5E38\u89C1\u9762\u8BD5\u9898\u603B\u7ED3 | \u5927\u5382\u9762\u8BD5\u9898\u6BCF\u65E5\u4E00\u9898",paraId:47,tocIndex:3}],y5={},X5={title:"\u6587\u4EF6",toc:"menu",filename:"docs/usually/file/index.md",order:7,nav:{title:"\u5E38\u7528",order:1},description:"window.open"},lt=[{id:"\u4E0A\u4F20",depth:2,title:"\u4E0A\u4F20"},{id:"file-\u8F6C-base64",depth:2,title:"File \u8F6C base64"},{id:"imgurl-\u8F6C-base64",depth:2,title:"imgUrl \u8F6C base64"},{id:"\u901A\u8FC7-url-\u4E0B\u8F7D\u6587\u4EF6",depth:2,title:"\u901A\u8FC7 URL \u4E0B\u8F7D\u6587\u4EF6"},{id:"\u5C06\u56FE\u7247\u548C\u6587\u5B57\u5408\u6210\u4E00\u5F20\u56FE",depth:2,title:"\u5C06\u56FE\u7247\u548C\u6587\u5B57\u5408\u6210\u4E00\u5F20\u56FE"},{id:"\u5207\u7247\u4E0A\u4F20",depth:2,title:"\u5207\u7247\u4E0A\u4F20"}],x5=[{value:`/**
    \u4E0A\u4F20\u7EDF\u4E00\u65B9\u6CD5
    @param {IUploadParams}  
    @return {Array} FileList
  */
  interface IUploadParams {
    type: string; // \u4E0A\u4F20\u6587\u4EF6\u7C7B\u578B
    multiple?: boolean; // \u662F\u5426\u652F\u6301\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20
    size?: number; // \u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F(\u5355\u4F4D\u4E3AKB)
    isDirectory?: boolean; // \u662F\u5426\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u76EE\u5F55
  }

  const upload = ({
    type,
    multiple = false,
    size,
    isDirectory = false,
  }: IUploadParams): Promise<FileList> => {
    return new Promise((resolve, reject) => {
      const input: HTMLInputElement = document.createElement('input');
      input.type = 'file';
      input.accept = type;
      input.multiple = multiple;
      input.webkitdirectory = isDirectory; // \u517C\u5BB9\u4E0D\u540C\u6D4F\u89C8\u5668
      input.onchange = ({ target }) => {
        const files = (target as EventTarget & { files: FileList }).files;
        if (size) {
          // \u9650\u5236\u5927\u5C0F
          for (let i = 0; i < files.length; i++) {
            if (files[i].size && files[i].size / 1024 > size) {
              reject('\u4E0A\u4F20\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF01');
              return;
            }
          }
        }
        resolve(files);
      };
      input.click();
    });
  };
  `,paraId:0,tocIndex:0},{value:`/**
   * \u83B7\u53D6\u6587\u4EF6\u7684Base64
   * @param file {File} \u6587\u4EF6
   * @returns {Promise<string>} Base64\u7F16\u7801\u5B57\u7B26\u4E32
   */
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
    });
  };
  `,paraId:1,tocIndex:1},{value:`/**
   * @param {string} url
   * @return {Promise<string>}
   */
  const imgUrlToBase64 = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject('\u8BF7\u4F20\u5165url\u5185\u5BB9');
      }

      if (/\\.(png|jpe?g|gif|svg|webp)(\\?.*)?$/.test(url)) {
        // \u56FE\u7247\u5730\u5740
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
          const blob = xhr.response;
          const fileReader = new FileReader();
          fileReader.readAsDataURL(blob);
          fileReader.onload = () => {
            const result = fileReader.result as string;
            resolve(result);
          };
          fileReader.onerror = () => {
            reject('\u6587\u4EF6\u8BFB\u53D6\u5931\u8D25');
          };
        };
        xhr.onerror = () => {
          reject('\u7F51\u7EDC\u9519\u8BEF');
        };
        xhr.send();
      } else {
        // \u975E\u56FE\u7247\u5730\u5740
        reject('\u975E(png/jpe?g/gif/svg/webp\u7B49)\u56FE\u7247\u5730\u5740');
      }
    });
  };
  `,paraId:2,tocIndex:2},{value:"window.open",paraId:3,tocIndex:3},{value:`window.open(url, '_blank');
  `,paraId:4,tocIndex:3},{value:"a \u6807\u7B7E",paraId:5,tocIndex:3},{value:`const a = document.createElement('a'); //\u65B0\u5EFA\u4E00\u4E2Aa\u6807\u7B7E
  a.href = url; // \u6587\u4EF6\u94FE\u63A5
  a.download = name; // \u4E0B\u8F7D\u540D\u79F0
  a.click();
  a.remove();
  `,paraId:6,tocIndex:3},{value:"blob",paraId:7,tocIndex:3},{value:`// \u53EF\u80FD\u4F1A\u5B58\u5728\u8DE8\u57DF\u95EE\u9898
  fetch(url).then((res) =>
    res.blob().then((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name; // \u4E0B\u8F7D\u540D\u79F0
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }),
  );
  `,paraId:8,tocIndex:3},{value:"\u4E0B\u8F7D\u4F9D\u8D56",paraId:9,tocIndex:4},{value:`npm install html2canvas --save
  `,paraId:10,tocIndex:4},{value:"\u5728\u9700\u8981\u4F7F\u7528\u7684\u9875\u9762\u5F15\u5165",paraId:11,tocIndex:4},{value:`import html2canvas from 'html2canvas';
  `,paraId:12,tocIndex:4},{value:"\u9875\u9762",paraId:13,tocIndex:4},{value:`<template>
    <div>
      <div class="download_img" ref="canvas">
        <img
          src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"
          alt=""
        />
        <p>\u57CE\u5E02\u98CE\u666F\u56FE</p>
      </div>
      <el-button type="primary" @click="handleDownload('\u6D4B\u8BD5')"
        >\u4E0B\u8F7D\u56FE\u7247\u53CA\u6587\u5B57</el-button
      >
    </div>
  </template>
  `,paraId:14,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:15,tocIndex:4},{value:"ref",paraId:15,tocIndex:4},{value:" \u6784\u5EFA\u4E0B\u8F7D",paraId:15,tocIndex:4},{value:`// \u4E0B\u8F7D
  const handleDownload = (name: string) => {
    window.scrollTo(0, 0);
    const node = document.getElementById('canvas') || document.body;
    const width = node.offsetWidth;
    const height = node.offsetHeight;
    const scale = 4;
    html2canvas(node, {
      width,
      height,
      backgroundColor: '#ffffff',
      dpi: window.devicePixelRatio * 2,
      scale,
      x: 0,
      y: 0,
      scrollX: -3,
      scrollY: -10,
      useCORS: true,
      allowTaint: true,
    }).then((canvas: HTMLCanvasElement) => {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = name;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  `,paraId:16,tocIndex:4},{value:"\u83B7\u53D6 ",paraId:17,tocIndex:5},{value:"spark-md5",paraId:17,tocIndex:5},{value:"\u5207\u7247\u4E0A\u4F20",paraId:18,tocIndex:5},{value:`// \u5207\u7247\u4E0A\u4F20
  const sliceUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }
      const chunks = createChunks(file, 10 * 1024 * 1024);
      const result = await hash(chunks);
      console.log(result); // hash\u503C
    };
    input.click();
  };
  `,paraId:19,tocIndex:5},{value:"\u83B7\u53D6 hash \u503C",paraId:20,tocIndex:5},{value:`// \u83B7\u53D6hash\u503C
  const hash = (chunks: Blob[]) => {
    return new Promise<string>((resolve) => {
      // \u6B64\u5904\u9700\u8981\u5F15\u5165md5
      const spark = new SparkMD5.ArrayBuffer();
      function _read(i: number) {
        if (i >= chunks.length) {
          resolve(spark.end());
          return; // \u8BFB\u53D6\u5B8C\u6210
        }
        const blob = chunks[i];
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const bytes = e.target?.result as ArrayBuffer; // \u8BFB\u53D6\u5230\u7684\u5B57\u8282\u6570\u7EC4
          spark.append(bytes);
          _read(i + 1);
        };
        reader.readAsArrayBuffer(blob);
      }
      _read(0);
    });
  };
  `,paraId:21,tocIndex:5},{value:"\u5207\u7247",paraId:22,tocIndex:5},{value:`// \u5207\u7247
  const createChunks = (file: File, chunkSize: number): Blob[] => {
    const result = [];
    for (let i = 0; i < file.size; i += chunkSize) {
      result.push(file.slice(i, i + chunkSize));
    }
    return result;
  };
  `,paraId:23,tocIndex:5}],S5={},$t={title:"\u8BF7\u6C42",toc:"menu",filename:"docs/usually/http/index.md",order:6,nav:{title:"\u5E38\u7528",order:1}},St=[{id:"axios-\u57FA\u7840\u5C01\u88C5",depth:2,title:"axios \u57FA\u7840\u5C01\u88C5"},{id:"requestts-\u6587\u4EF6",depth:3,title:"request.ts \u6587\u4EF6"},{id:"apits-\u6587\u4EF6",depth:3,title:"api.ts \u6587\u4EF6"},{id:"axios-\u8FDB\u9636\u5C01\u88C5",depth:2,title:"axios \u8FDB\u9636\u5C01\u88C5"},{id:"requestts\u6587\u4EF6",depth:3,title:"request.ts\u6587\u4EF6"},{id:"apits-\u4F7F\u7528\u793A\u4F8B",depth:3,title:"api.ts \u4F7F\u7528\u793A\u4F8B"}],I2=[{value:"request.ts",paraId:0},{value:`import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

  const baseURL =
    process.env.NODE_ENV === 'production' ? window.location.origin : '/api';

  const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 20000,
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // Add your custom logic here
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data;
      }
      return Promise.reject(response);
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  export const get = <T>(url: string, params?: any, config = {}): Promise<T> => {
    return instance
      .get(url, { params, ...config })
      .then((response: AxiosResponse<T>) => {
        return response.data;
      });
  };

  export const post = <T>(url: string, data?: any, config = {}): Promise<T> => {
    return instance.post(url, data, config).then((response: AxiosResponse<T>) => {
      return response.data;
    });
  };
  `,paraId:1,tocIndex:1},{value:"api.ts",paraId:0},{value:`import { get, post } from './request';

  /***** \u6D4B\u8BD5\u63A5\u53E3 *****/
  export const handleGetTest = (params: any) => post('/api1', params);
  export const handlePostTest = (param: any) => get('/api2', params);
  `,paraId:2,tocIndex:2},{value:"request.ts",paraId:0},{value:`import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource,
  } from 'axios';

  // \u5B9A\u4E49\u63A5\u53E3\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8BF7\u6C42\u54CD\u5E94\u6570\u636E\u7ED3\u6784
  interface ApiResponse<T = any> {
    code: number;
    message: string;
    data: T;
  }

  // \u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684Axios\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u9ED8\u8BA4\u8BF7\u6C42\u914D\u7F6E
  const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000, // \u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2
  });

  // \u5B9A\u4E49\u4E00\u4E2A\u62E6\u622A\u5668\uFF0C\u7528\u4E8E\u5728\u8BF7\u6C42\u53D1\u9001\u524D\u5BF9\u8BF7\u6C42\u8FDB\u884C\u5904\u7406
  apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
    // \u5728\u8BF7\u6C42\u53D1\u9001\u524D\uFF0C\u53EF\u4EE5\u5728config.headers\u4E2D\u8BBE\u7F6E\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u5982\u8BBE\u7F6EAuthorization Token
    config.headers.Authorization =
      'Bearer ' + localStorage.getItem('access_token');
    return config;
  });

  // \u5B9A\u4E49\u4E00\u4E2A\u62E6\u622A\u5668\uFF0C\u7528\u4E8E\u5728\u54CD\u5E94\u5230\u8FBE\u540E\u5BF9\u54CD\u5E94\u8FDB\u884C\u5904\u7406
  apiClient.interceptors.response.use((response: AxiosResponse<ApiResponse>) => {
    // \u5728\u54CD\u5E94\u5230\u8FBE\u540E\uFF0C\u53EF\u4EE5\u6839\u636E\u54CD\u5E94\u4E2D\u7684\u72B6\u6001\u7801\u3001\u9519\u8BEF\u7801\u3001\u9519\u8BEF\u6D88\u606F\u7B49\u4FE1\u606F\u8FDB\u884C\u5168\u5C40\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406
    if (response.data.code !== 200) {
      // \u5904\u7406\u9519\u8BEF\uFF0C\u5982\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u6216\u8DF3\u8F6C\u5230\u9519\u8BEF\u9875\u9762
    }
    return response.data;
  });

  // \u5C01\u88C5\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u4F7F\u7528Promise\u5C01\u88C5\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5E76\u652F\u6301\u53D6\u6D88\u8BF7\u6C42\u548C\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4
  export const apiRequest = <T = any>(
    config: AxiosRequestConfig,
    timeout?: number,
  ): Promise<T> => {
    const source: CancelTokenSource = axios.CancelToken.source(); // \u521B\u5EFA\u4E00\u4E2A\u53D6\u6D88\u8BF7\u6C42\u7684\u4EE4\u724C
    return new Promise<T>((resolve, reject) => {
      const timeoutId = timeout
        ? setTimeout(() => {
            source.cancel('\u8BF7\u6C42\u8D85\u65F6'); // \u8D85\u65F6\u540E\u53D6\u6D88\u8BF7\u6C42
          }, timeout)
        : undefined;
      apiClient({
        ...config,
        cancelToken: source.token, // \u5C06\u4EE4\u724C\u6DFB\u52A0\u5230\u8BF7\u6C42\u914D\u7F6E\u4E2D\uFF0C\u4EE5\u652F\u6301\u53D6\u6D88\u8BF7\u6C42
      })
        .then((response) => {
          clearTimeout(timeoutId); // \u6E05\u9664\u8D85\u65F6\u8BA1\u65F6\u5668
          resolve(response.data);
        })
        .catch((error) => {
          clearTimeout(timeoutId); // \u6E05\u9664\u8D85\u65F6\u8BA1\u65F6\u5668
          if (axios.isCancel(error)) {
            // \u8BF7\u6C42\u5DF2\u88AB\u53D6\u6D88
          } else {
            reject(error);
          }
        });
    });
  };

  // \u5C01\u88C5\u4E0A\u4F20\u6587\u4EF6\u65B9\u6CD5\uFF0C\u4F7F\u7528FormData\u5C01\u88C5\u6587\u4EF6\u6570\u636E
  export const apiUpload = <T = any>(
    url: string,
    file: File,
    onUploadProgress?: (progressEvent: ProgressEvent) => void,
  ): Promise<T> => {
    const formData = new FormData();
    formData.append('file', file);
    return apiRequest<T>({
      method: 'POST',
      url,
      data: formData,
      onUploadProgress,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  `,paraId:3,tocIndex:4},{value:"api.ts",paraId:0},{value:`import { apiRequest, apiUpload, ApiResponse } from './request';

  // \u8BF7\u6C42\u6570\u636E\u793A\u4F8B
  interface ExampleData {
    id: number;
    name: string;
    age: number;
  }

  // \u53D1\u9001\u8BF7\u6C42\u793A\u4F8B
  apiRequest<ExampleData>({
    url: '/example',
    method: 'get',
    params: { id: 1 },
  })
    .then((data) => {
      console.log(data); // \u5904\u7406\u54CD\u5E94\u6570\u636E
    })
    .catch((error) => {
      console.log(error); // \u5904\u7406\u8BF7\u6C42\u9519\u8BEF
    });

  // \u53D6\u6D88\u8BF7\u6C42\u793A\u4F8B
  const cancelTokenSource = axios.CancelToken.source();
  apiRequest<ExampleData>({
    url: '/example',
    method: 'get',
    params: { id: 1 },
    cancelToken: cancelTokenSource.token, // \u6DFB\u52A0\u53D6\u6D88\u8BF7\u6C42\u7684\u4EE4\u724C
  })
    .then((data) => {
      console.log(data); // \u5904\u7406\u54CD\u5E94\u6570\u636E
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log('\u8BF7\u6C42\u5DF2\u53D6\u6D88'); // \u5904\u7406\u8BF7\u6C42\u5DF2\u53D6\u6D88
      } else {
        console.log(error); // \u5904\u7406\u8BF7\u6C42\u9519\u8BEF
      }
    });
  // \u53D6\u6D88\u8BF7\u6C42
  cancelTokenSource.cancel('\u8BF7\u6C42\u53D6\u6D88\u539F\u56E0');

  // \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u793A\u4F8B
  apiRequest<ExampleData>(
    {
      url: '/example',
      method: 'get',
      params: { id: 1 },
    },
    5000,
  ) // \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A5000\u6BEB\u79D2
    .then((data) => {
      console.log(data); // \u5904\u7406\u54CD\u5E94\u6570\u636E
    })
    .catch((error) => {
      console.log(error); // \u5904\u7406\u8BF7\u6C42\u9519\u8BEF
    });

  // \u4E0A\u4F20\u6587\u4EF6\u793A\u4F8B
  const uploadFile = async () => {
    try {
      // \u8C03\u7528apiUpload\u65B9\u6CD5\u4E0A\u4F20\u6587\u4EF6\uFF0C\u4F20\u5165\u6587\u4EF6\u3001\u4E0A\u4F20\u8FDB\u5EA6\u56DE\u8C03\u51FD\u6570\u548C\u8BF7\u6C42\u5730\u5740\u7B49\u53C2\u6570
      const result = await apiUpload('/upload', file, (progressEvent) => {
        // \u5728\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u83B7\u53D6\u4E0A\u4F20\u8FDB\u5EA6\uFF0C\u5E76\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u8FDB\u5EA6\u6761\u7B49\u6548\u679C
        console.log(
          '\u4E0A\u4F20\u8FDB\u5EA6\uFF1A' + (progressEvent.loaded / progressEvent.total) * 100 + '%',
        );
      });
      console.log('\u4E0A\u4F20\u6210\u529F\uFF1A', result);
    } catch (error) {
      console.log('\u4E0A\u4F20\u5931\u8D25\uFF1A', error);
    }
  };
  `,paraId:4,tocIndex:5}],Ht,L2={"docs-advance-css-demo-0":{component:function(){Ht={value:!0};var ht=B0(a(93236));a(36035),a(21233);function d0(H5){if(typeof WeakMap!="function")return null;var h5=new WeakMap,ot=new WeakMap;return(d0=function(it){return it?ot:h5})(H5)}function B0(H5,h5){if(!h5&&H5&&H5.__esModule)return H5;if(H5===null||j()(H5)!=="object"&&typeof H5!="function")return{default:H5};var ot=d0(h5);if(ot&&ot.has(H5))return ot.get(H5);var T5={},it=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var gt in H5)if(gt!=="default"&&Object.prototype.hasOwnProperty.call(H5,gt)){var N5=it?Object.getOwnPropertyDescriptor(H5,gt):null;N5&&(N5.get||N5.set)?Object.defineProperty(T5,gt,N5):T5[gt]=H5[gt]}return T5.default=H5,ot&&ot.set(H5,T5),T5}return function(){var H5=(0,ht.useState)(!1),h5=l()(H5,2),ot=h5[0],T5=h5[1],it=(0,ht.useState)(""),gt=l()(it,2),N5=gt[0],n2=gt[1],Ct=function(Xt){var i2=/^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;return i2.test(Xt)},Bt=function(){Ct(N5)?console.log("\u624B\u673A\u53F7\u683C\u5F0F\u6B63\u786E\uFF01"):(T5(!0),setTimeout(function(){T5(!1)},820))};return o.createElement("div",{className:"apply-shake-input"},o.createElement("input",{className:ot?"apply-shake cins-input":"cins-input",status:Ct(N5)||!N5?"":"error",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",value:N5,onChange:function(Xt){return n2(Xt.target.value)}}),o.createElement("button",{className:"cins-button",onClick:Bt},"\u6821\u9A8C"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
  import './_styles/index.less';
  import './_styles/shake.css';

  export default () => {
    const [shake, setShake] = useState(false);
    const [value, setValue] = useState('');
    // \u6821\u9A8C\u624B\u673A\u53F7
    const isMobilePhone = (str: string): boolean => {
      const pattern =
        /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
      return pattern.test(str);
    };
    const trigger = () => {
      if (isMobilePhone(value)) {
        console.log('\u624B\u673A\u53F7\u683C\u5F0F\u6B63\u786E\uFF01');
      } else {
        setShake(true);
        setTimeout(() => {
          setShake(false);
        }, 820);
      }
    };
    return (
      <div className="apply-shake-input">
        <input
          className={shake ? 'apply-shake cins-input' : 'cins-input'}
          status={isMobilePhone(value) || !value ? '' : 'error'}
          placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="cins-button" onClick={trigger}>
          \u6821\u9A8C
        </button>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/shake.css":{type:"FILE",value:a(57281).Z},"_styles/index.less":{type:"FILE",value:a(89994).Z}}}},"docs-advance-css-demo-1":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(86527);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"stroke-text"},"\u4F60\u597D\uFF0C\u8FD9\u91CC\u662FCINS\uFF01")}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/stroke.css';
  export default () => {
    return <div className="stroke-text">\u4F60\u597D\uFF0C\u8FD9\u91CC\u662FCINS\uFF01</div>;
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/stroke.css":{type:"FILE",value:a(45168).Z}}}},"docs-advance-css-demo-2":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(63311);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"content"},o.createElement("div",{className:"gray-text"},"\u9ED8\u8BA4\u72B6\u6001\uFF0C\u8272\u5F69\u6591\u6593\uFF01"),o.createElement("div",{className:"gray-text silence"},"\u9ED8\u8BA4\u72B6\u6001\uFF0C\u8272\u5F69\u6591\u6593\uFF01"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/gray.css';
  export default () => {
    return (
      <div className="content">
        <div className="gray-text">\u9ED8\u8BA4\u72B6\u6001\uFF0C\u8272\u5F69\u6591\u6593\uFF01</div>
        <div className="gray-text silence">\u9ED8\u8BA4\u72B6\u6001\uFF0C\u8272\u5F69\u6591\u6593\uFF01</div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/gray.css":{type:"FILE",value:a(7084).Z}}}},"docs-advance-css-demo-3":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(72481);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"pseudo-text"},"\u8FD9\u662F\u4E00\u6761\u6709\u56FE\u6807\u7684\u63D0\u793A\u8BED\uFF01")}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/pseudo.css';
  export default () => {
    return <div className="pseudo-text">\u8FD9\u662F\u4E00\u6761\u6709\u56FE\u6807\u7684\u63D0\u793A\u8BED\uFF01</div>;
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/pseudo.css":{type:"FILE",value:a(19581).Z}}}},"docs-advance-css-demo-4":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(36035),a(45153);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){var B0=function(){alert("\u6309\u94AE\u5DF2\u70B9\u51FB\uFF01")};return o.createElement("div",{className:"throttle-button"},o.createElement("div",{className:"button-wrap"},o.createElement("button",{className:"cins-button",onClick:B0},"\u672A\u8282\u6D41"),o.createElement("span",null,"\uFF08\u4E0D\u95F4\u65AD\u89E6\u53D1\uFF09")),o.createElement("div",{className:"button-wrap"},o.createElement("button",{onClick:B0,className:"cins-button ant-throttle"},"\u8282\u6D41"),o.createElement("span",null,"\uFF082s\u89E6\u53D1\u4E00\u6B21\uFF09")))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/index.less';
  import './_styles/throttle.css';
  export default () => {
    const throttleTips = () => {
      alert('\u6309\u94AE\u5DF2\u70B9\u51FB\uFF01');
    };
    return (
      <div className="throttle-button">
        <div className="button-wrap">
          <button className="cins-button" onClick={throttleTips}>
            \u672A\u8282\u6D41
          </button>
          <span>\uFF08\u4E0D\u95F4\u65AD\u89E6\u53D1\uFF09</span>
        </div>
        <div className="button-wrap">
          <button onClick={throttleTips} className="cins-button ant-throttle">
            \u8282\u6D41
          </button>
          <span>\uFF082s\u89E6\u53D1\u4E00\u6B21\uFF09</span>
        </div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/throttle.css":{type:"FILE",value:a(83330).Z},"_styles/index.less":{type:"FILE",value:a(89994).Z}}}},"docs-advance-css-demo-5":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(87091);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"throttle-wrap"},o.createElement("div",{className:"ellipsis-overflow"},"\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u4E00\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\u3002"),o.createElement("div",{className:"ellipsis-double ellipsis"},"\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u4E24\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\uFF0C\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u4E24\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\u3002"),o.createElement("div",{className:"ellipsis-triple ellipsis"},"\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u591A\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\uFF0C\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u591A\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\uFF0C\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u591A\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\u3002"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/ellipsis.css';
  export default () => {
    return (
      <div className="throttle-wrap">
        <div className="ellipsis-overflow">
          \u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u4E00\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\u3002
        </div>
        <div className="ellipsis-double ellipsis">
          \u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u4E24\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\uFF0C\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u4E24\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\u3002
        </div>
        <div className="ellipsis-triple ellipsis">
          \u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u591A\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\uFF0C\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u591A\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\uFF0C\u6D4B\u8BD5\u4E00\u4E0B\u8D85\u51FA\u591A\u884C\u6587\u5B57\u51FA\u73B0\u7701\u7565\u53F7\u7684\u529F\u80FD\u3002
        </div>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/ellipsis.css":{type:"FILE",value:a(49181).Z}}}},"docs-advance-css-demo-6":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(8787);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"symbol-legend"},o.createElement("span",null,"\u672A\u88C5\u5378"),o.createElement("span",{className:"loading"},"\u88C5\u5378\u4E2D"),o.createElement("span",{className:"complete"},"\u88C5\u5378\u5B8C\u6210"),o.createElement("span",{className:"leave"},"\u79BB\u573A"),o.createElement("span",{className:"timeout"},"\u6267\u884C\u8D85\u65F6"),o.createElement("span",{className:"late"},"\u8FDF\u5230"),o.createElement("span",{className:"selected"},"\u9009\u4E2D"),o.createElement("span",{className:"recommend"},"\u63A8\u8350"),o.createElement("span",{className:"other"},"\u5176\u5B83"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/symbol.css';
  export default () => {
    return (
      <div className="symbol-legend">
        <span>\u672A\u88C5\u5378</span>
        <span className="loading">\u88C5\u5378\u4E2D</span>
        <span className="complete">\u88C5\u5378\u5B8C\u6210</span>
        <span className="leave">\u79BB\u573A</span>
        <span className="timeout">\u6267\u884C\u8D85\u65F6</span>
        <span className="late">\u8FDF\u5230</span>
        <span className="selected">\u9009\u4E2D</span>
        <span className="recommend">\u63A8\u8350</span>
        <span className="other">\u5176\u5B83</span>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/symbol.css":{type:"FILE",value:a(77178).Z}}}},"docs-advance-css-demo-7":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(6233);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"mix-adaptive"},o.createElement("span",null,"CSS\u5B9E\u73B0\u6587\u5B57\u667A\u80FD\u9002\u914D\u80CC\u666F"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/adaptive.css';
  export default () => {
    return (
      <div className="mix-adaptive">
        <span>CSS\u5B9E\u73B0\u6587\u5B57\u667A\u80FD\u9002\u914D\u80CC\u666F</span>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/adaptive.css":{type:"FILE",value:a(28874).Z}}}},"docs-advance-css-demo-8":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(36035);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"ft-max ft-bold align-center"},o.createElement("ruby",null,"\u62FC",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"p\u012Bn"),o.createElement("rp",null,"\uFF09")),o.createElement("ruby",null,"\u97F3",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"y\u012Bn"),o.createElement("rp",null,"\uFF09")),o.createElement("ruby",null,"\u6807",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"bi\u0101o"),o.createElement("rp",null,"\uFF09")),o.createElement("ruby",null,"\u6CE8",o.createElement("rp",null,"\uFF08"),o.createElement("rt",null,"zh\xF9"),o.createElement("rp",null,"\uFF09")))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/index.less';
  export default () => {
    return (
      <div className="ft-max ft-bold align-center">
        <ruby>
          \u62FC<rp>\uFF08</rp>
          <rt>p\u012Bn</rt>
          <rp>\uFF09</rp>
        </ruby>
        <ruby>
          \u97F3<rp>\uFF08</rp>
          <rt>y\u012Bn</rt>
          <rp>\uFF09</rp>
        </ruby>
        <ruby>
          \u6807<rp>\uFF08</rp>
          <rt>bi\u0101o</rt>
          <rp>\uFF09</rp>
        </ruby>
        <ruby>
          \u6CE8<rp>\uFF08</rp>
          <rt>zh\xF9</rt>
          <rp>\uFF09</rp>
        </ruby>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/index.less":{type:"FILE",value:a(89994).Z}}}},"docs-advance-css-demo-9":{component:function(){Ht={value:!0};var ht=d0(a(93236));a(46172);function d0(B0){return B0&&B0.__esModule?B0:{default:B0}}return function(){return o.createElement("div",{className:"underline"},o.createElement("span",null,"\u9F20\u6807hover\u6587\u5B57\u51FA\u73B0\u4E0B\u5212\u7EBF\u52A8\u6001\u6548\u679C"))}}(),asset:{type:"BLOCK",id:"docs-advance-css-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
  import './_styles/underline.css';
  export default () => {
    return (
      <div className="underline">
        <span>\u9F20\u6807hover\u6587\u5B57\u51FA\u73B0\u4E0B\u5212\u7EBF\u52A8\u6001\u6548\u679C</span>
      </div>
    );
  };`},react:{type:"NPM",value:"18.1.0"},"_styles/underline.css":{type:"FILE",value:a(29286).Z}}}}},D2={title:"CSS",toc:"menu",filename:"docs/advance/css/index.md",order:0,nav:{title:"\u8FDB\u9636",order:2}},Ft=[{id:"\u8F93\u5165\u6846\u6296\u52A8",depth:2,title:"\u8F93\u5165\u6846\u6296\u52A8"},{id:"\u6587\u5B57\u63CF\u8FB9",depth:2,title:"\u6587\u5B57\u63CF\u8FB9"},{id:"\u7F51\u7AD9\u53D8\u6210\u7070\u8272\u6548\u679C",depth:2,title:"\u7F51\u7AD9\u53D8\u6210\u7070\u8272\u6548\u679C"},{id:"css-\u4F2A\u7C7B\u5B9E\u73B0\u63D0\u793A\u8BED\u56FE\u6807\u6548\u679C",depth:2,title:"CSS \u4F2A\u7C7B\u5B9E\u73B0\u63D0\u793A\u8BED\u56FE\u6807\u6548\u679C"},{id:"css-\u8282\u6D41",depth:2,title:"CSS \u8282\u6D41"},{id:"\u8D85\u51FA\u591A\u884C\u7701\u7565",depth:2,title:"\u8D85\u51FA\u591A\u884C\u7701\u7565"},{id:"css-\u5B9E\u73B0\u6309\u94AE\u7684\u4E0D\u540C\u80CC\u666F",depth:2,title:"CSS \u5B9E\u73B0\u6309\u94AE\u7684\u4E0D\u540C\u80CC\u666F"},{id:"css-\u5B9E\u73B0\u6587\u5B57\u667A\u80FD\u9002\u914D",depth:2,title:"CSS \u5B9E\u73B0\u6587\u5B57\u667A\u80FD\u9002\u914D"},{id:"\u62FC\u97F3\u6807\u6CE8",depth:2,title:"\u62FC\u97F3\u6807\u6CE8"},{id:"\u4E0B\u5212\u7EBF\u52A8\u6001\u6548\u679C",depth:2,title:"\u4E0B\u5212\u7EBF\u52A8\u6001\u6548\u679C"}],Mt=[],sa={},aa={title:"SEO\u4F18\u5316",toc:"menu",filename:"docs/column/seo/index.md",order:1,nav:{title:"\u4E13\u680F",order:3},description:"\u63D0\u5347\u9996\u5C4F\u7684\u52A0\u8F7D\u901F\u5EA6\uFF0C\u662F\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u4E2D\u6700\u91CD\u8981\u7684\u73AF\u8282\uFF0C\u8FD9\u91CC\u7B14\u8005\u68B3\u7406\u51FA\u4E00\u4E9B\u5E38\u89C4\u4E14\u6709\u6548\u7684\u9996\u5C4F\u4F18\u5316\u5EFA\u8BAE\u3002"},wa=[{id:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316",depth:2,title:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316"},{id:"\u8DEF\u7531\u61D2\u52A0\u8F7D",depth:2,title:"\u8DEF\u7531\u61D2\u52A0\u8F7D"},{id:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",depth:2,title:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D"},{id:"\u5408\u7406\u4F7F\u7528-tree-shaking",depth:2,title:"\u5408\u7406\u4F7F\u7528 Tree shaking"},{id:"\u9AA8\u67B6\u5C4F\u4F18\u5316\u767D\u5C4F\u65F6\u957F",depth:2,title:"\u9AA8\u67B6\u5C4F\u4F18\u5316\u767D\u5C4F\u65F6\u957F"},{id:"\u957F\u5217\u8868\u865A\u62DF\u6EDA\u52A8",depth:2,title:"\u957F\u5217\u8868\u865A\u62DF\u6EDA\u52A8"},{id:"web-worker-\u4F18\u5316\u957F\u4EFB\u52A1",depth:2,title:"Web Worker \u4F18\u5316\u957F\u4EFB\u52A1"},{id:"requestanimationframe-\u5236\u4F5C\u52A8\u753B",depth:2,title:"requestAnimationFrame \u5236\u4F5C\u52A8\u753B"},{id:"js-\u7684-6-\u79CD\u52A0\u8F7D\u65B9\u5F0F",depth:2,title:"JS \u7684 6 \u79CD\u52A0\u8F7D\u65B9\u5F0F"},{id:"\u56FE\u7247\u7684\u4F18\u5316",depth:2,title:"\u56FE\u7247\u7684\u4F18\u5316"},{id:"\u4F18\u5316\u603B\u7ED3",depth:2,title:"\u4F18\u5316\u603B\u7ED3"},{id:"\u53C2\u8003\u6587\u7AE0",depth:2,title:"\u53C2\u8003\u6587\u7AE0"}],ua=[{value:"\u63D0\u5347\u9996\u5C4F\u7684\u52A0\u8F7D\u901F\u5EA6\uFF0C\u662F\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u4E2D\u6700\u91CD\u8981\u7684\u73AF\u8282\uFF0C\u8FD9\u91CC\u7B14\u8005\u68B3\u7406\u51FA\u4E00\u4E9B\u5E38\u89C4\u4E14\u6709\u6548\u7684\u9996\u5C4F\u4F18\u5316\u5EFA\u8BAE\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u6807\uFF1A \u901A\u8FC7\u5BF9\u6BD4\u4F18\u5316\u524D\u540E\u7684\u6027\u80FD\u53D8\u5316\uFF0C\u6765\u9A8C\u8BC1\u65B9\u6848\u7684\u6709\u6548\u6027\uFF0C\u4E86\u89E3\u5E76\u638C\u63E1\u5176\u539F\u7406\u3002",paraId:1,tocIndex:0},{value:"SPA \u9879\u76EE\uFF0C\u4E00\u4E2A\u8DEF\u7531\u5BF9\u5E94\u4E00\u4E2A\u9875\u9762\uFF0C\u5982\u679C\u4E0D\u505A\u5904\u7406\uFF0C\u9879\u76EE\u6253\u5305\u540E\uFF0C\u4F1A\u628A\u6240\u6709\u9875\u9762\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5F53\u7528\u6237\u6253\u5F00\u9996\u9875\u65F6\uFF0C",paraId:2,tocIndex:1},{value:"\u4F1A\u4E00\u6B21\u6027\u52A0\u8F7D\u6240\u6709\u7684\u8D44\u6E90",paraId:2,tocIndex:1},{value:"\uFF0C\u9020\u6210\u9996\u9875\u52A0\u8F7D\u5F88\u6162\uFF0C\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u3002",paraId:2,tocIndex:1},{value:"\u5C06\u8DEF\u7531\u5168\u90E8\u6539\u6210\u61D2\u52A0\u8F7D\uFF1A",paraId:3,tocIndex:1},{value:`const routes = [
    {
      path: '/',
      name: 'Home',
      // \u8DEF\u7531\u7EA7\u4EE3\u7801\u5206\u89E3
      // \u8FD9\u5C06\u4E3A\u8BE5\u8DEF\u7531\u751F\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u5757(home.[hash].js)
      // \u5B83\u5728\u8BBF\u95EE\u8DEF\u7531\u65F6\u662F\u61D2\u52A0\u8F7D\u7684\u3002
      component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
    },
  ];
  `,paraId:4,tocIndex:1},{value:"\u91CD\u65B0\u6253\u5305\u540E\u7684 ",paraId:5,tocIndex:1},{value:"home.js",paraId:5,tocIndex:1},{value:" \u548C ",paraId:5,tocIndex:1},{value:"app.js",paraId:5,tocIndex:1},{value:" \u7684\u6587\u4EF6\u5927\u5C0F\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u901A\u8FC7\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF0C\u80FD\u5C06\u9879\u76EE\u7684\u9996\u9875\u8D44\u6E90\u5927\u5E45\u5EA6\u538B\u7F29\uFF0C\u51CF\u5C11\u9996\u9875\u767D\u5C4F\u65F6\u95F4\u3002",paraId:5,tocIndex:1},{value:"\u8DEF\u7531\u61D2\u52A0\u8F7D\u7684\u539F\u7406\uFF1A",paraId:6,tocIndex:1},{value:"\u61D2\u52A0\u8F7D\u524D\u63D0\u7684\u5B9E\u73B0\uFF1AES6 \u7684\u52A8\u6001\u5730\u52A0\u8F7D\u6A21\u5757\u2014\u2014",paraId:7,tocIndex:1},{value:"import()",paraId:7,tocIndex:1},{value:"\uFF0C\u8C03\u7528 import() \u4E4B\u5904\uFF0C\u88AB\u4F5C\u4E3A\u5206\u79BB\u7684\u6A21\u5757\u8D77\u70B9\uFF0C\u610F\u601D\u662F\uFF0C\u88AB\u8BF7\u6C42\u7684\u6A21\u5757\u548C\u5B83\u5F15\u7528\u7684\u6240\u6709\u5B50\u6A21\u5757\uFF0C\u4F1A\u5206\u79BB\u5230\u4E00\u4E2A\u5355\u72EC\u7684 chunk \u4E2D\u3002",paraId:7,tocIndex:1},{value:"\u2014\u2014\u6458\u81EA",paraId:8,tocIndex:1},{value:"\u300Awebpack\u2014\u2014\u6A21\u5757\u65B9\u6CD5\u300B",paraId:8,tocIndex:1},{value:"\u7684 ",paraId:8,tocIndex:1},{value:"import()",paraId:8,tocIndex:1},{value:" \u5C0F\u8282",paraId:8,tocIndex:1},{value:"\u8981\u5B9E\u73B0\u61D2\u52A0\u8F7D\uFF0C\u5C31\u5F97\u5148\u5C06\u8FDB\u884C\u61D2\u52A0\u8F7D\u7684\u5B50\u6A21\u5757\u5206\u79BB\u51FA\u6765\uFF0C\u6253\u5305\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u3002",paraId:9,tocIndex:1},{value:"webpackChunkName \u4F5C\u7528\u662F webpack \u5728\u6253\u5305\u7684\u65F6\u5019\uFF0C\u5BF9\u5F02\u6B65\u5F15\u5165\u7684\u5E93\u4EE3\u7801\uFF08lodash\uFF09\u8FDB\u884C\u4EE3\u7801\u5206\u5272\u65F6\uFF0C\u8BBE\u7F6E\u4EE3\u7801\u5757\u7684\u540D\u5B57\u3002webpack \u4F1A\u5C06\u4EFB\u4F55\u4E00\u4E2A\u5F02\u6B65\u6A21\u5757\u4E0E\u76F8\u540C\u7684\u5757\u540D\u79F0\u7EC4\u5408\u5230\u76F8\u540C\u7684\u5F02\u6B65\u5757\u4E2D\u3002",paraId:10,tocIndex:1},{value:"\u9664\u4E86\u8DEF\u7531\u7684\u61D2\u52A0\u8F7D\u5916\uFF0C\u7EC4\u4EF6\u7684\u61D2\u52A0\u8F7D\u5728\u5F88\u591A\u573A\u666F\u4E0B\u4E5F\u6709\u91CD\u8981\u7684\u4F5C\u7528\u3002",paraId:11,tocIndex:2},{value:"\u4E3E\u4E2A \u{1F330}\uFF1A",paraId:12,tocIndex:2},{value:"home \u9875\u9762 \u548C about \u9875\u9762\uFF0C\u90FD\u5F15\u5165\u4E86 dialogInfo \u5F39\u6846\u7EC4\u4EF6\uFF0C\u8BE5\u5F39\u6846\u4E0D\u662F\u4E00\u8FDB\u5165\u9875\u9762\u5C31\u52A0\u8F7D\uFF0C\u800C\u662F\u9700\u8981\u7528\u6237\u624B\u52A8\u89E6\u53D1\u540E\u624D\u5C55\u793A\u51FA\u6765\u3002",paraId:13,tocIndex:2},{value:"home \u9875\u9762\u793A\u4F8B\uFF1A",paraId:14,tocIndex:2},{value:`<template>
    <div class="homeView">
      <p>home \u9875\u9762</p>
      <el-button @click="dialogVisible = !dialogVisible">\u6253\u5F00\u5F39\u6846</el-button>
      <dialogInfo v-if="dialogVisible" />
    </div>
  </template>
  <script>
    import dialogInfo from '@/components/dialogInfo';
    export default {
      name: 'homeView',
      components: {
        dialogInfo,
      },
    };
  <\/script>
  `,paraId:15,tocIndex:2},{value:"\u9879\u76EE\u6253\u5305\u540E\uFF0C\u53D1\u73B0 home.js \u548C about.js \u5747\u5305\u62EC\u4E86\u8BE5\u5F39\u6846\u7EC4\u4EF6\u7684\u4EE3\u7801\uFF08\u5728 dist \u6587\u4EF6\u4E2D\u641C\u7D22 dialogInfo \u5F39\u6846\u7EC4\u4EF6\uFF09\u3002",paraId:16,tocIndex:2},{value:"\u5F53\u7528\u6237\u6253\u5F00 home \u9875\u65F6\uFF0C\u4F1A\u4E00\u6B21\u6027\u52A0\u8F7D\u8BE5\u9875\u9762\u6240\u6709\u7684\u8D44\u6E90\uFF0C",paraId:17,tocIndex:2},{value:"\u6211\u4EEC\u671F\u671B\u7684\u662F\u7528\u6237\u89E6\u53D1\u6309\u94AE\u540E\uFF0C\u518D\u52A0\u8F7D\u8BE5\u5F39\u6846\u7EC4\u4EF6\u7684\u8D44\u6E90",paraId:17,tocIndex:2},{value:"\uFF0C\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u5C31\u5F88\u9002\u5408\u7528\u61D2\u52A0\u8F7D\u7684\u65B9\u5F0F\u5F15\u5165\u3002",paraId:17,tocIndex:2},{value:"\u5F39\u6846\u7EC4\u4EF6\u61D2\u52A0\u8F7D\uFF1A",paraId:18,tocIndex:2},{value:`<script>
  const dialogInfo = () => import(/* webpackChunkName: "dialogInfo" */ '@/components/dialogInfo');
  export default {
    name: 'homeView',
    components: {
      dialogInfo
    }
  }
  <\/script>
  `,paraId:19,tocIndex:2},{value:"\u91CD\u65B0\u6253\u5305\u540E\uFF0Chome.js \u548C about.js \u4E2D\u6CA1\u6709\u4E86\u5F39\u6846\u7EC4\u4EF6\u7684\u4EE3\u7801\uFF0C\u8BE5\u7EC4\u4EF6\u88AB\u72EC\u7ACB\u6253\u5305\u6210 dialogInfo.js\uFF0C",paraId:20,tocIndex:2},{value:"\u5F53\u7528\u6237\u70B9\u51FB\u6309\u94AE\u65F6\uFF0C\u624D\u4F1A\u53BB\u52A0\u8F7D dialogInfo.js \u548C dialogInfo.css",paraId:20,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2},{value:"\u6700\u7EC8\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u8DEF\u7531\u61D2\u540E\uFF0C\u8BE5\u9879\u76EE\u7684\u9996\u9875\u8D44\u6E90\u8FDB\u4E00\u6B65\u51CF\u5C11\u3002",paraId:21,tocIndex:2},{value:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u7684\u4F7F\u7528\u573A\u666F",paraId:22,tocIndex:2},{value:"\u6709\u65F6\u8D44\u6E90\u62C6\u5206\u7684\u8FC7\u7EC6\u4E5F\u4E0D\u597D\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u6D4F\u89C8\u5668 http \u8BF7\u6C42\u7684\u589E\u591A\u3002",paraId:23,tocIndex:2},{value:"\u603B\u7ED3\u51FA\u4E09\u79CD\u9002\u5408\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u7684\u573A\u666F\uFF1A",paraId:24,tocIndex:2},{value:"1\uFF09\u8BE5\u9875\u9762\u7684 JS \u6587\u4EF6\u4F53\u79EF\u5927\uFF0C\u5BFC\u81F4\u9875\u9762\u6253\u5F00\u6162\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u8FDB\u884C\u8D44\u6E90\u62C6\u5206\uFF0C\u5229\u7528\u6D4F\u89C8\u5668\u5E76\u884C\u4E0B\u8F7D\u8D44\u6E90\uFF0C\u63D0\u5347\u4E0B\u8F7D\u901F\u5EA6\uFF08\u6BD4\u5982\u9996\u9875\uFF09\u3002",paraId:25,tocIndex:2},{value:"2\uFF09\u8BE5\u7EC4\u4EF6\u4E0D\u662F\u4E00\u8FDB\u5165\u9875\u9762\u5C31\u5C55\u793A\uFF0C\u9700\u8981\u4E00\u5B9A\u6761\u4EF6\u4E0B\u624D\u89E6\u53D1\uFF08\u6BD4\u5982\u5F39\u6846\u7EC4\u4EF6\uFF09\u3002",paraId:26,tocIndex:2},{value:"3\uFF09\u8BE5\u7EC4\u4EF6\u590D\u7528\u6027\u9AD8\uFF0C\u5F88\u591A\u9875\u9762\u90FD\u6709\u5F15\u5165\uFF0C\u5229\u7528\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u62BD\u79BB\u51FA\u8BE5\u7EC4\u4EF6\uFF0C\u4E00\u65B9\u9762\u53EF\u4EE5\u5F88\u597D\u5229\u7528\u7F13\u5B58\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u51CF\u5C11\u9875\u9762\u7684 JS \u6587\u4EF6\u5927\u5C0F\uFF08\u6BD4\u5982\u8868\u683C\u7EC4\u4EF6\u3001\u56FE\u5F62\u7EC4\u4EF6\u7B49\uFF09\u3002",paraId:27,tocIndex:2},{value:"Tree shaking \u7684\u4F5C\u7528\uFF1A\u6D88\u9664\u65E0\u7528\u7684 JS \u4EE3\u7801\uFF0C\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF\u3002",paraId:28,tocIndex:3},{value:"\u4E3E\u4E2A \u{1F330}\uFF1A",paraId:29,tocIndex:3},{value:`// util.js
  export function targetType(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
  }
  export function deepClone(target) {
    return JSON.parse(JSON.stringify(target));
  }
  `,paraId:30,tocIndex:3},{value:"\u9879\u76EE\u4E2D\u53EA\u4F7F\u7528\u4E86 targetType \u65B9\u6CD5\uFF0C\u4F46\u672A\u4F7F\u7528 deepClone \u65B9\u6CD5\uFF0C\u9879\u76EE\u6253\u5305\u540E\uFF0CdeepClone \u65B9\u6CD5\u4E0D\u4F1A\u88AB\u6253\u5305\u5230\u9879\u76EE\u91CC\u3002",paraId:31,tocIndex:3},{value:"tree-shaking \u539F\u7406\uFF1A",paraId:32,tocIndex:3},{value:"\u4F9D\u8D56\u4E8E ES6 \u7684\u6A21\u5757\u7279\u6027\uFF0CES6 \u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u662F\u786E\u5B9A\u7684\uFF0C\u548C\u8FD0\u884C\u65F6\u7684\u72B6\u6001\u65E0\u5173\uFF0C\u53EF\u4EE5\u8FDB\u884C\u53EF\u9760\u7684\u9759\u6001\u5206\u6790\uFF0C\u8FD9\u5C31\u662F tree-shaking \u7684\u57FA\u7840\u3002",paraId:33,tocIndex:3},{value:"\u9759\u6001\u5206\u6790\u5C31\u662F\u4E0D\u9700\u8981\u6267\u884C\u4EE3\u7801\uFF0C\u5C31\u53EF\u4EE5\u4ECE\u5B57\u9762\u91CF\u4E0A\u5BF9\u4EE3\u7801\u8FDB\u884C\u5206\u6790\u3002ES6 \u4E4B\u524D\u7684\u6A21\u5757\u5316\uFF0C\u6BD4\u5982 CommonJS \u662F\u52A8\u6001\u52A0\u8F7D\uFF0C\u53EA\u6709\u6267\u884C\u540E\u624D\u77E5\u9053\u5F15\u7528\u7684\u4EC0\u4E48\u6A21\u5757\uFF0C\u5C31\u4E0D\u80FD\u901A\u8FC7\u9759\u6001\u5206\u6790\u53BB\u505A\u4F18\u5316\uFF0C\u6B63\u662F\u57FA\u4E8E\u8FD9\u4E2A\u57FA\u7840\u4E0A\uFF0C\u624D\u4F7F\u5F97 tree-shaking \u6210\u4E3A\u53EF\u80FD\u3002",paraId:34,tocIndex:3},{value:"Tree shaking \u5E76\u4E0D\u662F\u4E07\u80FD\u7684",paraId:35,tocIndex:3},{value:"\u5E76\u4E0D\u662F\u8BF4\u6240\u6709\u65E0\u7528\u7684\u4EE3\u7801\u90FD\u53EF\u4EE5\u88AB\u6D88\u9664\uFF0C\u8FD8\u662F\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u6362\u4E2A\u5199\u6CD5 tree-shaking \u5C31\u5931\u6548\u4E86\u3002",paraId:36,tocIndex:3},{value:`// util.js
  export default {
    targetType(target) {
      return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
    },
    deepClone(target) {
      return JSON.parse(JSON.stringify(target));
    },
  };

  // \u5F15\u5165\u5E76\u4F7F\u7528
  import util from '../util';
  util.targetType(null);
  `,paraId:37,tocIndex:3},{value:"\u540C\u6837\u7684\uFF0C\u9879\u76EE\u4E2D\u53EA\u4F7F\u7528\u4E86 targetType \u65B9\u6CD5\uFF0C\u672A\u4F7F\u7528 deepClone \u65B9\u6CD5\uFF0C\u9879\u76EE\u6253\u5305\u540E\uFF0CdeepClone \u65B9\u6CD5\u8FD8\u662F\u88AB\u6253\u5305\u5230\u9879\u76EE\u91CC\u3002",paraId:38,tocIndex:3},{value:"\u7A76\u5176\u539F\u56E0\uFF0Cexport default \u5BFC\u51FA\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u65E0\u6CD5\u901A\u8FC7\u9759\u6001\u5206\u6790\u5224\u65AD\u51FA\u4E00\u4E2A\u5BF9\u8C61\u7684\u54EA\u4E9B\u53D8\u91CF\u672A\u88AB\u4F7F\u7528\uFF0C\u6240\u4EE5 tree-shaking \u53EA\u5BF9\u4F7F\u7528 export \u5BFC\u51FA\u7684\u53D8\u91CF\u751F\u6548\u3002",paraId:39,tocIndex:3},{value:"\u8FD9\u4E5F\u662F\u51FD\u6570\u5F0F\u7F16\u7A0B\u8D8A\u6765\u8D8A\u706B\u7684\u539F\u56E0\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5F88\u597D\u5229\u7528 tree-shaking \u7CBE\u7B80\u9879\u76EE\u7684\u4F53\u79EF\uFF0C\u4E5F\u662F vue3 \u5168\u9762\u62E5\u62B1\u4E86\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u539F\u56E0\u4E4B\u4E00\u3002",paraId:40,tocIndex:3},{value:"\u4F7F\u7528\u9AA8\u67B6\u5C4F\uFF0C\u53EF\u4EE5\u7F29\u77ED\u767D\u5C4F\u65F6\u95F4\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002\u56FD\u5185\u5927\u591A\u6570\u7684\u4E3B\u6D41\u7F51\u7AD9\u90FD\u4F7F\u7528\u4E86\u9AA8\u67B6\u5C4F\uFF0C\u7279\u522B\u662F\u624B\u673A\u7AEF\u7684\u9879\u76EE\u3002",paraId:41,tocIndex:4},{value:"SPA \u5355\u9875\u5E94\u7528\uFF0C\u65E0\u8BBA vue \u8FD8\u662F react\uFF0C\u6700\u521D\u7684 html \u90FD\u662F\u7A7A\u767D\u7684\uFF0C\u9700\u8981\u901A\u8FC7\u52A0\u8F7D JS \u5C06\u5185\u5BB9\u6302\u8F7D\u5230\u6839\u8282\u70B9\u4E0A\uFF0C\u8FD9\u5957\u673A\u5236\u7684\u526F\u4F5C\u7528\uFF1A\u4F1A\u9020\u6210\u957F\u65F6\u95F4\u7684\u767D\u5C4F\u3002",paraId:42,tocIndex:4},{value:"\u5E38\u89C1\u7684\u9AA8\u67B6\u5C4F\u63D2\u4EF6\u5C31\u662F\u57FA\u4E8E\u8FD9\u79CD\u539F\u7406\uFF0C\u5728\u9879\u76EE\u6253\u5305\u65F6\u5C06\u9AA8\u67B6\u5C4F\u7684\u5185\u5BB9\u76F4\u63A5\u653E\u5230 html \u6587\u4EF6\u7684\u6839\u8282\u70B9\u4E2D\u3002",paraId:43,tocIndex:4},{value:"\u9AA8\u67B6\u5C4F\u786E\u5B9E\u662F\u4F18\u5316\u767D\u5C4F\u7684\u4E0D\u4E8C\u9009\u62E9\uFF0C\u6781\u5927\u7F29\u77ED\u767D\u5C4F\u65F6\u95F4\uFF0C\u4F7F\u7528\u793A\u4F8B\u53EF\u53C2\u8003 ",paraId:44,tocIndex:4},{value:"ElementUI",paraId:44,tocIndex:4},{value:"\u4EE5\u53CA ",paraId:44,tocIndex:4},{value:"Vant",paraId:44,tocIndex:4},{value:"\u3002",paraId:44,tocIndex:4},{value:"\u9996\u9875\u4E2D\u4E0D\u4E4F\u6709\u9700\u8981\u6E32\u67D3\u957F\u5217\u8868\u7684\u573A\u666F\uFF0C\u5F53\u6E32\u67D3\u6761\u6570\u8FC7\u591A\u65F6\uFF0C\u6240\u9700\u8981\u7684\u6E32\u67D3\u65F6\u95F4\u4F1A\u5F88\u957F\uFF0C\u6EDA\u52A8\u65F6\u8FD8\u4F1A\u9020\u6210\u9875\u9762\u5361\u987F\uFF0C\u6574\u4F53\u4F53\u9A8C\u975E\u5E38\u4E0D\u597D\u3002",paraId:45,tocIndex:5},{value:"\u865A\u62DF\u6EDA\u52A8\u2014\u2014\u6307\u7684\u662F\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u7684\u5217\u8868\u9879\uFF0C\u975E\u53EF\u89C1\u533A\u57DF",paraId:46,tocIndex:5},{value:"\u7684\u4E0D\u6E32\u67D3\uFF0C\u5728\u6EDA\u52A8\u65F6\u52A8\u6001\u66F4\u65B0\u53EF\u89C6\u533A\u57DF\uFF0C\u8BE5\u65B9\u6848\u5728\u4F18\u5316\u5927\u91CF\u6570\u636E\u6E32\u67D3\u65F6\u6548\u679C\u662F\u5F88\u660E\u663E\u7684\u3002",paraId:46,tocIndex:5},{value:"\u865A\u62DF\u6EDA\u52A8\u57FA\u672C\u539F\u7406\uFF1A",paraId:47,tocIndex:5},{value:"\u8BA1\u7B97\u51FA totalHeight \u5217\u8868\u603B\u9AD8\u5EA6\uFF0C\u5E76\u5728\u89E6\u53D1\u65F6\u6EDA\u52A8\u4E8B\u4EF6\u65F6\u6839\u636E scrollTop \u503C\u4E0D\u65AD\u66F4\u65B0 startIndex \u4EE5\u53CA endIndex \uFF0C\u4EE5\u6B64\u4ECE\u5217\u8868\u6570\u636E listData \u4E2D\u622A\u53D6\u5BF9\u5E94\u5143\u7D20\u3002",paraId:48,tocIndex:5},{value:"\u865A\u62DF\u6EDA\u52A8\u63D2\u4EF6",paraId:49,tocIndex:5},{value:"\u865A\u62DF\u6EDA\u52A8\u7684\u63D2\u4EF6\u6709\u5F88\u591A\uFF0C\u6BD4\u5982 vue-virtual-scroller\u3001vue-virtual-scroll-list\u3001react-tiny-virtual-list\u3001react-virtualized \u7B49\u3002",paraId:50,tocIndex:5},{value:"\u8FD9\u91CC\u7B80\u5355\u4ECB\u7ECD ",paraId:51,tocIndex:5},{value:"vue-virtual-scroller",paraId:51,tocIndex:5},{value:" \u7684\u4F7F\u7528\uFF1A",paraId:51,tocIndex:5},{value:`// \u5B89\u88C5\u63D2\u4EF6
  npm install vue-virtual-scroller

  // main.js
  import VueVirtualScroller from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

  Vue.use(VueVirtualScroller)

  // \u4F7F\u7528
  <template>
    <RecycleScroller
      class="scroller"
      :items="list"
      :item-size="32"
      key-field="id"
      v-slot="{ item }">
        <div class="user"> {{ item.name }} </div>
    </RecycleScroller>
  </template>
  `,paraId:52,tocIndex:5},{value:"\u8BE5\u63D2\u4EF6\u4E3B\u8981\u6709 RecycleScroller.vue\u3001DynamicScroller.vue \u8FD9\u4E24\u4E2A\u7EC4\u4EF6\uFF0C\u5176\u4E2D RecycleScroller \u9700\u8981 item \u7684\u9AD8\u5EA6\u4E3A\u9759\u6001\u7684\uFF0C\u4E5F\u5C31\u662F\u5217\u8868\u6BCF\u4E2A item \u7684\u9AD8\u5EA6\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u800C DynamicScroller \u53EF\u4EE5\u517C\u5BB9 item \u7684\u9AD8\u5EA6\u4E3A\u52A8\u6001\u7684\u60C5\u51B5\u3002",paraId:53,tocIndex:5},{value:"\u7531\u4E8E\u6D4F\u89C8\u5668 GUI \u6E32\u67D3\u7EBF\u7A0B\u4E0E JS \u5F15\u64CE\u7EBF\u7A0B\u662F\u4E92\u65A5\u7684\u5173\u7CFB\uFF0C\u5F53\u9875\u9762\u4E2D\u6709\u5F88\u591A\u957F\u4EFB\u52A1\u65F6\uFF0C\u4F1A\u9020\u6210\u9875\u9762 UI \u963B\u585E\uFF0C\u51FA\u73B0\u754C\u9762\u5361\u987F\u3001\u6389\u5E27\u7B49\u60C5\u51B5\u3002",paraId:54,tocIndex:6},{value:"\u67E5\u770B\u9875\u9762\u7684\u957F\u4EFB\u52A1\uFF1A",paraId:55,tocIndex:6},{value:"\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u9009\u62E9 Performance \u5DE5\u5177\uFF0C\u70B9\u51FB Start \u6309\u94AE\uFF0C\u5C55\u5F00 Main \u9009\u9879\uFF0C\u4F1A\u53D1\u73B0\u6709\u5F88\u591A\u7EA2\u8272\u7684\u4E09\u89D2\uFF0C\u8FD9\u4E9B\u5C31\u5C5E\u4E8E\u957F\u4EFB\u52A1\uFF08\u957F\u4EFB\u52A1\uFF1A\u6267\u884C\u65F6\u95F4\u8D85\u8FC7 50ms \u7684\u4EFB\u52A1\uFF09\u3002",paraId:56,tocIndex:6},{value:"\u6D4B\u8BD5\u5B9E\u9A8C\uFF1A",paraId:57,tocIndex:6},{value:"\u5982\u679C\u76F4\u63A5\u628A\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u76F4\u63A5\u4E22\u5230\u4E3B\u7EBF\u7A0B\u4E2D\uFF0C\u8BA1\u7B97\u8FC7\u7A0B\u4E2D\u9875\u9762\u4E00\u76F4\u5904\u4E8E\u5361\u6B7B\u72B6\u6001\uFF0C\u65E0\u6CD5\u64CD\u4F5C\u3002",paraId:58,tocIndex:6},{value:`let sum = 0;
  for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random();
    }
  }
  `,paraId:59,tocIndex:6},{value:"\u4F7F\u7528 Web Worker \u6267\u884C\u4E0A\u8FF0\u4EE3\u7801\u65F6\uFF0C\u8BA1\u7B97\u8FC7\u7A0B\u4E2D\u9875\u9762\u6B63\u5E38\u53EF\u64CD\u4F5C\u3001\u65E0\u5361\u987F\uFF1A",paraId:60,tocIndex:6},{value:`// worker.js
  onmessage = function (e) {
    // onmessage\u83B7\u53D6\u4F20\u5165\u7684\u521D\u59CB\u503C
    let sum = e.data;
    for (let i = 0; i < 200000; i++) {
      for (let i = 0; i < 10000; i++) {
        sum += Math.random();
      }
    }
    // \u5C06\u8BA1\u7B97\u7684\u7ED3\u679C\u4F20\u9012\u51FA\u53BB
    postMessage(sum);
  };
  `,paraId:61,tocIndex:6},{value:"Web Worker \u5177\u4F53\u7684\u4F7F\u7528\u4E0E\u6848\u4F8B\uFF0C\u8BE6\u60C5\u89C1 ",paraId:62,tocIndex:6},{value:"\u4E00\u6587\u5F7B\u5E95\u4E86\u89E3 Web Worker\uFF0C\u5341\u4E07\u3001\u767E\u4E07\u6761\u6570\u636E\u90FD\u662F\u5F1F\u5F1F \u{1F525}",paraId:62,tocIndex:6},{value:"\u3002",paraId:62,tocIndex:6},{value:"Web Worker \u7684\u901A\u4FE1\u65F6\u957F",paraId:63,tocIndex:6},{value:"\u5E76\u4E0D\u662F\u6267\u884C\u65F6\u95F4\u8D85\u8FC7 50ms \u7684\u4EFB\u52A1\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 Web Worker\uFF0C\u8FD8\u8981\u5148\u8003\u8651\u901A\u4FE1\u65F6\u957F\u7684\u95EE\u9898\u3002",paraId:64,tocIndex:6},{value:"\u5047\u5982\u4E00\u4E2A\u8FD0\u7B97\u6267\u884C\u65F6\u957F\u4E3A 100ms\uFF0C\u4F46\u662F\u901A\u4FE1\u65F6\u957F\u4E3A 300ms\uFF0C \u7528\u4E86 Web Worker \u53EF\u80FD\u4F1A\u66F4\u6162\u3002",paraId:65,tocIndex:6},{value:"\u6BD4\u5982\u65B0\u5EFA\u4E00\u4E2A web worker, \u6D4F\u89C8\u5668\u4F1A\u52A0\u8F7D\u5BF9\u5E94\u7684 worker.js \u8D44\u6E90\u3002",paraId:66,tocIndex:6},{value:"\u5F53\u4EFB\u52A1\u7684\u8FD0\u7B97\u65F6\u957F - \u901A\u4FE1\u65F6\u957F > 50ms\uFF0C\u63A8\u8350\u4F7F\u7528 Web Worker\u3002",paraId:67,tocIndex:6},{value:"requestAnimationFrame",paraId:68,tocIndex:7},{value:" \u662F\u6D4F\u89C8\u5668\u4E13\u95E8\u4E3A\u52A8\u753B\u63D0\u4F9B\u7684 API\uFF0C\u5B83\u7684\u5237\u65B0\u9891\u7387\u4E0E\u663E\u793A\u5668\u7684\u9891\u7387\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F7F\u7528\u8BE5 api \u53EF\u4EE5\u89E3\u51B3\u7528 setTimeout/setInterval \u5236\u4F5C\u52A8\u753B\u5361\u987F\u7684\u60C5\u51B5\u3002",paraId:68,tocIndex:7},{value:"setTimeout/setInterval\u3001requestAnimationFrame \u4E09\u8005\u7684\u533A\u522B\uFF1A",paraId:69,tocIndex:7},{value:"1\uFF09\u5F15\u64CE\u5C42\u9762",paraId:70,tocIndex:7},{value:"setTimeout/setInterval \u5C5E\u4E8E JS \u5F15\u64CE\uFF0CrequestAnimationFrame \u5C5E\u4E8E GUI \u5F15\u64CE\u3002 JS \u5F15\u64CE\u4E0E GUI \u5F15\u64CE\u662F\u4E92\u65A5\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4 GUI \u5F15\u64CE\u5728\u6E32\u67D3\u65F6\u4F1A\u963B\u585E JS \u5F15\u64CE\u7684\u8BA1\u7B97\u3002",paraId:71,tocIndex:7},{value:"2\uFF09\u65F6\u95F4\u662F\u5426\u51C6\u786E",paraId:72,tocIndex:7},{value:"requestAnimationFrame \u5237\u65B0\u9891\u7387\u662F\u56FA\u5B9A\u4E14\u51C6\u786E\u7684\uFF0C\u4F46 setTimeout/setInterval \u662F\u5B8F\u4EFB\u52A1\uFF0C\u6839\u636E\u4E8B\u4EF6\u8F6E\u8BE2\u673A\u5236\uFF0C\u5176\u4ED6\u4EFB\u52A1\u4F1A\u963B\u585E\u6216\u5EF6\u8FDF js \u4EFB\u52A1\u7684\u6267\u884C\uFF0C\u4F1A\u51FA\u73B0\u5B9A\u65F6\u5668\u4E0D\u51C6\u7684\u60C5\u51B5\u3002",paraId:73,tocIndex:7},{value:"3\uFF09\u6027\u80FD\u5C42\u9762",paraId:74,tocIndex:7},{value:"\u5F53\u9875\u9762\u88AB\u9690\u85CF\u6216\u6700\u5C0F\u5316\u65F6\uFF0CsetTimeout/setInterval \u5B9A\u65F6\u5668\u4ECD\u4F1A\u5728\u540E\u53F0\u6267\u884C\u52A8\u753B\u4EFB\u52A1\uFF0C\u800C\u4F7F\u7528 requestAnimationFrame \u5F53\u9875\u9762\u5904\u4E8E\u672A\u6FC0\u6D3B\u7684\u72B6\u6001\u4E0B\uFF0C\u5C4F\u5E55\u5237\u65B0\u4EFB\u52A1\u4F1A\u88AB\u7CFB\u7EDF\u6682\u505C\u3002",paraId:75,tocIndex:7},{value:"1\uFF09\u6B63\u5E38\u6A21\u5F0F",paraId:76,tocIndex:8},{value:`<script src="index.js"><\/script>
  `,paraId:77,tocIndex:8},{value:"\u8FD9\u79CD\u60C5\u51B5\u4E0B JS \u4F1A\u963B\u585E dom \u6E32\u67D3\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u7B49\u5F85 index.js \u52A0\u8F7D\u548C\u6267\u884C\u5B8C\u6210\u540E\u624D\u80FD\u53BB\u505A\u5176\u5B83\u4E8B\u60C5\u3002",paraId:78,tocIndex:8},{value:"2\uFF09async \u6A21\u5F0F",paraId:79,tocIndex:8},{value:`<script async src="index.js"><\/script>
  `,paraId:80,tocIndex:8},{value:"async \u6A21\u5F0F\u4E0B\uFF0C\u5B83\u7684\u52A0\u8F7D\u662F\u5F02\u6B65\u7684\uFF0CJS \u4E0D\u4F1A\u963B\u585E DOM \u7684\u6E32\u67D3\uFF0Casync \u52A0\u8F7D\u662F\u65E0\u987A\u5E8F\u7684\uFF0C\u5F53\u5B83\u52A0\u8F7D\u7ED3\u675F\uFF0CJS \u4F1A\u7ACB\u5373\u6267\u884C\u3002",paraId:81,tocIndex:8},{value:"\u4F7F\u7528\u573A\u666F\uFF1A\u82E5\u8BE5 JS \u8D44\u6E90\u4E0E DOM \u5143\u7D20\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E5F\u4E0D\u4F1A\u4EA7\u751F\u5176\u4ED6\u8D44\u6E90\u6240\u9700\u8981\u7684\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 async \u6A21\u5F0F\uFF0C\u6BD4\u5982\u57CB\u70B9\u7EDF\u8BA1\u3002",paraId:82,tocIndex:8},{value:"3\uFF09defer \u6A21\u5F0F",paraId:83,tocIndex:8},{value:`<script defer src="index.js"><\/script>
  `,paraId:84,tocIndex:8},{value:"defer \u6A21\u5F0F\u4E0B\uFF0CJS \u7684\u52A0\u8F7D\u4E5F\u662F\u5F02\u6B65\u7684\uFF0Cdefer \u8D44\u6E90\u4F1A\u5728 \xA0",paraId:85,tocIndex:8},{value:"DOMContentLoaded",paraId:85,tocIndex:8},{value:"\xA0 \u6267\u884C\u4E4B\u524D\uFF0C\u5E76\u4E14 defer \u662F\u6709\u987A\u5E8F\u7684\u52A0\u8F7D\u3002",paraId:85,tocIndex:8},{value:"\u5982\u679C\u6709\u591A\u4E2A\u8BBE\u7F6E\u4E86 defer \u7684 script \u6807\u7B7E\u5B58\u5728\uFF0C\u5219\u4F1A\u6309\u7167\u5F15\u5165\u7684\u524D\u540E\u987A\u5E8F\u6267\u884C\uFF0C\u5373\u4FBF\u662F\u540E\u9762\u7684 script \u8D44\u6E90\u5148\u8FD4\u56DE\u3002",paraId:86,tocIndex:8},{value:"\u6240\u4EE5 defer \u53EF\u4EE5\u7528\u6765\u63A7\u5236 JS \u6587\u4EF6\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u6BD4\u5982 element-ui.js \u548C vue.js\uFF0C\u56E0\u4E3A element-ui.js \u4F9D\u8D56\u4E8E vue\uFF0C\u6240\u4EE5\u5FC5\u987B\u5148\u5F15\u5165 vue.js\uFF0C\u518D\u5F15\u5165 element-ui.js\u3002",paraId:87,tocIndex:8},{value:`<script defer src="vue.js"><\/script>
  <script defer src="element-ui.js"><\/script>
  `,paraId:88,tocIndex:8},{value:"defer \u4F7F\u7528\u573A\u666F\uFF1A\u4E00\u822C\u60C5\u51B5\u4E0B\u90FD\u53EF\u4EE5\u4F7F\u7528 defer\uFF0C\u7279\u522B\u662F\u9700\u8981\u63A7\u5236\u8D44\u6E90\u52A0\u8F7D\u987A\u5E8F\u65F6\u3002",paraId:89,tocIndex:8},{value:"4\uFF09module \u6A21\u5F0F",paraId:90,tocIndex:8},{value:`<script type="module">import {a} from './a.js'<\/script>
  `,paraId:91,tocIndex:8},{value:"\u5728\u4E3B\u6D41\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\uFF0Cscript \u6807\u7B7E\u7684\u5C5E\u6027\u53EF\u4EE5\u52A0\u4E0A \xA0",paraId:92,tocIndex:8},{value:'type="module"',paraId:92,tocIndex:8},{value:"\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5BF9\u5176\u5185\u90E8\u7684 import \u5F15\u7528\u53D1\u8D77 HTTP \u8BF7\u6C42\uFF0C\u83B7\u53D6\u6A21\u5757\u5185\u5BB9\u3002\u8FD9\u65F6 script \u7684\u884C\u4E3A\u4F1A\u50CF\u662F \xA0defer \u4E00\u6837\uFF0C\u5728\u540E\u53F0\u4E0B\u8F7D\uFF0C\u5E76\u4E14\u7B49\u5F85 DOM \u89E3\u6790\u3002",paraId:92,tocIndex:8},{value:"Vite \u5C31\u662F\u5229\u7528\u6D4F\u89C8\u5668\u652F\u6301\u539F\u751F\u7684 ",paraId:93,tocIndex:8},{value:"es module",paraId:93,tocIndex:8},{value:" \u6A21\u5757\uFF0C\u5F00\u53D1\u65F6\u8DF3\u8FC7\u6253\u5305\u7684\u8FC7\u7A0B\uFF0C\u63D0\u5347\u7F16\u8BD1\u6548\u7387\u3002",paraId:93,tocIndex:8},{value:"5\uFF09 preload",paraId:94,tocIndex:8},{value:`<link rel="preload" as="script" href="index.js">
  `,paraId:95,tocIndex:8},{value:"link \u6807\u7B7E\u7684 preload \u5C5E\u6027\uFF1A\u7528\u4E8E\u63D0\u524D\u52A0\u8F7D\u4E00\u4E9B\u9700\u8981\u7684\u4F9D\u8D56\u3002",paraId:96,tocIndex:8},{value:"vue2 \u9879\u76EE\u6253\u5305\u751F\u6210\u7684 index.html \u6587\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u7ED9\u9996\u9875\u6240\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u5168\u90E8\u6DFB\u52A0 preload\uFF0C\u5B9E\u73B0\u5173\u952E\u8D44\u6E90\u7684\u63D0\u524D\u52A0\u8F7D\u3002",paraId:97,tocIndex:8},{value:"preload \u7279\u70B9\uFF1A",paraId:98,tocIndex:8},{value:"1\uFF09preload \u52A0\u8F7D\u7684\u8D44\u6E90\u662F\u5728\u6D4F\u89C8\u5668\u6E32\u67D3\u673A\u5236\u4E4B\u524D\u8FDB\u884C\u5904\u7406\u7684\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u963B\u585E onload \u4E8B\u4EF6\uFF1B",paraId:99,tocIndex:8},{value:"2\uFF09preload \u52A0\u8F7D\u7684 JS \u811A\u672C\u5176\u52A0\u8F7D\u548C\u6267\u884C\u7684\u8FC7\u7A0B\u662F\u5206\u79BB\u7684\uFF0C\u5373 preload \u4F1A\u9884\u52A0\u8F7D\u76F8\u5E94\u7684\u811A\u672C\u4EE3\u7801\uFF0C\u5F85\u5230\u9700\u8981\u65F6\u81EA\u884C\u8C03\u7528\uFF1B",paraId:100,tocIndex:8},{value:"6\uFF09prefetch",paraId:101,tocIndex:8},{value:`<link rel="prefetch" as="script" href="index.js">
  `,paraId:102,tocIndex:8},{value:"prefetch \u662F\u5229\u7528\u6D4F\u89C8\u5668\u7684\u7A7A\u95F2\u65F6\u95F4\uFF0C\u52A0\u8F7D\u9875\u9762\u5C06\u6765\u53EF\u80FD\u7528\u5230\u7684\u8D44\u6E90\u7684\u4E00\u79CD\u673A\u5236\uFF1B\u901A\u5E38\u53EF\u4EE5\u7528\u4E8E\u52A0\u8F7D\u5176\u4ED6\u9875\u9762\uFF08\u975E\u9996\u9875\uFF09\u6240\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u4EE5\u4FBF\u52A0\u5FEB\u540E\u7EED\u9875\u9762\u7684\u6253\u5F00\u901F\u5EA6\u3002",paraId:103,tocIndex:8},{value:"prefetch \u7279\u70B9\uFF1A",paraId:104,tocIndex:8},{value:"1\uFF09pretch \u52A0\u8F7D\u7684\u8D44\u6E90\u53EF\u4EE5\u83B7\u53D6\u975E\u5F53\u524D\u9875\u9762\u6240\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u5E76\u4E14\u5C06\u5176\u653E\u5165\u7F13\u5B58\u81F3\u5C11 5 \u5206\u949F\uFF08\u65E0\u8BBA\u8D44\u6E90\u662F\u5426\u53EF\u4EE5\u7F13\u5B58\uFF09\u3002",paraId:105,tocIndex:8},{value:"2\uFF09\u5F53\u9875\u9762\u8DF3\u8F6C\u65F6\uFF0C\u672A\u5B8C\u6210\u7684 prefetch \u8BF7\u6C42\u4E0D\u4F1A\u88AB\u4E2D\u65AD\u3002",paraId:106,tocIndex:8},{value:"\u52A0\u8F7D\u65B9\u5F0F\u603B\u7ED3",paraId:107,tocIndex:8},{value:"async\u3001defer \u662F \xA0script \u6807\u7B7E\u7684\u4E13\u5C5E\u5C5E\u6027\uFF0C\u5BF9\u4E8E\u7F51\u9875\u4E2D\u7684\u5176\u4ED6\u8D44\u6E90\uFF0C\u53EF\u4EE5\u901A\u8FC7 \xA0link\xA0 \u7684 preload\u3001prefetch\xA0 \u5C5E\u6027\u6765\u9884\u52A0\u8F7D\u3002",paraId:108,tocIndex:8},{value:"\u5982\u4ECA\u73B0\u4EE3\u6846\u67B6\u5DF2\u7ECF\u5C06 preload\u3001prefetch \u6DFB\u52A0\u5230\u6253\u5305\u6D41\u7A0B\u4E2D\u4E86\uFF0C\u901A\u8FC7\u7075\u6D3B\u7684\u914D\u7F6E\uFF0C\u53BB\u4F7F\u7528\u8FD9\u4E9B\u9884\u52A0\u8F7D\u529F\u80FD\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5BA1\u65F6\u5EA6\u52BF\u5730\u5411 script \u6807\u7B7E\u6DFB\u52A0 async\u3001defer \u5C5E\u6027\u53BB\u5904\u7406\u8D44\u6E90\uFF0C\u8FD9\u6837\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u6027\u80FD\u3002",paraId:109,tocIndex:8},{value:"\u5E73\u5E38\u5927\u90E8\u5206\u6027\u80FD\u4F18\u5316\u5DE5\u4F5C\u90FD\u96C6\u4E2D\u5728 JS \u65B9\u9762\uFF0C\u4F46\u56FE\u7247\u4E5F\u662F\u9875\u9762\u4E0A\u975E\u5E38\u91CD\u8981\u7684\u90E8\u5206\u3002",paraId:110,tocIndex:9},{value:"\u7279\u522B\u662F\u5BF9\u4E8E\u79FB\u52A8\u7AEF\u6765\u8BF4\uFF0C\u5B8C\u5168\u6CA1\u6709\u5FC5\u8981\u53BB\u52A0\u8F7D\u539F\u56FE\uFF0C\u6D6A\u8D39\u5E26\u5BBD\u3002\u5982\u4F55\u53BB\u538B\u7F29\u56FE\u7247\uFF0C\u8BA9\u56FE\u7247\u66F4\u5FEB\u7684\u5C55\u793A\u51FA\u6765\uFF0C\u6709\u5F88\u591A\u4F18\u5316\u5DE5\u4F5C\u53EF\u4EE5\u505A\u3002",paraId:111,tocIndex:9},{value:"\u56FE\u7247\u7684\u52A8\u6001\u88C1\u526A\u5F88\u591A\u4E91\u670D\u52A1\uFF0C\u6BD4\u5982 ",paraId:112,tocIndex:9},{value:"\u963F\u91CC\u4E91",paraId:112,tocIndex:9},{value:" \u6216 ",paraId:112,tocIndex:9},{value:"\u4E03\u725B\u4E91",paraId:112,tocIndex:9},{value:"\uFF0C\u90FD\u63D0\u4F9B\u4E86\u56FE\u7247\u7684\u52A8\u6001\u88C1\u526A\u529F\u80FD\uFF0C\u6548\u679C\u5F88\u68D2\uFF0C\u786E\u5B9E\u662F\u94B1\u6CA1\u6709\u767D\u82B1\u53EA\u9700\u5728\u56FE\u7247\u7684 url \u5730\u5740\u4E0A\u52A8\u6001\u6DFB\u52A0\u53C2\u6570\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u4F60\u6240\u9700\u8981\u7684\u5C3A\u5BF8\u5927\u5C0F\uFF0C\u6BD4\u5982\uFF1A",paraId:112,tocIndex:9},{value:"http://7xkv1q.com1.z0.glb.clouddn.com/grape.jpg?imageView2/1/w/200/h/200",paraId:112,tocIndex:9},{value:"\u7ECF\u8FC7\u52A8\u6001\u88C1\u526A\u540E\u7684\u56FE\u7247\uFF0C\u52A0\u8F7D\u901F\u5EA6\u4F1A\u6709\u975E\u5E38\u660E\u663E\u7684\u63D0\u5347\u3002",paraId:113,tocIndex:9},{value:"\u56FE\u7247\u7684\u61D2\u52A0\u8F7D",paraId:114,tocIndex:9},{value:"\u5BF9\u4E8E\u4E00\u4E9B\u56FE\u7247\u91CF\u6BD4\u8F83\u5927\u7684\u9996\u9875\uFF0C\u7528\u6237\u6253\u5F00\u9875\u9762\u540E\uFF0C\u53EA\u9700\u8981\u5448\u73B0\u51FA\u5728\u5C4F\u5E55\u53EF\u89C6\u533A\u57DF\u5185\u7684\u56FE\u7247\uFF0C\u5F53\u7528\u6237\u6ED1\u52A8\u9875\u9762\u65F6\uFF0C\u518D\u53BB\u52A0\u8F7D\u51FA\u73B0\u5728\u5C4F\u5E55\u5185\u7684\u56FE\u7247\uFF0C\u4EE5\u4F18\u5316\u56FE\u7247\u7684\u52A0\u8F7D\u6548\u679C\u3002",paraId:115,tocIndex:9},{value:"\u56FE\u7247\u61D2\u52A0\u8F7D\u5B9E\u73B0\u539F\u7406\uFF1A",paraId:116,tocIndex:9},{value:"\u7531\u4E8E\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5BF9\u9875\u9762\u4E2D\u7684 img \u6807\u7B7E\u7684 src \u5C5E\u6027\u53D1\u9001\u8BF7\u6C42\u5E76\u4E0B\u8F7D\u56FE\u7247\uFF0C\u53EF\u4EE5\u901A\u8FC7 html5 \u81EA\u5B9A\u4E49\u5C5E\u6027 data-xxx \u5148\u6682\u5B58 src \u7684\u503C\uFF0C\u7136\u540E\u5728\u56FE\u7247\u51FA\u73B0\u5728\u5C4F\u5E55\u53EF\u89C6\u533A\u57DF\u7684\u65F6\u5019\uFF0C\u518D\u5C06 data-xxx \u7684\u503C\u91CD\u65B0\u8D4B\u503C\u5230 img \u7684 src \u5C5E\u6027\u5373\u53EF\u3002",paraId:117,tocIndex:9},{value:`<img src="" alt="" data-src="./images/1.jpg">
  <img src="" alt="" data-src="./images/2.jpg">
  `,paraId:118,tocIndex:9},{value:"\u8FD9\u91CC\u4EE5 ",paraId:119,tocIndex:9},{value:"vue-lazyload",paraId:119,tocIndex:9},{value:" \u63D2\u4EF6\u4E3A\u4F8B\uFF1A",paraId:119,tocIndex:9},{value:`// \u5B89\u88C5
  npm install vue-lazyload

  // main.js \u6CE8\u518C
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)
  // \u914D\u7F6E\u9879
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png', // \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u5360\u4F4D\u56FE
    loading: 'dist/loading.gif', // \u56FE\u7247\u52A0\u8F7D\u4E2D\u65F6\u7684\u5360\u4F4D\u56FE
    attempt: 1
  })

  // \u901A\u8FC7 v-lazy \u6307\u4EE4\u4F7F\u7528
  <ul>
      <li v-for="img in list">
          <img v-lazy="img.src" :key="img.src" >
      </li>
  </ul>
  `,paraId:120,tocIndex:9},{value:"\u4F7F\u7528\u5B57\u4F53\u56FE\u6807",paraId:121,tocIndex:9},{value:"\u5B57\u4F53\u56FE\u6807\u662F\u9875\u9762\u4F7F\u7528\u5C0F\u56FE\u6807\u7684\u4E0D\u4E8C\u9009\u62E9\uFF0C\u6700\u5E38\u7528\u7684\u5C31\u662F ",paraId:122,tocIndex:9},{value:"iconfont",paraId:122,tocIndex:9},{value:"\u5B57\u4F53\u56FE\u6807\u7684\u4F18\u70B9\uFF1A",paraId:123,tocIndex:9},{value:"1\uFF09\u8F7B\u91CF\u7EA7\uFF1A\u4E00\u4E2A\u56FE\u6807\u5B57\u4F53\u8981\u6BD4\u4E00\u7CFB\u5217\u7684\u56FE\u50CF\u8981\u5C0F\u3002\u4E00\u65E6\u5B57\u4F53\u52A0\u8F7D\u4E86\uFF0C\u56FE\u6807\u5C31\u4F1A\u9A6C\u4E0A\u6E32\u67D3\u51FA\u6765\uFF0C\u51CF\u5C11\u4E86 http \u8BF7\u6C42\u3002",paraId:124,tocIndex:9},{value:"2\uFF09\u7075\u6D3B\u6027\uFF1A\u53EF\u4EE5\u968F\u610F\u7684\u6539\u53D8\u989C\u8272\u3001\u4EA7\u751F\u9634\u5F71\u3001\u900F\u660E\u6548\u679C\u3001\u65CB\u8F6C\u7B49\u3002",paraId:125,tocIndex:9},{value:"3\uFF09\u517C\u5BB9\u6027\uFF1A\u51E0\u4E4E\u652F\u6301\u6240\u6709\u7684\u6D4F\u89C8\u5668\uFF0C\u8BF7\u653E\u5FC3\u4F7F\u7528\u3002",paraId:126,tocIndex:9},{value:"\u56FE\u7247\u8F6C base64 \u683C\u5F0F",paraId:127,tocIndex:9},{value:"\u5C06\u5C0F\u56FE\u7247\u8F6C\u6362\u4E3A base64 \u7F16\u7801\u5B57\u7B26\u4E32\uFF0C\u5E76\u5199\u5165 HTML \u6216\u8005 CSS \u4E2D\uFF0C\u51CF\u5C11 http \u8BF7\u6C42\u3002",paraId:128,tocIndex:9},{value:"\u8F6C base64 \u683C\u5F0F\u7684\u4F18\u7F3A\u70B9\uFF1A",paraId:129,tocIndex:9},{value:"1\uFF09\u5B83\u5904\u7406\u7684\u5F80\u5F80\u662F\u975E\u5E38\u5C0F\u7684\u56FE\u7247\uFF0C\u56E0\u4E3A Base64 \u7F16\u7801\u540E\uFF0C\u56FE\u7247\u5927\u5C0F\u4F1A\u81A8\u80C0\u4E3A\u539F\u6587\u4EF6\u7684 4/3\uFF0C\u5982\u679C\u5BF9\u5927\u56FE\u4E5F\u4F7F\u7528 Base64 \u7F16\u7801\uFF0C\u540E\u8005\u7684\u4F53\u79EF\u4F1A\u660E\u663E\u589E\u52A0\uFF0C\u5373\u4FBF\u51CF\u5C11\u4E86 http \u8BF7\u6C42\uFF0C\u4E5F\u65E0\u6CD5\u5F25\u8865\u8FD9\u5E9E\u5927\u7684\u4F53\u79EF\u5E26\u6765\u7684\u6027\u80FD\u5F00\u9500\uFF0C\u5F97\u4E0D\u507F\u5931\u3002",paraId:130,tocIndex:9},{value:"2\uFF09\u5728\u4F20\u8F93\u975E\u5E38\u5C0F\u7684\u56FE\u7247\u7684\u65F6\u5019\uFF0CBase64 \u5E26\u6765\u7684\u6587\u4EF6\u4F53\u79EF\u81A8\u80C0\u3001\u4EE5\u53CA\u6D4F\u89C8\u5668\u89E3\u6790 Base64 \u7684\u65F6\u95F4\u5F00\u9500\uFF0C\u4E0E\u5B83\u8282\u7701\u6389\u7684 http \u8BF7\u6C42\u5F00\u9500\u76F8\u6BD4\uFF0C\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1\uFF0C\u8FD9\u65F6\u5019\u624D\u80FD\u771F\u6B63\u4F53\u73B0\u51FA\u5B83\u5728\u6027\u80FD\u65B9\u9762\u7684\u4F18\u52BF\u3002",paraId:131,tocIndex:9},{value:"\u9879\u76EE\u53EF\u4EE5\u4F7F\u7528 ",paraId:132,tocIndex:9},{value:"url-loader",paraId:132,tocIndex:9},{value:" \u5C06\u56FE\u7247\u8F6C base64\uFF1A",paraId:132,tocIndex:9},{value:`// \u5B89\u88C5
  npm\xA0install\xA0url-loader\xA0--save-dev

  // \u914D\u7F6E
  module.exports\xA0=\xA0{
  \xA0\xA0module:\xA0{
  \xA0\xA0\xA0\xA0rules:\xA0[{
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0test:\xA0/.(png|jpg|gif)$/i,
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0use:\xA0[{
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0loader:\xA0'url-loader',
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0options:\xA0{
                // \u5C0F\u4E8E 10kb \u7684\u56FE\u7247\u8F6C\u5316\u4E3A base64
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0limit:\xA01024 * 10
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}
  \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}]
  \xA0\xA0\xA0\xA0\xA0}]
  \xA0\xA0}
  };
  `,paraId:133,tocIndex:9},{value:"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u7684\u662F \u4EE3\u7801\u5C42\u9762 \u7684\u6027\u80FD\u4F18\u5316\uFF0C\u7ECF\u8FC7\u4E0A\u9762\u7684\u4E00\u7CFB\u5217\u4F18\u5316\uFF0C\u9996\u9875\u6253\u5F00\u901F\u5EA6\u6709\u4E86\u660E\u663E\u7684\u63D0\u5347\uFF0C\u867D\u7136\u90FD\u662F\u4E00\u4E9B\u5E38\u89C4\u65B9\u6848\uFF0C\u4F46\u5176\u4E2D\u53EF\u4EE5\u6DF1\u6316\u7684\u77E5\u8BC6\u70B9\u5E76\u4E0D\u5C11\u3002",paraId:134,tocIndex:10},{value:"\u8DEF\u7531\u61D2\u52A0\u8F7D\u539F\u7406\u53CA\u4F7F\u7528",paraId:135,tocIndex:11},{value:"vue-skeleton-webpack-plugin \u9AA8\u67B6\u5C4F\u63D2\u4EF6\u4F7F\u7528",paraId:136,tocIndex:11},{value:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316-\u865A\u62DF\u6EDA\u52A8",paraId:137,tocIndex:11},{value:"requestAnimationFrame \u5236\u4F5C\u52A8\u753B",paraId:138,tocIndex:11},{value:"\u6D45\u8C08 script \u6807\u7B7E\u4E2D\u7684 async \u548C defer ",paraId:139,tocIndex:11},{value:"Tree-Shaking \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5 - \u539F\u7406\u7BC7",paraId:140,tocIndex:11},{value:"\u4F7F\u7528 Preload&Prefetch \u4F18\u5316\u524D\u7AEF\u9875\u9762\u7684\u8D44\u6E90\u52A0\u8F7D",paraId:141,tocIndex:11},{value:"\u6CE8",paraId:142,tocIndex:11},{value:" \u672C\u6587\u6765\u81EA",paraId:142,tocIndex:11},{value:"\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u2014\u2014\u9996\u9875\u8D44\u6E90\u538B\u7F29 63%\u3001\u767D\u5C4F\u65F6\u95F4\u7F29\u77ED 86%",paraId:142,tocIndex:11},{value:"\uFF0C\u5982\u6709\u4FB5\u6743\uFF0C\u8054\u7CFB\u6211\u5220\u9664\uFF01",paraId:142,tocIndex:11}],he={},ha={title:"JS\u57FA\u7840",toc:"menu",filename:"docs/column/js/index.md",order:5,nav:{title:"\u4E13\u680F",order:3},description:"\u5305\u62EC\u503C\u7C7B\u578B(\u57FA\u672C\u5BF9\u8C61\u7C7B\u578B)\u548C\u5F15\u7528\u7C7B\u578B(\u590D\u6742\u5BF9\u8C61\u7C7B\u578B)"},de=[{id:"js-\u4E2D\u7684-8-\u79CD\u6570\u636E\u7C7B\u578B\u53CA\u533A\u522B",depth:2,title:"JS \u4E2D\u7684 8 \u79CD\u6570\u636E\u7C7B\u578B\u53CA\u533A\u522B"},{id:"js-\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u65B9\u6848",depth:2,title:"JS \u4E2D\u7684\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u65B9\u6848"},{id:"1typeof",depth:3,title:"1.typeof"},{id:"2instanceof",depth:3,title:"2.instanceof"},{id:"3objectprototypetostringcall",depth:3,title:"3.Object.prototype.toString.call()"},{id:"instanceof-\u7684\u4F5C\u7528",depth:3,title:"instanceof \u7684\u4F5C\u7528"},{id:"instanceof-\u548C-typeof-\u7684\u533A\u522B",depth:3,title:"instanceof \u548C typeof \u7684\u533A\u522B\uFF1A"},{id:"var--let--const",depth:2,title:"var && let && const"},{id:"\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE",depth:2,title:"\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE"},{id:"\u95ED\u5305\u7684\u4E24\u5927\u4F5C\u7528\u4FDD\u5B58\u4FDD\u62A4",depth:2,title:"\u95ED\u5305\u7684\u4E24\u5927\u4F5C\u7528\uFF1A\u4FDD\u5B58/\u4FDD\u62A4"},{id:"js-\u4E2D-this-\u7684\u60C5\u51B5",depth:2,title:"JS \u4E2D this \u7684\u60C5\u51B5"},{id:"callapplybind-\u7684\u533A\u522B",depth:2,title:"call/apply/bind \u7684\u533A\u522B"},{id:"\u7BAD\u5934\u51FD\u6570\u7684\u7279\u6027",depth:2,title:"\u7BAD\u5934\u51FD\u6570\u7684\u7279\u6027"},{id:"\u539F\u578B--\u539F\u578B\u94FE",depth:2,title:"\u539F\u578B && \u539F\u578B\u94FE"},{id:"new-\u8FD0\u7B97\u7B26\u7684\u5B9E\u73B0\u673A\u5236",depth:2,title:"new \u8FD0\u7B97\u7B26\u7684\u5B9E\u73B0\u673A\u5236"},{id:"eventloop-\u4E8B\u4EF6\u5FAA\u73AF",depth:2,title:"EventLoop \u4E8B\u4EF6\u5FAA\u73AF"},{id:"\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u73AFevent-loop",depth:3,title:"\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u73AF\uFF08Event Loop)"},{id:"node-\u73AF\u5883\u4E2D\u7684\u4E8B\u4EF6\u73AFevent-loop",depth:3,title:"Node \u73AF\u5883\u4E2D\u7684\u4E8B\u4EF6\u73AF\uFF08Event Loop)"},{id:"settimeoutpromiseasyncawait-\u7684\u533A\u522B",depth:2,title:"setTimeout\u3001Promise\u3001Async/Await \u7684\u533A\u522B"},{id:"asyncawait-\u5982\u4F55\u901A\u8FC7\u540C\u6B65\u7684\u65B9\u5F0F\u5B9E\u73B0\u5F02\u6B65",depth:2,title:"Async/Await \u5982\u4F55\u901A\u8FC7\u540C\u6B65\u7684\u65B9\u5F0F\u5B9E\u73B0\u5F02\u6B65"},{id:"\u4ECB\u7ECD\u8282\u6D41\u9632\u6296\u539F\u7406\u533A\u522B\u4EE5\u53CA\u5E94\u7528",depth:2,title:"\u4ECB\u7ECD\u8282\u6D41\u9632\u6296\u539F\u7406\u3001\u533A\u522B\u4EE5\u53CA\u5E94\u7528"}],Ce=[{value:"\u5305\u62EC\u503C\u7C7B\u578B(\u57FA\u672C\u5BF9\u8C61\u7C7B\u578B)\u548C\u5F15\u7528\u7C7B\u578B(\u590D\u6742\u5BF9\u8C61\u7C7B\u578B)",paraId:0,tocIndex:0},{value:"\u57FA\u672C\u7C7B\u578B(\u503C\u7C7B\u578B)\uFF1A",paraId:1,tocIndex:0},{value:" Number(\u6570\u5B57),String(\u5B57\u7B26\u4E32),Boolean(\u5E03\u5C14),Symbol(\u7B26\u53F7),null(\u7A7A),undefined(\u672A\u5B9A\u4E49)\u5728\u5185\u5B58\u4E2D\u5360\u636E\u56FA\u5B9A\u5927\u5C0F\uFF0C\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u4E2D",paraId:1,tocIndex:0},{value:"\u5F15\u7528\u7C7B\u578B(\u590D\u6742\u6570\u636E\u7C7B\u578B)\uFF1A",paraId:2,tocIndex:0},{value:" Object(\u5BF9\u8C61)\u3001Function(\u51FD\u6570)\u3002\u5176\u4ED6\u8FD8\u6709 Array(\u6570\u7EC4)\u3001Date(\u65E5\u671F)\u3001RegExp(\u6B63\u5219\u8868\u8FBE\u5F0F)\u3001\u7279\u6B8A\u7684\u57FA\u672C\u5305\u88C5\u7C7B\u578B(String\u3001Number\u3001Boolean) \u4EE5\u53CA\u5355\u4F53\u5185\u7F6E\u5BF9\u8C61(Global\u3001Math)\u7B49 \u5F15\u7528\u7C7B\u578B\u7684\u503C\u662F\u5BF9\u8C61 \u4FDD\u5B58\u5728\u5806\u5185\u5B58\u4E2D\uFF0C\u6808\u5185\u5B58\u5B58\u50A8\u7684\u662F\u5BF9\u8C61\u7684\u53D8\u91CF\u6807\u8BC6\u7B26\u4EE5\u53CA\u5BF9\u8C61\u5728\u5806\u5185\u5B58\u4E2D\u7684\u5B58\u50A8\u5730\u5740\u3002",paraId:2,tocIndex:0},{value:"\u4F7F\u7528\u573A\u666F\uFF1A",paraId:3,tocIndex:0},{value:"Symbol\uFF1A\u4F7F\u7528 Symbol \u6765\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D(key) \u5229\u7528\u8BE5\u7279\u6027\uFF0C\u628A\u4E00\u4E9B\u4E0D\u9700\u8981\u5BF9\u5916\u64CD\u4F5C\u548C\u8BBF\u95EE\u7684\u5C5E\u6027\u4F7F\u7528 Symbol \u6765\u5B9A\u4E49",paraId:4,tocIndex:0},{value:"BigInt\uFF1A\u7531\u4E8E\u5728 Number \u4E0E BigInt \u4E4B\u95F4\u8FDB\u884C\u8F6C\u6362\u4F1A\u635F\u5931\u7CBE\u5EA6\uFF0C\u56E0\u800C\u5EFA\u8BAE\u4EC5\u5728\u503C\u53EF\u80FD\u5927\u4E8E 253 \u65F6\u4F7F\u7528 BigInt \u7C7B\u578B\uFF0C\u5E76\u4E14\u4E0D\u5728\u4E24\u79CD\u7C7B\u578B\u4E4B\u95F4\u8FDB\u884C\u76F8\u4E92\u8F6C\u6362\u3002",paraId:5,tocIndex:0},{value:"\u4F20\u9001\u95E8 \u261E",paraId:6,tocIndex:0},{value:"# JavaScript \u6570\u636E\u7C7B\u578B\u4E4B Symbol\u3001BigInt",paraId:6,tocIndex:0},{value:`console.log(typeof 1); // number
  console.log(typeof true); // boolean
  console.log(typeof 'mc'); // string
  console.log(typeof Symbol); // function
  console.log(typeof function () {}); // function
  console.log(typeof console.log()); // function
  console.log(typeof []); // object
  console.log(typeof {}); // object
  console.log(typeof null); // object
  console.log(typeof undefined); // undefined
  `,paraId:7,tocIndex:2},{value:"\u4F18\u70B9\uFF1A\u80FD\u591F\u5FEB\u901F\u533A\u5206\u57FA\u672C\u6570\u636E\u7C7B\u578B",paraId:8,tocIndex:2},{value:"\u7F3A\u70B9\uFF1A\u4E0D\u80FD\u5C06 Object\u3001Array \u548C Null \u533A\u5206\uFF0C\u90FD\u8FD4\u56DE object",paraId:9,tocIndex:2},{value:`console.log(1 instanceof Number); // false
  console.log(true instanceof Boolean); // false
  console.log('str' instanceof String); // false
  console.log([] instanceof Array); // true
  console.log(function () {} instanceof Function); // true
  console.log({} instanceof Object); // true
  `,paraId:10,tocIndex:3},{value:"\u4F18\u70B9\uFF1A\u80FD\u591F\u533A\u5206 Array\u3001Object \u548C Function\uFF0C\u9002\u5408\u7528\u4E8E\u5224\u65AD\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5BF9\u8C61",paraId:11,tocIndex:3},{value:"\u7F3A\u70B9\uFF1ANumber\uFF0CBoolean\uFF0CString \u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u80FD\u5224\u65AD",paraId:12,tocIndex:3},{value:`var toString = Object.prototype.toString;
  console.log(toString.call(1)); //[object Number]
  console.log(toString.call(true)); //[object Boolean]
  console.log(toString.call('mc')); //[object String]
  console.log(toString.call([])); //[object Array]
  console.log(toString.call({})); //[object Object]
  console.log(toString.call(function () {})); //[object Function]
  console.log(toString.call(undefined)); //[object Undefined]
  console.log(toString.call(null)); //[object Null]
  `,paraId:13,tocIndex:4},{value:"\u4F18\u70B9\uFF1A\u7CBE\u51C6\u5224\u65AD\u6570\u636E\u7C7B\u578B",paraId:14,tocIndex:4},{value:"\u7F3A\u70B9\uFF1A\u5199\u6CD5\u7E41\u7410\u4E0D\u5BB9\u6613\u8BB0\uFF0C\u63A8\u8350\u8FDB\u884C\u5C01\u88C5\u540E\u4F7F\u7528",paraId:15,tocIndex:4},{value:"\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u662F\u5426\u5C5E\u4E8E\u67D0\u6784\u9020\u51FD\u6570\uFF1B",paraId:16,tocIndex:5},{value:"\u8FD8\u53EF\u4EE5\u5728\u7EE7\u627F\u5173\u7CFB\u4E2D\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u5B9E\u4F8B\u662F\u5426\u5C5E\u4E8E\u5B83\u7684\u7236\u7C7B\u578B\u3002",paraId:17,tocIndex:5},{value:"typeof \u5728\u5BF9\u503C\u7C7B\u578B number\u3001string\u3001boolean \u3001null \u3001 undefined\u3001 \u4EE5\u53CA\u5F15\u7528\u7C7B\u578B\u7684 function \u7684\u53CD\u5E94\u662F\u7CBE\u51C6\u7684\uFF1B\u4F46\u662F\uFF0C\u5BF9\u4E8E\u5BF9\u8C61{ } \u3001\u6570\u7EC4[ ] \u3001null \u90FD\u4F1A\u8FD4\u56DE object",paraId:18,tocIndex:6},{value:"\u4E3A\u4E86\u5F25\u8865\u8FD9\u4E00\u70B9\uFF0Cinstanceof \u4ECE\u539F\u578B\u7684\u89D2\u5EA6\uFF0C\u6765\u5224\u65AD\u67D0\u5F15\u7528\u5C5E\u4E8E\u54EA\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u4ECE\u800C\u5224\u5B9A\u5B83\u7684\u6570\u636E\u7C7B\u578B\u3002",paraId:19,tocIndex:6},{value:"ES6 \u4E4B\u524D\u521B\u5EFA\u53D8\u91CF\u7528\u7684\u662F var,\u4E4B\u540E\u521B\u5EFA\u53D8\u91CF\u7528\u7684\u662F let/const",paraId:20,tocIndex:7},{value:"\u4E09\u8005\u533A\u522B",paraId:21,tocIndex:7},{value:"\uFF1A",paraId:21,tocIndex:7},{value:"var \u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C",paraId:22,tocIndex:7},{value:"\u6CA1\u6709\u5757\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u8DE8\u5757\u8BBF\u95EE",paraId:22,tocIndex:7},{value:", \u4E0D\u80FD\u8DE8\u51FD\u6570\u8BBF\u95EE\u3002",paraId:22,tocIndex:7},{value:`
  let \u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u53EA\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u91CC\u8BBF\u95EE\uFF0C\u4E0D\u80FD\u8DE8\u5757\u8BBF\u95EE\uFF0C\u4E5F\u4E0D\u80FD\u8DE8\u51FD\u6570\u8BBF\u95EE\u3002`,paraId:22,tocIndex:7},{value:`
  const \u7528\u6765\u5B9A\u4E49\u5E38\u91CF\uFF0C\u4F7F\u7528\u65F6\u5FC5\u987B\u521D\u59CB\u5316(\u5373\u5FC5\u987B\u8D4B\u503C)\uFF0C\u53EA\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u91CC\u8BBF\u95EE\uFF0C\u4E14\u4E0D\u80FD\u4FEE\u6539\u3002`,paraId:22,tocIndex:7},{value:"var \u53EF\u4EE5",paraId:22,tocIndex:7},{value:"\u5148\u4F7F\u7528\uFF0C\u540E\u58F0\u660E",paraId:22,tocIndex:7},{value:"\uFF0C\u56E0\u4E3A\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF1Blet \u5FC5\u987B\u5148\u58F0\u660E\u540E\u4F7F\u7528\u3002",paraId:22,tocIndex:7},{value:"var \u662F\u5141\u8BB8\u5728\u76F8\u540C\u4F5C\u7528\u57DF\u5185",paraId:22,tocIndex:7},{value:"\u91CD\u590D\u58F0\u660E\u540C\u4E00\u4E2A\u53D8\u91CF",paraId:22,tocIndex:7},{value:"\u7684\uFF0C\u800C let \u4E0E const \u4E0D\u5141\u8BB8\u8FD9\u4E00\u73B0\u8C61\u3002",paraId:22,tocIndex:7},{value:"\u5728\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u57FA\u4E8E let \u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\u548C\u5168\u5C40\u5BF9\u8C61 GO\uFF08window\uFF09\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB ;",paraId:22,tocIndex:7},{value:`
  var \u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u548C GO \u6709\u6620\u5C04\u5173\u7CFB\uFF1B`,paraId:22,tocIndex:7},{value:"\u4F1A\u4EA7\u751F\u6682\u65F6\u6027\u6B7B\u533A",paraId:22,tocIndex:7},{value:"\uFF1A",paraId:22,tocIndex:7},{value:"\u6682\u65F6\u6027\u6B7B\u533A\u662F\u6D4F\u89C8\u5668\u7684 bug\uFF1A\u68C0\u6D4B\u4E00\u4E2A\u672A\u88AB\u58F0\u660E\u7684\u53D8\u91CF\u7C7B\u578B\u65F6\uFF0C\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F1A\u8FD4\u56DE undefined",paraId:23,tocIndex:7},{value:`
  \u5982\uFF1Aconsole.log(typeof a) //undefined`,paraId:23,tocIndex:7},{value:`
  \u800C\uFF1Aconsole.log(typeof a)//\u672A\u58F0\u660E\u4E4B\u524D\u4E0D\u80FD\u4F7F\u7528`,paraId:23,tocIndex:7},{value:`
  let a`,paraId:23,tocIndex:7},{value:"let /const/function \u4F1A\u628A\u5F53\u524D\u6240\u5728\u7684\u5927\u62EC\u53F7(\u9664\u51FD\u6570\u4E4B\u5916)\u4F5C\u4E3A\u4E00\u4E2A\u5168\u65B0\u7684\u5757\u7EA7\u4E0A\u4E0B\u6587\uFF0C\u5E94\u7528\u8FD9\u4E2A\u673A\u5236\uFF0C\u5728\u5F00\u53D1\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u9047\u5230\u5FAA\u73AF\u4E8B\u4EF6\u7ED1\u5B9A\u7B49\u7C7B\u4F3C\u7684\u9700\u6C42\uFF0C\u65E0\u9700\u518D\u81EA\u5DF1\u6784\u5EFA\u95ED\u5305\u6765\u5B58\u50A8\uFF0C\u53EA\u8981\u57FA\u4E8E let \u7684\u5757\u4F5C\u7528\u7279\u5F81\u5373\u53EF\u89E3\u51B3",paraId:24,tocIndex:7},{value:"\u521B\u5EFA\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5DF2\u7ECF\u58F0\u660E\u4E86\u5F53\u524D\u51FD\u6570\u7684\u4F5C\u7528\u57DF==>",paraId:25,tocIndex:8},{value:"\u5F53\u524D\u521B\u5EFA\u51FD\u6570\u6240\u5904\u7684\u4E0A\u4E0B\u6587",paraId:25,tocIndex:8},{value:"\u3002\u5982\u679C\u662F\u5728\u5168\u5C40\u4E0B\u521B\u5EFA\u7684\u51FD\u6570\u5C31\u662F",paraId:25,tocIndex:8},{value:"[[scope]]:EC(G)",paraId:25,tocIndex:8},{value:"\uFF0C\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5F62\u6210\u4E00\u4E2A\u5168\u65B0\u7684\u79C1\u6709\u4E0A\u4E0B\u6587",paraId:25,tocIndex:8},{value:"EC(FN)",paraId:25,tocIndex:8},{value:"\uFF0C\u4F9B\u5B57\u7B26\u4E32\u4EE3\u7801\u6267\u884C(\u8FDB\u6808\u6267\u884C)",paraId:25,tocIndex:8},{value:"\u5B9A\u4E49\uFF1A\u7B80\u5355\u6765\u8BF4\u4F5C\u7528\u57DF\u5C31\u662F\u53D8\u91CF\u4E0E\u51FD\u6570\u7684\u53EF\u8BBF\u95EE\u8303\u56F4\uFF0C",paraId:26,tocIndex:8},{value:"\u7531\u5F53\u524D\u73AF\u5883\u4E0E\u4E0A\u5C42\u73AF\u5883\u7684\u4E00\u7CFB\u5217\u53D8\u91CF\u5BF9\u8C61\u7EC4\u6210",paraId:26,tocIndex:8},{value:`
  1.\u5168\u5C40\u4F5C\u7528\u57DF\uFF1A\u4EE3\u7801\u5728\u7A0B\u5E8F\u7684\u4EFB\u4F55\u5730\u65B9\u90FD\u80FD\u88AB\u8BBF\u95EE\uFF0Cwindow \u5BF9\u8C61\u7684\u5185\u7F6E\u5C5E\u6027\u90FD\u62E5\u6709\u5168\u5C40\u4F5C\u7528\u57DF\u3002`,paraId:26,tocIndex:8},{value:`
  2.\u51FD\u6570\u4F5C\u7528\u57DF\uFF1A\u5728\u56FA\u5B9A\u7684\u4EE3\u7801\u7247\u6BB5\u624D\u80FD\u88AB\u8BBF\u95EE`,paraId:26,tocIndex:8},{value:"\u4F5C\u7528\uFF1A\u4F5C\u7528\u57DF\u6700\u5927\u7684\u7528\u5904\u5C31\u662F",paraId:27,tocIndex:8},{value:"\u9694\u79BB\u53D8\u91CF",paraId:27,tocIndex:8},{value:"\uFF0C\u4E0D\u540C\u4F5C\u7528\u57DF\u4E0B\u540C\u540D\u53D8\u91CF\u4E0D\u4F1A\u6709\u51B2\u7A81\u3002",paraId:27,tocIndex:8},{value:"\u4F5C\u7528\u57DF\u94FE\u53C2\u8003\u94FE\u63A5",paraId:28,tocIndex:8},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u53D8\u91CF\u5230 \u521B\u5EFA\u8BE5\u53D8\u91CF \u7684\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E2D\u53D6\u503C\u3002\u4F46\u662F\u5982\u679C\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u6CA1\u6709\u67E5\u5230\uFF0C\u5C31\u4F1A\u5411\u4E0A\u7EA7\u4F5C\u7528\u57DF\u53BB\u67E5\uFF0C\u76F4\u5230\u67E5\u5230\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u8FD9\u4E48\u4E00\u4E2A\u67E5\u627E\u8FC7\u7A0B\u5F62\u6210\u7684\u94FE\u6761\u5C31\u53EB\u505A\u4F5C\u7528\u57DF\u94FE\u3002",paraId:28,tocIndex:8},{value:"\u95ED\u5305\u7684\u6982\u5FF5",paraId:29,tocIndex:9},{value:"\u51FD\u6570\u6267\u884C\u65F6\u5F62\u6210\u7684\u79C1\u6709\u4E0A\u4E0B\u6587 EC(FN)\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u7801\u6267\u884C\u5B8C\u4F1A\u51FA\u6808\u540E\u91CA\u653E;\u4F46\u662F\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5F53\u524D\u79C1\u6709\u4E0A\u4E0B\u6587\u4E2D\u7684\u67D0\u4E2A\u4E1C\u897F\u88AB\u4E0A\u4E0B\u6587\u4EE5\u5916\u7684\u4E8B\u7269\u5360\u7528\u4E86\uFF0C\u5219\u4E0A\u4E0B\u6587\u4E0D\u4F1A\u51FA\u6808\u91CA\u653E\uFF0C\u4ECE\u800C\u5F62\u6210\u4E0D\u9500\u6BC1\u7684\u4E0A\u4E0B\u6587\u3002 \u51FD\u6570\u6267\u884C\u51FD\u6570\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5F62\u6210\u4E00\u4E2A\u5168\u65B0\u7684\u79C1\u6709\u4E0A\u4E0B\u6587\uFF0C\u53EF\u80FD\u4F1A\u88AB\u91CA\u653E\uFF0C\u53EF\u80FD\u4E0D\u4F1A\u88AB\u91CA\u653E\uFF0C\u4E0D\u8BBA\u91CA\u653E\u4E0E\u5426\uFF0C\u4ED6\u7684\u4F5C\u7528\u662F\uFF1A",paraId:30,tocIndex:9},{value:"\uFF081\uFF09\u4FDD\u62A4\uFF1A\u5212\u5206\u4E00\u4E2A\u72EC\u7ACB\u7684\u4EE3\u7801\u6267\u884C\u533A\u57DF\uFF0C\u5728\u8FD9\u4E2A\u533A\u57DF\u4E2D\u6709\u81EA\u5DF1\u79C1\u6709\u53D8\u91CF\u5B58\u50A8\u7684\u7A7A\u95F4\uFF0C\u4FDD\u62A4\u81EA\u5DF1\u7684\u79C1\u6709\u53D8\u91CF\u4E0D\u53D7\u5916\u754C\u5E72\u6270\uFF08\u64CD\u4F5C\u81EA\u5DF1\u7684\u79C1\u6709\u53D8\u91CF\u548C\u5916\u754C\u6CA1\u6709\u5173\u7CFB\uFF09\uFF1B",paraId:31,tocIndex:9},{value:"\uFF082\uFF09\u4FDD\u5B58\uFF1A\u5982\u679C\u5F53\u524D\u4E0A\u4E0B\u6587\u4E0D\u88AB\u91CA\u653E\u3010\u53EA\u8981\u4E0A\u4E0B\u6587\u4E2D\u7684\u67D0\u4E2A\u4E1C\u897F\u88AB\u5916\u90E8\u5360\u7528\u5373\u53EF\u3011\uFF0C\u5219\u5B58\u50A8\u7684\u8FD9\u4E9B\u79C1\u6709\u53D8\u91CF\u4E5F\u4E0D\u4F1A\u88AB\u91CA\u653E\uFF0C\u53EF\u4EE5\u4F9B\u5176\u4E0B\u7EA7\u4E0A\u4E0B\u6587\u4E2D\u8C03\u53D6\u4F7F\u7528\uFF0C\u76F8\u5F53\u4E8E\u628A\u4E00\u4E9B\u503C\u4FDD\u5B58\u8D77\u6765\u4E86\uFF1B",paraId:32,tocIndex:9},{value:"\u6211\u4EEC\u628A\u51FD\u6570\u6267\u884C\u5F62\u6210\u79C1\u6709\u4E0A\u4E0B\u6587\uFF0C\u6765\u4FDD\u62A4\u548C\u4FDD\u5B58\u79C1\u6709\u53D8\u91CF\u673A\u5236\u79F0\u4E3A",paraId:33,tocIndex:9},{value:"\u95ED\u5305",paraId:33,tocIndex:9},{value:"\u3002",paraId:33,tocIndex:9},{value:"\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u7684\u51FD\u6570--\u300AJavaScript \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B",paraId:34,tocIndex:9},{value:"\u7A0D\u5168\u9762\u7684\u56DE\u7B54",paraId:35,tocIndex:9},{value:"\uFF1A \u5728 js \u4E2D\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u5C5E\u4E8E\u51FD\u6570\u4F5C\u7528\u57DF, \u5728\u51FD\u6570\u6267\u884C\u5B8C\u540E,\u4F5C\u7528\u57DF\u5C31\u4F1A\u88AB\u6E05\u7406,\u5185\u5B58\u4E5F\u4F1A\u968F\u4E4B\u88AB\u56DE\u6536,\u4F46\u662F\u7531\u4E8E\u95ED\u5305\u51FD\u6570\u662F\u5EFA\u7ACB\u5728\u51FD\u6570\u5185\u90E8\u7684\u5B50\u51FD\u6570, \u7531\u4E8E\u5176\u53EF\u8BBF\u95EE\u4E0A\u7EA7\u4F5C\u7528\u57DF,\u5373\u4F7F\u4E0A\u7EA7\u51FD\u6570\u6267\u884C\u5B8C, \u4F5C\u7528\u57DF\u4E5F\u4E0D\u4F1A\u968F\u4E4B\u9500\u6BC1, \u8FD9\u65F6\u7684\u5B50\u51FD\u6570(\u4E5F\u5C31\u662F\u95ED\u5305),\u4FBF\u62E5\u6709\u4E86\u8BBF\u95EE\u4E0A\u7EA7\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u6743\u9650,\u5373\u4F7F\u4E0A\u7EA7\u51FD\u6570\u6267\u884C\u5B8C\u540E\u4F5C\u7528\u57DF\u5185\u7684\u503C\u4E5F\u4E0D\u4F1A\u88AB\u9500\u6BC1\u3002",paraId:35,tocIndex:9},{value:"\u95ED\u5305\u7684\u7279\u6027",paraId:36,tocIndex:9},{value:"\uFF1A",paraId:36,tocIndex:9},{value:"1\u3001\u5185\u90E8\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u5B9A\u4E49\u4ED6\u4EEC\u5916\u90E8\u51FD\u6570\u7684\u53C2\u6570\u548C\u53D8\u91CF\u3002(\u4F5C\u7528\u57DF\u94FE\u7684\u5411\u4E0A\u67E5\u627E\uFF0C\u628A\u5916\u56F4\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u503C\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u800C\u4E0D\u662F\u5728\u51FD\u6570\u8C03\u7528\u5B8C\u6BD5\u540E\u9500\u6BC1)\u8BBE\u8BA1\u79C1\u6709\u7684\u65B9\u6CD5\u548C\u53D8\u91CF\uFF0C\u907F\u514D\u5168\u5C40\u53D8\u91CF\u7684\u6C61\u67D3\u3002",paraId:37,tocIndex:9},{value:"1.1.\u95ED\u5305\u662F\u5BC6\u95ED\u7684\u5BB9\u5668\uFF0C\uFF0C\u7C7B\u4F3C\u4E8E set\u3001map \u5BB9\u5668\uFF0C\u5B58\u50A8\u6570\u636E\u7684",paraId:38,tocIndex:9},{value:"1.2.\u95ED\u5305\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B58\u653E\u6570\u636E\u7684\u683C\u5F0F\u4E3A key-value \u5F62\u5F0F",paraId:39,tocIndex:9},{value:"2\u3001\u51FD\u6570\u5D4C\u5957\u51FD\u6570",paraId:40,tocIndex:9},{value:"3\u3001\u672C\u8D28\u662F\u5C06\u51FD\u6570\u5185\u90E8\u548C\u5916\u90E8\u8FDE\u63A5\u8D77\u6765\u3002\u4F18\u70B9\u662F\u53EF\u4EE5\u8BFB\u53D6\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\uFF0C\u8BA9\u8FD9\u4E9B\u53D8\u91CF\u7684\u503C\u59CB\u7EC8\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u4E0D\u4F1A\u5728\u51FD\u6570\u88AB\u8C03\u7528\u4E4B\u540E\u81EA\u52A8\u6E05\u9664",paraId:41,tocIndex:9},{value:"\u95ED\u5305\u5F62\u6210\u7684\u6761\u4EF6",paraId:42,tocIndex:9},{value:"\uFF1A",paraId:42,tocIndex:9},{value:"\u51FD\u6570\u7684\u5D4C\u5957",paraId:43,tocIndex:9},{value:"\u5185\u90E8\u51FD\u6570\u5F15\u7528\u5916\u90E8\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u5EF6\u957F\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\u751F\u547D\u5468\u671F",paraId:43,tocIndex:9},{value:"\u95ED\u5305\u7684\u7528\u9014",paraId:44,tocIndex:9},{value:"\uFF1A",paraId:44,tocIndex:9},{value:"\u6A21\u4EFF\u5757\u7EA7\u4F5C\u7528\u57DF",paraId:45,tocIndex:9},{value:"\u4FDD\u62A4\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF \u80FD\u591F\u8BBF\u95EE\u51FD\u6570\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF(\u963B\u6B62\u5176\u88AB\u56DE\u6536)",paraId:45,tocIndex:9},{value:"\u5C01\u88C5\u79C1\u6709\u5316\u53D8\u91CF",paraId:45,tocIndex:9},{value:"\u521B\u5EFA\u6A21\u5757",paraId:45,tocIndex:9},{value:"\u95ED\u5305\u5E94\u7528\u573A\u666F",paraId:46,tocIndex:9},{value:"\u95ED\u5305\u7684\u4E24\u4E2A\u573A\u666F\uFF0C\u95ED\u5305\u7684\u4E24\u5927\u4F5C\u7528\uFF1A",paraId:47,tocIndex:9},{value:"\u4FDD\u5B58/\u4FDD\u62A4",paraId:47,tocIndex:9},{value:"\u3002 \u5728\u5F00\u53D1\u4E2D, \u5176\u5B9E\u6211\u4EEC\u968F\u5904\u53EF\u89C1\u95ED\u5305\u7684\u8EAB\u5F71, \u5927\u90E8\u5206\u524D\u7AEF JavaScript \u4EE3\u7801\u90FD\u662F\u201C\u4E8B\u4EF6\u9A71\u52A8\u201D\u7684,\u5373\u4E00\u4E2A\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u56DE\u8C03\u65B9\u6CD5; \u53D1\u9001 ajax \u8BF7\u6C42\u6210\u529F|\u5931\u8D25\u7684\u56DE\u8C03;setTimeout \u7684\u5EF6\u65F6\u56DE\u8C03;\u6216\u8005\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u8FD4\u56DE\u53E6\u4E00\u4E2A\u533F\u540D\u51FD\u6570,\u8FD9\u4E9B\u90FD\u662F\u95ED\u5305\u7684\u5E94\u7528\u3002",paraId:47,tocIndex:9},{value:"\u95ED\u5305\u7684\u4F18\u70B9",paraId:48,tocIndex:9},{value:"\uFF1A\u5EF6\u957F\u5C40\u90E8\u53D8\u91CF\u7684\u751F\u547D\u5468\u671F",paraId:48,tocIndex:9},{value:"\u95ED\u5305\u7F3A\u70B9",paraId:49,tocIndex:9},{value:"\uFF1A\u4F1A\u5BFC\u81F4\u51FD\u6570\u7684\u53D8\u91CF\u4E00\u76F4\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u8FC7\u591A\u7684\u95ED\u5305\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F",paraId:49,tocIndex:9},{value:"\u666E\u901A\u51FD\u6570\u8C03\u7528\uFF1A\u901A\u8FC7\u51FD\u6570\u540D()\u76F4\u63A5\u8C03\u7528\uFF1A",paraId:50,tocIndex:10},{value:"this",paraId:50,tocIndex:10},{value:"\u6307\u5411",paraId:50,tocIndex:10},{value:"\u5168\u5C40\u5BF9\u8C61window",paraId:50,tocIndex:10},{value:"\uFF08\u6CE8\u610F let \u5B9A\u4E49\u7684\u53D8\u91CF\u4E0D\u662F window \u5C5E\u6027\uFF0C\u53EA\u6709 window.xxx \u5B9A\u4E49\u7684\u624D\u662F\u3002\u5373 let a =\u2019aaa\u2019; this.a \u662F undefined\uFF09",paraId:50,tocIndex:10},{value:"\u6784\u9020\u51FD\u6570\u8C03\u7528\uFF1A\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\uFF0C\u7528 new \u5173\u952E\u5B57\u8C03\u7528\u65F6\uFF1A",paraId:50,tocIndex:10},{value:"this",paraId:50,tocIndex:10},{value:"\u6307\u5411",paraId:50,tocIndex:10},{value:"\u65B0new\u51FA\u7684\u5BF9\u8C61",paraId:50,tocIndex:10},{value:"\u5BF9\u8C61\u51FD\u6570\u8C03\u7528\uFF1A\u901A\u8FC7\u5BF9\u8C61.\u51FD\u6570\u540D()\u8C03\u7528\u7684\uFF1A",paraId:50,tocIndex:10},{value:"this",paraId:50,tocIndex:10},{value:"\u6307\u5411",paraId:50,tocIndex:10},{value:"\u8FD9\u4E2A\u5BF9\u8C61",paraId:50,tocIndex:10},{value:"\u7BAD\u5934\u51FD\u6570\u8C03\u7528\uFF1A\u7BAD\u5934\u51FD\u6570\u91CC\u9762\u6CA1\u6709 this \uFF0C\u6240\u4EE5",paraId:50,tocIndex:10},{value:"\u6C38\u8FDC\u662F\u4E0A\u5C42\u4F5C\u7528\u57DFthis",paraId:50,tocIndex:10},{value:"\uFF08\u4E0A\u4E0B\u6587\uFF09",paraId:50,tocIndex:10},{value:"apply \u548C call \u8C03\u7528\uFF1A\u51FD\u6570\u4F53\u5185 this \u7684\u6307\u5411\u7684\u662F call/apply \u65B9\u6CD5",paraId:50,tocIndex:10},{value:"\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:50,tocIndex:10},{value:"\uFF0C\u82E5\u4E3A\u7A7A\u9ED8\u8BA4\u662F\u6307\u5411\u5168\u5C40\u5BF9\u8C61 window\u3002",paraId:50,tocIndex:10},{value:"\u51FD\u6570\u4F5C\u4E3A\u6570\u7EC4\u7684\u4E00\u4E2A\u5143\u7D20\uFF0C\u901A\u8FC7\u6570\u7EC4\u4E0B\u6807\u8C03\u7528\u7684\uFF1Athis \u6307\u5411\u8FD9\u4E2A\u6570\u7EC4",paraId:50,tocIndex:10},{value:"\u51FD\u6570\u4F5C\u4E3A window \u5185\u7F6E\u51FD\u6570\u7684\u56DE\u8C03\u51FD\u6570\u8C03\u7528\uFF1Athis \u6307\u5411 window\uFF08\u5982 setInterval setTimeout \u7B49\uFF09",paraId:50,tocIndex:10},{value:"\u76F8\u540C\uFF1A",paraId:51,tocIndex:11},{value:"1\u3001\u90FD\u662F\u7528\u6765\u6539\u53D8\u51FD\u6570\u7684 this \u5BF9\u8C61\u7684\u6307\u5411\u7684\u3002",paraId:52,tocIndex:11},{value:`
  2\u3001\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662F this \u8981\u6307\u5411\u7684\u5BF9\u8C61\u3002`,paraId:52,tocIndex:11},{value:`
  3\u3001\u90FD\u53EF\u4EE5\u5229\u7528\u540E\u7EED\u53C2\u6570\u4F20\u53C2\u3002`,paraId:52,tocIndex:11},{value:"\u4E0D\u540C\uFF1A",paraId:53,tocIndex:11},{value:"apply \u548C call \u4F20\u5165\u7684\u53C2\u6570\u5217\u8868\u5F62\u5F0F\u4E0D\u540C\u3002apply \u63A5\u6536 arguments\uFF0Ccall \u63A5\u6536\u4E00\u4E32\u53C2\u6570\u5217\u8868",paraId:54,tocIndex:11},{value:`fn.call(obj, 1, 2);
  fn.apply(obj, [1, 2]);
  `,paraId:55,tocIndex:11},{value:"bind\uFF1A\u8BED\u6CD5\u548C call \u4E00\u6A21\u4E00\u6837\uFF0C\u533A\u522B\u5728\u4E8E\u7ACB\u5373\u6267\u884C\u8FD8\u662F\u7B49\u5F85\u6267\u884C\uFF0Cbind \u4E0D\u517C\u5BB9 IE6~8",paraId:56,tocIndex:11},{value:`
  bind \u4E3B\u8981\u5C31\u662F\u5C06\u51FD\u6570\u7ED1\u5B9A\u5230\u67D0\u4E2A\u5BF9\u8C61\uFF0Cbind()\u4F1A\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u51FD\u6570\u4FBF\u4E8E\u7A0D\u540E\u8C03\u7528\uFF1B\u800C apply\u3001call \u5219\u662F\u7ACB\u5373\u8C03\u7528\u3002`,paraId:56,tocIndex:11},{value:"\u603B\u7ED3\uFF1A\u57FA\u4E8E Function.prototype \u4E0A\u7684 ",paraId:57,tocIndex:11},{value:"apply \u3001 call \u548C bind ",paraId:57,tocIndex:11},{value:"\u8C03\u7528\u6A21\u5F0F\uFF0C\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u90FD\u53EF\u4EE5\u663E\u793A\u7684\u6307\u5B9A\u8C03\u7528\u51FD\u6570\u7684 this \u6307\u5411\u3002",paraId:57,tocIndex:11},{value:"apply",paraId:57,tocIndex:11},{value:"\u63A5\u6536\u53C2\u6570\u7684\u662F\u6570\u7EC4\uFF0C",paraId:57,tocIndex:11},{value:"call",paraId:57,tocIndex:11},{value:"\u63A5\u53D7\u53C2\u6570\u5217\u8868\uFF0C`` bind",paraId:57,tocIndex:11},{value:"\u65B9\u6CD5\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A",paraId:57,tocIndex:11},{value:"this",paraId:57,tocIndex:11},{value:"\u7ED1\u5B9A\u4E86\u4F20\u5165\u5BF9\u8C61\u7684\u65B0\u51FD\u6570\u3002\u8FD9\u4E2A\u51FD\u6570\u7684",paraId:57,tocIndex:11},{value:"this",paraId:57,tocIndex:11},{value:"\u6307\u5411\u9664\u4E86\u4F7F\u7528",paraId:57,tocIndex:11},{value:"new `\u65F6\u4F1A\u88AB\u6539\u53D8\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u90FD\u4E0D\u4F1A\u6539\u53D8\u3002\u82E5\u4E3A\u7A7A\u9ED8\u8BA4\u662F\u6307\u5411\u5168\u5C40\u5BF9\u8C61 window\u3002",paraId:57,tocIndex:11},{value:"\u53C2\u8003\uFF1A\u261E ",paraId:58,tocIndex:11},{value:"call\u3001apply\u3001bind \u4E09\u8005\u7684\u7528\u6CD5\u548C\u533A\u522B",paraId:58,tocIndex:11},{value:"\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684this",paraId:59,tocIndex:12},{value:"\uFF0C\u4F1A\u6355\u83B7\u5176\u6240\u5728\u7684\u4E0A\u4E0B\u6587\u7684 this \u503C\uFF0C\u4F5C\u4E3A\u81EA\u5DF1\u7684 this \u503C",paraId:59,tocIndex:12},{value:"\u7BAD\u5934\u51FD\u6570\u6CA1\u6709constructor",paraId:59,tocIndex:12},{value:"\uFF0C\u662F\u533F\u540D\u51FD\u6570\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u80FD\u901A\u8FC7 new \u8C03\u7528\uFF1B",paraId:59,tocIndex:12},{value:"\u6CA1\u6709new.target \u5C5E\u6027",paraId:59,tocIndex:12},{value:"\u3002\u5728\u901A\u8FC7 new \u8FD0\u7B97\u7B26\u88AB\u521D\u59CB\u5316\u7684\u51FD\u6570\u6216\u6784\u9020\u65B9\u6CD5\u4E2D\uFF0Cnew.target \u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u6784\u9020\u65B9\u6CD5\u6216\u51FD\u6570\u7684\u5F15\u7528\u3002\u5728\u666E\u901A\u7684\u51FD\u6570\u8C03\u7528\u4E2D\uFF0Cnew.target \u7684\u503C\u662F undefined",paraId:59,tocIndex:12},{value:"\u7BAD\u5934\u51FD\u6570\u4E0D\u7ED1\u5B9AArguments \u5BF9\u8C61",paraId:59,tocIndex:12},{value:"\u3002\u53D6\u800C\u4EE3\u4E4B\u7528 rest \u53C2\u6570...\u89E3\u51B3\u3002\u7531\u4E8E \u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this \u6307\u9488\uFF0C\u901A\u8FC7 call() \u6216 apply() \u65B9\u6CD5\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u53EA\u80FD\u4F20\u9012\u53C2\u6570\uFF08\u4E0D\u80FD\u7ED1\u5B9A this\uFF09\uFF0C\u4ED6\u4EEC\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F1A\u88AB\u5FFD\u7565\u3002\uFF08\u8FD9\u79CD\u73B0\u8C61\u5BF9\u4E8E bind \u65B9\u6CD5\u540C\u6837\u6210\u7ACB\uFF09",paraId:59,tocIndex:12},{value:"\u7BAD\u5934\u51FD\u6570\u901A\u8FC7 call() \u6216 apply() \u65B9\u6CD5\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u53EA\u4F20\u5165\u4E86\u4E00\u4E2A\u53C2\u6570\uFF0C\u5BF9 this \u5E76\u6CA1\u6709\u5F71\u54CD\u3002",paraId:59,tocIndex:12},{value:"\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u539F\u578B\u5C5E\u6027 Fn.prototype \u503C\u4E3A undefined",paraId:59,tocIndex:12},{value:"\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u5F53\u505A Generator \u51FD\u6570,\u4E0D\u80FD\u4F7F\u7528 yield \u5173\u952E\u5B57",paraId:59,tocIndex:12},{value:"\u53C2\u8003\uFF1A",paraId:60,tocIndex:12},{value:"\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B",paraId:60,tocIndex:12},{value:"\u539F\u578B\u5173\u7CFB\uFF1A",paraId:61,tocIndex:13},{value:"\u6BCF\u4E2A class \u90FD\u6709\u663E\u793A\u539F\u578B prototype",paraId:62,tocIndex:13},{value:"\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u9690\u5F0F\u539F\u578B ",paraId:62,tocIndex:13},{value:"__proto__",paraId:62,tocIndex:13},{value:"\u5B9E\u4F8B\u7684 ",paraId:62,tocIndex:13},{value:"__proto__",paraId:62,tocIndex:13},{value:" \u6307\u5411\u5BF9\u5E94 class \u7684 prototype",paraId:62,tocIndex:13},{value:"\u200C ",paraId:63,tocIndex:13},{value:"\u539F\u578B:",paraId:63,tocIndex:13},{value:" \xA0 \u5728 JS \u4E2D\uFF0C\u6BCF\u5F53\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61\uFF08\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF09\u65F6\uFF0C\u5BF9\u8C61\u4E2D\u90FD\u4F1A\u5305\u542B\u4E00\u4E9B\u9884\u5B9A\u4E49\u7684\u5C5E\u6027\u3002\u5176\u4E2D\u6BCF\u4E2A",paraId:63,tocIndex:13},{value:"\u51FD\u6570\u5BF9\u8C61",paraId:63,tocIndex:13},{value:"\u90FD\u6709\u4E00\u4E2A",paraId:63,tocIndex:13},{value:"prototype",paraId:63,tocIndex:13},{value:"\xA0 \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u6307\u5411\u51FD\u6570\u7684",paraId:63,tocIndex:13},{value:"\u539F\u578B\u5BF9\u8C61",paraId:63,tocIndex:13},{value:"\u3002",paraId:63,tocIndex:13},{value:"\u539F\u578B\u94FE\uFF1A\u51FD\u6570\u7684\u539F\u578B\u94FE\u5BF9\u8C61 constructor \u9ED8\u8BA4\u6307\u5411\u51FD\u6570\u672C\u8EAB\uFF0C\u539F\u578B\u5BF9\u8C61\u9664\u4E86\u6709\u539F\u578B\u5C5E\u6027\u5916\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u7EE7\u627F\uFF0C\u8FD8\u6709\u4E00\u4E2A\u539F\u578B\u94FE\u6307\u9488",paraId:64,tocIndex:13},{value:"proto",paraId:64,tocIndex:13},{value:",\u8BE5\u6307\u9488\u662F\u6307\u5411\u4E0A\u4E00\u5C42\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u800C\u4E0A\u4E00\u5C42\u7684\u539F\u578B\u5BF9\u8C61\u7684\u7ED3\u6784\u4F9D\u7136\u7C7B\u4F3C\u3002\u56E0\u6B64\u53EF\u4EE5\u5229\u7528",paraId:64,tocIndex:13},{value:"proto",paraId:64,tocIndex:13},{value:"\u4E00\u76F4\u6307\u5411 Object \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\uFF0C\u800C Object \u539F\u578B\u5BF9\u8C61\u7528 Object.prototype.** proto** = null \u8868\u793A\u539F\u578B\u94FE\u9876\u7AEF\u3002\u5982\u6B64\u5F62\u6210\u4E86 js \u7684\u539F\u578B\u94FE\u7EE7\u627F\u3002\u540C\u65F6\u6240\u6709\u7684 js \u5BF9\u8C61\u90FD\u6709 Object \u7684\u57FA\u672C\u9632\u8303",paraId:64,tocIndex:13},{value:"\u7279\u70B9:",paraId:65,tocIndex:13},{value:" \xA0",paraId:65,tocIndex:13},{value:"JavaScript",paraId:65,tocIndex:13},{value:"\u5BF9\u8C61\u662F\u901A\u8FC7\u5F15\u7528\u6765\u4F20\u9012\u7684\uFF0C\u6211\u4EEC\u521B\u5EFA\u7684\u6BCF\u4E2A\u65B0\u5BF9\u8C61\u5B9E\u4F53\u4E2D\u5E76\u6CA1\u6709\u4E00\u4EFD\u5C5E\u4E8E\u81EA\u5DF1\u7684\u539F\u578B\u526F\u672C\u3002\u5F53\u6211\u4EEC\u4FEE\u6539\u539F\u578B\u65F6\uFF0C\u4E0E\u4E4B\u76F8\u5173\u7684\u5BF9\u8C61\u4E5F\u4F1A\u7EE7\u627F\u8FD9\u4E00\u6539\u53D8\u3002",paraId:65,tocIndex:13},{value:"\u9996\u5148\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684",paraId:66,tocIndex:14},{value:"\u7A7A\u5BF9\u8C61",paraId:66,tocIndex:14},{value:"\u8BBE\u7F6E\u539F\u578B",paraId:66,tocIndex:14},{value:"\uFF0C\u5C06\u5BF9\u8C61\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u51FD\u6570\u7684",paraId:66,tocIndex:14},{value:"prototype",paraId:66,tocIndex:14},{value:"\u5BF9\u8C61\u3002",paraId:66,tocIndex:14},{value:"\u8BA9\u51FD\u6570\u7684",paraId:66,tocIndex:14},{value:"this",paraId:66,tocIndex:14},{value:"\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u4EE3\u7801\uFF08\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09",paraId:66,tocIndex:14},{value:"\u5224\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u503C\u7C7B\u578B\uFF0C\u8FD4\u56DE\u521B\u5EFA\u7684\u5BF9\u8C61\u3002\u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61\u3002",paraId:66,tocIndex:14},{value:"JS",paraId:67,tocIndex:15},{value:"\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u65F6\u95F4\u8FC7\u957F\u963B\u585E\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u4F1A\u5148\u5C06\u540C\u6B65\u4EE3\u7801\u538B\u5165\u6267\u884C\u6808\u4E2D\uFF0C\u4F9D\u6B21\u6267\u884C\uFF0C\u5C06\u5F02\u6B65\u4EE3\u7801\u63A8\u5165\u5F02\u6B65\u961F\u5217\uFF0C\u5F02\u6B65\u961F\u5217\u53C8\u5206\u4E3A\u5B8F\u4EFB\u52A1\u961F\u5217\u548C\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u56E0\u4E3A\u5B8F\u4EFB\u52A1\u961F\u5217\u7684\u6267\u884C\u65F6\u95F4\u8F83\u957F\uFF0C\u6240\u4EE5\u5FAE\u4EFB\u52A1\u961F\u5217\u8981\u4F18\u5148\u4E8E\u5B8F\u4EFB\u52A1\u961F\u5217\u3002\u5FAE\u4EFB\u52A1\u961F\u5217\u7684\u4EE3\u8868\u5C31\u662F\uFF0C",paraId:67,tocIndex:15},{value:"Promise.then",paraId:67,tocIndex:15},{value:"\uFF0C",paraId:67,tocIndex:15},{value:"MutationObserver",paraId:67,tocIndex:15},{value:"\uFF0C\u5B8F\u4EFB\u52A1\u7684\u8BDD\u5C31\u662F",paraId:67,tocIndex:15},{value:"setImmediate setTimeout setInterval",paraId:67,tocIndex:15},{value:"JS \u8FD0\u884C\u7684\u73AF\u5883\u3002\u4E00\u822C\u4E3A\u6D4F\u89C8\u5668\u6216\u8005 Node\u3002 \u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF0C\u6709 JS \u5F15\u64CE\u7EBF\u7A0B\u548C\u6E32\u67D3\u7EBF\u7A0B\uFF0C\u4E14\u4E24\u4E2A\u7EBF\u7A0B\u4E92\u65A5\u3002 Node \u73AF\u5883\u4E2D\uFF0C\u53EA\u6709 JS \u7EBF\u7A0B\u3002 \u4E0D\u540C\u73AF\u5883\u6267\u884C\u673A\u5236\u6709\u5DEE\u5F02\uFF0C\u4E0D\u540C\u4EFB\u52A1\u8FDB\u5165\u4E0D\u540C Event Queue \u961F\u5217\u3002 \u5F53\u4E3B\u7A0B\u7ED3\u675F\uFF0C\u5148\u6267\u884C\u51C6\u5907\u597D\u5FAE\u4EFB\u52A1\uFF0C\u7136\u540E\u518D\u6267\u884C\u51C6\u5907\u597D\u7684\u5B8F\u4EFB\u52A1\uFF0C\u4E00\u4E2A\u8F6E\u8BE2\u7ED3\u675F\u3002",paraId:68,tocIndex:15},{value:"\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u73AF\uFF08Event Loop)",paraId:69},{value:"\u4E8B\u4EF6\u73AF\u7684\u8FD0\u884C\u673A\u5236\u662F\uFF0C\u5148\u4F1A\u6267\u884C\u6808\u4E2D\u7684\u5185\u5BB9\uFF0C\u6808\u4E2D\u7684\u5185\u5BB9\u6267\u884C\u540E\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u5FAE\u4EFB\u52A1\u6E05\u7A7A\u540E\u518D\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u5148\u53D6\u51FA\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u518D\u53BB\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u7136\u540E\u5728\u53D6\u5B8F\u4EFB\u52A1\u6E05\u5FAE\u4EFB\u52A1\u8FD9\u6837\u4E0D\u505C\u7684\u5FAA\u73AF\u3002",paraId:70,tocIndex:16},{value:"eventLoop \u662F\u7531 JS \u7684\u5BBF\u4E3B\u73AF\u5883\uFF08\u6D4F\u89C8\u5668\uFF09\u6765\u5B9E\u73B0\u7684\uFF1B",paraId:71,tocIndex:16},{value:"\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u4EE5\u7B80\u5355\u7684\u63CF\u8FF0\u4E3A\u4EE5\u4E0B\u56DB\u4E2A\u6B65\u9AA4:",paraId:72,tocIndex:16},{value:"\u51FD\u6570\u5165\u6808\uFF0C\u5F53 Stack \u4E2D\u6267\u884C\u5230\u5F02\u6B65\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u5C31\u5C06\u4ED6\u4E22\u7ED9 WebAPIs,\u63A5\u7740\u6267\u884C\u540C\u6B65\u4EFB\u52A1,\u76F4\u5230 Stack \u4E3A\u7A7A\uFF1B",paraId:73,tocIndex:16},{value:"\u6B64\u671F\u95F4 WebAPIs \u5B8C\u6210\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u628A\u56DE\u8C03\u51FD\u6570\u653E\u5165\u961F\u5217\u4E2D\u7B49\u5F85\u6267\u884C\uFF08\u5FAE\u4EFB\u52A1\u653E\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u5B8F\u4EFB\u52A1\u653E\u5230\u5B8F\u4EFB\u52A1\u961F\u5217\uFF09",paraId:73,tocIndex:16},{value:"\u6267\u884C\u6808\u4E3A\u7A7A\u65F6\uFF0CEvent Loop \u628A\u5FAE\u4EFB\u52A1\u961F\u5217\u6267\u884C\u6E05\u7A7A\uFF1B",paraId:73,tocIndex:16},{value:"\u5FAE\u4EFB\u52A1\u961F\u5217\u6E05\u7A7A\u540E\uFF0C\u8FDB\u5165\u5B8F\u4EFB\u52A1\u961F\u5217\uFF0C\u53D6\u961F\u5217\u7684\u7B2C\u4E00\u9879\u4EFB\u52A1\u653E\u5165 Stack(\u6808\uFF09\u4E2D\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u67E5\u770B\u5FAE\u4EFB\u52A1\u961F\u5217\u662F\u5426\u6709\u4EFB\u52A1\uFF0C\u6709\u7684\u8BDD\uFF0C\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u961F\u5217\u3002\u91CD\u590D 4\uFF0C\u7EE7\u7EED\u4ECE\u5B8F\u4EFB\u52A1\u4E2D\u53D6\u4EFB\u52A1\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u7EE7\u7EED\u6E05\u7A7A\u5FAE\u4EFB\u52A1\uFF0C\u5982\u6B64\u53CD\u590D\u5FAA\u73AF\uFF0C\u76F4\u81F3\u6E05\u7A7A\u6240\u6709\u7684\u4EFB\u52A1\u3002",paraId:73,tocIndex:16},{value:"\u6D4F\u89C8\u5668\u4E2D\u7684\u4EFB\u52A1\u6E90(task):",paraId:74,tocIndex:16},{value:"\u5B8F\u4EFB\u52A1(macrotask)",paraId:75,tocIndex:16},{value:"\uFF1A",paraId:75,tocIndex:16},{value:`
  \u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u7684\uFF0C\u6BD4\u5982\u6D4F\u89C8\u5668`,paraId:75,tocIndex:16},{value:`
  ajax\u3001setTimeout\u3001setInterval\u3001setTmmediate(\u53EA\u517C\u5BB9 ie)\u3001script\u3001requestAnimationFrame\u3001messageChannel\u3001UI \u6E32\u67D3\u3001\u4E00\u4E9B\u6D4F\u89C8\u5668 api`,paraId:75,tocIndex:16},{value:"\u5FAE\u4EFB\u52A1(microtask)",paraId:75,tocIndex:16},{value:"\uFF1A",paraId:75,tocIndex:16},{value:`
  \u8BED\u8A00\u672C\u8EAB\u63D0\u4F9B\u7684\uFF0C\u6BD4\u5982 promise.then`,paraId:75,tocIndex:16},{value:`
  then\u3001queueMicrotask(\u57FA\u4E8E then)\u3001mutationObserver(\u6D4F\u89C8\u5668\u63D0\u4F9B)\u3001messageChannel \u3001mutationObersve`,paraId:75,tocIndex:16},{value:"\u4F20\u9001\u95E8 \u261E ",paraId:76,tocIndex:16},{value:"# \u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",paraId:76,tocIndex:16},{value:"Node \u73AF\u5883\u4E2D\u7684\u4E8B\u4EF6\u73AF\uFF08Event Loop)",paraId:69},{value:"Node",paraId:77,tocIndex:17},{value:"\u662F\u57FA\u4E8E V8 \u5F15\u64CE\u7684\u8FD0\u884C\u5728\u670D\u52A1\u7AEF\u7684",paraId:77,tocIndex:17},{value:"JavaScript",paraId:77,tocIndex:17},{value:"\u8FD0\u884C\u73AF\u5883\uFF0C\u5728\u5904\u7406\u9AD8\u5E76\u53D1\u3001I/O \u5BC6\u96C6(\u6587\u4EF6\u64CD\u4F5C\u3001\u7F51\u7EDC\u64CD\u4F5C\u3001\u6570\u636E\u5E93\u64CD\u4F5C\u7B49)\u573A\u666F\u6709\u660E\u663E\u7684\u4F18\u52BF\u3002\u867D\u7136\u7528\u5230\u4E5F\u662F V8 \u5F15\u64CE\uFF0C\u4F46\u7531\u4E8E\u670D\u52A1\u76EE\u7684\u548C\u73AF\u5883\u4E0D\u540C\uFF0C\u5BFC\u81F4\u4E86\u5B83\u7684 API \u4E0E\u539F\u751F JS \u6709\u4E9B\u533A\u522B\uFF0C\u5176 Event Loop \u8FD8\u8981\u5904\u7406\u4E00\u4E9B I/O\uFF0C\u6BD4\u5982\u65B0\u7684\u7F51\u7EDC\u8FDE\u63A5\u7B49\uFF0C\u6240\u4EE5 Node \u7684 Event Loop(\u4E8B\u4EF6\u73AF\u673A\u5236)\u4E0E\u6D4F\u89C8\u5668\u7684\u662F\u4E0D\u592A\u4E00\u6837\u3002",paraId:77,tocIndex:17},{value:" \u6267\u884C\u987A\u5E8F\u5982\u4E0B\uFF1A",paraId:78,tocIndex:17},{value:"timers",paraId:79,tocIndex:17},{value:": \u8BA1\u65F6\u5668\uFF0C\u6267\u884C setTimeout \u548C setInterval \u7684\u56DE\u8C03",paraId:79,tocIndex:17},{value:"pending callbacks",paraId:79,tocIndex:17},{value:": \u6267\u884C\u5EF6\u8FDF\u5230\u4E0B\u4E00\u4E2A\u5FAA\u73AF\u8FED\u4EE3\u7684 I/O \u56DE\u8C03",paraId:79,tocIndex:17},{value:"idle, prepare",paraId:79,tocIndex:17},{value:": \u961F\u5217\u7684\u79FB\u52A8\uFF0C\u4EC5\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528",paraId:79,tocIndex:17},{value:"poll\u8F6E\u8BE2",paraId:79,tocIndex:17},{value:": \u68C0\u7D22\u65B0\u7684 I/O \u4E8B\u4EF6;\u6267\u884C\u4E0E I/O \u76F8\u5173\u7684\u56DE\u8C03\u3002\u4E8B\u5B9E\u4E0A\u9664\u4E86\u5176\u4ED6\u51E0\u4E2A\u9636\u6BB5\u5904\u7406\u7684\u4E8B\u60C5\uFF0C\u5176\u4ED6\u51E0\u4E4E\u6240\u6709\u7684\u5F02\u6B65\u90FD\u5728\u8FD9\u4E2A\u9636\u6BB5\u5904\u7406\u3002",paraId:79,tocIndex:17},{value:"check",paraId:79,tocIndex:17},{value:": \u6267\u884C",paraId:79,tocIndex:17},{value:"setImmediate",paraId:79,tocIndex:17},{value:"\u56DE\u8C03\uFF0CsetImmediate \u5728\u8FD9\u91CC\u6267\u884C",paraId:79,tocIndex:17},{value:"close callbacks",paraId:79,tocIndex:17},{value:": \u6267\u884C",paraId:79,tocIndex:17},{value:"close",paraId:79,tocIndex:17},{value:"\u4E8B\u4EF6\u7684",paraId:79,tocIndex:17},{value:"callback",paraId:79,tocIndex:17},{value:"\uFF0C\u4E00\u4E9B\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\uFF1Asocket.on('close', ...)",paraId:79,tocIndex:17},{value:"setTimeout",paraId:80,tocIndex:18},{value:"settimeout \u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230\u5B8F\u4EFB\u52A1\u961F\u5217\u91CC\uFF0C\u7B49\u5230\u6267\u884C\u6808\u6E05\u7A7A\u4EE5\u540E\u6267\u884C\u3002",paraId:81,tocIndex:18},{value:"Promise",paraId:82,tocIndex:18},{value:"Promise \u672C\u8EAB\u662F",paraId:83,tocIndex:18},{value:"\u540C\u6B65\u7684\u7ACB\u5373\u6267\u884C\u51FD\u6570",paraId:83,tocIndex:18},{value:"\uFF0C \u5F53\u5728 executor \u4E2D\u6267\u884C resolve \u6216\u8005 reject \u7684\u65F6\u5019, \u6B64\u65F6\u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C \u4F1A\u5148\u6267\u884C then/catch \u7B49\uFF0C\u5F53\u4E3B\u6808\u5B8C\u6210\u540E\uFF0C\u624D\u4F1A\u53BB\u8C03\u7528 resolve/reject \u4E2D\u5B58\u653E\u7684\u65B9\u6CD5\u6267\u884C\u3002",paraId:83,tocIndex:18},{value:`console.log('script start');
  let promise1 = new Promise(function (resolve) {
    console.log('promise1');
    resolve();
    console.log('promise1 end');
  }).then(function () {
    console.log('promise2');
  });
  setTimeout(function () {
    console.log('settimeout');
  });
  console.log('script end');
  // \u8F93\u51FA\u987A\u5E8F: script start->promise1->promise1 end->script end->promise2->settimeout
  `,paraId:84,tocIndex:18},{value:"async/await",paraId:85,tocIndex:18},{value:`async \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u5F53\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4E00\u65E6\u9047\u5230 await \u5C31\u4F1A\u5148\u8FD4\u56DE\uFF0C\u7B49\u5230\u89E6\u53D1\u7684\u5F02\u6B65\u64CD\u4F5C\u5B8C\u6210\uFF0C\u518D\u6267\u884C\u51FD\u6570\u4F53\u5185\u540E\u9762\u7684\u8BED\u53E5\u3002\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF0C\u662F\u8BA9\u51FA\u4E86\u7EBF\u7A0B\uFF0C\u8DF3\u51FA\u4E86 async \u51FD\u6570\u4F53\u3002

  \`\`\`js
  async function async1(){
     console.log('async1 start');
      await async2();
      console.log('async1 end')
  }
  async function async2(){
      console.log('async2')
  }

  console.log('script start');
  async1();
  console.log('script end')

  // \u8F93\u51FA\u987A\u5E8F\uFF1Ascript start->async1 start->async2->script end->async1 end
  \`\`\`
  `,paraId:86,tocIndex:18},{value:"\u4F20\u9001\u95E8 \u261E ",paraId:87,tocIndex:18},{value:"# JavaScript Promise \u4E13\u9898",paraId:87,tocIndex:18},{value:"Async/Await \u5C31\u662F\u4E00\u4E2A",paraId:88,tocIndex:19},{value:"\u81EA\u6267\u884C",paraId:88,tocIndex:19},{value:"\u7684 generate \u51FD\u6570\u3002\u5229\u7528 generate \u51FD\u6570\u7684\u7279\u6027\u628A\u5F02\u6B65\u7684\u4EE3\u7801\u5199\u6210\u201C\u540C\u6B65\u201D\u7684\u5F62\u5F0F,\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u540E\u9762\u4E00\u4E2A\u8BF7\u6C42\u7684\u53C2\u6570,\u5176\u4E2D\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A promise \u5BF9\u8C61.",paraId:88,tocIndex:19},{value:"\u8282\u6D41",paraId:89,tocIndex:20},{value:"\uFF1A\u4E8B\u4EF6\u89E6\u53D1\u540E\uFF0C\u89C4\u5B9A\u65F6\u95F4\u5185\uFF0C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E0D\u80FD\u518D\u6B21\u88AB\u8C03\u7528\u3002\u4E5F\u5C31\u662F\u8BF4\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\uFF0C\u51FD\u6570\u53EA\u80FD\u88AB\u8C03\u7528\u4E00\u6B21\uFF0C\u4E14\u662F\u6700\u5148\u88AB\u89E6\u53D1\u8C03\u7528\u7684\u90A3\u6B21\u3002",paraId:89,tocIndex:20},{value:"\u9632\u6296",paraId:90,tocIndex:20},{value:"\uFF1A\u591A\u6B21\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF0C\u5E76\u4E14\u662F\u5728\u89E6\u53D1\u64CD\u4F5C\u7ED3\u675F\u65F6\u6267\u884C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u4E00\u4E2A\u4E8B\u4EF6\u88AB\u89E6\u53D1\u51C6\u5907\u6267\u884C\u4E8B\u4EF6\u51FD\u6570\u524D\uFF0C\u4F1A\u7B49\u5F85\u4E00\u5B9A\u7684\u65F6\u95F4\uFF08\u8FD9\u65F6\u95F4\u662F\u7801\u519C\u81EA\u5DF1\u53BB\u5B9A\u4E49\u7684\uFF0C\u6BD4\u5982 1 \u79D2\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u518D\u6B21\u88AB\u89E6\u53D1\uFF0C\u90A3\u4E48\u5C31\u6267\u884C\uFF0C\u5982\u679C\u88AB\u89E6\u53D1\u4E86\uFF0C\u90A3\u5C31\u672C\u6B21\u4F5C\u5E9F\uFF0C\u91CD\u65B0\u4ECE\u65B0\u89E6\u53D1\u7684\u65F6\u95F4\u5F00\u59CB\u8BA1\u7B97\uFF0C\u5E76\u518D\u6B21\u7B49\u5F85 1 \u79D2\uFF0C\u76F4\u5230\u80FD\u6700\u7EC8\u6267\u884C\uFF01",paraId:90,tocIndex:20},{value:"\u4F7F\u7528\u573A\u666F",paraId:91,tocIndex:20},{value:"\uFF1A",paraId:91,tocIndex:20},{value:`
  \u8282\u6D41\uFF1A\u6EDA\u52A8\u52A0\u8F7D\u66F4\u591A\u3001\u641C\u7D22\u6846\u641C\u7684\u7D22\u8054\u60F3\u529F\u80FD\u3001\u9AD8\u9891\u70B9\u51FB\u3001\u8868\u5355\u91CD\u590D\u63D0\u4EA4\u2026\u2026`,paraId:91,tocIndex:20},{value:`
  \u9632\u6296\uFF1A\u641C\u7D22\u6846\u641C\u7D22\u8F93\u5165\uFF0C\u5E76\u5728\u8F93\u5165\u5B8C\u4EE5\u540E\u81EA\u52A8\u641C\u7D22\u3001\u624B\u673A\u53F7\uFF0C\u90AE\u7BB1\u9A8C\u8BC1\u8F93\u5165\u68C0\u6D4B\u3001\u7A97\u53E3\u5927\u5C0F resize \u53D8\u5316\u540E\uFF0C\u518D\u91CD\u65B0\u6E32\u67D3\u3002`,paraId:91,tocIndex:20},{value:`/**
   * \u8282\u6D41\u51FD\u6570 \u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E00\u6B21\u540E\uFF0C\u53EA\u6709\u5927\u4E8E\u8BBE\u5B9A\u7684\u6267\u884C\u5468\u671F\u624D\u4F1A\u6267\u884C\u7B2C\u4E8C\u6B21\u3002\u6709\u4E2A\u9700\u8981\u9891\u7E41\u89E6\u53D1\u7684\u51FD\u6570\uFF0C\u51FA\u4E8E\u4F18\u5316\u6027\u80FD\u7684\u89D2\u5EA6\uFF0C\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\uFF0C\u53EA\u8BA9\u51FD\u6570\u89E6\u53D1\u7684\u7B2C\u4E00\u6B21\u751F\u6548\uFF0C\u540E\u9762\u7684\u4E0D\u751F\u6548\u3002
   * @param fn\u8981\u88AB\u8282\u6D41\u7684\u51FD\u6570
   * @param delay\u89C4\u5B9A\u7684\u65F6\u95F4
   */
  function throttle(fn, delay) {
    //\u8BB0\u5F55\u4E0A\u4E00\u6B21\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u95F4
    var lastTime = 0;
    return function () {
      //\u8BB0\u5F55\u5F53\u524D\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u95F4
      var nowTime = Date.now();
      if (nowTime - lastTime > delay) {
        //\u4FEE\u6B63this\u6307\u5411\u95EE\u9898
        fn.call(this);
        //\u540C\u6B65\u6267\u884C\u7ED3\u675F\u65F6\u95F4
        lastTime = nowTime;
      }
    };
  }

  document.onscroll = throttle(function () {
    console.log('scllor\u4E8B\u4EF6\u88AB\u89E6\u53D1\u4E86' + Date.now());
  }, 200);

  /**
   * \u9632\u6296\u51FD\u6570  \u4E00\u4E2A\u9700\u8981\u9891\u7E41\u89E6\u53D1\u7684\u51FD\u6570\uFF0C\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\uFF0C\u53EA\u8BA9\u6700\u540E\u4E00\u6B21\u751F\u6548\uFF0C\u524D\u9762\u7684\u4E0D\u751F\u6548
   * @param fn\u8981\u88AB\u8282\u6D41\u7684\u51FD\u6570
   * @param delay\u89C4\u5B9A\u7684\u65F6\u95F4
   */
  function debounce(fn, delay) {
    //\u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684\u5EF6\u65F6\u5668
    var timer = null;
    return function () {
      //\u6E05\u9664\u4E0A\u4E00\u6B21\u7684\u6F14\u793A\u5668
      clearTimeout(timer);
      //\u91CD\u65B0\u8BBE\u7F6E\u65B0\u7684\u5EF6\u65F6\u5668
      timer = setTimeout(function () {
        //\u4FEE\u6B63this\u6307\u5411\u95EE\u9898
        fn.apply(this);
      }, delay);
    };
  }
  document.getElementById('btn').onclick = debounce(function () {
    console.log('\u6309\u94AE\u88AB\u70B9\u51FB\u4E86' + Date.now());
  }, 1000);
  `,paraId:92,tocIndex:20}],da={},qe={title:"Documentation of common front-end methods",toc:"menu",filename:"docs/index.en-US.md",hero:{title:"CINS",description:"\u{1F4D6} A library of common methods for easy development",actions:[{text:"Easystart",link:"/guide/introduction"},{text:"Getstart",link:"/usually/array"}]},features:[{title:"Out of the box",emoji:"\u{1F48E}",description:"Out of the box, focus on method usage and work output"},{title:"Apply diverse",emoji:"\u{1F308}",description:"A variety of API based on TypeScript type definition"},{title:"Convenient development",emoji:"\u{1F680}",description:"One-line command digitizes library assets and connects them with downstream productivity tools"}],description:"cins-docs"},Ge=[],ve=[{value:"cins-docs",paraId:0}],we={},t4={title:"\u524D\u7AEF\u5E38\u7528\u65B9\u6CD5\u6587\u6863",toc:"menu",filename:"docs/index.md",hero:{title:"CINS",description:"\u{1F4D6} \u4E3A\u4FBF\u6377\u5F00\u53D1\u800C\u751F\u7684\u65B9\u6CD5\u5E93\uFF0C\u5E38\u7528\u65B9\u6CD5\u7EDF\u7EDF\u9F50\u5168\uFF0C\u4E00\u952E\u5F00\u542F\uFF01",actions:[{text:"\u5FEB\u901F\u4E0A\u624B",link:"/guide/introduction"},{text:"\u5F00\u59CB\u4F7F\u7528",link:"/usually/array"}]},features:[{title:"\u5F00\u7BB1\u5373\u7528",emoji:"\u{1F48E}",description:"\u5F00\u7BB1\u5373\u7528\uFF0C\u5C06\u6CE8\u610F\u529B\u96C6\u4E2D\u65B9\u6CD5\u4F7F\u7528\u548C\u9879\u76EE\u5F00\u53D1\u4E0A"},{title:"\u591A\u7AEF\u9002\u7528",emoji:"\u{1F308}",description:"\u57FA\u4E8E TypeScript \u7C7B\u578B\u5B9A\u4E49\uFF0Cjs \u548C ts \u5747\u53EF\u4F7F\u7528\uFF0C\u8DE8\u5E73\u53F0\u901A\u7528\uFF0C\u591A\u7AEF\u5171\u8FDB"},{title:"\u4FBF\u6377\u5F00\u53D1",emoji:"\u{1F680}",description:"\u4E00\u952E\u590D\u5236\u5373\u53EF\u4F7F\u7528\uFF0C\u8282\u7EA6\u5F00\u53D1\u6210\u672C\uFF0C\u8F7B\u677E\u4FBF\u6377\u4F7F\u7528\uFF0C\u6839\u636E\u9700\u6C42\u6539\u8FDB\u65B9\u6CD5"}]},ea=[],Fa=[],Ve=null,Te={},Va={"docs/advance/miniProgram/index.en-US":{frontmatter:h,toc:p,texts:u,demos:s},"docs/column/introduction/index.en-US":{frontmatter:x,toc:g,texts:I,demos:z},"docs/guide/introduction/index.en-US":{frontmatter:w,toc:C,texts:_,demos:M},"docs/advance/component/index.en-US":{frontmatter:t1,toc:X,texts:Q,demos:e1},"docs/column/interview/index.en-US":{frontmatter:f1,toc:a1,texts:D,demos:R},"docs/column/questions/index.en-US":{frontmatter:U,toc:Y,texts:N,demos:Z},"docs/usually/datetime/index.en-US":{frontmatter:z1,toc:E1,texts:w1,demos:W},"docs/usually/location/index.en-US":{frontmatter:G1,toc:B1,texts:S1,demos:c1},"docs/guide/changelog/index.en-US":{frontmatter:S0,toc:L0,texts:Q0,demos:C1},"docs/usually/common/index.en-US":{frontmatter:z5,toc:g5,texts:o0,demos:D0},"docs/advance/miniProgram/index":{frontmatter:x0,toc:U1,texts:V1,demos:H0},"docs/column/introduction/index":{frontmatter:h1,toc:u1,texts:F1,demos:s1},"docs/usually/array/index.en-US":{frontmatter:u0,toc:l0,texts:v0,demos:Z1},"docs/usually/cache/index.en-US":{frontmatter:X0,toc:F0,texts:g1,demos:G0},"docs/usually/regex/index.en-US":{frontmatter:K,toc:n1,texts:y1,demos:y},"docs/advance/tips/index.en-US":{frontmatter:J1,toc:D1,texts:i0,demos:L1},"docs/column/react/index.en-US":{frontmatter:h0,toc:k1,texts:j1,demos:f0},"docs/column/share/index.en-US":{frontmatter:w0,toc:e0,texts:t0,demos:$1},"docs/guide/introduction/index":{frontmatter:K1,toc:_0,texts:P0,demos:R1},"docs/usually/file/index.en-US":{frontmatter:m1,toc:T1,texts:V0,demos:a5},"docs/usually/http/index.en-US":{frontmatter:R0,toc:J0,texts:L5,demos:A0},"docs/advance/component/index":{frontmatter:j5,toc:U5,texts:q5,demos:k5},"docs/advance/css/index.en-US":{frontmatter:ft,toc:tt,texts:pt,demos:At},"docs/column/interview/index":{frontmatter:V5,toc:yt,texts:Tt,demos:m5},"docs/column/questions/index":{frontmatter:Lt,toc:dt,texts:ta,demos:Dt},"docs/column/seo/index.en-US":{frontmatter:r2,toc:v2,texts:Nt,demos:P2},"docs/usually/datetime/index":{frontmatter:l1,toc:b1,texts:y0,demos:ca},"docs/usually/location/index":{frontmatter:N0,toc:e5,texts:s5,demos:E0},"docs/column/js/index.en-US":{frontmatter:B5,toc:b5,texts:st,demos:n5},"docs/guide/changelog/index":{frontmatter:P5,toc:ut,texts:V,demos:O5},"docs/usually/common/index":{frontmatter:O,toc:r1,texts:d1,demos:G},"docs/usually/array/index":{frontmatter:Y1,toc:N1,texts:q1,demos:_1},"docs/usually/cache/index":{frontmatter:z0,toc:j0,texts:U0,demos:M0},"docs/usually/regex/index":{frontmatter:r5,toc:q0,texts:i5,demos:W0},"docs/advance/tips/index":{frontmatter:nt,toc:R5,texts:G5,demos:M5},"docs/column/react/index":{frontmatter:Y5,toc:at,texts:A5,demos:D5},"docs/column/share/index":{frontmatter:A1,toc:W1,texts:K0,demos:v1},"docs/usually/file/index":{frontmatter:X5,toc:lt,texts:x5,demos:y5},"docs/usually/http/index":{frontmatter:$t,toc:St,texts:I2,demos:S5},"docs/advance/css/index":{frontmatter:D2,toc:Ft,texts:Mt,demos:L2},"docs/column/seo/index":{frontmatter:aa,toc:wa,texts:ua,demos:sa},"docs/column/js/index":{frontmatter:ha,toc:de,texts:Ce,demos:he},"docs/index.en-US":{frontmatter:qe,toc:Ge,texts:ve,demos:da},"docs/index":{frontmatter:t4,toc:ea,texts:Fa,demos:we}},f2=Object.entries(Va).reduce(function(ht,d0){var B0=l()(d0,2),H5=B0[0],h5=B0[1];return Object.values(h5.demos).forEach(function(ot){ot.routeId=H5}),Object.assign(ht,h5.demos),delete h5.demos,ht},{})},57378:function(d,f,a){"use strict";a.d(f,{Ac:function(){return S1},ql:function(){return j.ql},rU:function(){return F},OL:function(){return C},Q$:function(){return C1},m8:function(){return S0.m},fp:function(){return l.fp},Ov:function(){return P.Ov},TH:function(){return l.TH},pC:function(){return l.pC},UO:function(){return l.UO},Qt:function(){return J.Q},lr:function(){return H}});var n=a(93236),l=a(44492),o=a(18280);function s(){return s=Object.assign||function(V1){for(var s1=1;s1<arguments.length;s1++){var h1=arguments[s1];for(var u1 in h1)Object.prototype.hasOwnProperty.call(h1,u1)&&(V1[u1]=h1[u1])}return V1},s.apply(this,arguments)}function h(V1,s1){if(V1==null)return{};var h1={},u1=Object.keys(V1),F1,Z1;for(Z1=0;Z1<u1.length;Z1++)F1=u1[Z1],!(s1.indexOf(F1)>=0)&&(h1[F1]=V1[F1]);return h1}const p=["onClick","reloadDocument","replace","state","target","to"],u=["aria-current","caseSensitive","className","end","style","to","children"];function z(V1,s1){if(!V1){typeof console!="undefined"&&console.warn(s1);try{throw new Error(s1)}catch(h1){}}}function x(V1){let{basename:s1,children:h1,window:u1}=V1,F1=useRef();F1.current==null&&(F1.current=createBrowserHistory({window:u1}));let Z1=F1.current,[u0,l0]=useState({action:Z1.action,location:Z1.location});return useLayoutEffect(()=>Z1.listen(l0),[Z1]),createElement(Router,{basename:s1,children:h1,location:u0.location,navigationType:u0.action,navigator:Z1})}function g(V1){let{basename:s1,children:h1,window:u1}=V1,F1=useRef();F1.current==null&&(F1.current=createHashHistory({window:u1}));let Z1=F1.current,[u0,l0]=useState({action:Z1.action,location:Z1.location});return useLayoutEffect(()=>Z1.listen(l0),[Z1]),createElement(Router,{basename:s1,children:h1,location:u0.location,navigationType:u0.action,navigator:Z1})}function I(V1){let{basename:s1,children:h1,history:u1}=V1;const[F1,Z1]=useState({action:u1.action,location:u1.location});return useLayoutEffect(()=>u1.listen(Z1),[u1]),createElement(Router,{basename:s1,children:h1,location:F1.location,navigationType:F1.action,navigator:u1})}function M(V1){return!!(V1.metaKey||V1.altKey||V1.ctrlKey||V1.shiftKey)}const w=(0,n.forwardRef)(function(s1,h1){let{onClick:u1,reloadDocument:F1,replace:Z1=!1,state:u0,target:l0,to:v0}=s1,G0=h(s1,p),X0=(0,l.oQ)(v0),F0=_(v0,{replace:Z1,state:u0,target:l0});function g1(y){u1&&u1(y),!y.defaultPrevented&&!F1&&F0(y)}return(0,n.createElement)("a",s({},G0,{href:X0,onClick:g1,ref:h1,target:l0}))}),C=(0,n.forwardRef)(function(s1,h1){let{"aria-current":u1="page",caseSensitive:F1=!1,className:Z1="",end:u0=!1,style:l0,to:v0,children:G0}=s1,X0=h(s1,u),F0=(0,l.TH)(),g1=(0,l.WU)(v0),y=F0.pathname,K=g1.pathname;F1||(y=y.toLowerCase(),K=K.toLowerCase());let n1=y===K||!u0&&y.startsWith(K)&&y.charAt(K.length)==="/",y1=n1?u1:void 0,L1;typeof Z1=="function"?L1=Z1({isActive:n1}):L1=[Z1,n1?"active":null].filter(Boolean).join(" ");let J1=typeof l0=="function"?l0({isActive:n1}):l0;return(0,n.createElement)(w,s({},X0,{"aria-current":y1,className:L1,ref:h1,style:J1,to:v0}),typeof G0=="function"?G0({isActive:n1}):G0)});function _(V1,s1){let{target:h1,replace:u1,state:F1}=s1===void 0?{}:s1,Z1=(0,l.s0)(),u0=(0,l.TH)(),l0=(0,l.WU)(V1);return(0,n.useCallback)(v0=>{if(v0.button===0&&(!h1||h1==="_self")&&!M(v0)){v0.preventDefault();let G0=!!u1||(0,o.Ep)(u0)===(0,o.Ep)(l0);Z1(V1,{replace:G0,state:F1})}},[u0,Z1,l0,u1,F1,h1,V1])}function H(V1){let s1=(0,n.useRef)(b(V1)),h1=(0,l.TH)(),u1=(0,n.useMemo)(()=>{let u0=b(h1.search);for(let l0 of s1.current.keys())u0.has(l0)||s1.current.getAll(l0).forEach(v0=>{u0.append(l0,v0)});return u0},[h1.search]),F1=(0,l.s0)(),Z1=(0,n.useCallback)((u0,l0)=>{F1("?"+b(u0),l0)},[F1]);return[u1,Z1]}function b(V1){return V1===void 0&&(V1=""),new URLSearchParams(typeof V1=="string"||Array.isArray(V1)||V1 instanceof URLSearchParams?V1:Object.keys(V1).reduce((s1,h1)=>{let u1=V1[h1];return s1.concat(Array.isArray(u1)?u1.map(F1=>[h1,F1]):[[h1,u1]])},[]))}var E=a(51163),L=a(68901),P=a(60581),S=["prefetch"];function F(V1){var s1,h1=V1.prefetch,u1=(0,L.Z)(V1,S),F1=(0,P.Ov)(),Z1=typeof V1.to=="string"?V1.to:(s1=V1.to)===null||s1===void 0?void 0:s1.pathname;return Z1?n.createElement(w,(0,E.Z)({onMouseEnter:function(){var l0;return h1&&Z1&&((l0=F1.preloadRoute)===null||l0===void 0?void 0:l0.call(F1,Z1))}},u1),V1.children):null}var j=a(87593),J=a(73643),e1=a(26143);function t1(){"use strict";t1=function(){return V1};var V1={},s1=Object.prototype,h1=s1.hasOwnProperty,u1=Object.defineProperty||function(t0,R1,K1){t0[R1]=K1.value},F1=typeof Symbol=="function"?Symbol:{},Z1=F1.iterator||"@@iterator",u0=F1.asyncIterator||"@@asyncIterator",l0=F1.toStringTag||"@@toStringTag";function v0(t0,R1,K1){return Object.defineProperty(t0,R1,{value:K1,enumerable:!0,configurable:!0,writable:!0}),t0[R1]}try{v0({},"")}catch(t0){v0=function(K1,_0,P0){return K1[_0]=P0}}function G0(t0,R1,K1,_0){var P0=R1&&R1.prototype instanceof g1?R1:g1,a5=Object.create(P0.prototype),m1=new $1(_0||[]);return u1(a5,"_invoke",{value:f0(t0,K1,m1)}),a5}function X0(t0,R1,K1){try{return{type:"normal",arg:t0.call(R1,K1)}}catch(_0){return{type:"throw",arg:_0}}}V1.wrap=G0;var F0={};function g1(){}function y(){}function K(){}var n1={};v0(n1,Z1,function(){return this});var y1=Object.getPrototypeOf,L1=y1&&y1(y1(w0([])));L1&&L1!==s1&&h1.call(L1,Z1)&&(n1=L1);var J1=K.prototype=g1.prototype=Object.create(n1);function D1(t0){["next","throw","return"].forEach(function(R1){v0(t0,R1,function(K1){return this._invoke(R1,K1)})})}function i0(t0,R1){function K1(P0,a5,m1,T1){var V0=X0(t0[P0],t0,a5);if(V0.type!=="throw"){var A0=V0.arg,R0=A0.value;return R0&&(0,e1.Z)(R0)=="object"&&h1.call(R0,"__await")?R1.resolve(R0.__await).then(function(J0){K1("next",J0,m1,T1)},function(J0){K1("throw",J0,m1,T1)}):R1.resolve(R0).then(function(J0){A0.value=J0,m1(A0)},function(J0){return K1("throw",J0,m1,T1)})}T1(V0.arg)}var _0;u1(this,"_invoke",{value:function(a5,m1){function T1(){return new R1(function(V0,A0){K1(a5,m1,V0,A0)})}return _0=_0?_0.then(T1,T1):T1()}})}function f0(t0,R1,K1){var _0="suspendedStart";return function(P0,a5){if(_0==="executing")throw new Error("Generator is already running");if(_0==="completed"){if(P0==="throw")throw a5;return e0()}for(K1.method=P0,K1.arg=a5;;){var m1=K1.delegate;if(m1){var T1=h0(m1,K1);if(T1){if(T1===F0)continue;return T1}}if(K1.method==="next")K1.sent=K1._sent=K1.arg;else if(K1.method==="throw"){if(_0==="suspendedStart")throw _0="completed",K1.arg;K1.dispatchException(K1.arg)}else K1.method==="return"&&K1.abrupt("return",K1.arg);_0="executing";var V0=X0(t0,R1,K1);if(V0.type==="normal"){if(_0=K1.done?"completed":"suspendedYield",V0.arg===F0)continue;return{value:V0.arg,done:K1.done}}V0.type==="throw"&&(_0="completed",K1.method="throw",K1.arg=V0.arg)}}}function h0(t0,R1){var K1=R1.method,_0=t0.iterator[K1];if(_0===void 0)return R1.delegate=null,K1==="throw"&&t0.iterator.return&&(R1.method="return",R1.arg=void 0,h0(t0,R1),R1.method==="throw")||K1!=="return"&&(R1.method="throw",R1.arg=new TypeError("The iterator does not provide a '"+K1+"' method")),F0;var P0=X0(_0,t0.iterator,R1.arg);if(P0.type==="throw")return R1.method="throw",R1.arg=P0.arg,R1.delegate=null,F0;var a5=P0.arg;return a5?a5.done?(R1[t0.resultName]=a5.value,R1.next=t0.nextLoc,R1.method!=="return"&&(R1.method="next",R1.arg=void 0),R1.delegate=null,F0):a5:(R1.method="throw",R1.arg=new TypeError("iterator result is not an object"),R1.delegate=null,F0)}function k1(t0){var R1={tryLoc:t0[0]};1 in t0&&(R1.catchLoc=t0[1]),2 in t0&&(R1.finallyLoc=t0[2],R1.afterLoc=t0[3]),this.tryEntries.push(R1)}function j1(t0){var R1=t0.completion||{};R1.type="normal",delete R1.arg,t0.completion=R1}function $1(t0){this.tryEntries=[{tryLoc:"root"}],t0.forEach(k1,this),this.reset(!0)}function w0(t0){if(t0){var R1=t0[Z1];if(R1)return R1.call(t0);if(typeof t0.next=="function")return t0;if(!isNaN(t0.length)){var K1=-1,_0=function P0(){for(;++K1<t0.length;)if(h1.call(t0,K1))return P0.value=t0[K1],P0.done=!1,P0;return P0.value=void 0,P0.done=!0,P0};return _0.next=_0}}return{next:e0}}function e0(){return{value:void 0,done:!0}}return y.prototype=K,u1(J1,"constructor",{value:K,configurable:!0}),u1(K,"constructor",{value:y,configurable:!0}),y.displayName=v0(K,l0,"GeneratorFunction"),V1.isGeneratorFunction=function(t0){var R1=typeof t0=="function"&&t0.constructor;return!!R1&&(R1===y||(R1.displayName||R1.name)==="GeneratorFunction")},V1.mark=function(t0){return Object.setPrototypeOf?Object.setPrototypeOf(t0,K):(t0.__proto__=K,v0(t0,l0,"GeneratorFunction")),t0.prototype=Object.create(J1),t0},V1.awrap=function(t0){return{__await:t0}},D1(i0.prototype),v0(i0.prototype,u0,function(){return this}),V1.AsyncIterator=i0,V1.async=function(t0,R1,K1,_0,P0){P0===void 0&&(P0=Promise);var a5=new i0(G0(t0,R1,K1,_0),P0);return V1.isGeneratorFunction(R1)?a5:a5.next().then(function(m1){return m1.done?m1.value:a5.next()})},D1(J1),v0(J1,l0,"Generator"),v0(J1,Z1,function(){return this}),v0(J1,"toString",function(){return"[object Generator]"}),V1.keys=function(t0){var R1=Object(t0),K1=[];for(var _0 in R1)K1.push(_0);return K1.reverse(),function P0(){for(;K1.length;){var a5=K1.pop();if(a5 in R1)return P0.value=a5,P0.done=!1,P0}return P0.done=!0,P0}},V1.values=w0,$1.prototype={constructor:$1,reset:function(R1){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j1),!R1)for(var K1 in this)K1.charAt(0)==="t"&&h1.call(this,K1)&&!isNaN(+K1.slice(1))&&(this[K1]=void 0)},stop:function(){this.done=!0;var R1=this.tryEntries[0].completion;if(R1.type==="throw")throw R1.arg;return this.rval},dispatchException:function(R1){if(this.done)throw R1;var K1=this;function _0(A0,R0){return m1.type="throw",m1.arg=R1,K1.next=A0,R0&&(K1.method="next",K1.arg=void 0),!!R0}for(var P0=this.tryEntries.length-1;P0>=0;--P0){var a5=this.tryEntries[P0],m1=a5.completion;if(a5.tryLoc==="root")return _0("end");if(a5.tryLoc<=this.prev){var T1=h1.call(a5,"catchLoc"),V0=h1.call(a5,"finallyLoc");if(T1&&V0){if(this.prev<a5.catchLoc)return _0(a5.catchLoc,!0);if(this.prev<a5.finallyLoc)return _0(a5.finallyLoc)}else if(T1){if(this.prev<a5.catchLoc)return _0(a5.catchLoc,!0)}else{if(!V0)throw new Error("try statement without catch or finally");if(this.prev<a5.finallyLoc)return _0(a5.finallyLoc)}}}},abrupt:function(R1,K1){for(var _0=this.tryEntries.length-1;_0>=0;--_0){var P0=this.tryEntries[_0];if(P0.tryLoc<=this.prev&&h1.call(P0,"finallyLoc")&&this.prev<P0.finallyLoc){var a5=P0;break}}a5&&(R1==="break"||R1==="continue")&&a5.tryLoc<=K1&&K1<=a5.finallyLoc&&(a5=null);var m1=a5?a5.completion:{};return m1.type=R1,m1.arg=K1,a5?(this.method="next",this.next=a5.finallyLoc,F0):this.complete(m1)},complete:function(R1,K1){if(R1.type==="throw")throw R1.arg;return R1.type==="break"||R1.type==="continue"?this.next=R1.arg:R1.type==="return"?(this.rval=this.arg=R1.arg,this.method="return",this.next="end"):R1.type==="normal"&&K1&&(this.next=K1),F0},finish:function(R1){for(var K1=this.tryEntries.length-1;K1>=0;--K1){var _0=this.tryEntries[K1];if(_0.finallyLoc===R1)return this.complete(_0.completion,_0.afterLoc),j1(_0),F0}},catch:function(R1){for(var K1=this.tryEntries.length-1;K1>=0;--K1){var _0=this.tryEntries[K1];if(_0.tryLoc===R1){var P0=_0.completion;if(P0.type==="throw"){var a5=P0.arg;j1(_0)}return a5}}throw new Error("illegal catch attempt")},delegateYield:function(R1,K1,_0){return this.delegate={iterator:w0(R1),resultName:K1,nextLoc:_0},this.method==="next"&&(this.arg=void 0),F0}},V1}var X=a(75782);function Q(V1,s1,h1,u1,F1,Z1,u0){try{var l0=V1[Z1](u0),v0=l0.value}catch(G0){h1(G0);return}l0.done?s1(v0):Promise.resolve(v0).then(u1,F1)}function R(V1){return function(){var s1=this,h1=arguments;return new Promise(function(u1,F1){var Z1=V1.apply(s1,h1);function u0(v0){Q(Z1,u1,F1,u0,l0,"next",v0)}function l0(v0){Q(Z1,u1,F1,u0,l0,"throw",v0)}u0(void 0)})}}var f1=a(64002);function a1(V1,s1){var h1=typeof Symbol!="undefined"&&V1[Symbol.iterator]||V1["@@iterator"];if(!h1){if(Array.isArray(V1)||(h1=(0,f1.Z)(V1))||s1&&V1&&typeof V1.length=="number"){h1&&(V1=h1);var u1=0,F1=function(){};return{s:F1,n:function(){return u1>=V1.length?{done:!0}:{done:!1,value:V1[u1++]}},e:function(G0){throw G0},f:F1}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Z1=!0,u0=!1,l0;return{s:function(){h1=h1.call(V1)},n:function(){var G0=h1.next();return Z1=G0.done,G0},e:function(G0){u0=!0,l0=G0},f:function(){try{!Z1&&h1.return!=null&&h1.return()}finally{if(u0)throw l0}}}}var D=a(20533);function Z(V1){if(typeof Symbol!="undefined"&&V1[Symbol.iterator]!=null||V1["@@iterator"]!=null)return Array.from(V1)}var U=a(71885);function Y(V1){return(0,D.Z)(V1)||Z(V1)||(0,f1.Z)(V1)||(0,U.Z)()}function N(V1,s1){if(!(V1 instanceof s1))throw new TypeError("Cannot call a class as a function")}var W=a(1536);function z1(V1,s1){for(var h1=0;h1<s1.length;h1++){var u1=s1[h1];u1.enumerable=u1.enumerable||!1,u1.configurable=!0,"value"in u1&&(u1.writable=!0),Object.defineProperty(V1,(0,W.Z)(u1.key),u1)}}function E1(V1,s1,h1){return s1&&z1(V1.prototype,s1),h1&&z1(V1,h1),Object.defineProperty(V1,"prototype",{writable:!1}),V1}var w1=a(24572);function c1(V1,s1){if(!V1)throw new Error(s1)}function G1(V1){var s1=V1.fns,h1=V1.args;if(s1.length===1)return s1[0];var u1=s1.pop();return s1.reduce(function(F1,Z1){return function(){return Z1(F1,h1)}},u1)}function B1(V1){return!!V1&&(0,e1.Z)(V1)==="object"&&typeof V1.then=="function"}var S1;(function(V1){V1.compose="compose",V1.modify="modify",V1.event="event"})(S1||(S1={}));var C1=function(){function V1(s1){N(this,V1),(0,w1.Z)(this,"opts",void 0),(0,w1.Z)(this,"hooks",{}),this.opts=s1}return E1(V1,[{key:"register",value:function(h1){var u1=this;c1(h1.apply,"plugin register failed, apply must supplied"),Object.keys(h1.apply).forEach(function(F1){c1(u1.opts.validKeys.indexOf(F1)>-1,"register failed, invalid key ".concat(F1," ").concat(h1.path?"from plugin ".concat(h1.path):"",".")),u1.hooks[F1]=(u1.hooks[F1]||[]).concat(h1.apply[F1])})}},{key:"getHooks",value:function(h1){var u1=h1.split("."),F1=Y(u1),Z1=F1[0],u0=F1.slice(1),l0=this.hooks[Z1]||[];return u0.length&&(l0=l0.map(function(v0){try{var G0=v0,X0=a1(u0),F0;try{for(X0.s();!(F0=X0.n()).done;){var g1=F0.value;G0=G0[g1]}}catch(y){X0.e(y)}finally{X0.f()}return G0}catch(y){return null}}).filter(Boolean)),l0}},{key:"applyPlugins",value:function(h1){var u1=h1.key,F1=h1.type,Z1=h1.initialValue,u0=h1.args,l0=h1.async,v0=this.getHooks(u1)||[];switch(u0&&c1((0,e1.Z)(u0)==="object","applyPlugins failed, args must be plain object."),l0&&c1(F1===S1.modify||F1===S1.event,"async only works with modify and event type."),F1){case S1.modify:return l0?v0.reduce(function(){var G0=R(t1().mark(function X0(F0,g1){var y;return t1().wrap(function(n1){for(;;)switch(n1.prev=n1.next){case 0:if(c1(typeof g1=="function"||(0,e1.Z)(g1)==="object"||B1(g1),"applyPlugins failed, all hooks for key ".concat(u1," must be function, plain object or Promise.")),!B1(F0)){n1.next=5;break}return n1.next=4,F0;case 4:F0=n1.sent;case 5:if(typeof g1!="function"){n1.next=16;break}if(y=g1(F0,u0),!B1(y)){n1.next=13;break}return n1.next=10,y;case 10:return n1.abrupt("return",n1.sent);case 13:return n1.abrupt("return",y);case 14:n1.next=21;break;case 16:if(!B1(g1)){n1.next=20;break}return n1.next=19,g1;case 19:g1=n1.sent;case 20:return n1.abrupt("return",(0,X.Z)((0,X.Z)({},F0),g1));case 21:case"end":return n1.stop()}},X0)}));return function(X0,F0){return G0.apply(this,arguments)}}(),B1(Z1)?Z1:Promise.resolve(Z1)):v0.reduce(function(G0,X0){return c1(typeof X0=="function"||(0,e1.Z)(X0)==="object","applyPlugins failed, all hooks for key ".concat(u1," must be function or plain object.")),typeof X0=="function"?X0(G0,u0):(0,X.Z)((0,X.Z)({},G0),X0)},Z1);case S1.event:return R(t1().mark(function G0(){var X0,F0,g1,y;return t1().wrap(function(n1){for(;;)switch(n1.prev=n1.next){case 0:X0=a1(v0),n1.prev=1,X0.s();case 3:if((F0=X0.n()).done){n1.next=12;break}if(g1=F0.value,c1(typeof g1=="function","applyPlugins failed, all hooks for key ".concat(u1," must be function.")),y=g1(u0),!(l0&&B1(y))){n1.next=10;break}return n1.next=10,y;case 10:n1.next=3;break;case 12:n1.next=17;break;case 14:n1.prev=14,n1.t0=n1.catch(1),X0.e(n1.t0);case 17:return n1.prev=17,X0.f(),n1.finish(17);case 20:case"end":return n1.stop()}},G0,null,[[1,14,17,20]])}))();case S1.compose:return function(){return G1({fns:v0.concat(Z1),args:u0})()}}}}],[{key:"create",value:function(h1){var u1=new V1({validKeys:h1.validKeys});return h1.plugins.forEach(function(F1){u1.register(F1)}),u1}}]),V1}(),S0=a(6054),L0=a(37635),Q0=a.n(L0),D0=0,z5=0;function g5(V1,s1){if(!1)var h1}function o0(V1){return JSON.stringify(V1,null,2)}function H0(V1){var s1=V1.length>1?V1.map(x0).join(" "):V1[0];return Q0()(s1)==="object"?"".concat(o0(s1)):s1.toString()}function x0(V1){return Q0()(V1)==="object"?"".concat(JSON.stringify(V1)):V1.toString()}var U1={log:function(){for(var s1=arguments.length,h1=new Array(s1),u1=0;u1<s1;u1++)h1[u1]=arguments[u1];g5("log",H0(h1))},info:function(){for(var s1=arguments.length,h1=new Array(s1),u1=0;u1<s1;u1++)h1[u1]=arguments[u1];g5("info",H0(h1))},warn:function(){for(var s1=arguments.length,h1=new Array(s1),u1=0;u1<s1;u1++)h1[u1]=arguments[u1];g5("warn",H0(h1))},error:function(){for(var s1=arguments.length,h1=new Array(s1),u1=0;u1<s1;u1++)h1[u1]=arguments[u1];g5("error",H0(h1))},group:function(){z5++},groupCollapsed:function(){z5++},groupEnd:function(){z5&&--z5},clear:function(){g5("clear")},trace:function(){var s1;(s1=console).trace.apply(s1,arguments)},profile:function(){var s1;(s1=console).profile.apply(s1,arguments)},profileEnd:function(){var s1;(s1=console).profileEnd.apply(s1,arguments)}}},3966:function(d,f,a){"use strict";a.r(f),a.d(f,{addFiles:function(){return x},dragInHandler:function(){return u},dropHandler:function(){return z}});var n=a(25359),l=a.n(n),o=a(93525),s=a.n(o),h=a(49811),p=a.n(h),u=function(_){_.dataTransfer.types.includes("Files")&&_.preventDefault()},z=function(){var C=p()(l()().mark(function _(H,b,E){var L;return l()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return H.preventDefault(),S.next=3,Promise.all(s()(H.dataTransfer.items).map(function(F){return g(F.webkitGetAsEntry())}));case 3:return L=S.sent,L=L.flat(1/0).filter(function(F){return F.type}),S.abrupt("return",x(L,b,E));case 6:case"end":return S.stop()}},_)}));return function(H,b,E){return C.apply(this,arguments)}}(),x=function(_,H,b){_=s()(_),b&&(_=_.filter(function(L){return L.size<=b})),H&&H.length&&(_=_.filter(function(L){return H.includes(M(L.name))}));var E=[];return E.push.apply(E,s()(_.map(I))),E},g=function C(_){return new Promise(function(H){if(_.isFile){_.file(H);return}var b=_.createReader();b.readEntries(function(){var E=p()(l()().mark(function L(P){return l()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.t0=H,F.next=3,Promise.all(P.map(C));case 3:F.t1=F.sent,(0,F.t0)(F.t1);case 5:case"end":return F.stop()}},L)}));return function(L){return E.apply(this,arguments)}}())})},I=function(_){return{file:_,status:"pending",progress:0}},M=function(_){var H=_.lastIndexOf(".");return H>=0?_.substring(H).toLowerCase():""},w=function(_){var H=_,b="bype";return H>=Math.pow(1024,3)?(H=H/Math.pow(1024,3),b="G"):H>=Math.pow(1024,2)?(H=H/Math.pow(1024,2),b="M"):H>=1024&&(H=H/1024,b="KB"),H=H.toFixed(2),+H+b}},19673:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var dumi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67722),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93236);function ownKeys(d,f){var a=Object.keys(d);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(d);f&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(d,l).enumerable})),a.push.apply(a,n)}return a}function _objectSpread(d){for(var f=1;f<arguments.length;f++){var a=arguments[f]!=null?arguments[f]:{};f%2?ownKeys(Object(a),!0).forEach(function(n){_defineProperty(d,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(n){Object.defineProperty(d,n,Object.getOwnPropertyDescriptor(a,n))})}return d}function _defineProperty(d,f,a){return f in d?Object.defineProperty(d,f,{value:a,enumerable:!0,configurable:!0,writable:!0}):d[f]=a,d}function _slicedToArray(d,f){return _arrayWithHoles(d)||_iterableToArrayLimit(d,f)||_unsupportedIterableToArray(d,f)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray(d,f){if(d){if(typeof d=="string")return _arrayLikeToArray(d,f);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(d,f)}}function _arrayLikeToArray(d,f){(f==null||f>d.length)&&(f=d.length);for(var a=0,n=new Array(f);a<f;a++)n[a]=d[a];return n}function _iterableToArrayLimit(d,f){var a=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var n=[],l=!0,o=!1,s,h;try{for(a=a.call(d);!(l=(s=a.next()).done)&&(n.push(s.value),!(f&&n.length===f));l=!0);}catch(p){o=!0,h=p}finally{try{!l&&a.return!=null&&a.return()}finally{if(o)throw h}}return n}}function _arrayWithHoles(d){if(Array.isArray(d))return d}function _typeof(d){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},_typeof(d)}function builtInProcessor(entity,entryExports){var mod;switch(entity.$$__type){case"function":return eval(entity.$$__body.sourceCode);case"element":return mod=entity.$$__body.componentName.split(".").reduce(function(d,f){return d[f]},entryExports),mod===void 0?entity.$$__body.componentName:"_InternalPanelDoNotUseOrYouWillBeFired"in mod?mod._InternalPanelDoNotUseOrYouWillBeFired:mod}}function deepReplace(d,f){return Array.isArray(d)?d.map(function(a){return deepReplace(a,f)}):_typeof(d)==="object"&&(d==null?void 0:d.$$__type)==="element"?translatePresetToReact(d.$$__body,f):_typeof(d)==="object"&&Object.prototype.toString.call(d)==="[object Object]"?Object.entries(d).reduce(function(a,n){var l=_slicedToArray(n,2),o=l[0],s=l[1];return _objectSpread(_objectSpread({},a),{},_defineProperty({},o,deepReplace(s,f)))},{}):d}function translatePresetToReact(d,f){var a=d.props,n=d.size,l=f({$$__type:"element",$$__body:d});return React.createElement(l,deepReplace(_objectSpread(_objectSpread({},a),{},{style:_objectSpread(_objectSpread({},a.style),n)}),f))}var AtomRenderer=function d(f){var a=useSiteData(),n=a.entryExports;switch(f.type){case"COMPONENT":return translatePresetToReact(f.value,function(l){var o,s;return(o=(s=f.processor)===null||s===void 0?void 0:s.call(f,l,n))!==null&&o!==void 0?o:builtInProcessor(l,n)});default:return React.createElement(React.Fragment,null,f.type," atom is not supported.")}}},44738:function(d,f,a){"use strict";a.d(f,{D:function(){return l},W:function(){return o}});var n=a(93236),l=(0,n.createContext)({pkg:{},entryExports:{},demos:{},components:{},locales:[],themeConfig:{},loading:!1,setLoading:function(){}}),o=function(){return(0,n.useContext)(l)}},27648:function(d,f,a){"use strict";a.d(f,{b:function(){return x}});var n=a(67722),l=a(93236);function o(g,I){return z(g)||u(g,I)||h(g,I)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(g,I){if(g){if(typeof g=="string")return p(g,I);var M=Object.prototype.toString.call(g).slice(8,-1);if(M==="Object"&&g.constructor&&(M=g.constructor.name),M==="Map"||M==="Set")return Array.from(g);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return p(g,I)}}function p(g,I){(I==null||I>g.length)&&(I=g.length);for(var M=0,w=new Array(I);M<I;M++)w[M]=g[M];return w}function u(g,I){var M=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(M!=null){var w=[],C=!0,_=!1,H,b;try{for(M=M.call(g);!(C=(H=M.next()).done)&&(w.push(H.value),!(I&&w.length===I));C=!0);}catch(E){_=!0,b=E}finally{try{!C&&M.return!=null&&M.return()}finally{if(_)throw b}}return w}}function z(g){if(Array.isArray(g))return g}var x=function(){var I=(0,n.YB)(),M=(0,n.WF)(),w=M.locales,C=(0,l.useState)(function(){return w.find(function(b){var E=b.id;return E===I.locale})}),_=o(C,1),H=_[0];return H}},21643:function(d,f,a){"use strict";a.d(f,{AM:function(){return M},LI:function(){return w},M7:function(){return C},RX:function(){return I},qu:function(){return _}});var n=a(67722),l=a(93236),o=a(27648);function s(H){return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},s(H)}function h(H,b){return g(H)||x(H,b)||u(H,b)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(H,b){if(H){if(typeof H=="string")return z(H,b);var E=Object.prototype.toString.call(H).slice(8,-1);if(E==="Object"&&H.constructor&&(E=H.constructor.name),E==="Map"||E==="Set")return Array.from(H);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return z(H,b)}}function z(H,b){(b==null||b>H.length)&&(b=H.length);for(var E=0,L=new Array(b);E<b;E++)L[E]=H[E];return L}function x(H,b){var E=H==null?null:typeof Symbol!="undefined"&&H[Symbol.iterator]||H["@@iterator"];if(E!=null){var L=[],P=!0,S=!1,F,j;try{for(E=E.call(H);!(P=(F=E.next()).done)&&(L.push(F.value),!(b&&L.length===b));P=!0);}catch(J){S=!0,j=J}finally{try{!P&&E.return!=null&&E.return()}finally{if(S)throw j}}return L}}function g(H){if(Array.isArray(H))return H}var I=function(){var b=(0,n.YB)(),E=(0,n.Ov)(),L=E.routes,P=(0,n.WF)(),S=P.locales,F=(0,l.useState)(function(){var e1=S.slice().reverse();return Object.values(L).reduce(function(t1,X){var Q=e1.find(function(R){return"suffix"in R?X.path.endsWith(R.suffix):X.path.startsWith(R.base.slice(1))});return X.parentId==="DocLayout"&&Q.id===b.locale&&(t1[X.id]=X),t1},{})}),j=h(F,1),J=j[0];return J},M=function(b){var E=`/**
   * This is an auto-generated demo by dumi
   * if you think it is not working as expected,
   * please report the issue at
   * https://github.com/umijs/dumi/issues
   */`;return b.startsWith("18.")||b==="latest"?"".concat(E,`

  import React from 'react';
  import { createRoot } from "react-dom/client";
  import App from "./App";

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(<App />);`):"".concat(E,`

  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );`)},w=typeof window!="undefined"?l.useLayoutEffect:l.useEffect,C=function(){var b=(0,o.b)();return(0,l.useCallback)(function(E,L){return("order"in E&&"order"in L?E.order-L.order:0)||("link"in E&&"link"in L?E.link.split("/").length-L.link.split("/").length:0)||("path"in E&&"path"in L?E.path.split("/").length-L.path.split("/").length:0)||(E.title?E.title.localeCompare(L.title||"",b.id):-1)},[])},_=function(b,E,L){var P,S=L[E];switch(s(S)){case"object":b.title=S.title||b.title,b.order=(P=S.order)!==null&&P!==void 0?P:b.order;break;case"string":b.title=S||b.title;break;default:}return b}},62138:function(d,f,a){"use strict";a.r(f)},6233:function(d,f,a){"use strict";a.r(f)},87091:function(d,f,a){"use strict";a.r(f)},63311:function(d,f,a){"use strict";a.r(f)},72481:function(d,f,a){"use strict";a.r(f)},21233:function(d,f,a){"use strict";a.r(f)},86527:function(d,f,a){"use strict";a.r(f)},8787:function(d,f,a){"use strict";a.r(f)},45153:function(d,f,a){"use strict";a.r(f)},46172:function(d,f,a){"use strict";a.r(f)},18983:function(d,f,a){"use strict";a.r(f)},36035:function(d,f,a){"use strict";a.r(f)},60581:function(d,f,a){"use strict";a.d(f,{Il:function(){return o},Ov:function(){return s}});var n=a(93236),l=null,o=n.createContext({});function s(){return n.useContext(o)}function h(){var x=useLocation(),g=s(),I=g.clientRoutes,M=matchRoutes(I,x.pathname);return M||[]}function p(){var x,g=h().slice(-1),I=((x=g[0])===null||x===void 0?void 0:x.route)||{},M=I.element,w=_objectWithoutProperties(I,l);return w}function u(){var x=useRouteData(),g=s();return{data:g.serverLoaderData[x.route.id]}}function z(){var x=useRouteData(),g=s();return{data:g.clientLoaderData[x.route.id]}}},73643:function(d,f,a){"use strict";a.d(f,{Q:function(){return o},X:function(){return l}});var n=a(93236),l=n.createContext(void 0);function o(){return n.useContext(l)}},14978:function(d,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.getParameters=void 0;var n=a(37581);function l(s){return n.compressToBase64(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function o(s){return l(JSON.stringify(s))}f.getParameters=o},71401:function(d,f,a){"use strict";var n;n=!0,f.Z=void 0;var l=a(14978);f.Z=l.getParameters},874:function(d,f,a){"use strict";var n=a(16935),l={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function s(p){var u=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,u)}function h(p,u){var z,x,g,I,M,w,C=!1;u||(u={}),z=u.debug||!1;try{g=n(),I=document.createRange(),M=document.getSelection(),w=document.createElement("span"),w.textContent=p,w.ariaHidden="true",w.style.all="unset",w.style.position="fixed",w.style.top=0,w.style.clip="rect(0, 0, 0, 0)",w.style.whiteSpace="pre",w.style.webkitUserSelect="text",w.style.MozUserSelect="text",w.style.msUserSelect="text",w.style.userSelect="text",w.addEventListener("copy",function(H){if(H.stopPropagation(),u.format)if(H.preventDefault(),typeof H.clipboardData=="undefined"){z&&console.warn("unable to use e.clipboardData"),z&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=l[u.format]||l.default;window.clipboardData.setData(b,p)}else H.clipboardData.clearData(),H.clipboardData.setData(u.format,p);u.onCopy&&(H.preventDefault(),u.onCopy(H.clipboardData))}),document.body.appendChild(w),I.selectNodeContents(w),M.addRange(I);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");C=!0}catch(H){z&&console.error("unable to copy using execCommand: ",H),z&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(u.format||"text",p),u.onCopy&&u.onCopy(window.clipboardData),C=!0}catch(b){z&&console.error("unable to copy using clipboardData: ",b),z&&console.error("falling back to prompt"),x=s("message"in u?u.message:o),window.prompt(x,p)}}finally{M&&(typeof M.removeRange=="function"?M.removeRange(I):M.removeAllRanges()),w&&document.body.removeChild(w),g()}return C}d.exports=h},21209:function(d,f,a){var n=a(99476),l=a(82424),o=TypeError;d.exports=function(s){if(n(s))return s;throw o(l(s)+" is not a function")}},94956:function(d,f,a){var n=a(3437),l=a(82424),o=TypeError;d.exports=function(s){if(n(s))return s;throw o(l(s)+" is not a constructor")}},45640:function(d,f,a){var n=a(95722).has;d.exports=function(l){return n(l),l}},72137:function(d,f,a){var n=a(99476),l=String,o=TypeError;d.exports=function(s){if(typeof s=="object"||n(s))return s;throw o("Can't set "+l(s)+" as a prototype")}},27458:function(d,f,a){var n=a(67410).has;d.exports=function(l){return n(l),l}},4573:function(d,f,a){var n=a(3222).has;d.exports=function(l){return n(l),l}},24351:function(d,f,a){var n=a(82487).has;d.exports=function(l){return n(l),l}},39847:function(d,f,a){var n=a(42721),l=a(12992),o=a(79722),s=a(64264),h=a(36329),p=a(9591),u=p("asyncDispose"),z=p("dispose"),x=n([].push),g=function(M,w){return w=="async-dispose"&&h(M,u)||h(M,z)},I=function(M,w,C){return l(C||g(M,w),M)};d.exports=function(M,w,C,_){var H;if(_)s(w)?H=I(void 0,C,_):H=I(o(w),C,_);else{if(s(w))return;H=I(w,C)}x(M.stack,H)}},57415:function(d,f,a){var n=a(9591),l=a(14832),o=a(62886).f,s=n("unscopables"),h=Array.prototype;h[s]==null&&o(h,s,{configurable:!0,value:l(null)}),d.exports=function(p){h[s][p]=!0}},91372:function(d,f,a){var n=a(36915),l=TypeError;d.exports=function(o,s){if(n(s,o))return o;throw l("Incorrect invocation")}},79722:function(d,f,a){var n=a(98822),l=String,o=TypeError;d.exports=function(s){if(n(s))return s;throw o(l(s)+" is not an object")}},29738:function(d){d.exports=typeof ArrayBuffer!="undefined"&&typeof DataView!="undefined"},66129:function(d,f,a){var n=a(242);d.exports=n(function(){if(typeof ArrayBuffer=="function"){var l=new ArrayBuffer(8);Object.isExtensible(l)&&Object.defineProperty(l,"a",{value:8})}})},45133:function(d,f,a){"use strict";var n=a(29738),l=a(41737),o=a(38521),s=a(99476),h=a(98822),p=a(67781),u=a(24518),z=a(82424),x=a(84446),g=a(75001),I=a(73538),M=a(36915),w=a(60533),C=a(89555),_=a(9591),H=a(50216),b=a(27956),E=b.enforce,L=b.get,P=o.Int8Array,S=P&&P.prototype,F=o.Uint8ClampedArray,j=F&&F.prototype,J=P&&w(P),e1=S&&w(S),t1=Object.prototype,X=o.TypeError,Q=_("toStringTag"),R=H("TYPED_ARRAY_TAG"),f1="TypedArrayConstructor",a1=n&&!!C&&u(o.opera)!=="Opera",D=!1,Z,U,Y,N={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},W={BigInt64Array:8,BigUint64Array:8},z1=function(S0){if(!h(S0))return!1;var L0=u(S0);return L0==="DataView"||p(N,L0)||p(W,L0)},E1=function(C1){var S0=w(C1);if(h(S0)){var L0=L(S0);return L0&&p(L0,f1)?L0[f1]:E1(S0)}},w1=function(C1){if(!h(C1))return!1;var S0=u(C1);return p(N,S0)||p(W,S0)},c1=function(C1){if(w1(C1))return C1;throw X("Target is not a typed array")},G1=function(C1){if(s(C1)&&(!C||M(J,C1)))return C1;throw X(z(C1)+" is not a typed array constructor")},B1=function(C1,S0,L0,Q0){if(l){if(L0)for(var D0 in N){var z5=o[D0];if(z5&&p(z5.prototype,C1))try{delete z5.prototype[C1]}catch(g5){try{z5.prototype[C1]=S0}catch(o0){}}}(!e1[C1]||L0)&&g(e1,C1,L0?S0:a1&&S[C1]||S0,Q0)}},S1=function(C1,S0,L0){var Q0,D0;if(l){if(C){if(L0){for(Q0 in N)if(D0=o[Q0],D0&&p(D0,C1))try{delete D0[C1]}catch(z5){}}if(!J[C1]||L0)try{return g(J,C1,L0?S0:a1&&J[C1]||S0)}catch(z5){}else return}for(Q0 in N)D0=o[Q0],D0&&(!D0[C1]||L0)&&g(D0,C1,S0)}};for(Z in N)U=o[Z],Y=U&&U.prototype,Y?E(Y)[f1]=U:a1=!1;for(Z in W)U=o[Z],Y=U&&U.prototype,Y&&(E(Y)[f1]=U);if((!a1||!s(J)||J===Function.prototype)&&(J=function(){throw X("Incorrect invocation")},a1))for(Z in N)o[Z]&&C(o[Z],J);if((!a1||!e1||e1===t1)&&(e1=J.prototype,a1))for(Z in N)o[Z]&&C(o[Z].prototype,e1);if(a1&&w(j)!==e1&&C(j,e1),l&&!p(e1,Q)){D=!0,I(e1,Q,{configurable:!0,get:function(){return h(this)?this[R]:void 0}});for(Z in N)o[Z]&&x(o[Z],R,Z)}d.exports={NATIVE_ARRAY_BUFFER_VIEWS:a1,TYPED_ARRAY_TAG:D&&R,aTypedArray:c1,aTypedArrayConstructor:G1,exportTypedArrayMethod:B1,exportTypedArrayStaticMethod:S1,getTypedArrayConstructor:E1,isView:z1,isTypedArray:w1,TypedArray:J,TypedArrayPrototype:e1}},24706:function(d,f,a){"use strict";var n=a(12992),l=a(42721),o=a(17311),s=a(3437),h=a(56275),p=a(48429),u=a(44059),z=a(62666),x=a(36329),g=a(59439),I=a(44660),M=a(9591),w=a(24758),C=a(18142).toArray,_=M("asyncIterator"),H=l(g("Array").values),b=l(H([]).next),E=function(){return new L(this)},L=function(P){this.iterator=H(P)};L.prototype.next=function(){return b(this.iterator)},d.exports=function(S){var F=this,j=arguments.length,J=j>1?arguments[1]:void 0,e1=j>2?arguments[2]:void 0;return new(I("Promise"))(function(t1){var X=o(S);J!==void 0&&(J=n(J,e1));var Q=x(X,_),R=Q?void 0:z(X)||E,f1=s(F)?new F:[],a1=Q?h(X,Q):new w(u(p(X,R)));t1(C(a1,J,f1))})}},1715:function(d,f,a){var n=a(46831);d.exports=function(l,o){for(var s=0,h=n(o),p=new l(h);h>s;)p[s]=o[s++];return p}},24793:function(d,f,a){"use strict";var n=a(12992),l=a(42721),o=a(84551),s=a(17311),h=a(46831),p=a(95722),u=p.Map,z=p.get,x=p.has,g=p.set,I=l([].push);d.exports=function(w){for(var C=s(this),_=o(C),H=n(w,arguments.length>1?arguments[1]:void 0),b=new u,E=h(_),L=0,P,S;E>L;L++)S=_[L],P=H(S,L,C),x(b,P)?I(z(b,P),S):g(b,P,[S]);return b}},46792:function(d,f,a){var n=a(12992),l=a(42721),o=a(84551),s=a(17311),h=a(82098),p=a(46831),u=a(14832),z=a(1715),x=Array,g=l([].push);d.exports=function(I,M,w,C){for(var _=s(I),H=o(_),b=n(M,w),E=u(null),L=p(H),P=0,S,F,j;L>P;P++)j=H[P],F=h(b(j,P,_)),F in E?g(E[F],j):E[F]=[j];if(C&&(S=C(_),S!==x))for(F in E)E[F]=z(S,E[F]);return E}},31851:function(d,f,a){var n=a(88378),l=a(99928),o=a(46831),s=function(h){return function(p,u,z){var x=n(p),g=o(x),I=l(z,g),M;if(h&&u!=u){for(;g>I;)if(M=x[I++],M!=M)return!0}else for(;g>I;I++)if((h||I in x)&&x[I]===u)return h||I||0;return!h&&-1}};d.exports={includes:s(!0),indexOf:s(!1)}},91321:function(d,f,a){var n=a(12992),l=a(84551),o=a(17311),s=a(46831),h=function(p){var u=p==1;return function(z,x,g){for(var I=o(z),M=l(I),w=n(x,g),C=s(M),_,H;C-- >0;)if(_=M[C],H=w(_,C,I),H)switch(p){case 0:return _;case 1:return C}return u?-1:void 0}};d.exports={findLast:h(0),findLastIndex:h(1)}},20111:function(d,f,a){var n=a(12992),l=a(42721),o=a(84551),s=a(17311),h=a(46831),p=a(16005),u=l([].push),z=function(x){var g=x==1,I=x==2,M=x==3,w=x==4,C=x==6,_=x==7,H=x==5||C;return function(b,E,L,P){for(var S=s(b),F=o(S),j=n(E,L),J=h(F),e1=0,t1=P||p,X=g?t1(b,J):I||_?t1(b,0):void 0,Q,R;J>e1;e1++)if((H||e1 in F)&&(Q=F[e1],R=j(Q,e1,S),x))if(g)X[e1]=R;else if(R)switch(x){case 3:return!0;case 5:return Q;case 6:return e1;case 2:u(X,Q)}else switch(x){case 4:return!1;case 7:u(X,Q)}return C?-1:M||w?w:X}};d.exports={forEach:z(0),map:z(1),filter:z(2),some:z(3),every:z(4),find:z(5),findIndex:z(6),filterReject:z(7)}},55578:function(d,f,a){"use strict";var n=a(242);d.exports=function(l,o){var s=[][l];return!!s&&n(function(){s.call(null,o||function(){return 1},1)})}},31484:function(d,f,a){var n=a(21209),l=a(17311),o=a(84551),s=a(46831),h=TypeError,p=function(u){return function(z,x,g,I){n(x);var M=l(z),w=o(M),C=s(M),_=u?C-1:0,H=u?-1:1;if(g<2)for(;;){if(_ in w){I=w[_],_+=H;break}if(_+=H,u?_<0:C<=_)throw h("Reduce of empty array with no initial value")}for(;u?_>=0:C>_;_+=H)_ in w&&(I=x(I,w[_],_,M));return I}};d.exports={left:p(!1),right:p(!0)}},32936:function(d,f,a){"use strict";var n=a(41737),l=a(53326),o=TypeError,s=Object.getOwnPropertyDescriptor,h=n&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(p){return p instanceof TypeError}}();d.exports=h?function(p,u){if(l(p)&&!s(p,"length").writable)throw o("Cannot set read only .length");return p.length=u}:function(p,u){return p.length=u}},70582:function(d,f,a){var n=a(99928),l=a(46831),o=a(40053),s=Array,h=Math.max;d.exports=function(p,u,z){for(var x=l(p),g=n(u,x),I=n(z===void 0?x:z,x),M=s(h(I-g,0)),w=0;g<I;g++,w++)o(M,w,p[g]);return M.length=w,M}},70489:function(d,f,a){var n=a(42721);d.exports=n([].slice)},68310:function(d,f,a){var n=a(53326),l=a(3437),o=a(98822),s=a(9591),h=s("species"),p=Array;d.exports=function(u){var z;return n(u)&&(z=u.constructor,l(z)&&(z===p||n(z.prototype))?z=void 0:o(z)&&(z=z[h],z===null&&(z=void 0))),z===void 0?p:z}},16005:function(d,f,a){var n=a(68310);d.exports=function(l,o){return new(n(l))(o===0?0:o)}},53584:function(d,f,a){var n=a(46831);d.exports=function(l,o){for(var s=n(l),h=new o(s),p=0;p<s;p++)h[p]=l[s-p-1];return h}},94763:function(d,f,a){"use strict";var n=a(42721),l=a(21209),o=a(64264),s=a(46831),h=a(17311),p=a(95722),u=a(79298),z=p.Map,x=p.has,g=p.set,I=n([].push);d.exports=function(w){var C=h(this),_=s(C),H=[],b=new z,E=o(w)?function(F){return F}:l(w),L,P,S;for(L=0;L<_;L++)P=C[L],S=E(P),x(b,S)||g(b,S,P);return u(b,function(F){I(H,F)}),H}},77634:function(d,f,a){var n=a(46831),l=a(76628),o=RangeError;d.exports=function(s,h,p,u){var z=n(s),x=l(p),g=x<0?z+x:x;if(g>=z||g<0)throw o("Incorrect index");for(var I=new h(z),M=0;M<z;M++)I[M]=M===g?u:s[M];return I}},24758:function(d,f,a){"use strict";var n=a(61217),l=a(79722),o=a(14832),s=a(36329),h=a(82709),p=a(27956),u=a(44660),z=a(83033),x=a(84810),g=u("Promise"),I="AsyncFromSyncIterator",M=p.set,w=p.getterFor(I),C=function(H,b,E){var L=H.done;g.resolve(H.value).then(function(P){b(x(P,L))},E)},_=function(b){b.type=I,M(this,b)};_.prototype=h(o(z),{next:function(){var b=w(this);return new g(function(E,L){var P=l(n(b.next,b.iterator));C(P,E,L)})},return:function(){var H=w(this).iterator;return new g(function(b,E){var L=s(H,"return");if(L===void 0)return b(x(void 0,!0));var P=l(n(L,H));C(P,b,E)})}}),d.exports=_},19969:function(d,f,a){var n=a(61217),l=a(44660),o=a(36329);d.exports=function(s,h,p,u){try{var z=o(s,"return");if(z)return l("Promise").resolve(n(z,s)).then(function(){h(p)},function(x){u(x)})}catch(x){return u(x)}h(p)}},87890:function(d,f,a){"use strict";var n=a(61217),l=a(62738),o=a(79722),s=a(14832),h=a(84446),p=a(82709),u=a(9591),z=a(27956),x=a(44660),g=a(36329),I=a(83033),M=a(84810),w=a(58530),C=x("Promise"),_=u("toStringTag"),H="AsyncIteratorHelper",b="WrapForValidAsyncIterator",E=z.set,L=function(F){var j=!F,J=z.getterFor(F?b:H),e1=function(t1){var X=l(function(){return J(t1)}),Q=X.error,R=X.value;return Q||j&&R.done?{exit:!0,value:Q?C.reject(R):C.resolve(M(void 0,!0))}:{exit:!1,value:R}};return p(s(I),{next:function(){var X=e1(this),Q=X.value;if(X.exit)return Q;var R=l(function(){return o(Q.nextHandler(C))}),f1=R.error,a1=R.value;return f1&&(Q.done=!0),f1?C.reject(a1):C.resolve(a1)},return:function(){var t1=e1(this),X=t1.value;if(t1.exit)return X;X.done=!0;var Q=X.iterator,R,f1,a1=l(function(){if(X.inner)try{w(X.inner.iterator,"normal")}catch(D){return w(Q,"throw",D)}return g(Q,"return")});return R=f1=a1.value,a1.error?C.reject(f1):R===void 0?C.resolve(M(void 0,!0)):(a1=l(function(){return n(R,Q)}),f1=a1.value,a1.error?C.reject(f1):F?C.resolve(f1):C.resolve(f1).then(function(D){return o(D),M(void 0,!0)}))}})},P=L(!0),S=L(!1);h(S,_,"Async Iterator Helper"),d.exports=function(F,j){var J=function(t1,X){X?(X.iterator=t1.iterator,X.next=t1.next):X=t1,X.type=j?b:H,X.nextHandler=F,X.counter=0,X.done=!1,E(this,X)};return J.prototype=j?P:S,J}},94317:function(d,f,a){"use strict";var n=a(61217),l=a(14291),o=function(s,h){return[h,s]};d.exports=function(){return n(l,this,o)}},18142:function(d,f,a){"use strict";var n=a(61217),l=a(21209),o=a(79722),s=a(98822),h=a(3802),p=a(44660),u=a(44059),z=a(19969),x=function(g){var I=g==0,M=g==1,w=g==2,C=g==3;return function(_,H,b){var E=u(_),L=p("Promise"),P=E.iterator,S=E.next,F=0,j=H!==void 0;return(j||!I)&&l(H),new L(function(J,e1){var t1=function(Q){z(P,e1,Q,e1)},X=function(){try{if(j)try{h(F)}catch(Q){t1(Q)}L.resolve(o(n(S,P))).then(function(Q){try{if(o(Q).done)I?(b.length=F,J(b)):J(C?!1:w||void 0);else{var R=Q.value;try{if(j){var f1=H(R,F),a1=function(D){if(M)X();else if(w)D?X():z(P,J,!1,e1);else if(I)try{b[F++]=D,X()}catch(Z){t1(Z)}else D?z(P,J,C||R,e1):X()};s(f1)?L.resolve(f1).then(a1,t1):a1(f1)}else b[F++]=R,X()}catch(D){t1(D)}}}catch(D){e1(D)}},e1)}catch(Q){e1(Q)}};X()})}};d.exports={toArray:x(0),forEach:x(1),every:x(2),some:x(3),find:x(4)}},14291:function(d,f,a){"use strict";var n=a(61217),l=a(21209),o=a(79722),s=a(98822),h=a(44059),p=a(87890),u=a(84810),z=a(19969),x=p(function(g){var I=this,M=I.iterator,w=I.mapper;return new g(function(C,_){var H=function(E){I.done=!0,_(E)},b=function(E){z(M,H,E,H)};g.resolve(o(n(I.next,M))).then(function(E){try{if(o(E).done)I.done=!0,C(u(void 0,!0));else{var L=E.value;try{var P=w(L,I.counter++),S=function(F){C(u(F,!1))};s(P)?g.resolve(P).then(S,b):S(P)}catch(F){b(F)}}}catch(F){H(F)}},H)})});d.exports=function(I){return new x(h(this),{mapper:l(I)})}},83033:function(d,f,a){var n=a(38521),l=a(26495),o=a(99476),s=a(14832),h=a(60533),p=a(75001),u=a(9591),z=a(62761),x="USE_FUNCTION_CONSTRUCTOR",g=u("asyncIterator"),I=n.AsyncIterator,M=l.AsyncIteratorPrototype,w,C;if(M)w=M;else if(o(I))w=I.prototype;else if(l[x]||n[x])try{C=h(h(h(Function("return async function*(){}()")()))),h(C)===Object.prototype&&(w=C)}catch(_){}w?z&&(w=s(w)):w={},o(w[g])||p(w,g,function(){return this}),d.exports=w},25475:function(d,f,a){var n=a(61217),l=a(87890);d.exports=l(function(){return n(this.next,this.iterator)},!0)},76854:function(d,f,a){var n=a(79722),l=a(58530);d.exports=function(o,s,h,p){try{return p?s(n(h)[0],h[1]):s(h)}catch(u){l(o,"throw",u)}}},80121:function(d,f,a){var n=a(9591),l=n("iterator"),o=!1;try{var s=0,h={next:function(){return{done:!!s++}},return:function(){o=!0}};h[l]=function(){return this},Array.from(h,function(){throw 2})}catch(p){}d.exports=function(p,u){if(!u&&!o)return!1;var z=!1;try{var x={};x[l]=function(){return{next:function(){return{done:z=!0}}}},p(x)}catch(g){}return z}},11995:function(d,f,a){var n=a(42721),l=n({}.toString),o=n("".slice);d.exports=function(s){return o(l(s),8,-1)}},24518:function(d,f,a){var n=a(10303),l=a(99476),o=a(11995),s=a(9591),h=s("toStringTag"),p=Object,u=o(function(){return arguments}())=="Arguments",z=function(x,g){try{return x[g]}catch(I){}};d.exports=n?o:function(x){var g,I,M;return x===void 0?"Undefined":x===null?"Null":typeof(I=z(g=p(x),h))=="string"?I:u?o(g):(M=o(g))=="Object"&&l(g.callee)?"Arguments":M}},30786:function(d,f,a){"use strict";var n=a(12992),l=a(61217),o=a(21209),s=a(94956),h=a(64264),p=a(10917),u=[].push;d.exports=function(x){var g=arguments.length,I=g>1?arguments[1]:void 0,M,w,C,_;return s(this),M=I!==void 0,M&&o(I),h(x)?new this:(w=[],M?(C=0,_=n(I,g>2?arguments[2]:void 0),p(x,function(H){l(u,w,_(H,C++))})):p(x,u,{that:w}),new this(w))}},73083:function(d,f,a){"use strict";var n=a(70489);d.exports=function(){return new this(n(arguments))}},46590:function(d,f,a){"use strict";var n=a(14832),l=a(73538),o=a(82709),s=a(12992),h=a(91372),p=a(64264),u=a(10917),z=a(36436),x=a(84810),g=a(32520),I=a(41737),M=a(30436).fastKey,w=a(27956),C=w.set,_=w.getterFor;d.exports={getConstructor:function(H,b,E,L){var P=H(function(e1,t1){h(e1,S),C(e1,{type:b,index:n(null),first:void 0,last:void 0,size:0}),I||(e1.size=0),p(t1)||u(t1,e1[L],{that:e1,AS_ENTRIES:E})}),S=P.prototype,F=_(b),j=function(e1,t1,X){var Q=F(e1),R=J(e1,t1),f1,a1;return R?R.value=X:(Q.last=R={index:a1=M(t1,!0),key:t1,value:X,previous:f1=Q.last,next:void 0,removed:!1},Q.first||(Q.first=R),f1&&(f1.next=R),I?Q.size++:e1.size++,a1!=="F"&&(Q.index[a1]=R)),e1},J=function(e1,t1){var X=F(e1),Q=M(t1),R;if(Q!=="F")return X.index[Q];for(R=X.first;R;R=R.next)if(R.key==t1)return R};return o(S,{clear:function(){for(var t1=this,X=F(t1),Q=X.index,R=X.first;R;)R.removed=!0,R.previous&&(R.previous=R.previous.next=void 0),delete Q[R.index],R=R.next;X.first=X.last=void 0,I?X.size=0:t1.size=0},delete:function(e1){var t1=this,X=F(t1),Q=J(t1,e1);if(Q){var R=Q.next,f1=Q.previous;delete X.index[Q.index],Q.removed=!0,f1&&(f1.next=R),R&&(R.previous=f1),X.first==Q&&(X.first=R),X.last==Q&&(X.last=f1),I?X.size--:t1.size--}return!!Q},forEach:function(t1){for(var X=F(this),Q=s(t1,arguments.length>1?arguments[1]:void 0),R;R=R?R.next:X.first;)for(Q(R.value,R.key,this);R&&R.removed;)R=R.previous},has:function(t1){return!!J(this,t1)}}),o(S,E?{get:function(t1){var X=J(this,t1);return X&&X.value},set:function(t1,X){return j(this,t1===0?0:t1,X)}}:{add:function(t1){return j(this,t1=t1===0?0:t1,t1)}}),I&&l(S,"size",{configurable:!0,get:function(){return F(this).size}}),P},setStrong:function(H,b,E){var L=b+" Iterator",P=_(b),S=_(L);z(H,b,function(F,j){C(this,{type:L,target:F,state:P(F),kind:j,last:void 0})},function(){for(var F=S(this),j=F.kind,J=F.last;J&&J.removed;)J=J.previous;return!F.target||!(F.last=J=J?J.next:F.state.first)?(F.target=void 0,x(void 0,!0)):j=="keys"?x(J.key,!1):j=="values"?x(J.value,!1):x([J.key,J.value],!1)},E?"entries":"values",!E,!0),g(b)}}},72131:function(d,f,a){"use strict";var n=a(42721),l=a(82709),o=a(30436).getWeakData,s=a(91372),h=a(79722),p=a(64264),u=a(98822),z=a(10917),x=a(20111),g=a(67781),I=a(27956),M=I.set,w=I.getterFor,C=x.find,_=x.findIndex,H=n([].splice),b=0,E=function(S){return S.frozen||(S.frozen=new L)},L=function(){this.entries=[]},P=function(S,F){return C(S.entries,function(j){return j[0]===F})};L.prototype={get:function(S){var F=P(this,S);if(F)return F[1]},has:function(S){return!!P(this,S)},set:function(S,F){var j=P(this,S);j?j[1]=F:this.entries.push([S,F])},delete:function(S){var F=_(this.entries,function(j){return j[0]===S});return~F&&H(this.entries,F,1),!!~F}},d.exports={getConstructor:function(S,F,j,J){var e1=S(function(R,f1){s(R,t1),M(R,{type:F,id:b++,frozen:void 0}),p(f1)||z(f1,R[J],{that:R,AS_ENTRIES:j})}),t1=e1.prototype,X=w(F),Q=function(R,f1,a1){var D=X(R),Z=o(h(f1),!0);return Z===!0?E(D).set(f1,a1):Z[D.id]=a1,R};return l(t1,{delete:function(R){var f1=X(this);if(!u(R))return!1;var a1=o(R);return a1===!0?E(f1).delete(R):a1&&g(a1,f1.id)&&delete a1[f1.id]},has:function(f1){var a1=X(this);if(!u(f1))return!1;var D=o(f1);return D===!0?E(a1).has(f1):D&&g(D,a1.id)}}),l(t1,j?{get:function(f1){var a1=X(this);if(u(f1)){var D=o(f1);return D===!0?E(a1).get(f1):D?D[a1.id]:void 0}},set:function(f1,a1){return Q(this,f1,a1)}}:{add:function(f1){return Q(this,f1,!0)}}),e1}}},8651:function(d,f,a){"use strict";var n=a(79053),l=a(38521),o=a(42721),s=a(34180),h=a(75001),p=a(30436),u=a(10917),z=a(91372),x=a(99476),g=a(64264),I=a(98822),M=a(242),w=a(80121),C=a(81404),_=a(2707);d.exports=function(H,b,E){var L=H.indexOf("Map")!==-1,P=H.indexOf("Weak")!==-1,S=L?"set":"add",F=l[H],j=F&&F.prototype,J=F,e1={},t1=function(Z){var U=o(j[Z]);h(j,Z,Z=="add"?function(N){return U(this,N===0?0:N),this}:Z=="delete"?function(Y){return P&&!I(Y)?!1:U(this,Y===0?0:Y)}:Z=="get"?function(N){return P&&!I(N)?void 0:U(this,N===0?0:N)}:Z=="has"?function(N){return P&&!I(N)?!1:U(this,N===0?0:N)}:function(N,W){return U(this,N===0?0:N,W),this})},X=s(H,!x(F)||!(P||j.forEach&&!M(function(){new F().entries().next()})));if(X)J=E.getConstructor(b,H,L,S),p.enable();else if(s(H,!0)){var Q=new J,R=Q[S](P?{}:-0,1)!=Q,f1=M(function(){Q.has(1)}),a1=w(function(Z){new F(Z)}),D=!P&&M(function(){for(var Z=new F,U=5;U--;)Z[S](U,U);return!Z.has(-0)});a1||(J=b(function(Z,U){z(Z,j);var Y=_(new F,Z,J);return g(U)||u(U,Y[S],{that:Y,AS_ENTRIES:L}),Y}),J.prototype=j,j.constructor=J),(f1||D)&&(t1("delete"),t1("has"),L&&t1("get")),(D||R)&&t1(S),P&&j.clear&&delete j.clear}return e1[H]=J,n({global:!0,constructor:!0,forced:J!=F},e1),C(J,H),P||E.setStrong(J,H,L),J}},97810:function(d,f,a){a(28541),a(37684);var n=a(44660),l=a(14832),o=a(98822),s=Object,h=TypeError,p=n("Map"),u=n("WeakMap"),z=function(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=l(null)};z.prototype.get=function(g,I){return this[g]||(this[g]=I())},z.prototype.next=function(g,I,M){var w=M?this.objectsByIndex[g]||(this.objectsByIndex[g]=new u):this.primitives||(this.primitives=new p),C=w.get(I);return C||w.set(I,C=new z),C};var x=new z;d.exports=function(){var g=x,I=arguments.length,M,w;for(M=0;M<I;M++)o(w=arguments[M])&&(g=g.next(M,w,!0));if(this===s&&g===x)throw h("Composite keys must contain a non-primitive component");for(M=0;M<I;M++)o(w=arguments[M])||(g=g.next(M,w,!1));return g}},10315:function(d,f,a){var n=a(67781),l=a(42198),o=a(98999),s=a(62886);d.exports=function(h,p,u){for(var z=l(p),x=s.f,g=o.f,I=0;I<z.length;I++){var M=z[I];!n(h,M)&&!(u&&n(u,M))&&x(h,M,g(p,M))}}},44607:function(d,f,a){var n=a(242);d.exports=!n(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},84810:function(d){d.exports=function(f,a){return{value:f,done:a}}},84446:function(d,f,a){var n=a(41737),l=a(62886),o=a(38382);d.exports=n?function(s,h,p){return l.f(s,h,o(1,p))}:function(s,h,p){return s[h]=p,s}},38382:function(d){d.exports=function(f,a){return{enumerable:!(f&1),configurable:!(f&2),writable:!(f&4),value:a}}},40053:function(d,f,a){"use strict";var n=a(82098),l=a(62886),o=a(38382);d.exports=function(s,h,p){var u=n(h);u in s?l.f(s,u,o(0,p)):s[u]=p}},73538:function(d,f,a){var n=a(71784),l=a(62886);d.exports=function(o,s,h){return h.get&&n(h.get,s,{getter:!0}),h.set&&n(h.set,s,{setter:!0}),l.f(o,s,h)}},75001:function(d,f,a){var n=a(99476),l=a(62886),o=a(71784),s=a(80542);d.exports=function(h,p,u,z){z||(z={});var x=z.enumerable,g=z.name!==void 0?z.name:p;if(n(u)&&o(u,g,z),z.global)x?h[p]=u:s(p,u);else{try{z.unsafe?h[p]&&(x=!0):delete h[p]}catch(I){}x?h[p]=u:l.f(h,p,{value:u,enumerable:!1,configurable:!z.nonConfigurable,writable:!z.nonWritable})}return h}},82709:function(d,f,a){var n=a(75001);d.exports=function(l,o,s){for(var h in o)n(l,h,o[h],s);return l}},80542:function(d,f,a){var n=a(38521),l=Object.defineProperty;d.exports=function(o,s){try{l(n,o,{value:s,configurable:!0,writable:!0})}catch(h){n[o]=s}return s}},41737:function(d,f,a){var n=a(242);d.exports=!n(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},49274:function(d){var f=typeof document=="object"&&document.all,a=typeof f=="undefined"&&f!==void 0;d.exports={all:f,IS_HTMLDDA:a}},50398:function(d,f,a){var n=a(38521),l=a(98822),o=n.document,s=l(o)&&l(o.createElement);d.exports=function(h){return s?o.createElement(h):{}}},3802:function(d){var f=TypeError,a=9007199254740991;d.exports=function(n){if(n>a)throw f("Maximum allowed index exceeded");return n}},76168:function(d){d.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},30756:function(d,f,a){var n=a(73677),l=a(35606);d.exports=!n&&!l&&typeof window=="object"&&typeof document=="object"},89369:function(d){d.exports=typeof Bun=="function"&&Bun&&typeof Bun.version=="string"},73677:function(d){d.exports=typeof Deno=="object"&&Deno&&typeof Deno.version=="object"},23126:function(d,f,a){var n=a(58158);d.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},35606:function(d,f,a){var n=a(14224),l=a(11995);d.exports=typeof n!="undefined"&&l(n)=="process"},58158:function(d){d.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""},59476:function(d,f,a){var n=a(38521),l=a(58158),o=n.process,s=n.Deno,h=o&&o.versions||s&&s.version,p=h&&h.v8,u,z;p&&(u=p.split("."),z=u[0]>0&&u[0]<4?1:+(u[0]+u[1])),!z&&l&&(u=l.match(/Edge\/(\d+)/),(!u||u[1]>=74)&&(u=l.match(/Chrome\/(\d+)/),u&&(z=+u[1]))),d.exports=z},59439:function(d,f,a){var n=a(38521);d.exports=function(l){return n[l].prototype}},91222:function(d){d.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},63354:function(d,f,a){var n=a(42721),l=Error,o=n("".replace),s=function(u){return String(l(u).stack)}("zxcasd"),h=/\n\s*at [^:]*:[^\n]*/,p=h.test(s);d.exports=function(u,z){if(p&&typeof u=="string"&&!l.prepareStackTrace)for(;z--;)u=o(u,h,"");return u}},38247:function(d,f,a){var n=a(84446),l=a(63354),o=a(89121),s=Error.captureStackTrace;d.exports=function(h,p,u,z){o&&(s?s(h,p):n(h,"stack",l(u,z)))}},89121:function(d,f,a){var n=a(242),l=a(38382);d.exports=!n(function(){var o=Error("a");return"stack"in o?(Object.defineProperty(o,"stack",l(1,7)),o.stack!==7):!0})},79053:function(d,f,a){var n=a(38521),l=a(98999).f,o=a(84446),s=a(75001),h=a(80542),p=a(10315),u=a(34180);d.exports=function(z,x){var g=z.target,I=z.global,M=z.stat,w,C,_,H,b,E;if(I?C=n:M?C=n[g]||h(g,{}):C=(n[g]||{}).prototype,C)for(_ in x){if(b=x[_],z.dontCallGetSet?(E=l(C,_),H=E&&E.value):H=C[_],w=u(I?_:g+(M?".":"#")+_,z.forced),!w&&H!==void 0){if(typeof b==typeof H)continue;p(b,H)}(z.sham||H&&H.sham)&&o(b,"sham",!0),s(C,_,b,z)}}},242:function(d){d.exports=function(f){try{return!!f()}catch(a){return!0}}},98170:function(d,f,a){var n=a(242);d.exports=!n(function(){return Object.isExtensible(Object.preventExtensions({}))})},9266:function(d,f,a){var n=a(62768),l=Function.prototype,o=l.apply,s=l.call;d.exports=typeof Reflect=="object"&&Reflect.apply||(n?s.bind(o):function(){return s.apply(o,arguments)})},12992:function(d,f,a){var n=a(66474),l=a(21209),o=a(62768),s=n(n.bind);d.exports=function(h,p){return l(h),p===void 0?h:o?s(h,p):function(){return h.apply(p,arguments)}}},62768:function(d,f,a){var n=a(242);d.exports=!n(function(){var l=function(){}.bind();return typeof l!="function"||l.hasOwnProperty("prototype")})},61217:function(d,f,a){var n=a(62768),l=Function.prototype.call;d.exports=n?l.bind(l):function(){return l.apply(l,arguments)}},51857:function(d,f,a){"use strict";var n=a(42721),l=a(21209);d.exports=function(){return n(l(this))}},5114:function(d,f,a){var n=a(41737),l=a(67781),o=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,h=l(o,"name"),p=h&&function(){}.name==="something",u=h&&(!n||n&&s(o,"name").configurable);d.exports={EXISTS:h,PROPER:p,CONFIGURABLE:u}},29472:function(d,f,a){var n=a(42721),l=a(21209);d.exports=function(o,s,h){try{return n(l(Object.getOwnPropertyDescriptor(o,s)[h]))}catch(p){}}},66474:function(d,f,a){var n=a(11995),l=a(42721);d.exports=function(o){if(n(o)==="Function")return l(o)}},42721:function(d,f,a){var n=a(62768),l=Function.prototype,o=l.call,s=n&&l.bind.bind(o,o);d.exports=n?s:function(h){return function(){return o.apply(h,arguments)}}},43517:function(d,f,a){var n=a(61217),l=a(99476),o=a(79722),s=a(44059),h=a(62666),p=a(36329),u=a(9591),z=a(24758),x=u("asyncIterator");d.exports=function(I){var M=o(I),w=!0,C=p(M,x),_;return l(C)||(C=h(M),w=!1),l(C)?_=n(C,M):(_=M,w=!0),o(_),s(w?_:new z(s(_)))}},56275:function(d,f,a){var n=a(61217),l=a(24758),o=a(79722),s=a(48429),h=a(44059),p=a(36329),u=a(9591),z=u("asyncIterator");d.exports=function(x,g){var I=arguments.length<2?p(x,z):g;return I?o(n(I,x)):new l(h(s(x)))}},44660:function(d,f,a){var n=a(38521),l=a(99476),o=function(s){return l(s)?s:void 0};d.exports=function(s,h){return arguments.length<2?o(n[s]):n[s]&&n[s][h]}},44059:function(d,f,a){var n=a(21209),l=a(79722);d.exports=function(o){return{iterator:o,next:n(l(o).next)}}},44880:function(d,f,a){var n=a(61217),l=a(99476),o=a(79722),s=a(44059),h=a(62666);d.exports=function(p){var u=o(p),z=h(u);return s(o(l(z)?n(z,u):u))}},62666:function(d,f,a){var n=a(24518),l=a(36329),o=a(64264),s=a(76939),h=a(9591),p=h("iterator");d.exports=function(u){if(!o(u))return l(u,p)||l(u,"@@iterator")||s[n(u)]}},48429:function(d,f,a){var n=a(61217),l=a(21209),o=a(79722),s=a(82424),h=a(62666),p=TypeError;d.exports=function(u,z){var x=arguments.length<2?h(u):z;if(l(x))return o(n(x,u));throw p(s(u)+" is not iterable")}},36329:function(d,f,a){var n=a(21209),l=a(64264);d.exports=function(o,s){var h=o[s];return l(h)?void 0:n(h)}},53487:function(d,f,a){var n=a(21209),l=a(79722),o=a(61217),s=a(76628),h=TypeError,p=Math.max,u=function(z,x,g,I){this.set=z,this.size=x,this.has=g,this.keys=I};u.prototype={getIterator:function(){return l(o(this.keys,this.set))},includes:function(z){return o(this.has,this.set,z)}},d.exports=function(z){l(z);var x=+z.size;if(x!=x)throw h("Invalid size");return new u(z,p(s(x),0),n(z.has),n(z.keys))}},14604:function(d,f,a){var n=a(42721),l=a(17311),o=Math.floor,s=n("".charAt),h=n("".replace),p=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,z=/\$([$&'`]|\d{1,2})/g;d.exports=function(x,g,I,M,w,C){var _=I+x.length,H=M.length,b=z;return w!==void 0&&(w=l(w),b=u),h(C,b,function(E,L){var P;switch(s(L,0)){case"$":return"$";case"&":return x;case"`":return p(g,0,I);case"'":return p(g,_);case"<":P=w[p(L,1,-1)];break;default:var S=+L;if(S===0)return E;if(S>H){var F=o(S/10);return F===0?E:F<=H?M[F-1]===void 0?s(L,1):M[F-1]+s(L,1):E}P=M[S-1]}return P===void 0?"":P})}},38521:function(d,f,a){var n=function(l){return l&&l.Math==Math&&l};d.exports=n(typeof globalThis=="object"&&globalThis)||n(typeof window=="object"&&window)||n(typeof self=="object"&&self)||n(typeof a.g=="object"&&a.g)||function(){return this}()||Function("return this")()},67781:function(d,f,a){var n=a(42721),l=a(17311),o=n({}.hasOwnProperty);d.exports=Object.hasOwn||function(h,p){return o(l(h),p)}},86743:function(d){d.exports={}},30129:function(d){d.exports=function(f,a){try{arguments.length==1?console.error(f):console.error(f,a)}catch(n){}}},2e3:function(d,f,a){var n=a(44660);d.exports=n("document","documentElement")},4707:function(d,f,a){var n=a(41737),l=a(242),o=a(50398);d.exports=!n&&!l(function(){return Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a!=7})},84551:function(d,f,a){var n=a(42721),l=a(242),o=a(11995),s=Object,h=n("".split);d.exports=l(function(){return!s("z").propertyIsEnumerable(0)})?function(p){return o(p)=="String"?h(p,""):s(p)}:s},2707:function(d,f,a){var n=a(99476),l=a(98822),o=a(89555);d.exports=function(s,h,p){var u,z;return o&&n(u=h.constructor)&&u!==p&&l(z=u.prototype)&&z!==p.prototype&&o(s,z),s}},8777:function(d,f,a){var n=a(42721),l=a(99476),o=a(26495),s=n(Function.toString);l(o.inspectSource)||(o.inspectSource=function(h){return s(h)}),d.exports=o.inspectSource},28143:function(d,f,a){var n=a(98822),l=a(84446);d.exports=function(o,s){n(s)&&"cause"in s&&l(o,"cause",s.cause)}},30436:function(d,f,a){var n=a(79053),l=a(42721),o=a(86743),s=a(98822),h=a(67781),p=a(62886).f,u=a(1230),z=a(44247),x=a(49877),g=a(50216),I=a(98170),M=!1,w=g("meta"),C=0,_=function(S){p(S,w,{value:{objectID:"O"+C++,weakData:{}}})},H=function(S,F){if(!s(S))return typeof S=="symbol"?S:(typeof S=="string"?"S":"P")+S;if(!h(S,w)){if(!x(S))return"F";if(!F)return"E";_(S)}return S[w].objectID},b=function(S,F){if(!h(S,w)){if(!x(S))return!0;if(!F)return!1;_(S)}return S[w].weakData},E=function(S){return I&&M&&x(S)&&!h(S,w)&&_(S),S},L=function(){P.enable=function(){},M=!0;var S=u.f,F=l([].splice),j={};j[w]=1,S(j).length&&(u.f=function(J){for(var e1=S(J),t1=0,X=e1.length;t1<X;t1++)if(e1[t1]===w){F(e1,t1,1);break}return e1},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:z.f}))},P=d.exports={enable:L,fastKey:H,getWeakData:b,onFreeze:E};o[w]=!0},27956:function(d,f,a){var n=a(58730),l=a(38521),o=a(98822),s=a(84446),h=a(67781),p=a(26495),u=a(97469),z=a(86743),x="Object already initialized",g=l.TypeError,I=l.WeakMap,M,w,C,_=function(L){return C(L)?w(L):M(L,{})},H=function(L){return function(P){var S;if(!o(P)||(S=w(P)).type!==L)throw g("Incompatible receiver, "+L+" required");return S}};if(n||p.state){var b=p.state||(p.state=new I);b.get=b.get,b.has=b.has,b.set=b.set,M=function(L,P){if(b.has(L))throw g(x);return P.facade=L,b.set(L,P),P},w=function(L){return b.get(L)||{}},C=function(L){return b.has(L)}}else{var E=u("state");z[E]=!0,M=function(L,P){if(h(L,E))throw g(x);return P.facade=L,s(L,E,P),P},w=function(L){return h(L,E)?L[E]:{}},C=function(L){return h(L,E)}}d.exports={set:M,get:w,has:C,enforce:_,getterFor:H}},83937:function(d,f,a){var n=a(9591),l=a(76939),o=n("iterator"),s=Array.prototype;d.exports=function(h){return h!==void 0&&(l.Array===h||s[o]===h)}},53326:function(d,f,a){var n=a(11995);d.exports=Array.isArray||function(o){return n(o)=="Array"}},66103:function(d,f,a){var n=a(24518);d.exports=function(l){var o=n(l);return o=="BigInt64Array"||o=="BigUint64Array"}},99476:function(d,f,a){var n=a(49274),l=n.all;d.exports=n.IS_HTMLDDA?function(o){return typeof o=="function"||o===l}:function(o){return typeof o=="function"}},3437:function(d,f,a){var n=a(42721),l=a(242),o=a(99476),s=a(24518),h=a(44660),p=a(8777),u=function(){},z=[],x=h("Reflect","construct"),g=/^\s*(?:class|function)\b/,I=n(g.exec),M=!g.exec(u),w=function(H){if(!o(H))return!1;try{return x(u,z,H),!0}catch(b){return!1}},C=function(H){if(!o(H))return!1;switch(s(H)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return M||!!I(g,p(H))}catch(b){return!0}};C.sham=!0,d.exports=!x||l(function(){var _;return w(w.call)||!w(Object)||!w(function(){_=!0})||_})?C:w},34180:function(d,f,a){var n=a(242),l=a(99476),o=/#|\.prototype\./,s=function(x,g){var I=p[h(x)];return I==z?!0:I==u?!1:l(g)?n(g):!!g},h=s.normalize=function(x){return String(x).replace(o,".").toLowerCase()},p=s.data={},u=s.NATIVE="N",z=s.POLYFILL="P";d.exports=s},76669:function(d,f,a){var n=a(24518),l=a(67781),o=a(64264),s=a(9591),h=a(76939),p=s("iterator"),u=Object;d.exports=function(z){if(o(z))return!1;var x=u(z);return x[p]!==void 0||"@@iterator"in x||l(h,n(x))}},64264:function(d){d.exports=function(f){return f==null}},98822:function(d,f,a){var n=a(99476),l=a(49274),o=l.all;d.exports=l.IS_HTMLDDA?function(s){return typeof s=="object"?s!==null:n(s)||s===o}:function(s){return typeof s=="object"?s!==null:n(s)}},62761:function(d){d.exports=!1},98938:function(d,f,a){var n=a(98822),l=a(11995),o=a(9591),s=o("match");d.exports=function(h){var p;return n(h)&&((p=h[s])!==void 0?!!p:l(h)=="RegExp")}},74206:function(d,f,a){var n=a(44660),l=a(99476),o=a(36915),s=a(65190),h=Object;d.exports=s?function(p){return typeof p=="symbol"}:function(p){var u=n("Symbol");return l(u)&&o(u.prototype,h(p))}},15758:function(d,f,a){var n=a(61217);d.exports=function(l,o,s){for(var h=s||l.next,p,u;!(p=n(h,l)).done;)if(u=o(p.value),u!==void 0)return u}},10917:function(d,f,a){var n=a(12992),l=a(61217),o=a(79722),s=a(82424),h=a(83937),p=a(46831),u=a(36915),z=a(48429),x=a(62666),g=a(58530),I=TypeError,M=function(C,_){this.stopped=C,this.result=_},w=M.prototype;d.exports=function(C,_,H){var b=H&&H.that,E=!!(H&&H.AS_ENTRIES),L=!!(H&&H.IS_RECORD),P=!!(H&&H.IS_ITERATOR),S=!!(H&&H.INTERRUPTED),F=n(_,b),j,J,e1,t1,X,Q,R,f1=function(D){return j&&g(j,"normal",D),new M(!0,D)},a1=function(D){return E?(o(D),S?F(D[0],D[1],f1):F(D[0],D[1])):S?F(D,f1):F(D)};if(L)j=C.iterator;else if(P)j=C;else{if(J=x(C),!J)throw I(s(C)+" is not iterable");if(h(J)){for(e1=0,t1=p(C);t1>e1;e1++)if(X=a1(C[e1]),X&&u(w,X))return X;return new M(!1)}j=z(C,J)}for(Q=L?C.next:j.next;!(R=l(Q,j)).done;){try{X=a1(R.value)}catch(D){g(j,"throw",D)}if(typeof X=="object"&&X&&u(w,X))return X}return new M(!1)}},58530:function(d,f,a){var n=a(61217),l=a(79722),o=a(36329);d.exports=function(s,h,p){var u,z;l(s);try{if(u=o(s,"return"),!u){if(h==="throw")throw p;return p}u=n(u,s)}catch(x){z=!0,u=x}if(h==="throw")throw p;if(z)throw u;return l(u),p}},12021:function(d,f,a){"use strict";var n=a(64462).IteratorPrototype,l=a(14832),o=a(38382),s=a(81404),h=a(76939),p=function(){return this};d.exports=function(u,z,x,g){var I=z+" Iterator";return u.prototype=l(n,{next:o(+!g,x)}),s(u,I,!1,!0),h[I]=p,u}},53192:function(d,f,a){"use strict";var n=a(61217),l=a(14832),o=a(84446),s=a(82709),h=a(9591),p=a(27956),u=a(36329),z=a(64462).IteratorPrototype,x=a(84810),g=a(58530),I=h("toStringTag"),M="IteratorHelper",w="WrapForValidIterator",C=p.set,_=function(E){var L=p.getterFor(E?w:M);return s(l(z),{next:function(){var S=L(this);if(E)return S.nextHandler();try{var F=S.done?void 0:S.nextHandler();return x(F,S.done)}catch(j){throw S.done=!0,j}},return:function(){var P=L(this),S=P.iterator;if(P.done=!0,E){var F=u(S,"return");return F?n(F,S):x(void 0,!0)}if(P.inner)try{g(P.inner.iterator,"normal")}catch(j){return g(S,"throw",j)}return g(S,"normal"),x(void 0,!0)}})},H=_(!0),b=_(!1);o(b,I,"Iterator Helper"),d.exports=function(E,L){var P=function(F,j){j?(j.iterator=F.iterator,j.next=F.next):j=F,j.type=L?w:M,j.nextHandler=E,j.counter=0,j.done=!1,C(this,j)};return P.prototype=L?H:b,P}},36436:function(d,f,a){"use strict";var n=a(79053),l=a(61217),o=a(62761),s=a(5114),h=a(99476),p=a(12021),u=a(60533),z=a(89555),x=a(81404),g=a(84446),I=a(75001),M=a(9591),w=a(76939),C=a(64462),_=s.PROPER,H=s.CONFIGURABLE,b=C.IteratorPrototype,E=C.BUGGY_SAFARI_ITERATORS,L=M("iterator"),P="keys",S="values",F="entries",j=function(){return this};d.exports=function(J,e1,t1,X,Q,R,f1){p(t1,e1,X);var a1=function(c1){if(c1===Q&&N)return N;if(!E&&c1 in U)return U[c1];switch(c1){case P:return function(){return new t1(this,c1)};case S:return function(){return new t1(this,c1)};case F:return function(){return new t1(this,c1)}}return function(){return new t1(this)}},D=e1+" Iterator",Z=!1,U=J.prototype,Y=U[L]||U["@@iterator"]||Q&&U[Q],N=!E&&Y||a1(Q),W=e1=="Array"&&U.entries||Y,z1,E1,w1;if(W&&(z1=u(W.call(new J)),z1!==Object.prototype&&z1.next&&(!o&&u(z1)!==b&&(z?z(z1,b):h(z1[L])||I(z1,L,j)),x(z1,D,!0,!0),o&&(w[D]=j))),_&&Q==S&&Y&&Y.name!==S&&(!o&&H?g(U,"name",S):(Z=!0,N=function(){return l(Y,this)})),Q)if(E1={values:a1(S),keys:R?N:a1(P),entries:a1(F)},f1)for(w1 in E1)(E||Z||!(w1 in U))&&I(U,w1,E1[w1]);else n({target:e1,proto:!0,forced:E||Z},E1);return(!o||f1)&&U[L]!==N&&I(U,L,N,{name:Q}),w[e1]=N,E1}},71267:function(d,f,a){"use strict";var n=a(61217),l=a(32578),o=function(s,h){return[h,s]};d.exports=function(){return n(l,this,o)}},32578:function(d,f,a){"use strict";var n=a(61217),l=a(21209),o=a(79722),s=a(44059),h=a(53192),p=a(76854),u=h(function(){var z=this.iterator,x=o(n(this.next,z)),g=this.done=!!x.done;if(!g)return p(z,this.mapper,[x.value,this.counter++],!0)});d.exports=function(x){return new u(s(this),{mapper:l(x)})}},64462:function(d,f,a){"use strict";var n=a(242),l=a(99476),o=a(98822),s=a(14832),h=a(60533),p=a(75001),u=a(9591),z=a(62761),x=u("iterator"),g=!1,I,M,w;[].keys&&(w=[].keys(),"next"in w?(M=h(h(w)),M!==Object.prototype&&(I=M)):g=!0);var C=!o(I)||n(function(){var _={};return I[x].call(_)!==_});C?I={}:z&&(I=s(I)),l(I[x])||p(I,x,function(){return this}),d.exports={IteratorPrototype:I,BUGGY_SAFARI_ITERATORS:g}},76939:function(d){d.exports={}},46831:function(d,f,a){var n=a(59030);d.exports=function(l){return n(l.length)}},71784:function(d,f,a){var n=a(42721),l=a(242),o=a(99476),s=a(67781),h=a(41737),p=a(5114).CONFIGURABLE,u=a(8777),z=a(27956),x=z.enforce,g=z.get,I=String,M=Object.defineProperty,w=n("".slice),C=n("".replace),_=n([].join),H=h&&!l(function(){return M(function(){},"length",{value:8}).length!==8}),b=String(String).split("String"),E=d.exports=function(L,P,S){w(I(P),0,7)==="Symbol("&&(P="["+C(I(P),/^Symbol\(([^)]*)\)/,"$1")+"]"),S&&S.getter&&(P="get "+P),S&&S.setter&&(P="set "+P),(!s(L,"name")||p&&L.name!==P)&&(h?M(L,"name",{value:P,configurable:!0}):L.name=P),H&&S&&s(S,"arity")&&L.length!==S.arity&&M(L,"length",{value:S.arity});try{S&&s(S,"constructor")&&S.constructor?h&&M(L,"prototype",{writable:!1}):L.prototype&&(L.prototype=void 0)}catch(j){}var F=x(L);return s(F,"source")||(F.source=_(b,typeof P=="string"?P:"")),L};Function.prototype.toString=E(function(){return o(this)&&g(this).source||u(this)},"toString")},95722:function(d,f,a){var n=a(42721),l=Map.prototype;d.exports={Map,set:n(l.set),get:n(l.get),has:n(l.has),remove:n(l.delete),proto:l}},79298:function(d,f,a){var n=a(42721),l=a(15758),o=a(95722),s=o.Map,h=o.proto,p=n(h.forEach),u=n(h.entries),z=u(new s).next;d.exports=function(x,g,I){return I?l(u(x),function(M){return g(M[1],M[0])},z):p(x,g)}},61977:function(d,f,a){"use strict";var n=a(61217),l=a(21209),o=a(99476),s=a(79722),h=TypeError;d.exports=function(u,z){var x=s(this),g=l(x.get),I=l(x.has),M=l(x.set),w=arguments.length>2?arguments[2]:void 0,C;if(!o(z)&&!o(w))throw h("At least one callback required");return n(I,x,u)?(C=n(g,x,u),o(z)&&(C=z(C),n(M,x,u,C))):o(w)&&(C=w(),n(M,x,u,C)),C}},76420:function(d,f,a){var n=a(14484),l=Math.abs,o=Math.pow,s=o(2,-52),h=o(2,-23),p=o(2,127)*(2-h),u=o(2,-126),z=function(x){return x+1/s-1/s};d.exports=Math.fround||function(g){var I=+g,M=l(I),w=n(I),C,_;return M<u?w*z(M/u/h)*u*h:(C=(1+h/s)*M,_=C-(C-M),_>p||_!=_?w*(1/0):w*_)}},40652:function(d){d.exports=Math.scale||function(a,n,l,o,s){var h=+a,p=+n,u=+l,z=+o,x=+s;return h!=h||p!=p||u!=u||z!=z||x!=x?NaN:h===1/0||h===-1/0?h:(h-p)*(x-z)/(u-p)+z}},14484:function(d){d.exports=Math.sign||function(a){var n=+a;return n==0||n!=n?n:n<0?-1:1}},77376:function(d){var f=Math.ceil,a=Math.floor;d.exports=Math.trunc||function(l){var o=+l;return(o>0?a:f)(o)}},75517:function(d,f,a){"use strict";var n=a(21209),l=TypeError,o=function(s){var h,p;this.promise=new s(function(u,z){if(h!==void 0||p!==void 0)throw l("Bad Promise constructor");h=u,p=z}),this.resolve=n(h),this.reject=n(p)};d.exports.f=function(s){return new o(s)}},48436:function(d,f,a){var n=a(17664);d.exports=function(l,o){return l===void 0?arguments.length<2?"":o:n(l)}},28144:function(d){var f=RangeError;d.exports=function(a){if(a===a)return a;throw f("NaN is not allowed")}},73781:function(d,f,a){var n=a(38521),l=n.isFinite;d.exports=Number.isFinite||function(s){return typeof s=="number"&&l(s)}},22592:function(d,f,a){var n=a(38521),l=a(242),o=a(42721),s=a(17664),h=a(49463).trim,p=a(45460),u=n.parseInt,z=n.Symbol,x=z&&z.iterator,g=/^[+-]?0x/i,I=o(g.exec),M=u(p+"08")!==8||u(p+"0x16")!==22||x&&!l(function(){u(Object(x))});d.exports=M?function(C,_){var H=h(s(C));return u(H,_>>>0||(I(g,H)?16:10))}:u},15827:function(d,f,a){"use strict";var n=a(27956),l=a(12021),o=a(84810),s=a(64264),h=a(98822),p=a(35126).f,u=a(41737),z="Incorrect Iterator.range arguments",x="NumericRangeIterator",g=n.set,I=n.getterFor(x),M=RangeError,w=TypeError,C=l(function(b,E,L,P,S,F){if(typeof b!=P||E!==1/0&&E!==-1/0&&typeof E!=P)throw w(z);if(b===1/0||b===-1/0)throw M(z);var j=E>b,J=!1,e1;if(L===void 0)e1=void 0;else if(h(L))e1=L.step,J=!!L.inclusive;else if(typeof L==P)e1=L;else throw w(z);if(s(e1)&&(e1=j?F:-F),typeof e1!=P)throw w(z);if(e1===1/0||e1===-1/0||e1===S&&b!==E)throw M(z);var t1=b!=b||E!=E||e1!=e1||E>b!=e1>S;g(this,{type:x,start:b,end:E,step:e1,inclusiveEnd:J,hitsEnd:t1,currentCount:S,zero:S}),u||(this.start=b,this.end=E,this.step=e1,this.inclusive=J)},x,function(){var b=I(this);if(b.hitsEnd)return o(void 0,!0);var E=b.start,L=b.end,P=b.step,S=E+P*b.currentCount++;S===L&&(b.hitsEnd=!0);var F=b.inclusiveEnd,j;return L>E?j=F?S>L:S>=L:j=F?L>S:L>=S,j?(b.hitsEnd=!0,o(void 0,!0)):o(S,!1)}),_=function(H){return{get:H,set:function(){},configurable:!0,enumerable:!1}};u&&p(C.prototype,{start:_(function(){return I(this).start}),end:_(function(){return I(this).end}),inclusive:_(function(){return I(this).inclusiveEnd}),step:_(function(){return I(this).step})}),d.exports=C},14832:function(d,f,a){var n=a(79722),l=a(35126),o=a(91222),s=a(86743),h=a(2e3),p=a(50398),u=a(97469),z=">",x="<",g="prototype",I="script",M=u("IE_PROTO"),w=function(){},C=function(L){return x+I+z+L+x+"/"+I+z},_=function(L){L.write(C("")),L.close();var P=L.parentWindow.Object;return L=null,P},H=function(){var L=p("iframe"),P="java"+I+":",S;return L.style.display="none",h.appendChild(L),L.src=String(P),S=L.contentWindow.document,S.open(),S.write(C("document.F=Object")),S.close(),S.F},b,E=function(){try{b=new ActiveXObject("htmlfile")}catch(P){}E=typeof document!="undefined"?document.domain&&b?_(b):H():_(b);for(var L=o.length;L--;)delete E[g][o[L]];return E()};s[M]=!0,d.exports=Object.create||function(P,S){var F;return P!==null?(w[g]=n(P),F=new w,w[g]=null,F[M]=P):F=E(),S===void 0?F:l.f(F,S)}},35126:function(d,f,a){var n=a(41737),l=a(20154),o=a(62886),s=a(79722),h=a(88378),p=a(40809);f.f=n&&!l?Object.defineProperties:function(z,x){s(z);for(var g=h(x),I=p(x),M=I.length,w=0,C;M>w;)o.f(z,C=I[w++],g[C]);return z}},62886:function(d,f,a){var n=a(41737),l=a(4707),o=a(20154),s=a(79722),h=a(82098),p=TypeError,u=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x="enumerable",g="configurable",I="writable";f.f=n?o?function(w,C,_){if(s(w),C=h(C),s(_),typeof w=="function"&&C==="prototype"&&"value"in _&&I in _&&!_[I]){var H=z(w,C);H&&H[I]&&(w[C]=_.value,_={configurable:g in _?_[g]:H[g],enumerable:x in _?_[x]:H[x],writable:!1})}return u(w,C,_)}:u:function(w,C,_){if(s(w),C=h(C),s(_),l)try{return u(w,C,_)}catch(H){}if("get"in _||"set"in _)throw p("Accessors not supported");return"value"in _&&(w[C]=_.value),w}},98999:function(d,f,a){var n=a(41737),l=a(61217),o=a(91197),s=a(38382),h=a(88378),p=a(82098),u=a(67781),z=a(4707),x=Object.getOwnPropertyDescriptor;f.f=n?x:function(I,M){if(I=h(I),M=p(M),z)try{return x(I,M)}catch(w){}if(u(I,M))return s(!l(o.f,I,M),I[M])}},44247:function(d,f,a){var n=a(11995),l=a(88378),o=a(1230).f,s=a(70582),h=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],p=function(u){try{return o(u)}catch(z){return s(h)}};d.exports.f=function(z){return h&&n(z)=="Window"?p(z):o(l(z))}},1230:function(d,f,a){var n=a(88543),l=a(91222),o=l.concat("length","prototype");f.f=Object.getOwnPropertyNames||function(h){return n(h,o)}},22336:function(d,f){f.f=Object.getOwnPropertySymbols},60533:function(d,f,a){var n=a(67781),l=a(99476),o=a(17311),s=a(97469),h=a(44607),p=s("IE_PROTO"),u=Object,z=u.prototype;d.exports=h?u.getPrototypeOf:function(x){var g=o(x);if(n(g,p))return g[p];var I=g.constructor;return l(I)&&g instanceof I?I.prototype:g instanceof u?z:null}},49877:function(d,f,a){var n=a(242),l=a(98822),o=a(11995),s=a(66129),h=Object.isExtensible,p=n(function(){h(1)});d.exports=p||s?function(z){return!l(z)||s&&o(z)=="ArrayBuffer"?!1:h?h(z):!0}:h},36915:function(d,f,a){var n=a(42721);d.exports=n({}.isPrototypeOf)},23891:function(d,f,a){"use strict";var n=a(27956),l=a(12021),o=a(84810),s=a(67781),h=a(40809),p=a(17311),u="Object Iterator",z=n.set,x=n.getterFor(u);d.exports=l(function(I,M){var w=p(I);z(this,{type:u,mode:M,object:w,keys:h(w),index:0})},"Object",function(){for(var I=x(this),M=I.keys;;){if(M===null||I.index>=M.length)return I.object=I.keys=null,o(void 0,!0);var w=M[I.index++],C=I.object;if(s(C,w)){switch(I.mode){case"keys":return o(w,!1);case"values":return o(C[w],!1)}return o([w,C[w]],!1)}}})},88543:function(d,f,a){var n=a(42721),l=a(67781),o=a(88378),s=a(31851).indexOf,h=a(86743),p=n([].push);d.exports=function(u,z){var x=o(u),g=0,I=[],M;for(M in x)!l(h,M)&&l(x,M)&&p(I,M);for(;z.length>g;)l(x,M=z[g++])&&(~s(I,M)||p(I,M));return I}},40809:function(d,f,a){var n=a(88543),l=a(91222);d.exports=Object.keys||function(s){return n(s,l)}},91197:function(d,f){"use strict";var a={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,l=n&&!a.call({1:2},1);f.f=l?function(s){var h=n(this,s);return!!h&&h.enumerable}:a},89555:function(d,f,a){var n=a(29472),l=a(79722),o=a(72137);d.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var s=!1,h={},p;try{p=n(Object.prototype,"__proto__","set"),p(h,[]),s=h instanceof Array}catch(u){}return function(z,x){return l(z),o(x),s?p(z,x):z.__proto__=x,z}}():void 0)},17985:function(d,f,a){var n=a(38521),l=a(99476),o=a(9591),s=o("observable"),h=n.Observable,p=h&&h.prototype;d.exports=!l(h)||!l(h.from)||!l(h.of)||!l(p.subscribe)||!l(p[s])},37698:function(d,f,a){var n=a(61217),l=a(99476),o=a(98822),s=TypeError;d.exports=function(h,p){var u,z;if(p==="string"&&l(u=h.toString)&&!o(z=n(u,h))||l(u=h.valueOf)&&!o(z=n(u,h))||p!=="string"&&l(u=h.toString)&&!o(z=n(u,h)))return z;throw s("Can't convert object to primitive value")}},42198:function(d,f,a){var n=a(44660),l=a(42721),o=a(1230),s=a(22336),h=a(79722),p=l([].concat);d.exports=n("Reflect","ownKeys")||function(z){var x=o.f(h(z)),g=s.f;return g?p(x,g(z)):x}},49158:function(d,f,a){var n=a(38521);d.exports=n},62738:function(d){d.exports=function(f){try{return{error:!1,value:f()}}catch(a){return{error:!0,value:a}}}},8968:function(d,f,a){var n=a(38521),l=a(54257),o=a(99476),s=a(34180),h=a(8777),p=a(9591),u=a(30756),z=a(73677),x=a(62761),g=a(59476),I=l&&l.prototype,M=p("species"),w=!1,C=o(n.PromiseRejectionEvent),_=s("Promise",function(){var H=h(l),b=H!==String(l);if(!b&&g===66||x&&!(I.catch&&I.finally))return!0;if(!g||g<51||!/native code/.test(H)){var E=new l(function(S){S(1)}),L=function(S){S(function(){},function(){})},P=E.constructor={};if(P[M]=L,w=E.then(function(){})instanceof L,!w)return!0}return!b&&(u||z)&&!C});d.exports={CONSTRUCTOR:_,REJECTION_EVENT:C,SUBCLASSING:w}},54257:function(d,f,a){var n=a(38521);d.exports=n.Promise},94400:function(d,f,a){var n=a(54257),l=a(80121),o=a(8968).CONSTRUCTOR;d.exports=o||!l(function(s){n.all(s).then(void 0,function(){})})},3623:function(d,f,a){var n=a(62886).f;d.exports=function(l,o,s){s in l||n(l,s,{configurable:!0,get:function(){return o[s]},set:function(h){o[s]=h}})}},10136:function(d,f,a){a(28541),a(37684);var n=a(44660),l=a(42721),o=a(85561),s=n("Map"),h=n("WeakMap"),p=l([].push),u=o("metadata"),z=u.store||(u.store=new h),x=function(_,H,b){var E=z.get(_);if(!E){if(!b)return;z.set(_,E=new s)}var L=E.get(H);if(!L){if(!b)return;E.set(H,L=new s)}return L},g=function(_,H,b){var E=x(H,b,!1);return E===void 0?!1:E.has(_)},I=function(_,H,b){var E=x(H,b,!1);return E===void 0?void 0:E.get(_)},M=function(_,H,b,E){x(b,E,!0).set(_,H)},w=function(_,H){var b=x(_,H,!1),E=[];return b&&b.forEach(function(L,P){p(E,P)}),E},C=function(_){return _===void 0||typeof _=="symbol"?_:String(_)};d.exports={store:z,getMap:x,has:g,get:I,set:M,keys:w,toKey:C}},88042:function(d,f,a){"use strict";var n=a(79722);d.exports=function(){var l=n(this),o="";return l.hasIndices&&(o+="d"),l.global&&(o+="g"),l.ignoreCase&&(o+="i"),l.multiline&&(o+="m"),l.dotAll&&(o+="s"),l.unicode&&(o+="u"),l.unicodeSets&&(o+="v"),l.sticky&&(o+="y"),o}},72760:function(d,f,a){var n=a(61217),l=a(67781),o=a(36915),s=a(88042),h=RegExp.prototype;d.exports=function(p){var u=p.flags;return u===void 0&&!("flags"in h)&&!l(p,"flags")&&o(h,p)?n(s,p):u}},73017:function(d,f,a){var n=a(64264),l=TypeError;d.exports=function(o){if(n(o))throw l("Can't call method on "+o);return o}},82318:function(d){d.exports=function(f,a){return f===a||f!=f&&a!=a}},89232:function(d,f,a){"use strict";var n=a(38521),l=a(9266),o=a(99476),s=a(89369),h=a(58158),p=a(70489),u=a(11899),z=n.Function,x=/MSIE .\./.test(h)||s&&function(){var g=n.Bun.version.split(".");return g.length<3||g[0]==0&&(g[1]<3||g[1]==3&&g[2]==0)}();d.exports=function(g,I){var M=I?2:1;return x?function(w,C){var _=u(arguments.length,1)>M,H=o(w)?w:z(w),b=_?p(arguments,M):[],E=_?function(){l(H,this,b)}:H;return I?g(E,C):g(E)}:g}},74448:function(d,f,a){var n=a(67410),l=a(46357),o=n.Set,s=n.add;d.exports=function(h){var p=new o;return l(h,function(u){s(p,u)}),p}},69873:function(d,f,a){"use strict";var n=a(27458),l=a(67410),o=a(74448),s=a(5071),h=a(53487),p=a(46357),u=a(15758),z=l.has,x=l.remove;d.exports=function(I){var M=n(this),w=h(I),C=o(M);return s(M)<=w.size?p(M,function(_){w.includes(_)&&x(C,_)}):u(w.getIterator(),function(_){z(M,_)&&x(C,_)}),C}},67410:function(d,f,a){var n=a(42721),l=Set.prototype;d.exports={Set,add:n(l.add),has:n(l.has),remove:n(l.delete),proto:l,$has:l.has,$keys:l.keys}},18940:function(d,f,a){"use strict";var n=a(27458),l=a(67410),o=a(5071),s=a(53487),h=a(46357),p=a(15758),u=l.Set,z=l.add,x=l.has,g=l.$has,I=l.$keys,M=function(w){return w.has===g&&w.keys===I};d.exports=function(C){var _=n(this),H=s(C),b=new u;if(!M(H)&&o(_)>H.size){if(p(H.getIterator(),function(L){x(_,L)&&z(b,L)}),o(b)<2)return b;var E=b;b=new u,h(_,function(L){x(E,L)&&z(b,L)})}else h(_,function(L){H.includes(L)&&z(b,L)});return b}},85208:function(d,f,a){"use strict";var n=a(27458),l=a(67410).has,o=a(5071),s=a(53487),h=a(46357),p=a(15758),u=a(58530);d.exports=function(x){var g=n(this),I=s(x);if(o(g)<=I.size)return h(g,function(w){if(I.includes(w))return!1},!0)!==!1;var M=I.getIterator();return p(M,function(w){if(l(g,w))return u(M,"normal",!1)})!==!1}},15465:function(d,f,a){"use strict";var n=a(27458),l=a(5071),o=a(46357),s=a(53487);d.exports=function(p){var u=n(this),z=s(p);return l(u)>z.size?!1:o(u,function(x){if(!z.includes(x))return!1},!0)!==!1}},71541:function(d,f,a){"use strict";var n=a(27458),l=a(67410).has,o=a(5071),s=a(53487),h=a(15758),p=a(58530);d.exports=function(z){var x=n(this),g=s(z);if(o(x)<g.size)return!1;var I=g.getIterator();return h(I,function(M){if(!l(x,M))return p(I,"normal",!1)})!==!1}},46357:function(d,f,a){var n=a(42721),l=a(15758),o=a(67410),s=o.Set,h=o.proto,p=n(h.forEach),u=n(h.keys),z=u(new s).next;d.exports=function(x,g,I){return I?l(u(x),g,z):p(x,g)}},39069:function(d,f,a){var n=a(44660),l=function(){return{size:0,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};d.exports=function(o){try{var s=n("Set");return new s()[o](l()),!0}catch(h){return!1}}},5071:function(d,f,a){var n=a(29472),l=a(67410);d.exports=n(l.proto,"size","get")||function(o){return o.size}},32520:function(d,f,a){"use strict";var n=a(44660),l=a(73538),o=a(9591),s=a(41737),h=o("species");d.exports=function(p){var u=n(p);s&&u&&!u[h]&&l(u,h,{configurable:!0,get:function(){return this}})}},2457:function(d,f,a){"use strict";var n=a(27458),l=a(67410),o=a(74448),s=a(53487),h=a(15758),p=l.add,u=l.has,z=l.remove;d.exports=function(g){var I=n(this),M=s(g).getIterator(),w=o(I);return h(M,function(C){u(I,C)?z(w,C):p(w,C)}),w}},81404:function(d,f,a){var n=a(62886).f,l=a(67781),o=a(9591),s=o("toStringTag");d.exports=function(h,p,u){h&&!u&&(h=h.prototype),h&&!l(h,s)&&n(h,s,{configurable:!0,value:p})}},50871:function(d,f,a){"use strict";var n=a(27458),l=a(67410).add,o=a(74448),s=a(53487),h=a(15758);d.exports=function(u){var z=n(this),x=s(u).getIterator(),g=o(z);return h(x,function(I){l(g,I)}),g}},97469:function(d,f,a){var n=a(85561),l=a(50216),o=n("keys");d.exports=function(s){return o[s]||(o[s]=l(s))}},26495:function(d,f,a){var n=a(38521),l=a(80542),o="__core-js_shared__",s=n[o]||l(o,{});d.exports=s},85561:function(d,f,a){var n=a(62761),l=a(26495);(d.exports=function(o,s){return l[o]||(l[o]=s!==void 0?s:{})})("versions",[]).push({version:"3.28.0",mode:n?"pure":"global",copyright:"\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"})},87077:function(d,f,a){var n=a(79722),l=a(94956),o=a(64264),s=a(9591),h=s("species");d.exports=function(p,u){var z=n(p).constructor,x;return z===void 0||o(x=n(z)[h])?u:l(x)}},44125:function(d,f,a){var n=a(42721),l=a(88378),o=a(17664),s=a(46831),h=TypeError,p=n([].push),u=n([].join);d.exports=function(x){var g=l(x),I=s(g);if(!I)return"";for(var M=arguments.length,w=[],C=0;;){var _=g[C++];if(_===void 0)throw h("Incorrect template");if(p(w,o(_)),C===I)return u(w,"");C<M&&p(w,o(arguments[C]))}}},47423:function(d,f,a){var n=a(42721),l=a(76628),o=a(17664),s=a(73017),h=n("".charAt),p=n("".charCodeAt),u=n("".slice),z=function(x){return function(g,I){var M=o(s(g)),w=l(I),C=M.length,_,H;return w<0||w>=C?x?"":void 0:(_=p(M,w),_<55296||_>56319||w+1===C||(H=p(M,w+1))<56320||H>57343?x?h(M,w):_:x?u(M,w,w+2):(_-55296<<10)+(H-56320)+65536)}};d.exports={codeAt:z(!1),charAt:z(!0)}},29180:function(d,f,a){var n=a(44660),l=a(42721),o=String.fromCharCode,s=n("String","fromCodePoint"),h=l("".charAt),p=l("".charCodeAt),u=l("".indexOf),z=l("".slice),x=48,g=57,I=97,M=102,w=65,C=70,_=function(E,L){var P=p(E,L);return P>=x&&P<=g},H=function(E,L,P){if(P>=E.length)return-1;for(var S=0;L<P;L++){var F=b(p(E,L));if(F===-1)return-1;S=S*16+F}return S},b=function(E){return E>=x&&E<=g?E-x:E>=I&&E<=M?E-I+10:E>=w&&E<=C?E-w+10:-1};d.exports=function(E){for(var L="",P=0,S=0,F;(S=u(E,"\\",S))>-1;){if(L+=z(E,P,S),++S===E.length)return;var j=h(E,S++);switch(j){case"b":L+="\b";break;case"t":L+="	";break;case"n":L+=`
  `;break;case"v":L+="\v";break;case"f":L+="\f";break;case"r":L+="\r";break;case"\r":S<E.length&&h(E,S)===`
  `&&++S;case`
  `:case"\u2028":case"\u2029":break;case"0":if(_(E,S))return;L+="\0";break;case"x":if(F=H(E,S,S+2),F===-1)return;S+=2,L+=o(F);break;case"u":if(S<E.length&&h(E,S)==="{"){var J=u(E,"}",++S);if(J===-1)return;F=H(E,S,J),S=J+1}else F=H(E,S,S+4),S+=4;if(F===-1||F>1114111)return;L+=s(F);break;default:if(_(j,0))return;L+=j}P=S}return L+z(E,P)}},49463:function(d,f,a){var n=a(42721),l=a(73017),o=a(17664),s=a(45460),h=n("".replace),p=RegExp("^["+s+"]+"),u=RegExp("(^|[^"+s+"])["+s+"]+$"),z=function(x){return function(g){var I=o(l(g));return x&1&&(I=h(I,p,"")),x&2&&(I=h(I,u,"$1")),I}};d.exports={start:z(1),end:z(2),trim:z(3)}},65774:function(d,f,a){var n=a(38521),l=a(242),o=a(59476),s=a(30756),h=a(73677),p=a(35606),u=n.structuredClone;d.exports=!!u&&!l(function(){if(h&&o>92||p&&o>94||s&&o>97)return!1;var z=new ArrayBuffer(8),x=u(z,{transfer:[z]});return z.byteLength!=0||x.byteLength!=8})},32496:function(d,f,a){var n=a(59476),l=a(242);d.exports=!!Object.getOwnPropertySymbols&&!l(function(){var o=Symbol();return!String(o)||!(Object(o)instanceof Symbol)||!Symbol.sham&&n&&n<41})},82585:function(d,f,a){var n=a(38521),l=a(9266),o=a(12992),s=a(99476),h=a(67781),p=a(242),u=a(2e3),z=a(70489),x=a(50398),g=a(11899),I=a(23126),M=a(35606),w=n.setImmediate,C=n.clearImmediate,_=n.process,H=n.Dispatch,b=n.Function,E=n.MessageChannel,L=n.String,P=0,S={},F="onreadystatechange",j,J,e1,t1;p(function(){j=n.location});var X=function(a1){if(h(S,a1)){var D=S[a1];delete S[a1],D()}},Q=function(a1){return function(){X(a1)}},R=function(a1){X(a1.data)},f1=function(a1){n.postMessage(L(a1),j.protocol+"//"+j.host)};(!w||!C)&&(w=function(D){g(arguments.length,1);var Z=s(D)?D:b(D),U=z(arguments,1);return S[++P]=function(){l(Z,void 0,U)},J(P),P},C=function(D){delete S[D]},M?J=function(a1){_.nextTick(Q(a1))}:H&&H.now?J=function(a1){H.now(Q(a1))}:E&&!I?(e1=new E,t1=e1.port2,e1.port1.onmessage=R,J=o(t1.postMessage,t1)):n.addEventListener&&s(n.postMessage)&&!n.importScripts&&j&&j.protocol!=="file:"&&!p(f1)?(J=f1,n.addEventListener("message",R,!1)):F in x("script")?J=function(a1){u.appendChild(x("script"))[F]=function(){u.removeChild(this),X(a1)}}:J=function(a1){setTimeout(Q(a1),0)}),d.exports={set:w,clear:C}},99928:function(d,f,a){var n=a(76628),l=Math.max,o=Math.min;d.exports=function(s,h){var p=n(s);return p<0?l(p+h,0):o(p,h)}},16715:function(d,f,a){var n=a(90594),l=TypeError;d.exports=function(o){var s=n(o,"number");if(typeof s=="number")throw l("Can't convert number to bigint");return BigInt(s)}},88378:function(d,f,a){var n=a(84551),l=a(73017);d.exports=function(o){return n(l(o))}},76628:function(d,f,a){var n=a(77376);d.exports=function(l){var o=+l;return o!==o||o===0?0:n(o)}},59030:function(d,f,a){var n=a(76628),l=Math.min;d.exports=function(o){return o>0?l(n(o),9007199254740991):0}},17311:function(d,f,a){var n=a(73017),l=Object;d.exports=function(o){return l(n(o))}},8058:function(d,f,a){var n=a(13645),l=RangeError;d.exports=function(o,s){var h=n(o);if(h%s)throw l("Wrong offset");return h}},13645:function(d,f,a){var n=a(76628),l=RangeError;d.exports=function(o){var s=n(o);if(s<0)throw l("The argument can't be less than 0");return s}},90594:function(d,f,a){var n=a(61217),l=a(98822),o=a(74206),s=a(36329),h=a(37698),p=a(9591),u=TypeError,z=p("toPrimitive");d.exports=function(x,g){if(!l(x)||o(x))return x;var I=s(x,z),M;if(I){if(g===void 0&&(g="default"),M=n(I,x,g),!l(M)||o(M))return M;throw u("Can't convert object to primitive value")}return g===void 0&&(g="number"),h(x,g)}},82098:function(d,f,a){var n=a(90594),l=a(74206);d.exports=function(o){var s=n(o,"string");return l(s)?s:s+""}},90020:function(d,f,a){var n=a(44660),l=a(99476),o=a(76669),s=a(98822),h=n("Set"),p=function(u){return s(u)&&typeof u.size=="number"&&l(u.has)&&l(u.keys)};d.exports=function(u){if(p(u))return u;if(o(u))return new h(u)}},10303:function(d,f,a){var n=a(9591),l=n("toStringTag"),o={};o[l]="z",d.exports=String(o)==="[object z]"},17664:function(d,f,a){var n=a(24518),l=String;d.exports=function(o){if(n(o)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return l(o)}},82424:function(d){var f=String;d.exports=function(a){try{return f(a)}catch(n){return"Object"}}},91275:function(d,f,a){var n=a(1715),l=a(62911);d.exports=function(o,s){return n(l(o),s)}},62911:function(d,f,a){var n=a(45133),l=a(87077),o=n.aTypedArrayConstructor,s=n.getTypedArrayConstructor;d.exports=function(h){return o(l(h,s(h)))}},50216:function(d,f,a){var n=a(42721),l=0,o=Math.random(),s=n(1 .toString);d.exports=function(h){return"Symbol("+(h===void 0?"":h)+")_"+s(++l+o,36)}},65190:function(d,f,a){var n=a(32496);d.exports=n&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},20154:function(d,f,a){var n=a(41737),l=a(242);d.exports=n&&l(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},11899:function(d){var f=TypeError;d.exports=function(a,n){if(a<n)throw f("Not enough arguments");return a}},58730:function(d,f,a){var n=a(38521),l=a(99476),o=n.WeakMap;d.exports=l(o)&&/native code/.test(String(o))},3222:function(d,f,a){var n=a(42721),l=WeakMap.prototype;d.exports={WeakMap,set:n(l.set),get:n(l.get),has:n(l.has),remove:n(l.delete)}},82487:function(d,f,a){var n=a(42721),l=WeakSet.prototype;d.exports={WeakSet,add:n(l.add),has:n(l.has),remove:n(l.delete)}},96541:function(d,f,a){var n=a(49158),l=a(67781),o=a(41961),s=a(62886).f;d.exports=function(h){var p=n.Symbol||(n.Symbol={});l(p,h)||s(p,h,{value:o.f(h)})}},41961:function(d,f,a){var n=a(9591);f.f=n},9591:function(d,f,a){var n=a(38521),l=a(85561),o=a(67781),s=a(50216),h=a(32496),p=a(65190),u=n.Symbol,z=l("wks"),x=p?u.for||u:u&&u.withoutSetter||s;d.exports=function(g){return o(z,g)||(z[g]=h&&o(u,g)?u[g]:x("Symbol."+g)),z[g]}},45460:function(d){d.exports=`	
  ?|
  |(?![\\s\\S])))+`,"m"),alias:y1,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(K)[0]}}}}),Object.defineProperty(g1.languages.diff,"PREFIXES",{value:y})}(u),u.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m},u.languages.go=u.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),u.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete u.languages.go["class-name"],function(g1){function y(K,n1){return"___"+K.toUpperCase()+n1+"___"}Object.defineProperties(g1.languages["markup-templating"]={},{buildPlaceholders:{value:function(K,n1,y1,L1){if(K.language===n1){var J1=K.tokenStack=[];K.code=K.code.replace(y1,function(D1){if(typeof L1=="function"&&!L1(D1))return D1;for(var i0=J1.length,f0;K.code.indexOf(f0=y(n1,i0))!==-1;)++i0;return J1[i0]=D1,f0}),K.grammar=g1.languages.markup}}},tokenizePlaceholders:{value:function(K,n1){if(K.language!==n1||!K.tokenStack)return;K.grammar=g1.languages[n1];var y1=0,L1=Object.keys(K.tokenStack);function J1(D1){for(var i0=0;i0<D1.length&&!(y1>=L1.length);i0++){var f0=D1[i0];if(typeof f0=="string"||f0.content&&typeof f0.content=="string"){var h0=L1[y1],k1=K.tokenStack[h0],j1=typeof f0=="string"?f0:f0.content,$1=y(n1,h0),w0=j1.indexOf($1);if(w0>-1){++y1;var e0=j1.substring(0,w0),t0=new g1.Token(n1,g1.tokenize(k1,K.grammar),"language-"+n1,k1),R1=j1.substring(w0+$1.length),K1=[];e0&&K1.push.apply(K1,J1([e0])),K1.push(t0),R1&&K1.push.apply(K1,J1([R1])),typeof f0=="string"?D1.splice.apply(D1,[i0,1].concat(K1)):f0.content=K1}}else f0.content&&J1(f0.content)}return D1}J1(K.tokens)}}})}(u),function(g1){g1.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},g1.hooks.add("before-tokenize",function(y){var K=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;g1.languages["markup-templating"].buildPlaceholders(y,"handlebars",K)}),g1.hooks.add("after-tokenize",function(y){g1.languages["markup-templating"].tokenizePlaceholders(y,"handlebars")}),g1.languages.hbs=g1.languages.handlebars}(u),u.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},u.languages.webmanifest=u.languages.json,u.languages.less=u.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),u.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),u.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/},u.languages.objectivec=u.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete u.languages.objectivec["class-name"],u.languages.objc=u.languages.objectivec,u.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/},u.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},u.languages.python["string-interpolation"].inside.interpolation.inside.rest=u.languages.python,u.languages.py=u.languages.python,u.languages.reason=u.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),u.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete u.languages.reason.function,function(g1){g1.languages.sass=g1.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),g1.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete g1.languages.sass.atrule;var y=/\$[-\w]+|#\{\$[-\w]+\}/,K=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];g1.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:y,operator:K}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:y,operator:K,important:g1.languages.sass.important}}}),delete g1.languages.sass.property,delete g1.languages.sass.important,g1.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(u),u.languages.scss=u.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),u.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),u.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),u.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),u.languages.scss.atrule.inside.rest=u.languages.scss,function(g1){var y={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},K={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},n1={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:y,number:K,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:y,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:K,punctuation:/[{}()\[\];:,]/};n1.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:n1}},n1.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:n1}},g1.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:n1}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:n1}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:n1}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:n1.interpolation}},rest:n1}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:n1.interpolation,comment:n1.comment,punctuation:/[{},]/}},func:n1.func,string:n1.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:n1.interpolation,punctuation:/[{}()\[\];:.]/}}(u),function(g1){var y=g1.util.clone(g1.languages.typescript);g1.languages.tsx=g1.languages.extend("jsx",y),delete g1.languages.tsx.parameter,delete g1.languages.tsx["literal-property"];var K=g1.languages.tsx.tag;K.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+K.pattern.source+")",K.pattern.flags),K.lookbehind=!0}(u),u.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};var z=u,x={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},g=x,I={Prism:z,theme:g};function M(g1,y,K){return y in g1?Object.defineProperty(g1,y,{value:K,enumerable:!0,configurable:!0,writable:!0}):g1[y]=K,g1}function w(){return w=Object.assign||function(g1){for(var y=1;y<arguments.length;y++){var K=arguments[y];for(var n1 in K)Object.prototype.hasOwnProperty.call(K,n1)&&(g1[n1]=K[n1])}return g1},w.apply(this,arguments)}var C=/\r\n|\r|\n/,_=function(g1){g1.length===0?g1.push({types:["plain"],content:`
  `,empty:!0}):g1.length===1&&g1[0].content===""&&(g1[0].content=`
  `,g1[0].empty=!0)},H=function(g1,y){var K=g1.length;return K>0&&g1[K-1]===y?g1:g1.concat(y)},b=function(g1){for(var y=[[]],K=[g1],n1=[0],y1=[g1.length],L1=0,J1=0,D1=[],i0=[D1];J1>-1;){for(;(L1=n1[J1]++)<y1[J1];){var f0=void 0,h0=y[J1],k1=K[J1],j1=k1[L1];if(typeof j1=="string"?(h0=J1>0?h0:["plain"],f0=j1):(h0=H(h0,j1.type),j1.alias&&(h0=H(h0,j1.alias)),f0=j1.content),typeof f0!="string"){J1++,y.push(h0),K.push(f0),n1.push(0),y1.push(f0.length);continue}var $1=f0.split(C),w0=$1.length;D1.push({types:h0,content:$1[0]});for(var e0=1;e0<w0;e0++)_(D1),i0.push(D1=[]),D1.push({types:h0,content:$1[e0]})}J1--,y.pop(),K.pop(),n1.pop(),y1.pop()}return _(D1),i0},E=function(g1,y){var K=g1.plain,n1=Object.create(null),y1=g1.styles.reduce(function(L1,J1){var D1=J1.languages,i0=J1.style;return D1&&!D1.includes(y)||J1.types.forEach(function(f0){var h0=w({},L1[f0],i0);L1[f0]=h0}),L1},n1);return y1.root=K,y1.plain=w({},K,{backgroundColor:null}),y1};function L(g1,y){var K={};for(var n1 in g1)Object.prototype.hasOwnProperty.call(g1,n1)&&y.indexOf(n1)===-1&&(K[n1]=g1[n1]);return K}var P=function(g1){function y(){for(var K=this,n1=[],y1=arguments.length;y1--;)n1[y1]=arguments[y1];g1.apply(this,n1),M(this,"getThemeDict",function(L1){if(K.themeDict!==void 0&&L1.theme===K.prevTheme&&L1.language===K.prevLanguage)return K.themeDict;K.prevTheme=L1.theme,K.prevLanguage=L1.language;var J1=L1.theme?E(L1.theme,L1.language):void 0;return K.themeDict=J1}),M(this,"getLineProps",function(L1){var J1=L1.key,D1=L1.className,i0=L1.style,f0=L(L1,["key","className","style","line"]),h0=f0,k1=w({},h0,{className:"token-line",style:void 0,key:void 0}),j1=K.getThemeDict(K.props);return j1!==void 0&&(k1.style=j1.plain),i0!==void 0&&(k1.style=k1.style!==void 0?w({},k1.style,i0):i0),J1!==void 0&&(k1.key=J1),D1&&(k1.className+=" "+D1),k1}),M(this,"getStyleForToken",function(L1){var J1=L1.types,D1=L1.empty,i0=J1.length,f0=K.getThemeDict(K.props);if(f0!==void 0){{if(i0===1&&J1[0]==="plain")return D1?{display:"inline-block"}:void 0;if(i0===1&&!D1)return f0[J1[0]]}var h0=D1?{display:"inline-block"}:{},k1=J1.map(function(j1){return f0[j1]});return Object.assign.apply(Object,[h0].concat(k1))}}),M(this,"getTokenProps",function(L1){var J1=L1.key,D1=L1.className,i0=L1.style,f0=L1.token,h0=L(L1,["key","className","style","token"]),k1=h0,j1=w({},k1,{className:"token "+f0.types.join(" "),children:f0.content,style:K.getStyleForToken(f0),key:void 0});return i0!==void 0&&(j1.style=j1.style!==void 0?w({},j1.style,i0):i0),J1!==void 0&&(j1.key=J1),D1&&(j1.className+=" "+D1),j1}),M(this,"tokenize",function(L1,J1,D1,i0){var f0={code:J1,grammar:D1,language:i0,tokens:[]};L1.hooks.run("before-tokenize",f0);var h0=f0.tokens=L1.tokenize(f0.code,f0.grammar,f0.language);return L1.hooks.run("after-tokenize",f0),h0})}return g1&&(y.__proto__=g1),y.prototype=Object.create(g1&&g1.prototype),y.prototype.constructor=y,y.prototype.render=function(){var n1=this.props,y1=n1.Prism,L1=n1.language,J1=n1.code,D1=n1.children,i0=this.getThemeDict(this.props),f0=y1.languages[L1],h0=f0!==void 0?this.tokenize(y1,J1,f0,L1):[J1],k1=b(h0);return D1({tokens:k1,className:"prism-code language-"+L1,style:i0!==void 0?i0.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},y}(h.Component),S=P;function F(g1=!1){const[y,K]=(0,h.useState)(g1),n1=(0,h.useMemo)(()=>({on:()=>K(!0),off:()=>K(!1),toggle:()=>K(y1=>!y1)}),[]);return[y,n1]}var j=a(25243),J=a(57430),e1=a(24974),t1=a(33669),X=a(55546),Q=a(4305),R=a(71406),f1=a(8159),a1=(0,f1.I)({d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",displayName:"CopyIcon"}),D=a(54944),Z=a.n(D),U={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},Y=U,N={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},W=N,z1={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},E1=z1,w1={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},c1=w1,G1={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},B1=G1,S1={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",punctuation:"#5FB3B3",tag:"#fc929e",function:"#79b6f2",className:"#FAC863",method:"#6699CC",operator:"#fc929e"},C1={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:S1.keyword}},{types:["attr-value"],style:{color:S1.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:S1.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:S1.primitive}},{types:["boolean"],style:{color:S1.boolean}},{types:["tag"],style:{color:S1.tag}},{types:["string"],style:{color:S1.string}},{types:["punctuation"],style:{color:S1.string}},{types:["selector","char","builtin","inserted"],style:{color:S1.char}},{types:["function"],style:{color:S1.function}},{types:["operator","entity","url","variable"],style:{color:S1.variable}},{types:["keyword"],style:{color:S1.keyword}},{types:["atrule","class-name"],style:{color:S1.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},S0=C1,L0={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},Q0=L0,D0={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},z5=D0,g5={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},o0=g5,H0={plain:{background:"#2a2139",backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},x0=H0,U1={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},V1=U1,s1={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},h1=s1,u1={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},F1=u1,Z1,u0;(function(g1){g1.DRACULA="dracula",g1.DUOTONEDARE="duotoneDark",g1.DUOTONELIGHT="duotoneLight",g1.GITHUB="github",g1.NIGHTOWLLIGHT="nightOwlLight",g1.NIGHTOWLDARK="nightOwl",g1.OCEANICNEXT="oceanicNext",g1.OKAIDIA="okaidia",g1.PALENIGHT="palenight",g1.SHADESOFPURPLE="shadesOfPurple",g1.SYNTHWAVE84="synthwave84",g1.ULTRAMIN="ultramin",g1.VSLIGHT="vsLight",g1.VSDARK="vsDark"})(u0||(u0={}));var l0=(Z1={},(0,s.Z)(Z1,u0.DRACULA,Y),(0,s.Z)(Z1,u0.DUOTONELIGHT,W),(0,s.Z)(Z1,u0.DUOTONEDARE,g),(0,s.Z)(Z1,u0.GITHUB,E1),(0,s.Z)(Z1,u0.NIGHTOWLLIGHT,c1),(0,s.Z)(Z1,u0.NIGHTOWLDARK,B1),(0,s.Z)(Z1,u0.OCEANICNEXT,S0),(0,s.Z)(Z1,u0.OKAIDIA,Q0),(0,s.Z)(Z1,u0.PALENIGHT,z5),(0,s.Z)(Z1,u0.SHADESOFPURPLE,o0),(0,s.Z)(Z1,u0.SYNTHWAVE84,x0),(0,s.Z)(Z1,u0.ULTRAMIN,V1),(0,s.Z)(Z1,u0.VSLIGHT,h1),(0,s.Z)(Z1,u0.VSDARK,F1),Z1),v0={dark:u0.VSDARK,light:u0.VSLIGHT},G0={acss:"css",axml:"markup"},X0=function(y){var K,n1=y.children,y1=y.lang,L1=y.showlinenumber,J1=y.theme,D1=(0,h.useRef)(),i0=F(),f0=(0,o.Z)(i0,2),h0=f0[0],k1=f0[1].toggle,j1=(0,h.useCallback)(function(){k1(),clearTimeout(D1.current),D1.current=setTimeout(k1,2e3)},[]),$1=(0,h.useMemo)(function(){var K1=J1!=null?J1:v0;return typeof K1=="string"&&K1 in l0?[l0[K1],l0[K1]]:Array.isArray(K1)&&K1.every(function(_0){return typeof _0=="string"&&l0[_0]})?K1.map(function(_0){return l0[_0]}):(0,l.Z)(K1)==="object"&&"light"in K1&&"dark"in K1&&Object.values(K1).every(function(_0){return l0[_0]})?[l0[K1.light],l0[K1.dark]]:[l0[v0.light],l0[v0.dark]]},[J1]),w0=(0,o.Z)($1,2),e0=w0[0],t0=w0[1],R1=(0,j.ff)(e0,t0);return h.createElement(J.K,{w:"full",position:"relative"},h.createElement(e1.U,{w:"full",justifyContent:"flex-end",position:"absolute",top:0,left:0,opacity:0,transitionDuration:"0.3s",transitionProperty:"opacity",_hover:{opacity:1}},h.createElement(Z(),{text:n1,onCopy:j1},h.createElement(t1.z,{colorScheme:"brand",variant:"ghost"},h0?h.createElement(R.n,{color:"brand.300"}):h.createElement(a1,null)))),h.createElement(S,(0,n.Z)({},I,{theme:R1,code:n1.trim(),language:(K=G0[y1])!==null&&K!==void 0?K:y1}),function(K1){var _0=K1.className,P0=K1.style,a5=K1.tokens,m1=K1.getLineProps,T1=K1.getTokenProps;return h.createElement(X.xu,{as:"pre",className:_0,style:P0,mt:"0!important",paddingBlock:4,paddingInline:5,overflow:"scroll"},a5.map(function(V0,A0){return h.createElement(X.xu,(0,n.Z)({key:A0},m1({line:V0,key:A0}),{display:"flex",alignItems:"center"}),L1&&h.createElement(Q.x,{ml:-2,mr:2,opacity:.4},A0+1),h.createElement(X.xu,null,V0.map(function(R0,J0){return h.createElement(Q.x,(0,n.Z)({as:"span",key:J0},T1({token:R0,key:J0})))})))}))}))},F0=X0},72250:function(d,f,a){"use strict";a.d(f,{Kn:function(){return l},ad:function(){return o},o8:function(){return s},wd:function(){return h},xb:function(){return p},zx:function(){return u}});var n;function l(z){return Object.prototype.toString.call(z)==="[object Object]"}var o=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(n=navigator)===null||n===void 0?void 0:n.platform:"");function s(z){return Object.prototype.toString.call(z)==="[object Undefined]"}function h(z){return/^(\w+:)\/\/|^(mailto|tel):/.test(z)}function p(z){return!(Array.isArray(z)?z.length:l(z)?Object.entries(z).length:z)}function u(z,x,g){var I,M=z.id,w=x[g];if("base"in z&&!z.base.includes(M))return w;var C="".concat(g,".").concat(M);return(I=x[C])!==null&&I!==void 0?I:w}},99757:function(d,f,a){"use strict";a.d(f,{Z:function(){return l}});var n=a(67722);function l(){return(0,n.WF)().themeConfig}},20929:function(d){var f=Object.defineProperty,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,o=(_,H)=>{for(var b in H)f(_,b,{get:H[b],enumerable:!0})},s=(_,H,b,E)=>{if(H&&typeof H=="object"||typeof H=="function")for(let L of n(H))!l.call(_,L)&&L!==b&&f(_,L,{get:()=>H[L],enumerable:!(E=a(H,L))||E.enumerable});return _},h=_=>s(f({},"__esModule",{value:!0}),_),p={};o(p,{CLIENT_DEPS:()=>w,LOCAL_DUMI_DIR:()=>u,LOCAL_PAGES_DIR:()=>x,LOCAL_THEME_DIR:()=>z,PICKED_PKG_FIELDS:()=>M,SP_ROUTE_PREFIX:()=>I,THEME_PREFIX:()=>g,USELESS_TMP_FILES:()=>C}),d.exports=h(p);var u=".dumi",z=`${u}/theme`,x=`${u}/pages`,g="dumi-theme-",I="~",M={name:"",description:"",version:"",license:"",repository:"",author:"",authors:""},w=["@ant-design/icons-svg","@makotot/ghostui","deepmerge","lodash.throttle","prism-react-renderer","prismjs","rc-tabs","react-copy-to-clipboard","react-intl"],C=["tsconfig.json","typings.d.ts"]},62621:function(d,f,a){"use strict";a.d(f,{Z:function(){return G1}});var n=a(93236),l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(B1,S1,C1)=>S1 in B1?l(B1,S1,{enumerable:!0,configurable:!0,writable:!0,value:C1}):B1[S1]=C1,u=(B1,S1)=>{for(var C1 in S1||(S1={}))s.call(S1,C1)&&p(B1,C1,S1[C1]);if(o)for(var C1 of o(S1))h.call(S1,C1)&&p(B1,C1,S1[C1]);return B1};const z=B1=>n.createElement("svg",u({viewBox:"64 64 896 896"},B1),n.createElement("path",{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}),n.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var x="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6Ii8+PC9zdmc+",g=Object.defineProperty,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,C=(B1,S1,C1)=>S1 in B1?g(B1,S1,{enumerable:!0,configurable:!0,writable:!0,value:C1}):B1[S1]=C1,_=(B1,S1)=>{for(var C1 in S1||(S1={}))M.call(S1,C1)&&C(B1,C1,S1[C1]);if(I)for(var C1 of I(S1))w.call(S1,C1)&&C(B1,C1,S1[C1]);return B1};const H=B1=>n.createElement("svg",_({viewBox:"64 64 896 896"},B1),n.createElement("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}),n.createElement("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var b="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjg1LjQgMzU0LjhjMC00LjQtMy42LTgtOC04bC02NiAuM0w1MTIgNDY1LjZsLTk5LjMtMTE4LjQtNjYuMS0uM2MtNC40IDAtOCAzLjUtOCA4IDAgMS45LjcgMy43IDEuOSA1LjJsMTMwLjEgMTU1TDM0MC41IDY3MGE4LjMyIDguMzIgMCAwIDAtMS45IDUuMmMwIDQuNCAzLjYgOCA4IDhsNjYuMS0uM0w1MTIgNTY0LjRsOTkuMyAxMTguNCA2NiAuM2M0LjQgMCA4LTMuNSA4LTggMC0xLjktLjctMy43LTEuOS01LjJMNTUzLjUgNTE1bDEzMC4xLTE1NWMxLjItMS40IDEuOC0zLjMgMS44LTUuMnoiLz48cGF0aCBkPSJNNTEyIDY1QzI2NC42IDY1IDY0IDI2NS42IDY0IDUxM3MyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NSA1MTIgNjV6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjwvc3ZnPg==",E=Object.defineProperty,L=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,F=(B1,S1,C1)=>S1 in B1?E(B1,S1,{enumerable:!0,configurable:!0,writable:!0,value:C1}):B1[S1]=C1,j=(B1,S1)=>{for(var C1 in S1||(S1={}))P.call(S1,C1)&&F(B1,C1,S1[C1]);if(L)for(var C1 of L(S1))S.call(S1,C1)&&F(B1,C1,S1[C1]);return B1};const J=B1=>n.createElement("svg",j({viewBox:"64 64 896 896"},B1),n.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),n.createElement("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}));var e1="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik00NjQgMzM2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAtOTYgMHptNzIgMTEyaC00OGMtNC40IDAtOCAzLjYtOCA4djI3MmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQ1NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+",t1=Object.defineProperty,X=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,f1=(B1,S1,C1)=>S1 in B1?t1(B1,S1,{enumerable:!0,configurable:!0,writable:!0,value:C1}):B1[S1]=C1,a1=(B1,S1)=>{for(var C1 in S1||(S1={}))Q.call(S1,C1)&&f1(B1,C1,S1[C1]);if(X)for(var C1 of X(S1))R.call(S1,C1)&&f1(B1,C1,S1[C1]);return B1};const D=B1=>n.createElement("svg",a1({viewBox:"64 64 896 896"},B1),n.createElement("path",{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}));var Z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDY0IDcyMGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwLTk2IDB6bTE2LTMwNHYxODRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY0MTZjMC00LjQtMy42LTgtOC04aC00OGMtNC40IDAtOCAzLjYtOCA4em00NzUuNyA0NDAtNDE2LTcyMGMtNi4yLTEwLjctMTYuOS0xNi0yNy43LTE2cy0yMS42IDUuMy0yNy43IDE2bC00MTYgNzIwQzU2IDg3Ny40IDcxLjQgOTA0IDk2IDkwNGg4MzJjMjQuNiAwIDQwLTI2LjYgMjcuNy00OHptLTc4My41LTI3LjlMNTEyIDIzOS45bDMzOS44IDU4OC4ySDE3Mi4yeiIvPjwvc3ZnPg==";function U(B1,S1){return E1(B1)||z1(B1,S1)||N(B1,S1)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(B1,S1){if(B1){if(typeof B1=="string")return W(B1,S1);var C1=Object.prototype.toString.call(B1).slice(8,-1);if(C1==="Object"&&B1.constructor&&(C1=B1.constructor.name),C1==="Map"||C1==="Set")return Array.from(B1);if(C1==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C1))return W(B1,S1)}}function W(B1,S1){(S1==null||S1>B1.length)&&(S1=B1.length);for(var C1=0,S0=new Array(S1);C1<S1;C1++)S0[C1]=B1[C1];return S0}function z1(B1,S1){var C1=B1==null?null:typeof Symbol!="undefined"&&B1[Symbol.iterator]||B1["@@iterator"];if(C1!=null){var S0=[],L0=!0,Q0=!1,D0,z5;try{for(C1=C1.call(B1);!(L0=(D0=C1.next()).done)&&(S0.push(D0.value),!(S1&&S0.length===S1));L0=!0);}catch(g5){Q0=!0,z5=g5}finally{try{!L0&&C1.return!=null&&C1.return()}finally{if(Q0)throw z5}}return S0}}function E1(B1){if(Array.isArray(B1))return B1}var w1={info:J,warning:D,success:z,error:H},c1=function(S1){var C1=(0,n.useState)(function(){return w1[S1.type]}),S0=U(C1,1),L0=S0[0];return n.createElement("div",{className:"dumi-default-container markdown","data-type":S1.type},n.createElement(L0,null),n.createElement("h4",null,S1.title||S1.type.toUpperCase()),n.createElement("section",null,S1.children))},G1=c1},18280:function(d,f,a){"use strict";a.d(f,{Ep:function(){return _},PP:function(){return g},aU:function(){return l},cP:function(){return H},lX:function(){return z},q_:function(){return x}});var n=a(51163),l;(function(b){b.Pop="POP",b.Push="PUSH",b.Replace="REPLACE"})(l||(l={}));var o=function(b){return b};function s(b,E){if(!b){typeof console!="undefined"&&console.warn(E);try{throw new Error(E)}catch(L){}}}var h="beforeunload",p="hashchange",u="popstate";function z(b){b===void 0&&(b={});var E=b,L=E.window,P=L===void 0?document.defaultView:L,S=P.history;function F(){var w1=P.location,c1=w1.pathname,G1=w1.search,B1=w1.hash,S1=S.state||{};return[S1.idx,o({pathname:c1,search:G1,hash:B1,state:S1.usr||null,key:S1.key||"default"})]}var j=null;function J(){if(j)f1.call(j),j=null;else{var w1=l.Pop,c1=F(),G1=c1[0],B1=c1[1];if(f1.length){if(G1!=null){var S1=X-G1;S1&&(j={action:w1,location:B1,retry:function(){z1(S1*-1)}},z1(S1))}}else Y(w1)}}P.addEventListener(u,J);var e1=l.Pop,t1=F(),X=t1[0],Q=t1[1],R=w(),f1=w();X==null&&(X=0,S.replaceState((0,n.Z)({},S.state,{idx:X}),""));function a1(w1){return typeof w1=="string"?w1:_(w1)}function D(w1,c1){return c1===void 0&&(c1=null),o((0,n.Z)({pathname:Q.pathname,hash:"",search:""},typeof w1=="string"?H(w1):w1,{state:c1,key:C()}))}function Z(w1,c1){return[{usr:w1.state,key:w1.key,idx:c1},a1(w1)]}function U(w1,c1,G1){return!f1.length||(f1.call({action:w1,location:c1,retry:G1}),!1)}function Y(w1){e1=w1;var c1=F();X=c1[0],Q=c1[1],R.call({action:e1,location:Q})}function N(w1,c1){var G1=l.Push,B1=D(w1,c1);function S1(){N(w1,c1)}if(U(G1,B1,S1)){var C1=Z(B1,X+1),S0=C1[0],L0=C1[1];try{S.pushState(S0,"",L0)}catch(Q0){P.location.assign(L0)}Y(G1)}}function W(w1,c1){var G1=l.Replace,B1=D(w1,c1);function S1(){W(w1,c1)}if(U(G1,B1,S1)){var C1=Z(B1,X),S0=C1[0],L0=C1[1];S.replaceState(S0,"",L0),Y(G1)}}function z1(w1){S.go(w1)}var E1={get action(){return e1},get location(){return Q},createHref:a1,push:N,replace:W,go:z1,back:function(){z1(-1)},forward:function(){z1(1)},listen:function(c1){return R.push(c1)},block:function(c1){var G1=f1.push(c1);return f1.length===1&&P.addEventListener(h,M),function(){G1(),f1.length||P.removeEventListener(h,M)}}};return E1}function x(b){b===void 0&&(b={});var E=b,L=E.window,P=L===void 0?document.defaultView:L,S=P.history;function F(){var c1=H(P.location.hash.substr(1)),G1=c1.pathname,B1=G1===void 0?"/":G1,S1=c1.search,C1=S1===void 0?"":S1,S0=c1.hash,L0=S0===void 0?"":S0,Q0=S.state||{};return[Q0.idx,o({pathname:B1,search:C1,hash:L0,state:Q0.usr||null,key:Q0.key||"default"})]}var j=null;function J(){if(j)f1.call(j),j=null;else{var c1=l.Pop,G1=F(),B1=G1[0],S1=G1[1];if(f1.length){if(B1!=null){var C1=X-B1;C1&&(j={action:c1,location:S1,retry:function(){E1(C1*-1)}},E1(C1))}}else N(c1)}}P.addEventListener(u,J),P.addEventListener(p,function(){var c1=F(),G1=c1[1];_(G1)!==_(Q)&&J()});var e1=l.Pop,t1=F(),X=t1[0],Q=t1[1],R=w(),f1=w();X==null&&(X=0,S.replaceState((0,n.Z)({},S.state,{idx:X}),""));function a1(){var c1=document.querySelector("base"),G1="";if(c1&&c1.getAttribute("href")){var B1=P.location.href,S1=B1.indexOf("#");G1=S1===-1?B1:B1.slice(0,S1)}return G1}function D(c1){return a1()+"#"+(typeof c1=="string"?c1:_(c1))}function Z(c1,G1){return G1===void 0&&(G1=null),o((0,n.Z)({pathname:Q.pathname,hash:"",search:""},typeof c1=="string"?H(c1):c1,{state:G1,key:C()}))}function U(c1,G1){return[{usr:c1.state,key:c1.key,idx:G1},D(c1)]}function Y(c1,G1,B1){return!f1.length||(f1.call({action:c1,location:G1,retry:B1}),!1)}function N(c1){e1=c1;var G1=F();X=G1[0],Q=G1[1],R.call({action:e1,location:Q})}function W(c1,G1){var B1=l.Push,S1=Z(c1,G1);function C1(){W(c1,G1)}if(Y(B1,S1,C1)){var S0=U(S1,X+1),L0=S0[0],Q0=S0[1];try{S.pushState(L0,"",Q0)}catch(D0){P.location.assign(Q0)}N(B1)}}function z1(c1,G1){var B1=l.Replace,S1=Z(c1,G1);function C1(){z1(c1,G1)}if(Y(B1,S1,C1)){var S0=U(S1,X),L0=S0[0],Q0=S0[1];S.replaceState(L0,"",Q0),N(B1)}}function E1(c1){S.go(c1)}var w1={get action(){return e1},get location(){return Q},createHref:D,push:W,replace:z1,go:E1,back:function(){E1(-1)},forward:function(){E1(1)},listen:function(G1){return R.push(G1)},block:function(G1){var B1=f1.push(G1);return f1.length===1&&P.addEventListener(h,M),function(){B1(),f1.length||P.removeEventListener(h,M)}}};return w1}function g(b){b===void 0&&(b={});var E=b,L=E.initialEntries,P=L===void 0?["/"]:L,S=E.initialIndex,F=P.map(function(N){var W=o((0,n.Z)({pathname:"/",search:"",hash:"",state:null,key:C()},typeof N=="string"?H(N):N));return W}),j=I(S==null?F.length-1:S,0,F.length-1),J=l.Pop,e1=F[j],t1=w(),X=w();function Q(N){return typeof N=="string"?N:_(N)}function R(N,W){return W===void 0&&(W=null),o((0,n.Z)({pathname:e1.pathname,search:"",hash:""},typeof N=="string"?H(N):N,{state:W,key:C()}))}function f1(N,W,z1){return!X.length||(X.call({action:N,location:W,retry:z1}),!1)}function a1(N,W){J=N,e1=W,t1.call({action:J,location:e1})}function D(N,W){var z1=l.Push,E1=R(N,W);function w1(){D(N,W)}f1(z1,E1,w1)&&(j+=1,F.splice(j,F.length,E1),a1(z1,E1))}function Z(N,W){var z1=l.Replace,E1=R(N,W);function w1(){Z(N,W)}f1(z1,E1,w1)&&(F[j]=E1,a1(z1,E1))}function U(N){var W=I(j+N,0,F.length-1),z1=l.Pop,E1=F[W];function w1(){U(N)}f1(z1,E1,w1)&&(j=W,a1(z1,E1))}var Y={get index(){return j},get action(){return J},get location(){return e1},createHref:Q,push:D,replace:Z,go:U,back:function(){U(-1)},forward:function(){U(1)},listen:function(W){return t1.push(W)},block:function(W){return X.push(W)}};return Y}function I(b,E,L){return Math.min(Math.max(b,E),L)}function M(b){b.preventDefault(),b.returnValue=""}function w(){var b=[];return{get length(){return b.length},push:function(L){return b.push(L),function(){b=b.filter(function(P){return P!==L})}},call:function(L){b.forEach(function(P){return P&&P(L)})}}}function C(){return Math.random().toString(36).substr(2,8)}function _(b){var E=b.pathname,L=E===void 0?"/":E,P=b.search,S=P===void 0?"":P,F=b.hash,j=F===void 0?"":F;return S&&S!=="?"&&(L+=S.charAt(0)==="?"?S:"?"+S),j&&j!=="#"&&(L+=j.charAt(0)==="#"?j:"#"+j),L}function H(b){var E={};if(b){var L=b.indexOf("#");L>=0&&(E.hash=b.substr(L),b=b.substr(0,L));var P=b.indexOf("?");P>=0&&(E.search=b.substr(P),b=b.substr(0,P)),b&&(E.pathname=b)}return E}},72535:function(d,f,a){"use strict";var n=a(56237),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[n.ForwardRef]=s,p[n.Memo]=h;function u(_){return n.isMemo(_)?h:p[_.$$typeof]||l}var z=Object.defineProperty,x=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,I=Object.getOwnPropertyDescriptor,M=Object.getPrototypeOf,w=Object.prototype;function C(_,H,b){if(typeof H!="string"){if(w){var E=M(H);E&&E!==w&&C(_,E,b)}var L=x(H);g&&(L=L.concat(g(H)));for(var P=u(_),S=u(H),F=0;F<L.length;++F){var j=L[F];if(!o[j]&&!(b&&b[j])&&!(S&&S[j])&&!(P&&P[j])){var J=I(H,j);try{z(_,j,J)}catch(e1){}}}}return _}d.exports=C},48551:function(d,f,a){"use strict";a.d(f,{C:function(){return x}});var n=a(96583),l=a(72988),o=a(19956),s=a(57602);function h(g,I){return I?(0,n.pi)((0,n.pi)((0,n.pi)({},g||{}),I||{}),Object.keys(g).reduce(function(M,w){return M[w]=(0,n.pi)((0,n.pi)({},g[w]),I[w]||{}),M},{})):g}function p(g,I){return I?Object.keys(g).reduce(function(M,w){return M[w]=h(g[w],I[w]),M},(0,n.pi)({},g)):g}function u(g){return{create:function(){return{get:function(I){return g[I]},set:function(I,M){g[I]=M}}}}}function z(g){return g===void 0&&(g={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:(0,o.Z)(function(){for(var I,M=[],w=0;w<arguments.length;w++)M[w]=arguments[w];return new((I=Intl.NumberFormat).bind.apply(I,(0,n.ev)([void 0],M,!1)))},{cache:u(g.number),strategy:o.A.variadic}),getDateTimeFormat:(0,o.Z)(function(){for(var I,M=[],w=0;w<arguments.length;w++)M[w]=arguments[w];return new((I=Intl.DateTimeFormat).bind.apply(I,(0,n.ev)([void 0],M,!1)))},{cache:u(g.dateTime),strategy:o.A.variadic}),getPluralRules:(0,o.Z)(function(){for(var I,M=[],w=0;w<arguments.length;w++)M[w]=arguments[w];return new((I=Intl.PluralRules).bind.apply(I,(0,n.ev)([void 0],M,!1)))},{cache:u(g.pluralRules),strategy:o.A.variadic})}}var x=function(){function g(I,M,w,C){M===void 0&&(M=g.defaultLocale);var _=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(L){var P=_.formatToParts(L);if(P.length===1)return P[0].value;var S=P.reduce(function(F,j){return!F.length||j.type!==s.du.literal||typeof F[F.length-1]!="string"?F.push(j.value):F[F.length-1]+=j.value,F},[]);return S.length<=1?S[0]||"":S},this.formatToParts=function(L){return(0,s.FK)(_.ast,_.locales,_.formatters,_.formats,L,void 0,_.message)},this.resolvedOptions=function(){var L;return{locale:((L=_.resolvedLocale)===null||L===void 0?void 0:L.toString())||Intl.NumberFormat.supportedLocalesOf(_.locales)[0]}},this.getAst=function(){return _.ast},this.locales=M,this.resolvedLocale=g.resolveLocale(M),typeof I=="string"){if(this.message=I,!g.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var H=C||{},b=H.formatters,E=(0,n._T)(H,["formatters"]);this.ast=g.__parse(I,(0,n.pi)((0,n.pi)({},E),{locale:this.resolvedLocale}))}else this.ast=I;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=p(g.formats,w),this.formatters=C&&C.formatters||z(this.formatterCache)}return Object.defineProperty(g,"defaultLocale",{get:function(){return g.memoizedDefaultLocale||(g.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),g.memoizedDefaultLocale},enumerable:!1,configurable:!0}),g.memoizedDefaultLocale=null,g.resolveLocale=function(I){if(typeof Intl.Locale!="undefined"){var M=Intl.NumberFormat.supportedLocalesOf(I);return M.length>0?new Intl.Locale(M[0]):new Intl.Locale(typeof I=="string"?I:I[0])}},g.__parse=l.Qc,g.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},g}()},8057:function(d,f,a){"use strict";a.d(f,{C8:function(){return s},HR:function(){return p},YR:function(){return h},jK:function(){return l},u_:function(){return o}});var n=a(96583),l;(function(u){u.MISSING_VALUE="MISSING_VALUE",u.INVALID_VALUE="INVALID_VALUE",u.MISSING_INTL_API="MISSING_INTL_API"})(l||(l={}));var o=function(u){(0,n.ZT)(z,u);function z(x,g,I){var M=u.call(this,x)||this;return M.code=g,M.originalMessage=I,M}return z.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},z}(Error),s=function(u){(0,n.ZT)(z,u);function z(x,g,I,M){return u.call(this,'Invalid values for "'.concat(x,'": "').concat(g,'". Options are "').concat(Object.keys(I).join('", "'),'"'),l.INVALID_VALUE,M)||this}return z}(o),h=function(u){(0,n.ZT)(z,u);function z(x,g,I){return u.call(this,'Value for "'.concat(x,'" must be of type ').concat(g),l.INVALID_VALUE,I)||this}return z}(o),p=function(u){(0,n.ZT)(z,u);function z(x,g){return u.call(this,'The intl string context variable "'.concat(x,'" was not provided to the string "').concat(g,'"'),l.MISSING_VALUE,g)||this}return z}(o)},57602:function(d,f,a){"use strict";a.d(f,{FK:function(){return p},Gt:function(){return h},du:function(){return o}});var n=a(72988),l=a(8057),o;(function(u){u[u.literal=0]="literal",u[u.object=1]="object"})(o||(o={}));function s(u){return u.length<2?u:u.reduce(function(z,x){var g=z[z.length-1];return!g||g.type!==o.literal||x.type!==o.literal?z.push(x):g.value+=x.value,z},[])}function h(u){return typeof u=="function"}function p(u,z,x,g,I,M,w){if(u.length===1&&(0,n.O4)(u[0]))return[{type:o.literal,value:u[0].value}];for(var C=[],_=0,H=u;_<H.length;_++){var b=H[_];if((0,n.O4)(b)){C.push({type:o.literal,value:b.value});continue}if((0,n.yx)(b)){typeof M=="number"&&C.push({type:o.literal,value:x.getNumberFormat(z).format(M)});continue}var E=b.value;if(!(I&&E in I))throw new l.HR(E,w);var L=I[E];if((0,n.VG)(b)){(!L||typeof L=="string"||typeof L=="number")&&(L=typeof L=="string"||typeof L=="number"?String(L):""),C.push({type:typeof L=="string"?o.literal:o.object,value:L});continue}if((0,n.rp)(b)){var P=typeof b.style=="string"?g.date[b.style]:(0,n.Ii)(b.style)?b.style.parsedOptions:void 0;C.push({type:o.literal,value:x.getDateTimeFormat(z,P).format(L)});continue}if((0,n.pe)(b)){var P=typeof b.style=="string"?g.time[b.style]:(0,n.Ii)(b.style)?b.style.parsedOptions:g.time.medium;C.push({type:o.literal,value:x.getDateTimeFormat(z,P).format(L)});continue}if((0,n.uf)(b)){var P=typeof b.style=="string"?g.number[b.style]:(0,n.Wh)(b.style)?b.style.parsedOptions:void 0;P&&P.scale&&(L=L*(P.scale||1)),C.push({type:o.literal,value:x.getNumberFormat(z,P).format(L)});continue}if((0,n.HI)(b)){var S=b.children,F=b.value,j=I[F];if(!h(j))throw new l.YR(F,"function",w);var J=p(S,z,x,g,I,M),e1=j(J.map(function(Q){return Q.value}));Array.isArray(e1)||(e1=[e1]),C.push.apply(C,e1.map(function(Q){return{type:typeof Q=="string"?o.literal:o.object,value:Q}}))}if((0,n.Wi)(b)){var t1=b.options[L]||b.options.other;if(!t1)throw new l.C8(b.value,L,Object.keys(b.options),w);C.push.apply(C,p(t1.value,z,x,g,I));continue}if((0,n.Jo)(b)){var t1=b.options["=".concat(L)];if(!t1){if(!Intl.PluralRules)throw new l.u_(`Intl.PluralRules is not available in this environment.
  Try polyfilling it using "@formatjs/intl-pluralrules"
  `,l.jK.MISSING_INTL_API,w);var X=x.getPluralRules(z,{type:b.pluralType}).select(L-(b.offset||0));t1=b.options[X]||b.options.other}if(!t1)throw new l.C8(b.value,L,Object.keys(b.options),w);C.push.apply(C,p(t1.value,z,x,g,I,L-(b.offset||0)));continue}}return s(C)}},53670:function(d){"use strict";var f=function(a,n,l,o,s,h,p,u){if(!a){var z;if(n===void 0)z=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var x=[l,o,s,h,p,u],g=0;z=new Error(n.replace(/%s/g,function(){return x[g++]})),z.name="Invariant Violation"}throw z.framesToPop=1,z}};d.exports=f},81138:function(d,f,a){d=a.nmd(d);var n=200,l="__lodash_hash_undefined__",o=800,s=16,h=9007199254740991,p="[object Arguments]",u="[object Array]",z="[object AsyncFunction]",x="[object Boolean]",g="[object Date]",I="[object Error]",M="[object Function]",w="[object GeneratorFunction]",C="[object Map]",_="[object Number]",H="[object Null]",b="[object Object]",E="[object Proxy]",L="[object RegExp]",P="[object Set]",S="[object String]",F="[object Undefined]",j="[object WeakMap]",J="[object ArrayBuffer]",e1="[object DataView]",t1="[object Float32Array]",X="[object Float64Array]",Q="[object Int8Array]",R="[object Int16Array]",f1="[object Int32Array]",a1="[object Uint8Array]",D="[object Uint8ClampedArray]",Z="[object Uint16Array]",U="[object Uint32Array]",Y=/[\\^$.*+?()[\]{}|]/g,N=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,z1={};z1[t1]=z1[X]=z1[Q]=z1[R]=z1[f1]=z1[a1]=z1[D]=z1[Z]=z1[U]=!0,z1[p]=z1[u]=z1[J]=z1[x]=z1[e1]=z1[g]=z1[I]=z1[M]=z1[C]=z1[_]=z1[b]=z1[L]=z1[P]=z1[S]=z1[j]=!1;var E1=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,w1=typeof self=="object"&&self&&self.Object===Object&&self,c1=E1||w1||Function("return this")(),G1=f&&!f.nodeType&&f,B1=G1&&!0&&d&&!d.nodeType&&d,S1=B1&&B1.exports===G1,C1=S1&&E1.process,S0=function(){try{var v1=B1&&B1.require&&B1.require("util").types;return v1||C1&&C1.binding&&C1.binding("util")}catch(A1){}}(),L0=S0&&S0.isTypedArray;function Q0(v1,A1,W1){switch(W1.length){case 0:return v1.call(A1);case 1:return v1.call(A1,W1[0]);case 2:return v1.call(A1,W1[0],W1[1]);case 3:return v1.call(A1,W1[0],W1[1],W1[2])}return v1.apply(A1,W1)}function D0(v1,A1){for(var W1=-1,K0=Array(v1);++W1<v1;)K0[W1]=A1(W1);return K0}function z5(v1){return function(A1){return v1(A1)}}function g5(v1,A1){return v1==null?void 0:v1[A1]}function o0(v1,A1){return function(W1){return v1(A1(W1))}}var H0=Array.prototype,x0=Function.prototype,U1=Object.prototype,V1=c1["__core-js_shared__"],s1=x0.toString,h1=U1.hasOwnProperty,u1=function(){var v1=/[^.]+$/.exec(V1&&V1.keys&&V1.keys.IE_PROTO||"");return v1?"Symbol(src)_1."+v1:""}(),F1=U1.toString,Z1=s1.call(Object),u0=RegExp("^"+s1.call(h1).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),l0=S1?c1.Buffer:void 0,v0=c1.Symbol,G0=c1.Uint8Array,X0=l0?l0.allocUnsafe:void 0,F0=o0(Object.getPrototypeOf,Object),g1=Object.create,y=U1.propertyIsEnumerable,K=H0.splice,n1=v0?v0.toStringTag:void 0,y1=function(){try{var v1=s5(Object,"defineProperty");return v1({},"",{}),v1}catch(A1){}}(),L1=l0?l0.isBuffer:void 0,J1=Math.max,D1=Date.now,i0=s5(c1,"Map"),f0=s5(Object,"create"),h0=function(){function v1(){}return function(A1){if(!q0(A1))return{};if(g1)return g1(A1);v1.prototype=A1;var W1=new v1;return v1.prototype=void 0,W1}}();function k1(v1){var A1=-1,W1=v1==null?0:v1.length;for(this.clear();++A1<W1;){var K0=v1[A1];this.set(K0[0],K0[1])}}function j1(){this.__data__=f0?f0(null):{},this.size=0}function $1(v1){var A1=this.has(v1)&&delete this.__data__[v1];return this.size-=A1?1:0,A1}function w0(v1){var A1=this.__data__;if(f0){var W1=A1[v1];return W1===l?void 0:W1}return h1.call(A1,v1)?A1[v1]:void 0}function e0(v1){var A1=this.__data__;return f0?A1[v1]!==void 0:h1.call(A1,v1)}function t0(v1,A1){var W1=this.__data__;return this.size+=this.has(v1)?0:1,W1[v1]=f0&&A1===void 0?l:A1,this}k1.prototype.clear=j1,k1.prototype.delete=$1,k1.prototype.get=w0,k1.prototype.has=e0,k1.prototype.set=t0;function R1(v1){var A1=-1,W1=v1==null?0:v1.length;for(this.clear();++A1<W1;){var K0=v1[A1];this.set(K0[0],K0[1])}}function K1(){this.__data__=[],this.size=0}function _0(v1){var A1=this.__data__,W1=pt(A1,v1);if(W1<0)return!1;var K0=A1.length-1;return W1==K0?A1.pop():K.call(A1,W1,1),--this.size,!0}function P0(v1){var A1=this.__data__,W1=pt(A1,v1);return W1<0?void 0:A1[W1][1]}function a5(v1){return pt(this.__data__,v1)>-1}function m1(v1,A1){var W1=this.__data__,K0=pt(W1,v1);return K0<0?(++this.size,W1.push([v1,A1])):W1[K0][1]=A1,this}R1.prototype.clear=K1,R1.prototype.delete=_0,R1.prototype.get=P0,R1.prototype.has=a5,R1.prototype.set=m1;function T1(v1){var A1=-1,W1=v1==null?0:v1.length;for(this.clear();++A1<W1;){var K0=v1[A1];this.set(K0[0],K0[1])}}function V0(){this.size=0,this.__data__={hash:new k1,map:new(i0||R1),string:new k1}}function A0(v1){var A1=e5(this,v1).delete(v1);return this.size-=A1?1:0,A1}function R0(v1){return e5(this,v1).get(v1)}function J0(v1){return e5(this,v1).has(v1)}function L5(v1,A1){var W1=e5(this,v1),K0=W1.size;return W1.set(v1,A1),this.size+=W1.size==K0?0:1,this}T1.prototype.clear=V0,T1.prototype.delete=A0,T1.prototype.get=R0,T1.prototype.has=J0,T1.prototype.set=L5;function w5(v1){var A1=this.__data__=new R1(v1);this.size=A1.size}function k5(){this.__data__=new R1,this.size=0}function j5(v1){var A1=this.__data__,W1=A1.delete(v1);return this.size=A1.size,W1}function U5(v1){return this.__data__.get(v1)}function q5(v1){return this.__data__.has(v1)}function $5(v1,A1){var W1=this.__data__;if(W1 instanceof R1){var K0=W1.__data__;if(!i0||K0.length<n-1)return K0.push([v1,A1]),this.size=++W1.size,this;W1=this.__data__=new T1(K0)}return W1.set(v1,A1),this.size=W1.size,this}w5.prototype.clear=k5,w5.prototype.delete=j5,w5.prototype.get=U5,w5.prototype.has=q5,w5.prototype.set=$5;function At(v1,A1){var W1=M0(v1),K0=!W1&&q1(v1),y5=!W1&&!K0&&U0(v1),X5=!W1&&!K0&&!y5&&nt(v1),lt=W1||K0||y5||X5,x5=lt?D0(v1.length,String):[],S5=x5.length;for(var $t in v1)(A1||h1.call(v1,$t))&&!(lt&&($t=="length"||y5&&($t=="offset"||$t=="parent")||X5&&($t=="buffer"||$t=="byteLength"||$t=="byteOffset")||b5($t,S5)))&&x5.push($t);return x5}function ft(v1,A1,W1){(W1!==void 0&&!N1(v1[A1],W1)||W1===void 0&&!(A1 in v1))&&m5(v1,A1,W1)}function tt(v1,A1,W1){var K0=v1[A1];(!(h1.call(v1,A1)&&N1(K0,W1))||W1===void 0&&!(A1 in v1))&&m5(v1,A1,W1)}function pt(v1,A1){for(var W1=v1.length;W1--;)if(N1(v1[W1][0],A1))return W1;return-1}function m5(v1,A1,W1){A1=="__proto__"&&y1?y1(v1,A1,{configurable:!0,enumerable:!0,value:W1,writable:!0}):v1[A1]=W1}var V5=N0();function yt(v1){return v1==null?v1===void 0?F:H:n1&&n1 in Object(v1)?n5(v1):G(v1)}function Tt(v1){return i5(v1)&&yt(v1)==p}function Dt(v1){if(!q0(v1)||P5(v1))return!1;var A1=W0(v1)?u0:N;return A1.test(Y1(v1))}function Lt(v1){return i5(v1)&&r5(v1.length)&&!!z1[yt(v1)]}function dt(v1){if(!q0(v1))return V(v1);var A1=ut(v1),W1=[];for(var K0 in v1)K0=="constructor"&&(A1||!h1.call(v1,K0))||W1.push(K0);return W1}function ta(v1,A1,W1,K0,y5){v1!==A1&&V5(A1,function(X5,lt){if(y5||(y5=new w5),q0(X5))P2(v1,A1,lt,W1,ta,K0,y5);else{var x5=K0?K0(r1(v1,lt),X5,lt+"",v1,A1,y5):void 0;x5===void 0&&(x5=X5),ft(v1,lt,x5)}},G5)}function P2(v1,A1,W1,K0,y5,X5,lt){var x5=r1(v1,W1),S5=r1(A1,W1),$t=lt.get(S5);if($t){ft(v1,W1,$t);return}var St=X5?X5(x5,S5,W1+"",v1,A1,lt):void 0,I2=St===void 0;if(I2){var Ht=M0(S5),L2=!Ht&&U0(S5),D2=!Ht&&!L2&&nt(S5);St=S5,Ht||L2||D2?M0(x5)?St=x5:j0(x5)?St=b1(x5):L2?(I2=!1,St=Nt(S5,!0)):D2?(I2=!1,St=l1(S5,!0)):St=[]:M5(S5)||q1(S5)?(St=x5,q1(x5)?St=R5(x5):(!q0(x5)||W0(x5))&&(St=B5(S5))):I2=!1}I2&&(lt.set(S5,St),y5(St,S5,K0,X5,lt),lt.delete(S5)),ft(v1,W1,St)}function r2(v1,A1){return d1(O(v1,A1,at),v1+"")}var v2=y1?function(v1,A1){return y1(v1,"toString",{configurable:!0,enumerable:!1,value:Y5(A1),writable:!0})}:at;function Nt(v1,A1){if(A1)return v1.slice();var W1=v1.length,K0=X0?X0(W1):new v1.constructor(W1);return v1.copy(K0),K0}function ca(v1){var A1=new v1.constructor(v1.byteLength);return new G0(A1).set(new G0(v1)),A1}function l1(v1,A1){var W1=A1?ca(v1.buffer):v1.buffer;return new v1.constructor(W1,v1.byteOffset,v1.length)}function b1(v1,A1){var W1=-1,K0=v1.length;for(A1||(A1=Array(K0));++W1<K0;)A1[W1]=v1[W1];return A1}function y0(v1,A1,W1,K0){var y5=!W1;W1||(W1={});for(var X5=-1,lt=A1.length;++X5<lt;){var x5=A1[X5],S5=K0?K0(W1[x5],v1[x5],x5,W1,v1):void 0;S5===void 0&&(S5=v1[x5]),y5?m5(W1,x5,S5):tt(W1,x5,S5)}return W1}function E0(v1){return r2(function(A1,W1){var K0=-1,y5=W1.length,X5=y5>1?W1[y5-1]:void 0,lt=y5>2?W1[2]:void 0;for(X5=v1.length>3&&typeof X5=="function"?(y5--,X5):void 0,lt&&st(W1[0],W1[1],lt)&&(X5=y5<3?void 0:X5,y5=1),A1=Object(A1);++K0<y5;){var x5=W1[K0];x5&&v1(A1,x5,K0,X5)}return A1})}function N0(v1){return function(A1,W1,K0){for(var y5=-1,X5=Object(A1),lt=K0(A1),x5=lt.length;x5--;){var S5=lt[v1?x5:++y5];if(W1(X5[S5],S5,X5)===!1)break}return A1}}function e5(v1,A1){var W1=v1.__data__;return O5(A1)?W1[typeof A1=="string"?"string":"hash"]:W1.map}function s5(v1,A1){var W1=g5(v1,A1);return Dt(W1)?W1:void 0}function n5(v1){var A1=h1.call(v1,n1),W1=v1[n1];try{v1[n1]=void 0;var K0=!0}catch(X5){}var y5=F1.call(v1);return K0&&(A1?v1[n1]=W1:delete v1[n1]),y5}function B5(v1){return typeof v1.constructor=="function"&&!ut(v1)?h0(F0(v1)):{}}function b5(v1,A1){var W1=typeof v1;return A1=A1==null?h:A1,!!A1&&(W1=="number"||W1!="symbol"&&W.test(v1))&&v1>-1&&v1%1==0&&v1<A1}function st(v1,A1,W1){if(!q0(W1))return!1;var K0=typeof A1;return(K0=="number"?z0(W1)&&b5(A1,W1.length):K0=="string"&&A1 in W1)?N1(W1[A1],v1):!1}function O5(v1){var A1=typeof v1;return A1=="string"||A1=="number"||A1=="symbol"||A1=="boolean"?v1!=="__proto__":v1===null}function P5(v1){return!!u1&&u1 in v1}function ut(v1){var A1=v1&&v1.constructor,W1=typeof A1=="function"&&A1.prototype||U1;return v1===W1}function V(v1){var A1=[];if(v1!=null)for(var W1 in Object(v1))A1.push(W1);return A1}function G(v1){return F1.call(v1)}function O(v1,A1,W1){return A1=J1(A1===void 0?v1.length-1:A1,0),function(){for(var K0=arguments,y5=-1,X5=J1(K0.length-A1,0),lt=Array(X5);++y5<X5;)lt[y5]=K0[A1+y5];y5=-1;for(var x5=Array(A1+1);++y5<A1;)x5[y5]=K0[y5];return x5[A1]=W1(lt),Q0(v1,this,x5)}}function r1(v1,A1){if(!(A1==="constructor"&&typeof v1[A1]=="function")&&A1!="__proto__")return v1[A1]}var d1=_1(v2);function _1(v1){var A1=0,W1=0;return function(){var K0=D1(),y5=s-(K0-W1);if(W1=K0,y5>0){if(++A1>=o)return arguments[0]}else A1=0;return v1.apply(void 0,arguments)}}function Y1(v1){if(v1!=null){try{return s1.call(v1)}catch(A1){}try{return v1+""}catch(A1){}}return""}function N1(v1,A1){return v1===A1||v1!==v1&&A1!==A1}var q1=Tt(function(){return arguments}())?Tt:function(v1){return i5(v1)&&h1.call(v1,"callee")&&!y.call(v1,"callee")},M0=Array.isArray;function z0(v1){return v1!=null&&r5(v1.length)&&!W0(v1)}function j0(v1){return i5(v1)&&z0(v1)}var U0=L1||A5;function W0(v1){if(!q0(v1))return!1;var A1=yt(v1);return A1==M||A1==w||A1==z||A1==E}function r5(v1){return typeof v1=="number"&&v1>-1&&v1%1==0&&v1<=h}function q0(v1){var A1=typeof v1;return v1!=null&&(A1=="object"||A1=="function")}function i5(v1){return v1!=null&&typeof v1=="object"}function M5(v1){if(!i5(v1)||yt(v1)!=b)return!1;var A1=F0(v1);if(A1===null)return!0;var W1=h1.call(A1,"constructor")&&A1.constructor;return typeof W1=="function"&&W1 instanceof W1&&s1.call(W1)==Z1}var nt=L0?z5(L0):Lt;function R5(v1){return y0(v1,G5(v1))}function G5(v1){return z0(v1)?At(v1,!0):dt(v1)}var D5=E0(function(v1,A1,W1,K0){ta(v1,A1,W1,K0)});function Y5(v1){return function(){return v1}}function at(v1){return v1}function A5(){return!1}d.exports=D5},37581:function(d,f,a){var n,l=function(){var o=String.fromCharCode,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",p={};function u(x,g){if(!p[x]){p[x]={};for(var I=0;I<x.length;I++)p[x][x.charAt(I)]=I}return p[x][g]}var z={compressToBase64:function(x){if(x==null)return"";var g=z._compress(x,6,function(I){return s.charAt(I)});switch(g.length%4){default:case 0:return g;case 1:return g+"===";case 2:return g+"==";case 3:return g+"="}},decompressFromBase64:function(x){return x==null?"":x==""?null:z._decompress(x.length,32,function(g){return u(s,x.charAt(g))})},compressToUTF16:function(x){return x==null?"":z._compress(x,15,function(g){return o(g+32)})+" "},decompressFromUTF16:function(x){return x==null?"":x==""?null:z._decompress(x.length,16384,function(g){return x.charCodeAt(g)-32})},compressToUint8Array:function(x){for(var g=z.compress(x),I=new Uint8Array(g.length*2),M=0,w=g.length;M<w;M++){var C=g.charCodeAt(M);I[M*2]=C>>>8,I[M*2+1]=C%256}return I},decompressFromUint8Array:function(x){if(x==null)return z.decompress(x);for(var g=new Array(x.length/2),I=0,M=g.length;I<M;I++)g[I]=x[I*2]*256+x[I*2+1];var w=[];return g.forEach(function(C){w.push(o(C))}),z.decompress(w.join(""))},compressToEncodedURIComponent:function(x){return x==null?"":z._compress(x,6,function(g){return h.charAt(g)})},decompressFromEncodedURIComponent:function(x){return x==null?"":x==""?null:(x=x.replace(/ /g,"+"),z._decompress(x.length,32,function(g){return u(h,x.charAt(g))}))},compress:function(x){return z._compress(x,16,function(g){return o(g)})},_compress:function(x,g,I){if(x==null)return"";var M,w,C={},_={},H="",b="",E="",L=2,P=3,S=2,F=[],j=0,J=0,e1;for(e1=0;e1<x.length;e1+=1)if(H=x.charAt(e1),Object.prototype.hasOwnProperty.call(C,H)||(C[H]=P++,_[H]=!0),b=E+H,Object.prototype.hasOwnProperty.call(C,b))E=b;else{if(Object.prototype.hasOwnProperty.call(_,E)){if(E.charCodeAt(0)<256){for(M=0;M<S;M++)j=j<<1,J==g-1?(J=0,F.push(I(j)),j=0):J++;for(w=E.charCodeAt(0),M=0;M<8;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1}else{for(w=1,M=0;M<S;M++)j=j<<1|w,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=0;for(w=E.charCodeAt(0),M=0;M<16;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1}L--,L==0&&(L=Math.pow(2,S),S++),delete _[E]}else for(w=C[E],M=0;M<S;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1;L--,L==0&&(L=Math.pow(2,S),S++),C[b]=P++,E=String(H)}if(E!==""){if(Object.prototype.hasOwnProperty.call(_,E)){if(E.charCodeAt(0)<256){for(M=0;M<S;M++)j=j<<1,J==g-1?(J=0,F.push(I(j)),j=0):J++;for(w=E.charCodeAt(0),M=0;M<8;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1}else{for(w=1,M=0;M<S;M++)j=j<<1|w,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=0;for(w=E.charCodeAt(0),M=0;M<16;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1}L--,L==0&&(L=Math.pow(2,S),S++),delete _[E]}else for(w=C[E],M=0;M<S;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1;L--,L==0&&(L=Math.pow(2,S),S++)}for(w=2,M=0;M<S;M++)j=j<<1|w&1,J==g-1?(J=0,F.push(I(j)),j=0):J++,w=w>>1;for(;;)if(j=j<<1,J==g-1){F.push(I(j));break}else J++;return F.join("")},decompress:function(x){return x==null?"":x==""?null:z._decompress(x.length,32768,function(g){return x.charCodeAt(g)})},_decompress:function(x,g,I){var M=[],w,C=4,_=4,H=3,b="",E=[],L,P,S,F,j,J,e1,t1={val:I(0),position:g,index:1};for(L=0;L<3;L+=1)M[L]=L;for(S=0,j=Math.pow(2,2),J=1;J!=j;)F=t1.val&t1.position,t1.position>>=1,t1.position==0&&(t1.position=g,t1.val=I(t1.index++)),S|=(F>0?1:0)*J,J<<=1;switch(w=S){case 0:for(S=0,j=Math.pow(2,8),J=1;J!=j;)F=t1.val&t1.position,t1.position>>=1,t1.position==0&&(t1.position=g,t1.val=I(t1.index++)),S|=(F>0?1:0)*J,J<<=1;e1=o(S);break;case 1:for(S=0,j=Math.pow(2,16),J=1;J!=j;)F=t1.val&t1.position,t1.position>>=1,t1.position==0&&(t1.position=g,t1.val=I(t1.index++)),S|=(F>0?1:0)*J,J<<=1;e1=o(S);break;case 2:return""}for(M[3]=e1,P=e1,E.push(e1);;){if(t1.index>x)return"";for(S=0,j=Math.pow(2,H),J=1;J!=j;)F=t1.val&t1.position,t1.position>>=1,t1.position==0&&(t1.position=g,t1.val=I(t1.index++)),S|=(F>0?1:0)*J,J<<=1;switch(e1=S){case 0:for(S=0,j=Math.pow(2,8),J=1;J!=j;)F=t1.val&t1.position,t1.position>>=1,t1.position==0&&(t1.position=g,t1.val=I(t1.index++)),S|=(F>0?1:0)*J,J<<=1;M[_++]=o(S),e1=_-1,C--;break;case 1:for(S=0,j=Math.pow(2,16),J=1;J!=j;)F=t1.val&t1.position,t1.position>>=1,t1.position==0&&(t1.position=g,t1.val=I(t1.index++)),S|=(F>0?1:0)*J,J<<=1;M[_++]=o(S),e1=_-1,C--;break;case 2:return E.join("")}if(C==0&&(C=Math.pow(2,H),H++),M[e1])b=M[e1];else if(e1===_)b=P+P.charAt(0);else return null;E.push(b),M[_++]=P+b.charAt(0),C--,P=b,C==0&&(C=Math.pow(2,H),H++)}}};return z}();n=function(){return l}.call(f,a,f,d),n!==void 0&&(d.exports=n)},14224:function(d){var f=d.exports={},a,n;function l(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=l}catch(C){a=l}try{typeof clearTimeout=="function"?n=clearTimeout:n=o}catch(C){n=o}})();function s(C){if(a===setTimeout)return setTimeout(C,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(C,0);try{return a(C,0)}catch(_){try{return a.call(null,C,0)}catch(H){return a.call(this,C,0)}}}function h(C){if(n===clearTimeout)return clearTimeout(C);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(C);try{return n(C)}catch(_){try{return n.call(null,C)}catch(H){return n.call(this,C)}}}var p=[],u=!1,z,x=-1;function g(){!u||!z||(u=!1,z.length?p=z.concat(p):x=-1,p.length&&I())}function I(){if(!u){var C=s(g);u=!0;for(var _=p.length;_;){for(z=p,p=[];++x<_;)z&&z[x].run();x=-1,_=p.length}z=null,u=!1,h(C)}}f.nextTick=function(C){var _=new Array(arguments.length-1);if(arguments.length>1)for(var H=1;H<arguments.length;H++)_[H-1]=arguments[H];p.push(new M(C,_)),p.length===1&&!u&&s(I)};function M(C,_){this.fun=C,this.array=_}M.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={};function w(){}f.on=w,f.addListener=w,f.once=w,f.off=w,f.removeListener=w,f.removeAllListeners=w,f.emit=w,f.prependListener=w,f.prependOnceListener=w,f.listeners=function(C){return[]},f.binding=function(C){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(C){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},74049:function(d,f,a){"use strict";var n=a(36257);function l(){}function o(){}o.resetWarningCache=l,d.exports=function(){function s(u,z,x,g,I,M){if(M!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}s.isRequired=s;function h(){return s}var p={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:h,element:s,elementType:s,instanceOf:h,node:s,objectOf:h,oneOf:h,oneOfType:h,shape:h,exact:h,checkPropTypes:o,resetWarningCache:l};return p.PropTypes=p,p}},40507:function(d,f,a){if(!1)var n,l;else d.exports=a(74049)()},36257:function(d){"use strict";var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=f},30213:function(d,f){"use strict";f.Z=`/* \u8F93\u5165\u6846 */
  .cins-input {
    border: 1px solid #eee;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 4px;
  }

  /* \u6309\u94AE */
  .cins-button {
    background-color: #4387f7;
    border-radius: 4px;
    color: #fff;
    padding: 4px 10px;
    font-size: 12px;
    outline: none;
    &:active{
      background-color: #5697f7;
    }
  }
  `},47484:function(d,f){"use strict";f.Z=`.upload {
    width: 100%;
    margin: 10px auto;
  }

  .upload .upload-drag {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 300px;
    margin: 10px auto;
    border: 1px dashed #589ff8;
    border-radius: 6px;
    text-align: center;
  }
  .upload .upload-drag .tips {
    font-size: 30px;
    font-weight: bold;
    color: #eee;
  }
  .upload .upload-drag .tips-info {
    font-size: 14px;
    font-weight: bold;
    color: #eee;
  }
  .upload .cins-button {
    margin-right: 10px;
  }
  .upload .upload-desc {
    color: #ccc;
  }

  .upload .upload-files {
    overflow: auto;
    width: 100%;
    height: 200px;
    margin-top: 20px;
    border: 1px solid #ccc;
  }
  .upload .upload-files .files-row {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
  }
  .upload .upload-files .files-row.title {
    background-color: #eee;
  }

  .upload .upload-files .files-row > span {
    width: 25%;
    text-align: center;
  }
  `},7311:function(d,f){"use strict";f.Z=`// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6
  export const dragInHandler = (e: any) => {
    if (!e.dataTransfer.types.includes('Files')) {
      return;
    }
    e.preventDefault();
  };

  /**
   * \u62D6\u62FD\u677E\u5F00\u4E8B\u4EF6
   * @param {File} e
   * @param {Array<string>} exts \u4E0A\u4F20\u6587\u4EF6\u7C7B\u578B
   * @param {number} maxSize \u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F
   * */
  export const dropHandler = async (e: any, exts?: Array<string>, maxSize?: number) => {
    e.preventDefault();
    let results = await Promise.all(
      [...e.dataTransfer.items].map((item) =>
        handleEntry(item.webkitGetAsEntry())
      )
    );
    results = results.flat(Infinity).filter((f: any) => f.type)
    return addFiles(results, exts, maxSize)
  }

  export const addFiles = (args: Array<any>, exts?: Array<string>, maxSize?: number) => {
    // args = args.filter((f: any) => exts.includes(extname(f.name)) && f.size <= maxSize)
    args = [...args]
    if (maxSize) {
      args = args.filter((f: any) => f.size <= maxSize)
    }
    if (exts && exts.length) {
      args = args.filter((f: any) => exts.includes(extname(f.name)))
    }

    const files: Array<any> = []
    files.push(...args.map(createNewFile))
    return files
  }

  // \u5904\u7406\u4E0A\u4F20\u76EE\u5F55/\u6587\u4EF6
  const handleEntry = (entry: any) => {
    return new Promise((resolve) => {
      if (entry.isFile) {
        entry.file(resolve);
        return;
      }
      const dirReader = entry.createReader();
      dirReader.readEntries(async (entries: any) => {
        resolve(await Promise.all(entries.map(handleEntry)));
      });
    });
  };

  // \u521B\u5EFA\u6587\u4EF6\u4FE1\u606F
  const createNewFile = (f: any) => ({
    file: f,
    status: 'pending',
    progress: 0
  })

  // \u6587\u4EF6\u540E\u7F00
  const extname = (name: string) => {
    const i = name.lastIndexOf('.');
    if (i >= 0) {
      return name.substring(i).toLowerCase();
    }
    return '';
  };

  // \u6587\u4EF6\u5927\u5C0F\u8BA1\u7B97
  const fileSize = (size: number) => {
    let number: number | string = size;
    let unit = 'bype';
    if (number >= 1024 ** 3) {
      number = number / 1024 ** 3;
      unit = 'G';
    } else if (number >= 1024 ** 2) {
      number = number / 1024 ** 2;
      unit = 'M';
    } else if (number >= 1024) {
      number = number / 1024;
      unit = 'KB';
    }
    number = number.toFixed(2);
    return +number + unit;
  };

  `},28874:function(d,f){"use strict";f.Z=`.mix-adaptive {
    position: relative;
    height: 200px;
    background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
  }
  .mix-adaptive span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    mix-blend-mode: difference;
    animation: move 3s infinite linear alternate;
  }

  @keyframes move {
    0% {
      transform: translate(-30%, -50%);
    }
    100% {
      transform: translate(-70%, -50%);
    }
  }
  `},49181:function(d,f){"use strict";f.Z=`.throttle-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* \u9ED8\u8BA4\u8D85\u51FA\u4E00\u884C */
  .ellipsis-overflow {
    width: 200px;
    padding: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border: 1px solid #eee;
  }
  .ellipsis {
    display: -webkit-box;
    width: 200px;
    padding: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    border: 1px solid #eee;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .ellipsis-double {
    -webkit-line-clamp: 2;
  }
  .ellipsis-triple {
    -webkit-line-clamp: 3;
  }
  `},7084:function(d,f){"use strict";f.Z=`.content {
    display: flex;
  }

  /* \u6587\u5B57\u6E10\u53D8\u8272 */
  .content .gray-text {
    color: transparent;
    font-size: 40px;
    background-image: linear-gradient(to right, orange, blue, #f60, purple);
    -webkit-background-clip: text;
  }

  /* \u9875\u9762\u53D8\u7070\u7684css */
  .silence {
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }
  `},89994:function(d,f){"use strict";f.Z=`/* \u8F93\u5165\u6846 */
  .cins-input {
    border: 1px solid #eee;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 4px;
  }

  /* \u6309\u94AE */
  .cins-button {
    background-color: #4387f7;
    border-radius: 4px;
    color: #fff;
    padding: 4px 10px;
    font-size: 12px;
    outline: none;
    &:active{
      background-color: #5697f7;
    }
  }

  /* \u901A\u7528\u6837\u5F0F */
  .flex{
    display: flex;
  }

  .flex-between{
    display: flex;
    justify-content: space-between;
  }

  .flex-around{
    display: flex;
    justify-content: space-around;
  }

  .ft-max{
    font-size: 30px;
  }

  .ft-bold{
    font-weight: bold;
  }

  .align-center{
    text-align: center;
  }
  `},19581:function(d,f){"use strict";f.Z=`.pseudo-text {
    position: relative;
    left: 40px;
    height: 40px;
    font-size: 30px;
    line-height: 40px;
  }
  .pseudo-text::before {
    position: absolute;
    top: 4px;
    left: -40px;
    width: 34px;
    height: 34px;
    background: url(https://kinxpeng.oss-cn-beijing.aliyuncs.com/image/cins-docs/schedul_warning.png)
      center/cover;
    content: '';
  }
  `},57281:function(d,f){"use strict";f.Z=`/* apply-shake S */
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(-2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  .apply-shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .apply-shake-input {
    display: flex;
    justify-content: space-between;
  }
  .apply-shake-input > input {
    width: 75%;
  }

  /* apply-shake E */
  `},45168:function(d,f){"use strict";f.Z=`.stroke-text {
    color: transparent;
    font-size: 40px;
    /* \u4EC5\u9002\u7528\u4E8E\u90E8\u5206\u6D4F\u89C8\u5668 */
    -webkit-text-stroke: 2px #f60;
  }
  `},77178:function(d,f){"use strict";f.Z=`.symbol-legend {
    display: flex;
    align-items: center;
  }

  .symbol-legend > span {
    padding: 4px 8px;
    border: 1px solid #589ff8;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
  }

  .symbol-legend > span :last-child {
    margin: 0;
  }

  .symbol-legend > span.loading {
    /* \u88C5\u5378\u4E2D */
    background: linear-gradient(to right, #e5f3ff 40%, transparent 40%);
  }

  .symbol-legend > span.complete {
    /* \u88C5\u5378\u5B8C\u6210 */
    background-color: #e5f3ff;
  }

  .symbol-legend > span.leave {
    /* \u79BB\u573A */
    background-color: #cbcccc;
  }

  .symbol-legend > span.timeout {
    /* \u6267\u884C\u8D85\u65F6 */
    background-image: repeating-linear-gradient(
      -30deg,
      red,
      red 1px,
      transparent 0,
      transparent 6px
    );
  }

  .symbol-legend > span.late {
    /* \u8FDF\u5230 */
    border-color: red;
  }

  .symbol-legend > span.selected {
    /* \u9009\u4E2D */
    border: 1px dashed green;
    background-color: #f1f6df;
  }

  .symbol-legend > span.recommend {
    /* \u63A8\u8350 */
    border: 1px dashed yellow;
    background-color: #fefeed;
  }

  .symbol-legend > span.other {
    /* \u5176\u5B83 */
    background: white;
    background-image: linear-gradient(
        90deg,
        rgba(200, 0, 0, 0.5) 50%,
        transparent 0
      ),
      linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0);
    background-size: 10px 10px;
  }
  `},83330:function(d,f){"use strict";f.Z=`.throttle-button {
    display: flex;
    justify-content: space-between;
  }
  .throttle-button .button-wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    user-select: none;
  }
  .throttle-button .button-wrap:first-child {
    border-right: 1px solid #ccc;
  }
  @media (max-width: 1000px) {
    .throttle-button {
      display: block;
    }
    .throttle-button .button-wrap {
      width: 100%;
      margin-bottom: 10px;
      border-right: none !important;
    }
  }

  /* \u4F7F\u7528\u8282\u6D41 */
  .throttle-button .button-wrap .ant-throttle {
    animation: throttle 2s step-end forwards;
  }
  .throttle-button .button-wrap .ant-throttle:active {
    animation: none;
  }

  /* \u8282\u6D41\u6837\u5F0F */

  @keyframes throttle {
    from {
      pointer-events: none;
    }
    to {
      pointer-events: all;
    }
  }
  `},29286:function(d,f){"use strict";f.Z=`.underline {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    cursor: default;
  }

  .underline span {
    background: linear-gradient(to right, #ec695c, #61c454) no-repeat right bottom;
    background-size: 0 2px;
    transition: background-size 1300ms;
  }

  .underline span:hover {
    background-position-x: left;
    background-size: 100% 2px;
  }
  `},81057:function(d,f,a){"use strict";function n(F){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},n(F)}Object.defineProperty(f,"__esModule",{value:!0}),f.CopyToClipboard=void 0;var l=h(a(93236)),o=h(a(874)),s=["text","onCopy","options","children"];function h(F){return F&&F.__esModule?F:{default:F}}function p(F,j){var J=Object.keys(F);if(Object.getOwnPropertySymbols){var e1=Object.getOwnPropertySymbols(F);j&&(e1=e1.filter(function(t1){return Object.getOwnPropertyDescriptor(F,t1).enumerable})),J.push.apply(J,e1)}return J}function u(F){for(var j=1;j<arguments.length;j++){var J=arguments[j]!=null?arguments[j]:{};j%2?p(Object(J),!0).forEach(function(e1){P(F,e1,J[e1])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(J)):p(Object(J)).forEach(function(e1){Object.defineProperty(F,e1,Object.getOwnPropertyDescriptor(J,e1))})}return F}function z(F,j){if(F==null)return{};var J=x(F,j),e1,t1;if(Object.getOwnPropertySymbols){var X=Object.getOwnPropertySymbols(F);for(t1=0;t1<X.length;t1++)e1=X[t1],!(j.indexOf(e1)>=0)&&Object.prototype.propertyIsEnumerable.call(F,e1)&&(J[e1]=F[e1])}return J}function x(F,j){if(F==null)return{};var J={},e1=Object.keys(F),t1,X;for(X=0;X<e1.length;X++)t1=e1[X],!(j.indexOf(t1)>=0)&&(J[t1]=F[t1]);return J}function g(F,j){if(!(F instanceof j))throw new TypeError("Cannot call a class as a function")}function I(F,j){for(var J=0;J<j.length;J++){var e1=j[J];e1.enumerable=e1.enumerable||!1,e1.configurable=!0,"value"in e1&&(e1.writable=!0),Object.defineProperty(F,e1.key,e1)}}function M(F,j,J){return j&&I(F.prototype,j),J&&I(F,J),Object.defineProperty(F,"prototype",{writable:!1}),F}function w(F,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(j&&j.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),j&&C(F,j)}function C(F,j){return C=Object.setPrototypeOf||function(e1,t1){return e1.__proto__=t1,e1},C(F,j)}function _(F){var j=E();return function(){var e1=L(F),t1;if(j){var X=L(this).constructor;t1=Reflect.construct(e1,arguments,X)}else t1=e1.apply(this,arguments);return H(this,t1)}}function H(F,j){if(j&&(n(j)==="object"||typeof j=="function"))return j;if(j!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b(F)}function b(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function E(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(F){return!1}}function L(F){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(J){return J.__proto__||Object.getPrototypeOf(J)},L(F)}function P(F,j,J){return j in F?Object.defineProperty(F,j,{value:J,enumerable:!0,configurable:!0,writable:!0}):F[j]=J,F}var S=function(F){w(J,F);var j=_(J);function J(){var e1;g(this,J);for(var t1=arguments.length,X=new Array(t1),Q=0;Q<t1;Q++)X[Q]=arguments[Q];return e1=j.call.apply(j,[this].concat(X)),P(b(e1),"onClick",function(R){var f1=e1.props,a1=f1.text,D=f1.onCopy,Z=f1.children,U=f1.options,Y=l.default.Children.only(Z),N=(0,o.default)(a1,U);D&&D(a1,N),Y&&Y.props&&typeof Y.props.onClick=="function"&&Y.props.onClick(R)}),e1}return M(J,[{key:"render",value:function(){var t1=this.props,X=t1.text,Q=t1.onCopy,R=t1.options,f1=t1.children,a1=z(t1,s),D=l.default.Children.only(f1);return l.default.cloneElement(D,u(u({},a1),{},{onClick:this.onClick}))}}]),J}(l.default.PureComponent);f.CopyToClipboard=S,P(S,"defaultProps",{onCopy:void 0,options:void 0})},54944:function(d,f,a){"use strict";var n=a(81057),l=n.CopyToClipboard;l.CopyToClipboard=l,d.exports=l},64283:function(d,f,a){"use strict";var n=a(93236),l=a(79404);function o(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,h={};function p(e,r){u(e,r),u(e+"Capture",r)}function u(e,r){for(h[e]=r,e=0;e<r.length;e++)s.add(r[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),x=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},M={};function w(e){return x.call(M,e)?!0:x.call(I,e)?!1:g.test(e)?M[e]=!0:(I[e]=!0,!1)}function C(e,r,i,m){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return m?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,r,i,m){if(r===null||typeof r=="undefined"||C(e,r,i,m))return!0;if(m)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(e,r,i,m,B,k,o1){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=m,this.attributeNamespace=B,this.mustUseProperty=i,this.propertyName=e,this.type=r,this.sanitizeURL=k,this.removeEmptyString=o1}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];b[r]=new H(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(E,L);b[r]=new H(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(E,L);b[r]=new H(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(E,L);b[r]=new H(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function P(e,r,i,m){var B=b.hasOwnProperty(r)?b[r]:null;(B!==null?B.type!==0:m||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,i,B,m)&&(i=null),m||B===null?w(r)&&(i===null?e.removeAttribute(r):e.setAttribute(r,""+i)):B.mustUseProperty?e[B.propertyName]=i===null?B.type===3?!1:"":i:(r=B.attributeName,m=B.attributeNamespace,i===null?e.removeAttribute(r):(B=B.type,i=B===3||B===4&&i===!0?"":""+i,m?e.setAttributeNS(m,r,i):e.setAttribute(r,i))))}var S=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),j=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),e1=Symbol.for("react.strict_mode"),t1=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),Q=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),f1=Symbol.for("react.suspense"),a1=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),Z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var U=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var Y=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,z1;function E1(e){if(z1===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);z1=r&&r[1]||""}return`
  `+z1+e}var w1=!1;function c1(e,r){if(!e||w1)return"";w1=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(s0){var m=s0}Reflect.construct(e,[],r)}else{try{r.call()}catch(s0){m=s0}e.call(r.prototype)}else{try{throw Error()}catch(s0){m=s0}e()}}catch(s0){if(s0&&m&&typeof s0.stack=="string"){for(var B=s0.stack.split(`
  `),k=m.stack.split(`
  `),o1=B.length-1,M1=k.length-1;1<=o1&&0<=M1&&B[o1]!==k[M1];)M1--;for(;1<=o1&&0<=M1;o1--,M1--)if(B[o1]!==k[M1]){if(o1!==1||M1!==1)do if(o1--,M1--,0>M1||B[o1]!==k[M1]){var O1=`
  `+B[o1].replace(" at new "," at ");return e.displayName&&O1.includes("<anonymous>")&&(O1=O1.replace("<anonymous>",e.displayName)),O1}while(1<=o1&&0<=M1);break}}}finally{w1=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?E1(e):""}function G1(e){switch(e.tag){case 5:return E1(e.type);case 16:return E1("Lazy");case 13:return E1("Suspense");case 19:return E1("SuspenseList");case 0:case 2:case 15:return e=c1(e.type,!1),e;case 11:return e=c1(e.type.render,!1),e;case 1:return e=c1(e.type,!0),e;default:return""}}function B1(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case j:return"Portal";case t1:return"Profiler";case e1:return"StrictMode";case f1:return"Suspense";case a1:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Q:return(e.displayName||"Context")+".Consumer";case X:return(e._context.displayName||"Context")+".Provider";case R:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return r=e.displayName||null,r!==null?r:B1(e.type)||"Memo";case Z:r=e._payload,e=e._init;try{return B1(e(r))}catch(i){}}return null}function S1(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B1(r);case 8:return r===e1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function C1(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function S0(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function L0(e){var r=S0(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),m=""+e[r];if(!e.hasOwnProperty(r)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var B=i.get,k=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return B.call(this)},set:function(o1){m=""+o1,k.call(this,o1)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return m},setValue:function(o1){m=""+o1},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Q0(e){e._valueTracker||(e._valueTracker=L0(e))}function D0(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),m="";return e&&(m=S0(e)?e.checked?"true":"false":e.value),e=m,e!==i?(r.setValue(e),!0):!1}function z5(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(r){return e.body}}function g5(e,r){var i=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i!=null?i:e._wrapperState.initialChecked})}function o0(e,r){var i=r.defaultValue==null?"":r.defaultValue,m=r.checked!=null?r.checked:r.defaultChecked;i=C1(r.value!=null?r.value:i),e._wrapperState={initialChecked:m,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function H0(e,r){r=r.checked,r!=null&&P(e,"checked",r,!1)}function x0(e,r){H0(e,r);var i=C1(r.value),m=r.type;if(i!=null)m==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(m==="submit"||m==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?V1(e,r.type,i):r.hasOwnProperty("defaultValue")&&V1(e,r.type,C1(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function U1(e,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var m=r.type;if(!(m!=="submit"&&m!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,i||r===e.value||(e.value=r),e.defaultValue=r}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function V1(e,r,i){(r!=="number"||z5(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var s1=Array.isArray;function h1(e,r,i,m){if(e=e.options,r){r={};for(var B=0;B<i.length;B++)r["$"+i[B]]=!0;for(i=0;i<e.length;i++)B=r.hasOwnProperty("$"+e[i].value),e[i].selected!==B&&(e[i].selected=B),B&&m&&(e[i].defaultSelected=!0)}else{for(i=""+C1(i),r=null,B=0;B<e.length;B++){if(e[B].value===i){e[B].selected=!0,m&&(e[B].defaultSelected=!0);return}r!==null||e[B].disabled||(r=e[B])}r!==null&&(r.selected=!0)}}function u1(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function F1(e,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(o(92));if(s1(i)){if(1<i.length)throw Error(o(93));i=i[0]}r=i}r==null&&(r=""),i=r}e._wrapperState={initialValue:C1(i)}}function Z1(e,r){var i=C1(r.value),m=C1(r.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),r.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),m!=null&&(e.defaultValue=""+m)}function u0(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function l0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function v0(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?l0(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var G0,X0=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,i,m,B){MSApp.execUnsafeLocalFunction(function(){return e(r,i,m,B)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(G0=G0||document.createElement("div"),G0.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=G0.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function F0(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var g1={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y=["Webkit","ms","Moz","O"];Object.keys(g1).forEach(function(e){y.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),g1[r]=g1[e]})});function K(e,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||g1.hasOwnProperty(e)&&g1[e]?(""+r).trim():r+"px"}function n1(e,r){e=e.style;for(var i in r)if(r.hasOwnProperty(i)){var m=i.indexOf("--")===0,B=K(i,r[i],m);i==="float"&&(i="cssFloat"),m?e.setProperty(i,B):e[i]=B}}var y1=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function L1(e,r){if(r){if(y1[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function J1(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D1=null;function i0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var f0=null,h0=null,k1=null;function j1(e){if(e=ba(e)){if(typeof f0!="function")throw Error(o(280));var r=e.stateNode;r&&(r=y2(r),f0(e.stateNode,e.type,r))}}function $1(e){h0?k1?k1.push(e):k1=[e]:h0=e}function w0(){if(h0){var e=h0,r=k1;if(k1=h0=null,j1(e),r)for(e=0;e<r.length;e++)j1(r[e])}}function e0(e,r){return e(r)}function t0(){}var R1=!1;function K1(e,r,i){if(R1)return e(r,i);R1=!0;try{return e0(e,r,i)}finally{R1=!1,(h0!==null||k1!==null)&&(t0(),w0())}}function _0(e,r){var i=e.stateNode;if(i===null)return null;var m=y2(i);if(m===null)return null;i=m[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(e=e.type,m=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!m;break t;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,r,typeof i));return i}var P0=!1;if(z)try{var a5={};Object.defineProperty(a5,"passive",{get:function(){P0=!0}}),window.addEventListener("test",a5,a5),window.removeEventListener("test",a5,a5)}catch(e){P0=!1}function m1(e,r,i,m,B,k,o1,M1,O1){var s0=Array.prototype.slice.call(arguments,3);try{r.apply(i,s0)}catch(O0){this.onError(O0)}}var T1=!1,V0=null,A0=!1,R0=null,J0={onError:function(e){T1=!0,V0=e}};function L5(e,r,i,m,B,k,o1,M1,O1){T1=!1,V0=null,m1.apply(J0,arguments)}function w5(e,r,i,m,B,k,o1,M1,O1){if(L5.apply(this,arguments),T1){if(T1){var s0=V0;T1=!1,V0=null}else throw Error(o(198));A0||(A0=!0,R0=s0)}}function k5(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function j5(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function U5(e){if(k5(e)!==e)throw Error(o(188))}function q5(e){var r=e.alternate;if(!r){if(r=k5(e),r===null)throw Error(o(188));return r!==e?null:e}for(var i=e,m=r;;){var B=i.return;if(B===null)break;var k=B.alternate;if(k===null){if(m=B.return,m!==null){i=m;continue}break}if(B.child===k.child){for(k=B.child;k;){if(k===i)return U5(B),e;if(k===m)return U5(B),r;k=k.sibling}throw Error(o(188))}if(i.return!==m.return)i=B,m=k;else{for(var o1=!1,M1=B.child;M1;){if(M1===i){o1=!0,i=B,m=k;break}if(M1===m){o1=!0,m=B,i=k;break}M1=M1.sibling}if(!o1){for(M1=k.child;M1;){if(M1===i){o1=!0,i=k,m=B;break}if(M1===m){o1=!0,m=k,i=B;break}M1=M1.sibling}if(!o1)throw Error(o(189))}}if(i.alternate!==m)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:r}function $5(e){return e=q5(e),e!==null?At(e):null}function At(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=At(e);if(r!==null)return r;e=e.sibling}return null}var ft=l.unstable_scheduleCallback,tt=l.unstable_cancelCallback,pt=l.unstable_shouldYield,m5=l.unstable_requestPaint,V5=l.unstable_now,yt=l.unstable_getCurrentPriorityLevel,Tt=l.unstable_ImmediatePriority,Dt=l.unstable_UserBlockingPriority,Lt=l.unstable_NormalPriority,dt=l.unstable_LowPriority,ta=l.unstable_IdlePriority,P2=null,r2=null;function v2(e){if(r2&&typeof r2.onCommitFiberRoot=="function")try{r2.onCommitFiberRoot(P2,e,void 0,(e.current.flags&128)===128)}catch(r){}}var Nt=Math.clz32?Math.clz32:b1,ca=Math.log,l1=Math.LN2;function b1(e){return e>>>=0,e===0?32:31-(ca(e)/l1|0)|0}var y0=64,E0=4194304;function N0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function e5(e,r){var i=e.pendingLanes;if(i===0)return 0;var m=0,B=e.suspendedLanes,k=e.pingedLanes,o1=i&268435455;if(o1!==0){var M1=o1&~B;M1!==0?m=N0(M1):(k&=o1,k!==0&&(m=N0(k)))}else o1=i&~B,o1!==0?m=N0(o1):k!==0&&(m=N0(k));if(m===0)return 0;if(r!==0&&r!==m&&!(r&B)&&(B=m&-m,k=r&-r,B>=k||B===16&&(k&4194240)!==0))return r;if(m&4&&(m|=i&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=m;0<r;)i=31-Nt(r),B=1<<i,m|=e[i],r&=~B;return m}function s5(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n5(e,r){for(var i=e.suspendedLanes,m=e.pingedLanes,B=e.expirationTimes,k=e.pendingLanes;0<k;){var o1=31-Nt(k),M1=1<<o1,O1=B[o1];O1===-1?(!(M1&i)||M1&m)&&(B[o1]=s5(M1,r)):O1<=r&&(e.expiredLanes|=M1),k&=~M1}}function B5(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function b5(){var e=y0;return y0<<=1,!(y0&4194240)&&(y0=64),e}function st(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function O5(e,r,i){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Nt(r),e[r]=i}function P5(e,r){var i=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var m=e.eventTimes;for(e=e.expirationTimes;0<i;){var B=31-Nt(i),k=1<<B;r[B]=0,m[B]=-1,e[B]=-1,i&=~k}}function ut(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var m=31-Nt(i),B=1<<m;B&r|e[m]&r&&(e[m]|=r),i&=~B}}var V=0;function G(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var O,r1,d1,_1,Y1,N1=!1,q1=[],M0=null,z0=null,j0=null,U0=new Map,W0=new Map,r5=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i5(e,r){switch(e){case"focusin":case"focusout":M0=null;break;case"dragenter":case"dragleave":z0=null;break;case"mouseover":case"mouseout":j0=null;break;case"pointerover":case"pointerout":U0.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":W0.delete(r.pointerId)}}function M5(e,r,i,m,B,k){return e===null||e.nativeEvent!==k?(e={blockedOn:r,domEventName:i,eventSystemFlags:m,nativeEvent:k,targetContainers:[B]},r!==null&&(r=ba(r),r!==null&&r1(r)),e):(e.eventSystemFlags|=m,r=e.targetContainers,B!==null&&r.indexOf(B)===-1&&r.push(B),e)}function nt(e,r,i,m,B){switch(r){case"focusin":return M0=M5(M0,e,r,i,m,B),!0;case"dragenter":return z0=M5(z0,e,r,i,m,B),!0;case"mouseover":return j0=M5(j0,e,r,i,m,B),!0;case"pointerover":var k=B.pointerId;return U0.set(k,M5(U0.get(k)||null,e,r,i,m,B)),!0;case"gotpointercapture":return k=B.pointerId,W0.set(k,M5(W0.get(k)||null,e,r,i,m,B)),!0}return!1}function R5(e){var r=F2(e.target);if(r!==null){var i=k5(r);if(i!==null){if(r=i.tag,r===13){if(r=j5(i),r!==null){e.blockedOn=r,Y1(e.priority,function(){d1(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function G5(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=lt(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var m=new i.constructor(i.type,i);D1=m,i.target.dispatchEvent(m),D1=null}else return r=ba(i),r!==null&&r1(r),e.blockedOn=i,!1;r.shift()}return!0}function D5(e,r,i){G5(e)&&i.delete(r)}function Y5(){N1=!1,M0!==null&&G5(M0)&&(M0=null),z0!==null&&G5(z0)&&(z0=null),j0!==null&&G5(j0)&&(j0=null),U0.forEach(D5),W0.forEach(D5)}function at(e,r){e.blockedOn===r&&(e.blockedOn=null,N1||(N1=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Y5)))}function A5(e){function r(B){return at(B,e)}if(0<q1.length){at(q1[0],e);for(var i=1;i<q1.length;i++){var m=q1[i];m.blockedOn===e&&(m.blockedOn=null)}}for(M0!==null&&at(M0,e),z0!==null&&at(z0,e),j0!==null&&at(j0,e),U0.forEach(r),W0.forEach(r),i=0;i<r5.length;i++)m=r5[i],m.blockedOn===e&&(m.blockedOn=null);for(;0<r5.length&&(i=r5[0],i.blockedOn===null);)R5(i),i.blockedOn===null&&r5.shift()}var v1=S.ReactCurrentBatchConfig,A1=!0;function W1(e,r,i,m){var B=V,k=v1.transition;v1.transition=null;try{V=1,y5(e,r,i,m)}finally{V=B,v1.transition=k}}function K0(e,r,i,m){var B=V,k=v1.transition;v1.transition=null;try{V=4,y5(e,r,i,m)}finally{V=B,v1.transition=k}}function y5(e,r,i,m){if(A1){var B=lt(e,r,i,m);if(B===null)P4(e,r,m,X5,i),i5(e,m);else if(nt(B,e,r,i,m))m.stopPropagation();else if(i5(e,m),r&4&&-1<q0.indexOf(e)){for(;B!==null;){var k=ba(B);if(k!==null&&O(k),k=lt(e,r,i,m),k===null&&P4(e,r,m,X5,i),k===B)break;B=k}B!==null&&m.stopPropagation()}else P4(e,r,m,null,i)}}var X5=null;function lt(e,r,i,m){if(X5=null,e=i0(m),e=F2(e),e!==null)if(r=k5(e),r===null)e=null;else if(i=r.tag,i===13){if(e=j5(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return X5=e,null}function x5(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yt()){case Tt:return 1;case Dt:return 4;case Lt:case dt:return 16;case ta:return 536870912;default:return 16}default:return 16}}var S5=null,$t=null,St=null;function I2(){if(St)return St;var e,r=$t,i=r.length,m,B="value"in S5?S5.value:S5.textContent,k=B.length;for(e=0;e<i&&r[e]===B[e];e++);var o1=i-e;for(m=1;m<=o1&&r[i-m]===B[k-m];m++);return St=B.slice(e,1<m?1-m:void 0)}function Ht(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function L2(){return!0}function D2(){return!1}function Ft(e){function r(i,m,B,k,o1){this._reactName=i,this._targetInst=B,this.type=m,this.nativeEvent=k,this.target=o1,this.currentTarget=null;for(var M1 in e)e.hasOwnProperty(M1)&&(i=e[M1],this[M1]=i?i(k):k[M1]);return this.isDefaultPrevented=(k.defaultPrevented!=null?k.defaultPrevented:k.returnValue===!1)?L2:D2,this.isPropagationStopped=D2,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=L2)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=L2)},persist:function(){},isPersistent:L2}),r}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=Ft(Mt),aa=W({},Mt,{view:0,detail:0}),wa=Ft(aa),ua,he,ha,de=W({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:B0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(ua=e.screenX-ha.screenX,he=e.screenY-ha.screenY):he=ua=0,ha=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:he}}),Ce=Ft(de),da=W({},de,{dataTransfer:0}),qe=Ft(da),Ge=W({},aa,{relatedTarget:0}),ve=Ft(Ge),we=W({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),t4=Ft(we),ea=W({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fa=Ft(ea),Ve=W({},Mt,{data:0}),Te=Ft(Ve),Va={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ht={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=ht[e])?!!r[e]:!1}function B0(){return d0}var H5=W({},aa,{key:function(e){if(e.key){var r=Va[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ht(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:B0,charCode:function(e){return e.type==="keypress"?Ht(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ht(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h5=Ft(H5),ot=W({},de,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T5=Ft(ot),it=W({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:B0}),gt=Ft(it),N5=W({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),n2=Ft(N5),Ct=W({},de,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bt=Ft(Ct),kt=[9,13,27,32],Xt=z&&"CompositionEvent"in window,i2=null;z&&"documentMode"in document&&(i2=document.documentMode);var M2=z&&"TextEvent"in window&&!i2,Aa=z&&(!Xt||i2&&8<i2&&11>=i2),p2=String.fromCharCode(32),va=!1;function a4(e,r){switch(e){case"keyup":return kt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function B4(e,r){switch(e){case"compositionend":return ra(r);case"keypress":return r.which!==32?null:(va=!0,p2);case"textInput":return e=r.data,e===p2&&va?null:e;default:return null}}function Dn(e,r){if(Ka)return e==="compositionend"||!Xt&&a4(e,r)?(e=I2(),St=$t=S5=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Aa&&r.locale!=="ko"?null:r.data;default:return null}}var b4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!b4[e.type]:r==="textarea"}function e4(e,r,i,m){$1(m),r=ze(r,"onChange"),0<r.length&&(i=new sa("onChange","change",null,i,m),e.push({event:i,listeners:r}))}var Fe=null,Ha=null;function Yr(e){Pe(e,0)}function r4(e){var r=m2(e);if(D0(r))return e}function ur(e,r){if(e==="change")return r}var Ze=!1;if(z){var g2;if(z){var mt="oninput"in document;if(!mt){var L4=document.createElement("div");L4.setAttribute("oninput","return;"),mt=typeof L4.oninput=="function"}g2=mt}else g2=!1;Ze=g2&&(!document.documentMode||9<document.documentMode)}function fe(){Fe&&(Fe.detachEvent("onpropertychange",Oe),Ha=Fe=null)}function Oe(e){if(e.propertyName==="value"&&r4(Ha)){var r=[];e4(r,Ha,e,i0(e)),K1(Yr,r)}}function hr(e,r,i){e==="focusin"?(fe(),Fe=r,Ha=i,Fe.attachEvent("onpropertychange",Oe)):e==="focusout"&&fe()}function _t(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return r4(Ha)}function Xr(e,r){if(e==="click")return r4(r)}function ke(e,r){if(e==="input"||e==="change")return r4(r)}function n4(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var N2=typeof Object.is=="function"?Object.is:n4;function pe(e,r){if(N2(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),m=Object.keys(r);if(i.length!==m.length)return!1;for(m=0;m<i.length;m++){var B=i[m];if(!x.call(r,B)||!N2(e[B],r[B]))return!1}return!0}function dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function S4(e,r){var i=dr(e);e=0;for(var m;i;){if(i.nodeType===3){if(m=e+i.textContent.length,e<=r&&m>=r)return{node:i,offset:r-e};e=m}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=dr(i)}}function _4(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?_4(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function E4(){for(var e=window,r=z5();r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch(m){i=!1}if(i)e=r.contentWindow;else break;r=z5(e.document)}return r}function na(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Qr(e){var r=E4(),i=e.focusedElem,m=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&_4(i.ownerDocument.documentElement,i)){if(m!==null&&na(i)){if(r=m.start,e=m.end,e===void 0&&(e=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(e,i.value.length);else if(e=(r=i.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var B=i.textContent.length,k=Math.min(m.start,B);m=m.end===void 0?k:Math.min(m.end,B),!e.extend&&k>m&&(B=m,m=k,k=B),B=S4(i,k);var o1=S4(i,m);B&&o1&&(e.rangeCount!==1||e.anchorNode!==B.node||e.anchorOffset!==B.offset||e.focusNode!==o1.node||e.focusOffset!==o1.offset)&&(r=r.createRange(),r.setStart(B.node,B.offset),e.removeAllRanges(),k>m?(e.addRange(r),e.extend(o1.node,o1.offset)):(r.setEnd(o1.node,o1.offset),e.addRange(r)))}}for(r=[],e=i;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)e=r[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vr=z&&"documentMode"in document&&11>=document.documentMode,Ya=null,o4=null,ge=null,l4=!1;function G4(e,r,i){var m=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;l4||Ya==null||Ya!==z5(m)||(m=Ya,"selectionStart"in m&&na(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),ge&&pe(ge,m)||(ge=m,m=ze(o4,"onSelect"),0<m.length&&(r=new sa("onSelect","select",null,r,i),e.push({event:r,listeners:m}),r.target=Ya)))}function i4(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var Ae={animationend:i4("Animation","AnimationEnd"),animationiteration:i4("Animation","AnimationIteration"),animationstart:i4("Animation","AnimationStart"),transitionend:i4("Transition","TransitionEnd")},T4={},fr={};z&&(fr=document.createElement("div").style,"AnimationEvent"in window||(delete Ae.animationend.animation,delete Ae.animationiteration.animation,delete Ae.animationstart.animation),"TransitionEvent"in window||delete Ae.transitionend.transition);function me(e){if(T4[e])return T4[e];if(!Ae[e])return e;var r=Ae[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in fr)return T4[e]=r[i];return e}var c4=me("animationend"),F4=me("animationiteration"),Z4=me("animationstart"),pr=me("transitionend"),O4=new Map,gr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xa(e,r){O4.set(e,r),p(r,[e])}for(var k4=0;k4<gr.length;k4++){var Re=gr[k4],Jr=Re.toLowerCase(),qr=Re[0].toUpperCase()+Re.slice(1);Xa(Jr,"on"+qr)}Xa(c4,"onAnimationEnd"),Xa(F4,"onAnimationIteration"),Xa(Z4,"onAnimationStart"),Xa("dblclick","onDoubleClick"),Xa("focusin","onFocus"),Xa("focusout","onBlur"),Xa(pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function R4(e,r,i){var m=e.type||"unknown-event";e.currentTarget=i,w5(m,r,void 0,e),e.currentTarget=null}function Pe(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var m=e[i],B=m.event;m=m.listeners;t:{var k=void 0;if(r)for(var o1=m.length-1;0<=o1;o1--){var M1=m[o1],O1=M1.instance,s0=M1.currentTarget;if(M1=M1.listener,O1!==k&&B.isPropagationStopped())break t;R4(B,M1,s0),k=O1}else for(o1=0;o1<m.length;o1++){if(M1=m[o1],O1=M1.instance,s0=M1.currentTarget,M1=M1.listener,O1!==k&&B.isPropagationStopped())break t;R4(B,M1,s0),k=O1}}}if(A0)throw e=R0,A0=!1,R0=null,e}function jt(e,r){var i=r[vt];i===void 0&&(i=r[vt]=new Set);var m=e+"__bubble";i.has(m)||(xr(r,e,2,!1),i.add(m))}function zr(e,r,i){var m=0;r&&(m|=4),xr(i,e,m,r)}var De="_reactListening"+Math.random().toString(36).slice(2);function Ja(e){if(!e[De]){e[De]=!0,s.forEach(function(i){i!=="selectionchange"&&(mr.has(i)||zr(i,!1,e),zr(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[De]||(r[De]=!0,zr("selectionchange",!1,r))}}function xr(e,r,i,m){switch(x5(r)){case 1:var B=W1;break;case 4:B=K0;break;default:B=y5}i=B.bind(null,r,i,e),B=void 0,!P0||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(B=!0),m?B!==void 0?e.addEventListener(r,i,{capture:!0,passive:B}):e.addEventListener(r,i,!0):B!==void 0?e.addEventListener(r,i,{passive:B}):e.addEventListener(r,i,!1)}function P4(e,r,i,m,B){var k=m;if(!(r&1)&&!(r&2)&&m!==null)t:for(;;){if(m===null)return;var o1=m.tag;if(o1===3||o1===4){var M1=m.stateNode.containerInfo;if(M1===B||M1.nodeType===8&&M1.parentNode===B)break;if(o1===4)for(o1=m.return;o1!==null;){var O1=o1.tag;if((O1===3||O1===4)&&(O1=o1.stateNode.containerInfo,O1===B||O1.nodeType===8&&O1.parentNode===B))return;o1=o1.return}for(;M1!==null;){if(o1=F2(M1),o1===null)return;if(O1=o1.tag,O1===5||O1===6){m=k=o1;continue t}M1=M1.parentNode}}m=m.return}K1(function(){var s0=k,O0=i0(i),c5=[];t:{var b0=O4.get(e);if(b0!==void 0){var f5=sa,l5=e;switch(e){case"keypress":if(Ht(i)===0)break t;case"keydown":case"keyup":f5=h5;break;case"focusin":l5="focus",f5=ve;break;case"focusout":l5="blur",f5=ve;break;case"beforeblur":case"afterblur":f5=ve;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f5=Ce;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f5=qe;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f5=gt;break;case c4:case F4:case Z4:f5=t4;break;case pr:f5=n2;break;case"scroll":f5=wa;break;case"wheel":f5=Bt;break;case"copy":case"cut":case"paste":f5=Fa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f5=T5}var et=(r&4)!==0,z2=!et&&e==="scroll",n0=et?b0!==null?b0+"Capture":null:b0;et=[];for(var P1=s0,c0;P1!==null;){c0=P1;var Y0=c0.stateNode;if(c0.tag===5&&Y0!==null&&(c0=Y0,n0!==null&&(Y0=_0(P1,n0),Y0!=null&&et.push(Ne(P1,Y0,c0)))),z2)break;P1=P1.return}0<et.length&&(b0=new f5(b0,l5,null,i,O0),c5.push({event:b0,listeners:et}))}}if(!(r&7)){t:{if(b0=e==="mouseover"||e==="pointerover",f5=e==="mouseout"||e==="pointerout",b0&&i!==D1&&(l5=i.relatedTarget||i.fromElement)&&(F2(l5)||l5[Pt]))break t;if((f5||b0)&&(b0=O0.window===O0?O0:(b0=O0.ownerDocument)?b0.defaultView||b0.parentWindow:window,f5?(l5=i.relatedTarget||i.toElement,f5=s0,l5=l5?F2(l5):null,l5!==null&&(z2=k5(l5),l5!==z2||l5.tag!==5&&l5.tag!==6)&&(l5=null)):(f5=null,l5=s0),f5!==l5)){if(et=Ce,Y0="onMouseLeave",n0="onMouseEnter",P1="mouse",(e==="pointerout"||e==="pointerover")&&(et=T5,Y0="onPointerLeave",n0="onPointerEnter",P1="pointer"),z2=f5==null?b0:m2(f5),c0=l5==null?b0:m2(l5),b0=new et(Y0,P1+"leave",f5,i,O0),b0.target=z2,b0.relatedTarget=c0,Y0=null,F2(O0)===s0&&(et=new et(n0,P1+"enter",l5,i,O0),et.target=c0,et.relatedTarget=z2,Y0=et),z2=Y0,f5&&l5)a:{for(et=f5,n0=l5,P1=0,c0=et;c0;c0=Ba(c0))P1++;for(c0=0,Y0=n0;Y0;Y0=Ba(Y0))c0++;for(;0<P1-c0;)et=Ba(et),P1--;for(;0<c0-P1;)n0=Ba(n0),c0--;for(;P1--;){if(et===n0||n0!==null&&et===n0.alternate)break a;et=Ba(et),n0=Ba(n0)}et=null}else et=null;f5!==null&&je(c5,b0,f5,et,!1),l5!==null&&z2!==null&&je(c5,z2,l5,et,!0)}}t:{if(b0=s0?m2(s0):window,f5=b0.nodeName&&b0.nodeName.toLowerCase(),f5==="select"||f5==="input"&&b0.type==="file")var I5=ur;else if(Rt(b0))if(Ze)I5=ke;else{I5=_t;var F5=hr}else(f5=b0.nodeName)&&f5.toLowerCase()==="input"&&(b0.type==="checkbox"||b0.type==="radio")&&(I5=Xr);if(I5&&(I5=I5(e,s0))){e4(c5,I5,i,O0);break t}F5&&F5(e,b0,s0),e==="focusout"&&(F5=b0._wrapperState)&&F5.controlled&&b0.type==="number"&&V1(b0,"number",b0.value)}switch(F5=s0?m2(s0):window,e){case"focusin":(Rt(F5)||F5.contentEditable==="true")&&(Ya=F5,o4=s0,ge=null);break;case"focusout":ge=o4=Ya=null;break;case"mousedown":l4=!0;break;case"contextmenu":case"mouseup":case"dragend":l4=!1,G4(c5,i,O0);break;case"selectionchange":if(vr)break;case"keydown":case"keyup":G4(c5,i,O0)}var Z5;if(Xt)t:{switch(e){case"compositionstart":var W5="onCompositionStart";break t;case"compositionend":W5="onCompositionEnd";break t;case"compositionupdate":W5="onCompositionUpdate";break t}W5=void 0}else Ka?a4(e,i)&&(W5="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(W5="onCompositionStart");W5&&(Aa&&i.locale!=="ko"&&(Ka||W5!=="onCompositionStart"?W5==="onCompositionEnd"&&Ka&&(Z5=I2()):(S5=O0,$t="value"in S5?S5.value:S5.textContent,Ka=!0)),F5=ze(s0,W5),0<F5.length&&(W5=new Te(W5,e,null,i,O0),c5.push({event:W5,listeners:F5}),Z5?W5.data=Z5:(Z5=ra(i),Z5!==null&&(W5.data=Z5)))),(Z5=M2?B4(e,i):Dn(e,i))&&(s0=ze(s0,"onBeforeInput"),0<s0.length&&(O0=new Te("onBeforeInput","beforeinput",null,i,O0),c5.push({event:O0,listeners:s0}),O0.data=Z5))}Pe(c5,r)})}function Ne(e,r,i){return{instance:e,listener:r,currentTarget:i}}function ze(e,r){for(var i=r+"Capture",m=[];e!==null;){var B=e,k=B.stateNode;B.tag===5&&k!==null&&(B=k,k=_0(e,i),k!=null&&m.unshift(Ne(e,k,B)),k=_0(e,r),k!=null&&m.push(Ne(e,k,B))),e=e.return}return m}function Ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function je(e,r,i,m,B){for(var k=r._reactName,o1=[];i!==null&&i!==m;){var M1=i,O1=M1.alternate,s0=M1.stateNode;if(O1!==null&&O1===m)break;M1.tag===5&&s0!==null&&(M1=s0,B?(O1=_0(i,k),O1!=null&&o1.unshift(Ne(i,O1,M1))):B||(O1=_0(i,k),O1!=null&&o1.push(Ne(i,O1,M1)))),i=i.return}o1.length!==0&&e.push({event:r,listeners:o1})}var Ir=/\r\n?/g,tn=/\u0000|\uFFFD/g;function s4(e){return(typeof e=="string"?e:""+e).replace(Ir,`
  `).replace(tn,"")}function xe(e,r,i){if(r=s4(r),s4(e)!==r&&i)throw Error(o(425))}function D4(){}var u4=null,N4=null;function j4(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,He=typeof clearTimeout=="function"?clearTimeout:void 0,X1=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof X1!="undefined"?function(e){return X1.resolve(null).then(e).catch(C0)}:Za;function C0(e){setTimeout(function(){throw e})}function g0(e,r){var i=r,m=0;do{var B=i.nextSibling;if(e.removeChild(i),B&&B.nodeType===8)if(i=B.data,i==="/$"){if(m===0){e.removeChild(B),A5(r);return}m--}else i!=="$"&&i!=="$?"&&i!=="$!"||m++;i=B}while(i);A5(r)}function T0(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function k0(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}var o5=Math.random().toString(36).slice(2),d5="__reactFiber$"+o5,J5="__reactProps$"+o5,Pt="__reactContainer$"+o5,vt="__reactEvents$"+o5,j2="__reactListeners$"+o5,T2="__reactHandles$"+o5;function F2(e){var r=e[d5];if(r)return r;for(var i=e.parentNode;i;){if(r=i[Pt]||i[d5]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=k0(e);e!==null;){if(i=e[d5])return i;e=k0(e)}return r}e=i,i=e.parentNode}return null}function ba(e){return e=e[d5]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function m2(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function y2(e){return e[J5]||null}var c2=[],oa=-1;function S2(e){return{current:e}}function Et(e){0>oa||(e.current=c2[oa],c2[oa]=null,oa--)}function Zt(e,r){oa++,c2[oa]=e.current,e.current=r}var la={},C2=S2(la),Yt=S2(!1),Oa=la;function qa(e,r){var i=e.type.contextTypes;if(!i)return la;var m=e.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===r)return m.__reactInternalMemoizedMaskedChildContext;var B={},k;for(k in i)B[k]=r[k];return m&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=B),B}function w2(e){return e=e.childContextTypes,e!=null}function fa(){Et(Yt),Et(C2)}function U4(e,r,i){if(C2.current!==la)throw Error(o(168));Zt(C2,r),Zt(Yt,i)}function Mr(e,r,i){var m=e.stateNode;if(r=r.childContextTypes,typeof m.getChildContext!="function")return i;m=m.getChildContext();for(var B in m)if(!(B in r))throw Error(o(108,S1(e)||"Unknown",B));return W({},i,m)}function Be(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||la,Oa=C2.current,Zt(C2,e),Zt(Yt,Yt.current),!0}function U2(e,r,i){var m=e.stateNode;if(!m)throw Error(o(169));i?(e=Mr(e,r,Oa),m.__reactInternalMemoizedMergedChildContext=e,Et(Yt),Et(C2),Zt(C2,e)):Et(Yt),Zt(Yt,i)}var V2=null,pa=!1,yr=!1;function Cr(e){V2===null?V2=[e]:V2.push(e)}function U3(e){pa=!0,Cr(e)}function Ie(){if(!yr&&V2!==null){yr=!0;var e=0,r=V;try{var i=V2;for(V=1;e<i.length;e++){var m=i[e];do m=m(!0);while(m!==null)}V2=null,pa=!1}catch(B){throw V2!==null&&(V2=V2.slice(e+1)),ft(Tt,Ie),B}finally{V=r,yr=!1}}return null}var $3=S.ReactCurrentBatchConfig;function Qt(e,r){if(e&&e.defaultProps){r=W({},r),e=e.defaultProps;for(var i in e)r[i]===void 0&&(r[i]=e[i]);return r}return r}var h4=S2(null),$4=null,te=null,wr=null;function an(){wr=te=$4=null}function Vr(e){var r=h4.current;Et(h4),e._currentValue=r}function Ue(e,r,i){for(;e!==null;){var m=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,m!==null&&(m.childLanes|=r)):m!==null&&(m.childLanes&r)!==r&&(m.childLanes|=r),e===i)break;e=e.return}}function d4(e,r){$4=e,wr=te=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(W2=!0),e.firstContext=null)}function ga(e){var r=e._currentValue;if(wr!==e)if(e={context:e,memoizedValue:r,next:null},te===null){if($4===null)throw Error(o(308));te=e,$4.dependencies={lanes:0,firstContext:e}}else te=te.next=e;return r}var ka=null,Me=!1;function en(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nn(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ye(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ae(e,r){var i=e.updateQueue;i!==null&&(i=i.shared,_6(e)?(e=i.interleaved,e===null?(r.next=r,ka===null?ka=[i]:ka.push(i)):(r.next=e.next,e.next=r),i.interleaved=r):(e=i.pending,e===null?r.next=r:(r.next=e.next,e.next=r),i.pending=r))}function Ar(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var m=r.lanes;m&=e.pendingLanes,i|=m,r.lanes=i,ut(e,i)}}function rn(e,r){var i=e.updateQueue,m=e.alternate;if(m!==null&&(m=m.updateQueue,i===m)){var B=null,k=null;if(i=i.firstBaseUpdate,i!==null){do{var o1={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};k===null?B=k=o1:k=k.next=o1,i=i.next}while(i!==null);k===null?B=k=r:k=k.next=r}else B=k=r;i={baseState:m.baseState,firstBaseUpdate:B,lastBaseUpdate:k,shared:m.shared,effects:m.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}function W4(e,r,i,m){var B=e.updateQueue;Me=!1;var k=B.firstBaseUpdate,o1=B.lastBaseUpdate,M1=B.shared.pending;if(M1!==null){B.shared.pending=null;var O1=M1,s0=O1.next;O1.next=null,o1===null?k=s0:o1.next=s0,o1=O1;var O0=e.alternate;O0!==null&&(O0=O0.updateQueue,M1=O0.lastBaseUpdate,M1!==o1&&(M1===null?O0.firstBaseUpdate=s0:M1.next=s0,O0.lastBaseUpdate=O1))}if(k!==null){var c5=B.baseState;o1=0,O0=s0=O1=null,M1=k;do{var b0=M1.lane,f5=M1.eventTime;if((m&b0)===b0){O0!==null&&(O0=O0.next={eventTime:f5,lane:0,tag:M1.tag,payload:M1.payload,callback:M1.callback,next:null});t:{var l5=e,et=M1;switch(b0=r,f5=i,et.tag){case 1:if(l5=et.payload,typeof l5=="function"){c5=l5.call(f5,c5,b0);break t}c5=l5;break t;case 3:l5.flags=l5.flags&-65537|128;case 0:if(l5=et.payload,b0=typeof l5=="function"?l5.call(f5,c5,b0):l5,b0==null)break t;c5=W({},c5,b0);break t;case 2:Me=!0}}M1.callback!==null&&M1.lane!==0&&(e.flags|=64,b0=B.effects,b0===null?B.effects=[M1]:b0.push(M1))}else f5={eventTime:f5,lane:b0,tag:M1.tag,payload:M1.payload,callback:M1.callback,next:null},O0===null?(s0=O0=f5,O1=c5):O0=O0.next=f5,o1|=b0;if(M1=M1.next,M1===null){if(M1=B.shared.pending,M1===null)break;b0=M1,M1=b0.next,b0.next=null,B.lastBaseUpdate=b0,B.shared.pending=null}}while(1);if(O0===null&&(O1=c5),B.baseState=O1,B.firstBaseUpdate=s0,B.lastBaseUpdate=O0,r=B.shared.interleaved,r!==null){B=r;do o1|=B.lane,B=B.next;while(B!==r)}else k===null&&(B.shared.lanes=0);or|=o1,e.lanes=o1,e.memoizedState=c5}}function nn(e,r,i){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var m=e[r],B=m.callback;if(B!==null){if(m.callback=null,m=i,typeof B!="function")throw Error(o(191,B));B.call(m)}}}var v4=new n.Component().refs;function Hr(e,r,i,m){r=e.memoizedState,i=i(m,r),i=i==null?r:W({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var qt={isMounted:function(e){return(e=e._reactInternals)?k5(e)===e:!1},enqueueSetState:function(e,r,i){e=e._reactInternals;var m=Ia(),B=y4(e),k=ye(m,B);k.payload=r,i!=null&&(k.callback=i),ae(e,k),r=se(e,B,m),r!==null&&Ar(r,e,B)},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var m=Ia(),B=y4(e),k=ye(m,B);k.tag=1,k.payload=r,i!=null&&(k.callback=i),ae(e,k),r=se(e,B,m),r!==null&&Ar(r,e,B)},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=Ia(),m=y4(e),B=ye(i,m);B.tag=2,r!=null&&(B.callback=r),ae(e,B),r=se(e,m,i),r!==null&&Ar(r,e,m)}};function Ra(e,r,i,m,B,k,o1){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(m,k,o1):r.prototype&&r.prototype.isPureReactComponent?!pe(i,m)||!pe(B,k):!0}function on(e,r,i){var m=!1,B=la,k=r.contextType;return typeof k=="object"&&k!==null?k=ga(k):(B=w2(r)?Oa:C2.current,m=r.contextTypes,k=(m=m!=null)?qa(e,B):la),r=new r(i,k),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qt,e.stateNode=r,r._reactInternals=e,m&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=B,e.__reactInternalMemoizedMaskedChildContext=k),r}function jn(e,r,i,m){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,m),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,m),r.state!==e&&qt.enqueueReplaceState(r,r.state,null)}function ln(e,r,i,m){var B=e.stateNode;B.props=i,B.state=e.memoizedState,B.refs=v4,en(e);var k=r.contextType;typeof k=="object"&&k!==null?B.context=ga(k):(k=w2(r)?Oa:C2.current,B.context=qa(e,k)),B.state=e.memoizedState,k=r.getDerivedStateFromProps,typeof k=="function"&&(Hr(e,r,k,i),B.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof B.getSnapshotBeforeUpdate=="function"||typeof B.UNSAFE_componentWillMount!="function"&&typeof B.componentWillMount!="function"||(r=B.state,typeof B.componentWillMount=="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount=="function"&&B.UNSAFE_componentWillMount(),r!==B.state&&qt.enqueueReplaceState(B,B.state,null),W4(e,i,B,m),B.state=e.memoizedState),typeof B.componentDidMount=="function"&&(e.flags|=4194308)}var be=[],Le=0,ee=null,K4=0,ma=[],$2=0,Se=null,Pa=1,re="";function $e(e,r){be[Le++]=K4,be[Le++]=ee,ee=e,K4=r}function cn(e,r,i){ma[$2++]=Pa,ma[$2++]=re,ma[$2++]=Se,Se=e;var m=Pa;e=re;var B=32-Nt(m)-1;m&=~(1<<B),i+=1;var k=32-Nt(r)+B;if(30<k){var o1=B-B%5;k=(m&(1<<o1)-1).toString(32),m>>=o1,B-=o1,Pa=1<<32-Nt(r)+B|i<<B|m,re=k+e}else Pa=1<<k|i<<B|m,re=e}function ne(e){e.return!==null&&($e(e,1),cn(e,1,0))}function Br(e){for(;e===ee;)ee=be[--Le],be[Le]=null,K4=be[--Le],be[Le]=null;for(;e===Se;)Se=ma[--$2],ma[$2]=null,re=ma[--$2],ma[$2]=null,Pa=ma[--$2],ma[$2]=null}var za=null,ia=null,Gt=!1,La=null;function Un(e,r){var i=ue(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=e,r=e.deletions,r===null?(e.deletions=[i],e.flags|=16):r.push(i)}function $n(e,r){switch(e.tag){case 5:var i=e.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,za=e,ia=T0(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,za=e,ia=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=Se!==null?{id:Pa,overflow:re}:null,e.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=ue(18,null,null,0),i.stateNode=r,i.return=e,e.child=i,za=e,ia=null,!0):!1;default:return!1}}function sn(e){return(e.mode&1)!==0&&(e.flags&128)===0}function f4(e){if(Gt){var r=ia;if(r){var i=r;if(!$n(e,r)){if(sn(e))throw Error(o(418));r=T0(i.nextSibling);var m=za;r&&$n(e,r)?Un(m,i):(e.flags=e.flags&-4097|2,Gt=!1,za=e)}}else{if(sn(e))throw Error(o(418));e.flags=e.flags&-4097|2,Gt=!1,za=e}}}function Wn(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;za=e}function Y4(e){if(e!==za)return!1;if(!Gt)return Wn(e),Gt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!j4(e.type,e.memoizedProps)),r&&(r=ia)){if(sn(e)){for(e=ia;e;)e=T0(e.nextSibling);throw Error(o(418))}for(;r;)Un(e,r),r=T0(r.nextSibling)}if(Wn(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(r===0){ia=T0(e.nextSibling);break t}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}e=e.nextSibling}ia=null}}else ia=za?T0(e.stateNode.nextSibling):null;return!0}function p4(){ia=za=null,Gt=!1}function un(e){La===null?La=[e]:La.push(e)}function We(e,r,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var m=i.stateNode}if(!m)throw Error(o(147,e));var B=m,k=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===k?r.ref:(r=function(o1){var M1=B.refs;M1===v4&&(M1=B.refs={}),o1===null?delete M1[k]:M1[k]=o1},r._stringRef=k,r)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function X4(e,r){throw e=Object.prototype.toString.call(r),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Kn(e){var r=e._init;return r(e._payload)}function Yn(e){function r(n0,P1){if(e){var c0=n0.deletions;c0===null?(n0.deletions=[P1],n0.flags|=16):c0.push(P1)}}function i(n0,P1){if(!e)return null;for(;P1!==null;)r(n0,P1),P1=P1.sibling;return null}function m(n0,P1){for(n0=new Map;P1!==null;)P1.key!==null?n0.set(P1.key,P1):n0.set(P1.index,P1),P1=P1.sibling;return n0}function B(n0,P1){return n0=w4(n0,P1),n0.index=0,n0.sibling=null,n0}function k(n0,P1,c0){return n0.index=c0,e?(c0=n0.alternate,c0!==null?(c0=c0.index,c0<P1?(n0.flags|=2,P1):c0):(n0.flags|=2,P1)):(n0.flags|=1048576,P1)}function o1(n0){return e&&n0.alternate===null&&(n0.flags|=2),n0}function M1(n0,P1,c0,Y0){return P1===null||P1.tag!==6?(P1=s6(c0,n0.mode,Y0),P1.return=n0,P1):(P1=B(P1,c0),P1.return=n0,P1)}function O1(n0,P1,c0,Y0){var I5=c0.type;return I5===J?O0(n0,P1,c0.props.children,Y0,c0.key):P1!==null&&(P1.elementType===I5||typeof I5=="object"&&I5!==null&&I5.$$typeof===Z&&Kn(I5)===P1.type)?(Y0=B(P1,c0.props),Y0.ref=We(n0,P1,c0),Y0.return=n0,Y0):(Y0=S3(c0.type,c0.key,c0.props,null,n0.mode,Y0),Y0.ref=We(n0,P1,c0),Y0.return=n0,Y0)}function s0(n0,P1,c0,Y0){return P1===null||P1.tag!==4||P1.stateNode.containerInfo!==c0.containerInfo||P1.stateNode.implementation!==c0.implementation?(P1=u6(c0,n0.mode,Y0),P1.return=n0,P1):(P1=B(P1,c0.children||[]),P1.return=n0,P1)}function O0(n0,P1,c0,Y0,I5){return P1===null||P1.tag!==7?(P1=sr(c0,n0.mode,Y0,I5),P1.return=n0,P1):(P1=B(P1,c0),P1.return=n0,P1)}function c5(n0,P1,c0){if(typeof P1=="string"&&P1!==""||typeof P1=="number")return P1=s6(""+P1,n0.mode,c0),P1.return=n0,P1;if(typeof P1=="object"&&P1!==null){switch(P1.$$typeof){case F:return c0=S3(P1.type,P1.key,P1.props,null,n0.mode,c0),c0.ref=We(n0,null,P1),c0.return=n0,c0;case j:return P1=u6(P1,n0.mode,c0),P1.return=n0,P1;case Z:var Y0=P1._init;return c5(n0,Y0(P1._payload),c0)}if(s1(P1)||N(P1))return P1=sr(P1,n0.mode,c0,null),P1.return=n0,P1;X4(n0,P1)}return null}function b0(n0,P1,c0,Y0){var I5=P1!==null?P1.key:null;if(typeof c0=="string"&&c0!==""||typeof c0=="number")return I5!==null?null:M1(n0,P1,""+c0,Y0);if(typeof c0=="object"&&c0!==null){switch(c0.$$typeof){case F:return c0.key===I5?O1(n0,P1,c0,Y0):null;case j:return c0.key===I5?s0(n0,P1,c0,Y0):null;case Z:return I5=c0._init,b0(n0,P1,I5(c0._payload),Y0)}if(s1(c0)||N(c0))return I5!==null?null:O0(n0,P1,c0,Y0,null);X4(n0,c0)}return null}function f5(n0,P1,c0,Y0,I5){if(typeof Y0=="string"&&Y0!==""||typeof Y0=="number")return n0=n0.get(c0)||null,M1(P1,n0,""+Y0,I5);if(typeof Y0=="object"&&Y0!==null){switch(Y0.$$typeof){case F:return n0=n0.get(Y0.key===null?c0:Y0.key)||null,O1(P1,n0,Y0,I5);case j:return n0=n0.get(Y0.key===null?c0:Y0.key)||null,s0(P1,n0,Y0,I5);case Z:var F5=Y0._init;return f5(n0,P1,c0,F5(Y0._payload),I5)}if(s1(Y0)||N(Y0))return n0=n0.get(c0)||null,O0(P1,n0,Y0,I5,null);X4(P1,Y0)}return null}function l5(n0,P1,c0,Y0){for(var I5=null,F5=null,Z5=P1,W5=P1=0,k2=null;Z5!==null&&W5<c0.length;W5++){Z5.index>W5?(k2=Z5,Z5=null):k2=Z5.sibling;var bt=b0(n0,Z5,c0[W5],Y0);if(bt===null){Z5===null&&(Z5=k2);break}e&&Z5&&bt.alternate===null&&r(n0,Z5),P1=k(bt,P1,W5),F5===null?I5=bt:F5.sibling=bt,F5=bt,Z5=k2}if(W5===c0.length)return i(n0,Z5),Gt&&$e(n0,W5),I5;if(Z5===null){for(;W5<c0.length;W5++)Z5=c5(n0,c0[W5],Y0),Z5!==null&&(P1=k(Z5,P1,W5),F5===null?I5=Z5:F5.sibling=Z5,F5=Z5);return Gt&&$e(n0,W5),I5}for(Z5=m(n0,Z5);W5<c0.length;W5++)k2=f5(Z5,n0,W5,c0[W5],Y0),k2!==null&&(e&&k2.alternate!==null&&Z5.delete(k2.key===null?W5:k2.key),P1=k(k2,P1,W5),F5===null?I5=k2:F5.sibling=k2,F5=k2);return e&&Z5.forEach(function(V4){return r(n0,V4)}),Gt&&$e(n0,W5),I5}function et(n0,P1,c0,Y0){var I5=N(c0);if(typeof I5!="function")throw Error(o(150));if(c0=I5.call(c0),c0==null)throw Error(o(151));for(var F5=I5=null,Z5=P1,W5=P1=0,k2=null,bt=c0.next();Z5!==null&&!bt.done;W5++,bt=c0.next()){Z5.index>W5?(k2=Z5,Z5=null):k2=Z5.sibling;var V4=b0(n0,Z5,bt.value,Y0);if(V4===null){Z5===null&&(Z5=k2);break}e&&Z5&&V4.alternate===null&&r(n0,Z5),P1=k(V4,P1,W5),F5===null?I5=V4:F5.sibling=V4,F5=V4,Z5=k2}if(bt.done)return i(n0,Z5),Gt&&$e(n0,W5),I5;if(Z5===null){for(;!bt.done;W5++,bt=c0.next())bt=c5(n0,bt.value,Y0),bt!==null&&(P1=k(bt,P1,W5),F5===null?I5=bt:F5.sibling=bt,F5=bt);return Gt&&$e(n0,W5),I5}for(Z5=m(n0,Z5);!bt.done;W5++,bt=c0.next())bt=f5(Z5,n0,W5,bt.value,Y0),bt!==null&&(e&&bt.alternate!==null&&Z5.delete(bt.key===null?W5:bt.key),P1=k(bt,P1,W5),F5===null?I5=bt:F5.sibling=bt,F5=bt);return e&&Z5.forEach(function(z8){return r(n0,z8)}),Gt&&$e(n0,W5),I5}function z2(n0,P1,c0,Y0){if(typeof c0=="object"&&c0!==null&&c0.type===J&&c0.key===null&&(c0=c0.props.children),typeof c0=="object"&&c0!==null){switch(c0.$$typeof){case F:t:{for(var I5=c0.key,F5=P1;F5!==null;){if(F5.key===I5){if(I5=c0.type,I5===J){if(F5.tag===7){i(n0,F5.sibling),P1=B(F5,c0.props.children),P1.return=n0,n0=P1;break t}}else if(F5.elementType===I5||typeof I5=="object"&&I5!==null&&I5.$$typeof===Z&&Kn(I5)===F5.type){i(n0,F5.sibling),P1=B(F5,c0.props),P1.ref=We(n0,F5,c0),P1.return=n0,n0=P1;break t}i(n0,F5);break}else r(n0,F5);F5=F5.sibling}c0.type===J?(P1=sr(c0.props.children,n0.mode,Y0,c0.key),P1.return=n0,n0=P1):(Y0=S3(c0.type,c0.key,c0.props,null,n0.mode,Y0),Y0.ref=We(n0,P1,c0),Y0.return=n0,n0=Y0)}return o1(n0);case j:t:{for(F5=c0.key;P1!==null;){if(P1.key===F5)if(P1.tag===4&&P1.stateNode.containerInfo===c0.containerInfo&&P1.stateNode.implementation===c0.implementation){i(n0,P1.sibling),P1=B(P1,c0.children||[]),P1.return=n0,n0=P1;break t}else{i(n0,P1);break}else r(n0,P1);P1=P1.sibling}P1=u6(c0,n0.mode,Y0),P1.return=n0,n0=P1}return o1(n0);case Z:return F5=c0._init,z2(n0,P1,F5(c0._payload),Y0)}if(s1(c0))return l5(n0,P1,c0,Y0);if(N(c0))return et(n0,P1,c0,Y0);X4(n0,c0)}return typeof c0=="string"&&c0!==""||typeof c0=="number"?(c0=""+c0,P1!==null&&P1.tag===6?(i(n0,P1.sibling),P1=B(P1,c0),P1.return=n0,n0=P1):(i(n0,P1),P1=s6(c0,n0.mode,Y0),P1.return=n0,n0=P1),o1(n0)):i(n0,P1)}return z2}var _e=Yn(!0),Xn=Yn(!1),Q4={},Da=S2(Q4),J4=S2(Q4),g4=S2(Q4);function oe(e){if(e===Q4)throw Error(o(174));return e}function br(e,r){switch(Zt(g4,r),Zt(J4,e),Zt(Da,Q4),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:v0(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=v0(r,e)}Et(Da),Zt(Da,r)}function Ke(){Et(Da),Et(J4),Et(g4)}function hn(e){oe(g4.current);var r=oe(Da.current),i=v0(r,e.type);r!==i&&(Zt(J4,e),Zt(Da,i))}function dn(e){J4.current===e&&(Et(Da),Et(J4))}var Jt=S2(0);function Lr(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Sr=[];function vn(){for(var e=0;e<Sr.length;e++)Sr[e]._workInProgressVersionPrimary=null;Sr.length=0}var _r=S.ReactCurrentDispatcher,fn=S.ReactCurrentBatchConfig,Ye=0,Wt=null,s2=null,A2=null,Er=!1,m4=!1,q4=0,Qn=0;function Z2(){throw Error(o(321))}function Gr(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!N2(e[i],r[i]))return!1;return!0}function pn(e,r,i,m,B,k){if(Ye=k,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_r.current=e===null||e.memoizedState===null?s3:K3,e=i(m,B),m4){k=0;do{if(m4=!1,q4=0,25<=k)throw Error(o(301));k+=1,A2=s2=null,r.updateQueue=null,_r.current=Y3,e=i(m,B)}while(m4)}if(_r.current=kr,r=s2!==null&&s2.next!==null,Ye=0,A2=s2=Wt=null,Er=!1,r)throw Error(o(300));return e}function Tr(){var e=q4!==0;return q4=0,e}function le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return A2===null?Wt.memoizedState=A2=e:A2=A2.next=e,A2}function Sa(){if(s2===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=s2.next;var r=A2===null?Wt.memoizedState:A2.next;if(r!==null)A2=r,s2=e;else{if(e===null)throw Error(o(310));s2=e,e={memoizedState:s2.memoizedState,baseState:s2.baseState,baseQueue:s2.baseQueue,queue:s2.queue,next:null},A2===null?Wt.memoizedState=A2=e:A2=A2.next=e}return A2}function tr(e,r){return typeof r=="function"?r(e):r}function gn(e){var r=Sa(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var m=s2,B=m.baseQueue,k=i.pending;if(k!==null){if(B!==null){var o1=B.next;B.next=k.next,k.next=o1}m.baseQueue=B=k,i.pending=null}if(B!==null){k=B.next,m=m.baseState;var M1=o1=null,O1=null,s0=k;do{var O0=s0.lane;if((Ye&O0)===O0)O1!==null&&(O1=O1.next={lane:0,action:s0.action,hasEagerState:s0.hasEagerState,eagerState:s0.eagerState,next:null}),m=s0.hasEagerState?s0.eagerState:e(m,s0.action);else{var c5={lane:O0,action:s0.action,hasEagerState:s0.hasEagerState,eagerState:s0.eagerState,next:null};O1===null?(M1=O1=c5,o1=m):O1=O1.next=c5,Wt.lanes|=O0,or|=O0}s0=s0.next}while(s0!==null&&s0!==k);O1===null?o1=m:O1.next=M1,N2(m,r.memoizedState)||(W2=!0),r.memoizedState=m,r.baseState=o1,r.baseQueue=O1,i.lastRenderedState=m}if(e=i.interleaved,e!==null){B=e;do k=B.lane,Wt.lanes|=k,or|=k,B=B.next;while(B!==e)}else B===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function Fr(e){var r=Sa(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var m=i.dispatch,B=i.pending,k=r.memoizedState;if(B!==null){i.pending=null;var o1=B=B.next;do k=e(k,o1.action),o1=o1.next;while(o1!==B);N2(k,r.memoizedState)||(W2=!0),r.memoizedState=k,r.baseQueue===null&&(r.baseState=k),i.lastRenderedState=k}return[k,m]}function z4(){}function mn(e,r){var i=Wt,m=Sa(),B=r(),k=!N2(m.memoizedState,B);if(k&&(m.memoizedState=B,W2=!0),m=m.queue,In(t3.bind(null,i,m,e),[e]),m.getSnapshot!==r||k||A2!==null&&A2.memoizedState.tag&1){if(i.flags|=2048,ar(9,qn.bind(null,i,m,B,r),void 0,null),E2===null)throw Error(o(349));Ye&30||Jn(i,r,B)}return B}function Jn(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function qn(e,r,i,m){r.value=i,r.getSnapshot=m,a3(r)&&se(e,1,-1)}function t3(e,r,i){return i(function(){a3(r)&&se(e,1,-1)})}function a3(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!N2(e,i)}catch(m){return!0}}function e3(e){var r=le();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},r.queue=e,e=e.dispatch=c3.bind(null,Wt,e),[r.memoizedState,e]}function ar(e,r,i,m){return e={tag:e,create:r,destroy:i,deps:m,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=e.next=e):(i=r.lastEffect,i===null?r.lastEffect=e.next=e:(m=i.next,i.next=e,e.next=m,r.lastEffect=e)),e}function zn(){return Sa().memoizedState}function Zr(e,r,i,m){var B=le();Wt.flags|=e,B.memoizedState=ar(1|r,i,void 0,m===void 0?null:m)}function er(e,r,i,m){var B=Sa();m=m===void 0?null:m;var k=void 0;if(s2!==null){var o1=s2.memoizedState;if(k=o1.destroy,m!==null&&Gr(m,o1.deps)){B.memoizedState=ar(r,i,k,m);return}}Wt.flags|=e,B.memoizedState=ar(1|r,i,k,m)}function xn(e,r){return Zr(8390656,8,e,r)}function In(e,r){return er(2048,8,e,r)}function Mn(e,r){return er(4,2,e,r)}function r3(e,r){return er(4,4,e,r)}function n3(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function yn(e,r,i){return i=i!=null?i.concat([e]):null,er(4,4,n3.bind(null,r,e),i)}function Or(){}function _a(e,r){var i=Sa();r=r===void 0?null:r;var m=i.memoizedState;return m!==null&&r!==null&&Gr(r,m[1])?m[0]:(i.memoizedState=[e,r],e)}function Cn(e,r){var i=Sa();r=r===void 0?null:r;var m=i.memoizedState;return m!==null&&r!==null&&Gr(r,m[1])?m[0]:(e=e(),i.memoizedState=[e,r],e)}function o3(e,r,i){return Ye&21?(N2(i,r)||(i=b5(),Wt.lanes|=i,or|=i,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,W2=!0),e.memoizedState=i)}function l3(e,r){var i=V;V=i!==0&&4>i?i:4,e(!0);var m=fn.transition;fn.transition={};try{e(!1),r()}finally{V=i,fn.transition=m}}function i3(){return Sa().memoizedState}function W3(e,r,i){var m=y4(e);i={lane:m,action:i,hasEagerState:!1,eagerState:null,next:null},wn(e)?Vn(r,i):(An(e,r,i),i=Ia(),e=se(e,m,i),e!==null&&Hn(e,r,m))}function c3(e,r,i){var m=y4(e),B={lane:m,action:i,hasEagerState:!1,eagerState:null,next:null};if(wn(e))Vn(r,B);else{An(e,r,B);var k=e.alternate;if(e.lanes===0&&(k===null||k.lanes===0)&&(k=r.lastRenderedReducer,k!==null))try{var o1=r.lastRenderedState,M1=k(o1,i);if(B.hasEagerState=!0,B.eagerState=M1,N2(M1,o1))return}catch(O1){}finally{}i=Ia(),e=se(e,m,i),e!==null&&Hn(e,r,m)}}function wn(e){var r=e.alternate;return e===Wt||r!==null&&r===Wt}function Vn(e,r){m4=Er=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function An(e,r,i){_6(e)?(e=r.interleaved,e===null?(i.next=i,ka===null?ka=[r]:ka.push(r)):(i.next=e.next,e.next=i),r.interleaved=i):(e=r.pending,e===null?i.next=i:(i.next=e.next,e.next=i),r.pending=i)}function Hn(e,r,i){if(i&4194240){var m=r.lanes;m&=e.pendingLanes,i|=m,r.lanes=i,ut(e,i)}}var kr={readContext:ga,useCallback:Z2,useContext:Z2,useEffect:Z2,useImperativeHandle:Z2,useInsertionEffect:Z2,useLayoutEffect:Z2,useMemo:Z2,useReducer:Z2,useRef:Z2,useState:Z2,useDebugValue:Z2,useDeferredValue:Z2,useTransition:Z2,useMutableSource:Z2,useSyncExternalStore:Z2,useId:Z2,unstable_isNewReconciler:!1},s3={readContext:ga,useCallback:function(e,r){return le().memoizedState=[e,r===void 0?null:r],e},useContext:ga,useEffect:xn,useImperativeHandle:function(e,r,i){return i=i!=null?i.concat([e]):null,Zr(4194308,4,n3.bind(null,r,e),i)},useLayoutEffect:function(e,r){return Zr(4194308,4,e,r)},useInsertionEffect:function(e,r){return Zr(4,2,e,r)},useMemo:function(e,r){var i=le();return r=r===void 0?null:r,e=e(),i.memoizedState=[e,r],e},useReducer:function(e,r,i){var m=le();return r=i!==void 0?i(r):r,m.memoizedState=m.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},m.queue=e,e=e.dispatch=W3.bind(null,Wt,e),[m.memoizedState,e]},useRef:function(e){var r=le();return e={current:e},r.memoizedState=e},useState:e3,useDebugValue:Or,useDeferredValue:function(e){return le().memoizedState=e},useTransition:function(){var e=e3(!1),r=e[0];return e=l3.bind(null,e[1]),le().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,i){var m=Wt,B=le();if(Gt){if(i===void 0)throw Error(o(407));i=i()}else{if(i=r(),E2===null)throw Error(o(349));Ye&30||Jn(m,r,i)}B.memoizedState=i;var k={value:i,getSnapshot:r};return B.queue=k,xn(t3.bind(null,m,k,e),[e]),m.flags|=2048,ar(9,qn.bind(null,m,k,i,r),void 0,null),i},useId:function(){var e=le(),r=E2.identifierPrefix;if(Gt){var i=re,m=Pa;i=(m&~(1<<32-Nt(m)-1)).toString(32)+i,r=":"+r+"R"+i,i=q4++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=Qn++,r=":"+r+"r"+i.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},K3={readContext:ga,useCallback:_a,useContext:ga,useEffect:In,useImperativeHandle:yn,useInsertionEffect:Mn,useLayoutEffect:r3,useMemo:Cn,useReducer:gn,useRef:zn,useState:function(){return gn(tr)},useDebugValue:Or,useDeferredValue:function(e){var r=Sa();return o3(r,s2.memoizedState,e)},useTransition:function(){var e=gn(tr)[0],r=Sa().memoizedState;return[e,r]},useMutableSource:z4,useSyncExternalStore:mn,useId:i3,unstable_isNewReconciler:!1},Y3={readContext:ga,useCallback:_a,useContext:ga,useEffect:In,useImperativeHandle:yn,useInsertionEffect:Mn,useLayoutEffect:r3,useMemo:Cn,useReducer:Fr,useRef:zn,useState:function(){return Fr(tr)},useDebugValue:Or,useDeferredValue:function(e){var r=Sa();return s2===null?r.memoizedState=e:o3(r,s2.memoizedState,e)},useTransition:function(){var e=Fr(tr)[0],r=Sa().memoizedState;return[e,r]},useMutableSource:z4,useSyncExternalStore:mn,useId:i3,unstable_isNewReconciler:!1};function Rr(e,r){try{var i="",m=r;do i+=G1(m),m=m.return;while(m);var B=i}catch(k){B=`
  Error generating stack: `+k.message+`
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}d.exports=f,d.exports.__esModule=!0,d.exports.default=d.exports},95848:function(d){function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}d.exports=f,d.exports.__esModule=!0,d.exports.default=d.exports},57213:function(d,f,a){var n=a(52510);function l(s,h){var p=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);h&&(u=u.filter(function(z){return Object.getOwnPropertyDescriptor(s,z).enumerable})),p.push.apply(p,u)}return p}function o(s){for(var h=1;h<arguments.length;h++){var p=arguments[h]!=null?arguments[h]:{};h%2?l(Object(p),!0).forEach(function(u){n(s,u,p[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(p)):l(Object(p)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(p,u))})}return s}d.exports=o,d.exports.__esModule=!0,d.exports.default=d.exports},25359:function(d,f,a){var n=a(37635).default;function l(){"use strict";d.exports=l=function(){return o},d.exports.__esModule=!0,d.exports.default=d.exports;var o={},s=Object.prototype,h=s.hasOwnProperty,p=Object.defineProperty||function(a1,D,Z){a1[D]=Z.value},u=typeof Symbol=="function"?Symbol:{},z=u.iterator||"@@iterator",x=u.asyncIterator||"@@asyncIterator",g=u.toStringTag||"@@toStringTag";function I(a1,D,Z){return Object.defineProperty(a1,D,{value:Z,enumerable:!0,configurable:!0,writable:!0}),a1[D]}try{I({},"")}catch(a1){I=function(Z,U,Y){return Z[U]=Y}}function M(a1,D,Z,U){var Y=D&&D.prototype instanceof _?D:_,N=Object.create(Y.prototype),W=new Q(U||[]);return p(N,"_invoke",{value:J(a1,Z,W)}),N}function w(a1,D,Z){try{return{type:"normal",arg:a1.call(D,Z)}}catch(U){return{type:"throw",arg:U}}}o.wrap=M;var C={};function _(){}function H(){}function b(){}var E={};I(E,z,function(){return this});var L=Object.getPrototypeOf,P=L&&L(L(R([])));P&&P!==s&&h.call(P,z)&&(E=P);var S=b.prototype=_.prototype=Object.create(E);function F(a1){["next","throw","return"].forEach(function(D){I(a1,D,function(Z){return this._invoke(D,Z)})})}function j(a1,D){function Z(Y,N,W,z1){var E1=w(a1[Y],a1,N);if(E1.type!=="throw"){var w1=E1.arg,c1=w1.value;return c1&&n(c1)=="object"&&h.call(c1,"__await")?D.resolve(c1.__await).then(function(G1){Z("next",G1,W,z1)},function(G1){Z("throw",G1,W,z1)}):D.resolve(c1).then(function(G1){w1.value=G1,W(w1)},function(G1){return Z("throw",G1,W,z1)})}z1(E1.arg)}var U;p(this,"_invoke",{value:function(N,W){function z1(){return new D(function(E1,w1){Z(N,W,E1,w1)})}return U=U?U.then(z1,z1):z1()}})}function J(a1,D,Z){var U="suspendedStart";return function(Y,N){if(U==="executing")throw new Error("Generator is already running");if(U==="completed"){if(Y==="throw")throw N;return f1()}for(Z.method=Y,Z.arg=N;;){var W=Z.delegate;if(W){var z1=e1(W,Z);if(z1){if(z1===C)continue;return z1}}if(Z.method==="next")Z.sent=Z._sent=Z.arg;else if(Z.method==="throw"){if(U==="suspendedStart")throw U="completed",Z.arg;Z.dispatchException(Z.arg)}else Z.method==="return"&&Z.abrupt("return",Z.arg);U="executing";var E1=w(a1,D,Z);if(E1.type==="normal"){if(U=Z.done?"completed":"suspendedYield",E1.arg===C)continue;return{value:E1.arg,done:Z.done}}E1.type==="throw"&&(U="completed",Z.method="throw",Z.arg=E1.arg)}}}function e1(a1,D){var Z=D.method,U=a1.iterator[Z];if(U===void 0)return D.delegate=null,Z==="throw"&&a1.iterator.return&&(D.method="return",D.arg=void 0,e1(a1,D),D.method==="throw")||Z!=="return"&&(D.method="throw",D.arg=new TypeError("The iterator does not provide a '"+Z+"' method")),C;var Y=w(U,a1.iterator,D.arg);if(Y.type==="throw")return D.method="throw",D.arg=Y.arg,D.delegate=null,C;var N=Y.arg;return N?N.done?(D[a1.resultName]=N.value,D.next=a1.nextLoc,D.method!=="return"&&(D.method="next",D.arg=void 0),D.delegate=null,C):N:(D.method="throw",D.arg=new TypeError("iterator result is not an object"),D.delegate=null,C)}function t1(a1){var D={tryLoc:a1[0]};1 in a1&&(D.catchLoc=a1[1]),2 in a1&&(D.finallyLoc=a1[2],D.afterLoc=a1[3]),this.tryEntries.push(D)}function X(a1){var D=a1.completion||{};D.type="normal",delete D.arg,a1.completion=D}function Q(a1){this.tryEntries=[{tryLoc:"root"}],a1.forEach(t1,this),this.reset(!0)}function R(a1){if(a1){var D=a1[z];if(D)return D.call(a1);if(typeof a1.next=="function")return a1;if(!isNaN(a1.length)){var Z=-1,U=function Y(){for(;++Z<a1.length;)if(h.call(a1,Z))return Y.value=a1[Z],Y.done=!1,Y;return Y.value=void 0,Y.done=!0,Y};return U.next=U}}return{next:f1}}function f1(){return{value:void 0,done:!0}}return H.prototype=b,p(S,"constructor",{value:b,configurable:!0}),p(b,"constructor",{value:H,configurable:!0}),H.displayName=I(b,g,"GeneratorFunction"),o.isGeneratorFunction=function(a1){var D=typeof a1=="function"&&a1.constructor;return!!D&&(D===H||(D.displayName||D.name)==="GeneratorFunction")},o.mark=function(a1){return Object.setPrototypeOf?Object.setPrototypeOf(a1,b):(a1.__proto__=b,I(a1,g,"GeneratorFunction")),a1.prototype=Object.create(S),a1},o.awrap=function(a1){return{__await:a1}},F(j.prototype),I(j.prototype,x,function(){return this}),o.AsyncIterator=j,o.async=function(a1,D,Z,U,Y){Y===void 0&&(Y=Promise);var N=new j(M(a1,D,Z,U),Y);return o.isGeneratorFunction(D)?N:N.next().then(function(W){return W.done?W.value:N.next()})},F(S),I(S,g,"Generator"),I(S,z,function(){return this}),I(S,"toString",function(){return"[object Generator]"}),o.keys=function(a1){var D=Object(a1),Z=[];for(var U in D)Z.push(U);return Z.reverse(),function Y(){for(;Z.length;){var N=Z.pop();if(N in D)return Y.value=N,Y.done=!1,Y}return Y.done=!0,Y}},o.values=R,Q.prototype={constructor:Q,reset:function(D){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(X),!D)for(var Z in this)Z.charAt(0)==="t"&&h.call(this,Z)&&!isNaN(+Z.slice(1))&&(this[Z]=void 0)},stop:function(){this.done=!0;var D=this.tryEntries[0].completion;if(D.type==="throw")throw D.arg;return this.rval},dispatchException:function(D){if(this.done)throw D;var Z=this;function U(w1,c1){return W.type="throw",W.arg=D,Z.next=w1,c1&&(Z.method="next",Z.arg=void 0),!!c1}for(var Y=this.tryEntries.length-1;Y>=0;--Y){var N=this.tryEntries[Y],W=N.completion;if(N.tryLoc==="root")return U("end");if(N.tryLoc<=this.prev){var z1=h.call(N,"catchLoc"),E1=h.call(N,"finallyLoc");if(z1&&E1){if(this.prev<N.catchLoc)return U(N.catchLoc,!0);if(this.prev<N.finallyLoc)return U(N.finallyLoc)}else if(z1){if(this.prev<N.catchLoc)return U(N.catchLoc,!0)}else{if(!E1)throw new Error("try statement without catch or finally");if(this.prev<N.finallyLoc)return U(N.finallyLoc)}}}},abrupt:function(D,Z){for(var U=this.tryEntries.length-1;U>=0;--U){var Y=this.tryEntries[U];if(Y.tryLoc<=this.prev&&h.call(Y,"finallyLoc")&&this.prev<Y.finallyLoc){var N=Y;break}}N&&(D==="break"||D==="continue")&&N.tryLoc<=Z&&Z<=N.finallyLoc&&(N=null);var W=N?N.completion:{};return W.type=D,W.arg=Z,N?(this.method="next",this.next=N.finallyLoc,C):this.complete(W)},complete:function(D,Z){if(D.type==="throw")throw D.arg;return D.type==="break"||D.type==="continue"?this.next=D.arg:D.type==="return"?(this.rval=this.arg=D.arg,this.method="return",this.next="end"):D.type==="normal"&&Z&&(this.next=Z),C},finish:function(D){for(var Z=this.tryEntries.length-1;Z>=0;--Z){var U=this.tryEntries[Z];if(U.finallyLoc===D)return this.complete(U.completion,U.afterLoc),X(U),C}},catch:function(D){for(var Z=this.tryEntries.length-1;Z>=0;--Z){var U=this.tryEntries[Z];if(U.tryLoc===D){var Y=U.completion;if(Y.type==="throw"){var N=Y.arg;X(U)}return N}}throw new Error("illegal catch attempt")},delegateYield:function(D,Z,U){return this.delegate={iterator:R(D),resultName:Z,nextLoc:U},this.method==="next"&&(this.arg=void 0),C}},o}d.exports=l,d.exports.__esModule=!0,d.exports.default=d.exports},54306:function(d,f,a){var n=a(5548),l=a(40790),o=a(41442),s=a(15324);function h(p,u){return n(p)||l(p,u)||o(p,u)||s()}d.exports=h,d.exports.__esModule=!0,d.exports.default=d.exports},93525:function(d,f,a){var n=a(30006),l=a(16660),o=a(41442),s=a(95848);function h(p){return n(p)||l(p)||o(p)||s()}d.exports=h,d.exports.__esModule=!0,d.exports.default=d.exports},93299:function(d,f,a){var n=a(37635).default;function l(o,s){if(n(o)!=="object"||o===null)return o;var h=o[Symbol.toPrimitive];if(h!==void 0){var p=h.call(o,s||"default");if(n(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(o)}d.exports=l,d.exports.__esModule=!0,d.exports.default=d.exports},26982:function(d,f,a){var n=a(37635).default,l=a(93299);function o(s){var h=l(s,"string");return n(h)==="symbol"?h:String(h)}d.exports=o,d.exports.__esModule=!0,d.exports.default=d.exports},37635:function(d){function f(a){return d.exports=f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d.exports.__esModule=!0,d.exports.default=d.exports,f(a)}d.exports=f,d.exports.__esModule=!0,d.exports.default=d.exports},41442:function(d,f,a){var n=a(25705);function l(o,s){if(o){if(typeof o=="string")return n(o,s);var h=Object.prototype.toString.call(o).slice(8,-1);if(h==="Object"&&o.constructor&&(h=o.constructor.name),h==="Map"||h==="Set")return Array.from(o);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return n(o,s)}}d.exports=l,d.exports.__esModule=!0,d.exports.default=d.exports},20533:function(d,f,a){"use strict";a.d(f,{Z:function(){return n}});function n(l){if(Array.isArray(l))return l}},24572:function(d,f,a){"use strict";a.d(f,{Z:function(){return l}});var n=a(1536);function l(o,s,h){return s=(0,n.Z)(s),s in o?Object.defineProperty(o,s,{value:h,enumerable:!0,configurable:!0,writable:!0}):o[s]=h,o}},51163:function(d,f,a){"use strict";a.d(f,{Z:function(){return n}});function n(){return n=Object.assign?Object.assign.bind():function(l){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(l[h]=s[h])}return l},n.apply(this,arguments)}},71885:function(d,f,a){"use strict";a.d(f,{Z:function(){return n}});function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
  Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
  You can read more about this here:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,J=function(W){var z1=W.cache,E1=W.serialized,w1=W.isStringTag;(0,H.hC)(z1,E1,w1);var c1=(0,E.L)(function(){return(0,H.My)(z1,E1,w1)});return null},e1=function N(W,z1){var E1=W.__emotion_real===W,w1=E1&&W.__emotion_base||W,c1,G1;z1!==void 0&&(c1=z1.label,G1=z1.target);var B1=F(W,z1,E1),S1=B1||S(w1),C1=!S1("as");return function(){var S0=arguments,L0=E1&&W.__emotion_styles!==void 0?W.__emotion_styles.slice(0):[];if(c1!==void 0&&L0.push("label:"+c1+";"),S0[0]==null||S0[0].raw===void 0)L0.push.apply(L0,S0);else{L0.push(S0[0][0]);for(var Q0=S0.length,D0=1;D0<Q0;D0++)L0.push(S0[D0],S0[0][D0])}var z5=(0,_.w)(function(g5,o0,H0){var x0=C1&&g5.as||w1,U1="",V1=[],s1=g5;if(g5.theme==null){s1={};for(var h1 in g5)s1[h1]=g5[h1];s1.theme=(0,x.useContext)(_.T)}typeof g5.className=="string"?U1=(0,H.fp)(o0.registered,V1,g5.className):g5.className!=null&&(U1=g5.className+" ");var u1=(0,b.O)(L0.concat(V1),o0.registered,s1);U1+=o0.key+"-"+u1.name,G1!==void 0&&(U1+=" "+G1);var F1=C1&&B1===void 0?S(x0):S1,Z1={};for(var u0 in g5)C1&&u0==="as"||F1(u0)&&(Z1[u0]=g5[u0]);return Z1.className=U1,Z1.ref=H0,(0,x.createElement)(x.Fragment,null,(0,x.createElement)(J,{cache:o0,serialized:u1,isStringTag:typeof x0=="string"}),(0,x.createElement)(x0,Z1))});return z5.displayName=c1!==void 0?c1:"Styled("+(typeof w1=="string"?w1:w1.displayName||w1.name||"Component")+")",z5.defaultProps=W.defaultProps,z5.__emotion_real=z5,z5.__emotion_base=w1,z5.__emotion_styles=L0,z5.__emotion_forwardProp=B1,Object.defineProperty(z5,"toString",{value:function(){return"."+G1}}),z5.withComponent=function(g5,o0){return N(g5,(0,g.Z)({},z1,o0,{shouldForwardProp:F(z5,o0,!0)})).apply(void 0,L0)},z5}},t1=e1,X=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Q=t1.bind();X.forEach(function(N){Q[N]=Q(N)});var R=Q,f1,a1=(f1=R.default)!=null?f1:R,D=({baseStyle:N})=>W=>{const L0=W,{theme:z1,css:E1,__css:w1,sx:c1}=L0,G1=rt(L0,["theme","css","__css","sx"]),B1=(0,p.lw)(G1,(Q0,D0)=>(0,n.ZR)(D0)),S1=(0,u.Pu)(N,W),C1=(0,z.V8)({},w1,S1,(0,p.YU)(B1),c1),S0=(0,n.iv)(C1)(W.theme);return E1?[S0,E1]:S0};function Z(N,W){const B1=W!=null?W:{},{baseStyle:z1}=B1,E1=rt(B1,["baseStyle"]);E1.shouldForwardProp||(E1.shouldForwardProp=s);const w1=D({baseStyle:z1}),c1=a1(N,E1)(w1);return x.forwardRef(function(C1,S0){const{colorMode:L0,forced:Q0}=(0,h.If)();return x.createElement(c1,Q1({ref:S0,"data-theme":Q0?L0:void 0},C1))})}function U(){const N=new Map;return new Proxy(Z,{apply(W,z1,E1){return Z(...E1)},get(W,z1){return N.has(z1)||N.set(z1,Z(z1)),N.get(z1)}})}var Y=U()},96169:function(d,f,a){"use strict";a.d(f,{LP:function(){return u},uP:function(){return o}});var n=a(65124),l=a(25243);function o(){const z=(0,l.If)(),x=(0,n.F)();return $0(Q1({},z),{theme:x})}function s(z,x,g){var I,M;if(x==null)return x;const w=C=>{var _,H;return(H=(_=z.__breakpoints)==null?void 0:_.asArray)==null?void 0:H[C]};return(M=(I=w(x))!=null?I:w(g))!=null?M:g}function h(z,x,g){var I,M;if(x==null)return x;const w=C=>{var _,H;return(H=(_=z.__cssMap)==null?void 0:_[C])==null?void 0:H.value};return(M=(I=w(x))!=null?I:w(g))!=null?M:g}function p(z,x,g){const I=useTheme();return u(z,x,g)(I)}function u(z,x,g){const I=Array.isArray(x)?x:[x],M=Array.isArray(g)?g:[g];return w=>{const C=M.filter(Boolean),_=I.map((H,b)=>{var E,L;if(z==="breakpoints")return s(w,H,(E=C[b])!=null?E:H);const P=`${z}.${H}`;return h(w,P,(L=C[b])!=null?L:H)});return Array.isArray(x)?_:_[0]}}},65124:function(d,f,a){"use strict";a.d(f,{F:function(){return o}});var n=a(20449),l=a(93236);function o(){const s=(0,l.useContext)(n.T);if(!s)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return s}},71565:function(d,f,a){"use strict";a.d(f,{G:function(){return l}});var n=a(93236);function l(o){return(0,n.forwardRef)(o)}},82203:function(d,f,a){"use strict";a.d(f,{jC:function(){return x},mq:function(){return z}});var n=a(96169),l=a(75601),o=a(65405),s=a(81138),h=a(93236),p=a(61970);function u(I,M={}){var w;const F=M,{styleConfig:C}=F,_=rt(F,["styleConfig"]),{theme:H,colorMode:b}=(0,n.uP)(),E=I?(0,o.Wf)(H,`components.${I}`):void 0,L=C||E,P=s({theme:H,colorMode:b},(w=L==null?void 0:L.defaultProps)!=null?w:{},(0,o.YU)((0,o.CE)(_,["children"]))),S=(0,h.useRef)({});if(L){const J=(0,l.Ud)(L)(P);p(S.current,J)||(S.current=J)}return S.current}function z(I,M={}){return u(I,M)}function x(I,M={}){return u(I,M)}function g(I,M){var w;const L=M,{baseConfig:C}=L,_=rt(L,["baseConfig"]),{theme:H}=useChakra(),b=(w=H.components)==null?void 0:w[I],E=b?mergeThemeOverride(b,C):C;return u(null,$0(Q1({},_),{styleConfig:E}))}},10534:function(d,f,a){"use strict";a.d(f,{U:function(){return g}});var n=a(79071),l=a(24843),o=a(92376),s=a(89191),h=a(93236),p=a(62086),u=I=>I!=null&&parseInt(I.toString(),10)>0,z={exit:{height:{duration:.2,ease:n.Lj.ease},opacity:{duration:.3,ease:n.Lj.ease}},enter:{height:{duration:.3,ease:n.Lj.ease},opacity:{duration:.4,ease:n.Lj.ease}}},x={exit:({animateOpacity:I,startingHeight:M,transition:w,transitionEnd:C,delay:_})=>{var H;return $0(Q1({},I&&{opacity:u(M)?1:0}),{height:M,transitionEnd:C==null?void 0:C.exit,transition:(H=w==null?void 0:w.exit)!=null?H:n.p$.exit(z.exit,_)})},enter:({animateOpacity:I,endingHeight:M,transition:w,transitionEnd:C,delay:_})=>{var H;return $0(Q1({},I&&{opacity:1}),{height:M,transitionEnd:C==null?void 0:C.enter,transition:(H=w==null?void 0:w.enter)!=null?H:n.p$.enter(z.enter,_)})}},g=(0,h.forwardRef)((I,M)=>{const R=I,{in:w,unmountOnExit:C,animateOpacity:_=!0,startingHeight:H=0,endingHeight:b="auto",style:E,className:L,transition:P,transitionEnd:S}=R,F=rt(R,["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"]),[j,J]=(0,h.useState)(!1);(0,h.useEffect)(()=>{const f1=setTimeout(()=>{J(!0)});return()=>clearTimeout(f1)},[]),(0,l.ZK)({condition:Boolean(H>0&&C),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const e1=parseFloat(H.toString())>0,t1={startingHeight:H,endingHeight:b,animateOpacity:_,transition:j?P:{enter:{duration:0}},transitionEnd:{enter:S==null?void 0:S.enter,exit:C?S==null?void 0:S.exit:$0(Q1({},S==null?void 0:S.exit),{display:e1?"block":"none"})}},X=C?w:!0,Q=w||C?"enter":"exit";return(0,p.jsx)(o.M,{initial:!1,custom:t1,children:X&&(0,p.jsx)(s.E.div,$0(Q1({ref:M},F),{className:(0,l.cx)("chakra-collapse",L),style:Q1({overflow:"hidden",display:"block"},E),custom:t1,variants:x,initial:C?"exit":!1,animate:Q,exit:"exit"}))})});g.displayName="Collapse"},79071:function(d,f,a){"use strict";a.d(f,{Lj:function(){return n},Sh:function(){return s},js:function(){return o},p$:function(){return h}});var n={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},l={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function o(p){var u;switch((u=p==null?void 0:p.direction)!=null?u:"right"){case"right":return l.slideRight;case"left":return l.slideLeft;case"bottom":return l.slideDown;case"top":return l.slideUp;default:return l.slideRight}}var s={enter:{duration:.2,ease:n.easeOut},exit:{duration:.1,ease:n.easeIn}},h={enter:(p,u)=>$0(Q1({},p),{delay:typeof u=="number"?u:u==null?void 0:u.enter}),exit:(p,u)=>$0(Q1({},p),{delay:typeof u=="number"?u:u==null?void 0:u.exit})}},26788:function(d,f,a){"use strict";a.d(f,{v0:function(){return S},Pu:function(){return P}});function n(D){return typeof D=="number"}function l(D){return typeof D!="number"||Number.isNaN(D)||!Number.isFinite(D)}function o(D){return D!=null&&D-parseFloat(D)+1>=0}function s(D){return Array.isArray(D)}function h(D){return s(D)&&D.length===0}function p(D){return typeof D=="function"}function u(D){return typeof D!="undefined"&&D!==void 0}function z(D){return typeof D=="undefined"||D===void 0}function x(D){const Z=typeof D;return D!=null&&(Z==="object"||Z==="function")&&!s(D)}function g(D){return x(D)&&Object.keys(D).length===0}function I(D){return D&&!g(D)}function M(D){return D==null}function w(D){return Object.prototype.toString.call(D)==="[object String]"}function C(D){return/^var\(--.+\)$/.test(D)}function _(D){return s(D)?h(D):x(D)?g(D):D==null||D===""}var H=null,b=null;function E(D){return"current"in D}function L(D){return D&&x(D)&&x(D.target)}function P(D,...Z){return p(D)?D(...Z):D}function S(...D){return function(U){D.some(Y=>(Y==null||Y(U),U==null?void 0:U.defaultPrevented))}}function F(...D){return function(U){D.forEach(Y=>{Y==null||Y(U)})}}var j=(D,...Z)=>Z.reduce((U,Y)=>(...N)=>U(Y(...N)),D);function J(D){let Z;return function(...Y){return D&&(Z=D.apply(this,Y),D=null),Z}}var e1=()=>{},t1=null,X=null,Q=(...D)=>Z=>D.reduce((U,Y)=>Y(U),Z),R=(D,Z)=>Math.abs(D-Z),f1=D=>"x"in D&&"y"in D;function a1(D,Z){if(isNumber(D)&&isNumber(Z))return R(D,Z);if(f1(D)&&f1(Z)){const U=R(D.x,Z.x),Y=R(D.y,Z.y);return Math.sqrt(j3(U,2)+j3(Y,2))}return 0}},65405:function(d,f,a){"use strict";a.d(f,{CE:function(){return l},Wf:function(){return u},YU:function(){return g},lw:function(){return x}});var n=a(81138);function l(C,_){const H={};return Object.keys(C).forEach(b=>{_.includes(b)||(H[b]=C[b])}),H}function o(C,_){const H={};return _.forEach(b=>{b in C&&(H[b]=C[b])}),H}function s(C,_){const H={},b={};return Object.keys(C).forEach(E=>{_.includes(E)?H[E]=C[E]:b[E]=C[E]}),[H,b]}function h(C,_,H,b){const E=typeof _=="string"?_.split("."):[_];for(b=0;b<E.length&&C;b+=1)C=C[E[b]];return C===void 0?H:C}var p=C=>{const _=new WeakMap;return(b,E,L,P)=>{if(typeof b=="undefined")return C(b,E,L);_.has(b)||_.set(b,new Map);const S=_.get(b);if(S.has(E))return S.get(E);const F=C(b,E,L,P);return S.set(E,F),F}},u=p(h);function z(C,_){return u(_,C,C)}function x(C,_){const H={};return Object.keys(C).forEach(b=>{const E=C[b];_(E,b,C)&&(H[b]=E)}),H}var g=C=>x(C,_=>_!=null),I=C=>Object.keys(C),M=C=>C.reduce((_,[H,b])=>(_[H]=b,_),{}),w=(C,_,H)=>{var b,E,L;return(L=(E=(b=C.__cssMap)==null?void 0:b[`${_}.${H}`])==null?void 0:E.varRef)!=null?L:H}},92376:function(d,f,a){"use strict";a.d(f,{M:function(){return L}});var n=a(93236),l=a(41398),o=a(94527),s=a(34873);function h(){const P=(0,n.useRef)(!1);return(0,s.L)(()=>(P.current=!0,()=>{P.current=!1}),[]),P}function p(){const P=h(),[S,F]=(0,n.useState)(0),j=(0,n.useCallback)(()=>{P.current&&F(S+1)},[S]);return[(0,n.useCallback)(()=>o.Z_.postRender(j),[j]),S]}var u=a(49722),z=a(38858);class x extends n.Component{getSnapshotBeforeUpdate(S){const F=this.props.childRef.current;if(F&&S.isPresent&&!this.props.isPresent){const j=this.props.sizeRef.current;j.height=F.offsetHeight||0,j.width=F.offsetWidth||0,j.top=F.offsetTop,j.left=F.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function g({children:P,isPresent:S}){const F=(0,n.useId)(),j=(0,n.useRef)(null),J=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{const{width:e1,height:t1,top:X,left:Q}=J.current;if(S||!j.current||!e1||!t1)return;j.current.dataset.motionPopId=F;const R=document.createElement("style");return document.head.appendChild(R),R.sheet&&R.sheet.insertRule(`
            [data-motion-pop-id="${F}"] {
              position: absolute !important;
              width: ${e1}px !important;
              height: ${t1}px !important;
              top: ${X}px !important;
              left: ${Q}px !important;
            }
  (`+I+")");M.code="CSS_CHUNK_LOAD_FAILED",M.type=g,M.request=I,u.parentNode.removeChild(u),p(M)}};return u.onerror=u.onload=z,u.href=o,s?s.parentNode.insertBefore(u,s.nextSibling):document.head.appendChild(u),u},f=function(l,o){for(var s=document.getElementsByTagName("link"),h=0;h<s.length;h++){var p=s[h],u=p.getAttribute("data-href")||p.getAttribute("href");if(p.rel==="stylesheet"&&(u===l||u===o))return p}for(var z=document.getElementsByTagName("style"),h=0;h<z.length;h++){var p=z[h],u=p.getAttribute("data-href");if(u===l||u===o)return p}},a=function(l){return new Promise(function(o,s){var h=__webpack_require__.miniCssF(l),p=__webpack_require__.p+h;if(f(h,p))return o();d(l,p,null,o,s)})},n={4620:0};__webpack_require__.f.miniCss=function(l,o){var s={890:1,944:1,973:1,1046:1,1605:1,1763:1,2092:1,2310:1,2375:1,2504:1,2553:1,2566:1,3010:1,3039:1,3246:1,3334:1,3555:1,3810:1,4946:1,5111:1,5245:1,5419:1,5931:1,6074:1,6150:1,6198:1,6420:1,6603:1,6610:1,6880:1,6935:1,6972:1,7037:1,7101:1,7213:1,7394:1,7604:1,8187:1,8302:1,8629:1,8863:1,9238:1,9329:1,9455:1,9586:1,9826:1};n[l]?o.push(n[l]):n[l]!==0&&s[l]&&o.push(n[l]=a(l).then(function(){n[l]=0},function(h){throw delete n[l],h}))}}}(),function(){var d={4620:0};__webpack_require__.f.j=function(n,l){var o=__webpack_require__.o(d,n)?d[n]:void 0;if(o!==0)if(o)l.push(o[2]);else if(n!=6610){var s=new Promise(function(z,x){o=d[n]=[z,x]});l.push(o[2]=s);var h=__webpack_require__.p+__webpack_require__.u(n),p=new Error,u=function(z){if(__webpack_require__.o(d,n)&&(o=d[n],o!==0&&(d[n]=void 0),o)){var x=z&&(z.type==="load"?"missing":z.type),g=z&&z.target&&z.target.src;p.message="Loading chunk "+n+` failed.
  (`+x+": "+g+")",p.name="ChunkLoadError",p.type=x,p.request=g,o[1](p)}};__webpack_require__.l(h,u,"chunk-"+n,n)}else d[n]=0};var f=function(n,l){var o=l[0],s=l[1],h=l[2],p,u,z=0;if(o.some(function(g){return d[g]!==0})){for(p in s)__webpack_require__.o(s,p)&&(__webpack_require__.m[p]=s[p]);if(h)var x=h(__webpack_require__)}for(n&&n(l);z<o.length;z++)u=o[z],__webpack_require__.o(d,u)&&d[u]&&d[u][0](),d[u]=0},a=self.webpackChunkcins_docs=self.webpackChunkcins_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}(),function(){__webpack_require__.nc=void 0}();var __webpack_exports__={};(function(){"use strict";var d={};__webpack_require__.r(d),__webpack_require__.d(d,{innerProvider:function(){return Fe}});var f={};__webpack_require__.r(f),__webpack_require__.d(f,{patchRoutes:function(){return ur}});var a={};__webpack_require__.r(a),__webpack_require__.d(a,{i18nProvider:function(){return ze}});var n=__webpack_require__(25359),l=__webpack_require__.n(n),o=__webpack_require__(57213),s=__webpack_require__.n(o),h=__webpack_require__(49811),p=__webpack_require__.n(h),u=__webpack_require__(10711),z=__webpack_require__(94380),x=__webpack_require__(72978),g=__webpack_require__(18759),I=__webpack_require__(2757),M=__webpack_require__(93324),w=__webpack_require__(87477),C=__webpack_require__(97220),_=__webpack_require__(10375),H=__webpack_require__(17934),b=__webpack_require__(59055),E=__webpack_require__(9333),L=__webpack_require__(39117),P=__webpack_require__(92648),S=__webpack_require__(99971),F=__webpack_require__(72287),j=__webpack_require__(42074),J=__webpack_require__(64974),e1=__webpack_require__(50481),t1=__webpack_require__(60843),X=__webpack_require__(56260),Q=__webpack_require__(60730),R=__webpack_require__(27224),f1=__webpack_require__(30542),a1=__webpack_require__(71242),D=__webpack_require__(5270),Z=__webpack_require__(66386),U=__webpack_require__(3368),Y=__webpack_require__(7098),N=__webpack_require__(32736),W=__webpack_require__(55350),z1=__webpack_require__(47887),E1=__webpack_require__(19661),w1=__webpack_require__(14658),c1=__webpack_require__(89387),G1=__webpack_require__(95458),B1=__webpack_require__(18133),S1=__webpack_require__(70533),C1=__webpack_require__(92617),S0=__webpack_require__(5408),L0=__webpack_require__(30750),Q0=__webpack_require__(17638),D0=__webpack_require__(8758),z5=__webpack_require__(98805),g5=__webpack_require__(92602),o0=__webpack_require__(49111),H0=__webpack_require__(25131),x0=__webpack_require__(26698),U1=__webpack_require__(89590),V1=__webpack_require__(28987),s1=__webpack_require__(65975),h1=__webpack_require__(46618),u1=__webpack_require__(2155),F1=__webpack_require__(34737),Z1=__webpack_require__(42596),u0=__webpack_require__(40977),l0=__webpack_require__(82921),v0=__webpack_require__(79529),G0=__webpack_require__(56722),X0=__webpack_require__(79608),F0=__webpack_require__(201),g1=__webpack_require__(79592),y=__webpack_require__(65690),K=__webpack_require__(3776),n1=__webpack_require__(83432),y1=__webpack_require__(48025),L1=__webpack_require__(96451),J1=__webpack_require__(79593),D1=__webpack_require__(75272),i0=__webpack_require__(82570),f0=__webpack_require__(50952),h0=__webpack_require__(64317),k1=__webpack_require__(13685),j1=__webpack_require__(53494),$1=__webpack_require__(83489),w0=__webpack_require__(70704),e0=__webpack_require__(64086),t0=__webpack_require__(17046),R1=__webpack_require__(98003),K1=__webpack_require__(29730),_0=__webpack_require__(71029),P0=__webpack_require__(538),a5=__webpack_require__(13613),m1=__webpack_require__(20127),T1=__webpack_require__(30003),V0=__webpack_require__(29643),A0=__webpack_require__(7769),R0=__webpack_require__(10805),J0=__webpack_require__(56672),L5=__webpack_require__(91618),w5=__webpack_require__(78043),k5=__webpack_require__(29737),j5=__webpack_require__(46765),U5=__webpack_require__(61323),q5=__webpack_require__(6910),$5=__webpack_require__(68360),At=__webpack_require__(88865),ft=__webpack_require__(58598),tt=__webpack_require__(18066),pt=__webpack_require__(45852),m5=__webpack_require__(32483),V5=__webpack_require__(74796),yt=__webpack_require__(61003),Tt=__webpack_require__(81600),Dt=__webpack_require__(37355),Lt=__webpack_require__(17468),dt=__webpack_require__(83036),ta=__webpack_require__(64516),P2=__webpack_require__(97121),r2=__webpack_require__(3749),v2=__webpack_require__(32585),Nt=__webpack_require__(80676),ca=__webpack_require__(2939),l1=__webpack_require__(43645),b1=__webpack_require__(52180),y0=__webpack_require__(15496),E0=__webpack_require__(26169),N0=__webpack_require__(20051),e5=__webpack_require__(92056),s5=__webpack_require__(90351),n5=__webpack_require__(21764),B5=__webpack_require__(60765),b5=__webpack_require__(3723),st=__webpack_require__(39332),O5=__webpack_require__(71669),P5=__webpack_require__(6772),ut=__webpack_require__(5135),V=__webpack_require__(52074),G=__webpack_require__(49395),O=__webpack_require__(35939),r1=__webpack_require__(26910),d1=__webpack_require__(48534),_1=__webpack_require__(37821),Y1=__webpack_require__(90435),N1=__webpack_require__(31998),q1=__webpack_require__(67786),M0=__webpack_require__(67894),z0=__webpack_require__(11573),j0=__webpack_require__(17250),U0=__webpack_require__(53587),W0=__webpack_require__(45816),r5=__webpack_require__(39268),q0=__webpack_require__(58625),i5=__webpack_require__(86562),M5=__webpack_require__(55631),nt=__webpack_require__(55916),R5=__webpack_require__(94277),G5=__webpack_require__(46537),D5=__webpack_require__(36585),Y5=__webpack_require__(50376),at=__webpack_require__(17994),A5=__webpack_require__(13470),v1=__webpack_require__(35841),A1=__webpack_require__(15284),W1=__webpack_require__(69308),K0=__webpack_require__(87828),y5=__webpack_require__(4832),X5=__webpack_require__(57893),lt=__webpack_require__(20310),x5=__webpack_require__(52417),S5=__webpack_require__(66502),$t=__webpack_require__(84726),St=__webpack_require__(92787),I2=__webpack_require__(59213),Ht=__webpack_require__(82035),L2=__webpack_require__(54809),D2=__webpack_require__(34739),Ft=__webpack_require__(73071),Mt=__webpack_require__(97599),sa=__webpack_require__(15267),aa=__webpack_require__(28291),wa=__webpack_require__(50634),ua=__webpack_require__(43059),he=__webpack_require__(80287),ha=__webpack_require__(54957),de=__webpack_require__(54889),Ce=__webpack_require__(58907),da=__webpack_require__(54722),qe=__webpack_require__(30861),Ge=__webpack_require__(78674),ve=__webpack_require__(94523),we=__webpack_require__(69055),t4=__webpack_require__(69121),ea=__webpack_require__(2220),Fa=__webpack_require__(58075),Ve=__webpack_require__(25271),Te=__webpack_require__(90250),Va=__webpack_require__(24572),f2=__webpack_require__(75782),ht=__webpack_require__(91600),d0=__webpack_require__(93236),B0=__webpack_require__(92628),H5=__webpack_require__(44492),h5=__webpack_require__(60581),ot=__webpack_require__(68901),T5=__webpack_require__(51163),it=__webpack_require__(73643),gt=["redirect"];function N5(X1){var I0=X1.routesById,C0=X1.parentId,g0=X1.routeComponents;return Object.keys(I0).filter(function(T0){return I0[T0].parentId===C0}).map(function(T0){var k0=Ct((0,f2.Z)({route:I0[T0],routeComponent:g0[T0],loadingComponent:X1.loadingComponent,reactRouter5Compat:X1.reactRouter5Compat},X1.reactRouter5Compat&&{hasChildren:Object.keys(I0).filter(function(d5){return I0[d5].parentId===T0}).length>0})),o5=N5({routesById:I0,routeComponents:g0,parentId:k0.id,loadingComponent:X1.loadingComponent,reactRouter5Compat:X1.reactRouter5Compat});return o5.length>0&&(k0.children=o5,k0.routes=o5),k0})}function n2(X1){var I0=(0,H5.UO)(),C0=(0,f2.Z)((0,f2.Z)({},X1),{},{to:(0,H5.Gn)(X1.to,I0)});return d0.createElement(H5.Fg,(0,T5.Z)({replace:!0},C0))}function Ct(X1){var I0=X1.route,C0=I0.redirect,g0=(0,ot.Z)(I0,gt),T0=X1.reactRouter5Compat?kt:Xt;return(0,f2.Z)({element:C0?d0.createElement(n2,{to:C0}):d0.createElement(it.X.Provider,{value:{route:X1.route}},d0.createElement(T0,{loader:d0.memo(X1.routeComponent),loadingComponent:X1.loadingComponent||Bt,hasChildren:X1.hasChildren}))},g0)}function Bt(){return d0.createElement("div",null)}function kt(X1){var I0=(0,it.Q)(),C0=I0.route,g0=(0,h5.Ov)(),T0=g0.history,k0=g0.clientRoutes,o5=(0,H5.UO)(),d5={params:o5,isExact:!0,path:C0.path,url:T0.location.pathname},J5=X1.loader;return d0.createElement(d0.Suspense,{fallback:d0.createElement(X1.loadingComponent,null)},d0.createElement(J5,{location:T0.location,match:d5,history:T0,params:o5,route:C0,routes:k0},X1.hasChildren&&d0.createElement(H5.j3,null)))}function Xt(X1){var I0=X1.loader;return d0.createElement(d0.Suspense,{fallback:d0.createElement(X1.loadingComponent,null)},d0.createElement(I0,null))}var i2=null;function M2(){return i2}function Aa(X1){var I0=X1.history,C0=d0.useState({action:I0.action,location:I0.location}),g0=(0,ht.Z)(C0,2),T0=g0[0],k0=g0[1];return(0,d0.useLayoutEffect)(function(){return I0.listen(k0)},[I0]),(0,d0.useLayoutEffect)(function(){function o5(d5){X1.pluginManager.applyPlugins({key:"onRouteChange",type:"event",args:{routes:X1.routes,clientRoutes:X1.clientRoutes,location:d5.location,action:d5.action,basename:X1.basename}})}I0.listen(o5),o5({location:T0.location,action:T0.action})},[I0,X1.routes,X1.clientRoutes]),d0.createElement(H5.F0,{navigator:I0,location:T0.location,basename:X1.basename},X1.children)}function p2(){var X1=(0,h5.Ov)(),I0=X1.clientRoutes;return(0,H5.V$)(I0)}var va=["innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","rootContainer"],a4=function(I0,C0){var g0=I0.basename||"/",T0=N5({routesById:I0.routes,routeComponents:I0.routeComponents,loadingComponent:I0.loadingComponent,reactRouter5Compat:I0.reactRouter5Compat});I0.pluginManager.applyPlugins({key:"patchClientRoutes",type:"event",args:{routes:T0}});for(var k0=d0.createElement(Aa,{basename:g0,pluginManager:I0.pluginManager,routes:I0.routes,clientRoutes:T0,history:I0.history},C0),o5=0,d5=va;o5<d5.length;o5++){var J5=d5[o5];k0=I0.pluginManager.applyPlugins({type:"modify",key:J5,initialValue:k0,args:{routes:I0.routes,history:I0.history,plugin:I0.pluginManager}})}var Pt=function(){var j2=(0,d0.useState)({}),T2=(0,ht.Z)(j2,2),F2=T2[0],ba=T2[1],m2=(0,d0.useState)(window.__UMI_LOADER_DATA__||{}),y2=(0,ht.Z)(m2,2),c2=y2[0],oa=y2[1],S2=(0,d0.useCallback)(function(Et,Zt){var la,C2=(((la=(0,H5.fp)(T0,Et,g0))===null||la===void 0?void 0:la.map(function(Yt){return Yt.route.id}))||[]).filter(Boolean);C2.forEach(function(Yt){var Oa,qa,w2=window.__umi_manifest__;if(w2){var fa=Yt.replace(/[\/\-]/g,"_"),U4="preload-".concat(fa,".js");if(!document.getElementById(U4)){var Mr=Object.keys(w2).filter(function(U2){return U2.startsWith(fa+".")});Mr.forEach(function(U2){if(!/\.(js|css)$/.test(U2))throw Error("preload not support ".concat(U2," file"));var V2=w2[U2],pa=document.createElement("link");pa.rel="preload",pa.as="style",U2.endsWith(".js")&&(pa.as="script",pa.id=U4),I0.runtimePublicPath&&(V2=V2.replace(new RegExp("^".concat(I0.publicPath)),window.publicPath)),pa.href=V2,document.head.appendChild(pa)})}}!Zt&&(Oa=I0.routes[Yt])!==null&&Oa!==void 0&&Oa.hasServerLoader&&fetch("/__serverLoader?route="+Yt).then(function(U2){return U2.json()}).then(function(U2){d0.startTransition(function(){oa(function(V2){return(0,f2.Z)((0,f2.Z)({},V2),{},(0,Va.Z)({},Yt,U2))})})}).catch(console.error);var Be=(qa=I0.routes[Yt])===null||qa===void 0?void 0:qa.clientLoader;Be&&!F2[Yt]&&Be().then(function(U2){ba(function(V2){return(0,f2.Z)((0,f2.Z)({},V2),{},(0,Va.Z)({},Yt,U2))})})})},[F2]);return(0,d0.useEffect)(function(){return S2(window.location.pathname,!0),I0.history.listen(function(Et){S2(Et.location.pathname)})},[]),(0,d0.useLayoutEffect)(function(){typeof I0.callback=="function"&&I0.callback()},[]),d0.createElement(h5.Il.Provider,{value:{routes:I0.routes,routeComponents:I0.routeComponents,clientRoutes:T0,pluginManager:I0.pluginManager,rootElement:I0.rootElement,basename:g0,clientLoaderData:F2,serverLoaderData:c2,preloadRoute:S2,history:I0.history}},k0)};return Pt};function ra(X1){var I0=X1.rootElement||document.getElementById("root"),C0=a4(X1,d0.createElement(p2,null));if(X1.components)return C0;if(X1.hydrate){B0.hydrateRoot(I0,d0.createElement(C0,null));return}if(B0.createRoot){i2=B0.createRoot(I0),i2.render(d0.createElement(C0,null));return}B0.render(d0.createElement(C0,null),I0)}var Ka=__webpack_require__(54306),B4=__webpack_require__.n(Ka),Dn={};function b4(){return Rt.apply(this,arguments)}function Rt(){return Rt=p()(l()().mark(function X1(){var I0;return l()().wrap(function(g0){for(;;)switch(g0.prev=g0.next){case 0:return I0={404:{id:"404",path:"*",parentId:"DocLayout"},GlobalLayout:{id:"GlobalLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"GlobalLayout",isLayout:!0},DemoLayout:{id:"DemoLayout",path:"/",parentId:"GlobalLayout",isLayout:!0},"docs/advance/miniProgram/index.en-US":{path:"en-US/advance/miniprogram",id:"docs/advance/miniProgram/index.en-US",parentId:"DocLayout"},"docs/column/introduction/index.en-US":{path:"en-US/column/introduction",id:"docs/column/introduction/index.en-US",parentId:"DocLayout"},"docs/guide/introduction/index.en-US":{path:"en-US/guide/introduction",id:"docs/guide/introduction/index.en-US",parentId:"DocLayout"},"docs/advance/component/index.en-US":{path:"en-US/advance/component",id:"docs/advance/component/index.en-US",parentId:"DocLayout"},"docs/column/interview/index.en-US":{path:"en-US/column/interview",id:"docs/column/interview/index.en-US",parentId:"DocLayout"},"docs/column/questions/index.en-US":{path:"en-US/column/questions",id:"docs/column/questions/index.en-US",parentId:"DocLayout"},"docs/usually/datetime/index.en-US":{path:"en-US/usually/datetime",id:"docs/usually/datetime/index.en-US",parentId:"DocLayout"},"docs/usually/location/index.en-US":{path:"en-US/usually/location",id:"docs/usually/location/index.en-US",parentId:"DocLayout"},"docs/guide/changelog/index.en-US":{path:"en-US/guide/changelog",id:"docs/guide/changelog/index.en-US",parentId:"DocLayout"},"docs/usually/common/index.en-US":{path:"en-US/usually/common",id:"docs/usually/common/index.en-US",parentId:"DocLayout"},"docs/advance/miniProgram/index":{path:"advance/miniprogram",id:"docs/advance/miniProgram/index",parentId:"DocLayout"},"docs/column/introduction/index":{path:"column/introduction",id:"docs/column/introduction/index",parentId:"DocLayout"},"docs/usually/array/index.en-US":{path:"en-US/usually/array",id:"docs/usually/array/index.en-US",parentId:"DocLayout"},"docs/usually/cache/index.en-US":{path:"en-US/usually/cache",id:"docs/usually/cache/index.en-US",parentId:"DocLayout"},"docs/usually/regex/index.en-US":{path:"en-US/usually/regex",id:"docs/usually/regex/index.en-US",parentId:"DocLayout"},"docs/advance/tips/index.en-US":{path:"en-US/advance/tips",id:"docs/advance/tips/index.en-US",parentId:"DocLayout"},"docs/column/react/index.en-US":{path:"en-US/column/react",id:"docs/column/react/index.en-US",parentId:"DocLayout"},"docs/column/share/index.en-US":{path:"en-US/column/share",id:"docs/column/share/index.en-US",parentId:"DocLayout"},"docs/guide/introduction/index":{path:"guide/introduction",id:"docs/guide/introduction/index",parentId:"DocLayout"},"docs/usually/file/index.en-US":{path:"en-US/usually/file",id:"docs/usually/file/index.en-US",parentId:"DocLayout"},"docs/usually/http/index.en-US":{path:"en-US/usually/http",id:"docs/usually/http/index.en-US",parentId:"DocLayout"},"docs/advance/component/index":{path:"advance/component",id:"docs/advance/component/index",parentId:"DocLayout"},"docs/advance/css/index.en-US":{path:"en-US/advance/css",id:"docs/advance/css/index.en-US",parentId:"DocLayout"},"docs/column/interview/index":{path:"column/interview",id:"docs/column/interview/index",parentId:"DocLayout"},"docs/column/questions/index":{path:"column/questions",id:"docs/column/questions/index",parentId:"DocLayout"},"docs/column/seo/index.en-US":{path:"en-US/column/seo",id:"docs/column/seo/index.en-US",parentId:"DocLayout"},"docs/usually/datetime/index":{path:"usually/datetime",id:"docs/usually/datetime/index",parentId:"DocLayout"},"docs/usually/location/index":{path:"usually/location",id:"docs/usually/location/index",parentId:"DocLayout"},"docs/column/js/index.en-US":{path:"en-US/column/js",id:"docs/column/js/index.en-US",parentId:"DocLayout"},"docs/guide/changelog/index":{path:"guide/changelog",id:"docs/guide/changelog/index",parentId:"DocLayout"},"docs/usually/common/index":{path:"usually/common",id:"docs/usually/common/index",parentId:"DocLayout"},"docs/usually/array/index":{path:"usually/array",id:"docs/usually/array/index",parentId:"DocLayout"},"docs/usually/cache/index":{path:"usually/cache",id:"docs/usually/cache/index",parentId:"DocLayout"},"docs/usually/regex/index":{path:"usually/regex",id:"docs/usually/regex/index",parentId:"DocLayout"},"docs/advance/tips/index":{path:"advance/tips",id:"docs/advance/tips/index",parentId:"DocLayout"},"docs/column/react/index":{path:"column/react",id:"docs/column/react/index",parentId:"DocLayout"},"docs/column/share/index":{path:"column/share",id:"docs/column/share/index",parentId:"DocLayout"},"docs/usually/file/index":{path:"usually/file",id:"docs/usually/file/index",parentId:"DocLayout"},"docs/usually/http/index":{path:"usually/http",id:"docs/usually/http/index",parentId:"DocLayout"},"docs/advance/css/index":{path:"advance/css",id:"docs/advance/css/index",parentId:"DocLayout"},"docs/column/seo/index":{path:"column/seo",id:"docs/column/seo/index",parentId:"DocLayout"},"docs/column/js/index":{path:"column/js",id:"docs/column/js/index",parentId:"DocLayout"},"docs/index.en-US":{path:"en-US/",id:"docs/index.en-US",parentId:"DocLayout"},"docs/index":{path:"",id:"docs/index",parentId:"DocLayout"},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"DemoLayout"}},g0.abrupt("return",{routes:I0,routeComponents:{404:d0.lazy(function(){return __webpack_require__.e(8159).then(__webpack_require__.bind(__webpack_require__,49746))}),GlobalLayout:d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(7622)]).then(__webpack_require__.bind(__webpack_require__,12016))}),"dumi-context-layout":d0.lazy(function(){return __webpack_require__.e(1923).then(__webpack_require__.bind(__webpack_require__,33095))}),DocLayout:d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6610),__webpack_require__.e(5085)]).then(__webpack_require__.bind(__webpack_require__,45766))}),DemoLayout:d0.lazy(function(){return __webpack_require__.e(4789).then(__webpack_require__.bind(__webpack_require__,60301))}),"docs/advance/miniProgram/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(3246)]).then(__webpack_require__.bind(__webpack_require__,57468))}),"docs/column/introduction/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(9826)]).then(__webpack_require__.bind(__webpack_require__,76173))}),"docs/guide/introduction/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(2553)]).then(__webpack_require__.bind(__webpack_require__,79285))}),"docs/advance/component/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(1763)]).then(__webpack_require__.bind(__webpack_require__,65557))}),"docs/column/interview/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(8863)]).then(__webpack_require__.bind(__webpack_require__,85719))}),"docs/column/questions/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(973)]).then(__webpack_require__.bind(__webpack_require__,29257))}),"docs/usually/datetime/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(7037)]).then(__webpack_require__.bind(__webpack_require__,26059))}),"docs/usually/location/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(3810)]).then(__webpack_require__.bind(__webpack_require__,28826))}),"docs/guide/changelog/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6880)]).then(__webpack_require__.bind(__webpack_require__,80882))}),"docs/usually/common/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(3010)]).then(__webpack_require__.bind(__webpack_require__,63085))}),"docs/advance/miniProgram/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(2504)]).then(__webpack_require__.bind(__webpack_require__,95834))}),"docs/column/introduction/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6972)]).then(__webpack_require__.bind(__webpack_require__,49584))}),"docs/usually/array/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(2310)]).then(__webpack_require__.bind(__webpack_require__,95428))}),"docs/usually/cache/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(2092)]).then(__webpack_require__.bind(__webpack_require__,39666))}),"docs/usually/regex/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(9586)]).then(__webpack_require__.bind(__webpack_require__,42364))}),"docs/advance/tips/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(5419)]).then(__webpack_require__.bind(__webpack_require__,55744))}),"docs/column/react/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(4946)]).then(__webpack_require__.bind(__webpack_require__,23573))}),"docs/column/share/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(5245)]).then(__webpack_require__.bind(__webpack_require__,15980))}),"docs/guide/introduction/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(9455)]).then(__webpack_require__.bind(__webpack_require__,15155))}),"docs/usually/file/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6198)]).then(__webpack_require__.bind(__webpack_require__,81327))}),"docs/usually/http/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(1046)]).then(__webpack_require__.bind(__webpack_require__,48564))}),"docs/advance/component/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(8302)]).then(__webpack_require__.bind(__webpack_require__,5664))}),"docs/advance/css/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6150)]).then(__webpack_require__.bind(__webpack_require__,43587))}),"docs/column/interview/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6603)]).then(__webpack_require__.bind(__webpack_require__,30828))}),"docs/column/questions/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(2375)]).then(__webpack_require__.bind(__webpack_require__,90120))}),"docs/column/seo/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(2566)]).then(__webpack_require__.bind(__webpack_require__,37211))}),"docs/usually/datetime/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(890)]).then(__webpack_require__.bind(__webpack_require__,72044))}),"docs/usually/location/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(7101)]).then(__webpack_require__.bind(__webpack_require__,49882))}),"docs/column/js/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(7604)]).then(__webpack_require__.bind(__webpack_require__,10946))}),"docs/guide/changelog/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(944)]).then(__webpack_require__.bind(__webpack_require__,78272))}),"docs/usually/common/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(9329)]).then(__webpack_require__.bind(__webpack_require__,34958))}),"docs/usually/array/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6074)]).then(__webpack_require__.bind(__webpack_require__,40760))}),"docs/usually/cache/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(5111)]).then(__webpack_require__.bind(__webpack_require__,3434))}),"docs/usually/regex/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(9238)]).then(__webpack_require__.bind(__webpack_require__,75063))}),"docs/advance/tips/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(7394)]).then(__webpack_require__.bind(__webpack_require__,69655))}),"docs/column/react/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(5931)]).then(__webpack_require__.bind(__webpack_require__,62595))}),"docs/column/share/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(8629)]).then(__webpack_require__.bind(__webpack_require__,94082))}),"docs/usually/file/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(3555)]).then(__webpack_require__.bind(__webpack_require__,80058))}),"docs/usually/http/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6420)]).then(__webpack_require__.bind(__webpack_require__,47792))}),"docs/advance/css/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(1605)]).then(__webpack_require__.bind(__webpack_require__,84344))}),"docs/column/seo/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(7213)]).then(__webpack_require__.bind(__webpack_require__,51991))}),"docs/column/js/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(8187)]).then(__webpack_require__.bind(__webpack_require__,7434))}),"docs/index.en-US":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(3039)]).then(__webpack_require__.bind(__webpack_require__,18803))}),"docs/index":d0.lazy(function(){return Promise.all([__webpack_require__.e(4253),__webpack_require__.e(6582),__webpack_require__.e(6935)]).then(__webpack_require__.bind(__webpack_require__,98535))}),"demo-render":d0.lazy(function(){return __webpack_require__.e(3334).then(__webpack_require__.bind(__webpack_require__,15108))})}});case 2:case"end":return g0.stop()}},X1)})),Rt.apply(this,arguments)}var e4=__webpack_require__(87593),Fe=function(I0){return d0.createElement(e4.B6,{context:{}},I0)},Ha=__webpack_require__(42359),Yr=__webpack_require__(67251),r4=__webpack_require__.n(Yr),ur=function(I0){var C0=I0.routes;Object.values(C0).forEach(function(g0){if(Ha.C3[g0.id]){var T0;g0.meta=r4()(g0.meta,Ha.C3[g0.id]),g0.meta.tabs=(T0=g0.meta.tabs)===null||T0===void 0?void 0:T0.map(function(k0){return s()(s()({},Ha.eA[k0]),{},{meta:Ha.C3[k0]})})}})},Ze=__webpack_require__(67722),g2=__webpack_require__(73324),mt=__webpack_require__(96583),L4=__webpack_require__(81213),fe=__webpack_require__(15318),Oe=__webpack_require__(34688),hr=__webpack_require__(48551),_t=__webpack_require__(94879),Xr=__webpack_require__(72988);function ke(X1,I0){return Object.keys(X1).reduce(function(C0,g0){return C0[g0]=(0,mt.pi)({timeZone:I0},X1[g0]),C0},{})}function n4(X1,I0){var C0=Object.keys((0,mt.pi)((0,mt.pi)({},X1),I0));return C0.reduce(function(g0,T0){return g0[T0]=(0,mt.pi)((0,mt.pi)({},X1[T0]||{}),I0[T0]||{}),g0},{})}function N2(X1,I0){if(!I0)return X1;var C0=hr.C.formats;return(0,mt.pi)((0,mt.pi)((0,mt.pi)({},C0),X1),{date:n4(ke(C0.date,I0),ke(X1.date||{},I0)),time:n4(ke(C0.time,I0),ke(X1.time||{},I0))})}var pe=function(X1,I0,C0,g0,T0){var k0=X1.locale,o5=X1.formats,d5=X1.messages,J5=X1.defaultLocale,Pt=X1.defaultFormats,vt=X1.fallbackOnEmptyString,j2=X1.onError,T2=X1.timeZone,F2=X1.defaultRichTextElements;C0===void 0&&(C0={id:""});var ba=C0.id,m2=C0.defaultMessage;(0,Oe.kG)(!!ba,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var y2=String(ba),c2=d5&&Object.prototype.hasOwnProperty.call(d5,y2)&&d5[y2];if(Array.isArray(c2)&&c2.length===1&&c2[0].type===Xr.wD.literal)return c2[0].value;if(!g0&&c2&&typeof c2=="string"&&!F2)return c2.replace(/'\{(.*?)\}'/gi,"{$1}");if(g0=(0,mt.pi)((0,mt.pi)({},F2),g0||{}),o5=N2(o5,T2),Pt=N2(Pt,T2),!c2){if(vt===!1&&c2==="")return c2;if((!m2||k0&&k0.toLowerCase()!==J5.toLowerCase())&&j2(new _t.$6(C0,k0)),m2)try{var oa=I0.getMessageFormat(m2,J5,Pt,T0);return oa.format(g0)}catch(S2){return j2(new _t.X9('Error formatting default message for: "'.concat(y2,'", rendering default message verbatim'),k0,C0,S2)),typeof m2=="string"?m2:y2}return y2}try{var oa=I0.getMessageFormat(c2,k0,o5,(0,mt.pi)({formatters:I0},T0||{}));return oa.format(g0)}catch(S2){j2(new _t.X9('Error formatting message: "'.concat(y2,'", using ').concat(m2?"default message":"id"," as fallback."),k0,C0,S2))}if(m2)try{var oa=I0.getMessageFormat(m2,J5,Pt,T0);return oa.format(g0)}catch(S2){j2(new _t.X9('Error formatting the default message for: "'.concat(y2,'", rendering message verbatim'),k0,C0,S2))}return typeof c2=="string"?c2:typeof m2=="string"?m2:y2},dr=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function S4(X1,I0,C0){var g0=X1.locale,T0=X1.formats,k0=X1.onError;C0===void 0&&(C0={});var o5=C0.format,d5=o5&&(0,g2.TB)(T0,"number",o5,k0)||{},J5=(0,g2.L6)(C0,dr,d5);return I0(g0,J5)}function _4(X1,I0,C0,g0){g0===void 0&&(g0={});try{return S4(X1,I0,g0).format(C0)}catch(T0){X1.onError(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting number.",T0))}return String(C0)}function E4(X1,I0,C0,g0){g0===void 0&&(g0={});try{return S4(X1,I0,g0).formatToParts(C0)}catch(T0){X1.onError(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting number.",T0))}return[]}var na=__webpack_require__(8057),Qr=["numeric","style"];function vr(X1,I0,C0){var g0=X1.locale,T0=X1.formats,k0=X1.onError;C0===void 0&&(C0={});var o5=C0.format,d5=!!o5&&(0,g2.TB)(T0,"relative",o5,k0)||{},J5=(0,g2.L6)(C0,Qr,d5);return I0(g0,J5)}function Ya(X1,I0,C0,g0,T0){T0===void 0&&(T0={}),g0||(g0="second");var k0=Intl.RelativeTimeFormat;k0||X1.onError(new na.u_(`Intl.RelativeTimeFormat is not available in this environment.
  Try polyfilling it using "@formatjs/intl-relativetimeformat"
  `,na.jK.MISSING_INTL_API));try{return vr(X1,I0,T0).format(C0,g0)}catch(o5){X1.onError(new _t.Qe("Error formatting relative time.",X1.locale,o5))}return String(C0)}var o4=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ge(X1,I0,C0,g0){var T0=X1.locale,k0=X1.formats,o5=X1.onError,d5=X1.timeZone;g0===void 0&&(g0={});var J5=g0.format,Pt=(0,mt.pi)((0,mt.pi)({},d5&&{timeZone:d5}),J5&&(0,g2.TB)(k0,I0,J5,o5)),vt=(0,g2.L6)(g0,o4,Pt);return I0==="time"&&!vt.hour&&!vt.minute&&!vt.second&&!vt.timeStyle&&!vt.dateStyle&&(vt=(0,mt.pi)((0,mt.pi)({},vt),{hour:"numeric",minute:"numeric"})),C0(T0,vt)}function l4(X1,I0){for(var C0=[],g0=2;g0<arguments.length;g0++)C0[g0-2]=arguments[g0];var T0=C0[0],k0=C0[1],o5=k0===void 0?{}:k0,d5=typeof T0=="string"?new Date(T0||0):T0;try{return ge(X1,"date",I0,o5).format(d5)}catch(J5){X1.onError(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting date.",J5))}return String(d5)}function G4(X1,I0){for(var C0=[],g0=2;g0<arguments.length;g0++)C0[g0-2]=arguments[g0];var T0=C0[0],k0=C0[1],o5=k0===void 0?{}:k0,d5=typeof T0=="string"?new Date(T0||0):T0;try{return ge(X1,"time",I0,o5).format(d5)}catch(J5){X1.onError(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting time.",J5))}return String(d5)}function i4(X1,I0){for(var C0=[],g0=2;g0<arguments.length;g0++)C0[g0-2]=arguments[g0];var T0=C0[0],k0=C0[1],o5=C0[2],d5=o5===void 0?{}:o5,J5=X1.timeZone,Pt=X1.locale,vt=X1.onError,j2=(0,g2.L6)(d5,o4,J5?{timeZone:J5}:{});try{return I0(Pt,j2).formatRange(T0,k0)}catch(T2){vt(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting date time range.",T2))}return String(T0)}function Ae(X1,I0){for(var C0=[],g0=2;g0<arguments.length;g0++)C0[g0-2]=arguments[g0];var T0=C0[0],k0=C0[1],o5=k0===void 0?{}:k0,d5=typeof T0=="string"?new Date(T0||0):T0;try{return ge(X1,"date",I0,o5).formatToParts(d5)}catch(J5){X1.onError(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting date.",J5))}return[]}function T4(X1,I0){for(var C0=[],g0=2;g0<arguments.length;g0++)C0[g0-2]=arguments[g0];var T0=C0[0],k0=C0[1],o5=k0===void 0?{}:k0,d5=typeof T0=="string"?new Date(T0||0):T0;try{return ge(X1,"time",I0,o5).formatToParts(d5)}catch(J5){X1.onError(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting time.",J5))}return[]}var fr=["type"];function me(X1,I0,C0,g0){var T0=X1.locale,k0=X1.onError;g0===void 0&&(g0={}),Intl.PluralRules||k0(new na.u_(`Intl.PluralRules is not available in this environment.
  Try polyfilling it using "@formatjs/intl-pluralrules"
  `,na.jK.MISSING_INTL_API));var o5=(0,g2.L6)(g0,fr);try{return I0(T0,o5).select(C0)}catch(d5){k0(new _t.Qe("Error formatting plural.",T0,d5))}return"other"}var c4=["type","style"],F4=Date.now();function Z4(X1){return"".concat(F4,"_").concat(X1,"_").concat(F4)}function pr(X1,I0,C0,g0){g0===void 0&&(g0={});var T0=O4(X1,I0,C0,g0).reduce(function(k0,o5){var d5=o5.value;return typeof d5!="string"?k0.push(d5):typeof k0[k0.length-1]=="string"?k0[k0.length-1]+=d5:k0.push(d5),k0},[]);return T0.length===1?T0[0]:T0.length===0?"":T0}function O4(X1,I0,C0,g0){var T0=X1.locale,k0=X1.onError;g0===void 0&&(g0={});var o5=Intl.ListFormat;o5||k0(new na.u_(`Intl.ListFormat is not available in this environment.
  Try polyfilling it using "@formatjs/intl-listformat"
  `,na.jK.MISSING_INTL_API));var d5=(0,g2.L6)(g0,c4);try{var J5={},Pt=C0.map(function(vt,j2){if(typeof vt=="object"){var T2=Z4(j2);return J5[T2]=vt,T2}return String(vt)});return I0(T0,d5).formatToParts(Pt).map(function(vt){return vt.type==="literal"?vt:(0,mt.pi)((0,mt.pi)({},vt),{value:J5[vt.value]||vt.value})})}catch(vt){k0(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting list.",vt))}return C0}var gr=["style","type","fallback","languageDisplay"];function Xa(X1,I0,C0,g0){var T0=X1.locale,k0=X1.onError,o5=Intl.DisplayNames;o5||k0(new na.u_(`Intl.DisplayNames is not available in this environment.
  Try polyfilling it using "@formatjs/intl-displaynames"
  `,na.jK.MISSING_INTL_API));var d5=(0,g2.L6)(g0,gr);try{return I0(T0,d5).of(C0)}catch(J5){k0(new _t.Rw(_t.bc.FORMAT_ERROR,"Error formatting display name.",J5))}}function k4(X1){var I0=X1?X1[Object.keys(X1)[0]]:void 0;return typeof I0=="string"}function Re(X1){X1.onWarn&&X1.defaultRichTextElements&&k4(X1.messages||{})&&X1.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
  Please consider using "@formatjs/cli" to pre-compile your messages for performance.
  For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Jr(X1,I0){var C0=(0,g2.ax)(I0),g0=(0,mt.pi)((0,mt.pi)({},g2.Z0),X1),T0=g0.locale,k0=g0.defaultLocale,o5=g0.onError;return T0?!Intl.NumberFormat.supportedLocalesOf(T0).length&&o5?o5(new _t.gb('Missing locale data for locale: "'.concat(T0,'" in Intl.NumberFormat. Using default locale: "').concat(k0,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(T0).length&&o5&&o5(new _t.gb('Missing locale data for locale: "'.concat(T0,'" in Intl.DateTimeFormat. Using default locale: "').concat(k0,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(o5&&o5(new _t.OV('"locale" was not configured, using "'.concat(k0,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),g0.locale=g0.defaultLocale||"en"),Re(g0),(0,mt.pi)((0,mt.pi)({},g0),{formatters:C0,formatNumber:_4.bind(null,g0,C0.getNumberFormat),formatNumberToParts:E4.bind(null,g0,C0.getNumberFormat),formatRelativeTime:Ya.bind(null,g0,C0.getRelativeTimeFormat),formatDate:l4.bind(null,g0,C0.getDateTimeFormat),formatDateToParts:Ae.bind(null,g0,C0.getDateTimeFormat),formatTime:G4.bind(null,g0,C0.getDateTimeFormat),formatDateTimeRange:i4.bind(null,g0,C0.getDateTimeFormat),formatTimeToParts:T4.bind(null,g0,C0.getDateTimeFormat),formatPlural:me.bind(null,g0,C0.getPluralRules),formatMessage:pe.bind(null,g0,C0),$t:pe.bind(null,g0,C0),formatList:pr.bind(null,g0,C0.getListFormat),formatListToParts:O4.bind(null,g0,C0.getListFormat),formatDisplayName:Xa.bind(null,g0,C0.getDisplayNames)})}var qr=__webpack_require__(57602);function Qa(X1){return{locale:X1.locale,timeZone:X1.timeZone,fallbackOnEmptyString:X1.fallbackOnEmptyString,formats:X1.formats,textComponent:X1.textComponent,messages:X1.messages,defaultLocale:X1.defaultLocale,defaultFormats:X1.defaultFormats,onError:X1.onError,onWarn:X1.onWarn,wrapRichTextChunksInFragment:X1.wrapRichTextChunksInFragment,defaultRichTextElements:X1.defaultRichTextElements}}function mr(X1){return X1&&Object.keys(X1).reduce(function(I0,C0){var g0=X1[C0];return I0[C0]=(0,qr.Gt)(g0)?(0,fe.dt)(g0):g0,I0},{})}var R4=function(X1,I0,C0,g0){for(var T0=[],k0=4;k0<arguments.length;k0++)T0[k0-4]=arguments[k0];var o5=mr(g0),d5=pe.apply(void 0,(0,mt.ev)([X1,I0,C0,o5],T0,!1));return Array.isArray(d5)?d0.Children.toArray(d5):d5},Pe=function(X1,I0){var C0=X1.defaultRichTextElements,g0=(0,mt._T)(X1,["defaultRichTextElements"]),T0=mr(C0),k0=Jr((0,mt.pi)((0,mt.pi)((0,mt.pi)({},fe.Z0),g0),{defaultRichTextElements:T0}),I0),o5={locale:k0.locale,timeZone:k0.timeZone,fallbackOnEmptyString:k0.fallbackOnEmptyString,formats:k0.formats,defaultLocale:k0.defaultLocale,defaultFormats:k0.defaultFormats,messages:k0.messages,onError:k0.onError,defaultRichTextElements:T0};return(0,mt.pi)((0,mt.pi)({},k0),{formatMessage:R4.bind(null,o5,k0.formatters),$t:R4.bind(null,o5,k0.formatters)})},jt=function(X1){(0,mt.ZT)(I0,X1);function I0(){var C0=X1!==null&&X1.apply(this,arguments)||this;return C0.cache=(0,g2.Sn)(),C0.state={cache:C0.cache,intl:Pe(Qa(C0.props),C0.cache),prevConfig:Qa(C0.props)},C0}return I0.getDerivedStateFromProps=function(C0,g0){var T0=g0.prevConfig,k0=g0.cache,o5=Qa(C0);return(0,fe.wU)(T0,o5)?null:{intl:Pe(o5,k0),prevConfig:o5}},I0.prototype.render=function(){return(0,fe.lq)(this.state.intl),d0.createElement(L4.zt,{value:this.state.intl},this.props.children)},I0.displayName="IntlProvider",I0.defaultProps=fe.Z0,I0}(d0.PureComponent),zr=null,De=__webpack_require__(21643),Ja=__webpack_require__(91964),xr=__webpack_require__(62086),P4=(0,g2.Sn)(),Ne=function(I0){var C0=(0,d0.useCallback)(function(){var d5=Ja.k.slice().reverse().find(function(Pt){return"suffix"in Pt?Ze.m8.location.pathname.replace(/([^/])\/$/,"$1").endsWith(Pt.suffix):Ze.m8.location.pathname.replace(/([^/])\/$/,"$1").startsWith(Pt.base)}),J5=d5?d5.id:Ja.k[0].id;return Pe({locale:J5,messages:Ja.s[J5]||{}},P4)},[]),g0=(0,d0.useState)(function(){return C0()}),T0=B4()(g0,2),k0=T0[0],o5=T0[1];return(0,De.LI)(function(){return Ze.m8.listen(function(){o5(C0())})},[]),(0,xr.jsx)(L4.zt,{value:k0,children:I0.children},k0.locale)};function ze(X1){return d0.createElement(Ne,null,X1)}var Ba=__webpack_require__(57378);function je(X1){return X1.default?typeof X1.default=="function"?X1.default():X1.default:X1}function Ir(){return[{apply:d,path:void 0},{apply:f,path:void 0},{apply:a,path:void 0}]}function tn(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange"]}var s4=null;function xe(){return s4=Ba.Q$.create({plugins:Ir(),validKeys:tn()}),s4}function D4(){return s4}var u4=__webpack_require__(6054),N4="/",j4=!1;function Za(){return He.apply(this,arguments)}function He(){return He=p()(l()().mark(function X1(){var I0,C0,g0,T0,k0,o5,d5,J5;return l()().wrap(function(vt){for(;;)switch(vt.prev=vt.next){case 0:return I0=xe(),vt.next=3,b4(I0);case 3:return C0=vt.sent,g0=C0.routes,T0=C0.routeComponents,vt.next=8,I0.applyPlugins({key:"patchRoutes",type:Ba.Ac.event,args:{routes:g0,routeComponents:T0}});case 8:return k0=I0.applyPlugins({key:"modifyContextOpts",type:Ba.Ac.modify,initialValue:{}}),o5=k0.basename||"/",d5=k0.historyType||"browser",J5=(0,u4.f)(s()({type:d5,basename:o5},k0.historyOpts)),vt.abrupt("return",I0.applyPlugins({key:"render",type:Ba.Ac.compose,initialValue:function(){var T2={routes:g0,routeComponents:T0,pluginManager:I0,rootElement:k0.rootElement||document.getElementById("root"),publicPath:N4,runtimePublicPath:j4,history:J5,historyType:d5,basename:o5,callback:k0.callback},F2=I0.applyPlugins({key:"modifyClientRenderOpts",type:Ba.Ac.modify,initialValue:T2});return ra(F2)}})());case 13:case"end":return vt.stop()}},X1)})),He.apply(this,arguments)}typeof history!="undefined"&&location.pathname.length>1&&location.pathname.endsWith("/")&&history.replaceState({},"",location.pathname.slice(0,-1)+location.search+location.hash),Za(),window.g_umi={version:"4.0.55"}})()})();
}());