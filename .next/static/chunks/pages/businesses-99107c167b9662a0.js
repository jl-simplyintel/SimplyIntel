(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{5380:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/businesses",function(){return r(5553)}])},5553:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(7294),i=r(1664),a=r.n(i),l=r(1163),o=r(433);t.default=()=>{let[e,t]=(0,s.useState)([]),[r,i]=(0,s.useState)(""),c=(0,l.useRouter)();(0,s.useEffect)(()=>{u()},[]);let u=async()=>{try{let e=await fetch("https://lightslategray-mink-295930.hostingersite.com/api/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n        {\n          businesses {\n            id\n            name\n            contactEmail\n            contactPhone\n            location\n            website\n            description\n            reviews {\n              rating\n            }\n          }\n        }\n      "})}),r=await e.json();t(r.data.businesses)}catch(e){console.error("Error fetching businesses:",e)}},d=e=>Array.from({length:5},(t,r)=>{let s=e-r;return s>=1?(0,n.jsx)("i",{className:"bi bi-star-fill text-yellow-500"},r):s>=.5?(0,n.jsx)("i",{className:"bi bi-star-half text-yellow-500"},r):(0,n.jsx)("i",{className:"bi bi-star text-yellow-500"},r)}),m=e.filter(e=>e.name.toLowerCase().includes(r.toLowerCase()));return(0,n.jsxs)("div",{className:"container mx-auto p-6",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-4 text-center text-blue-600",children:"All Businesses"}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("input",{type:"text",placeholder:"Search businesses...",value:r,onChange:e=>i(e.target.value),className:"w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"})}),(0,n.jsxs)("div",{className:"space-y-4",children:[" ",m.map(e=>{let t=e.reviews.length,r=t>0?(e.reviews.reduce((e,t)=>e+Number(t.rating),0)/t).toFixed(1):0;return(0,n.jsxs)("div",{className:"flex items-stretch justify-between p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300",children:[(0,n.jsx)(a(),{href:"/business/".concat(e.id),className:"w-1/3 pr-6 border-r border-gray-300 flex-1 hover:cursor-pointer",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-blue-600 mb-2",children:e.name}),(0,n.jsxs)("p",{className:"text-gray-600 mb-1",children:[(0,n.jsx)(o.Imn,{className:"inline mr-2"})," ",e.contactEmail]}),(0,n.jsxs)("p",{className:"text-gray-600 mb-1",children:[(0,n.jsx)(o.tUt,{className:"inline mr-2"})," ",e.contactPhone]}),(0,n.jsxs)("p",{className:"text-gray-600 mb-1",children:[(0,n.jsx)(o.i63,{className:"inline mr-2"})," ",e.location]}),e.website&&(0,n.jsxs)("p",{className:"text-blue-500",children:[(0,n.jsx)(o.RsK,{className:"inline mr-2"}),(0,n.jsx)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"Visit Website"})]})]})}),(0,n.jsx)("div",{className:"w-1/3 px-6 border-r border-gray-300 flex-1",children:(0,n.jsx)("p",{className:"text-gray-700 h-full",children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description})}),(0,n.jsxs)("div",{className:"w-1/3 flex flex-col items-center pl-6 flex-1 justify-center",children:[(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[d(r),(0,n.jsxs)("span",{className:"ml-2 text-2xl font-bold text-blue-600",children:[r,"/5"]})]}),t>0?(0,n.jsxs)(a(),{href:"/review/".concat(e.id),className:"text-gray-600",children:[(0,n.jsx)("i",{className:"bi bi-chat-left-dots mr-1 text-blue-600"}),"(",t," Review",1!==t?"s":"",")"]}):(0,n.jsx)("button",{className:"mt-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-300",onClick:t=>{t.preventDefault(),c.push("/review/".concat(e.id))},children:"Rate this Business"})]})]},e.id)})]})]})}},1163:function(e,t,r){e.exports=r(6036)},1150:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(s),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:i,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,a),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[130,888,774,179],function(){return e(e.s=5380)}),_N_E=e.O()}]);