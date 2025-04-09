(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{52940:function(e,t,r){Promise.resolve().then(r.bind(r,25218)),Promise.resolve().then(r.bind(r,352)),Promise.resolve().then(r.bind(r,2491)),Promise.resolve().then(r.bind(r,85090)),Promise.resolve().then(r.bind(r,95022)),Promise.resolve().then(r.bind(r,44453))},85090:function(e,t,r){"use strict";r.d(t,{AuthGuard:function(){return u}});var n=r(57437),o=r(2265),i=r(16463),a=r(68165),s=r(85240),l=r(48727),c=r(68692);function u(e){let{children:t}=e,r=(0,i.useRouter)(),{user:u,error:d,isLoading:h}=(0,c.a)(),[v,x]=o.useState(!0),p=async()=>{if(!h){if(d){x(!1);return}if(!u){l.k.debug("[AuthGuard]: User is not logged in, redirecting to sign in"),r.replace(s.H.auth.signIn);return}x(!1)}};return(o.useEffect(()=>{p().catch(()=>{})},[u,d,h]),v)?null:d?(0,n.jsx)(a.Z,{color:"error",children:d}):(0,n.jsx)(o.Fragment,{children:t})}},80508:function(e,t,r){"use strict";r.d(t,{DynamicLogo:function(){return u},T:function(){return c}});var n=r(57437),o=r(2265),i=r(7999),a=r(98598),s=r(38017);function l(e){let{children:t,defer:r=!1,fallback:i=null}=e,[a,l]=o.useState(!1);return(0,s.Z)(()=>{r||l(!0)},[r]),o.useEffect(()=>{r&&l(!0)},[r]),(0,n.jsx)(o.Fragment,{children:a?t:i})}function c(e){let t,{color:r="dark",emblem:o,height:a=60,width:s=60}=e;return t=o?"light"===r?"/assets/logo-emblem.svg":"/assets/logo-emblem--dark.svg":"light"===r?"/assets/logo.svg":"/assets/logo--dark.svg",(0,n.jsx)(i.Z,{alt:"logo",component:"img",height:a,src:t,width:s})}function u(e){let{colorDark:t="light",colorLight:r="dark",height:o=60,width:s=60,...u}=e,{colorScheme:d}=(0,a.tv)();return(0,n.jsx)(l,{fallback:(0,n.jsx)(i.Z,{sx:{height:"".concat(o,"px"),width:"".concat(s,"px")}}),children:(0,n.jsx)(c,{color:"dark"===d?t:r,height:o,width:s,...u})})}},75920:function(e,t,r){"use strict";r.d(t,{t:function(){return o}});var n=r(85240);let o=[{key:"overview",title:"Overview",href:n.H.dashboard.overview,icon:"chart-pie"},{key:"customers",title:"Customers",href:n.H.dashboard.customers,icon:"users"},{key:"integrations",title:"Integrations",href:n.H.dashboard.integrations,icon:"plugs-connected"},{key:"settings",title:"Settings",href:n.H.dashboard.settings,icon:"gear-six"},{key:"account",title:"Account",href:n.H.dashboard.account,icon:"user"},{key:"error",title:"Error",href:n.H.errors.notFound,icon:"x-square"}]},95022:function(e,t,r){"use strict";r.d(t,{MainNav:function(){return T}});var n=r(57437),o=r(2265),i=r(5426),a=r(22508),s=r(7999),l=r(94614),c=r(88929),u=r(888),d=r(47860),h=r(48801),v=r(54252),x=r(89159),p=r(87138),m=r(16463),f=r(75519),g=r(14595),b=r(58438),j=r(83719),Z=r(6681),k=r(46846),N=r(85240),y=r(25569),I=r(80508),w=r(75920),S=r(61104);function C(e){let{open:t,onClose:r}=e,o=(0,m.usePathname)();return(0,n.jsxs)(b.ZP,{PaperProps:{sx:{"--MobileNav-background":"var(--mui-palette-neutral-950)","--MobileNav-color":"var(--mui-palette-common-white)","--NavItem-color":"var(--mui-palette-neutral-300)","--NavItem-hover-background":"rgba(255, 255, 255, 0.04)","--NavItem-active-background":"var(--mui-palette-primary-main)","--NavItem-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-disabled-color":"var(--mui-palette-neutral-500)","--NavItem-icon-color":"var(--mui-palette-neutral-400)","--NavItem-icon-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-icon-disabled-color":"var(--mui-palette-neutral-600)",bgcolor:"var(--MobileNav-background)",color:"var(--MobileNav-color)",display:"flex",flexDirection:"column",maxWidth:"100%",scrollbarWidth:"none",width:"var(--MobileNav-width)",zIndex:"var(--MobileNav-zIndex)","&::-webkit-scrollbar":{display:"none"}}},onClose:r,open:t,children:[(0,n.jsxs)(c.Z,{spacing:2,sx:{p:3},children:[(0,n.jsx)(s.Z,{component:p.default,href:N.H.home,sx:{display:"inline-flex"},children:(0,n.jsx)(I.T,{color:"light",height:32,width:122})}),(0,n.jsxs)(s.Z,{sx:{alignItems:"center",backgroundColor:"var(--mui-palette-neutral-950)",border:"1px solid var(--mui-palette-neutral-700)",borderRadius:"12px",cursor:"pointer",display:"flex",p:"4px 12px"},children:[(0,n.jsxs)(s.Z,{sx:{flex:"1 1 auto"},children:[(0,n.jsx)(j.Z,{color:"var(--mui-palette-neutral-400)",variant:"body2",children:"Workspace"}),(0,n.jsx)(j.Z,{color:"inherit",variant:"subtitle1",children:"Devias"})]}),(0,n.jsx)(k.K,{})]})]}),(0,n.jsx)(g.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}}),(0,n.jsx)(s.Z,{component:"nav",sx:{flex:"1 1 auto",p:"12px"},children:function(e){let{items:t=[],pathname:r}=e,o=t.reduce((e,t)=>{let{key:o,...i}=t;return e.push((0,n.jsx)(R,{pathname:r,...i},o)),e},[]);return(0,n.jsx)(c.Z,{component:"ul",spacing:1,sx:{listStyle:"none",m:0,p:0},children:o})}({pathname:o,items:w.t})}),(0,n.jsx)(g.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}}),(0,n.jsxs)(c.Z,{spacing:2,sx:{p:"12px"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(j.Z,{color:"var(--mui-palette-neutral-100)",variant:"subtitle2",children:"Need more features?"}),(0,n.jsx)(j.Z,{color:"var(--mui-palette-neutral-400)",variant:"body2",children:"Check out our Pro solution template."})]}),(0,n.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(s.Z,{component:"img",alt:"Pro version",src:"/assets/devias-kit-pro.png",sx:{height:"auto",width:"160px"}})}),(0,n.jsx)(f.Z,{component:"a",endIcon:(0,n.jsx)(Z.v,{fontSize:"var(--icon-fontSize-md)"}),fullWidth:!0,href:"https://material-kit-pro-react.devias.io/",sx:{mt:2},target:"_blank",variant:"contained",children:"Pro version"})]})]})}function R(e){let{disabled:t,external:r,href:o,icon:i,matcher:a,pathname:l,title:c}=e,u=(0,y.N)({disabled:t,external:r,href:o,matcher:a,pathname:l}),d=i?S.s[i]:null;return(0,n.jsx)("li",{children:(0,n.jsxs)(s.Z,{...o?{component:r?"a":p.default,href:o,target:r?"_blank":void 0,rel:r?"noreferrer":void 0}:{role:"button"},sx:{alignItems:"center",borderRadius:1,color:"var(--NavItem-color)",cursor:"pointer",display:"flex",flex:"0 0 auto",gap:1,p:"6px 16px",position:"relative",textDecoration:"none",whiteSpace:"nowrap",...t&&{bgcolor:"var(--NavItem-disabled-background)",color:"var(--NavItem-disabled-color)",cursor:"not-allowed"},...u&&{bgcolor:"var(--NavItem-active-background)",color:"var(--NavItem-active-color)"}},children:[(0,n.jsx)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"0 0 auto"},children:d?(0,n.jsx)(d,{fill:u?"var(--NavItem-icon-active-color)":"var(--NavItem-icon-color)",fontSize:"var(--icon-fontSize-md)",weight:u?"fill":void 0}):null}),(0,n.jsx)(s.Z,{sx:{flex:"1 1 auto"},children:(0,n.jsx)(j.Z,{component:"span",sx:{color:"inherit",fontSize:"0.875rem",fontWeight:500,lineHeight:"28px"},children:c})})]})})}var P=r(86917),E=r(11656),L=r(42748),U=r(18502),W=r(47301),z=r(12591),A=r(48813),_=r(93814),H=r(48727),O=r(68692);function D(e){let{anchorEl:t,onClose:r,open:i}=e,{checkSession:a}=(0,O.a)(),l=(0,m.useRouter)(),c=o.useCallback(async()=>{try{let{error:e}=await _.U.signOut();if(e){H.k.error("Sign out error",e);return}await (null==a?void 0:a()),l.refresh()}catch(e){H.k.error("Sign out error",e)}},[a,l]);return(0,n.jsxs)(U.ZP,{anchorEl:t,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:r,open:i,slotProps:{paper:{sx:{width:"240px"}}},children:[(0,n.jsxs)(s.Z,{sx:{p:"16px 20px "},children:[(0,n.jsx)(j.Z,{variant:"subtitle1",children:"Sofia Rivers"}),(0,n.jsx)(j.Z,{color:"text.secondary",variant:"body2",children:"sofia.rivers@devias.io"})]}),(0,n.jsx)(g.Z,{}),(0,n.jsxs)(L.Z,{disablePadding:!0,sx:{p:"8px","& .MuiMenuItem-root":{borderRadius:1}},children:[(0,n.jsxs)(E.Z,{component:p.default,href:N.H.dashboard.settings,onClick:r,children:[(0,n.jsx)(P.Z,{children:(0,n.jsx)(W.H,{fontSize:"var(--icon-fontSize-md)"})}),"Settings"]}),(0,n.jsxs)(E.Z,{component:p.default,href:N.H.dashboard.account,onClick:r,children:[(0,n.jsx)(P.Z,{children:(0,n.jsx)(A.n,{fontSize:"var(--icon-fontSize-md)"})}),"Profile"]}),(0,n.jsxs)(E.Z,{onClick:c,children:[(0,n.jsx)(P.Z,{children:(0,n.jsx)(z.l,{fontSize:"var(--icon-fontSize-md)"})}),"Sign out"]})]})]})}function T(){let[e,t]=o.useState(!1),r=function(){let e=o.useRef(null),[t,r]=o.useState(!1),n=o.useCallback(()=>{r(!0)},[]);return{anchorRef:e,handleClose:o.useCallback(()=>{r(!1)},[]),handleOpen:n,handleToggle:o.useCallback(()=>{r(e=>!e)},[]),open:t}}();return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(s.Z,{component:"header",sx:{borderBottom:"1px solid var(--mui-palette-divider)",backgroundColor:"var(--mui-palette-background-paper)",position:"sticky",top:0,zIndex:"var(--mui-zIndex-appBar)"},children:(0,n.jsxs)(c.Z,{direction:"row",spacing:2,sx:{alignItems:"center",justifyContent:"space-between",minHeight:"64px",px:2},children:[(0,n.jsxs)(c.Z,{sx:{alignItems:"center"},direction:"row",spacing:2,children:[(0,n.jsx)(l.Z,{onClick:()=>{t(!0)},sx:{display:{lg:"none"}},children:(0,n.jsx)(h.a,{})}),(0,n.jsx)(u.Z,{title:"Search",children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(v.Y,{})})})]}),(0,n.jsxs)(c.Z,{sx:{alignItems:"center"},direction:"row",spacing:2,children:[(0,n.jsx)(u.Z,{title:"Contacts",children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(x.Q,{})})}),(0,n.jsx)(u.Z,{title:"Notifications",children:(0,n.jsx)(a.Z,{badgeContent:4,color:"success",variant:"dot",children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.U,{})})})}),(0,n.jsx)(i.Z,{onClick:r.handleOpen,ref:r.anchorRef,src:"/assets/avatar.png",sx:{cursor:"pointer"}})]})]})}),(0,n.jsx)(D,{anchorEl:r.anchorRef.current,onClose:r.handleClose,open:r.open}),(0,n.jsx)(C,{onClose:()=>{t(!1)},open:e})]})}},61104:function(e,t,r){"use strict";r.d(t,{s:function(){return c}});var n=r(68857),o=r(47301),i=r(23939),a=r(48813),s=r(89159),l=r(11097);let c={"chart-pie":n.T,"gear-six":o.H,"plugs-connected":i.F,"x-square":l._,user:a.n,users:s.Q}},44453:function(e,t,r){"use strict";r.d(t,{SideNav:function(){return g}});var n=r(57437);r(2265);var o=r(87138),i=r(16463),a=r(7999),s=r(75519),l=r(14595),c=r(88929),u=r(83719),d=r(6681),h=r(46846),v=r(85240),x=r(25569),p=r(80508),m=r(75920),f=r(61104);function g(){let e=(0,i.usePathname)();return(0,n.jsxs)(a.Z,{sx:{"--SideNav-background":"var(--mui-palette-neutral-950)","--SideNav-color":"var(--mui-palette-common-white)","--NavItem-color":"var(--mui-palette-neutral-300)","--NavItem-hover-background":"rgba(255, 255, 255, 0.04)","--NavItem-active-background":"var(--mui-palette-primary-main)","--NavItem-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-disabled-color":"var(--mui-palette-neutral-500)","--NavItem-icon-color":"var(--mui-palette-neutral-400)","--NavItem-icon-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-icon-disabled-color":"var(--mui-palette-neutral-600)",bgcolor:"var(--SideNav-background)",color:"var(--SideNav-color)",display:{xs:"none",lg:"flex"},flexDirection:"column",height:"100%",left:0,maxWidth:"100%",position:"fixed",scrollbarWidth:"none",top:0,width:"var(--SideNav-width)",zIndex:"var(--SideNav-zIndex)","&::-webkit-scrollbar":{display:"none"}},children:[(0,n.jsxs)(c.Z,{spacing:2,sx:{p:3},children:[(0,n.jsx)(a.Z,{component:o.default,href:v.H.home,sx:{display:"inline-flex"},children:(0,n.jsx)(p.T,{color:"light",height:32,width:122})}),(0,n.jsxs)(a.Z,{sx:{alignItems:"center",backgroundColor:"var(--mui-palette-neutral-950)",border:"1px solid var(--mui-palette-neutral-700)",borderRadius:"12px",cursor:"pointer",display:"flex",p:"4px 12px"},children:[(0,n.jsxs)(a.Z,{sx:{flex:"1 1 auto"},children:[(0,n.jsx)(u.Z,{color:"var(--mui-palette-neutral-400)",variant:"body2",children:"Workspace"}),(0,n.jsx)(u.Z,{color:"inherit",variant:"subtitle1",children:"Devias"})]}),(0,n.jsx)(h.K,{})]})]}),(0,n.jsx)(l.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}}),(0,n.jsx)(a.Z,{component:"nav",sx:{flex:"1 1 auto",p:"12px"},children:function(e){let{items:t=[],pathname:r}=e,o=t.reduce((e,t)=>{let{key:o,...i}=t;return e.push((0,n.jsx)(b,{pathname:r,...i},o)),e},[]);return(0,n.jsx)(c.Z,{component:"ul",spacing:1,sx:{listStyle:"none",m:0,p:0},children:o})}({pathname:e,items:m.t})}),(0,n.jsx)(l.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}}),(0,n.jsxs)(c.Z,{spacing:2,sx:{p:"12px"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(u.Z,{color:"var(--mui-palette-neutral-100)",variant:"subtitle2",children:"Need more features?"}),(0,n.jsx)(u.Z,{color:"var(--mui-palette-neutral-400)",variant:"body2",children:"Check out our Pro solution template."})]}),(0,n.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(a.Z,{component:"img",alt:"Pro version",src:"/assets/devias-kit-pro.png",sx:{height:"auto",width:"160px"}})}),(0,n.jsx)(s.Z,{component:"a",endIcon:(0,n.jsx)(d.v,{fontSize:"var(--icon-fontSize-md)"}),fullWidth:!0,href:"https://material-kit-pro-react.devias.io/",sx:{mt:2},target:"_blank",variant:"contained",children:"Pro version"})]})]})}function b(e){let{disabled:t,external:r,href:i,icon:s,matcher:l,pathname:c,title:d}=e,h=(0,x.N)({disabled:t,external:r,href:i,matcher:l,pathname:c}),v=s?f.s[s]:null;return(0,n.jsx)("li",{children:(0,n.jsxs)(a.Z,{...i?{component:r?"a":o.default,href:i,target:r?"_blank":void 0,rel:r?"noreferrer":void 0}:{role:"button"},sx:{alignItems:"center",borderRadius:1,color:"var(--NavItem-color)",cursor:"pointer",display:"flex",flex:"0 0 auto",gap:1,p:"6px 16px",position:"relative",textDecoration:"none",whiteSpace:"nowrap",...t&&{bgcolor:"var(--NavItem-disabled-background)",color:"var(--NavItem-disabled-color)",cursor:"not-allowed"},...h&&{bgcolor:"var(--NavItem-active-background)",color:"var(--NavItem-active-color)"}},children:[(0,n.jsx)(a.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"0 0 auto"},children:v?(0,n.jsx)(v,{fill:h?"var(--NavItem-icon-active-color)":"var(--NavItem-icon-color)",fontSize:"var(--icon-fontSize-md)",weight:h?"fill":void 0}):null}),(0,n.jsx)(a.Z,{sx:{flex:"1 1 auto"},children:(0,n.jsx)(u.Z,{component:"span",sx:{color:"inherit",fontSize:"0.875rem",fontWeight:500,lineHeight:"28px"},children:d})})]})})}},22298:function(e,t,r){"use strict";r.d(t,{S:function(){return s},UserProvider:function(){return l}});var n=r(57437),o=r(2265),i=r(93814),a=r(48727);let s=o.createContext(void 0);function l(e){let{children:t}=e,[r,l]=o.useState({user:null,error:null,isLoading:!0}),c=o.useCallback(async()=>{try{let{data:e,error:t}=await i.U.getUser();if(t){a.k.error(t),l(e=>({...e,user:null,error:"Something went wrong",isLoading:!1}));return}l(t=>({...t,user:null!=e?e:null,error:null,isLoading:!1}))}catch(e){a.k.error(e),l(e=>({...e,user:null,error:"Something went wrong",isLoading:!1}))}},[]);return o.useEffect(()=>{c().catch(e=>{a.k.error(e)})},[]),(0,n.jsx)(s.Provider,{value:{...r,checkSession:c},children:t})}s.Consumer},68692:function(e,t,r){"use strict";r.d(t,{a:function(){return i}});var n=r(2265),o=r(22298);function i(){let e=n.useContext(o.S);if(!e)throw Error("useUser must be used within a UserProvider");return e}},93814:function(e,t,r){"use strict";function n(){let e=new Uint8Array(12);return window.crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,"0")).join("")}r.d(t,{U:function(){return a}});let o={id:"USR-000",avatar:"/assets/avatar.png",firstName:"Sofia",lastName:"Rivers",email:"sofia@devias.io"};class i{async signUp(e){let t=n();return localStorage.setItem("custom-auth-token",t),{}}async signInWithOAuth(e){return{error:"Social authentication not implemented"}}async signInWithPassword(e){let{email:t,password:r}=e;if("sofia@devias.io"!==t||"Secret1"!==r)return{error:"Invalid credentials"};let o=n();return localStorage.setItem("custom-auth-token",o),{}}async resetPassword(e){return{error:"Password reset not implemented"}}async updatePassword(e){return{error:"Update reset not implemented"}}async getUser(){return localStorage.getItem("custom-auth-token")?{data:o}:{data:null}}async signOut(){return localStorage.removeItem("custom-auth-token"),{}}}let a=new i},48727:function(e,t,r){"use strict";let n;r.d(t,{k:function(){return h}});var o,i,a,s=r(20357);let l={ERROR:"ERROR",WARN:"WARN",DEBUG:"DEBUG",ALL:"ALL"},c={NONE:0,ERROR:1,WARN:2,DEBUG:3,ALL:4};class u{canWrite(e){return this.levelNumber>=c[e]}write(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let o=this.prefix;this.showLevel&&(o="- ".concat(e," ").concat(o)),e===l.ERROR?console.error(o,...r):console.log(o,...r)}constructor({prefix:e="",level:t=l.ALL,showLevel:r=!0}){var n=this;this.debug=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.canWrite(l.DEBUG)&&n.write(l.DEBUG,...t)},this.warn=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.canWrite(l.WARN)&&n.write(l.WARN,...t)},this.error=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.canWrite(l.ERROR)&&n.write(l.ERROR,...t)},this.prefix=e,this.level=t,this.levelNumber=c[this.level],this.showLevel=r}}var d=r(20357);let h=function(){let{prefix:e,level:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new u({prefix:e,level:t})}({level:{site:{name:"Devias Kit",description:"",themeColor:"#090a0b",url:n=(n=(n=null!==(i=null!==(o=s.env.NEXT_PUBLIC_SITE_URL)&&void 0!==o?o:s.env.NEXT_PUBLIC_VERCEL_URL)&&void 0!==i?i:"http://localhost:3000/").includes("http")?n:"https://".concat(n)).endsWith("/")?n:"".concat(n,"/")},logLevel:null!==(a=d.env.NEXT_PUBLIC_LOG_LEVEL)&&void 0!==a?a:l.ALL}.logLevel})},25569:function(e,t,r){"use strict";function n(e){let{disabled:t,external:r,href:n,matcher:o,pathname:i}=e;return!t&&!!n&&!r&&(o?"startsWith"===o.type?i.startsWith(o.href):"equals"===o.type&&i===o.href:i===n)}r.d(t,{N:function(){return n}})},85240:function(e,t,r){"use strict";r.d(t,{H:function(){return n}});let n={home:"/",auth:{signIn:"/auth/sign-in",signUp:"/auth/sign-up",resetPassword:"/auth/reset-password"},dashboard:{overview:"/dashboard",account:"/dashboard/account",customers:"/dashboard/customers",integrations:"/dashboard/integrations",settings:"/dashboard/settings"},errors:{notFound:"/errors/not-found"}}}},function(e){e.O(0,[64,805,19,87,274,445,165,856,738,971,23,744],function(){return e(e.s=52940)}),_N_E=e.O()}]);