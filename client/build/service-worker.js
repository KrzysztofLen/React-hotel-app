"use strict";var precacheConfig=[["/index.html","0133935eb92a85cac90a89f769871215"],["/static/css/main.af8a1bd2.css","91ab1117180dd98c8f1be985654b3153"],["/static/js/main.3e61477b.js","628e8b83160a224719168b824ca8d80d"],["/static/media/cc-visa.43c75825.svg","43c75825589c83f2a43622a56ed74d5a"],["/static/media/chevron-left.581ded9e.svg","581ded9e626279cae62fdd8b0820286d"],["/static/media/chevron-small-down.1ae7997b.svg","1ae7997b45e8430c22a80754abfc2a88"],["/static/media/chevron-small-up.efe269e1.svg","efe269e12579295b2b1966539e541c04"],["/static/media/chevron-thin-right.6f98acff.svg","6f98acff3163c6603e8a52b1e97e3f7a"],["/static/media/cross.ea4c0411.svg","ea4c0411eaadc08170dd541de8b6468e"],["/static/media/cutlery.a34c243d.svg","a34c243d5cde4df9f97bc2e1e7ea2e96"],["/static/media/folder.34de5761.svg","34de576114a01286347490ca90b0361c"],["/static/media/gamepad.25a84ac9.svg","25a84ac98bda547600d44cf93c9b5d78"],["/static/media/heartbeat.501d3005.svg","501d3005ba4476df22182851ce85e962"],["/static/media/home.529e5f2d.svg","529e5f2daef99f857c3bf1eae7e69ce9"],["/static/media/magnifying-glass.09bf8ae3.svg","09bf8ae3ac2fcd070e04781738e4bea0"],["/static/media/new.2f111c36.svg","2f111c36b4fbba4889bda2d94c6cabb7"],["/static/media/paypal.d9ccb481.svg","d9ccb48174beddda50f1abdaf12c4fcb"],["/static/media/room.e4b442fd.svg","e4b442fd45205c2c09ac48df8b3992c0"],["/static/media/shopping-cart.eda83a52.svg","eda83a52983d52bb145ae282dd942d38"],["/static/media/wifi.38fd1e78.svg","38fd1e781a17f6f854ead45b0649ec64"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});