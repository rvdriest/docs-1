"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83802],{81378:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,s.jsx)(n.p,{children:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."}),"\n",(0,s.jsx)(n.p,{children:"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,s.jsx)(n.p,{children:"You can skip some sections if you have already finished."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"register-aws-account",children:"Register AWS account"}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," and register an account."]}),"\n",(0,s.jsx)(n.h4,{id:"create-a-identity",children:"Create a identity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Amazon Simple Email Service"})," Console"]}),"\n",(0,s.jsxs)(n.li,{children:["Create an identity, choose one of the following options","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a domain"}),"\n",(0,s.jsx)(n.li,{children:"Create an email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"configuration-of-the-connector",children:"Configuration of the connector"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click your username in the upper right corner of the Amazon console to enter ",(0,s.jsx)(n.code,{children:"Security Credentials"}),". If you don't have one, create an ",(0,s.jsx)(n.code,{children:"AccessKey"})," and save it carefully."]}),"\n",(0,s.jsxs)(n.li,{children:["Complete the settings of the ",(0,s.jsx)(n.code,{children:"Amazon Simple Email Service"})," connector:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"AccessKey ID"})," and ",(0,s.jsx)(n.code,{children:"AccessKey Secret"})," obtained in step 1 to fill in ",(0,s.jsx)(n.code,{children:"accessKeyId"})," and ",(0,s.jsx)(n.code,{children:"accessKeySecret"})," respectively."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"region"}),": Fill in the ",(0,s.jsx)(n.code,{children:"region"})," field with the region of the identity you use to send mail."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"emailAddress"}),": The email address you use to send mail, in the format of ",(0,s.jsx)(n.code,{children:"Logto<noreply@logto.io>"})," or ",(0,s.jsx)(n.code,{children:"<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["the following parameters are optional; parameters description can be found in the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"AWS SES API documentation"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"test-the-amazon-ses-connector",children:"Test the Amazon SES connector"}),"\n",(0,s.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'}),"\n",(0,s.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,s.jsx)(n.h4,{id:"configure-types",children:"Configure types"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessKeyId"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessKeySecret"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"region"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"emailAddress"}),(0,s.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,s.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,s.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,s.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"configurationSetName"}),(0,s.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"templates"}),(0,s.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Template Properties"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Enum values"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subject"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"usageType"}),(0,s.jsx)(n.td,{children:"enum string"}),(0,s.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},43236:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>u});var s=t(11527),i=t(17279),r=t(45965),o=t(16331),a=t(22953),l=t(99009),c=t(39542),d=t(13197),h=t(94842);const u=[...r.d$,{value:"Installation",id:"installation",level:3},...d.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...l.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...o.d$,...h.d$];function p(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,s.jsx)(c.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,s.jsx)(l.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,s.jsx)(o.ZP,{}),"\n",(0,s.jsx)(h.ZP,{sdk:"Express"})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},53136:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[];function o(e){const n={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Connector tab",src:t(64897).Z+"",width:"4164",height:"1290"})}),"\n",(0,s.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,s.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,s.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},59885:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[];function o(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Save changes",src:t(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,s.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(11527),i=t(17279);t(87593),t(80710),t(53136),t(80386),t(59885),t(23095),t(43236),t(81378);const r={slug:"how-to-build-aws-ses-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","aws-ses","express","js","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Express and Logto"},o=void 0,a={permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-express-and-logto",source:"@site/tutorial/build-with-logto/generated-express-aws-ses.mdx",title:"How to build AWS SES Email passwordless sign-in with Express and Logto",description:"\x3c!--",date:"2024-06-30T08:28:35.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"aws-ses",permalink:"/tutorial/tags/aws-ses"},{inline:!0,label:"express",permalink:"/tutorial/tags/express"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.32,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-aws-ses-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","aws-ses","express","js","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Express and Logto"},unlisted:!1,prevItem:{title:"How to build Apple sign-in with Express and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-express-and-logto"},nextItem:{title:"How to build Azure AD sign-in with Express and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-express-and-logto"}},l={authorsImageUrls:[void 0]},c="AWS SES",d=[];function h(e){return(0,s.jsx)(s.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h()}},75848:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[];function o(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,s.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,s.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},10637:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>o});var s=t(11527),i=t(17279);const r=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",o=[];function a(e){const n={admonition:"admonition",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,s.jsx)("img",{alt:"App Secret",src:r,width:"586px"})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[];function o(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,s.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},45965:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The sample project is available on our ",(0,s.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/express-sample",children:"SDK repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},16331:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[{value:"Get user information",id:"get-user-information",level:4}];function o(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In Logto SDK, you can use the ",(0,s.jsx)(n.code,{children:"withLogto"})," middleware to get ",(0,s.jsx)(n.code,{children:"req.user.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,s.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { withLogto } from '@logto/express';\n\napp.use(withLogto(config));\n"})}),"\n",(0,s.jsx)(n.p,{children:"No, let's use this value to protect routes by creating a simple middleware:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const requireAuth = async (req: Request, res: Response, next: NextFunction) => {\n  if (!req.user.isAuthenticated) {\n    res.redirect('/logto/sign-in');\n  }\n\n  next();\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then use it in the route handler:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"app.get('/protected', requireAuth, (req, res) => {\n  res.end('protected resource');\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"get-user-information",children:"Get user information"}),"\n",(0,s.jsxs)(n.p,{children:["For most cases, it is recommended to use ",(0,s.jsx)(n.code,{children:"claims"})," in ",(0,s.jsx)(n.code,{children:"req.user"}),' as "user info", this can be fast because ',(0,s.jsx)(n.code,{children:"claims"})," is cached when tokens are granted. If you need more accurate user info, set ",(0,s.jsx)(n.code,{children:"config.fetchUserInfo"})," to ",(0,s.jsx)(n.code,{children:"true"}),", to tell the SDK to fetch the user information from the OIDC ",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"app.get('/user', withLogto({ ...config, fetchUserInfo: true }), (req, res) => {\n  res.json(req.user.userInfo);\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},22953:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>l});var s=t(11527),i=t(17279);const r=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png";var o=t(75848),a=t(55556);const l=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...o.d$,{value:"Prepare logto routes",id:"prepare-logto-routes",level:4},{value:"Sign in",id:"sign-in",level:4}];function c(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,s.jsx)(o.ZP,{figureSrc:r,redirectUri:"http://localhost:3000/logto/sign-in-callback"}),"\n",(0,s.jsx)(n.h4,{id:"prepare-logto-routes",children:"Prepare logto routes"}),"\n",(0,s.jsx)(n.p,{children:"Prepare routes to connect with Logto."}),"\n",(0,s.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { handleAuthRoutes } from '@logto/express';\n\napp.use(handleAuthRoutes(config));\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will create 3 routes automatically:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/logto/sign-out"}),": Sign out from Logto."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"sign-in",children:"Sign in"}),"\n",(0,s.jsx)(n.p,{children:"We're almost there! Now, create a sign-in button to redirect to the sign-in route on user click."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"app.get('/', (req, res) => {\n  res.setHeader('content-type', 'text/html');\n  res.end(`<div><a href=\"/logto/sign-in\">Sign In</a></div>`);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},99009:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var s=t(11527),i=t(17279);const r=[];function o(e){const n={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,s.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,s.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},39542:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var s=t(11527),i=t(17279),r=t(10637),o=t(51187);const a=[...o.d$,...r.d$,{value:"Prepare required middlewares",id:"prepare-required-middlewares",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.ZP,{}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { LogtoExpressConfig } from '@logto/express';\n\nconst config: LogtoExpressConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-express-app-base-url>', // E.g. http://localhost:3000\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"prepare-required-middlewares",children:"Prepare required middlewares"}),"\n",(0,s.jsxs)(n.p,{children:["The SDK requires ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})," to be configured in prior."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import cookieParser from 'cookie-parser';\nimport session from 'express-session';\n\napp.use(cookieParser());\napp.use(\n  session({\n    secret: 'random_session_key',\n    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // In miliseconds\n  })\n);\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},13197:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>a});var s=t(11527),i=t(17279),r=t(75696),o=t(78407);const a=[];function l(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(r.Z,{value:"npm",label:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i @logto/express cookie-parser express-session\n"})})}),(0,s.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/express cookie-parser express-session\n"})})}),(0,s.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/express cookie-parser express-session\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>o});t(50959);var s=t(5341);const i={tabItem:"tabItem_YHvg"};var r=t(11527);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,o),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(50959),i=t(5341),r=t(18387),o=t(28903),a=t(15885),l=t(35927),c=t(38894),d=t(70148);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=u(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=g({queryString:t,groupId:i}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),j=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(20619);const j={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==s&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function y(e){const n=(0,m.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},64897:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"}}]);