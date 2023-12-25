import{j as e,P as w,r as x}from"./index-x8uYTjTH.js";function y({children:s,isModalOpen:t,modalToggleHandler:r}){return e.jsx(e.Fragment,{children:e.jsx("div",{tabIndex:"-1","aria-hidden":t?"false":"true",className:`backdrop-blur-md bg-black/30 overflow-y-auto overflow-x-hidden fixed inset-0 justify-center items-center w-full z-[999] max-h-full grid place-items-center transition-all duration-500  ${t?"opacity-100":"opacity-0"}`,children:e.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:e.jsx("div",{className:`relative bg-white/30 backdrop-blur-md transition-all duration-500 rounded-xl ${t?"translate-y-0":"translate-y-[-30%]"}`,children:s})})})})}function v({modalTitle:s,modalToggleHandler:t}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-slate-100",children:s}),e.jsxs("button",{type:"button",role:"button",onClick:r=>t(r),className:"rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center bg-red-500","data-modal-hide":"default-modal",children:[e.jsx("i",{className:"bx bx-x text-lg text-slate-100"}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})})}function N({children:s}){return e.jsx("div",{className:"p-4 md:p-5 space-y-4 min-w-[300px]",children:s})}const u={_origin:"https://api.emailjs.com"},_=(s,t="https://api.emailjs.com")=>{u._userID=s,u._origin=t},h=(s,t,r)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class f{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const b=(s,t,r={})=>new Promise((i,n)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:a})=>{const d=new f(a);d.status===200||d.text==="OK"?i(d):n(d)}),l.addEventListener("error",({target:a})=>{n(new f(a))}),l.open("POST",u._origin+s,!0),Object.keys(r).forEach(a=>{l.setRequestHeader(a,r[a])}),l.send(t)}),E=(s,t,r,i)=>{const n=i||u._userID;return h(n,s,t),b("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:n,service_id:s,template_id:t,template_params:r}),{"Content-type":"application/json"})},F=s=>{let t;if(typeof s=="string"?t=document.querySelector(s):t=s,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},k=(s,t,r,i)=>{const n=i||u._userID,l=F(r);h(n,s,t);const a=new FormData(l);return a.append("lib_version","3.11.0"),a.append("service_id",s),a.append("template_id",t),a.append("user_id",n),b("/api/v1.0/email/send-form",a)},q={init:_,send:E,sendForm:k};function C(){return e.jsx(e.Fragment,{children:e.jsx(w,{loop:!0,autoplay:!0,className:"w-[250px] h-[250px]",src:"https://lottie.host/2ed9382c-cd22-434a-bdcd-8c90767d385f/M9HQ7bOpli.json"})})}function S(){const[s,t]=x.useState({name:null,email:null,message:null}),[r,i]=x.useState(!1),[n,l]=x.useState({isError:!1,message:null}),a=x.useRef();async function d(c){try{const o=(await q.sendForm("service_zkuikgk","template_zg2t72t",a.current,"PXCqW36lPmZ55oohH")).text;if(o==="OK")c(!0,o);else throw new Error(`failed to send email: ${o}`)}catch(m){c(!1,m)}}function j(c){c.preventDefault(),i(!0),d((m,o)=>{m?(i(!1),l({isError:!1,message:null}),alert("email sent")):(l({isError:!0,message:"failed to send message, check console for details"}),i(!1),console.error(o))})}function p(c){const{name:m,value:o}=c.target;t(g=>({...g,[m]:o}))}return e.jsxs(e.Fragment,{children:[n.isError&&e.jsx("div",{onClick:()=>l({isError:!1}),className:"cursor-pointer text-center bg-red-500 text-white py-2 rounded-md text-md",children:n.message}),r?e.jsx("div",{className:"w-[200px] h-200px",children:e.jsx(C,{})}):e.jsxs("form",{ref:a,action:"flex flex-col",onSubmit:j,className:"w-[calc(100vw-100px)] sm:max-w-[300px] md:max-w-[450px] xl:max-w-[600 text-blackpx]",children:[e.jsx("input",{type:"hidden",name:"to_name",value:"rifki"}),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{className:"capitalize relative after:content-['*'] after:text-red-400 text-slate-100",htmlFor:"name",children:"name:"}),e.jsx("input",{type:"text",name:"user_name",id:"name",required:!0,autoFocus:!0,onChange:p,className:"px-3 py-2 rounded-md bg-white/40 placeholder:text-slate-600 text-black",placeholder:"Your name..."})]}),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{className:"relative after:content-['*'] after:text-red-400 text-slate-100",htmlFor:"email",children:"E-mail:"}),e.jsx("input",{type:"text",name:"user_email",id:"email",required:!0,onChange:p,className:"px-3 py-2 rounded-md bg-white/40 placeholder:text-slate-600 text-black",placeholder:"Your E-mail..."})]}),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{className:"capitalize relative after:content-['*'] after:text-red-400 text-slate-100",htmlFor:"email",children:"message:"}),e.jsx("textarea",{name:"message",id:"message",cols:"30",required:!0,onChange:p,className:"px-3 py-2 rounded-md bg-white/40 placeholder:text-slate-600 text-black",placeholder:"Your message...",rows:"10"})]}),e.jsx("div",{className:"flex",children:e.jsx("button",{role:"button",className:"text-slate-100 bg-white/50 py-3  capitalize font-ibmsans w-full  rounded-md",type:"submit",children:"send"})})]})]})}function M({isModalOpen:s,modalToggleHandler:t}){return e.jsx(e.Fragment,{children:e.jsxs(y,{isModalOpen:s,modalToggleHandler:t,children:[e.jsx(v,{modalTitle:"contact me",modalToggleHandler:t}),e.jsx(N,{children:e.jsx(S,{})})]})})}export{M as default};
