"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62034],{7195:(e,n,i)=>{i.d(n,{ZP:()=>r,d$:()=>s});var o=i(11527),t=i(17279);const s=[{value:"Register a Facebook developer account",id:"register-a-facebook-developer-account",level:3},{value:"Set up a Facebook app",id:"set-up-a-facebook-app",level:3},{value:"Test sign-in with Facebook&#39;s test users",id:"test-sign-in-with-facebooks-test-users",level:3},{value:"Publish Facebook sign-in settings",id:"publish-facebook-sign-in-settings",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Facebook developer docs",id:"facebook-developer-docs",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"register-a-facebook-developer-account",children:"Register a Facebook developer account"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Register as a Facebook Developer"})," if you don't have one."]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-a-facebook-app",children:"Set up a Facebook app"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"Apps"})," page."]}),"\n",(0,o.jsxs)(n.li,{children:["Click your existing app or ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"create a new one"})," if needed.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The selected ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"app type"})," is up to you, but it should have the product ",(0,o.jsx)(n.em,{children:"Facebook Login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:'On the app dashboard page, scroll to the "Add a product" section and click the "Set up" button on the "Facebook Login" card.'}),"\n",(0,o.jsx)(n.li,{children:'Skip the Facebook Login Quickstart page, and click the sidebar -> "Products" -> "Facebook Login" -> "Settings".'}),"\n",(0,o.jsxs)(n.li,{children:["In the Facebook Login Settings page, fill ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' in the "Valid OAuth Redirect URIs" field. The ',(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page. E.g.:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://your-logto-domain.com/callback/${connector_id}"})," for production"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://localhost:3001/callback/${connector_id}"})," for testing in the local environment"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,o.jsxs)(n.li,{children:['In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic" and then you will get the ',(0,o.jsx)(n.strong,{children:"App ID"})," and ",(0,o.jsx)(n.strong,{children:"App secret"}),". The ",(0,o.jsx)(n.em,{children:"App ID"})," is the ",(0,o.jsx)(n.code,{children:"clientId"})," in your Logto connector conifg and the ",(0,o.jsx)(n.em,{children:"App secret"})," is the ",(0,o.jsx)(n.code,{children:"clientSecret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"test-sign-in-with-facebooks-test-users",children:"Test sign-in with Facebook's test users"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the accounts of the test, developer, and admin users to test sign-in with the related app under both development and live ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"app modes"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['You can also set the app to "live mode" by ',(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#switching-modes",children:"switching modes"})," so that any Facebook user can sign in with the app."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'In the app dashboard page, click the sidebar -> "Roles" -> "Test Users".'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Create test users" button to create a testing user.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Options" button of the existing test user, and you will see more operations, e.g., "Change name and password".'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"publish-facebook-sign-in-settings",children:"Publish Facebook sign-in settings"}),"\n",(0,o.jsxs)(n.p,{children:["Usually, only the test, admin, and developer users can sign in with the related app under ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"development mode"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To enable normal Facebook users sign-in with the app in the production environment, you may need to switch your Facebook app to ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"live mode"})}),", depending on the app type.\nE.g., the pure ",(0,o.jsx)(n.em,{children:"business type"})," app doesn't have the \"live\" switch button, but it won't block you from using it."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic".'}),"\n",(0,o.jsx)(n.li,{children:'Fill out the "Privacy Policy URL" and "User data deletion" fields on the panel if required.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Live" switch button on the app top bar.'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"facebook-developer-docs",children:"Facebook developer docs"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Documentation - Facebook for Developers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Manually Build a Login Flow"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Permissions Guide"})}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},32726:(e,n,i)=>{i.d(n,{ZP:()=>h,d$:()=>d});var o=i(11527),t=i(17279),s=i(91837),a=i(84200),r=i(92179),c=i(94842);const d=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},...s.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...r.d$,{value:"Sign in",id:"sign-in",level:3},...a.d$,...c.d$];function l(e){const n={h3:"h3",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(c.ZP,{sdk:"iOS"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},44557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,connector:()=>x,contentTitle:()=>u,default:()=>m,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var o=i(11527),t=i(17279),s=i(87593),a=i(80710),r=i(12665),c=i(80386),d=i(31877),l=i(23095),h=i(32726),p=i(7195);const g={slug:"how-to-build-facebook-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","facebook","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with iOS Swift and Logto"},u=void 0,f={permalink:"/tutorial/how-to-build-facebook-sign-in-with-ios-swift-and-logto",source:"@site/tutorial/build-with-logto/generated-ios-swift-facebook.mdx",title:"How to build Facebook sign-in with iOS Swift and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"facebook",permalink:"/tutorial/tags/facebook"},{inline:!0,label:"ios-swift",permalink:"/tutorial/tags/ios-swift"},{inline:!0,label:"swift",permalink:"/tutorial/tags/swift"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-facebook-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","facebook","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with iOS Swift and Logto"},unlisted:!1,prevItem:{title:"How to build Discord sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-ios-swift-and-logto"},nextItem:{title:"How to build GitHub sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-ios-swift-and-logto"}},j={authorsImageUrls:[void 0]},x="Facebook",b=[...s.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add Facebook connector",id:"add-facebook-connector",level:2},...r.d$,{value:"Set up Facebook login",id:"set-up-facebook-login",level:2},...p.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable Facebook connector in Sign-in Experience",id:"enable-facebook-connector-in-sign-in-experience",level:2},...d.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...l.d$,{value:"Further readings",id:"further-readings",level:2}];function k(e){const n={a:"a",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{connector:x,sdk:"iOS Swift",link:"https://developer.apple.com/ios/ "}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.ZP,{type:"Native app",framework:"iOS(Swift)"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"add-facebook-connector",children:"Add Facebook connector"}),"\n",(0,o.jsx)(r.ZP,{connector:x}),"\n",(0,o.jsx)(n.h2,{id:"set-up-facebook-login",children:"Set up Facebook login"}),"\n",(0,o.jsx)(p.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(c.ZP,{connector:x}),"\n",(0,o.jsx)(n.h2,{id:"enable-facebook-connector-in-sign-in-experience",children:"Enable Facebook connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.ZP,{connector:x}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(l.ZP,{connector:x,sdk:"iOS Swift"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}},7709:(e,n,i)=>{i.d(n,{ZP:()=>r,d$:()=>s});var o=i(11527),t=i(17279);const s=[];function a(e){const n={admonition:"admonition",p:"p",...(0,t.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Before calling ",(0,o.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},91837:(e,n,i)=>{i.d(n,{ZP:()=>r,d$:()=>s});var o=i(11527),t=i(17279);const s=[];function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"https://github.com/logto-io/swift.git\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Since Xcode 11, you can ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app",children:"directly import a Swift package"})," w/o any additional tool."]}),"\n",(0,o.jsxs)(n.p,{children:["We do not support ",(0,o.jsx)(n.strong,{children:"Carthage"})," and ",(0,o.jsx)(n.strong,{children:"CocoaPods"})," at the time due to some technical issues."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Carthage"}),(0,o.jsxs)(n.p,{children:["Carthage ",(0,o.jsxs)(n.a,{href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385",children:["needs a ",(0,o.jsx)(n.code,{children:"xcodeproj"})," file to build"]}),", but ",(0,o.jsx)(n.code,{children:"swift package generate-xcodeproj"})," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later."]})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"CocoaPods"}),(0,o.jsxs)(n.p,{children:["CocoaPods ",(0,o.jsx)(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/3276",children:"does not support local dependency"})," and monorepo, thus it's hard to create a ",(0,o.jsx)(n.code,{children:".podspec"})," for this repo."]})]})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},84200:(e,n,i)=>{i.d(n,{ZP:()=>h,d$:()=>d});var o=i(11527),t=i(17279),s=i(34193),a=i(75848),r=i(7709),c=i(55556);const d=[...c.d$,{value:"Configure redirect URI",id:"configure-redirect-uri",level:4},...a.d$,{value:"Sign-in and sign-out",id:"sign-in-and-sign-out",level:4},...r.d$];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(n.h4,{id:"configure-redirect-uri",children:"Configure redirect URI"}),"\n",(0,o.jsx)(a.ZP,{figureSrc:s.Z,redirectUri:"io.logto://callback"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The Redirect URI in iOS SDK is only for internal use. There's ",(0,o.jsx)(n.em,{children:"NO NEED"})," to add a ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"Custom URL Scheme"})," until a connector asks."]})}),"\n",(0,o.jsx)(n.h4,{id:"sign-in-and-sign-out",children:"Sign-in and sign-out"}),"\n",(0,o.jsx)(r.ZP,{calling:".signInWithBrowser(redirectUri:)"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"client.signInWithBrowser(redirectUri:)"})," to sign in the user and ",(0,o.jsx)(n.code,{children:"client.signOut()"})," to sign out the user."]}),"\n",(0,o.jsx)(n.p,{children:"For example, in a SwiftUI app:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",metastring:'title="ContentView.swift"',children:'struct ContentView: View {\n  @State var isAuthenticated: Bool\n\n  init() {\n    isAuthenticated = client.isAuthenticated\n  }\n\n  var body: some View {\n    VStack {\n      if isAuthenticated {\n        Button("Sign Out") {\n          Task { [self] in\n            await client.signOut()\n            isAuthenticated = false\n          }\n        }\n      } else {\n        Button("Sign In") {\n          Task { [self] in\n            do {\n              try await client.signInWithBrowser(redirectUri: "${\n                props.redirectUris[0] ?? \'io.logto://callback\'\n              }")\n              isAuthenticated = true\n            } catch let error as LogtoClientErrors.SignIn {\n              // error occured during sign in\n            } catch {\n              // other errors\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},92179:(e,n,i)=>{i.d(n,{ZP:()=>r,d$:()=>s});var o=i(11527),t=i(17279);const s=[];function a(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Initialize the client by creating a ",(0,o.jsx)(n.code,{children:"LogtoClient"})," instance with a ",(0,o.jsx)(n.code,{children:"LogtoConfig"})," object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",metastring:'title="ContentView.swift"',children:'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."}),(0,o.jsxs)(n.p,{children:["To turn off this behavior, set ",(0,o.jsx)(n.code,{children:"usingPersistStorage"})," to ",(0,o.jsx)(n.code,{children:"false"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n"})})]})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},34193:(e,n,i)=>{i.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPQAAAEECAMAAACYzZrjAAAAn1BMVEX////JxdDEx8cZHB1dNPJ0d3iMjY42ODmpqqvi4uJvcXHx8fEnKitSVVXu7u7WzPzr5v7U1dXLzM1xTfTc3d6FZ/Z+gICumvmagPeam5zCs/qXmZpnQfPi4+P4+PhER0e4uLiFiIlSVFVgY2P18v7Cs/vm5uZ8f4C5p/rh2f26u7zMwPt7WvWxs7OgoaK5u7ykjfiQdPfs7u6jjfikjfehUAtzAAASkUlEQVR42uzUAQ0AAAiAMO1fWnvwjwzMAoSYHpAyH0CE6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmB6SYHpBiekCK6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmB6SYHpBiekCK6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmB6SYHpBiekCK6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmd+zcbaubMBjG8RuDMT5UUEQoMqvngIVCW9j3/3C7bRKjc1LnNpjH6/diNtW0vvoTpz0AcCiIHgAcCqIHAIeC6AHAoSB6AHAoiB4AHAqiBwCHgugBwKH8P9ELQwIAmPlq0YujqCRWCuERAHxdaSU7WumpcnL+/+ipk/F5DumNb0IExIQQ0d/4YjkeqIWziU6njABgvboyHl5K29x8/0ErVb4i5/+PnhSOXBm9kxBqwyJx9sXReCAXzibAshLg96S+c6NNct+/f+HoJUFPsHJd9MJzQ6u5qW+iNz8bRA9gY/Qet57aXr0spy8cPUm98FNwXtaW619Eb342iB7Atujl5lXr+zVt8/WjR3QaLfXiMCbNjhejF8YLcygMN0bPnc00eiF/AwCsjh4Vvu/RHKKnnYX40PWSgeBInYeayUSIJAptucogyHjTBEEZR7xrNEfG7t6EYCdF+sh+ZxCEK6PnzsZFL+y/SlzO6B7A6ujR1RYpr67+VaVk1LfW96ucuqrq3/Oqu01Ylel7IR3Ra2/HE2/E0jtPke7eSME7WpXuOXqKk0IsDIRmGmXHgWeiF+kOKc7Wq2yzOfoYrdRHar8RPfVT9JrEfgMeEgRYHb1WFymV0xsbaWuGhe/3FVN+RRrP1R9R6IVicTWzcn7Ra031nnpYdjuO3mhtdTk3535jLjR5h5QfIphFLxFJFH3qOYGeE8TESp4TKdWn70yUSR4nUsp480ovTLifXtbw8EQAsC56tbkLy817dmlRmavduuX3i7RQ/uNd9OT1mRXd6502T7u89duaWG7Hpdxt9GLuiTJLrHj0ZEojeKsPnUVPRPGwSLRzZJ8o3tUQyzh28Yb/0zNn46KnzOExxw8XuAAro/fU8cpfG/bwyz5ZHsfP7H8XPbuws7FL+WLXjFOzZtxf9Mqw513MlWNgr0I9vaiKhjqdZtGzIbvYOdnPc6IgyFZGb342NnpmDwHA70Qvvfs6ZtJXk13t0LjqXfT6kX5V2I6W0z07jN4gaXS2PkgLXouqi64Oa2bR+6SXmBd6sznbHllxEo9G0Wv4DYUlHsCq6Dltqi9yM9Kkf58uBd9Fr7M/0ShJK14z7jw2rvuN3kdm1nfJSUte6zfeE0/LFY2vOBfnbI+eOxsXPd6yU9kgfACro3d91qZTldJa/+FaxrJ30UvJXhcr7cEF7cfVjh9Z+VQsMW3hlDk2YGQsR2/M03M2Rs+dzTR6YWQWgLjKBXgbvXvBKr9M7eLMqVzLWLEyepU/kvPYRU/tL3o2N4G9hj2pQawD9m6lN5mzbqV3HkevtGfhtpdp9FiooosQuHsL8D56udk+bNm83Mo2Re/hy3yQ7n2lJ+1d0TOxbOiNq05m2rYUvW+zOe//T0+N55z0l8/OZvZRoRT4WRrAuujRXadLJ2x6QEaatzJ6d78lbTZudxq9/kUSE0vM1vq0R1C0FD36+TmScpgjTydz9zahiW+jeoX29fxsXPTc6SgCgBXRq6+mZeYxE4vH95/u3tqGdQvRy3/6EW8+dDTd4d1bSXZxJU2wSpuiwNw3zUi/WIqeNC/tHM/OCU0OY6G3I6fJTz6ChbOx0TsFgWej1xAAvI2ee0yPt2Wqd8k210tA97996bDgY2oePdvPB714bVsPPWWP3UZPL65Mbz6bMJO8VeYhPBE1TSmSxejFnKZLk7k5nKZEet45sQXt555VTE72+kFv4zX9JOEtnM3oOb2Ap4clbwkAVkWP09Tabd5HTOpnWFIz9q5Xzpqum+Rtfb8uRK/PouqPuJnfeDzNWPk7fGRFunCVpkaGnPz2NvEWo0dZMJ0TX+z4MnwPC2mkScTgPDsbk0sbPfeBCf6QMsDb6LlU3Yh1HLNr2//TmatTPW5zk7U7v9G2PHEheu4Iv6qp9zDj215vZDBlqmSfDvnwiA3jj3Dp7u14TkOGDARLpBu76Lk52ke2dDY2euysP/ATf28A4Hf+4EBZE0uVz66P1B4jfValQ9ae136/R4vRo7zVj/6R8WxfM3Z39/bXYs/z4uk4pnf0HCfzvEmg4jCef89ZnpuY1uEPzPBsMsA2dVF0NTkpDydZ4/3valoUKY10w9DZa/QA4Bhe0ftvIXoAgOgBACB6AACrdG2L6AEA/B8QPQA4FEQPAA4F0QOAQ0H0AOBQED0AOBREDwAOBdEDgENB9ADgUBA9ADgURA8ADuXfRa/+luUeAMAmedbV9LKT6NWZBwDwR4qa2D6i1+VeXnyvCX6wY8eoEcNAGIWHf8DZyJWFCaSQsqTQAXz/w8UhCel22bUKmXlfo0oqH5oB8JS6rVJutjtD9Iq0UDwAh9RVKvt5gug1qRkAHFSkdobo1axiAHBYU64niN6q1QCgg0XL+NGrEvs8AH1k1eGj1/joAehlVRk+eos2A4AuNi3DRy8z3QLopSoPHz3JAGDQohA9AEMjegBCIXoAQiF6AEIhegBCIXoAQiF6AEIhegBCIXoAQiF6AEIhegBCIXoAQiF6AEI5dfTePya7YU7p1Tqa0tW+LSnZPdf0Zjul9HtjtkekROmBf0Tvx+zut1pS3GX9zH/PTf55P5D+YruLu+3k/lh+3S+GL3bOZldtGIjCIx/JY8f2whtLWSUi7/+Opf7JJCSoVK0qoc63uZgcT7ibT8MYUJSKSm8nMJj+ivRW+4FjDECVhKLSU5Rv5ZulR96FvyO9CQ/6JWWEAKPSU5Rv5aulJ/wL6SXY0fEFlZ6ifCsqvY+lN6rNWEilpyjfyldLryRLlWAZiJN5Jz0zMbDIWa4vDCRHJiUiSikippR6qbq6OEcavIRySG4jKRvvpRdsu+ceX2S3rM1Zei6llRRFUek1EqaWiGjYe+lZNGIXSI493pyETtUho7GEZp3Ins5nthHrKVnouvEqPcOnuvnlJWepdpBeBiwpivJEpXeQno/g2XuzAfZOehZ4GJ8dA7nno33mJ2xAvcGGxRjT1BVt/nkJrfFbgELS4EnH57kX6QFZ2lvppVF364pk116yaWvZLtLLUZ2nKB2V3kF6Cb0bK4C/Ss930ZDnZrIJyHsHeJ7plcMl12rD3Y30pEgBQtXa2kvxrfRgRtq0533/F7ZebfwLMTTpqfMU5YhKT6Tndy+FCHuV3ryr0NUnAjBRg1+lx/ul1ATprbsd6UmR8HisJDjgRnqSju3RoNScB8pezTTpqfMUZUeld5LeLB8h2bBcpZeG0SgAczXQqFhepJflklQd60VGelJEeCs9SUsnWJHcCuTX01t1nqI0VHqv0itgUUi8So9RiA6NnBOduRfpra0plIdCQhle9M2J9EJ2tkwT30tv3FI2mvkZ37jm7Gs1oEQkUhSlotI7SW86Sg9X6QH2sEFMd5GerG9auYhVOr4bTZkFjVvpXW45R3RY0gIq+qMDitJQ6d10eu+lxyK9BdOph5uv0vMivXz3Kb0Nk+wUPBDL7FYzf9TpOYCLe8ZLl168SG9mRE+Koqj0fmum103XibD1aTsKfDDTu4707t/9cvhopleq3xgbkeTc6Wa9O/URHEhRFJXeUXpnozCmF+nJp0AkmUYL5SDSk+Pfqz+lwaPcZRfEnNbmQzt53+lJmrHVV+ZGXaa6nvdqfnxkZQUmUhSFSKV3kh7x8JPt+jPOH6RngDKEw11BbIiCjQycj1S34cPctRTcehrpuZY8mzPLaYnne+mN9FzrhiE5j5ZLh+u79MjqFzIUZUelJ9JbgeSJggWm3SQiPdoA64lyAtyQIyIDS3cSlV1CsfqQ1vHWcgKcNHjS8VHuSRex1VytYBjvpFc9O++S41zjUTyc2/WJdunRpocZitJQ6Yn0DhLD4rtpEA7SCwsAZkjf5BhAtGFIz+AnY2/kCHCTHAPlONLjaqNr0jMQlwi272Z68VjXoMWXnqNZqh2kF/QwQ1EqKj2RXsUtaBajropy/pUVy3jyOBQKJofmpMq6oD/0Uy1VPHUZRX8d6bXkY9xUVg//7iDDjwBVTNeuBV+qifT0MENRGiq9C8EYLytPr2RjAl2YEfcCPkipLNkQ7kZ6kjyt3vtJRDvw+0r2a1enKLeo9P6MiTcaLeGDPkAavAkbKYryzfyP0nPAlvuXKDJ9gDR4rL9orChfzv8oPbJ4wnhi6QNkpOeBTIqifDP/pfTItVODx6eVE7v6d+WFlB/s3LFtxDAMQFGCXZBKglqr1ADef7gYyE1wdmGB7w3xIZEAYWs1o3f5abYGUFHZ6AE1iR5QiugBpYgeUIroAaWIHlCK6AGliB5QiugBpWwQvZ4zAB7xm/310Wt5BsAjzmyvj96RIwAeMXK9PnqR3f8WeMTMnO+PXktH7IBHjBzx/ujNnisAbjuyzw2iFyvzCID7LVkRG0QvjsxhrgfcMtv/+2mH6MXqmePUPeBL8xw9+4rLFtGLORLgljbjskn0IuZqPQG+0tvxSd420QN4IdEDShE9/tipAwEAAAAAQf7Wg1wQwYr0gBXpASvSA1akB6xID1iRHrAiPWBFesCK9IAV6QEr0gNWpAexa8csjsNAGIan+HoJhkHCTCmDhF3YXP7/b7usNVlfnBRLOJKQnacbLFndi23sfpU3il7Oga6kPNJ/c8oTOefcK6I3iQS6BRwaJ8h0FEUqPYKRyDnnXhE9Af48Gr0BUPq5mFL06DnnXhq9CEDLg9ETAIF+LADBo+ece2n0BrBifCx6ERCIR885937Ri8NEdzHqAnksegskQItHzzn3dtELYLqnATEAe7gGUcw57tELouAc70WPMZKi2lREWkkMzCOZkkSha5+rzMAsMln06teYyr8Ha259GGWlQYBGzrlP9vzoZQiRIu3zhuMlegkbbbfRC0Ck/TExAhNjYysbw+ay3xpjj97JTipWTHTJTuWKs0DOuU/2/OgxRqIEsfEESIit6mzRGwAeYhtYZ+TbYFr5LtETrTEGtr2Roek8517BFipQQyjbsYzUtku9coJtXoHao6c812mK5Jz7ZE+P3gRE+9Zm3VrpS1MLF4OLBewmenp5aCPbbP0r2iOabaYEhOM3PVSLnVpbRwuplr5jJefcx3t69HLPk9ivegsQaZN6habvTIWb6A19cYJa9L5XLNthZd+hWI/Rk6ubyGVp6ecmwB/ynPsFnh29/uVuD5dArq8sUDJ6jJ5gtZXhsmWiTQV64hp1C/QQPausvR0X23rW36ITmNxf9u6YtWEYCMNwhm+3QAgZc+MFYuyhof//v9Xx2TlU213amFB971CaNpW2h5MaEsb+f69Ar0PR99+pzVemkSAXL1kxBV2jPTBtTHT9bFmjr9inRC87evPX1FoRiegxVk1no5cgaQ6GGxy9aOi5dPZtsW6aixDdQy8X6IWf0fOIHmMV9Qr0NDzqEMNcOax5ovuT3v0IvQjv+vtJ79atDUSPsWo6+U7vA9ItATc/wvrhtUU8uNPrgdxZI9IGPR/v/M7wCD2/DrSIHmPVdDJ60R1LSKagPt262rTWP5Fz9EoOb4DuoKcGqa9+jN5F8En0GKuwU9EzgxwuO2Z+2KAXDT0V3Fe30B6AqUDeoDeVENUFtQ2HffQyJNhaY8xEj7FqOhU9H9ZMt2y0ZZ2ePcbFqQy0YQLtDinQG0w4H+R20GuA2E9L32TZKABj2EVPBfH6eDhCAtFjrJrORa9gLEGWCQ8xQvoFPR3tB8gJ7S6YhlyzQc/GR0gUIIZ1k6nrBr2pXpanysDjLWP19Dr0tBv8gVO1OeuGFlOp93dZybODQ/nf21AcdlXwuUVvKszKSdb1z9oD9NaNJQXe6TFWUe/wwUDaNOFS1Dfh71YLx2s1Ta8XxlhNvQN6jDF2FNFj7IudOhAAAAAAEORvPcgFEUgPQHoA0gPmpAesSA9YkR6wIj1gRXrAivSAFekBK9IDVqQHsVMHAgAAAACC/K0HuSBiRXrAivSAFekBK9IDVqQHrEgPWJEesCI9YEV6wIr0gBXpASvSA1akB6xID1iRHrAiPWBFesCK9IAV6QEr0gNWpAesSA9YkR6wIj2onTqgAQAAQBjUv7UzxyEEpEgPSJEekCI9IEV6QIr0gBTpASnSA1KkB6RID0iRHpAiPSBFekCK9IAU6QEp0gNSpAekSA9IeXoAIdIDUgZFt1R7PR+BeQAAAABJRU5ErkJggg=="}}]);