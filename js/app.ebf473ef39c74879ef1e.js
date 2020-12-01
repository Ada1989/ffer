!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t,r){"use strict";var n=r(4),o=r(18),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.elements=t.countriesAbbr=t.countries=t.WikiAPI=t.PollutedAPI=void 0,t.PollutedAPI="https://api.openaq.org/v1/measurements?country=",t.WikiAPI="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&explaintext&redirects=1&prop=extracts&exintro&exsentences=2&titles=",t.countries=["poland","germany","spain","france"],t.countriesAbbr=["PL","DE","ES","FR"],t.elements={form:document.querySelector(".form"),searchInput:document.querySelector('[name="country"]'),searchButton:document.querySelector(".form__button"),autocompleteList:document.querySelector(".list_autocomplete"),cityList:document.querySelector(".list_cities"),error:document.querySelector(".error")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setInputValue=t.getInputValue=t.getListElements=t.getAbbr=t.filterByLetter=void 0,t.filterByLetter=(e,r)=>{const n=t.getInputValue(r);return n?e.filter(e=>e.slice(0,n.length)===n.toLowerCase()):[]},t.getAbbr=(e,r,n)=>{const o=t.getInputValue(n),i=e.indexOf(o.toLowerCase());return-1!==i?r[i]:""},t.getListElements=e=>e.querySelectorAll("li"),t.getInputValue=e=>e.value.trim(),t.setInputValue=(e,r)=>{const n=Array.from(t.getListElements(r));if(n.length){const t=n.find(e=>e.classList.contains("list__item_active"));t&&(e.value=t.textContent||"")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KeyboardKeys=void 0,function(e){e.arrowDown="ArrowDown",e.arrowUp="ArrowUp",e.enter="Enter",e.numpadEnter="NumpadEnter",e.escape="Escape"}(t.KeyboardKeys||(t.KeyboardKeys={}))},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(24),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?a=r(8):"undefined"!=typeof XMLHttpRequest&&(a=r(8)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){u.headers[e]={}}),n.forEach(["post","put","patch"],function(e){u.headers[e]=n.merge(i)}),e.exports=u}).call(this,r(23))},function(e,t,r){"use strict";var n=r(0),o=r(25),i=r(5),s=r(27),a=r(28),u=r(9);e.exports=function(e){return new Promise(function(t,c){var l=e.data,f=e.headers;n.isFormData(l)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";f.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,c,n),p=null}},p.onabort=function(){p&&(c(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var m=r(29),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(f[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(f,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},function(e,t,r){"use strict";var n=r(26);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(r[e]=t[e])}),n.forEach(["headers","auth","proxy"],function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])}),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setData=t.getData=void 0,t.getData=e=>JSON.parse(localStorage.getItem(e)||'""'),t.setData=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))}},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),r(14);const o=r(3),i=r(15),s=r(12),a=r(1),u=r(2),c=r(35),l=r(36),f=r(37),p=r(38),d=r(39),h={},m=()=>n(void 0,void 0,void 0,function*(){const e=u.getAbbr(a.countries,a.countriesAbbr,a.elements.searchInput);if(e){h.search=new i.default(e,{limit:50,orderBy:"value",sort:"desc",parameter:"pm25",dateFrom:new Date}),p.disableFormElements(a.elements.form),l.hideError(a.elements.error),f.displayLoader(a.elements.cityList),c.clearList([a.elements.autocompleteList,a.elements.cityList]);try{const e=yield h.search.getPollutedCities();c.displayList(e,a.elements.cityList)}catch(e){l.displayError(a.elements.error,"Something went wrong, please try again")}p.enableFormElements(a.elements.form),f.removeLoader(".loader")}else l.displayError(a.elements.error,"Wrong country provided")});a.elements.searchInput.addEventListener("keyup",e=>{if(e.code!==o.KeyboardKeys.arrowDown)if(e.code!==o.KeyboardKeys.arrowUp){if(e.code===o.KeyboardKeys.enter||e.code===o.KeyboardKeys.numpadEnter)return u.setInputValue(a.elements.searchInput,a.elements.autocompleteList),void m();e.code===o.KeyboardKeys.escape&&(e.target.value=""),c.clearList([a.elements.autocompleteList]),c.displayList(u.filterByLetter(a.countries,a.elements.searchInput),a.elements.autocompleteList)}else d.highlightListItemByKey(e,a.elements.autocompleteList);else d.highlightListItemByKey(e,a.elements.autocompleteList)}),a.elements.searchInput.addEventListener("keydown",e=>{e.code!==o.KeyboardKeys.arrowUp&&e.code!==o.KeyboardKeys.enter&&e.code!==o.KeyboardKeys.numpadEnter||e.preventDefault()}),a.elements.autocompleteList.addEventListener("mouseleave",()=>{d.removeHighlightFromListItem(a.elements.autocompleteList)}),a.elements.autocompleteList.addEventListener("mouseover",e=>{d.highlightListItemByMouse(e,a.elements.autocompleteList)}),window.addEventListener("click",e=>{if(e.target.matches(".list_autocomplete .list__item, .list_autocomplete .list__item *, .btn-primary"))return u.setInputValue(a.elements.searchInput,a.elements.autocompleteList),void m();c.clearList([a.elements.autocompleteList]);const t=e.target;t.matches('[name="country"]')&&!t.disabled&&c.displayList(u.filterByLetter(a.countries,a.elements.searchInput),a.elements.autocompleteList)}),window.addEventListener("load",()=>{const e=s.getData("inputValue");a.elements.searchInput.value=e})},function(e,t,r){},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=r(16),i=r(1);r(34);const s=e=>{if(e instanceof Date){return`${e.getUTCFullYear()}-${`0${e.getUTCMonth()+1}`.slice(-2)}-${`0${e.getUTCDate()}`.slice(-2)}`}return e},a=e=>{const t=e.map(({city:e})=>e.split("/")[0]);return encodeURIComponent(t.join("|"))},u=e=>{const t=e.filter((e,t,r)=>t===r.findIndex(({city:t})=>t===e.city));return t.splice(10),t};t.default=class{constructor(e,t){this.country=e,this.options=t}getPollutedCities(){return n(this,void 0,void 0,function*(){const{limit:e,orderBy:t,sort:r,parameter:n,dateFrom:c}=this.options,l=this.country,f=yield o.default(`${i.PollutedAPI}${l}&limit=${e}&order_by=${t}&sort=${r}&parameter=${n}&date_from=${s(c)}`),p=u(f.data.results),d=yield o.default(`${i.WikiAPI}${a(p)}`),{data:{query:{pages:h}}}=d;return h})}}},function(e,t,r){e.exports=r(17)},function(e,t,r){"use strict";var n=r(0),o=r(4),i=r(19),s=r(10);function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(r(7));u.Axios=i,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=r(11),u.CancelToken=r(32),u.isCancel=r(6),u.all=function(e){return Promise.all(e)},u.spread=r(33),e.exports=u,e.exports.default=u},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,r){"use strict";var n=r(0),o=r(5),i=r(20),s=r(21),a=r(10);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}}),n.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}}),e.exports=u},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(22),i=r(6),s=r(7),a=r(30),u=r(31);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(9);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(11);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),s=new O(n||[]);return i._invoke=function(e,t,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var a=j(s,r);if(a){if(a===m)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,s),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function y(){}function v(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(T([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=g.prototype=y.prototype=Object.create(w);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function _(e,t){var r;this._invoke=function(o,i){function s(){return new t(function(r,s){!function r(o,i,s,a){var u=l(e[o],e,i);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,s,a)},function(e){r("throw",e,s,a)}):t.resolve(f).then(function(e){c.value=e,s(c)},function(e){return r("throw",e,s,a)})}a(u.arg)}(o,i,r,s)})}return r=r?r.then(s,s):s()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return s.next=s}}return{next:P}}function P(){return{value:t,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,v.displayName=u(g,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,a,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},E(_.prototype),_.prototype[s]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var s=new _(c(t,r,n,o),i);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},E(x),u(x,a,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.displayList=t.clearList=void 0;const n=r(12),o=r(1),i=r(2);t.clearList=e=>{const t=i.getInputValue(o.elements.searchInput);n.setData("inputValue",t),e.forEach(e=>e.innerHTML="")},t.displayList=(e,t)=>{let r;if(e instanceof Array)r=e.map(e=>`\n\t\t      <li class="list__item">${e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}</li>\n\t\t    `);else{r=Object.keys(e).map(t=>`\n        <li class="list__item">\n          <h2>${e[t].title}</h2>\n          <p>${e[t].extract}</p>\n        </li>\n      `)}t.insertAdjacentHTML("beforeend",r.join(""))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hideError=t.displayError=void 0,t.displayError=(e,t)=>{e.textContent=t},t.hideError=e=>{e.textContent=""}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeLoader=t.displayLoader=void 0,t.displayLoader=e=>{e.insertAdjacentHTML("beforebegin",'        \n    <div class="loader" aria-busy="true" role="progressbar">\n      <span class="sr-only">Loading content...</span>\n    </div>\n  ')},t.removeLoader=e=>{const t=document.querySelector(e);t.parentNode.removeChild(t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enableFormElements=t.disableFormElements=void 0,t.disableFormElements=e=>{Array.from(e.elements).forEach(e=>{e.setAttribute("disabled","true")})},t.enableFormElements=e=>{Array.from(e.elements).forEach(e=>{e.removeAttribute("disabled")})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightListItemByKey=t.highlightListItemByMouse=t.removeHighlightFromListItem=void 0;const n=r(3),o=r(2);t.removeHighlightFromListItem=e=>{const t=o.getListElements(e);t.length&&t.forEach(e=>{e.classList.remove("list__item_active")})},t.highlightListItemByMouse=(e,r)=>{"LI"===e.target.nodeName&&(t.removeHighlightFromListItem(r),e.target.closest(".list__item").classList.add("list__item_active"))},t.highlightListItemByKey=(e,r)=>{const i=Array.from(o.getListElements(r));if(i.length){let o=i.findIndex(e=>e.classList.contains("list__item_active"));t.removeHighlightFromListItem(r),e.code===n.KeyboardKeys.arrowDown?o=o===i.length-1?0:++o:e.code===n.KeyboardKeys.arrowUp&&(o=o<=0?i.length-1:--o),i[o].classList.add("list__item_active")}}}]);