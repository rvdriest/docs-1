"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[67993],{7195:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Register a Facebook developer account",id:"register-a-facebook-developer-account",level:3},{value:"Set up a Facebook app",id:"set-up-a-facebook-app",level:3},{value:"Test sign-in with Facebook&#39;s test users",id:"test-sign-in-with-facebooks-test-users",level:3},{value:"Publish Facebook sign-in settings",id:"publish-facebook-sign-in-settings",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Facebook developer docs",id:"facebook-developer-docs",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"register-a-facebook-developer-account",children:"Register a Facebook developer account"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Register as a Facebook Developer"})," if you don't have one."]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-a-facebook-app",children:"Set up a Facebook app"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"Apps"})," page."]}),"\n",(0,o.jsxs)(n.li,{children:["Click your existing app or ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"create a new one"})," if needed.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The selected ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"app type"})," is up to you, but it should have the product ",(0,o.jsx)(n.em,{children:"Facebook Login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:'On the app dashboard page, scroll to the "Add a product" section and click the "Set up" button on the "Facebook Login" card.'}),"\n",(0,o.jsx)(n.li,{children:'Skip the Facebook Login Quickstart page, and click the sidebar -> "Products" -> "Facebook Login" -> "Settings".'}),"\n",(0,o.jsxs)(n.li,{children:["In the Facebook Login Settings page, fill ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' in the "Valid OAuth Redirect URIs" field. The ',(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page. E.g.:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://your-logto-domain.com/callback/${connector_id}"})," for production"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://localhost:3001/callback/${connector_id}"})," for testing in the local environment"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,o.jsxs)(n.li,{children:['In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic" and then you will get the ',(0,o.jsx)(n.strong,{children:"App ID"})," and ",(0,o.jsx)(n.strong,{children:"App secret"}),". The ",(0,o.jsx)(n.em,{children:"App ID"})," is the ",(0,o.jsx)(n.code,{children:"clientId"})," in your Logto connector conifg and the ",(0,o.jsx)(n.em,{children:"App secret"})," is the ",(0,o.jsx)(n.code,{children:"clientSecret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"test-sign-in-with-facebooks-test-users",children:"Test sign-in with Facebook's test users"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the accounts of the test, developer, and admin users to test sign-in with the related app under both development and live ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"app modes"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['You can also set the app to "live mode" by ',(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#switching-modes",children:"switching modes"})," so that any Facebook user can sign in with the app."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'In the app dashboard page, click the sidebar -> "Roles" -> "Test Users".'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Create test users" button to create a testing user.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Options" button of the existing test user, and you will see more operations, e.g., "Change name and password".'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"publish-facebook-sign-in-settings",children:"Publish Facebook sign-in settings"}),"\n",(0,o.jsxs)(n.p,{children:["Usually, only the test, admin, and developer users can sign in with the related app under ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"development mode"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To enable normal Facebook users sign-in with the app in the production environment, you may need to switch your Facebook app to ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"live mode"})}),", depending on the app type.\nE.g., the pure ",(0,o.jsx)(n.em,{children:"business type"})," app doesn't have the \"live\" switch button, but it won't block you from using it."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic".'}),"\n",(0,o.jsx)(n.li,{children:'Fill out the "Privacy Policy URL" and "User data deletion" fields on the panel if required.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Live" switch button on the app top bar.'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"facebook-developer-docs",children:"Facebook developer docs"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Documentation - Facebook for Developers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Manually Build a Login Flow"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Permissions Guide"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},60983:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>h});var o=t(11527),i=t(17279),s=t(82208),a=t(40695),l=t(30025),r=t(6074),c=t(61738),d=t(80760),u=t(94842);const h=[...a.d$,{value:"Installation",id:"installation",level:3},...s.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...d.d$,{value:"Implement a sign-in",id:"implement-a-sign-in",level:3},...r.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...c.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...l.d$,...u.d$];function p(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(d.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-a-sign-in",children:"Implement a sign-in"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(l.ZP,{}),"\n",(0,o.jsx)(u.ZP,{sdk:"Vanilla JS"})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},46428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,connector:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(11527),i=t(17279);t(87593),t(80710),t(12665),t(80386),t(31877),t(23095),t(60983),t(7195);const s={slug:"how-to-build-facebook-sign-in-with-vanilla-js-and-logto",authors:"logto",tags:["authentication","facebook","vanilla-js","js","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with Vanilla JS and Logto"},a=void 0,l={permalink:"/tutorial/how-to-build-facebook-sign-in-with-vanilla-js-and-logto",source:"@site/tutorial/build-with-logto/generated-vanilla-js-facebook.mdx",title:"How to build Facebook sign-in with Vanilla JS and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"facebook",permalink:"/tutorial/tags/facebook"},{inline:!0,label:"vanilla-js",permalink:"/tutorial/tags/vanilla-js"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.3,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-facebook-sign-in-with-vanilla-js-and-logto",authors:"logto",tags:["authentication","facebook","vanilla-js","js","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with Vanilla JS and Logto"},unlisted:!1,prevItem:{title:"How to build Discord sign-in with Vanilla JS and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-vanilla-js-and-logto"},nextItem:{title:"How to build GitHub sign-in with Vanilla JS and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-vanilla-js-and-logto"}},r={authorsImageUrls:[void 0]},c="Facebook",d=[];function u(e){return(0,o.jsx)(o.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u()}},7709:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function a(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Before calling ",(0,o.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function a(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},68668:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function a(e){const n={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:".signOut()"})," will clear all the Logto data in memory and localStorage if they exist."]}),"\n",(0,o.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs), and use the URL as the parameter when calling ",(0,o.jsx)(n.code,{children:".signOut()"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},82208:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>l});var o=t(11527),i=t(17279),s=t(75696),a=t(78407);const l=[];function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{value:"npm",label:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @logto/browser\n"})})}),(0,o.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/browser\n"})})}),(0,o.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/browser\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},40695:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function a(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The vanilla-js SDK is ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/64725017/what-does-it-mean-by-framework-agnostic",children:"framework-agnostic"}),", you can use it in any frontend framework by writing a wrapper to fit it."]}),"\n",(0,o.jsxs)(n.li,{children:["The sample project is available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/browser-sample",children:"SDK repository"}),"."]}),"\n"]})})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},30025:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Logto SDK, generally we can use ",(0,o.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,o.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In your vanilla JS app, you can use the ",(0,o.jsx)(n.code,{children:"isAuthenticated"})," status to programmatically show and hide the sign-in and sign-out buttons. Let's see how to do it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const redirectUrl = 'http://localhost:3000/callback';\nconst baseUrl = 'http://localhost:3000';\n\n// Conditional rendering of sign-in and sign-out buttons\nconst render = async (logtoClient) => {\n  const isAuthenticated = await logtoClient.isAuthenticated();\n  const container = document.querySelector('#container');\n\n  const onClickSignIn = () => logtoClient.signIn(redirectUrl);\n  const onClickSignOut = () => logtoClient.signOut(baseUrl);\n\n  const button = document.createElement('button');\n  button.innerHTML = isAuthenticated ? 'Sign Out' : 'Sign In';\n  button.addEventListener('click', isAuthenticated ? onClickSignOut : onClickSignIn);\n\n  container.append(button);\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},6074:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>u});var o=t(11527),i=t(17279),s=t(82418),a=t(75848),l=t(7709),r=t(55556);function c(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We're almost there! In the last step, we use ",(0,o.jsx)(n.code,{children:"http://localhost:3000/callback"})," as the Redirect URI, and now we need to handle it properly. Call the callback handler in your SPA's ",(0,o.jsx)(n.code,{children:"/callback"})," route to complete the sign-in flow."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const callbackHandler = async (logtoClient) => {\n  await logtoClient.handleSignInCallback(window.location.href);\n\n  if (!logtoClient.isAuthenticated) {\n    // Handle failed sign-in\n    alert('Failed to sign in');\n    return;\n  }\n\n  // Handle successful sign-in\n  window.location.assign('http://localhost:3000/');\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}const u=[...r.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...a.d$,...l.d$,{value:"Implement a sign-in button",id:"implement-a-sign-in-button",level:4},{value:"Handle redirect",id:"handle-redirect",level:4}];function h(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,o.jsx)(a.ZP,{figureSrc:s.Z,redirectUri:"http://localhost:3000/callback"}),"\n",(0,o.jsx)(l.ZP,{calling:".signIn()"}),"\n",(0,o.jsx)(n.h4,{id:"implement-a-sign-in-button",children:"Implement a sign-in button"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"logtoClient"})," provides a ",(0,o.jsx)(n.code,{children:"signIn"})," method to initiate the sign-in flow."]}),"\n",(0,o.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the sign-in button:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const button = document.createElement('button');\nbutton.innerHTML = 'Sign In';\nbutton.addEventListener('click', onClickSignIn);\n\ndocument.body.appendChild(button);\n\nconst onClickSignIn = () => {\n  logtoClient.signIn('http://localhost:3000/callback');\n};\n"})}),"\n",(0,o.jsx)(n.h4,{id:"handle-redirect",children:"Handle redirect"}),"\n",(0,o.jsx)(d,{})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},61738:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>a});var o=t(11527),i=t(17279),s=t(68668);const a=[...s.d$,{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:4}];function l(e){const n={code:"code",h4:"h4",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h4,{id:"implement-a-sign-out-button",children:"Implement a sign-out button"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const button = document.createElement('button');\nbutton.innerHTML = 'Sign Out';\n\nbutton.addEventListener('click', onClickSignOut);\n\ndocument.body.appendChild(button);\n\nconst onClickSignOut = () => {\n  logtoClient.signOut('http://localhost:3000');\n};\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},80760:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>a});var o=t(11527),i=t(17279),s=t(51187);const a=[...s.d$];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Import and init a ",(0,o.jsx)(n.code,{children:"LogtoClient"})," instance by passing config:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import LogtoClient from '@logto/browser';\n\nconst logtoClient = new LogtoClient({\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n});\n"})}),"\n",(0,o.jsx)(s.ZP,{})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>a});t(50959);var o=t(5341);const i={tabItem:"tabItem_YHvg"};var s=t(11527);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,a),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(50959),i=t(5341),s=t(18387),a=t(28903),l=t(15885),r=t(35927),c=t(38894),d=t(70148);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,r]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:i}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),j=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&r(j)}),[j]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(20619);const j={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var x=t(11527);function v(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=r.indexOf(n),i=l[t].value;i!==o&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>r.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(f,{...n,...e})]})}function A(e){const n=(0,b.Z)();return(0,x.jsx)(k,{...e,children:u(e.children)},String(n))}},82418:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);