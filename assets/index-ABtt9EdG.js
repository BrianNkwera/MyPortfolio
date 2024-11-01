import{r as e,j as X}from"./jsx-runtime-BfF-YriY.js";import{g as ge,f as oe,r as he}from"./image-D0V8Py5W.js";import{W as ye,e as ie,f as xe,S as De,G as J,y as we,D as $,Y as q,P as Ue,Z as K,M as O,O as Me,_ as Se,d as Q,r as Re,c as be,a as Te,t as ee,m as Ce,C as te,V as B,i as Pe}from"./three-D6gM9OOn.js";import{b as Le,c as Ae,n as ze}from"./style-DceWDdse.js";import{M as re}from"./route-NfyOMTDk.js";import{t as ke}from"./throttle-BgiUmwhn.js";import{u as ne}from"./use-spring-DxnKqeE8.js";import{a as Y}from"./animate-UkGcs-eM.js";import"./components-Dn-xNZAJ.js";import"./slice-app-placeholder-BfRsQMSa.js";import"./meta-zQDykPqv.js";import"./decoder-text-CjYyt_L5.js";import"./visually-hidden-DhJ0Bs0z.js";import"./section-C95ZJWsf.js";import"./useScrollToHash-TdLhN9_v.js";import"./useWindowSize-CCgmKmhO.js";import"./index-Wip2jntP.js";const _e={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},Ee={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},je="_model_9lrnh_3",Be="_canvas_9lrnh_21",ae={model:je,canvas:Be},se={Frame:"Frame",Logo:"Logo",Screen:"Screen"},ce={stiffness:40,damping:20,mass:1.4,restSpeed:.001},rt=({models:L,show:w=!0,showDelay:A=0,cameraPosition:g={x:0,y:0,z:8},style:z,className:k,onLoad:G,alt:U,..._})=>{const[M,F]=e.useState(!1),d=e.useRef(),l=e.useRef(),o=e.useRef(),h=e.useRef(),r=e.useRef(),t=e.useRef(),v=e.useRef(),f=e.useRef(),p=e.useRef(),y=e.useRef(),c=e.useRef(),u=e.useRef(),n=e.useRef(),m=e.useRef(),x=e.useRef(),a=e.useRef(),E=e.useRef(),N=ge(d,!1,{threshold:.2}),Z=oe(),S=ne(0,ce),R=ne(0,ce);e.useEffect(()=>{const{clientWidth:s,clientHeight:i}=d.current;t.current=new ye({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(s,i),t.current.outputColorSpace=ie,o.current=new xe(36,s/i,.1,100),o.current.position.set(g.x,g.y,g.z),r.current=new De,h.current=new J,r.current.add(h.current);const D=new we(16777215,1.2),T=new $(16777215,1.1),C=new $(16777215,.8);C.position.set(-6,2,2),T.position.set(.5,0,.866),x.current=[D,T,C],x.current.forEach(P=>r.current.add(P)),v.current=new J,r.current.add(v.current),v.current.position.set(0,0,-.8),v.current.rotateX(Math.PI/2);const j=512,I=8,V=8,ue=1.5,le=.8,ve=3;f.current=new q(j,j),f.current.texture.generateMipmaps=!1,p.current=new q(j,j),p.current.texture.generateMipmaps=!1;const H=new Ue(I,V).rotateX(Math.PI/2),fe=new K({map:f.current.texture,opacity:le,transparent:!0});m.current=new O(H,fe),m.current.scale.y=-1,v.current.add(m.current),a.current=new O(H),a.current.visible=!1,v.current.add(a.current);const me=new K({color:16777215,opacity:0,transparent:!0});E.current=new O(H,me),E.current.rotateX(Math.PI),E.current.position.y-=1e-5,v.current.add(E.current),y.current=new Me(-I/2,I/2,V/2,-V/2,0,ue),y.current.rotation.x=Math.PI/2,v.current.add(y.current),c.current=new Se,c.current.userData.darkness={value:ve},c.current.onBeforeCompile=P=>{P.uniforms.darkness=c.current.userData.darkness,P.fragmentShader=`
        uniform float darkness;
        ${P.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},c.current.depthTest=!1,c.current.depthWrite=!1,u.current=new Q(_e),u.current.depthTest=!1,n.current=new Q(Ee),n.current.depthTest=!1;const de=S.on("change",b),pe=R.on("change",b);return()=>{f.current.dispose(),p.current.dispose(),Re(x.current),be(r.current),Te(t.current),de(),pe()}},[]);const W=e.useCallback(s=>{a.current.visible=!0,a.current.material=u.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,u.current.uniforms.h.value=s*(1/256),t.current.setRenderTarget(p.current),t.current.render(a.current,y.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=p.current.texture,n.current.uniforms.v.value=s*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,y.current),a.current.visible=!1},[]),b=e.useCallback(()=>{const i=r.current.background;r.current.background=null,r.current.overrideMaterial=c.current,t.current.setRenderTarget(f.current),t.current.render(r.current,y.current),r.current.overrideMaterial=null,W(5),W(5*.4),t.current.setRenderTarget(null),r.current.background=i,h.current.rotation.x=S.get(),h.current.rotation.y=R.get(),t.current.render(r.current,o.current)},[W,S,R]);return e.useEffect(()=>{const s=ke(i=>{const{innerWidth:D,innerHeight:T}=window,C={x:(i.clientX-D/2)/D,y:(i.clientY-T/2)/T};R.set(C.x/2),S.set(C.y/2)},100);return N&&!Z&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[N,Z,S,R]),e.useEffect(()=>{const s=()=>{if(!d.current)return;const{clientWidth:i,clientHeight:D}=d.current;t.current.setSize(i,D),o.current.aspect=i/D,o.current.updateProjectionMatrix(),b()};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[b]),X.jsxs("div",{className:Le(ae.model,k),"data-loaded":M,style:Ae({delay:ze(A)},z),ref:d,role:"img","aria-label":U,..._,children:[X.jsx("canvas",{className:ae.canvas,ref:l}),L.map((s,i)=>X.jsx(Ge,{renderer:t,modelGroup:h,show:w,showDelay:A,renderFrame:b,index:i,setLoaded:F,onLoad:G,model:s},JSON.stringify(s.position)))]})},Ge=({renderer:L,model:w,modelGroup:A,renderFrame:g,index:z,showDelay:k,setLoaded:G,onLoad:U,show:_})=>{const[M,F]=e.useState(),d=oe(),l=e.createRef();e.useEffect(()=>{const o=async(r,t)=>{r.colorSpace=ie,r.flipY=!1,r.anisotropy=L.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await L.current.initTexture(r),t.material.color=new te(16777215),t.material.transparent=!0,t.material.map=r};F({start:async()=>{const{texture:r,position:t,url:v}=w;let f,p;const[y,c]=await Promise.all([await ee.loadAsync(r.placeholder),await Ce.loadAsync(v)]);A.current.add(c.scene),c.scene.traverse(async n=>{n.material&&(n.material.color=new te(2039845)),n.name===se.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,o(y,l.current),f=async()=>{const m=await he(r),x=await ee.loadAsync(m);await o(x,n),Y(1,0,{onUpdate:a=>{l.current.material.opacity=a,g()}})})});const u=new B(t.x,t.y,t.z);return d&&c.scene.position.set(...u.toArray()),w.animation===re.SpringUp&&(p=()=>{const n=new B(u.x,u.y-1,u.z);c.scene.position.set(...n.toArray()),Y(n.y,u.y,{type:"spring",delay:(300*z+k)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:m=>{c.scene.position.y=m,g()}})}),w.animation===re.LaptopOpen&&(p=()=>{const n=c.scene.children.find(a=>a.name===se.Frame),m=new B(Pe.degToRad(90),0,0),x=new B(0,0,0);return c.scene.position.set(...u.toArray()),n.rotation.set(...m.toArray()),Y(m.x,x.x,{type:"spring",delay:(300*z+k+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,g()}})}),{loadFullResTexture:f,playAnimation:p}}})},[]),e.useEffect(()=>{if(!M||!_)return;let o;const h=async()=>{const{loadFullResTexture:r,playAnimation:t}=await M.start();G(!0),U==null||U(),d||(o=t()),await r(),d&&g()};return e.startTransition(()=>{h()}),()=>{o==null||o.stop()}},[M,_])};export{rt as Model};
