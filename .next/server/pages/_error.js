"use strict";(()=>{var e={};e.id=820,e.ids=[820,660],e.modules={7909:(e,t,r)=>{r.r(t),r.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>g,getStaticPaths:()=>p,getStaticProps:()=>c,reportWebVitals:()=>f,routeModule:()=>_,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>x});var o=r(7093),s=r(5244),i=r(1323),l=r(1682),a=r.n(l),n=r(2532),d=r(8529);let u=(0,i.l)(d,"default"),c=(0,i.l)(d,"getStaticProps"),p=(0,i.l)(d,"getStaticPaths"),g=(0,i.l)(d,"getServerSideProps"),h=(0,i.l)(d,"config"),f=(0,i.l)(d,"reportWebVitals"),x=(0,i.l)(d,"unstable_getStaticProps"),b=(0,i.l)(d,"unstable_getStaticPaths"),m=(0,i.l)(d,"unstable_getStaticParams"),S=(0,i.l)(d,"unstable_getServerProps"),P=(0,i.l)(d,"unstable_getServerSideProps"),_=new o.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:n.default,Document:a()},userland:d})},8529:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let o=r(167),s=r(997),i=o._(r(6689)),l=o._(r(494)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function n(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:d.error,children:[(0,s.jsx)(l.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:d.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,s.jsx)("div",{style:d.wrap,children:(0,s.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=n,u.origGetInitialProps=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1649:e=>{e.exports=require("next-auth/react")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[13,682,426,133],()=>r(7909));module.exports=o})();