(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2458)}])},2458:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var s=r(5893),n=r(7294),a=[{id:1,name:"Dami Kim",job:"BX Designer",comment:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps "},{id:2,name:"Hyeong Tae Kim",job:"BX Designer",comment:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps "},{id:3,name:"Seongeun Jeong",job:"Frontend Developer",comment:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps "},{id:4,name:"Yena Hwang",job:"Frontend Developer",comment:"The quick brown fox jumps over the lazy dog. The quick brown fox jumps "}],o=function(){var e=(0,n.useState)(1),t=e[0],r=e[1],o=(0,n.useMemo)((function(){return a.filter((function(e){return e.id===t}))[0]}),[t]);return(0,s.jsxs)("article",{id:"host-explorer",className:"ml-[13%] h-screen flex justify-center flex-col",children:[(0,s.jsxs)("section",{className:"mb-4",children:[(0,s.jsx)("h1",{children:"Host Explorer"}),(0,s.jsx)("h4",{className:"text-[26px]",children:"About our team"})]}),(0,s.jsxs)("section",{className:"flex gap-9 w-full",children:[(0,s.jsxs)("div",{className:"w-[258px]",children:[(0,s.jsx)("div",{className:"w-full h-[341px] bg-[#3c3c3c] rounded-md"}),(0,s.jsx)("h2",{className:"text-xs mt-1",children:o.name}),(0,s.jsx)("h4",{className:"text-[21px]",children:o.job}),(0,s.jsx)("p",{className:"mt-[14px] text-[14px]",children:o.comment})]}),(0,s.jsx)("div",{className:"w-[60%]",children:(0,s.jsx)("ul",{className:"w-full flex gap-2 flex-col",onClick:function(){return console.log("asdf")},children:a.map((function(e){return(0,s.jsx)("li",{onClick:function(t){var s;s=e.id,r(s)},className:"border-b-[2px] ".concat(o.id===e.id?"border-white":"border-[#444444] text-[#444444]"),children:e.name},e.id)}))})})]})]})},i=r(5270),c=r.n(i),l=function(){return(0,s.jsxs)("div",{className:c().empty,children:[(0,s.jsx)("section",{className:c().emptygradient}),(0,s.jsx)("section",{className:c().emptycontent,children:(0,s.jsx)("div",{className:c().emptyprofile,children:(0,s.jsx)("div",{className:c().circle})})})]})},u=(0,n.memo)(l),d=r(5675),g=r.n(d),m=r(6038),x=r(6546);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){var t=e.src,r=e.className,a=e.toParams;return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger),m.p8.from("#icon",{y:0}),m.p8.to("#icon",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){b(e,t,r[t])}))}return e}({rotate:90,scrollTrigger:{trigger:"#icon",start:"top center",scrub:1}},a))}),[a]),(0,s.jsx)("div",{className:r,id:"icon",children:(0,s.jsx)(g(),{src:t,alt:"icon",width:72,height:72})})},h=(0,n.memo)(p),f=function(e){var t=e.getMonth()<9?"0".concat(e.getMonth()):e.getMonth(),r=e.getDate()<9?"0".concat(e.getDate()):e.getDate();return"".concat(e.getFullYear(),".").concat(t,".").concat(r)};function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){j(e,t,r[t])}))}return e}var N=function(e){var t=e.comment,r=e.name;return(0,s.jsxs)("div",{className:c().view,children:[(0,s.jsx)("h3",{children:r}),(0,s.jsx)("p",{children:t})]})},w=function(e){var t=e.userName,r=e.onChange,n=e.userComment;return r?(0,s.jsxs)("div",{className:c().writing,children:[(0,s.jsx)("input",{className:"placeholder:text-white w-full text-[1.5vw] pt-2 pl-1 font-bold ".concat(t?"":"border-b-white border-b-[0.5px]"),value:t,onChange:function(e){return r("name",e.target.value)},placeholder:"Name"}),(0,s.jsx)("textarea",{className:"w-full h-full text-[1.2vw] mt-1 pl-1 placeholder:text-white resize-none ".concat(n?"":"border-b-white border-b-[0.5px]"),cols:4,value:n,onChange:function(e){return r("comment",e.target.value)},placeholder:"leave a comment"}),(0,s.jsx)("p",{className:"text-right text-[0.9vw] mt-[3px]",children:f(new Date)})]}):null},v=function(e){var t=e.type,r=e.onChange,n=e.userComment,a=e.userName;return(0,s.jsxs)("div",{className:c().guestcard,children:[(0,s.jsx)("section",{className:"".concat(c().gradient," ").concat(c()[t])}),(0,s.jsxs)("section",{className:c().cardcontent,children:[(0,s.jsx)("div",{className:"".concat(c().profile," ").concat(c()["profile-"+t])}),r?(0,s.jsx)(w,y({},e)):(0,s.jsx)(N,{name:null!==a&&void 0!==a?a:"",comment:null!==n&&void 0!==n?n:""})]})]})},_=(0,n.memo)(v),k=function(e){var t=e.className,r=e.src,n=e.alt,a=e.id;return(0,s.jsx)("div",{className:t,id:a,children:(0,s.jsx)(g(),{src:r,alt:n||"image",layout:"fill"})})},B=(0,n.memo)(k),T=function(){var e=(0,n.useState)(""),t=e[0],r=e[1],a=(0,n.useState)(""),o=a[0],i=a[1],c=(0,n.useCallback)((function(e,t){switch(e){case"name":r(t);break;case"comment":i(t)}}),[]);return(0,s.jsxs)("section",{id:"guest-explorer",className:"flex flex-col items-center mt-20",children:[(0,s.jsx)("h1",{className:"text-[50px] leading-[60%] mt-4",children:"Guest Explorer"}),(0,s.jsx)("h4",{className:"text-[26px] mt-1 mb-4",children:"Leave a Comment"}),(0,s.jsxs)("div",{className:"flex gap-2 items-end",children:[(0,s.jsx)(u,{}),(0,s.jsx)(_,{type:"gray",userName:t,userComment:o,onChange:c}),(0,s.jsx)(u,{})]}),(0,s.jsx)("button",{className:"rounded-2xl text-dark text-[26px] font-bold px-8 py-1 mt-6 ".concat(t.length>0&&o.length>0?"bg-white":"bg-[#6c6c6c]"),children:"Submit"})]})},G=r(9664),U=r(9583),P=[{menu:"Overview",selector:""},{menu:"History",selector:"#timeline-1995"},{menu:"Host Explorer",selector:"#host-explorer"},{menu:"Guest Explorer",selector:"#guest-explorer"}],E=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=(0,n.useState)(!1),o=a[0],i=a[1],c=((0,n.useRef)(!1),(0,n.useRef)());return(0,n.useEffect)((function(){m.p8.registerPlugin(G.ScrollToPlugin,x.ScrollTrigger,U.Observer)}),[]),(0,n.useEffect)((function(){return t?i(!0):c.current=setTimeout((function(){i(!1)}),900),function(){clearTimeout(c.current)}}),[o,t]),console.log("render"),(0,s.jsxs)("div",{children:[(0,s.jsxs)("section",{id:"navbar",className:"fixed top-0 left-0 w-full z-20 flex justify-between text-blue px-[0.75rem] pt-[0.15rem]",children:[(0,s.jsx)("button",{id:"navbar-icon",className:"",children:"\uc544\uc774\ucf58"}),(0,s.jsx)("button",{id:"menu",className:"",onClick:function(){r(!t)},children:"\ud584\ubc84\uac70"})]}),o&&(0,s.jsx)("ul",{className:"fixed top-0 right-0 z-10 w-3/5 h-full p-[1rem] flex flex-col justify-between bg-white text-blue text-[2rem] leading-[3rem] ".concat(t?"animate-slide-in":"animate-slide-out"),children:P.map((function(e){return(0,s.jsx)("li",{onClick:function(){return m.p8.to(window,{scrollTo:e.selector})},children:e.menu},e.selector)}))})]})},C=function(e){return(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:"You can see other people!"}),(0,s.jsx)("p",{className:"text-[15px]",children:"\uc791\uc5c5\uc911\uc785\ub2c8\ub2e4."})]})},O=function(){return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger),m.p8.from("#first",{x:0,y:"20%",rotate:10}),m.p8.to("#first",{x:0,y:"-20%",rotate:-10,scrollTrigger:{trigger:"#first",start:"top bottom",scrub:1.5}}),m.p8.from("#second",{x:0,y:"40%",rotate:20}),m.p8.to("#second",{x:0,y:"-40%",rotate:-20,scrollTrigger:{trigger:"#second",start:"top bottom",scrub:1.5}}),m.p8.from("#third",{x:0,y:"60%",rotate:30}),m.p8.to("#third",{x:0,y:"-60%",rotate:-30,scrollTrigger:{trigger:"#third",start:"top bottom",scrub:1.5}}),m.p8.from("#fourth",{x:0,y:"70%",rotate:50}),m.p8.to("#fourth",{x:0,y:"-80%",rotate:-50,scrollTrigger:{trigger:"#fourth",start:"top bottom",scrub:1.5}})}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"bg-blue flex justify-center gap-6 mt-5 relative mb-10",children:[(0,s.jsx)(h,{src:"/icons/book.svg",className:"absolute left-[6rem]",toParams:{y:"-100"}}),(0,s.jsx)(h,{src:"/icons/computer.svg",className:"absolute right-[4rem] top-[1rem]",toParams:{y:"-300"}}),(0,s.jsx)(h,{src:"/icons/folder.svg",className:"absolute right-[12.5rem] top-[3rem]",toParams:{y:"-90",rotate:70}}),(0,s.jsx)(h,{src:"/icons/tree.svg",className:"absolute left-[-2rem] top-[7rem]",toParams:{y:"-250",rotate:100}}),(0,s.jsx)(h,{src:"/icons/memo.svg",className:"absolute left-[10rem] bottom-[-3rem]",toParams:{y:"-160",rotate:120}}),(0,s.jsx)(h,{src:"/icons/draw.svg",className:"absolute right-[-2rem] bottom-[-1rem]",toParams:{y:"-100",rotate:85}}),(0,s.jsx)("span",{className:"text-[11rem] leading-[7.5rem]",id:"first",children:"2"}),(0,s.jsx)("span",{className:"text-[11rem] leading-[7.5rem]",id:"second",children:"0"}),(0,s.jsx)("span",{className:"text-[11rem] leading-[7.5rem]",id:"third",children:"0"}),(0,s.jsx)("span",{className:"text-[11rem] leading-[7.5rem]",id:"fourth",children:"6"})]})})},S=(0,n.memo)(O),F=r(7390),D=r.n(F),A=["Internet Explorer users were at risk for","284 days in 2006 because of delays in","patching known flaws, according to a","security blog.","This included at least 98 days","in which no software fixes were available","to plug browser flaws","that were actively being used to steal","personal and financial data."],I=function(){return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger);var e=m.p8.utils.toArray("#row");m.p8.timeline({scrollTrigger:{trigger:"#row",pin:!0,start:"top top",scrub:!0}}).to(e,{xPercent:-100,ease:"Power0.easeNone"}),m.p8.to("#text-1",{x:0,scrollTrigger:{trigger:"#text-1",start:"center end",end:"+=500",scrub:!0}}),m.p8.to("#text-2",{x:0,scrollTrigger:{trigger:"#text-2",start:"top end",end:"+=500",scrub:!0}});for(var t=0;t<9;t++)m.p8.to("#under-".concat(t),{width:"100%",scrollTrigger:{trigger:"#under-".concat(t),start:"center center",end:"+=300",scrub:!0}})}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("section",{id:"fix-container",children:(0,s.jsx)("div",{id:"fix-box",className:"w-[30vw] h-[30vw] bg-slate-400",style:{marginBottom:"calc((100vh - 30vw) / 2)",marginTop:"calc((100vh - 30vw) / 2)"}})}),(0,s.jsxs)("section",{className:"w-full text-blue",children:[(0,s.jsxs)("article",{id:"row",className:"w-[100vw] h-[130vh] bg-white translate-x-full",children:[(0,s.jsx)("h1",{className:"text-5xl ml-5 pt-10 translate-x-full",id:"text-1",children:"The Hiatus and Security"}),(0,s.jsxs)("div",{className:"flex ml-5 translate-x-full",id:"text-2",children:[(0,s.jsx)("h1",{className:"text-5xl mt-3 mr-4",children:"Troubles"}),(0,s.jsx)(g(),{src:"/icons/big-computer.svg",alt:"icon",width:147,height:145})]})]}),(0,s.jsx)("article",{className:"bg-white",children:(0,s.jsx)("div",{className:"ml-[45%]",children:A.map((function(e,t){return(0,s.jsxs)("dl",{className:D().under,style:{marginBottom:A.length-1===t?0:""},children:[(0,s.jsx)("dt",{children:e}),(0,s.jsx)("dd",{className:D().underline,id:"under-".concat(t),children:(0,s.jsx)("span",{children:e})})]},t)}))})})]}),(0,s.jsx)("section",{className:"w-full py-[15%] bg-white",children:(0,s.jsx)("article",{className:"w-full h-[425px] bg-slate-300"})})]})},R=(0,n.memo)(I),q=function(e){return"/images".concat(e)},z={BUG:{BUG1:q("/bugs/bug1.png"),BUG2:q("/bugs/bug2.png"),BUG3:q("/bugs/bug3.png"),BUG4:q("/bugs/bug4.png"),BUG5:q("/bugs/bug5.png")}},M=r(5105),W=r.n(M),H=function(){return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger);var e=m.p8.timeline({scrollTrigger:{trigger:"#bug-container",pin:!0,start:"top top",end:"+=1000%",scrub:!0}});e.to("#bug-container",{duration:1,backgroundColor:"#1C1A80",ease:"none"},0),e.to("#bug-container",{duration:1,backgroundColor:"#11104D",ease:"none"},1),e.to("#bug1",{display:"block",duration:1}),e.to("#bug2",{display:"block",duration:.2}),e.to("#bug3",{display:"block",duration:.2}),e.to("#bug4",{display:"block",duration:.2}),e.to("#bug5",{display:"block",duration:.2}),e.to("#bug6",{display:"block",duration:.2}),e.to("#bug7",{display:"block",duration:.2}),e.to("#bug-container",{duration:1,backgroundColor:"#3834ff",ease:"none"}),e.to("#bug8",{display:"block",duration:.2}),e.to("#bug9",{display:"block",duration:.2}),e.to("#bug10",{display:"block",duration:.2}),e.to("#bug11",{display:"block",duration:.2}),e.to("#bug12",{display:"block",duration:.2}),e.to("#bug13",{display:"block",duration:.2}),e.to("#bug14",{display:"block",duration:2}),e.to("#bug-container",{duration:1,backgroundColor:"#1C1A8C",ease:"none"}),e.to("#bug14",{display:"none",duration:.2}),e.to("#bug13",{display:"none",duration:.2}),e.to("#bug12",{display:"none",duration:.2}),e.to("#bug11",{display:"none",duration:.2}),e.to("#bug10",{display:"none",duration:.2}),e.to("#bug9",{display:"none",duration:.2}),e.to("#bug8",{display:"none",duration:.2}),e.to("#bug7",{display:"none",duration:.2}),e.to("#bug6",{display:"none",duration:.2}),e.to("#bug5",{display:"none",duration:.2}),e.to("#bug4",{display:"none",duration:.2}),e.to("#bug3",{display:"none",duration:.2}),e.to("#bug2",{display:"none",duration:.2}),e.to("#bug1",{display:"none",duration:.2}),e.to("#bug-container",{duration:1,backgroundColor:"#000000"})}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{id:"bug-container",className:"relative h-screen w-screen bg-white",children:[(0,s.jsx)(B,{src:z.BUG.BUG1,alt:"bug",className:"".concat(W().bug1," middle"),id:"bug1"}),(0,s.jsx)(B,{src:z.BUG.BUG2,alt:"bug",className:"".concat(W().bug2," right-0 top-5"),id:"bug2"}),(0,s.jsx)(B,{src:z.BUG.BUG3,alt:"bug",className:"".concat(W().bug3," left-8 top-2"),id:"bug3"}),(0,s.jsx)(B,{src:z.BUG.BUG3,alt:"bug",className:"".concat(W().bug3," right-32 bottom-0 translate-y-[55%]"),id:"bug4"}),(0,s.jsx)(B,{src:z.BUG.BUG2,alt:"bug",className:"".concat(W().bug2," left-0 translate-x-[-40%] top-7"),id:"bug5"}),(0,s.jsx)(B,{src:z.BUG.BUG3,alt:"bug",className:"".concat(W().bug3," right-0 bottom-16 translate-x-6"),id:"bug6"}),(0,s.jsx)(B,{src:z.BUG.BUG4,alt:"bug",className:"".concat(W().bug4," left-3 bottom-0"),id:"bug7"}),(0,s.jsx)(B,{src:z.BUG.BUG2,alt:"bug",className:"".concat(W().bug2," left-[50%] top-[30%] translate-x-[-50%]"),id:"bug7"}),(0,s.jsx)(B,{src:z.BUG.BUG2,alt:"bug",className:"".concat(W().bug2," right-0 bottom-2 translate-x-4"),id:"bug8"}),(0,s.jsx)(B,{src:z.BUG.BUG1,alt:"bug",className:"".concat(W().bug1," right-10 bottom-10"),id:"bug9"}),(0,s.jsx)(B,{src:z.BUG.BUG2,alt:"bug",className:"".concat(W().bug2," left-0 bottom-14 translate-x-[-30%]"),id:"bug10"}),(0,s.jsx)(B,{src:z.BUG.BUG2,alt:"bug",className:"".concat(W().bug2," left-0 bottom-16 translate-x-[-33%]"),id:"bug11"}),(0,s.jsx)(B,{src:z.BUG.BUG5,alt:"bug",className:"".concat(W().bug5," left-12 top-10"),id:"bug12"}),(0,s.jsx)(B,{src:z.BUG.BUG1,alt:"bug",className:"".concat(W().bug1," right-16 top-[40%]"),id:"bug13"}),(0,s.jsx)(B,{src:z.BUG.BUG5,alt:"bug",className:"".concat(W().bug5," right-0 top-3 translate-x-5"),id:"bug14"})]})})},K=(0,n.memo)(H),Y=function(){return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger);var e=m.p8.timeline({scrollTrigger:{trigger:"#container",pin:!0,start:"top top",scrub:!0}});e.to(".title",{display:"block",duration:1}),e.to("#title1",{autoAlpha:1,duration:.5}),e.to("#title2",{autoAlpha:1,duration:.5})}),[]),(0,s.jsxs)("article",{className:"pl-4 pb-10",id:"container",children:[(0,s.jsxs)("section",{className:"h-screen flex justify-center flex-col",children:[(0,s.jsx)("h1",{id:"title1",className:"title italic text-[7rem] leading-[70%] opacity-50 hidden",children:"Browser"}),(0,s.jsx)("h1",{id:"title2",className:"title italic text-[7rem] leading-[70%] opacity-50 hidden",children:"wars"})]}),(0,s.jsxs)("section",{className:"mt-[50%]",children:[(0,s.jsx)("h2",{className:"text-[5rem] leading-[70%]",children:"2008"}),(0,s.jsx)("h4",{className:"text-[1rem] mt-3",children:"Browser wars"}),(0,s.jsx)("p",{className:"italic text-sm opacity-50 w-[90%]",children:"Internet Explorer is exposed to so many security vulnerabilities and concerns that the amount of criticism against IE is unusually high. In 2008, several security vulnerabilities were published in Internet Explorer. A study conducted by security research firm Secunia found that Microsoft was not as fast as its competitors in fixing security holes and providing patches."})]})]})},J=function(){return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger);var e=m.p8.timeline({scrollTrigger:{trigger:"#ending",start:"top top",end:"+=150%",scrub:.3,pin:!0}});e.to("#ending1",{y:-20,autoAlpha:0,delay:1.5},">"),e.fromTo("#ending2",{y:20,autoAlpha:0,delay:1.5},{y:0,autoAlpha:1,delay:1.5}),e.to("#ending2",{y:-20,autoAlpha:0,delay:1.5})}),[]),(0,s.jsxs)("article",{id:"ending",children:[(0,s.jsxs)("section",{className:"flex justify-center flex-col text-center w-screen h-screen",id:"ending1",children:[(0,s.jsx)("h4",{className:"fadeout text-[1.2rem]",children:"2022"}),(0,s.jsxs)("p",{className:"fadeout",children:["After 25+ years of helping people use and experience the web,",(0,s.jsx)("br",{}),"Internet Explorer (IE) is officially retired and",(0,s.jsx)("br",{}),"out of support as of today, June 15, 2022."]})]}),(0,s.jsx)("p",{id:"ending2",className:"absolute middle",children:"Bye, Explorer!"})]})},L=(0,n.memo)(J),X=function(){var e=(0,n.useRef)(null),t=m.p8.utils.selector(e);return(0,n.useEffect)((function(){m.p8.registerPlugin(x.ScrollTrigger),m.p8.set(e.current,{css:{transformStyle:"preserve-3d",perspective:1e3,perspectiveOrigin:"center"}}),m.p8.set(t("#card"),{css:{rotationY:function(e){return 60*e},transformOrigin:"50% 50% -460",backfaceVisibility:"hidden"}}),m.p8.to(t("#card"),{rotateY:function(e){return 60*e+300},scrollTrigger:{trigger:"#container-1995",pin:!0,scrub:!0,start:"top top",end:"+=10000",immediateRender:!1}}),m.p8.timeline({scrollTrigger:{trigger:"#container-1995",pin:!0,scrub:!0,start:"top top",end:"+=10000",immediateRender:!1}}).to("#overlay",{opacity:0},"<").to("#container-1995",{background:"#FFFFFF"}).to("#container-1995",{background:"#FF5959"}).to("#container-1995",{background:"#0500FF"}).to("#head-1995",{color:"white"},"<").to("#container-1995",{background:"#008080"}).to("#head-1995",{color:"white"},"<").to("#container-1995",{background:"#D7D7D7"}).to("#head-1995",{color:"black"},"<")}),[t]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{id:"container-1995",className:"w-screen h-screen bg-white",children:[(0,s.jsx)("div",{id:"overlay",className:"absolute w-full h-full bg-[url('/images/BG.png')] bg-cover"}),(0,s.jsxs)("div",{id:"text-wrapper",className:"absolute w-full flex flex-col text-black top-5",children:[(0,s.jsx)("p",{id:"head-1995",className:"text-center text-xl",children:"Microsoft Windows98"}),(0,s.jsx)("p",{id:"head-1995",className:"text-center text-tiny",children:"Now Released!"}),(0,s.jsx)("p",{id:"head-1995",className:"text-center text-6xl",children:"1995"})]}),(0,s.jsxs)("div",{ref:e,className:"absolute left-1/2 ml-[-5rem] bottom-8 w-[10rem] h-[7rem]",children:[(0,s.jsx)("div",{id:"card",className:"absolute w-40 h-28",children:(0,s.jsx)(g(),{src:"/images/1.png",alt:"",layout:"fill"})}),(0,s.jsx)("div",{id:"card",className:"absolute w-40 h-28",children:(0,s.jsx)(g(),{src:"/images/2.png",alt:"",layout:"fill"})}),(0,s.jsx)("div",{id:"card",className:"absolute w-40 h-28",children:(0,s.jsx)(g(),{src:"/images/3.png",alt:"",layout:"fill"})}),(0,s.jsx)("div",{id:"card",className:"absolute w-40 h-28",children:(0,s.jsx)(g(),{src:"/images/4.png",alt:"",layout:"fill"})}),(0,s.jsx)("div",{id:"card",className:"absolute w-40 h-20 top-1/2 mt-[-2.5rem]",children:(0,s.jsx)(g(),{src:"/images/5.png",alt:"",layout:"fill"})}),(0,s.jsx)("div",{id:"card",className:"absolute w-40 h-28",children:(0,s.jsx)(g(),{src:"/images/6.png",alt:"",layout:"fill"})})]})]})})},Q=(0,n.memo)(X);function Z(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"QA"}),(0,s.jsx)(E,{}),(0,s.jsx)(Q,{}),(0,s.jsxs)("article",{className:"bg-blue grid place-items-center pt-[20%]",children:[(0,s.jsxs)("section",{className:"text-xs font-thin leading-[140%] mb-[30%] text-center",children:["In July 1995 Microsoft released Internet Explorer 1.0",(0,s.jsx)("br",{})," as an add-on to the Windows 95 operating system.",(0,s.jsx)("br",{})," In July 1995 Microsoft released Internet Explorer 1.0",(0,s.jsx)("br",{})," as an add-on to the Windows 95 operating system."]}),(0,s.jsx)(S,{}),(0,s.jsx)(R,{})]}),(0,s.jsx)(K,{}),(0,s.jsx)(Y,{}),(0,s.jsx)(L,{}),(0,s.jsx)(o,{}),(0,s.jsx)(T,{}),(0,s.jsx)(C,{})]})}},5105:function(e){e.exports={bug1:"bug_bug1__RpejK",bug2:"bug_bug2__COhDZ",bug3:"bug_bug3__1wWN3",bug4:"bug_bug4__0z2Z6",bug5:"bug_bug5__bCiBh"}},5270:function(e){e.exports={gradient:"guestcard_gradient__F99ot",blue:"guestcard_blue__tgBch",green:"guestcard_green__dct4r",purple:"guestcard_purple__lR72L",gray:"guestcard_gray__K1Qtu",guestcard:"guestcard_guestcard__gupP5",cardcontent:"guestcard_cardcontent__KLjLG",profile:"guestcard_profile__k4wi5","profile-blue":"guestcard_profile-blue__CJW3W","profile-purple":"guestcard_profile-purple__RYrrW","profile-green":"guestcard_profile-green__7d_Gx","profile-gray":"guestcard_profile-gray__mcvmN",view:"guestcard_view__A33Kb",writing:"guestcard_writing__dtayy",empty:"guestcard_empty__v_ODE",emptygradient:"guestcard_emptygradient__ag1mQ",emptycontent:"guestcard_emptycontent__vypON",emptyprofile:"guestcard_emptyprofile__09bv0",circle:"guestcard_circle__N5NPd"}},7390:function(e){e.exports={under:"timeline_under__lUfFP",underline:"timeline_underline__vPiIE"}}},function(e){e.O(0,[29,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);