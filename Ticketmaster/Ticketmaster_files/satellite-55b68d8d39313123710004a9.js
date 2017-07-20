_satellite.pushAsyncScript(function(event, target, $variables){
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

var d = new Date(_satellite.getVar('page.attributes.eventDate'));
var yyyymmdd = d.getFullYear().toString() + ( ( (d.getMonth()+1) > 9 ? '' : '0' ) + (d.getMonth()+1) ).toString() + ( d.getDate() > 9 ? d.getDate() : '0'+d.getDate() ).toString();

var dest = _satellite.getVar('page.attributes.city') + ', ' + _satellite.getVar('page.attributes.state')  + ', ' + _satellite.getVar('page.attributes.country');

fbq('init', '331346373656762');
fbq('track', 'PageView');

fbq('track', 'ViewContent',
	{
    page_name:    _satellite.getVar('page.pageInfo.pageName'),
    event_name:   _satellite.getVar('page.attributes.eventNameSafe'),
    event_id:     _satellite.getVar('page.attributes.eventID'),
    event_date:   _satellite.getVar('page.attributes.eventDate'),
    event_time:   _satellite.getVar('page.attributes.eventTime'),
    artist_name:  _satellite.getVar('page.attributes.artistNameSafe'),
    artist_id:    _satellite.getVar('page.attributes.artistID'),
    venue_name:   _satellite.getVar('page.attributes.venueName'),
    venue_id:     _satellite.getVar('page.attributes.venueID'),
    hostname: 		document.location.hostname,

    content_type: 'hotel',
    content_ids: _satellite.getVar('page.attributes.eventID'),
    checkin_date: yyyymmdd, 
    checkout_date: yyyymmdd,
    destination: dest,
    city: _satellite.getVar('page.attributes.city'), 
    region: _satellite.getVar('page.attributes.state'), 
    country: _satellite.getVar('page.attributes.country')
  }
);

tid = _satellite.getVar('transaction.transactionID') + '';
if( tid.length ) {
  fbq('track', 'Purchase',
    {
      value:        _satellite.getVar('transaction.total.transactionTotal'),
      currency:     _satellite.getVar('transaction.total.currency'),
    	order_id: 		_satellite.getVar('transaction.transactionID'),
      ticket_type:  ( parseInt( _satellite.getVar('transaction.attributes.isResale') + 0 ) !== 0 ) ? 'resale' : 'primary',
      page_name:    _satellite.getVar('page.pageInfo.pageName'),
      event_name:   _satellite.getVar('page.attributes.eventNameSafe'),
      event_id:     _satellite.getVar('page.attributes.eventID'),
      event_date:   _satellite.getVar('page.attributes.eventDate'),
      event_time:   _satellite.getVar('page.attributes.eventTime'),
      artist_name:  _satellite.getVar('page.attributes.artistNameSafe'),
      artist_id:    _satellite.getVar('page.attributes.artistID'),
      venue_name:   _satellite.getVar('page.attributes.venueName'),
      venue_id:     _satellite.getVar('page.attributes.venueID'),
    	hostname: 		document.location.hostname,

      content_type: 'hotel',
      content_ids: _satellite.getVar('page.attributes.eventID'),
      checkin_date: yyyymmdd, 
      checkout_date: yyyymmdd,
      destination: dest,
      city: _satellite.getVar('page.attributes.city'), 
      region: _satellite.getVar('page.attributes.state'), 
      country: _satellite.getVar('page.attributes.country')
		}
	);
}
});
