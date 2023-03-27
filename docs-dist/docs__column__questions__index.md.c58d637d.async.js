!(function () {
	"use strict";var W=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var K=(a,r,t)=>r in a?W(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,A=(a,r)=>{for(var t in r||(r={}))B.call(r,t)&&K(a,t,r[t]);if(I)for(var t of I(r))S.call(r,t)&&K(a,t,r[t]);return a},L=(a,r)=>F(a,N(r));var U=(a,r)=>{var t={};for(var v in a)B.call(a,v)&&r.indexOf(v)<0&&(t[v]=a[v]);if(a!=null&&I)for(var v of I(a))r.indexOf(v)<0&&S.call(a,v)&&(t[v]=a[v]);return t};(self.webpackChunkcins_docs=self.webpackChunkcins_docs||[]).push([[2375],{90120:function(a,r,t){t.r(r);var v=t(35155),h=t(10266),j=t(62621),x=t(42018),i=t(85885),o=t(45430),f=t(85616),E=t(39092),C=t(16582),R=t(67722),l=t(93236),e=t(62086);function _(){var c=(0,R.eL)(),p=c.texts;return(0,e.jsx)(R.dY,{children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u53F2\u4E0A\u6700\u4F73\u5F02\u5E38\u5904\u7406",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53F2\u4E0A\u6700\u4F73\u5F02\u5E38\u5904\u7406",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u53F2\u4E0A\u201C\u6700\u4F73\u201D\u5F02\u5E38\u5904\u7406"]}),(0,e.jsx)(i.ZP,{lang:"ts",children:p[0].value}),(0,e.jsxs)("h2",{id:"\u9875\u9762\u4E2D-js-\u52A0\u8F7D\u5931\u8D25",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9875\u9762\u4E2D-js-\u52A0\u8F7D\u5931\u8D25",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u9875\u9762\u4E2D js \u52A0\u8F7D\u5931\u8D25"]}),(0,e.jsx)(i.ZP,{lang:"js",children:p[1].value})]})})})}r.default=_},35155:function(a,r,t){var v=t(91600),h=t(93236),j=t(67722),x=t(45430),i=t(72250),o=function(e){var _=e.children,c=useColorModeValue("gray.50","gray.800"),p=useColorModeValue("brand.500","brand.300");return React.createElement(chakra.code,{bgColor:c,textColor:p},_)},f={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var _=this,c=[];return Object.entries(e.properties||{}).forEach(function(p){var y,b=(0,v.Z)(p,2),M=b[0],P=b[1];c.push("".concat(M).concat((y=e.required)!==null&&y!==void 0&&y.includes(M)?"":"?",": ").concat(P.type==="object"?"object":_.toString(P)))}),c.length?"{ ".concat(c.join("; ")," }"):"{}"},array:function(e){if(e.items){var _=this.getValidClassName(e.items);return _?"".concat(_,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var _=this,c=e.signature;return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(p){return"".concat(p.key,": ").concat(_.toString(p))}).join(", "),") => ").concat(this.toString(c.returnType))},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(_){return JSON.stringify(_)}).join(" | ")},oneOf:function(e){var _=this;return e.oneOf.map(function(c){return _.getValidClassName(c)||_.toString(c)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},E=function(e){var _=useState(function(){return f.toString(e)}),c=_slicedToArray(_,2),p=c[0],y=c[1];return useEffect(function(){y(f.toString(e))},[e]),React.createElement(o,null,p)},C=function(e){var _,c=useRouteMeta(),p=c.frontmatter,y=useAtomAssets(),b=y.components,M=useLocale(),P=(_=e.id)!==null&&_!==void 0?_:p.atomId;if(!P)throw new Error("`id` properties if required for API component!");var g=b==null?void 0:b[P],O=useMemo(function(){return!b},[b]),s=useMemo(function(){var d;return O?{loading:{}}:g==null||(d=g.propsConfig)===null||d===void 0?void 0:d.properties},[g,O]),u=useMemo(function(){var d;return b&&!(g!=null&&(d=g.propsConfig)!==null&&d!==void 0&&d.properties)},[g,b]),n=useCallback(function(d,m){var T,D;return g!=null&&(T=g.propsConfig)!==null&&T!==void 0&&(D=T.required)!==null&&D!==void 0&&D.includes(d)?React.createElement(FormattedMessage,{id:"api.component.required"}):m||"--"},[g]);return React.createElement(Table,{parseChildren:!1},React.createElement(Thead,null,React.createElement(Tr,null,React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.name"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.description"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.type"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.default"})))),React.createElement(Tbody,null,u?React.createElement(Tr,null,React.createElement(Td,{colSpan:4},React.createElement(Center,null,React.createElement(Text,{as:"p"},React.createElement(FormattedMessage,{id:"api.component.not.found"}))))):Object.entries(s).map(function(d){var m,T=_slicedToArray(d,2),D=T[0],k=T[1];return React.createElement(Tr,{key:D},React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},D)),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},getLocalValue(M,(m=k==null?void 0:k.tags)!==null&&m!==void 0?m:{},"description")||"--")),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},React.createElement(E,k))),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},React.createElement(o,null,n(D,k.default)))))})))},R=null},85616:function(a,r,t){var v=t(93236),h=function(i){var o=i.image,f=i.children,E=i.description,C=i.submit,R=i.title,l=i.link;return React.createElement(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md"},!!(o!=null&&o.length)&&React.createElement(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:o,alt:"ad image"}),React.createElement(Stack,null,React.createElement(CardBody,null,!!R&&React.createElement(Heading,{size:"md"},R),React.createElement(Text,{py:"2"},f!=null?f:E)),(!!C||!!l)&&React.createElement(CardFooter,null,React.createElement(Button,{as:"a",href:l,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:React.createElement(ExternalLinkIcon,null)},C))))},j=null},39092:function(a,r,t){var v=t(93236),h=null,j=function(o){var f=o.title,E=o.content,C=o.children,R=_objectWithoutProperties(o,h);return React.createElement(ChakraAlert,_extends({mb:4},R),React.createElement(AlertIcon,null),React.createElement(AlertTitle,null,f),React.createElement(AlertDescription,null,C!=null?C:E))},x=null},45430:function(a,r,t){var v=t(93236),h=t(71565),j=t(82203),x=t(75601),i=t(94339),o=t(24843),f=t(30813),E=t(62086),[C,R]=(0,f.k)({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),l=(0,h.G)((s,u)=>{const n=(0,j.jC)("Table",s),D=(0,x.Lr)(s),{className:d,layout:m}=D,T=U(D,["className","layout"]);return(0,E.jsx)(C,{value:n,children:(0,E.jsx)(i.m.table,A({ref:u,__css:A({tableLayout:m},n.table),className:(0,o.cx)("chakra-table",d)},T))})});l.displayName="Table";var e=(0,h.G)((s,u)=>{const n=R();return(0,E.jsx)(i.m.thead,L(A({},s),{ref:u,__css:n.thead}))}),_=(0,h.G)((s,u)=>{const n=R();return(0,E.jsx)(i.m.tbody,L(A({},s),{ref:u,__css:n.tbody}))}),c=(0,h.G)((d,n)=>{var m=d,{isNumeric:s}=m,u=U(m,["isNumeric"]);const T=R();return(0,E.jsx)(i.m.th,L(A({},u),{ref:n,__css:T.th,"data-is-numeric":s}))}),p=(0,h.G)((d,n)=>{var m=d,{isNumeric:s}=m,u=U(m,["isNumeric"]);const T=R();return(0,E.jsx)(i.m.td,L(A({},u),{ref:n,__css:T.td,"data-is-numeric":s}))}),y=(0,h.G)((s,u)=>{const n=R();return(0,E.jsx)(i.m.tr,L(A({},s),{ref:u,__css:n.tr}))}),b={thead:e,tbody:_,th:c,td:p,tr:y};function M(s){var u=s.type,n=s.props,d=n!=null&&n.children?P(n.children):[],m=b[u];return m?cloneElement(React.createElement(m,null),_objectSpread(_objectSpread({},n),{},{children:d})):s}function P(s){var u=Children.count(s);return u?Children.map(s,M):M(s)}var g=function(u){var n=u.children,d=u.parseChildren,m=d===void 0?!0:d,T=useMemo(function(){return m?P(n):n},[m,n]);return React.createElement(TableContainer,{mt:6,mb:8},React.createElement(ChakraTable,null,T))},O=null},10266:function(a,r,t){var v=t(93236);function h(){return h=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var f=arguments[o];for(var E in f)Object.prototype.hasOwnProperty.call(f,E)&&(i[E]=f[E])}return i},h.apply(this,arguments)}var j=function(o){return React.createElement("span",h({className:"dumi-default-badge"},o))},x=null}}]);
}());