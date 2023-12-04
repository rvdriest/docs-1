"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5468],{76220:function(e,i,n){n.r(i),n.d(i,{assets:function(){return c},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var t=n(11527),s=n(17279);const o={sidebar_position:7.1},r="\u2601\ufe0f Enterprise SSO (SAML & OIDC)",a={id:"docs/recipes/single-sign-on/README",title:"\u2601\ufe0f Enterprise SSO (SAML & OIDC)",description:"Single Sign-On (SSO) streamlines authentication for B2B services, especially for today's SaaS platforms, allowing enterprise clients to manage member access via their chosen identity providers. Logto enhances your service with SP-initiated SSO, facilitating connections with a wide range of identity providers using SAML and OIDC protocols, including Okta, Azure AD, Google Workspace, and more.",source:"@site/docs/docs/recipes/single-sign-on/README.md",sourceDirName:"docs/recipes/single-sign-on",slug:"/docs/recipes/single-sign-on/",permalink:"/next/docs/recipes/single-sign-on/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/single-sign-on/README.md",tags:[],version:"current",sidebarPosition:7.1,frontMatter:{sidebar_position:7.1},sidebar:"docsSidebar",previous:{title:"Integrate Organizations with your app",permalink:"/next/docs/recipes/organizations/integration"},next:{title:"Configure SSO",permalink:"/next/docs/recipes/single-sign-on/configure-sso/"}},c={},l=[{value:"What is SSO?",id:"what-is-sso",level:2},{value:"Key components",id:"key-components",level:3},{value:"SSO workflows",id:"sso-workflows",level:3},{value:"Standard protocols",id:"standard-protocols",level:3},{value:"Logto support",id:"logto-support",level:2},{value:"Frequently asked",id:"frequently-asked",level:2}];function d(e){const i={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"\ufe0f-enterprise-sso-saml--oidc",children:"\u2601\ufe0f Enterprise SSO (SAML & OIDC)"}),"\n",(0,t.jsx)(i.p,{children:"Single Sign-On (SSO) streamlines authentication for B2B services, especially for today's SaaS platforms, allowing enterprise clients to manage member access via their chosen identity providers. Logto enhances your service with SP-initiated SSO, facilitating connections with a wide range of identity providers using SAML and OIDC protocols, including Okta, Azure AD, Google Workspace, and more."}),"\n",(0,t.jsx)(i.h2,{id:"what-is-sso",children:"What is SSO?"}),"\n",(0,t.jsx)(i.p,{children:"SSO allows users to access multiple services or applications with a single set of credentials. It simplifies access management and enhances security. For instance, an employee can use their company credentials to access various work-related applications."}),"\n",(0,t.jsx)(i.h3,{id:"key-components",children:"Key components"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Identity Provider (IdP)"}),": A service that verifies user identities and manages their login credentials. After confirming a user's identity, the IdP generates authentication tokens or assertions and allows the user to access various applications or services without needing to log in again. Essentially, it's the go-to system for managing employee identities and permissions in your enterprise.\nExamples: Okta, Azure AD, Google Workspace, LastPass, OneLogin, Ping Identity, Cyberark, etc."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Service Provider (SP)"}),": A system or application that requires user authentication and relies on the Identity Provider (IdP) for authentication. The SP receives authentication tokens or assertions from the IdP, granting access to its resources without requiring separate login credentials.\nExamples: Slack, Shopify, Dropbox, Figma, Airbnb, etc\u2026and your service."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Enterprise User Account"}),": Typically identified by their use of a company email domain for login. This enterprise email account finally belongs to the company."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"sso-workflows",children:"SSO workflows"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"IdP-Initiated SSO"}),": In IdP-initiated SSO, the Identity Provider (IdP) primarily controls the single sign-on process. This process begins when a user logs into the IdP's platform, such as a company portal or a centralized identity dashboard. Once authenticated, the IdP generates an authentication token or assertion, which is then used to seamlessly grant the user access to multiple connected services or applications (SPs) without requiring additional logins."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"IdP-initated SSO.webp",src:n(69948).Z+"",width:"1958",height:"470"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"SP-Initiated SSO"}),": In SP-initiated SSO, the Service Provider (SP) takes the lead in initiating and managing the single sign-on process, often preferred in B2B scenarios. This scenario occurs when a user attempts to access a specific service or application (the SP) and is redirected to their IdP for authentication. Upon successful login at the IdP, an authentication token is sent back to the SP, granting the user access. Logto supports SP-initiated SSO for your B2B services."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SP-initated SSO.webp",src:n(62265).Z+"",width:"1958",height:"470"})}),"\n",(0,t.jsx)(i.h3,{id:"standard-protocols",children:"Standard protocols"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"SAML"}),": SAML, an XML-based protocol, is better suited for web-based applications, allowing secure communication between identity providers and service providers. This protocol is particularly adept at handling complex enterprise-level security requirements"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"OIDC"}),": OIDC is a simple identity layer on top of the OAuth 2.0 protocol. It employs JSON/REST for communication, making it more lightweight and better suited for modern application architectures, including mobile and single-page applications (SPAs). The protocol"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"logto-support",children:"Logto support"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Support both SAML and OIDC to integrate with most enterprise identity providers."}),"\n",(0,t.jsx)(i.li,{children:"Ready-to-use connections with popular IdPs (e.g., Azure AD, Google Workspace, Okta)."}),"\n",(0,t.jsx)(i.li,{children:"Simplified setup with a step-by-step guide."}),"\n",(0,t.jsx)(i.li,{children:"Customizable email domain and branding support."}),"\n",(0,t.jsx)(i.li,{children:"An out-of-box SSO experience, compatibility with your universal sign-in experience."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"frequently-asked",children:"Frequently asked"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"What are the limitations of Logto SSO features?"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Supports SP-initiated SSO, not IdP-initiated SSO or Single Sign Out currently."}),"\n",(0,t.jsx)(i.li,{children:"Organization mapping is upcoming."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Impact on existing users with SSO changes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Adding SSO: The SSO identities will be linked to existing accounts if the email matches."}),"\n",(0,t.jsx)(i.li,{children:"Removing SSO: Removes SSO identities linked to the account, but retains user accounts, and prompts users to set up alternative verification methods."}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},69948:function(e,i,n){i.Z=n.p+"assets/images/idp-initated-sso-59f51987d5448609af9577e074c9bb99.webp"},62265:function(e,i,n){i.Z=n.p+"assets/images/sp-initated-sso-a4662a6a9c62fb8f59abbc7a0ce6b893.webp"},17279:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return r}});var t=n(50959);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);