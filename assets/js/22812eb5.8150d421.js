"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9769],{52393:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[{value:"Create social IdP&#39;s account and register SAML application (IdP)",id:"create-social-idps-account-and-register-saml-application-idp",level:3},{value:"Configure SAML connector (SP)",id:"configure-saml-connector-sp",level:3},{value:"entityID <code>Required</code>",id:"entityid-required",level:4},{value:"signInEndpoint <code>Required</code>",id:"signinendpoint-required",level:4},{value:"x509Certificate <code>Required</code>",id:"x509certificate-required",level:4},{value:"idpMetadataXml <code>Required</code>",id:"idpmetadataxml-required",level:4},{value:"assertionConsumerServiceUrl <code>Required</code>",id:"assertionconsumerserviceurl-required",level:4},{value:"signAuthnRequest",id:"signauthnrequest",level:4},{value:"encryptAssertion",id:"encryptassertion",level:4},{value:"requestSignatureAlgorithm",id:"requestsignaturealgorithm",level:4},{value:"messageSigningOrder",id:"messagesigningorder",level:4},{value:"privateKey and privateKeyPass",id:"privatekey-and-privatekeypass",level:4},{value:"encPrivateKey and encPrivateKeyPass",id:"encprivatekey-and-encprivatekeypass",level:4},{value:"nameIDFormat",id:"nameidformat",level:4},{value:"timeout",id:"timeout",level:4},{value:"profileMap",id:"profilemap",level:4},{value:"Config types",id:"config-types",level:4},{value:"Reference",id:"reference",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-social-idps-account-and-register-saml-application-idp",children:"Create social IdP's account and register SAML application (IdP)"}),"\n",(0,i.jsx)(n.p,{children:"Let's go through configurations of SAML connector."}),"\n",(0,i.jsx)(n.p,{children:"Before we kicking off, you can go to a social identity provider which supports SAML protocol and create your own account. Okta, OneLogin, Salesforce and some other platforms support authentication based on SAML protocol."}),"\n",(0,i.jsx)(n.p,{children:"If your IdP mandate the encryption of SAML assertion and receiving of signed authentication requests, you should generate your private key and corresponding certificate using RSA algorithm. Keep the private key for your SP use and upload the certificate to IdP."}),"\n",(0,i.jsxs)(n.p,{children:["You also need to configure the ACS (Assertion Consumer Service) URL as ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"})," to handle IdP's SAML assertion. Where you can find your ",(0,i.jsx)(n.code,{children:"connectorId"})," at SAML connector's details page in Logto's Admin Console."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Per current Logto's design, we only support Redirect-binding for sending authentication request and POST-binding for receiving SAML assertion. Although this sounds not cool, but we believe that the current design can handle most of your use cases. If you have any problems, feel free to reach out!"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-saml-connector-sp",children:"Configure SAML connector (SP)"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will introduce each attribute in detail."}),"\n",(0,i.jsxs)(n.h4,{id:"entityid-required",children:["entityID ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entityID"})," (i.e. ",(0,i.jsx)(n.code,{children:"issuer"}),") is Entity identifier. It is used to identify your entity (SAML SP entity), and match the equivalence in each SAML request/response."]}),"\n",(0,i.jsxs)(n.h4,{id:"signinendpoint-required",children:["signInEndpoint ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:["The IdP's endpoint that you send SAML authentication requests to. Usually, you can find this value in IdP details page (i.e. IdP's ",(0,i.jsx)(n.code,{children:"SSO URL"})," or ",(0,i.jsx)(n.code,{children:"Login URL"}),")."]}),"\n",(0,i.jsxs)(n.h4,{id:"x509certificate-required",children:["x509Certificate ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsx)(n.p,{children:"The x509 certificate generated from IdPs private key, IdP is expected to have this value available."}),"\n",(0,i.jsxs)(n.p,{children:["The content of the certificate comes with ",(0,i.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," header and ",(0,i.jsx)(n.code,{children:"-----END CERTIFICATE-----"})," tail."]}),"\n",(0,i.jsxs)(n.h4,{id:"idpmetadataxml-required",children:["idpMetadataXml ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsx)(n.p,{children:"The field is used to place contents from your IdP metadata XML file."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["The XML parser we are using does not support customized namespace.\nIf the IdP metadata comes with namespace, you should manually remove them.\nFor namespace of XML file, see ",(0,i.jsx)(n.a,{href:"http://www.xmlmaster.org/en/article/d01/c10/",children:"reference"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"assertionconsumerserviceurl-required",children:["assertionConsumerServiceUrl ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:["The assertion consumer service (ACS) URL is the SP's endpoint to receive IdP's SAML Assertion POST requests. As we mentioned in previous part, it is usually configured at IdP settings but some IdP get this value from SAML authentication requests, we hence also add this value as a REQUIRED field. It's value should look like ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"signauthnrequest",children:"signAuthnRequest"}),"\n",(0,i.jsxs)(n.p,{children:["The boolean value that controls whether SAML authentication request should be signed, whose default value is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"encryptassertion",children:"encryptAssertion"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encryptAssertion"})," is a boolean value that indicates if IdP will encrypt SAML assertion, with default value ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signAuthnRequest"})," and ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," attributes should align with corresponding parameters of IdP setting, otherwise error will be thrown to show that configuration does not match.\nAll SAML responses need to be signed."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"requestsignaturealgorithm",children:"requestSignatureAlgorithm"}),"\n",(0,i.jsxs)(n.p,{children:["This should be aligned with the signature algorithms of IdP so that Logto can verify the signature of the SAML assertion. Its value should be either ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"}),", ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," or ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})," and the default value is ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"messagesigningorder",children:"messageSigningOrder"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"messageSigningOrder"})," indicates the signing and encrypting order of IdP, it's value should be either ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"})," or ",(0,i.jsx)(n.code,{children:"encrypt-then-sign"})," and the default value is ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"privatekey-and-privatekeypass",children:"privateKey and privateKeyPass"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," is an OPTIONAL value and is required when ",(0,i.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKeyPass"})," is the password you've set when creating ",(0,i.jsx)(n.code,{children:"privateKey"}),", required when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,i.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,i.jsx)(n.code,{children:"privateKey"})," is required by IdP for checking the signature."]}),"\n",(0,i.jsx)(n.h4,{id:"encprivatekey-and-encprivatekeypass",children:"encPrivateKey and encPrivateKeyPass"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encPrivateKey"})," is an OPTIONAL value and is required when ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encPrivateKeyPass"})," is the password you've set when creating ",(0,i.jsx)(n.code,{children:"encPrivateKey"}),", required when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,i.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,i.jsx)(n.code,{children:"encPrivateKey"})," is required by IdP for encrypting SAML assertion."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["For keys and certificates generation, ",(0,i.jsx)(n.code,{children:"openssl"})," is a wonderful tool. Here is sample command line that might be helpful:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -passout pass:${privateKeyPassword} -out ${encryptPrivateKeyFilename}.pem 4096\nopenssl req -new -x509 -key ${encryptPrivateKeyFilename}.pem -out ${encryptionCertificateFilename}.cer -days 3650\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," and ",(0,i.jsx)(n.code,{children:"encPrivateKey"})," files are enforced to be encoded in ",(0,i.jsx)(n.code,{children:"pkcs1"})," scheme as pem string, which means the private key files should start with ",(0,i.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"})," and end with ",(0,i.jsx)(n.code,{children:"-----END RSA PRIVATE KEY-----"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"nameidformat",children:"nameIDFormat"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nameIDFormat"})," is an OPTIONAL attribute that declares the name id format that would respond. The value can be among ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," and ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"}),", and the default value is ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:unspecified"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"timeout",children:"timeout"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"timeout"})," is the time tolerance for time validation, since the time between your SP entity and IdP entity could be different and network connection may also bring some delay. The unit is in millisecond, and the default value is 5000 (i.e. 5s)."]}),"\n",(0,i.jsx)(n.h4,{id:"profilemap",children:"profileMap"}),"\n",(0,i.jsxs)(n.p,{children:["Logto also provide a ",(0,i.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. Each ",(0,i.jsx)(n.code,{children:"profileMap"})," keys is Logto's standard user profile field name and corresponding value should be social profiles field name. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is REQUIRED and others are optional fields."]}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signInEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x509certificate"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idpMetadataXml"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entityID"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"assertionConsumerServiceUrl"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"messageSigningOrder"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"encrypt-then-sign"})," | ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sign-then-encrypt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"requestSignatureAlgorithm"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"})," | ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," | ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signAuthnRequest"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryptAssertion"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privateKey"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privateKeyPass"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nameIDFormat"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timeout"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"5000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileMap"}),(0,i.jsx)(n.td,{children:"ProfileMap"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ProfileMap fields"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avatar"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"avatar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phone"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf",children:"Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/tngan/samlify",children:"samlify - Highly configuarable Node.js SAML 2.0 library for Single Sign On"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},25531:(e,n,t)=>{t.d(n,{ZP:()=>x,d$:()=>u});var i=t(11527),s=t(17279),r=t(81213),o=t(63878),a=t(28866),l=t(43819),d=t(81035),c=t(36523),h=t(94842);const u=[...r.d$,{value:"Installation",id:"installation",level:3},...c.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...d.d$,{value:"Implement sign-in",id:"implement-sign-in",level:3},...a.d$,{value:"Implement sign-out",id:"implement-sign-out",level:3},...l.d$,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...o.d$,...h.d$];function p(e){const n={h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:"Next"})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},3963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(11527),s=t(17279);t(87593),t(80710),t(12665),t(80386),t(31877),t(23095),t(25531),t(52393);const r={slug:"how-to-build-saml-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","saml","next","js","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with Next and Logto"},o=void 0,a={permalink:"/tutorial/how-to-build-saml-sign-in-with-next-and-logto",source:"@site/tutorial/build-with-logto/generated-next-saml.mdx",title:"How to build SAML sign-in with Next and Logto",description:"\x3c!--",date:"2024-06-30T06:50:25.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"saml",permalink:"/tutorial/tags/saml"},{inline:!0,label:"next",permalink:"/tutorial/tags/next"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-saml-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","saml","next","js","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with Next and Logto"},unlisted:!1,prevItem:{title:"How to build OIDC sign-in with Next and Logto",permalink:"/tutorial/how-to-build-oidc-sign-in-with-next-and-logto"},nextItem:{title:"How to build SendGrid Email passwordless sign-in with Next and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-next-and-logto"}},l={authorsImageUrls:[void 0]},d="SAML",c=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},10637:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>o});var i=t(11527),s=t(17279);const r=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",o=[];function a(e){const n={admonition:"admonition",...(0,s.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:r,width:"586px"})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[];function o(e){const n={admonition:"admonition",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},81213:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/next-sample",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The example is based on Next.js ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/pages",children:"pages router"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},63878:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[{value:"Through API request in front-end",id:"through-api-request-in-front-end",level:4},{value:"Through <code>getServerSideProps</code>",id:"through-getserversideprops",level:4},{value:"In API routes",id:"in-api-routes",level:4}];function o(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are 3 ways to get authentication status and other context."}),"\n",(0,i.jsx)(n.h4,{id:"through-api-request-in-front-end",children:"Through API request in front-end"}),"\n",(0,i.jsxs)(n.p,{children:["You can fetch logto context by calling ",(0,i.jsx)(n.code,{children:"/api/logto/user"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport useSWR from 'swr';\n\nconst Home = () => {\n  const { data } = useSWR<LogtoContext>('/api/logto/user');\n\n  if (!data) {\n    return <div>Loading...</div>;\n  }\n\n  if (data.isAuthenticated) {\n    return (\n      <div>\n        Hi, {data.claims?.sub},{' '}\n        <button onClick={() => window.location.assign('/api/logto/sign-out')}>Sign Out</button>\n      </div>\n    );\n  }\n\n  return (\n    <div>\n      Not authenticated,{' '}\n      <button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>\n    </div>\n  );\n};\n\nexport default Home;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://swr.vercel.app/docs/getting-started",children:"this guide"})," to learn more about ",(0,i.jsx)(n.code,{children:"useSWR"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"through-getserversideprops",children:["Through ",(0,i.jsx)(n.code,{children:"getServerSideProps"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { LogtoContext } from '@logto/next';\nimport { logtoClient } from '../../libraries/logto';\n\ntype Props = {\n  user: LogtoContext;\n};\n\nconst Profile = ({ user }: Props) => {\n  if (user.isAuthenticated) {\n    return <div>Hi, {user.claims?.sub}</div>;\n  }\n\n  return <div>Not authenticated</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(async function ({ request }) {\n  const { user } = request;\n\n  return {\n    props: { user },\n  };\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props",children:"Next.js documentation"})," for more details on ",(0,i.jsx)(n.code,{children:"getServerSideProps"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"in-api-routes",children:"In API routes"}),"\n",(0,i.jsxs)(n.p,{children:["Wrap your handler with ",(0,i.jsx)(n.code,{children:"logtoClient.withLogtoApiRoute"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute((request, response) => {\n  if (!request.user.isAuthenticated) {\n    response.status(401).json({ message: 'Unauthorized' });\n\n    return;\n  }\n\n  response.json({\n    data: 'this_is_protected_resource',\n  });\n});\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28866:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>l});var i=t(11527),s=t(17279),r=t(19573),o=t(75848),a=t(55556);const l=[...a.d$,{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:4},...o.d$,{value:"Prepare API routes",id:"prepare-api-routes",level:4},{value:"Implement sign-in button",id:"implement-sign-in-button",level:4}];function d(e){const n={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h4,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,i.jsx)(o.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback"}),"\n",(0,i.jsx)(n.h4,{id:"prepare-api-routes",children:"Prepare API routes"}),"\n",(0,i.jsxs)(n.p,{children:["Prepare ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/api-routes/introduction",children:"API routes"})," to connect with Logto."]}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will create 4 routes automatically:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-out"}),": Sign out with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/user"}),": Check if user is authenticated with Logto. If yes, return user info."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"implement-sign-in-button",children:"Implement sign-in button"}),"\n",(0,i.jsx)(n.p,{children:"We're almost there! In the last step, we will create a sign-in button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you will be navigated to Logto sign-in page when you click the button."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43819:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var i=t(11527),s=t(17279);const r=[{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:4}];function o(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:"/api/logto/sign-out"})," will clear all the Logto data in memory and cookies if they exist."]}),"\n",(0,i.jsxs)(n.p,{children:["After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."]}),"\n",(0,i.jsx)(n.h4,{id:"implement-a-sign-out-button",children:"Implement a sign-out button"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<button onClick={() => window.location.assign('/api/logto/sign-out')}>Sign Out</button>\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},81035:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>a});var i=t(11527),s=t(17279),r=t(10637),o=t(51187);const a=[...o.d$,...r.d$];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: 'http://localhost:3000',\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},36523:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>a});var i=t(11527),s=t(17279),r=t(75696),o=t(78407);const a=[];function l(e){const n={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/next\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/next\n"})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/next\n"})})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},75696:(e,n,t)=>{t.d(n,{Z:()=>o});t(50959);var i=t(5341);const s={tabItem:"tabItem_YHvg"};var r=t(11527);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,o),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(50959),s=t(5341),r=t(18387),o=t(28903),a=t(15885),l=t(35927),d=t(38894),c=t(70148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,h]=x({queryString:t,groupId:s}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(20619);const m={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=t(11527);function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==i&&(d(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,s.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,j.Z)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},19573:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"}}]);