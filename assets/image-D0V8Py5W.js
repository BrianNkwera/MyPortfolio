import{r as o,j as p}from"./jsx-runtime-BfF-YriY.js";import{p as d,b as _,m as D,c as W,n as X}from"./style-DceWDdse.js";import{L as fe}from"./components-Dn-xNZAJ.js";const de="/MyPortfolio/assets/gotham-bold-italic-C_msAlmW.woff2",me="/MyPortfolio/assets/gotham-bold-D1kvQ7KV.woff2",pe="/MyPortfolio/assets/gotham-book-italic-Bm2IEtSK.woff2",he="/MyPortfolio/assets/gotham-book-Bnaws0Ef.woff2",xe="/MyPortfolio/assets/gotham-medium-italic-Dok430ou.woff2",ge="/MyPortfolio/assets/gotham-medium-0VT3RO8I.woff2",ye="/MyPortfolio/assets/ipa-gothic-DimHCOud.woff2",Se={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:d(140),fontSizeH1:d(100),fontSizeH2:d(58),fontSizeH3:d(38),fontSizeH4:d(28),fontSizeH5:d(24),fontSizeBodyXL:d(22),fontSizeBodyL:d(20),fontSizeBodyM:d(18),fontSizeBodyS:d(16),fontSizeBodyXS:d(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},we={fontSizeH0:d(120),fontSizeH1:d(80)},be={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:d(100),fontSizeH1:d(70),fontSizeH2:d(50),fontSizeH3:d(36),fontSizeH4:d(26),fontSizeH5:d(22)},ve={fontSizeH0:d(80),fontSizeH1:d(60),fontSizeH2:d(48),fontSizeH3:d(32),fontSizeH4:d(24),fontSizeH5:d(20)},ze={spaceOuter:"24px",fontSizeH0:d(56),fontSizeH1:d(40),fontSizeH2:d(34),fontSizeH3:d(28),fontSizeH4:d(22),fontSizeH5:d(18),fontSizeBodyL:d(17),fontSizeBodyM:d(16),fontSizeBodyS:d(14)},ke={spaceOuter:"16px",fontSizeH0:d(42),fontSizeH1:d(38),fontSizeH2:d(28),fontSizeH3:d(24),fontSizeH4:d(20)},Me={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:" #f4816d",accent:" #f4816d",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},Re={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:" #f4816d",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},Y={base:Se,desktop:we,laptop:be,tablet:ve,mobile:ze,mobileS:ke},q={dark:Me,light:Re},Z=o.createContext({}),jt=({theme:e="dark",children:t,className:n,as:s="div",toggleTheme:c,...r})=>{const a=ee(),i=!a.theme;return p.jsxs(Z.Provider,{value:{theme:e,toggleTheme:c||a.toggleTheme},children:[i&&t,!i&&p.jsx(s,{className:_(n),"data-theme":e,...r,children:t})]})};function ee(){return o.useContext(Z)}function H(e){return e.replace(/\s\s+/g," ")}function G(e){return H(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function _e(){return H(Object.keys(D).map(e=>`
        @media (max-width: ${D[e]}px) {
          :root {
            ${G(Y[e])}
          }
        }
      `).join(`
`))}const Pe=H(`
  @layer theme, base, components, layout;
`),je=H(`
  :root {
    ${G(Y.base)}
  }

  ${_e()}

  [data-theme='dark'] {
    ${G(q.dark)}
  }

  [data-theme='light'] {
    ${G(q.light)}
  }
`),Ce=H(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${he}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${pe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${ge}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${xe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${me}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${de}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${ye}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),Ct=H(`
  ${Pe}

  @layer theme {
    ${je}
    ${Ce}
  }
`),He="_icon_nm21j_3",Le={icon:He},$e="/MyPortfolio/assets/icons-BpnV3eny.svg",U=o.forwardRef(({icon:e,className:t,size:n,...s},c)=>p.jsx("svg",{"aria-hidden":!0,ref:c,className:_(Le.icon,t),width:n||24,height:n||24,...s,children:p.jsx("use",{href:`${$e}#${e}`})})),Ie="_text_w1gy9_3",Te={text:Ie},Ee=({children:e,size:t="m",as:n="span",align:s="auto",weight:c="auto",secondary:r,className:a,...i})=>p.jsx(n,{className:_(Te.text,a),"data-align":s,"data-size":t,"data-weight":c,"data-secondary":r,...i,children:e}),te=o.createContext(null),ne=typeof document<"u",oe=ne?o.useLayoutEffect:o.useEffect;class Q{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Be(e){let t=new Q,n=new Q,s=0,c=!1,r=!1;const a=new WeakSet,i={schedule:(f,m=!1,u=!1)=>{const l=u&&c,h=l?t:n;return m&&a.add(f),h.add(f)&&l&&c&&(s=t.order.length),f},cancel:f=>{n.remove(f),a.delete(f)},process:f=>{if(c){r=!0;return}if(c=!0,[t,n]=[n,t],n.clear(),s=t.order.length,s)for(let m=0;m<s;m++){const u=t.order[m];a.has(u)&&(i.schedule(u),e()),u(f)}c=!1,r&&(r=!1,i.process(f))}};return i}const N=["prepare","read","update","preRender","render","postRender"],Fe=40;function Ne(e,t){let n=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},r=N.reduce((l,h)=>(l[h]=Be(()=>n=!0),l),{}),a=l=>{r[l].process(c)},i=()=>{const l=performance.now();n=!1,c.delta=s?1e3/60:Math.max(Math.min(l-c.timestamp,Fe),1),c.timestamp=l,c.isProcessing=!0,N.forEach(a),c.isProcessing=!1,n&&t&&(s=!1,e(i))},f=()=>{n=!0,s=!0,c.isProcessing||e(i)};return{schedule:N.reduce((l,h)=>{const y=r[h];return l[h]=(S,w=!1,v=!1)=>(n||f(),y.schedule(S,w,v)),l},{}),cancel:l=>N.forEach(h=>r[h].cancel(l)),state:c,steps:r}}const Ge=o.createContext({});function We(e){const t=o.useRef(null);return t.current===null&&(t.current=e()),t.current}const Oe=e=>e,{schedule:Ve,cancel:Ht,state:Lt,steps:$t}=Ne(typeof requestAnimationFrame<"u"?requestAnimationFrame:Oe,!0);function Xe(){const e=o.useContext(te);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:s}=e,c=o.useId();return o.useEffect(()=>s(c),[]),!t&&n?[!1,()=>n&&n(c)]:[!0]}const K={current:null},se={current:!1};function Ue(){if(se.current=!0,!!ne)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>K.current=e.matches;e.addListener(t),t()}else K.current=!1}function re(){const e=o.useRef(!1);return oe(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ke(){const e=re(),[t,n]=o.useState(0),s=o.useCallback(()=>{e.current&&n(t+1)},[t]);return[o.useCallback(()=>Ve.postRender(s),[s]),t]}class Ae extends o.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function De({children:e,isPresent:t}){const n=o.useId(),s=o.useRef(null),c=o.useRef({width:0,height:0,top:0,left:0});return o.useInsertionEffect(()=>{const{width:r,height:a,top:i,left:f}=c.current;if(t||!s.current||!r||!a)return;s.current.dataset.motionPopId=n;const m=document.createElement("style");return document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),o.createElement(Ae,{isPresent:t,childRef:s,sizeRef:c},o.cloneElement(e,{ref:s}))}const O=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:c,presenceAffectsLayout:r,mode:a})=>{const i=We(qe),f=o.useId(),m=o.useMemo(()=>({id:f,initial:t,isPresent:n,custom:c,onExitComplete:u=>{i.set(u,!0);for(const l of i.values())if(!l)return;s&&s()},register:u=>(i.set(u,!1),()=>i.delete(u))}),r?void 0:[n]);return o.useMemo(()=>{i.forEach((u,l)=>i.set(l,!1))},[n]),o.useEffect(()=>{!n&&!i.size&&s&&s()},[n]),a==="popLayout"&&(e=o.createElement(De,{isPresent:n},e)),o.createElement(te.Provider,{value:m},e)};function qe(){return new Map}function Qe(e){return o.useEffect(()=>()=>e(),[])}const j=e=>e.key||"";function Je(e,t){e.forEach(n=>{const s=j(n);t.set(s,n)})}function Ye(e){const t=[];return o.Children.forEach(e,n=>{o.isValidElement(n)&&t.push(n)}),t}const Ze=({children:e,custom:t,initial:n=!0,onExitComplete:s,exitBeforeEnter:c,presenceAffectsLayout:r=!0,mode:a="sync"})=>{const i=o.useContext(Ge).forceRender||Ke()[0],f=re(),m=Ye(e);let u=m;const l=o.useRef(new Map).current,h=o.useRef(u),y=o.useRef(new Map).current,S=o.useRef(!0);if(oe(()=>{S.current=!1,Je(m,y),h.current=u}),Qe(()=>{S.current=!0,y.clear(),l.clear()}),S.current)return o.createElement(o.Fragment,null,u.map(x=>o.createElement(O,{key:j(x),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:r,mode:a},x)));u=[...u];const w=h.current.map(j),v=m.map(j),z=w.length;for(let x=0;x<z;x++){const g=w[x];v.indexOf(g)===-1&&!l.has(g)&&l.set(g,void 0)}return a==="wait"&&l.size&&(u=[]),l.forEach((x,g)=>{if(v.indexOf(g)!==-1)return;const k=y.get(g);if(!k)return;const M=w.indexOf(g);let b=x;if(!b){const T=()=>{l.delete(g);const L=Array.from(y.keys()).filter(P=>!v.includes(P));if(L.forEach(P=>y.delete(P)),h.current=m.filter(P=>{const E=j(P);return E===g||L.includes(E)}),!l.size){if(f.current===!1)return;i(),s&&s()}};b=o.createElement(O,{key:j(k),isPresent:!1,onExitComplete:T,custom:t,presenceAffectsLayout:r,mode:a},k),l.set(g,b)}u.splice(M,0,b)}),u=u.map(x=>{const g=x.key;return l.has(g)?x:o.createElement(O,{key:j(x),isPresent:!0,presenceAffectsLayout:r,mode:a},x)}),o.createElement(o.Fragment,null,l.size?u:u.map(x=>o.cloneElement(x)))};function ae(){!se.current&&Ue();const[e]=o.useState(K.current);return e}const et="_loader_11zpc_3",tt="_text_11zpc_33",nt="_span_11zpc_85",ot="_loaderSpan_11zpc_1",V={loader:et,text:tt,span:nt,loaderSpan:ot},st=o.forwardRef(({className:e,style:t,width:n=32,height:s=4,text:c="Loading...",center:r,...a},i)=>ae()?p.jsx(Ee,{className:_(V.text,e),weight:"medium",...a,children:c}):p.jsx("div",{ref:i,className:_(V.loader,e),"data-center":r,style:W({width:n,height:s},t),...a,children:p.jsx("div",{className:V.span})})),rt=({children:e,in:t,unmount:n,initial:s=!0,...c})=>{const r=o.useRef(),a=o.useRef();return o.useEffect(()=>{clearTimeout(t?a.current:r.current)},[t]),p.jsx(Ze,{children:(t||!n)&&p.jsx(at,{enterTimeout:r,exitTimeout:a,in:t,initial:s,...c,children:e})})},at=({children:e,timeout:t=0,enterTimeout:n,exitTimeout:s,onEnter:c,onEntered:r,onExit:a,onExited:i,initial:f,nodeRef:m,in:u})=>{const[l,h]=o.useState(f?"exited":"entered"),[y,S]=Xe(),[w,v]=o.useState(!f),z=typeof t=="object",x=o.useRef(null),g=m||x,k=w&&u?y:!1;return o.useEffect(()=>{var b;if(w||!u)return;const M=z?t.enter:t;clearTimeout(n.current),clearTimeout(s.current),v(!0),h("entering"),c==null||c(),(b=g.current)==null||b.offsetHeight,n.current=setTimeout(()=>{h("entered"),r==null||r()},M)},[c,r,t,l,u]),o.useEffect(()=>{var b;if(y&&u)return;const M=z?t.exit:t;clearTimeout(n.current),clearTimeout(s.current),h("exiting"),a==null||a(),(b=g.current)==null||b.offsetHeight,s.current=setTimeout(()=>{h("exited"),S==null||S(),i==null||i()},M)},[y,a,S,t,i,u]),e({visible:k,status:l,nodeRef:g})},ct="_button_4jwwg_3",it="_text_4jwwg_263",lt="_loader_4jwwg_289",ut="_icon_4jwwg_315",I={button:ct,text:it,loader:lt,icon:ut};function ce(e){return e==null?void 0:e.includes("://")}const ft=o.forwardRef(({href:e,...t},n)=>ce(e)||!e?p.jsx(J,{href:e,ref:n,...t}):p.jsx(J,{unstable_viewTransition:!0,as:fe,prefetch:"intent",to:e,ref:n,...t})),J=o.forwardRef(({className:e,as:t,secondary:n,loading:s,loadingText:c="loading",icon:r,iconEnd:a,iconHoverShift:i,iconOnly:f,children:m,rel:u,target:l,href:h,disabled:y,...S},w)=>{const v=ce(h),x=t||(h?"a":"button");return p.jsxs(x,{className:_(I.button,e),"data-loading":s,"data-icon-only":f,"data-secondary":n,"data-icon":r,href:h,rel:u||v?"noopener noreferrer":void 0,target:l||v?"_blank":void 0,disabled:y,ref:w,...S,children:[!!r&&p.jsx(U,{className:I.icon,"data-start":!f,"data-shift":i,icon:r}),!!m&&p.jsx("span",{className:I.text,children:m}),!!a&&p.jsx(U,{className:I.icon,"data-end":!f,"data-shift":i,icon:a}),p.jsx(rt,{unmount:!0,in:s,children:({visible:g,nodeRef:k})=>p.jsx(st,{ref:k,className:I.loader,size:32,text:c,"data-visible":g})})]})}),dt="_heading_8oupr_3",mt={heading:dt},It=({children:e,level:t=1,as:n,align:s="auto",weight:c="medium",className:r,...a})=>{const i=Math.min(Math.max(t,0),5),f=n||`h${Math.max(i,1)}`;return p.jsx(o.Fragment,{children:p.jsx(f,{className:_(mt.heading,r),"data-align":s,"data-weight":c,"data-level":i,...a,children:e})})};function pt(){const[e,t]=o.useState(!1);return o.useEffect(()=>{t(!0)},[]),e}function ht(e,t,n={},s=!0){const[c,r]=o.useState(!1),[a,i]=o.useState(!1);return o.useEffect(()=>{if(!(e!=null&&e.current))return;const f=new IntersectionObserver(([m])=>{const{isIntersecting:u,target:l}=m;r(u),u&&t&&(f.unobserve(l),i(!0))},n);return!a&&s&&f.observe(e.current),()=>f.disconnect()},[e,t,n,a,s]),c}async function xt({src:e,srcSet:t,sizes:n}){return new Promise((s,c)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let r=new Image;e&&(r.src=e),t&&(r.srcset=t),n&&(r.sizes=n);const a=()=>{r.removeEventListener("load",a);const i=r.currentSrc;r=null,s(i)};r.addEventListener("load",a)}catch(r){c(`Error loading ${t}: ${r}`)}})}async function gt(e=1,t=1){return new Promise(n=>{const s=document.createElement("canvas"),c=s.getContext("2d");s.width=e,s.height=t,c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,e,t),s.toBlob(async r=>{if(!r)throw new Error("Video thumbnail failed to load");const a=URL.createObjectURL(r);s.remove(),n(a)})})}async function yt({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async a=>{const[i,f]=a.split(" "),m=Number(f.replace("w","")),u=await gt(m);return{src:i,image:u,width:f}})),s=n.map(({image:a,width:i})=>`${a} ${i}`).join(", "),c=await xt({srcSet:s,sizes:t});return n.find(a=>a.image===c).src}const St="_image_1yz75_3",wt="_container_1yz75_83",bt="_elementWrapper_1yz75_97",vt="_placeholder_1yz75_141",zt="_element_1yz75_97",kt="_button_1yz75_207",C={image:St,container:wt,elementWrapper:bt,placeholder:vt,element:zt,button:kt},Tt=({className:e,style:t,reveal:n,delay:s=0,raised:c,src:r,srcSet:a,placeholder:i,...f})=>{const[m,u]=o.useState(!1),{theme:l}=ee(),h=o.useRef(),y=r||a.split(" ")[0],S=ht(h,!ie(y)),w=o.useCallback(()=>{u(!0)},[]);return p.jsx("div",{className:_(C.image,e),"data-visible":S||m,"data-reveal":n,"data-raised":c,"data-theme":l,style:W({delay:X(s)},t),ref:h,children:p.jsx(Mt,{delay:s,onLoad:w,loaded:m,inViewport:S,reveal:n,src:y,srcSet:a,placeholder:i,...f})})},Mt=({onLoad:e,loaded:t,inViewport:n,srcSet:s,placeholder:c,delay:r,src:a,alt:i,play:f=!0,restartOnPause:m,reveal:u,sizes:l,width:h,height:y,noPauseButton:S,cover:w,...v})=>{const z=ae(),[x,g]=o.useState(!0),[k,M]=o.useState(!z),[b,T]=o.useState(),[L,P]=o.useState(!1),E=o.useRef(),R=o.useRef(),$=ie(a),A=n,le=pt();o.useEffect(()=>{$&&s?(async()=>{const F=await yt({srcSet:s,sizes:l});T(F)})():$&&T(a)},[$,l,a,s]),o.useEffect(()=>{if(!R.current||!b)return;const B=()=>{M(!0),R.current.play()},F=()=>{M(!1),R.current.pause()};f||(F(),m&&(R.current.currentTime=0)),!L&&(n?n&&!z&&f&&B():F())},[n,f,z,m,L,b]);const ue=B=>{B.preventDefault(),P(!0),R.current.paused?(M(!0),R.current.play()):(M(!1),R.current.pause())};return p.jsxs("div",{className:C.elementWrapper,"data-reveal":u,"data-visible":n||t,style:W({delay:X(r+1e3)}),children:[$&&le&&p.jsxs(o.Fragment,{children:[p.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:C.element,"data-loaded":t,"data-cover":w,autoPlay:!z,onLoadStart:e,src:b,"aria-label":i,ref:R,...v}),!S&&p.jsxs(ft,{className:C.button,onClick:ue,children:[p.jsx(U,{icon:k?"pause":"play"}),k?"Pause":"Play"]})]}),!$&&p.jsx("img",{className:C.element,"data-loaded":t,"data-cover":w,onLoad:e,decoding:"async",src:A?a:void 0,srcSet:A?s:void 0,width:h,height:y,alt:i,sizes:l,...v}),x&&p.jsx("img",{"aria-hidden":!0,className:C.placeholder,"data-loaded":t,"data-cover":w,style:W({delay:X(r)}),ref:E,src:c,width:h,height:y,onTransitionEnd:()=>g(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function ie(e){return typeof e=="string"&&e.includes(".mp4")}export{ft as B,ge as G,It as H,U as I,st as L,rt as T,Ct as a,jt as b,he as c,Tt as d,Ee as e,ae as f,ht as g,We as h,Lt as i,oe as j,Ve as k,Ht as l,ne as m,Oe as n,se as o,Ue as p,K as q,yt as r,Y as t,ee as u};
