if (typeof INTERNAL_CORE === "undefined") {
throw new Error("Attempt to extend INTERNAL_CORE with UI when INTERNAL_CORE is not defined.");
}
(function ($IC) {
if (INTERNAL_CORE.UI === undefined) {
INTERNAL_CORE.UI = {};
}
(function ($UI) {
$UI.PlainTextContainer = function (view) {
var _this = this;
var _view = view;
var	_text,
_truncationCap,
_linesLimit;
var	_f_text,
_f_truncationCap,
_f_linesLimit,
_f_sizeChanged;
$UI.PlainTextContainer.baseConstructor.call(_this, _view);
var super_validate = _this.validate;
_this.getView = function () {
return _view;
};
_this.setText = function (value) {
_text = value;
_f_text = true;
_this.invalidate();
};
_this.getText = function () {
return _text;
};
_this.setTruncationCap = function (value) {
_truncationCap = value;
_f_truncationCap = true;
_this.invalidate();
};
_this.getTruncationCap = function () {
return _truncationCap;
};
_this.setLinesLimit = function (value) {
if (value !== undefined) {
if (typeof value !== "number") {
throw new TypeError('passed value type is not "number"');
} else if (isNaN(value)) {
throw new TypeError('NaN value passed');
}
}
if (value === _linesLimit) {
return;
}
_linesLimit = value;
_f_linesLimit = true;
_this.invalidate();
};
_this.getLinesLimit = function () {
return _linesLimit;
};
_this.sizeChanged = function () {
_f_sizeChanged = true;
_this.invalidate();
};
var cacheProps = function (source, cache) {
var prop;
for (prop in cache) {
cache[prop] = source[prop];
}
};
var setCached = function (dest, cache) {
var prop;
for (prop in cache) {
dest[prop] = cache[prop];
}
};
var handleTextDisplayChanges = function () {
if (_linesLimit === undefined) {
setText(_view, _text);
} else if (_linesLimit < 1) {
setText(_view, "");
} else {
var	styleCache,
resetStyleSet;
styleCache = {
bottom: undefined,
height: undefined,
minHeight: undefined,
maxHeight: undefined
};
resetStyleSet = {
bottom: "auto",
height: "auto",
minHeight: "",
maxHeight: ""
};
cacheProps(_view.style, styleCache);
setCached(_view.style, resetStyleSet);
var	height_cache,
height_current;
_view.innerHTML = "w";
height_cache = _view.offsetHeight;
setText(_view, _text);
height_current = _view.offsetHeight;
if (height_current > height_cache) {
_view.innerHTML = "";
var words = _text.match(/[ \t\r\n,.:;|\\\/'"?!&~`]*([^ \t\r\n,.:;|\\\/'"?!&~`]+|\S+)/g);
if (words && _linesLimit > 0) {
var	i,
linesCounter,
length;
var	generatedText_current,
generatedText_cache;
generatedText_current = "";
height_current = height_cache;
i = 0;
linesCounter = 1;
length = words.length;
while (linesCounter <= _linesLimit && i < length) {
generatedText_cache = generatedText_current;
height_cache = height_current;
generatedText_current = generatedText_current + words[i];
if (i == length - 1) {
setText(_view, generatedText_current);
} else {
setText(_view, generatedText_current + _truncationCap);
}
height_current = _view.offsetHeight;
if (height_current > height_cache) {
linesCounter ++;
}
i++;
}
if (linesCounter > _linesLimit) {
setText(_view, _text);
if (_view.offsetHeight > height_cache) {
setText(_view, generatedText_cache + _truncationCap);
}
}
}
}
setCached(_view.style, styleCache);
}
};
_this.validate = function () {
if (_f_sizeChanged || _f_text || _f_truncationCap || _f_linesLimit) {
handleTextDisplayChanges();
}
_f_sizeChanged = _f_text = _f_truncationCap = _f_linesLimit = false;
super_validate();
};
var	getText,
setText;
(function () {
_f_sizeChanged = _f_text = _f_truncationCap = _f_linesLimit = false;
_truncationCap = "...";
_linesLimit = undefined;
if (_view === undefined) {
_view = document.createElement("p");
_text = "";
} else {
if ("innerText" in _view) {
_this.setText(_view.innerText);
} else {
_this.setText(_view.textContent);
}
}
if ("innerText" in _view) {
getText = function (element) {
return element.innerText;
};
setText = function (element, value) {
element.innerText = value;
};
} else {
getText = function (element) {
return element.textContent;
};
setText = function (element, value) {
element.textContent = value;
};
}
})();
};
$IC.UTILS.extend($UI.PlainTextContainer, $IC.Component);
})(INTERNAL_CORE.UI);
})(INTERNAL_CORE);
