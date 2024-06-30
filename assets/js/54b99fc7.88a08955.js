"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64822],{53071:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var i=s(11527),o=s(17279),r=s(17601);const n={sidebar_label:"Introduction"},a="Introduction",c={id:"quick-starts/README",title:"Introduction",description:"Welcome to Logto quick starts. This documentation contains useful guides for integrating Logto into your application.",source:"@site/docs/quick-starts/README.md",sourceDirName:"quick-starts",slug:"/quick-starts/",permalink:"/quick-starts/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/quick-starts/README.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction"},sidebar:"quickStartSidebar",next:{title:"Android (Kotlin / Java)",permalink:"/quick-starts/android"}},l={},d=[];function u(t){const e={h1:"h1",hr:"hr",p:"p",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(e.p,{children:"Welcome to Logto quick starts. This documentation contains useful guides for integrating Logto into your application."}),"\n",(0,i.jsx)(e.p,{children:"Most of guides uses Logto official SDKs. Please don't hesitate to contact us if you have any questions."}),"\n",(0,i.jsx)(e.hr,{}),"\n","\n",(0,i.jsx)(r.Z,{path:"quick-starts"})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},17601:(t,e,s)=>{s.d(e,{Z:()=>m});var i=s(19348);const o=s.p+"assets/images/fallback-66ddf4fb49bcc69c4cd03185821c39e1.png",r="gallery_quUO",n="categoryLabel_e2Fz",a="list_pn7N",c="link_nE2A",l="logo_cMIT",d="title_bbn1",u="subtitle_ppeR";var p=s(11527);const h=t=>t?String(t):void 0,m=t=>{let{path:e}=t;const s=`/${e}/`,m=(0,i.V)();if(!m)return null;const g=m.items.reduce(((t,e)=>{if("link"!==e.type)return t;if(e.unlisted||e.href===s)return t;if("#"===e.href)return[...t,{label:e.label+(e.customProps?.additionalLabel?` ${String(e.customProps.additionalLabel)}`:""),description:h(e.customProps?.description),items:[]}];if(!e.href.startsWith(s))return t;const i=t.at(-1);return i?[...t.slice(0,-1),{...i,items:[...i.items,{label:e.label,href:e.href,logoFilename:h(e.customProps?.logoFilename),description:h(e.customProps?.description)}]}]:t}),[]);return(0,p.jsx)("section",{className:r,children:g.map((t=>(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:n,children:t.label}),(0,p.jsx)("section",{className:a,children:t.items.map((t=>(0,p.jsxs)("a",{href:t.href,className:c,title:t.description,children:[(0,p.jsx)("img",{className:l,alt:"Logo",src:`/img/logo/${t.logoFilename||`${t.href.slice(s.length)}.svg`}`,onError:t=>{let{currentTarget:e}=t;e.src=o}}),(0,p.jsx)("span",{className:d,children:t.label}),(0,p.jsx)("span",{className:u,children:t.description})]},t.href)))})]},t.label)))})}}}]);