window.BOOMR_CONSENT_CONFIG={enabled:!0},"true"=="true"&&(window.BOOMR_CONSENT_CONFIG.optInRequired=!0),function(e){"use strict";if(void 0!==e.BOOMR_CONSENT_CONFIG&&!0===e.BOOMR_CONSENT_CONFIG.enabled){e.BOOMR=void 0!==e.BOOMR?e.BOOMR:{};var o=e.BOOMR;if(o.plugins=void 0!==o.plugins?o.plugins:{},!o.plugins.ConsentInlinedPlugin){var O={v:"1",OPT_COOKIE:"BOOMR_CONSENT",OPT_IN_COOKIE_VAL:"opted-in",OPT_OUT_COOKIE_VAL:"opted-out",COOKIE_EXP:365*86400,complete:!1,enabled:!0,firedPageReady:!1,deferredOptIn:!1,deferredOptOut:!1,rtCookieFromConfig:!1,bwCookieFromConfig:!1,optOut:function(){return o.utils.setCookie(O.OPT_COOKIE,O.OPT_OUT_COOKIE_VAL,O.COOKIE_EXP)?("function"==typeof o.disable&&o.disable(),O.complete=!1,O.removeBoomerangCookies(),!0):(o.error("Can not set Opt Out cookie","ConsentInlinedPlugin"),!1)},optIn:function(){return!0===O.complete||(o.utils.setCookie(O.OPT_COOKIE,O.OPT_IN_COOKIE_VAL,O.COOKIE_EXP)?("function"==typeof o.wakeUp&&o.wakeUp(),O.complete=!0,o.addVar("cip.in","1",!0),o.addVar("cip.v",O.v,!0),o.sendBeacon(),!0):(o.error("Can not set Opt In value","ConsentInlinedPlugin"),!1))},removeBoomerangCookies:function(){var e=O.rtCookieFromConfig||"RT",i=O.bwCookieFromConfig||"BA";o.utils.removeCookie(e),o.utils.removeCookie(i)},onPageReady:function(){O.firedPageReady=!0,O.deferredOptIn&&O.optIn(),O.deferredOptOut&&O.optOut()}};e.BOOMR_OPT_OUT=function(){O.firedPageReady?O.optOut():O.deferredOptOut=!0},e.BOOMR_OPT_IN=function(){O.firedPageReady?O.optIn():O.deferredOptIn=!0},o.plugins.ConsentInlinedPlugin={init:function(i){return void 0!==i.RT&&void 0!==i.RT.cookie&&(O.rtCookieFromConfig=i.RT.cookie),void 0!==i.BW&&void 0!==i.BW.cookie&&(O.bwCookieFromConfig=i.BW.cookie),o.subscribe("page_ready",O.onPageReady,null,O),e.BOOMR_CONSENT_CONFIG.optInRequired&&o.utils.getCookie(O.OPT_COOKIE)!==O.OPT_IN_COOKIE_VAL?(O.complete=!1,this):o.utils.getCookie(O.OPT_COOKIE)===O.OPT_OUT_COOKIE_VAL?(void 0===i.RT&&(i.RT={}),i.RT.cookie="",void 0===i.BW&&(i.BW={}),i.BW.cookie="",O.complete=!1,this):(O.complete=!0,this)},is_complete:function(){return O.complete}}}}}(window);