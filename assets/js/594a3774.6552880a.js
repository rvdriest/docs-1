"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[87532],{85674:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[{value:"Create your OIDC app",id:"create-your-oidc-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,i.jsx)(n.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(n.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(n.p,{children:["You are expected to find ",(0,i.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(n.code,{children:"tokenEndpoint"}),", ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,i.jsx)(n.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,i.jsx)(n.code,{children:"iss"})," ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,i.jsx)(n.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,i.jsxs)(n.p,{children:["Together, ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,i.jsx)(n.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,i.jsxs)(n.p,{children:["Since an authentication request is always required, an ",(0,i.jsx)(n.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,i.jsx)(n.code,{children:"nonce"})," is missing in this config. Since ",(0,i.jsx)(n.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,i.jsx)(n.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," are also included in ",(0,i.jsx)(n.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"responseType"})," and ",(0,i.jsx)(n.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["For all flow types, we provided an OPTIONAL ",(0,i.jsx)(n.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,i.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authorizationEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idTokenVerificationConfig"}),(0,i.jsx)(n.td,{children:"IdTokenVerificationConfig"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authRequestOptionalConfig"}),(0,i.jsx)(n.td,{children:"AuthRequestOptionalConfig"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"customConfig"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"AuthRequestOptionalConfig properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseMode"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"display"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prompt"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAge"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uiLocales"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idTokenHint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"loginHint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"acrValues"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"IdTokenVerificationConfig properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jwksUri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"issuer"}),(0,i.jsx)(n.td,{children:"string | string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"audience"}),(0,i.jsx)(n.td,{children:"string | string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"algorithms"}),(0,i.jsx)(n.td,{children:"string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clockTolerance"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"crit"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string | boolean }"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"currentDate"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxTokenAge"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"typ"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,i.jsx)(n.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43236:(e,n,t)=>{t.d(n,{ZP:()=>x,d$:()=>u});var i=t(11527),s=t(17279),r=t(45965),o=t(16331),a=t(33266),c=t(99009),l=t(39542),d=t(13197),h=t(94842);const u=[...r.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...l.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...c.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...o.d$,...h.d$];function p(e){const n={h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:"Express"})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},31022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>x,default:()=>y,frontMatter:()=>p,metadata:()=>g,toc:()=>f});var i=t(11527),s=t(17279),r=t(87593),o=t(80710),a=t(12665),c=t(80386),l=t(31877),d=t(23095),h=t(43236),u=t(85674);const p={slug:"how-to-build-oidc-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","oidc","express","js","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with Express and Logto"},x=void 0,g={permalink:"/tutorial/how-to-build-oidc-sign-in-with-express-and-logto",source:"@site/tutorial/build-with-logto/generated-express-oidc.mdx",title:"How to build OIDC sign-in with Express and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"oidc",permalink:"/tutorial/tags/oidc"},{inline:!0,label:"express",permalink:"/tutorial/tags/express"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oidc-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","oidc","express","js","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with Express and Logto"},unlisted:!1,prevItem:{title:"How to build OAuth2 sign-in with Express and Logto",permalink:"/tutorial/how-to-build-oauth2-sign-in-with-express-and-logto"},nextItem:{title:"How to build SAML sign-in with Express and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-express-and-logto"}},j={authorsImageUrls:[void 0]},m="OIDC",f=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...o.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add OIDC connector",id:"add-oidc-connector",level:2},...a.d$,{value:"Set up Standard OIDC app",id:"set-up-standard-oidc-app",level:2},...u.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable OIDC connector in Sign-in Experience",id:"enable-oidc-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{connector:m,sdk:"Express",link:"https://expressjs.com/"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(o.ZP,{type:"Traditional web",framework:"Express"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"add-oidc-connector",children:"Add OIDC connector"}),"\n",(0,i.jsx)(a.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"set-up-standard-oidc-app",children:"Set up Standard OIDC app"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(c.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"enable-oidc-connector-in-sign-in-experience",children:"Enable OIDC connector in Sign-in Experience"}),"\n",(0,i.jsx)(l.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.ZP,{connector:m,sdk:"Express"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function y(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},10637:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>o});var i=t(11527),s=t(17279);const r=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",o=[];function a(e){const n={admonition:"admonition",...(0,s.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:r,width:"586px"})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[];function o(e){const n={admonition:"admonition",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},45965:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/express-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},16331:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[{value:"Get user information",id:"get-user-information",level:4}];function o(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, you can use the ",(0,i.jsx)(n.code,{children:"withLogto"})," middleware to get ",(0,i.jsx)(n.code,{children:"req.user.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { withLogto } from '@logto/express';\n\napp.use(withLogto(config));\n"})}),"\n",(0,i.jsx)(n.p,{children:"No, let's use this value to protect routes by creating a simple middleware:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const requireAuth = async (req: Request, res: Response, next: NextFunction) => {\n  if (!req.user.isAuthenticated) {\n    res.redirect('/logto/sign-in');\n  }\n\n  next();\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then use it in the route handler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/protected', requireAuth, (req, res) => {\n  res.end('protected resource');\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-user-information",children:"Get user information"}),"\n",(0,i.jsxs)(n.p,{children:["For most cases, it is recommended to use ",(0,i.jsx)(n.code,{children:"claims"})," in ",(0,i.jsx)(n.code,{children:"req.user"}),' as "user info", this can be fast because ',(0,i.jsx)(n.code,{children:"claims"})," is cached when tokens are granted. If you need more accurate user info, set ",(0,i.jsx)(n.code,{children:"config.fetchUserInfo"})," to ",(0,i.jsx)(n.code,{children:"true"}),", to tell the SDK to fetch the user information from the OIDC ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/user', withLogto({ ...config, fetchUserInfo: true }), (req, res) => {\n  res.json(req.user.userInfo);\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},33266:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>c});var i=t(11527),s=t(17279),r=t(19573),o=t(75848),a=t(55556);const c=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...o.d$,{value:"Prepare logto routes",id:"prepare-logto-routes",level:4},{value:"Sign in",id:"sign-in",level:4}];function l(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,i.jsx)(o.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/logto/sign-in-callback"}),"\n",(0,i.jsx)(n.h4,{id:"prepare-logto-routes",children:"Prepare logto routes"}),"\n",(0,i.jsx)(n.p,{children:"Prepare routes to connect with Logto."}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { handleAuthRoutes } from '@logto/express';\n\napp.use(handleAuthRoutes(config));\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will create 3 routes automatically:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-out"}),": Sign out from Logto."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sign-in",children:"Sign in"}),"\n",(0,i.jsx)(n.p,{children:"We're almost there! Now, create a sign-in button to redirect to the sign-in route on user click."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/', (req, res) => {\n  res.setHeader('content-type', 'text/html');\n  res.end(`<div><a href=\"/logto/sign-in\">Sign In</a></div>`);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},99009:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[];function o(e){const n={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:"/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,i.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},39542:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(11527),s=t(17279),r=t(10637),o=t(51187);const a=[...o.d$,...r.d$,{value:"Prepare required middlewares",id:"prepare-required-middlewares",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { LogtoExpressConfig } from '@logto/express';\n\nconst config: LogtoExpressConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-express-app-base-url>', // E.g. http://localhost:3000\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prepare-required-middlewares",children:"Prepare required middlewares"}),"\n",(0,i.jsxs)(n.p,{children:["The SDK requires ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})," to be configured in prior."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import cookieParser from 'cookie-parser';\nimport session from 'express-session';\n\napp.use(cookieParser());\napp.use(\n  session({\n    secret: 'random_session_key',\n    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // In miliseconds\n  })\n);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},13197:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(11527),s=t(17279),r=t(75696),o=t(78407);const a=[];function c(e){const n={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/express cookie-parser express-session\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/express cookie-parser express-session\n"})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/express cookie-parser express-session\n"})})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>o});t(50959);var i=t(5341);const s={tabItem:"tabItem_YHvg"};var r=t(11527);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,o),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(50959),s=t(5341),r=t(18387),o=t(28903),a=t(15885),c=t(35927),l=t(38894),d=t(70148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[o,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,h]=x({queryString:t,groupId:s}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=l??g;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(20619);const m={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function b(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==i&&(l(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function w(e){const n=(0,j.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},19573:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"}}]);