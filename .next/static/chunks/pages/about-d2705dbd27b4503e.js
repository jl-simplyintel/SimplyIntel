(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(1371)}])},1371:function(e,s,a){"use strict";a.r(s);var l=a(5893),r=a(7294);s.default=()=>{let[e,s]=(0,r.useState)({name:"",email:"",phone:"",message:""}),[a,n]=(0,r.useState)(""),[t,o]=(0,r.useState)(0),[i,c]=(0,r.useState)(0),[m,d]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[b,x]=(0,r.useState)(!1);(0,r.useEffect)(()=>{g()},[]);let g=()=>{o(Math.floor(10*Math.random())+1),c(Math.floor(10*Math.random())+1)},f=e=>{let{name:a,value:l}=e.target;s(e=>({...e,[a]:l}))},p=async a=>{a.preventDefault(),n(""),h(""),x(!0);let l=t+i;if(parseInt(m)!==l){h("Incorrect answer. Please try again."),x(!1);return}try{let a=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),l=await a.json();a.ok?(n("Message sent successfully!"),s({name:"",email:"",phone:"",message:""}),d(""),g()):n(l.error||"Something went wrong.")}catch(e){n("Error sending message. Please try again later."),console.error("Fetch error:",e)}finally{x(!1)}};return(0,l.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[(0,l.jsx)("header",{className:"bg-white text-blue-600 text-center py-8",children:(0,l.jsx)("h1",{className:"text-4xl font-bold",children:"About Us"})}),(0,l.jsxs)("main",{className:"container mx-auto mt-10 px-4",children:[(0,l.jsxs)("section",{className:"mb-8",children:[(0,l.jsx)("h2",{className:"text-3xl font-semibold mb-4",children:"Company Overview"}),(0,l.jsx)("p",{className:"text-lg leading-relaxed",children:"SimplyGroup is your trusted partner for discovering and connecting with local businesses. We are committed to providing up-to-date and reliable business information to help you make informed decisions."})]}),(0,l.jsxs)("section",{className:"mb-8",children:[(0,l.jsx)("h2",{className:"text-3xl font-semibold mb-4",children:"Our Mission & Vision"}),(0,l.jsx)("p",{className:"text-lg leading-relaxed",children:"Our mission is to empower local businesses through accessibility and support, while our vision is to create a thriving community of engaged customers and entrepreneurs."})]}),(0,l.jsxs)("section",{className:"mb-8",children:[(0,l.jsx)("h2",{className:"text-3xl font-semibold mb-4",children:"Meet Our Team"}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"p-4 border rounded-lg shadow-lg",children:[(0,l.jsx)("h3",{className:"text-2xl font-semibold",children:"John Doe"}),(0,l.jsx)("p",{children:"CEO - John leads the company with a passion for innovation and growth."})]}),(0,l.jsxs)("div",{className:"p-4 border rounded-lg shadow-lg",children:[(0,l.jsx)("h3",{className:"text-2xl font-semibold",children:"Jane Smith"}),(0,l.jsx)("p",{children:"COO - Jane ensures our operations run smoothly and efficiently."})]})]})]}),(0,l.jsxs)("section",{className:"mb-8",children:[(0,l.jsx)("h2",{className:"text-3xl font-semibold mb-4",children:"Why Choose Us?"}),(0,l.jsxs)("ul",{className:"list-disc list-inside space-y-2 text-lg leading-relaxed",children:[(0,l.jsx)("li",{children:"Local expertise and support"}),(0,l.jsx)("li",{children:"Commitment to customer satisfaction"}),(0,l.jsx)("li",{children:"Wide range of services tailored to your needs"})]})]}),(0,l.jsxs)("section",{className:"mb-8",children:[(0,l.jsx)("h2",{className:"text-3xl font-semibold mb-4",children:"Contact Us"}),(0,l.jsx)("p",{className:"mb-4",children:"If you have any questions or inquiries, feel free to contact us using the form below:"}),a&&(0,l.jsx)("p",{className:"text-green-600 mb-4",children:a}),u&&(0,l.jsx)("p",{className:"text-red-600 mb-4",children:u}),(0,l.jsxs)("form",{id:"contact-form",className:"bg-white p-6 rounded-lg shadow-lg",onSubmit:p,noValidate:!0,children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Your Name"}),(0,l.jsx)("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",id:"name",name:"name",placeholder:"Enter your name",value:e.name,onChange:f,required:!0,"aria-label":"Your Name"})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Your Email"}),(0,l.jsx)("input",{type:"email",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",id:"email",name:"email",placeholder:"Enter your email",value:e.email,onChange:f,required:!0,"aria-label":"Your Email"})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Your Phone"}),(0,l.jsx)("input",{type:"tel",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",id:"phone",name:"phone",placeholder:"Enter your phone number",value:e.phone,onChange:f,"aria-label":"Your Phone"})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Your Message"}),(0,l.jsx)("textarea",{className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",id:"message",name:"message",rows:"5",placeholder:"Type your message here",value:e.message,onChange:f,required:!0,"aria-label":"Your Message"})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsxs)("label",{htmlFor:"verification",className:"block text-sm font-medium text-gray-700",children:["What is ",t," + ",i,"?"]}),(0,l.jsx)("input",{type:"text",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",id:"verification",placeholder:"Enter your answer",value:m,onChange:e=>d(e.target.value),required:!0,"aria-label":"Math Problem Answer"})]}),(0,l.jsx)("button",{type:"submit",className:"w-full py-2 rounded-md ".concat(b?"bg-gray-400":"bg-blue-600 hover:bg-blue-700"," text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"),disabled:b,children:b?"Sending...":"Send Message"})]})]})]})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=512)}),_N_E=e.O()}]);