(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{2705:function(e,t,s){var n=s(5639).Symbol;e.exports=n},4239:function(e,t,s){var n=s(2705),r=s(2932),o=s(2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):o(e)}},7561:function(e,t,s){var n=s(7990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(r,""):e}},1957:function(e,t,s){var n="object"==typeof s.g&&s.g&&s.g.Object===Object&&s.g;e.exports=n},2932:function(e,t,s){var n=s(2705),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),s=e[i];try{e[i]=void 0;var n=!0}catch(e){}var r=a.call(e);return n&&(t?e[i]=s:delete e[i]),r}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,s){var n=s(1957),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o},7990:function(e){var t=/\s/;e.exports=function(e){for(var s=e.length;s--&&t.test(e.charAt(s)););return s}},3279:function(e,t,s){var n=s(3218),r=s(7771),o=s(4841),a=Math.max,i=Math.min;e.exports=function(e,t,s){var c,l,u,d,x,h,m=0,f=!1,p=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var s=c,n=l;return c=l=void 0,m=t,d=e.apply(n,s)}function j(e){var s=e-h,n=e-m;return void 0===h||s>=t||s<0||p&&n>=u}function v(){var e,s,n,o=r();if(j(o))return y(o);x=setTimeout(v,(e=o-h,s=o-m,n=t-e,p?i(n,u-s):n))}function y(e){return(x=void 0,g&&c)?b(e):(c=l=void 0,d)}function w(){var e,s=r(),n=j(s);if(c=arguments,l=this,h=s,n){if(void 0===x)return m=e=h,x=setTimeout(v,t),f?b(e):d;if(p)return clearTimeout(x),x=setTimeout(v,t),b(h)}return void 0===x&&(x=setTimeout(v,t)),d}return t=o(t)||0,n(s)&&(f=!!s.leading,u=(p="maxWait"in s)?a(o(s.maxWait)||0,t):u,g="trailing"in s?!!s.trailing:g),w.cancel=function(){void 0!==x&&clearTimeout(x),m=0,c=h=l=x=void 0},w.flush=function(){return void 0===x?d:y(r())},w}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,s){var n=s(4239),r=s(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,s){var n=s(5639);e.exports=function(){return n.Date.now()}},4841:function(e,t,s){var n=s(7561),r=s(3218),o=s(3448),a=0/0,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return a;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var s=c.test(e);return s||l.test(e)?u(e.slice(2),s?2:8):i.test(e)?a:+e}},5732:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return s(7692)}])},7692:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(5893),r=s(7294),o=s(9008),a=s.n(o),i=s(3279),c=s.n(i),l=e=>{let{businesses:t,onSearchResults:s}=e,[o,a]=(0,r.useState)(""),[i,l]=(0,r.useState)(!1),[u,d]=(0,r.useState)([]),[x,h]=(0,r.useState)(!1),m=c()(e=>{let n=t.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.location&&t.location.toLowerCase().includes(e.toLowerCase())||t.contactEmail&&t.contactEmail.toLowerCase().includes(e.toLowerCase()));d(e?n:[]),s(n)},300);(0,r.useEffect)(()=>()=>{m.cancel()},[m]);let f=()=>{h(!x)},p=(e,t)=>t?e.split(RegExp("(".concat(t,")"),"gi")).map((e,s)=>e.toLowerCase()===t.toLowerCase()?(0,n.jsx)("span",{className:"text-blue-600 font-semibold",children:e},s):e):e;return(0,n.jsx)("section",{className:"relative flex items-center justify-center bg-cover bg-center bg-no-repeat h-[20rem] z-50",style:{backgroundImage:"url('/images/background-image.jpg')"},children:(0,n.jsxs)("div",{className:"w-full max-w-2xl p-8 rounded-xl shadow-lg text-center backdrop-blur-md bg-white/30 border border-white/20 relative z-50",style:{boxShadow:"0 8px 32px rgba(0, 0, 0, 0.1)"},children:[(0,n.jsx)("h1",{className:"text-4xl font-bold text-blue-600 mb-4",children:"Find Your Perfect Business"}),(0,n.jsx)("p",{className:"text-lg text-gray-700 mb-6",children:"Search for businesses, services, technologies, and more."}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("i",{className:"bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-black"}),(0,n.jsx)("input",{type:"text",id:"search",className:"w-full py-3 pl-10 pr-4 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/60 backdrop-blur-md border border-gray-300",value:o,onChange:e=>{let t=e.target.value;a(t),l(t.length>0),m(t)},placeholder:"Search for businesses, keywords, technologies..."}),i&&(0,n.jsx)("i",{className:"bi bi-x absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer",onClick:()=>{a(""),l(!1),d([]),s(t)}}),u.length>0&&!x&&(0,n.jsxs)("div",{className:"absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-50 max-h-64 overflow-y-auto",children:[(0,n.jsx)("div",{className:"flex justify-end p-2",children:(0,n.jsx)("button",{className:"text-sm text-gray-600 hover:text-gray-900 cursor-pointer",onClick:f,children:(0,n.jsx)("i",{class:"bi bi-chevron-up"})})}),u.map((e,t)=>(0,n.jsxs)("div",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",children:[(0,n.jsx)("p",{children:p(e.name,o)}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:e.location})]},t))]}),x&&(0,n.jsx)("div",{className:"absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-50",children:(0,n.jsx)("div",{className:"flex justify-end p-2",children:(0,n.jsx)("button",{className:"text-sm text-gray-600 hover:text-gray-900 cursor-pointer",onClick:f,children:(0,n.jsx)("i",{class:"bi bi-chevron-down"})})})})]})]})})},u=s(1664),d=s.n(u),x=e=>{let{business:t}=e;return(0,n.jsxs)("button",{className:"card-floating p-3 bg-white rounded-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer h-48 w-full text-left z-0",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold text-blue-600 mb-2",children:t.name}),(0,n.jsx)("p",{className:"text-sm text-gray-700 mb-1",children:t.contactEmail}),(0,n.jsx)("p",{className:"text-sm text-gray-700 mb-1",children:t.contactPhone}),(0,n.jsx)("p",{className:"text-sm text-gray-700",children:t.location})]})};class h extends r.Component{static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,n.jsx)("h2",{children:"Data currently unavailable. Please try again later."}):this.props.children}constructor(e){super(e),this.state={hasError:!1}}}function m(){let[e,t]=(0,r.useState)([]),[s,o]=(0,r.useState)([]),[i,c]=(0,r.useState)(!0),[u,m]=(0,r.useState)(1);(0,r.useEffect)(()=>{p()},[]);let p=async()=>{try{let e=await fetch("http://localhost:3001/api/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n        {\n          businesses {\n            id\n            name\n            description\n            contactEmail\n            contactPhone\n            location\n            reviews {\n            rating}\n          }\n        }\n      "})}),s=(await e.json()).data.businesses.sort((e,t)=>e.name.localeCompare(t.name));t(s),o(s)}catch(e){console.error("Error fetching businesses:",e)}},g=12*u,b=(i?e:s).slice(g-12,g),j=Math.ceil((i?e.length:s.length)/12),v=e=>m(e);return(0,n.jsx)(h,{children:(0,n.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Explore Businesses - Find the Perfect Business for Your Needs"}),(0,n.jsx)("meta",{name:"description",content:"Search and explore a variety of businesses, services, technologies, and more. Find contact information, locations, and other details."}),(0,n.jsx)("meta",{name:"keywords",content:"business directory, search businesses, find businesses, business services"}),(0,n.jsx)("meta",{property:"og:title",content:"Explore Businesses - Find the Perfect Business for Your Needs"}),(0,n.jsx)("meta",{property:"og:description",content:"Search and explore a variety of businesses, services, technologies, and more."}),(0,n.jsx)("meta",{property:"og:image",content:"/images/og-image.jpg"}),(0,n.jsx)("meta",{property:"og:url",content:"https://yourwebsite.com"}),(0,n.jsx)("link",{rel:"canonical",href:"https://yourwebsite.com/home"})]}),(0,n.jsx)(l,{businesses:e,onSearchResults:e=>{let t=e.sort((e,t)=>e.name.localeCompare(t.name));o(t),c(0===t.length),m(1)}}),(0,n.jsx)("main",{id:"default-content",className:"container mx-auto mt-10 px-4 ".concat(i?"block":"hidden"),children:(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-center text-3xl font-semibold mb-8",children:"Explore Businesses"}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:b.map(e=>(0,n.jsx)(d(),{href:"/business/".concat(e.id),children:(0,n.jsx)(x,{business:e})},e.id))}),(0,n.jsx)(f,{totalPages:j,currentPage:u,paginate:v})]})}),(0,n.jsx)("main",{id:"search-results",className:"container mx-auto mt-10 px-4 ".concat(i?"hidden":"block"),children:(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-center text-3xl font-semibold mb-8",children:"Search Results"}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:b.map(e=>(0,n.jsx)(d(),{className:"custom-link",href:"/business/".concat(e.id),children:(0,n.jsx)(x,{business:e})},e.id))}),(0,n.jsx)(f,{totalPages:j,currentPage:u,paginate:v})]})})]})})}let f=e=>{let{totalPages:t,currentPage:s,paginate:r}=e,o=[];for(let e=1;e<=t;e++)o.push(e);return(0,n.jsx)("div",{className:"flex justify-center mt-6",children:o.map(e=>(0,n.jsx)("button",{onClick:()=>r(e),className:"mx-1 px-3 py-1 rounded ".concat(e===s?"bg-blue-600 text-white":"bg-white text-blue-600"),children:e},e))})}},9008:function(e,t,s){e.exports=s(7219)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5732)}),_N_E=e.O()}]);