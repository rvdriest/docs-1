"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41740],{61844:(e,n,i)=>{i.d(n,{ZP:()=>s,d$:()=>r});var o=i(11527),t=i(17279);const r=[{value:"Sign in with Hugging Face account",id:"sign-in-with-hugging-face-account",level:2},{value:"Create an OAuth app in the Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Managing Hugging Face OAuth apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Sign in with Hugging Face account"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face website"})," and sign in with your Hugging Face account. You may register a new account if you don't have one."]}),"\n",(0,o.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Creating an oauth app"})," guide, and register a new application."]}),"\n",(0,o.jsx)(n.p,{children:"In the creation process, you will need to provide the following information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Application Name"}),": The name of your application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Homepage URL"}),": The URL of your application's homepage or landing page."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Logo URL"}),": The URL of your application's logo."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Scopes"}),": The scopes allowed for the OAuth app. For Hugging Face connector, usually use ",(0,o.jsx)(n.code,{children:"profile"})," to get the user's profile information and ",(0,o.jsx)(n.code,{children:"email"})," to get the user's email address. Ensure these scopes are allowed in your Hugging Face OAuth app if you want to use them."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Redirect URI"}),": The URL to redirect the user to after they have authenticated. You can find the redirect URI in the Logto Admin Console when you're creating a Hugging Face connector or in the created Hugging Face connector details page."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Managing Hugging Face OAuth apps"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Connected Applications"})," page, you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,o.jsx)(n.code,{children:"Client ID"})," and generate ",(0,o.jsx)(n.code,{children:"App secrets"})," in corresponding OAuth app settings pages."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,o.jsxs)(n.p,{children:["Go back to Logto Admin Console And Fill out the ",(0,o.jsx)(n.code,{children:"clientId"})," and ",(0,o.jsx)(n.code,{children:"clientSecret"})," field with ",(0,o.jsx)(n.em,{children:"Client ID"})," and ",(0,o.jsx)(n.em,{children:"App Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,o.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"Hugging Face supported scopes"}),". If not provided, scope defaults to be ",(0,o.jsx)(n.code,{children:"profile"}),". For Hugging Face connector, the scope you may want to use is ",(0,o.jsx)(n.code,{children:"profile"})," and ",(0,o.jsx)(n.code,{children:"email"}),". ",(0,o.jsx)(n.code,{children:"profile"})," scope is required to get the user's profile information, and ",(0,o.jsx)(n.code,{children:"email"})," scope is required to get the user's email address. Ensure you have allowed these scopes in your Hugging Face OAuth app (configured in ",(0,o.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"})," section)."]}),"\n",(0,o.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"scope"}),(0,o.jsx)(n.td,{children:"string"})]})]})]})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},86269:(e,n,i)=>{i.d(n,{ZP:()=>g,d$:()=>d});var o=i(11527),t=i(17279),r=i(20492),a=i(81301),s=i(72226),c=i(55257),l=i(94842);const d=[...r.d$,{value:"Installation",id:"installation",level:3},...a.d$,...s.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...c.d$,...l.d$];function h(e){const n={h3:"h3",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},40667:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>x,toc:()=>f});var o=i(11527),t=i(17279),r=i(87593),a=i(80710),s=i(12665),c=i(80386),l=i(31877),d=i(23095),h=i(86269),g=i(61844);const u={slug:"how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","hugging-face","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with .NET Core (Blazor WebAssembly) and Logto"},p=void 0,x={permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-hugging-face.mdx",title:"How to build Hugging Face sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"hugging-face",permalink:"/tutorial/tags/hugging-face"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.355,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","hugging-face","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build Google sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-google-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build Kakao sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},j={authorsImageUrls:[void 0]},m="Hugging Face",f=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add Hugging Face connector",id:"add-hugging-face-connector",level:2},...s.d$,{value:"Set up Hugging Face OAuth app",id:"set-up-hugging-face-oauth-app",level:2},...g.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable Hugging Face connector in Sign-in Experience",id:"enable-hugging-face-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{connector:m,sdk:".NET Core (Blazor WebAssembly)",link:"https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.ZP,{type:"Single page app",framework:".NET Core (Blazor WebAssembly)"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"add-hugging-face-connector",children:"Add Hugging Face connector"}),"\n",(0,o.jsx)(s.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"set-up-hugging-face-oauth-app",children:"Set up Hugging Face OAuth app"}),"\n",(0,o.jsx)(g.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(c.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"enable-hugging-face-connector-in-sign-in-experience",children:"Enable Hugging Face connector in Sign-in Experience"}),"\n",(0,o.jsx)(l.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(d.ZP,{connector:m,sdk:".NET Core (Blazor WebAssembly)"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function y(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},20492:(e,n,i)=>{i.d(n,{ZP:()=>s,d$:()=>r});var o=i(11527),t=i(17279);const r=[];function a(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,o.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},81301:(e,n,i)=>{i.d(n,{ZP:()=>s,d$:()=>r});var o=i(11527),t=i(17279);const r=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},72226:(e,n,i)=>{i.d(n,{ZP:()=>s,d$:()=>r});var o=i(11527),t=i(17279);const r=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function a(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,o.jsxs)(n.p,{children:["Include ",(0,o.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,o.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["There's no need to use the ",(0,o.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,o.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Remember to add the ",(0,o.jsx)(n.code,{children:"RedirectUri"})," and ",(0,o.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},55257:(e,n,i)=>{i.d(n,{ZP:()=>s,d$:()=>r});var o=i(11527),t=i(17279);const r=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function a(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,o.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,o.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,o.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,o.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,o.jsx)(n.code,{children:"User"})," and ",(0,o.jsx)(n.code,{children:"Profile"})," classes in the ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);