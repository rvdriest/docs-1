"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[17068],{50587:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(n.p,{children:["We recommend to read ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/rbac/",children:"\ud83d\udd10 Role-Based Access Control (RBAC)"})," first to understand the basic concepts of Logto RBAC and how to set up API resources properly."]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},90424:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:['This guide assumes you have created an Application of type "',e.type,'" in Admin\nConsole.']})})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},49659:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Once you have set up the API resources, you can add them when configuring Logto in your app:"}),"\n",e.configResourcesCode,"\n",(0,t.jsx)(n.p,{children:"Each API resource has its own permissions (scopes)."}),"\n",(0,t.jsxs)(n.p,{children:["For example, the ",(0,t.jsx)(n.code,{children:"https://shopping.your-app.com/api"})," resource has the ",(0,t.jsx)(n.code,{children:"shopping:read"})," and ",(0,t.jsx)(n.code,{children:"shopping:write"})," permissions, and the ",(0,t.jsx)(n.code,{children:"https://store.your-app.com/api"})," resource has the ",(0,t.jsx)(n.code,{children:"store:read"})," and ",(0,t.jsx)(n.code,{children:"store:write"})," permissions."]}),"\n",(0,t.jsx)(n.p,{children:"To request these permissions, you can add them when configuring Logto in your app:"}),"\n",e.configResourcesWithScopesCode,"\n",(0,t.jsxs)(n.p,{children:["You may notice that scopes are defined separately from API resources. This is because ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Resource Indicators for OAuth 2.0"})," specifies the final scopes for the request will be the cartesian product of all the scopes at all the target services."]}),"\n",e.configResourcesWithSharedScopesCode&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Thus, in the above case, scopes can be simplified from the definition in Logto, both of the API resources can have ",(0,t.jsx)(n.code,{children:"read"})," and ",(0,t.jsx)(n.code,{children:"write"})," scopes without the prefix. Then, in the Logto config:"]}),e.configResourcesWithSharedScopesCode,(0,t.jsxs)(n.p,{children:["For every API resource, it will request for both ",(0,t.jsx)(n.code,{children:"read"})," and ",(0,t.jsx)(n.code,{children:"write"})," scopes."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is fine to request scopes that are not defined in the API resources. For example, you can request the ",(0,t.jsx)(n.code,{children:"email"})," scope even if the API resources don't have the ",(0,t.jsx)(n.code,{children:"email"})," scope available. Unavailable scopes will be safely ignored."]})}),"\n",(0,t.jsx)(n.p,{children:"After the successful sign-in, Logto will issue proper scopes to API resources according to the user's roles."})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},75848:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,t.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,t.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},15680:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To fetch the access token for a specific API resource, you can use the ",(0,t.jsx)("code",{children:e.getAccessTokenApi})," method:"]}),"\n",e.getAccessTokenCode,"\n",(0,t.jsx)(n.p,{children:"This method will return a JWT access token that can be used to access the API resource when the user has related permissions. If the current cached access token has expired, this method will automatically try to use a refresh token to get a new access token."})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},88199:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={a:"a",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/recipes/customize-sie/",children:"Customize sign-in experience"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"Protect your API"})}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},97781:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={a:"a",admonition:"admonition",code:"code",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Here's the list of supported scopes and the corresponding claims:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"openid"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sub"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The unique identifier of the user"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"profile"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The full name of the user"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"username"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The username of the user"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User."}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"created_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Time the End-User was created. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z)."}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"updated_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Time the End-User's information was last updated. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z)."}),(0,t.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Other ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims",children:"standard claims"})," include ",(0,t.jsx)(n.code,{children:"family_name"}),", ",(0,t.jsx)(n.code,{children:"given_name"}),", ",(0,t.jsx)(n.code,{children:"middle_name"}),", ",(0,t.jsx)(n.code,{children:"nickname"}),", ",(0,t.jsx)(n.code,{children:"preferred_username"}),", ",(0,t.jsx)(n.code,{children:"profile"}),", ",(0,t.jsx)(n.code,{children:"website"}),", ",(0,t.jsx)(n.code,{children:"gender"}),", ",(0,t.jsx)(n.code,{children:"birthdate"}),", ",(0,t.jsx)(n.code,{children:"zoneinfo"}),", and ",(0,t.jsx)(n.code,{children:"locale"})," will be also included in the ",(0,t.jsx)(n.code,{children:"profile"})," scope without the need for requesting the userinfo endpoint. A difference compared to the claims above is that these claims will only be returned when their values are not empty, while the claims above will return ",(0,t.jsx)(n.code,{children:"null"})," if the values are empty."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Unlike the standard claims, the ",(0,t.jsx)(n.code,{children:"created_at"})," and ",(0,t.jsx)(n.code,{children:"updated_at"})," claims are using milliseconds instead of seconds."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"email"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"email"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The email address of the user"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"email_verified"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Whether the email address has been verified"}),(0,t.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"phone"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"phone_number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The phone number of the user"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"phone_number_verified"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Whether the phone number has been verified"}),(0,t.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"address"})})}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim",children:"OpenID Connect Core 1.0"})," for the details of the address claim."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"custom_data"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custom_data"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"The custom data of the user"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"identities"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identities"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"The linked identities of the user"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sso_identities"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array"})}),(0,t.jsx)(n.td,{children:"The linked SSO identities of the user"}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"urn:logto:scope:organizations"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"organizations"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:"The organization IDs the user belongs to"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"organization_data"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object[]"})}),(0,t.jsx)(n.td,{children:"The organization data the user belongs to"}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Claim name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"organization_roles"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsxs)(n.td,{children:["The organization roles the user belongs to with the format of ",(0,t.jsx)(n.code,{children:"<organization_id>:<role_name>"})]}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:['Considering performance and the data size, if "Needs userinfo?" is "Yes", it means the claim will not show up in the ID token, but will be returned in the ',(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"})," response."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},7709:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Before calling ",(0,t.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},60471:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>Q,contentTitle:()=>D,default:()=>q,frontMatter:()=>U,metadata:()=>F,toc:()=>Z});var t=s(11527),r=s(17279),i=s(90424),o=s(97781);const c=[...o.d$];function d(e){const n={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Logto SDK helps you fetch the user information from the OIDC ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["You can get the user information by calling ",(0,t.jsx)("code",{children:e.apiCodeFragment})," after signing in."]})}),"\n",(0,t.jsx)(o.ZP,{})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var h=s(88199),l=s(91837),p=s(31568),u=s(92179),j=s(50587),x=s(49659);function g(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>",\n  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Add API resources\n)\nlet client = LogtoClient(useConfig: config)\n'})})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}function m(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>",\n  appId: "<your-app-id>",\n  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"],\n  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],\n)\nlet client = LogtoClient(useConfig: config)\n'})})}function A(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function w(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>",\n  appId: "<your-app-id>",\n  scopes: ["read", "write"],\n  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],\n)\nlet client = LogtoClient(useConfig: config)\n'})})}function k(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(w,{...e})}):w(e)}const y=[...x.d$];function v(e){return(0,t.jsx)(x.ZP,{configResourcesCode:(0,t.jsx)(f,{}),configResourcesWithScopesCode:(0,t.jsx)(A,{}),configResourcesWithSharedScopesCode:(0,t.jsx)(k,{})})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v()}var P=s(15680);function R(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'  let accessToken = try await client.getAccessToken(for: "https://shopping.your-app.com/api")\n  // Custom logic\n'})})}function C(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(R,{...e})}):R(e)}const E=[...P.d$];function S(e){return(0,t.jsx)(P.ZP,{getAccessTokenApi:"getAccessToken",getAccessTokenCode:(0,t.jsx)(C,{})})}function I(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(S,{...e})}):S()}const T=[...j.d$,{value:"Configure Logto client",id:"configure-logto-client",level:3},...y,{value:"Fetch access token for the API resource",id:"fetch-access-token-for-the-api-resource",level:3},...E];function B(e){const n={h3:"h3",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"configure-logto-client",children:"Configure Logto client"}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(n.h3,{id:"fetch-access-token-for-the-api-resource",children:"Fetch access token for the API resource"}),"\n",(0,t.jsx)(I,{}),"\n"]})}function L(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(B,{...e})}):B(e)}const U={slug:"/quick-starts/swift",sidebar_label:"iOS (Swift)",sidebar_custom_props:{description:"iOS (Swift) application integration guide."}},D="iOS: Integrate Logto Swift SDK",F={id:"quick-starts/framework/swift/README",title:"iOS: Integrate Logto Swift SDK",description:"Add Logto SDK as a dependency",source:"@site/docs/quick-starts/framework/swift/README.mdx",sourceDirName:"quick-starts/framework/swift",slug:"/quick-starts/swift",permalink:"/quick-starts/swift",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/quick-starts/framework/swift/README.mdx",tags:[],version:"current",frontMatter:{slug:"/quick-starts/swift",sidebar_label:"iOS (Swift)",sidebar_custom_props:{description:"iOS (Swift) application integration guide."}},sidebar:"quickStartSidebar",previous:{title:"SvelteKit",permalink:"/quick-starts/sveltekit"},next:{title:"Vanilla JS",permalink:"/quick-starts/vanilla-js"}},Q={},Z=[...i.d$,{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},...l.d$,{value:"Init <code>LogtoClient</code>",id:"init-logtoclient",level:2},...u.d$,{value:"Sign in",id:"sign-in",level:2},...p.d$,{value:"Sign out",id:"sign-out",level:2},{value:"Fetch user information",id:"fetch-user-information",level:2},...c,{value:"API resources",id:"api-resources",level:2},...T,{value:"Attach acess token to request headers",id:"attach-acess-token-to-request-headers",level:3},{value:"Further readings",id:"further-readings",level:2},...h.d$];function N(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ios-integrate-logto-swift-sdk",children:"iOS: Integrate Logto Swift SDK"}),"\n",(0,t.jsx)(i.ZP,{type:"Native app"}),"\n",(0,t.jsx)(n.h2,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,t.jsx)(l.ZP,{}),"\n",(0,t.jsxs)(n.h2,{id:"init-logtoclient",children:["Init ",(0,t.jsx)(n.code,{children:"LogtoClient"})]}),"\n",(0,t.jsx)(u.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,t.jsx)(p.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"sign-out",children:"Sign out"}),"\n",(0,t.jsxs)(n.p,{children:["Calling ",(0,t.jsx)(n.code,{children:".signOut()"})," will clean all the Logto data in Keychain, if it has."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"await client.signOut()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fetch-user-information",children:"Fetch user information"}),"\n",(0,t.jsx)(a,{apiCodeFragment:"logtoClient.fetchUserInfo()"}),"\n",(0,t.jsx)(n.h2,{id:"api-resources",children:"API resources"}),"\n",(0,t.jsx)(L,{}),"\n",(0,t.jsx)(n.h3,{id:"attach-acess-token-to-request-headers",children:"Attach acess token to request headers"}),"\n",(0,t.jsxs)(n.p,{children:["Put the token in the ",(0,t.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,t.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),"), and you are good to go."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The Bearer Token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request ",(0,t.jsx)(n.code,{children:"Authorization"})," header."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'await LogtoRequest.get(\n  useSession: session,\n  endpoint: userInfoEndpoint,\n  headers: ["Authorization": "Bearer \\(accessToken)"]\n)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,t.jsx)(h.ZP,{})]})}function q(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(N,{...e})}):N(e)}},91837:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"https://github.com/logto-io/swift.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since Xcode 11, you can ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app",children:"directly import a Swift package"})," w/o any additional tool."]}),"\n",(0,t.jsxs)(n.p,{children:["We do not support ",(0,t.jsx)(n.strong,{children:"Carthage"})," and ",(0,t.jsx)(n.strong,{children:"CocoaPods"})," at the time due to some technical issues."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Carthage"}),(0,t.jsxs)(n.p,{children:["Carthage ",(0,t.jsxs)(n.a,{href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385",children:["needs a ",(0,t.jsx)(n.code,{children:"xcodeproj"})," file to build"]}),", but ",(0,t.jsx)(n.code,{children:"swift package generate-xcodeproj"})," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later."]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"CocoaPods"}),(0,t.jsxs)(n.p,{children:["CocoaPods ",(0,t.jsx)(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/3276",children:"does not support local dependency"})," and monorepo, thus it's hard to create a ",(0,t.jsx)(n.code,{children:".podspec"})," for this repo."]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},31568:(e,n,s)=>{s.d(n,{ZP:()=>h,d$:()=>d});var t=s(11527),r=s(17279),i=s(34193),o=s(75848),c=s(7709);const d=[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},...o.d$,{value:"Sign in with browser",id:"sign-in-with-browser",level:3},...c.d$];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,t.jsx)(o.ZP,{figureSrc:i.Z,redirectUri:"io.logto://callback"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Redirect URI in iOS SDK is only for internal use. There's ",(0,t.jsx)(n.em,{children:"NO NEED"})," to add a ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"Custom URL Scheme"})," until a connector asks."]})}),"\n",(0,t.jsx)(n.h3,{id:"sign-in-with-browser",children:"Sign in with browser"}),"\n",(0,t.jsx)(c.ZP,{calling:".signInWithBrowser(redirectUri:)"}),"\n",(0,t.jsx)(n.p,{children:"Go back to Xcode, use the following code to implement sign-in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'do {\n  try await client.signInWithBrowser(redirectUri: "io.logto://callback")\n  print(client.isAuthenticated) // true\n} catch let error as LogtoClientErrors.SignIn {\n  // error occured during sign in\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},92179:(e,n,s)=>{s.d(n,{ZP:()=>c,d$:()=>i});var t=s(11527),r=s(17279);const i=[];function o(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n'})}),"\n",(0,t.jsx)(n.p,{children:"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."}),"\n",(0,t.jsxs)(n.p,{children:["To turn off this behavior, set ",(0,t.jsx)(n.code,{children:"usingPersistStorage"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},34193:(e,n,s)=>{s.d(n,{Z:()=>t});const t="data:image/png;base64,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"},17279:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(50959);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);