"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6261],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5045:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(665),o=r(40151),i=(r(59496),r(49613)),a=["components"],s={sidebar_position:7.2},l="\ud83d\udc64 User Profiles",c={unversionedId:"docs/recipes/user-profile/README",id:"docs/recipes/user-profile/README",title:"\ud83d\udc64 User Profiles",description:"Coming soon in the next release.",source:"@site/docs/docs/recipes/user-profile/README.md",sourceDirName:"docs/recipes/user-profile",slug:"/docs/recipes/user-profile/",permalink:"/zh-cn/docs/recipes/user-profile/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/user-profile/README.md",tags:[],version:"current",sidebarPosition:7.2,frontMatter:{sidebar_position:7.2},sidebar:"docsSidebar",previous:{title:"Protect your API Resource with RBAC",permalink:"/zh-cn/docs/recipes/rbac/protect-resource"},next:{title:"\ud83e\ude9d Web hooks",permalink:"/zh-cn/docs/recipes/web-hooks/"}},p={},u=[{value:"Get started",id:"get-started",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-user-profiles"},"\ud83d\udc64 User Profiles"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Coming soon in the next release.")),(0,i.kt)("p",null,"In previous sections, we demonstrated how to manage your users ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/admin-console"},"using Admin Console"),", or through ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/management-api"},"management APIs"),". This is a straightforward process for those in the role of administrator. However, it is also important for the regular users to update their profiles on their own."),(0,i.kt)("p",null,"To enable this, you will need to create your own profile page with the help of the management APIs."),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure your backend service has acquired a pair of API key and API secret through the ",(0,i.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/machine-to-machine"},"Machine to Machine")," process."),(0,i.kt)("li",{parentName:"ol"},"In your client application, create a new page for the user's profile. This can be done using a variety of front-end development frameworks, such as React or Vue."),(0,i.kt)("li",{parentName:"ol"},"Make sure the user authentication is still valid. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/recipes/protect-your-api/"},"protect your API")," for details"),(0,i.kt)("li",{parentName:"ol"},"On the profile page, create a form for the user to input their profile information, such as their ",(0,i.kt)("em",{parentName:"li"},"name, email address")," and ",(0,i.kt)("em",{parentName:"li"},"profile picture"),", provided by Logto. In addition, you may also want to include your own business model in the form, such as ",(0,i.kt)("em",{parentName:"li"},"age, gender, mailing address, payment methods, etc"),". These can be fetched from your own service DB, or you can store them previously as ",(0,i.kt)("inlineCode",{parentName:"li"},"custom_data")," in user object, and fetch from there."),(0,i.kt)("li",{parentName:"ol"},"It is always recommended to fetch the profile data in prior or on page load, and pre-fill the form fields. You can do it by calling:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SDK function ",(0,i.kt)("inlineCode",{parentName:"li"},"getIdTokenClaims")," to decode basic user claims cached in ID Token on client side"),(0,i.kt)("li",{parentName:"ul"},"SDK function ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchUserInfo")," to fetch user data from Logto service"),(0,i.kt)("li",{parentName:"ul"},"Management API ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/users/:userId")," to fetch from Logto service"))),(0,i.kt)("li",{parentName:"ol"},"Optionally, you can verify the email and password before submitting the entire form. This ensures all emails and phone numbers in your user table are verified, which makes it easier and almost natural to enable passwordless sign-in methods (e.g. email and verification code) in your application. In order to do this, you only have to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configure an email or phone connector in Admin Console"),(0,i.kt)("li",{parentName:"ul"},"Make sure to add a message template with ",(0,i.kt)("inlineCode",{parentName:"li"},"Generic")," usage type in the config of the above connector"),(0,i.kt)("li",{parentName:"ul"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/verification-code")," to send verification code to a given email or phone"),(0,i.kt)("li",{parentName:"ul"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/verification-code/verify")," to verify the code against a given email or phone"))),(0,i.kt)("li",{parentName:"ol"},"When the user submits the profile form, make an API call to update the user's profile info. This can typically be done using a PATCH request, including the updated profile info in the request body payload.")))}m.isMDXComponent=!0}}]);