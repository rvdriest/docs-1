"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[56355],{60486:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to enroll ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsx)(n.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(16330).Z+"",width:"1220",height:"398"})}),"\n",(0,i.jsxs)(n.p,{children:['See the "Enable an App ID" section in ',(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,i.jsx)(n.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,i.jsx)(n.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,i.jsxs)(n.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,i.jsx)(n.code,{children:"Logto Test"})," and ",(0,i.jsx)(n.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,i.jsx)(n.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,i.jsx)(n.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(61831).Z+"",width:"1170",height:"186"})}),"\n",(0,i.jsx)(n.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,i.jsxs)(n.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,i.jsx)(n.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,i.jsx)(n.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,i.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,i.jsx)(n.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"domain-and-url",src:t(88255).Z+"",width:"988",height:"668"})}),"\n",(0,i.jsx)(n.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsxs)(n.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,i.jsx)(n.code,{children:"localhost"})," domain."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to test locally, you need to edit ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,i.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(n.p,{children:["You need to use the identifier that fills in the ",(0,i.jsx)(n.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["This connector doesn't support customizing ",(0,i.jsx)(n.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,i.jsx)(n.code,{children:"form_post"})," response mode when ",(0,i.jsx)(n.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,i.jsx)(n.p,{children:"We'll figure out this later."}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},27170:function(e,n,t){t.d(n,{ZP:function(){return u}});var i=t(11527),o=t(17279),r=t(89009),s=t(29877),c=t(26871),a=t(82755),l=t(76162),d=t(25684),h=t(13994);function p(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:".NET Core (Razor Pages)"})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},55458:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},32778:function(e,n,t){t.d(n,{ZP:function(){return c}});var i=t(11527),o=t(17279),r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function s(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},81057:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},10444:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},69441:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},13994:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},93974:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},60690:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},connector:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l}});var i=t(11527),o=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(27170),t(60486);const r={slug:"how-to-build-apple-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","apple","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with .NET Core (Razor Pages) and Logto"},s=void 0,c={permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-razor-pages-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-razor-pages-apple.mdx",title:"How to build Apple sign-in with .NET Core (Razor Pages) and Logto",description:"\x3c!--",date:"2024-02-04T04:11:41.000Z",formattedDate:"February 4, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"apple",permalink:"/tutorial/tags/apple"},{label:"dotnet-core-razor-pages",permalink:"/tutorial/tags/dotnet-core-razor-pages"},{label:"c#",permalink:"/tutorial/tags/c"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.325,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-dotnet-core-razor-pages-and-logto",authors:"logto",tags:["authentication","apple","dotnet-core-razor-pages","c#","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with .NET Core (Razor Pages) and Logto"},unlisted:!1,prevItem:{title:"How to build Twilio SMS passwordless sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-twilio-sign-in-with-dotnet-core-mvc-and-logto"},nextItem:{title:"How to build AWS SES Email passwordless sign-in with .NET Core (Razor Pages) and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-razor-pages-and-logto"}},a={authorsImageUrls:[void 0]},l=[],d="Apple";function h(e){return(0,i.jsx)(i.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},89009:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},29877:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},26871:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,i.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},82755:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},76162:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},25684:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["First, add the handler methods to your ",(0,i.jsx)(n.code,{children:"PageModel"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class IndexModel : PageModel\n{\n  public async Task OnPostSignInAsync()\n  {\n    await HttpContext.ChallengeAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n\n  public async Task OnPostSignOutAsync()\n  {\n    await HttpContext.SignOutAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, add the buttons to your Razor page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n<form method="post">\n  @if (User.Identity?.IsAuthenticated == true) {\n    <button type="submit" asp-page-handler="SignOut">Sign out</button>\n  } else {\n    <button type="submit" asp-page-handler="SignIn">Sign in</button>\n  }\n</form>\n'})}),"\n",(0,i.jsx)(n.p,{children:'It will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},10766:function(e,n,t){n.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},88255:function(e,n,t){n.Z=t.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},16330:function(e,n,t){n.Z=t.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},61831:function(e,n,t){n.Z=t.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},3108:function(e,n,t){n.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(e,n,t){n.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(e,n,t){n.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(e,n,t){n.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var i=t(50959);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);