"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[26597],{28585:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Set up a project in the Google API Console",id:"set-up-a-project-in-the-google-api-console",level:3},{value:"Configure your consent screen",id:"configure-your-consent-screen",level:3},{value:"Config OAuth consent screen",id:"config-oauth-consent-screen",level:3},{value:"Config scopes",id:"config-scopes",level:3},{value:"Add test users (External user type only)",id:"add-test-users-external-user-type-only",level:3},{value:"Obtain OAuth 2.0 credentials",id:"obtain-oauth-20-credentials",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Google developer docs",id:"google-developer-docs",level:4}];function l(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-a-project-in-the-google-api-console",children:"Set up a project in the Google API Console"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://console.developers.google.com",children:"Google API Console"})," and sign in with your Google account."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Select a project"})," button on the top menu bar, and click the ",(0,o.jsx)(n.strong,{children:"New Project"})," button to create a project."]}),"\n",(0,o.jsxs)(n.li,{children:["In your newly created project, click the ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," to enter the ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," menu."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-your-consent-screen",children:"Configure your consent screen"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On the left ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(n.strong,{children:"OAuth consent screen"})," button."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose the ",(0,o.jsx)(n.strong,{children:"User Type"})," you want, and click the ",(0,o.jsx)(n.strong,{children:"Create"})," button. (Note: If you select ",(0,o.jsx)(n.strong,{children:"External"})," as your ",(0,o.jsx)(n.strong,{children:"User Type"}),", you will need to add test users later.)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now you will be on the ",(0,o.jsx)(n.strong,{children:"Edit app registration"})," page."]}),"\n",(0,o.jsx)(n.h3,{id:"config-oauth-consent-screen",children:"Config OAuth consent screen"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Follow the instructions to fill out the ",(0,o.jsx)(n.strong,{children:"OAuth consent screen"})," form."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"config-scopes",children:"Config scopes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"ADD OR REMOVE SCOPES"})," and select ",(0,o.jsx)(n.code,{children:"../auth/userinfo.email"}),", ",(0,o.jsx)(n.code,{children:"../auth/userinfo.profile"})," and ",(0,o.jsx)(n.code,{children:"openid"})," in the popup drawer, and click ",(0,o.jsx)(n.strong,{children:"UPDATE"})," to finish."]}),"\n",(0,o.jsx)(n.li,{children:"Fill out the form as you need."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"add-test-users-external-user-type-only",children:"Add test users (External user type only)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"ADD USERS"})," and add test users to allow these users to access your application while testing."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now you should have the Google OAuth 2.0 consent screen configured."}),"\n",(0,o.jsx)(n.h3,{id:"obtain-oauth-20-credentials",children:"Obtain OAuth 2.0 credentials"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On the left ",(0,o.jsx)(n.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(n.strong,{children:"Credentials"})," button."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Credentials"})," page, click the ",(0,o.jsx)(n.strong,{children:"+ CREATE CREDENTIALS"})," button on the top menu bar, and select ",(0,o.jsx)(n.strong,{children:"OAuth client ID"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Create OAuth client ID"})," page, select ",(0,o.jsx)(n.strong,{children:"Web application"})," as the application type."]}),"\n",(0,o.jsx)(n.li,{children:"Fill out the basic information for your application."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"+ Add URI"})," to add an authorized domain to the ",(0,o.jsx)(n.strong,{children:"Authorized JavaScript origins"})," section. This is the domain that your logto authorization page will be served from. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_origin}"}),". e.g.",(0,o.jsx)(n.code,{children:"https://logto.dev"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"+ Add URI"})," in the *",(0,o.jsx)(n.strong,{children:"*Authorized redirect URIs**"})," section to set up the *",(0,o.jsx)(n.strong,{children:"*Authorized redirect URIs**"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create"})," to finish and then you will get the ",(0,o.jsx)(n.strong,{children:"Client ID"})," and ",(0,o.jsx)(n.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"google-developer-docs",children:"Google developer docs"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity: Setting up OAuth 2.0"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},60408:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>h});var o=t(11527),i=t(17279),s=t(47932),l=t(87409),r=t(3616),a=t(13069),c=t(13726),d=t(47861),u=t(94842);const h=[...s.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...r.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...a.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...l.d$,...u.d$];function g(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(d.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(l.ZP,{}),"\n",(0,o.jsx)(u.ZP,{sdk:"Android"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},66435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>g,metadata:()=>x,toc:()=>v});var o=t(11527),i=t(17279),s=t(87593),l=t(80710),r=t(12665),a=t(80386),c=t(31877),d=t(23095),u=t(60408),h=t(28585);const g={slug:"how-to-build-google-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","google","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Android and Logto"},p=void 0,x={permalink:"/tutorial/how-to-build-google-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-google.mdx",title:"How to build Google sign-in with Android and Logto",description:"\x3c!--",date:"2024-06-30T08:28:35.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"google",permalink:"/tutorial/tags/google"},{inline:!0,label:"android",permalink:"/tutorial/tags/android"},{inline:!0,label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-google-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","google","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Android and Logto"},unlisted:!1,prevItem:{title:"How to build GitHub sign-in with Android and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-android-and-logto"},nextItem:{title:"How to build Hugging Face sign-in with Android and Logto",permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-android-and-logto"}},j={authorsImageUrls:[void 0]},m="Google",v=[...s.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...l.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...u.d$,{value:"Add Google connector",id:"add-google-connector",level:2},...r.d$,{value:"Set up Google OAuth app",id:"set-up-google-oauth-app",level:2},...h.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...a.d$,{value:"Enable Google connector in Sign-in Experience",id:"enable-google-connector-in-sign-in-experience",level:2},...c.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function f(e){const n={a:"a",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{connector:m,sdk:"Android",link:"https://developer.android.com/"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(l.ZP,{type:"Native app",framework:"Android (Kotlin) / Android (Java)"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(u.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"add-google-connector",children:"Add Google connector"}),"\n",(0,o.jsx)(r.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"set-up-google-oauth-app",children:"Set up Google OAuth app"}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(a.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"enable-google-connector-in-sign-in-experience",children:"Enable Google connector in Sign-in Experience"}),"\n",(0,o.jsx)(c.ZP,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(d.ZP,{connector:m,sdk:"Android"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},75848:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function l(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,o.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},47932:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function l(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The example is based on ",(0,o.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View",children:"View system"})," and ",(0,o.jsx)(n.a,{href:"https://developer.android.com/topic/libraries/architecture/viewmodel",children:"View Model"}),", but the concepts are the same when using ",(0,o.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose",children:"Jetpack Compose"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"The example is written in Kotlin, but the concepts are the same for Java."}),"\n",(0,o.jsxs)(n.li,{children:["Both ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-kotlin",children:"Kotlin"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-java",children:"Java"})," sample projects are available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/kotlin",children:"SDK repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,o.jsx)(n.a,{href:"https://youtu.be/_GSiYqTLnak",children:"YouTube channel"}),"."]}),"\n"]})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},87409:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Logto SDK, we can use ",(0,o.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,o.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's add a live data to ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"})," to observe the authentication status, and update the status when the user signed in or signed out:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n\n    // Add a live data to observe the authentication status\n    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)\n    val authenticated: LiveData<Boolean>\n        get() = _authenticated\n\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Then, we observe the ",(0,o.jsx)(n.code,{children:"authenticated"})," live data in ",(0,o.jsx)(n.code,{children:"MainActivity.kt"}),", when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        // ...handle button click codes\n\n        // Observe the authentication status\n        logtoViewModel.authenticated.observe(this) { authenticated ->\n            if (authenticated) {\n                // The user is authenticated\n                signInButton.visibility = View.GONE\n                signOutButton.visibility = View.VISIBLE\n            } else {\n                // The user is not authenticated\n                signInButton.visibility = View.VISIBLE\n                signOutButton.visibility = View.GONE\n            }\n        }\n    }\n}\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3616:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>r});var o=t(11527),i=t(17279);const s=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png";var l=t(75848);const r=[...l.d$];function a(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Before starting, you need to add a redirect URI in the Admin Console for your application."}),"\n",(0,o.jsxs)(n.p,{children:["In Android, the redirect URI follows the pattern: ",(0,o.jsx)(n.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Assuming you treat ",(0,o.jsx)(n.code,{children:"io.logto.android"})," as the custom ",(0,o.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,o.jsx)(n.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,o.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,o.jsx)(l.ZP,{figureSrc:s,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,o.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,o.jsx)(n.code,{children:"signIn"})," method to your ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"}),", which will call ",(0,o.jsx)(n.code,{children:"logtoClient.signIn"})," API to invoke the Logto sign-in page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now setup on-click listener for the sign-in button in your ",(0,o.jsx)(n.code,{children:"MainActivity.kt"})," to call the ",(0,o.jsx)(n.code,{children:"signIn"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n\n        // Assume you have a button with id `sign_in_button` in your layout\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        signInButton.setOnClickListener {\n            logtoViewModel.signIn(this)\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"When you click the button, the Logto SDK will navigate to the Logto sign-in page."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},13069:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Similar to sign-in, we add a ",(0,o.jsx)(n.code,{children:"signOut"})," method to ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"})," to call ",(0,o.jsx)(n.code,{children:"logtoClient.signOut"})," API:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling ",(0,o.jsx)(n.code,{children:"logtoClient.signOut"})," API."]}),"\n",(0,o.jsxs)(n.p,{children:["Then, we can add a button to call the ",(0,o.jsx)(n.code,{children:"signOut"})," method in ",(0,o.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        //...sign-in button codes\n\n        // Assume you have a button with id `sign_out_button` in your layout\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        signOutButton.setOnClickListener {\n            logtoViewModel.signOut()\n        }\n    }\n}\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},13726:(e,n,t)=>{t.d(n,{ZP:()=>r,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"})," and init ",(0,o.jsx)(n.code,{children:"LogtoClient"})," in this view model:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nimport io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    private val logtoConfig = LogtoConfig(\n          endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n          appId = "<your-app-id>",\n          scopes = null,\n          resources = null,\n          usingPersistStorage = true,\n    )\n\n    private val logtoClient = LogtoClient(logtoConfig, application)\n\n    companion object {\n        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {\n            @Suppress("UNCHECKED_CAST")\n            override fun <T : ViewModel> create(\n                modelClass: Class<T>,\n                extras: CreationExtras\n            ): T {\n                // Get the Application object from extras\n                val application = checkNotNull(extras[APPLICATION_KEY])\n                return LogtoViewModel(application) as T\n            }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["then, create a ",(0,o.jsx)(n.code,{children:"LogtoViewModel"})," for your ",(0,o.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }\n    //...other codes\n}\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},47861:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>r});var o=t(11527),i=t(17279),s=t(75696),l=t(78407);const r=[];function a(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The minimum supported Android API level of Logto Android SDK is level 24."})}),"\n",(0,o.jsxs)(n.p,{children:["Before you install Logto Android SDK, ensure ",(0,o.jsx)(n.code,{children:"mavenCentral()"})," is added to your repository configuration in the Gradle project build file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"dependencyResolutionManagement {\n  repositories {\n    mavenCentral()\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(s.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n  implementation("io.logto.sdk:android:1.1.3")\n}\n'})})}),(0,o.jsx)(s.Z,{value:"groovy",label:"Groovy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n  implementation 'io.logto.sdk:android:1.1.3'\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Since the SDK needs internet access, you need to add the following permission to your ",(0,o.jsx)(n.code,{children:"AndroidManifest.xml"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:tools="http://schemas.android.com/tools">\n\n  \x3c!-- add internet permission --\x3e\n  <uses-permission android:name="android.permission.INTERNET" />\n\n  \x3c!-- other configurations... --\x3e\n</manifest>\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>l});t(50959);var o=t(5341);const i={tabItem:"tabItem_YHvg"};var s=t(11527);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,l),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var o=t(50959),i=t(5341),s=t(18387),l=t(28903),r=t(15885),a=t(35927),c=t(38894),d=t(70148);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[l,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:t,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),m=(()=>{const e=c??x;return g({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(20619);const m={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var v=t(11527);function f(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:r}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=r[t].value;i!==o&&(c(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,j.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}}}]);