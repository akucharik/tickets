window.TmPixel = window.TmPixel || [];
window.TM.audienceSolutions = window.TM.audienceSolutions || [];

window.TM.audienceSolutions.push = function (raw) {
    var tm_pixel = _satellite.getVar('TM_PIXEL');
    var payload = {event: raw[0], data: raw[1]};
    var data = payload.data;
    var params = {};

    if (_satellite.settings.isStaging) {
        params.isStagingEnvironment = true;
    }
    if (data.bid) {
        params.browserId = data.bid;
    }
    if (data.mid) {
        params.memberId = data.mid;
    }
    if (data.pid) {
        params.memberIdPersistent = data.pid;
    }
    if (data.sid) {
        params.sessionId = data.sid;
    }
    if (data.tmsid) {
        params.sessionIdTM = data.tmsid;
    }
    if (data.imp) {
        params.impressionId = data.imp;
    }
    if (data.tmsid) {
        params.sessionIdTM = data.tmsid;
    }
    if (data.impp) {
        params.impressionIdPrevious = data.impp;
    }

    if (data.mkt) {
        params.marketId = data.mkt;
    }
    if (data.pgt) {
        params.pageType = data.pgt;
    }
    if (data.dmn) {
        params.domain = data.dmn;
    }
    if (data.eid) {
        params.eventId = data.eid;
    }
    if (data.mct) {
        params.majorCategoryId = data.mct;
    }
    if (data.mnct) {
        params.minorCategoryId = data.mnct;
    }
    if (data.aid) {
        params.artistId = data.aid;
    }

    // note: came from code not just for orders
    if (data.cfc) {
        params.orderCameFromCode = data.cfc;
    }
    if (data.tqn) {
        params.orderTicketQuantity = data.tqn;
    }
    if (data.ort) {
        params.orderTotal = data.ort;
    }
    if (digitalData && digitalData.transaction && digitalData.transaction.transactionID) {
        params.orderId = digitalData.transaction.transactionID;
    }
    if (_satellite.getVar('transaction.transactionID')) {
        params.orderConfirmationCode = _satellite.getVar('transaction.transactionID');
    }
    if (data.fvt) {
        try {
            params.orderFaceValueTotal = parseInt(data.fvt).toFixed(2);
        } catch (e) {
        }
        ;
    }
    if (data.ftt) {
        params.orderFeeTotal = data.ftt;
    }
    if (data.tct) {
        params.orderFaceValueTotal = data.tct;
    }

    if (data.qry) {
        params.searchQuery = data.qry;
    }
    if (data.pgn) {
        params.searchPageNumber = data.pgn;
    }

    try {
        if (data.res) {
            params.searchEventIds = data.res.split(',');
        }
    } catch (e) {
    }

    try {
        if (data.res2) {
            params.searchEventIdsPartners = data.res2.split(',');
        }
    } catch (e) {
    }

    if (data.tml) {
        params.tmLink = data.tml;
    }
    if (data.dst) {
        params.destination = data.dst;
    }

    if (data.fbu) {
        params.facebookUserId = data.fbu;
    }
    if (data.fbt) {
        params.facebookToken = data.fbt;
    }

    if (data.ntf_err) {
        params.ntfFailureType = data.ntf_err;
    }
    if (data.ntf_bec) {
        params.ntfBackendErrorCode = data.ntf_bec;
    }
    if (data.ntf_rfc) {
        params.ntfReserveFailureCode = data.ntf_rfc;
    }
    if (data.ntf_snr) {
        params.ntfSeatsNotReserved = data.ntf_snr;
    }

    // recos
    try {
        if (data.rec) {

            params.recommendations = [];
            var recos = data.rec.indexOf(',') > -1 ? data.rec.split(',') : data.rec;
            recos.forEach(function (item, ind) {

                var reco = item.split('|');
                params.recommendations.push(
                    {artistId: reco[0], slotNumber: reco[1], strategyName: reco[2]});

            });

        }
    } catch (e) {
        _satellite.notify('Rec error:' + e.message);
    }

    if (data.plc) {
        params.placement = data.plc;
    }

    // if transaction page and session data has spotlight info, send it
    if (tm_pixel.spotlight && params.orderConfirmationCode) {
        data.data = tm_pixel.spotlight;
    }
    // need to figure out if params passed should be extracted
    if (data.data && (payload.event.match(/^sptLght/) || params.orderConfirmationCode)) {
        try {
            var slots = data.data.split('|');
            if (slots.length > 0) {
                params.spotlightSlotNumber = parseInt(slots[0]);
            }

            if (slots.length > 1) {
                params.spotlightScheduleId = parseInt(slots[1]);
            }

            if (slots.length > 2) {
                params.spotlightPageType = slots[2];
            }
          
        }
        catch (e) {

        }
    }

    if (data.et) {

        params.exactTarget = data.et;

    }

    params.topics = ['deprecate'];

  window.TmPixel.push({event:payload.event, data: params, sendAll: true});
};
window.TM.audienceSolutions.forEach(function (item,ind) {
    window.TM.audienceSolutions.push(item);
});

