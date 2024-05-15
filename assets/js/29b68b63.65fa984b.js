/*! For license information please see 29b68b63.65fa984b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[303],{68414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(74848),o=a(28453),r=a(13852);const l={slug:"release30",title:"Release 3.0.0",authors:["ndespres"],tags:["Salesforce","Best Practices","Devops"]},s="Release 3.0.0",c={permalink:"/blog/release30",editUrl:"https://github.com/sf-explorer/documentation/tree/master/blog/2024-01-29-release3.0.0/index.md",source:"@site/blog/2024-01-29-release3.0.0/index.md",title:"Release 3.0.0",description:"Release 3.0.0 is out this week and the extension now have more than 300 users. Thank you!",date:"2024-01-29T00:00:00.000Z",tags:[{label:"Salesforce",permalink:"/blog/tags/salesforce"},{label:"Best Practices",permalink:"/blog/tags/best-practices"},{label:"Devops",permalink:"/blog/tags/devops"}],readingTime:.37,hasTruncateMarker:!1,authors:[{name:"Nicolas Despres",title:"Senior Program Architect at Salesforce",url:"https://github.com/nicolas-despres",imageURL:"https://github.com/nicolas-despres.png",key:"ndespres"}],frontMatter:{slug:"release30",title:"Release 3.0.0",authors:["ndespres"],tags:["Salesforce","Best Practices","Devops"]},unlisted:!1,prevItem:{title:"Release 4.0.0",permalink:"/blog/release40"},nextItem:{title:"Release 2.0.0",permalink:"/blog/release20"}},i={authorsImageUrls:[void 0]},p=[{value:"What and why",id:"what-and-why",level:2},{value:"Demo",id:"demo",level:2}];function u(e){const t={admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Release 3.0.0 is out this week and the extension now have more than ",(0,n.jsx)(t.strong,{children:"300 users"}),". Thank you!"]})}),"\n",(0,n.jsx)(t.h2,{id:"what-and-why",children:"What and why"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SF Explorer 3.0.0"})," is out with a focus on:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A brand new approach to be able to define best practices on your metadata"}),"\n",(0,n.jsx)(t.li,{children:"New capabilities to edit your data/metadata directly from SF Explorer"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,n.jsx)(r.A,{id:"RqaSZpJ4kJo",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Release 3.0",poster:"maxresdefault",webp:!0})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},13852:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(96540),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};var r=n.forwardRef((function(e,t){var a=n.useState(!1),r=a[0],l=a[1],s=n.useState(!1),c=s[0],i=s[1],p=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",h="&".concat(e.params)||0,f=e.muted?"&mute=1":"",g=e.announce||"Watch",b=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(w,"/").concat(u,"/").concat(m,".").concat(b):"https://i.ytimg.com/".concat(w,"/").concat(p,"/").concat(m,".").concat(b)),k=e.noCookie;k=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?"".concat(k,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(p).concat(h):"".concat(k,"/embed/").concat(p,"?autoplay=1&state=1").concat(f).concat(h),x=e.activatedClass||"lyt-activated",j=e.adNetwork||!1,E=e.aspectHeight||9,R=e.aspectWidth||16,C=e.iframeClass||"",S=e.playerClass||"lty-playbtn",I=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},P=e.rel?"prefetch":"preload",D=e.containerElement||"article";return n.useEffect((function(){c&&F()}),[c]),n.createElement(n.Fragment,null,n.createElement("link",{rel:P,href:y,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:k}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),j&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement(D,{onPointerOver:function(){r||l(!0)},onClick:function(){c||i(!0)},className:"".concat(I," ").concat(c?x:""),"data-title":d,style:o({backgroundImage:"url(".concat(y,")")},{"--aspect-ratio":"".concat(E/R*100,"%")})},n.createElement("button",{type:"button",className:S,"aria-label":"".concat(g," ").concat(d)}),c&&n.createElement("iframe",{ref:t,className:C,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}))},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var n=a(96540);const o={},r=n.createContext(o);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);