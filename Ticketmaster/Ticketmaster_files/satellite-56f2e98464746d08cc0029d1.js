_satellite.pushAsyncScript(function(event, target, $variables){
  window.audienceSolutions = window.audienceSolutions || [];
window.TmPixel = window.TmPixel || [];

function setCookie (cname, cvalue, min, domain) {
  var dt, expires, min;
  min = min || 0;
  dt = new Date();
  dt.setTime(dt.getTime()+(min*60*1000));
  expires = min ? "; expires="+dt.toGMTString() : ''; dmn=domain ? '; domain='+domain : '';
  document.cookie = cname+"="+cvalue+expires+dmn+'; path=/';
}

var lib = 'prod';
var divolteUrl = _satellite.settings.isStaging ? 'http://divolte-dev-pub-165019629.us-east-1.elb.amazonaws.com/divolte.js' : 'http://d.t-x.io/divolte';
var ver = 'v1';
if (typeof window.localStorage !== 'undefined' && window.localStorage.getItem(
        'fanbuilderLibraryVersion')) {
    lib = window.localStorage.getItem('fanbuilderLibraryVersion');
}
if (typeof window.localStorage !== 'undefined' && window.localStorage.getItem(
        'fanbuilderLibraryDirectory')) {
    ver = window.localStorage.getItem('fanbuilderLibraryDirectory');
}
var url = document.location.protocol + '//ds.ticketmaster.com/ssp/libs/' + lib + '/fanbuilder/' + ver + '/fanbuilder.js';

function initVendorService (VendorService) {
	if (window.VendorService === undefined) return;
        var overrideDigitalData = {
            'page.pageInfo.domain': _satellite.getVar('domain'),
          	'transaction.attributes.inventoryType': _satellite.getVar('event.resaleTickets'),
            'isFeld': _satellite.getVar('Is Feld'),
            'transaction.ticketQuantity': _satellite.getVar('transaction.ticketQuantity'),
        	  'googleAnalytics.productInfo.name': _satellite.getVar('googleAnalytics.productInfo.name'),
        	  'googleAnalytics.productInfo.category': _satellite.getVar('googleAnalytics.productInfo.category'),
          	'googleAnalytics.productInfo.variant': _satellite.getVar('googleAnalytics.productInfo.variant'),	
          	'googleAnalytics.productInfo.processedItems': _satellite.getVar('googleAnalytics.productInfo.processedItems'),
          	'googleAnalytics.productInfo.confirmationBrand': _satellite.getVar('googleAnalytics.productInfo.confirmationBrand'),
            'brand': _satellite.getVar('brand'),
            'cfc': _satellite.getVar('cfc'),
      	    'phone': _satellite.getVar('user[0].profile[0].profileInfo.phone.primary'),
       		  'email': _satellite.getVar('user[0].profile[0].profileInfo.email'),
            'midp': _satellite.getVar('member id - persistant'),
          	'prevMetricsType': _satellite.getVar('prevMetricsType'),
          	'prevMetricsTimestamp': _satellite.getVar('prevMetricsTimestamp'),
          	'prevEventDelta': _satellite.getVar('prevMetricsTimestamp') && _satellite.getVar('prevMetricsType') ? window.Date.now() - _satellite.getVar('prevMetricsTimestamp') : ''
        };

  //ssp
  var env = '';
  var pixelBaseUrl = 'fb.t-x.io/ssp/';
  if (typeof window.localStorage.sspEnv != 'undefined') {
      env = window.localStorage.sspEnv;
      
      //if pulling pixels from a non-prod environment, you'll need to use the other s3 bucket
      if(env != 'prod') {
        pixelBaseUrl = 's3.amazonaws.com/prd123.fb-pixels-s3.sb1.us-east-1.tmaws-pixels/ssp/';
      }
  }
  else {
      env = 'prod';
  }
  
  
  var TM_PIXEL = _satellite.getVar('TM_PIXEL');
  if (TM_PIXEL._dvp) {
  	setCookie('_dvp', TM_PIXEL._dvp, 1060*60);
  }
  
  if (TM_PIXEL._dvs) {
  	setCookie('_dvs', TM_PIXEL._dvs, 0);
  }
  
  var options = {
      version: '0.0.1',
      debug: _satellite.readStoredSetting('debug') == 'true' ? true : false,
      data: digitalData,
      useAkamai: true,
      environment: env + '/',
      baseUrl: pixelBaseUrl,
      divolte: {
        onLoad: function () {
          _satellite.notify('DIVOLTE: Onload fired');
          var _dvs = _satellite.getVar('_dvs');
          var _dvp = _satellite.getVar('_dvp');
          
          if (_dvs) { TM_PIXEL._dvs = _satellite.getVar('_dvs'); }
          if (_dvp) { TM_PIXEL._dvp = _satellite.getVar('_dvp');}
          if (_dvp || _dvs) {
            var dmn = location.host.indexOf('ticketmaster.com')>-1 ? '.ticketmaster.com' : '';
          	setCookie('TM_PIXEL', JSON.stringify(TM_PIXEL), 0, dmn);
          }
        },
        url: divolteUrl,
          enabled: true,
          topics: ['tm-us'],
          suppressCall: false,
          isStaging: _satellite.settings.isStaging,
          autoTrack: 'events',
        	additionalPageLoadParams: [
          	{key:'memberIdPersistent', data: 'midp'},
            {key:'prevEventType', data: 'prevMetricsType'},
            {key:'prevEventTimestamp', data: 'prevMetricsTimestamp'},
            {key:'prevEventDelta', data: 'prevEventDelta'},
            {key:'orderCameFromCode', data: 'cfc'},
            {key:'phoneNumber', data: 'phone'},
            {key: 'email', data: 'email'}
        	]
      },
      rules: [
          {
              directory: 'artistvenue/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Venue_Artist/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>av_<%data.page.attributes.artistID%>_<%data.page.attributes.venueID%>.json'
          },
          {
              directory: 'artist/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Artist:/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%><%data.page.attributes.artistID%>.json'
          },
          {
              directory: 'venue/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Venue:/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%><%data.page.attributes.venueID%>.json'
          },
          {
              directory: 'event/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /EDP/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>e_<%data.page.attributes.eventID%>.json'
          },
        	{
              directory: 'upsell/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Upsell/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>e_<%data.page.attributes.eventID%>.json'
          },
        	{
              directory: 'shipping/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Shipping/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>e_<%data.page.attributes.eventID%>.json'
          },
        	{
              directory: 'login/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Log In/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>e_<%data.page.attributes.eventID%>.json'
          },
      	  {
              directory: 'billing/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Billing/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>e_<%data.page.attributes.eventID%>.json'
          },
          {
              directory: 'confirmation/',
              testField: 'data.page.pageInfo.pageName',
              testRegex: /Checkout: Confirmation/,
              urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%>c_<%data.page.attributes.eventID%>.json'
          }
      ], // array of objects creating the targeting conditions to check for files on akamai
  };
  if (TM_PIXEL.spotlight && /Checkout: Confirmation/.test(_satellite.getVar('page.pageInfo.pageName'))) {
    
      	options.divolte.additionalPageLoadParams.push({key: 'spotlightSlotNumber', data: 'spotlightSlotNumber', dataObj: TM_PIXEL.spotlight, transform: parseInt});
     	 	options.divolte.additionalPageLoadParams.push({key: 'spotlightScheduleId', data: 'spotlightScheduleId', dataObj: TM_PIXEL.spotlight, transform: parseInt});
      	options.divolte.additionalPageLoadParams.push({key: 'spotlightPageType', data: 'spotlightPageType', dataObj: TM_PIXEL.spotlight});
  }

    window.fanbuilder = new VendorService(options, overrideDigitalData);

    //client pixel groups
    var clientOptions = {
        debug: _satellite.readStoredSetting('debug') == 'true' ? true : false,
        data: digitalData,
        useAkamai: true,
      environment: env + '/',
        baseUrl: 'ds.ticketmaster.com/ssp/',
        divolte: {
            enabled: false,
            topics: ['tm-us'],
            suppressCall: true,
            isStaging: true
        },
        rules: [
            {
                directory: 'feld/',
                testField: 'isFeld',
                testRegex: /1/,
                urlTemplate: '<%config.baseUrl%><%config.environment%><%currentRule.directory%><%data.page.pageInfo.pageChannel%>.json'
            }
        ] // array of objects creating the targeting conditions to check for files on akamai
    };
    window.clientPixelGroups = new VendorService(clientOptions, overrideDigitalData);
    
}

function init(){
  var x = false,
      p, s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = url;
  s.onload = s.onreadystatechange = function () {
      if (!x && (!this.readyState || this.readyState == 'complete')) {
          x = true;
        initVendorService(window.VendorService);
        }
  };
  p = document.getElementsByTagName('script')[0];
  p.parentNode.insertBefore(s, p);
}

if (typeof requirejs != 'undefined') {
  require.config({shim:{fanbuilder:{exports:'VendorService'}},paths:{fanbuilder: url.replace(/\.js$/,'') }});
  require(['fanbuilder'], function (fb) {
  	window.VendorService = fb;
    initVendorService(fb);
  });
} else {
    init();
}

});
