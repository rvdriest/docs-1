"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[12564],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||r;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21224:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[{value:"Set up Azure AD in the Azure Portal",id:"set-up-azure-ad-in-the-azure-portal",level:3},{value:"Configure your client secret",id:"configure-your-client-secret",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4},{value:"References",id:"references",level:3}]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"set-up-azure-ad-in-the-azure-portal"},"Set up Azure AD in the Azure Portal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com/#home"},"Azure Portal")," and sign in with your Azure account. You need to have an active subscription to access Azure AD."),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory")," from the services they offer, and click the ",(0,r.kt)("strong",{parentName:"li"},"App Registrations")," from the left menu."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"New Registration")," at the top and enter a description, select your ",(0,r.kt)("strong",{parentName:"li"},"access type")," and add your ",(0,r.kt)("strong",{parentName:"li"},"Redirect URI"),", which redirect the user to the application after logging in. In our case, this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"${your_logto_origin}/callback/${connector_id}"),". e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://logto.dev/callback/${connector_id}"),". You need to select Web as Platform. The ",(0,r.kt)("inlineCode",{parentName:"li"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page."),(0,r.kt)("li",{parentName:"ul"},"If you select ",(0,r.kt)("strong",{parentName:"li"},"Single Tenant")," for access type then you need to enter ",(0,r.kt)("strong",{parentName:"li"},"TenantID"),", else you need to enter ",(0,r.kt)("inlineCode",{parentName:"li"},"common")," as Tenant ID.")),(0,r.kt)("h3",{id:"configure-your-client-secret"},"Configure your client secret"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your newly created project, click the ",(0,r.kt)("strong",{parentName:"li"},"Certificates & Secrets")," to get a client secret, and click the ",(0,r.kt)("strong",{parentName:"li"},"New client secret")," from the top."),(0,r.kt)("li",{parentName:"ul"},"Enter a description and an expiration."),(0,r.kt)("li",{parentName:"ul"},"This will only show your client secret once. Save the ",(0,r.kt)("strong",{parentName:"li"},"value")," to a secure location.")),(0,r.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add your App Registration's ",(0,r.kt)("strong",{parentName:"li"},"Client ID")," into logto json."),(0,r.kt)("li",{parentName:"ul"},"Add your ",(0,r.kt)("strong",{parentName:"li"},"Client Secret")," into logto json."),(0,r.kt)("li",{parentName:"ul"},"Add your App Registration's ",(0,r.kt)("strong",{parentName:"li"},"Tenant ID")," into logto json."),(0,r.kt)("li",{parentName:"ul"},"Add your Microsoft ",(0,r.kt)("strong",{parentName:"li"},"Login Url"),' into logto json. This defaults to "',(0,r.kt)("a",{parentName:"li",href:"https://login.microsoftonline.com/%22"},'https://login.microsoftonline.com/"')," for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/"\n}\n')),(0,r.kt)("h4",{id:"config-types"},"Config types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientId"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenantId"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloudInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs"},"Web app that signs in users")))}u.isMDXComponent=!0},47185:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(26462),l=n(7618),u=n(21591),c=n(49837),s=["components"],p={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)(i.ZP,{mdxType:"AddSdk"}),(0,r.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)(u.ZP,{mdxType:"InitClient"}),(0,r.kt)("h3",{id:"sign-in"},"Sign in"),(0,r.kt)(l.ZP,{mdxType:"ImplementSignIn"}),(0,r.kt)(c.ZP,{sdk:"Next",mdxType:"TestYourIntegration"}))}d.isMDXComponent=!0},84869:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connector tab",src:n(23455).Z,width:"3352",height:"1226"})),(0,r.kt)("p",null,'In the openning modal, select "',u.connector,'" and click "Next".'),(0,r.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,r.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}u.isMDXComponent=!0},84028:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],u={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create application",src:n(67612).Z,width:"2368",height:"226"})),(0,r.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,r.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,r.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,r.kt)("img",{src:i,alt:"Create Application modal",width:"700"}),(0,r.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,r.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,r.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},66816:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign-in Experience tab",src:n(74673).Z,width:"3160",height:"1822"})),(0,r.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',u.connector," ","sign-in, which may increase your conversion rate."),(0,r.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',u.connector,'". Then you should be able to see a button with text "Continue with ',u.connector,'" in the preview section.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save changes",src:n(89913).Z,width:"2474",height:"188"})),(0,r.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}u.isMDXComponent=!0},23074:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"For our new friends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,r.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,r.kt)("span",null," and "),(0,r.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"Basic knowledge of"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"A usable ",n.connector," account."))))}u.isMDXComponent=!0},22719:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}u.isMDXComponent=!0},49837:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Test your integration",type:"info"},(0,r.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}u.isMDXComponent=!0},10309:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}u.isMDXComponent=!0},18961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return A},connector:function(){return v},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return b}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(23074),l=n(84028),u=n(84869),c=n(22719),s=n(66816),p=n(10309),d=n(47185),g=n(21224),m=["components"],h={slug:"how-to-build-azure-ad-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","azure-ad","next","js","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Next and Logto"},f=void 0,k={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-next-and-logto",source:"@site/tutorial/build-with-logto/generated-next-azure-ad.mdx",title:"How to build Azure AD sign-in with Next and Logto",description:"\x3c!--",date:"2023-05-16T03:12:08.177Z",formattedDate:"May 16, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{label:"next",permalink:"/tutorial/tags/next"},{label:"js",permalink:"/tutorial/tags/js"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.29,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","azure-ad","next","js","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Next and Logto"},prevItem:{title:"How to build Apple sign-in with Next and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-next-and-logto"},nextItem:{title:"How to build Discord sign-in with Next and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-next-and-logto"}},A={authorsImageUrls:[void 0]},b=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Azure AD connector",id:"add-azure-ad-connector",level:2},{value:"Set up Azure AD",id:"set-up-azure-ad",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Azure AD connector in Sign-in Experience",id:"enable-azure-ad-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],v="Azure AD",y={toc:b,connector:v};function w(e){var t=e.components,n=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{connector:v,sdk:"Next",link:"https://nextjs.org/",mdxType:"Intro"}),(0,r.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,r.kt)(l.ZP,{type:"Traditional Web",mdxType:"CreateApplication"}),(0,r.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,r.kt)(d.ZP,{mdxType:"IntegrateSdk"}),(0,r.kt)("h2",{id:"add-azure-ad-connector"},"Add Azure AD connector"),(0,r.kt)(u.ZP,{connector:v,mdxType:"AddConnector"}),(0,r.kt)("h2",{id:"set-up-azure-ad"},"Set up Azure AD"),(0,r.kt)(g.ZP,{mdxType:"ConnectorGuide"}),(0,r.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,r.kt)(c.ZP,{connector:v,mdxType:"SaveYourConfiguration"}),(0,r.kt)("h2",{id:"enable-azure-ad-connector-in-sign-in-experience"},"Enable Azure AD connector in Sign-in Experience"),(0,r.kt)(s.ZP,{connector:v,mdxType:"EnableSocialConnector"}),(0,r.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,r.kt)(p.ZP,{connector:v,sdk:"Next",mdxType:"TestingAndValidation"}),(0,r.kt)("h2",{id:"further-readings"},"Further readings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,r.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,r.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,r.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}w.isMDXComponent=!0},44693:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),a="tabItem_f4_5",r=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n,children:t})}},52967:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(59496),a=n(45924),r=n(5734),i=n(89274),l=n(61037),u=n(18833);function c(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,r.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,i._X)(u),(0,o.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function g(e){var t,n,a,r,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,g=e.groupId,m=s(e),h=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),f=h[0],k=h[1],A=d({queryString:c,groupId:g}),b=A[0],v=A[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=y[0],N=y[1],I=function(){var e=null!=b?b:w;return p({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){I&&k(I)}),[I]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);k(e),v(e),N(e)}),[v,N,m]),tabValues:m}}var m=n(72216),h=n(48350),f="tabList_P5Xc",k="tabItem_oHQM",A=n(4637);function b(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,i=e.tabValues,l=[],u=(0,m.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==o&&(u(t),r(a))},s=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var o,a=l.indexOf(e.currentTarget)+1;n=null!=(o=l[a])?o:l[0];break;case"ArrowLeft":var r,i=l.indexOf(e.currentTarget)-1;n=null!=(r=l[i])?r:l[l.length-1]}null==(t=n)||t.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,A.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return l.push(e)},onKeyDown:s,onClick:c},r,{className:(0,a.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=g(e);return(0,A.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,A.jsx)(b,Object.assign({},e,t)),(0,A.jsx)(v,Object.assign({},e,t))]})}function w(e){var t=(0,h.Z)();return(0,A.jsx)(y,Object.assign({},e),String(t))}},52005:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},16551:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",l=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",null,'You can find and copy "App Secret" from application details page in Admin Console:'),(0,r.kt)("img",{alt:"App Secret",src:i,width:"586px"})))}c.isMDXComponent=!0},88186:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".")))}u.isMDXComponent=!0},19931:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The sign-in flow can be simplified as:"),(0,r.kt)("img",{alt:"Web sign-in flow",src:"data:image/png;base64,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",width:"700pt"}))}u.isMDXComponent=!0},26462:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(44693),l=n(52967),u=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/next\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/next\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/next\n")))))}s.isMDXComponent=!0},7618:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(72350),l=n(52005),u=n(19931),c=["components"],s={toc:[{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:3},{value:"Prepare API routes",id:"prepare-api-routes",level:3},{value:"Implement sign-in button",id:"implement-sign-in-button",level:3}]};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u.ZP,{mdxType:"SignInFlowSummary"}),(0,r.kt)("h3",{id:"configure-sign-in-redirect-uri"},"Configure sign-in redirect URI"),(0,r.kt)(l.ZP,{figureSrc:i.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"prepare-api-routes"},"Prepare API routes"),(0,r.kt)("p",null,"Prepare ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/introduction"},"API routes")," to connect with Logto."),(0,r.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the API routes first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n")),(0,r.kt)("p",null,"This will create 4 routes automatically:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in"),": Sign in with Logto."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in-callback"),": Handle sign-in callback."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-out"),": Sign out with Logto."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/user"),": Check if user is authenticated with Logto. If yes, return user info.")),(0,r.kt)("h3",{id:"implement-sign-in-button"},"Implement sign-in button"),(0,r.kt)("p",null,"We're almost there! In the last step, we will create a sign-in button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouter } from 'next/router';\n\n<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>;\n")),(0,r.kt)("p",null,"Now you will be navigated to Logto sign-in page when you click the button."))}p.isMDXComponent=!0},21591:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(16551),l=n(88186),u=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{mdxType:"AssumingUrl"}),(0,r.kt)(i.ZP,{mdxType:"GetAppSecret"}),(0,r.kt)("p",null,"Import and initialize LogtoClient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n")))}s.isMDXComponent=!0},72350:function(e,t,n){t.Z=n.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},23455:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},67612:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},89913:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},74673:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);