"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2434],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8661:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(9496),a=n(1626),r="tabItem_ZZXe";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},2418:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(5443),a=n(9496),r=n(1626),i=n(5874),l=n(2103),c=n(3299),s=n(2821),d="tabList_kQjL",u="tabItem_wrqk";function p(e){var t,n,i=e.lazy,p=e.block,m=e.defaultValue,g=e.values,v=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),C=N.tabGroupChoices,w=N.setTabGroupChoices,T=(0,a.useState)(b),x=T[0],E=T[1],A=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=C[v];null!=I&&I!==x&&h.some((function(e){return e.value===I}))&&E(I)}var Z=function(e){var t=e.currentTarget,n=A.indexOf(t),o=h[n].value;o!==x&&(O(t),E(o),null!=v&&w(v,String(o)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,a=A.indexOf(e.currentTarget)+1;n=null!=(o=A[a])?o:A[0];break;case"ArrowLeft":var r,i=A.indexOf(e.currentTarget)-1;n=null!=(r=A[i])?r:A[A.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return A.push(e)},onKeyDown:S,onFocus:Z,onClick:Z},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}},2929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return h}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=n(1280),l=n(9046),c=n(6301),s=n(1482),d=n(2418),u=n(8661),p=n.p+"assets/images/android-redirect-uri-31fb47b7ad4896f9b79a035d84a4be53.png",m=["components"],g={sidebar_label:"Android"},v="Android: Integrate Logto Android SDK",f={unversionedId:"docs/recipes/integrate-logto/android",id:"docs/recipes/integrate-logto/android",title:"Android: Integrate Logto Android SDK",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/android.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/android",permalink:"/docs/recipes/integrate-logto/android",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/android.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 Integrate Logto in your application",permalink:"/docs/recipes/integrate-logto/"},next:{title:"iOS",permalink:"/docs/recipes/integrate-logto/ios"}},k={},h=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Further readings",id:"further-readings",level:2}],y={toc:h};function b(e){var t=e.components,n=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-integrate-logto-android-sdk"},"Android: Integrate Logto Android SDK"),(0,r.kt)(i.ZP,{type:"Native App",mdxType:"AppNote"}),(0,r.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",null,"The minimum supported Android API level of Logto Andorid SDK is level 24."))),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,r.kt)("p",null,"Add the Logto Android SDK to your dependencies:"),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0")\n}\n'))),(0,r.kt)(u.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0'\n}\n")))),(0,r.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass MainActivity : AppCompatActivity() {\n    val logtoConfig = LogtoConfig(\n        endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n        appId = "<your-app-id>",\n        scopes = null,\n        resources = null,\n        usingPersistStorage = true,\n    )\n\n    val logtoClient = LogtoClient(logtoConfig, application)\n}\n'))),(0,r.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\n\npublic class MainActivity extends AppCompatActivity {\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))),(0,r.kt)("h2",{id:"sign-in"},"Sign in"),(0,r.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,r.kt)(l.ZP,{figureSrc:p,redirectUri:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format."),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"$(LOGTO_REDIRECT_SCHEME)")," with your own settings.")),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")),(0,r.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,r.kt)(c.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // continue logic\n}\n'))),(0,r.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // continue logic\n});\n')))),(0,r.kt)("p",null,"After signing in successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"sign-out"},"Sign out"),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},".signOut")," will always clear local credentials even if errors occurred."),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // continue logic\n}\n"))),(0,r.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // continue logic\n});\n")))),(0,r.kt)("h2",{id:"further-readings"},"Further readings"),(0,r.kt)(s.ZP,{mdxType:"FurtherReadings"}))}b.isMDXComponent=!0},1280:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,r.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing."))))}c.isMDXComponent=!0},9046:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"50%"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}c.isMDXComponent=!0},1482:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/protect-your-api/"},"Protect your API"))))}c.isMDXComponent=!0},6301:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",null,"Before calling ",(0,r.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console."))))}c.isMDXComponent=!0}}]);