(window.webpackJsonp=window.webpackJsonp||[]).push([["b5ab"],{"2GSt":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/security",function(){var e=n("VC71");return{page:e.default||e}}])},Fvj4:function(e,t,n){"use strict";var i=n("vOnD");t.a=i.d.p.withConfig({componentId:"sc-49gkxs-0"})(["letter-spacing:0.5px;line-height:1.6;white-space:pre-line;&.cn{font-family:",";font-weight:400;}"],function(e){return e.theme.fontFamily.NotoSansTC})},GkJL:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("m/Pd"),o=n.n(r),c=n("vOnD"),l=n("9Koi"),s=n("doui"),u=n("wEEd"),m=n("xQut"),d=n("Ytie"),p="object"==typeof window,h=function(){var e=Object(i.useRef)(0),t=Object(i.useState)({x:p?window.scrollX:0,y:p?window.scrollY:0,oldX:p?window.scrollX:0,oldY:p?window.scrollY:0}),n=Object(s.default)(t,2),a=n[0],r=n[1];return Object(i.useEffect)(function(){var t=function(){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){r(function(e){return{x:window.scrollX,y:window.scrollY,oldX:e.x,oldY:e.y}})})};return window.addEventListener("scroll",t,{capture:!1,passive:!0}),function(){cancelAnimationFrame(e.current),window.removeEventListener("scroll",t)}},[]),a},f=n("cBaE"),g=n("r9c7"),b=n("N39q"),w=n("k7Sn"),y=c.d.div.withConfig({componentId:"sc-16noy9w-0"})(["cursor:pointer;display:flex;align-items:center;flex-direction:column;justify-content:space-around;height:70%;> div{width:2em;height:3px;background:",";}","{display:none;}"],function(e){return e.theme.colors.darkGrey},Object(g.a)("desktop")),E=c.d.li.withConfig({componentId:"sc-16noy9w-1"})(["display:flex;align-items:center;> img{width:16px;margin-right:0.75em;}> .triangle{will-change:transform;transition:transform 0.2s ease-in;width:0;height:0;border-style:solid;border-width:8px 4px 0px 4px;border-color:"," transparent transparent;line-height:0px;margin-top:2px;margin-left:0.5em;transform:",";}"],function(e){return e.theme.colors.darkGrey},function(e){return e.open?"rotateZ(-180deg)":"rotateZ(0deg)"}),v=Object(c.d)(u.a.ul).withConfig({componentId:"sc-16noy9w-2"})(["position:fixed;display:flex;flex-direction:column;justify-content:flex-start;width:100vw;height:calc(100vh - 50px);top:50px;left:0;padding-left:0;margin:0;background:",";z-index:-1;> li{cursor:pointer;padding:1em 4em;font-size:",";background:",";&.red{background:",";color:",";text-align:center;&:focus{background:#a80100;}}&.small{padding-left:5.2em;font-size:",";}&:focus,&:active{background:",";}}"],function(e){return e.theme.colors.white},function(e){return e.theme.fontSize.bigger},function(e){return e.theme.colors.white},function(e){return e.theme.colors.primary},function(e){return e.theme.colors.white},function(e){return e.theme.fontSize.smaller},function(e){return e.theme.colors.primary}),k=function(e){var t=e.open,n=e.setOpen,r=Object(l.a)(b.d.Home),o=r.t,c=r.i18n,m=Object(u.b)({transform:"translate3d(0, ".concat(t?"0%":"100vh",", 0)"),opacity:t?1:0}),d=Object(i.useState)(!1),p=Object(s.default)(d,2),h=p[0],g=p[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{onClick:function(){return n(function(e){return!e})}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement(v,{style:m},a.a.createElement("li",{onClick:function(){Object(f.b)("section-service"),n(!1)}},o("header.service")),a.a.createElement("li",{onClick:function(){Object(f.b)("section-technology"),n(!1)}},o("header.technology")),a.a.createElement("li",{onClick:function(){Object(f.b)("section-product"),n(!1)}},o("header.product")),a.a.createElement("li",{onClick:function(){Object(f.b)("section-collaborations"),n(!1)}},o("header.collaborations")),a.a.createElement("li",{onClick:function(){Object(f.b)("section-backedBy"),n(!1)}},o("header.backedBy")),a.a.createElement("li",{onClick:function(){Object(f.b)("section-examples"),n(!1)}},o("header.examples")),a.a.createElement("li",{onClick:function(){Object(f.b)("section-contact"),n(!1)}},o("header.contact")),a.a.createElement(E,{className:"small",open:h,onClick:function(){return g(function(e){return!e})}},a.a.createElement("img",{src:Object(f.a)("/static/icon/icon-earth.png"),srcSet:"".concat(Object(f.a)("/static/icon/icon-earth@2x.png")," 2x, ").concat(Object(f.a)("/static/icon/icon-earth@3x.png")," 3x")}),a.a.createElement("p",null,o("common:language.".concat(c.language))),a.a.createElement("div",{className:"triangle"})),h&&a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{className:"small",onClick:function(){c.changeLanguage("zh-TW"),g(!1)}},a.a.createElement("span",{style:{marginRight:".5rem"}},"(ZH)"),"中文"),a.a.createElement("li",{className:"small",onClick:function(){c.changeLanguage("en"),g(!1)}},a.a.createElement("span",{style:{marginRight:".5rem"}},"(EN)"),"English")),a.a.createElement("li",{className:"red",onClick:function(){return window.open("http://bit.ly/turingcerts-issuer")}},o("start"))))},x=c.d.header.withConfig({componentId:"sc-1k04hc6-0"})(["position:fixed;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;height:50px;padding:0.3em 2.5rem;background-color:",";z-index:",";transform:translateY(0);transition:all 0.3s ease-in;box-shadow:0px 3px 6px #00000029;"," ","{padding:0.3em 3.5rem;height:60px;}","{padding:0.3em 0 0.3em 4rem;height:60px;}","{height:70px;padding-left:5rem;}a{color:",";text-decoration:none;}"],function(e){return e.theme.colors.white},function(e){return e.theme.z.high},function(e){return e.hideUp&&Object(c.c)(["transform:translateY(-100%);"])},Object(g.a)("tablet"),Object(g.a)("desktop"),Object(g.a)("largeDesktop"),function(e){return e.theme.colors.white}),O=c.d.ul.withConfig({componentId:"sc-1k04hc6-1"})(["display:none;align-items:center;height:100%;> li{cursor:pointer;margin-right:2em;transition:color 0.2s ease-in;&:hover{color:",";}}","{display:flex;}"],function(e){return e.theme.colors.websiteCatelogWordGold},Object(g.a)("desktop")),j=Object(c.d)(m.a).withConfig({componentId:"sc-1k04hc6-2"})(["width:8em;padding:0.7em 1em;"]),C=c.d.div.withConfig({componentId:"sc-1k04hc6-3"})(["position:relative;display:flex;align-items:center;height:100%;font-size:",";border-left:solid 1px #424242;padding:0 2.5rem 0 1.5rem;color:",";cursor:pointer;transition:color 0.1s ease-in;background-color:",";> img{width:20px;margin-right:0.75em;}> .triangle{will-change:transform;transition:transform 0.2s ease-in;width:0;height:0;border-style:solid;border-width:9px 5px 0px 5px;border-color:"," transparent transparent;line-height:0px;margin-top:2px;margin-left:0.5em;transform:",";}"],function(e){return e.theme.fontSize.smaller},function(e){return e.theme.colors.backgroundTranslationGrey},function(e){return e.theme.colors.white},function(e){return e.theme.colors.backgroundTranslationGrey},function(e){return e.open?"rotateZ(-180deg)":"rotateZ(0deg)"}),S=Object(c.d)(u.a.div).withConfig({componentId:"sc-1k04hc6-4"})(["position:absolute;width:100%;left:0;bottom:0;display:flex;flex-direction:column;justify-content:center;align-items:center;border:solid 1px #424242;color:",";z-index:-1;background:",";> div{display:flex;width:100%;padding:0.5rem;&:hover{color:",";}}.lang-prefix{width:30%;text-align:center;margin-right:5px;}"],function(e){return e.theme.colors.backgroundTranslationGrey},function(e){return e.theme.background},function(e){return e.theme.colors.websiteCatelogWordGold}),I=function(){var e=h(),t=e.y,n=e.oldY,r=Object(i.useState)(!1),o=Object(s.default)(r,2),c=o[0],m=o[1],p=Object(i.useState)(!1),g=Object(s.default)(p,2),y=g[0],E=g[1],v=Object(u.b)({transform:"translate3d(0, ".concat(y?"100%":"0%",", 0)"),opacity:y?1:0}),I=Object(l.a)([b.d.Home,b.d.Common]),T=I.t,P=I.i18n,V=Object(i.useCallback)(function(){w.Router.push("/"),Object(f.b)("section-home")},[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{hideUp:t>0&&t>n,openMobile:c},a.a.createElement(d.a,{onClick:V}),a.a.createElement(O,null,a.a.createElement("li",{onClick:function(){return Object(f.b)("section-characteristic")}},T("header.characteristic")),a.a.createElement("li",{onClick:function(){return Object(f.b)("section-comparison")}},T("header.comparison")),a.a.createElement("li",{onClick:function(){return Object(f.b)("section-awards")}},T("header.awards")),a.a.createElement("li",{onClick:function(){return Object(f.b)("section-process")}},T("header.process")),a.a.createElement("li",{onClick:function(){return Object(f.b)("section-examples")}},T("header.examples")),a.a.createElement("li",{onClick:function(){return Object(f.b)("section-about")}},T("header.aboutUs")),a.a.createElement("li",{onClick:function(){return Object(f.b)("section-contact")}},T("header.contact")),a.a.createElement("li",null,a.a.createElement(j,{onClick:function(){return window.open("http://bit.ly/turingcerts-issuer")}},T("start"))),a.a.createElement(C,{open:y,onClick:function(){return E(function(e){return!e})}},a.a.createElement("img",{src:Object(f.a)("/static/icon/icon-earth.png"),srcSet:"".concat(Object(f.a)("/static/icon/icon-earth@2x.png")," 2x, ").concat(Object(f.a)("/static/icon/icon-earth@3x.png")," 3x")}),a.a.createElement("p",null,T("common:language.".concat(P.language))),a.a.createElement("div",{className:"triangle"}),a.a.createElement(S,{style:v},a.a.createElement("div",{onClick:function(){return P.changeLanguage("zh-TW")}},a.a.createElement("div",{className:"lang-prefix"},a.a.createElement("p",null,"(ZH)")),a.a.createElement("p",null,"中文")),a.a.createElement("div",{onClick:function(){return P.changeLanguage("en")}},a.a.createElement("div",{className:"lang-prefix"},a.a.createElement("p",null,"(EN)")),a.a.createElement("p",null,"English"))))),a.a.createElement(k,{open:c,setOpen:m})))},T=n("6W1E"),P=n("bRuE"),V=c.d.footer.withConfig({componentId:"gxnekz-0"})(["position:relative;height:70vh;overflow:hidden;display:flex;align-items:center;justify-content:center;"]),z=c.d.div.withConfig({componentId:"gxnekz-1"})(["position:absolute;background:",";transform:skewY(-3deg);height:100%;bottom:-10%;width:100%;opacity:0.9;"],function(e){return e.theme.colors.backgroundShapeGold}),N=c.d.div.withConfig({componentId:"gxnekz-2"})(["position:relative;width:80%;height:60%;","{width:62.5%;}"],Object(g.a)("tablet")),G=Object(c.d)(T.a).withConfig({componentId:"gxnekz-3"})(["margin-bottom:1em;text-align:center;","{text-align:left;}"],Object(g.a)("tablet")),A=c.d.div.withConfig({componentId:"gxnekz-4"})(["display:flex;justify-content:space-between;width:150px;margin:auto;img{width:2.5em;transition:opacity ease-in 0.1s;&:hover{opacity:0.75;}}","{margin:0;}"],Object(g.a)("tablet")),H=c.d.div.withConfig({componentId:"gxnekz-5"})(["display:flex;align-items:center;justify-content:center;margin:8% 0;transition:opacity ease-in 0.1s;> img{width:1.75em;margin-right:1em;}> p{font-weight:500;letter-spacing:1px;font-family:",";}","{margin:3% 0;justify-content:flex-start;}"],function(e){return e.theme.fontFamily.SFText},Object(g.a)("tablet")),D=c.d.div.withConfig({componentId:"gxnekz-6"})(["width:100%;height:1px;background-color:#d8d8d8;opacity:0.4;margin:5% 0;"]),F=c.d.p.withConfig({componentId:"gxnekz-7"})(["cursor:pointer;margin-bottom:2%;font-size:1em;","{margin-top:0;font-size:",";}&:hover{opacity:0.75;}"],Object(g.a)("tablet"),function(e){return e.theme.fontSize.smaller}),_=c.d.p.withConfig({componentId:"gxnekz-8"})(["margin-top:10%;font-size:1em;","{margin-top:0;font-size:",";}"],Object(g.a)("tablet"),function(e){return e.theme.fontSize.smaller}),L=function(){var e=Object(l.a)(b.d.Home).t,t=Object(i.useCallback)(function(e){w.Router.push(e),scrollTo(0,0)},[]);return a.a.createElement(V,{id:"section-contact"},a.a.createElement(z,null),a.a.createElement(N,null,a.a.createElement(G,null,e("footer.title")),a.a.createElement(A,null,a.a.createElement("a",{href:"mailto:apac@turingchain.tech?subject=[Collaboration]"},a.a.createElement("img",{src:Object(f.a)("/static/icon/icon-mail.png"),srcSet:"".concat(Object(f.a)("/static/icon/icon-mail@2x.png")," 2x, ").concat(Object(f.a)("/static/icon/icon-mail@3x.png")," 3x")})),a.a.createElement("a",{href:"https://www.facebook.com/turingcerts",target:"_blank",onClick:function(){return Object(P.a)("https://www.facebook.com/turingcerts")}},a.a.createElement("img",{src:Object(f.a)("/static/icon/icon-fb.png"),srcSet:"".concat(Object(f.a)("/static/icon/icon-fb@2x.png")," 2x, ").concat(Object(f.a)("/static/icon/icon-fb@3x.png")," 3x")})),a.a.createElement("a",{href:"https://www.linkedin.com/company/turing-chain-limited/",target:"_blank",onClick:function(){return Object(P.a)("https://www.linkedin.com/company/turing-chain-limited/")}},a.a.createElement("img",{src:Object(f.a)("/static/icon/icon-linkedin.png"),srcSet:"".concat(Object(f.a)("/static/icon/icon-linkedin@2x.png")," 2x, ").concat(Object(f.a)("/static/icon/icon-linkedin@3x.png")," 3x")}))),a.a.createElement(H,null,a.a.createElement("img",{src:Object(f.a)("/static/logo/logo-tc-light.png"),srcSet:"".concat(Object(f.a)("/static/logo/logo-tc-light@2x.png")," 2x, ").concat(Object(f.a)("/static/logo/logo-tc-light@3x.png")," 3x")}),a.a.createElement("p",null,"TURING CHAIN LIMITED")),a.a.createElement(D,null),a.a.createElement(F,{onClick:function(){return t("/security")}},e("footer.security")),a.a.createElement(F,{onClick:function(){return t("/privacy")}},e("footer.privacy")),a.a.createElement(_,null,"© Turing Chain Limited. All rights reserved")))},Y=n("o59O"),B=n("0RWw");t.a=function(e){var t=e.children,n=e.title,i=void 0===n?b.c:n,r=e.backgroundIsGrey,s=void 0!==r&&r,u=Object(l.a)().i18n;return a.a.createElement(c.a,{theme:function(e){return e.color=e.colors.backgroundWordDarkGrey,e.background=s?e.colors.backgroundGrey:e.colors.white,e.font="en"===u.language?e.fontFamily.SFText:e.fontFamily.NotoSansTC,e}},a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,i),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:Object(f.a)("/static/css/react-image-light-box.css")})),a.a.createElement(I,null),t,a.a.createElement(L,null),a.a.createElement(B.a,null),a.a.createElement(Y.a,null)))}},NGwb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e,t,n){for(var i=!0;i;){var a=e,r=t,o=n;i=!1,null===a&&(a=Function.prototype);var c=Object.getOwnPropertyDescriptor(a,r);if(void 0!==c){if("value"in c)return c.value;var l=c.get;if(void 0===l)return;return l.call(o)}var s=Object.getPrototypeOf(a);if(null===s)return;e=s,t=r,n=o,i=!0,c=s=void 0}};function r(e){return e&&e.__esModule?e:{default:e}}var o=n("q1tI"),c=r(o),l=r(n("hKI/")),s=r(n("17x9")),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout(function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)},this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)})}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)})}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return c.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}();t.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:s.default.string,animateOut:s.default.string,offset:s.default.number,duration:s.default.number,delay:s.default.number,initiallyVisible:s.default.bool,animateOnce:s.default.bool,style:s.default.object,scrollableParentSelector:s.default.string,className:s.default.string,animatePreScroll:s.default.bool},e.exports=t.default},VC71:function(e,t,n){"use strict";n.r(t);var i=n("ln6h"),a=n.n(i),r=n("O40h"),o=n("q1tI"),c=n.n(o),l=n("GkJL"),s=n("9Koi"),u=n("vOnD"),m=n("NGwb"),d=n.n(m),p=n("BJm1"),h=n("6W1E"),f=n("r9c7"),g=n("Fvj4"),b=n("N39q"),w=Object(u.d)(d.a).withConfig({componentId:"sc-2fu5r4-0"})(["width:100%;text-align:center;"]),y=u.d.div.withConfig({componentId:"sc-2fu5r4-1"})(["margin-bottom:2em;"]),E=Object(u.d)(h.a).withConfig({componentId:"sc-2fu5r4-2"})(["margin:4em auto 1em;max-width:70vw;color:",";","{max-width:55vw;}"],function(e){return e.theme.colors.websiteCatelogWordGold},Object(f.a)("largeDesktop")),v=Object(u.d)(g.a).withConfig({componentId:"sc-2fu5r4-3"})(["width:60%;font-size:",";font-weight:500;margin:0 auto 1em;text-align:left;line-height:1.2;letter-spacing:1px;"],function(e){return e.theme.fontSize.bigger}),k=Object(u.d)(g.a).withConfig({componentId:"sc-2fu5r4-4"})(["width:60%;text-align:",";letter-spacing:0.5px;line-height:2em;margin:0 auto;color:",";"],function(e){return e.right?"right":"left"},function(e){return e.theme.colors.backgroundWordDarkGrey}),x=function(){Object(s.a)(b.d.Home).t;return c.a.createElement(p.b,null,c.a.createElement(d.a,{animateOnce:!0,animateIn:"fadeInUp",style:{width:"100%",textAlign:"center"}},c.a.createElement(E,null,"資訊安全政策")),c.a.createElement(w,{animateIn:"fadeInUp",animateOnce:!0,delay:300},c.a.createElement(y,null,c.a.createElement(k,{right:!0},"版本：v1.0",c.a.createElement("br",null),"發行日期：2021/02/05")),c.a.createElement(y,null,c.a.createElement(v,null,"1. 目的"),c.a.createElement(k,null,"鑑於資訊安全乃維繫各項服務安全運作之基礎，為確保台灣圖靈鏈股份有限公司（以下簡稱本公司）人員、資料、資訊系統、設備及網路之安全，特訂定資訊安全政策（以下簡稱本文件），作為本公司資訊安全管理系統(以下簡稱ISMS)的最高指導原則。")),c.a.createElement(y,null,c.a.createElement(v,null,"2. 目標"),c.a.createElement(k,null,"本公司資訊安全目標為：確保重要資訊及服務之機密性（Confidentiality）、完整性（Integrity）、可用性（Availability）與遵循性（Compliance）。並依各階層與職能定義及量測資訊安全績效之量化指標，以確認ISMS實施狀況及是否達成資訊安全目標。")),c.a.createElement(y,null,c.a.createElement(v,null,"3. 適用範圍"),c.a.createElement(k,null,"本ISMS考量本公司內部及外部議題、關注方之需要及期望，以及本公司活動與其他組織活動間之介面及相依性，適用範圍為：Turing Chain 區塊鏈履歷服務之軟體開發、測試、營運及作業環境，包括：實體辦公室區域、雲端系統、開發人員、軟體、營運資料、系統管理單位及相關作業流程。")),c.a.createElement(y,null,c.a.createElement(v,null,"4. 涵蓋內容"),c.a.createElement(k,null,"ISMS包括內容如下，有關單位及人員就下列事項，應訂定對應之管理規範或實施計畫，並據以實施及定期評估實施成效：",c.a.createElement("br",null),"● 資訊安全組織與管理審查",c.a.createElement("br",null),"● 風險管理",c.a.createElement("br",null),"● 文件與記錄管理",c.a.createElement("br",null),"● 資訊安全內部稽核",c.a.createElement("br",null),"● 人力資源安全管理",c.a.createElement("br",null),"● 資產管理",c.a.createElement("br",null),"● 存取控制管理",c.a.createElement("br",null),"● 實體與環境安全管理",c.a.createElement("br",null),"● 運作安全與密碼學",c.a.createElement("br",null),"● 通訊安全管理",c.a.createElement("br",null),"● 系統獲取、發展與維護管理",c.a.createElement("br",null),"● 供應商關係管理",c.a.createElement("br",null),"● 資訊安全事故管理",c.a.createElement("br",null),"● 營運持續管理",c.a.createElement("br",null),"● 遵循性管理")),c.a.createElement(y,null,c.a.createElement(v,null,"5. 組織與權責"),c.a.createElement(k,null,"為確保ISMS能有效運作，應明定資訊安全組織及權責，以推動及維持各類管理、執行與查核等工作之進行。")),c.a.createElement(y,null,c.a.createElement(v,null,"6. 實施原則"),c.a.createElement(k,null,"ISMS之實施應依據規劃（Plan）、執行（Do）、查核（Check）及改善（Act）流程模式，以週而復始、循序漸進的精神，確保資訊業務運作之有效性及持續改善。")),c.a.createElement(y,null,c.a.createElement(v,null," 7. 審查與評估"),c.a.createElement(k,null,"7.1. 本文件應於重大變更或至少每年評估審查一次，以反映相關法令法規、技術、業務及相關部門等最新發展現況，確保資訊安全實務作業之有效性。",c.a.createElement("br",null),"7.2. 本文件應依據審查結果進行修訂，並經本公司負責人簽核發佈後始生效。",c.a.createElement("br",null),"7.3. 本文件訂定或修訂後應以書面、電子郵件、文件管理系統或其他方式告知關注方，如：合作夥伴、所屬員工、供應商等。"))))},O=function(){return c.a.createElement(l.a,{title:"TuringCerts | "+b.c,backgroundIsGrey:!0},c.a.createElement(x,null))};O.getInitialProps=Object(r.default)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:[b.d.Common,b.d.Home]});case 1:case"end":return e.stop()}},e)}));t.default=O}},[["2GSt","5d41","9da1"]]]);