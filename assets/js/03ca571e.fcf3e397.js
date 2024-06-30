"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35442],{51341:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[{value:"Set up Azure AD in the Azure Portal",id:"set-up-azure-ad-in-the-azure-portal",level:3},{value:"Configure your client secret",id:"configure-your-client-secret",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4},{value:"References",id:"references",level:3}];function s(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Visit the ",(0,i.jsx)(t.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,i.jsx)(t.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,i.jsx)(t.strong,{children:"access type"})," and add your ",(0,i.jsx)(t.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,i.jsx)(t.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,i.jsx)(t.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,i.jsx)(t.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,i.jsxs)(t.li,{children:["If you select ",(0,i.jsx)(t.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,i.jsx)(t.strong,{children:"TenantID"}),", else you need to enter ",(0,i.jsx)(t.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In your newly created project, click the ",(0,i.jsx)(t.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,i.jsx)(t.strong,{children:"New client secret"})," from the top."]}),"\n",(0,i.jsx)(t.li,{children:"Enter a description and an expiration."}),"\n",(0,i.jsxs)(t.li,{children:["This will only show your client secret once. Save the ",(0,i.jsx)(t.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add your App Registration's ",(0,i.jsx)(t.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,i.jsxs)(t.li,{children:["Add your ",(0,i.jsx)(t.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,i.jsxs)(t.li,{children:["Add your App Registration's ",(0,i.jsx)(t.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,i.jsxs)(t.li,{children:["Add your Microsoft ",(0,i.jsx)(t.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,i.jsx)(t.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/",\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientId"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientSecret"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenantId"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cloudInstance"}),(0,i.jsx)(t.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"references",children:"References"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},37173:(e,t,n)=>{n.d(t,{ZP:()=>g,d$:()=>u});var i=n(11527),o=n(17279),r=n(11231),s=n(61648),c=n(93814),a=n(46007),l=n(93009),d=n(27882),h=n(94842);const u=[...a.d$,{value:"Installation",id:"installation",level:3},...l.d$,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...r.d$,{value:"Add sign-in redirect URI",id:"add-sign-in-redirect-uri",level:3},...s.d$,{value:"Add sign-out redirect URI",id:"add-sign-out-redirect-uri",level:3},...c.d$,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...d.d$,...h.d$];function p(e){const t={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:".NET Core (Razor Pages)"})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},78976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,connector:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(11527),o=n(17279);n(87593),n(80710),n(12665),n(80386),n(31877),n(23095),n(37173),n(51341);const r={slug:"how-to-build-azure-ad-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","azure-ad","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with .NET Core (Razor Pages) and Logto"},s=void 0,c={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-dotnet-core-razor-pages-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-razor-pages-azure-ad.mdx",title:"How to build Azure AD sign-in with .NET Core (Razor Pages) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{inline:!0,label:"dotnet-core-razor-pages",permalink:"/tutorial/tags/dotnet-core-razor-pages"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.34,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","azure-ad","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with .NET Core (Razor Pages) and Logto"},unlisted:!1,prevItem:{title:"How to build AWS SES Email passwordless sign-in with .NET Core (Razor Pages) and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-razor-pages-and-logto"},nextItem:{title:"How to build Discord sign-in with .NET Core (Razor Pages) and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-dotnet-core-razor-pages-and-logto"}},a={authorsImageUrls:[void 0]},l="Azure AD",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},11231:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(t.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},61648:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add the following URI to the ",(0,i.jsx)(t.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(t.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(t.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(t.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(t.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(t.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(t.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["No need to set the ",(0,i.jsx)(t.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93814:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add the following URI to the ",(0,i.jsx)(t.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(t.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(t.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(t.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(t.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(t.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(t.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["No need to set the ",(0,i.jsx)(t.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},46007:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(t.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(t.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93009:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},27882:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["First, add the handler methods to your ",(0,i.jsx)(t.code,{children:"PageModel"}),", for example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'public class IndexModel : PageModel\n{\n  public async Task OnPostSignInAsync()\n  {\n    await HttpContext.ChallengeAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n\n  public async Task OnPostSignOutAsync()\n  {\n    await HttpContext.SignOutAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Then, add the buttons to your Razor page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cshtml",children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n<form method="post">\n  @if (User.Identity?.IsAuthenticated == true) {\n    <button type="submit" asp-page-handler="SignOut">Sign out</button>\n  } else {\n    <button type="submit" asp-page-handler="SignIn">Sign in</button>\n  }\n</form>\n'})}),"\n",(0,i.jsx)(t.p,{children:'It will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}}}]);