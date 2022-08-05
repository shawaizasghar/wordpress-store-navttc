!function(t,e){var a=function(t,e,a){"use strict";var i,n;if(function(){var e,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-orig-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},a)e in n||(n[e]=a[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var r=e.documentElement,s=t.HTMLPictureElement,o=t.addEventListener.bind(t),l=t.setTimeout,d=t.requestAnimationFrame||l,u=t.requestIdleCallback,c=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},m=Array.prototype.forEach,y=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},v=function(t,e){y(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},h=function(t,e){var a;(a=y(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(a," "))},z=function(t,e,a){var i=a?"addEventListener":"removeEventListener";a&&z(t,e),f.forEach(function(a){t[i](a,e)})},b=function(t,a,n,r,s){var o=e.createEvent("Event");return n||(n={}),n.instance=i,o.initEvent(a,!r,!s),o.detail=n,t.dispatchEvent(o),o},p=function(e,a){var i;!s&&(i=t.picturefill||n.pf)?(a&&a.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[e]})):a&&a.src&&(e.src=a.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,a){for(a=a||t.offsetWidth;a<n.minSize&&e&&!t._lazysizesWidth;)a=e.offsetWidth,e=e.parentNode;return a},E=(F=[],R=[],D=F,H=function(){var t=D;for(D=F.length?R:F,T=!0,k=!1;t.length;)t.shift()();T=!1},I=function(t,a){T&&!a?t.apply(this,arguments):(D.push(t),k||(k=!0,(e.hidden?l:d)(H)))},I._lsFlush=H,I),_=function(t,e){return e?function(){E(t)}:function(){var e=this,a=arguments;E(function(){t.apply(e,a)})}},L=function(t){var e,i,n=function(){e=null,t()},r=function(){var t=a.now()-i;t<99?l(r,99-t):(u||n)(n)};return function(){i=a.now(),e||(e=l(r,99))}},w=function(){var s,f,g,C,w,N,W,x,S,B,T,k,F,R,D,H,I,O,P,$=/^img$/i,j=/^iframe$/i,q="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,U=0,V=-1,G=function(t){U--,(!t||U<0||!t.target)&&(U=0)},J=function(t){return null==k&&(k="hidden"==A(e.body,"visibility")),k||!("hidden"==A(t.parentNode,"visibility")&&"hidden"==A(t,"visibility"))},K=function(t,a){var i,n=t,s=J(t);for(x-=a,T+=a,S-=a,B+=a;s&&(n=n.offsetParent)&&n!=e.body&&n!=r;)(s=(A(n,"opacity")||1)>0)&&"visible"!=A(n,"overflow")&&(i=n.getBoundingClientRect(),s=B>i.left&&S<i.right&&T>i.top-1&&x<i.bottom+1);return s},X=function(){var t,a,o,l,d,u,c,g,m,y,v,h,z=i.elements;if((C=n.loadMode)&&U<8&&(t=z.length)){for(a=0,V++;a<t;a++)if(z[a]&&!z[a]._lazyRace)if(!q||i.prematureUnveil&&i.prematureUnveil(z[a]))nt(z[a]);else if((g=z[a].getAttribute("data-expand"))&&(u=1*g)||(u=Q),y||(y=!n.expand||n.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:n.expand,i._defEx=y,v=y*n.expFactor,h=n.hFac,k=null,Q<v&&U<1&&V>2&&C>2&&!e.hidden?(Q=v,V=0):Q=C>1&&V>1&&U<6?y:0),m!==u&&(N=innerWidth+u*h,W=innerHeight+u,c=-1*u,m=u),o=z[a].getBoundingClientRect(),(T=o.bottom)>=c&&(x=o.top)<=W&&(B=o.right)>=c*h&&(S=o.left)<=N&&(T||B||S||x)&&(n.loadHidden||J(z[a]))&&(f&&U<3&&!g&&(C<3||V<4)||K(z[a],u))){if(nt(z[a]),d=!0,U>9)break}else!d&&f&&!l&&U<4&&V<4&&C>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!g&&(T||B||S||x||"auto"!=z[a].getAttribute(n.sizesAttr)))&&(l=s[0]||z[a]);l&&!d&&nt(l)}},Y=(F=X,D=0,H=n.throttleDelay,I=n.ricTimeout,O=function(){R=!1,D=a.now(),F()},P=u&&I>49?function(){u(O,{timeout:I}),I!==n.ricTimeout&&(I=n.ricTimeout)}:_(function(){l(O)},!0),function(t){var e;(t=!0===t)&&(I=33),R||(R=!0,(e=H-(a.now()-D))<0&&(e=0),t||e<9?P():l(P,e))}),Z=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(G(t),v(e,n.loadedClass),h(e,n.loadingClass),z(e,et),b(e,"lazyloaded"))},tt=_(Z),et=function(t){tt({target:t.target})},at=function(t){var e,a=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),a&&t.setAttribute("srcset",a)},it=_(function(t,e,a,i,r){var s,o,d,u,f,y;(f=b(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(a?v(t,n.autosizesClass):t.setAttribute("sizes",i)),o=t.getAttribute(n.srcsetAttr),s=t.getAttribute(n.srcAttr),r&&(d=t.parentNode,u=d&&c.test(d.nodeName||"")),y=e.firesLoad||"src"in t&&(o||s||u),f={target:t},v(t,n.loadingClass),y&&(clearTimeout(g),g=l(G,2500),z(t,et,!0)),u&&m.call(d.getElementsByTagName("source"),at),o?t.setAttribute("srcset",o):s&&!u&&(j.test(t.nodeName)?function(t,e){var a=t.getAttribute("data-load-mode")||n.iframeLoadMode;0==a?t.contentWindow.location.replace(e):1==a&&(t.src=e)}(t,s):t.src=s),r&&(o||u)&&p(t,{src:s})),t._lazyRace&&delete t._lazyRace,h(t,n.lazyClass),E(function(){var e=t.complete&&t.naturalWidth>1;y&&!e||(e&&v(t,n.fastLoadedClass),Z(f),t._lazyCache=!0,l(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&U--},!0)}),nt=function(t){if(!t._lazyRace){var e,a=$.test(t.nodeName),i=a&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),r="auto"==i;(!r&&f||!a||!t.getAttribute("src")&&!t.srcset||t.complete||y(t,n.errorClass)||!y(t,n.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&M.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,U++,it(t,e,r,i,a))}},rt=L(function(){n.loadMode=3,Y()}),st=function(){3==n.loadMode&&(n.loadMode=2),rt()},ot=function(){f||(a.now()-w<999?l(ot,999):(f=!0,n.loadMode=3,Y(),o("scroll",st,!0)))};return{_:function(){w=a.now(),i.elements=e.getElementsByClassName(n.lazyClass),s=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",Y,!0),o("resize",Y,!0),o("pageshow",function(t){if(t.persisted){var a=e.querySelectorAll("."+n.loadingClass);a.length&&a.forEach&&d(function(){a.forEach(function(t){t.complete&&nt(t)})})}}),t.MutationObserver?new MutationObserver(Y).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",Y,!0),r.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){e.addEventListener(t,Y,!0)}),/d$|^c/.test(e.readyState)?ot():(o("load",ot),e.addEventListener("DOMContentLoaded",Y),l(ot,2e4)),i.elements.length?(X(),E._lsFlush()):Y()},checkElems:Y,unveil:nt,_aLSL:st}}(),M=(x=_(function(t,e,a,i){var n,r,s;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),c.test(e.nodeName||""))for(n=e.getElementsByTagName("source"),r=0,s=n.length;r<s;r++)n[r].setAttribute("sizes",i);a.detail.dataAttr||p(t,a.detail)}),S=function(t,e,a){var i,n=t.parentNode;n&&(a=C(t,n,a),(i=b(t,"lazybeforesizes",{width:a,dataAttr:!!e})).defaultPrevented||(a=i.detail.width)&&a!==t._lazysizesWidth&&x(t,n,i,a))},B=L(function(){var t,e=W.length;if(e)for(t=0;t<e;t++)S(W[t])}),{_:function(){W=e.getElementsByClassName(n.autosizesClass),o("resize",B)},checkElems:B,updateElem:S}),N=function(){!N.i&&e.getElementsByClassName&&(N.i=!0,M._(),w._())};var W,x,S,B;var T,k,F,R,D,H,I;return l(function(){n.init&&N()}),i={cfg:n,autoSizer:M,loader:w,init:N,uP:p,aC:v,rC:h,hC:y,fire:b,gW:C,rAF:E}}(t,t.document,Date);t.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{}),document.addEventListener("lazybeforeunveil",function(t){var e=t.target.getAttribute("data-bg"),a=t.target.getAttribute("data-bg-gradient");jQuery(t.target).is("iframe")?jQuery(t.target).parent().fitVids():a&&e?t.target.style.backgroundImage=a+",url("+e+")":e&&(t.target.style.backgroundImage="url("+e+")")}),document.addEventListener("lazybeforesizes",function(t){const e=jQuery(t.target).parent();e.hasClass("awb-imageframe-style-dario")&&(e.css("display","block"),t.detail.width=t.target.offsetWidth>40?t.target.offsetWidth:e[0].offsetWidth,e.css("display",""))});