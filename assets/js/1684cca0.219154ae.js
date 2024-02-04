"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9507],{72027:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"set-up-a-project-in-the-google-api-console",children:"Set up a project in the Google API Console"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Visit the ",(0,o.jsx)(e.a,{href:"https://console.developers.google.com",children:"Google API Console"})," and sign in with your Google account."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Select a project"})," button on the top menu bar, and click the ",(0,o.jsx)(e.strong,{children:"New Project"})," button to create a project."]}),"\n",(0,o.jsxs)(e.li,{children:["In your newly created project, click the ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," to enter the ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," menu."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"configure-your-consent-screen",children:"Configure your consent screen"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["On the left ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(e.strong,{children:"OAuth consent screen"})," button."]}),"\n",(0,o.jsxs)(e.li,{children:["Choose the ",(0,o.jsx)(e.strong,{children:"User Type"})," you want, and click the ",(0,o.jsx)(e.strong,{children:"Create"})," button. (Note: If you select ",(0,o.jsx)(e.strong,{children:"External"})," as your ",(0,o.jsx)(e.strong,{children:"User Type"}),", you will need to add test users later.)"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Now you will be on the ",(0,o.jsx)(e.strong,{children:"Edit app registration"})," page."]}),"\n",(0,o.jsx)(e.h3,{id:"config-oauth-consent-screen",children:"Config OAuth consent screen"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Follow the instructions to fill out the ",(0,o.jsx)(e.strong,{children:"OAuth consent screen"})," form."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"config-scopes",children:"Config scopes"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"ADD OR REMOVE SCOPES"})," and select ",(0,o.jsx)(e.code,{children:"../auth/userinfo.email"}),", ",(0,o.jsx)(e.code,{children:"../auth/userinfo.profile"})," and ",(0,o.jsx)(e.code,{children:"openid"})," in the popup drawer, and click ",(0,o.jsx)(e.strong,{children:"UPDATE"})," to finish."]}),"\n",(0,o.jsx)(e.li,{children:"Fill out the form as you need."}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"add-test-users-external-user-type-only",children:"Add test users (External user type only)"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"ADD USERS"})," and add test users to allow these users to access your application while testing."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Now you should have the Google OAuth 2.0 consent screen configured."}),"\n",(0,o.jsx)(e.h3,{id:"obtain-oauth-20-credentials",children:"Obtain OAuth 2.0 credentials"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["On the left ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(e.strong,{children:"Credentials"})," button."]}),"\n",(0,o.jsxs)(e.li,{children:["On the ",(0,o.jsx)(e.strong,{children:"Credentials"})," page, click the ",(0,o.jsx)(e.strong,{children:"+ CREATE CREDENTIALS"})," button on the top menu bar, and select ",(0,o.jsx)(e.strong,{children:"OAuth client ID"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["On the ",(0,o.jsx)(e.strong,{children:"Create OAuth client ID"})," page, select ",(0,o.jsx)(e.strong,{children:"Web application"})," as the application type."]}),"\n",(0,o.jsx)(e.li,{children:"Fill out the basic information for your application."}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"+ Add URI"})," to add an authorized domain to the ",(0,o.jsx)(e.strong,{children:"Authorized JavaScript origins"})," section. This is the domain that your logto authorization page will be served from. In our case, this will be ",(0,o.jsx)(e.code,{children:"${your_logto_origin}"}),". e.g.",(0,o.jsx)(e.code,{children:"https://logto.dev"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"+ Add URI"})," in the *",(0,o.jsx)(e.strong,{children:"*Authorized redirect URIs**"})," section to set up the *",(0,o.jsx)(e.strong,{children:"*Authorized redirect URIs**"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(e.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(e.code,{children:"https://logto.dev/callback/${connector_id}"}),". The ",(0,o.jsx)(e.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"Create"})," to finish and then you will get the ",(0,o.jsx)(e.strong,{children:"Client ID"})," and ",(0,o.jsx)(e.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(e.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"clientId"}),(0,o.jsx)(e.td,{children:"string"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"clientSecret"}),(0,o.jsx)(e.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(e.h4,{id:"google-developer-docs",children:"Google developer docs"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity: Setting up OAuth 2.0"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},44263:function(n,e,t){t.d(e,{ZP:function(){return p}});var o=t(11527),i=t(17279),r=t(45274),s=t(46199),l=t(58556),a=t(21340),c=t(68045),d=t(24373),h=t(13994);function u(n){const e={h3:"h3",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(d.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,o.jsx)(l.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(h.ZP,{sdk:"Android"})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},55458:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',n.connector,'" and click "Next".']}),"\n",(0,o.jsx)(e.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(e.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},32778:function(n,e,t){t.d(e,{ZP:function(){return l}});var o=t(11527),i=t(17279),r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function s(n){const e={code:"code",h3:"h3",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(e.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(e.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(e.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the opening modal, scroll to the "',n.type,'" section or filter all the available "\n',n.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Click the"," ","\n",n.framework.split("/").map((n=>`"${n.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(e.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(e.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(e.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}},81057:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',n.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',n.connector,'". Then\nyou should be able to see a button with text "Continue with ',n.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(e.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},10444:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(e.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(e.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(e.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["In this article, we will go through the steps to quickly build the ",n.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(e.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",n.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},69441:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},13994:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(e.p,{children:["Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},93974:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},63099:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},connector:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var o=t(11527),i=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(44263),t(72027);const r={slug:"how-to-build-google-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","google","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Android and Logto"},s=void 0,l={permalink:"/tutorial/how-to-build-google-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-google.mdx",title:"How to build Google sign-in with Android and Logto",description:"\x3c!--",date:"2024-02-04T06:56:07.000Z",formattedDate:"February 4, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"google",permalink:"/tutorial/tags/google"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-google-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","google","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Android and Logto"},unlisted:!1,prevItem:{title:"How to build GitHub sign-in with Android and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-android-and-logto"},nextItem:{title:"How to build Kakao sign-in with Android and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-android-and-logto"}},a={authorsImageUrls:[void 0]},c=[],d="Google";function h(n){return(0,o.jsx)(o.Fragment,{})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h()}},33437:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,o.jsx)("code",{children:n.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},45274:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["The example is based on ",(0,o.jsx)(e.a,{href:"https://developer.android.com/reference/android/view/View",children:"View system"})," and ",(0,o.jsx)(e.a,{href:"https://developer.android.com/topic/libraries/architecture/viewmodel",children:"View Model"}),", but the concepts are the same when using ",(0,o.jsx)(e.a,{href:"https://developer.android.com/jetpack/compose",children:"Jetpack Compose"}),"."]}),"\n",(0,o.jsx)(e.li,{children:"The example is written in Kotlin, but the concepts are the same for Java."}),"\n",(0,o.jsxs)(e.li,{children:["Both ",(0,o.jsx)(e.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-kotlin",children:"Kotlin"})," and ",(0,o.jsx)(e.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-java",children:"Java"})," sample projects are available on our ",(0,o.jsx)(e.a,{href:"https://github.com/logto-io/kotlin",children:"SDK repository"}),"."]}),"\n"]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},46199:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["In Logto SDK, we can use ",(0,o.jsx)(e.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,o.jsx)(e.code,{children:"true"}),", otherwise, the value will be ",(0,o.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Now, let's add a live data to ",(0,o.jsx)(e.code,{children:"LogtoViewModel.kt"})," to observe the authentication status, and update the status when the user signed in or signed out:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n\n    // Add a live data to observe the authentication status\n    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)\n    val authenticated: LiveData<Boolean>\n        get() = _authenticated\n\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["Then, we observe the ",(0,o.jsx)(e.code,{children:"authenticated"})," live data in ",(0,o.jsx)(e.code,{children:"MainActivity.kt"}),", when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        // ...handle button click codes\n\n        // Observe the authentication status\n        logtoViewModel.authenticated.observe(this) { authenticated ->\n            if (authenticated) {\n                // The user is authenticated\n                signInButton.visibility = View.GONE\n                signOutButton.visibility = View.VISIBLE\n            } else {\n                // The user is not authenticated\n                signInButton.visibility = View.VISIBLE\n                signOutButton.visibility = View.GONE\n            }\n        }\n    }\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},58556:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png",s=t(33437);function l(n){const e={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Before starting, you need to add a redirect URI in the Admin Console for your application."}),"\n",(0,o.jsxs)(e.p,{children:["In Android, the redirect URI follows the pattern: ",(0,o.jsx)(e.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),":"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["The ",(0,o.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format."]}),"\n",(0,o.jsxs)(e.li,{children:["The ",(0,o.jsx)(e.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Assuming you treat ",(0,o.jsx)(e.code,{children:"io.logto.android"})," as the custom ",(0,o.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,o.jsx)(e.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,o.jsx)(e.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,o.jsx)(s.ZP,{figureSrc:r,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,o.jsxs)(e.p,{children:["After the redirect URI is configured, we add a ",(0,o.jsx)(e.code,{children:"signIn"})," method to your ",(0,o.jsx)(e.code,{children:"LogtoViewModel.kt"}),", which will call ",(0,o.jsx)(e.code,{children:"logtoClient.signIn"})," API to invoke the Logto sign-in page:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["Now setup on-click listener for the sign-in button in your ",(0,o.jsx)(e.code,{children:"MainActivity.kt"})," to call the ",(0,o.jsx)(e.code,{children:"signIn"})," method:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n\n        // Assume you have a button with id `sign_in_button` in your layout\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        signInButton.setOnClickListener {\n            logtoViewModel.signIn(this)\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"When you click the button, the Logto SDK will navigate to the Logto sign-in page."})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},21340:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Similar to sign-in, we add a ",(0,o.jsx)(e.code,{children:"signOut"})," method to ",(0,o.jsx)(e.code,{children:"LogtoViewModel.kt"})," to call ",(0,o.jsx)(e.code,{children:"logtoClient.signOut"})," API:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling ",(0,o.jsx)(e.code,{children:"logtoClient.signOut"})," API."]}),"\n",(0,o.jsxs)(e.p,{children:["Then, we can add a button to call the ",(0,o.jsx)(e.code,{children:"signOut"})," method in ",(0,o.jsx)(e.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        //...sign-in button codes\n\n        // Assume you have a button with id `sign_out_button` in your layout\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        signOutButton.setOnClickListener {\n            logtoViewModel.signOut()\n        }\n    }\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},68045:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Create a ",(0,o.jsx)(e.code,{children:"LogtoViewModel.kt"})," and init ",(0,o.jsx)(e.code,{children:"LogtoClient"})," in this view model:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'//...with other imports\nimport io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    private val logtoConfig = LogtoConfig(\n          endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n          appId = "<your-app-id>",\n          scopes = null,\n          resources = null,\n          usingPersistStorage = true,\n    )\n\n    private val logtoClient = LogtoClient(logtoConfig, application)\n\n    companion object {\n        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {\n            @Suppress("UNCHECKED_CAST")\n            override fun <T : ViewModel> create(\n                modelClass: Class<T>,\n                extras: CreationExtras\n            ): T {\n                // Get the Application object from extras\n                val application = checkNotNull(extras[APPLICATION_KEY])\n                return LogtoViewModel(application) as T\n            }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["then, create a ",(0,o.jsx)(e.code,{children:"LogtoViewModel"})," for your ",(0,o.jsx)(e.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }\n    //...other codes\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},24373:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234);function l(n){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"The minimum supported Android API level of Logto Android SDK is level 24."})}),"\n",(0,o.jsxs)(e.p,{children:["Before you install Logto Android SDK, ensure ",(0,o.jsx)(e.code,{children:"mavenCentral()"})," is added to your repository configuration in the Gradle project build file:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"dependencyResolutionManagement {\n  repositories {\n    mavenCentral()\n  }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n  implementation("io.logto.sdk:android:1.1.3")\n}\n'})})}),(0,o.jsx)(r.Z,{value:"groovy",label:"Groovy",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-groovy",children:"dependencies {\n  implementation 'io.logto.sdk:android:1.1.3'\n}\n"})})})]}),"\n",(0,o.jsxs)(e.p,{children:["Since the SDK needs internet access, you need to add the following permission to your ",(0,o.jsx)(e.code,{children:"AndroidManifest.xml"})," file:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:tools="http://schemas.android.com/tools">\n\n  \x3c!-- add internet permission --\x3e\n  <uses-permission android:name="android.permission.INTERNET" />\n\n  \x3c!-- other configurations... --\x3e\n</manifest>\n'})})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},75268:function(n,e,t){t.d(e,{Z:function(){return s}});t(50959);var o=t(45924),i={tabItem:"tabItem_zBCg"},r=t(11527);function s(n){let{children:e,hidden:t,className:s}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:t,children:e})}},67234:function(n,e,t){t.d(e,{Z:function(){return y}});var o=t(50959),i=t(45924),r=t(58748),s=t(28903),l=t(88137),a=t(70670),c=t(91391),d=t(47841);function h(n){return o.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,o.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:t}=n;return(0,o.useMemo)((()=>{const n=e??function(n){return h(n).map((n=>{let{props:{value:e,label:t,attributes:o,default:i}}=n;return{value:e,label:t,attributes:o,default:i}}))}(t);return function(n){const e=(0,c.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function g(n){let{queryString:e=!1,groupId:t}=n;const i=(0,s.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,a._X)(r),(0,o.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace({...i.location,search:e.toString()})}),[r,i])]}function x(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=u(n),[s,a]=(0,o.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const o=t.find((n=>n.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:e,tabValues:r}))),[c,h]=g({queryString:t,groupId:i}),[x,j]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,r]=(0,d.Nk)(t);return[i,(0,o.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),m=(()=>{const n=c??x;return p({value:n,tabValues:r})?n:null})();(0,l.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);a(n),h(n),j(n)}),[h,j,r]),tabValues:r}}var j=t(77691),m={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},f=t(11527);function b(n){let{className:e,block:t,selectedValue:o,selectValue:s,tabValues:l}=n;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=n=>{const e=n.currentTarget,t=a.indexOf(e),i=l[t].value;i!==o&&(c(e),s(i))},h=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=a.indexOf(n.currentTarget)+1;e=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(n.currentTarget)-1;e=a[t]??a[a.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:l.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,f.jsx)("li",{role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:n=>a.push(n),onKeyDown:h,onClick:d,...r,className:(0,i.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":o===e}),children:t??e},e)}))})}function w(n){let{lazy:e,children:t,selectedValue:i}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,o.cloneElement)(n,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function v(n){const e=x(n);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function y(n){const e=(0,j.Z)();return(0,f.jsx)(v,{...n,children:h(n.children)},String(e))}},10766:function(n,e,t){e.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:function(n,e,t){e.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(n,e,t){e.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(n,e,t){e.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(n,e,t){e.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return s}});var o=t(50959);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);