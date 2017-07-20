_satellite.pushAsyncScript(function(event, target, $variables){
  //****** DoubleClick Floodlight Campaign Manager ******//

if (typeof jQuery != "undefined") {
    var rnd=Math.random() * 1000000;
 	  var src;
		src = '//5108954.fls.doubleclick.net/activityi;src=5108954;type=fnaud;cat=retarget';
    src += ';u4=' + _satellite.getVar('page.pageInfo.pageName');
    src += ';u8=' + _satellite.getVar('page.attributes.artistID');
    src += ';u9=' + _satellite.getVar('page.attributes.venueID');
    src += ';u10=0';
    src += ';u11=' + _satellite.getVar('page.category.primaryCategoryID');
    src += ';u12=' + _satellite.getVar('page.category.subCategory1ID');
    src += ';u13=' + _satellite.getVar('page.attributes.eventID');
    src += ';dc_lat=';
    src += ';dc_rdid=';
  	src += ';tag_for_child_directed_treatment=';
    src += ';ord=' + rnd;
		src += '?';
		jQuery('<iframe />', {
			src: src,
			width: 1,
			height: 1,
			frameborder: 0
		}).css('display', 'none').appendTo('body');
}
//****** End DoubleClick Floodlight CAmpaign Manager ******//
});
