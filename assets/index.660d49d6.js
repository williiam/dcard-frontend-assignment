var L=Object.defineProperty,j=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var _=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&_(e,r,t[r]);if(S)for(var r of S(t))I.call(t,r)&&_(e,r,t[r]);return e},E=(e,t)=>j(e,k(t));import{r as i,a as R,h,j as p,L as w,u as A,B as P,R as $,b as v,N as O,c as H,d as z}from"./vendor.e6bbde96.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}};U();let Q;function K(e,t){const[r,u]=i.exports.useState(!0),[n,l]=i.exports.useState(!1),[a,o]=i.exports.useState([]),[d,f]=i.exports.useState(!1),y=i.exports.useRef(new AbortController);let N=async()=>{try{console.log("query :",e),Q=new AbortController;const m=await R.get(`https://api.github.com/users/${e.userName}/repos`,{params:{page:t,per_page:10},signal:y.current.signal});o(x=>[...new Set([...x,...m.data])]),f(m.data.length>0),u(!1)}catch(m){console.log("err :",m),y.current.abort(),u(!1),l(!0)}};return i.exports.useEffect(()=>{o([]),l(!1)},[e]),i.exports.useEffect(()=>(u(!0),l(!1),N(),()=>{}),[e,t]),{loading:r,error:n,repos:a,hasMore:d}}function G(e){const[t,r]=i.exports.useState({repoSearchTerm:"",orderBy:"LAST_PUSH_TIME_DESC"}),u=l=>{r(E(T({},t),{[l.target.name]:l.target.value}))},n=i.exports.useCallback(l=>(t.orderBy==="STAR"?l=l.sort((a,o)=>a.stargazers_count-o.stargazers_count):t.orderBy==="STAR_DESC"?l=l.sort((a,o)=>o.stargazers_count-a.stargazers_count):t.orderBy==="LAST_PUSH_TIME"?l=l.sort((a,o)=>{let d=h(a.pushed_at),f=h(o.pushed_at);return d.diff(f)}):t.orderBy==="LAST_PUSH_TIME_DESC"&&(l=l.sort((a,o)=>{let d=h(a.pushed_at);return h(o.pushed_at).diff(d)})),t.repoSearchTerm!==""&&(l=l.filter(a=>a.name.toLowerCase().includes(t.repoSearchTerm.toLowerCase()))),l),[t]);return{filter:t,handleFilterChange:u,getFilterRepos:n}}const s=p.exports.jsx,c=p.exports.jsxs,J=p.exports.Fragment,V=({username:e})=>s("div",{className:"flex flex-col items-center w-full space-y-4 ",children:c(w,{to:`/users/${e}/repos`,className:"flex flex-col items-center mt-4 mb-4",children:[s("h1",{className:"text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400 underline",children:e}),s("span",{className:"text-2xl ml-0 pl-0 l-0 text-amber-400",children:"\u7684repos"})]})}),W=({filter:e,handleFilterChange:t})=>{const r=[{name:"orderBy",value:"DEFAULT",display:"\u9810\u8A2D"},{name:"orderBy",value:"STAR",display:"\u661F\u661F\u6578\u5C11\u5230\u591A"},{name:"orderBy",value:"STAR_DESC",display:"\u661F\u661F\u6578\u591A\u5230\u5C11"},{name:"orderBy",value:"LAST_PUSH_TIME",display:"\u4E0A\u6B21\u63A8\u9001\u6642\u9593(\u820A\u5230\u65B0)"},{name:"orderBy",value:"LAST_PUSH_TIME_DESC",display:"\u4E0A\u6B21\u63A8\u9001\u6642\u9593(\u65B0\u5230\u820A)"}];return s("div",{className:"flex flex-col items-center w-full space-y-4 ",children:c("div",{className:"flex flex-row justify-between w-full  max-w-2xl",children:[s("div",{className:"",children:c("form",{className:"w-full max-w-sm",children:[s("label",{className:"font-sans subpixel-antialiased hover:font-bold text-stone-100 focus:outline-none focus:shadow-outline",children:"\u641C\u5C0Brepo"}),s("div",{className:"flex items-center border-b border-teal-500 py-2",children:s("input",{className:"appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",name:"repoSearchTerm",value:e.repoSearchTerm,onChange:t,placeholder:"repo name","aria-label":"Full name"})})]})}),c("div",{className:"",children:[s("label",{className:"font-sans subpixel-antialiased hover:font-bold text-stone-100 focus:outline-none focus:shadow-outline",children:"\u6392\u5E8F\u65B9\u5F0F"}),s("select",{className:" form-select block max-w-48 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out ml-4 mt-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-label":"Default select example",name:"orderBy",value:e.orderBy,onChange:t,children:r.map(u=>s("option",{name:u.name,value:u.value,children:u.display}))})]})]})})};function B({repo:e,userName:t}){return c("div",{className:"flex flex-row w-full h-24 justify-start space-y-8 px-4 py-2 rounded-md border-2 border-inherit-500 shadow-lg bg-amber-300 text-teal-900 rounded-xl border-black border-4",children:[c("div",{className:"basis-3/4 flex flex-col justify-between items-center",children:[s("div",{className:"flex flex-row justify-start items-center w-full",children:c("div",{className:"break-all",children:[s(w,{to:`/users/${t}/repos/${e==null?void 0:e.name}`,className:"text-2xl font-sans subpixel-antialiased font-normal hover:font-bold underline",children:e==null?void 0:e.name}),s("span",{})]})}),s("div",{className:"flex flex-row justify-between w-full",children:c("div",{className:"flex flex-row justify-start w-full",children:[s("div",{className:" break-all rounded-md border-2 border-slate-500 px-1 py-0",children:s("h2",{className:"font-sans subpixel-antialiased ",children:e==null?void 0:e.visibility})}),s("h2",{className:"ml-3",children:e==null?void 0:e.language}),c("h2",{className:"ml-3",children:["\u2B50 ",e==null?void 0:e.stargazers_count]})]})})]}),s("div",{className:"basis-1/4 flex flex-col "}),s("div",{className:"basis-1/4 flex flex-col ",children:s("div",{className:"flex flex-row justify-between items-center w-full",children:s("div",{className:"",children:s("h2",{children:h(e==null?void 0:e.pushed_at).startOf("day").fromNow()})})})})]})}function X(){const t=A().username,[r,u]=i.exports.useState({userName:t}),[n,l]=i.exports.useState(1),{repos:a,hasMore:o,loading:d,error:f}=K(r,n),{filter:y,handleFilterChange:N,getFilterRepos:m}=G();console.log("{ repos, hasMore, loading, error }",{repos:a,hasMore:o,loading:d,error:f});const x=i.exports.useRef(),C=i.exports.useCallback(b=>{d||(x.current&&x.current.disconnect(),x.current=new IntersectionObserver(g=>{g[0].isIntersecting&&o&&l(F=>F+1)}),b&&x.current.observe(b))},[d,o]);return f?s("div",{className:"container mx-auto",children:s("div",{className:"flex flex-col mt-8 items-center w-full space-y-4 ",children:s("h1",{className:"text-4xl font-sans  subpixel-antialiased font-normal font-bold text-red-400",children:"Error"})})}):s("div",{className:"container mx-auto",children:c("div",{className:"flex flex-col items-center w-full space-y-4 ",children:[s(V,{username:t}),s(W,{filter:y,handleFilterChange:N}),s("div",{className:"self-center flex flex-col justify-between space-y-3 w-full max-w-2xl",children:m(a).map((b,g)=>a.length===g+1?s("div",{ref:C,children:s(B,{repo:b,userName:r.userName})},g):s("div",{children:s(B,{repo:b,userName:r.userName})},g))}),s("div",{children:d&&s("h1",{className:"text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400",children:"Loading..."})})]})})}function Y(e){const[t,r]=i.exports.useState(!0),[u,n]=i.exports.useState(!1),[l,a]=i.exports.useState(),o=i.exports.useCallback(async()=>{try{await r(!0),await n(!1);const d=await e();a(d),r(!1)}catch(d){r(!1),n(d)}},[e]);return i.exports.useEffect(()=>{o(e)},[e]),{loading:t,error:u,data:l}}function Z({repoData:e}){return e===void 0?s(J,{}):c("div",{className:"flex flex-col w-full max-w-xl mt-8 mx-auto items-center space-y-4 bg-amber-400 rounded-xl border-black border-4",children:[s("div",{className:"flex flex-row justify-center w-full mt-4",children:s("a",{href:e==null?void 0:e.html_url,target:"_blank",children:s("h2",{className:"text-2xl font-sans subpixel-antialiased font-medium tracking-wide leading-9  underline text-blue-800",children:e==null?void 0:e.full_name})})}),s("div",{className:"flex flex-row justify-around  w-full",children:s("div",{className:"text-start mx-10",children:e==null?void 0:e.description})}),c("div",{className:"flex flex-row justify-around w-full",children:[c("div",{className:"flex flex-row justify-around w-full",children:[s("a",{href:e==null?void 0:e.html_url,target:"_blank",children:s("h2",{className:"text-xl font-sans subpixel-antialiased font-normal hover:font-bold",children:e==null?void 0:e.visibility})}),c("h2",{className:"ml-3 text-xl",children:[" ",`${(e==null?void 0:e.language)!==null&&(e==null?void 0:e.language)}`]}),c("h2",{className:"ml-3 text-xl",children:[" ",`\u2B50${e==null?void 0:e.stargazers_count}`]}),c("h2",{className:"ml-3 text-xl",children:[" ",h(e==null?void 0:e.pushed_at).startOf("day").fromNow()]})]}),s("div",{})]}),s("br",{})]})}function q(){const e=A(),t=e.username,r=e.reponame,u=i.exports.useCallback(async()=>(await R.get(`https://api.github.com/repos/${t}/${r}`)).data,[]),{loading:n,error:l,data:a}=Y(u),o=d=>c("div",{className:"container mx-auto",children:[s("header",{children:s(w,{to:"/",className:"flex flex-col items-center mt-4 mb-4 ",children:s("h1",{className:"text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400",children:t})})}),s("div",{children:s("div",{className:"flex flex-col w-full max-w-xl mx-auto items-center space-y-4",children:d})})]});return o(n&&!a?s("h1",{className:"text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400",children:"Loading..."}):n?s("h1",{className:"text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400",children:"\u88DD\u8F09\u8CC7\u6599\u4E2D..."}):l?s("h1",{className:"text-4xl font-sans subpixel-antialiased font-normal font-bold text-red-400",children:"Error"}):s(Z,{repoData:a}))}function D(){return s(P,{children:s(i.exports.Fragment,{children:c($,{children:[s(v,{path:"/",element:s(O,{replace:!0,to:"/users/facebook/repos"})}),s(v,{path:"/users/:username/repos",element:s(X,{})}),s(v,{path:"/users/:username/repos/:reponame",element:s(q,{})})]})})})}H.render(s(z.StrictMode,{children:s(D,{})}),document.getElementById("root"));
