"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83027],{26008:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Create your OAuth 2.0 app",id:"create-your-oauth-20-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3},{value:"Reference",id:"reference",level:3}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-your-oauth-20-app",children:"Create your OAuth 2.0 app"}),"\n",(0,i.jsx)(n.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OAuth 2.0 protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OAuth 2.0 authorization."}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(n.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," can be found at your OAuth 2.0 apps details page."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(n.p,{children:["You are expected to find ",(0,i.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(n.code,{children:"tokenEndpoint"})," and ",(0,i.jsx)(n.code,{children:"userInfoEndpoint"})," in social vendor's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an access token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an access token."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"userInfoEndpoint"}),": This endpoint is used by the client application to obtain additional information about the user, such as their fullname, email address or profile picture. The user info endpoint is typically accessed after the client application has obtained an access token from the token endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["Logto also provide a ",(0,i.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. The keys are Logto's standard user profile field names and corresponding values should be social profiles' field names. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is required and others are optional fields."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"responseType"})," and ",(0,i.jsx)(n.code,{children:"grantType"})," can ONLY be FIXED values with authorization code grant type, so we make them optional and default values will be automatically filled."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can find ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload",children:"Google user profile response"})," and hence its ",(0,i.jsx)(n.code,{children:"profileMap"})," should be like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "sub",\n  "avatar": "picture"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["We provided an OPTIONAL ",(0,i.jsx)(n.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OAuth 2.0 standard protocol. If your desired social identity provider strictly stick to OAuth 2.0 standard protocol, the you do not need to care about ",(0,i.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authorizationEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userInfoEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpointResponseType"}),(0,i.jsx)(n.td,{children:"enum"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"grantType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"customConfig"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileMap"}),(0,i.jsx)(n.td,{children:"ProfileMap"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ProfileMap fields"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avatar"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"avatar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phone"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6749",children:"The OAuth 2.0 2.0 Authorization Framework"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},79887:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>h});var i=t(11527),o=t(17279),r=t(10364),s=t(96790),a=t(90473),l=t(41574),c=t(25309),d=t(1487),u=t(94842);const h=[...r.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...l.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...s.d$,...u.d$];function p(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(u.ZP,{sdk:"Vue"})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},65654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,connector:()=>m,contentTitle:()=>g,default:()=>b,frontMatter:()=>p,metadata:()=>j,toc:()=>f});var i=t(11527),o=t(17279),r=t(87593),s=t(80710),a=t(12665),l=t(80386),c=t(31877),d=t(23095),u=t(79887),h=t(26008);const p={slug:"how-to-build-oauth2-sign-in-with-vue-and-logto",authors:"logto",tags:["authentication","oauth2","vue","js","social-sign-in","sign-in","login"],title:"How to build OAuth2 sign-in with Vue and Logto"},g=void 0,j={permalink:"/tutorial/how-to-build-oauth2-sign-in-with-vue-and-logto",source:"@site/tutorial/build-with-logto/generated-vue-oauth2.mdx",title:"How to build OAuth2 sign-in with Vue and Logto",description:"\x3c!--",date:"2024-06-30T08:28:35.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"oauth2",permalink:"/tutorial/tags/oauth-2"},{inline:!0,label:"vue",permalink:"/tutorial/tags/vue"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oauth2-sign-in-with-vue-and-logto",authors:"logto",tags:["authentication","oauth2","vue","js","social-sign-in","sign-in","login"],title:"How to build OAuth2 sign-in with Vue and Logto"},unlisted:!1,prevItem:{title:"How to build Naver sign-in with Vue and Logto",permalink:"/tutorial/how-to-build-naver-sign-in-with-vue-and-logto"},nextItem:{title:"How to build OIDC sign-in with Vue and Logto",permalink:"/tutorial/how-to-build-oidc-sign-in-with-vue-and-logto"}},x={authorsImageUrls:[void 0]},m="OAuth2",f=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...s.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...u.d$,{value:"Add OAuth2 connector",id:"add-oauth2-connector",level:2},...a.d$,{value:"Set up Standard OAuth 2.0 app",id:"set-up-standard-oauth-20-app",level:2},...h.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.d$,{value:"Enable OAuth2 connector in Sign-in Experience",id:"enable-oauth2-connector-in-sign-in-experience",level:2},...c.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function v(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{connector:m,sdk:"Vue",link:"https://vuejs.org/"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(s.ZP,{type:"Single page app",framework:"Vue"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"add-oauth2-connector",children:"Add OAuth2 connector"}),"\n",(0,i.jsx)(a.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"set-up-standard-oauth-20-app",children:"Set up Standard OAuth 2.0 app"}),"\n",(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(l.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"enable-oauth2-connector-in-sign-in-experience",children:"Enable OAuth2 connector in Sign-in Experience"}),"\n",(0,i.jsx)(c.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.ZP,{connector:m,sdk:"Vue"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},75848:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},7709:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Before calling ",(0,i.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},68668:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:".signOut()"})," will clear all the Logto data in memory and localStorage if they exist."]}),"\n",(0,i.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs), and use the URL as the parameter when calling ",(0,i.jsx)(n.code,{children:".signOut()"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},10364:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Logto Vue SDK is built with the composition API and leveraging the composables, therefore it is only compatible with Vue 3."}),"\n",(0,i.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,i.jsx)(n.a,{href:"https://youtu.be/cAfsQrsGQqA",children:"YouTube channel"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The full sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/vue-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},96790:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, generally we can use ",(0,i.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In Logto Vue SDK, the ",(0,i.jsx)(n.code,{children:"isAuthenticated"})," status can be checked by using the ",(0,i.jsx)(n.code,{children:"useLogto"})," composable. In the example code below, we can use it to programmatically show and hide the sign-in and sign-out buttons. Also we'll use ",(0,i.jsx)(n.code,{children:"getIdTokenClaims"})," to get the ID of the currently logged-in user."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<script setup lang="ts">\nimport { useLogto } from "@logto/vue";\nimport { ref } from "vue";\n\nconst { isAuthenticated, getIdTokenClaims, signIn, signOut } = useLogto();\nconst userId = ref<string>();\n\nif (isAuthenticated.value) {\n  (async () => {\n    const claims = await getIdTokenClaims();\n    userId.value = claims.sub;\n  })();\n}\n\n<\/script>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  <p v-if="userId">Logged in as {{ userId }}</p>\n  <button v-if="!isAuthenticated" @click="onClickSignIn">Sign In</button>\n  <button v-else @click="onClickSignOut">Sign Out</button>\n</template>\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},90473:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>u});var i=t(11527),o=t(17279),r=t(82418),s=t(75848),a=t(7709),l=t(55556);function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"handle-redirect",children:"Handle redirect"}),"\n",(0,i.jsxs)(n.p,{children:["We're almost there! In the last step, we use ",(0,i.jsx)(n.code,{children:"http://localhost:3000/callback"})," as the Redirect URI, and now we need to handle it properly."]}),"\n",(0,i.jsx)(n.p,{children:"First let's create a callback component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// CallbackView.vue\nimport { useHandleSignInCallback } from '@logto/vue';\nconst { isLoading } = useHandleSignInCallback(() => {\n  // Navigate to root path when finished\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  \x3c!-- When it\'s working in progress --\x3e\n  <p v-if="isLoading">Redirecting...</p>\n</template>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally insert the code below in your ",(0,i.jsx)(n.code,{children:"/callback"})," route which does NOT require authentication:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Assuming vue-router\nconst router = createRouter({\n  routes: [\n    {\n      path: '/callback',\n      name: 'callback',\n      component: CallbackView,\n    },\n  ],\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const u=[...l.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...s.d$,{value:"Implement a sign-in button",id:"implement-a-sign-in-button",level:4},...a.d$,{value:"Handle redirect",id:"handle-redirect",level:4},{value:"Handle redirect",id:"handle-redirect",level:3}];function h(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,i.jsx)(s.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/callback"}),"\n",(0,i.jsx)(n.h4,{id:"implement-a-sign-in-button",children:"Implement a sign-in button"}),"\n",(0,i.jsxs)(n.p,{children:["We provide two composables ",(0,i.jsx)(n.code,{children:"useHandleSignInCallback()"})," and ",(0,i.jsx)(n.code,{children:"useLogto()"})," which can help you easily manage the authentication flow."]}),"\n",(0,i.jsx)(a.ZP,{calling:".signIn()"}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the sign-in button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useLogto } from '@logto/vue';\n\nconst { signIn } = useLogto();\nconst onClickSignIn = () => signIn('http://localhost:3000/callback');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<button @click="onClickSignIn">Sign In</button>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"handle-redirect",children:"Handle redirect"}),"\n",(0,i.jsx)(d,{})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},41574:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var i=t(11527),o=t(17279),r=t(68668);const s=[...r.d$,{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:4}];function a(e){const n={code:"code",h4:"h4",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"implement-a-sign-out-button",children:"Implement a sign-out button"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useLogto } from '@logto/vue';\n\nconst { signOut } = useLogto();\nconst onClickSignOut = () => signOut('http://localhost:3000');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<button @click="onClickSignOut">Sign Out</button>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25309:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>s});var i=t(11527),o=t(17279),r=t(51187);const s=[...r.d$];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsxs)(n.p,{children:["Import and use ",(0,i.jsx)(n.code,{children:"createLogto"})," to install Logto plugin:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// main.ts\nimport { createLogto, LogtoConfig } from '@logto/vue';\nimport { createApp } from 'vue';\nimport App from './App.vue';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n};\n\nconst app = createApp(App);\n\napp.use(createLogto, config);\napp.mount('#app');\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1487:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var i=t(11527),o=t(17279),r=t(75696),s=t(78407);const a=[];function l(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/vue\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/vue\n"})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/vue\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>s});t(50959);var i=t(5341);const o={tabItem:"tabItem_YHvg"};var r=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(50959),o=t(5341),r=t(18387),s=t(28903),a=t(15885),l=t(35927),c=t(38894),d=t(70148);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:o}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),m=(()=>{const e=c??j;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(20619);const m={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function v(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function A(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.Z)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(n))}},82418:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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"}}]);