"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83259],{81378:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,i.jsx)(n.p,{children:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."}),"\n",(0,i.jsx)(n.p,{children:"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,i.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,i.jsx)(n.p,{children:"You can skip some sections if you have already finished."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"register-aws-account",children:"Register AWS account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," and register an account."]}),"\n",(0,i.jsx)(n.h4,{id:"create-a-identity",children:"Create a identity"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," Console"]}),"\n",(0,i.jsxs)(n.li,{children:["Create an identity, choose one of the following options","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a domain"}),"\n",(0,i.jsx)(n.li,{children:"Create an email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-of-the-connector",children:"Configuration of the connector"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click your username in the upper right corner of the Amazon console to enter ",(0,i.jsx)(n.code,{children:"Security Credentials"}),". If you don't have one, create an ",(0,i.jsx)(n.code,{children:"AccessKey"})," and save it carefully."]}),"\n",(0,i.jsxs)(n.li,{children:["Complete the settings of the ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," connector:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"AccessKey ID"})," and ",(0,i.jsx)(n.code,{children:"AccessKey Secret"})," obtained in step 1 to fill in ",(0,i.jsx)(n.code,{children:"accessKeyId"})," and ",(0,i.jsx)(n.code,{children:"accessKeySecret"})," respectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"region"}),": Fill in the ",(0,i.jsx)(n.code,{children:"region"})," field with the region of the identity you use to send mail."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"emailAddress"}),": The email address you use to send mail, in the format of ",(0,i.jsx)(n.code,{children:"Logto<noreply@logto.io>"})," or ",(0,i.jsx)(n.code,{children:"<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["the following parameters are optional; parameters description can be found in the ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"AWS SES API documentation"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"test-the-amazon-ses-connector",children:"Test the Amazon SES connector"}),"\n",(0,i.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'}),"\n",(0,i.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,i.jsx)(n.h4,{id:"configure-types",children:"Configure types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeyId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeySecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"region"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"configurationSetName"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Template Properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Enum values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3101:(e,n,t)=>{t.d(n,{ZP:()=>j,d$:()=>g});var i=t(11527),o=t(17279),r=t(83861),s=t(33141),a=t(35954),c=t(11231),d=t(61648),l=t(93814),h=t(46007),u=t(93009),p=t(94842);const g=[...h.d$,{value:"Installation",id:"installation",level:3},...u.d$,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...c.d$,{value:"Add sign-in redirect URI",id:"add-sign-in-redirect-uri",level:3},...d.d$,{value:"Add sign-out redirect URI",id:"add-sign-out-redirect-uri",level:3},...l.d$,{value:"Add routes",id:"add-routes",level:3},...r.d$,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...a.d$,{value:"The <code>&lt;AuthorizeView /&gt;</code> component",id:"the-authorizeview--component",level:3},...s.d$,...p.d$];function x(e){const n={code:"code",h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-routes",children:"Add routes"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsxs)(n.h3,{id:"the-authorizeview--component",children:["The ",(0,i.jsx)(n.code,{children:"<AuthorizeView />"})," component"]}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(p.ZP,{sdk:".NET Core (Blazor Server)"})]})}function j(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},53136:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(64897).Z+"",width:"4164",height:"1290"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},59885:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},98039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>g,default:()=>v,frontMatter:()=>p,metadata:()=>x,toc:()=>f});var i=t(11527),o=t(17279),r=t(87593),s=t(80710),a=t(53136),c=t(80386),d=t(59885),l=t(23095),h=t(3101),u=t(81378);const p={slug:"how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-server-and-logto",authors:"logto",tags:["authentication","aws-ses","dotnet-core-blazor-server","c#","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor Server) and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-server-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-server-aws-ses.mdx",title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor Server) and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"aws-ses",permalink:"/tutorial/tags/aws-ses"},{inline:!0,label:"dotnet-core-blazor-server",permalink:"/tutorial/tags/dotnet-core-blazor-server"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.365,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-server-and-logto",authors:"logto",tags:["authentication","aws-ses","dotnet-core-blazor-server","c#","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor Server) and Logto"},unlisted:!1,prevItem:{title:"How to build Apple sign-in with .NET Core (Blazor Server) and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-blazor-server-and-logto"},nextItem:{title:"How to build Azure AD sign-in with .NET Core (Blazor Server) and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-dotnet-core-blazor-server-and-logto"}},j={authorsImageUrls:[void 0]},m="AWS SES",f=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...s.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add AWS SES connector",id:"add-aws-ses-connector",level:2},...a.d$,{value:"Set up AWS SES email connector",id:"set-up-aws-ses-email-connector",level:2},...u.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable AWS SES connector in Sign-in Experience",id:"enable-aws-ses-connector-in-sign-in-experience",level:2},...d.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...l.d$,{value:"Further readings",id:"further-readings",level:2}];function w(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{connector:m,sdk:".NET Core (Blazor Server)",link:"https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-server"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(s.ZP,{type:"Traditional web",framework:".NET Core (Blazor Server)"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"add-aws-ses-connector",children:"Add AWS SES connector"}),"\n",(0,i.jsx)(a.ZP,{connector:m,connectorType:"Email"}),"\n",(0,i.jsx)(n.h2,{id:"set-up-aws-ses-email-connector",children:"Set up AWS SES email connector"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(c.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"enable-aws-ses-connector-in-sign-in-experience",children:"Enable AWS SES connector in Sign-in Experience"}),"\n",(0,i.jsx)(d.ZP,{connectorType:"Email",passwordlessSignUpIdentifier:"Email address"}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(l.ZP,{connector:m,sdk:".NET Core (Blazor Server)"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function v(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}},83861:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Since Blazor Server uses SignalR to communicate between the server and the client, this means methods that directly manipulate the HTTP context (like issuing challenges or redirects) don't work as expected when called from a Blazor component."}),"\n",(0,i.jsx)(n.p,{children:"To make it right, we need to explicitly add two endpoints for sign-in and sign-out redirects:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'app.MapGet("/SignIn", async context =>\n{\n    if (!(context.User?.Identity?.IsAuthenticated ?? false))\n    {\n        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n\napp.MapGet("/SignOut", async context =>\n{\n    if (context.User?.Identity?.IsAuthenticated ?? false)\n    {\n        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now we can redirect to these endpoints to trigger sign-in and sign-out."})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},33141:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component to conditionally render content based on the user's authentication state. This component is useful when you want to show different content to authenticated and unauthenticated users."]}),"\n",(0,i.jsx)(n.p,{children:"In your Razor component, add the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:"@using Microsoft.AspNetCore.Components.Authorization\n\n@* ... *@\n\n<AuthorizeView>\n    <Authorized>\n        <p>Name: @User?.Identity?.Name</p>\n        @* Content for authenticated users *@\n    </Authorized>\n    <NotAuthorized>\n        @* Content for unauthenticated users *@\n    </NotAuthorized>\n</AuthorizeView>\n\n@* ... *@\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component requires a cascading parameter of type ",(0,i.jsx)(n.code,{children:"Task<AuthenticationState>"}),". A direct way to get this parameter is to add the ",(0,i.jsx)(n.code,{children:"<CascadingAuthenticationState>"})," component. However, due to the nature of Blazor Server, we cannot simply add the component to the layout or the root component (it may not work as expected). Instead, we can add the following code to the builder (",(0,i.jsx)(n.code,{children:"Program.cs"})," or ",(0,i.jsx)(n.code,{children:"Startup.cs"}),") to provide the cascading parameter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"builder.Services.AddCascadingAuthenticationState();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then you can use the ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component in every component that needs it."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},35954:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In the Razor component, add the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@using System.Security.Claims\n@inject AuthenticationStateProvider AuthenticationStateProvider\n@inject NavigationManager NavigationManager\n\n@* ... *@\n\n<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true)\n{\n    <button @onclick="SignOut">Sign out</button>\n}\nelse\n{\n    <button @onclick="SignIn">Sign in</button>\n}\n\n@* ... *@\n\n@code {\n    private ClaimsPrincipal? User { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();\n        User = authState.User;\n    }\n\n    private void SignIn()\n    {\n        NavigationManager.NavigateTo("/SignIn", forceLoad: true);\n    }\n\n    private void SignOut()\n    {\n        NavigationManager.NavigateTo("/SignOut", forceLoad: true);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Explanation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The injected ",(0,i.jsx)(n.code,{children:"AuthenticationStateProvider"})," is used to get the current user's authentication state, and populate the ",(0,i.jsx)(n.code,{children:"User"})," property."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"SignIn"})," and ",(0,i.jsx)(n.code,{children:"SignOut"})," methods are used to redirect the user to the sign-in and sign-out endpoints respectively. Since the nature of Blazor Server, we need to use ",(0,i.jsx)(n.code,{children:"NavigationManager"})," with force load to trigger the redirection."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The page will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},11231:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},61648:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93814:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},46007:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93009:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},64897:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"}}]);