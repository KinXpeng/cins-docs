!(function () {
	"use strict";var W=Object.defineProperty,N=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var K=(a,r,t)=>r in a?W(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,M=(a,r)=>{for(var t in r||(r={}))B.call(r,t)&&K(a,t,r[t]);if(I)for(var t of I(r))S.call(r,t)&&K(a,t,r[t]);return a},L=(a,r)=>N(a,F(r));var U=(a,r)=>{var t={};for(var h in a)B.call(a,h)&&r.indexOf(h)<0&&(t[h]=a[h]);if(a!=null&&I)for(var h of I(a))r.indexOf(h)<0&&S.call(a,h)&&(t[h]=a[h]);return t};(self.webpackChunkcins_docs=self.webpackChunkcins_docs||[]).push([[9826],{76173:function(a,r,t){t.r(r);var h=t(35155),f=t(10266),O=t(62621),j=t(42018),c=t(85885),s=t(45430),p=t(85616),v=t(39092),C=t(16582),R=t(67722),l=t(93236),e=t(62086);function _(){var o=(0,R.eL)(),E=o.texts;return(0,e.jsx)(R.dY,{children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"introduction",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Introduction"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:E[0].value}),(0,e.jsx)("li",{children:E[1].value}),(0,e.jsx)("li",{children:E[2].value}),(0,e.jsx)("li",{children:E[3].value})]}),(0,e.jsxs)("h2",{id:"notice",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#notice",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Notice"]}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:E[4].value})})]})})})}r.default=_},35155:function(a,r,t){var h=t(91600),f=t(93236),O=t(67722),j=t(45430),c=t(72250),s=function(e){var _=e.children,o=useColorModeValue("gray.50","gray.800"),E=useColorModeValue("brand.500","brand.300");return React.createElement(chakra.code,{bgColor:o,textColor:E},_)},p={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var _=this,o=[];return Object.entries(e.properties||{}).forEach(function(E){var D,b=(0,h.Z)(E,2),x=b[0],P=b[1];o.push("".concat(x).concat((D=e.required)!==null&&D!==void 0&&D.includes(x)?"":"?",": ").concat(P.type==="object"?"object":_.toString(P)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var _=this.getValidClassName(e.items);return _?"".concat(_,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var _=this,o=e.signature;return"".concat(o.isAsync?"async ":"","(").concat(o.arguments.map(function(E){return"".concat(E.key,": ").concat(_.toString(E))}).join(", "),") => ").concat(this.toString(o.returnType))},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(_){return JSON.stringify(_)}).join(" | ")},oneOf:function(e){var _=this;return e.oneOf.map(function(o){return _.getValidClassName(o)||_.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},v=function(e){var _=useState(function(){return p.toString(e)}),o=_slicedToArray(_,2),E=o[0],D=o[1];return useEffect(function(){D(p.toString(e))},[e]),React.createElement(s,null,E)},C=function(e){var _,o=useRouteMeta(),E=o.frontmatter,D=useAtomAssets(),b=D.components,x=useLocale(),P=(_=e.id)!==null&&_!==void 0?_:E.atomId;if(!P)throw new Error("`id` properties if required for API component!");var g=b==null?void 0:b[P],A=useMemo(function(){return!b},[b]),i=useMemo(function(){var d;return A?{loading:{}}:g==null||(d=g.propsConfig)===null||d===void 0?void 0:d.properties},[g,A]),u=useMemo(function(){var d;return b&&!(g!=null&&(d=g.propsConfig)!==null&&d!==void 0&&d.properties)},[g,b]),n=useCallback(function(d,m){var T,y;return g!=null&&(T=g.propsConfig)!==null&&T!==void 0&&(y=T.required)!==null&&y!==void 0&&y.includes(d)?React.createElement(FormattedMessage,{id:"api.component.required"}):m||"--"},[g]);return React.createElement(Table,{parseChildren:!1},React.createElement(Thead,null,React.createElement(Tr,null,React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.name"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.description"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.type"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.default"})))),React.createElement(Tbody,null,u?React.createElement(Tr,null,React.createElement(Td,{colSpan:4},React.createElement(Center,null,React.createElement(Text,{as:"p"},React.createElement(FormattedMessage,{id:"api.component.not.found"}))))):Object.entries(i).map(function(d){var m,T=_slicedToArray(d,2),y=T[0],k=T[1];return React.createElement(Tr,{key:y},React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!A,fadeDuration:4},y)),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!A,fadeDuration:4},getLocalValue(x,(m=k==null?void 0:k.tags)!==null&&m!==void 0?m:{},"description")||"--")),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!A,fadeDuration:4},React.createElement(v,k))),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!A,fadeDuration:4},React.createElement(s,null,n(y,k.default)))))})))},R=null},85616:function(a,r,t){var h=t(93236),f=function(c){var s=c.image,p=c.children,v=c.description,C=c.submit,R=c.title,l=c.link;return React.createElement(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md"},!!(s!=null&&s.length)&&React.createElement(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:s,alt:"ad image"}),React.createElement(Stack,null,React.createElement(CardBody,null,!!R&&React.createElement(Heading,{size:"md"},R),React.createElement(Text,{py:"2"},p!=null?p:v)),(!!C||!!l)&&React.createElement(CardFooter,null,React.createElement(Button,{as:"a",href:l,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:React.createElement(ExternalLinkIcon,null)},C))))},O=null},39092:function(a,r,t){var h=t(93236),f=null,O=function(s){var p=s.title,v=s.content,C=s.children,R=_objectWithoutProperties(s,f);return React.createElement(ChakraAlert,_extends({mb:4},R),React.createElement(AlertIcon,null),React.createElement(AlertTitle,null,p),React.createElement(AlertDescription,null,C!=null?C:v))},j=null},45430:function(a,r,t){var h=t(93236),f=t(71565),O=t(82203),j=t(75601),c=t(94339),s=t(24843),p=t(30813),v=t(62086),[C,R]=(0,p.k)({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),l=(0,f.G)((i,u)=>{const n=(0,O.jC)("Table",i),y=(0,j.Lr)(i),{className:d,layout:m}=y,T=U(y,["className","layout"]);return(0,v.jsx)(C,{value:n,children:(0,v.jsx)(c.m.table,M({ref:u,__css:M({tableLayout:m},n.table),className:(0,s.cx)("chakra-table",d)},T))})});l.displayName="Table";var e=(0,f.G)((i,u)=>{const n=R();return(0,v.jsx)(c.m.thead,L(M({},i),{ref:u,__css:n.thead}))}),_=(0,f.G)((i,u)=>{const n=R();return(0,v.jsx)(c.m.tbody,L(M({},i),{ref:u,__css:n.tbody}))}),o=(0,f.G)((d,n)=>{var m=d,{isNumeric:i}=m,u=U(m,["isNumeric"]);const T=R();return(0,v.jsx)(c.m.th,L(M({},u),{ref:n,__css:T.th,"data-is-numeric":i}))}),E=(0,f.G)((d,n)=>{var m=d,{isNumeric:i}=m,u=U(m,["isNumeric"]);const T=R();return(0,v.jsx)(c.m.td,L(M({},u),{ref:n,__css:T.td,"data-is-numeric":i}))}),D=(0,f.G)((i,u)=>{const n=R();return(0,v.jsx)(c.m.tr,L(M({},i),{ref:u,__css:n.tr}))}),b={thead:e,tbody:_,th:o,td:E,tr:D};function x(i){var u=i.type,n=i.props,d=n!=null&&n.children?P(n.children):[],m=b[u];return m?cloneElement(React.createElement(m,null),_objectSpread(_objectSpread({},n),{},{children:d})):i}function P(i){var u=Children.count(i);return u?Children.map(i,x):x(i)}var g=function(u){var n=u.children,d=u.parseChildren,m=d===void 0?!0:d,T=useMemo(function(){return m?P(n):n},[m,n]);return React.createElement(TableContainer,{mt:6,mb:8},React.createElement(ChakraTable,null,T))},A=null},10266:function(a,r,t){var h=t(93236);function f(){return f=Object.assign?Object.assign.bind():function(c){for(var s=1;s<arguments.length;s++){var p=arguments[s];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(c[v]=p[v])}return c},f.apply(this,arguments)}var O=function(s){return React.createElement("span",f({className:"dumi-default-badge"},s))},j=null}}]);
}());