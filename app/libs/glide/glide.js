/*!
 * Glide.js v3.0.1
 * (c) 2013-2018 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Glide=e()}(this,function(){"use strict";var i={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewindDuration:800,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function p(t){return parseInt(t)}function c(t){return"string"==typeof t}function l(t){var e=void 0===t?"undefined":n(t);return"function"===e||"object"===e&&!!t}function f(t){return"number"==typeof t}function d(t){return"function"==typeof t}function h(t){return void 0===t}function v(t){return t.constructor===Array}function e(t,e,n){var i={};for(var r in e)d(e[r])&&(i[r]=e[r](t,i,n));for(var o in i)d(i[o].mount)&&i[o].mount();return i}function m(t,e,n){Object.defineProperty(t,e,n)}var g=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.events=t,this.hop=t.hasOwnProperty}return o(e,[{key:"on",value:function(t,e){if(v(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(v(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),e}(),y=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};r(this,n),this._c={},this._e=new g,this.disabled=!1,this.selector=t,this.settings=function e(n,i){return l(n)&&l(i)&&Object.keys(i).forEach(function(t){l(i[t])?(n[t]||a(n,s({},t,{})),e(n[t],i[t])):a(n,s({},t,i[t]))}),a({},n)}(i,e),this.index=this.settings.startAt}return o(n,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),l(t)&&(this._c=e(this,t,this._e)),this._e.emit("mount.after"),this}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.settings=a({},this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){l(t)&&(this._o=t)}},{key:"index",get:function(){return this._i},set:function(t){this._i=p(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),n}();function b(){return(new Date).getTime()}function w(n,i,r){var o=void 0,s=void 0,u=void 0,a=void 0,c=0;r||(r={});var l=function(){c=!1===r.leading?0:b(),o=null,a=n.apply(s,u),o||(s=u=null)},t=function(){var t=b();c||!1!==r.leading||(c=t);var e=i-(t-c);return s=this,u=arguments,e<=0||i<e?(o&&(clearTimeout(o),o=null),c=t,a=n.apply(s,u),o||(s=u=null)):o||!1===r.trailing||(o=setTimeout(l,e)),a};return t.cancel=function(){clearTimeout(o),c=0,o=s=u=null},t}var _={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function k(t){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}function S(t){return!!(t&&t instanceof window.HTMLElement)}var H='[data-glide-el="track"]',T=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.listeners=t}return o(e,[{key:"on",value:function(t,e,n){c(t)&&(t=[t]);for(var i=0;i<t.length;i++)this.listeners[t[i]]=n,e.addEventListener(t[i],this.listeners[t[i]],!1)}},{key:"off",value:function(t,e){c(t)&&(t=[t]);for(var n=0;n<t.length;n++)e.removeEventListener(t[n],this.listeners[t[n]],!1)}},{key:"destroy",value:function(){delete this.listeners}}]),e}(),x=["ltr","rtl"],O={">":"<","<":">","=":"="},A=[function(e,n){return{modify:function(t){return t+n.Gaps.value*e.index}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(n,i){return{modify:function(t){if(0<=n.settings.focusAt){var e=i.Peek.value;return l(e)?t-e.before:t-e}return t}}},function(o,s){return{modify:function(t){var e=s.Gaps.value,n=s.Sizes.width,i=o.settings.focusAt,r=s.Sizes.slideWidth;return"center"===i?t-(n/2-r/2):t-r*i-e*i}}},function(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}],M=["touchstart","mousedown"],C=["touchmove","mousemove"],z=["touchend","touchcancel","mouseup","mouseleave"],D=["mousedown","mousemove","mouseup","mouseleave"];function j(t){return l(t)?(n=t,Object.keys(n).sort().reduce(function(t,e){return t[e]=n[e],t[e],t},{})):{};var n}var L={Html:function(e,t){var n={mount:function(){this.root=e.selector,this.track=this.root.querySelector(H),this.slides=Array.from(this.wrapper.children).filter(function(t){return!t.classList.contains(e.settings.classes.cloneSlide)})}};return m(n,"root",{get:function(){return n._r},set:function(t){c(t)&&(t=document.querySelector(t)),S(t)&&(n._r=t)}}),m(n,"track",{get:function(){return n._t},set:function(t){S(t)&&(n._t=t)}}),m(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(r,o,s){var u={set:function(t){var n,i,e=(n=r,i=o,{mutate:function(t){for(var e=0;e<A.length;e++)t=A[e](n,i).modify(t);return t}}).mutate(t);o.Html.wrapper.style.transform="translate3d("+-1*e+"px, 0px, 0px)"},remove:function(){o.Html.wrapper.style.transform=""}};return s.on("move",function(t){var e=o.Gaps.value,n=o.Sizes.length,i=o.Sizes.slideWidth;return r.isType("carousel")&&o.Run.isOffset("<")?(o.Transition.after(function(){s.emit("translate.jump"),u.set(i*(n-1))}),u.set(-i-e*n)):r.isType("carousel")&&o.Run.isOffset(">")?(o.Transition.after(function(){s.emit("translate.jump"),u.set(0)}),u.set(i*n+e*n)):u.set(t.movement)}),s.on("destroy",function(){u.remove()}),u},Transition:function(n,e,t){var i=!1,r={compose:function(t){var e=n.settings;return i?t+" 0ms "+e.animationTimingFunc:t+" "+this.duration+"ms "+e.animationTimingFunc},set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return m(r,"duration",{get:function(){var t=n.settings;return n.isType("slider")&&e.Run.offset?t.rewindDuration:t.animationDuration}}),t.on("move",function(){r.set()}),t.on(["build.before","resize","translate.jump"],function(){r.disable()}),t.on("run",function(){r.enable()}),t.on("destroy",function(){r.remove()}),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(O[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return m(i,"value",{get:function(){return i._v},set:function(t){x.includes(t)&&(i._v=t)}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(n,t,e){var i={mount:function(){this.value=n.settings.peek}};return m(i,"value",{get:function(){return i._v},set:function(t){l(t)?(t.before=p(t.before),t.after=p(t.after)):t=p(t),i._v=t}}),m(i,"reductor",{get:function(){var t=i.value,e=n.settings.perView;return l(t)?t.before/e+t.after/e:2*t/e}}),e.on(["resize","update"],function(){i.mount()}),i},Sizes:function(t,n,e){var i={setupSlides:function(){for(var t=n.Html.slides,e=0;e<t.length;e++)t[e].style.width=this.slideWidth+"px"},setupWrapper:function(t){n.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=n.Html.slides,e=0;e<t.length;e++)t[e].style.width="";n.Html.wrapper.style.width=""}};return m(i,"length",{get:function(){return n.Html.slides.length}}),m(i,"width",{get:function(){return n.Html.root.offsetWidth}}),m(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+n.Gaps.grow+n.Clones.grow}}),m(i,"slideWidth",{get:function(){return i.width/t.settings.perView-n.Peek.reductor-n.Gaps.reductor}}),e.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),e.on("destroy",function(){i.remove()}),i},Gaps:function(e,o,t){var n={mount:function(){this.value=e.settings.gap},apply:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style,r=o.Direction.value;i[_[r][0]]=0!==e?this.value/2+"px":"",e!==t.length-1?i[_[r][1]]=this.value/2+"px":i[_[r][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return m(n,"value",{get:function(){return n._v},set:function(t){n._v=p(t)}}),m(n,"grow",{get:function(){return n.value*(o.Sizes.length-1)}}),m(n,"reductor",{get:function(){var t=e.settings.perView;return n.value*(t-1)/t}}),t.on("update",function(){n.mount()}),t.on(["build.after","update"],w(function(){n.apply(o.Html.wrapper.children)},30)),t.on("destroy",function(){n.remove(o.Html.wrapper.children)}),n},Move:function(t,n,i){var e={mount:function(){this._o=0},make:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,i.emit("move",{movement:this.value}),n.Transition.after(function(){i.emit("move.after",{movement:t.value})})}};return m(e,"offset",{get:function(){return e._o},set:function(t){e._o=h(t)?0:p(t)}}),m(e,"translate",{get:function(){return n.Sizes.slideWidth*t.index}}),m(e,"value",{get:function(){var t=this.offset,e=this.translate;return n.Direction.is("rtl")?e+t:e-t}}),i.on(["build.before","run"],function(){e.make()}),e},Clones:function(s,u,t){var e={mount:function(){this.items=[],s.isType("carousel")&&(this.pattern=this.map(),this.items=this.collect())},map:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=s.settings.perView,n=u.Html.slides.length,i=0;i<Math.max(1,Math.floor(e/n));i++){for(var r=0;r<=n-1;r++)t.push(""+r);for(var o=n-1;0<=o;o--)t.unshift("-"+o)}return t},collect:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=this.pattern,n=0;n<e.length;n++){var i=u.Html.slides[Math.abs(e[n])].cloneNode(!0);i.classList.add(s.settings.classes.cloneSlide),t.push(i)}return t},append:function(){for(var t=this.items,e=this.pattern,n=0;n<t.length;n++){var i=t[n];i.style.width=u.Sizes.slideWidth+"px","-"===e[n][0]?u.Html.wrapper.insertBefore(i,u.Html.slides[0]):u.Html.wrapper.appendChild(i)}},remove:function(){for(var t=this.items,e=0;e<t.length;e++)t[e].remove()}};return m(e,"grow",{get:function(){return(u.Sizes.slideWidth+u.Gaps.value)*e.items.length}}),t.on("update",function(){e.remove(),e.mount(),e.append()}),t.on("build.before",function(){s.isType("carousel")&&e.append()}),t.on("destroy",function(){e.remove()}),e},Resize:function(t,e,n){var i=new T,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,w(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Build:function(n,i,t){var e={mount:function(){t.emit("build.before"),this.typeClass(),this.activeClass(),t.emit("build.after")},typeClass:function(){i.Html.root.classList.add(n.settings.classes[n.settings.type])},activeClass:function(){var e=n.settings.classes,t=i.Html.slides[n.index];t.classList.add(e.activeSlide),k(t).forEach(function(t){t.classList.remove(e.activeSlide)})},removeClasses:function(){var e=n.settings.classes;i.Html.root.classList.remove(e[n.settings.type]),i.Html.slides.forEach(function(t){t.classList.remove(e.activeSlide)})}};return t.on(["destroy","update"],function(){e.removeClasses()}),t.on(["resize","update"],function(){e.mount()}),t.on("move.after",function(){e.activeClass()}),e},Run:function(o,n,s){var t={mount:function(){this._o=!1},make:function(t){var e=this;o.disabled||(o.disable(),this.move=t,s.emit("run.before",this.move),this.calculate(),s.emit("run",this.move),n.Transition.after(function(){(e.isOffset("<")||e.isOffset(">"))&&(e._o=!1,s.emit("run.offset",e.move)),s.emit("run.after",e.move),o.enable()}))},calculate:function(){var t=this.move,e=this.length,n=t.steps,i=t.direction,r=f(p(n))&&0!==p(n);switch(i){case">":">"===n?o.index=e:this.isEnd()?(this._o=!0,o.index=0,s.emit("run.end",t)):r?o.index+=Math.min(e-o.index,-p(n)):o.index++;break;case"<":"<"===n?o.index=0:this.isStart()?(this._o=!0,o.index=e,s.emit("run.start",t)):r?o.index-=Math.min(o.index,p(n)):o.index--;break;case"=":o.index=n}},isStart:function(){return 0===o.index},isEnd:function(){return o.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return m(t,"move",{get:function(){return this._m},set:function(t){this._m={direction:t.substr(0,1),steps:t.substr(1)?t.substr(1):0}}}),m(t,"length",{get:function(){return n.Html.slides.length-1}}),m(t,"offset",{get:function(){return this._o}}),t},Swipe:function(c,l,f){var e=new T,d=0,h=0,v=0,n=!1,t={mount:function(){this.bindSwipeStart()},start:function(t){if(!n&&!c.disabled){this.disable();var e=this.touches(t);d=null,h=p(e.pageX),v=p(e.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),f.emit("swipe.start")}},move:function(t){if(!c.disabled){var e=c.settings,n=this.touches(t),i=p(n.pageX)-h,r=p(n.pageY)-v,o=Math.abs(i<<2),s=Math.abs(r<<2),u=Math.sqrt(o+s),a=Math.sqrt(s);if(180*(d=Math.asin(a/u))/Math.PI<e.touchAngle&&l.Move.make(i*parseFloat(e.touchRatio)),!(180*d/Math.PI<e.touchAngle))return!1;t.stopPropagation(),t.preventDefault(),l.Html.root.classList.add(e.classes.dragging),f.emit("swipe.move")}},end:function(t){if(!c.disabled){var e=c.settings,n=this.touches(t),i=this.threshold(t),r=n.pageX-h,o=180*d/Math.PI,s=Math.round(r/l.Sizes.slideWidth);this.enable(),i<r&&o<e.touchAngle?(e.perTouch&&(s=Math.min(s,p(e.perTouch))),l.Direction.is("rtl")&&(s=-s),l.Run.make(l.Direction.resolve("<"+s))):r<-i&&o<e.touchAngle?(e.perTouch&&(s=Math.max(s,-p(e.perTouch))),l.Direction.is("rtl")&&(s=-s),l.Run.make(l.Direction.resolve(">"+s))):l.Move.make(),l.Html.root.classList.remove(e.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),f.emit("swipe.end")}},bindSwipeStart:function(){var t=c.settings;t.swipeThreshold&&e.on(M[0],l.Html.wrapper,this.start.bind(this)),t.dragThreshold&&e.on(M[1],l.Html.wrapper,this.start.bind(this))},unbindSwipeStart:function(){e.off(M[0],l.Html.wrapper),e.off(M[1],l.Html.wrapper)},bindSwipeMove:function(){e.on(C,l.Html.wrapper,w(this.move.bind(this),c.settings.throttle))},unbindSwipeMove:function(){e.off(C,l.Html.wrapper)},bindSwipeEnd:function(){e.on(z,l.Html.wrapper,this.end.bind(this))},unbindSwipeEnd:function(){e.off(z,l.Html.wrapper)},touches:function(t){return D.includes(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(t){var e=c.settings;return D.includes(t.type)?e.dragThreshold:e.swipeThreshold},enable:function(){return n=!1,l.Transition.enable(),this},disable:function(){return n=!0,l.Transition.disable(),this}};return f.on("build.after",function(){l.Html.root.classList.add(c.settings.classes.swipeable)}),f.on("destroy",function(){t.unbindSwipeStart(),t.unbindSwipeMove(),t.unbindSwipeEnd(),e.destroy()}),t},Images:function(t,e,n){var i=new T,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Anchors:function(t,e,n){var i=new T,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){t.stopPropagation(),o&&t.preventDefault()},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].dataset.href=this.items[t].getAttribute("href"),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].dataset.href),delete this.items[t].dataset.href;r=!1}return this}};return m(s,"items",{get:function(){return s._a}}),n.on("swipe.move",function(){s.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){s.attach()})}),n.on("destroy",function(){s.attach(),s.unbind(),i.destroy()}),s},Controls:function(i,e,t){var n=new T,r={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._i=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(t){var e=i.settings,n=t[i.index];n.classList.add(e.classes.activeNav),k(n).forEach(function(t){t.classList.remove(e.classes.activeNav)})},removeClass:function(t){t[i.index].classList.remove(i.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._i.length;t++)this.bind(this._i[t].children)},removeBindings:function(){for(var t=0;t<this._i.length;t++)this.unbind(this._i[t].children)},bind:function(t){for(var e=0;e<t.length;e++)n.on(["click","touchstart"],t[e],this.click)},unbind:function(t){for(var e=0;e<t.length;e++)n.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.dataset.glideDir))}};return m(r,"items",{get:function(){return r._i}}),t.on(["mount.after","move.after"],function(){r.setActive()}),t.on("destroy",function(){r.removeBindings(),r.removeActive(),n.destroy()}),r},Keyboard:function(t,e,n){var i=new T,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){r.unbind()}),n.on("update",function(){r.mount()}),n.on("destroy",function(){i.destroy()}),r},Autoplay:function(e,n,t){var i=new T,r={mount:function(){this.start(),e.settings.hoverpause&&this.bind()},start:function(){var t=this;e.settings.autoplay&&h(this._i)&&(this._i=setInterval(function(){t.stop(),n.Run.make(">"),t.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",n.Html.root,function(){t.stop()}),i.on("mouseout",n.Html.root,function(){t.start()})},unbind:function(){i.off(["mouseover","mouseout"],n.Html.root)}};return m(r,"time",{get:function(){var t=n.Html.slides[e.index].getAttribute("data-glide-autoplay");return p(t||e.settings.autoplay)}}),t.on(["destroy","update"],function(){r.unbind()}),t.on(["run.before","pause","destroy","swipe.start","update"],function(){r.stop()}),t.on(["run.after","play","swipe.end"],function(){r.start()}),t.on("update",function(){r.mount()}),t.on("destroy",function(){i.destroy()}),r},Breakpoints:function(t,e,n){var i=new T,r=t.settings,o=r.breakpoints;o=j(o);var s=a({},r),u={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return r=a(r,u.match(o)),i.on("resize",window,w(function(){r=a(r,u.match(o))},t.settings.throttle)),n.on("update",function(){o=j(o),s=a({},r)}),n.on("destroy",function(){i.off("resize",window)}),u}};return function(t){function e(){return r(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,y),o(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,a({},L,t))}}]),e}()});
