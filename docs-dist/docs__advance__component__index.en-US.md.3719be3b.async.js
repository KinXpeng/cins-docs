!(function () {
	"use strict";var W=Object.defineProperty,N=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var K=(a,r,t)=>r in a?W(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,P=(a,r)=>{for(var t in r||(r={}))S.call(r,t)&&K(a,t,r[t]);if(L)for(var t of L(r))B.call(r,t)&&K(a,t,r[t]);return a},k=(a,r)=>N(a,F(r));var U=(a,r)=>{var t={};for(var v in a)S.call(a,v)&&r.indexOf(v)<0&&(t[v]=a[v]);if(a!=null&&L)for(var v of L(a))r.indexOf(v)<0&&B.call(a,v)&&(t[v]=a[v]);return t};(self.webpackChunkcins_docs=self.webpackChunkcins_docs||[]).push([[1763],{65557:function(a,r,t){t.r(r);var v=t(35155),E=t(10266),A=t(62621),O=t(42018),s=t(85885),l=t(45430),f=t(85616),p=t(39092),x=t(16582),g=t(67722),c=t(93236),e=t(62086);function _(){var d=(0,g.eL)(),o=d.texts;return(0,e.jsx)(g.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"upload-component",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upload-component",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Upload component"]})}),(0,e.jsx)(g.Dl,{demo:{id:"docs-advance-component-demo-0"},previewerProps:{}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"mobile-prompt-component",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mobile-prompt-component",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Mobile prompt component"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[o[0].value,(0,e.jsx)("code",{children:o[1].value})]}),(0,e.jsxs)("li",{children:[o[2].value,(0,e.jsx)("a",{href:"https://github.com/KinXpeng/cins-docs/tree/main/utils",children:o[3].value}),o[4].value,(0,e.jsx)("code",{children:o[5].value})]})]}),(0,e.jsxs)("h4",{id:"import",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#import",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Import"]}),(0,e.jsx)(s.ZP,{lang:"js",children:o[6].value}),(0,e.jsxs)("h4",{id:"success-message",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#success-message",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Success message"]}),(0,e.jsx)(s.ZP,{lang:"js",children:o[7].value}),(0,e.jsxs)("h4",{id:"failure-prompt",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#failure-prompt",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Failure prompt"]}),(0,e.jsx)(s.ZP,{lang:"js",children:o[8].value})]})]})})}r.default=_},35155:function(a,r,t){var v=t(91600),E=t(93236),A=t(67722),O=t(45430),s=t(72250),l=function(e){var _=e.children,d=useColorModeValue("gray.50","gray.800"),o=useColorModeValue("brand.500","brand.300");return React.createElement(chakra.code,{bgColor:d,textColor:o},_)},f={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var _=this,d=[];return Object.entries(e.properties||{}).forEach(function(o){var C,T=(0,v.Z)(o,2),D=T[0],y=T[1];d.push("".concat(D).concat((C=e.required)!==null&&C!==void 0&&C.includes(D)?"":"?",": ").concat(y.type==="object"?"object":_.toString(y)))}),d.length?"{ ".concat(d.join("; ")," }"):"{}"},array:function(e){if(e.items){var _=this.getValidClassName(e.items);return _?"".concat(_,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var _=this,d=e.signature;return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(o){return"".concat(o.key,": ").concat(_.toString(o))}).join(", "),") => ").concat(this.toString(d.returnType))},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(_){return JSON.stringify(_)}).join(" | ")},oneOf:function(e){var _=this;return e.oneOf.map(function(d){return _.getValidClassName(d)||_.toString(d)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},p=function(e){var _=useState(function(){return f.toString(e)}),d=_slicedToArray(_,2),o=d[0],C=d[1];return useEffect(function(){C(f.toString(e))},[e]),React.createElement(l,null,o)},x=function(e){var _,d=useRouteMeta(),o=d.frontmatter,C=useAtomAssets(),T=C.components,D=useLocale(),y=(_=e.id)!==null&&_!==void 0?_:o.atomId;if(!y)throw new Error("`id` properties if required for API component!");var R=T==null?void 0:T[y],M=useMemo(function(){return!T},[T]),i=useMemo(function(){var m;return M?{loading:{}}:R==null||(m=R.propsConfig)===null||m===void 0?void 0:m.properties},[R,M]),u=useMemo(function(){var m;return T&&!(R!=null&&(m=R.propsConfig)!==null&&m!==void 0&&m.properties)},[R,T]),n=useCallback(function(m,h){var b,j;return R!=null&&(b=R.propsConfig)!==null&&b!==void 0&&(j=b.required)!==null&&j!==void 0&&j.includes(m)?React.createElement(FormattedMessage,{id:"api.component.required"}):h||"--"},[R]);return React.createElement(Table,{parseChildren:!1},React.createElement(Thead,null,React.createElement(Tr,null,React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.name"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.description"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.type"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.default"})))),React.createElement(Tbody,null,u?React.createElement(Tr,null,React.createElement(Td,{colSpan:4},React.createElement(Center,null,React.createElement(Text,{as:"p"},React.createElement(FormattedMessage,{id:"api.component.not.found"}))))):Object.entries(i).map(function(m){var h,b=_slicedToArray(m,2),j=b[0],I=b[1];return React.createElement(Tr,{key:j},React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},j)),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},getLocalValue(D,(h=I==null?void 0:I.tags)!==null&&h!==void 0?h:{},"description")||"--")),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},React.createElement(p,I))),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},React.createElement(l,null,n(j,I.default)))))})))},g=null},85616:function(a,r,t){var v=t(93236),E=function(s){var l=s.image,f=s.children,p=s.description,x=s.submit,g=s.title,c=s.link;return React.createElement(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md"},!!(l!=null&&l.length)&&React.createElement(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:l,alt:"ad image"}),React.createElement(Stack,null,React.createElement(CardBody,null,!!g&&React.createElement(Heading,{size:"md"},g),React.createElement(Text,{py:"2"},f!=null?f:p)),(!!x||!!c)&&React.createElement(CardFooter,null,React.createElement(Button,{as:"a",href:c,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:React.createElement(ExternalLinkIcon,null)},x))))},A=null},39092:function(a,r,t){var v=t(93236),E=null,A=function(l){var f=l.title,p=l.content,x=l.children,g=_objectWithoutProperties(l,E);return React.createElement(ChakraAlert,_extends({mb:4},g),React.createElement(AlertIcon,null),React.createElement(AlertTitle,null,f),React.createElement(AlertDescription,null,x!=null?x:p))},O=null},45430:function(a,r,t){var v=t(93236),E=t(71565),A=t(82203),O=t(75601),s=t(94339),l=t(24843),f=t(30813),p=t(62086),[x,g]=(0,f.k)({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),c=(0,E.G)((i,u)=>{const n=(0,A.jC)("Table",i),j=(0,O.Lr)(i),{className:m,layout:h}=j,b=U(j,["className","layout"]);return(0,p.jsx)(x,{value:n,children:(0,p.jsx)(s.m.table,P({ref:u,__css:P({tableLayout:h},n.table),className:(0,l.cx)("chakra-table",m)},b))})});c.displayName="Table";var e=(0,E.G)((i,u)=>{const n=g();return(0,p.jsx)(s.m.thead,k(P({},i),{ref:u,__css:n.thead}))}),_=(0,E.G)((i,u)=>{const n=g();return(0,p.jsx)(s.m.tbody,k(P({},i),{ref:u,__css:n.tbody}))}),d=(0,E.G)((m,n)=>{var h=m,{isNumeric:i}=h,u=U(h,["isNumeric"]);const b=g();return(0,p.jsx)(s.m.th,k(P({},u),{ref:n,__css:b.th,"data-is-numeric":i}))}),o=(0,E.G)((m,n)=>{var h=m,{isNumeric:i}=h,u=U(h,["isNumeric"]);const b=g();return(0,p.jsx)(s.m.td,k(P({},u),{ref:n,__css:b.td,"data-is-numeric":i}))}),C=(0,E.G)((i,u)=>{const n=g();return(0,p.jsx)(s.m.tr,k(P({},i),{ref:u,__css:n.tr}))}),T={thead:e,tbody:_,th:d,td:o,tr:C};function D(i){var u=i.type,n=i.props,m=n!=null&&n.children?y(n.children):[],h=T[u];return h?cloneElement(React.createElement(h,null),_objectSpread(_objectSpread({},n),{},{children:m})):i}function y(i){var u=Children.count(i);return u?Children.map(i,D):D(i)}var R=function(u){var n=u.children,m=u.parseChildren,h=m===void 0?!0:m,b=useMemo(function(){return h?y(n):n},[h,n]);return React.createElement(TableContainer,{mt:6,mb:8},React.createElement(ChakraTable,null,b))},M=null},10266:function(a,r,t){var v=t(93236);function E(){return E=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var f=arguments[l];for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(s[p]=f[p])}return s},E.apply(this,arguments)}var A=function(l){return React.createElement("span",E({className:"dumi-default-badge"},l))},O=null}}]);
}());