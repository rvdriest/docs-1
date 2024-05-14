"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58578],{64068:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(n.p,{children:["We recommend to read ",(0,o.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/rbac/",children:"\ud83d\udd10 Role-Based Access Control (RBAC)"})," first to understand the basic concepts of Logto RBAC and how to set up API resources properly."]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},48771:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function i(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,o.jsx)(n.p,{children:"Now, you can test your application:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,o.jsx)(n.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,o.jsx)(n.li,{children:"After you signed in, you will be redirected back to your application and see the user data with sign-out button."}),"\n",(0,o.jsx)(n.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},89984:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Once you have set up the API resources, you can add them when configuring Logto in your app:"}),"\n",e.configResourcesCode,"\n",(0,o.jsx)(n.p,{children:"Each API resource has its own permissions (scopes)."}),"\n",(0,o.jsxs)(n.p,{children:["For example, the ",(0,o.jsx)(n.code,{children:"https://shopping.your-app.com/api"})," resource has the ",(0,o.jsx)(n.code,{children:"shopping:read"})," and ",(0,o.jsx)(n.code,{children:"shopping:write"})," permissions, and the ",(0,o.jsx)(n.code,{children:"https://store.your-app.com/api"})," resource has the ",(0,o.jsx)(n.code,{children:"store:read"})," and ",(0,o.jsx)(n.code,{children:"store:write"})," permissions."]}),"\n",(0,o.jsx)(n.p,{children:"To request these permissions, you can add them when configuring Logto in your app:"}),"\n",e.configResourcesWithScopesCode,"\n",(0,o.jsxs)(n.p,{children:["You may notice that scopes are defined separately from API resources. This is because ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Resource Indicators for OAuth 2.0"})," specifies the final scopes for the request will be the cartesian product of all the scopes at all the target services."]}),"\n",e.configResourcesWithSharedScopesCode&&(0,o.jsxs)(o.Fragment,{children:["Thus, in the above case, scopes can be simplified from the definition in Logto, both of the API resources can have `read` and `write` scopes without the prefix. Then, in the Logto config:",e.configResourcesWithSharedScopesCode,"For every API resource, it will request for both `read` and `write` scopes."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["It is fine to request scopes that are not defined in the API resources. For example, you can request the ",(0,o.jsx)(n.code,{children:"email"})," scope even if the API resources don't have the ",(0,o.jsx)(n.code,{children:"email"})," scope available. Unavailable scopes will be safely ignored."]})}),"\n",(0,o.jsx)(n.p,{children:"After the successful sign-in, Logto will issue proper scopes to API resources according to the user's roles."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},79917:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,o.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},71651:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["To fetch the access token for a specific API resource, you can use the ",(0,o.jsx)("code",{children:e.getAccessTokenApi})," method:"]}),"\n",e.getAccessTokenCode,"\n",(0,o.jsx)(n.p,{children:"This method will return a JWT access token that can be used to access the API resource when the user has related permissions. If the current cached access token has expired, this method will automatically try to use a refresh token to get a new access token."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},77159:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["If organization is new to you, please read ",(0,o.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/organizations/",children:"\ud83c\udfe2 Organizations (Multi-tenancy)"})," to get started."]}),"\n",(0,o.jsxs)(n.p,{children:["You need to add ",(0,o.jsx)("code",{children:e.organizationScope})," scope when configuring the Logto client:"]}),"\n",e.configOrganizationCode,"\n",(0,o.jsx)(n.p,{children:"Once the user is signed in, you can fetch the organization token for the user:"}),"\n",e.getOrganizationAccessTokenCode]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},60999:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={a:"a",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/",children:"Customize sign-in experience"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"Protect your API"})}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},7466:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>i});var o=t(86070),r=t(76113);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",i=[];function c(e){const n={admonition:"admonition",...(0,r.R)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,o.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},29955:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),r=t(76113);const s=[];function i(e){const n={admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},73378:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>i});var o=t(86070),r=t(76113);const s="data:image/png;base64,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",i=[];function c(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The sign-in flow can be simplified as:"}),"\n",(0,o.jsx)("img",{alt:"Web sign-in flow",src:s,width:"700pt"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},91078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>$,contentTitle:()=>Z,default:()=>te,frontMatter:()=>J,metadata:()=>_,toc:()=>ee});var o=t(86070),r=t(76113),s=t(64068),i=t(48771),c=t(60999),a=t(38268);function l(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The sample project is available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/next-server-actions-sample",children:"SDK repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The example is based on Next.js ",(0,o.jsx)(n.a,{href:"https://nextjs.org/docs",children:"App Router"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,o.jsx)(n.a,{href:"https://youtu.be/Y2UYvH83Kk4",children:"YouTube channel"}),"."]}),"\n"]})})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function p(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We can call the function ",(0,o.jsx)(n.code,{children:"getLogtoContext"})," to get context as the authentication state in pages, let's modify the home page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';\nimport SignIn from './sign-in';\nimport SignOut from './sign-out';\nimport { logtoConfig } from './logto';\n\nexport default async function Home() {\n  const { isAuthenticated } = await getLogtoContext(logtoConfig);\n\n  return (\n    <main>\n      <h1>Hello Logto.</h1>\n      <div>\n        {isAuthenticated ? (\n          <SignOut\n            onSignOut={async () => {\n              'use server';\n\n              await signOut(logtoConfig);\n            }}\n          />\n        ) : (\n          <SignIn\n            onSignIn={async () => {\n              'use server';\n\n              await signIn(logtoConfig);\n            }}\n          />\n        )}\n      </div>\n    </main>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}var h=t(62302),g=t(79917),f=t(73378);const x=[...f.RM,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...g.RM,{value:"Implement callback route",id:"implement-callback-route",level:4},{value:"Implement sign-in button",id:"implement-sign-in-button",level:4}];function A(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Ay,{}),"\n",(0,o.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,o.jsx)(g.Ay,{figureSrc:h.A,redirectUri:"http://localhost:3000/callback"}),"\n",(0,o.jsx)(n.h4,{id:"implement-callback-route",children:"Implement callback route"}),"\n",(0,o.jsxs)(n.p,{children:['Create a "callback" route by adding the following code to ',(0,o.jsx)(n.code,{children:"/app/callback/route.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { handleSignIn } from '@logto/next/server-actions';\nimport { redirect } from 'next/navigation';\nimport { NextRequest } from 'next/server';\nimport { logtoConfig } from '../logto';\n\nexport async function GET(request: NextRequest) {\n  const searchParams = request.nextUrl.searchParams;\n  await handleSignIn(logtoConfig, searchParams);\n\n  redirect('/');\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"implement-sign-in-button",children:"Implement sign-in button"}),"\n",(0,o.jsx)(n.p,{children:"In this step, we will create a sign-in button."}),"\n",(0,o.jsxs)(n.p,{children:["This is a client component, so we will create it in ",(0,o.jsx)(n.code,{children:"/app/sign-in.tsx"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"'use client';\n\ntype Props = {\n  onSignIn: () => Promise<void>;\n};\n\nconst SignIn = ({ onSignIn }: Props) => {\n  return (\n    <button\n      onClick={() => {\n        onSignIn();\n      }}\n    >\n      Sign In\n    </button>\n  );\n};\n\nexport default SignIn;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We're almost there! Add this button to home page at ",(0,o.jsx)(n.code,{children:"/app/page.tsx"})," and implement the ",(0,o.jsx)(n.code,{children:"onSignIn"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { signIn } from '@logto/next/server-actions';\nimport SignIn from './sign-in';\nimport { logtoConfig } from './logto';\n\nexport default async function Home() {\n  return (\n    <main>\n      <h1>Hello Logto.</h1>\n      <div>\n        <SignIn\n          onSignIn={async () => {\n            'use server';\n\n            await signIn(logtoConfig);\n          }}\n        />\n      </div>\n    </main>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you will be navigated to Logto sign-in page when you click the button."})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(A,{...e})}):A(e)}function j(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The sign-out button is also a client component, so we will create it in ",(0,o.jsx)(n.code,{children:"/app/sign-out.tsx"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"'use client';\n\ntype Props = {\n  onSignOut: () => Promise<void>;\n};\n\nconst SignOut = ({ onSignOut }: Props) => {\n  return (\n    <button\n      onClick={() => {\n        onSignOut();\n      }}\n    >\n      Sign Out\n    </button>\n  );\n};\n\nexport default SignOut;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then add the sign-out button to the home page in ",(0,o.jsx)(n.code,{children:"/app/page.tsx"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { signIn, signOut } from '@logto/next/server-actions';\nimport SignIn from './sign-in';\nimport SignOut from './sign-out';\nimport { logtoConfig } from './logto';\n\nexport default async function Home() {\n  return (\n    <main>\n      <h1>Hello Logto.</h1>\n      <div>\n        <SignOut\n          onSignOut={async () => {\n            'use server';\n\n            await signOut(logtoConfig);\n          }}\n        />\n        <SignIn\n          onSignIn={async () => {\n            'use server';\n\n            await signIn(logtoConfig);\n          }}\n        />\n      </div>\n    </main>\n  );\n}\n"})})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}var b=t(7466),w=t(29955);const I=[...w.RM,...b.RM];function R(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.Ay,{}),"\n",(0,o.jsx)(b.Ay,{}),"\n",(0,o.jsxs)(n.p,{children:["Prepare configuration for the Logto client. Create a new file ",(0,o.jsx)(n.code,{children:"app/logto.ts"})," and add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const logtoConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n};\n"})})]})}function y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(R,{...e})}):R(e)}var S=t(89984);function k(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const logtoConfig = {\n  // ...other configs\n  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // Add API resources\n};\n"})})}function C(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}function N(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const logtoConfig = {\n  // ...other configs\n  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],\n  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],\n};\n"})})}function T(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(N,{...e})}):N(e)}function P(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const logtoConfig = {\n  // ...other configs\n  scopes: ['read', 'write'],\n  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],\n};\n"})})}function q(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(P,{...e})}):P(e)}const U=[...S.RM];function E(e){return(0,o.jsx)(S.Ay,{configResourcesCode:(0,o.jsx)(C,{}),configResourcesWithScopesCode:(0,o.jsx)(T,{}),configResourcesWithSharedScopesCode:(0,o.jsx)(q,{})})}function L(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(E,{...e})}):E()}var W=t(71651);function B(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { getLogtoContext } from '@logto/next/server-actions';\nimport { logtoConfig } from './logto';\n\nexport default async function Home() {\n  const { isAuthenticated, claims, accessToken } = await getLogtoContext(logtoConfig, {\n    getAccessToken: true,\n  });\n  // ...\n}\n"})})}function O(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(B,{...e})}):B(e)}const D=[...W.RM];function F(e){return(0,o.jsx)(W.Ay,{getAccessTokenApi:"getAccessToken",getAccessTokenCode:(0,o.jsx)(O,{})})}function M(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(F,{...e})}):F()}var H=t(77159);function K(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { UserScope } from '@logto/next';\n\nexport const logtoConfig = {\n  // ...other configs\n  scopes: [UserScope.Organizations],\n};\n"})})}function Q(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(K,{...e})}):K(e)}function V(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { getOrganizationTokens } from '@logto/next/server-actions';\nimport { logtoConfig } from './logto';\n\nexport default async function Home() {\n  // ...\n  const organizations = await getOrganizationTokens(logtoConfig);\n\n  return (\n    <main>\n      /* ... */\n      {organizations.length > 0 ? (\n        <div>\n          <h2>Organizations</h2>\n          <ul>\n            {organizations.map((organization) => (\n              <li key={organization.id}>{organization.id}</li>\n            ))}\n          </ul>\n        </div>\n      ) : null}\n      /* ... */\n    </main>\n  );\n}\n"})})}function z(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(V,{...e})}):V(e)}const X=[...H.RM];function G(e){return(0,o.jsx)(H.Ay,{organizationScope:"UserScope.Organizations",configOrganizationCode:(0,o.jsx)(Q,{}),getOrganizationAccessTokenCode:(0,o.jsx)(z,{})})}function Y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(G,{...e})}):G()}const J={slug:"/quick-start/next-app-router",sidebar_label:"Next.js App Router",sidebar_custom_props:{logoFilename:"next.svg",description:"Next.js App Router is a new paradigm for building applications using React's latest features."}},Z="Next.js SDK for App Router guide",_={id:"quick-start/framework/next-app-router/README",title:"Next.js SDK for App Router guide",description:"This guide will show you how to integrate Logto into your Next.js App Router application.",source:"@site/docs/quick-start/framework/next-app-router/README.mdx",sourceDirName:"quick-start/framework/next-app-router",slug:"/quick-start/next-app-router",permalink:"/quick-start/next-app-router",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/quick-start/framework/next-app-router/README.mdx",tags:[],version:"current",frontMatter:{slug:"/quick-start/next-app-router",sidebar_label:"Next.js App Router",sidebar_custom_props:{logoFilename:"next.svg",description:"Next.js App Router is a new paradigm for building applications using React's latest features."}},sidebar:"quickStartSidebar",previous:{title:"Next.js",permalink:"/quick-start/next"},next:{title:"Nuxt",permalink:"/quick-start/nuxt"}},$={},ee=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},...a.RM,{value:"Integration",id:"integration",level:2},{value:"Prepare configs",id:"prepare-configs",level:3},...I,{value:"Implement sign-in",id:"implement-sign-in",level:3},...x,{value:"Implement sign-out",id:"implement-sign-out",level:3},{value:"Handle authentication status",id:"handle-authentication-status",level:3},...i.RM,{value:"API resources",id:"api-resources",level:2},...s.RM,{value:"Configure Logto client",id:"configure-logto-client",level:3},...U,{value:"Fetch access token for the API resource",id:"fetch-access-token-for-the-api-resource",level:3},...D,{value:"Fetch organization token for user",id:"fetch-organization-token-for-user",level:3},...X,{value:"Further readings",id:"further-readings",level:2},...c.RM];function ne(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nextjs-sdk-for-app-router-guide",children:"Next.js SDK for App Router guide"}),"\n",(0,o.jsx)(n.p,{children:"This guide will show you how to integrate Logto into your Next.js App Router application."}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," account or a self-hosted Logto (Check out the ",(0,o.jsx)(n.a,{href:"../../../docs/tutorials/get-started/",children:"\u26a1 Get started"})," guide to create one if you don't have)."]}),"\n",(0,o.jsx)(n.li,{children:"A Logto traditional application created."}),"\n",(0,o.jsx)(n.li,{children:"A Next.js project with App Router."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.h3,{id:"prepare-configs",children:"Prepare configs"}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,o.jsx)(m,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(i.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"api-resources",children:"API resources"}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"configure-logto-client",children:"Configure Logto client"}),"\n",(0,o.jsx)(L,{}),"\n",(0,o.jsx)(n.h3,{id:"fetch-access-token-for-the-api-resource",children:"Fetch access token for the API resource"}),"\n",(0,o.jsx)(M,{}),"\n",(0,o.jsx)(n.h3,{id:"fetch-organization-token-for-user",children:"Fetch organization token for user"}),"\n",(0,o.jsx)(Y,{}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsx)(c.Ay,{})]})}function te(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(ne,{...e})}):ne(e)}},38268:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>c});var o=t(86070),r=t(76113),s=t(8964),i=t(77326);const c=[];function a(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"npm",label:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @logto/next\n"})})}),(0,o.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/next\n"})})}),(0,o.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/next\n"})})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8964:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var o=t(13526);const r={tabItem:"tabItem_ns0e"};var s=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t,children:n})}},77326:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(30758),r=t(13526),s=t(14021),i=t(25557),c=t(24320),a=t(84942),l=t(65535),u=t(37861);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=d(e),[i,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,p]=g({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),A=(()=>{const e=l??f;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{A&&a(A)}),[A]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),p(e),x(e)}),[p,x,s]),tabValues:s}}var x=t(4604);const A={tabList:"tabList_J4Jn",tabItem:"tabItem_o4sc"};var m=t(86070);function j(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),r=c[t].value;r!==o&&(l(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>a.push(e),onKeyDown:p,onClick:u,...s,className:(0,r.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",A.tabList),children:[(0,m.jsx)(j,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,m.jsx)(b,{...e,children:p(e.children)},String(n))}},62302:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},76113:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(30758);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);