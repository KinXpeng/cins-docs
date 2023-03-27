!(function () {
	"use strict";var W=Object.defineProperty,N=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var K=(r,_,t)=>_ in r?W(r,_,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[_]=t,D=(r,_)=>{for(var t in _||(_={}))B.call(_,t)&&K(r,t,_[t]);if(I)for(var t of I(_))S.call(_,t)&&K(r,t,_[t]);return r},L=(r,_)=>N(r,F(_));var U=(r,_)=>{var t={};for(var E in r)B.call(r,E)&&_.indexOf(E)<0&&(t[E]=r[E]);if(r!=null&&I)for(var E of I(r))_.indexOf(E)<0&&S.call(r,E)&&(t[E]=r[E]);return t};(self.webpackChunkcins_docs=self.webpackChunkcins_docs||[]).push([[9455],{15155:function(r,_,t){t.r(_);var E=t(35155),f=t(10266),A=t(62621),O=t(42018),u=t(85885),i=t(45430),p=t(85616),h=t(39092),C=t(16582),g=t(67722),c=t(93236),e=t(62086);function l(){var o=(0,g.eL)(),n=o.texts;return(0,e.jsx)(g.dY,{children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u4EC0\u4E48\u662F-cins",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EC0\u4E48\u662F-cins",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EC0\u4E48\u662F cins\uFF1F"]}),(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("strong",{children:n[1].value}),n[2].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:n[3].value}),n[4].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:n[5].value}),n[6].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:n[7].value}),n[8].value]})]}),(0,e.jsxs)("h2",{id:"\u7279\u6027",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7279\u6027",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7279\u6027"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[9].value}),(0,e.jsx)("li",{children:n[10].value}),(0,e.jsx)("li",{children:n[11].value}),(0,e.jsx)("li",{children:n[12].value}),(0,e.jsx)("li",{children:n[13].value}),(0,e.jsx)("li",{children:n[14].value})]})]})})})}_.default=l},35155:function(r,_,t){var E=t(91600),f=t(93236),A=t(67722),O=t(45430),u=t(72250),i=function(e){var l=e.children,o=useColorModeValue("gray.50","gray.800"),n=useColorModeValue("brand.500","brand.300");return React.createElement(chakra.code,{bgColor:o,textColor:n},l)},p={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var l=this,o=[];return Object.entries(e.properties||{}).forEach(function(n){var y,b=(0,E.Z)(n,2),P=b[0],j=b[1];o.push("".concat(P).concat((y=e.required)!==null&&y!==void 0&&y.includes(P)?"":"?",": ").concat(j.type==="object"?"object":l.toString(j)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var l=this.getValidClassName(e.items);return l?"".concat(l,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var l=this,o=e.signature;return"".concat(o.isAsync?"async ":"","(").concat(o.arguments.map(function(n){return"".concat(n.key,": ").concat(l.toString(n))}).join(", "),") => ").concat(this.toString(o.returnType))},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(l){return JSON.stringify(l)}).join(" | ")},oneOf:function(e){var l=this;return e.oneOf.map(function(o){return l.getValidClassName(o)||l.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},h=function(e){var l=useState(function(){return p.toString(e)}),o=_slicedToArray(l,2),n=o[0],y=o[1];return useEffect(function(){y(p.toString(e))},[e]),React.createElement(i,null,n)},C=function(e){var l,o=useRouteMeta(),n=o.frontmatter,y=useAtomAssets(),b=y.components,P=useLocale(),j=(l=e.id)!==null&&l!==void 0?l:n.atomId;if(!j)throw new Error("`id` properties if required for API component!");var T=b==null?void 0:b[j],M=useMemo(function(){return!b},[b]),s=useMemo(function(){var m;return M?{loading:{}}:T==null||(m=T.propsConfig)===null||m===void 0?void 0:m.properties},[T,M]),d=useMemo(function(){var m;return b&&!(T!=null&&(m=T.propsConfig)!==null&&m!==void 0&&m.properties)},[T,b]),a=useCallback(function(m,v){var R,x;return T!=null&&(R=T.propsConfig)!==null&&R!==void 0&&(x=R.required)!==null&&x!==void 0&&x.includes(m)?React.createElement(FormattedMessage,{id:"api.component.required"}):v||"--"},[T]);return React.createElement(Table,{parseChildren:!1},React.createElement(Thead,null,React.createElement(Tr,null,React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.name"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.description"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.type"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.default"})))),React.createElement(Tbody,null,d?React.createElement(Tr,null,React.createElement(Td,{colSpan:4},React.createElement(Center,null,React.createElement(Text,{as:"p"},React.createElement(FormattedMessage,{id:"api.component.not.found"}))))):Object.entries(s).map(function(m){var v,R=_slicedToArray(m,2),x=R[0],k=R[1];return React.createElement(Tr,{key:x},React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},x)),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},getLocalValue(P,(v=k==null?void 0:k.tags)!==null&&v!==void 0?v:{},"description")||"--")),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},React.createElement(h,k))),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},React.createElement(i,null,a(x,k.default)))))})))},g=null},85616:function(r,_,t){var E=t(93236),f=function(u){var i=u.image,p=u.children,h=u.description,C=u.submit,g=u.title,c=u.link;return React.createElement(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md"},!!(i!=null&&i.length)&&React.createElement(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:i,alt:"ad image"}),React.createElement(Stack,null,React.createElement(CardBody,null,!!g&&React.createElement(Heading,{size:"md"},g),React.createElement(Text,{py:"2"},p!=null?p:h)),(!!C||!!c)&&React.createElement(CardFooter,null,React.createElement(Button,{as:"a",href:c,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:React.createElement(ExternalLinkIcon,null)},C))))},A=null},39092:function(r,_,t){var E=t(93236),f=null,A=function(i){var p=i.title,h=i.content,C=i.children,g=_objectWithoutProperties(i,f);return React.createElement(ChakraAlert,_extends({mb:4},g),React.createElement(AlertIcon,null),React.createElement(AlertTitle,null,p),React.createElement(AlertDescription,null,C!=null?C:h))},O=null},45430:function(r,_,t){var E=t(93236),f=t(71565),A=t(82203),O=t(75601),u=t(94339),i=t(24843),p=t(30813),h=t(62086),[C,g]=(0,p.k)({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),c=(0,f.G)((s,d)=>{const a=(0,A.jC)("Table",s),x=(0,O.Lr)(s),{className:m,layout:v}=x,R=U(x,["className","layout"]);return(0,h.jsx)(C,{value:a,children:(0,h.jsx)(u.m.table,D({ref:d,__css:D({tableLayout:v},a.table),className:(0,i.cx)("chakra-table",m)},R))})});c.displayName="Table";var e=(0,f.G)((s,d)=>{const a=g();return(0,h.jsx)(u.m.thead,L(D({},s),{ref:d,__css:a.thead}))}),l=(0,f.G)((s,d)=>{const a=g();return(0,h.jsx)(u.m.tbody,L(D({},s),{ref:d,__css:a.tbody}))}),o=(0,f.G)((m,a)=>{var v=m,{isNumeric:s}=v,d=U(v,["isNumeric"]);const R=g();return(0,h.jsx)(u.m.th,L(D({},d),{ref:a,__css:R.th,"data-is-numeric":s}))}),n=(0,f.G)((m,a)=>{var v=m,{isNumeric:s}=v,d=U(v,["isNumeric"]);const R=g();return(0,h.jsx)(u.m.td,L(D({},d),{ref:a,__css:R.td,"data-is-numeric":s}))}),y=(0,f.G)((s,d)=>{const a=g();return(0,h.jsx)(u.m.tr,L(D({},s),{ref:d,__css:a.tr}))}),b={thead:e,tbody:l,th:o,td:n,tr:y};function P(s){var d=s.type,a=s.props,m=a!=null&&a.children?j(a.children):[],v=b[d];return v?cloneElement(React.createElement(v,null),_objectSpread(_objectSpread({},a),{},{children:m})):s}function j(s){var d=Children.count(s);return d?Children.map(s,P):P(s)}var T=function(d){var a=d.children,m=d.parseChildren,v=m===void 0?!0:m,R=useMemo(function(){return v?j(a):a},[v,a]);return React.createElement(TableContainer,{mt:6,mb:8},React.createElement(ChakraTable,null,R))},M=null},10266:function(r,_,t){var E=t(93236);function f(){return f=Object.assign?Object.assign.bind():function(u){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var h in p)Object.prototype.hasOwnProperty.call(p,h)&&(u[h]=p[h])}return u},f.apply(this,arguments)}var A=function(i){return React.createElement("span",f({className:"dumi-default-badge"},i))},O=null}}]);
}());