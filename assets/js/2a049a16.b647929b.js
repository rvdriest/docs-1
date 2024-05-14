"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[43507],{36556:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[{value:"Create your OIDC app",id:"create-your-oidc-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3}];function r(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,i.jsx)(t.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,i.jsx)(t.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(t.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"clientId"})," and ",(0,i.jsx)(t.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(t.p,{children:["You are expected to find ",(0,i.jsx)(t.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(t.code,{children:"tokenEndpoint"}),", ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,i.jsx)(t.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,i.jsx)(t.code,{children:"iss"})," ",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,i.jsx)(t.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,i.jsxs)(t.p,{children:["Together, ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,i.jsx)(t.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,i.jsxs)(t.p,{children:["Since an authentication request is always required, an ",(0,i.jsx)(t.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,i.jsx)(t.code,{children:"nonce"})," is missing in this config. Since ",(0,i.jsx)(t.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,i.jsx)(t.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," are also included in ",(0,i.jsx)(t.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"responseType"})," and ",(0,i.jsx)(t.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u2139\ufe0f ",(0,i.jsx)(t.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(t.p,{children:["For all flow types, we provided an OPTIONAL ",(0,i.jsx)(t.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,i.jsx)(t.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scope"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientId"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientSecret"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authorizationEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokenEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idTokenVerificationConfig"}),(0,i.jsx)(t.td,{children:"IdTokenVerificationConfig"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authRequestOptionalConfig"}),(0,i.jsx)(t.td,{children:"AuthRequestOptionalConfig"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"customConfig"}),(0,i.jsx)(t.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"AuthRequestOptionalConfig properties"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"responseType"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokenEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"responseMode"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"display"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prompt"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxAge"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uiLocales"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idTokenHint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loginHint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acrValues"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"IdTokenVerificationConfig properties"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jwksUri"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"issuer"}),(0,i.jsx)(t.td,{children:"string | string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"audience"}),(0,i.jsx)(t.td,{children:"string | string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"algorithms"}),(0,i.jsx)(t.td,{children:"string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clockTolerance"}),(0,i.jsx)(t.td,{children:"string | number"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"crit"}),(0,i.jsx)(t.td,{children:"{ [key: string]: string | boolean }"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"currentDate"}),(0,i.jsx)(t.td,{children:"Date"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxTokenAge"}),(0,i.jsx)(t.td,{children:"string | number"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subject"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"typ"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,i.jsx)(t.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},22906:(e,t,n)=>{n.d(t,{Ay:()=>g,RM:()=>p});var i=n(86070),o=n(76113),s=n(28631),r=n(6982),c=n(18511),d=n(65629),a=n(30493),l=n(27652),h=n(6766);const p=[...d.RM,{value:"Installation",id:"installation",level:3},...a.RM,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...s.RM,{value:"Add sign-in redirect URI",id:"add-sign-in-redirect-uri",level:3},...r.RM,{value:"Add sign-out redirect URI",id:"add-sign-out-redirect-uri",level:3},...c.RM,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...l.RM,...h.RM];function u(e){const t={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(h.Ay,{sdk:".NET Core (Razor Pages)"})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},15518:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Connector tab",src:n(76588).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(t.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(t.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3956:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>r});var i=n(86070),o=n(76113);const s=n.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const t={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Get Started",src:n(3525).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(t.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(t.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(t.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Framework List",src:n(61980).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(t.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(t.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(t.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},72906:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Sign-in Experience tab",src:n(52450).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Save changes",src:n(11618).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(t.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},90017:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(t.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(t.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(t.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(t.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3135:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},6766:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(t.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},62275:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},39688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,connector:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(86070),o=n(76113);n(90017),n(3956),n(15518),n(3135),n(72906),n(62275),n(22906),n(36556);const s={slug:"how-to-build-oidc-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","oidc","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with .NET Core (Razor Pages) and Logto"},r=void 0,c={permalink:"/tutorial/how-to-build-oidc-sign-in-with-dotnet-core-razor-pages-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-razor-pages-oidc.mdx",title:"How to build OIDC sign-in with .NET Core (Razor Pages) and Logto",description:"\x3c!--",date:"2024-05-14T10:00:14.000Z",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"oidc",permalink:"/tutorial/tags/oidc"},{label:"dotnet-core-razor-pages",permalink:"/tutorial/tags/dotnet-core-razor-pages"},{label:"c#",permalink:"/tutorial/tags/c"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.33,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oidc-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","oidc","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with .NET Core (Razor Pages) and Logto"},unlisted:!1,prevItem:{title:"How to build OAuth2 sign-in with .NET Core (Razor Pages) and Logto",permalink:"/tutorial/how-to-build-oauth2-sign-in-with-dotnet-core-razor-pages-and-logto"},nextItem:{title:"How to build SAML sign-in with .NET Core (Razor Pages) and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-dotnet-core-razor-pages-and-logto"}},d={authorsImageUrls:[void 0]},a="OIDC",l=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},28631:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(t.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},6982:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add the following URI to the ",(0,i.jsx)(t.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(t.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(t.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(t.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(t.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(t.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(t.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["No need to set the ",(0,i.jsx)(t.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},18511:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add the following URI to the ",(0,i.jsx)(t.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(t.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(t.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(t.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(t.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(t.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(t.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["No need to set the ",(0,i.jsx)(t.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},65629:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(t.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(t.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},30493:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},27652:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var i=n(86070),o=n(76113);const s=[];function r(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["First, add the handler methods to your ",(0,i.jsx)(t.code,{children:"PageModel"}),", for example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'public class IndexModel : PageModel\n{\n  public async Task OnPostSignInAsync()\n  {\n    await HttpContext.ChallengeAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n\n  public async Task OnPostSignOutAsync()\n  {\n    await HttpContext.SignOutAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Then, add the buttons to your Razor page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cshtml",children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n<form method="post">\n  @if (User.Identity?.IsAuthenticated == true) {\n    <button type="submit" asp-page-handler="SignOut">Sign out</button>\n  } else {\n    <button type="submit" asp-page-handler="SignIn">Sign in</button>\n  }\n</form>\n'})}),"\n",(0,i.jsx)(t.p,{children:'It will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},76588:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},61980:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},3525:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},11618:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},52450:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},76113:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(30758);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);