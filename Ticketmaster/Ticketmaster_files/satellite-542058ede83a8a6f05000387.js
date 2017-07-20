_satellite.pushAsyncScript(function(event, target, $variables){
  var pixel,adwords = _satellite.getVar('clientAdwordsConv');
var next = function(){
  if(adwords.length > 0){
  pixel = adwords.shift();
  var params = {};
  params.google_conversion_id = pixel.activityID;
  params.google_conversion_label = typeof pixel.activityLabel != 'undefined' ? pixel.activityLabel : '';
  params.google_remarketing_only = _satellite.getVar('transaction.transactionID') ? false : true;
  params.google_conversion_value = _satellite.getVar('transaction.total.basePrice');
  google_trackConversion(params);
  next();
  }
}
if(typeof window.google_trackConversion === 'undefined'){
  if(typeof jQuery != 'undefined'){
  		jQuery.getScript("//www.googleadservices.com/pagead/conversion_async.js",function(){
    		next()
  		});
  }
}else{
  next();
}

});
