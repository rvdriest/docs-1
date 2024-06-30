"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41656],{5928:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[{value:"Sign in with GitHub account",id:"sign-in-with-github-account",level:3},{value:"Create and configure OAuth app",id:"create-and-configure-oauth-app",level:3},{value:"Managing OAuth apps",id:"managing-oauth-apps",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4}];function s(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"sign-in-with-github-account",children:"Sign in with GitHub account"}),"\n",(0,i.jsxs)(t.p,{children:["Go to the ",(0,i.jsx)(t.a,{href:"https://github.com/",children:"GitHub website"})," and sign in with your GitHub account. You may register a new account if you don't have one."]}),"\n",(0,i.jsx)(t.h3,{id:"create-and-configure-oauth-app",children:"Create and configure OAuth app"}),"\n",(0,i.jsxs)(t.p,{children:["Follow the ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app",children:"creating an OAuth App"})," guide, and register a new application."]}),"\n",(0,i.jsxs)(t.p,{children:["Name your new OAuth application in ",(0,i.jsx)(t.strong,{children:"Application name"})," and fill up ",(0,i.jsx)(t.strong,{children:"Homepage URL"})," of the app.\nYou can leave ",(0,i.jsx)(t.strong,{children:"Application description"})," field blank and customize ",(0,i.jsx)(t.strong,{children:"Authorization callback URL"})," as ",(0,i.jsx)(t.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". The ",(0,i.jsx)(t.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'Note: If you encounter the error message "The redirect_uri MUST match the registered callback URL for this application." when logging in, try aligning the Authorization Callback URL of your GitHub OAuth App and your Logto App\'s redirect URL (of course, including the protocol) to resolve the issue.'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We suggest not to check the box before ",(0,i.jsx)(t.strong,{children:"Enable Device Flow"}),", or users who sign in with GitHub on mobile devices must confirm the initial sign-in action in the GitHub app. Many GitHub users do not install the GitHub mobile app on their phones, which could block the sign-in flow. Please ignore our suggestion if you are expecting end-users to confirm their sign-in flow. See details of ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow",children:"device flow"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"managing-oauth-apps",children:"Managing OAuth apps"}),"\n",(0,i.jsxs)(t.p,{children:["Go to the ",(0,i.jsx)(t.a,{href:"https://github.com/settings/developers",children:"OAuth Apps page"})," and you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.jsx)(t.code,{children:"Client ID"})," and generate ",(0,i.jsx)(t.code,{children:"Client secrets"})," in OAuth app detail pages."]}),"\n",(0,i.jsx)(t.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(t.p,{children:["Let's go back to Logto. Fill out the ",(0,i.jsx)(t.code,{children:"clientId"})," and ",(0,i.jsx)(t.code,{children:"clientSecret"})," field with ",(0,i.jsx)(t.em,{children:"Client ID"})," and ",(0,i.jsx)(t.em,{children:"Client Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of GitHub connector config JSON."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "clientID": "<your-client-id>",\n  "clientSecret": "<your-client-secret>"\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientId"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientSecret"}),(0,i.jsx)(t.td,{children:"string"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3101:(e,t,n)=>{n.d(t,{ZP:()=>j,d$:()=>g});var i=n(11527),o=n(17279),r=n(83861),s=n(33141),a=n(35954),c=n(11231),d=n(61648),l=n(93814),h=n(46007),u=n(93009),p=n(94842);const g=[...h.d$,{value:"Installation",id:"installation",level:3},...u.d$,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...c.d$,{value:"Add sign-in redirect URI",id:"add-sign-in-redirect-uri",level:3},...d.d$,{value:"Add sign-out redirect URI",id:"add-sign-out-redirect-uri",level:3},...l.d$,{value:"Add routes",id:"add-routes",level:3},...r.d$,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...a.d$,{value:"The <code>&lt;AuthorizeView /&gt;</code> component",id:"the-authorizeview--component",level:3},...s.d$,...p.d$];function x(e){const t={code:"code",h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"add-routes",children:"Add routes"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsxs)(t.h3,{id:"the-authorizeview--component",children:["The ",(0,i.jsx)(t.code,{children:"<AuthorizeView />"})," component"]}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(p.ZP,{sdk:".NET Core (Blazor Server)"})]})}function j(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},40959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,connector:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(11527),o=n(17279);n(87593),n(80710),n(12665),n(80386),n(31877),n(23095),n(3101),n(5928);const r={slug:"how-to-build-github-sign-in-with-dotnet-core-blazor-server-and-logto",authors:"logto",tags:["authentication","github","dotnet-core-blazor-server","c#","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with .NET Core (Blazor Server) and Logto"},s=void 0,a={permalink:"/tutorial/how-to-build-github-sign-in-with-dotnet-core-blazor-server-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-server-github.mdx",title:"How to build GitHub sign-in with .NET Core (Blazor Server) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"github",permalink:"/tutorial/tags/github"},{inline:!0,label:"dotnet-core-blazor-server",permalink:"/tutorial/tags/dotnet-core-blazor-server"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.33,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-github-sign-in-with-dotnet-core-blazor-server-and-logto",authors:"logto",tags:["authentication","github","dotnet-core-blazor-server","c#","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with .NET Core (Blazor Server) and Logto"},unlisted:!1,prevItem:{title:"How to build Facebook sign-in with .NET Core (Blazor Server) and Logto",permalink:"/tutorial/how-to-build-facebook-sign-in-with-dotnet-core-blazor-server-and-logto"},nextItem:{title:"How to build Google sign-in with .NET Core (Blazor Server) and Logto",permalink:"/tutorial/how-to-build-google-sign-in-with-dotnet-core-blazor-server-and-logto"}},c={authorsImageUrls:[void 0]},d="GitHub",l=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},83861:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Since Blazor Server uses SignalR to communicate between the server and the client, this means methods that directly manipulate the HTTP context (like issuing challenges or redirects) don't work as expected when called from a Blazor component."}),"\n",(0,i.jsx)(t.p,{children:"To make it right, we need to explicitly add two endpoints for sign-in and sign-out redirects:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'app.MapGet("/SignIn", async context =>\n{\n    if (!(context.User?.Identity?.IsAuthenticated ?? false))\n    {\n        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n\napp.MapGet("/SignOut", async context =>\n{\n    if (context.User?.Identity?.IsAuthenticated ?? false)\n    {\n        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now we can redirect to these endpoints to trigger sign-in and sign-out."})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},33141:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Alternatively, you can use the ",(0,i.jsx)(t.code,{children:"AuthorizeView"})," component to conditionally render content based on the user's authentication state. This component is useful when you want to show different content to authenticated and unauthenticated users."]}),"\n",(0,i.jsx)(t.p,{children:"In your Razor component, add the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cshtml",children:"@using Microsoft.AspNetCore.Components.Authorization\n\n@* ... *@\n\n<AuthorizeView>\n    <Authorized>\n        <p>Name: @User?.Identity?.Name</p>\n        @* Content for authenticated users *@\n    </Authorized>\n    <NotAuthorized>\n        @* Content for unauthenticated users *@\n    </NotAuthorized>\n</AuthorizeView>\n\n@* ... *@\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AuthorizeView"})," component requires a cascading parameter of type ",(0,i.jsx)(t.code,{children:"Task<AuthenticationState>"}),". A direct way to get this parameter is to add the ",(0,i.jsx)(t.code,{children:"<CascadingAuthenticationState>"})," component. However, due to the nature of Blazor Server, we cannot simply add the component to the layout or the root component (it may not work as expected). Instead, we can add the following code to the builder (",(0,i.jsx)(t.code,{children:"Program.cs"})," or ",(0,i.jsx)(t.code,{children:"Startup.cs"}),") to provide the cascading parameter:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"builder.Services.AddCascadingAuthenticationState();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then you can use the ",(0,i.jsx)(t.code,{children:"AuthorizeView"})," component in every component that needs it."]})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},35954:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In the Razor component, add the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@using System.Security.Claims\n@inject AuthenticationStateProvider AuthenticationStateProvider\n@inject NavigationManager NavigationManager\n\n@* ... *@\n\n<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true)\n{\n    <button @onclick="SignOut">Sign out</button>\n}\nelse\n{\n    <button @onclick="SignIn">Sign in</button>\n}\n\n@* ... *@\n\n@code {\n    private ClaimsPrincipal? User { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();\n        User = authState.User;\n    }\n\n    private void SignIn()\n    {\n        NavigationManager.NavigateTo("/SignIn", forceLoad: true);\n    }\n\n    private void SignOut()\n    {\n        NavigationManager.NavigateTo("/SignOut", forceLoad: true);\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Explanation"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The injected ",(0,i.jsx)(t.code,{children:"AuthenticationStateProvider"})," is used to get the current user's authentication state, and populate the ",(0,i.jsx)(t.code,{children:"User"})," property."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"SignIn"})," and ",(0,i.jsx)(t.code,{children:"SignOut"})," methods are used to redirect the user to the sign-in and sign-out endpoints respectively. Since the nature of Blazor Server, we need to use ",(0,i.jsx)(t.code,{children:"NavigationManager"})," with force load to trigger the redirection."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'The page will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},11231:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(t.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(t.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},61648:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add the following URI to the ",(0,i.jsx)(t.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(t.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(t.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(t.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(t.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(t.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(t.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["No need to set the ",(0,i.jsx)(t.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93814:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add the following URI to the ",(0,i.jsx)(t.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(t.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(t.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(t.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(t.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(t.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(t.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(t.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["No need to set the ",(0,i.jsx)(t.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},46007:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(t.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(t.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93009:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),o=n(17279);const r=[];function s(e){const t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}}}]);