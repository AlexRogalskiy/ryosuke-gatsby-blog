webpackJsonp([0xd2a57dc1d883],{134:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var u=[{plugin:o(428),options:{plugins:[]}},{plugin:o(427),options:{plugins:[],trackingId:"UA-116899380-1",head:!1,anonymize:!0,respectDNT:!0}}]},268:function(n,e,o){"use strict";var t;e.components={"component---src-templates-blog-archive-js":o(404),"component---src-templates-blog-post-js":o(405),"component---src-templates-tags-js":o(406),"component---src-pages-404-js":o(398),"component---src-pages-about-js":o(399),"component---src-pages-index-js":o(400),"component---src-pages-page-2-js":o(401),"component---src-pages-projects-2-js":o(402),"component---src-pages-tags-js":o(403)},e.json=(t={"layout-index.json":o(10),"blog.json":o(410)},t["layout-index.json"]=o(10),t["projects.json"]=o(416),t["layout-index.json"]=o(10),t["blog-2018-2-27-pandas-eating-treats.json"]=o(411),t["layout-index.json"]=o(10),t["blog-2018-3-1-laravel-react-example.json"]=o(413),t["layout-index.json"]=o(10),t["blog-2018-2-28-pandas-and-bananas.json"]=o(412),t["layout-index.json"]=o(10),t["projects-test-project.json"]=o(418),t["layout-index.json"]=o(10),t["tags-design.json"]=o(420),t["layout-index.json"]=o(10),t["tags-development.json"]=o(421),t["layout-index.json"]=o(10),t["tags-react.json"]=o(424),t["layout-index.json"]=o(10),t["tags-github.json"]=o(423),t["layout-index.json"]=o(10),t["tags-gatsbyjs.json"]=o(422),t["layout-index.json"]=o(10),t["tags-ssg.json"]=o(425),t["layout-index.json"]=o(10),t["tags-static-site-generator.json"]=o(426),t["layout-index.json"]=o(10),t["404.json"]=o(407),t["layout-index.json"]=o(10),t["about.json"]=o(409),t["layout-index.json"]=o(10),t["index.json"]=o(414),t["layout-index.json"]=o(10),t["page-2.json"]=o(415),t["layout-index.json"]=o(10),t["projects-2.json"]=o(417),t["layout-index.json"]=o(10),t["tags.json"]=o(419),t["layout-index.json"]=o(10),t["404-html.json"]=o(408),t),e.layouts={"layout---index":o(397)}},269:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(6),p=t(l),f=o(199),d=t(f),g=o(97),m=t(g),h=o(134),y=o(557),j=t(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(o){a(this,e);var t=u(this,n.call(this)),r=o.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;m.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},97:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(457),u=t(a),r=(0,u.default)();n.exports=r},270:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(115),u=o(200),r=t(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,r.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(u,{path:n.path})||(0,a.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,a.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,a.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},271:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(168),u=t(a),r=o(134),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},408:function(n,e,o){o(3),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(435)})})}},407:function(n,e,o){o(3),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(436)})})}},409:function(n,e,o){o(3),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(437)})})}},411:function(n,e,o){o(3),n.exports=function(n){return o.e(91202308160004,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(438)})})}},412:function(n,e,o){o(3),n.exports=function(n){return o.e(1676261814342,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(439)})})}},413:function(n,e,o){o(3),n.exports=function(n){return o.e(0x99ed4fc7178c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(440)})})}},410:function(n,e,o){o(3),n.exports=function(n){return o.e(49683490770531,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(441)})})}},414:function(n,e,o){o(3),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(442)})})}},10:function(n,e,o){o(3),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(172)})})}},415:function(n,e,o){o(3),n.exports=function(n){return o.e(0x7b71d9db271c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(443)})})}},417:function(n,e,o){o(3),n.exports=function(n){return o.e(21088068424507,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(444)})})}},418:function(n,e,o){o(3),n.exports=function(n){return o.e(62168203033015,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(445)})})}},416:function(n,e,o){o(3),n.exports=function(n){return o.e(97786326051841,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(446)})})}},420:function(n,e,o){o(3),n.exports=function(n){return o.e(65951750749414,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(447)})})}},421:function(n,e,o){o(3),n.exports=function(n){return o.e(54666243603918,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(448)})})}},422:function(n,e,o){o(3),n.exports=function(n){return o.e(0x658b977d7911,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(449)})})}},423:function(n,e,o){o(3),n.exports=function(n){return o.e(0xed28d567e2ba,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(450)})})}},424:function(n,e,o){o(3),n.exports=function(n){return o.e(84586273293571,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(451)})})}},425:function(n,e,o){o(3),n.exports=function(n){return o.e(0xa35754665831,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(452)})})}},426:function(n,e,o){o(3),n.exports=function(n){return o.e(31476404220724,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(453)})})}},419:function(n,e,o){o(3),n.exports=function(n){return o.e(55702396619907,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(454)})})}},397:function(n,e,o){o(3),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(272)})})}},199:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(1),u=(t(a),o(270)),r=t(u),s=o(97),i=t(s),c=o(200),l=t(c),p=void 0,f={},d={},g={},m={},h={},y=[],j=[],x={},v="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,w=!0,_=[],k={},P={},E=5;N=o(273)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},S=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])n.nextTick(function(){o(null,m[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){m[e]=t,_.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),_=_.slice(-E),o(n,t)})}},A=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):P[e]?n.nextTick(function(){o(P[e])}):S(e,function(n,t){if(n)o(n);else{var a=C(t());h[e]=a,o(n,a)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=_.find(function(n){return n.succeeded});return!!e},T=function(n,e){console.log(e),k[n]||(k[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){j=[],x={},R={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="/ryosuke-gatsby-blog",p=(0,r.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(L);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||m[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||m[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var u=a;u.unregister()}window.location.reload()}})),w=!1;if(k[e])return T(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return T(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,g[e])return n.nextTick(function(){o(g[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:g[e]})}),g[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,u=void 0,r=void 0,s=function(){if(a&&u&&(!t.layoutComponentChunkName||r)){g[e]={component:a,json:u,layout:r,page:t};var n={component:a,json:u,layout:r,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,e){n&&T(t.path,"Loading the component for "+t.path+" failed"),a=e,s()}),A(t.jsonName,function(n,e){n&&T(t.path,"Loading the JSON for "+t.path+" failed"),u=e,s()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,e){n&&T(t.path,"Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(23))},455:function(n,e){n.exports=[{componentChunkName:"component---src-templates-blog-archive-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog"},{componentChunkName:"component---src-templates-blog-archive-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2018-2-27-pandas-eating-treats.json",path:"/blog/2018-2-27-pandas-eating-treats/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2018-3-1-laravel-react-example.json",path:"/blog/2018-3-1-laravel-react-example/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2018-2-28-pandas-and-bananas.json",path:"/blog/2018-2-28-pandas-and-bananas/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-test-project.json",path:"/projects/test-project/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-design.json",path:"/tags/design/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-development.json",path:"/tags/development/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-react.json",path:"/tags/react/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-github.json",path:"/tags/github/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-gatsbyjs.json",path:"/tags/gatsbyjs/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-ssg.json",path:"/tags/ssg/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-static-site-generator.json",path:"/tags/static-site-generator/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-projects-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-2.json",path:"/projects2/"},{componentChunkName:"component---src-pages-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},273:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],u=function(){var n=e();n&&(a.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(134),r=o(1),s=t(r),i=o(237),c=t(i),l=o(115),p=o(432),f=o(382),d=t(f),g=o(170),m=o(271),h=t(m),y=o(97),j=t(y),x=o(455),v=t(x),b=o(456),R=t(b),C=o(269),N=t(C),w=o(268),_=t(w),k=o(199),P=t(k);o(304),window.___history=h.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(274);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(o))}var o=(0,g.createLocation)(n,null,null,h.default.location),t=o.pathname,a=E[t];a&&(t=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(r),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],m=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(f?f:m,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(y,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,r.createElement)(N.default,a({page:!0},t)):(0,r.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},456:function(n,e){n.exports=[]},274:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(97),u=t(a),r="/";r="/ryosuke-gatsby-blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},200:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},382:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},3:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,u=o.s;o.e=function(t,r){var s=!1,i=!0,c=function(n){r&&(r(o,n),r=null)};return!u&&e&&e[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},427:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},428:function(n,e){"use strict";e.onRouteUpdate=function(n){n.location;"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()}},457:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},557:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},398:function(n,e,o){o(3),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(288)})})}},399:function(n,e,o){o(3),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(289)})})}},400:function(n,e,o){o(3),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(290)})})}},401:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc6c285f8fd10,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(291)})})}},402:function(n,e,o){o(3),n.exports=function(n){return o.e(44039203776130,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(292)})})}},403:function(n,e,o){o(3),n.exports=function(n){return o.e(0xb2200a1b9a48,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(293)})})}},404:function(n,e,o){o(3),n.exports=function(n){return o.e(0x63dec1ebaa6c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(294)})})}},405:function(n,e,o){o(3),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(295)})})}},406:function(n,e,o){o(3),n.exports=function(n){return o.e(50739212244294,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(296)})})}}});
//# sourceMappingURL=app-55975ae7af1baa2457d1.js.map