"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[4685],{65276:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(37253);const c=function(e){return a.createElement(r.yB,e)}},14197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),r=n(91262);const c=e=>a.createElement(r.Z,{fallback:a.createElement("div",null,"Loading...")},(()=>{const t=n(65276).Z;return a.createElement(t,e)}));var s=n(90558);const o=async e=>{const t=await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e),credentials:"same-origin"});return t.json().catch((()=>t.text()))};function l(e){let{}=e;const[t,n]=(0,a.useState)("select Id, Name, (select Name from Opportunities) from Account where Name like '%a' order by CreationDate limit 3"),[r,l]=(0,a.useState)(void 0);return(0,a.useEffect)((()=>{try{l((0,s.Z)(t))}catch(e){console.error(e),l(e.message||JSON.stringify(e))}}),[t]),a.createElement(a.Fragment,null,a.createElement("textarea",{name:"postContent",value:t,onChange:e=>n(e.target.value),style:{width:"100%"}}),a.createElement("div",{style:{height:"700px"}},a.createElement(c,{query:r,fetcher:o})))}}}]);