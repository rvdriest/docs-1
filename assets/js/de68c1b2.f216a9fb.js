"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[76432],{99099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=i(86070),t=i(76113);const o={slug:"design-for-seamless-sie-2",authors:["guamian","rany"],tags:["design","sign-in","ux"]},a="The design considerations for a seamless sign-in experience (Second Chapter)",r={permalink:"/blog/design-for-seamless-sie-2",source:"@site/blog/2022-12-05-design-for-seamless-sie-2/index.md",title:"The design considerations for a seamless sign-in experience (Second Chapter)",description:"In the previous piece, we discussed the development of the Sign-in Experience, and what makes a positive end-user encounter, and we ended on some thought-provoking topics.",date:"2022-12-05T00:00:00.000Z",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"sign-in",permalink:"/blog/tags/sign-in"},{label:"ux",permalink:"/blog/tags/ux"}],readingTime:6.42,hasTruncateMarker:!0,authors:[{name:"Guamian",title:"Product & Design at Silverhand",url:"https://github.com/fleuraly",imageURL:"https://github.com/fleuraly.png",key:"guamian"},{name:"Ran",title:"Product & Design at Silverhand",url:"https://github.com/Rany0101",imageURL:"https://github.com/Rany0101.png",key:"rany"}],frontMatter:{slug:"design-for-seamless-sie-2",authors:["guamian","rany"],tags:["design","sign-in","ux"]},unlisted:!1,prevItem:{title:"Logto 2023 New Year Update",permalink:"/blog/releases/2023-jan"},nextItem:{title:"CIAM 101: Authentication, Identity, SSO",permalink:"/blog/ciam-101-intro-authn-sso"}},l={authorsImageUrls:[void 0,void 0]},d=[{value:"Make Admin Console thoughtful and educational",id:"make-admin-console-thoughtful-and-educational",level:2},{value:"Optimal balance between adaptability and solving real use cases",id:"optimal-balance-between-adaptability-and-solving-real-use-cases",level:3},{value:"Flexibility",id:"flexibility",level:4},{value:"Sign-up identifier",id:"sign-up-identifier",level:5},{value:"Authentication factors",id:"authentication-factors",level:5},{value:"Social connector",id:"social-connector",level:5},{value:"Personal information",id:"personal-information",level:5},{value:"Be true to real use cases",id:"be-true-to-real-use-cases",level:4},{value:"Beginning with developer mindsets, bring clarity to complexity",id:"beginning-with-developer-mindsets-bring-clarity-to-complexity",level:3},{value:"Thoughtful educational content",id:"thoughtful-educational-content",level:4},{value:"A synopsis to provide clarity",id:"a-synopsis-to-provide-clarity",level:4},{value:"Make ability to scale, consider Day 0, and plan for iteration",id:"make-ability-to-scale-consider-day-0-and-plan-for-iteration",level:3},{value:"From a business perspective, how can sign-up be evaluated?",id:"from-a-business-perspective-how-can-sign-up-be-evaluated",level:2},{value:"The future",id:"the-future",level:2}];function c(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the previous piece, we discussed the development of the Sign-in Experience, and what makes a positive end-user encounter, and we ended on some thought-provoking topics."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"How can I do this with as little effort as possible using the Logto Admin Console?"}),"\n",(0,s.jsx)(n.li,{children:"When compared to currently available market solutions, how does Logto\u2019s configuration experience stand out? Curious to understand why this is the best choice for my business."}),"\n",(0,s.jsx)(n.li,{children:"From a business perspective, how can sign-up be evaluated?"}),"\n",(0,s.jsx)(n.li,{children:"What does Logto have in store for future service and product development?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this article, we'll answer these questions and show you how the Logto Admin Console can help."}),"\n",(0,s.jsx)(n.h2,{id:"make-admin-console-thoughtful-and-educational",children:"Make Admin Console thoughtful and educational"}),"\n",(0,s.jsx)(n.p,{children:"The permutation and combination of identifier, Authentication Factor, Connector, and Personal information is a complex interaction design question. It\u2019s very ambitious and there are lots of directions we can go. We listed them out, evaluated them and made the decision with the aligned trade-off on our team."}),"\n",(0,s.jsx)(n.p,{children:"To enable the sign-in and sign-up, there are three high-level directions we explored."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table",src:i(7730).A+"",width:"1462",height:"874"})}),"\n",(0,s.jsx)(n.p,{children:"A sign-in experience is never complete without the Admin Console. We never lose sight of the fact that the Admin Console exists to support the experience we have suggested, and not the other way around. Many of the solutions out there that let users choose their own sign-in and sign-up processes end up making things more complicated for our developers and lowering the quality of the experience for end users because they don't cater for actual use cases."}),"\n",(0,s.jsx)(n.p,{children:"In the end, we picked direction 3."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There are far too many illogical outcomes when following Option 1."}),"\n",(0,s.jsx)(n.li,{children:"The second direction is not consistent with the principle of progressive disclosure. The amount of mental effort required is excessive, and there is no way to make it more scalable in the future."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"First, we'll look at our sample of the Admin Console and run through the two most common use cases. You may learn more about how we make it possible with a robust tool like this."}),"\n",(0,s.jsx)(n.p,{children:"The first scenario:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Sign up: Email with a password and verify email at sign up."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Sign in: Email with a password, Social account"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"demo",src:i(91606).A+"",width:"1800",height:"927"})}),"\n",(0,s.jsx)(n.p,{children:"The second scenario:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Sign up: Email or Phone number with a password and verify at sign up."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Sign in: Email or Phone number with a password, Social accounts."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"demo",src:i(39265).A+"",width:"1800",height:"927"})}),"\n",(0,s.jsx)(n.p,{children:"We have three guiding principles that we stick to as a group to ensure success."}),"\n",(0,s.jsx)(n.h3,{id:"optimal-balance-between-adaptability-and-solving-real-use-cases",children:"Optimal balance between adaptability and solving real use cases"}),"\n",(0,s.jsx)(n.p,{children:"In order to accommodate the vast majority of use cases, we strive to provide consumers with as much customization as possible. However, we must be strict about any identifier combination that makes no sense to real users as those can have a negative effect on business."}),"\n",(0,s.jsx)(n.h4,{id:"flexibility",children:"Flexibility"}),"\n",(0,s.jsx)(n.p,{children:'As previously stated, we divided the Sign-in Experience into four categories: "Identifier, Authentication Factor, Social Connector, and Personal Information.\u201d'}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The most significant change in Sign-in Experience V2 is the establishment of a flexible and scalable framework to support more scenarios in the long run."})}),"\n",(0,s.jsx)(n.p,{children:"This framework allows developers to combine and categorize components based on their choices. Here's how we prioritize features and put them on the roadmap."}),"\n",(0,s.jsx)(n.h5,{id:"sign-up-identifier",children:"Sign-up identifier"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sign-up identifier",src:i(47999).A+"",width:"1426",height:"500"})}),"\n",(0,s.jsx)(n.h5,{id:"authentication-factors",children:"Authentication factors"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Authentication factors",src:i(86951).A+"",width:"1504",height:"462"})}),"\n",(0,s.jsx)(n.h5,{id:"social-connector",children:"Social connector"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Social connector",src:i(4013).A+"",width:"1498",height:"542"})}),"\n",(0,s.jsx)(n.h5,{id:"personal-information",children:"Personal information"}),"\n",(0,s.jsx)(n.p,{children:"We currently do not have a profile page that users can modify and update on their own. This, on the other hand, is on our priority list and will be ready before the end of the year. Following this implementation, the entire sign-in experience can be integrated as a whole."}),"\n",(0,s.jsx)(n.h4,{id:"be-true-to-real-use-cases",children:"Be true to real use cases"}),"\n",(0,s.jsx)(n.p,{children:"However, based on the permutations and combinations, there are numerous possibilities, many of which make no sense at all. We must make trade-offs and implement features gradually so as not to overwhelm users in the first place. In v2, for example, we only defined four options as sign-up identifiers because these are the most common scenarios, covering 90%+ of the market."}),"\n",(0,s.jsx)(n.p,{children:"Another example is that for nonsensical use cases, we disable them and use tooltips to explain why. The rules discussed in the previous article are then applied."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Restrictions between Sign-in, Registration and Authentication Factor, for example:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"If password is chosen as an authentication factor, sign-in should support it as well, and all other identifiers must as well. We don't want users to do meaningless work or disregard their security intentions when registering. The fact that a password is required for sign-up with a username but not for email or phone password sign-in makes no sense and confuses the user."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"If users enabled multiple identifiers during sign-in, such as email or phone number, both of those identifiers must be available for sign-in. For example, if a person signs up using their email address but only signs in with their support phone number, they will be unable to use the product in the end."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"If the sole identifier used during registration is the username, a password is required. This is owing to the limitations and characteristics of using a username as an identifier."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Restrictions",src:i(57267).A+"",width:"4072",height:"1536"})}),"\n",(0,s.jsx)(n.h3,{id:"beginning-with-developer-mindsets-bring-clarity-to-complexity",children:"Beginning with developer mindsets, bring clarity to complexity"}),"\n",(0,s.jsx)(n.p,{children:"The setup is intended to assist users in creating successful sign-in and sign-up processes. When building up their Sign-in Experience, we illustrate the broad reasoning behind the scenes and assist people in learning and growing. I'll give you two instances."}),"\n",(0,s.jsx)(n.h4,{id:"thoughtful-educational-content",children:"Thoughtful educational content"}),"\n",(0,s.jsx)(n.p,{children:"In order to be clear. We utilized a brief and plain description to help customers understand what each setting means and to address any questions they may have."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Educational content",src:i(34989).A+"",width:"4076",height:"2480"})}),"\n",(0,s.jsx)(n.h4,{id:"a-synopsis-to-provide-clarity",children:"A synopsis to provide clarity"}),"\n",(0,s.jsx)(n.p,{children:"Another example - Developers reconfiguring and updating the Sign-in Experience settings can be a difficult and risky process because it will affect your end users' engagement. Before saving a modification, we show the user a change summary. Our engineers are familiar with the before vs. after mindset, and it has brought a lot of clarity to complexity."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Synopsis",src:i(50172).A+"",width:"3068",height:"1838"})}),"\n",(0,s.jsx)(n.h3,{id:"make-ability-to-scale-consider-day-0-and-plan-for-iteration",children:"Make ability to scale, consider Day 0, and plan for iteration"}),"\n",(0,s.jsx)(n.p,{children:"We don't want to piss off our users with another massive redesign in the future, thus we need to make sure that the product design is scalable. We also think about the steps we would take to support future versions, such as Multi-Factor Authentication (MFA), Magic Link, completing a user's profile (including name, gender, email address, and password), and supporting future versions."}),"\n",(0,s.jsxs)(n.p,{children:["Here is a view about the future version with how we support ",(0,s.jsx)(n.code,{children:"Unverified email"})," , ",(0,s.jsx)(n.code,{children:"MFA"}),", ",(0,s.jsx)(n.code,{children:"Magic Link"}),", and ",(0,s.jsx)(n.code,{children:"Profile fulfill"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Future version",src:i(16216).A+"",width:"4948",height:"2840"})}),"\n",(0,s.jsx)(n.h2,{id:"from-a-business-perspective-how-can-sign-up-be-evaluated",children:"From a business perspective, how can sign-up be evaluated?"}),"\n",(0,s.jsx)(n.p,{children:'We accelerated the sign-up and sign-in processes and increased user acquisition by adhering to the ideas of "minimum steps," "helping users succeed," and "limited consumer options" when designing the best practice of sign-in flow. Additionally, the [Dashboard] and [Audit Log] are excellent resources for learning about the sign-up and login patterns of users and the general health of the app.'}),"\n",(0,s.jsx)(n.h2,{id:"the-future",children:"The future"}),"\n",(0,s.jsx)(n.p,{children:"The Logto Sign-in Experience V2 and its development process are now clear to you. Now is the moment to experiment and speed up the development of your product. We are also putting up V3 suggestions. To give you a taste of the available options, here is a preview,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Share our polished design components in Figma source file"}),"\n",(0,s.jsx)(n.li,{children:"Support multi-factor authentication"}),"\n",(0,s.jsx)(n.li,{children:"Support magic links"}),"\n",(0,s.jsx)(n.li,{children:"Visualize the end-to-end flow when building the Sign-in Experience and better for business needs"}),"\n",(0,s.jsx)(n.li,{children:"User profile customization"}),"\n",(0,s.jsx)(n.li,{children:"Much more in accessibility improvement, and look and feel customization"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},86951:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/auth-factors-fe234ebefa49523dde381582ed4589e2.jpg"},91606:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/demo-1-b2e807777ef0a2ba5ed014efea196fdb.gif"},39265:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/demo-2-84d97ed0f531b1dafdc3f90eb43e93d3.gif"},34989:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/educational-content-bcd693420cf6e9b5cd5ef803774037e2.png"},16216:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/future-version-1caa6a8fe92ec352057cc1da9f304fdd.png"},57267:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/restrictions-af676108a447785d48ea2d76c080528e.png"},47999:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/sign-up-identifier-20753d9bb574ef5bcd768675a80c665a.jpg"},4013:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/social-connector-87b472e40535549f8670de8099b0232e.jpg"},50172:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/synopsis-f836c669c6869b46156db16fd00e74f7.png"},7730:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/table-1-d4a78ea14043f3c2766967892e71db5c.jpg"},76113:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(30758);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);