"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[95786],{28087:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"register-a-developer-application",children:"Register a developer application"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Visit ",(0,i.jsx)(e.a,{href:"https://discord.com/developers/applications",children:"Discord Developer Portal"})," and sign in with your Discord account."]}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"New Application"})," button to create an application, choose a name for it (Ex: LogtoAuth), tick the box and click ",(0,i.jsx)(e.strong,{children:"Create"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Go to ",(0,i.jsx)(e.strong,{children:"OAuth2"})," page and click ",(0,i.jsx)(e.strong,{children:"Reset Secret"})]}),"\n",(0,i.jsxs)(e.li,{children:["Take note of the ",(0,i.jsx)(e.strong,{children:"CLIENT ID"})," and ",(0,i.jsx)(e.strong,{children:"CLIENT SECRET"})," fields"]}),"\n",(0,i.jsxs)(e.li,{children:["Add the valid redirects (Ex: ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"http://auth.mycompany.io/callback/${connector_id}"})}),"). The ",(0,i.jsx)(e.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,i.jsx)(e.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"clientId"}),(0,i.jsx)(e.td,{children:"string"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"clientSecret"}),(0,i.jsx)(e.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"clientid",children:"clientId"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"clientId"})," is the ",(0,i.jsx)(e.code,{children:"CLIENT ID"})," field we saved earlier.\n(You can find it in the Oauth2 Page in Discord Developer Portal.)"]}),"\n",(0,i.jsx)(e.h4,{id:"clientsecret",children:"clientSecret"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"clientSecret"})," is the ",(0,i.jsx)(e.code,{children:"CLIENT SECRET"})," we saved earlier.\n(If you've lost it you need to click ",(0,i.jsx)(e.strong,{children:"Reset Secret"}),")"]})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},44263:function(n,e,t){t.d(e,{ZP:function(){return p}});var i=t(11527),o=t(17279),r=t(45274),s=t(46199),a=t(58556),c=t(21340),l=t(68045),d=t(24373),u=t(13994);function h(n){const e={h3:"h3",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(u.ZP,{sdk:"Android"})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},55458:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={img:"img",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',n.connector,'" and click "Next".']}),"\n",(0,i.jsx)(e.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(e.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},32778:function(n,e,t){t.d(e,{ZP:function(){return a}});var i=t(11527),o=t(17279),r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function s(n){const e={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(e.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(e.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(e.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['In the opening modal, scroll to the "',n.type,'" section or filter all the available "\n',n.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Click the"," ","\n",n.framework.split("/").map((n=>`"${n.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(e.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(e.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(e.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}},81057:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',n.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',n.connector,'". Then\nyou should be able to see a button with text "Continue with ',n.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(e.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},10444:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(e.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(e.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(e.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["In this article, we will go through the steps to quickly build the ",n.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(e.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",n.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},69441:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."]})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},13994:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)(e.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(e.p,{children:["Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},93974:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"]})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},41682:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},connector:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var i=t(11527),o=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(44263),t(28087);const r={slug:"how-to-build-discord-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","discord","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Discord sign-in with Android and Logto"},s=void 0,a={permalink:"/tutorial/how-to-build-discord-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-discord.mdx",title:"How to build Discord sign-in with Android and Logto",description:"\x3c!--",date:"2024-02-04T06:56:07.000Z",formattedDate:"February 4, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"discord",permalink:"/tutorial/tags/discord"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-discord-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","discord","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Discord sign-in with Android and Logto"},unlisted:!1,prevItem:{title:"How to build Azure AD sign-in with Android and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-android-and-logto"},nextItem:{title:"How to build Facebook sign-in with Android and Logto",permalink:"/tutorial/how-to-build-facebook-sign-in-with-android-and-logto"}},c={authorsImageUrls:[void 0]},l=[],d="Discord";function u(n){return(0,i.jsx)(i.Fragment,{})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u()}},33437:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,i.jsx)("code",{children:n.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},45274:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The example is based on ",(0,i.jsx)(e.a,{href:"https://developer.android.com/reference/android/view/View",children:"View system"})," and ",(0,i.jsx)(e.a,{href:"https://developer.android.com/topic/libraries/architecture/viewmodel",children:"View Model"}),", but the concepts are the same when using ",(0,i.jsx)(e.a,{href:"https://developer.android.com/jetpack/compose",children:"Jetpack Compose"}),"."]}),"\n",(0,i.jsx)(e.li,{children:"The example is written in Kotlin, but the concepts are the same for Java."}),"\n",(0,i.jsxs)(e.li,{children:["Both ",(0,i.jsx)(e.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-kotlin",children:"Kotlin"})," and ",(0,i.jsx)(e.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-java",children:"Java"})," sample projects are available on our ",(0,i.jsx)(e.a,{href:"https://github.com/logto-io/kotlin",children:"SDK repository"}),"."]}),"\n"]})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},46199:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["In Logto SDK, we can use ",(0,i.jsx)(e.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(e.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Now, let's add a live data to ",(0,i.jsx)(e.code,{children:"LogtoViewModel.kt"})," to observe the authentication status, and update the status when the user signed in or signed out:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n\n    // Add a live data to observe the authentication status\n    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)\n    val authenticated: LiveData<Boolean>\n        get() = _authenticated\n\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Then, we observe the ",(0,i.jsx)(e.code,{children:"authenticated"})," live data in ",(0,i.jsx)(e.code,{children:"MainActivity.kt"}),", when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        // ...handle button click codes\n\n        // Observe the authentication status\n        logtoViewModel.authenticated.observe(this) { authenticated ->\n            if (authenticated) {\n                // The user is authenticated\n                signInButton.visibility = View.GONE\n                signOutButton.visibility = View.VISIBLE\n            } else {\n                // The user is not authenticated\n                signInButton.visibility = View.VISIBLE\n                signOutButton.visibility = View.GONE\n            }\n        }\n    }\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},58556:function(n,e,t){t.d(e,{ZP:function(){return c}});var i=t(11527),o=t(17279),r=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png",s=t(33437);function a(n){const e={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Before starting, you need to add a redirect URI in the Admin Console for your application."}),"\n",(0,i.jsxs)(e.p,{children:["In Android, the redirect URI follows the pattern: ",(0,i.jsx)(e.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format."]}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Assuming you treat ",(0,i.jsx)(e.code,{children:"io.logto.android"})," as the custom ",(0,i.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,i.jsx)(e.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,i.jsx)(e.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,i.jsx)(s.ZP,{figureSrc:r,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,i.jsxs)(e.p,{children:["After the redirect URI is configured, we add a ",(0,i.jsx)(e.code,{children:"signIn"})," method to your ",(0,i.jsx)(e.code,{children:"LogtoViewModel.kt"}),", which will call ",(0,i.jsx)(e.code,{children:"logtoClient.signIn"})," API to invoke the Logto sign-in page:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Now setup on-click listener for the sign-in button in your ",(0,i.jsx)(e.code,{children:"MainActivity.kt"})," to call the ",(0,i.jsx)(e.code,{children:"signIn"})," method:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n\n        // Assume you have a button with id `sign_in_button` in your layout\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        signInButton.setOnClickListener {\n            logtoViewModel.signIn(this)\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"When you click the button, the Logto SDK will navigate to the Logto sign-in page."})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},21340:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Similar to sign-in, we add a ",(0,i.jsx)(e.code,{children:"signOut"})," method to ",(0,i.jsx)(e.code,{children:"LogtoViewModel.kt"})," to call ",(0,i.jsx)(e.code,{children:"logtoClient.signOut"})," API:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling ",(0,i.jsx)(e.code,{children:"logtoClient.signOut"})," API."]}),"\n",(0,i.jsxs)(e.p,{children:["Then, we can add a button to call the ",(0,i.jsx)(e.code,{children:"signOut"})," method in ",(0,i.jsx)(e.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        //...sign-in button codes\n\n        // Assume you have a button with id `sign_out_button` in your layout\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        signOutButton.setOnClickListener {\n            logtoViewModel.signOut()\n        }\n    }\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},68045:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Create a ",(0,i.jsx)(e.code,{children:"LogtoViewModel.kt"})," and init ",(0,i.jsx)(e.code,{children:"LogtoClient"})," in this view model:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'//...with other imports\nimport io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    private val logtoConfig = LogtoConfig(\n          endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n          appId = "<your-app-id>",\n          scopes = null,\n          resources = null,\n          usingPersistStorage = true,\n    )\n\n    private val logtoClient = LogtoClient(logtoConfig, application)\n\n    companion object {\n        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {\n            @Suppress("UNCHECKED_CAST")\n            override fun <T : ViewModel> create(\n                modelClass: Class<T>,\n                extras: CreationExtras\n            ): T {\n                // Get the Application object from extras\n                val application = checkNotNull(extras[APPLICATION_KEY])\n                return LogtoViewModel(application) as T\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["then, create a ",(0,i.jsx)(e.code,{children:"LogtoViewModel"})," for your ",(0,i.jsx)(e.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }\n    //...other codes\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},24373:function(n,e,t){t.d(e,{ZP:function(){return c}});var i=t(11527),o=t(17279),r=t(75268),s=t(67234);function a(n){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"The minimum supported Android API level of Logto Android SDK is level 24."})}),"\n",(0,i.jsxs)(e.p,{children:["Before you install Logto Android SDK, ensure ",(0,i.jsx)(e.code,{children:"mavenCentral()"})," is added to your repository configuration in the Gradle project build file:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"dependencyResolutionManagement {\n  repositories {\n    mavenCentral()\n  }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n  implementation("io.logto.sdk:android:1.1.3")\n}\n'})})}),(0,i.jsx)(r.Z,{value:"groovy",label:"Groovy",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-groovy",children:"dependencies {\n  implementation 'io.logto.sdk:android:1.1.3'\n}\n"})})})]}),"\n",(0,i.jsxs)(e.p,{children:["Since the SDK needs internet access, you need to add the following permission to your ",(0,i.jsx)(e.code,{children:"AndroidManifest.xml"})," file:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:tools="http://schemas.android.com/tools">\n\n  \x3c!-- add internet permission --\x3e\n  <uses-permission android:name="android.permission.INTERNET" />\n\n  \x3c!-- other configurations... --\x3e\n</manifest>\n'})})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},75268:function(n,e,t){t.d(e,{Z:function(){return s}});t(50959);var i=t(45924),o={tabItem:"tabItem_zBCg"},r=t(11527);function s(n){let{children:e,hidden:t,className:s}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:t,children:e})}},67234:function(n,e,t){t.d(e,{Z:function(){return y}});var i=t(50959),o=t(45924),r=t(58748),s=t(28903),a=t(88137),c=t(70670),l=t(91391),d=t(47841);function u(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:o}}=n;return{value:e,label:t,attributes:i,default:o}}))}(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function g(n){let{queryString:e=!1,groupId:t}=n;const o=(0,s.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._X)(r),(0,i.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(o.location.search);e.set(r,n),o.replace({...o.location,search:e.toString()})}),[r,o])]}function x(n){const{defaultValue:e,queryString:t=!1,groupId:o}=n,r=h(n),[s,c]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:r}))),[l,u]=g({queryString:t,groupId:o}),[x,m]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[o,r]=(0,d.Nk)(t);return[o,(0,i.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:o}),j=(()=>{const n=l??x;return p({value:n,tabValues:r})?n:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);c(n),u(n),m(n)}),[u,m,r]),tabValues:r}}var m=t(77691),j={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},f=t(11527);function b(n){let{className:e,block:t,selectedValue:i,selectValue:s,tabValues:a}=n;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=n=>{const e=n.currentTarget,t=c.indexOf(e),o=a[t].value;o!==i&&(l(e),s(o))},u=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},e),children:a.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,f.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>c.push(n),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===e}),children:t??e},e)}))})}function w(n){let{lazy:e,children:t,selectedValue:o}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===o));return n?(0,i.cloneElement)(n,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==o})))})}function v(n){const e=x(n);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function y(n){const e=(0,m.Z)();return(0,f.jsx)(v,{...n,children:u(n.children)},String(e))}},10766:function(n,e,t){e.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:function(n,e,t){e.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(n,e,t){e.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(n,e,t){e.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(n,e,t){e.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var i=t(50959);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);