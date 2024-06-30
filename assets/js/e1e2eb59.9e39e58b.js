"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[57273],{28585:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Set up a project in the Google API Console",id:"set-up-a-project-in-the-google-api-console",level:3},{value:"Configure your consent screen",id:"configure-your-consent-screen",level:3},{value:"Config OAuth consent screen",id:"config-oauth-consent-screen",level:3},{value:"Config scopes",id:"config-scopes",level:3},{value:"Add test users (External user type only)",id:"add-test-users-external-user-type-only",level:3},{value:"Obtain OAuth 2.0 credentials",id:"obtain-oauth-20-credentials",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Google developer docs",id:"google-developer-docs",level:4}];function s(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"set-up-a-project-in-the-google-api-console",children:"Set up a project in the Google API Console"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://console.developers.google.com",children:"Google API Console"})," and sign in with your Google account."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Select a project"})," button on the top menu bar, and click the ",(0,i.jsx)(n.strong,{children:"New Project"})," button to create a project."]}),"\n",(0,i.jsxs)(n.li,{children:["In your newly created project, click the ",(0,i.jsx)(n.strong,{children:"APIs & Services"})," to enter the ",(0,i.jsx)(n.strong,{children:"APIs & Services"})," menu."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-consent-screen",children:"Configure your consent screen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the left ",(0,i.jsx)(n.strong,{children:"APIs & Services"})," menu, click the ",(0,i.jsx)(n.strong,{children:"OAuth consent screen"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose the ",(0,i.jsx)(n.strong,{children:"User Type"})," you want, and click the ",(0,i.jsx)(n.strong,{children:"Create"})," button. (Note: If you select ",(0,i.jsx)(n.strong,{children:"External"})," as your ",(0,i.jsx)(n.strong,{children:"User Type"}),", you will need to add test users later.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now you will be on the ",(0,i.jsx)(n.strong,{children:"Edit app registration"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"config-oauth-consent-screen",children:"Config OAuth consent screen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow the instructions to fill out the ",(0,i.jsx)(n.strong,{children:"OAuth consent screen"})," form."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-scopes",children:"Config scopes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"ADD OR REMOVE SCOPES"})," and select ",(0,i.jsx)(n.code,{children:"../auth/userinfo.email"}),", ",(0,i.jsx)(n.code,{children:"../auth/userinfo.profile"})," and ",(0,i.jsx)(n.code,{children:"openid"})," in the popup drawer, and click ",(0,i.jsx)(n.strong,{children:"UPDATE"})," to finish."]}),"\n",(0,i.jsx)(n.li,{children:"Fill out the form as you need."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-test-users-external-user-type-only",children:"Add test users (External user type only)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"ADD USERS"})," and add test users to allow these users to access your application while testing."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now you should have the Google OAuth 2.0 consent screen configured."}),"\n",(0,i.jsx)(n.h3,{id:"obtain-oauth-20-credentials",children:"Obtain OAuth 2.0 credentials"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the left ",(0,i.jsx)(n.strong,{children:"APIs & Services"})," menu, click the ",(0,i.jsx)(n.strong,{children:"Credentials"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.strong,{children:"Credentials"})," page, click the ",(0,i.jsx)(n.strong,{children:"+ CREATE CREDENTIALS"})," button on the top menu bar, and select ",(0,i.jsx)(n.strong,{children:"OAuth client ID"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.strong,{children:"Create OAuth client ID"})," page, select ",(0,i.jsx)(n.strong,{children:"Web application"})," as the application type."]}),"\n",(0,i.jsx)(n.li,{children:"Fill out the basic information for your application."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"+ Add URI"})," to add an authorized domain to the ",(0,i.jsx)(n.strong,{children:"Authorized JavaScript origins"})," section. This is the domain that your logto authorization page will be served from. In our case, this will be ",(0,i.jsx)(n.code,{children:"${your_logto_origin}"}),". e.g.",(0,i.jsx)(n.code,{children:"https://logto.dev"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"+ Add URI"})," in the *",(0,i.jsx)(n.strong,{children:"*Authorized redirect URIs**"})," section to set up the *",(0,i.jsx)(n.strong,{children:"*Authorized redirect URIs**"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,i.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". e.g. ",(0,i.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". The ",(0,i.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create"})," to finish and then you will get the ",(0,i.jsx)(n.strong,{children:"Client ID"})," and ",(0,i.jsx)(n.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"google-developer-docs",children:"Google developer docs"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity: Setting up OAuth 2.0"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},78208:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>u});var i=t(11527),o=t(17279),r=t(11231),s=t(61648),l=t(93814),c=t(46007),d=t(53078),a=t(93009),h=t(94842);const u=[...c.d$,{value:"Installation",id:"installation",level:3},...a.d$,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...r.d$,{value:"Add sign-in redirect URI",id:"add-sign-in-redirect-uri",level:3},...s.d$,{value:"Add sign-out redirect URI",id:"add-sign-out-redirect-uri",level:3},...l.d$,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...d.d$,...h.d$];function g(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:".NET Core (MVC)"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},34556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,connector:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(11527),o=t(17279);t(87593),t(80710),t(12665),t(80386),t(31877),t(23095),t(78208),t(28585);const r={slug:"how-to-build-google-sign-in-with-dotnet-core-mvc-and-logto",authors:"logto",tags:["authentication","google","dotnet-core-mvc","c#","social-sign-in","sign-in","login"],title:"How to build Google sign-in with .NET Core (MVC) and Logto"},s=void 0,l={permalink:"/tutorial/how-to-build-google-sign-in-with-dotnet-core-mvc-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-mvc-google.mdx",title:"How to build Google sign-in with .NET Core (MVC) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"google",permalink:"/tutorial/tags/google"},{inline:!0,label:"dotnet-core-mvc",permalink:"/tutorial/tags/dotnet-core-mvc"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.315,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-google-sign-in-with-dotnet-core-mvc-and-logto",authors:"logto",tags:["authentication","google","dotnet-core-mvc","c#","social-sign-in","sign-in","login"],title:"How to build Google sign-in with .NET Core (MVC) and Logto"},unlisted:!1,prevItem:{title:"How to build GitHub sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-dotnet-core-mvc-and-logto"},nextItem:{title:"How to build Hugging Face sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-dotnet-core-mvc-and-logto"}},c={authorsImageUrls:[void 0]},d="Google",a=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},11231:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},61648:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93814:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},46007:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},53078:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["First, add actions methods to your ",(0,i.jsx)(n.code,{children:"Controller"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class HomeController : Controller\n{\n  public IActionResult SignIn()\n  {\n    // This will redirect the user to the Logto sign-in page.\n    return Challenge(new AuthenticationProperties { RedirectUri = "/" });\n  }\n\n  // Use the `new` keyword to avoid conflict with the `ControllerBase.SignOut` method\n  new public IActionResult SignOut()\n  {\n    // This will clear the authentication cookie and redirect the user to the Logto sign-out page\n    // to clear the Logto session as well.\n    return SignOut(new AuthenticationProperties { RedirectUri = "/" });\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, add the links to your View:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true) {\n  <a asp-controller="Home" asp-action="SignOut">Sign out</a>\n} else {\n  <a asp-controller="Home" asp-action="SignIn">Sign in</a>\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'It will show the "Sign in" link if the user is not authenticated, and show the "Sign out" link if the user is authenticated.'})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93009:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}}}]);