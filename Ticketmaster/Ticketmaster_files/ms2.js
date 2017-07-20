(function() {
  var baseURL = "https://searchstax.measuredsearch.com/api/v2/track/";

  var Base64 = {

// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

}

  var measuredsearch = {

    trackClick: function(data) {
      trackingurl = getTrackingURL(data, "_searchclick");
      fireTracker(trackingurl);
    },

    track: function(data) {
      trackingurl = getTrackingURL(data, "_search");
      fireTracker(trackingurl);
    },
    
    trackFeedback: function(data) {
    	trackingurl = getTrackingURL(data, "_searchfeedback");
    },

    addToCart: function(data) {
      trackingurl = getTrackingURL(data, "_addtocart");
      fireTracker(trackingurl);
    },

    addTransaction: function(data) {
      trackingurl = getTrackingURL(data, "_addtransaction");
      fireTracker(trackingurl);
    }
  };

  function fireTracker(trackingUrl) {
        try {
            var head = document.getElementsByTagName("head").item(0);
            var script = document.createElement("script");
            script.setAttribute("async", "");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", trackingUrl);
            head.appendChild(script);
        } catch( exception ) {
            // do nothing
        }
    }

  function getTrackingURL(data, type) {
	if(data._vid == null) {
	    data._vid = getPersistentVisitorId();
	}
        data.tt = (new Date().getTime());
        data.pageUrl = encodeURIComponent(document.URL);
	var properties = {"event": type, "properties" : data};
 	var trackingURL = baseURL + "?" +
			  "data=" + Base64.encode(JSON.stringify(properties));

        return trackingURL;
    }


  function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

  /*
   * @getPersistentVisitorId: Generates a unique visitor ID that is persisted between visits.
   *
   * We assume we're in an iframe, so for Safari users we use localStorage,
   * and for everyone we use local domain cookies.
   */
  var getPersistentVisitorId = (function() {
    var key = 'ms_visitorid';
    var method = allowsThirdPartyCookies() ? 'cookie' : 'localStorage';
    var persistor = {
      localStorage: {
        set: function(id) { localStorage.setItem(key, id); },
        get: function() { return localStorage.getItem(key); }
      },
      cookie: {
        set: function(id) { createCookie(key, id, 7) },
        get: function() { return readCookie(key); }
      }
    }[method];
 
    return function() {
      var id = persistor.get();
      if(!id) {
        id = guid();
        persistor.set(id);
      }
      return id;
    };
 
    function guid() {
 
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };
 
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
             s4() + '-' + s4() + s4() + s4();
    }
 
    // Basically checks for Safari, which we know doesn't allow third-party
    // cookies. If we were thorough, we should perform an actual check of
    // generating and fetching a 3rd party cookie. But since, to my knowledge,
    // Safari is the only browser that disables these per default, this check
    // suffices for now.
    function allowsThirdPartyCookies() {
      var re = /Version\/\d+\.\d+(\.\d+)?.*Safari/;
      return !re.test(navigator.userAgent);
    }
 
  }());

  // A function that will convert an array into an API method call
  // First element of array should be a string representing the method name
  // Subsequent elements are the arguements to pass to the method, in order
  // these elements can be of whatever type the method requires
  var queueCall = function(callArray) {
    var method = callArray[0];
    var args = callArray.slice(1);

    measuredsearch[method].apply(this, args);
  };

  // loop through our existing queue, calling methods in order they were pushed
  _msq.reverse();
  while(_msq.length) {
    var entity = _msq.pop();
    queueCall(entity);
  }

  // over write the _msq, replacing the push method with 'queueCall'
  // this creates a globally accessible interface to your API through _msq.push()
  _msq = {
    push: queueCall
  };
})();
