(function(){var k;function n(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca="undefined"!=typeof Reflect&&Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=ba(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ea=["Reflect",
"construct"],fa=0;fa<ea.length-1;fa++){var ha=ea[fa];ha in da||(da[ha]={});da=da[ha]}var ia=ea[ea.length-1],ja=da[ia],ka;ka=ja||ca;ka!=ja&&null!=ka&&aa(da,ia,{configurable:!0,writable:!0,value:ka});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function la(){}
function ma(a){a.ja=void 0;a.getInstance=function(){return a.ja?a.ja:a.ja=new a}}
function na(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function oa(a){return"array"==na(a)}
function pa(a){var b=na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function qa(a){return"function"==na(a)}
function ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var sa="closure_uid_"+(1E9*Math.random()>>>0),ta=0;function ua(a,b,c){return a.call.apply(a.bind,arguments)}
function va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=ua:v=va;return v.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ib=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var wa=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var xa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function za(a,b){return a<b?-1:a>b?1:0}
function Aa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ba=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Da(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ea(a,b){var c=Ba(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ha;a:{var Ia=p.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""}function D(a){return-1!=Ha.indexOf(a)}
;function Ka(a,b){var c=pa(b),d=c?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],q(a));c++);return a}
function La(a){var b=Ma,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Na(a){for(var b in a)return!1;return!0}
function Oa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ra.length;f++)c=Ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ta(a){Ta[" "](a);return a}
Ta[" "]=la;function Ua(a,b){var c=Va;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Wa=D("Opera"),Xa=D("Trident")||D("MSIE"),Ya=D("Edge"),Za=D("Gecko")&&!(-1!=Ha.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),$a=-1!=Ha.toLowerCase().indexOf("webkit")&&!D("Edge");function ab(){var a=p.document;return a?a.documentMode:void 0}
var bb;a:{var cb="",db=function(){var a=Ha;if(Za)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ya)return/Edge\/([\d\.]+)/.exec(a);if(Xa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($a)return/WebKit\/(\S+)/.exec(a);if(Wa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
db&&(cb=db?db[1]:"");if(Xa){var eb=ab();if(null!=eb&&eb>parseFloat(cb)){bb=String(eb);break a}}bb=cb}var fb=bb,Va={};
function gb(a){return Ua(a,function(){for(var b=0,c=xa(String(fb)).split("."),d=xa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=za(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||za(0==g[2].length,0==h[2].length)||za(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var hb;var ib=p.document;hb=ib&&Xa?ab()||("CSS1Compat"==ib.compatMode?parseInt(fb,10):5):void 0;!Za&&!Xa||Xa&&9<=Number(hb)||Za&&gb("1.9.1");Xa&&gb("9");function jb(){this.b="";this.f=kb}
jb.prototype.ia=!0;jb.prototype.ha=function(){return this.b};
function lb(a){return a instanceof jb&&a.constructor===jb&&a.f===kb?a.b:"type_error:TrustedResourceUrl"}
var kb={};function E(){this.b="";this.f=mb}
E.prototype.ia=!0;E.prototype.ha=function(){return this.b};
function nb(a){return a instanceof E&&a.constructor===E&&a.f===mb?a.b:"type_error:SafeUrl"}
var ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function pb(a){if(a instanceof E)return a;a=a.ia?a.ha():String(a);ob.test(a)||(a="about:invalid#zClosurez");return qb(a)}
var mb={};function qb(a){var b=new E;b.b=a;return b}
qb("about:blank");function rb(){this.b=""}
rb.prototype.ia=!0;rb.prototype.ha=function(){return this.b};
function sb(a){var b=new rb;b.b=a;return b}
sb("<!DOCTYPE html>");sb("");sb("<br>");function tb(a,b){var c=b instanceof E?b:pb(b);a.href=nb(c)}
function ub(a,b){a.src=lb(b)}
;function vb(a,b){this.b=q(a)?a:0;this.f=q(b)?b:0}
vb.prototype.equals=function(a){return a instanceof vb&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
vb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
vb.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
vb.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function wb(a,b){this.width=a;this.height=b}
k=wb.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function xb(a){var b=document;return r(a)?b.getElementById(a):a}
function yb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function zb(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Ab(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bb(){var a=Cb;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ta(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;function Db(a){Eb();var b=new jb;b.b=a;return b}
var Eb=la;function Fb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Gb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",null,b)}catch(c){}return a}();var Hb=!!window.google_async_iframe_id,Cb=Hb&&window.parent||window;var Ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function F(a){return a.match(Ib)}
function Jb(a){return a?decodeURI(a):a}
function Kb(a,b,c){if(oa(b))for(var d=0;d<b.length;d++)Kb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Lb(a){var b=[],c;for(c in a)Kb(c,a[c],b);return b.join("&")}
function Mb(a,b){var c=Lb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Nb(a,b){var c=Ob();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;function Pb(a,b){this.events=[];this.f=b||p;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.f||p).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(g){}f=""}f=f.indexOf&&0<=f.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||f;c=this.f.performance;this.g=!!(c&&c.mark&&c.clearMarks&&f)}
Pb.prototype.h=function(a){if(a&&this.g){var b=this.f.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
Pb.prototype.start=function(a,b){if(!this.b)return null;var c=new Nb(a,b);this.g&&this.f.performance.mark("goog_"+c.uniqueId+"_start");return c};
Pb.prototype.end=function(a){this.b&&"number"==typeof a.value&&(a.duration=Ob()-a.value,this.g&&this.f.performance.mark("goog_"+a.uniqueId+"_end"),this.b&&this.events.push(a))};
function Ob(){var a=p.performance;return a&&a.now?a.now():y()}
;if(Hb&&!Bb()){var Qb="."+wa.domain;try{for(;2<Qb.split(".").length&&!Bb();)wa.domain=Qb=Qb.substr(Qb.indexOf(".")+1),Cb=window.parent}catch(a){}Bb()||(Cb=window)}var Rb=Cb,G=new Pb(1,Rb);function Sb(){Rb.google_measure_js_timing||(G.events!=G.f.google_js_reporting_queue&&(G.events.length=0,G.g&&C(G.events,G.h,G)),G.b=!1)}
if("complete"==Rb.document.readyState)Sb();else if(G.b){var Tb=function(){Sb()};
Rb.addEventListener?Rb.addEventListener("load",Tb,Gb?void 0:!1):Rb.attachEvent&&Rb.attachEvent("onload",Tb)};var Ub=(new Date).getTime();function Vb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Wb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var H=1518500249}else m=d^f^h,H=1859775393;else 60>c?(m=d&f|h&(d|f),H=2400959708):(m=d^f^h,H=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+H+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[m++]=a[d++],w++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,w;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Xb(a,b,c){var d=[],e=[];if(1==(oa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Yb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Yb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Yb(a){var b=Wb();b.update(a);return b.ya().toLowerCase()}
;function Zb(a){this.b=a||{cookie:""}}
k=Zb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var $b=new Zb("undefined"==typeof document?null:document);$b.f=3950;function ac(){var a=[],b=Vb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Zb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Zb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Xb(Vb(d),b,a||null)].join(" "):null}return null}
;function bc(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
bc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function cc(a,b){a.i(b);a.f<a.h&&(a.f++,b.next=a.b,a.b=b)}
;function dc(a){p.setTimeout(function(){throw a;},0)}
var ec;
function fc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.oa;c.oa=null;a()}};
return function(a){d.next={oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function gc(){this.f=this.b=null}
var ic=new bc(function(){return new hc},function(a){a.reset()},100);
gc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function hc(){this.next=this.scope=this.b=null}
hc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
hc.prototype.reset=function(){this.next=this.scope=this.b=null};function jc(a,b){kc||lc();mc||(kc(),mc=!0);var c=nc,d=ic.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var kc;function lc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);kc=function(){a.then(oc)}}else kc=function(){var a=oc;
!qa(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(ec||(ec=fc()),ec(a)):p.setImmediate(a)}}
var mc=!1,nc=new gc;function oc(){for(var a;a=nc.remove();){try{a.b.call(a.scope)}catch(b){dc(b)}cc(ic,a)}mc=!1}
;var pc=D("Firefox"),qc=(D("Chrome")||D("CriOS"))&&!D("Edge");function I(){this.f=this.f;this.F=this.F}
I.prototype.f=!1;I.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function rc(a,b){a.f?q(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(q(void 0)?v(b,void 0):b))}
I.prototype.l=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function sc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function tc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];pa(d)?tc.apply(null,d):sc(d)}}
;var uc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function vc(){}
vc.prototype.next=function(){throw uc;};
vc.prototype.Y=function(){return this};
function wc(a){if(a instanceof vc)return a;if("function"==typeof a.Y)return a.Y(!1);if(pa(a)){var b=0,c=new vc;c.next=function(){for(;;){if(b>=a.length)throw uc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function xc(a,b){if(pa(a))try{C(a,b,void 0)}catch(c){if(c!==uc)throw c;}else{a=wc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==uc)throw c;}}}
function yc(a){if(pa(a))return Fa(a);a=wc(a);var b=[];xc(a,function(a){b.push(a)});
return b}
;function zc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Ac(a){a=String(a);if(zc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Bc(a){var b=[];Cc(new Dc,a,b);return b.join("")}
function Dc(){}
function Cc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(oa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Cc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ec(d,c),c.push(":"),Cc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ec(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Fc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ec(a,b){b.push('"',a.replace(Gc,function(a){var b=Fc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Fc[a]=b);return b}),'"')}
;function Hc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Ic(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.m=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=la)try{var c=this;a.call(b,function(a){Jc(c,2,a)},function(a){Jc(c,3,a)})}catch(d){Jc(this,3,d)}}
function Kc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Kc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Lc=new bc(function(){return new Kc},function(a){a.reset()},100);
function Mc(a,b,c){var d=Lc.get();d.g=a;d.f=b;d.context=c;return d}
function Nc(a){return new J(function(b,c){c(a)})}
J.prototype.then=function(a,b,c){return Oc(this,qa(a)?a:null,qa(b)?b:null,c)};
Hc(J);function Pc(a,b){return Oc(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&jc(function(){var b=new Qc(a);Rc(this,b)},this)};
function Rc(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Rc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Sc(c),Tc(c,e,3,b)))}a.g=null}else Jc(a,3,b)}
function Uc(a,b){a.f||2!=a.b&&3!=a.b||Vc(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Oc(a,b,c,d){var e=Mc(null,null,null);e.b=new J(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Qc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Uc(a,e);return e.b}
J.prototype.w=function(a){this.b=0;Jc(this,2,a)};
J.prototype.A=function(a){this.b=0;Jc(this,3,a)};
function Jc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof J){Uc(d,Mc(e||la,f||null,a));var g=!0}else if(Ic(d))d.then(e,f,a),g=!0;else{if(ra(d))try{var h=d.then;if(qa(h)){Wc(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.m=c,a.b=b,a.g=null,Vc(a),3!=b||c instanceof Qc||Xc(a,c))}}
function Wc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Vc(a){a.j||(a.j=!0,jc(a.u,a))}
function Sc(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
J.prototype.u=function(){for(var a;a=Sc(this);)Tc(this,a,this.b,this.m);this.j=!1};
function Tc(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Yc(b,c,d);else try{b.h?b.g.call(b.context):Yc(b,c,d)}catch(e){Zc.call(null,e)}cc(Lc,b)}
function Yc(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Xc(a,b){a.i=!0;jc(function(){a.i&&Zc.call(null,b)})}
var Zc=dc;function Qc(a){B.call(this,a)}
z(Qc,B);Qc.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
z(K,I);k=K.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function $c(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Da(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
k.D=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=la):(c&&Ea(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.O=function(a){var b=this.g[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.m)for(d=0;d<b.length;d++){var f=b[d];ad(this.b[f+1],this.b[f+2],c)}else{this.i++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.b[f+1].apply(this.b[f+2],c)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;f=this.h.pop();)this.D(f)}}return 0!=d}return!1};
function ad(a,b,c){jc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.D,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){K.o.l.call(this);this.clear();this.h.length=0};function bd(a){this.b=a}
bd.prototype.set=function(a,b){q(b)?this.b.set(a,Bc(b)):this.b.remove(a)};
bd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return Ac(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bd.prototype.remove=function(a){this.b.remove(a)};function cd(a){this.b=a}
z(cd,bd);function dd(a){this.data=a}
function ed(a){return!q(a)||a instanceof dd?a:new dd(a)}
cd.prototype.set=function(a,b){cd.o.set.call(this,a,ed(b))};
cd.prototype.f=function(a){a=cd.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function L(a){this.b=a}
z(L,cd);L.prototype.set=function(a,b,c){if(b=ed(b)){if(c){if(c<y()){L.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}L.o.set.call(this,a,b)};
L.prototype.f=function(a,b){var c=L.o.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)L.prototype.remove.call(this,a);else return c}};function fd(a){this.b=a}
z(fd,L);function gd(){}
;function hd(){}
z(hd,gd);hd.prototype.clear=function(){var a=yc(this.Y(!0)),b=this;C(a,function(a){b.remove(a)})};function id(a){this.b=a}
z(id,hd);k=id.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.Y=function(a){var b=0,c=this.b,d=new vc;d.next=function(){if(b>=c.length)throw uc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function jd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(jd,id);function kd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(kd,id);var ld=!1,md="";function nd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(ld=!0,a.description)){md=nd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){ld=!0;md="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],ld=!(!a||!a.enabledPlugin))){md=nd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");ld=!0;md=nd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");ld=!0;md="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),ld=!0,md=nd(b.GetVariable("$version"))}catch(c){}})();
var od=ld,pd=md;var qd="Microsoft Internet Explorer"==navigator.appName,M=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
function rd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var sd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",sd,void 0);function N(a){rd(sd,arguments)}
function O(a,b){return a in sd?sd[a]:b}
function P(a){return O(a,void 0)}
;function Q(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=O("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),N("ERRORS",c))}
function td(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
;function R(a){return O("EXPERIMENT_FLAGS",{})[a]}
;var ud={};function vd(a){return ud[a]||(ud[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function wd(a,b){return a?a.dataset?a.dataset[vd(b)]:a.getAttribute("data-"+b):null}
function xd(a){a&&(a.dataset?a.dataset[vd("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function S(a,b){qa(a)&&(a=td(a));return window.setTimeout(a,b)}
;var yd=u("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.O;K.prototype.clear=K.prototype.clear;t("ytPubsubPubsubInstance",yd,void 0);var zd=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",zd,void 0);var Cd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Cd,void 0);var Dd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Dd,void 0);
function Ed(a,b){var c=Fd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){zd[d]&&b.apply(window,c)};
try{Dd[a]?f():S(f,0)}catch(g){Q(g)}},void 0);
zd[d]=!0;Cd[a]||(Cd[a]=[]);Cd[a].push(d);return d}return 0}
function Fd(){return u("ytPubsubPubsubInstance")}
function Gd(a){Cd[a]&&(a=Cd[a],C(a,function(a){zd[a]&&delete zd[a]}),a.length=0)}
function Hd(a){var b=Fd();if(b)if(b.clear(a),a)Gd(a);else for(var c in Cd)Gd(c)}
function Id(a,b){var c=Fd();c&&c.publish.apply(c,arguments)}
function Jd(a){var b=Fd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete zd[a]}))}
;var Kd=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ld=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Md(a,b){var c=Nd(a),d=document.getElementById(c),e=d&&wd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Ed(c,b);var g=""+(b[sa]||(b[sa]=++ta));Od[g]=e}f||(d=Pd(a,c,function(){wd(d,"loaded")||(xd(d),Id(c),S(x(Hd,c),0))}))}}
function Pd(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
ub(d,Db(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Qd(a){a=Nd(a);var b=document.getElementById(a);b&&(Hd(a),b.parentNode.removeChild(b))}
function Rd(a,b){if(a&&b){var c=""+(b[sa]||(b[sa]=++ta));(c=Od[c])&&Jd(c)}}
function Nd(a){var b=document.createElement("a");tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Aa(a)}
var Od={};function Sd(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Kd,""),c=c.replace(Ld,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Md(a,b)}
;var Td=null;function Ud(){var a=O("BG_I",null),b=O("BG_IU",null),c=O("BG_P",void 0);b?Sd(b,function(){window.botguard?Vd(c):(Qd(b),Q(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Vd(c))}
function Vd(a){Td=new window.botguard.bg(a);R("botguard_periodic_refresh")?M():R("botguard_always_refresh")}
function Wd(){return null!=Td}
function Xd(){return Td?Td.invoke():null}
;y();var Yd=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Zd(){if(!Yd)return null;var a=Yd();return"open"in a?a:null}
function $d(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ae(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?oa(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function be(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=ae(d[1]||"");for(var e in b)d[e]=b[e];return Mb(a,d)+c}
;var ce={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},de=!1;
function ee(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=F(a)[1]||null,e=Jb(F(a)[3]||null);d&&e?(d=c,c=F(a),d=F(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Jb(F(c)[3]||null)==e&&(Number(F(c)[4]||null)||null)==(Number(F(a)[4]||null)||null):!0;for(var f in ce){if((e=d=O(ce[f]))&&!(e=c)){var g=a;e=f;var h=O("CORS_HEADER_WHITELIST")||{};e=(g=Jb(F(g)[3]||null))?(h=h[g])?0<=Ba(h,e):!1:!0}e&&(b[f]=d)}return b}
function fe(a,b){var c=O("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.kb&&(!Jb(F(a)[3]||null)||b.withCredentials||Jb(F(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function ge(a,b){var c=b.format||"JSON";b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=O("XSRF_FIELD_NAME",void 0),e=O("XSRF_TOKEN",void 0),f=b.ab;f&&(f[d]&&delete f[d],a=be(a,f||{}));f=b.postBody||"";var g=b.B;fe(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=ae(f),Sa(d,g),f=b.sa&&"JSON"==b.sa?JSON.stringify(d):Lb(d));d=f||g&&!Na(g);!de&&d&&"POST"!=b.method&&(de=!0,Q(Error("AJAX request with postData should use POST")));var h=
!1,l,m=he(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=$d(a),e=null;if(d||400<=a.status&&500>a.status)e=ie(c,a,b.jb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ia&&b.Ia.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.aa&&0<b.timeout&&(l=S(function(){h||(h=!0,m.abort(),window.clearTimeout(l),b.aa.call(b.context||p,m))},b.timeout))}
function ie(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?je(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=ke(a)})}c&&le(d);
return d}
function le(a){if(ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=sb(a[b]);a[c]=d}else le(a[b])}}
function je(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ke(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function me(a,b){b.method="POST";b.B||(b.B={});ge(a,b)}
function he(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&td(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Zd();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=ee(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var ne={},oe=0;function pe(a,b){a&&(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?he(a,b):qe(a,b))}
function qe(a,b){var c=new Image,d=""+oe++;ne[d]=c;c.onload=c.onerror=function(){b&&ne[d]&&b();delete ne[d]};
c.src=a}
;function re(a,b,c,d,e){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;c={name:c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=se)){e=a.stacktrace;d=a.columnNumber;var f=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(H){h="Not available",
g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||f}catch(H){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(te[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=a.fileName;h={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:h,level:b,"client.name":c.name},B:{url:O("PAGE_NAME",window.location.href),file:l},method:"POST"};c.version&&(h["client.version"]=c.version);e&&(h.B.stack=e);for(var m in c)h.B["client."+m]=c[m];if(m=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in m)h.B[w]=m[w];ge("/error_204",h);te[a.message]=!0;se++}}}
var se=0,te={};var ue=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",ue,void 0);function ve(a){rd(ue,arguments)}
;function we(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function xe(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var ye=[],ze=!1;function Ae(){function a(){ze=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)}
Sd("//static.doubleclick.net/instream/ad_status.js",a);ye.push(we(function(){ze||"google_ad_status"in window||(Rd("//static.doubleclick.net/instream/ad_status.js",a),N("DCLKSTAT",3))},1))}
function Be(){return parseInt(O("DCLKSTAT",0),10)}
;var Ce=0,De=u("ytDomDomGetNextId")||function(){return++Ce};
t("ytDomDomGetNextId",De,void 0);var Ee={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Fe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ee||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Fe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ma=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ma,void 0);var Ge=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Ge,void 0);function He(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return La(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Ie(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=He(a,b,c,d);if(e)return e;e=++Ge.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Fe(d);if(!Ab(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Fe(b);
b.currentTarget=a;return c.call(a,b)};
g=td(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ma[e]=[a,b,c,g,d];return e}
function Je(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ma){var b=Ma[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ma[a]}}))}
;function Ke(){if(null==u("_lact",window)){var a=parseInt(O("LACT"),10);a=isFinite(a)?y()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&T();Ie(document,"keydown",T);Ie(document,"keyup",T);Ie(document,"mousedown",T);Ie(document,"mouseup",T);Ed("page-mouse",T);Ed("page-scroll",T);Ed("page-resize",T)}}
function T(){null==u("_lact",window)&&(Ke(),u("_lact",window));var a=y();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);Id("USER_ACTIVE")}
function Le(){var a=u("_lact",window);return null==a?-1:Math.max(y()-a,0)}
var Me=T;function Ne(a,b,c,d,e){this.g=a;this.i=b;this.h=c;this.f=d;this.b=e}
var Oe=1;function Pe(a){var b={};void 0!==a.g?b.trackingParams=a.g:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=Pe(a.b));return b}
;var Qe={log_event:"events",log_event2:"events",log_interaction:"interactions"},Re=Object.create(null);Re.log_event="GENERIC_EVENT_LOGGING";Re.log_event2="GENERIC_EVENT_LOGGING";Re.log_interaction="INTERACTION_LOGGING";var Se={},Te={},Ue=0,U=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",U,void 0);var Ve=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Ve,void 0);var We=u("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",We,void 0);var Xe=u("ytLoggingTransportCapturedTime_")||{};t("ytytLoggingTransportCapturedTime_",Xe,void 0);function Ye(a,b){Te[a.endpoint]=b;if(a.Z){var c=a.Z;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ve[a.Z.token]=d;c=Ze(a.endpoint,a.Z.token)}else c=Ze(a.endpoint);c.push(a.ra);d=R("web_logging_max_batch");c.length>=(Number(d||0)||20)?$e():af()}
function $e(){window.clearTimeout(Ue);if(!Na(U)){for(var a in U){var b=Se[a];if(!b){var c=Te[a];if(!c)continue;b=new c;Se[a]=b}c=void 0;var d=a,e=b,f=Qe[d],g=We[d]||{};We[d]=g;b=Math.round(M());for(c in U[d]){var h=e.b;h={client:{hl:h.Ga,gl:h.Fa,clientName:h.Ea,clientVersion:h.innertubeContextClientVersion}};O("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});h={context:h};h[f]=Ze(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var l=Ve[c];if(l)a:{var m=h,w=c;if(l.videoId)var H="VIDEO";else if(l.playlistId)H="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:w,scope:H}]}delete Ve[c];bf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete U[a]}Na(U)||
af()}}
function af(){window.clearTimeout(Ue);Ue=S($e,O("LOGGING_BATCH_TIMEOUT",1E4))}
function Ze(a,b){b||(b="");U[a]=U[a]||{};U[a][b]=U[a][b]||[];return U[a][b]}
;function cf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||M());f[a]=b;f.context={lastActivityMs:String(d?-1:Le())};a=R("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";Ye({endpoint:a,ra:f,Z:e},c)}
;function df(a,b,c){ef(ff,{attachChild:{csn:a,parentVisualElement:Pe(b),visualElements:[Pe(c)]}},void 0,void 0)}
function gf(a,b){var c=ff;if(R("interaction_logging_on_gel_web"))b.forEach(function(b){cf("visualElementShown",{csn:a,ve:Pe(b),eventType:1},c)});
else{var d=Ca(b,function(a){return Pe(a)});
ef(c,{visibilityUpdate:{csn:a,visualElements:d}})}}
function ef(a,b,c,d){b.eventTimeMs=Math.round(M());b.lactMs=Le();d?b.clientData=d:c&&(b.clientData=hf(c));Ye({endpoint:"log_interaction",ra:b},a)}
function hf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Ca(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function jf(){if(!kf&&!lf||!window.JSON)return null;try{var a=kf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=lf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var lf,mf=new jd;lf=mf.isAvailable()?new fd(mf):null;var kf,nf=new kd;kf=nf.isAvailable()?new fd(nf):null;function of(){var a=O("ROOT_VE_TYPE",void 0);return a?new Ne(void 0,a,void 0):null}
function pf(){var a=O("client-screen-nonce",void 0);a||(a=O("EVENT_ID",void 0));return a}
;function qf(a,b,c){$b.set(""+a,b,c,"/","youtube.com",!1)}
;function rf(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new Ne(a))}}
;function sf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Jb(F(window.location.href)[3]||null);f&&e.push(f);f=Jb(F(d)[3]||null);if(0<=Ba(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),tb(e,d),d=e.href),d){f=F(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
pf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Aa(d).toString(36),e=b?Lb(b):"",qf(d,e,h||5),rf(b))}else h="ST-"+Aa(d).toString(36),d=b?Lb(b):"",qf(h,d,5),rf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var w=void 0===w?window:w;c=w.location;a=Mb(a,l)+m;a=a instanceof E?a:pb(a);c.href=nb(a)}return!0}
;var tf=u("yt.abuse.botguardInitialized")||Wd;t("yt.abuse.botguardInitialized",tf,void 0);var uf=u("yt.abuse.invokeBotguard")||Xd;t("yt.abuse.invokeBotguard",uf,void 0);var vf=u("yt.abuse.dclkstatus.checkDclkStatus")||Be;t("yt.abuse.dclkstatus.checkDclkStatus",vf,void 0);var wf=u("yt.player.exports.navigate")||sf;t("yt.player.exports.navigate",wf,void 0);var xf=u("yt.util.activity.init")||Ke;t("yt.util.activity.init",xf,void 0);var yf=u("yt.util.activity.getTimeSinceActive")||Le;
t("yt.util.activity.getTimeSinceActive",yf,void 0);var zf=u("yt.util.activity.setTimestamp")||Me;t("yt.util.activity.setTimestamp",zf,void 0);function Af(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function ff(a){this.b=a||{apiaryHost:P("APIARY_HOST"),hb:P("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!O("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:P("GAPI_HINT_PARAMS"),innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Ea:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:P("INNERTUBE_CONTEXT_HL"),Fa:P("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:P("XHR_APIARY_HOST")||"",Ha:P("INNERTUBE_HOST_OVERRIDE")||""}}
function bf(a,b,c){var d={};!O("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":O("VISITOR_DATA","")},B:c,sa:"JSON",aa:d.aa,P:function(a,b){d.P&&d.P(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=ac();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=O("SESSION_INDEX",0));var g="",h=a.b.Ha;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);me(""+g+Af(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function Bf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Pa(Cf);this.assets=a.assets||{};this.attrs=a.attrs||Pa(Df);this.params=a.params||Pa(Ef);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Cf={enablejsapi:1},Df={},Ef={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Ff(a){a instanceof Bf||(a=new Bf(a));return a}
function Gf(a){var b=new Bf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==na(d)?Pa(d):d}return b}
;function Hf(a){I.call(this);this.b=[];this.g=a||this}
n(Hf,I);function If(a,b,c,d){d=td(v(d,a.g));d={target:b,name:c,na:d};b.addEventListener(c,d.na,void 0);a.b.push(d)}
function Jf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.na)}}
Hf.prototype.l=function(){Jf(this);I.prototype.l.call(this)};function Kf(){this.g=this.f=this.b=0;this.h="";var a=u("window.navigator.plugins"),b=u("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));c=a.split(" ");var d="";a="";for(var e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.h=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){if(qd)try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(w){g=null}else{var h=document.body;var l=document.createElement("object");l.setAttribute("type","application/x-shockwave-flash");g=h.appendChild(l)}if(g&&"GetVariable"in g)try{var m=g.GetVariable("$version")}catch(w){m=""}h&&l&&h.removeChild(l);(g=m||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ma(Kf);function Lf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Mf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Nf(a){a=a||"";if(window.spf){var b=a.match(Mf);spf.style.load(a,b?b[1]:"",void 0)}else Of(a)}
function Of(a){var b=Pf(a),c=document.getElementById(b),d=c&&wd(c,"loaded");d||c&&!d||(c=Qf(a,b,function(){wd(c,"loaded")||(xd(c),Id(b),S(x(Hd,b),0))}))}
function Qf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Db(a);d.rel="stylesheet";d.href=lb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Pf(a){var b=document.createElement("A");a=qb(a);tb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Aa(b)}
;var V={},Rf=(V["api.invalidparam"]=2,V.auth=150,V["drm.auth"]=150,V["heartbeat.net"]=150,V["heartbeat.servererror"]=150,V["heartbeat.stop"]=150,V["html5.unsupportedads"]=5,V["fmt.noneavailable"]=5,V["fmt.decode"]=5,V["fmt.unplayable"]=5,V["html5.missingapi"]=5,V["html5.unsupportedlive"]=5,V["drm.unavailable"]=5,V);var Sf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Tf;var Uf=Ha;Uf=Uf.toLowerCase();if(-1!=Uf.indexOf("android")){var Vf=Uf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Vf)Tf=parseFloat(Vf[1]);else{var Wf=[],Xf=0,Yf;for(Yf in Sf)Wf[Xf++]=Yf;var Zf=Uf.match("("+Wf.join("|")+")");Tf=Zf?Sf[Zf[0]]:0}}else Tf=void 0;var $f=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],ag=['audio/mp4; codecs="mp4a.40.2"'];var bg=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",bg,void 0);var cg=0;function dg(a){bg[a]=bg[a]||{count:0};var b=bg[a];b.count++;b.time=M();cg||(cg=we(eg,0));return 10<b.count?(11==b.count&&re(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function eg(){var a=M(),b;for(b in bg)6E4<a-bg[b].time&&delete bg[b];cg=0}
;function fg(a,b){this.version=a;this.args=b}
;function gg(a){this.topic=a}
gg.prototype.toString=function(){return this.topic};var hg=u("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.O;K.prototype.clear=K.prototype.clear;t("ytPubsub2Pubsub2Instance",hg,void 0);var ig=u("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",ig,void 0);var jg=u("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",jg,void 0);var kg=u("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",kg,void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function lg(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function mg(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},N("TIMING_TICK_EXPIRATION",a));return a}
function ng(){var a=mg(),b;for(b in a)xe(a[b]);N("TIMING_TICK_EXPIRATION",{})}
;function og(a,b){fg.call(this,1,arguments)}
n(og,fg);function pg(a,b){fg.call(this,1,arguments)}
n(pg,fg);var qg=new gg("aft-recorded"),rg=new gg("timing-sent");var W=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var sg=y().toString();var tg={vc:!0},ug={ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",plid:"videoId",fmt:"playerInfo.itag",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",yt_vis:"isVisible"},vg="ap c cver ei srt yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_docid ba cmt ncnp nr p pa paused pc prerender psc rc start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
wg=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],xg=!1;
function yg(a){if("_"!=a[0]){var b=a;W.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),W.mark(b))}b=zg();var c=M();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=mg();if(c=b[a])xe(c),b[a]=0;Ag()["tick_"+a]=void 0;M();R("csi_on_gel")?(b=Bg(),"_start"==a?dg("baseline_"+b)||cf("latencyActionBaselined",{clientActionNonce:b},ff,void 0):dg("tick_"+a+"_"+b)||cf("latencyActionTicked",{tickName:a,clientActionNonce:b},ff,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION"),
a=zg(),u("ytglobal.timingready_")&&b&&a._start&&(b=Cg()))){R("tighter_critical_section")&&!xg&&(lg(qg,new og(Math.round(b-a._start),void 0)),xg=!0);b=!0;c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Dg()}}
function Eg(){var a=Fg().info.yt_lt="hot_bg";Ag().info_yt_lt=a;if(R("csi_on_gel"))if("yt_lt"in ug){var b={},c=ug.yt_lt.split(".");0<=Ba(wg,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Bg();c=Object.keys(b).join("");dg("info_"+c+"_"+a)||(b.clientActionNonce=a,cf("latencyActionInfo",b,ff))}else 0<=Ba(vg,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function Cg(){var a=zg();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Dg(){ng();if(!R("csi_on_gel")){var a=zg(),b=Fg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&oa(a[d])){var e=d.slice(1);if(e in tg){var f=Ca(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Gg(f,e),Hg(),Ig(),Jg(!1,void 0),O("TIMING_ACTION")&&N("PREVIOUS_ACTION",O("TIMING_ACTION")),N("TIMING_ACTION","")}else{var g=O("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:O("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+u("ytplayer.config.assets.js");(l=W.getEntriesByName?W.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Cg();Kg()&&"youtube"==g&&(Eg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=M();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);Gg(f,e,void 0);lg(rg,new pg(b.aft+(h||0),void 0))}}}
var Ig=v(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||la,W);
function Gg(a,b,c){if(R("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||pe(a,void 0)}catch(f){pe(a,void 0)}else pe(a);Jg(!0,c)}
function Bg(){var a=Fg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=y();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(sg)for(b=1,c=0;c<sg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^sg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Fg().nonce=a}return a}
function zg(){return Fg().tick}
function Ag(){var a=Fg();"gel"in a||(a.gel={});return a.gel}
function Fg(){return u("ytcsi.data_")||Hg()}
function Hg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Jg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Kg(){var a=zg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Fg().info.yt_pvis}
;function Lg(a,b){I.call(this);this.u=this.j=a;this.M=b;this.A=!1;this.g={};this.V=this.L=null;this.N=new K;rc(this,x(sc,this.N));this.i={};this.G=this.W=this.h=this.ea=this.b=null;this.R=!1;this.H=this.w=this.m=this.K=null;this.X={};this.wa=["onReady"];this.T=new Hf(this);rc(this,x(sc,this.T));this.ca=null;this.la=NaN;this.U={};Mg(this);this.C("onDetailedError",v(this.La,this));this.C("onTabOrderChange",v(this.xa,this));this.C("onTabAnnounce",v(this.ma,this));this.C("WATCH_LATER_VIDEO_ADDED",v(this.Ma,
this));this.C("WATCH_LATER_VIDEO_REMOVED",v(this.Na,this));pc||(this.C("onMouseWheelCapture",v(this.Ja,this)),this.C("onMouseWheelRelease",v(this.Ka,this)));this.C("onAdAnnounce",v(this.ma,this));this.I=new Hf(this);rc(this,x(sc,this.I));this.da=!1;this.ba=null}
z(Lg,I);var Ng=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Lg.prototype;k.ka=function(a,b){this.f||(Og(this,a),Pg(this,b),this.A&&Qg(this))};
function Og(a,b){a.ea=b;a.b=Gf(b);a.h=a.b.attrs.id||a.h;"video-player"==a.h&&(a.h=a.M,a.b.attrs.id=a.M);a.u.id==a.h&&(a.h+="-player",a.b.attrs.id=a.h);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.M;a.W||(a.W=Rg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.u.style.width=Fb(Number(c)||c));if(c=a.b.attrs.height)a.u.style.height=Fb(Number(c)||c)}
k.Aa=function(){return this.ea};
function Qg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Sg(a){var b=a.b&&a.b.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if(("detailpage"==c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}q(a.b.disable.flash)||(c=a.b.disable,b=Lf(Kf.getInstance(),a.b.minVersion),c.flash=!b);return!a.b.disable.flash}
function Tg(a,b){var c=a.b,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(Rf[b.errorCode]||5)||-1==Ng.indexOf(b.errorCode))||!Sg(a)||((d=X(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=Ff(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Og(a,c),Pg(a,"flash"))}
function Pg(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Sg(a))){if(!q(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Tf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?$f:ag;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Ug(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Sg(a)?"flash":"unsupported":"html5"}("flash"==b?a.bb:a.cb).call(a)}}
function Ug(a){var b=!0,c=X(a);c&&a.b&&(a=a.b,b=wd(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
k.cb=function(){if(!this.R){var a=Ug(this);if(a&&"html5"==Vg(this))this.G="html5",this.A||this.J();else if(Wg(this),this.G="html5",a&&this.m)this.j.appendChild(this.m),this.J();else{this.b.loaded=!0;var b=!1;this.K=v(function(){b=!0;var a=this.j,d=Gf(this.b);u("yt.player.Application.create")(a,d);this.J()},this);
this.R=!0;a?this.K():(Sd(this.b.assets.js,this.K),Nf(this.b.assets.css),Xg(this)&&!b&&t("yt.player.Application.create",null,void 0))}}};
k.bb=function(){var a=Gf(this.b);if(!this.w){var b=X(this);b&&(this.w=document.createElement("SPAN"),this.w.tabIndex=0,If(this.T,this.w,"focus",this.pa),this.H=document.createElement("SPAN"),this.H.tabIndex=0,If(this.T,this.H,"focus",this.pa),b.parentNode&&b.parentNode.insertBefore(this.w,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Vg(this))this.G="flash",this.A||this.J();else{Wg(this);this.G=
"flash";this.b.loaded=!0;b=Kf.getInstance();var c=(-1<b.h.indexOf("Gnash")&&-1==b.h.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Lf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){b=r(b)?xb(b):b;var d=Pa(a.attrs);d.tabindex=0;var e=Pa(a.params);e.flashvars=Lb(a.args);if(qd){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;a=document.createElement("object");
for(var f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.J()}};
k.pa=function(){X(this).focus()};
function X(a){var b=xb(a.h);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.h));return b}
k.J=function(){if(!this.f){var a=X(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.R=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Tg(this);else{Mg(this);this.A=!0;a=X(this);a.addEventListener&&(this.L=Yg(this,a,"addEventListener"));a.removeEventListener&&(this.V=Yg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Yg(this,a,d))}for(var e in this.i)this.L(e,
this.i[e]);Qg(this);this.W&&this.W(this.g);this.N.O("onReady",this.g)}else this.la=S(v(this.J,this),50)}};
function Yg(a,b,c){var d=b[c];return function(){try{return a.ca=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ca=e,Q(e,"WARNING"))}}}
function Mg(a){a.A=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.U)window.clearTimeout(parseInt(c,10));a.U={};a.L=null;a.V=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.C,a);a.g.removeEventListener=v(a.Sa,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ba,a);a.g.getPlayerType=v(a.Ca,a);a.g.getCurrentVideoConfig=v(a.Aa,a);a.g.loadNewVideoConfig=v(a.ka,a);a.g.isReady=v(a.eb,a)}
k.eb=function(){return this.A};
k.C=function(a,b){if(!this.f){var c=Rg(this,b);if(c){if(!(0<=Ba(this.wa,a)||this.i[a])){var d=Zg(this,a);this.L&&this.L(a,d)}this.N.subscribe(a,c);"onReady"==a&&this.A&&S(x(c,this.g),0)}}};
k.Sa=function(a,b){if(!this.f){var c=Rg(this,b);c&&$c(this.N,a,c)}};
function Rg(a,b){var c=b;if("string"==typeof b){if(a.X[b])return a.X[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.X[b]=c}return c?c:null}
function Zg(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;p[c]=function(c){var d=S(function(){if(!a.f){a.N.O(b,c);var e=a.U,g=String(d);g in e&&delete e[g]}},0);
Oa(a.U,String(d))};
return c}
k.xa=function(a){a=a?zb:yb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.w||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
k.ma=function(a){Id("a11y-announce",a)};
k.La=function(a){Tg(this,a)};
k.Ma=function(a){Id("WATCH_LATER_VIDEO_ADDED",a)};
k.Na=function(a){Id("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ja=function(){if(!this.da){if(qc){var a=document,b=a.scrollingElement?a.scrollingElement:$a||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement;a=a.parentWindow||a.defaultView;this.ba=Xa&&gb("10")&&a.pageYOffset!=b.scrollTop?new vb(b.scrollLeft,b.scrollTop):new vb(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);If(this.I,window,"scroll",this.Qa);If(this.I,this.j,"touchmove",this.Pa)}else If(this.I,this.j,"mousewheel",this.qa),If(this.I,this.j,"wheel",this.qa);this.da=
!0}};
k.Ka=function(){Jf(this.I);this.da=!1};
k.qa=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Qa=function(){window.scrollTo(this.ba.b,this.ba.f)};
k.Pa=function(a){a.preventDefault()};
k.Ca=function(){return this.G||Vg(this)};
k.Ba=function(){return this.ca};
function Vg(a){return(a=X(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Wg(a){yg("dcp");a.cancel();Mg(a);a.G=null;a.b&&(a.b.loaded=!1);var b=X(a);"html5"==Vg(a)?Ug(a)||!Xg(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null):b&&b.destroy&&b.destroy();b=a.j;for(var c;c=b.firstChild;)b.removeChild(c);Jf(a.T);a.w=null;a.H=null}
k.cancel=function(){this.K&&Rd(this.b.assets.js,this.K);window.clearTimeout(this.la);this.R=!1};
k.l=function(){Wg(this);if(this.m&&this.b&&this.m.destroy)try{this.m.destroy()}catch(b){Q(b)}this.X=null;for(var a in this.i)p[this.i[a]]=null;this.ea=this.b=this.g=null;delete this.j;delete this.u;Lg.o.l.call(this)};
function Xg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var $g={},ah="player_uid_"+(1E9*Math.random()>>>0);function bh(a){var b="player";b=r(b)?xb(b):b;a=Ff(a);var c=ah+"_"+(b[sa]||(b[sa]=++ta)),d=$g[c];if(d)return d.ka(a),d.g;d=new Lg(b,c);$g[c]=d;Id("player-added",d.g);rc(d,x(ch,d));S(function(){d.ka(a)},0);
return d.g}
function ch(a){$g[a.M]=null}
;function dh(a,b,c){if(ra(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function eh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return dh(a)}
function fh(a,b,c,d){if(ra(a)&&!oa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Y(a){var b=a.video_id||a.videoId;if(r(b)){var c=jf()||{},d=jf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=lf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
function gh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function hh(a){I.call(this);this.g=a;this.g.subscribe("command",this.ta,this);this.h={};this.i=!1}
z(hh,I);k=hh.prototype;k.start=function(){this.i||this.f||(this.i=!0,ih(this.g,"RECEIVING"))};
k.ta=function(a,b){if(this.i&&!this.f){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=v(this.Ua,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&jh(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=kh(a,b||{}),c=this.b[a].apply(this.b,c),(c=lh(a,c))&&this.i&&!this.f&&ih(this.g,a,c))}}};
k.Ua=function(a,b){this.i&&!this.f&&ih(this.g,a,this.fa(a,b))};
k.fa=function(a,b){if(null!=b)return{value:b}};
function jh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
k.l=function(){var a=this.g;a.f||$c(a.b,"command",this.ta,this);this.g=null;for(var b in this.h)jh(this,b);hh.o.l.call(this)};function mh(a,b){hh.call(this,b);this.b=a;this.start()}
z(mh,hh);mh.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
mh.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function kh(a,b){switch(a){case "loadVideoById":return b=dh(b),Y(b),[b];case "cueVideoById":return b=dh(b),Y(b),[b];case "loadVideoByPlayerVars":return Y(b),[b];case "cueVideoByPlayerVars":return Y(b),[b];case "loadPlaylist":return b=fh(b),Y(b),[b];case "cuePlaylist":return b=fh(b),Y(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function lh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
mh.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mh.o.fa.call(this,a,b)};
mh.prototype.l=function(){mh.o.l.call(this);delete this.b};function nh(a,b,c,d){I.call(this);this.g=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.A=!!a;this.m=v(this.w,this);window.addEventListener("message",this.m)}
n(nh,I);
nh.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&r(a.data)){try{var b=Ac(a.data)}catch(c){return}if(!(null==b||this.A&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.h=this.u=a.origin:Q(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(this.j&&!(0<=Ba(this.j,b.func))||this.i(b.func,
b.args))}}};
nh.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Bc(a);c.postMessage(d,this.u)}catch(e){Q(e,"WARNING")}}};
nh.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function oh(a,b,c){nh.call(this,a,b,c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(oh,nh);function ph(){var a=!!O("WIDGET_ID_ENFORCE");a=this.f=new oh(a);var b=v(this.Ra,this);a.i=b;a.j=null;this.f.channel="widget";if(a=O("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=ph.prototype;k.Ra=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,qh(this,c)),this.i[c]=!0)}else this.va(a,b)};
k.va=function(){};
function qh(a,b){return v(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");C(this.h,this.ua,this);this.h=[]};
k.ga=function(){return null};
function rh(a,b){a.sendMessage("infoDelivery",b)}
k.ua=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.ua({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function sh(a){ph.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Oa,this));this.addEventListener("onVideoProgress",v(this.Ya,this));this.addEventListener("onVolumeChange",v(this.Za,this));this.addEventListener("onApiChange",v(this.Ta,this));this.addEventListener("onPlaybackQualityChange",v(this.Va,this));this.addEventListener("onPlaybackRateChange",v(this.Wa,this));this.addEventListener("onStateChange",v(this.Xa,this))}
z(sh,ph);k=sh.prototype;k.va=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&gh(a)){var c=b;if(ra(c[0])&&!oa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=dh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=eh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=fh.apply(window,c)}c=d}Y(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);gh(a)&&rh(this,this.ga())}};
k.Oa=function(){var a=v(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ga=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ea(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
k.Xa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());rh(this,a)};
k.Va=function(a){rh(this,{playbackQuality:a})};
k.Wa=function(a){rh(this,{playbackRate:a})};
k.Ta=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Za=function(){rh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Ya=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());rh(this,a)};
k.dispose=function(){sh.o.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function th(){I.call(this);this.b=new K;rc(this,x(sc,this.b))}
z(th,I);th.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
th.prototype.D=function(a){return this.f?!1:this.b.D(a)};
th.prototype.j=function(a,b){this.f||this.b.O.apply(this.b,arguments)};function uh(a,b,c){th.call(this);this.g=a;this.h=b;this.i=c}
z(uh,th);function ih(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Bc(a),d.h))}}
uh.prototype.l=function(){this.h=this.g=null;uh.o.l.call(this)};function vh(a,b,c){I.call(this);this.b=a;this.h=c;this.i=Ie(window,"message",v(this.j,this));this.g=new uh(this,a,b);rc(this,x(sc,this.g))}
z(vh,I);vh.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=Ac(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
vh.prototype.l=function(){Je(this.i);this.b=null;vh.o.l.call(this)};function wh(){var a=Ka(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||O("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||R("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Pa(xh);return new J(function(c,d){b.P=function(a){$d(a)?c(a):d(new yh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new yh("Unknown request error","net.unknown"))};
b.aa=function(){d(new yh("Request timed out","net.timeout"))};
ge(a,b)})}
var zh={fb:"net.badstatus",gb:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};function yh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(yh,B);var Ah=yh;function Bh(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Bh.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Ic(a)?a:Ch(a)):2===this.f&&b?(a=b.call(c,this.b),Ic(a)?a:Dh(a)):this};
Bh.prototype.getValue=function(){return this.b};
Hc(Bh);function Dh(a){var b=new Bh;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Ch(a){var b=new Bh;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Eh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fh;this.isTimeout=a instanceof Ah&&a.errorCode==zh.TIMEOUT;this.isCanceled=a instanceof Qc}
n(Eh,B);Eh.prototype.name="BiscottiError";function Fh(){B.call(this,"Biscotti ID is missing from server")}
n(Fh,B);Fh.prototype.name="BiscottiMissingError";var xh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gh=null;function Hh(){if("1"===Ka(O("PLAYER_CONFIG",{}),"args","privembed"))return Nc(Error("Biscotti ID is not available in private embed mode"));Gh||(Gh=Pc(wh().then(Ih),function(a){return Jh(2,a)}));
return Gh}
function Ih(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fh;a=a.id;Kh(a);Gh=Ch(a);Lh(18E5,2);return a}
function Jh(a,b){var c=new Eh(b);Kh("");Gh=Dh(c);0<a&&Lh(12E4,a-1);throw c;}
function Lh(a,b){S(function(){Pc(wh().then(Ih,function(a){return Jh(b,a)}),la)},a)}
function Kh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
;function Mh(){}
function Nh(a){if("1"!==Ka(O("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Hh,void 0);try{try{var b=u("yt.ads.biscotti.getId_");var c=b?b():Hh()}catch(d){c=Nc(d)}c.then(Oh,Mh);S(Nh,18E5)}catch(d){Q(d)}}}
var Ph=0;
function Oh(a){a:{try{var b=window.top.location.href}catch(Qa){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Ub,flash:pd||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?A:c;try{var d=c.history.length}catch(Qa){d=0}b.u_his=d;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=
A.screen.colorDepth);A.navigator&&A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=od?"flash":"image";if(R("enable_server_side_search_pyv")||R("enable_server_side_mweb_search_pyv")){a=window;try{var e=a.screenX;var f=a.screenY}catch(Qa){}try{var g=a.outerWidth;var h=a.outerHeight}catch(Qa){}try{var l=a.innerWidth;var m=a.innerHeight}catch(Qa){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:
void 0,a.screen?a.screen.availTop:void 0,g,h,l,m];f=window.top||A;try{if(f.document&&!f.document.body)var w=new wb(-1,-1);else{var H=(f||window).document,Ad="CSS1Compat"==H.compatMode?H.documentElement:H.body;w=(new wb(Ad.clientWidth,Ad.clientHeight)).round()}var ya=w}catch(Qa){ya=new wb(-12245933,-12245933)}w=0;window.SVGElement&&document.createElementNS&&(w|=1);ya={bc:w,bih:ya.height,biw:ya.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[wa.webkitVisibilityState||wa.mozVisibilityState||
wa.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};for(var Bd in ya)b[Bd]=ya[Bd]}b.bsq=Ph++;me("//www.youtube.com/ad_data_204",{Da:!1,B:b})}
;function Qh(){this.b=O("ALT_PREF_COOKIE_NAME","PREF");var a=$b.get(""+this.b,void 0);if(a){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
ma(Qh);var Z=u("yt.prefs.UserPrefs.prefs_")||{};t("yt.prefs.UserPrefs.prefs_",Z,void 0);function Rh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Th(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Qh.prototype.get=function(a,b){Sh(a);Rh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Qh.prototype.set=function(a,b){Sh(a);Rh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Qh.prototype.remove=function(a){Sh(a);Rh(a);delete Z[a]};
Qh.prototype.clear=function(){Z={}};var Uh=null,Vh=null,Wh=null,Xh={};function Yh(a){cf(a.payload_name,a.payload,ff,void 0,void 0)}
function Zh(a){var b=a.id;a=a.ve_type;var c=Oe++;a=new Ne(void 0,a,c,void 0,void 0);Xh[b]=a;b=pf();c=of();b&&c&&df(b,c,a)}
function $h(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(N("client-screen-nonce",b),N("ROOT_VE_TYPE",a),a=of()))for(var c in Xh){var d=Xh[c];d&&df(b,a,d)}}
function ai(a){Xh[a.id]=new Ne(a.tracking_params)}
function bi(a){var b=pf();a=Xh[a.id];b&&a&&ef(ff,{click:{csn:b,visualElement:Pe(a)}},void 0,void 0)}
function ci(a){a=a.ids;var b=pf();if(b){for(var c=[],d=0;d<a.length;d++){var e=Xh[a[d]];e&&c.push(e)}c.length&&gf(b,c)}}
function di(){var a=Uh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",N,void 0);t("yt.config.set",N,void 0);t("yt.setMsg",ve,void 0);t("yt.msgs.set",ve,void 0);t("yt.logging.errors.log",re,void 0);
t("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);Nh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Y(a.args);Uh=a=bh(a);a.addEventListener("onScreenChanged",$h);a.addEventListener("onLogClientVeCreated",Zh);a.addEventListener("onLogServerVeCreated",ai);a.addEventListener("onLogToGel",Yh);
a.addEventListener("onLogVeClicked",bi);a.addEventListener("onLogVesShown",ci);a.addEventListener("onReady",di);b=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Wh=new sh(a):O("ENABLE_POST_API")&&r(b)&&r(c)&&(Vh=new vh(window.parent,b,c),Wh=new mh(a,Vh.g));O("BG_P")&&(O("BG_I")||O("BG_IU"))&&Ud();Ae()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){pe(a+"mac_204?action_fcts=1");return!0},void 0);
var ei=td(function(){yg("ol");var a=Qh.getInstance(),b=1<window.devicePixelRatio;if(!!((Th("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Th(c)||0;d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();a=a.b;b=[];for(var e in Z)b.push(e+"="+escape(Z[e]));qf(a,b.join("&"),63072E3)}}),fi=td(function(){var a=Uh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&(Td=null);a=0;for(var b=ye.length;a<b;a++)xe(ye[a]);ye.length=0;Qd("//static.doubleclick.net/instream/ad_status.js");ze=!1;N("DCLKSTAT",0);tc(Wh,Vh);if(a=Uh)a.removeEventListener("onScreenChanged",$h),a.removeEventListener("onLogClientVeCreated",Zh),a.removeEventListener("onLogServerVeCreated",ai),a.removeEventListener("onLogToGel",Yh),a.removeEventListener("onLogVeClicked",bi),a.removeEventListener("onLogVesShown",ci),a.removeEventListener("onReady",
di),a.destroy();Xh={}});
window.addEventListener?(window.addEventListener("load",ei),window.addEventListener("unload",fi)):window.attachEvent&&(window.attachEvent("onload",ei),window.attachEvent("onunload",fi));}).call(this);
