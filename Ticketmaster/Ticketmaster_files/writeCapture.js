
(function($,global) {
var doc = global.document;
function doEvil(code) {
var div = doc.createElement('div');
doc.body.insertBefore(div,null);
$.replaceWith(div,'<script type="text/javascript">'+code+'</script>');
}
$ = $ || (function(jQuery) {
return {
ajax: jQuery.ajax,
$: function(s) { return jQuery(s)[0]; },
replaceWith: function(selector,content) {
var el = jQuery(selector)[0];
var next = el.nextSibling, parent = el.parentNode;
jQuery(el).remove();
if ( next ) {
jQuery(next).before( content );
} else {
jQuery(parent).append( content );
}
},
onLoad: function(fn) {
jQuery(fn);
},
copyAttrs: function(src,dest) {
var el = jQuery(dest), attrs = src.attributes;
for (var i = 0, len = attrs.length; i < len; i++) {
if(attrs[i] && attrs[i].value) {
try {
el.attr(attrs[i].name,attrs[i].value);
} catch(e) { }
}
}
}
};
})(global.jQuery);
$.copyAttrs = $.copyAttrs || function() {};
$.onLoad = $.onLoad || function() {
throw "error: autoAsync cannot be used without jQuery " +
"or defining writeCaptureSupport.onLoad";
};
function each(array,fn) {
for(var i =0, len = array.length; i < len; i++) {
if( fn(array[i]) === false) return;
}
}
function isFunction(o) {
return Object.prototype.toString.call(o) === "[object Function]";
}
function isString(o) {
return Object.prototype.toString.call(o) === "[object String]";
}
function slice(array,start,end) {
return Array.prototype.slice.call(array,start || 0,end || array && array.length);
}
function any(array,fn) {
var result = false;
each(array,check);
function check(it) {
return !(result = fn(it));
}
return result;
}
function SubQ(parent) {
this._queue = [];
this._children = [];
this._parent = parent;
if(parent) parent._addChild(this);
}
SubQ.prototype = {
_addChild: function(q) {
this._children.push(q);
},
push: function (task) {
this._queue.push(task);
this._bubble('_doRun');
},
pause: function() {
this._bubble('_doPause');
},
resume: function() {
this._bubble('_doResume');
},
_bubble: function(name) {
var root = this;
while(!root[name]) {
root = root._parent;
}
return root[name]();
},
_next: function() {
if(any(this._children,runNext)) return true;
function runNext(c) {
return c._next();
}
var task = this._queue.shift();
if(task) {
task();
}
return !!task;
}
};
function Q(parent) {
if(parent) {
return new SubQ(parent);
}
SubQ.call(this);
this.paused = 0;
}
Q.prototype = (function() {
function f() {}
f.prototype = SubQ.prototype;
return new f();
})();
Q.prototype._doRun = function() {
if(!this.running) {
this.running = true;
try {
while(this.paused < 1 && this._next()){}
} finally {
this.running = false;
}
}
};
Q.prototype._doPause= function() {
this.paused++;
};
Q.prototype._doResume = function() {
this.paused--;
this._doRun();
};
function MockDocument() { }
MockDocument.prototype = {
_html: '',
open: function( ) {
this._opened = true;
if(this._delegate) {
this._delegate.open();
}
},
write: function(s) {
if(this._closed) return;
this._written = true;
if(this._delegate) {
this._delegate.write(s);
} else {
this._html += s;
}
},
writeln: function(s) {
this.write(s + '\n');
},
close: function( ) {
this._closed = true;
if(this._delegate) {
this._delegate.close();
}
},
copyTo: function(d) {
this._delegate = d;
d.foobar = true;
if(this._opened) {
d.open();
}
if(this._written) {
d.write(this._html);
}
if(this._closed) {
d.close();
}
}
};
var canCall = (function() {
var f = { f: doc.getElementById };
try {
f.f.call(doc,'abc');
return true;
} catch(e) {
return false;
}
})();
function unProxy(elements) {
each(elements,function(it) {
var real = doc.getElementById(it.id);
if(!real) {
logError('<proxyGetElementById - finish>',
'no element in writen markup with id ' + it.id);
return;
}
each(it.el.childNodes,function(it) {
real.appendChild(it);
});
if(real.contentWindow) {
global.setTimeout(function() {
it.el.contentWindow.document.
copyTo(real.contentWindow.document);
},1);
}
$.copyAttrs(it.el,real);
});
}
function getOption(name,options) {
if(options && options[name] === false) {
return false;
}
return options && options[name] || self[name];
}
function capture(context,options) {
var tempEls = [],
proxy = getOption('proxyGetElementById',options),
forceLast = getOption('forceLastScriptTag',options),
writeOnGet = getOption('writeOnGetElementById',options),
immediate = getOption('immediateWrites', options),
state = {
write: doc.write,
writeln: doc.writeln,
finish: function() {},
out: ''
};
context.state = state;
doc.write = immediate ? immediateWrite : replacementWrite;
doc.writeln = immediate ? immediateWriteln : replacementWriteln;
if(proxy || writeOnGet) {
state.getEl = doc.getElementById;
doc.getElementById = getEl;
if(writeOnGet) {
findEl = writeThenGet;
} else {
findEl = makeTemp;
state.finish = function() {
unProxy(tempEls);
};
}
}
if(forceLast) {
state.getByTag = doc.getElementsByTagName;
doc.getElementsByTagName = function(name) {
var result = slice(canCall ? state.getByTag.call(doc,name) :
state.getByTag(name));
if(name === 'script') {
result.push( $.$(context.target) );
}
return result;
};
var f = state.finish;
state.finish = function() {
f();
doc.getElementsByTagName = state.getByTag;
};
}
function replacementWrite(s) {
state.out +=  s;
}
function replacementWriteln(s) {
state.out +=  s + '\n';
}
function immediateWrite(s) {
var target = $.$(context.target);
var div = doc.createElement('div');
target.parentNode.insertBefore(div,target);
$.replaceWith(div,sanitize(s));
}
function immediateWriteln(s) {
var target = $.$(context.target);
var div = doc.createElement('div');
target.parentNode.insertBefore(div,target);
$.replaceWith(div,sanitize(s) + '\n');
}
function makeTemp(id) {
var t = doc.createElement('div');
tempEls.push({id:id,el:t});
t.contentWindow = { document: new MockDocument() };
return t;
}
function writeThenGet(id) {
var target = $.$(context.target);
var div = doc.createElement('div');
target.parentNode.insertBefore(div,target);
$.replaceWith(div,state.out);
state.out = '';
return canCall ? state.getEl.call(doc,id) :
state.getEl(id);
}
function getEl(id) {
var result = canCall ? state.getEl.call(doc,id) :
state.getEl(id);
return result || findEl(id);
}
return state;
}
function uncapture(state) {
doc.write = state.write;
doc.writeln = state.writeln;
if(state.getEl) {
doc.getElementById = state.getEl;
}
return state.out;
}
function clean(code) {
return code && code.replace(/^\s*<!(\[CDATA\[|--)/,'').replace(/(\]\]|--)>\s*$/,'');
}
function ignore() {}
function doLog(code,error) {
console.error("Error",error,"executing code:",code);
}
var logError = isFunction(global.console && console.error) ?
doLog : ignore;
function captureWrite(code,context,options) {
var state = capture(context,options);
try {
doEvil(clean(code));
} catch(e) {
logError(code,e);
} finally {
uncapture(state);
}
return state;
}
function isXDomain(src) {
var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec(src);
return parts && ( parts[1] && parts[1] != location.protocol || parts[2] != location.host );
}
function attrPattern(name) {
return new RegExp('[\\s\\r\\n]'+name+'=(?:(["\'])([\\s\\S]*?)\\1|([^\\s>]+))','i');
}
function matchAttr(name) {
var regex = attrPattern(name);
return function(tag) {
var match = regex.exec(tag) || [];
return match[2] || match[3];
};
}
var SCRIPT_TAGS = /(<script[^>]*>)([\s\S]*?)<\/script>/ig,
SCRIPT_2 = /<script[^>]*\/>/ig,
SRC_REGEX = attrPattern('src'),
SRC_ATTR = matchAttr('src'),
TYPE_ATTR = matchAttr('type'),
LANG_ATTR = matchAttr('language'),
GLOBAL = "__document_write_ajax_callbacks__",
DIV_PREFIX = "__document_write_ajax_div-",
TEMPLATE = "window['"+GLOBAL+"']['%d']();",
callbacks = global[GLOBAL] = {},
TEMPLATE_TAG = '<script type="text/javascript">' + TEMPLATE + '</script>',
global_id = 0;
function nextId() {
return (++global_id).toString();
}
function normalizeOptions(options,callback) {
var done;
if(isFunction(options)) {
done = options;
options = null;
}
options = options || {};
done = done || options && options.done;
options.done = callback ? function() {
callback(done);
} : done;
return options;
}
var GLOBAL_Q = new Q();
var debug = [];
var logDebug = window._debugWriteCapture ? function() {} :
function (type,src,data) {
debug.push({type:type,src:src,data:data});
};
var logString = window._debugWriteCapture ? function() {} :
function () {
debug.push(arguments);
};
function newCallback(fn) {
var id = nextId();
callbacks[id] = function() {
fn();
delete callbacks[id];
};
return id;
}
function newCallbackTag(fn) {
return TEMPLATE_TAG.replace(/%d/,newCallback(fn));
}
function sanitize(html,options,parentQ,parentContext) {
var queue = parentQ && new Q(parentQ) || GLOBAL_Q;
options = normalizeOptions(options);
var done = getOption('done',options);
var doneHtml = '';
var fixUrls = getOption('fixUrls',options);
if(!isFunction(fixUrls)) {
fixUrls = function(src) { return src; };
}
if(isFunction(done)) {
doneHtml = newCallbackTag(function() {
queue.push(done);
});
}
return html.replace(SCRIPT_TAGS,proxyTag).replace(SCRIPT_2,proxyBodyless) + doneHtml;
function proxyBodyless(tag) {
return proxyTag(tag,tag.substring(0,tag.length-2)+'>','');
}
function proxyTag(element,openTag,code) {
var src = SRC_ATTR(openTag) || '',
type = TYPE_ATTR(openTag) || '',
lang = LANG_ATTR(openTag) || '',
isJs = (!type && !lang) ||
type.toLowerCase().indexOf('javascript') !== -1 ||
lang.toLowerCase().indexOf('javascript') !== -1;
var isFlash = type.toLowerCase().indexOf('vbscript') !== -1 ||
lang.toLowerCase().indexOf('vbscript') !== -1;
if (isFlash) {
return '';
}
logDebug('replace',src,element);
if(!isJs) {
return element;
}
var id = newCallback(queueScript), divId = DIV_PREFIX + id,
run, context = { target: '#' + divId, parent: parentContext };
function queueScript() {
queue.push(run);
}
if(src) {
src = fixUrls(src);
openTag = openTag.replace(SRC_REGEX,'');
if(isXDomain(src)) {
run = loadXDomain;
} else {
if(getOption('asyncAll',options)) {
run = loadAsync();
} else {
run = loadSync;
}
}
} else {
run = runInline;
}
function runInline() {
captureHtml(code);
}
function loadSync() {
$.ajax({
url: src,
type: 'GET',
dataType: 'text',
async: false,
success: function(html) {
captureHtml(html);
}
});
}
function logAjaxError(xhr,status,error) {
logError("<XHR for "+src+">",error);
queue.resume();
}
function setupResume() {
return newCallbackTag(function() {
queue.resume();
});
}
function loadAsync() {
var ready, scriptText;
function captureAndResume(script,status) {
if(!ready) {
scriptText = script;
return;
}
try {
captureHtml(script, setupResume());
} catch(e) {
logError(script,e);
}
}
$.ajax({
url: src,
type: 'GET',
dataType: 'text',
async: true,
success: captureAndResume,
error: logAjaxError
});
return function() {
ready = true;
if(scriptText) {
captureHtml(scriptText);
} else {
queue.pause();
}
};
}
function loadXDomain(cb) {
var state = capture(context,options);
queue.pause();
logDebug('pause',src);
doXDomainLoad(context.target,src,captureAndResume);
function captureAndResume(xhr,st,error) {
logDebug('out', src, state.out);
html(uncapture(state),
newCallbackTag(state.finish) + setupResume());
logDebug('resume',src);
}
}
function captureHtml(script, cb) {
var state = captureWrite(script,context,options);
cb = newCallbackTag(state.finish) + (cb || '');
html(state.out,cb);
}
function safeOpts(options) {
var copy = {};
for(var i in options) {
if(options.hasOwnProperty(i)) {
copy[i] = options[i];
}
}
delete copy.done;
return copy;
}
function html(markup,cb) {
$.replaceWith(context.target,sanitize(markup,safeOpts(options),queue,context) + (cb || ''));
}
return '<div style="display: none" id="'+divId+'"></div>' + openTag +
TEMPLATE.replace(/%d/,id) + '</script>';
}
}
function doXDomainLoad(target,url,success) {
var script = document.createElement("script");
script.src = url;
target = $.$(target);
var done = false, parent = target.parentNode;
script.onload = script.onreadystatechange = function(){
if ( !done && (!this.readyState ||
this.readyState == "loaded" || this.readyState == "complete") ) {
done = true;
success();
script.onload = script.onreadystatechange = null;
parent.removeChild( script );
}
};
parent.insertBefore(script,target);
}
function sanitizeSerial(fragments,done) {
var queue = GLOBAL_Q;
each(fragments, function (f) {
queue.push(run);
function run() {
f.action(sanitize(f.html,f.options,queue),f);
}
});
if(done) {
queue.push(done);
}
}
function findLastChild(el) {
var n = el;
while(n && n.nodeType === 1) {
el = n;
n = n.lastChild;
while(n && n.nodeType !== 1) {
n = n.previousSibling;
}
}
return el;
}
function autoCapture(done) {
var write = doc.write,
writeln = doc.writeln,
currentScript,
autoQ = [];
doc.writeln = function(s) {
doc.write(s+'\n');
};
var state;
doc.write = function(s) {
var scriptEl = findLastChild(doc.body);
if(scriptEl !== currentScript) {
currentScript = scriptEl;
autoQ.push(state = {
el: scriptEl,
out: []
});
}
state.out.push(s);
};
$.onLoad(function() {
var el, div, out, safe, doneFn;
done = normalizeOptions(done);
doneFn = done.done;
done.done = function() {
doc.write = write;
doc.writeln = writeln;
if(doneFn) doneFn();
};
for(var i = 0, len = autoQ.length; i < len; i++ ) {
if( autoQ[i] && autoQ[i].el ){
el = autoQ[i].el;
div = doc.createElement('div');
el.parentNode.insertBefore( div, el.nextSibling );
out = autoQ[i].out.join('');
safe = len - i === 1 ? sanitize(out,done) : sanitize(out);
$.replaceWith(div,safe);
}
}
});
}
function extsrc(cb) {
var scripts = document.getElementsByTagName('script'),
s,o, html, q, ext, async, doneCount = 0,
done = cb ? newCallbackTag(function() {
if(++doneCount >= exts.length) {
cb();
}
}) : '',
exts = [];
for(var i = 0, len = scripts.length; i < len; i++) {
s = scripts[i];
ext = s.getAttribute('extsrc');
async = s.getAttribute('asyncsrc');
if(ext || async) {
exts.push({ext:ext,async:async,s:s});
}
}
for(i = 0, len = exts.length; i < len; i++) {
o = exts[i];
if(o.ext) {
html = '<script type="text/javascript" src="'+o.ext+'"> </script>';
$.replaceWith(o.s,sanitize(html) + done);
} else if(o.async) {
html = '<script type="text/javascript" src="'+o.async+'"> </script>';
$.replaceWith(o.s,sanitize(html,{asyncAll:true}, new Q()) + done);
}
}
}
var name = 'writeCapture';
var self = global[name] = {
_original: global[name],
support: $,
fixUrls: function(src) {
return src.replace(/&amp;/g,'&');
},
noConflict: function() {
global[name] = this._original;
return this;
},
debug: debug,
proxyGetElementById: false,
_forTest: {
Q: Q,
GLOBAL_Q: GLOBAL_Q,
$: $,
matchAttr: matchAttr,
slice: slice,
capture: capture,
uncapture: uncapture,
captureWrite: captureWrite
},
replaceWith: function(selector,content,options) {
$.replaceWith(selector,sanitize(content,options));
},
html: function(selector,content,options) {
var el = $.$(selector);
el.innerHTML ='<span/>';
$.replaceWith(el.firstChild,sanitize(content,options));
},
load: function(selector,url,options) {
$.ajax({
url: url,
dataType: 'text',
type: "GET",
success: function(content) {
self.html(selector,content,options);
}
});
},
extsrc: extsrc,
autoAsync: autoCapture,
sanitize: sanitize,
sanitizeSerial: sanitizeSerial
};
})(this.writeCaptureSupport,this);
