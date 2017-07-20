_satellite.pushAsyncScript(function(event, target, $variables){
      var dtmSrc = window.location.protocol + "//login.dotomi.com/ucm/UCMController?"+
	"dtm_com=28&dtm_fid=101&dtm_cid=2490&dtm_cmagic=347665&dtm_format=5";
    var dtmTag = new Array();
    dtmTag.cli_promo_id = _satellite.getVar('Conversant Promo ID');
    dtmTag.dtmc_site = "TM";
    dtmTag.dtmc_event_type = _satellite.getVar('page.category.primaryCategory');
    dtmTag.dtmc_event_category = _satellite.getVar('page.category.subCategory1');
    dtmTag.dtmc_event_league = _satellite.getVar('page.category.organization');
    dtmTag.dtmc_artist_team = _satellite.getVar('page.attributes.artistNameSafe');
    dtmTag.dtmc_event_id = _satellite.getVar('page.attributes.eventID');
    dtmTag.dtmc_ticket_type = _satellite.getVar('page.attributes.eventResaleStatus');

    dtmTag.dtm_user_token = "";
    dtmTag.dtmc_ref = document.referrer;
    dtmTag.dtmc_loc = document.location.href;
    
    function readCookieDotomi() {
	var nameEQ = "dtm_token=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
	     var c = ca[i];
	     while(c.charAt(0) == ' '){ c = c.substring(1, c.length); }
	     if(c.indexOf(nameEQ) == 0) { dtmTag.dtm_user_token = c.substring(nameEQ.length, c.length); }
	}
    }
    readCookieDotomi();

    for (var item in dtmTag){
	if(typeof dtmTag[item] != "function" && typeof dtmTag[item] != "object"){
	     dtmSrc += "&" + item + "=" + escape(dtmTag[item]);
	}
    }
    setTimeout('document.getElementById("dtmdiv").innerHTML = "";',2000);
    var dotomiNode = document.createElement("div");
    dotomiNode.style = "display:none;";
    dotomiNode.id = "dtmdiv";
    var dotomiIFrame = document.createElement("iframe");
    dotomiIFrame.name = "response_frame";
    dotomiIFrame.src = dtmSrc;
    dotomiNode.appendChild(dotomiIFrame);
    document.getElementsByTagName('body')[0].appendChild(dotomiNode);
});
