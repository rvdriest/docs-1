"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[70882],{67314:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to enroll ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsx)(n.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(857).Z+"",width:"1220",height:"398"})}),"\n",(0,i.jsxs)(n.p,{children:['See the "Enable an App ID" section in ',(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,i.jsx)(n.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,i.jsx)(n.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,i.jsxs)(n.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,i.jsx)(n.code,{children:"Logto Test"})," and ",(0,i.jsx)(n.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,i.jsx)(n.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,i.jsx)(n.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Sign in with Apple",src:t(99550).Z+"",width:"1170",height:"186"})}),"\n",(0,i.jsx)(n.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,i.jsxs)(n.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,i.jsx)(n.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,i.jsx)(n.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,i.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,i.jsx)(n.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"domain-and-url",src:t(16872).Z+"",width:"988",height:"668"})}),"\n",(0,i.jsx)(n.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,i.jsxs)(n.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,i.jsx)(n.code,{children:"localhost"})," domain."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to test locally, you need to edit ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,i.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(n.p,{children:["You need to use the identifier that fills in the ",(0,i.jsx)(n.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["This connector doesn't support customizing ",(0,i.jsx)(n.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,i.jsx)(n.code,{children:"form_post"})," response mode when ",(0,i.jsx)(n.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,i.jsx)(n.p,{children:"We'll figure out this later."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},43236:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>u});var i=t(11527),o=t(17279),s=t(45965),r=t(16331),a=t(33266),l=t(99009),c=t(39542),d=t(13197),p=t(94842);const u=[...s.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...l.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...r.d$,...p.d$];function h(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(p.ZP,{sdk:"Express"})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,connector:()=>j,contentTitle:()=>g,default:()=>v,frontMatter:()=>h,metadata:()=>x,toc:()=>f});var i=t(11527),o=t(17279),s=t(87593),r=t(80710),a=t(12665),l=t(80386),c=t(31877),d=t(23095),p=t(43236),u=t(67314);const h={slug:"how-to-build-apple-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","apple","express","js","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Express and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-apple-sign-in-with-express-and-logto",source:"@site/tutorial/build-with-logto/generated-express-apple.mdx",title:"How to build Apple sign-in with Express and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"apple",permalink:"/tutorial/tags/apple"},{inline:!0,label:"express",permalink:"/tutorial/tags/express"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","apple","express","js","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Express and Logto"},unlisted:!1,prevItem:{title:"How to build Twilio SMS passwordless sign-in with Expo (React Native) and Logto",permalink:"/tutorial/how-to-build-twilio-sign-in-with-expo-react-native-and-logto"},nextItem:{title:"How to build AWS SES Email passwordless sign-in with Express and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-express-and-logto"}},m={authorsImageUrls:[void 0]},j="Apple",f=[...s.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...r.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...p.d$,{value:"Add Apple connector",id:"add-apple-connector",level:2},...a.d$,{value:"Set up Apple Sign-in",id:"set-up-apple-sign-in",level:2},...u.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.d$,{value:"Enable Apple connector in Sign-in Experience",id:"enable-apple-connector-in-sign-in-experience",level:2},...c.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{connector:j,sdk:"Express",link:"https://expressjs.com/"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(r.ZP,{type:"Traditional web",framework:"Express"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(p.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"add-apple-connector",children:"Add Apple connector"}),"\n",(0,i.jsx)(a.ZP,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"set-up-apple-sign-in",children:"Set up Apple Sign-in"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(l.ZP,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"enable-apple-connector-in-sign-in-experience",children:"Enable Apple connector in Sign-in Experience"}),"\n",(0,i.jsx)(c.ZP,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.ZP,{connector:j,sdk:"Express"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function v(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},10637:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var i=t(11527),o=t(17279);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function a(e){const n={admonition:"admonition",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},45965:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/express-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},16331:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[{value:"Get user information",id:"get-user-information",level:4}];function r(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, you can use the ",(0,i.jsx)(n.code,{children:"withLogto"})," middleware to get ",(0,i.jsx)(n.code,{children:"req.user.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { withLogto } from '@logto/express';\n\napp.use(withLogto(config));\n"})}),"\n",(0,i.jsx)(n.p,{children:"No, let's use this value to protect routes by creating a simple middleware:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const requireAuth = async (req: Request, res: Response, next: NextFunction) => {\n  if (!req.user.isAuthenticated) {\n    res.redirect('/logto/sign-in');\n  }\n\n  next();\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then use it in the route handler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/protected', requireAuth, (req, res) => {\n  res.end('protected resource');\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-user-information",children:"Get user information"}),"\n",(0,i.jsxs)(n.p,{children:["For most cases, it is recommended to use ",(0,i.jsx)(n.code,{children:"claims"})," in ",(0,i.jsx)(n.code,{children:"req.user"}),' as "user info", this can be fast because ',(0,i.jsx)(n.code,{children:"claims"})," is cached when tokens are granted. If you need more accurate user info, set ",(0,i.jsx)(n.code,{children:"config.fetchUserInfo"})," to ",(0,i.jsx)(n.code,{children:"true"}),", to tell the SDK to fetch the user information from the OIDC ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/user', withLogto({ ...config, fetchUserInfo: true }), (req, res) => {\n  res.json(req.user.userInfo);\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},33266:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>l});var i=t(11527),o=t(17279),s=t(19573),r=t(75848),a=t(55556);const l=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...r.d$,{value:"Prepare logto routes",id:"prepare-logto-routes",level:4},{value:"Sign in",id:"sign-in",level:4}];function c(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,i.jsx)(r.ZP,{figureSrc:s.Z,redirectUri:"http://localhost:3000/logto/sign-in-callback"}),"\n",(0,i.jsx)(n.h4,{id:"prepare-logto-routes",children:"Prepare logto routes"}),"\n",(0,i.jsx)(n.p,{children:"Prepare routes to connect with Logto."}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { handleAuthRoutes } from '@logto/express';\n\napp.use(handleAuthRoutes(config));\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will create 3 routes automatically:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-out"}),": Sign out from Logto."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sign-in",children:"Sign in"}),"\n",(0,i.jsx)(n.p,{children:"We're almost there! Now, create a sign-in button to redirect to the sign-in route on user click."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/', (req, res) => {\n  res.setHeader('content-type', 'text/html');\n  res.end(`<div><a href=\"/logto/sign-in\">Sign In</a></div>`);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},99009:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:"/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,i.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},39542:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var i=t(11527),o=t(17279),s=t(10637),r=t(51187);const a=[...r.d$,...s.d$,{value:"Prepare required middlewares",id:"prepare-required-middlewares",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { LogtoExpressConfig } from '@logto/express';\n\nconst config: LogtoExpressConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-express-app-base-url>', // E.g. http://localhost:3000\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prepare-required-middlewares",children:"Prepare required middlewares"}),"\n",(0,i.jsxs)(n.p,{children:["The SDK requires ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})," to be configured in prior."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import cookieParser from 'cookie-parser';\nimport session from 'express-session';\n\napp.use(cookieParser());\napp.use(\n  session({\n    secret: 'random_session_key',\n    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // In miliseconds\n  })\n);\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},13197:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var i=t(11527),o=t(17279),s=t(75696),r=t(78407);const a=[];function l(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(s.Z,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/express cookie-parser express-session\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/express cookie-parser express-session\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/express cookie-parser express-session\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>r});t(50959);var i=t(5341);const o={tabItem:"tabItem_YHvg"};var s=t(11527);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,r),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(50959),o=t(5341),s=t(18387),r=t(28903),a=t(15885),l=t(35927),c=t(38894),d=t(70148);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=u(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,p]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),j=(()=>{const e=c??x;return h({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,s]),tabValues:s}}var m=t(20619);const j={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),r(o))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...s,className:(0,o.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.Z)();return(0,f.jsx)(w,{...e,children:p(e.children)},String(n))}},19573:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},16872:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},857:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},99550:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"}}]);