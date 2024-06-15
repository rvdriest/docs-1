"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85421],{88199:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var r=t(11527),i=t(17279);const s=[];function o(e){const n={a:"a",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/recipes/customize-sie/",children:"Customize sign-in experience"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"Protect your API"})}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},97781:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var r=t(11527),i=t(17279);const s=[];function o(e){const n={a:"a",admonition:"admonition",code:"code",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Here's the list of supported scopes and the corresponding claims:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"openid"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sub"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The unique identifier of the user"}),(0,r.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"profile"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The full name of the user"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The username of the user"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User."}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"created_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"Time the End-User was created. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z)."}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"updated_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"Time the End-User's information was last updated. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z)."}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Other ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims",children:"standard claims"})," include ",(0,r.jsx)(n.code,{children:"family_name"}),", ",(0,r.jsx)(n.code,{children:"given_name"}),", ",(0,r.jsx)(n.code,{children:"middle_name"}),", ",(0,r.jsx)(n.code,{children:"nickname"}),", ",(0,r.jsx)(n.code,{children:"preferred_username"}),", ",(0,r.jsx)(n.code,{children:"profile"}),", ",(0,r.jsx)(n.code,{children:"website"}),", ",(0,r.jsx)(n.code,{children:"gender"}),", ",(0,r.jsx)(n.code,{children:"birthdate"}),", ",(0,r.jsx)(n.code,{children:"zoneinfo"}),", and ",(0,r.jsx)(n.code,{children:"locale"})," will be also included in the ",(0,r.jsx)(n.code,{children:"profile"})," scope without the need for requesting the userinfo endpoint. A difference compared to the claims above is that these claims will only be returned when their values are not empty, while the claims above will return ",(0,r.jsx)(n.code,{children:"null"})," if the values are empty."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Unlike the standard claims, the ",(0,r.jsx)(n.code,{children:"created_at"})," and ",(0,r.jsx)(n.code,{children:"updated_at"})," claims are using milliseconds instead of seconds."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"email"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"email"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The email address of the user"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"email_verified"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Whether the email address has been verified"}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"phone"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"phone_number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The phone number of the user"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"phone_number_verified"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Whether the phone number has been verified"}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"address"})})}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to the ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim",children:"OpenID Connect Core 1.0"})," for the details of the address claim."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"custom_data"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custom_data"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:"The custom data of the user"}),(0,r.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"identities"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"identities"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:"The linked identities of the user"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sso_identities"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"array"})}),(0,r.jsx)(n.td,{children:"The linked SSO identities of the user"}),(0,r.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"urn:logto:scope:organizations"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"organizations"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:"The organization IDs the user belongs to"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"organization_data"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object[]"})}),(0,r.jsx)(n.td,{children:"The organization data the user belongs to"}),(0,r.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Claim name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"organization_roles"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsxs)(n.td,{children:["The organization roles the user belongs to with the format of ",(0,r.jsx)(n.code,{children:"<organization_id>:<role_name>"})]}),(0,r.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:['Considering performance and the data size, if "Needs userinfo?" is "Yes", it means the claim will not show up in the ID token, but will be returned in the ',(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"})," response."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},84817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>x,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var r=t(11527),i=t(17279),s=t(88199),o=t(97781);const c=[...o.d$];function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Logto uses OIDC ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Claims",children:"scopes and claims conventions"})," to define the scopes and claims for retrieving user information from the ID token and OIDC ",(0,r.jsx)("a",{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"}),'. Both of the "scope" and the "claim" are terms from the OAuth 2.0 and OpenID Connect (OIDC) specifications.']}),"\n",(0,r.jsxs)(n.p,{children:["In short, when you request a scope, you will get the corresponding claims in the user information. For example, if you request the ",(0,r.jsx)(n.code,{children:"email"})," scope, you will get the ",(0,r.jsx)(n.code,{children:"email"})," and ",(0,r.jsx)(n.code,{children:"email_verified"})," data of the user."]}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsxs)(n.p,{children:["Add extra scopes and claims at the ",(0,r.jsx)(n.code,{children:"application.properties"})," file to request for more user information. For example, to request the ",(0,r.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scope, add the following line to the ",(0,r.jsx)(n.code,{children:"application.properties"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"  spring.security.oauth2.client.registration.logto.scope=openid,profile,offline_access,urn:logto:scope:organizations\n"})}),"\n",(0,r.jsx)(n.p,{children:"User organization claims will be included in the authorization token."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const l={slug:"/quick-start/java-spring-boot",sidebar_label:"Java Spring Boot",sidebar_custom_props:{description:"Spring Boot is a web framework for Java that enables developers to build secure, fast, and scalable server applications with the Java programming language.",logoFilename:"spring-boot.svg"}},h="Java Spring Boot integration guide",u={id:"quick-starts/framework/java-spring-boot/README",title:"Java Spring Boot integration guide",description:"This guide will show you how to integrate Logto into your Java Spring Boot application.",source:"@site/docs/quick-starts/framework/java-spring-boot/README.mdx",sourceDirName:"quick-starts/framework/java-spring-boot",slug:"/quick-start/java-spring-boot",permalink:"/quick-start/java-spring-boot",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/quick-starts/framework/java-spring-boot/README.mdx",tags:[],version:"current",frontMatter:{slug:"/quick-start/java-spring-boot",sidebar_label:"Java Spring Boot",sidebar_custom_props:{description:"Spring Boot is a web framework for Java that enables developers to build secure, fast, and scalable server applications with the Java programming language.",logoFilename:"spring-boot.svg"}},sidebar:"quickStartSidebar",previous:{title:"Go",permalink:"/quick-starts/go"},next:{title:"Next.js",permalink:"/quick-starts/next"}},p={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Adding dependencies",id:"adding-dependencies",level:2},{value:"OAuth2 Client Configuration",id:"oauth2-client-configuration",level:2},{value:"Config the redirect_uri in Logto",id:"config-the-redirect_uri-in-logto",level:2},{value:"Implement the WebSecurityConfig",id:"implement-the-websecurityconfig",level:2},{value:"Create a new class <code>WebSecurityConfig</code> in your project",id:"create-a-new-class-websecurityconfig-in-your-project",level:3},{value:"Create a <code>idTokenDecoderFactory</code> bean",id:"create-a-idtokendecoderfactory-bean",level:3},{value:"Create a LoginSuccessHandler class to handle the login success event",id:"create-a-loginsuccesshandler-class-to-handle-the-login-success-event",level:3},{value:"Create a LogoutSuccessHandler class to handle the logout success event",id:"create-a-logoutsuccesshandler-class-to-handle-the-logout-success-event",level:3},{value:"Update the <code>WebSecurityConfig</code> class with a <code>securityFilterChain</code>",id:"update-the-websecurityconfig-class-with-a-securityfilterchain",level:3},{value:"Create a home page",id:"create-a-home-page",level:2},{value:"Create a user page",id:"create-a-user-page",level:2},{value:"Run and test the application",id:"run-and-test-the-application",level:2},{value:"Scopes",id:"scopes",level:2},...c,{value:"Further readings",id:"further-readings",level:2},...s.d$];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"java-spring-boot-integration-guide",children:"Java Spring Boot integration guide"}),"\n",(0,r.jsx)(n.p,{children:"This guide will show you how to integrate Logto into your Java Spring Boot application."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You may find the sample code for this guide in our ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/spring-boot-sample",children:"spring-boot-sample"})," github repository."]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," account or a self-hosted Logto (Check out the ",(0,r.jsx)(n.a,{href:"../../../docs/tutorials/get-started/",children:"\u26a1 Get started"})," guide to create one if you don't have)."]}),"\n",(0,r.jsxs)(n.li,{children:["Our sample code was created using the Spring Boot ",(0,r.jsx)(n.a,{href:"https://spring.io/guides/gs/securing-web",children:"securing web starter"}),". Following the instructions to bootstrap a new web application if you don't have one."]}),"\n",(0,r.jsxs)(n.li,{children:["In this guide, we will use the ",(0,r.jsx)(n.a,{href:"https://spring.io/projects/spring-security",children:"Spring Security"})," ans ",(0,r.jsx)(n.a,{href:"https://spring.io/guides/tutorials/spring-boot-oauth2",children:"Spring Security OAuth2"})," libraries to handle OIDC authentication flow with Logto. Please make sure to go through the official documentation to understand the basics."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"adding-dependencies",children:"Adding dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.a,{href:"https://spring.io/guides/gs/gradle",children:"gradle"})," users, add the following dependencies to your ",(0,r.jsx)(n.code,{children:"build.gradle"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n  implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'\n\timplementation 'org.springframework.boot:spring-boot-starter-web'\n  implementation 'org.springframework.boot:spring-boot-starter-security'\n\timplementation 'org.springframework.boot:spring-boot-starter-oauth2-client'\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.a,{href:"https://spring.io/guides/gs/maven",children:"maven"})," users, add the following dependencies to your ",(0,r.jsx)(n.code,{children:"pom.xml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-thymeleaf</artifactId>\n</dependency>\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-oauth2-client</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"oauth2-client-configuration",children:"OAuth2 Client Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Register a new ",(0,r.jsx)(n.code,{children:"Java Spring Boot"})," application in Logto console and get the client credential and IdP configurations for your web application."]}),"\n",(0,r.jsxs)(n.p,{children:["Add the following configuration to your ",(0,r.jsx)(n.code,{children:"application.properties"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"  spring.security.oauth2.client.registration.logto.client-name=logto\n  spring.security.oauth2.client.registration.logto.client-id={{YOUR_CLIENT_ID}}\n  spring.security.oauth2.client.registration.logto.client-secret={{YOUR_CLIENT_ID}}\n  spring.security.oauth2.client.registration.logto.redirect-uri={baseUrl}/login/oauth2/code/{registrationId}\n  spring.security.oauth2.client.registration.logto.authorization-grant-type=authorization_code\n  spring.security.oauth2.client.registration.logto.scope=openid,profile,offline_access\n  spring.security.oauth2.client.registration.logto.provider=logto\n\n  spring.security.oauth2.client.provider.logto.issuer-uri={{LOGTO_ENDPOINT}}/oidc\n  spring.security.oauth2.client.provider.logto.authorization-uri={{LOGTO_ENDPOINT}}/oidc/auth\n  spring.security.oauth2.client.provider.logto.jwk-set-uri={{LOGTO_ENDPOINT}}/oidc/jwks\n"})}),"\n",(0,r.jsx)(n.h2,{id:"config-the-redirect_uri-in-logto",children:"Config the redirect_uri in Logto"}),"\n",(0,r.jsxs)(n.p,{children:["In order to redirect users back to your application after they sign in, you need to set the redirect URI using the ",(0,r.jsx)(n.code,{children:"client.registration.logto.redirect-uri"})," property in the previous step."]}),"\n",(0,r.jsxs)(n.p,{children:["e.g. In our sample code ",(0,r.jsx)(n.code,{children:"http://localhost:8080/login/oauth2/code/logto"})," is the redirect URI."]}),"\n",(0,r.jsx)(n.h2,{id:"implement-the-websecurityconfig",children:"Implement the WebSecurityConfig"}),"\n",(0,r.jsxs)(n.h3,{id:"create-a-new-class-websecurityconfig-in-your-project",children:["Create a new class ",(0,r.jsx)(n.code,{children:"WebSecurityConfig"})," in your project"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package com.example.securingweb;\n\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\n\n@Configuration\n@EnableWebSecurity\n\npublic class WebSecurityConfig {\n // ...\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"create-a-idtokendecoderfactory-bean",children:["Create a ",(0,r.jsx)(n.code,{children:"idTokenDecoderFactory"})," bean"]}),"\n",(0,r.jsxs)(n.p,{children:["This is required because Logto uses ES384 as the default algorithm, we need to overwrite the default ",(0,r.jsx)(n.code,{children:"OidcIdTokenDecoderFactory"})," to use the same algorithm."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"import org.springframework.context.annotation.Bean;\nimport org.springframework.security.oauth2.client.oidc.authentication.OidcIdTokenDecoderFactory;\nimport org.springframework.security.oauth2.client.registration.ClientRegistration;\nimport org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;\nimport org.springframework.security.oauth2.jwt.JwtDecoderFactory;\n\npublic class WebSecurityConfig {\n  // ...\n\n  @Bean\n  public JwtDecoderFactory<ClientRegistration> idTokenDecoderFactory() {\n    OidcIdTokenDecoderFactory idTokenDecoderFactory = new OidcIdTokenDecoderFactory();\n    idTokenDecoderFactory.setJwsAlgorithmResolver(clientRegistration -> SignatureAlgorithm.ES384);\n    return idTokenDecoderFactory;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-loginsuccesshandler-class-to-handle-the-login-success-event",children:"Create a LoginSuccessHandler class to handle the login success event"}),"\n",(0,r.jsxs)(n.p,{children:["We will redirect the user to the ",(0,r.jsx)(n.code,{children:"/user"})," page after a successful login."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.example.securingweb;\n\nimport java.io.IOException;\n\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.web.authentication.AuthenticationSuccessHandler;\n\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\n\npublic class CustomSuccessHandler implements AuthenticationSuccessHandler {\n  @Override\n  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,\n      Authentication authentication) throws IOException, ServletException {\n    response.sendRedirect("/user");\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-logoutsuccesshandler-class-to-handle-the-logout-success-event",children:"Create a LogoutSuccessHandler class to handle the logout success event"}),"\n",(0,r.jsx)(n.p,{children:"Clear the session and redirect the user to the home page."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.example.securingweb;\n\nimport java.io.IOException;\n\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.web.authentication.logout.LogoutSuccessHandler;\n\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport jakarta.servlet.http.HttpSession;\n\npublic class CustomLogoutHandler implements LogoutSuccessHandler {\n  @Override\n  public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)\n      throws IOException, ServletException {\n    HttpSession session = request.getSession();\n\n    if (session != null) {\n      session.invalidate();\n    }\n\n    response.sendRedirect("/home");\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"update-the-websecurityconfig-class-with-a-securityfilterchain",children:["Update the ",(0,r.jsx)(n.code,{children:"WebSecurityConfig"})," class with a ",(0,r.jsx)(n.code,{children:"securityFilterChain"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/DefaultSecurityFilterChain.html",children:"securityFilterChain"})," is a chain of filters that are responsible for processing the incoming requests and responses."]}),"\n",(0,r.jsxs)(n.p,{children:["We will configure the ",(0,r.jsx)(n.code,{children:"securityFilterChain"})," to allow access to the home page and require authentication for all other requests. Use the ",(0,r.jsx)(n.code,{children:"CustomSuccessHandler"})," and ",(0,r.jsx)(n.code,{children:"CustomLogoutHandler"})," to handle the login and logout events."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.web.DefaultSecurityFilterChain;\n\npublic class WebSecurityConfig {\n  // ...\n\n  @Bean\n  public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n    http\n      .authorizeRequests(authorizeRequests ->\n        authorizeRequests\n          .antMatchers("/", "/home").permitAll() // Allow access to the home page\n          .anyRequest().authenticated() // All other requests require authentication\n      )\n      .oauth2Login(oauth2Login ->\n        oauth2Login\n          .successHandler(new CustomSuccessHandler())\n      )\n      .logout(logout ->\n        logout\n          .logoutSuccessHandler(new CustomLogoutHandler())\n      );\n    return http.build();\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-home-page",children:"Create a home page"}),"\n",(0,r.jsx)(n.p,{children:"(You may skip this step if you already have a home page in your project)"}),"\n",(0,r.jsx)(n.p,{children:"HomeController.java:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.example.securingweb;\n\nimport java.security.Principal;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\n\n@Controller\npublic class HomeController {\n  @GetMapping({ "/", "/home" })\n  public String home(Principal principal) {\n    return principal != null ? "redirect:/user" : "home";\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This controller will redirect the user to the user page if the user is authenticated, otherwise, it will show the home page. Add a sign-in link to the home page."}),"\n",(0,r.jsx)(n.p,{children:"home.html:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  <h1>Welcome!</h1>\n\n  <p><a th:href="@{/oauth2/authorization/logto}">Login with Logto</a></p>\n</body>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-user-page",children:"Create a user page"}),"\n",(0,r.jsx)(n.p,{children:"Create a new controller to handle the user page:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.example.securingweb;\n\nimport java.security.Principal;\nimport java.util.Map;\n\nimport org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;\nimport org.springframework.security.oauth2.core.user.OAuth2User;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n@Controller\n@RequestMapping("/user")\npublic class UserController {\n\n  @GetMapping\n  public String user(Model model, Principal principal) {\n    if (principal instanceof OAuth2AuthenticationToken) {\n      OAuth2AuthenticationToken token = (OAuth2AuthenticationToken) principal;\n      OAuth2User oauth2User = token.getPrincipal();\n      Map<String, Object> attributes = oauth2User.getAttributes();\n\n      model.addAttribute("username", attributes.get("username"));\n      model.addAttribute("email", attributes.get("email"));\n      model.addAttribute("sub", attributes.get("sub"));\n    }\n\n    return "user";\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Once the user is authenticated, we will retrieve the ",(0,r.jsx)(n.code,{children:"OAuth2User"})," data from the authenticated principal object. Please refer ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/oauth2/client/authentication/OAuth2AuthenticationToken.html",children:"OAuth2AuthenticationToken"})," and ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/oauth2/core/user/OAuth2User.html",children:"OAuth2User"})," for more details."]}),"\n",(0,r.jsxs)(n.p,{children:["Read the user data and pass it to the ",(0,r.jsx)(n.code,{children:"user.html"})," template."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  <h1>User Details</h1>\n  <div>\n    <p>\n    <div><strong>name:</strong> <span th:text="${username}"></span></div>\n    <div><strong>email:</strong> <span th:text="${email}"></span></div>\n    <div><strong>id:</strong> <span th:text="${sub}"></span></div>\n    </p>\n  </div>\n\n  <form th:action="@{/logout}" method="post">\n    <input type="submit" value="Logout" />\n  </form>\n</body>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"run-and-test-the-application",children:"Run and test the application"}),"\n",(0,r.jsxs)(n.p,{children:["Run the application and navigate to ",(0,r.jsx)(n.code,{children:"http://localhost:8080"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You will see the home page with a sign-in link."}),"\n",(0,r.jsx)(n.li,{children:"Click on the link to sign in with Logto."}),"\n",(0,r.jsx)(n.li,{children:"After successful authentication, you will be redirected to the user page with your user details."}),"\n",(0,r.jsx)(n.li,{children:"Click on the logout button to sign out. You will be redirected back to the home page."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scopes",children:"Scopes"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,r.jsx)(s.ZP,{})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(50959);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);