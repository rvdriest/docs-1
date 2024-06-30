"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37426],{81378:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,t.jsx)(n.p,{children:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."}),"\n",(0,t.jsx)(n.p,{children:"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,t.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,t.jsx)(n.p,{children:"You can skip some sections if you have already finished."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"register-aws-account",children:"Register AWS account"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," and register an account."]}),"\n",(0,t.jsx)(n.h4,{id:"create-a-identity",children:"Create a identity"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Amazon Simple Email Service"})," Console"]}),"\n",(0,t.jsxs)(n.li,{children:["Create an identity, choose one of the following options","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a domain"}),"\n",(0,t.jsx)(n.li,{children:"Create an email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"configuration-of-the-connector",children:"Configuration of the connector"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click your username in the upper right corner of the Amazon console to enter ",(0,t.jsx)(n.code,{children:"Security Credentials"}),". If you don't have one, create an ",(0,t.jsx)(n.code,{children:"AccessKey"})," and save it carefully."]}),"\n",(0,t.jsxs)(n.li,{children:["Complete the settings of the ",(0,t.jsx)(n.code,{children:"Amazon Simple Email Service"})," connector:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"AccessKey ID"})," and ",(0,t.jsx)(n.code,{children:"AccessKey Secret"})," obtained in step 1 to fill in ",(0,t.jsx)(n.code,{children:"accessKeyId"})," and ",(0,t.jsx)(n.code,{children:"accessKeySecret"})," respectively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),": Fill in the ",(0,t.jsx)(n.code,{children:"region"})," field with the region of the identity you use to send mail."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"emailAddress"}),": The email address you use to send mail, in the format of ",(0,t.jsx)(n.code,{children:"Logto<noreply@logto.io>"})," or ",(0,t.jsx)(n.code,{children:"<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["the following parameters are optional; parameters description can be found in the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"AWS SES API documentation"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"test-the-amazon-ses-connector",children:"Test the Amazon SES connector"}),"\n",(0,t.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'}),"\n",(0,t.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,t.jsx)(n.h4,{id:"configure-types",children:"Configure types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessKeyId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessKeySecret"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"region"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"emailAddress"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"configurationSetName"}),(0,t.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"templates"}),(0,t.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Template Properties"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Enum values"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subject"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"content"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usageType"}),(0,t.jsx)(n.td,{children:"enum string"}),(0,t.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},86269:(e,n,i)=>{i.d(n,{ZP:()=>p,d$:()=>d});var t=i(11527),o=i(17279),s=i(20492),r=i(81301),c=i(72226),a=i(55257),l=i(94842);const d=[...s.d$,{value:"Installation",id:"installation",level:3},...r.d$,...c.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...a.d$,...l.d$];function h(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.ZP,{}),"\n",(0,t.jsx)(c.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,t.jsx)(a.ZP,{}),"\n",(0,t.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},53136:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:i(64897).Z+"",width:"4164",height:"1290"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},59885:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:i(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:i(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},82272:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(11527),o=i(17279);i(87593),i(80710),i(53136),i(80386),i(59885),i(23095),i(86269),i(81378);const s={slug:"how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","aws-ses","dotnet-core-blazor-webassembly","c#","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto"},r=void 0,c={permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-aws-ses.mdx",title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"aws-ses",permalink:"/tutorial/tags/aws-ses"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.37,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","aws-ses","dotnet-core-blazor-webassembly","c#","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build Apple sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build Azure AD sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},a={authorsImageUrls:[void 0]},l="AWS SES",d=[];function h(e){return(0,t.jsx)(t.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h()}},20492:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,t.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},81301:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},72226:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function r(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,t.jsxs)(n.p,{children:["Include ",(0,t.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,t.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["There's no need to use the ",(0,t.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,t.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remember to add the ",(0,t.jsx)(n.code,{children:"RedirectUri"})," and ",(0,t.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},55257:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function r(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,t.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,t.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,t.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,t.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,t.jsx)(n.code,{children:"User"})," and ",(0,t.jsx)(n.code,{children:"Profile"})," classes in the ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},64897:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"}}]);