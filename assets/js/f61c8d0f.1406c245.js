"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41870],{85674:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[{value:"Create your OIDC app",id:"create-your-oidc-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,i.jsx)(t.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,i.jsx)(t.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(t.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"clientId"})," and ",(0,i.jsx)(t.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(t.p,{children:["You are expected to find ",(0,i.jsx)(t.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(t.code,{children:"tokenEndpoint"}),", ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,i.jsx)(t.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,i.jsx)(t.code,{children:"iss"})," ",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,i.jsx)(t.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,i.jsxs)(t.p,{children:["Together, ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,i.jsx)(t.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,i.jsxs)(t.p,{children:["Since an authentication request is always required, an ",(0,i.jsx)(t.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,i.jsx)(t.code,{children:"nonce"})," is missing in this config. Since ",(0,i.jsx)(t.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,i.jsx)(t.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," are also included in ",(0,i.jsx)(t.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"responseType"})," and ",(0,i.jsx)(t.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u2139\ufe0f ",(0,i.jsx)(t.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(t.p,{children:["For all flow types, we provided an OPTIONAL ",(0,i.jsx)(t.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,i.jsx)(t.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scope"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientId"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientSecret"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authorizationEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokenEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idTokenVerificationConfig"}),(0,i.jsx)(t.td,{children:"IdTokenVerificationConfig"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authRequestOptionalConfig"}),(0,i.jsx)(t.td,{children:"AuthRequestOptionalConfig"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"customConfig"}),(0,i.jsx)(t.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"AuthRequestOptionalConfig properties"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"responseType"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokenEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"responseMode"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"display"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prompt"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxAge"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uiLocales"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idTokenHint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loginHint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acrValues"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"IdTokenVerificationConfig properties"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jwksUri"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"issuer"}),(0,i.jsx)(t.td,{children:"string | string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"audience"}),(0,i.jsx)(t.td,{children:"string | string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"algorithms"}),(0,i.jsx)(t.td,{children:"string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clockTolerance"}),(0,i.jsx)(t.td,{children:"string | number"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"crit"}),(0,i.jsx)(t.td,{children:"{ [key: string]: string | boolean }"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"currentDate"}),(0,i.jsx)(t.td,{children:"Date"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxTokenAge"}),(0,i.jsx)(t.td,{children:"string | number"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subject"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"typ"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,i.jsx)(t.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},58914:(e,t,n)=>{n.d(t,{ZP:()=>h,d$:()=>c});var i=n(11527),s=n(17279),r=n(90808),o=n(1523),a=n(19074),l=n(94842);const c=[...r.d$,{value:"Installation",id:"installation",level:3},...o.d$,...a.d$,...l.d$];function d(e){const t={h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(l.ZP,{sdk:"Expo (React Native)"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},17020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,connector:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(11527),s=n(17279);n(87593),n(80710),n(12665),n(80386),n(31877),n(23095),n(58914),n(85674);const r={slug:"how-to-build-oidc-sign-in-with-expo-react-native-and-logto",authors:"logto",tags:["authentication","oidc","expo-react-native","js","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with Expo (React Native) and Logto"},o=void 0,a={permalink:"/tutorial/how-to-build-oidc-sign-in-with-expo-react-native-and-logto",source:"@site/tutorial/build-with-logto/generated-expo-react-native-oidc.mdx",title:"How to build OIDC sign-in with Expo (React Native) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"oidc",permalink:"/tutorial/tags/oidc"},{inline:!0,label:"expo-react-native",permalink:"/tutorial/tags/expo-react-native"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oidc-sign-in-with-expo-react-native-and-logto",authors:"logto",tags:["authentication","oidc","expo-react-native","js","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with Expo (React Native) and Logto"},unlisted:!1,prevItem:{title:"How to build OAuth2 sign-in with Expo (React Native) and Logto",permalink:"/tutorial/how-to-build-oauth2-sign-in-with-expo-react-native-and-logto"},nextItem:{title:"How to build SAML sign-in with Expo (React Native) and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-expo-react-native-and-logto"}},l={authorsImageUrls:[void 0]},c="OIDC",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},37521:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function o(e){const t={h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,i.jsx)(t.p,{children:"Now, you can test your application:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,i.jsx)(t.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,i.jsx)(t.li,{children:"After you signed in, you will be redirected back to your application and see the user data with sign-out button."}),"\n",(0,i.jsx)(t.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},90808:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[];function o(e){const t={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The following demonstration is built on Expo ~50.0.6."}),"\n",(0,i.jsxs)(t.li,{children:["The sample project is available on our ",(0,i.jsx)(t.a,{href:"https://github.com/logto-io/react-native/tree/master/packages/rn-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1523:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>a});var i=n(11527),s=n(17279),r=n(75696),o=n(78407);const a=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Install Logto SDK and peer dependencies via your favorite package manager:"}),"\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm i @logto/rn\nnpm i expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add @logto/rn\nyarn add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pnpm add @logto/rn\npnpm add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@logto/rn"})," package is the SDK for Logto. The remaining packages are its peer dependencies. They couldn't be listed as direct dependencies because the Expo CLI requires that all dependencies for native modules be installed directly within the root project's ",(0,i.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If you're installing this in a ",(0,i.jsx)(t.a,{href:"https://docs.expo.dev/bare/overview",children:"bare React Native app"}),", you should also follow these ",(0,i.jsx)(t.a,{href:"https://docs.expo.dev/bare/installing-expo-modules/",children:"additional installation instructions"}),"."]})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},19074:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>a});var i=n(11527),s=n(17279),r=n(37521),o=n(55556);const a=[{value:"Init Logto provider",id:"init-logto-provider",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...o.d$,{value:"Display user information",id:"display-user-information",level:3},...r.d$];function l(e){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"init-logto-provider",children:"Init Logto provider"}),"\n",(0,i.jsxs)(t.p,{children:["Import and use ",(0,i.jsx)(t.code,{children:"LogtoProvider"})," to provide a Logto context:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { LogtoProvider, LogtoConfig } from '@logto/rn';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>',\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsxs)(t.p,{children:["Switch to the application details page of Logto Console. Add a native redirect URI (for example, ",(0,i.jsx)(t.code,{children:"io.logto://callback"}),'), then click "Save".']}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For iOS, the redirect URI scheme does not really matter since the ",(0,i.jsx)(t.code,{children:"ASWebAuthenticationSession"})," class will listen to the redirect URI regardless of if it's registered."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For Android, the redirect URI scheme must be filled in Expo's ",(0,i.jsx)(t.code,{children:"app.json"})," file, for example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "expo": {\n    "scheme": "io.logto"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Now back to your app, you can use ",(0,i.jsx)(t.code,{children:"useLogto"})," hook to sign in and sign out:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { useLogto } from '@logto/rn';\nimport { Button } from 'react-native';\n\nconst Content = () => {\n  const { signIn, signOut, isAuthenticated } = useLogto();\n\n  return (\n    <div>\n      {isAuthenticated ? (\n        <Button title=\"Sign out\" onPress={async () => signOut()} />\n      ) : (\n        // Replace the redirect URI with your own\n        <Button title=\"Sign in\" onPress={async () => signIn('io.logto://callback')} />\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,i.jsx)(t.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,i.jsxs)(t.p,{children:["To display the user's information, you can use the ",(0,i.jsx)(t.code,{children:"getIdTokenClaims()"})," method:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { useLogto } from '@logto/rn';\nimport { Button, Text } from 'react-native';\n\nconst Content = () => {\n  const { getIdTokenClaims, isAuthenticated } = useLogto();\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    if (isAuthenticated) {\n      getIdTokenClaims().then((claims) => {\n        setUser(claims);\n      });\n    }\n  }, [isAuthenticated]);\n\n  return (\n    <div>\n      {isAuthenticated ? (\n        <>\n          <Text>{user?.name}</Text>\n          <Text>{user?.email}</Text>\n          <Button title=\"Sign out\" onPress={async () => signOut()} />\n        </>\n      ) : (\n        <Button title=\"Sign in\" onPress={async () => signIn('io.logto://callback')} />\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,i.jsx)(r.ZP,{})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},75696:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var i=n(5341);const s={tabItem:"tabItem_YHvg"};var r=n(11527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,o),hidden:n,children:t})}},78407:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(50959),s=n(5341),r=n(18387),o=n(28903),a=n(15885),l=n(35927),c=n(38894),d=n(70148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,h]=x({queryString:n,groupId:s}),[j,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Nk)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=c??j;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=n(20619);const f={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var m=n(11527);function y(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==i&&(c(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=j(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...t,...e}),(0,m.jsx)(b,{...t,...e})]})}function w(e){const t=(0,g.Z)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(t))}}}]);