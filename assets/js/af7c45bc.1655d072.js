"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[53950],{51341:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var o=t(11527),i=t(17279);const r=[{value:"Set up Azure AD in the Azure Portal",id:"set-up-azure-ad-in-the-azure-portal",level:3},{value:"Configure your client secret",id:"configure-your-client-secret",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4},{value:"References",id:"references",level:3}];function s(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,o.jsx)(n.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,o.jsx)(n.strong,{children:"access type"})," and add your ",(0,o.jsx)(n.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(n.li,{children:["If you select ",(0,o.jsx)(n.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,o.jsx)(n.strong,{children:"TenantID"}),", else you need to enter ",(0,o.jsx)(n.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In your newly created project, click the ",(0,o.jsx)(n.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,o.jsx)(n.strong,{children:"New client secret"})," from the top."]}),"\n",(0,o.jsx)(n.li,{children:"Enter a description and an expiration."}),"\n",(0,o.jsxs)(n.li,{children:["This will only show your client secret once. Save the ",(0,o.jsx)(n.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your ",(0,o.jsx)(n.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your Microsoft ",(0,o.jsx)(n.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,o.jsx)(n.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/",\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tenantId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"cloudInstance"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},86269:(e,n,t)=>{t.d(n,{ZP:()=>u,d$:()=>d});var o=t(11527),i=t(17279),r=t(20492),s=t(81301),a=t(72226),c=t(55257),l=t(94842);const d=[...r.d$,{value:"Installation",id:"installation",level:3},...s.d$,...a.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...c.d$,...l.d$];function h(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},64416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,connector:()=>m,contentTitle:()=>g,default:()=>A,frontMatter:()=>p,metadata:()=>j,toc:()=>b});var o=t(11527),i=t(17279),r=t(87593),s=t(80710),a=t(12665),c=t(80386),l=t(31877),d=t(23095),h=t(86269),u=t(51341);const p={slug:"how-to-build-azure-ad-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","azure-ad","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with .NET Core (Blazor WebAssembly) and Logto"},g=void 0,j={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-azure-ad.mdx",title:"How to build Azure AD sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.345,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","azure-ad","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build Discord sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},x={authorsImageUrls:[void 0]},m="Azure AD",b=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...s.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add Azure AD connector",id:"add-azure-ad-connector",level:2},...a.d$,{value:"Set up Azure AD",id:"set-up-azure-ad",level:2},...u.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable Azure AD connector in Sign-in Experience",id:"enable-azure-ad-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function f(e){const n={a:"a",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{connector:m,sdk:".NET Core (Blazor WebAssembly)",link:"https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(s.ZP,{type:"Single page app",framework:".NET Core (Blazor WebAssembly)"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"add-azure-ad-connector",children:"Add Azure AD connector"}),"\n",(0,o.jsx)(a.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"set-up-azure-ad",children:"Set up Azure AD"}),"\n",(0,o.jsx)(u.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(c.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"enable-azure-ad-connector-in-sign-in-experience",children:"Enable Azure AD connector in Sign-in Experience"}),"\n",(0,o.jsx)(l.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(d.ZP,{connector:m,sdk:".NET Core (Blazor WebAssembly)"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function A(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},20492:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var o=t(11527),i=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,o.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},81301:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var o=t(11527),i=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},72226:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var o=t(11527),i=t(17279);const r=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function s(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,o.jsxs)(n.p,{children:["Include ",(0,o.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,o.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["There's no need to use the ",(0,o.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,o.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Remember to add the ",(0,o.jsx)(n.code,{children:"RedirectUri"})," and ",(0,o.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},55257:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var o=t(11527),i=t(17279);const r=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function s(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,o.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,o.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,o.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,o.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,o.jsx)(n.code,{children:"User"})," and ",(0,o.jsx)(n.code,{children:"Profile"})," classes in the ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}}}]);