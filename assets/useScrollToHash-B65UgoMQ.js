import{r as c}from"./jsx-runtime-BfF-YriY.js";import{h as i,t as m}from"./components-BwDIebNU.js";import{f as u}from"./image-CpcuhEfe.js";function v(){const t=c.useRef(),e=i(),s=m(),a=u();return c.useCallback((l,o)=>{const n=l.split("#")[1];document.getElementById(n).scrollIntoView({behavior:a?"auto":"smooth"});const r=()=>{clearTimeout(t.current),t.current=setTimeout(()=>{window.removeEventListener("scroll",r),window.location.pathname===e.pathname&&(o==null||o(),s(`${e.pathname}#${n}`,{scroll:!1}))},50)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r),clearTimeout(t.current)}},[s,a,e.pathname])}export{v as u};
