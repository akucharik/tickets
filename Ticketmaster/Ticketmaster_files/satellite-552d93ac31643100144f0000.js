_satellite.pushAsyncScript(function(event, target, $variables){
  window.TM = window.TM || {};

var getUrlParam = function (name, url) {
  var out = (RegExp(name + '=' + '(.+?)(&|$|#)').exec(url) || [false, false])[1];
  return !!out ? decodeURI(out) : out;
};

var checkFacebook = function (callback) {

    _satellite.notify('Checking Facebook', 'Divolte: ');
    if (typeof window.FB !== 'undefined' && typeof window.tmfb != 'undefined' && window.tmfb.enabled) {

        window.tmfb.after_load(function () {

            window.FB.Event.subscribe('auth.login', function () {
                _satellite.notify('tmfb after login');
                var session = window.tmfb.session();
                self.queue.push(['facebook_login', {data:{
                    facebookUserId: session.userID || 'tmfb session error',
                    facebookToken: session.accessToken || 'tmfb session error'
                }}]);
            });

            window.FB.Event.subscribe('auth.logout', function () {
                _satellite.notify('tmfb after logout');
                self.queue.push(['facebook_logout', {}]);
            });


            var data = {};
            if (tmfb.is_connected()) {
                var session = tmfb.session();
                data.facebookUserId = session.userID;
                data.facebookToken = session.accessToken;
            } else if (tmfb.is_logged_in()) {
                data.facebookToken = "not_authorized";
            } else {
                data.facebookToken = "not_logged_in";
            }
            callback(null, data);
        });

    } else {
        callback({message: 'Facebook Not Found'}, null);
    }

};

var checkSearch = function (callback) {

    if (/: Search:/.test(_satellite.getVar('page.pageInfo.pageName'))) {

        var eventList = {tm: [], partner: []};
        jQuery(document).bind('searchresultsdisplay', function () {
            jQuery.find('#srch_results .event a.url').each(function (a) {

                var match = a.href.match(/\/event\/([^(\?|$|\/)]+)/);
                var eventId;
                if (match && match[1]) {
                    eventList.tm.push(match[1]);
                } else if (eventId = getUrlParam('eventid', a.href)) {
                    eventList.partner.push(eventId);
                }
            });
            
            var searchPageNum;
            if(typeof global !== 'undefined' && typeof global.get === 'function' ) {
              searchPageNum = global.get('pages') && global.get('pages').current || 1;
            } 
            else {
              searchPageNum = 1;
            }

            var data = {
                searchEventIds: eventList.tm,
                searchEventIdsPartners: eventList.partner,
                searchPageNumber: searchPageNum
            };

            callback(null, data);
        });
    } else {
        callback(null, null);
    }

};

var data = {};
checkSearch(function (err, search) {
    if (!err) {
        if (search) {
          data.searchPageNumber = search.searchPageNumber;
          if(search.searchEventIds){
            data.searchEventIds = search.searchEventIds;
          }
          if(search.searchEventIdsPartners){
            data.searchEventIdsPartners = search.searchEventIdsPartners;
          }
        } else {
            _satellite.notify('Not a search page');
        }
    } else {
        _satellite.notify('Search Data Collection Error');
    }
});

var attempts = 0;
(function waitForFacebook(){
    attempts++;
    if(typeof window.FB !== 'undefined'){
      checkFacebook(function (err, fb) {
          if (!err) {
              if (fb) {
                  data.facebookToken = fb.facebookToken;
                  data.facebookUserId = fb.facebookUserId;
              } else {
                  _satellite.notify('Facebook Not Enabled');
              }

          } else {
              _satellite.notify('Facebook Error');
          }
        
           window.TmPixel = window.TmPixel || [];
        	 window.TmPixel.push({event: 'page_load', data: data, sendAll: true});
      
      });
    }
    else if(attempts < 20){
        setTimeout(function(){
            waitForFacebook();
        },250);
    }
    else {
          window.TmPixel = window.TmPixel || [];
        	window.TmPixel.push({event: 'page_load', data: data, sendAll: true});
    }
})();
});
