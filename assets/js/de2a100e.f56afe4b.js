"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[42763],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8938:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"configure-a-mail-service-in-the-aws-service-console"},"Configure a mail service in the AWS service console"),(0,r.kt)("p",null,"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."),(0,r.kt)("p",null,"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"Tip")),(0,r.kt)("p",{parentName:"blockquote"},"You can skip some sections if you have already finished.")),(0,r.kt)("h4",{id:"register-aws-account"},"Register AWS account"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"AWS")," and register an account."),(0,r.kt)("h4",{id:"create-a-identity"},"Create a identity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Amazon Simple Email Service")," Console"),(0,r.kt)("li",{parentName:"ul"},"Create an identity, choose one of the following options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a domain"),(0,r.kt)("li",{parentName:"ul"},"Create an email address")))),(0,r.kt)("h4",{id:"configuration-of-the-connector"},"Configuration of the connector"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click your username in the upper right corner of the Amazon console to enter ",(0,r.kt)("inlineCode",{parentName:"li"},"Security Credentials"),". If you don't have one, create an ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey")," and save it carefully."),(0,r.kt)("li",{parentName:"ol"},"Complete the settings of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Amazon Simple Email Service")," connector:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey Secret")," obtained in step 1 to fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"accessKeyId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"accessKeySecret")," respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),": Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"region")," field with the region of the identity you use to send mail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"emailAddress"),": The email address you use to send mail, in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"Logto<noreply@logto.io>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<noreply@logto.io>"))))),(0,r.kt)("p",null,"the following parameters are optional; parameters description can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html"},"AWS SES API documentation"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feedbackForwardingEmailAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feedbackForwardingEmailAddressIdentityArn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configurationSetName"))),(0,r.kt)("h4",{id:"test-the-amazon-ses-connector"},"Test the Amazon SES connector"),(0,r.kt)("p",null,'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'),(0,r.kt)("p",null,"That's it. Don't forget to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors#enable-sms-or-email-passwordless-sign-in"},"Enable connector in sign-in experience"),"."),(0,r.kt)("h4",{id:"configure-types"},"Configure types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKeySecret"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"region"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emailAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emailAddressIdentityArn"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedbackForwardingEmailAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedbackForwardingEmailAddressIdentityArn"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configurationSetName"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"templates"),(0,r.kt)("td",{parentName:"tr",align:null},"Template[]")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Template Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usageType"),(0,r.kt)("td",{parentName:"tr",align:null},"enum string"),(0,r.kt)("td",{parentName:"tr",align:null},"'Register' ","|"," 'SignIn' ","|"," 'ForgotPassword' ","|"," 'Generic'")))))}s.isMDXComponent=!0},47185:function(e,t,n){n.d(t,{ZP:function(){return d}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=n(26462),l=n(7618),s=n(21591),u=n(49837),c=["components"],p={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)(i.ZP,{mdxType:"AddSdk"}),(0,r.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)(s.ZP,{mdxType:"InitClient"}),(0,r.kt)("h3",{id:"sign-in"},"Sign in"),(0,r.kt)(l.ZP,{mdxType:"ImplementSignIn"}),(0,r.kt)(u.ZP,{sdk:"Next",mdxType:"TestYourIntegration"}))}d.isMDXComponent=!0},38624:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To add or change ",s.connectorType,' connector, go to the "Connector" tab in the Admin Console, then click on "Email and SMS Connectors". From there, click "Set up" or go to detail page and click "Change ',s.connectorType,' connector".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connector tab",src:n(30772).Z,width:"4164",height:"1290"})),(0,r.kt)("p",null,'In the openning modal, select "',s.connector,'" and click "Next".'),(0,r.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,r.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}s.isMDXComponent=!0},84028:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],s={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function u(e){var t=e.components,u=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create application",src:n(67612).Z,width:"2368",height:"226"})),(0,r.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,r.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,r.kt)("p",null,'In the opening modal, select the "',u.type,'" option as the application type.'),(0,r.kt)("img",{src:i,alt:"Create Application modal",width:"700"}),(0,r.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,r.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,r.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}u.isMDXComponent=!0},56830:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign-in Experience tab",src:n(74673).Z,width:"3160",height:"1822"})),(0,r.kt)("p",null,'Select "',s.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up identifier" to provide sign-up for ',s.connectorType," passwordless sign-in, which may increase your conversion rate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save changes",src:n(89913).Z,width:"2474",height:"188"})),(0,r.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}s.isMDXComponent=!0},23074:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"For our new friends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,r.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,r.kt)("span",null," and "),(0,r.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"Basic knowledge of"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"A usable ",n.connector," account."))))}s.isMDXComponent=!0},22719:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}s.isMDXComponent=!0},49837:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Test your integration",type:"info"},(0,r.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}s.isMDXComponent=!0},10309:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}s.isMDXComponent=!0},70292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},connector:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=(n(23074),n(84028),n(38624),n(22719),n(56830),n(10309),n(47185),n(8938),["components"]),l={slug:"how-to-build-aws-ses-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","aws-ses","next","js","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Next and Logto"},s=void 0,u={permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-next-and-logto",source:"@site/tutorial/build-with-logto/generated-next-aws-ses.mdx",title:"How to build AWS SES Email passwordless sign-in with Next and Logto",description:"\x3c!--",date:"2023-05-22T08:48:11.474Z",formattedDate:"May 22, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"aws-ses",permalink:"/tutorial/tags/aws-ses"},{label:"next",permalink:"/tutorial/tags/next"},{label:"js",permalink:"/tutorial/tags/js"},{label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.315,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-aws-ses-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","aws-ses","next","js","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Next and Logto"},prevItem:{title:"How to build SendGrid Email passwordless sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-ios-swift-and-logto"},nextItem:{title:"How to build SendGrid Email passwordless sign-in with Next and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-next-and-logto"}},c={authorsImageUrls:[void 0]},p=[],d="AWS SES",m={toc:p,connector:d};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},44693:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var a=n(45924),o="tabItem_f4_5",r=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n,children:t})}},52967:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(59496),o=n(45924),r=n(5734),i=n(89274),l=n(61037),s=n(18833);function u(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,l=(0,r.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:o});return[(0,i._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function m(e){var t,n,o,r,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,m=e.groupId,g=c(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:g})})),h=f[0],k=f[1],A=d({queryString:u,groupId:m}),b=A[0],v=A[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,s.Nk)(t),o=n[0],r=n[1],[o,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=y[0],N=y[1],S=function(){var e=null!=b?b:w;return p({value:e,tabValues:g})?e:null}();return(0,a.useLayoutEffect)((function(){S&&k(S)}),[S]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);k(e),v(e),N(e)}),[v,N,g]),tabValues:g}}var g=n(72216),f=n(48350),h="tabList_P5Xc",k="tabItem_oHQM",A=n(4637);function b(e){var t=e.className,n=e.block,a=e.selectedValue,r=e.selectValue,i=e.tabValues,l=[],s=(0,g.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==a&&(s(t),r(o))},c=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,o=l.indexOf(e.currentTarget)+1;n=null!=(a=l[o])?a:l[0];break;case"ArrowLeft":var r,i=l.indexOf(e.currentTarget)-1;n=null!=(r=l[i])?r:l[l.length-1]}null==(t=n)||t.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,A.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:c,onClick:u},r,{className:(0,o.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,o=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===o}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function y(e){var t=m(e);return(0,A.jsxs)("div",{className:(0,o.Z)("tabs-container",h),children:[(0,A.jsx)(b,Object.assign({},e,t)),(0,A.jsx)(v,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,A.jsx)(y,Object.assign({},e),String(t))}},52005:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}s.isMDXComponent=!0},16551:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",l=["components"],s={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",null,'You can find and copy "App Secret" from application details page in Admin Console:'),(0,r.kt)("img",{alt:"App Secret",src:i,width:"586px"})))}u.isMDXComponent=!0},88186:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".")))}s.isMDXComponent=!0},19931:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The sign-in flow can be simplified as:"),(0,r.kt)("img",{alt:"Web sign-in flow",src:"data:image/png;base64,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",width:"700pt"}))}s.isMDXComponent=!0},26462:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=n(44693),l=n(52967),s=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/next\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/next\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/next\n")))))}c.isMDXComponent=!0},7618:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=n(72350),l=n(52005),s=n(19931),u=["components"],c={toc:[{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:3},{value:"Prepare API routes",id:"prepare-api-routes",level:3},{value:"Implement sign-in button",id:"implement-sign-in-button",level:3}]};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.ZP,{mdxType:"SignInFlowSummary"}),(0,r.kt)("h3",{id:"configure-sign-in-redirect-uri"},"Configure sign-in redirect URI"),(0,r.kt)(l.ZP,{figureSrc:i.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"prepare-api-routes"},"Prepare API routes"),(0,r.kt)("p",null,"Prepare ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/introduction"},"API routes")," to connect with Logto."),(0,r.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the API routes first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n")),(0,r.kt)("p",null,"This will create 4 routes automatically:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in"),": Sign in with Logto."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in-callback"),": Handle sign-in callback."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-out"),": Sign out with Logto."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/logto/user"),": Check if user is authenticated with Logto. If yes, return user info.")),(0,r.kt)("h3",{id:"implement-sign-in-button"},"Implement sign-in button"),(0,r.kt)("p",null,"We're almost there! In the last step, we will create a sign-in button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouter } from 'next/router';\n\n<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>;\n")),(0,r.kt)("p",null,"Now you will be navigated to Logto sign-in page when you click the button."))}p.isMDXComponent=!0},21591:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=n(16551),l=n(88186),s=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{mdxType:"AssumingUrl"}),(0,r.kt)(i.ZP,{mdxType:"GetAppSecret"}),(0,r.kt)("p",null,"Import and initialize LogtoClient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n")))}c.isMDXComponent=!0},72350:function(e,t,n){t.Z=n.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},30772:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},67612:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},89913:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},74673:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);