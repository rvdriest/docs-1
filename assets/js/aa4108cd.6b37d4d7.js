"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[95349],{61844:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Sign in with Hugging Face account",id:"sign-in-with-hugging-face-account",level:2},{value:"Create an OAuth app in the Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Managing Hugging Face OAuth apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3}];function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Sign in with Hugging Face account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face website"})," and sign in with your Hugging Face account. You may register a new account if you don't have one."]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Creating an oauth app"})," guide, and register a new application."]}),"\n",(0,i.jsx)(n.p,{children:"In the creation process, you will need to provide the following information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Name"}),": The name of your application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Homepage URL"}),": The URL of your application's homepage or landing page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Logo URL"}),": The URL of your application's logo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scopes"}),": The scopes allowed for the OAuth app. For Hugging Face connector, usually use ",(0,i.jsx)(n.code,{children:"profile"})," to get the user's profile information and ",(0,i.jsx)(n.code,{children:"email"})," to get the user's email address. Ensure these scopes are allowed in your Hugging Face OAuth app if you want to use them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Redirect URI"}),": The URL to redirect the user to after they have authenticated. You can find the redirect URI in the Logto Admin Console when you're creating a Hugging Face connector or in the created Hugging Face connector details page."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Managing Hugging Face OAuth apps"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Connected Applications"})," page, you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.jsx)(n.code,{children:"Client ID"})," and generate ",(0,i.jsx)(n.code,{children:"App secrets"})," in corresponding OAuth app settings pages."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Go back to Logto Admin Console And Fill out the ",(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," field with ",(0,i.jsx)(n.em,{children:"Client ID"})," and ",(0,i.jsx)(n.em,{children:"App Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"Hugging Face supported scopes"}),". If not provided, scope defaults to be ",(0,i.jsx)(n.code,{children:"profile"}),". For Hugging Face connector, the scope you may want to use is ",(0,i.jsx)(n.code,{children:"profile"})," and ",(0,i.jsx)(n.code,{children:"email"}),". ",(0,i.jsx)(n.code,{children:"profile"})," scope is required to get the user's profile information, and ",(0,i.jsx)(n.code,{children:"email"})," scope is required to get the user's email address. Ensure you have allowed these scopes in your Hugging Face OAuth app (configured in ",(0,i.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"})," section)."]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},43236:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>h});var i=t(11527),o=t(17279),r=t(45965),s=t(16331),a=t(22953),c=t(99009),l=t(39542),d=t(13197),u=t(94842);const h=[...r.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...l.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...c.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...s.d$,...u.d$];function g(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(u.ZP,{sdk:"Express"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},48747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,connector:()=>j,contentTitle:()=>p,default:()=>v,frontMatter:()=>g,metadata:()=>x,toc:()=>f});var i=t(11527),o=t(17279),r=t(87593),s=t(80710),a=t(12665),c=t(80386),l=t(31877),d=t(23095),u=t(43236),h=t(61844);const g={slug:"how-to-build-hugging-face-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","hugging-face","express","js","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with Express and Logto"},p=void 0,x={permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-express-and-logto",source:"@site/tutorial/build-with-logto/generated-express-hugging-face.mdx",title:"How to build Hugging Face sign-in with Express and Logto",description:"\x3c!--",date:"2024-06-30T08:28:35.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"hugging-face",permalink:"/tutorial/tags/hugging-face"},{inline:!0,label:"express",permalink:"/tutorial/tags/express"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-hugging-face-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","hugging-face","express","js","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with Express and Logto"},unlisted:!1,prevItem:{title:"How to build Google sign-in with Express and Logto",permalink:"/tutorial/how-to-build-google-sign-in-with-express-and-logto"},nextItem:{title:"How to build Kakao sign-in with Express and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-express-and-logto"}},m={authorsImageUrls:[void 0]},j="Hugging Face",f=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...s.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...u.d$,{value:"Add Hugging Face connector",id:"add-hugging-face-connector",level:2},...a.d$,{value:"Set up Hugging Face OAuth app",id:"set-up-hugging-face-oauth-app",level:2},...h.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable Hugging Face connector in Sign-in Experience",id:"enable-hugging-face-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{connector:j,sdk:"Express",link:"https://expressjs.com/"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(s.ZP,{type:"Traditional web",framework:"Express"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"add-hugging-face-connector",children:"Add Hugging Face connector"}),"\n",(0,i.jsx)(a.ZP,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"set-up-hugging-face-oauth-app",children:"Set up Hugging Face OAuth app"}),"\n",(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(c.ZP,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"enable-hugging-face-connector-in-sign-in-experience",children:"Enable Hugging Face connector in Sign-in Experience"}),"\n",(0,i.jsx)(l.ZP,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.ZP,{connector:j,sdk:"Express"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function v(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},75848:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},10637:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var i=t(11527),o=t(17279);const r=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",s=[];function a(e){const n={admonition:"admonition",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:r,width:"586px"})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},45965:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/express-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},16331:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Get user information",id:"get-user-information",level:4}];function s(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, you can use the ",(0,i.jsx)(n.code,{children:"withLogto"})," middleware to get ",(0,i.jsx)(n.code,{children:"req.user.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { withLogto } from '@logto/express';\n\napp.use(withLogto(config));\n"})}),"\n",(0,i.jsx)(n.p,{children:"No, let's use this value to protect routes by creating a simple middleware:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const requireAuth = async (req: Request, res: Response, next: NextFunction) => {\n  if (!req.user.isAuthenticated) {\n    res.redirect('/logto/sign-in');\n  }\n\n  next();\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then use it in the route handler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/protected', requireAuth, (req, res) => {\n  res.end('protected resource');\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-user-information",children:"Get user information"}),"\n",(0,i.jsxs)(n.p,{children:["For most cases, it is recommended to use ",(0,i.jsx)(n.code,{children:"claims"})," in ",(0,i.jsx)(n.code,{children:"req.user"}),' as "user info", this can be fast because ',(0,i.jsx)(n.code,{children:"claims"})," is cached when tokens are granted. If you need more accurate user info, set ",(0,i.jsx)(n.code,{children:"config.fetchUserInfo"})," to ",(0,i.jsx)(n.code,{children:"true"}),", to tell the SDK to fetch the user information from the OIDC ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/user', withLogto({ ...config, fetchUserInfo: true }), (req, res) => {\n  res.json(req.user.userInfo);\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},22953:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>c});var i=t(11527),o=t(17279);const r=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png";var s=t(75848),a=t(55556);const c=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...s.d$,{value:"Prepare logto routes",id:"prepare-logto-routes",level:4},{value:"Sign in",id:"sign-in",level:4}];function l(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,i.jsx)(s.ZP,{figureSrc:r,redirectUri:"http://localhost:3000/logto/sign-in-callback"}),"\n",(0,i.jsx)(n.h4,{id:"prepare-logto-routes",children:"Prepare logto routes"}),"\n",(0,i.jsx)(n.p,{children:"Prepare routes to connect with Logto."}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { handleAuthRoutes } from '@logto/express';\n\napp.use(handleAuthRoutes(config));\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will create 3 routes automatically:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/logto/sign-out"}),": Sign out from Logto."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sign-in",children:"Sign in"}),"\n",(0,i.jsx)(n.p,{children:"We're almost there! Now, create a sign-in button to redirect to the sign-in route on user click."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"app.get('/', (req, res) => {\n  res.setHeader('content-type', 'text/html');\n  res.end(`<div><a href=\"/logto/sign-in\">Sign In</a></div>`);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},99009:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function s(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:"/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,i.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},39542:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(11527),o=t(17279),r=t(10637),s=t(51187);const a=[...s.d$,...r.d$,{value:"Prepare required middlewares",id:"prepare-required-middlewares",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { LogtoExpressConfig } from '@logto/express';\n\nconst config: LogtoExpressConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-express-app-base-url>', // E.g. http://localhost:3000\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prepare-required-middlewares",children:"Prepare required middlewares"}),"\n",(0,i.jsxs)(n.p,{children:["The SDK requires ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})," to be configured in prior."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import cookieParser from 'cookie-parser';\nimport session from 'express-session';\n\napp.use(cookieParser());\napp.use(\n  session({\n    secret: 'random_session_key',\n    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // In miliseconds\n  })\n);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},13197:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(11527),o=t(17279),r=t(75696),s=t(78407);const a=[];function c(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/express cookie-parser express-session\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/express cookie-parser express-session\n"})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/express cookie-parser express-session\n"})})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>s});t(50959);var i=t(5341);const o={tabItem:"tabItem_YHvg"};var r=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(50959),o=t(5341),r=t(18387),s=t(28903),a=t(15885),c=t(35927),l=t(38894),d=t(70148);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,u]=p({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),j=(()=>{const e=l??x;return g({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=t(20619);const j={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==i&&(l(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}}}]);