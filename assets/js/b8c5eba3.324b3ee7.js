"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[26203],{34778:function(e,n,o){o.r(n),o.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return h}});var t=o(11527),r=o(17279),i=o(75268),s=o(67234);const a={sidebar_position:4},c="Integrate Organizations with your app",l={id:"docs/recipes/organizations/integration",title:"Integrate Organizations with your app",description:"This document assumes you have already integrated Logto with your app.",source:"@site/docs/docs/recipes/organizations/integration.mdx",sourceDirName:"docs/recipes/organizations",slug:"/docs/recipes/organizations/integration",permalink:"/next/docs/recipes/organizations/integration",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/organizations/integration.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Impact on end-user sign-in experience",permalink:"/next/docs/recipes/organizations/impact-on-end-users"},next:{title:"\u2601\ufe0f Enterprise SSO (SAML & OIDC)",permalink:"/next/docs/recipes/single-sign-on/"}},d={},h=[{value:"Get organization IDs of the current user",id:"get-organization-ids-of-the-current-user",level:2},{value:"Get organization roles",id:"get-organization-roles",level:3},{value:"Fetch access token for an organization",id:"fetch-access-token-for-an-organization",level:2},{value:"Step 1: Add parameters to the authentication request",id:"step-1-add-parameters-to-the-authentication-request",level:3},{value:"Step 2: Fetch the organization token",id:"step-2-fetch-the-organization-token",level:3},{value:"Example",id:"example",level:3},{value:"Verify organization tokens",id:"verify-organization-tokens",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"integrate-organizations-with-your-app",children:"Integrate Organizations with your app"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This document assumes you have already ",(0,t.jsx)(n.a,{href:"/next/docs/recipes/integrate-logto/",children:"integrated Logto with your app"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"In your app, you may want to show a list of organizations that the user is a member of, and perform actions in the context of an organization. Let's see how to do that."}),"\n",(0,t.jsx)(n.h2,{id:"get-organization-ids-of-the-current-user",children:"Get organization IDs of the current user"}),"\n",(0,t.jsxs)(n.p,{children:["Logto extends the standard ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect"})," protocol to allow your app to get the organization info from the user. There are two ways to do that:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can add the ",(0,t.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scope to ",(0,t.jsx)(n.code,{children:"scopes"})," parameter of the configuration object. Usually the SDK will have an enum for this scope, e.g. ",(0,t.jsx)(n.code,{children:"UserScope.Organizations"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/js",children:"Logto JS SDKs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For other cases, you need to add the ",(0,t.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scope to the ",(0,t.jsx)(n.code,{children:"scope"})," parameter of the SDK config (or auth request)."]}),"\n"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"sdk",children:[(0,t.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { LogtoClient, UserScope } from '@logto/browser'; // or @logto/node, @logto/client\n\nconst logto = new LogtoClient({\n  // ...\n  scopes: [UserScope.Organizations],\n});\n"})})}),(0,t.jsx)(i.Z,{value:"react",label:"React",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { LogtoProvider, UserScope } from '@logto/react';\n\nconst App = () => (\n  <LogtoProvider\n    config={{\n      // ...\n      scopes: [UserScope.Organizations],\n    }}\n  >\n    {/* ... */}\n  </LogtoProvider>\n);\n"})})}),(0,t.jsx)(i.Z,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from logto import UserInfoScope\n\nclient = LogtoClient(\n    LogtoConfig(\n        # ...\n        scopes=[UserInfoScope.organizations],\n    )\n)\n"})})}),(0,t.jsx)(i.Z,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Logto\\Sdk\\Constants\\UserScope;\n\n$client = new LogtoClient(\n  new LogtoConfig(\n    // ...\n    scopes: [UserScope::organizations],\n  )\n);\n"})})}),(0,t.jsx)(i.Z,{value:"swift",label:"Swift",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n    // ...\n    scopes: [\n        UserScope.organizations.rawValue,\n    ],\n    // ...\n)\nlet client = LogtoClient(useConfig: config)\n"})})}),(0,t.jsx)(i.Z,{value:"others",label:"Others",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const config = {\n  // ...\n  scope: 'openid offline_access urn:logto:scope:organizations',\n};\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Once the user finishes the authentication flow, you can get the organization info from the ",(0,t.jsx)(n.code,{children:"idToken"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst idToken = await logto.getIdTokenClaims();\n\nconsole.log(idToken.organizations); // A string array of organization IDs\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"organizations"})," field (claim) will also be included in response from the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo endpoint"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"get-organization-roles",children:"Get organization roles"}),"\n",(0,t.jsx)(n.p,{children:"To get all organization roles of the current user:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can add the ",(0,t.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})," scope to ",(0,t.jsx)(n.code,{children:"scopes"})," parameter of the configuration object. Usually the SDK will have an enum for this scope, e.g. ",(0,t.jsx)(n.code,{children:"UserScope.OrganizationRoles"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/js",children:"Logto JS SDKs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For other cases, you need to add the ",(0,t.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})," scope to the ",(0,t.jsx)(n.code,{children:"scope"})," parameter of the SDK config (or auth request)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Then you can get the organization roles from the ",(0,t.jsx)(n.code,{children:"idToken"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst idToken = await logto.getIdTokenClaims();\n\nconsole.log(idToken.organization_roles); // A string array of organization roles\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each string in the array is in the format of ",(0,t.jsx)(n.code,{children:"organization_id:role_id"}),", e.g. ",(0,t.jsx)(n.code,{children:"org_123:admin"})," means the user has the ",(0,t.jsx)(n.code,{children:"admin"})," role in the organization with ID ",(0,t.jsx)(n.code,{children:"org_123"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"organization_roles"})," field (claim) will also be included in response from the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo endpoint"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fetch-access-token-for-an-organization",children:"Fetch access token for an organization"}),"\n",(0,t.jsx)(n.p,{children:"To perform actions in the context of an organization, the user needs to be granted an access token for that organization (organization token). The organization token is a JWT token that contains the organization ID and the user's permissions (scopes) in the organization."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-add-parameters-to-the-authentication-request",children:"Step 1: Add parameters to the authentication request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can add the ",(0,t.jsx)(n.code,{children:"urn:logto:scope:organization_token"})," scope to ",(0,t.jsx)(n.code,{children:"scopes"})," parameter of the configuration object, the same way as ",(0,t.jsx)(n.a,{href:"#get-organization-ids-of-the-current-user",children:"Get organization IDs of the current user"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Logto SDK with Organizations support will automatically handle the rest of the configuration."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["For other cases, you need to add the ",(0,t.jsx)(n.code,{children:"offline_access"})," and ",(0,t.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scopes to the ",(0,t.jsx)(n.code,{children:"scope"})," parameter and the ",(0,t.jsx)(n.code,{children:"urn:logto:resource:organizations"})," resource to the ",(0,t.jsx)(n.code,{children:"resource"})," parameter of the SDK config (or auth request).","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Note: ",(0,t.jsx)(n.code,{children:"offline_access"})," is required to get the ",(0,t.jsx)(n.code,{children:"refresh_token"})," that can be used to fetch organization tokens."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Only for other cases. For Logto SDKs, see above.\nconst config = {\n  // ...\n  scope: 'openid offline_access urn:logto:scope:organizations',\n  resource: 'urn:logto:resource:organizations',\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"urn:logto:resource:organizations"})," resource is a special resource that represents the organization template."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-fetch-the-organization-token",children:"Step 2: Fetch the organization token"}),"\n",(0,t.jsxs)(n.p,{children:["Logto extends the standard ",(0,t.jsx)(n.code,{children:"refresh_token"})," grant type to allow your app to fetch organization tokens."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can call the ",(0,t.jsx)(n.code,{children:"getOrganizationToken()"})," method (or ",(0,t.jsx)(n.code,{children:"getOrganizationTokenClaims()"})," method) of the SDK."]}),"\n",(0,t.jsxs)(n.li,{children:["For other cases, you need to call the token endpoint with the following parameters:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"grant_type"}),": ",(0,t.jsx)(n.code,{children:"refresh_token"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"client_id"}),": The app ID the user used to authenticate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refresh_token"}),": The ",(0,t.jsx)(n.code,{children:"refresh_token"})," you got from the authentication flow."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"organization_id"}),": The ID of the organization you want to get the token for."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"scope"})," (optional): The scopes you want to grant to the user in the organization. If not specified, the authorization server will try to grant the same scopes as the authentication flow."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"sdk",children:[(0,t.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const token = await logto.getOrganizationToken('<organization-id>');\n"})})}),(0,t.jsx)(i.Z,{value:"react",label:"React",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const App = () => {\n  const { getOrganizationToken } = useLogto();\n\n  const getToken = async () => {\n    const token = await getOrganizationToken('<organization-id>');\n  };\n\n  return <button onClick={getToken}>Get organization token</button>;\n};\n"})})}),(0,t.jsx)(i.Z,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'token = await client.getOrganizationToken("<organization-id>")\n# or\nclaims = await client.getOrganizationTokenClaims("<organization-id>")\n'})})}),(0,t.jsx)(i.Z,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$token = $client->getOrganizationToken('<organization-id>');\n// or\n$claims = $client->getOrganizationTokenClaims('<organization-id>');\n"})})}),(0,t.jsx)(i.Z,{value:"swift",label:"Swift",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let token = try await client.getOrganizationToken(forId: "<organization-id>")\n'})})}),(0,t.jsx)(i.Z,{value:"others",label:"Others",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\n\nconst params = new URLSearchParams();\n\nparams.append('grant_type', 'refresh_token');\nparams.append('client_id', 'YOUR_CLIENT_ID');\nparams.append('refresh_token', 'REFRESH_TOKEN');\nparams.append('organization_id', 'org_123');\n\nconst response = await fetch('https://YOUR_LOGTO_ENDPOINT/oidc/token', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/x-www-form-urlencoded',\n  },\n  body: params,\n});\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The response will be in the same format as the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint",children:"standard token endpoint"}),", and the ",(0,t.jsx)(n.code,{children:"access_token"})," is the organization token in JWT format."]}),"\n",(0,t.jsx)(n.p,{children:"Besides regular claims of an access token, the organization token also contains the following claims:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aud"}),": The audience of the organization token is ",(0,t.jsx)(n.code,{children:"urn:logto:organization:{organization_id}"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"scope"}),": The scopes granted to the user in the organization with space as delimiter."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"A good example can beat a thousand words. Assume our organization template has the following setup:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Permissions: ",(0,t.jsx)(n.code,{children:"read:logs"}),", ",(0,t.jsx)(n.code,{children:"write:logs"}),", ",(0,t.jsx)(n.code,{children:"read:users"}),", ",(0,t.jsx)(n.code,{children:"write:users"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Roles: ",(0,t.jsx)(n.code,{children:"admin"}),", ",(0,t.jsx)(n.code,{children:"member"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"admin"})," role has all permissions."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"member"})," role has ",(0,t.jsx)(n.code,{children:"read:logs"})," and ",(0,t.jsx)(n.code,{children:"read:users"})," permissions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"And the user has the following setup:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Organization IDs: ",(0,t.jsx)(n.code,{children:"org_1"}),", ",(0,t.jsx)(n.code,{children:"org_2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Organization roles: ",(0,t.jsx)(n.code,{children:"org_1:admin"}),", ",(0,t.jsx)(n.code,{children:"org_2:member"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the Logto SDK config (or auth request), we set up other things properly, and added the following scopes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"urn:logto:scope:organizations"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"openid"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"offline_access"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"read:logs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"write:logs"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now, when the user finishes the authentication flow, we can get the organization IDs from the ",(0,t.jsx)(n.code,{children:"idToken"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst idToken = await logto.getIdTokenClaims();\n\nconsole.log(idToken.organizations); // ['org_1', 'org_2']\n"})}),"\n",(0,t.jsx)(n.p,{children:"If we want to get the organization tokens:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst org1Token = await logto.getOrganizationTokenClaims('org_1');\nconst org2Token = await logto.getOrganizationTokenClaims('org_2');\n\nconsole.log(org1Token.aud); // 'urn:logto:organization:org_1'\nconsole.log(org1Token.scope); // 'read:logs write:logs'\nconsole.log(org2Token.aud); // 'urn:logto:organization:org_2'\nconsole.log(org2Token.scope); // 'read:logs'\n\nconst org3Token = await logto.getOrganizationTokenClaims('org_3'); // Error: User is not a member of the organization\n"})}),"\n",(0,t.jsx)(n.p,{children:"Explanation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"org_1"}),", the user has the ",(0,t.jsx)(n.code,{children:"admin"})," role, so the organization token should have all available permissions (scopes)."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"org_2"}),", the user has the ",(0,t.jsx)(n.code,{children:"member"})," role, so the organization token should have ",(0,t.jsx)(n.code,{children:"read:logs"})," and ",(0,t.jsx)(n.code,{children:"read:users"})," permissions (scopes)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Since we only requested ",(0,t.jsx)(n.code,{children:"read:logs"})," and ",(0,t.jsx)(n.code,{children:"write:logs"}),' scopes in the authentication flow, the organization tokens have been "downscoped" accordingly, resulting in the intersection of the requested scopes and the available scopes.']}),"\n",(0,t.jsx)(n.h2,{id:"verify-organization-tokens",children:"Verify organization tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Once the app gets an organization token, it can use the token in the same way as a regular access token, e.g. call the APIs with the token in the ",(0,t.jsx)(n.code,{children:"Authorization"})," header in the format of ",(0,t.jsx)(n.code,{children:"Bearer {token}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In your API, you can verify the organization token which is similar to ",(0,t.jsx)(n.a,{href:"/docs/recipes/protect-your-api/#validate-the-authorization-token",children:"Proctect your API"}),". Main differences:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unlike access tokens for API resources, a user CANNOT get an organization token if the user is not a member of the organization."}),"\n",(0,t.jsxs)(n.li,{children:["The audience of the organization token is ",(0,t.jsx)(n.code,{children:"urn:logto:organization:{organization_id}"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For certain permissions (scopes), you need to check the ",(0,t.jsx)(n.code,{children:"scope"})," claim of the organization token by splitting the string with space as delimiter."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},75268:function(e,n,o){o.d(n,{Z:function(){return s}});o(50959);var t=o(45924),r={tabItem:"tabItem_zBCg"},i=o(11527);function s(e){let{children:n,hidden:o,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:o,children:n})}},67234:function(e,n,o){o.d(n,{Z:function(){return b}});var t=o(50959),r=o(45924),i=o(58748),s=o(28903),a=o(88137),c=o(70670),l=o(91391),d=o(47841);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function g(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,i=u(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,h]=p({queryString:o,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(o);return[r,(0,t.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:r}),j=(()=>{const e=l??x;return g({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=o(77691),j={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},m=o(11527);function z(e){let{className:n,block:o,selectedValue:t,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,o=c.indexOf(n),r=a[o].value;r!==t&&(l(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;n=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;n=c[o]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function k(e){let{lazy:n,children:o,selectedValue:r}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,m.jsx)(z,{...e,...n}),(0,m.jsx)(k,{...e,...n})]})}function b(e){const n=(0,f.Z)();return(0,m.jsx)(w,{...e,children:h(e.children)},String(n))}},17279:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var t=o(50959);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);