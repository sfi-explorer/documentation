/*! For license information please see 2ecf58b8.84bad305.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[6049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),o=r(640);const l={description:"View and Compare flexipages",keywords:["flexipage","salesforce","compare"]},i="Flexipage Explorer",c={unversionedId:"Flexipage/index",id:"Flexipage/index",title:"Flexipage Explorer",description:"View and Compare flexipages",source:"@site/docs/Flexipage/index.md",sourceDirName:"Flexipage",slug:"/Flexipage/",permalink:"/documentation/docs/Flexipage/",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/Flexipage/index.md",tags:[],version:"current",frontMatter:{description:"View and Compare flexipages",keywords:["flexipage","salesforce","compare"]},sidebar:"tutorialSidebar",previous:{title:"Apex",permalink:"/documentation/docs/Code/Apex"},next:{title:"Query Builder",permalink:"/documentation/docs/Query/"}},p={},s=[],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flexipage-explorer"},"Flexipage Explorer"),(0,a.kt)("p",null,"SF Explorer let you inspect and compare the content of your flexipages to extract information such as Visibility rules or used custom components"),(0,a.kt)(o.Z,{id:"z2jNAPK4d5I",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"View and compare flexipages",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}m.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],l=n.useState(!1),i=l[0],c=l[1],p=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,m=e.poster||"hqdefault",d="&"+e.params||0,f=e.muted?"&mute=1":"",y=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",h=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+s+"/"+m+"."+g:"https://i.ytimg.com/"+b+"/"+p+"/"+m+"."+g),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var x=e.playlist?w+"/embed/videoseries?autoplay=1"+f+"&list="+p+d:w+"/embed/"+p+"?autoplay=1&state=1"+f+d,v=e.activatedClass||"lyt-activated",O=e.adNetwork||!1,k=e.aspectHeight||9,E=e.aspectWidth||16,C=e.iframeClass||"",j=e.playerClass||"lty-playbtn",F=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},T=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&P()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:T,href:h,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),O&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||c(!0)},className:F+" "+(i?v:""),"data-title":u,style:a({backgroundImage:"url("+h+")"},{"--aspect-ratio":k/E*100+"%"})},n.createElement("button",{type:"button",className:j,"aria-label":y+" "+u}),i&&n.createElement("iframe",{className:C,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:x})))}}}]);