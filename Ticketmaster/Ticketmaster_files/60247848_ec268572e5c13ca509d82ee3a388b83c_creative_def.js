(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'USER_EXITED_WHILE_COLLAPSED',
        reportingId: '25124701',
        url: 'https://ad.atdmt.com/c/go;p\x3d11267204672802;ev.a\x3d1;idfa\x3d;aaid\x3d;idfa_lat\x3d;aaid_lat\x3d;cache\x3d',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'USER_EXITED_WHILE_EXPANDED',
        reportingId: '25124941',
        url: 'https://ad.atdmt.com/c/go;p\x3d11267204672802;ev.a\x3d1;idfa\x3d;aaid\x3d;idfa_lat\x3d;aaid_lat\x3d;cache\x3d',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'clickTag',
        reportingId: '25126141',
        url: 'https://ad.atdmt.com/c/go;p\x3d11267204672802;ev.a\x3d1;idfa\x3d;aaid\x3d;idfa_lat\x3d;aaid_lat\x3d;cache\x3d',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'id',
        reportingId: '25125421',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'YTP Video Complete',
        reportingId: '25124461',
        videoData: null
      },
      {
        name: 'YTP Video Pause',
        reportingId: '25125181',
        videoData: null
      },
      {
        name: 'YTP Video Play',
        reportingId: '25125901',
        videoData: null
      },
      {
        name: 'YTP Video Replay',
        reportingId: '25125661',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'js_payload.min.js',
        url: '/ads/richmedia/studio/pv2/60258839/20170706134155648/BadBoys_970x66_US_User_v2/js_payload.min.js',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'backup.jpg',
        url: '/ads/richmedia/studio/pv2/60258839/20170706134155648/BadBoys_970x66_US_User_v2/backup.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'preloader_badboys_15fps_32colors.gif',
        url: '/ads/richmedia/studio/pv2/60258839/20170706134155648/BadBoys_970x66_US_User_v2/images/preloader_badboys_15fps_32colors.gif',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'fba_payload.png',
        url: '/ads/richmedia/studio/pv2/60258839/20170706134155648/BadBoys_970x66_US_User_v2/fba_payload.png',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '62303038',
        artworkType: 'HTML5',
        displayType: 'EXPANDABLE',
        width: '970',
        height: '418',
        servingPath: '/ads/richmedia/studio/pv2/60258839/20170706134155648/BadBoys_970x66_US_User_v2/index.html',
        zIndex: '0',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_174' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: {
          collapsedRect: {
            left: 0,
            top: 0,
            width: 970,
            height: 66
          },
          isPushdown: true,
          pushdownAnimationTime: 1,
          expansionMode: 'NORMAL'
        },
        imageGalleryTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'expanding';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '138205474100';
  var adId = '0';
  var templateVersion = '200_194';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
