!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(147),i=[t];i.push(n(149)),i.push(n(155)),i.push(n(158)),i.push(n(161)),i.push(n(163)),i.push(n(173)),i.push(n(176)),i.push(n(179)),i.push(n(182)),i.push(n(186)),i.push(n(189)),i.push(n(194)),i.push(n(197)),i.push(n(201)),i.push(n(205)),i.push(n(210)),i.push(n(211)),i.push(n(212)),i.push(n(215)),i.push(n(219)),i.push(n(224)),i.push(n(225)),h.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(82),a=n(23),o=n(16);n(126);var s=o.get("stores/directive"),u=n(88);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(129),d=n(116),f=n(130),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "25", "site_catalyst_prop": "10"}}, "integrationStringVersion": 2, "viewIds": ["10468785353"], "experiments": [{"weightDistributions": [{"entityId": "10698793768", "endOfRange": 10000}], "audienceName": "OU England country cookie and webchat hours", "name": "FE_Live Chat Test - May 2018 redesign (running 100%)", "bucketingStrategy": null, "variations": [{"id": "10700692582", "actions": [{"viewId": "10468785353", "changes": []}], "name": "Original"}, {"id": "10698793768", "actions": [{"viewId": "10468785353", "changes": [{"dependencies": [], "type": "custom_code", "id": "4e528978b5f34301a06f46b73486922a", "value": function($){// Optimizely X

var $ = window.optimizely.get("jquery");
var utils = window.optimizely.get('utils');

$(function () {

  function trackClick(clickedElement) {
    var linkId;
    if (clickedElement && clickedElement.tagName.toUpperCase() === 'A') {
      linkId = clickedElement.getAttribute('title');
    }
    console.log(linkId);
    return linkId;
  }

  function launchLiveChat() {
    // window.Comm100API.do('livechat.button.click');
    window.Comm100API.open_chat_window();
  }

  function handleClick(evt) {
    evt.preventDefault();
    var clicked = $(evt.currentTarget).find('.livechat_txt');
    var online = $(evt.currentTarget).hasClass('livechat_off') ? false : true;
    console.log('Clicked ' + online);
    if (online) {
      launchLiveChat();
      trackClick(clicked[0]);
      console.log(clicked);
    } else {
      console.log('offline');
    }

    return false;
  }

  function pgNameForCOMSCORE() {

    var sPageName = window.location.pathname;

    /* Tidy up the page name.      */
    sPageName = sPageName.replace('/courses21/', 'courses.');
    sPageName = sPageName.replace('/courses/', 'courses.');

    sPageName = sPageName.replace(/\//g, '.');
    sPageName = sPageName.replace('.htm', '');

    return sPageName;
  }

  function DaxTracking() {
    var trackedObject = $(this);
    var pageName = pgNameForCOMSCORE();
    var pageNameForDaxString = pageName.substr(pageName.length - 1) === '.' ? pageName + 'page' : pageName + '.page';

    var s = [];
    s.push("category=webchat");
    s.push("ou_ev_ty=navigation");
    s.push("ou_ev_ac=off-page");
    s.push("ou_ev_mt=click");
    s.push("ou_ev_pl=webchat-button");
    s.push("ou_ev_as=webchat-request");
    s.push("ou_ev_refas=" + pageNameForDaxString);
    s.push("ou_ev_val=none");
    s.push("ou_ev_msg=none");

    if (pageName.length === 0) return;'';
    ouClickEvent(trackedObject, s.join("&"));
  }

  utils.waitForElement('body').then(function () {

    // OU code
    $('<div id="comm100-button-2964"></div><script type="text/javascript">var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({code_plan:2964,div_id:"comm100-button-2964"}),t.site_id=1000344,t.main_code_plan=2964,e("https://ent.comm100.com/chatserver/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://entmax.comm100.com/chatserver/livechat.ashx?siteId=")},5e3)})(Comm100API||{})</script>').appendTo('body');

    $('body').append('\n      <div class="livechat_container" aria-hidden="true" role="presentation">\n        <a href="#" class="close-tooltip int-icon-btn" data-live-chat="Live chat closed" aria-label="Close chat" role="button" aria-controls="ui-id-3">\n          <i class="int-icon-remove"></i>\n        </a>\n        <div class="livechat_box livechat_inline livechat_on">\n          <div data-id="VeOmCMOeU_K" class="livechat_button"><a href="javascript:void(0)" title="Start live chat" data-live-chat="Live chat clicked" class="livechat_txt">Chat to an adviser</a></div>\n          <div class="livechat_off_message">Chat unavailable</div>\n        </div>\n      </div>\n      <style>\n        .livechat_container{position:fixed;display:none;margin:0 2em .5em;right:-20px;left:auto;bottom:41px}.livechat_container span.close-tooltip{position:absolute;top:-.5em;right:-.5em;z-index:2;background-color:#fff;border:1px solid #E21481}.livechat_container span.close-tooltip:hover{border:1px solid #fff}.livechat_button{cursor:pointer}.livechat_container span.close-tooltip:hover,.livechat_container span.close-tooltip:hover i{color:#fff;background-color:#E21481}div.livechat_box{padding:10px 20px;border-radius:30px;box-shadow:0 0 2px 1px rgba(0,0,0,.1);background-color:#fff;font-family:"Myriad Pro",Calibri,Tahoma,"Lucida Grande",Arial,Helvetica,sans-serif;font-size:1.2em;border:1px solid #E21481;z-index:1}div.livechat_box,div.livechat_box a{color:#E21481;text-decoration:none}.livechat_box:hover{border:1px solid #fff}.livechat_box:hover,.livechat_box:hover a{background-color:#E21481;color:#fff}div.livechat_box a:before{content:"\\F086";font-family:FontAwesome;margin-right:8px;font-size:1.3em}div.livechat_off_message:after,div.livechat_on a:after{content:"\\F111";font-family:FontAwesome;margin-left:7px;font-size:.6em}div.livechat_on a:after{color:#63BE00}div.livechat_off_message:after{color:#E10000}.dsa i.pilot,.pilot{color:#E21481}div.livechat_box,div.livechat_box.livechat_on div.livechat_off_message{display:none}div.livechat_box.livechat_off,div.livechat_box.livechat_off div.livechat_off_message,div.livechat_box.livechat_on{display:block}div.livechat_box.livechat_inline a{text-decoration:none!important}.livechat_container i.int-icon-remove{color:#E21481}\n      </style>\n    ');

    $('body').on('click', '.livechat_on', handleClick);
  });

  utils.waitForElement('.livechat_container .close-tooltip').then(function () {
    $('.livechat_container .close-tooltip').on('click', function () {
      $('.livechat_container').fadeOut();
    });
  });

  // Delay chat
  utils.waitForElement('.livechat_container').then(function () {
    setTimeout(function () {
      $('.livechat_container').fadeIn().css("display", "block");
    }, 2000);
  });

  utils.waitForElement('#comm100-button-2964 iframe').then(function () {
    $("#comm100-button-2964 iframe").addClass('fe-iframe-chat');

    // Active Chat Button
    function chatActiveButton() {
      $('.livechat_button a').show();
      $('.livechat_box').removeClass("livechat_off");
      $('.livechat_button a').text("Chat to an adviser");
      $('.livechat_button a').parents('.livechat_box').addClass('livechat_on');
    }

    // Not Active Chat Button
    function chatNotActiveButton() {
      $('.livechat_button a').text("Chat unavailable");
      $('.livechat_button a').parents('.livechat_box').addClass('livechat_off');
      $('.livechat_button a').hide();
    }

    // Function button status
    function ChatStatusButton() {
      if ($('.fe-iframe-chat').contents().find(".chatButtonContainer").hasClass("offline")) {
        console.log('Not active chat');
        chatNotActiveButton();
      } else if ($('.fe-iframe-chat').contents().find(".chatButtonContainer").hasClass("online")) {
        console.log('Active chat');
        chatActiveButton();
      }
    }
    ChatStatusButton();

    // Element to watch
    utils.waitForElement('#comm100-button-2964 iframe').then(function () {
      console.log('setInterval');
      setInterval(ChatStatusButton, 2000);
    });
  });
});
}}, {"value": "<style>.livechat_container a.close-tooltip {\n  cursor: pointer;\n  position: absolute;\n  top: -.5em;\n  right: -.5em;\n  z-index: 2;\n  background-color: #fff;\n  border: 1px solid #E21481;\n}\n\n.livechat_container a.close-tooltip:hover i {\n  color: #fff;\n  background-color: transparent !important;\n  text-decoration: none;\n}\n\n.livechat_container a.close-tooltip:hover,\n.livechat_container a.close-tooltip:hover i {\n  color: #fff;\n  background-color: #E21481;\n}\n\n.livechat_container a.close-tooltip:hover {\n  border: 1px solid #fff;\n}\n\n.livechat_on {\n  cursor: pointer;\n}\n\n.livechat_off:hover {\n  background-color: #fff !important;\n  color: #E21481 !important;\n  border: 1px solid #E21481 !important;\n  cursor: text !important;\n}\n\n.livechat_off:hover a {\n  cursor: text !important;\n}\n\n#comm100-button-2964 {\n  display: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "31274401-88E8-4AFA-A2A3-4E004735885B"}]}], "name": "Variation #1: Challenger with Chat Box Pop Up"}], "audienceIds": ["or", "9154430636"], "changes": null, "id": "10704403758", "integrationSettings": null}], "id": "10701751732", "weightDistributions": null, "name": "FE_Live Chat Test - May 2018 redesign (running 100%)", "groupId": null, "commitId": "11380457603", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "FF54A615-A12C-4FA4-9F3E-7C3CBF35A8F7", "value": function($){var sCheck = setInterval(function() {
  console.log(window.s ? 'found s' : 'Cant find s yet');
  if (window.s) {
    clearInterval(sCheck);
    window.s.ActivityMap.link = function(clickedElement) {
      var linkId;
     console.log(clickedElement);
      if(clickedElement && clickedElement.tagName.toUpperCase() === 'A'){
         linkId = clickedElement.getAttribute('data-live-chat') || clickedElement.getAttribute('title');
          console.log('ActivityMap.link: ',linkId);            
      }
      return linkId;
    };

  }
},500);
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "25", "site_catalyst_prop": "10"}, "10793941872": {}}, "integrationStringVersion": 2, "viewIds": ["12170365081"], "experiments": [{"weightDistributions": [{"entityId": "12175940043", "endOfRange": 5000}, {"entityId": "12122914381", "endOfRange": 10000}], "audienceName": "Exclude IE 8-10 and OU/FE traffic & only England cookie", "name": "FE_060_Fees_&_Funding_Page", "bucketingStrategy": null, "variations": [{"id": "12175940043", "actions": [{"viewId": "12170365081", "changes": []}], "name": "Original"}, {"id": "12122914381", "actions": [{"viewId": "12170365081", "changes": [{"dependencies": [], "type": "custom_code", "id": "BA5DE869-1E50-44CA-800E-941159585597", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add name space
utils.waitForElement('body').then(function(){
	$('body').addClass('fe60');
});


// Hide old content
utils.waitForElement('.int-hero').then(function(){
   $('main .int-container .int-container').remove();
   $('main .int-container .int-promo.int-cta').remove();
   $('main .int-container .int-hero').remove();
});

// Update hero
utils.waitForElement('.int-form__course-search').then(function(){
   //$('.int-hero').addClass('int-turquoise').removeClass('int-darkGreen');
   //$('.int-hero .int-button').remove();

   // Insert new content
   setTimeout(function () {

var newContent = '<!-- Hero-->'+
'<div class="interaction int-hero fe-int-image int-turquoise">'+
'    <div class="int-row">'+
'        <div class="int-grid7">'+
'            <section class="int-paddedMultiLine">'+
'                <h1><span>Fees and funding in England</span></h1>'+
'            </section>'+
'            <p class="int-intro-text">Qualifications from The Open University are highly respected and have the same academic value as qualifications from any other UK university.</p>'+
'            <p>OU courses are:</p>'+
'            <ul>'+
'                <li>two-thirds the cost of most other English universities</li>'+
'                <li>ideal for balancing work with study – 76% of our students work</li>'+
'                <li>available via a range of funding options</li>'+
'                <li>great for careers – 75% of graduates say their courses progressed their careers.</li>'+
'            </ul>'+
'            <p>Invest in your future, at The Open University.</p>'+
'        </div>'+
'        <div class="int-grid5 image image--align-center" style="background-image: url("https://cdn.optimizely.com/img/221317523/d289bb8036324d2aa6ed24bf85bdd5de.jpg");">'+
'            <img src="" class="fullwidth" alt="OU Fees and Funding graphic">'+
'        </div>'+
'    </div>'+
'</div>'+
''+
'<!-- Tabs-->'+
'<div id="ou-courses-tabs" class="int-tab">'+
''+
'    <div class="tabs" role="tablist">'+
'      <a href="#how-much-cost-tab" class="qual-tab-click active" aria-controls="how-much-cost-tab" role="tab" aria-selected="true">How much will it cost?</a>'+
'      <a href="#funding-options-tab" class="qual-tab-click" aria-controls="funding-options-tab" role="tab" aria-selected="false">Funding options</a>'+
'      <a href="#advantages-ou-study-tab" class="qual-tab-click" aria-controls="advantages-ou-study-tab" role="tab" aria-selected="false">Advantages of OU study</a>'+
'      <a href="#faqs-tab" class="qual-tab-click fe-faq-tab-click" aria-controls="faqs-tab" role="tab" aria-selected="false">FAQs</a>'+
'    </div>'+
'  '+
'    <div class="panels">'+
''+
'      <div id="how-much-cost-tab">'+
'            '+
'            <div class="fe-studies-form">'+
'                <label for="fe-studies-form-select-course-type" id="fe-studies-form-label" class="int-label fe-studies-form__label">I would like to study a</label>'+
'                '+
'                <div class="int-row">'+
'                    <div class="int-grid7">'+
'                        <select name="fe-studies-form-select-course-type" id="fe-studies-form-select-course-type" aria-labelledby="fe-studies-form-select-course-type" class="fe-studies-form__select-course-type int-form__select form-control is-error">'+
'                            <option value="bachelor-honours-degree" selected="selected">Bachelor/Honours Degree</option>'+
'                            <option value="foundation-degree">Foundation Degree</option>'+
'                            <option value="diploma-higher-education">Diploma of Higher Education</option>'+
'                            <option value="certificate-higher-education">Certificate of Higher Education</option> '+
'                        </select>'+
'                    </div>'+
'                    <div class="int-grid3">'+
'                        <label for="fe-studies-form-select-course-time" class="sr-only">Select course time</label>'+
'                        <select name="fe-studies-form-select-course-time" id="fe-studies-form-select-course-time" aria-labelledby="fe-studies-form-select-course-time" class="fe-studies-form__select-course-time int-form__select form-control is-error">'+
'                            <option value="part-time" selected="selected">Part-time</option>'+
'                            <option value="full-time">Full-time</option> '+
'                        </select>'+
'                    </div>'+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="int-row int-flex">'+
'                <div class="int-grid4">'+
'                    <div class="fe-module-box int-beigeLighter6">'+
'                        <h3 class="fe-module-box__heading">Years of study</h3>'+
'                        <p class="fe-module-box__total">'+
'                            <!-- Part Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-part-time fe-module-year">6</span>'+
'                            <span class="select-info-item foundation-degree-part-time fe-module-year">4</span>'+
'                            <span class="select-info-item diploma-higher-education-part-time fe-module-year">4</span>'+
'                            <span class="select-info-item certificate-higher-education-part-time fe-module-year">2</span>'+
'                            <!-- Full Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-full-time fe-module-year">3</span>'+
'                            <span class="select-info-item foundation-degree-full-time fe-module-year">2</span>'+
'                            <span class="select-info-item diploma-higher-education-full-time fe-module-year">2</span>'+
'                            <span class="select-info-item certificate-higher-education-full-time fe-module-year">1</span>'+
'                        </p>'+
'                        <p class="fe-module-box__desc">'+
'                            <!-- Part Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-part-time fe-module-desc">Most of our students study part time and take around six years to complete an honours degree. Part-time students typically study 16–18 hours per week during term time. Almost half of all part-time students in the UK study with the OU.</span>'+
'                            <span class="select-info-item foundation-degree-part-time fe-module-desc">Most of our students study part time and take around four years to complete their diploma. Part-time students typically study 16–18 hours per week during term time. Almost half of all part-time students in the UK study with the OU.</span>'+
'                            <span class="select-info-item diploma-higher-education-part-time fe-module-desc">Most of our students study part time and take around four years to complete their diploma. Part-time students typically study 16–18 hours per week during term time. Almost half of all part-time students in the UK study with the OU.</span>'+
'                            <span class="select-info-item certificate-higher-education-part-time fe-module-desc">Most of our students study part time and take around two years to complete their certificate. Part-time students typically study 16–18 hours per week during term time. Almost half of all part-time students in the UK study with the OU.</span>'+
'                            <!-- Full Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-full-time fe-module-desc">Full-time students typically study 32-36 hours per week during term time.</span>'+
'                            <span class="select-info-item foundation-degree-full-time fe-module-desc">Full-time students typically study 32-36 hours per week during term time.</span>'+
'                            <span class="select-info-item diploma-higher-education-full-time fe-module-desc">Full-time students typically study 32-36 hours per week during term time.</span>'+
'                            <span class="select-info-item certificate-higher-education-full-time fe-module-desc">Full-time students typically study 32-36 hours per week during term time.</span>'+
'                        </p>'+
'                        <div class="fe-module-box__footer">'+
'                            <hr />'+
'                            <p><a href="/courses/what-study-like" class="int-inline-icon-link"><span>What it\'s like to study</span>  <i class="int-icon int-icon-chevron-right"></i></a></p>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="int-grid4">'+
'                    <div class="fe-module-box int-beigeLighter6">'+
'                        <h3 class="fe-module-box__heading">Credits per year <a href="#" class="tooltipcredit tooltipIcon int-icon-btn" title="Years of study" role="button" aria-controls="Years of study"><i class="int-icon int-icon-question"></i></a></h3>'+
'                        <div class="int-tooltip int-tooltip-context int-tooltip-arrow-left tooltipcreditwrap">'+
'                            <div class="tooltip-content-container">'+
'                                <span class="fe-module-credits-tooltip">'+
'                                   <p>Credits per year</p>'+
'                                     <ul>'+
'                                      <li>You\'re awarded credits after you\'ve successfully completed a module.</li>'+
'                                      <li>For example, if you study a 60-credit module and successfully pass it, you\'ll be awarded 60 credits.</li>'+
'                                      <li>One credit represents about 10 hours of study.</li>'+
'                                     </ul>'+
'                                </span>'+
'                            </div>'+
'                            <a href="#" class="close-tooltip int-icon-btn"><i class="int-icon-remove"></i></a>'+
'                        </div>'+
'                        <p class="fe-module-box__total">'+
'                            <!-- Part Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-part-time fe-module-year-credits">60</span>'+
'                            <span class="select-info-item foundation-degree-part-time fe-module-year-credits">60</span>'+
'                            <span class="select-info-item diploma-higher-education-part-time fe-module-year-credits">60</span>'+
'                            <span class="select-info-item certificate-higher-education-part-time fe-module-year-credits">60</span>'+
'                            <!-- Full Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-full-time fe-module-year-credits">120</span>'+
'                            <span class="select-info-item foundation-degree-full-time fe-module-year-credits">120</span>'+
'                            <span class="select-info-item diploma-higher-education-full-time fe-module-year-credits">120</span>'+
'                            <span class="select-info-item certificate-higher-education-full-time fe-module-year-credits">120</span>'+
'                        </p>'+
'                        <p class="fe-module-box__desc">'+
'                            <!-- Part Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-part-time fe-module-desc-credits">A typical degree is made up of 360 credits. To complete in six years, you\'ll study 60 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <span class="select-info-item foundation-degree-part-time fe-module-desc-credits">A diploma is made up of 240 credits. To complete in four years, you\'ll study 60 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <span class="select-info-item diploma-higher-education-part-time fe-module-desc-credits">A diploma is made up of 240 credits. To complete in four years, you\'ll study 60 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <span class="select-info-item certificate-higher-education-part-time fe-module-desc-credits">A certificate is made up of 120 credits. To complete in two years, you\'ll study 60 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <!-- Full Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-full-time fe-module-desc-credits">A typical degree is made up of 360 credits. To complete in three years, you\'ll study 120 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <span class="select-info-item foundation-degree-full-time fe-module-desc-credits">A diploma is made up of 240 credits. To complete in two years, you\'ll study 120 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <span class="select-info-item diploma-higher-education-full-time fe-module-desc-credits">A diploma is made up of 240 credits. To complete in two years, you\'ll study 120 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                            <span class="select-info-item certificate-higher-education-full-time fe-module-desc-credits">A diploma is made up of 120 credits. To complete in one year, you\'ll study 120 credits a year made up of modules worth 60 or 30 credits.</span>'+
'                        </p>'+
'                        <div class="fe-module-box__footer">'+
'                            <hr />'+
'                            <p><a href="/courses/do-it/finding-time" class="int-inline-icon-link"><span>Finding time to study</span>  <i class="int-icon int-icon-chevron-right"></i></a></p>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="int-grid4">'+
'                    <div class="fe-sum-box int-turquoise">'+
'                        <h3 class="fe-sum-box__heading">Fee per year</h3>'+
'                        <p class="fe-sum-box__total">'+
'                            <!-- Part Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-part-time fe-sum-total">£2,928</span>'+
'                            <span class="select-info-item foundation-degree-part-time fe-sum-total">£2,928</span>'+
'                            <span class="select-info-item diploma-higher-education-part-time fe-sum-total">£2,928</span>'+
'                            <span class="select-info-item certificate-higher-education-part-time fe-sum-total">£2,928</span>'+
'                            <!-- Full Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-full-time fe-sum-total">£5,856</span>'+
'                            <span class="select-info-item foundation-degree-full-time fe-sum-total">£5,856</span>'+
'                            <span class="select-info-item diploma-higher-education-full-time fe-sum-total">£5,856</span>'+
'                            <span class="select-info-item certificate-higher-education-full-time fe-sum-total">£5,856</span>'+
'                        </p>'+
'                        <p class="fe-sum-box__desc">'+
'                            <!-- Part Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-part-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <span class="select-info-item foundation-degree-part-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <span class="select-info-item diploma-higher-education-part-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <span class="select-info-item certificate-higher-education-part-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <!-- Full Time -->'+
'                            <span class="select-info-item bachelor-honours-degree-full-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <span class="select-info-item foundation-degree-full-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <span class="select-info-item diploma-higher-education-full-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                            <span class="select-info-item certificate-higher-education-full-time fe-sum-total-desc">You pay per module as you study. There are lots of funding options to help you with your tuition fees – 60% of OU students in England fund their studies with a student loan, so nothing to pay up front.</span>'+
'                        </p>'+
'                        <a href="#funding-options-tab" class="loadTab int-button">Explore your funding options</a>'+
'                    </div>'+
'                </div>'+
'            </div>'+
''+
''+
''+
'            <!-- Banner CTA -->'+
''+
'            <div class="int-container fe-notice">'+
'                <div class="int-row int-turquoise">'+
'                    <div class="int-grid12">'+
'                    <div class="int-promo int-turquoise">'+
''+
'                        <div class="int-row int-flex">'+
'                        <div class="int-grid6">'+
'                            <div class="int-notice">'+
'                            <div class="int-notice-content">'+
'                                <h3>Total fee for qualification - '+
'                                    <!-- Part Time -->'+
'                                    <span class="select-info-item bachelor-honours-degree-part-time fe-total-fee-qual">£17,568*</span>'+
'                                    <span class="select-info-item foundation-degree-part-time fe-total-fee-qual">£11,712*</span>'+
'                                    <span class="select-info-item diploma-higher-education-part-time fe-total-fee-qual">£11,712*</span>'+
'                                    <span class="select-info-item certificate-higher-education-part-time fe-total-fee-qual">£5,856*</span>'+
'                                    <!-- Full Time -->'+
'                                    <span class="select-info-item bachelor-honours-degree-full-time fe-total-fee-qual">£17,568*</span>'+
'                                    <span class="select-info-item foundation-degree-full-time fe-total-fee-qual">£11,712*</span>'+
'                                    <span class="select-info-item diploma-higher-education-full-time fe-total-fee-qual">£11,712*</span>'+
'                                    <span class="select-info-item certificate-higher-education-full-time fe-total-fee-qual">£5,856*</span> '+
'                                </h3>'+
'                            </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="int-grid6">'+
'                            <div class="int-notice">'+
'                            <div class="int-notice-content">'+
'                                <h4>That\'s two-thirds of the cost of an equivalent qualification offered at most other universities in England.</h4>'+
'                            </div>'+
'                            </div>'+
'                        </div>'+
'                        </div>'+
''+
'                    </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
''+
'            <!-- Additional cost -->'+
'            <div class="int-container">'+
'                <h2>Additional cost considerations</h2>'+
'                <div class="int-row">'+
'                    <div class="int-grid6">'+
'                        <p>While your module fees cover your tuition, assessment and study materials, it\'s worth thinking ahead about some of the other costs that can come with studying. If you\'re on a low income you may be eligible for help with some of these costs after you start studying.</p>'+
'                        <h2>Things to consider:</h2>'+
'                        <ul>'+
'                            <li>You\'ll need your own computer and broadband to access online resources and tutorials.</li>'+
'                            <li>There may also be additional costs associated with set books and travel to tutorials.</li>'+
'                            <li>If you choose a module that includes a residential school, the cost of travel to the venue isn\'t included in the module fee. And depending on the module, there may also be additional costs for meals and accommodation.</li>'+
'                        </ul>'+
'                        <p>You can find out more about additional costs in the description for your chosen qualification. </p>'+
'                    </div>'+
'                    <div class="int-grid6">'+
'                        <img src="//cdn.optimizely.com/img/221317523/9d4a861b866147119480ac0d62af4f67.jpg" class="maxwidth" alt="">'+
'                    </div>'+
'                </div>'+
'            </div>'+
''+
'            <div class="int-row">'+
'                <hr>'+
'            </div>'+
''+
'            <p>*Fees quoted are for students in England starting study before 31 July 2019.</br>'+
'            Fees normally increase annually in line with inflation and the University\'s strategic approach to fees.</br>'+
'            Fees quoted are typical fees but may vary depending on your course. <a href="/courses/">View all courses</a>.</p>'+
''+
'            <div class="int-row">'+
'                <hr>'+
'            </div>'+
'         '+
'      </div>'+
'  '+
'      <div id="funding-options-tab">'+
'            <h2>Funding options</h2>'+
'            <div class="tab-intro">'+
'                <p>There\'s a wide range of funding available to help you with the cost of study.</p>'+
'                <p>Check your options with our <a href="/courses/fees-and-funding/finance-finder">Finance Finder</a> or have a look at some of the most popular funding methods below.</p>'+
'            </div>'+
'            <div class="int-row int-flex fe-int-row-xs">'+
'                <div class="int-grid4">'+
'                    <div class="fe-card">'+
'                        <h2 class="fe-card__heading">Student loan</h2>'+
'                        <div class="fe-card__body">'+
'                            <p>60% of OU students in England fund their studies with a Part-Time Tuition Fee Loan from Student Finance England.</p>'+
'                            <ul>'+
'                                <li>Student Finance England will pay your fees directly to the OU, so you don\'t pay anything up front.</li>'+
'                                <li>You\'ll pay nothing for up to four years, and then only once you\'re earning over the income threshold (currently £25,000 a year).</li>'+
'                                <li>Tuition fee loans aren\'t means tested, so your income and credit history won\'t affect the amount you\'re entitled to.</li>'+
'                            </ul>'+
'                        </div>'+
'                        <div class="fe-card__footer">'+
'                            <hr>'+
'                            <a href="/courses/fees-and-funding/loan-england-finance" class="int-inline-icon-link"><span>More about student loans</span>  <i class="int-icon int-icon-chevron-right"></i></a>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="int-grid4">'+
'                        <div class="fe-card">'+
'                                <h2 class="fe-card__heading">Open University Student Budget Account (OUSBA)</h2>'+
'                                <div class="fe-card__body">'+
'                                    <p>OUSBA allows you to break down the cost of your module into manageable monthly chunks.</p>'+
'                                    <ul>'+
'                                        <li>OUSBA pays your module fees directly to the OU, so you don\'t pay anything up front.</li>'+
'                                        <li>Repay monthly over the duration of the module to spread the cost or make a single lump sum repayment just before your module starts.</li>'+
'                                        <li>If you\'re worried about your credit history, OUSBA also offers you the option to submit a joint loan application with a third party.</li>'+
'                                    </ul>'+
'                                </div>'+
'                                <div class="fe-card__footer">'+
'                                    <hr>'+
'                                    <a href="/courses/fees-and-funding/ousba" class="int-inline-icon-link"><span>More about OUSBA</span>  <i class="int-icon int-icon-chevron-right"></i></a>'+
'                                </div>'+
'                            </div>'+
'                </div>'+
'                <div class="int-grid4">'+
'                        <div class="fe-card">'+
'                                <h2 class="fe-card__heading">Credit/debit card or bank transfer</h2>'+
'                                <div class="fe-card__body">'+
'                                    <p>You may want to fund some or all your studies directly, from your bank account, savings, or credit card.</p>'+
'                                    <ul>'+
'                                        <li>Pay as you go before each module starts.</li> '+
'                                        <li>Choose how you pay – credit or debit card, or by bank transfer.<li>'+
'                                        <li>You may be able to combine self-funding with other payment methods, such as OUSBA.</li>'+
'                                    </ul>'+
'                                </div>'+
'                                <div class="fe-card__footer">'+
'                                    <hr>'+
'                                    <a href="/courses/fees-and-funding/credit-debit-card" class="int-inline-icon-link"><span>More about direct funding</span>  <i class="int-icon int-icon-chevron-right"></i></a>'+
'                                </div>'+
'                            </div>'+
'                    </div>'+
'            </div>'+
'            <div class="int-row fe-int-row-xs">'+
'                    <div class="int-grid4">'+
'                            <div class="fe-card">'+
'                                    <h2 class="fe-card__heading">Employer sponsorship</h2>'+
'                                    <div class="fe-card__body">'+
'                                        <p>If you\'re working and you\'ve found an OU qualification relevant to your job or professional development, you could approach your employer to see if they\'ll sponsor you.</p>'+
'                                        <ul>'+
'                                            <li>A great way to cover some or all your module fees.</li>'+
'                                            <li>More than 1 in 10 OU students are financially supported by their employer.</li>'+
'                                            <li>Your employer might be more invested in helping you study – and quick to recognise the benefits.</li>'+
'                                        </ul>'+
'                                    </div>'+
'                                    <div class="fe-card__footer">'+
'                                        <hr>'+
'                                        <a href="/courses/fees-and-funding/employer-sponsorship" class="int-inline-icon-link"><span>More about employer sponsorship</span>  <i class="int-icon int-icon-chevron-right"></i></a>'+
'                                    </div>'+
'                                </div>'+
'                    </div>'+
'                    <div class="int-grid4">'+
'                            <div class="fe-card">'+
'                                    <h2 class="fe-card__heading">Enhanced Learning Credits</h2>'+
'                                    <div class="fe-card__body">'+
'                                        <p>If you work for the Ministry of Defence, they may fund up to 100% of your course costs using ELCs.</p>'+
'                                        <ul>'+
'                                            <li>Can be used to support you through to civilian life.</li>'+
'                                            <li>With 100% funding, you may receive funding for up to 360 credits – that\'s a whole degree.</li>'+
'                                            <li>Great if you want to upskill your existing qualifications, change career paths or boost your CV.</li>'+
'                                        </ul>'+
'                                    </div>'+
'                                    <div class="fe-card__footer">'+
'                                        <hr>'+
'                                        <a href="/courses/fees-and-funding/enhanced-learning-credits" class="int-inline-icon-link"><span>More about Enhanced Learning Credits</span>  <i class="int-icon int-icon-chevron-right"></i></a>'+
'                                    </div>'+
'                                </div>'+
'                    </div>'+
'                    <div class="int-grid4">'+
'                       <div class="fe-card">'+
'                           <h2 class="fe-card__heading">Mixed payments</h2>'+
'                           <div class="fe-card__body">'+
'                               <p>You may want to combine payment options. For example, you could pay part of your tuition fee with a debit card and pay the remainder in instalments through an Open University Student Budget Account (OUSBA).</p>'+
'                           </div>'+
'                           <div class="fe-card__footer">'+
'                               <hr>'+
'                               <a href="/courses/fees-and-funding/mixed-payments" class="int-inline-icon-link"><span>More about'+
'                                   Mixed payments</span>  <i class="int-icon int-icon-chevron-right"></i>'+
'                               </a>'+
'                           </div>'+
'                        </div>'+
'                      </div>'+
'            </div>'+
'            <hr>'+
'            <h2>Additional support</h2>'+
'            <div class="int-row">'+
'                <div class="int-grid6">'+
'                    <h3>You may be eligible for:</h3>'+
'                    <ul>'+
'                        <li>an <a href="/courses/choose/bursary">OU Bursary</a> of up to a maximum value of £3,000 to help with study costs</li>'+
'                        <li>help with study-related costs like travel to tutorials, set books, and internet access, after you\'ve started studying</li>'+
'                        <li>a free introductory <a href="/courses/do-it/access">Access module</a> to build your confidence and skills before moving on to a full OU qualification.</li>'+
'                    </ul>'+
'                    <p>You can find out more about additional support in the description for your chosen qualification.</p>'+
'                </div>'+
'                <div class="int-grid6">'+
'                    <h3>If you have a disability:</h3>'+
'                    <ul>'+
'                        <li>The Disabled Students\' Allowance (DSA) is a government grant to cover study support costs if you have a disability. It\'s not means tested, and there\'s no age limit. Visit our <a href="/courses/do-it/disability">Supporting students with disabilities</a> page to find out more.</li>'+
'                        <li>If your disability is as a result of being injured in, or due to, military service, you could be eligible for our <a href="/courses/choose/veterans">Disabled Veterans\' Scholarships Fund</a>.</li>'+
'                    </ul>'+
'                </div>'+
'            </div>'+
''+
'            <hr>'+
''+
'            <div class="fe-banner-funding int-notice interaction alt wfa-icon int-turquoise">'+
'                <div class="int-notice int-notice-icon int-notice-icon-calculator">'+
'                    <h2>Which funding option is best for me?</h2>'+
'                    <p class="int-intro-text">Find out more about the funding options you\'re eligible for, using our Finance Finder.</p>'+
'                    <a href="/courses/fees-and-funding/finance-finder" class="int-button">Go to Finance Finder tool</a>'+
'                </div>'+
'            </div>'+
''+
'            <div class="int-row"><hr></div>'+
'        '+
'      </div>'+
''+
'      <div id="advantages-ou-study-tab">'+
'            <h2>Advantages of OU study</h2>'+
'            <div class="tab-intro">'+
'                <p>As the leading university for part-time higher education in the UK, we do things differently. From flexibility to affordability, there are many unique benefits to studying at the OU.</p>'+
'                <p>That\'s why more than 170,000 students are currently enjoying the experience of studying at The Open University.</p>'+
'            </div>'+
'            <div class="int-row">'+
'                <div class="int-grid6">'+
'                    <h3>Why choose the OU?</h3>'+
'                    <div class="int-row">'+
'                    <div class="int-grid12">'+
''+
'                        <div class="int-row int-flex">'+
'                        <div class="int-grid6">'+
'                            <div class="int-promo int-neutral fe-card-why int-turquoiseLighter6">'+
'                            <div class="inlineHeading fe-inlineHeading">'+
'                                <svg class="fe-svg" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path fill="#262626" d="M30.002 32.544c-.64 0-1.273-.062-1.9-.186l-15.726-3.163v9.823c0 2.541 7.89 4.604 17.626 4.604s17.626-2.057 17.626-4.604v-9.823l-15.724 3.163a9.712 9.712 0 0 1-1.902.186zm28.754-10.53l-27.22-5.48a7.929 7.929 0 0 0-1.534-.156c-.515 0-1.025.05-1.534.155l-27.22 5.48c-1.664.336-1.664 2.709 0 3.044l11.128 2.237 16.092 3.237c.503.1 1.019.155 1.534.155.516 0 1.025-.05 1.535-.155l16.091-3.237 5.008-1.006V37.93a2.819 2.819 0 0 0-.963 2.125 2.83 2.83 0 0 0 2.827 2.826 2.83 2.83 0 0 0 2.827-2.826 2.81 2.81 0 0 0-.963-2.125V25.536l2.392-.479c1.659-.335 1.659-2.708 0-3.044z"></path></svg>'+
'                                <h3>Good for careers</h3>'+
'                            </div>'+
'                            <div class="int-margin-top--05 int-flex-grow--1">'+
'                                <p>75% of our graduates say their studies have progressed their careers.</p>'+
'                            </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="int-grid6">'+
'                            <div class="int-promo int-neutral fe-card-why int-turquoiseLighter6">'+
'                            <div class="inlineHeading fe-inlineHeading">'+
'                                <svg class="fe-svg" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path fill="#262626" d="M32.206 17.1c3.184-1.362 5.415-4.523 5.415-8.19 0-4.92-3.99-8.91-8.91-8.91a8.911 8.911 0 0 0-8.91 8.91c0 .05.013.099.013.148 5.29.546 9.84 3.643 12.392 8.042zm20.173 16.184a3.06 3.06 0 0 0-1.71.074 18.63 18.63 0 0 0-6.06-9.43c-.445-1.97.26-3.767 1.079-5.08.595-.955-.198-2.206-1.327-2.058-3.48.434-5.476 2.058-6.592 3.52a18.32 18.32 0 0 0-4.622-.694 16.102 16.102 0 0 1 1.03 5.65c0 8.848-7.2 16.047-16.06 16.047a15.974 15.974 0 0 1-9.381-3.035 18.62 18.62 0 0 0 6.233 13.89c1.264 1.128 2.02 2.727 2.02 4.424v2.194c0 .669.545 1.214 1.214 1.214h7.448c.669 0 1.214-.545 1.214-1.214V56.89c.173 0 .335.012.508.012h5.378v1.884c0 .669.545 1.214 1.214 1.214h7.447c.67 0 1.215-.545 1.215-1.214v-1.773c0-1.784.805-3.444 2.156-4.609a18.668 18.668 0 0 0 5.874-9.306c.52.173 1.103.223 1.71.074 1.387-.347 2.342-1.635 2.342-3.073v-3.73c.012-1.437-.93-2.75-2.33-3.085zm-9.207.31a1.85 1.85 0 0 1-1.846-1.847 1.85 1.85 0 0 1 1.846-1.846 1.85 1.85 0 0 1 1.847 1.846 1.85 1.85 0 0 1-1.847 1.846zm-25.068 4.473c7.075 0 12.813-5.737 12.813-12.813 0-7.076-5.738-12.813-12.813-12.813a12.801 12.801 0 0 0-9.356 4.052 12.765 12.765 0 0 0-3.457 8.749c.012 7.1 5.737 12.825 12.813 12.825z"/></svg>'+
'                                <h3>Value for money</h3>'+
'                            </div>'+
'                            <div class="int-margin-top--05 int-flex-grow--1">'+
'                                <p>Get the same qualification for two thirds the cost charged at most other universities in England.</p>'+
'                            </div>'+
'                            </div>'+
'                        </div>'+
'                        </div>'+
''+
'                        <div class="int-row int-flex">'+
'                        <div class="int-grid6">'+
'                            <div class="int-promo int-neutral fe-card-why int-turquoiseLighter6">'+
'                            <div class="inlineHeading fe-inlineHeading">'+
'                                <svg class="fe-svg" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path fill="#262626" d="M12.648 10.9h-.004c-.473 0-.917.184-1.254.52-.339.338-.526.79-.526 1.27v26.83c0 .982.804 1.785 1.792 1.788 4.164.01 11.142.878 15.955 5.914V19.145c0-.334-.084-.647-.246-.906-3.95-6.362-11.543-7.329-15.717-7.339zM8.086 39.52V17.087H6.789A1.79 1.79 0 0 0 5 18.876V47.31c0 .548.245 1.057.672 1.398.429.342.981.468 1.517.346 4.287-.978 11.808-2.113 18.942-.366-4.125-3.904-9.95-4.594-13.482-4.603a4.578 4.578 0 0 1-4.563-4.566zm41.05 0V12.688c0-.48-.187-.93-.527-1.27a1.76 1.76 0 0 0-1.253-.519h-.004c-4.174.01-11.766.977-15.717 7.34a1.71 1.71 0 0 0-.245.905v28.077c4.812-5.037 11.79-5.905 15.955-5.915a1.795 1.795 0 0 0 1.791-1.788zm4.075-22.432h-1.297v22.431a4.578 4.578 0 0 1-4.562 4.566c-3.533.009-9.357.7-13.482 4.604 7.134-1.747 14.655-.612 18.94.365a1.782 1.782 0 0 0 1.517-.345c.428-.341.673-.851.673-1.398V18.876a1.79 1.79 0 0 0-1.789-1.788z"/></svg>'+
'                                <h3>Great resources</h3>'+
'                            </div>'+
'                            <div class="int-margin-top--05 int-flex-grow--1">'+
'                                <p>High-quality OU study materials are covered by your course fees.</p>'+
'                            </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="int-grid6">'+
'                            <div class="int-promo int-neutral fe-card-why int-turquoiseLighter6">'+
'                            <div class="inlineHeading fe-inlineHeading">'+
'                                <svg class="fe-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path fill="#1D2023" d="M38.42 24.228h-9.762a4.332 4.332 0 0 0-1.42-1.42V11.07a2.237 2.237 0 0 0-4.475 0v11.736a4.291 4.291 0 0 0-2.051 3.658A4.294 4.294 0 0 0 25 30.753a4.29 4.29 0 0 0 3.658-2.052h9.762a2.237 2.237 0 1 0 0-4.473zM25 0C11.215 0 0 11.215 0 25s11.215 25 25 25 25-11.215 25-25S38.785 0 25 0zm0 44.737C14.117 44.737 5.263 35.883 5.263 25S14.117 5.263 25 5.263 44.737 14.117 44.737 25 35.883 44.737 25 44.737z"/></svg>'+
'                                <h3>Fit your study around your life</h3>'+
'                            </div>'+
'                            <div class="int-margin-top--05 int-flex-grow--1">'+
'                                <p>76% of OU students balance study with full- or part-time work.</p>'+
'                            </div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
''+
''+
'                </div>'+
''+
'    </div>'+
'        <div class="int-row int-flex">'+
'            <div class="int-grid12">'+
'                <div class="video-container">'+
'                <iframe src="http://player.open.ac.uk/embed/b8da406101" height="100%" width="100%" frameborder="0"'+
'                    allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>'+
'                </div>'+
'            </div>'+
'        </div>'+
'  </div>'+
''+
''+
'<div class="int-grid6">'+
'    <h3>What our students say</h3>'+
'    <blockquote class="int-quote-intro">'+
'        <p>Don\'t let cost be a barrier if you want to do it. You can pay for one module at a time. I paid for my course'+
'            monthly using OUSBA. I completed my degree debt free.</p> <cite>Heidi Daniels, BA (Hons) Business Studies</cite>'+
'    </blockquote>'+
'    <blockquote class="int-quote-intro">'+
'        <p>If you really want to do it you just have to go for it. The feeling of success is so worth it. It was an'+
'            investment in myself.</p><cite>Lee Johns, Bachelor of Engineering (Hons)</cite>'+
'    </blockquote>'+
'    <blockquote class="int-quote-intro">'+
'      <p>I was keen to develop my career and my work sponsored me through my first year of study. My degree has really supported my progression. I\'ve now been promoted to the role of Senior Product Design and Development Engineer.</p><cite>James Robinson, BSc (Hons) Design and Innovation</cite>'+
'    </blockquote>'+
'    <blockquote class="int-quote-intro">'+
'      <p>I got a pay rise within a year of starting my OU course, my boss really respected my work ethic and my confidence increased hugely.</p><cite>Jamie Wright, studying BA (Hons) Modern Language Studies</cite>'+
'    </blockquote>'+
'  </div>'+
'</div>'+
''+
'<div class="int-row"><hr></div>'+
'        '+
'      </div>'+
'    '+
'      <div id="faqs-tab">'+
'            <h2>FAQs</h2>'+
'            <div class="tab-intro">'+
'                <p>You may have some other questions about fees and funding at The Open University.</p>'+
'                <p>We\'ve listed some common questions below but if you can\'t see what you need, please <a href="/contact/">get in touch</a>.</p>'+
'            </div>'+
'        '+
'            <div id="fe-faqs0" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>Do I need to pay for my whole qualification up front?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>No, you only need to arrange funding for the modules you want to study in the coming year.</p>'+
'                    <p>This is the case no matter how you fund your studies.</p>'+
'                </div>'+
'            </div>'+
'            <div id="fe-faqs1" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>How does a student loan work? Is it like getting a loan from the bank?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>Student loans are provided by the Student Loans Company and cover all of your module fees for the year.</p>'+
'                    <p>You apply to Student Finance England (part of the Student Loans Company) for a loan each year, and once it\'s been approved, they will pay your full fee for the year automatically to us when your course starts.</p>'+
'                    <p>Unlike a loan from a bank, you\'ll only start to pay it back once you\'re earning more than £25,000 a year. <strong>Student loans aren\'t means tested</strong> - anyone can apply, regardless of income or credit score, and applying won\'t have any impact on your credit score.</p>'+
'                    <p>For more information, see our page about <a href="/courses/fees-and-funding/loan-england-finance">tuition fee loans in England</a>.</p>'+
'                </div>'+
'            </div>'+
'            <div id="fe-faqs2" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>How do student loan repayments work and when do they start?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>You don\'t pay anything until you\'re earning over £25,000 a year.</p>'+
'                    <p<strong>9% of what you earn above £25,000</strong> is deducted automatically from your salary (much like National Insurance or your pension contributions), so you don\'t have to worry about missing payments. As an example, if you were earning £27,000 a year, you would repay £15 per month.</p>'+
'                    <p>If you earn enough to start repaying, but your income later drops below the £25,000 threshold, you\'ll stop repaying immediately.</p>'+
'                    <p>If you haven\'t finished repaying your loan after 30 years, it will be written off and your monthly payments will stop.</p>'+
'                    <p>Even if you\'re earning over the income threshold, you won\'t have to start repaying your loan for up to four years.</p>'+
'                    <p>Here\'s how it works for our most popular qualifications:</p>'+
''+
'                    <table class="fe-compare-table-faqs">'+
'                            <thead>'+
'                              <tr>'+
'                                <th class="fe-compare-table-faqs__heading">Qualification</th>'+
'                                <th class="fe-compare-table-faqs__heading fe-compare-table-faqs__heading--center">Years to complete</th>'+
'                                <th class="fe-compare-table-faqs__heading fe-compare-table-faqs__heading--center">When your loan repayments start</th>'+
'                              </tr>'+
'                            </thead>'+
'                            <tbody>'+
'                              <tr>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--left fe-compare-table-faqs__detail--green">Degree with honours</td>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--light-green">6 years part-time study  <br /> 3 years full-time study</td>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--light-green">4 years after course start <br /> 1 year after you finish the course</td>'+
'                              </tr>'+
'                              <tr>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--left fe-compare-table-faqs__detail--green">Diploma of Higher Education</td>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--light-green">4 years part-time study <br /> 2 years full-time study</td>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--light-green">4 years after course start <br /> 1 year after you finish the course</td>'+
'                            </tr>'+
'                            <tr>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--left fe-compare-table-faqs__detail--green">Certificate of Higher Education</td>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--light-green">2 years part-time study <br /> 1 years full-time study</td>'+
'                                <td class="fe-compare-table-faqs__detail fe-compare-table-faqs__detail--light-green">1 year after you finish the course <br /> 1 year after you finish the course</td>'+
'                            </tr>'+
'                            </tbody>'+
'                          </table>'+
'                          <p>Please note: if you finish your course or leave it course early, you\'ll start repaying your loan the first April after you leave the course.</p>'+
'                </div>'+
'            </div>'+
'            '+
'            <div id="fe-faqs3" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>Will I be eligible for a student loan?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>In most cases, yes. You\'re likely to be eligible for a student loan if you:</p>'+
'                    <ul class="fe-list-tick">'+
'                        <li><i aria-hidden="true" class="int-icon int-icon-check"> </i> are a UK national</li>'+
'                        <li><i aria-hidden="true" class="int-icon int-icon-check"> </i> will be living in England while you study</li>'+
'                        <li><i aria-hidden="true" class="int-icon int-icon-check"> </i> don\'t already have a degree.</li>'+
'                    </ul>    '+
'                    <p>There\'s no age limit and it doesn\'t matter what your income is. <strong>Your credit score isn\'t taken into account</strong>, either.</p>'+
'                    <p><strong>Even if you\'ve already got a degree, you could be eligible</strong> if you want to study science, technology, engineering or mathematics related courses.</p>'+
'                    <p>For more information about funding a second degree, see our page about <a href="/courses/fees-and-funding/equivalent-qualifications">loans for degree holders</a>.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs4" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>Do I need to apply for a part-time loan or a full-time loan?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>Because our courses are classed as part-time, <strong>make sure you choose the Part-time Tuition Fee Loan</strong> option when you\'re ready to apply, even if you intend to study full-time.</p>'+
'                    <p>When you register with us, we\'ll give you detailed instructions on how to apply for a student loan from Student Finance England.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs5" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>How do I apply for a student loan?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>After you\'ve registered with us on the course you\'d like to study, you can apply to Student Finance England for a loan. Once it\'s been approved, they will pay your full fee for the year automatically to us when your course starts.</p>'+
'                    <p>You\'ll need to make a loan application each year that you study with us – the first application only covers your first year. We\'ll give you more details about this once you register.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs6" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>When do I need to apply for a student loan?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>Student Finance England is currently accepting loan applications for OU students wishing to start courses in February 2019 and April 2019.</p>'+
'                    <p>We recommend you choose your qualification and apply for a loan as soon as possible before your course start date, as <strong>it could take 6 to 8 weeks for your loan application to be processed</strong>.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs7" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>What happens if I register to study with the OU, and then find out I can\'t get a loan?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>If you register to start a course with us, but can\'t get a loan, we\'ll give you the option to withdraw from the course, postpone your study until you are able to get a loan, or find a different funding option.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs8" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>If I take out a student loan, will I pay interest?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>Yes. Student loans accumulate interest at a rate based on the RPI (Retail Price Index) measure of inflation. The interest rate is currently RPI+3% while you\'re studying, and until the April after you have completed the course. After that, the interest charged will depend on your income.</p>'+
'                    <p>However, as the <strong>amount you pay back is based on how much you earn and not how much you owe</strong>, the amount of interest added to your loan won\'t ever affect the amount you pay each month.</p>'+
'                    <p>If you haven\'t finished repaying your loan after 30 years, it will be written off and your monthly payments will stop.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs9" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>Can I get a maintenance loan to help me with living costs?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>No. Open University students in England can only get a loan to cover their module fees. You won\'t be able to get a loan to cover your living costs.</p>'+
'                    <p>However, if you\'re on a low income, our Study Support Fund could help you pay for study-related costs, such as travel, childcare, and internet access. For more information about the fund, please <a href="/contact/new">contact us</a>.</p>'+
'                    <p>If you\'re currently receiving any government benefits, becoming an OU student won\'t affect this – you\'ll still be eligible for all the same benefits as a non-student.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs10" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>What\'s the difference between a student loan and a loan from Open University Student Budget Accounts Ltd (OUSBA) funding?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>A loan from OUSBA is more like a traditional bank loan – here are the key differences:</p>'+
'                    <h3>Student loan</h3>'+
'                    <ul>'+
'                        <li>Anyone can apply, regardless of income or credit score.</li>'+
'                        <li>Nothing to pay for up to four years and only if you\'re earning over £25,000.</li>'+
'                        <li>Lower monthly repayments.</li>'+
'                        <li>Paid over a maximum of 30 years.</li>'+
'                        <li>Written off after 30 years.</li>'+
'                    </ul>'+
'                    <h3>A loan from OUSBA</h3>'+
'                    <ul>'+
'                        <li>Subject to credit and affordability checks.</li>'+
'                        <li>Payable over up to 12 months.</li>'+
'                        <li>Higher monthly repayments.</li>'+
'                        <li>Option to pay in full just before your module starts.</li>'+
'                    </ul>'+
'                    <p><a href="/courses/fees-and-funding/ousba">Find out more about OUSBA</a>.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs11" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>I\'m in, or was in, the Armed Forces – can I use MoD funding to pay for my course?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>Yes. We accept both types of Enhanced Learning Credit (ELC) offered by the MoD to Armed Forces personnel, and many of our students pay this way.</p>'+
'                    <p>If your ELC funding doesn\'t cover the full cost of your study, you could combine it with a student loan.</p>'+
'                    <p>For more information about ELC, see our page about <a href="/courses/fees-and-funding/enhanced-learning-credits">Enhanced Learning Credits</a> and our <a href="/choose/forces/studying-with-us/enhanced-learning-credits">Forces pages</a>.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs12" class="int-toggler fe-int-toggler fe-faqs">'+
'                <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                    <a href="#">'+
'                        <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                        <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                        <span>Can I combine different payment methods?</span>'+
'                    </a>'+
'                </h2>                '+
'                <div class="int-toggleContent fe-faqs__body">'+
'                    <p>Yes, you can split your module fees between any of the payment methods we offer, in any ratio.</p>'+
'                    <p>For example, you could pay 60% of your module fee by student loan, and the remaining 40% by credit or debit card.</p>'+
'                    <p>For more information about how you can split your module fees between funding options, see our page about <a href="/courses/fees-and-funding/mixed-payments">mixed payments</a>.</p>'+
'                </div>'+
'            </div>'+
''+
'            <div id="fe-faqs13" class="int-toggler fe-int-toggler fe-faqs">'+
'                    <h2 class="int-toggleTrigger fe-faqs__heading">'+
'                        <a href="#">'+
'                            <b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b>'+
'                            <b class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b>'+
'                            <span>Which credit/debit cards do you accept?</span>'+
'                        </a>'+
'                    </h2>                '+
'                    <div class="int-toggleContent fe-faqs__body">'+
'                        <p>We accept all American Express, Mastercard, Maestro (UK only), Visa/Delta, and Electron cards. We do not accept Diners Club cards.'+
'                        <p>For more information about paying by card, see our page about <a href="/courses/fees-and-funding/credit-debit-card">credit/debit card payments</a>.'+
'                    </div>'+
'            </div>'+
'<div class="int-row">'+
'      <a href="/courses/" class="int-button fe-int-button-faqs">Find the right course for you</a>'+
'</div>'+
''+
'<div class="int-row"><hr></div>'+
'        '+
'      </div>'+
''+
'    </div>'+
''+
'  </div>'+
''+
''+
'  <!-- Contact CTA -->'+
'<div class="int-row fe-contact-cta">'+
'  <div class="int-grid12">'+
'    <div class="int-promo int-cta">'+
'      <h2>Need more information?</h2>'+
'      <div class="int-row int-flex">'+
'        <div class="int-grid4">'+
'          <div class="int-notice"><i class="int-icon int-icon-envelope" aria-hidden="true"></i>'+
'            <div class="int-notice-content">'+
'              <h3>Email us now with your queries</h3>'+
'              <a class="int-cta-link" href="/contact/new?soq=6"><span>Send an email enquiry</span></a>'+
'            </div>'+
'          </div>'+
'        </div>'+
'        <div class="int-grid4">'+
'          <div class="int-notice fe-int-notice-svg">'+
'                <svg class="int-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="56"><path d="M16.88 35.19c2.63 0 4.91-.94 6.77-2.81 1.86-1.86 2.81-4.14 2.81-6.77s-.94-4.91-2.81-6.77c-1.86-1.86-4.14-2.81-6.77-2.81s-4.91.94-6.77 2.81C8.24 20.7 7.3 22.98 7.3 25.61s.94 4.91 2.81 6.77c1.86 1.87 4.13 2.81 6.77 2.81zm16.43 8.91c-.16-.9-.37-1.75-.62-2.53-.26-.8-.61-1.6-1.04-2.36-.45-.79-.97-1.48-1.57-2.04a6.778 6.778 0 0 0-2.25-1.41c-.87-.35-1.84-.52-2.87-.52-.41 0-.8.17-1.56.66-.47.3-1.01.66-1.62 1.05-.52.33-1.23.64-2.1.92-.85.28-1.71.41-2.57.41-.85 0-1.72-.14-2.57-.41-.87-.28-1.58-.59-2.1-.92-.6-.39-1.15-.74-1.62-1.05-.76-.49-1.15-.66-1.56-.66-1.03 0-2 .18-2.87.52-.87.35-1.63.82-2.25 1.41-.59.57-1.12 1.25-1.57 2.04-.43.76-.78 1.55-1.04 2.36-.22.78-.43 1.63-.59 2.53a22.7 22.7 0 0 0-.32 2.51c-.05.76-.08 1.55-.08 2.35 0 2.08.66 3.76 1.96 5 1.29 1.22 2.99 1.84 5.05 1.84H26.7c2.07 0 3.77-.62 5.05-1.84 1.3-1.24 1.96-2.92 1.96-5 0-.8-.03-1.59-.08-2.35a22.7 22.7 0 0 0-.32-2.51zM36.99.2C30.1.2 24.51 4.79 24.51 10.44c0 2.27.9 4.37 2.43 6.07v3.95c0 .26.31.39.5.21l2.05-2.05c2.09 1.29 4.69 2.06 7.5 2.06 6.89 0 12.48-4.59 12.48-10.24S43.88.2 36.99.2z" fill="#414042"/></svg>'+
'            <div class="int-notice-content">'+
'              <h3>Talk through your options with one of our advisers</h3>'+
'              <a class="int-cta-link" href="/request/callback"><span>Request a call back</span></a>'+
'            </div>'+
'          </div>'+
'        </div>'+
'        <div class="int-grid4">'+
'          <div class="int-notice"><span class="int-notice-icon int-notice-icon-prospectus" aria-hidden="true"></span>'+
'            <div class="int-notice-content">'+
'              <h3>Find out more about us and our courses</h3><a class="int-cta-link stage-prospectus-links" href="/request/prospectus?catcode=psab"'+
'                id="rqap-feature">Request your prospectus</a>'+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>'+
''+
'    </div>'+
'  </div>'+
'</div>';

      $(newContent).insertBefore('.int-form__course-search');
   }, 500);
});


// Tabs
utils.waitForElement('#ou-courses-tabs').then(function(){
   setTimeout(function() {
     // Add the TabNav container
       $('<div class=\"int-row fe-tab-nav\"><div class=\"int-row\"><div class=\"navBtnsContainer tabNav\"><\/div><\/div><\/div>').appendTo('#ou-courses-tabs .panels > div');

       $('.tooltipcredit').each(function () {

         new OU.EEP.Tooltip($(this), {
             contextSelector: $(this),
             tooltipSelector: $(this).parent().parent().find(".tooltipcreditwrap"),
             closeTooltipButtonSelector: '.close-tooltip'
         });
     });

 (function ($, EEP) {

         var $qualTabs = $('#ou-courses-tabs'),
             $moduleTabs = $('#ou-courses-tabs-module');
     var showNavBtns = ($qualTabs.length ? true : false);

         window.coursesTabs = new EEP.Tabs(($qualTabs.length ? $qualTabs : $moduleTabs), {
             scrollToTabs: true,
             tabAliasLinks: true,
             tabAliasLinksSelector: '.loadTab',
             navBtns: showNavBtns,
             navBtnsCont: '.tabNav',
             navBtnNextTxt: 'On to ',
             navBtnNextClass: '.next',
             navBtnPrevTxt: 'Back to ',
             navBtnPrevClass: '.previous'

         });



     })(jQuery, window.OU.EEP);
     },500);
   });

// Multi select options
utils.waitForElement('.fe-studies-form select').then(function(){
  $(function() {
        $('#fe-studies-form-select-course-type, #fe-studies-form-select-course-time').find(function(evt){

          $('.select-info-item').hide();
          $('#' + $(this).val()).show();

          var toShow =  '.' + $('#fe-studies-form-select-course-type').val() + '-' + $('#fe-studies-form-select-course-time').val();
          //const toShow = `.${$('#fe-studies-form-select-course-type').val()}-${$('#fe-studies-form-select-course-time').val()}`;
           console.log(toShow);
          $(toShow).show();
        });
    });

    $(function() {
        $('#fe-studies-form-select-course-type, #fe-studies-form-select-course-time').change(function(evt){

          $('.select-info-item').hide();
          $('.' + $(this).val()).show();

          var toShow =  '.' + $('#fe-studies-form-select-course-type').val() + '-' + $('#fe-studies-form-select-course-time').val();
          //const toShow = `.${$('#fe-studies-form-select-course-type').val()}-${$('#fe-studies-form-select-course-time').val()}`;
           console.log(toShow);
          $(toShow).show();
        });
      });
});


// Faqs
// Inject CTA into FAQ's tab

  function fireFAQS() {
    new OU.EEP.Toggler($(this));
  }

  var checkExist = setInterval(function() {
    var faqToggler = document.querySelector('#faqs-tab .int-toggler');
  
    if (typeof fireFAQS == 'function' && OU.EEP.Toggler && faqToggler) {
      console.log('faqToggler YES FUNCTION EXIST');
      // console.log('faqToggler EXIST');
      fireFAQS();
      clearInterval(checkExist);
      // console.log('faqToggler STOP CHECKING');
    }
}, 100);
}}, {"value": "<style>.fe60 {\n  /* ----------------------------------------------------------- */\n  /* == tingle v0.14.0 */\n  /* ----------------------------------------------------------- */\n  /* confirm and alerts\n    -------------------------------------------------------------- */\n  /* modal\n    -------------------------------------------------------------- */\n  /* state\n    -------------------------------------------------------------- */\n  /* btn\n    -------------------------------------------------------------- */\n  /* responsive\n    -------------------------------------------------------------- */ }\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n}\n\n  .fe60 #int-content ul {\n    margin-left: 0 !important;\n    padding-left: 15px !important; }\n  .fe60 .fe-int-image {\n    padding: 0;\n    overflow: hidden; }\n    .fe60 .fe-int-image .image {\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-position: center;\n      background-image: url(\"https://cdn.optimizely.com/img/221317523/b5c2f2eda49c42bdaef300010a1342a1.jpg\") !important;\n      background-position: center center;\n      right: -1px; }\n    .fe60 .fe-int-image [class*=int-grid] {\n      display: table-cell;\n      float: none;\n      vertical-align: top;\n      padding: 2em 2.75em 2em 2em; }\n    .fe60 .fe-int-image img {\n      visibility: hidden; }\n    @media (max-width: 767px) {\n      .fe60 .fe-int-image .image {\n        display: none; } }\n  .fe60 .fe-int-notice-svg {\n    display: -ms-flexbox;\n    display: flex; }\n    .fe60 .fe-int-notice-svg svg {\n      -ms-flex-negative: 0;\n      flex-shrink: 0;\n      margin-right: 10px; }\n    @media (min-width: 768px) and (max-width: 959px) {\n      .fe60 .fe-int-notice-svg {\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n  .fe60 .int-hero {\n    margin-bottom: 3em; }\n  .fe60 .generatedcontent ul li:before {\n    font-size: 2.1em !important; }\n  .fe60 hr {\n    border-bottom: 1px solid #c1c3c5 !important;\n    margin: 2em 0 !important; }\n  .fe60 #ou-courses-tabs.int-tab .tabs a.active, .fe60 #ou-modal-tabs.int-tab .tabs a.active {\n    background: #068293 !important;\n    border-color: #068293 !important; }\n    .fe60 #ou-courses-tabs.int-tab .tabs a.active:after, .fe60 #ou-modal-tabs.int-tab .tabs a.active:after {\n      background: #068293 !important;\n      border: 1px solid #068293 !important; }\n  .fe60 .fe-studies-form {\n    margin-bottom: 2em; }\n    .fe60 .fe-studies-form .select-info-item {\n      display: none; }\n    .fe60 .fe-studies-form__label {\n      font-size: 1.5em;\n      color: #000; }\n    .fe60 .fe-studies-form__select-course-type {\n      margin: 10px 0; }\n    .fe60 .fe-studies-form__select-course-time, .fe60 .fe-studies-form__select-course-type, .fe60 .fe-studies-form .is-complete {\n      font-size: 1.3em;\n      color: #000;\n      height: auto;\n      padding: .924em 53px .924em .5em;\n      background: #fff url(\"//cdn.optimizely.com/img/221317523/a51d9cb45391425f90f03cbe1ffa8b6f.png\");\n      background-position: right 15px;\n      background-repeat: no-repeat;\n      border: 2px solid #bfbfbf !important; }\n      .fe60 .fe-studies-form__select-course-time:focus, .fe60 .fe-studies-form__select-course-time .is-focused, .fe60 .fe-studies-form__select-course-type:focus, .fe60 .fe-studies-form__select-course-type .is-focused, .fe60 .fe-studies-form .is-complete:focus, .fe60 .fe-studies-form .is-complete .is-focused {\n        background-position: right -80px;\n        border-color: #d34616 !important; }\n      .fe60 .fe-studies-form__select-course-time:before, .fe60 .fe-studies-form__select-course-type:before, .fe60 .fe-studies-form .is-complete:before {\n        content: \"\";\n        position: absolute;\n        top: 1.5em;\n        right: 1em;\n        width: 0.75em;\n        height: 0.75em;\n        border: 0.2em solid #000;\n        border-left: none;\n        border-top: none;\n        top: 1.2em;\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n        -ms-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n        transition: opacity 0.2s; }\n    @media (min-width: 768px) {\n      .fe60 .fe-studies-form {\n        margin-bottom: 4em; }\n        .fe60 .fe-studies-form__label {\n          font-size: 2.5em; }\n        .fe60 .fe-studies-form__select-course-type {\n          margin: 0; }\n        .fe60 .fe-studies-form__select-course-time, .fe60 .fe-studies-form__select-course-type, .fe60 .fe-studies-form .is-complete {\n          font-size: 2.5em;\n          padding: .224em 53px .224em .5em; } }\n  .fe60 .fe-sum-box {\n    padding: 1.5em; }\n    .fe60 .fe-sum-box__heading {\n      margin: 0; }\n    .fe60 .fe-sum-box__total {\n      font-weight: bold;\n      font-size: 4em;\n      margin: 0;\n      line-height: 1.25em; }\n    .fe60 .fe-sum-box .int-button {\n      display: block;\n      margin-top: 3em; }\n  .fe60 .fe-module-box {\n    padding: 1.5em;\n    position: relative;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    margin-bottom: 30px; }\n    .fe60 .fe-module-box:after {\n      top: 100%;\n      left: 50%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(248, 246, 237, 0);\n      border-top-color: #f8f6ed;\n      border-width: 15px;\n      margin-left: -15px; }\n    .fe60 .fe-module-box__heading {\n      margin: 0;\n      color: #000; }\n    .fe60 .fe-module-box__total {\n      font-weight: bold;\n      font-size: 4em;\n      color: #262626;\n      margin: 0;\n      line-height: 1.25em; }\n    .fe60 .fe-module-box__footer {\n      margin-top: auto; }\n    .fe60 .fe-module-box__desc {\n      margin-bottom: 0; }\n    @media (min-width: 768px) {\n      .fe60 .fe-module-box {\n        margin-bottom: 0; }\n        .fe60 .fe-module-box:after {\n          left: 104%;\n          top: 87px;\n          border: solid transparent;\n          content: \" \";\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n          border-color: rgba(248, 246, 237, 0);\n          border-left-color: #f8f6ed;\n          border-width: 15px;\n          margin-top: -15px; } }\n  .fe60 .int-form__course-search {\n    background: #eaeaf4 !important; }\n  .fe60 .int-search-box input {\n    border: 4px solid #326fb4; }\n  .fe60 .fe-notice {\n    margin: 2em 0 1em 0; }\n    .fe60 .fe-notice .int-promo {\n      margin: 1em 0 !important; }\n    .fe60 .fe-notice .int-notice-content h3, .fe60 .fe-notice .int-notice-content h4 {\n      margin: 0 !important; }\n    @media (min-width: 768px) {\n      .fe60 .fe-notice .int-promo .int-grid6:last-child {\n        border-left: 1px solid #fff !important; } }\n  .fe60 .fe-card {\n    padding: 2em;\n    border: 1px solid #d0e7ea;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n    .fe60 .fe-card.active {\n      background-color: #d0e7ea; }\n    .fe60 .fe-card__heading {\n      margin-top: 0; }\n    .fe60 .fe-card__footer {\n      margin-top: auto; }\n  .fe60 .fe-banner-funding {\n    margin: 4em 0 2em 0; }\n  @media (max-width: 767px) {\n    .fe60 .fe-int-row-xs {\n      margin-bottom: 0; }\n      .fe60 .fe-int-row-xs .int-grid4 {\n        margin-bottom: 2em; } }\n  @media (min-width: 768px) {\n    .fe60 .fe-int-row-xs {\n      display: -ms-flexbox;\n      display: flex; } }\n  .fe60 .tab-intro {\n    margin-bottom: 3em; }\n  .fe60 .fe-list-tick li {\n    padding-left: 0; }\n    .fe60 .fe-list-tick li:before {\n      content: none; }\n  .fe60 .fe-faqs .int-toggleTrigger b i {\n    color: #068293 !important; }\n  .fe60 .fe-faqs__heading {\n    background-color: #eef6f7 !important;\n    color: #262626 !important;\n    padding-top: 1em !important;\n    padding-bottom: 1em !important;\n    font-size: 0.85rem !important; }\n    .fe60 .fe-faqs__heading a {\n      text-decoration: none;\n      color: #262626 !important; }\n      .fe60 .fe-faqs__heading a:hover {\n        text-decoration: none !important; }\n      .fe60 .fe-faqs__heading a span {\n        color: #262626 !important; }\n  .fe60 .fe-faqs__body {\n    border: none !important;\n    ul{list-style-type: none !important;}\n}\n  .fe60 .fe-int-button-faqs {\n    float: right;\n    margin: 1rem 0 0 0;\n    padding: .85em 1em; }\n  .fe60 .fe-inlineHeading {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center; }\n    .fe60 .fe-inlineHeading .fe-svg {\n      -ms-flex-negative: 0;\n      flex-shrink: 0;\n      margin-right: 10px; }\n    @media (min-width: 768px) and (max-width: 980px) {\n      .fe60 .fe-inlineHeading {\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n  .fe60 .fe-compare-table-faqs {\n    text-align: center; margin-bottom: 1em; }\n    .fe60 .fe-compare-table-faqs__heading {\n      min-height: 70px;\n      background-color: #000000;\n      color: #fff;\n      vertical-align: center;\n      padding: 0.5em;\n      font-weight: bold;\n      font-size: 0.85em;\n      border: 1px solid #fff; }\n      .fe60 .fe-compare-table-faqs__heading:first-child {\n        border-left: #000; }\n      .fe60 .fe-compare-table-faqs__heading:last-child {\n        border-right: #000; }\n      .fe60 .fe-compare-table-faqs__heading--center {\n        text-align: center; }\n    .fe60 .fe-compare-table-faqs__detail {\n      padding: 0.5em;\n      border-bottom: 1px solid #fff;\n      border-right: 1px solid #fff;\n      font-size: 0.85rem; }\n      .fe60 .fe-compare-table-faqs__detail--left {\n        text-align: left !important; }\n      .fe60 .fe-compare-table-faqs__detail--green {\n        font-weight: bold;\n        text-align: left;\n        background-color: #068293;\n        color: #fff; }\n      .fe60 .fe-compare-table-faqs__detail--fee {\n        font-weight: bold;\n        font-size: 1.5rem; }\n      .fe60 .fe-compare-table-faqs__detail--light-green {\n        background-color: #d0e7ea; }\n      .fe60 .fe-compare-table-faqs__detail--grey {\n        background-color: #eef6f7; }\n    @media (min-width: 950px) {\n      .fe60 .fe-compare-table-faqs__heading {\n        font-size: 1em; }\n      .fe60 .fe-compare-table-faqs__detail {\n        font-size: 0.95rem; } }\n  .fe60 .fe-compare-table-xs-wrap {\n    margin: 0 auto;\n    text-align: center;\n    max-width: 500px; }\n    @media (min-width: 950px) {\n      .fe60 .fe-compare-table-xs-wrap {\n        display: none; } }\n  .fe60 .fe-compare-table-xs {\n    border: 1px solid #068293;\n    margin: 1.5em 0; }\n    .fe60 .fe-compare-table-xs__heading {\n      color: #fff;\n      background-color: #068293;\n      font-weight: bold;\n      padding: 1em;\n      font-size: 1.1em; }\n    .fe60 .fe-compare-table-xs__row {\n      background-color: #d0e7ea;\n      padding: 1em;\n      font-size: 13px;\n      border-bottom: 1px solid #fff;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: justify;\n      justify-content: space-between; }\n    .fe60 .fe-compare-table-xs__row-heading {\n      font-weight: bold; }\n    .fe60 .fe-compare-table-xs__row-total {\n      color: #fff;\n      background-color: #068293;\n      font-weight: bold;\n      padding: 1em 0.5em;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .fe60 .fe-compare-table {\n    display: none; }\n    @media (min-width: 950px) {\n      .fe60 .fe-compare-table {\n        display: inline-block;\n        text-align: center;\n        margin: 2.5em 0; }\n        .fe60 .fe-compare-table__heading {\n          min-height: 70px;\n          background-color: #000000;\n          color: #fff;\n          vertical-align: center;\n          padding: 1em 1.5em;\n          font-weight: bold;\n          font-size: 1em;\n          line-height: 1.3rem;\n          border: 1px solid #fff; }\n          .fe60 .fe-compare-table__heading:first-child {\n            border-left: #000; }\n          .fe60 .fe-compare-table__heading:last-child {\n            border-right: #000; }\n          .fe60 .fe-compare-table__heading--center {\n            text-align: center; }\n          .fe60 .fe-compare-table__heading--fee {\n            font-size: 1.3rem; }\n        .fe60 .fe-compare-table__detail {\n          padding: 1em 1.5em;\n          border-bottom: 1px solid #fff;\n          border-right: 1px solid #fff;\n          font-size: 1rem;\n          line-height: 1.3rem; }\n          .fe60 .fe-compare-table__detail--left {\n            text-align: left !important; }\n          .fe60 .fe-compare-table__detail--green {\n            font-weight: bold;\n            text-align: left;\n            background-color: #068293;\n            color: #fff; }\n          .fe60 .fe-compare-table__detail--fee {\n            font-weight: bold;\n            font-size: 1.4rem;\n            padding: 1em 3.2em; }\n          .fe60 .fe-compare-table__detail--light-green {\n            background-color: #d0e7ea; }\n          .fe60 .fe-compare-table__detail--grey {\n            background-color: #eef6f7; } }\n  .fe60 .fe-modal-wrap h2 {\n    text-align: center;\n    margin-top: 2rem; }\n  .fe60 .fe-modal-wrap .int-button-fe-modal {\n    display: block;\n    max-width: 300px; }\n  .fe60 .fe-modal-wrap #modal-part-time-tab, .fe60 .fe-modal-wrap #modal-full-time-tab {\n    border-right: none !important;\n    border-left: none !important; }\n  .fe60 .fe-modal-wrap #ou-modal-tabs .tabs {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap; }\n    .fe60 .fe-modal-wrap #ou-modal-tabs .tabs a {\n      color: #414042;\n      text-decoration: none;\n      position: relative;\n      display: table-cell;\n      float: none;\n      text-align: center;\n      padding: 15px 60px;\n      font-size: 1.2em;\n      background: #f1f6f9;\n      white-space: normal;\n      border: 1px solid #f1f6f9; }\n      .fe60 .fe-modal-wrap #ou-modal-tabs .tabs a.active {\n        color: #fff !important; }\n        .fe60 .fe-modal-wrap #ou-modal-tabs .tabs a.active:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          width: 100%;\n          height: 10px;\n          top: -9px;\n          left: -1px;\n          background: #347cad;\n          border: 1px solid #347cad;\n          border-bottom: 0;\n          box-sizing: content-box; }\n  @media (min-width: 768px) {\n    .fe60 .fe-modal-wrap #ou-modal-tabs .tabs {\n      -ms-flex-wrap: inherit;\n      flex-wrap: inherit; } }\n  .fe60 .js-fe-modal {\n    display: none; }\n  .fe60 .tingle-modal * {\n    box-sizing: border-box; }\n  .fe60 .tingle-modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: -ms-flexbox;\n    display: flex;\n    visibility: hidden;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    background: rgba(0, 0, 0, 0.8);\n    opacity: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    transition: transform .2s ease; }\n  .fe60 .tingle-modal--confirm .tingle-modal-box {\n    text-align: center; }\n  .fe60 .tingle-modal--noOverlayClose {\n    cursor: default; }\n  .fe60 .tingle-modal--noClose .tingle-modal__close {\n    display: none; }\n  .fe60 .tingle-modal__close {\n    position: fixed;\n    top: 10px;\n    right: 28px;\n    z-index: 1000;\n    padding: 0;\n    width: 5rem;\n    height: 5rem;\n    border: none;\n    background-color: transparent;\n    color: #f0f0f0;\n    font-size: 4rem;\n    font-family: monospace;\n    line-height: 1;\n    cursor: pointer;\n    transition: color .3s ease; }\n    .fe60 .tingle-modal__close:hover, .fe60 .tingle-modal__close:focus {\n      text-decoration: none !important; }\n  .fe60 .tingle-modal__closeLabel {\n    display: none; }\n  .fe60 .tingle-modal__close:hover {\n    color: #fff; }\n  .fe60 .tingle-modal-box {\n    position: relative;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 95%;\n    border-radius: 4px;\n    background: #fff;\n    opacity: 1;\n    cursor: auto;\n    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    -ms-transform: scale(0.8);\n    transform: scale(0.8); }\n    @media (min-width: 1300px) {\n      .fe60 .tingle-modal-box {\n        width: 70%; } }\n  .fe60 .tingle-modal-box__footer {\n    padding: 1.5rem 2rem;\n    width: auto;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    background-color: #f5f5f5;\n    cursor: auto; }\n  .fe60 .tingle-modal-box__footer::after {\n    display: table;\n    clear: both;\n    content: \"\"; }\n  .fe60 .tingle-modal-box__footer--sticky {\n    position: fixed;\n    bottom: -200px;\n    /* TODO : find a better way */\n    z-index: 10001;\n    opacity: 1;\n    transition: bottom .3s ease-in-out .3s; }\n  .fe60 .tingle-enabled {\n    position: fixed;\n    right: 0;\n    left: 0;\n    overflow: hidden !important; }\n  .fe60 .tingle-modal--visible .tingle-modal-box__footer {\n    bottom: 0; }\n  .fe60 .tingle-enabled .tingle-content-wrapper {\n    filter: blur(8px); }\n  .fe60 .tingle-modal--visible {\n    visibility: visible;\n    opacity: 1; }\n  .fe60 .tingle-modal--visible .tingle-modal-box {\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  .fe60 .tingle-modal--overflow {\n    overflow-y: scroll;\n    padding-top: 8vh; }\n  .fe60 .tingle-btn {\n    display: inline-block;\n    margin: 0 .5rem;\n    padding: 1rem 2rem;\n    border: none;\n    background-color: grey;\n    box-shadow: none;\n    color: #fff;\n    vertical-align: middle;\n    text-decoration: none;\n    font-size: inherit;\n    font-family: inherit;\n    text-transform: uppercase;\n    line-height: normal;\n    cursor: pointer;\n    transition: background-color .4s ease; }\n  .fe60 .tingle-btn--pull-left {\n    float: left; }\n  .fe60 .tingle-btn--pull-right {\n    float: right; }\n  @media (max-width: 767px) {\n    .fe60 .tingle-modal {\n      top: 0px;\n      display: block;\n      padding-top: 60px;\n      width: 100%; }\n    .fe60 .tingle-modal-box {\n      width: auto;\n      border-radius: 0; }\n    .fe60 .tingle-modal-box__content {\n      overflow-y: scroll; }\n    .fe60 .tingle-modal--noClose {\n      top: 0; }\n    .fe60 .tingle-modal--noOverlayClose {\n      padding-top: 0; }\n    .fe60 .tingle-modal-box__footer .tingle-btn {\n      display: block;\n      float: none;\n      margin-bottom: 1rem;\n      width: 100%; }\n    .fe60 .tingle-modal__close {\n      top: 0;\n      right: 0;\n      left: 0;\n      display: block;\n      width: 100%;\n      height: 60px;\n      border: none;\n      background-color: #e21481;\n      box-shadow: none;\n      color: #fff;\n      line-height: 55px; }\n    .fe60 .tingle-modal__closeLabel {\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 1rem;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif; }\n    .fe60 .tingle-modal__closeIcon {\n      display: inline-block;\n      margin-right: .5rem;\n      vertical-align: middle;\n      font-size: 2rem; } }\n  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\n    .fe60 .tingle-modal {\n      -webkit-backdrop-filter: blur(20px);\n      backdrop-filter: blur(20px); }\n    @media (max-width: 540px) {\n      .fe60 .tingle-modal {\n        -webkit-backdrop-filter: blur(8px);\n        backdrop-filter: blur(8px); } }\n    .fe60 .tingle-enabled .tingle-content-wrapper {\n      filter: none; } }\n\nbody.tingle-enabled {\n  position: fixed !important;\n  right: 0 !important;\n  left: 0 !important;\n  overflow: hidden !important; }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "29666718-7215-49E0-9C87-16495D5BC402"}]}], "name": "Variation #1: Clearer info, new tabbed design"}], "audienceIds": ["and", "10758870617"], "changes": null, "id": "12248381025", "integrationSettings": null}], "id": "12242770909", "weightDistributions": null, "name": "FE_060_Fees_&_Funding_Page", "groupId": null, "commitId": "14137390441", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "25", "site_catalyst_prop": "10"}, "10793941872": {}}, "integrationStringVersion": 2, "viewIds": ["10140001547", "10172483568"], "experiments": [{"weightDistributions": [{"entityId": "12387362687", "endOfRange": 10000}], "audienceName": "Excluding: OU & FE Traffic + IE 8-10", "name": "FE_028_RQAP_Page -with welsh updates - (running 100%)", "bucketingStrategy": null, "variations": [{"id": "12398623905", "actions": [{"viewId": "10140001547", "changes": []}], "name": "Original"}, {"id": "12434414426", "actions": [{"viewId": "10140001547", "changes": [{"dependencies": [], "type": "custom_code", "id": "70823e4961c6442c9e487c34e61124f2", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow 
utils.waitForElement('head').then(function(){
	$('head').append('<meta name=\"robots\" content=\"noindex\">'); 
});

// Add name space
utils.waitForElement('body').then(function(){
	$('body').addClass('fe28');
});

var generalHeading = '<h2>General prospectuses<\/h2>';
var subjectHeading = '<h2>Subject area prospectuses<\/h2>';
var generalHeadingSingular = '<h2>General prospectus<\/h2>';
var subjectHeadingSingular = '<h2>Subject area prospectus<\/h2>';
var labelCourseInfoAccess = '<span class=\"fe-label-course-info\">Modules designed to help learners with little or no experience of studying to build confidence and develop study skills.<\/span>';
var labelCourseInfoUnder = '<span class=\"fe-label-course-info\">Overview of the subjects and qualifications we offer at undergraduate level, along with answers to your questions about studying with the OU.<\/span>';
var labelCourseInfoPost = '<span class=\"fe-label-course-info\">Overview of the subjects and qualifications we offer at postgraduate level, along with answers to your questions about studying with the OU.<\/span>';
var labelCourseInfoOpenDeg = '<span class=\"fe-label-course-info\">Our Open qualifications enable you to tailor your study to suit your needs and interests. They give you huge freedom of choice across the OU\'s full range of subject areas which you can study in any combination.<\/span>';
var labelCourseInfoOpenDegPostgrad = '<span class=\"fe-label-course-info\">With our new MA or MSc Open, you can create a personalised masters qualification across a range of disciplines.<\/span>';
var viaPostCtaMessage = '<p class=\"fe-submit-cta-message\">Your selected <span class=\"prospectus\">prospectus<\/span> will be dispatched by post within 2 working days.<\/p>';
var formHeading = '<h2>Enter your details<\/h2>';
var inputEmailMessage = '<div class=\"fe-email-message\">\n    <div class=\"int-grid3\">&nbsp;<\/div>\n    <div class=\"int-grid6\">\n        <p class=\"fe-email-input-message\"><span class=\"fe-email-input-message-copy\"><\/span><\/p>\n    <\/div>\n<\/div>';
var showHidePassword ='<div class=\"fe-toggle-password\"><button type=\"button\" id=\"btnFEToggle\" class=\"fe-toggle\" role=\"button\" tabIndex=\"0\">show<\/button><\/div>';

//  Append a parameter to the URLs (Add to Variation 1)
var _optly={redir:document.createElement("a"), newURL:window.location.toString(), currentURL: window.location.toString(), paramToAdd: "v=1" };
if (window.location.search.indexOf(_optly.paramToAdd) == -1) {
    //paramToAdd is not already in the URL, so add it
    if (window.location.search.length == 0) {
        _optly.newURL += "?" + _optly.paramToAdd;
    } else {
        _optly.newURL += "&" + _optly.paramToAdd;
    }
}
_optly.redir.href=_optly.newURL;
if (_optly.redir.href !== '' && _optly.redir.href != _optly.currentURL) {
    //the new URL is not blank and is different from the currentURL, so go there!
    window.location.replace(_optly.redir.href);
}


// Hide form fields


$(document).ready(function() {
  setTimeout(function(){
            if ($(".ou-role-signin").hasClass("ou-header-remove")) {
                console.log('yes signin');
            }
            else{
                console.log('no signin');
                $( "#step2 .int-row:nth-child(9), #step2 .int-row:nth-child(11), #step2 .int-row:nth-child(12), #step2 #HowLongStudy, #online-account .int-row:eq(1), #postOptions .int-row:eq(6)" ).hide();
              
              
            }
    },500);
});

// Change Intro Copy
utils.waitForElement('#step1 .int-promo').then(function(){
    $('#step1 .int-promo:eq(0) p:eq(0)').html($('#step1 .int-promo:eq(0) p:eq(0)').html().replace('OU','Open University'));
    $('#step1 .int-promo:eq(0) p strong').html($('#step1 .int-promo:eq(0) p strong').html().replace('OU','Open University'));
    $('#step1 .int-promo:eq(0) h3').html($('#step1 .int-promo:eq(0) h3').html().replace('OU','Open University'));
});

utils.waitForElement('.int-promo .selectedCountryName p').then(function(){
    $('.int-promo .selectedCountryName p').html(' You are looking at prospectuses in <span class=\"prospectusCountry\">England<\/span>. To change, please use the country selector above.');

    // Get current country
    var currentCountry = $("#currentCountry strong").text();
  
    $('.prospectusCountry').text(currentCountry);

});


// Change Courses Heading

setTimeout(function(){
utils.waitForElement('.listContainer').then(function(){

        if(window.location.href.indexOf("usab") > -1) {

            console.log('usab true');
            // Heading 
            $(generalHeading).prependTo('.listContainer:eq(0)');
            $(subjectHeading).prependTo('.listContainer:eq(3)');
            // Label info
            $(labelCourseInfoAccess).appendTo('.int-prospectus .listContainer:eq(0) .int-form__label');
            $(labelCourseInfoUnder).appendTo('.int-prospectus .listContainer:eq(1) .int-form__label');
            $(labelCourseInfoOpenDeg).appendTo('.int-prospectus .listContainer:eq(2) .int-form__label');

        } else if(window.location.href.indexOf("psab") > -1) {

            console.log('psab true');
            // Heading
            $(generalHeading).prependTo('.listContainer:eq(0)');
            $(subjectHeading).prependTo('.listContainer:eq(2)');
            // Label info
            $(labelCourseInfoPost).appendTo('.int-prospectus .listContainer:eq(0) .int-form__label');
            $(labelCourseInfoOpenDegPostgrad).appendTo('.int-prospectus .listContainer:eq(1) .int-form__label');


        } else if(window.location.href.indexOf("q01") > -1){

            console.log('q01 true');
            // Heading
            $(generalHeadingSingular).prependTo('.listContainer:eq(0)');

        } else if(window.location.href.indexOf("ahu") > -1){

            console.log('ahu true');
            // Heading
            $(generalHeadingSingular).prependTo('.listContainer:eq(0)');
            $(subjectHeadingSingular).prependTo('.listContainer:eq(1)');
            // Label info
            $(labelCourseInfoAccess).appendTo('.int-prospectus .listContainer:eq(0) .int-form__label');

        } else {
            console.log('No code true');
        }

});
}, 500);


// Change CTA text and label message radio buttons
utils.waitForElement('#postableCountry input').then(function(){

    $(inputEmailMessage).insertAfter('#dobRow');

    var checkboxesPostDelivery = $('#postableCountry input#radDeliveryMethodPost');
    var checkboxesEmailDelivery = $('#postableCountry input#radDeliveryMethodEmail');
    var checkboxesProspectuses = $('#step1 input[type="checkbox"]');

    function PostDelivery() {
        var countCheckedPostCheckboxes = checkboxesPostDelivery.filter(':checked').length;

        console.log(countCheckedPostCheckboxes);

            if ( countCheckedPostCheckboxes = 1 ) {
                console.log('Post true');
                $("#submitForm").val("Post me my prospectus");
                // Insert CTA message
                $(viaPostCtaMessage).insertAfter('#submitForm');
                // Email input message
                $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that we can also email you a copy of your selected <span class=\"prospectus\">prospectuses<\/span>.");
            } else if ( countCheckedPostCheckboxes = 0 ) {
                console.log('Post false');
            } 

    }

    function emailDelivery() {
        var countCheckedEmailCheckboxes = checkboxesEmailDelivery.filter(':checked').length;

        console.log(countCheckedEmailCheckboxes);

        if ( countCheckedEmailCheckboxes = 1 ) {
            console.log('Email true');
            //console.log('email true');
            $("#submitForm").val("Email me my prospectus");
            $('.fe-submit-cta-message').remove();
            // Email input message
            $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that your selected <span class=\"prospectus\">prospectus<\/span> is sent to the right place");
        } else if ( countCheckedEmailCheckboxes = 0 ) {
            console.log('Email false');
        } 
    }
    
    emailDelivery();


    // Check if Post is true
    checkboxesPostDelivery.change(function(){
        PostDelivery();
    });

    // Check if Email is true
    checkboxesEmailDelivery.change(function(){
        emailDelivery();  
    });

});


// Form

utils.waitForElement('#step2').then(function(){

    // Form Heading
    $(formHeading).prependTo('#step2');
     
     // Add class to how send prospectus
    $('#postableCountry').parent().addClass('fe-postable-country');

    // Insert how send prospectus at the begining of the form
    utils.waitForElement('.fe-postable-country').then(function(){
        $(".fe-postable-country").insertBefore("#titleRow");
    });
    // Remove placeholder when typing
    $(document).on('keyup','.is-error',function() {
        $(this).next('.int-errorMessage').hide('slow');
    });
    // Duplicate email field into email confirm
    $("#email").keyup(function(){
        $("#txtEmailConfirm").val(this.value);
    });
    // Duplicate password field into password confirm
    $("#password").keyup(function(){
        $("#password_confirm").val(this.value);
    }); 
});

// Open Privacy link to a new tab
utils.waitForElement('#radDeliveryMethodPost').then(function(){
    var linksPrivacy = $('a[href="http://www.open.ac.uk/privacy/"]');
    $(linksPrivacy).attr('target', '_blank');
});

// Find address’ CTA button has been moved alongside the postcode
utils.waitForElement('.findAddress-postcode').then(function(){
    $('.findAddress-postcode').parent().addClass('fe-find-address');
    $(window).on("resize", function(e) {
    if ( $(window).width() <= 800) {
      $("#btnFindAddress").text("Find");
    } else {
        $("#btnFindAddress").text("Find address");
    }
}).resize();
}); 

// copy next to the create an Open University account tick box
utils.waitForElement('#createAccountCheckboxDescription').then(function(){
    $('#createAccountCheckboxDescription').text('Save time when you contact us by creating a free Open University online account');
});




// Show/Hide Password

utils.waitForElement('#password').then(function(){

    var showHidePassword ='<div class=\"fe-toggle-password\"><button type=\"button\" id=\"btnFEToggle\" class=\"fe-toggle\" role=\"button\" tabIndex=\"0\">show<\/button><\/div>';

    $(showHidePassword).insertAfter("#password");

    var passwordInput = document.getElementById('password');
    var toggle = document.getElementById('btnFEToggle');

    function togglePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggle.innerHTML = 'hide';
    } else {
        passwordInput.type = 'password';
        toggle.innerHTML = 'show';
    }
    }

    function checkInput() {
    if (passwordInput.value === '') {
        toggle.style.display = 'none';
        toggle.innerHTML = 'show';
        passwordInput.type = 'password';
    } else {
        toggle.style.display = 'block';
    }
    }

    toggle.addEventListener('click', togglePassword, false);
    passwordInput.addEventListener('keyup', checkInput, false);


});



// Count checkbox to change the heading

utils.waitForElement('#step1 input[type="checkbox"]').then(function(){

    var checkboxesProspectuses = $('#step1 input[type="checkbox"]');
    var plural = null;

     
        checkboxesProspectuses.change(function(){

                var countCheckedCheckboxes = checkboxesProspectuses.filter(':checked').length;

                console.log(countCheckedCheckboxes);

                var checkedValue = $("#step1 input:checkbox:checked").map(function(){
                    return $(this).val();
                }).get();
                console.log(checkedValue);

                 setTimeout(function(){
                    utils.waitForElement('#submitForm').then(function(){

                        if ( countCheckedCheckboxes >= 2 ) {
                            $('#divprosMessage h2').text('Please select no more than 3 prospectuses');
                            $('span.prospectus').text( "prospectuses" ); 
                            
                            if (!plural) {
                                $('#submitForm').val($('#submitForm').val().replace('prospectus','prospectuses')); 
                                $('#postableCountry .int-grid3 label:eq(0)').html($('#postableCountry .int-grid3 label:eq(0)').html().replace('prospectus','prospectuses')); 
                                $('.fe-email-input-message-copy').html($('.fe-email-input-message-copy').html().replace('is','get')); 
                            plural = true;    
                            }
                        } else if ( countCheckedCheckboxes < 2 ) {
                            $('span.prospectus').text( "prospectus" ); 

                            if (plural == null || plural == true) {
                                $('#submitForm').val($('#submitForm').val().replace('prospectuses','prospectus'));
                                $('#postableCountry .int-grid3 label:eq(0)').html($('#postableCountry .int-grid3 label:eq(0)').html().replace('prospectuses','prospectus'));    
                                $('.fe-email-input-message-copy').html($('.fe-email-input-message-copy').html().replace('get','is'));
                            plural = false;    
                            }
                        }
                    });
                }, 500);
        });
  
  // Update Form CTA if checkbox download only are ticked

        var postableCountry =  $('#postableCountry');

        function updateFormCTAIfDownloadOnly() {

            if ( postableCountry.css('display') === 'none') {
                console.log('Download true');
                $("#submitForm").val("Email me my prospectus");
                $('.fe-submit-cta-message').remove();
                // Email input message
                $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that your selected <span class=\"prospectus\">prospectuses<\/span> is sent to the right place");
            } else {
                console.log('Download false');
            }
        }


        $("#step1 input:checkbox").change(function() {
            if(this.checked) {
                console.log('checked');
                updateFormCTAIfDownloadOnly();   
            } else {
                console.log('unchecked');
            }
        });
  
  
   // Cookie after submit
   $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
            }
        };

        $("#submitForm").click(function(){
            var flag=false;
            var codes = "";

            $("#step1 input:checkbox:checked").each(function(){
                var value = $(this).val();
                var valueSplit = value.split(/#/ig);
                var code = "";

                if (valueSplit.length > 0) {
                    code = valueSplit[0];
                }

                if (code !== "") {
                    if (codes !== "") {
                        codes += ",";
                    }

                    if(!flag)
                    {
                        codes += code.toLowerCase();
            //            url=url+code;
                        flag=true; // To trace if first query string added
                    }
                    else
                    {
            //            url=url+"&choice="+code;
                        codes += code.toLowerCase();
                    }
                    console.log(codes);
                
                }

                $.cookie('prospectus_code', (codes), { expires : 1 });

            });
            
            

        
            
            if ($("input#radDeliveryMethodEmail").is(":checked")) {
                $.cookie("receive", "email", { expires : 1 });
            }
            else if ($("input#radDeliveryMethodPost").is(":checked")) {
                $.cookie("receive", "post", { expires : 1 });
            }
        });
  
  
  
});

// Pass course code into query string





// Tab Landing

// Active tabs
$(document).ready(function() {
  
    // on load check hash tab active
    if(window.location.href.indexOf("postgraduate-tab") > -1) {
        $('#undergraduate-tab').removeClass('active');
        $('#postgraduate-tab').addClass('active');
     } else if (window.location.href.indexOf("undergraduate-tab") > -1) {
        $('#undergraduate-tab').addClass('active');
        $('#postgraduate-tab').removeClass('active');
     }
  
    setTimeout(function(){
        $('#ou-courses-tabs').each(function () {
            new OU.EEP.Tabs($(this), {
                contextSelector: $(this)
            });
        });
    }, 250);


     utils.waitForElement('#undergraduate-tab .int-toggleContent').then(function(){
        // Insert Heading
        $(generalHeading).prependTo('#undergraduate-tab .int-toggleContent');
        $(subjectHeading).prependTo('#undergraduate-tab .int-toggleContent .int-row:eq(3)');
        // Label info
        $(labelCourseInfoAccess).appendTo('#undergraduate-tab .int-toggleContent .int-row:eq(0) .int-form__label');
        $(labelCourseInfoUnder).appendTo('#undergraduate-tab .int-toggleContent .int-row:eq(1) .int-form__label');
        $(labelCourseInfoOpenDeg).appendTo('#undergraduate-tab .int-toggleContent .int-row:eq(2) .int-form__label');
    });

     utils.waitForElement('#postgraduate-tab .int-toggleContent').then(function(){
        // Insert Heading
        $(generalHeading).prependTo('#postgraduate-tab .int-toggleContent');
        $(subjectHeading).prependTo('#postgraduate-tab .int-toggleContent .int-row:eq(2)');
        // Label info
        $(labelCourseInfoPost).appendTo('#postgraduate-tab .int-toggleContent .int-row:eq(0) .int-form__label');
        $(labelCourseInfoOpenDegPostgrad).appendTo('#postgraduate-tab .int-toggleContent .int-row:eq(1) .int-form__label');
    });
});

utils.waitForElement('.int-toggler').then(function(){
    var newTabContent = '<div id=\"ou-courses-tabs\" class=\"int-tab\">\n\n  <div class=\"tabs\" role=\"tablist\">\n    <a href=\"#undergraduate-tab\" class=\"qual-tab-click active\" aria-controls=\"undergraduate-tab\" role=\"tab\" aria-selected=\"true\">Undergraduate<\/a>\n    <a href=\"#postgraduate-tab\" class=\"qual-tab-click\" aria-controls=\"postgraduate-tab\" role=\"tab\" aria-selected=\"false\">Postgraduate<\/a>\n  <\/div>\n\n  <div class=\"panels\">\n    <div id=\"undergraduate-tab\" class=\"active\" role=\"tabpanel\" aria-hidden=\"false\" aria-expanded=\"true\">\n        <span class=\"fe-undergraduate-tab-content\"><\/span>\n    <\/div>\n\n    <div id=\"postgraduate-tab\" role=\"tabpanel\" aria-hidden=\"true\" aria-expanded=\"false\" class=\"\">\n        <span class=\"fe-postgraduate-tab-content\"><\/span>\n    <\/div>\n  <\/div>\n<\/div>\n';
    $(newTabContent).insertAfter("#divprosMessage");


    $("#ug-prospectuses").clone().detach().appendTo(".fe-undergraduate-tab-content");

    $("#pg-prospectuses").clone().detach().appendTo(".fe-postgraduate-tab-content");

    // Hide old content
    $( ".int-toggler" ).hide();

});

// Mail Checkjs

 $(document).ready(function() {

 /*! mailcheck v1.1.2 @licence MIT */
    var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift3Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){var g=f.domain,j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),1==j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift3Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift3Distance:function(a,b){if(null==a||0===a.length)return null==b||0===b.length?0:b.length;if(null==b||0===b.length)return a.length;for(var c=0,d=0,e=0,f=0,g=5;c+d<a.length&&c+e<b.length;){if(a.charAt(c+d)==b.charAt(c+e))f++;else{d=0,e=0;for(var h=0;g>h;h++){if(c+h<a.length&&a.charAt(c+h)==b.charAt(c)){d=h;break}if(c+h<b.length&&a.charAt(c)==b.charAt(c+h)){e=h;break}}}c++}return(a.length+b.length)/2-f},splitEmail:function(a){var b=a.trim().split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0==e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var c=1;c<e.length;c++)g+=e[c]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);


   // Insert div paceholder
   $('#email').closest('.int-grid6').addClass('fe-email-wrap');
   $( ".fe-email-wrap" ).wrapInner( "<div class='fe-placeholder'></div>" );
   $('<span id=\"fe-hint\"><\/span>').insertAfter('.fe-email-wrap .fe-placeholder');

   (function ($) {

        var $email = $('#email');
        var $hint = $("#fe-hint");

        $email.on('blur',function() {
        $hint.css('display', 'none').empty();

        
        $(this).mailcheck({
            suggested: function(element, suggestion) {
            if(!$hint.html()) {
                // First error - fill in/show entire hint element
                var suggestion = "Did you mean <span class='suggestion'>" + "<a href='#' class='domain'><span class='address'>" + suggestion.address + "</span>@" + suggestion.domain + "</a></span>?";
                                
                $hint.html(suggestion).fadeIn(150);
            } else {
                // Subsequent errors
                $(".address").html(suggestion.address);
                $(".domain").html(suggestion.domain);
            }
            }
        });
        });

        $hint.on('click', '.domain', function() {
        // On click, fill in the field with the suggestion and remove the hint
        $email.val($(".suggestion").text());
        $hint.fadeOut(200, function() {
            $(this).empty();
            setTimeout(function(){
                $(".fe-email-wrap .int-errorMessage").fadeOut('fast');
                $(".fe-email-wrap input").removeClass('is-error');
            }, 250);
        });
        return false;
        });

    })(jQuery);

 });


// Update form heading
utils.waitForElement('#step2 h2').then(function(){
    var formHeading = '<div class=\"int-row int-row--margin-bottom \">\n                    <div class=\"int-grid4\">\n                        <h2>Enter your details<\/h2>\n                    <\/div>\n                    <div class=\"int-grid5\">\n                        <p class=\"fe-field-required\" role=\"presentation\" aria-hidden=\"true\">Fields marked with * are mandatory<\/p>\n                    <\/div>\n                <\/div>';
    $( "#step2 h2:eq(0)" ).replaceWith(formHeading);
    $( "#step2 p:eq(1)" ).remove();
});

// Move form footprint copy
utils.waitForElement('#committed-uk').then(function(){
    $("#committed-uk").detach().appendTo("#postableCountry");
});

// Remove margin bottom container top form
utils.waitForElement('#postableCountry').then(function(){
    $("#postableCountry div").removeClass("int-row--margin-bottom");
    //$("#step2 .int-row:eq(0)").removeClass("int-row--margin-bottom");
});

// Trackings
utils.waitForElement('.listContainer').then(function(){
    var urlNoCatcode = ['catcode'];
    var urlUG2  = ['?catcode=usab'];
    var urlPG3  = ['?catcode=psab'];
    var amountSubProspectuses = $('#sub-prospectuses .listContainer').length;

    
    if(window.location.href.indexOf(urlNoCatcode) === -1) {
        console.log('Alert: urlNoCatcode!');
        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "Main_Generic_RQAP_Form"
            }
        });           

    } else if(window.location.href.indexOf(urlUG2) > -1) {
        console.log('Alert: urlUG2!');

            window["optimizely"].push({
                type: "user",
                attributes: {
                   RQAP_form: "UG_RQAP_Form"
                 }
            }); 
               
    } else if(window.location.href.indexOf(urlPG3) > -1) {
        console.log('Alert: urlUG3!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "PG_RQAP_Form"
            }
        }); 
          
    } else if(amountSubProspectuses === 1){
        console.log('Alert: url4!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "RQAP_Form_For_A_Specific_Course"
            }
        }); 

    } else if((amountSubProspectuses > 1 && amountSubProspectuses <= 12)) {
        console.log('Alert: url5!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "RQAP_Form_Showing_Limited_Multiple_Prospectuses"
            }
        }); 
          
    } else {

        // Do nothing
        
    }
});

// To Hide show password in IE
$( document ).ready(function() {
    var isIE = window.navigator.msPointerEnabled;
    if(isIE) {
        $( ".fe-toggle-password" ).hide();
    } else {
        // Do nothing
    }
});
}}, {"value": "<style>.fe28 .fe-postable-country {\n  margin-bottom: 0 !important; }\n  .fe28 .fe-postable-country .int-form__field-label {\n    padding: 0 !important; }\n  .fe28 .fe-postable-country #committed-uk .int-grid3 {\n    height: 0; }\n  @media (min-width: 768px) {\n    .fe28 .fe-postable-country #committed-uk .int-grid6 {\n      margin-left: 26%; } }\n  .fe28 .fe-postable-country fieldset {\n    margin-bottom: 0 !important;\n    padding: 0 !important; }\n\n.fe28 .fe-label-course-info {\n  color: #424242;\n  font-size: 0.85em;\n  display: block; }\n\n.fe28 .fe-submit-cta-message {\n  color: #424242;\n  display: block;\n  font-size: 1.35em;\n  line-height: 1.3; }\n\n.fe28 .int-form__field:focus, .fe28 .int-form__select:focus, .fe28 .int-form__select-radio:focus, .fe28 .int-form__textarea:focus {\n  border-color: #0e56a7 !important; }\n\n.fe28 .int-form__field.is-error, .fe28 .int-form__select.is-error, .fe28 .int-form__select-radio.is-error, .fe28 .int-form__textarea.is-error {\n  border-color: #e42448 !important; }\n\n.fe28 .int-form__select:focus {\n  background-position: right 0 !important; }\n\n.fe28 .fe-email-message {\n  clear: both; }\n  .fe28 .fe-email-message:before, .fe28 .fe-email-message:after {\n    display: table;\n    line-height: 0;\n    content: \"\";\n    clear: both; }\n\n.fe28 .fe-find-address {\n  width: 60%;\n  float: left;\n  display: block;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe28 .findAddress-button {\n  float: left;\n  display: block;\n  width: 38%;\n  margin-left: 2%;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe28 #divFindAddressError {\n  clear: both !important; }\n\n.fe28 .fe-toggle-password {\n  right: 20px;\n  top: 0;\n  float: right;\n  padding: 8px 0;\n  margin-top: -45px;\n  position: relative;\n  z-index: 99999; }\n  .fe28 .fe-toggle-password button {\n    background: none;\n    border: none;\n    color: #0b55a8;\n    margin: 0;\n    padding: 0;\n    font-weight: bold;\n    color: #0e56a7;\n    text-decoration: underline;\n    font-size: 1.35em;\n    line-height: 1.5; }\n\n.fe28 #ou-courses-tabs {\n  margin-bottom: 2em; }\n\n.fe28 #fe-hint {\n  font-weight: bold;\n  display: inline-block; }\n  .fe28 #fe-hint a {\n    color: #0e56a7; }\n    .fe28 #fe-hint a:hover, .fe28 #fe-hint a:focus {\n      color: #0e56a7; }\n@media (min-width: 768px) {\n  .fe28 .fe-field-required {\n    margin-top: 2.05em;\n    text-align: right;} }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "8e90ba26220f428f9a112b65b816c673"}]}, {"viewId": "10172483568", "changes": [{"dependencies": [], "type": "custom_code", "id": "a660a18bea7a4e93a4f207c2b852f86b", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow
utils.waitForElement('head').then(function(){
	$('head').append('<meta name=\"robots\" content=\"noindex\">'); 
});

// Thank you page Add intro text 
$(document).ready(function() { 
  
  // Cookie after submit
   $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
            }
        };
  
  
  $('<h3>Download prospectus now<\/h3><ul id=\"downloadList\"><\/ul>').insertBefore('.int-grid8 h3:first');

function updateContent() {
    
    var courses = [
        {'amc19u':'Access Modules Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-access-to-success-route-england.pdf'},
        {'cdd19':'Undergraduate Courses Prospectus 2018/19 (Undergraduate);http://www.open.ac.uk/guides/guide-to-ou-undergraduate.pdf'},
        {'ope19u':'Open Qualifications Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-open-quals.pdf'},
        {'ope19':'Open Qualifications Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-open-quals.pdf'},
        {'ahu19u':'Arts and Humanities Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-arts-and-humanities-prospectus.pdf'},
        {'bsp19u':'Business and Management Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-business-school-prospectus.pdf'},
        {'cic19u':'Computing and IT Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-computing-and-ict-prospectus.pdf'},
        {'cye19u':'Education, Childhood, Youth and Sport Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-education-prospectus.pdf'},
        {'ent19u':'Engineering, Design and Technology Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-engineering-technology-and-design-prospectus.pdf'},
        {'edi19u':'Environment and Development Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-environment-development-and-international-studies-prospectus.pdf'},
        {'shw19u':'Health and Social Care Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus.pdf'},
        {'hws19u':'Health and Social Care Prospectus (Scotland) 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'tml19u':'Languages and Applied Linguistics Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-languages-prospectus.pdf'},
        {'law19u':'Law Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-law-prospectus.pdf'},
        {'mst19u':'Mathematics and Statistics Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-mathematics-and-statistics-prospectus.pdf'},
        {'nah19u':'Nursing and Healthcare Prospectus 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-ug-prospectus.pdf'},
        {'psy19u':'Psychology and Counselling Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-psychology-prospectus.pdf'},
        {'sci19u':'Science Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-science-prospectus.pdf'},
        {'ssc19u':'Social Sciences Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-social-sciences-prospectus.pdf'},
        {'swpe19':'Social Work in England and Scotland 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'},
        {'pgb19':'Postgraduate Courses Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/guide-to-ou-postgraduate-study.pdf'},
        {'ope19p':'Open Qualifications Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-open-quals.pdf'},
        {'ahu19p':'Arts and Humanities Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-arts-and-humanities-prospectus.pdf'},
        {'bsp19p':'Business and Management Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-business-school-prospectus.pdf'},
        {'cic19p':'Computing and IT Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-computing-and-ict-prospectus.pdf'},
        {'cye19p':'Education, Childhood, Youth and Sport Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-education-prospectus.pdf'},
        {'ent19p':'Engineering, Design and Technology Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-engineering-technology-and-design-prospectus.pdf'},
        {'edi19p':'Environment and Development Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-environment-development-and-international-studies-prospectus.pdf'},
        {'shw19p':'Health and Social Care Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus.pdf'},
        {'hws19p':'Health and Social Care Prospectus (Scotland) 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'tml19p':'Languages and Applied Linguistics Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-languages-prospectus.pdf'},
        {'law19p':'Law Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-law-prospectus.pdf'},
        {'mba19':'MBA (Master of Business Administration) Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/guide-to-ou-mba.pdf'},
        {'mst19p':'Mathematics and Statistics Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-mathematics-and-statistics-prospectus.pdf'},
        {'nah19p':'Nursing and Healthcare Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-pg-prospectus.pdf'},
        {'psy19p':'Psychology and Counselling Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-psychology-prospectus.pdf'},
        {'sci19p':'Science Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-science-prospectus.pdf'},
        {'ssc19p':'Social Sciences Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-social-sciences-prospectus.pdf'},
        {'swpo19':'Social Work in England and Scotland Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'},
        {'hws18u':'Health and Social Care Prospectus (Scotland) 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'nah18u':'Nursing and Healthcare Prospectus 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-ug-prospectus.pdf'},
        {'swpe18':'Social Work in England and Scotland 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'},
        {'hws18p':'Health and Social Care Prospectus (Scotland) 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'mba18':'MBA (Master of Business Administration) Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/guide-to-ou-mba.pdf'},
        {'nah18p':'Nursing and Healthcare Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-pg-prospectus.pdf'},
        {'swpp18':'Social Work in England and Scotland Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'}
    ];
    
    // Check country code
    var codesCourses = $.cookie('prospectus_code');
    var codeSplit = codesCourses.split(/,/ig);
    console.log(codeSplit);


    for (var tt=1; tt<= codeSplit.length;tt++) {
        var key = codeSplit[tt-1];
        console.log(key);

        var result;
        var courseInfoFunction = function(items, key) {
            items.filter(function(item) {
                
                if (item[key]) {
                    result = item[key];
                }
                });
                return result;
         };

         var courseInfo = courseInfoFunction(courses, key);
        console.log(courseInfo);

        
        if(courseInfo)
        {

                var course = courseInfo.split(/;/ig);
                var titleProspectus = (course.length > 0 ? course[0] : null);
                var urlProspectus = (course.length > 1 ? course[1] : null);
                
                $('#downloadList').append('<li><a href=\"' + urlProspectus + '\" target=\"_blank\" title=\"' + titleProspectus + '\">' + titleProspectus + '<\/a><\/li>');
                
        }

    
    }

}

updateContent();
  
  
  
  
  
  
  
    var cookieReceive = window.$.cookie('receive'); //set cookie var
    if ( cookieReceive == 'post') { //if equals this val
        //alert("post");
        $('h2').text('Your prospectuses have been posted to you; it’s a small step but it could be the start of something huge');
        $('.int-wrap p:eq(0)').html('Your prospectus will be dispatched within 2 working days.<br /> We’ve also emailed them to you for convenience. Please check your spam folder.');
    }
    else if ( cookieReceive == 'email') {
        //alert("email");
        $('h2').text('Your prospectuses have been emailed to you; it’s a small step but it could be the start of something huge');
        $('.int-wrap p:eq(0)').html('Your prospectus should be in your inbox shortly.<br /> Please check your spam folder.');
    }
});
}}]}], "name": "Variation #1: improved copy & fewer inputs"}, {"id": "12395183828", "actions": [{"viewId": "10140001547", "changes": [{"dependencies": [], "type": "custom_code", "id": "5b73834f8d4e4e2faf73765757a92530", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow
utils.waitForElement('head').then(function(){
	$('head').append('<meta name=\"robots\" content=\"noindex\">');
});

// Add name space
utils.waitForElement('body').then(function(){
	$('body').addClass('fe28 fe28--2');
});

var generalHeading = '<h2>General prospectuses<\/h2>';
var subjectHeading = '<h2>Subject area prospectuses<\/h2>';
var generalHeadingSingular = '<h2>General prospectus<\/h2>';
var subjectHeadingSingular = '<h2>Subject area prospectus<\/h2>';
var labelCourseInfoAccess = '<span class=\"fe-label-course-info\">Modules designed to help learners with little or no experience of studying to build confidence and develop study skills.<\/span>';
var labelCourseInfoUnder = '<span class=\"fe-label-course-info\">Overview of the subjects and qualifications we offer at undergraduate level, along with answers to your questions about studying with the OU.<\/span>';
var labelCourseInfoPost = '<span class=\"fe-label-course-info\">Overview of the subjects and qualifications we offer at postgraduate level, along with answers to your questions about studying with the OU.<\/span>';
var labelCourseInfoOpenDeg = '<span class=\"fe-label-course-info\">Our Open qualifications enable you to tailor your study to suit your needs and interests. They give you huge freedom of choice across the OU\'s full range of subject areas which you can study in any combination.<\/span>';
var labelCourseInfoOpenDegPostgrad = '<span class=\"fe-label-course-info\">With our new MA or MSc Open, you can create a personalised masters qualification across a range of disciplines.<\/span>';
var viaPostCtaMessage = '<p class=\"fe-submit-cta-message\">Your selected <span class=\"prospectus\">prospectus<\/span> will be dispatched by post within 2 working days.<\/p>';
var formHeading = '<h2>Enter your details<\/h2>';
var inputEmailMessage = '<div class=\"fe-email-message\">\n    <div class=\"int-grid3\">&nbsp;<\/div>\n    <div class=\"int-grid6\">\n        <p class=\"fe-email-input-message\"><span class=\"fe-email-input-message-copy\"><\/span><\/p>\n    <\/div>\n<\/div>';
var showHidePassword ='<div class=\"fe-toggle-password\"><button type=\"button\" id=\"btnFEToggle\" class=\"fe-toggle\" role=\"button\" tabIndex=\"0\">show<\/button><\/div>';

//  Append a parameter to the URLs (Add to Variation 2)
var _optly={redir:document.createElement("a"), newURL:window.location.toString(), currentURL: window.location.toString(), paramToAdd: "v=2" };
if (window.location.search.indexOf(_optly.paramToAdd) == -1) {
    //paramToAdd is not already in the URL, so add it
    if (window.location.search.length == 0) {
        _optly.newURL += "?" + _optly.paramToAdd;
    } else {
        _optly.newURL += "&" + _optly.paramToAdd;
    }
}
_optly.redir.href=_optly.newURL;
if (_optly.redir.href !== '' && _optly.redir.href != _optly.currentURL) {
    //the new URL is not blank and is different from the currentURL, so go there!
    window.location.replace(_optly.redir.href);
}

// Hide Form Fields

$(document).ready(function() {
    setTimeout(function(){
        if ($(".ou-role-signin").hasClass("ou-header-remove")) {
            console.log('yes signin');
            $('.fe-date-birth-label').addClass('hidden');
            $( "#step2 .int-row:nth-child(10), #step2 .int-row:nth-child(12), #step2 .int-row:nth-child(13), #step2 #HowLongStudy, #online-account .int-row:eq(1), #postOptions .int-row:eq(6)" ).hide();
        }
        else{
            console.log('no signin');
            $('.fe-date-birth-label').removeClass('hidden');
            $( "#step2 .int-row:nth-child(10), #step2 .int-row:nth-child(12), #step2 .int-row:nth-child(13), #step2 #HowLongStudy, #online-account .int-row:eq(1), #postOptions .int-row:eq(6)" ).hide(); 
        }     
      },800);
  });

// Change Intro Copy
utils.waitForElement('#step1 .int-promo').then(function(){
    $('#step1 .int-promo:eq(0) p:eq(0)').html($('#step1 .int-promo:eq(0) p:eq(0)').html().replace('OU','Open University'));
    $('#step1 .int-promo:eq(0) p strong').html($('#step1 .int-promo:eq(0) p strong').html().replace('OU','Open University'));
    $('#step1 .int-promo:eq(0) h3').html($('#step1 .int-promo:eq(0) h3').html().replace('OU','Open University'));
});

utils.waitForElement('.int-promo .selectedCountryName p').then(function(){
    $('.int-promo .selectedCountryName p').html(' You are looking at prospectuses in <span class=\"prospectusCountry\">England<\/span>. To change, please use the country selector above.');

    // Get current country
    var currentCountry = $("#currentCountry strong").text();
  
    $('.prospectusCountry').text(currentCountry);
});


// Change Courses Heading
setTimeout(function(){
utils.waitForElement('.listContainer').then(function(){

        if(window.location.href.indexOf("usab") > -1) {

            console.log('usab true');
            // Heading 
            $(generalHeading).prependTo('.listContainer:eq(0)');
            $(subjectHeading).prependTo('.listContainer:eq(3)');
            // Label info
            $(labelCourseInfoAccess).appendTo('.int-prospectus .listContainer:eq(0) .int-form__label');
            $(labelCourseInfoUnder).appendTo('.int-prospectus .listContainer:eq(1) .int-form__label');
            $(labelCourseInfoOpenDeg).appendTo('.int-prospectus .listContainer:eq(2) .int-form__label');

        } else if(window.location.href.indexOf("psab") > -1) {

            console.log('psab true');
            // Heading
            $(generalHeading).prependTo('.listContainer:eq(0)');
            $(subjectHeading).prependTo('.listContainer:eq(2)');
            // Label info
            $(labelCourseInfoPost).appendTo('.int-prospectus .listContainer:eq(0) .int-form__label');
            $(labelCourseInfoOpenDegPostgrad).appendTo('.int-prospectus .listContainer:eq(1) .int-form__label');


        } else if(window.location.href.indexOf("q01") > -1){

            console.log('q01 true');
            // Heading
            $(generalHeadingSingular).prependTo('.listContainer:eq(0)');

        } else if(window.location.href.indexOf("ahu") > -1){

            console.log('ahu true');
            // Heading
            $(generalHeadingSingular).prependTo('.listContainer:eq(0)');
            $(subjectHeadingSingular).prependTo('.listContainer:eq(1)');
            // Label info
            $(labelCourseInfoAccess).appendTo('.int-prospectus .listContainer:eq(0) .int-form__label');

        } else {
            console.log('No code true');
        }

});
}, 500);



// Change CTA text and label message radio buttons
utils.waitForElement('#postableCountry input').then(function(){

    $(inputEmailMessage).insertAfter('#dobRow');

    var checkboxesPostDelivery = $('#postableCountry input#radDeliveryMethodPost');
    var checkboxesEmailDelivery = $('#postableCountry input#radDeliveryMethodEmail');
    var checkboxesProspectuses = $('#step1 input[type="checkbox"]');

    function PostDelivery() {
        var countCheckedPostCheckboxes = checkboxesPostDelivery.filter(':checked').length;

        console.log(countCheckedPostCheckboxes);

            if ( countCheckedPostCheckboxes = 1 ) {
                console.log('Post true');
                $("#submitForm").val("Post me my prospectus");
                // Insert CTA message
                $(viaPostCtaMessage).insertAfter('#submitForm');
                // Email input message
                $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that we can also email you a copy of your selected <span class=\"prospectus\">prospectus<\/span>.");
            } else if ( countCheckedPostCheckboxes = 0 ) {
                console.log('Post false');
            } 

    }

    function emailDelivery() {
        var countCheckedEmailCheckboxes = checkboxesEmailDelivery.filter(':checked').length;

        console.log(countCheckedEmailCheckboxes);

        if ( countCheckedEmailCheckboxes = 1 ) {
            console.log('Email true');
            //console.log('email true');
            $("#submitForm").val("Email me my prospectus");
            $('.fe-submit-cta-message').remove();
            // Email input message
            $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that your selected <span class=\"prospectus\">prospectus<\/span> is sent to the right place");
        } else if ( countCheckedEmailCheckboxes = 0 ) {
            console.log('Email false');
        } 
    }
    
    emailDelivery();


    // Check if Post is true
    checkboxesPostDelivery.change(function(){
        PostDelivery();
    });

    // Check if Email is true
    checkboxesEmailDelivery.change(function(){
        emailDelivery();  
    });

});


// Form  

utils.waitForElement('#step2').then(function(){

    // Form Heading
    $(formHeading).prependTo('#step2');
  
    // Hide form fields
    
  
     
     // Add class to how send prospectus
    $('#postableCountry').parent().addClass('fe-postable-country');

    // Insert how send prospectus at the begining of the form
    utils.waitForElement('.fe-postable-country').then(function(){
        $(".fe-postable-country").insertBefore("#titleRow");
    });
    // Remove placeholder when typing
    $(document).on('keyup','.is-error',function() {
        $(this).next('.int-errorMessage').hide('slow');
    }); 
  
    // Duplicate email field into email confirm
    $("#email").keyup(function(){
        $("#txtEmailConfirm").val(this.value);
    });
    
    // Duplicate password field into password confirm
    $("#password").keyup(function(){
        $("#password_confirm").val(this.value);
    }); 
});

// Open Privacy link to a new tab
utils.waitForElement('#radDeliveryMethodPost').then(function(){
    var linksPrivacy = $('a[href="http://www.open.ac.uk/privacy/"]');
    $(linksPrivacy).attr('target', '_blank');
});

// Find address’ CTA button has been moved alongside the postcode
utils.waitForElement('.findAddress-postcode').then(function(){
    $('.findAddress-postcode').parent().addClass('fe-find-address');
    $(window).on("resize", function(e) {
    if ( $(window).width() <= 800) {
      $("#btnFindAddress").text("Find");
    } else {
        $("#btnFindAddress").text("Find address");
    }
}).resize();
}); 

// copy next to the create an Open University account tick box
utils.waitForElement('#createAccountCheckboxDescription').then(function(){
    $('#createAccountCheckboxDescription').text('Save time when you contact us by creating a free Open University online account');
});




// Show/Hide Password

utils.waitForElement('#password').then(function(){

    var showHidePassword ='<div class=\"fe-toggle-password\"><button type=\"button\" id=\"btnFEToggle\" class=\"fe-toggle\" role=\"button\" tabIndex=\"0\">show<\/button><\/div>';

    $(showHidePassword).insertAfter("#password");

    var passwordInput = document.getElementById('password');
    var toggle = document.getElementById('btnFEToggle');

    function togglePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggle.innerHTML = 'hide';
    } else {
        passwordInput.type = 'password';
        toggle.innerHTML = 'show';
    }
    }

    function checkInput() {
    if (passwordInput.value === '') {
        toggle.style.display = 'none';
        toggle.innerHTML = 'show';
        passwordInput.type = 'password';
    } else {
        toggle.style.display = 'block';
    }
    }

    toggle.addEventListener('click', togglePassword, false);
    passwordInput.addEventListener('keyup', checkInput, false);


});



// Count checkbox to change the heading

utils.waitForElement('#step1 input[type="checkbox"]').then(function(){

    var checkboxesProspectuses = $('#step1 input[type="checkbox"]');
    var plural = null;

     
        checkboxesProspectuses.change(function(){

                var countCheckedCheckboxes = checkboxesProspectuses.filter(':checked').length;

                console.log(countCheckedCheckboxes);

                var checkedValue = $("#step1 input:checkbox:checked").map(function(){
                    return $(this).val();
                }).get();
                console.log(checkedValue);

               setTimeout(function(){
                    utils.waitForElement('#submitForm').then(function(){

                        if ( countCheckedCheckboxes >= 2 ) {
                            $('#divprosMessage h2').text('Please select no more than 3 prospectuses');
                            $('span.prospectus').text( "prospectuses" ); 
                            
                            if (!plural) {
                                $('#submitForm').val($('#submitForm').val().replace('prospectus','prospectuses')); 
                                $('#postableCountry .int-grid3 label:eq(0)').html($('#postableCountry .int-grid3 label:eq(0)').html().replace('prospectus','prospectuses'));
                                $('.fe-email-input-message-copy').html($('.fe-email-input-message-copy').html().replace('is','get'));
                            plural = true;    
                            }
                        } else if ( countCheckedCheckboxes < 2 ) {
                            $('span.prospectus').text( "prospectus" ); 

                            if (plural == null || plural == true) {
                                $('#submitForm').val($('#submitForm').val().replace('prospectuses','prospectus'));
                                $('#postableCountry .int-grid3 label:eq(0)').html($('#postableCountry .int-grid3 label:eq(0)').html().replace('prospectuses','prospectus')); 
                                $('.fe-email-input-message-copy').html($('.fe-email-input-message-copy').html().replace('get','is'));
                            plural = false;    
                            }
                        }
                    });
                }, 500);
        });
  
  // Update Form CTA if checkbox download only are ticked

        var postableCountry =  $('#postableCountry');

        function updateFormCTAIfDownloadOnly() {

            if ( postableCountry.css('display') === 'none') {
                console.log('Download true');
                $("#submitForm").val("Email me my prospectus");
                $('.fe-submit-cta-message').remove();
                // Email input message
                $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that your selected <span class=\"prospectus\">prospectus<\/span> is sent to the right place");
            } else {
                console.log('Download false');
            }
        }


        $("#step1 input:checkbox").change(function() {
            if(this.checked) {
                console.log('checked');
                updateFormCTAIfDownloadOnly();   
            } else {
                console.log('unchecked');
            }
        });
  
  
   // Cookie after submit
   $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
            }
        };

        $("#submitForm").click(function(){
            var flag=false;
            var codes = "";

            $("#step1 input:checkbox:checked").each(function(){
                var value = $(this).val();
                var valueSplit = value.split(/#/ig);
                var code = "";

                if (valueSplit.length > 0) {
                    code = valueSplit[0];
                }

                if (code !== "") {
                    if (codes !== "") {
                        codes += ",";
                    }

                    if(!flag)
                    {
                        codes += code.toLowerCase();
            //            url=url+code;
                        flag=true; // To trace if first query string added
                    }
                    else
                    {
            //            url=url+"&choice="+code;
                        codes += code.toLowerCase();
                    }
                    console.log(codes);
                
                }

                $.cookie('prospectus_code', (codes), { expires : 1 });

            });
            
            

        
            
            if ($("input#radDeliveryMethodEmail").is(":checked")) {
                $.cookie("receive", "email", { expires : 1 });
            }
            else if ($("input#radDeliveryMethodPost").is(":checked")) {
                $.cookie("receive", "post", { expires : 1 });
            }
        });
  
  
  
});

// Pass course code into query string





// Tab Landing

// Active tabs
$(document).ready(function() {
    
  // on load check hash tab active
    if(window.location.href.indexOf("postgraduate-tab") > -1) {
        $('#undergraduate-tab').removeClass('active');
        $('#postgraduate-tab').addClass('active');
     } else if (window.location.href.indexOf("undergraduate-tab") > -1) {
        $('#undergraduate-tab').addClass('active');
        $('#postgraduate-tab').removeClass('active');
     }
  
    setTimeout(function(){
        $('#ou-courses-tabs').each(function () {
            new OU.EEP.Tabs($(this), {
                contextSelector: $(this)
            });
        });
    }, 250);


     utils.waitForElement('#undergraduate-tab .int-toggleContent').then(function(){
        // Insert Heading
        $(generalHeading).prependTo('#undergraduate-tab .int-toggleContent');
        $(subjectHeading).prependTo('#undergraduate-tab .int-toggleContent .int-row:eq(3)');
        // Label info
        $(labelCourseInfoAccess).appendTo('#undergraduate-tab .int-toggleContent .int-row:eq(0) .int-form__label');
        $(labelCourseInfoUnder).appendTo('#undergraduate-tab .int-toggleContent .int-row:eq(1) .int-form__label');
        $(labelCourseInfoOpenDeg).appendTo('#undergraduate-tab .int-toggleContent .int-row:eq(2) .int-form__label');
    });

     utils.waitForElement('#postgraduate-tab .int-toggleContent').then(function(){
        // Insert Heading
        $(generalHeading).prependTo('#postgraduate-tab .int-toggleContent');
        $(subjectHeading).prependTo('#postgraduate-tab .int-toggleContent .int-row:eq(2)');
        // Label info
        $(labelCourseInfoPost).appendTo('#postgraduate-tab .int-toggleContent .int-row:eq(0) .int-form__label');
        $(labelCourseInfoOpenDegPostgrad).appendTo('#postgraduate-tab .int-toggleContent .int-row:eq(1) .int-form__label');
    });
});

utils.waitForElement('.int-toggler').then(function(){
    var newTabContent = '<div id=\"ou-courses-tabs\" class=\"int-tab\">\n\n  <div class=\"tabs\" role=\"tablist\">\n    <a href=\"#undergraduate-tab\" class=\"qual-tab-click active\" aria-controls=\"undergraduate-tab\" role=\"tab\" aria-selected=\"true\">Undergraduate<\/a>\n    <a href=\"#postgraduate-tab\" class=\"qual-tab-click\" aria-controls=\"postgraduate-tab\" role=\"tab\" aria-selected=\"false\">Postgraduate<\/a>\n  <\/div>\n\n  <div class=\"panels\">\n    <div id=\"undergraduate-tab\" class=\"active\" role=\"tabpanel\" aria-hidden=\"false\" aria-expanded=\"true\">\n        <span class=\"fe-undergraduate-tab-content\"><\/span>\n    <\/div>\n\n    <div id=\"postgraduate-tab\" role=\"tabpanel\" aria-hidden=\"true\" aria-expanded=\"false\" class=\"\">\n        <span class=\"fe-postgraduate-tab-content\"><\/span>\n    <\/div>\n  <\/div>\n<\/div>\n';
    $(newTabContent).insertAfter("#divprosMessage");


    $("#ug-prospectuses").clone().detach().appendTo(".fe-undergraduate-tab-content");

    $("#pg-prospectuses").clone().detach().appendTo(".fe-postgraduate-tab-content");

    // Hide old content
    $( ".int-toggler" ).hide();

});

// Mail Checkjs

 $(document).ready(function() {

     /*! mailcheck v1.1.2 @licence MIT */
    var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift3Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){var g=f.domain,j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),1==j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift3Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift3Distance:function(a,b){if(null==a||0===a.length)return null==b||0===b.length?0:b.length;if(null==b||0===b.length)return a.length;for(var c=0,d=0,e=0,f=0,g=5;c+d<a.length&&c+e<b.length;){if(a.charAt(c+d)==b.charAt(c+e))f++;else{d=0,e=0;for(var h=0;g>h;h++){if(c+h<a.length&&a.charAt(c+h)==b.charAt(c)){d=h;break}if(c+h<b.length&&a.charAt(c)==b.charAt(c+h)){e=h;break}}}c++}return(a.length+b.length)/2-f},splitEmail:function(a){var b=a.trim().split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0==e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var c=1;c<e.length;c++)g+=e[c]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);

   // Insert div paceholder
   //$('<span id=\"fe-hint\"><\/span>').insertAfter('#email');
   $('#email').closest('.int-grid6').addClass('fe-email-wrap');
   $('<span id=\"fe-hint\"><\/span>').insertAfter('.fe-email-wrap .fe-placeholder');

   (function ($) {

        var $email = $('#email');
        var $hint = $("#fe-hint");

        $email.on('blur',function() {
        $hint.css('display', 'none').empty();

        
        $(this).mailcheck({
            suggested: function(element, suggestion) {
            if(!$hint.html()) {
                // First error - fill in/show entire hint element
                var suggestion = "Did you mean <span class='suggestion'>" + "<a href='#' class='domain'><span class='address'>" + suggestion.address + "</span>@" + suggestion.domain + "</a></span>?";
                                
                $hint.html(suggestion).fadeIn(150);
            } else {
                // Subsequent errors
                $(".address").html(suggestion.address);
                $(".domain").html(suggestion.domain);
            }
            }
        });
        });

        $hint.on('click', '.domain', function() {
        // On click, fill in the field with the suggestion and remove the hint
        $email.val($(".suggestion").text());
        $hint.fadeOut(200, function() {
            $(this).empty();
            setTimeout(function(){
                $(".fe-email-wrap .int-errorMessage").fadeOut('fast');
                $(".fe-email-wrap input").removeClass('is-error');
            }, 250);
        });
        return false;
        });

    })(jQuery);

 });


// Update form heading
utils.waitForElement('#step2 h2').then(function(){
    var formHeading = '<div class=\"int-row int-row--margin-bottom \">\n                    <div class=\"int-grid4\">\n                        <h2>Enter your details<\/h2>\n                    <\/div>\n                    <div class=\"int-grid5\">\n                        <p class=\"fe-field-required\" role=\"presentation\" aria-hidden=\"true\">Fields marked with * are mandatory<\/p>\n                    <\/div>\n                <\/div>';
    $( "#step2 h2:eq(0)" ).replaceWith(formHeading);
    $( "#step2 p:eq(1)" ).remove();
});

// Move form footprint copy
utils.waitForElement('#committed-uk').then(function(){
    $("#committed-uk").detach().appendTo("#postableCountry");
});

// Remove margin bottom container top form
utils.waitForElement('#postableCountry').then(function(){
  $("#postableCountry div").removeClass("int-row--margin-bottom");
  $("#step2 .int-row:eq(0)").removeClass("int-row--margin-bottom");
});


// Placeholder

utils.waitForElement('.int-form').then(function(){

    var inputGroup = $(".fe-placeholder"); 
    var inputTarget = $(".fe-placeholder input");
    var selectTarget = $(".fe-placeholder select");  

    // Wrap div around input field

    // Title
    $('#ddlTitle').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblTitle').detach().insertBefore('#ddlTitle').addClass('fe-sr-only');

    // Select Address
    $('#ddlSelectAddress').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblSelectAddress').detach().insertBefore('#ddlSelectAddress').addClass('fe-sr-only'); 

    // Forename
    $('#txtForename').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblForename').detach().insertBefore('#txtForename');

    // Surname
    $('#txtSurname').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblSurname').detach().insertBefore('#txtSurname');

    //Email
    $('#email').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblEmail').detach().insertBefore('#email');

    //Phone number
    $('#txtPhone').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('label.int-form__field-label[for=phoneNumberInput]').detach().insertBefore('#txtPhone');

    // Password
    $('#password').wrap('<div class="fe-password-placeholder fe-placeholder" />');
    $('#lblPassword').detach().insertBefore('#password');
    $('.fe-toggle-password').detach().appendTo('.fe-password-placeholder');

    // Date of Birth

    // Move label
    $('<div class=\"fe-date-birth-label int-row\"><div class=\"int-grid3\">&nbsp;<\/div><div class=\"int-grid6\">\n <span class="fe-birth-date-label"></span>     <\/div>\n<\/div>').insertBefore('#dobRow');

    $('#lblDateOfBirth').detach().appendTo('.fe-birth-date-label').removeClass('int-form__field-label--align-right');

    // Day
    $('#txtDayDateOfBirth').wrap('<div class="fe-txtdaydate-placeholder fe-placeholder" />');
    $('<label class=\"int-form__field-label\" id=\"lblDateOfBirthDay\" for=\"dob\">DD<\/label>').insertBefore('#txtDayDateOfBirth');

    // Month
    $('#txtMonthDateOfBirth').wrap('<div class="fe-txtmonthdate-placeholder fe-placeholder" />');
    $('<label class=\"int-form__field-label int-form__field-label--align-right\" id=\"lblDateOfBirthMonth\" for=\"dob\">MM<\/label>').insertBefore('#txtMonthDateOfBirth');

    // Year
    $('#txtYearDateOfBirth').wrap('<div class="fe-txtyeardate-placeholder fe-placeholder" />');
    $('<label class=\"int-form__field-label int-form__field-label--align-right\" id=\"lblDateOfBirthYear\" for=\"dob\">YYYY<\/label>').insertBefore('#txtYearDateOfBirth');
    

    // Address
    $('#txtAddressLine1').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblAddressLine1').detach().insertBefore('#txtAddressLine1');
  
    // Address 2
    $('#txtAddressLine2').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblAddressLine2').detach().insertBefore('#txtAddressLine2').removeClass('int-hide');
    $("#postOptions .int-row:nth-child(4) .int-grid3").addClass('fe-address-grid');

    // Town
    $('#txtTown').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#town').detach().insertBefore('#txtTown');

    // County
    $('#txtCounty').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#county').detach().insertBefore('#txtCounty');

    // Postcode
    $('#txtLookUpPostCode').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#postcode').detach().insertBefore('#txtLookUpPostCode');

    // Lookup
    $('#txtPostcode').wrap('<div class="fe-txtForename-placeholder fe-placeholder" />');
    $('#lblPostcode').detach().insertBefore('#txtPostcode').text('Postcode (UK only)');

    $(window).on("resize", function(e) {
        if ( $(window).width() <= 800) {
          $("#lblPostcode").text("Postcode");
        } else {
            $("#lblPostcode").text("Postcode (UK only)");
        }
    }).resize();
    
    // Input
    // Auto fill
  
  	$(".fe-placeholder input").each(function() {
        if($(this).val() !=='') {
            console.log('as value');
            $(this).parent(inputGroup).addClass("is-focused");
        } else {
            // Do nothing
        }
    });
    
  
    
  
    $('.fe-placeholder input').bind("change keyup",function(){
        $(this).parent(inputGroup).addClass("is-focused");
    });
  
    $('.fe-placeholder input').focus(function() {
        $(this).parent(inputGroup).addClass("is-focused");
    });
    
    $('.fe-placeholder input').blur(function() {
        $(this).parent(inputGroup).addClass("is-complete");
    });

    $('.fe-placeholder input').blur(function(){
        inputTarget = $(this).val();
        if(inputTarget === '') {
            //$(this).parent(inputGroup).addClass("is-empty");
            $(this).parent(inputGroup).removeClass("is-focused");
            $(this).parent(inputGroup).removeClass("is-complete");
        } else {
            // Do nothing
        }
    });

    // Select
    
     // Change select title
    $('.fe-placeholder #ddlTitle option:first').html('Select Title*');
    $('.fe-placeholder select').change(function(){
        $(this).addClass("fe-selected");
    });

    // Change select Address
    utils.waitForElement('#btnFindAddress').then(function(){
        $("#btnFindAddress").click(function() {
            setTimeout(function(){
                $('.fe-placeholder #ddlSelectAddress option:first').html('Select Address');
            }, 500);
        });
    });

     // Find address select input autofill

    $('#ddlSelectAddress').on('change', function(e) {
        var inputGroup = $(".fe-placeholder");
        
        setTimeout(function(){
            $(".fe-placeholder input").each(function() {
                if($(this).val() !=='') {
                    console.log('as value');
                    $(this).parent(inputGroup).addClass("is-focused");
                } else {
                    // Do nothing
                }
            });
        }, 50);

    });
    
  
    // Auto fill
    $(".fe-placeholder select").each(function() {
        if($(this).val() !=='') {
            console.log('as value');
            $(this).parent(inputGroup).addClass("is-focused");
        } else {
            // Do nothing
        }
    });
  
    $('.fe-placeholder select').bind("change keyup",function(){
        $(this).parent(inputGroup).addClass("is-focused");
    });

    $('.fe-placeholder select').focus(function() {
        $(this).parent(inputGroup).addClass("is-focused");
    });
    
    $('.fe-placeholder select').blur(function() {
        $(this).parent(inputGroup).addClass("is-complete");
    });

    $('.fe-placeholder select').blur(function(){
        selectTarget = $(this).val();
        if(selectTarget === '') {
            $(this).parent(inputGroup).removeClass("is-focused");
            $(this).parent(inputGroup).removeClass("is-complete");
        } else {
            // Do nothing
        }
    });

    // Placeholder wrap
    //$('.fe-placeholder').parent().addClass('fe-placeholder-grid');
    $('.fe-placeholder').closest('.int-grid6').addClass('fe-placeholder-grid');

    // Hide Placeholders
    $('.fe-placeholder input').attr('placeholder' ,'');

});

// Move Delivery Method Label
   utils.waitForElement('.int-form').then(function(){
    $('<div class=\"int-row\"><div class=\"int-grid3\">&nbsp;<\/div><div class=\"int-grid6\"><label for=\"radDeliveryMethod\" class=\"int-form__field-label\">How would you like to receive your prospectus?<span class=\"int-requiredAsterisk\" role=\"presentation\" aria-hidden=\"true\">*<\/span><\/label><\/div><\/div>').prependTo('#postableCountry fieldset');
    $('#postableCountry fieldset label.int-form__field-label--align-right').replaceWith( "&nbsp;");
    $("#postableCountry .int-row:eq(0) .int-grid3").addClass('fe-grid-hide');
    $("#postableCountry .int-row:eq(1) .int-grid3:eq(0)").addClass('fe-grid-hide');
});

// Trackings
utils.waitForElement('.listContainer').then(function(){
    var urlNoCatcode = ['catcode'];
    var urlUG2  = ['?catcode=usab'];
    var urlPG3  = ['?catcode=psab'];
    var amountSubProspectuses = $('#sub-prospectuses .listContainer').length;

    
    if(window.location.href.indexOf(urlNoCatcode) === -1) {
        console.log('Alert: urlNoCatcode!');
        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "Main_Generic_RQAP_Form"
            }
        });           

    } else if(window.location.href.indexOf(urlUG2) > -1) {
        console.log('Alert: urlUG2!');

            window["optimizely"].push({
                type: "user",
                attributes: {
                   RQAP_form: "UG_RQAP_Form"
                 }
            }); 
               
    } else if(window.location.href.indexOf(urlPG3) > -1) {
        console.log('Alert: urlUG3!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "PG_RQAP_Form"
            }
        }); 
          
    } else if(amountSubProspectuses === 1){
        console.log('Alert: url4!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "RQAP_Form_For_A_Specific_Course"
            }
        }); 

    } else if((amountSubProspectuses > 1 && amountSubProspectuses <= 12)) {
        console.log('Alert: url5!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "RQAP_Form_Showing_Limited_Multiple_Prospectuses"
            }
        }); 
          
    } else {

        // Do nothing
        
    }
});


// To Hide show password in IE
$( document ).ready(function() {
    var isIE = window.navigator.msPointerEnabled;
    if(isIE) {
        $( ".fe-toggle-password" ).hide();
    } else {
        // Do nothing
    }
});
}}, {"value": "<style>.fe28 .fe-postable-country {\n  margin-bottom: 0 !important; }\n  .fe28 .fe-postable-country .int-form__field-label {\n    padding: 0 !important; }\n  .fe28 .fe-postable-country #committed-uk .int-grid3 {\n    height: 0; }\n  @media (min-width: 768px) {\n    .fe28 .fe-postable-country #committed-uk .int-grid6 {\n      margin-left: 26%; } }\n  .fe28 .fe-postable-country fieldset {\n    margin-bottom: 0 !important;\n    padding: 0 !important; }\n\n.fe28 .fe-label-course-info {\n  color: #424242;\n  font-size: 0.85em;\n  display: block; }\n\n.fe28 .fe-submit-cta-message {\n  color: #424242;\n  display: block;\n  font-size: 1.35em;\n  line-height: 1.3; }\n\n.fe28 .int-form__field:focus, .fe28 .int-form__select:focus, .fe28 .int-form__select-radio:focus, .fe28 .int-form__textarea:focus {\n  border-color: #0e56a7 !important; }\n\n.fe28 .int-form__field.is-error, .fe28 .int-form__select.is-error, .fe28 .int-form__select-radio.is-error, .fe28 .int-form__textarea.is-error {\n  border-color: #e42448 !important; }\n\n.fe28 .int-form__select:focus {\n  background-position: right 0 !important; }\n\n.fe28 .fe-email-message {\n  clear: both; }\n  .fe28 .fe-email-message:before, .fe28 .fe-email-message:after {\n    display: table;\n    line-height: 0;\n    content: \"\";\n    clear: both; }\n\n.fe28 .fe-find-address {\n  width: 60%;\n  float: left;\n  display: block;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe28 .findAddress-button {\n  float: left;\n  display: block;\n  width: 38%;\n  margin-left: 2%;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe28 #divFindAddressError {\n  clear: both !important; }\n\n.fe28 .fe-toggle-password {\n  right: 20px;\n  top: 0;\n  float: right;\n  padding: 8px 0;\n  margin-top: -45px;\n  position: relative;\n  z-index: 184; }\n  .fe28 .fe-toggle-password button {\n    background: none;\n    border: none;\n    color: #0b55a8;\n    margin: 0;\n    padding: 0;\n    font-weight: bold;\n    color: #0e56a7;\n    text-decoration: underline;\n    font-size: 1.35em;\n    line-height: 1.5; }\n\n.fe28 #ou-courses-tabs {\n  margin-bottom: 2em; }\n\n.fe28 #fe-hint {\n  margin-bottom: 0.67em;\n  font-weight: bold;\n  display: inline-block; }\n  .fe28 #fe-hint a {\n    color: #0e56a7; }\n    .fe28 #fe-hint a:hover, .fe28 #fe-hint a:focus {\n      color: #0e56a7; }\n\n@media (min-width: 768px) {\n  .fe28 .fe-field-required {\n    margin-top: 2.05em;\n    text-align: right; } }\n\n.fe28--2 .fe-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.fe28--2 .fe-grid-hide {\n  display: none; }\n  @media (min-width: 768px) {\n    .fe28--2 .fe-grid-hide {\n      display: inline-block; } }\n\n.fe28--2 .fe-address-grid{\n        display: none;\n    }\n\n.fe28--2 .fe-toggle-password {\n  top: -10px !important; }\n\n.fe28--2 .findAddress-button {\n  padding: 1.25em .8em !important;\n  margin: 0.35em 0 0.35em 0.25em !important; }\n\n@media (min-width: 768px) {\n  .fe28--2 .int-form .fe-placeholder-grid {\n    margin-left: 25.5%; } }\n\n.fe28--2 .int-form .fe-placeholder {\n  position: relative;\n  margin: 0.35em 0; }\n   .fe28--2 .int-form .fe-placeholder #ddlTitle, .fe28--2 .int-form .fe-placeholder #ddlSelectAddress {\n    color: #757575;\n    font-weight: bold; }\n  .fe28--2 .int-form .fe-placeholder .fe-selected {\n    font-weight: normal !important; }\n    .fe28--2 .int-form .fe-placeholder .fe-selected option {\n      font-weight: normal !important; }\n  .fe28--2 .int-form .fe-placeholder label {\n    display: block;\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    transition: 0.2s ease all;\n    z-index: 1;\n    pointer-events: none;\n    color: #757575;\n    font-weight: bold; z-index: 184;}\n  .fe28--2 .int-form .fe-placeholder input {\n    width: 100%;\n    z-index: 180;\n    height: 3.434em !important; }\n  .fe28--2 .int-form .fe-placeholder input:focus {\n    outline: none; }\n  .fe28--2 .int-form .fe-placeholder.is-focused #ddlTitle {\n    color: #414042 !important; }\n  .fe28--2 .int-form .fe-placeholder.is-focused label {\n    background: #fff;\n    padding: 0 5px;\n    top: -15px;\n    color: #414042; }\n  .fe28--2 .int-form .fe-placeholder.is-complete #ddlTitle {\n    color: #414042 !important; }\n  .fe28--2 .int-form .fe-placeholder.is-complete label {\n    background: #fff;\n    padding: 0 5px;\n    top: -15px;\n    color: #414042;\n    }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "77ec6099c8b5404cb32de3f0983a52ed"}]}, {"viewId": "10172483568", "changes": [{"dependencies": [], "type": "custom_code", "id": "f1f542ed5dff4c118c0a202c06df9936", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow
utils.waitForElement('head').then(function(){
	$('head').append('<meta name=\"robots\" content=\"noindex\">'); 
});

// Thank you page Add intro text 
$(document).ready(function() { 
  
  // Cookie after submit
   $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
            }
        };
  
  
  $('<h3>Download prospectus now<\/h3><ul id=\"downloadList\"><\/ul>').insertBefore('.int-grid8 h3:first');

function updateContent() {
    
    var courses = [
        {'amc19u':'Access Modules Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-access-to-success-route-england.pdf'},
        {'cdd19':'Undergraduate Courses Prospectus 2018/19 (Undergraduate);http://www.open.ac.uk/guides/guide-to-ou-undergraduate.pdf'},
        {'ope19u':'Open Qualifications Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-open-quals.pdf'},
        {'ope19':'Open Qualifications Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-open-quals.pdf'},
        {'ahu19u':'Arts and Humanities Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-arts-and-humanities-prospectus.pdf'},
        {'bsp19u':'Business and Management Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-business-school-prospectus.pdf'},
        {'cic19u':'Computing and IT Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-computing-and-ict-prospectus.pdf'},
        {'cye19u':'Education, Childhood, Youth and Sport Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-education-prospectus.pdf'},
        {'ent19u':'Engineering, Design and Technology Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-engineering-technology-and-design-prospectus.pdf'},
        {'edi19u':'Environment and Development Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-environment-development-and-international-studies-prospectus.pdf'},
        {'shw19u':'Health and Social Care Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus.pdf'},
        {'hws19u':'Health and Social Care Prospectus (Scotland) 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'tml19u':'Languages and Applied Linguistics Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-languages-prospectus.pdf'},
        {'law19u':'Law Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-law-prospectus.pdf'},
        {'mst19u':'Mathematics and Statistics Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-mathematics-and-statistics-prospectus.pdf'},
        {'nah19u':'Nursing and Healthcare Prospectus 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-ug-prospectus.pdf'},
        {'psy19u':'Psychology and Counselling Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-psychology-prospectus.pdf'},
        {'sci19u':'Science Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-science-prospectus.pdf'},
        {'ssc19u':'Social Sciences Prospectus 2018/2019 (Undergraduate);http://www.open.ac.uk/guides/ou-social-sciences-prospectus.pdf'},
        {'swpe19':'Social Work in England and Scotland 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'},
        {'pgb19':'Postgraduate Courses Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/guide-to-ou-postgraduate-study.pdf'},
        {'ope19p':'Open Qualifications Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-open-quals.pdf'},
        {'ahu19p':'Arts and Humanities Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-arts-and-humanities-prospectus.pdf'},
        {'bsp19p':'Business and Management Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-business-school-prospectus.pdf'},
        {'cic19p':'Computing and IT Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-computing-and-ict-prospectus.pdf'},
        {'cye19p':'Education, Childhood, Youth and Sport Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-education-prospectus.pdf'},
        {'ent19p':'Engineering, Design and Technology Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-engineering-technology-and-design-prospectus.pdf'},
        {'edi19p':'Environment and Development Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-environment-development-and-international-studies-prospectus.pdf'},
        {'shw19p':'Health and Social Care Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus.pdf'},
        {'hws19p':'Health and Social Care Prospectus (Scotland) 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'tml19p':'Languages and Applied Linguistics Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-languages-prospectus.pdf'},
        {'law19p':'Law Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-law-prospectus.pdf'},
        {'mba19':'MBA (Master of Business Administration) Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/guide-to-ou-mba.pdf'},
        {'mst19p':'Mathematics and Statistics Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-mathematics-and-statistics-prospectus.pdf'},
        {'nah19p':'Nursing and Healthcare Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-pg-prospectus.pdf'},
        {'psy19p':'Psychology and Counselling Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-psychology-prospectus.pdf'},
        {'sci19p':'Science Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-science-prospectus.pdf'},
        {'ssc19p':'Social Sciences Prospectus 2018/2019 (Postgraduate);http://www.open.ac.uk/guides/ou-social-sciences-prospectus.pdf'},
        {'swpo19':'Social Work in England and Scotland Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'},
        {'hws18u':'Health and Social Care Prospectus (Scotland) 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'nah18u':'Nursing and Healthcare Prospectus 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-ug-prospectus.pdf'},
        {'swpe18':'Social Work in England and Scotland 2017/2018 (Undergraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'},
        {'hws18p':'Health and Social Care Prospectus (Scotland) 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-health-and-social-care-prospectus-scotland.pdf'},
        {'mba18':'MBA (Master of Business Administration) Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/guide-to-ou-mba.pdf'},
        {'nah18p':'Nursing and Healthcare Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-nursing-and-healthcare-pg-prospectus.pdf'},
        {'swpp18':'Social Work in England and Scotland Prospectus 2017/2018 (Postgraduate);http://www.open.ac.uk/guides/ou-socialwork-england-scotland-prospectus.pdf'}
    ];
    
    // Check country code
    var codesCourses = $.cookie('prospectus_code');
    var codeSplit = codesCourses.split(/,/ig);
    console.log(codeSplit);


    for (var tt=1; tt<= codeSplit.length;tt++) {
        var key = codeSplit[tt-1];
        console.log(key);

        var result;
        var courseInfoFunction = function(items, key) {
            items.filter(function(item) {
                
                if (item[key]) {
                    result = item[key];
                }
                });
                return result;
         };

         var courseInfo = courseInfoFunction(courses, key);
        console.log(courseInfo);

        
        if(courseInfo)
        {

                var course = courseInfo.split(/;/ig);
                var titleProspectus = (course.length > 0 ? course[0] : null);
                var urlProspectus = (course.length > 1 ? course[1] : null);
                
                $('#downloadList').append('<li><a href=\"' + urlProspectus + '\" target=\"_blank\" title=\"' + titleProspectus + '\">' + titleProspectus + '<\/a><\/li>');
                
        }

    
    }

}

updateContent();
  
  
  
  
  
  
  
    var cookieReceive = window.$.cookie('receive'); //set cookie var
    if ( cookieReceive == 'post') { //if equals this val
        //alert("post");
        $('h2').text('Your prospectuses have been posted to you; it’s a small step but it could be the start of something huge');
        $('.int-wrap p:eq(0)').html('Your prospectus will be dispatched within 2 working days.<br /> We’ve also emailed them to you for convenience. Please check your spam folder.');
    }
    else if ( cookieReceive == 'email') {
        //alert("email");
        $('h2').text('Your prospectuses have been emailed to you; it’s a small step but it could be the start of something huge');
        $('.int-wrap p:eq(0)').html('Your prospectus should be in your inbox shortly.<br /> Please check your spam folder.');
    }
});
}}]}], "name": "Variation #2: improved copy, fewer inputs & material design"}, {"id": "12387362687", "actions": [{"viewId": "10140001547", "changes": [{"dependencies": [], "type": "custom_code", "id": "8602bdf373d442bc8d9df249fa07d7c9", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow 
utils.waitForElement('head').then(function(){
	$('head').append('<meta name=\"robots\" content=\"noindex\">'); 
});

// Add name space
utils.waitForElement('body').then(function(){
	$('body').addClass('fe28');
});

// add proespectus class and hide Welsh
$(function() {
    setTimeout(function(){
        function addProspectusesClass() {
            $('#ug-prospectuses').children('div.int-row:contains("Undergraduate Courses Prospectus")').addClass('ug-prospectus'); 
            $('#ug-prospectuses').children('div.int-row:contains("Open Qualifications Prospectus")').addClass('open-prospectus'); 
            $('#ug-prospectuses').children('div.int-row:contains("Access Modules Prospectus")').addClass('access-prospectus'); 
            $('#ug-prospectuses').children('div.int-row:contains("(Welsh)")').addClass('hidden'); 
            $('#pg-prospectuses').children('div.int-row:contains("Postgraduate Courses Prospectus")').addClass('pg-prospectus'); 
            $('#pg-prospectuses').children('div.int-row:contains("(Welsh)")').addClass('hidden');
            $('#pg-prospectuses').children('div.int-row:contains("Open Qualifications Prospectus")').addClass('open-prospectus'); 
            
            //?catcode pages
            $('#sub-prospectuses').children('div.listContainer:contains("(Welsh)")').addClass('hidden'); 
            $('#sub-prospectuses').children('div.listContainer:contains("Undergraduate Courses Prospectus")').addClass('ug-prospectus'); 
            $('#sub-prospectuses').children('div.listContainer:contains("Open Qualifications Prospectus")').addClass('open-prospectus'); 
            $('#sub-prospectuses').children('div.listContainer:contains("Access Modules Prospectus")').addClass('access-prospectus'); 
            $('#sub-prospectuses').children('div.listContainer:contains("Postgraduate Courses Prospectus")').addClass('pg-prospectus'); 
        }
    
        addProspectusesClass();
     }, 300);
});

var generalHeading = '<h2>General prospectuses<\/h2>';
var subjectHeading = '<h2>Subject area prospectuses<\/h2>';
var generalHeadingSingular = '<h2>General prospectus<\/h2>';
var subjectHeadingSingular = '<h2>Subject area prospectus<\/h2>';
var labelCourseInfoAccess = '<span class=\"fe-label-course-info\">Modules designed to help learners with little or no experience of studying to build confidence and develop study skills.<\/span>';
var labelCourseInfoUnder = '<span class=\"fe-label-course-info\">Overview of the subjects and qualifications we offer at undergraduate level, along with answers to your questions about studying with the OU.<\/span>';
var labelCourseInfoPost = '<span class=\"fe-label-course-info\">Overview of the subjects and qualifications we offer at postgraduate level, along with answers to your questions about studying with the OU.<\/span>';
var labelCourseInfoOpenDeg = '<span class=\"fe-label-course-info\">Our Open qualifications enable you to tailor your study to suit your needs and interests. They give you huge freedom of choice across the OU\'s full range of subject areas which you can study in any combination.<\/span>';
var labelCourseInfoOpenDegPostgrad = '<span class=\"fe-label-course-info\">With our new MA or MSc Open, you can create a personalised masters qualification across a range of disciplines.<\/span>';
var viaPostCtaMessage = '<p class=\"fe-submit-cta-message\">Your selected <span class=\"prospectus\">prospectus<\/span> will be dispatched by post within 2 working days.<\/p>';
var formHeading = '<h2>Enter your details<\/h2>';
var inputEmailMessage = '<div class=\"fe-email-message\">\n    <div class=\"int-grid3\">&nbsp;<\/div>\n    <div class=\"int-grid6\">\n        <p class=\"fe-email-input-message\"><span class=\"fe-email-input-message-copy\"><\/span><\/p>\n    <\/div>\n<\/div>';
var showHidePassword ='<div class=\"fe-toggle-password\"><button type=\"button\" id=\"btnFEToggle\" class=\"fe-toggle\" role=\"button\" tabIndex=\"0\">show<\/button><\/div>';

// Set info labels
$(function() {
    setTimeout(function(){
        $(subjectHeading).insertAfter('.open-prospectus');
        // Label info
        $(labelCourseInfoAccess).appendTo('.access-prospectus .int-form__label');
        $(labelCourseInfoUnder).appendTo('.ug-prospectus .int-form__label');
        $(labelCourseInfoOpenDeg).appendTo('.open-prospectus .int-form__label');
        $(labelCourseInfoPost).appendTo('.pg-prospectus .int-form__label');
    }, 500);
});

// Hide form fields


$(document).ready(function() {
  setTimeout(function(){
            if ($(".ou-role-signin").hasClass("ou-header-remove")) {
                console.log('yes signin');
              $( "#step2 .int-row:nth-child(9)" ).hide();
            }
            else{
                console.log('no signin');
                $( "#step2 .int-row:nth-child(9), #step2 .int-row:nth-child(11), #step2 .int-row:nth-child(12), #step2 #HowLongStudy, #online-account .int-row:eq(1), #postOptions .int-row:eq(6)" ).hide();
              
              
            }
    },500);
});

// Change Intro Copy
utils.waitForElement('#step1 .int-promo').then(function(){
    $('#step1 .int-promo:eq(0) p:eq(0)').html($('#step1 .int-promo:eq(0) p:eq(0)').html().replace('OU','Open University'));
    $('#step1 .int-promo:eq(0) p strong').html($('#step1 .int-promo:eq(0) p strong').html().replace('OU','Open University'));
    $('#step1 .int-promo:eq(0) h3').html($('#step1 .int-promo:eq(0) h3').html().replace('OU','Open University'));
});

utils.waitForElement('.int-promo .selectedCountryName p').then(function(){
    $('.int-promo .selectedCountryName p').html(' You are looking at prospectuses in <span class=\"prospectusCountry\">England<\/span>. To change, please use the country selector above.');

    // Get current country
    var currentCountry = $("#currentCountry strong").text();
  
    $('.prospectusCountry').text(currentCountry);

});


// Change Courses Heading

setTimeout(function(){
utils.waitForElement('.listContainer').then(function(){

        if(window.location.href.indexOf("usab") > -1) {

            console.log('usab true');
                // Heading 
                $(generalHeading).prependTo('.listContainer:eq(0)');

        } else if(window.location.href.indexOf("psab") > -1) {

            console.log('psab true');
            // Heading
            $(generalHeading).prependTo('.listContainer:eq(0)');
        } else {
            console.log('No code true');
        }

});
}, 500);


// Change CTA text and label message radio buttons
utils.waitForElement('#postableCountry input').then(function(){

    $(inputEmailMessage).insertAfter('#dobRow');

    var checkboxesPostDelivery = $('#postableCountry input#radDeliveryMethodPost');
    var checkboxesEmailDelivery = $('#postableCountry input#radDeliveryMethodEmail');
    var checkboxesProspectuses = $('#step1 input[type="checkbox"]');

    function PostDelivery() {
        var countCheckedPostCheckboxes = checkboxesPostDelivery.filter(':checked').length;

        console.log(countCheckedPostCheckboxes);

            if ( countCheckedPostCheckboxes = 1 ) {
                console.log('Post true');
                $("#submitForm").val("Post me my prospectus");
                // Insert CTA message
                $(viaPostCtaMessage).insertAfter('#submitForm');
                // Email input message
                $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that we can also email you a copy of your selected <span class=\"prospectus\">prospectuses<\/span>.");
            } else if ( countCheckedPostCheckboxes = 0 ) {
                console.log('Post false');
            } 

    }

    function emailDelivery() {
        var countCheckedEmailCheckboxes = checkboxesEmailDelivery.filter(':checked').length;

        console.log(countCheckedEmailCheckboxes);

        if ( countCheckedEmailCheckboxes = 1 ) {
            console.log('Email true');
            //console.log('email true');
            $("#submitForm").val("Email me my prospectus");
            $('.fe-submit-cta-message').remove();
            // Email input message
            $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that your selected <span class=\"prospectus\">prospectus<\/span> is sent to the right place");
        } else if ( countCheckedEmailCheckboxes = 0 ) {
            console.log('Email false');
        } 
    }
    
    emailDelivery();


    // Check if Post is true
    checkboxesPostDelivery.change(function(){
        PostDelivery();
    });

    // Check if Email is true
    checkboxesEmailDelivery.change(function(){
        emailDelivery();  
    });

});


// Form

utils.waitForElement('#step2').then(function(){

    // Form Heading
    $(formHeading).prependTo('#step2');
     
     // Add class to how send prospectus
    $('#postableCountry').parent().addClass('fe-postable-country');

    // Insert how send prospectus at the begining of the form
    utils.waitForElement('.fe-postable-country').then(function(){
        $(".fe-postable-country").insertBefore("#titleRow");
    });
    // Remove placeholder when typing
    $(document).on('keyup','.is-error',function() {
        $(this).next('.int-errorMessage').hide('slow');
    });
    // Duplicate email field into email confirm
    $("#email").keyup(function(){
        $("#txtEmailConfirm").val(this.value);
    });
    // Duplicate password field into password confirm
    $("#password").keyup(function(){
        $("#password_confirm").val(this.value);
    }); 
});

// Open Privacy link to a new tab
utils.waitForElement('#radDeliveryMethodPost').then(function(){
    var linksPrivacy = $('a[href="http://www.open.ac.uk/privacy/"]');
    $(linksPrivacy).attr('target', '_blank');
});

// Find address’ CTA button has been moved alongside the postcode
utils.waitForElement('.findAddress-postcode').then(function(){
    $('.findAddress-postcode').parent().addClass('fe-find-address');
    $(window).on("resize", function(e) {
    if ( $(window).width() <= 800) {
      $("#btnFindAddress").text("Find");
    } else {
        $("#btnFindAddress").text("Find address");
    }
}).resize();
}); 

// copy next to the create an Open University account tick box
utils.waitForElement('#createAccountCheckboxDescription').then(function(){
    $('#createAccountCheckboxDescription').text('Save time when you contact us by creating a free Open University online account');
});


// Count checkbox to change the heading

utils.waitForElement('#step1 input[type="checkbox"]').then(function(){

    var checkboxesProspectuses = $('#step1 input[type="checkbox"]');
    var plural = null;

     
        checkboxesProspectuses.change(function(){

                var countCheckedCheckboxes = checkboxesProspectuses.filter(':checked').length;

                console.log(countCheckedCheckboxes);

                var checkedValue = $("#step1 input:checkbox:checked").map(function(){
                    return $(this).val();
                }).get();
                console.log(checkedValue);

                 setTimeout(function(){
                    utils.waitForElement('#submitForm').then(function(){

                        if ( countCheckedCheckboxes >= 2 ) {
                            $('#divprosMessage h2').text('Please select no more than 3 prospectuses');
                            $('span.prospectus').text( "prospectuses" ); 
                            
                            if (!plural) {
                                $('#submitForm').val($('#submitForm').val().replace('prospectus','prospectuses')); 
                                $('#postableCountry .int-grid3 label:eq(0)').html($('#postableCountry .int-grid3 label:eq(0)').html().replace('prospectus','prospectuses')); 
                                $('.fe-email-input-message-copy').html($('.fe-email-input-message-copy').html().replace('is','get')); 
                            plural = true;    
                            }
                        } else if ( countCheckedCheckboxes < 2 ) {
                            $('span.prospectus').text( "prospectus" ); 

                            if (plural == null || plural == true) {
                                $('#submitForm').val($('#submitForm').val().replace('prospectuses','prospectus'));
                                $('#postableCountry .int-grid3 label:eq(0)').html($('#postableCountry .int-grid3 label:eq(0)').html().replace('prospectuses','prospectus'));    
                                $('.fe-email-input-message-copy').html($('.fe-email-input-message-copy').html().replace('get','is'));
                            plural = false;    
                            }
                        }
                    });
                }, 500);
        });
  
  // Update Form CTA if checkbox download only are ticked

        var postableCountry =  $('#postableCountry');

        function updateFormCTAIfDownloadOnly() {

            if ( postableCountry.css('display') === 'none') {
                console.log('Download true');
                $("#submitForm").val("Email me my prospectus");
                $('.fe-submit-cta-message').remove();
                // Email input message
                $('.fe-email-input-message-copy').html("Please enter your email address <strong>carefully</strong> so that your selected <span class=\"prospectus\">prospectuses<\/span> is sent to the right place");
            } else {
                console.log('Download false');
            }
        }


        $("#step1 input:checkbox").change(function() {
            if(this.checked) {
                console.log('checked');
                updateFormCTAIfDownloadOnly();   
            } else {
                console.log('unchecked');
            }
        });
  
  
   // Cookie after submit
   $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
            }
        };

        $("#submitForm").click(function(){
            var flag=false;
            var codes = "";

            $("#step1 input:checkbox:checked").each(function(){
                var value = $(this).val();
                var valueSplit = value.split(/#/ig);
                var code = "";

                if (valueSplit.length > 0) {
                    code = valueSplit[0];
                }

                if (code !== "") {
                    if (codes !== "") {
                        codes += ",";
                    }

                    if(!flag)
                    {
                        codes += code.toLowerCase();
            //            url=url+code;
                        flag=true; // To trace if first query string added
                    }
                    else
                    {
            //            url=url+"&choice="+code;
                        codes += code.toLowerCase();
                    }
                    console.log(codes);
                
                }

                $.cookie('prospectus_code', (codes), { expires : 1 });

            });
            
            

        
            
            if ($("input#radDeliveryMethodEmail").is(":checked")) {
                $.cookie("receive", "email", { expires : 1 });
            }
            else if ($("input#radDeliveryMethodPost").is(":checked")) {
                $.cookie("receive", "post", { expires : 1 });
            }
        });
  
  
  
});

// Pass course code into query string

// Tab Landing

// Active tabs
$(document).ready(function() {
  
     utils.waitForElement('#ug-prospectuses').then(function(){
        // Insert Heading
        $(generalHeading).prependTo('#ug-prospectuses');
    });

     utils.waitForElement('#pg-prospectuses').then(function(){
        // Insert Heading
        $(generalHeading).prependTo('#pg-prospectuses');
    });
});

// Mail Checkjs

 $(document).ready(function() {

 /*! mailcheck v1.1.2 @licence MIT */
    var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift3Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){var g=f.domain,j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),1==j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift3Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift3Distance:function(a,b){if(null==a||0===a.length)return null==b||0===b.length?0:b.length;if(null==b||0===b.length)return a.length;for(var c=0,d=0,e=0,f=0,g=5;c+d<a.length&&c+e<b.length;){if(a.charAt(c+d)==b.charAt(c+e))f++;else{d=0,e=0;for(var h=0;g>h;h++){if(c+h<a.length&&a.charAt(c+h)==b.charAt(c)){d=h;break}if(c+h<b.length&&a.charAt(c)==b.charAt(c+h)){e=h;break}}}c++}return(a.length+b.length)/2-f},splitEmail:function(a){var b=a.trim().split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0==e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var c=1;c<e.length;c++)g+=e[c]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);


   // Insert div paceholder
   $('#email').closest('.int-grid6').addClass('fe-email-wrap');
   $( ".fe-email-wrap" ).wrapInner( "<div class='fe-placeholder'></div>" );
   $('<span id=\"fe-hint\"><\/span>').insertAfter('.fe-email-wrap .fe-placeholder');

   (function ($) {

        var $email = $('#email');
        var $hint = $("#fe-hint");

        $email.on('blur',function() {
        $hint.css('display', 'none').empty();

        
        $(this).mailcheck({
            suggested: function(element, suggestion) {
            if(!$hint.html()) {
                // First error - fill in/show entire hint element
                var suggestion = "Did you mean <span class='suggestion'>" + "<a href='#' class='domain'><span class='address'>" + suggestion.address + "</span>@" + suggestion.domain + "</a></span>?";
                                
                $hint.html(suggestion).fadeIn(150);
            } else {
                // Subsequent errors
                $(".address").html(suggestion.address);
                $(".domain").html(suggestion.domain);
            }
            }
        });
        });

        $hint.on('click', '.domain', function() {
        // On click, fill in the field with the suggestion and remove the hint
        $email.val($(".suggestion").text());
        $hint.fadeOut(200, function() {
            $(this).empty();
            setTimeout(function(){
                $(".fe-email-wrap .int-errorMessage").fadeOut('fast');
                $(".fe-email-wrap input").removeClass('is-error');
            }, 250);
        });
        return false;
        });

    })(jQuery);

 });


// Update form heading
utils.waitForElement('#step2 h2').then(function(){
    var formHeading = '<div class=\"int-row int-row--margin-bottom \">\n                    <div class=\"int-grid4\">\n                        <h2>Enter your details<\/h2>\n                    <\/div>\n                    <div class=\"int-grid5\">\n                        <p class=\"fe-field-required\" role=\"presentation\" aria-hidden=\"true\">Fields marked with * are mandatory<\/p>\n                    <\/div>\n                <\/div>';
    $( "#step2 h2:eq(0)" ).replaceWith(formHeading);
    $( "#step2 p:eq(1)" ).remove();
});

// Move form footprint copy
utils.waitForElement('#committed-uk').then(function(){
    $("#committed-uk").detach().appendTo("#postableCountry");
});

// Remove margin bottom container top form
utils.waitForElement('#postableCountry').then(function(){
    $("#postableCountry div").removeClass("int-row--margin-bottom");
    //$("#step2 .int-row:eq(0)").removeClass("int-row--margin-bottom");
});

// Trackings
utils.waitForElement('.listContainer').then(function(){
    var urlNoCatcode = ['catcode'];
    var urlUG2  = ['?catcode=usab'];
    var urlPG3  = ['?catcode=psab'];
    var amountSubProspectuses = $('#sub-prospectuses .listContainer').length;

    
    if(window.location.href.indexOf(urlNoCatcode) === -1) {
        console.log('Alert: urlNoCatcode!');
        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "Main_Generic_RQAP_Form"
            }
        });           

    } else if(window.location.href.indexOf(urlUG2) > -1) {
        console.log('Alert: urlUG2!');

            window["optimizely"].push({
                type: "user",
                attributes: {
                   RQAP_form: "UG_RQAP_Form"
                 }
            }); 
               
    } else if(window.location.href.indexOf(urlPG3) > -1) {
        console.log('Alert: urlUG3!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "PG_RQAP_Form"
            }
        }); 
          
    } else if(amountSubProspectuses === 1){
        console.log('Alert: url4!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "RQAP_Form_For_A_Specific_Course"
            }
        }); 

    } else if((amountSubProspectuses > 1 && amountSubProspectuses <= 12)) {
        console.log('Alert: url5!');

        window["optimizely"].push({
            type: "user",
            attributes: {
              RQAP_form: "RQAP_Form_Showing_Limited_Multiple_Prospectuses"
            }
        }); 
          
    } else {

        // Do nothing
        
    }
});

// To Hide show password in IE
$( document ).ready(function() {
    var isIE = window.navigator.msPointerEnabled;
    if(isIE) {
        $( ".fe-toggle-password" ).hide();
    } else {
        // Do nothing
    }
});


// Welsh code

utils.waitForElement('body').then(function () {

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }
    var urlNOCODE  = ['https://www.open.ac.uk/request/prospectus'];
    var urlUSAB  = ['https://www.open.ac.uk/request/prospectus?catcode=usab'];
    var urlPSAB  = ['https://www.open.ac.uk/request/prospectus?catcode=psab'];

    var welshAccordion = '<div id="fe-welsh-list" class="int-toggler" style="margin-bottom: 5px;">'+
    '    <h3 class="int-toggleTrigger"><a href="#"><b class="int-icon-btn closed"><i class="int-icon int-icon-chevron-right"></i></b><b'+
    '                class="int-icon-btn open"><i class="int-icon int-icon-chevron-down"></i></b><span>'+
    '                Cymraeg'+
    '            </span></a>'+
    '    </h3>'+
    '    <div  class="int-toggleContent" style="background-color: #fff; padding: 15px;">'+
    ''+
    '        <div class="int-row">'+
    '            <input class="validate-prospectuses validate-noinline int-form__checkbox " type="checkbox" id="capture-opt-40" value="AMW19#https://css2.open.ac.uk/outis/docs/publications/AMW19.pdf#Prosbectws Modiwlau Mynediad 2018/2019" name="capture-opt-prospectuses">'+
    '            <label for="capture-opt-40" class="int-form__label" style="color:#0b55a8">Prosbectws Modiwlau Mynediad 2018/2019 <span class="fe-label-course-info">Modiwlau sydd wedi&#39;u dylunio i helpu dysgwyr gydag ychydig o brofiad astudio, neu heb unrhyw brofiad o gwbl, i adeiladu hyder a datblygu sgiliau astudio.</span></label>'+
    '        </div>'+
    ''+
    '        <div class="int-row">'+
    '            <input class="validate-prospectuses validate-noinline int-form__checkbox " type="checkbox" id="capture-opt-41" value="CDW19#https://css2.open.ac.uk/outis/docs/publications/CDW19.pdf#Prosbectws Cyrsiau Israddedig 2018/2019" name="capture-opt-prospectuses">'+
    '            <label for="capture-opt-41" class="int-form__label" style="color:#0b55a8">Prosbectws Cyrsiau Israddedig 2018/2019 <span class="fe-label-course-info">Trosolwg ar y cyrsiau a&#39;r cymwysterau cynigwn ar lefel israddedig, ynghyd ag atebion i&#39;ch cwestiynau am astudio gyda&#39;r Brifysgol Agored.</span></label>'+
    '        </div>'+
    ''+
    '        <div class="int-row">'+
    '            <input class="validate-prospectuses validate-noinline int-form__checkbox " type="checkbox" id="capture-opt-42" value="PGW19#https://css2.open.ac.uk/outis/docs/publications/PGW19.pdf#Prosbectws Ôl-raddedig 2018/2019" name="capture-opt-prospectuses">'+
    '            <label for="capture-opt-42" class="int-form__label" style="color:#0b55a8">Prosbectws Ôl-raddedig 2018/2019<span class="fe-label-course-info">Trosolwg ar y cyrsiau a&#39;r cymwysterau cynigwn ar lefel ôl-raddedig, ynghyd ag atebion i&#39;ch cwestiynau am astudio gyda&#39;r Brifysgol Agored.</span></label>'+
    '        </div>'+
    ''+
    '    </div>'+
    '</div>';

    var welshListUSAB = '<div id="fe-welsh-list">'+
    '<div class="listContainer">'+
    '    <h2>Cymraeg</h2>'+
    '    <div class="listWrap">'+
    '        <div class="markerWrap"><span class="marker"></span></div>'+
    '        <div class="listItemWrap">'+
    '            <div class="listItem">'+
    '                <div class="listItemContent">'+
    '                        <div class="int-row"><input class="validate-prospectuses validate-noinline int-form__checkbox " type="checkbox" id="capture-opt-21" value="AMW19#https://css2.open.ac.uk/outis/docs/publications/AMW19.pdf#Prosbectws Modiwlau Mynediad 2018/2019" name="capture-opt-prospectuses"><label for="capture-opt-21" class="int-form__label">Prosbectws Modiwlau Mynediad 2018/2019<span class="fe-label-course-info">Modiwlau sydd wedi&#39;u dylunio i helpu dysgwyr gydag ychydig o brofiad astudio, neu heb unrhyw brofiad o gwbl, i adeiladu hyder a datblygu sgiliau astudio.</span></label></div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>'+
    ''+
    '<div class="listContainer">'+
    '        <div class="listWrap">'+
    '            <div class="markerWrap"><span class="marker"></span></div>'+
    '            <div class="listItemWrap">'+
    '                <div class="listItem">'+
    '                    <div class="listItemContent">'+
    '                            <div class="int-row"><input class="validate-prospectuses validate-noinline int-form__checkbox " type="checkbox" id="capture-opt-22" value="CDW19#https://css2.open.ac.uk/outis/docs/publications/CDW19.pdf#Prosbectws Cyrsiau Israddedig 2018/2019" name="capture-opt-prospectuses"><label for="capture-opt-22" class="int-form__label">Prosbectws Cyrsiau Israddedig 2018/2019 <span class="fe-label-course-info">Trosolwg ar y cyrsiau a&#39;r cymwysterau cynigwn ar lefel israddedig, ynghyd ag atebion i&#39;ch cwestiynau am astudio gyda&#39;r Brifysgol Agored.</span></label></div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    ''+
    '</div>';

    var welshListPSAB = '<div id="fe-welsh-list">'+
    '        <div class="listContainer">'+
    '            <h2>Cymraeg</h2>'+
    '            <div class="listWrap">'+
    '                <div class="markerWrap"><span class="marker"></span></div>'+
    '                <div class="listItemWrap">'+
    '                    <div class="listItem">'+
    '                        <div class="listItemContent">'+
    '                                <div class="int-row"><input class="validate-prospectuses validate-noinline int-form__checkbox " type="checkbox" id="capture-opt-20" value="PGW19#https://css2.open.ac.uk/outis/docs/publications/PGW19.pdf#Prosbectws Ôl-raddedig 2018/2019" name="capture-opt-prospectuses"><label for="capture-opt-20" class="int-form__label">Prosbectws Ôl-raddedig 2018/2019<span class="fe-label-course-info">Trosolwg ar y cyrsiau a&#39;r cymwysterau cynigwn ar lefel ôl-raddedig, ynghyd ag atebion i&#39;ch cwestiynau am astudio gyda&#39;r Brifysgol Agored.</span></label></div>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>    '+
    '</div>';

    var currentCountryCookie = getCookie('OU_CountryCode');
    console.log(currentCountryCookie);
  
    $('.fe-current-country').text(currentCountryCookie);

  
    // Update Content 
    if (currentCountryCookie === "WA|GB" && urlUSAB.indexOf(window.location.href) > -1)   {
        console.log('WA USAB');

      utils.waitForElement('#step1 #sub-prospectuses .listContainer').then(function () {
        // Insert Accordion
        $(welshListUSAB).appendTo('#step1 #sub-prospectuses');
      });
 
    } else if (currentCountryCookie === "WA|GB" && urlPSAB.indexOf(window.location.href) > -1) {
        console.log('WA PSAB');
        utils.waitForElement('#step1 #sub-prospectuses .listContainer').then(function () {
            // Insert Accordion
            $(welshListPSAB).appendTo('#step1 #sub-prospectuses');
        });
       
    } else if (currentCountryCookie === "WA|GB" && urlNOCODE.indexOf(window.location.href) > -1){
        console.log('WA Accordion page');
        // Insert Accordion
        utils.waitForElement('#step1 .int-row').then(function () {
            $(welshAccordion).appendTo('#step1 .int-row:eq(0)');
        });

    } else{
        // Do nothing  
    }

    // Activate open/close
    $( document ).ready(function() {
        $('#fe-welsh-list').on('click', function() {
            setTimeout( function() {
            $(this).toggleClass('int-active');
            }, 1000);
       });
    });

  });
}}, {"value": "<style>.fe28 .fe-postable-country {\n  margin-bottom: 0 !important; }\n  .fe28 .fe-postable-country .int-form__field-label {\n    padding: 0 !important; }\n  .fe28 .fe-postable-country #committed-uk .int-grid3 {\n    height: 0; }\n  @media (min-width: 768px) {\n    .fe28 .fe-postable-country #committed-uk .int-grid6 {\n      margin-left: 26%; } }\n  .fe28 .fe-postable-country fieldset {\n    margin-bottom: 0 !important;\n    padding: 0 !important; }\n\n.fe28 .fe-label-course-info {\n  color: #424242;\n  font-size: 0.85em;\n  display: block; }\n\n.fe28 .fe-submit-cta-message {\n  color: #424242;\n  display: block;\n  font-size: 1.35em;\n  line-height: 1.3; }\n\n.fe28 .int-form__field:focus, .fe28 .int-form__select:focus, .fe28 .int-form__select-radio:focus, .fe28 .int-form__textarea:focus {\n  border-color: #0e56a7 !important; }\n\n.fe28 .int-form__field.is-error, .fe28 .int-form__select.is-error, .fe28 .int-form__select-radio.is-error, .fe28 .int-form__textarea.is-error {\n  border-color: #e42448 !important; }\n\n.fe28 .int-form__select:focus {\n  background-position: right 0 !important; }\n\n.fe28 .fe-email-message {\n  clear: both; }\n  .fe28 .fe-email-message:before, .fe28 .fe-email-message:after {\n    display: table;\n    line-height: 0;\n    content: \"\";\n    clear: both; }\n\n.fe28 .fe-find-address {\n  width: 60%;\n  float: left;\n  display: block;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe28 .findAddress-button {\n  float: left;\n  display: block;\n  width: 38%;\n  margin-left: 2%;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe28 #divFindAddressError {\n  clear: both !important; }\n\n.fe28 .fe-toggle-password {\n  right: 20px;\n  top: 0;\n  float: right;\n  padding: 8px 0;\n  margin-top: -45px;\n  position: relative;\n  z-index: 99999; }\n  .fe28 .fe-toggle-password button {\n    background: none;\n    border: none;\n    color: #0b55a8;\n    margin: 0;\n    padding: 0;\n    font-weight: bold;\n    color: #0e56a7;\n    text-decoration: underline;\n    font-size: 1.35em;\n    line-height: 1.5; }\n\n.fe28 #ou-courses-tabs {\n  margin-bottom: 2em; }\n\n.fe28 #fe-hint {\n  font-weight: bold;\n  display: inline-block; }\n  .fe28 #fe-hint a {\n    color: #0e56a7; }\n    .fe28 #fe-hint a:hover, .fe28 #fe-hint a:focus {\n      color: #0e56a7; }\n@media (min-width: 768px) {\n  .fe28 .fe-field-required {\n    margin-top: 2.05em;\n    text-align: right;} }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2980d53cef9345d38b0280bd83281f61"}]}, {"viewId": "10172483568", "changes": [{"dependencies": [], "type": "custom_code", "id": "759980189a984fc6a4bbcd40b40eed89", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow
utils.waitForElement('head').then(function(){
	$('head').append('<meta name=\"robots\" content=\"noindex\">'); 
});

// Thank you page Add intro text 
$(document).ready(function() { 
  
  // Cookie after submit
   $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
            }
        };
  
  
  $('<h3>Download prospectus now<\/h3><ul id=\"downloadList\"><\/ul>').insertBefore('.int-grid8 h3:first');

function updateContent() {
    
    var courses = [
      {'amc19u':'Access Modules Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/AMC19U.pdf'},
      {'amw19':'Prosbectws Modiwlau Mynediad 2018/2019 (Welsh);https://css2.open.ac.uk/outis/docs/publications/AMW19.pdf'},
      {'cdd19':'Undergraduate Courses Prospectus 2018/19;https://css2.open.ac.uk/outis/docs/publications/CDD19.pdf'},
      {'cdw19':'Prosbectws Cyrsiau Israddedig 2018/2019 (Welsh);https://css2.open.ac.uk/outis/docs/publications/CDW19.pdf'},
      {'ope19u':'Open Qualifications Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/OPE19U.pdf'},
      {'ahu19u':'Arts and Humanities Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/AHU19U.pdf'},
      {'bsp19u':'Business and Management Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/BSP19U.pdf'},
      {'cic19u':'Computing and IT Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/CIC19U.pdf'},
      {'cye19u':'Education, Childhood, Youth and Sport Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/CYE19U.pdf'},
      {'ent19u':'Engineering, Design and Technology Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/ENT19U.pdf'},
      {'edi19u':'Environment and Development Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/EDI19U.pdf'},
      {'shw19u':'Health and Social Care Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SHW19U.pdf'},
      {'tml19u':'Languages and Applied Linguistics Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/TML19U.pdf'},
      {'law19u':'Law Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/LAW19U.pdf'},
      {'mst19u':'Mathematics and Statistics Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/MST19U.pdf'},
      {'nah19u':'Nursing and Healthcare Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/NAH19U.pdf'},
      {'psy19u':'Psychology and Counselling Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/PSY19U.pdf'},
      {'sci19u':'Science Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SCI19U.pdf'},
      {'ssc19u':'Social Sciences Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SSC19U.pdf'},
      {'swpe19':'Social Work in England and Scotland 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SWPE19.pdf'},
      {'swpw19':'Social Work in Wales Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SWPW19.pdf'},
      {'pgb19':'Postgraduate Courses Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/PGB19.pdf'},
      {'pgw19':'Prosbectws Ôl-raddedig 2018/2019 (Welsh);https://css2.open.ac.uk/outis/docs/publications/PGW19.pdf'},
      {'ope19p':'Open Qualifications Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/OPE19P.pdf'},
      {'ahu19p':'Arts and Humanities Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/AHU19P.pdf'},
      {'bsp19p':'Business and Management Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/BSP19P.pdf'},
      {'cic19p':'Computing and IT Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/CIC19P.pdf'},
      {'cye19p':'Education, Childhood, Youth and Sport Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/CYE19P.pdf'},
      {'ent19p':'Engineering, Design and Technology Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/ENT19P.pdf'},
      {'edi19p':'Environment and Development Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/EDI19P.pdf'},
      {'shw19p':'Health and Social Care Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SHW19P.pdf'},
      {'tml19p':'Languages and Applied Linguistics Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/TML19P.pdf'},
      {'law19p':'Law Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/LAW19P.pdf'},
      {'mba19':'MBA (Master of Business Administration) Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/MBA19.pdf'},
      {'mst19p':'Mathematics and Statistics Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/MST19P.pdf'},
      {'nah19p':'Nursing and Healthcare Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/NAH19P.pdf'},
      {'psy19p':'Psychology and Counselling Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/PSY19P.pdf'},
      {'sci19p':'Science Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SCI19P.pdf'},
      {'ssc19p':'Social Sciences Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SSC19P.pdf'},
      {'swpp19':'Social Work in England and Scotland Prospectus 2018/2019;https://css2.open.ac.uk/outis/docs/publications/SWPP19.pdf'}
  ];
    
    // Check country code
    var codesCourses = $.cookie('prospectus_code');
    var codeSplit = codesCourses.split(/,/ig);
    console.log(codeSplit);


    for (var tt=1; tt<= codeSplit.length;tt++) {
        var key = codeSplit[tt-1];
        console.log(key);

        var result;
        var courseInfoFunction = function(items, key) {
            items.filter(function(item) {
                
                if (item[key]) {
                    result = item[key];
                }
                });
                return result;
         };

         var courseInfo = courseInfoFunction(courses, key);
        console.log(courseInfo);

        
        if(courseInfo)
        {

                var course = courseInfo.split(/;/ig);
                var titleProspectus = (course.length > 0 ? course[0] : null);
                var urlProspectus = (course.length > 1 ? course[1] : null);
                
                $('#downloadList').append('<li><a href=\"' + urlProspectus + '\" target=\"_blank\" title=\"' + titleProspectus + '\">' + titleProspectus + '<\/a><\/li>');
                
        }

    
    }

}

updateContent();
  
  
  
  
  
  
  
    var cookieReceive = window.$.cookie('receive'); //set cookie var
    if ( cookieReceive == 'post') { //if equals this val
        //alert("post");
        $('h2').text('Your prospectuses have been posted to you; it’s a small step but it could be the start of something huge');
        $('.int-wrap p:eq(0)').html('Your prospectus will be dispatched within 2 working days.<br /> We’ve also emailed them to you for convenience. Please check your spam folder.');
    }
    else if ( cookieReceive == 'email') {
        //alert("email");
        $('h2').text('Your prospectuses have been emailed to you; it’s a small step but it could be the start of something huge');
        $('.int-wrap p:eq(0)').html('Your prospectus should be in your inbox shortly.<br /> Please check your spam folder.');
    }
});
}}]}], "name": "Variation #3: improved UX & Welsh Update"}], "audienceIds": ["or", "6284350012"], "changes": null, "id": "12402323747", "integrationSettings": null}], "id": "12385303114", "weightDistributions": null, "name": "FE_028_RQAP_Page -with welsh updates - (running 100%)", "groupId": null, "commitId": "13668650184", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "180e9bc90d00428785c4701058111a8a", "value": function($){// Opttimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

//get cookie and value
var getCookie = function(name) {
	var getCookieValues = function(cookie) {
		var cookieArray = cookie.split('=');
		return cookieArray[1].trim();
	};

	var getCookieNames = function(cookie) {
		var cookieArray = cookie.split('=');
		return cookieArray[0].trim();
	};

	var cookies = document.cookie.split(';');
	var cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf(name)];

	return (cookieValue === undefined) ? null : cookieValue;
};


//Set Custom Dimension
var cookieV = getCookie("OU_CountryCode");

if(cookieV === "EN|GB"){
  window["optimizely"].push({
  	"type": "user",
    "attributes": {
    "Country": "England",
    }
  }); 
}else if (cookieV === "WA|GB"){
  window["optimizely"].push({
  	"type": "user",
    "attributes": {
    "Country": "Wales",
    }
  });
} else if (cookieV === "SC|GB"){
  window["optimizely"].push({
  	"type": "user",
    "attributes": {
    "Country": "Scotland",
    }
  });
} else if (cookieV === "NI|GB"){
  window["optimizely"].push({
  	"type": "user",
    "attributes": {
    "Country": "Nothern Ireland",
    }
  });
} else if (cookieV === "01|EU"){
  window["optimizely"].push({
  	"type": "user",
    "attributes": {
    "Country": "Channel Islands",
    }
  });
} else if (cookieV === "02|EU"){
  window["optimizely"].push({
  	"type": "user",
    "attributes": {
    "Country": "Isle of Man",
    }
  });
} else {};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "25", "site_catalyst_prop": "10"}}, "integrationStringVersion": 2, "viewIds": ["11414858417", "11416747698", "11451720019"], "experiments": [{"weightDistributions": [{"entityId": "13751080135", "endOfRange": 300}, {"entityId": "13768190146", "endOfRange": 10000}], "audienceName": "ONLY: Eng, Scot, Wales & N.Ireland,Fresh Egg Test Cookie or Query String", "name": "FE_0232_OUTIS_Uplift_Test - OUTIS 5 - (managed by OU)", "bucketingStrategy": null, "variations": [{"id": "13751080135", "actions": [], "name": "Original"}, {"id": "13768190146", "actions": [{"viewId": "11451720019", "changes": [{"dependencies": [], "type": "custom_code", "id": "f68703df2fa949f49dd14b5ef9ddf3d3", "value": function($){// Optimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow
utils.waitForElement('body').then(function(){
	$('body').addClass('fe_232'); 
});

utils.waitForElement('.ou-mobile-menu-toggle').then(function(){
    $(".ou-mobile-menu-toggle").remove();
});


utils.waitForElement('#courseTitle').then(function(){
  
  function updateURL() {
    // Get the course name
    var qualName = $("#courseTitle strong .js-qualTitle").text();
    qualName = qualName.replace(/ /g,"+");
    var awardableTitle = $("#courseTitle strong .js-awardableTitle").text();
    awardableTitle = awardableTitle.replace(/ /g,"+");
    console.log(awardableTitle);
    var presDate = $("#courseStartdate").text();
    presDate = presDate.replace(/ /g,"%");
    var qualCode = $(".js-qualCode").text();


    // Check hash awardable code
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    var awardableCode = getUrlParameter('aqc');
    console.log(awardableCode);

    // regLinkURL

   if(window.location.href.indexOf("aqc") > -1) {
    console.log('awardableCode true');
    var awardableCodeUppercase = awardableCode.toUpperCase();  
    var regLinkAwardableURL = 'https:\/\/www.open.ac.uk\/request\/marketing-forms\/logo-only-header\/0059-qualification-registration-v5-uk.aspx?&qual='+qualName+'&presDate='+presDate+'&qualcode='+qualCode+'-'+awardableCodeUppercase+'&aqc='+awardableCode+'';
    // Update URL CTA Form
    $('.int-enquire-button a').attr('href', regLinkAwardableURL);
} else {
    console.log('awardableCode false');
    var regLinkURL = 'https:\/\/www.open.ac.uk\/request\/marketing-forms\/logo-only-header\/0059-qualification-registration-v5-uk.aspx?&qual='+qualName+'&presDate='+presDate+'&qualcode='+qualCode+'';
    $('.int-enquire-button a').attr('href', regLinkURL);
}

  
  	// Get the course name
  	var qualCourseName = $("#courseTitle strong .js-qualTitle").text();

setCookie("courseName", qualCourseName, 5);

function setCookie(courseName, value, days) {
    var exDate = new Date();
    exDate = new Date(exDate.getTime() + (days*24*60*60*1000));
    document.cookie = courseName + "=" + value + ";path=/" + ((days ==null) ? "" : ";expires=" + exDate.toGMTString());
}

// Start Date Cookie

var courseStart = $("#courseStartdate").text();

setCookie("courseStart", courseStart, 5);

// Complete reg by
var completeBy = $("#completeBy").text();

setCookie("completeBy", completeBy, 5);

 // Start Awardable Cookie
var awardableTitle = $("#courseTitle strong .js-awardableTitle").text();

setCookie("awardableTitle", awardableTitle, 5);
 
  
  }

updateURL();

});
}}]}, {"viewId": "11414858417", "changes": [{"dependencies": [], "type": "custom_code", "id": "af89c6f228d94694aecb01eed2f6996f", "value": function($){// Optimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

utils.waitForElement('body').then(function(){
	$('body').addClass('fe_232'); 
  // Set Cookie FE_ReachedRegistrationPage for 2 months
    function setcookie(name, value, expires, path, domain, secure) {	// Send a cookie
        expires instanceof Date ? expires = expires.toGMTString() : typeof(expires) == 'number' && (expires = (new Date(+(new Date()) + expires * 1e3)).toGMTString());
        var r = [name + "=" + escape(value)], s, i;
        var s = {
expires: expires, path: path, domain: domain
        };
        for(i in s){
            s[i] && r.push(i + "=" + s[i]);
        }
        return secure && r.push("secure"), document.cookie = r.join(";"), true;
    }
    
    
    setcookie("FE_ReachedRegistrationPage","true",5184000);
});

utils.waitForElement('.ou-mobile-menu-toggle').then(function(){
    $(".ou-mobile-menu-toggle").remove();
});

// Update CTA text
utils.waitForElement('.btnSubmit').then(function(){
$(".btnSubmit").val("Register");
});

// Add validation error styles to OU validation
utils.waitForElement('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_lbe').then(function(){
    $('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_lbe').addClass('fe-int-errorMessage int-errorMessage').text('Please confirm that you have read the statement above to continue with your registration.').insertAfter('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_checkbox label');
});

function getCookie(courseStart) {
    var name = courseStart + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

utils.waitForElement('.int-promo').then(function(){
    var courseName = getCookie("courseName");
    $(".int-promo").html($(".int-promo").html().replace(/\[qual\]/ig, courseName));
  
    var awardableTitle = getCookie("awardableTitle");
    $(".int-promo").html($(".int-promo").html().replace(/\[awardableTitle\]/ig, awardableTitle));

    var courseStart = getCookie("courseStart");
    $(".int-promo").html($(".int-promo").html().replace(/\[presDate\]/ig, courseStart));  
});




// Text required fields
utils.waitForElement('.editing-form-category').then(function(){
    var feRequiredFields = '<p role="presentation" aria-hidden="true">Fields marked with * are mandatory</p>';
    $(feRequiredFields).prependTo('.editing-form-category');
});

// Change select title
utils.waitForElement('#field_outitle select').then(function(){
    $('#field_outitle select option:first').html('Select title');
});

// Change select addrress
utils.waitForElement('#btnFindAddress').then(function(){
    $("#btnFindAddress").click(function() {
        setTimeout(function(){
            $('#divSelectAddress select option:first').html('Select Address');
        }, 500);
    });
});


// OU personal identifier input remove (if known)
utils.waitForElement('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_PI_OUInput').then(function(){
    $('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_PI_OUInput').attr("placeholder", "OU personal identifier");
});

// Mail Checkjs

$(document).ready(function() {

    /*! mailcheck v1.1.2 @licence MIT */
    var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift3Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){var g=f.domain,j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),1==j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift3Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift3Distance:function(a,b){if(null==a||0===a.length)return null==b||0===b.length?0:b.length;if(null==b||0===b.length)return a.length;for(var c=0,d=0,e=0,f=0,g=5;c+d<a.length&&c+e<b.length;){if(a.charAt(c+d)==b.charAt(c+e))f++;else{d=0,e=0;for(var h=0;g>h;h++){if(c+h<a.length&&a.charAt(c+h)==b.charAt(c)){d=h;break}if(c+h<b.length&&a.charAt(c)==b.charAt(c+h)){e=h;break}}}c++}return(a.length+b.length)/2-f},splitEmail:function(a){var b=a.trim().split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0==e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var c=1;c<e.length;c++)g+=e[c]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);


   // Insert div paceholder
   //V1
   $('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_ouemail_OUInput').closest('.int-grid9').addClass('fe-email-wrap');
   $( ".fe-email-wrap" ).wrapInner( "<div class='fe-placeholder'></div>" );
   $('<span id=\"fe-hint\"><\/span>').insertAfter('.fe-email-wrap .fe-placeholder');

   // V2
   //$('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_ouemail_OUInput').closest('.int-grid9').addClass('fe-email-wrap');
   //$('<span id=\"fe-hint\"><\/span>').insertAfter('.fe-email-wrap .fe-placeholder');

   (function ($) {

        var $email = $('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_ouemail_OUInput');
        var $hint = $("#fe-hint");

        $email.on('blur',function() {
        $hint.css('display', 'none').empty();

        
        $(this).mailcheck({
            suggested: function(element, suggestion) {
            if(!$hint.html()) {
                // First error - fill in/show entire hint element
                var suggestion = "Did you mean <span class='suggestion'>" + "<a href='#' class='domain'><span class='address'>" + suggestion.address + "</span>@" + suggestion.domain + "</a></span>?";
                                
                $hint.html(suggestion).fadeIn(150);
            } else {
                // Subsequent errors
                $(".address").html(suggestion.address);
                $(".domain").html(suggestion.domain);
            }
            }
        });
        });

        $hint.on('click', '.domain', function() {
        // On click, fill in the field with the suggestion and remove the hint
        $email.val($(".suggestion").text());
        $hint.fadeOut(200, function() {
            $(this).empty();
            setTimeout(function(){
                $(".fe-email-wrap .int-errorMessage").fadeOut('fast');
                $(".fe-email-wrap input").removeClass('is-error');
            }, 250);
        });
        return false;
        });

    })(jQuery);

 });

 // Find address’ CTA button has been moved alongside the postcode
utils.waitForElement('.findAddress-postcode').then(function(){
    $('.findAddress-postcode').parent().addClass('fe-find-address');

    $(window).on("resize", function(e) {
        if ( $(window).width() <= 800) {
          $("#btnFindAddress").text("Find");
        } else {
            $("#btnFindAddress").text("Find address");
        }
    }).resize();
});



// Update the tile
utils.waitForElement('title').then(function(){
$(document).prop('title', 'Qualification Registration');
});

function updateContent() {
    
        var courses = [
            {'Q01':'360'},
            {'Q07':'360'},
            {'Q11':'360'},
            {'Q15':'360'},
            {'Q23':'360'},
            {'Q43':'360'},
            {'Q45':'360'},
            {'Q61':'360'},
            {'Q62':'360'},
            {'Q62-CNET':'360'},
            {'Q62-CSOFT':'360'},
            {'Q62-SOFT':'360'},
            {'Q67':'360'},
            {'Q67-CITB':'360'},
            {'Q67-CITD':'360'},
            {'Q67-CITM':'360'},
            {'Q67-CITP':'360'},
            {'Q67-CITS':'360'},
            {'Q76':'360'},
            {'Q77':'360'},
            {'Q79':'360'},
            {'Q82':'360'},
            {'Q83':'360'},
            {'Q84':'360'},
            {'Q85':'360'},
            {'Q86':'360'},
            {'Q89':'360'},
            {'Q91':'360'},
            {'Q91-ACC':'360'},
            {'Q91-EC':'360'},
            {'Q91-IE':'360'},
            {'Q91-LP':'360'},
            {'Q91-MAR':'360'},
            {'Q92':'360'},
            {'Q94':'360'},
            {'Q96':'360'},
            {'Q97':'360'},
            {'Q98':'360'},
            {'Q99':'360'},
            {'R21':'360'},
            {'R23':'360'},
            {'R23-CRIM':'360'},
            {'R23-ECON':'360'},
            {'R23-GEO':'360'},
            {'R23-POL':'360'},
            {'R23-PSY':'360'},
            {'R23-REL':'360'},
            {'R23-SOC':'360'},
            {'R30':'360'},
            {'R38':'360'},
            {'R45':'360'},
            {'R46':'360'},
            {'T05':'120'},
            {'T06':'120'},
            {'T12':'120'},
            {'T13':'120'},
            {'T13-CITB':'120'},
            {'T13-CITD':'120'},
            {'T13-CITM':'120'},
            {'T13-CITP':'120'},
            {'T13-CITS':'120'},
            {'T21':'120'},
            {'T22':'120'},
            {'T23':'120'},
            {'T24':'120'},
            {'T26':'120'},
            {'T27':'120'},
            {'T28':'120'},
            {'T32':'120'},
            {'T36':'120'},
            {'T37':'120'},
            {'T42':'120'},
            {'T43':'120'},
            {'W07':'240'},
            {'W11':'240'},
            {'W15':'240'},
            {'W36':'240'},
            {'W42':'240'},
            {'W42-CITB':'240'},
            {'W42-CITD':'240'},
            {'W42-CITM':'240'},
            {'W42-CITP':'240'},
            {'W42-CITS':'240'},
            {'W45':'240'},
            {'W50':'240'},
            {'W51':'240'},
            {'W52':'240'},
            {'W57':'240'},
            {'W58':'240'},
            {'W62':'240'},
            {'W63':'240'},
            {'W64':'240'},
            {'W65':'240'},
            {'W66':'240'},
            {'W67':'240'},
            {'W68':'240'},
            {'W71':'240'},
            {'W73':'240'},
            {'W77':'240'},
            {'W78':'240'},
            {'X11':'240'},
            {'X15':'240'}
        ];
        
        var result;
        var getCredit = function(items, key) {
            items.filter(function(item) {
                if (item[key]) {
                    result = item[key];
                }
                });
                return result;
         };

        // Check country code
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        var countryCode = getCookie("OU_CountryCode");
        console.log(countryCode);

        // Check hash course code
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
    
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
    
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
  
        var courseCode = getUrlParameter('qualcode');
        console.log(courseCode);
        var creditVal = getCredit(courses, courseCode);
        console.log(creditVal);

        var courseName = getCookie("courseName");
        var awardableTitle = getCookie("awardableTitle");
        var courseStart = getCookie("courseStart");
        var awardableCode = getUrlParameter('aqc');
        
        console.log(awardableCode);
        
        // Select Payment Options
        var selectOptionENWA = '<option selected=\"selected\" value=\"\">Select<\/option><option value=\"Part-Time Tuition Fee Loan\">Part-Time Tuition Fee Loan<\/option><option value=\"OUSBA monthly payments\">OUSBA monthly payments<\/option><option value=\"Credit or debit card\">Credit or debit card<\/option><option value=\"My employer will pay for me\">My employer will pay for me<\/option><option value=\"I don\'t know yet\">I don\'t know yet<\/option>';
        var selectOptionNI = '<option selected=\"selected\" value=\"\">Select<\/option><option value=\"Part-Time Fee Grant\">Part-Time Fee Grant<\/option><option value=\"Part-Time Tuition Fee Loan\">Part-Time Tuition Fee Loan<\/option><option value=\"OUSBA monthly payments\">OUSBA monthly payments<\/option><option value=\"Credit or debit card\">Credit or debit card<\/option><option value=\"My employer will pay for me\">My employer will pay for me<\/option><option value=\"I don\'t know yet\">I don\'t know yet<\/option>';
        var selectOptionSC = '<option selected=\"selected\" value=\"\">Select<\/option><option value=\"Tuition Fee Grant\">Tuition Fee Grant<\/option><option value=\"OUSBA monthly payments\">OUSBA monthly payments<\/option><option value=\"Credit or debit card\">Credit or debit card<\/option><option value=\"My employer will pay for me\">My employer will pay for me<\/option><option value=\"I don\'t know yet\">I don\'t know yet<\/option>';

       // Check Tooltip fees by Countries
        function checkTooltipFee() {
            if ((countryCode == 'EN|GB') && (creditVal == '360')) {
                console.log('UK 360');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£18,072");
                    $('.int-inputFocusTooltip .qual-country').text('England');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionENWA);
                });
            } else if ((countryCode == 'EN|GB') && (creditVal == '240')) {
                console.log('UK 240');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£12,048");
                    $('.int-inputFocusTooltip .qual-country').text('England');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionENWA);
                });
            } else if ((countryCode == 'EN|GB') && (creditVal == '120')) {
                console.log('UK 120');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£6,024");
                    $('.int-inputFocusTooltip .qual-country').text('England');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionENWA);
                });
            } else if ((countryCode == 'SC|GB') && (creditVal == '360')) {
                console.log('SC 360');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£6,048");
                    $('.int-inputFocusTooltip .qual-country').text('Scotland');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionSC);
                });
            } else if ((countryCode == 'WA|GB') && (creditVal == '360')) {
                console.log('WA 360');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£6,048");
                    $('.int-inputFocusTooltip .qual-country').text('Wales');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionENWA);
                });
            } else if ((countryCode == 'NI|GB') && (creditVal == '360')) {
                console.log('NI 360');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£6,048");
                    $('.int-inputFocusTooltip .qual-country').text('Northern Ireland');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionNI);
                });
            } else if ((countryCode == 'SC|GB') && (creditVal == '240')) {
                console.log('Scotland 240');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£4,032");
                    $('.int-inputFocusTooltip .qual-country').text('Scotland');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionSC);
                });
            } else if ((countryCode == 'WA|GB') && (creditVal == '240')) {
                console.log('WA 240');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£4,032");
                    $('.int-inputFocusTooltip .qual-country').text('Wales');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionENWA);
                });
            } else if ((countryCode == 'NI|GB') && (creditVal == '240')) {
                console.log('NI 240');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£4,032");
                    $('.int-inputFocusTooltip .qual-country').text('Northern Ireland');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionNI);
                });
            } else if ((countryCode == 'SC|GB') && (creditVal == '120')) {
                console.log('Scotland 120');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£2,016");
                    $('.int-inputFocusTooltip .qual-country').text('Scotland');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionSC);
                });
            } else if ((countryCode == 'WA|GB') && (creditVal == '120')) {
                console.log('WA 120');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£2,016");
                    $('.int-inputFocusTooltip .qual-country').text('Wales');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionENWA);
                });
            } else if ((countryCode == 'NI|GB') && (creditVal == '120')) {
                console.log('NI 120');
                utils.waitForElement('.int-inputFocusTooltip .qual-fee').then(function(){
                    $('.int-inputFocusTooltip .qual-fee').text("£2,016");
                    $('.int-inputFocusTooltip .qual-country').text('Northern Ireland');
                });
                // Select Payment Options
                utils.waitForElement('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').then(function(){
                    $('#p_lt_ctl01_BizForm_1_1_viewBiz_Payment_dropDownList').empty().append(selectOptionNI);
                });
            } else {
                // Silence is golden....
            }
        }

        checkTooltipFee();

       // Check Awardable courses
        utils.waitForElement('.int-promo p').then(function(){
        function checkAwardable() {
            if (window.location.href.indexOf("aqc") > -1) {
                console.log("The URL contains Awardable qualifications");
                $('.int-promo p:eq(0)').replaceWith('<p>You have requested to register on the <strong>' + awardableTitle + '</strong> which is a route through the <strong>' + courseName + '</strong>.</p><p>We will register you on the <strong>' + courseName + '</strong> starting in <strong>' + courseStart + '</strong> and the route you study will be determined when you enrol on your modules.</p>');
            }
        }

        checkAwardable();
        });
  
         // Check Options list paying for your studies
        // function checkPayingStudiesOptions() {
        //     if (countryCode === 'SC|GB') {
        //         $( "#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Payment_dropDownList > option:eq(1)" ).html( '<option value=\"Tuition Fee Grant\">Tuition Fee Grant<\/option>' );    
        //     } else if (countryCode === 'NI|GB') {
        //         $('<option value=\"Tuition Fee Grant\">Tuition Fee Grant<\/option>').insertAfter("#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Payment_dropDownList > option:eq(0)");
        //     } else {
        //         // Silence is golden....
        //     }
        // }
    
        // checkPayingStudiesOptions();
}

updateContent();

// Required Tickbox
utils.waitForElement('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_checkbox_value').then(function(){
function confirmationCheckbox(){

    var checkboxError = '<span style=\"display: none\" class=\"fe-int-errorMessage int-errorMessage\" for=\"p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_confirmation_checkbox\" role=\"alert\" aria-live=\"assertive\" style=\"\" data-validation-target-name=\"p$lt$ctl02$pageplaceholder$p$lt$ctl01$OUFormWidget$viewBiz$confirmation$checkbox\">Please confirm that you have read the statement above to continue with your registration.<\/span>';
    //var checkboxErrorTop = '<li for=\"p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz__confirmation_checkbox\" pos=\"59\" style=\"\" class=\"\" data-validation-target-name=\"p$lt$ctl02$pageplaceholder$p$lt$ctl01$OUFormWidget$viewBiz$confirmation$checkbox\"><a href=\"#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Payment_dropDownList\">Checkbox error message<\/a><\/li>';
   
    $('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_checkbox label').click(function() {
        
        if ($('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_checkbox_value').val() == '1') {
            $(".fe-int-errorMessage").show();
        } else {
            $(".fe-int-errorMessage").hide();
        }
    });


    $('.btnSubmit').click(function() {

        if ($('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_checkbox_value').val() == '1') {
            $(".fe-int-errorMessage").hide();
        } else {
            if($('.fe-int-errorMessage').length) {
               //faff
            } else {
                $(checkboxError).insertAfter('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_viewBiz_Confirmation_checkbox label');       
            }
                
            //$(checkboxErrorTop).insertAfter('#p_lt_ctl02_pageplaceholder_p_lt_ctl01_OUFormWidget_errorMsg li:last-child'); 
            $(".fe-int-errorMessage").show();
        }

    });

}
confirmationCheckbox();
});
}}, {"value": "<style>.fe_231 .int-form__field:focus, .fe_231 .int-form__select:focus, .fe_231 .int-form__select-radio:focus, .fe_231 .int-form__textarea:focus {\n  border-color: #0e56a7 !important; }\n\n.fe_231 .int-form__field.is-error, .fe_231 .int-form__select.is-error, .fe_231 .int-form__select-radio.is-error, .fe_231 .int-form__textarea.is-error {\n  border-color: #e42448 !important; }\n\n.fe_231 .fe-find-address input.findAddress-postcode {\n  width: 60%;\n  float: left;\n  display: block;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe_231 .fe-find-address .findAddress-button {\n  float: left;\n  display: block;\n  width: 38%;\n  margin-left: 2%;\n  position: relative;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.fe_231 #divFindAddressError {\n  clear: both !important; }\n\n.fe_231 #fe-hint {\n  margin-top: 0.67em;\n  font-weight: bold;\n  display: inline-block;\n  clear: both;\n  width: 100%; }\n  .fe_231 #fe-hint a {\n    color: #0e56a7; }\n    .fe_231 #fe-hint a:hover, .fe_231 #fe-hint a:focus {\n      color: #0e56a7; }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6e6b188ea34d45deb98559be950ac7b2"}]}, {"viewId": "11416747698", "changes": [{"dependencies": [], "type": "custom_code", "id": "72bd0ae9060b404f8a30ccc686dbc67f", "value": function($){// Optimizely X
var $ = window["optimizely"].get("jquery");
var utils = window.optimizely.get('utils');

// Add meta tag no follow
utils.waitForElement('body').then(function(){
	$('body').addClass('fe_232'); 
});

function getCookie(courseStart) {
    var name = courseStart + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

utils.waitForElement('h1').then(function(){
  
  var courseName = getCookie("courseName");
  var awardableTitle = getCookie("awardableTitle");

  function checkAwardable() {
    if (window.location.href.indexOf("aqc") > -1) {
        $("h1").text('Thank you for your request to register on ' + awardableTitle + '');
    } else {
        $("h1").text('Thank you for your request to register on ' + courseName + '');
    }
  }

    checkAwardable();
});

// Course Start
utils.waitForElement('.course-start').then(function(){
    var courseStart = getCookie("courseStart");
    $('.course-start').text(courseStart);
});

// Course Register By
utils.waitForElement('.course-reg-close-date').then(function(){
    var completeBy = getCookie("completeBy");
    $('.course-reg-close-date').text(completeBy);
});
}}]}], "name": "Variation #1: New registration form"}], "audienceIds": ["and", "9431070631", "4553920430"], "changes": null, "id": "13750400374", "integrationSettings": null}], "id": "13741800013", "weightDistributions": null, "name": "FE_0232_OUTIS_Uplift_Test - OUTIS 5 - (managed by OU)", "groupId": null, "commitId": "14113580461", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.fe0230 .fe-int-errorMessage{ border-radius: 4px !important;}\n.fe0230 .ErrorLabel{font-weight: bold; color: #cd2041;}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "09a7225d6e8f4b04bf70fcc7da2bef1b"}]}], "listTargetingKeys": [], "groups": [], "views": [{"category": "home", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk", "match": "simple"}]], "name": "OU Homepage", "apiName": "httpwwwopenacuk", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8030302179"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/find/psychology-and-counselling", "match": "simple"}]], "name": "Psychology and Counselling category", "apiName": "221317523_psychology_and_counselling", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8785736367"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/find/science", "match": "simple"}]], "name": "Science category", "apiName": "221317523_science", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8786975943"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/find/nursing-and-healthcare-practice", "match": "simple"}]], "name": "Nursing and Healthcare Practice category", "apiName": "221317523_3x_course_category_find_pages__nursing_science_psychol", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8838060236"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/request/callback-thank-you", "match": "simple"}]], "name": "FE - Request callback conversion", "apiName": "221317523_fe__request_callback_conversion", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8921973977"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "css2.open.ac.uk/outis/1bd/o1bdHomePage.asp?CourseCode=", "match": "substring"}]], "name": "FE - Visit OUTIS Module Registration", "apiName": "221317523_fe__visit_outis_module_registration", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8922882796"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/account/createaccount-thank-you", "match": "simple"}]], "name": "FE - Create account conversion", "apiName": "221317523_fe__create_account_conversion", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8923013441"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/courses/modules/", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/courses/qualifications", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.open.ac.uk/courses/modules/", "match": "exact"}, {"type": "url", "value": "www.open.ac.uk/courses/qualifications/", "match": "exact"}]]], "name": "FE - Roll Up Visits to Qual Pages or Module Pages", "apiName": "221317523_fe__roll_up_visits_of_qual_or_module_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8924072387"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "msds.open.ac.uk/signon/SAMSDefault/SAMS001_Default.aspx", "match": "simple"}]], "name": "FE - Visit Sign-in Page", "apiName": "221317523_fe__visit_signin_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8925974681"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/registration-check", "match": "simple"}]], "name": "FE - Visit registration checklist page", "apiName": "221317523_fe__visit_registration_checklist_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8926593542"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "(https:\\/\\/css2\\.open\\.ac\\.uk\\/Outis\\/1bd\\/O1BDCTP\\.asp\\?SESSIONID=.*|https:\\/\\/www\\.open\\.ac\\.uk\\/request\\/thank-you-pages\\/0055-qualification-registration-thank-you\\.aspx\\?.*)", "match": "regex"}]], "name": "FE - All registration confirmation visits (via original and new OUTIS 4 route)", "apiName": "221317523_fe__all_registration_confirmation_visits", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8927003842"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/atoz?", "match": "simple"}]], "name": "FE - Visit A-Z of subjects page", "apiName": "221317523_fe__visit_az_of_subjects_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8927533512"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/account/createaccount", "match": "simple"}]], "name": "FE - Visit 'Create Account' page", "apiName": "221317523_fe__visit_create_account_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8929883649"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/postgraduate/", "match": "simple"}]], "name": "FE - Visit PG Homepage", "apiName": "221317523_fe__visit_pg_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8929962982"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/contact/new?soq=10#", "match": "substring"}, {"type": "url", "value": "https://www.open.ac.uk/request/thank-you-pages/0019-enquire-about-course-thank-you", "match": "simple"}]], "name": "FE - Visit Enquire About This Course Contact Page", "apiName": "221317523_fe__visit_enquire_about_this_course_contact_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8930342696"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://css2.open.ac.uk/outis/1bd/o1bdHomePage.asp", "match": "simple"}]], "name": "FE - Visit OUTIS", "apiName": "221317523_fe__visit_outis", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8930361905"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/courses/find/", "match": "substring"}]], "name": "FE - Find a course category page", "apiName": "221317523_fe__find_a_course_category_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8930554410"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0023-enquire-about-module-thank-you.aspx", "match": "simple"}]], "name": "FE - Enquiries for UG modules (visits to thank-you page)", "apiName": "221317523_fe__enquiries_for_ug_modules_visits_to_thankyou_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8931624890"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/thank-you", "match": "simple"}]], "name": "FE - Email us conversion", "apiName": "221317523_fe__email_us_conversion", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8931752418"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://css2.open.ac.uk/Outis/1bd/O1BDCTP.asp?SESSIONID=", "match": "substring"}]], "name": "FE - Visits to Registration confirmation page - via original OUTIS", "apiName": "221317523_fe__visits_to_registration_confirmation_page__via_orig", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8932173114"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "exact"}]]], "name": "FE - Visit to UG Qual pages", "apiName": "221317523_fe__visit_to_ug_qual_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8933435264"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/account/myaccount", "match": "simple"}]], "name": "FE - Visit 'My Account'", "apiName": "221317523_fe__visit_my_account", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8934492724"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/request/prospectus-thank-you", "match": "simple"}]], "name": "FE - Request prospectus conversion", "apiName": "221317523_fe__request_prospectus_conversion_original", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8959572131"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "AddToShortList=true", "match": "regex"}]], "name": "FE- Course Added to Study Plan conversion", "apiName": "221317523_fe_course_added_to_study_plan_conversion", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8981920131"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "css2.open.ac.uk/outis/1bd/o1bdHomePage.asp?Qual=", "match": "substring"}]], "name": "FE - Visit OUTIS Qual registration", "apiName": "221317523_fe__visit_outis_qual_registration", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8989291447"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus", "match": "simple"}]], "name": "FE - visit \"Request prospectus\"", "apiName": "221317523_fe__visit_request_prospectus", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8994090652"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0023-enquire-about-module-thank-you.aspx", "match": "simple"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0024-enquire-about-module-thank-you.aspx", "match": "simple"}]], "name": "FE - Rollup of PG & UG Module enquiries (visits to thank-you page)", "apiName": "221317523_fe__rollup_of_pg__ug_module_enquiries_visits_to_thanky", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9001150979"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "simple"}]]], "name": "Undergraduate Courses: Quals, Dips, Certs. No Modules.", "apiName": "221317523_undergraduate_courses_quals_dips_certs_no_modules", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9732564556"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "0045-qualification-registration-v3-uk", "match": "substring"}, {"type": "url", "value": "\\/outis\\/1bd\\/o1bdHomePage\\.asp\\?Qual\\=", "match": "regex"}]], "name": "FE - User viewed OUTIS registration page (includes original, or the newly tested page)", "apiName": "221317523_fe__user_viewed_outis_registration_page_includes_origi", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9735603386"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": ".*\\/account\\/createaccount\\?URL\\=.*\\/courses\\/qualifications\\/.*AddToShortList\\=true", "match": "regex"}]], "name": "FE - View Create Account (VIA Add to Shortlist)", "apiName": "221317523_fe__view_create_account_via_add_to_shortlist", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9738194260"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/careers", "match": "simple"}]], "name": "FE - Careers homepage (/courses/careers)", "apiName": "221317523_careers", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9832440275"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/find/science", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/find/psychology-and-counselling", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/find/nursing-and-healthcare-practice", "match": "simple"}]], "name": "FE - Rollup - FE_010 - 3x category pages - Science, Psychology and Counselling, Nursing and Healthcare Practice", "apiName": "221317523_fe__rollup__fe_010__3x_category_pages__science_psychol", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10022950280"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=usab", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=psab", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=q01", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=ahu", "match": "simple"}]], "name": "FE - All Prospectus Pages", "apiName": "221317523_fe__all_prospectus_pages_and_thank_you_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10140001547"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus-thank-you", "match": "simple"}]], "name": "FE - Prospectus Thank You Page", "apiName": "221317523_fe__prospectus_thank_you_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10172483568"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses", "match": "simple"}]], "name": "FE - UG Homepage", "apiName": "221317523_fe__ug_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10189005226"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "^(https?:\\/\\/www\\.open\\.ac\\.uk(.*))", "match": "regex"}]], "name": "FE - Any Open.ac.uk page", "apiName": "221317523_fe__ou_all_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10197463824"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/modules/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/modules/", "match": "exact"}]]], "name": "FE - Visits to Module Pages", "apiName": "221317523_fe__visits_to_module_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10367007146"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/request/error", "match": "simple"}]], "name": "FE - Visits to the RQAP error page", "apiName": "221317523_fe__visits_to_the_rqap_error_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10367044554"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/modules/", "match": "substring"}, {"type": "url", "value": "open.ac.uk/request/marketing-forms/0023-enquire-about-module-ug.aspx?modulecode=", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/modules/", "match": "exact"}, {"type": "url", "value": "http://www.open.ac.uk/courses/modules/e118", "match": "substring"}, {"type": "url", "value": ".*\\/modules\\/(l101|k219|b291|b292|bxa204|ke322|k271|s397|u101|tmxy254|txy227|bxy330|sxh810|sxs810|e217|e233|exc224|exf224|e808|ee830|cddr301|tm257|tm470|dd310|tm351|tm351|tm352|w360|e218|e318|k117|k236|kzw113|y031|y032|y033)(#.*)?$", "match": "regex"}]]], "name": "FE - Pages for FE_022_Module_Pages V2 (UG modules only)", "apiName": "221317523_fe__pages_for_fe_022_module_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10431260352"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": ".*\\/courses\\/registration\\-check\\?pid\\=(Q01|Q07|Q15|Q23|Q43|Q45|Q61|Q62|Q62-CN|Q62-CS|Q62-S|Q63|Q67|Q67-CITB|Q67-CITD|Q67-CITM|Q67-CITP|Q67-CITS|Q77|Q79|Q82|Q83|Q84|Q85|Q86|Q89|Q91|Q91-ACC|Q91-EC|Q91-IE|Q91-LP|Q91-MAR|Q92|Q94|Q96|Q97|Q98|Q99|R21|R26|R30|T05|T06|T12|T13|T13-CITB|T13-CITD|T13-CITM|T13-CITP|T13-CITS|T21|T22|T23|T24|T25|T26|T27|T28|T29|T32|T36|W11|W15|W36|W42|W42-CITB|W42-CITD|W42-CITM|W42-CITP|W42-CITS|W45|W50|W51|W52|W54|W57|W58|W62|W63|W64|W65|W66|W67|W68|W69|W71|X11|X15)\\&", "match": "regex"}]], "name": "FE - Reg Checklist Pages for test FE_0230_Outis_Project_April_to_July_2018 -old", "apiName": "221317523_fe__outis_uplift_project__reg_checklist_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10456609603"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/what-study-like/distance-learning", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/do-it/finding-time", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/do-it/english-skills", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/do-it/access", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/do-it/disability", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/contact", "match": "simple"}]], "name": "FE - Set of pages for Live Chat to appear", "apiName": "221317523_fe__set_of_pages_for_live_chat_to_appear", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10468785353"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.open.ac.uk/courses/qualifications/", "match": "substring"}, {"type": "url", "value": "http://www.open.ac.uk/courses/modules/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.open.ac.uk/courses/qualifications/", "match": "simple"}, {"type": "url", "value": "www.open.ac.uk/courses/modules/", "match": "simple"}]]], "name": "FE - UQ Quals & UG standalone module pages", "apiName": "221317523_fe__uq_quals__ug_standalone_module_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10473101194"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/0045-qualification-registration-v3-uk", "match": "substring"}]], "name": "FE - Outis Uplift Project - Registration Form -old", "apiName": "221317523_fe__outis_uplift_project__registration_form", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10477803898"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding", "match": "simple"}]], "name": "FE - Fees and Funding page visits", "apiName": "221317523_fees_and_funding_page_visits", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10649035423"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "simple"}, {"type": "url", "value": "http:\\/\\/www\\.open\\.ac\\.uk\\/courses\\/qualifications\\/((m(04))|(q(3(0(\\-(ef|eg|es|fg|fs|gs))?|2|9)|4(1|2)|5(0|3)|6(6)|7(3|4)))|(r(1(4(\\-(ah|cs|cw|el|fr|ge|his|l|m|p|rs|sp))?)|2(6|8)))|(s(0(1|4)|1(0|3|9)|2(0)|3(1)))|(t(0(1|3)|2(1)|3(4|9)))|(w(0(9)|1(3|6)|3(1)|4(1)|5(9)|6(1|9)))|(x(0(9)|1(3|6))))", "match": "regex"}]]], "name": "Undergraduate Courses: Quals, Dips, Certs. No Modules. (SCO)", "apiName": "221317523_undergraduate_courses_quals_dips_certs_no_modules_sco", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10678521287"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "simple"}, {"type": "url", "value": "http:\\/\\/www\\.open\\.ac\\.uk\\/courses\\/qualifications\\/((m(04))|(q(4(1)|5(3)|6(8)|7(3|4|8)|8(0)|9(0)))|(s(0(1|3|4)|1(0|3|9)|2(0)|3(1)))|(t(2(1)))|(w(0(9)))|(x(0(9))))", "match": "regex"}]]], "name": " Undergraduate Courses: Quals, Dips, Certs. No Modules. (ENG)", "apiName": "221317523__undergraduate_courses_quals_dips_certs_no_modules_eng", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10681472562"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/request/prospectus-thank-you?url=/postgraduate/", "match": "substring"}]], "name": "FE - Course specific PG RQAP conversion (thank-you page)", "apiName": "221317523_fe__course_specific_pg_rqap_conversion_thankyou_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10753830687"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/enquiry/course-enquiry?", "match": "simple"}]], "name": "FE - Visit Enquire About This Course Contact Page (fixed)", "apiName": "221317523_fe__visit_enquire_about_this_course_contact_page_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11028060462"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/thank-you-pages/0019-enquire-about-course-thank-you?", "match": "simple"}]], "name": "FE - Enquire About This Course Submission", "apiName": "221317523_fe__enquire_about_this_course_submission", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11033580486"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/account/createaccount-error", "match": "simple"}]], "name": "FE - Create Account Error Page", "apiName": "221317523_fe__create_account_error_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11039333486"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "^(https\\:\\/\\/msds\\.open\\.ac\\.uk\\/signon\\/SAMSDefault\\/SAMS001\\_Default\\.aspx(.*))", "match": "regex"}]], "name": "FE - Sign in page: Sign in / Create an Account (SAMS sign in page) - (for 066)", "apiName": "221317523_fe__page_sign_in__create_an_account_sams_sign_in_page_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11070790227"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/account/createaccount-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0048-create-account-a-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0049-create-account-b-thank-you", "match": "simple"}]], "name": "FE - Visits to create account thank-you page (via normal routes and shortlisting)", "apiName": "221317523_fe__visits_to_create_account_thankyou_page_normal_rout", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11181922629"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/account/createaccount", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0021-time-planner-save", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0020-entry-diagnostic-save", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0010-finance-finder-save", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0048-create-account-a", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0049-create-account-b", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0050-create-account-c", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0051-create-account-d", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0052-create-account-e", "match": "simple"}]], "name": "FE - All create account submission forms (FE_066)", "apiName": "221317523_fe__all_create_account_submission_forms_fe_066", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11183883254"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^(https?:\\/\\/www\\.open\\.ac\\.uk\\/account\\/createaccount)", "match": "regex"}, {"type": "url", "value": "^https\\:\\/\\/www\\.open\\.ac\\.uk\\/request\\/marketing-forms\\/0048-create-account-a(.*)", "match": "regex"}], ["not", ["or", {"type": "url", "value": "AddToShortList=true", "match": "substring"}]]], "name": "FE - Create Account page - via sign-in header only (original&variation) [for 066]", "apiName": "221317523_fe__create_account_page__via_signin_header_only_for_06", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11387555336"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/request/prospectus-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/contact/thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/callback-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/account/createaccount-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0023-enquire-about-module-thank-you.aspx", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0024-enquire-about-module-thank-you.aspx", "match": "substring"}, {"type": "url", "value": "https://www.open.ac.uk/request/thank-you-pages/0019-enquire-about-course-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0048-create-account-a-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0049-create-account-b-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0021-time-planner-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0050-create-account-c-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0020-entry-diagnostic-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0051-create-account-d-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0010-finance-finder-thank-you", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request/thank-you-pages/0052-create-account-e-thank-you", "match": "substring"}]], "name": "FE - Roll-up formal prospect conversion with account creation V1.4 - excludes add to study plan + includes new UG & PG module enquiries, and conversions via tools", "apiName": "221317523_fe__rollup_formal_prospect_conversion_with_account_c_2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11387593198"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/research/", "match": "simple"}]], "name": "FE - Visit Research Homepage", "apiName": "221317523_fe__visit_reserach_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11402080028"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/new", "match": "simple"}]], "name": "FE - Contact page (UG & PG)", "apiName": "221317523_url_targeting_for_fe_067_contact_forms", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11407013230"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/request/marketing-forms/logo-only-header/0059-qualification-registration-v5-uk.aspx", "match": "simple"}], ["or", {"type": "url", "value": "http://www-acct.open.ac.uk/request/marketing-forms/logo-only-header/0059-qualification-registration-v5-uk.aspx", "match": "simple"}]], "name": "FE - Outis 5 - Registration Form", "apiName": "221317523_fe__outis_5__registration_form", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11414858417"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/request/thank-you-pages/0059-qualification-registration-thank-you.aspx", "match": "substring"}], ["or", {"type": "url", "value": "http://www-acct.open.ac.uk/request/thank-you-pages/0059-qualification-registration-thank-you.aspx", "match": "substring"}]], "name": "FE - Outis 5 - Thank You Page", "apiName": "221317523_fe__outis_5__thank_you_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11416747698"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/about/main/", "match": "simple"}]], "name": "FE - Visit About Homepage", "apiName": "221317523_fe__visit_about_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11420544937"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://ounews.co/", "match": "simple"}]], "name": "FE - Visit News Homepage", "apiName": "221317523_fe__visit_news_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11430204434"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": ".*\\/outis\\/1bd\\/o1bdHomePage\\.asp\\?Qual\\=(Q01|Q07|Q11|Q15|Q43|Q45|Q61|Q62|Q62-CNET|Q62-CSOFT|Q62-SOFT|Q67|Q67-CITB|Q67-CITD|Q67-CITM|Q67-CITP|Q67-CITS|Q77|Q79|Q82|Q83|Q84|Q85|Q86|Q88|Q91|Q91-ACC|Q91-EC|Q91-IE|Q91-LP|Q91-MAR|Q92|Q96|Q97|Q98|Q99|R21|R23|R23-CRIM|R23-ECON|R23-GEO|R23-POL|R23-PSY|R23-REL|R23-SOC|R30|T06|T12|T13|T13-CITB|T13-CITD|T13-CITM|T13-CITP|T13-CITS|T22|T23|T24|T25|T27|T28|T32|T36|W11|W15|W36|W42|W42-CITB|W42-CITD|W42-CITM|W42-CITP|W42-CITS|W45|W49|W51|W52|W57|W58|W62|W63|W64|W65|W66|W67|W68|W71|X11|X15)\\&", "match": "regex"}]], "name": "FE - Outis 5 - Outis Page 1 - targeting for test FE_0232_OUTIS_Uplift_Test", "apiName": "221317523_fe__ouis_page_1__targeting_for_test_fe_0231_outis_upli", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11434179010"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": ".*\\/courses\\/registration\\-check\\?pid\\=(Q01|Q07|Q11|Q15|Q23|Q43|Q45|Q61|Q62|Q62/-CNET|Q62/-CSOFT|Q62/-SOFT|Q67|Q67/-CITB|Q67/-CITD|Q67/-CITM|Q67/-CITP|Q67/-CITS|Q76|Q77|Q79|Q82|Q83|Q84|Q85|Q86|Q89|Q91|Q91/-ACC|Q91/-EC|Q91/-IE|Q91/-LP|Q91/-MAR|Q92|Q94|Q96|Q97|Q98|Q99|R21|R23|R23/-CRIM|R23/-ECON|R23/-GEO|R23/-POL|R23/-PSY|R23/-REL|R23/-SOC|R30|R38|R45|R46|T05|T06|T12|T13|T13/-CITB|T13/-CITD|T13/-CITM|T13/-CITP|T13/-CITS|T21|T22|T23|T24|T26|T27|T28|T32|T36|T37|T42|T43|W07|W11|W15|W36|W42|W42/-CITB|W42/-CITD|W42/-CITM|W42/-CITP|W42/-CITS|W45|W50|W51|W52|W57|W58|W62|W63|W64|W65|W66|W67|W68|W71|W73|W77|W78|X11|X15)\\&", "match": "regex"}]], "name": "FE - Outis 5 - Reg Checklist Pages for test FE_0232_OUTIS_Uplift_Test", "apiName": "221317523_fe__reg_checklist_pages_for_test_fe_0231_outis_uplift_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11451720019"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/do-it", "match": "simple"}]], "name": "FE - Visit Page: Can I do it?", "apiName": "221317523_fe__visit_page_can_i_do_it", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11482921325"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/what-study-like", "match": "simple"}]], "name": "FE - Visit Page: What is it like to study? (/courses/what-study-like)", "apiName": "221317523_fe__visit_page_what_is_it_like_to_study_courseswhatstu", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11488552225"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses", "match": "simple"}]], "name": "FE - Courses homepage (/courses)", "apiName": "221317523_fe__courses_homepage_courses", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11504402029"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "0055-qualification-registration-v4-uk", "match": "substring"}, {"type": "url", "value": "\\/outis\\/1bd\\/o1bdHomePage\\.asp\\?Qual\\=", "match": "regex"}]], "name": "FE - User viewed OUTIS 4 registration page (includes original, or the newly tested page on OUTIS 4)", "apiName": "221317523_fe__user_viewed_outis_4_registration_page_includes_ori", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11508187355"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/apply", "match": "simple"}]], "name": "FE - Visit Page: Apply (/courses/apply)", "apiName": "221317523_fe__visit_page_apply_coursesapply", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11510141167"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/thank-you-pages/0053-wales-registration-form-thank-you.aspx", "match": "simple"}]], "name": "FE - Welsh OUTIS registration conversions (view thank-you page after Welsh OUTIS)", "apiName": "221317523_fe__welsh_outis_registration_conversions_view_thankyou", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11511172940"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/thank-you-pages/0055-qualification-registration-thank-you.aspx", "match": "simple"}]], "name": "FE - OUTIS 4 conversions - Visits to Registration confirmation page - via new OUTIS 4 reg page", "apiName": "221317523_fe__outis_4_conversions__visits_to_registration_confir", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11548490068"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/business/", "match": "simple"}]], "name": "FE - Visit Page: Business and Apprenticeships", "apiName": "221317523_fe__visit_page_business_and_apprenticeships", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11554480003"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/callback", "match": "exact"}], ["or", {"type": "url", "value": "https://www.open.ac.uk/request/callback.aspx", "match": "simple"}]], "name": "FE - Request a call back page (UG only)", "apiName": "221317523_fe__request_a_call_back_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11572762165"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/new?soq=6", "match": "exact"}]], "name": "FE - PG Contact page", "apiName": "221317523_fe__pg_contact_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11605410706"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/marketing-forms/0053-wales-registration-form.aspx", "match": "simple"}]], "name": "FE - Visit Welsh OUTIS registration page", "apiName": "221317523_fe__visit_welsh_outis_registration_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11620330647"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk", "match": "simple"}, {"type": "url", "value": "www.open.ac.uk/courses", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/postgraduate", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/contact", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/account", "match": "substring"}, {"type": "url", "value": "www.open.ac.uk/request", "match": "substring"}, {"type": "url", "value": "msds.open.ac.uk/signon/SAMSDefault", "match": "substring"}, {"type": "url", "value": "search.open.ac.uk/public/search/results", "match": "simple"}], ["or", {"type": "url", "value": "www-live.open.ac.uk/courses", "match": "substring"}, {"type": "url", "value": "www-live.open.ac.uk/postgraduate", "match": "substring"}, {"type": "url", "value": "www-live.open.ac.uk/contact", "match": "substring"}, {"type": "url", "value": "www-live.open.ac.uk/account", "match": "substring"}, {"type": "url", "value": "www-live.open.ac.uk/request", "match": "substring"}]], "name": "FE_48_Mobile_Navigation - Targeting ", "apiName": "221317523_url_targeting_for_fe_48_mobile_navigation_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11635102799"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/thank-you", "match": "simple"}], ["not", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/thank-you-pages/0019-enquire-about-course-thank-you", "match": "simple"}]]], "name": "FE - Roll-up contact form submissions for test 067 (roll-up of contact forms: UG/PG email)", "apiName": "221317523_rollup_contact_form_submissions_rollup_of_four_forms_u", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11705921795"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/new", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/new?soq=6", "match": "substring"}]]], "name": "FE - UG Contact form page", "apiName": "221317523_fe__ug_contact_form_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11795521588"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/callback", "match": "simple"}]], "name": "FE - Request a call back page (RQACB)", "apiName": "221317523_fe__request_a_call_back_page_rqacb", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11797363105"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/new", "match": "simple"}], ["or", {"type": "url", "value": "https://www.open.ac.uk/request/callback", "match": "simple"}]], "name": "FE - FE_067_Contact_Forms Pages - Page goal tracking (UG, PG & RQACallBack)", "apiName": "221317523_fe__fe_067_contact_forms_pages__page_goal_tracking_ug_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11818201558"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http:\\/\\/www\\.open\\.ac\\.uk\\/courses\\/qualifications\\/(m04|q41|q73|q74|s01|s04|s10|s13|s19|s20|s31|w09|x09|q32|q42|q50|q68|q78|q80|q90|t01|t34|w16|x16)", "match": "regex"}]], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "exact"}]], ["not", ["or", {"type": "url", "value": "/details/", "match": "substring"}]]], "name": "FE - Page targeting for FE_80_Course_Summary_Box (Select UG qual pages)", "apiName": "221317523_fe__page_targeting_for_fe_80_course_summary_box", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11822201880"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "http://www.open.ac.uk/", "match": "exact"}, {"type": "url", "value": "http://www.open.ac.uk/courses/choose/ppcgeneric", "match": "exact"}, {"type": "url", "value": "http://www.open.ac.uk/postgraduate/qualifications/", "match": "substring"}, {"type": "url", "value": "http://www.open.ac.uk/courses/", "match": "exact"}, {"type": "url", "value": "http://www.open.ac.uk/postgraduate/", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/qualifications/", "match": "exact"}]]], "name": "FE -  Countdown Banners Nov 2018 - Pages with banners", "apiName": "221317523_fe___countdown_banners_nov_2018__pages_with_banners", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12105863704"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding", "match": "simple"}]], "name": "FE - Fees and Funding page for FE_060", "apiName": "221317523_fees_and_funding", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12170365081"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=usab", "match": "exact"}]], "name": "FE - RQAP - UG only (request/prospectus?catcode=usab)", "apiName": "221317523_rqap__ug_only_requestprospectuscatcodeusab", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12179518383"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=", "match": "simple"}], ["not", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus", "match": "exact"}, {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=usab", "match": "exact"}, {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=psab", "match": "exact"}]]], "name": "FE - RQAP - single & groups of prospectuses (e.g. ?catcode=q01 & ?catcode=ahu)", "apiName": "221317523_rqap__single__groups_of_prospectuses_eg_catcodeq01__ca", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12187438296"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus", "match": "exact"}]], "name": "FE - RQAP - General - UG & PG  (request/prospectus)", "apiName": "221317523_rqap__general__ug__pg__requestprospectus", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12240083498"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.open.ac.uk/request/prospectus?catcode=psab", "match": "exact"}]], "name": "FE - RQAP - PG only (request/prospectus?catcode=psab)", "apiName": "221317523_rqap__pg_only_requestprospectuscatcodepsab", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12258081838"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/request/callback-error", "match": "simple"}]], "name": "FE - Request a call-back error page (www.open.ac.uk/request/callback-error) for test 067", "apiName": "221317523_fe__request_a_callback_error_page_wwwopenacukrequestca", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12828090009"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/contact/error", "match": "simple"}]], "name": "FE - Contact error page (www.open.ac.uk/contact/error) for test 067", "apiName": "221317523_fe__contact_page_error_wwwopenacukcontacterror_for_tes", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12838680439"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/account/error-no-pi", "match": "simple"}]], "name": "FE - Error no PI page (www.open.ac.uk/account/error-no-pi) for test 067", "apiName": "221317523_fe__error_no_pi_page_wwwopenacukaccounterrornopi_for_t", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12852390151"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/credit-debit-card", "match": "simple"}]], "name": "FE - Visits to funding option page: Credit or debit card (/courses/fees-and-funding/credit-debit-card)", "apiName": "221317523_fe__visits_to_funding_option_page_credit_or_debit_card", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12997720022"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/mixed-payments", "match": "simple"}]], "name": "FE - Visits to funding option page: Mixed payments (/courses/fees-and-funding/mixed-payments)", "apiName": "221317523_fe__visits_to_funding_option_page_mixed_payments_cours", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12997930036"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/loan-england-finance", "match": "simple"}]], "name": "FE - Visits to funding option page: Tuition fee loan (courses/fees-and-funding/loan-england-finance)", "apiName": "221317523_fe__visits_to_funding_option_page_tuition_fee_loan_cou", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12999950010"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/enhanced-learning-credits", "match": "simple"}]], "name": "FE - Visits to funding option page: Enhanced learning credits (/courses/fees-and-funding/enhanced-learning-credits)", "apiName": "221317523_fe__visits_to_funding_option_page_enhanced_learning_cr", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12999970014"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.open.ac.uk/courses/find", "match": "simple"}]], "name": "OU - Course finder no results page (UG)", "apiName": "221317523_ou__course_finder_no_results_page_ug", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13004510383"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/loan-england-finance", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/ousba", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/employer-sponsorship", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/credit-debit-card", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/enhanced-learning-credits", "match": "simple"}, {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/mixed-payments", "match": "simple"}]], "name": "FE -  Roll-up visits to all six funding option pages", "apiName": "221317523_fe___rollup_visits_to_all_six_funding_option_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13005590024"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/finance-finder", "match": "simple"}]], "name": "FE - Visit Finance Finder Page (/courses/fees-and-funding/finance-finder)", "apiName": "221317523_fe__visit_finance_finder_page_coursesfeesandfundingfin", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13005660009"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/ousba", "match": "simple"}]], "name": "FE - Visits to funding option page: OUSBA (/courses/fees-and-funding/ousba)", "apiName": "221317523_fe__visits_to_funding_option_page_ousba_coursesfeesand", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13005660015"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/courses/fees-and-funding/employer-sponsorship", "match": "simple"}]], "name": "FE - Visits to funding option page: Employer sponsorship (courses/fees-and-funding/employer-sponsorship)", "apiName": "221317523_fe__visits_to_funding_option_page_employer_sponsorship", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13020850022"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "http://www.open.ac.uk/contact/thank-you", "match": "simple"}, {"type": "url", "value": "https://www.open.ac.uk/request/callback-thank-you", "match": "simple"}]], "name": "FE - Roll-up contact form submissions (roll-up of three forms, UG/PG email and RQACallBack)", "apiName": "221317523_fe__rollup_contact_form_submissions_rollup_of_three_fo", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13131720255"}], "projectId": "221317523", "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('10793941872', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['10793941872'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            var decisionString = window.optimizely.get('state').getDecisionString({

 campaignId: campaignId,

 shouldCleanString: true

});

window.CE_SNAPSHOT_NAME = decisionString;
          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['10793941872'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        var decisionString = window.optimizely.get('state').getDecisionString({

 campaignId: campaignId,

 shouldCleanString: true

});

window.CE_SNAPSHOT_NAME = decisionString;
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}], "namespace": "221317523", "tagGroups": [], "integrationSettings": [], "interestGroups": [], "dimensions": [{"segmentId": null, "id": "10306026661", "apiName": "RQAP_form", "name": "RQAP form"}, {"segmentId": null, "id": "10752091009", "apiName": "Viewed_Change_country_CTA_button", "name": "Viewed 'Change country' CTA button "}, {"segmentId": null, "id": "10754920885", "apiName": "Viewed_any_level_2_priority_button", "name": "Viewed any level 2 priority button"}, {"segmentId": null, "id": "10755531015", "apiName": "Viewed_any_level_1_priority_button", "name": "Viewed any level 1 priority button"}, {"segmentId": null, "id": "10755820922", "apiName": "Viewed_postgraduate_homepage", "name": "Viewed postgraduate homepage"}, {"segmentId": null, "id": "10755940391", "apiName": "Viewed_course_search_submit_button_on_homepage", "name": "Viewed course search submit button on homepage"}, {"segmentId": null, "id": "10756370616", "apiName": "Viewed_Learning_with_us_button", "name": "Viewed 'Learning with us' button"}, {"segmentId": null, "id": "10756610580", "apiName": "Viewed_Other_enquiry_tab_on_Contact_page", "name": "Viewed 'Other enquiry' tab on Contact page"}, {"segmentId": null, "id": "10756750408", "apiName": "Viewed_PG_enquiries_tab_on_Contact_page", "name": "Viewed PG enquiries tab on Contact page"}, {"segmentId": null, "id": "10756790162", "apiName": "Viewed_OU_Student_Enquiry_Tab_on_Contact_page", "name": "Viewed OU Student Enquiry Tab on Contact page"}, {"segmentId": null, "id": "10757160219", "apiName": "Viewed_any_level_3_priority_button", "name": "Viewed any level 3 priority button"}, {"segmentId": null, "id": "10757680785", "apiName": "Viewed_Use_our_Finance_Finder_button", "name": "Viewed 'Use our Finance Finder' button"}, {"segmentId": null, "id": "10757790574", "apiName": "Viewed_course_search_submit_button_from_search_box", "name": "Viewed course search submit button from search box in footer"}, {"segmentId": null, "id": "10758800227", "apiName": "Viewed_any_CTA_button_in_a_hero_banner", "name": "Viewed any CTA button in a hero banner"}, {"segmentId": null, "id": "10759250434", "apiName": "Viewed_PG_qual_pages", "name": "Viewed PG qual pages"}, {"segmentId": null, "id": "10761370572", "apiName": "Viewed_UG_enquiries_tab_on_Contact_page", "name": "Viewed UG enquiries tab on Contact page"}, {"segmentId": null, "id": "10762390684", "apiName": "Viewed_a_UG_or_PG_module_page", "name": "Viewed a UG or PG module page"}, {"segmentId": null, "id": "10762550233", "apiName": "Viewed_UG_Qual_Pages", "name": "Viewed UG Qual Pages"}, {"segmentId": null, "id": "10763180275", "apiName": "Viewed_when_to_apply_button", "name": "Viewed 'when to apply' button"}, {"segmentId": null, "id": "10763490657", "apiName": "Viewed_Previous_Study_Checker_button", "name": "Viewed 'Previous Study Checker' button on credit transfer page"}, {"segmentId": null, "id": "12117166294", "apiName": "Country", "name": "Country"}, {"segmentId": null, "id": "12383290427", "apiName": "StudentType", "name": "StudentType"}, {"segmentId": null, "id": "12818990108", "apiName": "ContactType", "name": "Contact Type"}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "fetest", "match": "exact"}], ["or", {"value": "true", "type": "query", "name": "fetest", "match": "exact"}]]], "id": "4553920430", "name": "Fresh Egg Test Cookie or Query String"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "^137\\.108\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^172\\.55\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^194\\.66\\.(12[89]|1[3-5][0-9])\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^194\\.168\\.32\\.33$|^194\\.168\\.32\\.0$", "type": "ip", "name": null, "match": "regex"}]]], ["or", ["not", ["or", {"value": "ie9", "type": "browser_version", "name": null, "match": null}]]], ["or", ["not", ["or", {"value": "ie10", "type": "browser_version", "name": null, "match": null}]]], ["or", ["not", ["or", {"value": "ie8", "type": "browser_version", "name": null, "match": null}]]]], "id": "6284350012", "name": "Excluding: OU & FE Traffic + IE 8-10"}, {"conditions": ["and", ["or", ["or", {"value": "EN|GB", "type": "cookies", "name": "OU_CountryCode", "match": "exact"}]], ["or", ["or", {"value": "08:00_20:00_monday,tuesday,wednesday,thursday,friday", "type": "time_and_day", "name": null, "match": null}], ["or", {"value": "09:00_17:00_saturday", "type": "time_and_day", "name": null, "match": null}]]], "id": "9154430636", "name": "OU England country cookie and webchat hours"}, {"conditions": ["and", ["or", ["or", {"value": "EN|GB", "type": "cookies", "name": "OU_CountryCode", "match": "exact"}, {"value": "NI|GB", "type": "cookies", "name": "OU_CountryCode", "match": "exact"}, {"value": "SC|GB", "type": "cookies", "name": "OU_CountryCode", "match": "exact"}, {"value": "WA|GB", "type": "cookies", "name": "OU_CountryCode", "match": "exact"}]]], "id": "9431070631", "name": "ONLY: Eng, Scot, Wales & N.Ireland"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "ie9", "type": "browser_version", "name": null, "match": null}, {"value": "ie8", "type": "browser_version", "name": null, "match": null}, {"value": "ie10", "type": "browser_version", "name": null, "match": null}]]], ["or", ["or", {"value": "EN|GB", "type": "cookies", "name": "OU_CountryCode", "match": "exact"}]], ["or", ["not", ["or", {"value": "^137\\.108\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^172\\.55\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^194\\.66\\.(12[89]|1[3-5][0-9])\\.([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^194\\.168\\.32\\.33$|^194\\.168\\.32\\.0$", "type": "ip", "name": null, "match": "regex"}]]]], "id": "10758870617", "name": "Exclude IE 8-10 and OU/FE traffic & only England cookie"}], "anonymizeIP": true, "projectJS": function(){/* DOM Mutation Observer helper v2 */
waitForElement = function(selector, fn) {
  // If Mutation Observers are available
  if (window.MutationObserver || window.WebKitMutationObserver) {
    var listeners = [],
      doc = window.document,
      MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
      observer;
    // Store the selector and callback to be monitored
    listeners.push({
      selector: selector,
      fn: fn
    });

    function check() {
      // Check the DOM for elements matching a stored selector
      for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
        listener = listeners[i];
        // Query for elements matching the specified selector
        elements = optimizely.$(listener.selector);

        for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
          element = elements[j];
          // Make sure the callback isn't invoked with the 
          // same element more than once
          if (!element.__optimizelyTreated) {
            element.__optimizelyTreated = true;

            // Invoke the callback with the element
            listener.fn.call(element, element);
          }
        }
      }
    }
    if (!observer) {
      // Watch for changes in the document
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // Check if the element is currently in the DOM
    check();
  }

};
}, "visitorAttributes": [], "accountId": "221317523", "events": [{"category": "other", "name": "FE - User engaged with shortlisted course in myaccount", "eventType": "click", "viewId": "8934492724", "apiName": "221317523_fe__engagement_on_shortlist", "id": "9728967768", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='http://www.open.ac.uk/courses/qualifications/'],  a[href^='/courses/do-it/ready-for-success'],  a[href^='http://www.open.ac.uk/courses/courses/time-planner/'],  a[href^='/courses/registration-check?pid=']"}}, {"category": "other", "name": "FE - Click Save to Shortlist in Sticky Bar", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_fe__click_save_to_shortlist_in_sticky_bar", "id": "9729445783", "eventFilter": {"filterType": "target_selector", "selector": "[id^='stickyNavAddToShortList'] "}}, {"category": "other", "name": "Click submit on form - to create account - via add to study plan", "eventType": "click", "viewId": "9738194260", "apiName": "221317523_click_submit_on_form__to_create_account__via_add_to_st", "id": "9731274389", "eventFilter": {"filterType": "target_selector", "selector": "[id^='btnSubmit'] "}}, {"category": "other", "name": "FE - Rollup - Click Add to Study Plan on Course page (btn or link)", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_fe__rollup__click_add_to_study_plan_on_course_page", "id": "9731632966", "eventFilter": {"filterType": "target_selector", "selector": "[id^='stickyNavAddToShortList'], [id^='factsBoxAddToShortList'] "}}, {"category": "other", "name": "FE - Click Save to Shortlist via Course Summary Box", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_fe__click_save_to_study_plan_via_course_summary_box", "id": "9738392450", "eventFilter": {"filterType": "target_selector", "selector": "[id^='factsBoxAddToShortList'] "}}, {"category": "other", "name": "FE-Click-Qual-Links", "eventType": "click", "viewId": "10022950280", "apiName": "221317523_feclickquallinks", "id": "9863788056", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/courses/qualifications/']"}}, {"category": "other", "name": "FE-Click-Module-Or-Short-Course", "eventType": "click", "viewId": "10022950280", "apiName": "221317523_feclickmoduleorshortcourse", "id": "9873378448", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/courses/modules/'], a[href^='/courses/short-courses/']"}}, {"category": "other", "name": "FE-Rollup-Click-Qual-Mod-Or-Short-Course", "eventType": "click", "viewId": "10022950280", "apiName": "221317523_ferollupclickqualmodorshortcourse", "id": "10022880637", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/courses/modules/'], a[href^='/courses/short-courses/'], a[href^='/courses/qualifications/']"}}, {"category": "other", "name": "FE - Click Qual Page UG Sticky CTA - Prospectus CTA", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__ug_sticky_cta__prospectus_cta", "id": "10186088939", "eventFilter": {"filterType": "target_selector", "selector": ".int-sticky-cta.stickyItem .product-qual-prospectus-request-sticky-nav"}}, {"category": "other", "name": "FE - Click Tabs panel form footer CTA", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__tabs_panel_form_footer_cta", "id": "10190049612", "eventFilter": {"filterType": "target_selector", "selector": "#ou-courses-tabs .panels .btnSave .int-form__footer input"}}, {"category": "other", "name": "FE - Click CTA button within Hero Banner", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__cta_within_hero_banner", "id": "10235128411", "eventFilter": {"filterType": "target_selector", "selector": ".int-hero.int-image .int-button"}}, {"category": "other", "name": "FE - Click Course Search Submit CTA Button from Search Box", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__course_search_submit_cta", "id": "10239054726", "eventFilter": {"filterType": "target_selector", "selector": ".int-form__course-search .searchBoxButton .int-button"}}, {"category": "other", "name": "FE - Click any 'Need More Information' CTA Button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__need_more_information_cta", "id": "10240354484", "eventFilter": {"filterType": "target_selector", "selector": ".int-promo.int-cta .int-notice-content .int-cta-link"}}, {"category": "other", "name": "FE - click on course search button", "eventType": "click", "viewId": "10022950280", "apiName": "221317523_fe__click_on_course_search_button", "id": "10241686740", "eventFilter": {"filterType": "target_selector", "selector": "#p_lt_ctl02_pageplaceholder_p_lt_ctl02_OU_Search_btnSearch"}}, {"category": "other", "name": "FE - Click Qual Page UG Sticky CTA  - Shortlist CTA", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__ug_sticky_cta___shortlist_cta", "id": "10242813412", "eventFilter": {"filterType": "target_selector", "selector": "#stickyNavAddToShortList"}}, {"category": "other", "name": "FE - Click Cookie CTA Button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__cookie_cta", "id": "10247533259", "eventFilter": {"filterType": "target_selector", "selector": "#ou-cookies-bar-button"}}, {"category": "other", "name": "FE - Rollup - Click Any Button in Qual Page Sticky CTA Bar", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__rollup__click_a_button_in_sticky_cta_bar", "id": "10249484567", "eventFilter": {"filterType": "target_selector", "selector": ".int-sticky-cta.stickyItem #stickyNavAddToShortList, .int-sticky-cta.stickyItem .product-qual-prospectus-request-sticky-nav, .int-sticky-cta.stickyItem .fe-register-course"}}, {"category": "other", "name": "FE - Click Prospectus CTA in Qual Page Footer", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__prospectus_cta", "id": "10250983901", "eventFilter": {"filterType": "target_selector", "selector": ".int-notice.int-prospectus .product-qual-prospectus-request"}}, {"category": "other", "name": "FE - Click Tabs panel button inside .int-button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__tabs_panel_button_inside_intbutton", "id": "10276462609", "eventFilter": {"filterType": "target_selector", "selector": "#ou-courses-tabs .panels .int-button"}}, {"category": "other", "name": "FE - Click Change Country CTA Button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__change_country_cta", "id": "10278490951", "eventFilter": {"filterType": "target_selector", "selector": ".change-country-link"}}, {"category": "other", "name": "FE - Click Contact Page > Other Enq (research, employer, media enquiries)", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__other_enq_research_employer_media_en", "id": "10282265532", "eventFilter": {"filterType": "target_selector", "selector": "#other-enquiries > div.int-row.int-flex > div:nth-child(1) > div > a, #other-enquiries > div.int-row.int-flex > div:nth-child(2) > div > a, #other-enquiries > div.int-row.int-flex > div:nth-child(3) > div > a"}}, {"category": "other", "name": "FE - Click Course Search Submit (From Homepage) CTA Button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__course_search_submit_from_homepage_cta", "id": "10282740883", "eventFilter": {"filterType": "target_selector", "selector": ".fe-hero #srchbtn"}}, {"category": "other", "name": "FE - Click Contact Page > OU Student Enq > Non primary CTA (new student, PG, research, employer, media enq)", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__ou_student_enq__non_primary_cta_new_", "id": "10286573634", "eventFilter": {"filterType": "target_selector", "selector": "#ou-student-enquiries > div:nth-child(2) > div:nth-child(1) > div > a, #ou-student-enquiries > div:nth-child(2) > div:nth-child(2) > div > a, #ou-student-enquiries > div:nth-child(2) > div:nth-child(3) > div > a, #ou-student-enquiries > div:nth-child(3) > div:nth-child(1) > div > a, #ou-student-enquiries > div:nth-child(3) > div:nth-child(2) > div > a"}}, {"category": "other", "name": "FE - Click Course Summary Sidebar Enquire Button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__course_summary_sidebar_enquire_button", "id": "10286780162", "eventFilter": {"filterType": "target_selector", "selector": ".int-quick-facts .int-enquire-button .int-button"}}, {"category": "other", "name": "FE - Click Courses > Apply > Credit Transfer > Previous Study Checker CTA Button", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__courses__apply__credit_transfer__previous_study_ch", "id": "10289612561", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div.country-changer-container > div > div.int-container.fe-cta-featured > div > div.int-grid8 > div > div > a"}}, {"category": "other", "name": "FE - Click Tabs Panel Nav Button on Qual Pages", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__tabs_panel_nav_button", "id": "10289890362", "eventFilter": {"filterType": "target_selector", "selector": "#ou-courses-tabs .tabNavButton"}}, {"category": "other", "name": "FE - Click Qual Page UG Sticky CTA - Register CTA", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__ug_sticky_cta__register_cta", "id": "10291340301", "eventFilter": {"filterType": "target_selector", "selector": ".int-sticky-cta.stickyItem .fe-register-course"}}, {"category": "other", "name": "FE - Click Contact Page > PG > Other Enquires CTAs", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__pg__other_enquires_ctas", "id": "10291812389", "eventFilter": {"filterType": "target_selector", "selector": "#postgraduate-enquiries > div:nth-child(4) > div:nth-child(1) > div > a, #postgraduate-enquiries > div:nth-child(4) > div:nth-child(2) > div > a, #postgraduate-enquiries > div:nth-child(4) > div:nth-child(3) > div > a, #postgraduate-enquiries > div:nth-child(5) > div:nth-child(1) > div > a"}}, {"category": "other", "name": "FE - Click Contact Page > OU Student Enq > Contact us from StudentHome", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__ou_student_enq__contact_us_from_stud", "id": "10292811648", "eventFilter": {"filterType": "target_selector", "selector": "#ou-student-enquiries > div.int-promo.int-neutral > a"}}, {"category": "other", "name": "FE - Click Contact Page > UG > Other Enquiries CTAs", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__other_enquiries_ctas", "id": "10293801401", "eventFilter": {"filterType": "target_selector", "selector": "#undergraduate-enquiries > div:nth-child(4) > div:nth-child(1) > div > a, #undergraduate-enquiries > div:nth-child(4) > div:nth-child(2) > div > a, #undergraduate-enquiries > div:nth-child(4) > div:nth-child(3) > div > a, #undergraduate-enquiries > div:nth-child(5) > div:nth-child(1) > div > a, #undergraduate-enquiries > div:nth-child(5) > div:nth-child(2) > div > a"}}, {"category": "other", "name": "FE - Click Contact Page > UG > Email or Request Call Back", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__ug__email_or_request_call_back", "id": "10295910790", "eventFilter": {"filterType": "target_selector", "selector": "#undergraduate-enquiries > div:nth-child(2) > div:nth-child(1) > div > a, #undergraduate-enquiries > div:nth-child(2) > div:nth-child(2) > div > a"}}, {"category": "other", "name": "FE - Click Contact Page > PG > Email us and Request Call Back", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__contact_page__pg__email_us_and_request_call_back", "id": "10307180012", "eventFilter": {"filterType": "target_selector", "selector": "#postgraduate-enquiries > div:nth-child(2) > div:nth-child(1) > div > a, #postgraduate-enquiries > div:nth-child(2) > div:nth-child(2) > div > a"}}, {"category": "other", "name": "FE - click submit button on RQAP form", "eventType": "click", "viewId": "8994090652", "apiName": "221317523_fe__click_submit_button_on_rqap_form_on_fe28", "id": "10365825844", "eventFilter": {"filterType": "target_selector", "selector": "#submitForm"}}, {"category": "other", "name": "FE - Roll-up click level 2 priority buttons", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__rollup_click_level_2_priority_buttons", "id": "10368321308", "eventFilter": {"filterType": "target_selector", "selector": ".fe-btn-two, .fe-btn-two, .int-promo.int-cta .int-notice-content .int-cta-link, .int-form__course-search .searchBoxButton .int-button, .fe-hero #srchbtn, .int-sticky-cta.stickyItem #stickyNavAddToShortList, .int-sticky-cta.stickyItem .fe-register-course, #ou-courses-tabs .panels .btnSave .int-form__footer input, #ou-courses-tabs .panels .int-button, .int-notice.int-prospectus .product-qual-prospectus-request, .int-quick-facts .int-enquire-button .int-button, #undergraduate-enquiries .int-row:nth-child(1) .int-button, #postgraduate-enquiries .int-row:nth-child(1) .int-button, #ou-student-enquiries .int-promo:nth-child(1) .int-button, #other-enquiries .int-row:nth-child(1) .int-button"}}, {"category": "other", "name": "FE - Roll-up click level 3 priority buttons", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__rollup_click_level_3_priority_buttons", "id": "10368612958", "eventFilter": {"filterType": "target_selector", "selector": ".fe-btn-three, #ou-cookies-bar-button, .change-country-link, .oubutton, .int-button-soft-btn, .int-hero.int-image .int-button, #ou-courses-tabs .tabNavButton, #undergraduate-enquiries .int-row:nth-child(2) .int-button, #undergraduate-enquiries .int-row:nth-child(3) .int-button, #postgraduate-enquiries .int-row:nth-child(2) .int-button, #postgraduate-enquiries .int-row:nth-child(3) .int-button, #ou-student-enquiries .int-row:nth-child(1) .int-button, #ou-student-enquiries .int-row:nth-child(2) .int-button, #other-enquiries .int-row:nth-child(2) .int-button, #other-enquiries .int-row:nth-child(3) .int-button, .fe-cta-featured .int-button, .int-accordionContainer .accordion_btn"}}, {"category": "other", "name": "FE - Roll-up click level 1 priority buttons", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__rollup_click_level_1_priority_buttons", "id": "10373351623", "eventFilter": {"filterType": "target_selector", "selector": ".fe-btn-one, .int-sticky-cta.stickyItem .fe-register-course, .int-hero.int-image .int-button, .fe-cta-featured .int-button"}}, {"category": "other", "name": "FE - Click download prospectus PDF link", "eventType": "click", "viewId": "10172483568", "apiName": "221317523_fe__click_download_prospectus_pdf_link", "id": "10396810042", "eventFilter": {"filterType": "target_selector", "selector": "#downloadList a"}}, {"category": "other", "name": "FE - Click email correction hint link", "eventType": "click", "viewId": "10140001547", "apiName": "221317523_fe__click_email_correction_hint_link", "id": "10404582411", "eventFilter": {"filterType": "target_selector", "selector": "#fe-hint .suggestion a"}}, {"category": "other", "name": "FE - Open live chat", "eventType": "click", "viewId": "10468785353", "apiName": "221317523_fe__open_live_chat", "id": "10444725922", "eventFilter": {"filterType": "target_selector", "selector": "body > div.livechat_container > div > div.livechat_button > a"}}, {"category": "other", "name": "FE - Engage with live chat", "eventType": "click", "viewId": "10468785353", "apiName": "221317523_fe__engage_with_live_chat", "id": "10448735655", "eventFilter": {"filterType": "target_selector", "selector": "body > div.livechat_container > span, body > div.livechat_container > div > div.livechat_button > a"}}, {"category": "other", "name": "FE - User clicks Postgraduate tab or accordion ", "eventType": "click", "viewId": "10140001547", "apiName": "221317523_fe__user_clicks_postgraduate_tab_or_accordion_", "id": "10461628906", "eventFilter": {"filterType": "target_selector", "selector": "#ou-courses-tabs > div.tabs > a:nth-child(2), #step1 > fieldset > div > div:nth-child(4) > h3 > a"}}, {"category": "other", "name": "FE - Visits tab: entry requirements or tab: am I ready?", "eventType": "click", "viewId": "10473101194", "apiName": "221317523_fe__visits_tab_entry_requirements_or_tab_am_i_ready", "id": "10470992503", "eventFilter": {"filterType": "target_selector", "selector": "a[href*='#entry-requirements'], a[href$='#am-i-ready']"}}, {"category": "other", "name": "FE - Close live chat", "eventType": "click", "viewId": "10468785353", "apiName": "221317523_fe__close_live_chat", "id": "10477462604", "eventFilter": {"filterType": "target_selector", "selector": "body > div.livechat_container > span"}}, {"category": "other", "name": "FE - Click Register on new OUTIS uplift page", "eventType": "click", "viewId": "10477803898", "apiName": "221317523_fe__click_register_on_new_outis_uplift_page", "id": "10553941231", "eventFilter": {"filterType": "target_selector", "selector": ".bizform .btnSubmit-row .btnSubmit"}}, {"category": "other", "name": "FE - Click any register button on UG module page", "eventType": "click", "viewId": "10431260352", "apiName": "221317523_fe__click_any_register_button_on_ug_module_page", "id": "10556625602", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div.stickyParent > div > div > div > a.int-inline.int-button.fe-register-course.scrollLink, #register-cell > a"}}, {"category": "other", "name": "FE - Click any button in CTA sticky bar on UG Module pages", "eventType": "click", "viewId": "10431260352", "apiName": "221317523_fe__click_any_button_in_cta_sticky_bar_on_ug_module_pa", "id": "10562185829", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div.stickyParent > div > div > div > a.int-inline.int-button.fe-register-course.scrollLink, #int-content > div.stickyParent > div > div > div > a.int-inline.int-button.fe-enquire-module, #int-content > div.stickyParent > div > div > div > a.int-inline.int-button.int-secondary.product-qual-prospectus-request-sticky-nav"}}, {"category": "other", "name": "FE - Click main body's register button on UG module page (proceeds to outis)", "eventType": "click", "viewId": "10431260352", "apiName": "221317523_fe__click_main_bodys_register_button_on_ug_module_page", "id": "10582901797", "eventFilter": {"filterType": "target_selector", "selector": "#register-cell > a"}}, {"category": "other", "name": "FE-Click-Module-Link", "eventType": "click", "viewId": "10022950280", "apiName": "221317523_feclickmodulelink", "id": "10631901075", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/courses/modules/']"}}, {"category": "other", "name": "FE - Click navigation link within module tab (e.g. 'on to Am I ready?')", "eventType": "click", "viewId": "10431260352", "apiName": "221317523_fe__click_navigation_link_within_module_tab_eg_on_to_a", "id": "10650300402", "eventFilter": {"filterType": "target_selector", "selector": "div.int-row.fe-tab-nav > div > div > a"}}, {"category": "other", "name": "FE - Fees link from within course summary box - ENG", "eventType": "click", "viewId": "10681472562", "apiName": "221317523_fe__fees_link_from_within_course_summary_box", "id": "10729590306", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div.country-changer-container > header > div.int-container > div:nth-child(1) > div.int-grid4 > div > dl:nth-child(7) > dd:nth-child(4) > a[href='#fees-and-funding']"}}, {"category": "other", "name": "FE - Fees link from within course summary box - SCO", "eventType": "click", "viewId": "10678521287", "apiName": "221317523_fe__fees_link_from_within_course_summary_box_1", "id": "10730030561", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div.country-changer-container > header > div.int-container > div:nth-child(1) > div.int-grid4 > div > dl:nth-child(7) > dd:nth-child(4) > a[href='#fees-and-funding']"}}, {"category": "other", "name": "FE - Fees and Funding Tab or link (SCO)", "eventType": "click", "viewId": "10678521287", "apiName": "221317523_fe_fees_and_funding_tab_or_link_1", "id": "10731410800", "eventFilter": {"filterType": "target_selector", "selector": "a[href='#fees-and-funding']"}}, {"category": "other", "name": "FE - Fees and Funding Tab or link (ENG)", "eventType": "click", "viewId": "10681472562", "apiName": "221317523_fe_fees_and_funding_tab_or_link", "id": "10733080332", "eventFilter": {"filterType": "target_selector", "selector": "a[href='#fees-and-funding']"}}, {"category": "other", "name": "FE - Funding options button (SCO)", "eventType": "click", "viewId": "10678521287", "apiName": "221317523_funding_options_button_2", "id": "10734300974", "eventFilter": {"filterType": "target_selector", "selector": "#p_lt_ctl02_pageplaceholder_p_lt_ctl16_OU_Personal_Pricing_Tool_plcUp_btnSubmit"}}, {"category": "other", "name": "FE - Funding options button (ENG)", "eventType": "click", "viewId": "10681472562", "apiName": "221317523_funding_options_button_1", "id": "10735230140", "eventFilter": {"filterType": "target_selector", "selector": "#p_lt_ctl02_pageplaceholder_p_lt_ctl16_OU_Personal_Pricing_Tool_plcUp_btnSubmit"}}, {"category": "other", "name": "FE - Course enquiry", "eventType": "click", "viewId": "10678521287", "apiName": "221317523_fe__course_enquiry", "id": "10756995172", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/request/enquiry/course-enquiry']"}}, {"category": "other", "name": "FE - Course Enquiry", "eventType": "click", "viewId": "10681472562", "apiName": "221317523_fe__course_enquiry_1", "id": "10785251406", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/request/enquiry/course-enquiry']"}}, {"category": "other", "name": "FE - Click Save to Study Plan CTA In Course Summary Box", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_save_to_study_plan_cta_in_course_summary_box", "id": "10792116848", "eventFilter": {"filterType": "target_selector", "selector": ".int-quick-facts #factsBoxAddToShortList"}}, {"category": "other", "name": "FE - Roll-up - Click on any Request Prospectus CTA Button on Qual Pages", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__rollup__click_on_any_request_prospectus_cta_button", "id": "10792816130", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/request/prospectus'][href*='/courses/qualifications']"}}, {"category": "other", "name": "FE - Click What Study Like > 'Learning With Us' CTA Button in Hero", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_what_study_like__learning_with_us_cta_button", "id": "10800769410", "eventFilter": {"filterType": "target_selector", "selector": ".int-hero a[href='/courses/what-study-like/distance-learning']"}}, {"category": "other", "name": "FE - Click Request Prospectus CTA Button in UG Qual Page Footer", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_request_prospectus_cta_button_in_ug_qual_pag", "id": "10801749496", "eventFilter": {"filterType": "target_selector", "selector": ".int-prospectus a[href^='/request/prospectus']"}}, {"category": "other", "name": "FE - Click Apply > 'When to Apply' CTA Button in Hero", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_apply__when_to_apply_cta_button_in_hero", "id": "10827493785", "eventFilter": {"filterType": "target_selector", "selector": ".int-hero a[href='/courses/apply/key-dates']"}}, {"category": "other", "name": "FE - Click Request Prospectus CTA Button on PG Qual Pages", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_request_prospectus_cta_button_on_pg_qual_pag", "id": "10829253842", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/request/prospectus'][href*='/postgraduate/qualifications/']"}}, {"category": "other", "name": "FE - Roll-up - Click any CTA Button Under Hero Banner on PG Homepage", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__rollup__click_any_cta_button_under_hero_banner_on_", "id": "10830502210", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div.int-container > div > div:nth-child(2) a[href='/postgraduate/atoz'],#int-content > div.int-container > div > div:nth-child(2) a[href='/postgraduate/types'],#int-content > div.int-container > div > div:nth-child(2) a[href='/postgraduate/research-degrees']"}}, {"category": "other", "name": "FE - Click Register CTA button in Qual Page Footer", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_register_cta_button_in_qual_page_footer", "id": "10834781091", "eventFilter": {"filterType": "target_selector", "selector": ".int-form__course-registration a[href^='/courses/registration-check']"}}, {"category": "other", "name": "FE - Click Fees and Funding > 'Use our Finance Finder' CTA Button in Hero", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_fe__click_fees_and_funding__use_our_finance_finder_cta", "id": "10844290238", "eventFilter": {"filterType": "target_selector", "selector": ".int-hero a[href='/courses/fees-and-funding/finance-finder']"}}, {"category": "other", "name": "FE - Click \"Create Account\" button on the SAMS sign-in page", "eventType": "click", "viewId": "11070790227", "apiName": "221317523_fe__click_create_account_button_on_the_sams_signin_pag", "id": "11037802979", "eventFilter": {"filterType": "target_selector", "selector": "#int-content > div > div > div > div:nth-child(2) > a"}}, {"category": "other", "name": "FE-Mobile Navigation Clicks", "eventType": "custom", "viewId": null, "apiName": "FE-Mobile-Click", "id": "11193686314", "eventFilter": null}, {"category": "other", "name": "FE - Create account button clicked", "eventType": "click", "viewId": "11183883254", "apiName": "221317523_fe__create_account_button_clicked", "id": "11196664554", "eventFilter": {"filterType": "target_selector", "selector": ".btn-primary, #btnSubmit"}}, {"category": "other", "name": "FE - Create Account button clicked - via sign-in header only", "eventType": "click", "viewId": "11387555336", "apiName": "221317523_fe__create_account_button_clicked__via_signin_header_o", "id": "11422190679", "eventFilter": {"filterType": "target_selector", "selector": ".btn-primary, #btnSubmit"}}, {"category": "other", "name": "FE - Click submit button on welsh OUTIS registration form", "eventType": "click", "viewId": "11620330647", "apiName": "221317523_fe__click_submit_button_on_welsh_outis_registration_fo", "id": "11500295269", "eventFilter": {"filterType": "target_selector", "selector": "#p_lt_ctl01_OUFormWidget_viewBiz_btnOK"}}, {"category": "other", "name": "FE - Click Register on new OUTIS uplift page - on OUTIS 4", "eventType": "click", "viewId": "11414858417", "apiName": "221317523_fe__click_register_on_new_outis_uplift_page__on_outis_", "id": "11597350282", "eventFilter": {"filterType": "target_selector", "selector": ".bizform .btnSubmit-row .btnSubmit"}}, {"category": "other", "name": "FE - Click/view Course details tab", "eventType": "click", "viewId": "8933435264", "apiName": "221317523_fe__clickview_course_details_tab", "id": "11789870863", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#course-details']"}}, {"category": "other", "name": "FE - Roll-up: Click submit on a contact form (UG, PG, RQACB)", "eventType": "click", "viewId": "11818201558", "apiName": "221317523_fe__rollup_click_submit_on_a_contact_form_ug_pg_rqacb", "id": "11789951901", "eventFilter": {"filterType": "target_selector", "selector": "#btnSendEmail, #btnSendRequest"}}, {"category": "other", "name": "FE - Click any link within Course Summary box on UG Qual pages", "eventType": "click", "viewId": "8933435264", "apiName": "221317523_fe__click_any_link_within_course_summary_box_on_ug_qua", "id": "11801071230", "eventFilter": {"filterType": "target_selector", "selector": "div.fe-int-quick-facts a[href^='#am-i-ready'], div.fe-int-quick-facts a[href^='#entry-requirements'], div.fe-int-quick-facts a[href^='http://www.open.ac.uk/courses/do-it/finding-time'], div.fe-int-quick-facts a[href^='#fees-and-funding'], div.fe-int-quick-facts a[href^='http://www.open.ac.uk/courses/what-study-like/distance-learning'], div.fe-int-quick-facts a[href^='#RegisterForThisCourse'], div.fe-int-quick-facts a[href$='http://www.open.ac.uk/request/enquiry/course-enquiry?CATCODE='], #factsBoxAddToShortList"}}, {"category": "other", "name": "FE - Click submit on UGcontact page", "eventType": "click", "viewId": "11795521588", "apiName": "221317523_fe__click_submit_on_ugcontact_page", "id": "11818312813", "eventFilter": {"filterType": "target_selector", "selector": "#btnSendEmail"}}, {"category": "other", "name": "FE - Click submit on RQACB form", "eventType": "click", "viewId": "11572762165", "apiName": "221317523_fe__click_submit_on_rqacb_form", "id": "11821860486", "eventFilter": {"filterType": "target_selector", "selector": "#btnSendRequest"}}, {"category": "other", "name": "FE - Click Submit on UG or PG contact form", "eventType": "click", "viewId": "11407013230", "apiName": "221317523_fe__click_submit_on_ug_or_pg_contact_form", "id": "11822131469", "eventFilter": {"filterType": "target_selector", "selector": "#btnSendEmail"}}, {"category": "other", "name": "FE - Click submit on PG contact page", "eventType": "click", "viewId": "11605410706", "apiName": "221317523_fe__click_submit_on_pg_contact_page", "id": "11839420382", "eventFilter": {"filterType": "target_selector", "selector": "#btnSendEmail"}}, {"category": "other", "name": "FE - Click \"Enquire about this course\" button within summary box - for pages of FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_enquire_about_this_course_button_within_summ", "id": "11898060495", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='/request/enquiry/course-enquiry']"}}, {"category": "other", "name": "FE - Click Shortlist button in sticky CTA bar, for pages of FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_shortlist_button_in_sticky_cta_bar_for_pages", "id": "11905331150", "eventFilter": {"filterType": "target_selector", "selector": "[id^='stickyNavAddToShortList'] "}}, {"category": "other", "name": "FE - Visits tab: entry requirements or tab: am I ready? on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__visits_tab_entry_requirements_or_tab_am_i_ready_on", "id": "11918981581", "eventFilter": {"filterType": "target_selector", "selector": "a[href*='#entry-requirements'], a[href$='#am-i-ready']"}}, {"category": "other", "name": "FE - Click main body's register button on UG qual page (proceeds to reg check) on pages of FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_main_bodys_register_button_on_ug_qual_page_p", "id": "11919150786", "eventFilter": {"filterType": "target_selector", "selector": "a[href*='/courses/registration-check']"}}, {"category": "other", "name": "FE - Click any link within Course Summary box on FE_80 UG Qual pages", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_any_link_within_course_summary_box_on_ug_q_1", "id": "11922451023", "eventFilter": {"filterType": "target_selector", "selector": "div.fe-int-quick-facts a[href^='#am-i-ready'], div.fe-int-quick-facts a[href^='#entry-requirements'], div.fe-int-quick-facts a[href^='http://www.open.ac.uk/courses/do-it/finding-time'], div.fe-int-quick-facts a[href^='#fees-and-funding'], div.fe-int-quick-facts a[href^='http://www.open.ac.uk/courses/what-study-like/distance-learning'], div.fe-int-quick-facts a[href^='#RegisterForThisCourse'], div.fe-int-quick-facts a[href$='http://www.open.ac.uk/request/enquiry/course-enquiry?CATCODE='], #factsBoxAddToShortList"}}, {"category": "other", "name": "FE - Click/view Course details tab on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__clickview_course_details_tab_on_fe_80", "id": "11924551199", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#course-details']"}}, {"category": "other", "name": "FE - Fees and Funding Tab or link on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__fees_and_funding_tab_or_link_on_fe_80", "id": "11924730005", "eventFilter": {"filterType": "target_selector", "selector": "a[href='#fees-and-funding']"}}, {"category": "other", "name": "FE - Click/view tab: Careers on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__clickview_tab_careers_on_fe_80", "id": "11926680859", "eventFilter": {"filterType": "target_selector", "selector": "a[href*='#careers']"}}, {"category": "other", "name": "FE - Click Request Prospectus from Sticky bar or page body - for pages of FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_request_prospectus_from_sticky_bar_or_page_b", "id": "11928290471", "eventFilter": {"filterType": "target_selector", "selector": "a[href*='/request/prospectus?CATCODE=']"}}, {"category": "other", "name": "Michael: qual page enquire clicks", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_michael_qual_page_enquire_clicks", "id": "12125009712", "eventFilter": {"filterType": "target_selector", "selector": "div.int-enquire-button"}}, {"category": "other", "name": "FE - Click a CTA within a countdown banner (on homepage or course page)", "eventType": "click", "viewId": "12105863704", "apiName": "221317523_fe__click_a_cta_within_a_countdown_banner", "id": "12142545834", "eventFilter": {"filterType": "target_selector", "selector": ".int-countdownBanner a[href^='#RegisterForThisCourse'],  .int-countdownBanner a[href='http://www.open.ac.uk/courses/'], .int-countdownBanner a[href='http://www.open.ac.uk/postgraduate/']"}}, {"category": "other", "name": "Michael: qual page tab clicks", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_michael_qual_page_tab_clicks", "id": "12186619070", "eventFilter": {"filterType": "target_selector", "selector": "div.tabs"}}, {"category": "other", "name": "FE - Click \"Find out if you have enough time to study\" in course summary box on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_find_out_if_you_have_enough_time_to_study_in", "id": "12198295191", "eventFilter": {"filterType": "target_selector", "selector": "div[class^='fe-int-quick-facts'] a[href^='/courses/do-it/finding-time']"}}, {"category": "other", "name": "FE - Click \"See entry requirements\" link in course summary box on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_see_entry_requirements_link_in_course_summar", "id": "12200735685", "eventFilter": {"filterType": "target_selector", "selector": "div[class^='fe-int-quick-facts'] a[href^='#entry-requirements']"}}, {"category": "other", "name": "Michael: qual page ppt clicks", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_michael_qual_page_ppt_clicks", "id": "12210425102", "eventFilter": {"filterType": "target_selector", "selector": "#fees-and-funding label"}}, {"category": "other", "name": "Michael: qual page stage accord clicks", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_michael_qual_page_stage_accord_click", "id": "12215782843", "eventFilter": {"filterType": "target_selector", "selector": "h3.int-toggleTrigger"}}, {"category": "other", "name": "FE - Click \"Distance learning\" on course summary box on FE 80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_distance_learning_on_course_summary_box_on_f", "id": "12245472670", "eventFilter": {"filterType": "target_selector", "selector": "div[class^='fe-int-quick-facts'] a[href^='/courses/what-study-like/distance-learning']"}}, {"category": "other", "name": "Michael: qual page footer reg clicks", "eventType": "click", "viewId": "9732564556", "apiName": "221317523_michael_qual_page_footer_reg_clicks", "id": "12264790388", "eventFilter": {"filterType": "target_selector", "selector": "a.product-qual-register"}}, {"category": "other", "name": "FE - Click \"Register now\" link in course summary box on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_register_now_link_in_course_summary_box_on_f", "id": "12268213999", "eventFilter": {"filterType": "target_selector", "selector": "div[class^='fe-int-quick-facts'] a[href^='#RegisterForThisCourse']"}}, {"category": "other", "name": "FE - Click \"+Shortlist Course\" within course summary box on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_shortlist_course_within_course_summary_box_o", "id": "12288381474", "eventFilter": {"filterType": "target_selector", "selector": "[id^='factsBoxAddToShortList'] "}}, {"category": "other", "name": "FE - Click Welsh accordion on RQAP page", "eventType": "click", "viewId": "12240083498", "apiName": "221317523_fe__click_welsh_accordion_on_rqap_page", "id": "12292401926", "eventFilter": {"filterType": "target_selector", "selector": "#fe-welsh-list > h3 > a"}}, {"category": "other", "name": "FE - Click \"See fees and funding\" on courses summary box on FE_80", "eventType": "click", "viewId": "11822201880", "apiName": "221317523_fe__click_see_fees_and_funding_on_courses_summary_box_", "id": "12294831023", "eventFilter": {"filterType": "target_selector", "selector": "div[class^='fe-int-quick-facts'] a[href^='#fees-and-funding']"}}, {"category": "other", "name": "FE - Click a Welsh language prospectus on any RQAP page", "eventType": "click", "viewId": "10140001547", "apiName": "221317523_fe__click_a_welsh_language_prospectus_on_any_rqap_page", "id": "12307110007", "eventFilter": {"filterType": "target_selector", "selector": "#fe-welsh-list label, input[value*='Welsh']"}}, {"category": "other", "name": "FE - Click any link to the OU News site homepage", "eventType": "click", "viewId": "11635102799", "apiName": "221317523_fe__click_any_link_to_the_ou_news_site_homepage", "id": "12763570100", "eventFilter": {"filterType": "target_selector", "selector": "a[href='http://ounews.co/']"}}, {"category": "other", "name": "OU - email help block link", "eventType": "click", "viewId": "13004510383", "apiName": "221317523_ou__email_help_block_link", "id": "12989630148", "eventFilter": {"filterType": "target_selector", "selector": "#emailhelpblocklink"}}, {"category": "other", "name": "OU - prospectus help block link", "eventType": "click", "viewId": "13004510383", "apiName": "221317523_ou__prospectus_help_block_link", "id": "12991710116", "eventFilter": {"filterType": "target_selector", "selector": "#prospectushelpblocklink"}}, {"category": "other", "name": "OU - call back help block link", "eventType": "click", "viewId": "13004510383", "apiName": "221317523_ou__call_back_help_block_link", "id": "12995140231", "eventFilter": {"filterType": "target_selector", "selector": "#callbackhelpblocklink"}}, {"category": "other", "name": "OU - course finder no results search button", "eventType": "click", "viewId": "13004510383", "apiName": "221317523_ou__course_finder_no_results_search_button", "id": "13001270231", "eventFilter": {"filterType": "target_selector", "selector": ".searchBoxButton > button"}}, {"category": "other", "name": "FE - Navigate to tab (click on tab or the tab footer link): Funding options", "eventType": "click", "viewId": "12170365081", "apiName": "221317523_fe__navigate_to_tab_click_on_funding_options", "id": "13101010291", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#funding-options-tab']"}}, {"category": "other", "name": "FE - Navigate to tab (click on tab or the tab footer link): Advantages of OU study", "eventType": "click", "viewId": "12170365081", "apiName": "221317523_fe__navigate_to_tab_click_on_advantages_of_ou_study", "id": "13101370156", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#advantages-ou-study-tab']"}}, {"category": "other", "name": "FE - Navigate to tab (click on tab or the tab footer link): How much will it cost", "eventType": "click", "viewId": "12170365081", "apiName": "221317523_fe__navigate_click_on_to_tab_how_much_will_it_cost", "id": "13110430145", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#how-much-cost-tab']"}}, {"category": "other", "name": "FE - Navigate to tab (click on tab or the tab footer link): FAQs", "eventType": "click", "viewId": "12170365081", "apiName": "221317523_fe__navigate_to_tab_click_on_faqs", "id": "13118450074", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#faqs-tab']"}}, {"category": "other", "name": "FE - Open live chat - on Fees and Funding page (FE_060)", "eventType": "click", "viewId": "12170365081", "apiName": "221317523_fe__open_live_chat__on_fees_and_funding_page_fe_060", "id": "13131660086", "eventFilter": {"filterType": "target_selector", "selector": "body > div.livechat_container > div > div.livechat_button > a"}}, {"category": "other", "name": "OU - Clicks into search field", "eventType": "click", "viewId": "10197463824", "apiName": "221317523_ou__clicks_into_search_field", "id": "13222590244", "eventFilter": {"filterType": "target_selector", "selector": "input[type=search]"}}, {"category": "other", "name": "FE - Navigate to tab 'how much will it cost?' on FE_060", "eventType": "click", "viewId": "12170365081", "apiName": "221317523_fe__navigate_to_tab_how_much_will_it_cost_on_fe_060", "id": "13780410177", "eventFilter": {"filterType": "target_selector", "selector": "a[href^='#how-much-cost-tab']"}}], "experimental": {"trimPages": false}, "revision": "8481"},h=n(131);if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var g;g=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],g.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(146).setupPreviewGlobal(),n(146).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/221317523.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction("initializeOptimizelyPreview",e);var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),f.addScriptSync(c),n(146).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction("initializeOptimizelyPreview",e),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{i()}catch(e){try{n(145).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(){s();var e=L.getRumData();return e=v.pickBy(e,(function(e){return!v.isUndefined(e)})),a(e)}function r(e){var t=C.getPromise("RUM_FIRST_BEACON");return t?t.then(e):_.makeAsyncRequest("RUM_FIRST_BEACON",e)}function a(e){return v.isEmpty(e)?b.resolve():r((function(){return D.request({url:M,method:"POST",data:e,withCredentials:!0}).then((function(e){return _.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw A.error("POST to client-rum failed:",e),_.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function o(){var e=I.getCurrentScript();if(e)return e.src}function s(){var e={id:L.getRumId(),v:B,account:O.getAccountId(),project:O.getSnippetId()||O.getProjectId(),snippet:O.getSnippetId(),revision:O.getRevision(),clientVersion:"0.116.1",hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=E.getEvents().length}catch(e){A.debug("Unable to get behavior events for RUM:",e)}v.assign(e,u(),d()),T.dispatch(R.SET_RUM_DATA,{data:e})}function u(){var e=w.getGlobal("performance");if(e){var t,n=L.getScriptSrc();try{if(n){A.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;A.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=v.find(a,(function(e){return r.test(e.name)}))}if(t)return v.mapValues(N.ResourceTimingAttributes,(function(e,n){var i=t[n];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===n?i||[]:void 0}))}catch(e){return}}}function c(){try{return!I.querySelector("body")}catch(e){return null}}function l(){try{w.getGlobal("requestAnimationFrame")((function(){var e=L.getRumData().timebase;T.dispatch(R.SET_RUM_DATA,{data:{render:y.now()-(e||0)}})}))}catch(e){return}}function d(){return P.getDurationsFor(v.values(N.RUMPerformanceTimingAttributes))}function f(){var e={numKeys:S.allKeys().length,sizeKeys:S.allKeys().toString().length,sizeValues:S.allValues().toString().length},t=w.getGlobal("performance"),n=t?t.timing:{},i=P.getMarks()||{},r=L.getApiData(),o=L.getDOMObservationData(),s=V.get("state").getActiveExperimentIds(),u=p(L.getScriptSrc()),c=L.getRumData()||{},l=c.extras||{};v.assign(l,{apiCalls:r,DOMObservationData:o,paintTimings:g(),activeExperimentIds:s,numPages:F.getNumberOfPages(),snippet:{scheme:u.scheme,host:u.host,path:u.path},networkInfo:h(),experimental:O.getExperimental()});var d=w.getGlobal("Prototype");d&&!v.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var f=!1;f=!0;var m=k.getFrames();m.length&&(l.xdFramesLoaded=m.length);var _={id:L.getRumId(),v:B,project:O.getSnippetId()||O.getProjectId(),lsMetrics:e,navigationTimings:n,userTimings:i,xd:f,apis:v.keys(r),extras:l};a(_)}function p(e){var t=I.createElement("a");return t.href=e,{host:t.host,scheme:t.protocol.slice(0,-1),path:t.pathname}}function h(){var e=w.getGlobal("navigator");if(e&&e.connection)return v.pick(e.connection,["downlink","rtt","effectiveType"])}function g(){var e=w.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(v.isEmpty(t))return;return v.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var v=n(2),m=n(5),_=n(6),E=n(70),y=n(24),I=n(79),T=n(9),S=n(80).LocalStorage,A=n(23),b=n(12).Promise,w=n(39),D=n(88),R=n(7),N=n(25),x=n(16),C=x.get("stores/async_request"),O=x.get("stores/global"),L=x.get("stores/rum"),P=x.get("stores/performance"),k=x.get("stores/xdomain"),F=x.get("stores/view_data"),V=n(90),M="https://rum.optimizely.com/rum",U=3e3,B="1.0",j=.01;t.initialize=function(){var e,t=m.generate().replace(/-/g,"");e=Math.random()<j;var n=o();e&&(T.dispatch(R.SET_RUM_DATA,{id:t,RumHost:M,inRumSample:e,src:n,data:{id:t,sync:c(),timebase:y.now(),sampleRate:j,url:n}}),l())},t.queueBeacons=function(){return L.getSampleRum()?(I.isLoaded()?w.setTimeout(f,U):w.addEventListener("load",f),new b(function(e,t){w.setTimeout((function(){i().then(e,t)}),U)}).catch((function(e){A.warn("RUM / Error sending data:",e)}))):b.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function h(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function g(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function m(e){return e&&e.Object===Object?e:null}function _(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return hi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function T(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Pn:t,e>-1&&e%1==0&&e<t}function S(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(Ht(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.u=[],this.l=!!t}function R(){}function N(e,t){return C(e,t)&&delete e[t]}function x(e,t){if(Xi){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function C(e,t){return Xi?e[t]!==An:Di.call(e,t)}function O(e,t,n){e[t]=Xi&&n===An?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function P(){this.d={hash:new R,map:Yi?new Yi:[],string:new R}}function k(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Yi?t.map["delete"](e):W(t.map,e)}function F(e){var t=this.d;return Ze(e)?x("string"==typeof e?t.string:t.hash,e):Yi?t.map.get(e):X(t.map,e)}function V(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Yi?t.map.has(e):$(t.map,e)}function M(e,t){var n=this.d;return Ze(e)?O("string"==typeof e?n.string:n.hash,e,t):Yi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new L;++t<n;)this.push(e[t])}function B(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function j(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function G(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function H(){this.d={array:[],map:null}}function z(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function q(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function Y(e){var t=this.d,n=t.array;return n?$(n,e):t.map.has(e)}function K(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():Gi.call(e,n,1),!0}function X(e,t){var n=Q(e,t);return n<0?An:e[n][1]}function $(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(xt(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||xt(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||xt(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&xt(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!Gt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Bn||c==jn;if(fr(e))return xe(e,t);if(c==zn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=$e(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new G);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return Gt(e)?Bi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Ee(t,g(n))),i?(a=s,u=!1):t.length>=wn&&(a=B,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var h=d;h--;)if(t[h]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Pt(o)&&(n||dr(o)||Ot(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Bt(e[t])}))}function he(e,t,n,i,r){return e===t||(null==e||null==t||!Gt(e)&&!Ht(t)?e!==e&&t!==t:ge(e,t,he,n,i,r))}function ge(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Fn,c=Fn;o||(u=xi.call(e),u=u==kn?zn:u),s||(c=xi.call(t),c=c==kn?zn:c);var l=u==zn&&!I(e),d=c==zn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var h=o||Qt(e)?ze(e,t,n,i,r,a):qe(e,t,u,n,i,r,a);return a.pop(),h}if(!(r&On)){var g=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(g||v){var h=n(g?e.value():e,v?t.value():t,i,r,a);return a.pop(),h}}if(!f)return!1;var h=Ye(e,t,n,i,r,a);return a.pop(),h}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?ye:be)(e)}function me(e){return zi(Object(e))}function _e(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&he(e[r],n[r],An,Cn|On)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),Gt(o))r||(r=new G),Te(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Te(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Pt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||Ot(u)?Ot(s)?l=tn(s):!Gt(s)||i&&Bt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Se(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ne(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function xe(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Ce(e){var t=new e.constructor(e.byteLength);return new Fi(t).set(new Fi(e)),t}function Oe(e){return yt(A(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Pe(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Fe(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ve(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Be(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function je(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function Ge(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return Gt(i)?i:n}}function He(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Si&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Nn,o=Ge(e);return r}function ze(e,t,n,i,r,a){var o=-1,s=r&On,u=r&Cn,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],h=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==h&&!n(p,h,i,r,a)){d=!1;break}}return d}function qe(e,t,n,i,r,a,o){switch(n){case Vn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case Hn:return e!=+e?t!=+t:e==+t;case qn:case Kn:return e==t+""}return!1}function Ye(e,t,n,i,r,a){var o=r&On,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,h=o;++d<u;){f=s[d];var g,v=e[f],m=t[f];if(!(g===An?v===m||n(v,m,i,r,a):g)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function Ke(e,t){var n=e[t];return qt(n)?n:An}function We(e){return xi.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function $e(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case $n:return Ce(e);case Vn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Fe(e,n);case Gn:return Oe(e);case Hn:case Kn:return new i(e);case qn:return Le(e);case Yn:return Pe(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return jt(t)&&(dr(e)||$t(e)||Ot(e))?h(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.e,e.l);return t.u=De(e.u),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?qi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ne(this.e,this.u)}function ht(e,t,n){return t=n?An:t,ue(e,ve(t))}function gt(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function mt(e,t){return tr(e,ie(t))}function _t(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=qi(r+n,0)),$t(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function yt(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function Tt(e,t,n){return t=n?An:t,Re(e,ve(t))}function St(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return _(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=qi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=qi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return Gt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Nt(e){return re(e,!0,!0)}function xt(e,t){return e===t||e!==e&&t!==t}function Ct(e,t){return e>t}function Ot(e){return Pt(e)&&Di.call(e,"callee")&&(!ji.call(e,"callee")||xi.call(e)==kn)}function Lt(e){return null!=e&&jt(rr(e))&&!Bt(e)}function Pt(e){return Ht(e)&&Lt(e)}function kt(e){return e===!0||e===!1||Ht(e)&&xi.call(e)==Vn}function Ft(e){return Ht(e)&&xi.call(e)==Mn}function Vt(e){if(Lt(e)&&(dr(e)||$t(e)||Bt(e.splice)||Ot(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return he(e,t)}function Ut(e){return"number"==typeof e&&Hi(e)}function Bt(e){var t=Gt(e)?xi.call(e):"";return t==Bn||t==jn}function jt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Pn}function Gt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ht(e){return!!e&&"object"==typeof e}function zt(e){return Kt(e)&&e!=+e}function qt(e){return null!=e&&(Bt(e)?Oi.test(wi.call(e)):Ht(e)&&(I(e)?Oi:li).test(e))}function Yt(e){return null===e}function Kt(e){return"number"==typeof e||Ht(e)&&xi.call(e)==Hn}function Wt(e){if(!Ht(e)||xi.call(e)!=zn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ni}function Xt(e){return Gt(e)&&xi.call(e)==qn}function $t(e){return"string"==typeof e||!dr(e)&&Ht(e)&&xi.call(e)==Kn}function Qt(e){return Ht(e)&&jt(e.length)&&!!fi[xi.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?gr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return me(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||T(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=_e(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||T(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Bt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function hn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function gn(e){return function(){return e}}function vn(e){return e}function mn(e){return ye(gr({},e))}function _n(e,t,n){var i=sn(t),r=pe(t,i);null!=n||Gt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(Gt(n)&&"chain"in n)||n.chain,o=Bt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=De(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function En(){return Si._===this&&(Si._=Ci),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Tn(e){return e&&e.length?c(e,vn,Ct):An}function Sn(e){return e&&e.length?c(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Nn=1,xn=32,Cn=1,On=2,Ln=1/0,Pn=9007199254740991,kn="[object Arguments]",Fn="[object Array]",Vn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Bn="[object Function]",jn="[object GeneratorFunction]",Gn="[object Map]",Hn="[object Number]",zn="[object Object]",qn="[object RegExp]",Yn="[object Set]",Kn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",$n="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Fn]=fi[$n]=fi[Vn]=fi[Mn]=fi[Un]=fi[Bn]=fi[Gn]=fi[Hn]=fi[zn]=fi[qn]=fi[Yn]=fi[Kn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Fn]=pi[$n]=pi[Vn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[Gn]=pi[Hn]=pi[zn]=pi[qn]=pi[Yn]=pi[Kn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Bn]=pi[Xn]=!1;var hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},gi={"function":!0,object:!0},vi=gi[typeof t]&&t&&!t.nodeType?t:An,mi=gi[typeof e]&&e&&!e.nodeType?e:An,_i=mi&&mi.exports===vi?vi:An,Ei=m(vi&&mi&&"object"==typeof n&&n),yi=m(gi[typeof self]&&self),Ii=m(gi[typeof window]&&window),Ti=m(gi[typeof this]&&this),Si=Ei||Ii!==(Ti&&Ti.window)&&Ii||yi||Ti||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Ni=wi.call(Object),xi=bi.toString,Ci=Si._,Oi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=_i?Si.Buffer:An,Pi=Si.Reflect,ki=Si.Symbol,Fi=Si.Uint8Array,Vi=Pi?Pi.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Bi=Object.create,ji=bi.propertyIsEnumerable,Gi=Ai.splice,Hi=Si.isFinite,zi=Object.keys,qi=Math.max,Yi=Ke(Si,"Map"),Ki=Ke(Si,"Set"),Wi=Ke(Si,"WeakMap"),Xi=Ke(Object,"create"),$i=Yi?wi.call(Yi):"",Qi=Ki?wi.call(Ki):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Be(fe),nr=je();Vi&&!ji.call({valueOf:1},"valueOf")&&(_e=function(e){return S(Vi(e))});var ir=Ve,rr=be("length"),ar=Ui||function(){return[]};(Yi&&We(new Yi)!=Gn||Ki&&We(new Ki)!=Yn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=xi.call(e),n=t==zn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case $i:return Gn;case Qi:return Yn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return He(e,Nn|xn,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,hr(t)||0,n)})),lr=Dt((function(e,t){return He(e,xn,An,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:gn(!1),pr=Number,hr=Number,gr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),mr=Ue((function(e,t,n,i){Ve(t,un(t),e,i)})),_r=Dt((function(e){return e.push(An,Z),mr.apply(An,e)})),Er=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Se(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Se(e,le(t,1))})),Tr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):bi,L.prototype.clear=P,L.prototype["delete"]=k,L.prototype.get=F,L.prototype.has=V,L.prototype.set=M,U.prototype.push=j,G.prototype.clear=H,G.prototype["delete"]=z,G.prototype.get=q,G.prototype.has=Y,G.prototype.set=K,w.assign=gr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=_r,w.defer=ur,w.delay=cr,w.filter=gt,w.flatten=rt,w.flattenDeep=at,w.iteratee=Tr,w.keys=sn,w.map=Et,w.mapValues=cn,w.matches=mn,w.merge=Er,w.mixin=_n,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=St,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,_n(w,w),w.clone=Rt,w.cloneDeep=Nt,w.escape=hn,w.every=ht,w.find=vt,w.findIndex=it,w.forEach=mt,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=_t,w.indexOf=st,w.isArguments=Ot,w.isArray=dr,w.isBoolean=kt,w.isDate=Ft,w.isEmpty=Vt,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Bt,w.isNaN=zt,w.isNull=Yt,w.isNumber=Kt,w.isObject=Gt,w.isRegExp=Xt,w.isString=$t,w.isUndefined=Jt,w.last=ut,w.max=Tn,w.min=Sn,w.noConflict=En,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=Tt,w.uniqueId=In,w.each=mt,w.first=ot,_n(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,vi&&mi&&(_i&&((mi.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new a(function(e,t){o=e,u=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,
this.T=[],this.S=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.T,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.A(e,t)})),a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.b()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.T;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.D=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.R=e,this.N=t,this.C=0,this.O=!1,this.L={},r.extend(this,n),this.P={},this.initialize&&this.initialize()}var r=n(2);i.prototype.A=function(e,t){var n=this.L[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.P)},i.prototype.on=function(e,t){this.L[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.N.D(this.R,e)},i.prototype.emitChange=function(){this.O=!0,this.C++},i.prototype.hasChanges=function(){return this.O},i.prototype.resetChange=function(){this.O=!1},i.prototype.getStateId=function(){return this.C},i.prototype.b=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){$=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<K;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}K=0}function p(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function h(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];$((function(){return O(a,r,e,i._result)}))})():R(i,r,e,t),r}function g(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ue.error=e,ue}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){$((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function T(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function S(e,t,n){t.constructor===e.constructor&&n===h&&t.constructor.resolve===g?T(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,m()):e(n)?S(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),N(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&$(N,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,$(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&$(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?O(n,i,r,a):r(a);e._subscribers.length=0}}function x(){this.error=null}function C(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function O(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=C(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,_())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function P(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function F(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),Y(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function M(e){return new F(this,e).promise}function U(e){var t=this;return new t(Y(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function B(e){var t=this,n=new t(v);return D(n,e),n}function j(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function G(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(e){this[re]=P(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&j(),this instanceof H?L(this,e):G())}function z(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=H}var q=void 0;q=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Y=q,K=0,W=void 0,X=void 0,$=function(e,t){ne[K]=e,ne[K+1]=t,K+=2,2===K&&(X?X(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new x,ce=new x,le=0;return F.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},F.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===g){var r=E(e);if(r===h&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===H){var a=new n(v);S(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},F.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},F.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},H.all=M,H.race=U,H.resolve=g,H.reject=B,H._setScheduler=a,H._setAsap=o,H._asap=$,H.prototype={constructor:H,then:h,"catch":function(e){return this.then(null,e)}},H.polyfill=z,H.Promise=H,H}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){g&&p&&(g=!1,p.length?h=p.concat(h):v=-1,h.length&&s())}function s(){if(!g){var e=r(o);g=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,g=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,h=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||g||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=n(18),s=r.create(),u={action_data:n(21),async_request:n(27),audience_data:n(28),change_data:n(29),cleanup:n(30),cookie_options:n(31),event_data:n(32),event_emitter:n(33),dimension_data:n(34),directive:n(35),global:n(36),global_state:n(37),history:n(38),integration_settings:n(40),layer:n(41),layer_data:n(42),log:n(44),observed_redirect:n(45),pending_events:n(46),performance:n(47),plugins:n(48),provider_status:n(49),pending_redirect:n(50),rum:n(51),sandbox:n(52),session:n(53),tracker_optimizely:n(54),ua_data:n(55),view:n(56),view_data:n(57),visitor:n(58),visitor_attribute_entity:n(59),visitor_events:n(60),visitor_events_manager:n(65),visitor_id:n(66),visitor_bucketing:n(67),xdomain:n(68)};u["group_data"]=n(69),a.registerStores(u),i.forOwn(u,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,n){function i(){this.k={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(19).getFieldValue,a=n(20);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){i.isArray(t)||(t=[t]);for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n},t.setFieldValue=function(e,t,n){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=e,a=0;a<t.length-1;a++){var o=t[a];i.isObject(r[o])||(r[o]={}),r=r[o]}r[t[t.length-1]]=n}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(23);e.exports={initialize:function(){this.P={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.F),this.on(r.ACTION_EXECUTED,this.V),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},F:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.P.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.P.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.P.actions[u]=n}))}))}))})),this.emitChange())},V:function(e){var t=e.actionId;i.isUndefined(t)||this.P.actionState[t]||(this.P.actionState[t]={})},M:function(e){var t=e.actionId,n=e.changeId;return this.P.actionState[t]?void(this.P.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.P.actionState[e.actionId]},get:function(e){return a.safeReference(this.P.actions[e])},getActionState:function(e){return a.safeReference(this.P.actionState[e])},getByChangeId:function(e){return i.find(this.P.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.P.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.P.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.P.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.P.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(24),s=n(25),u=n(9),c=n(26);i.prototype.B=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.j(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.B()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};u.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.G(e.logLevel,e.logMessage,!0)}),this))},i.prototype.G=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.B()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.H(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.G(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.G(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.H([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.G(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.G(s.LogLevel.ERROR,[this.z(),e]),this.G(s.LogLevel.INFO,[e.stack])):this.G(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.G("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.G("GROUPEND",[].slice.call(arguments))},i.prototype.H=function(e){var t=this.z().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.z=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.j=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={},this.on(i.REGISTER_ASYNC_DEFERRED,this.q),this.on(i.RESOLVE_DEFERRED,this.Y),this.on(i.REJECT_DEFERRED,this.K)},getRequest:function(e){return this.P[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},q:function(e){this.P[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},Y:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},K:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getAudiencesMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getAudienceName:function(e){var t=i.find(i.values(this.P),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.F)},getChange:function(e){return this.P[e]},F:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.P[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},i.each(a.Lifecycle,i.bind((function(e){this.P[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.P[e])},X:function(e){this.P[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.P[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.P[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.P={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.J),this.on(i.SET_COOKIE_AGE,this.Z),this.on(i.SET_COOKIE_AUTO_REFRESH,this.ee)},getCurrentDomain:function(){return this.P.currentDomain},getDefaultAgeInSeconds:function(){return this.P.defaultAgeSeconds},getAutoRefresh:function(){return this.P.autoRefresh},J:function(e){this.P.currentDomain=e,this.emitChange()},Z:function(e){this.P.defaultAgeSeconds=e,this.emitChange()},ee:function(e){this.P.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.P))},getEventsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.P,{pageId:e}))},F:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.P={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.te),this.on(a.REMOVE_EMITTER_HANDLER,this.ne)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.P.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},te:function(e){var t=i(e.filter);this.P.handlers[t]||(this.P.handlers[t]=[]),this.P.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},ne:function(e){var t=!1,n=e.token;r.forOwn(this.P.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.P.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getById:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.re)},getAll:function(){return i.cloneDeep(this.P)},conflictInObservingChanges:function(){return!1},isDisabled:function(){return this.P.disabled},isEditor:function(){return this.P.isEditor},clientHasAlreadyInitialized:function(){return this.P.alreadyInitialized},getForceAudienceIds:function(){return this.P.forceAudienceIds},getForceVariationIds:function(){return this.P.forceVariationIds},getPreviewLayerIds:function(){return this.P.previewLayerIds},getProjectToken:function(){return this.P.projectToken},getForceTracking:function(){return this.P.forceTracking},shouldActivate:function(){return!this.P.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.P.isPreview},shouldBootstrapDataForEditor:function(){return this.P.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.P.isPreview||this.P.isLegacyPreview||!this.getProjectToken()||this.P.isEditor)},shouldBailForDesktopApp:function(){return!this.P.isEditor&&this.P.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.P.isSlave&&!this.P.isEditor&&this.P.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.P.shouldOptOut},shouldSendTrackingData:function(){return!this.P.trackingDisabled&&(!!this.P.forceTracking||!this.P.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.P.isSlave},isRunningInDesktopApp:function(){return this.P.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.P.isRunningInV2Editor},re:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.ae),this.on(r.ACTIVATE,this.oe),this.on(r.RECORD_GLOBAL_DECISION,this.se),this.on(r.SET_DOMCONTENTLOADED,this.ue)},getRevision:function(){return this.P.revision},getGlobalHoldbackThreshold:function(){return this.P.holdback},getProjectId:function(){return this.P.projectId},getSnippetId:function(){return this.P.snippetId},getAccountId:function(){return this.P.accountId},getNamespace:function(){return this.P.namespace},getActivationId:function(){return this.P.activationId},getActivationTimestamp:function(){return this.P.activationTimestamp},getAnonymizeIP:function(){return this.P.anonymizeIP},isGlobalHoldback:function(){return!!this.P.isGlobalHoldback},getListTargetingKeys:function(){return this.P.listTargetingKeys.slice()},getDCPServiceId:function(){return this.P.dcpServiceId},getDCPKeyfieldLocators:function(){return this.P.dcpKeyfieldLocators},getRecommenderServices:function(){return this.P.recommenderServices},getProjectJS:function(){return this.P.projectJS},getPlugins:function(){return this.P.plugins},getExperimental:function(){return a.safeReference(this.P.experimental)},domContentLoadedHasFired:function(){return this.P.domContentLoaded},oe:function(e){this.P.activationId=e.activationId,this.P.activationTimestamp=e.activationTimestamp,this.P.isGlobalHoldback=null},se:function(e){var t=e.isGlobalHoldback;if(null!==this.P.isGlobalHoldback&&this.P.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.P.isGlobalHoldback=t,this.emitChange()},ae:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.P,n,t),this.emitChange()}},ue:function(){this.P.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ce)},getEffectiveReferrer:function(){return this.P.effectiveReferrer},getEffectiveVariationId:function(){return this.P.effectiveVariationId},ce:function(e){i.isUndefined(e.effectiveReferrer)||(this.P.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.P.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(39);e.exports={initialize:function(){this.P={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.le),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.de)},getOriginalPushState:function(){return this.P.originalPushState},getOriginalReplaceState:function(){return this.P.originalReplaceState},le:function(){this.P.originalPushState||(this.P.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},de:function(){this.P.originalReplaceState||(this.P.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F),this.on(r.SET_INTEGRATION_SETTINGS,this.fe)},F:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())},fe:function(e){var t=this.P[e.id];t?i.extend(t,e):this.P[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.P))},get:function(e){return i.cloneDeep(this.P[e])},getReference:function(e){return this.P[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o="*";e.exports={initialize:function(){this.P={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.pe),this.on(r.RECORD_LAYER_DECISION,this.he),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.ge)},getLayerState:function(e,t){if(this.P[e]){var n=this.P[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.P)i.forEach(this.P[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.P)i.forEach(this.P[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},pe:function(e){e.merge||(this.P={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.P[t];if(i.isUndefined(r))this.P[t]={},this.P[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.P[t][n]=e)}}),this)),this.emitChange()},he:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.P[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.P[e.layerId]=n,this.emitChange()},ge:function(e){var t=e.layerId,n=e.pageId||o;return this.P[t]?this.P[t][n]?(this.P[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t);
}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(43);e.exports={initialize:function(){this.P={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.F)},F:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.P.variations[e.id]=e})),t.P.experiments[n.id]=n})),a.deepFreeze(e),t.P.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.P.layers))},getCampaignsMap:function(){return a.safeReference(this.P.layers)},getExperimentsMap:function(){return a.safeReference(this.P.experiments)},getVariationsMap:function(){return a.safeReference(this.P.variations)},getCount:function(){return i.keys(this.P.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(this.P.layers,(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.P.layers[e])},getLayerByExperimentId:function(e){var t=i.find(this.P.layers,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(t)},getExperimentByVariationId:function(e){var t;return i.some(this.P.layers,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={logs:[]},this.on(i.LOG,this.ve)},getLogs:function(){return this.P.logs},ve:function(e){this.P.logs.push(e),this.emitChange()},w:function(){return this.P.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(22);e.exports={initialize:function(){this.P={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.me),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this._e)},get:function(){return r.safeReference(this.P.data)},hasTracked:function(){return this.P.hasTracked},me:function(e){r.deepFreeze(e),this.P.data=e,this.P.hasTracked=!1,this.emitChange()},_e:function(){this.P.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26),o=1e3;e.exports={initialize:function(){this.P={},this.on(r.SET_PENDING_EVENT,this.Ee),this.on(r.REMOVE_PENDING_EVENT,this.ye),this.on(r.LOAD_PENDING_EVENTS,this.Ie)},getEvents:function(){return this.P},getEventsString:function(){return a.stringify(this.P)},Ee:function(e){i.keys(this.P).length>=o&&this.Te();var t=e.id,n=e.retryCount;this.P[t]&&this.P[t].retryCount===n||(this.P[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},ye:function(e){delete this.P[e.id],this.emitChange()},Ie:function(e){this.P=e.events,this.Te(),this.emitChange()},Te:function(){for(var e=i.sortBy(this.P,"timeStamp"),t=0;t<=e.length-o;t++)delete this.P[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},this.P[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Se)},Se:function(e){i.isUndefined(this.P[a.PerformanceData.performance_marks][e.name])&&(this.P[a.PerformanceData.performance_marks][e.name]=[]),this.P[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.P[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.P[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25),o=n(23);e.exports={initialize:function(){this.P=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Ae)},Ae:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.P[t])throw new Error("Invalid plugin type specified: "+t);this.P[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.P[e])return this.P[e];throw new Error("Invalid plugin type: "+e)}return this.P},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.be)},getPendingAttributeValue:function(e){return e=i.isArray(e)?e.concat("pending"):[e,"pending"],a.getFieldValue(this.P,e)},be:function(e){a.setFieldValue(this.P,e.key,{pending:e.pending}),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.me)},isExpectingRedirect:function(){return i.isString(this.P.layerId)},getLayerId:function(){return this.P.layerId},me:function(e){this.isExpectingRedirect()||(this.P.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{}},this.on(r.SET_RUM_DATA,this.we),this.on(r.RECORD_API_USAGE,this.De),this.on(r.INITIALIZE_CHANGE_METRICS,this.Re),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Ne),this.on(r.RECORD_CHANGE_OVERHEATED,this.xe),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Ce)},we:function(e){i.merge(this.P,e),this.emitChange()},De:function(e){this.P.apis[e.methodName]||(this.P.apis[e.methodName]=0),this.P.apis[e.methodName]++,this.emitChange()},Re:function(){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0)},Ne:function(e){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.P.data.extras.changeMacrotaskRate&&(this.P.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},xe:function(){i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0),this.P.data.extras.numOverheatedChanges++,this.emitChange()},Ce:function(e){this.P.DOMObservation[e.counterName]||(this.P.DOMObservation[e.counterName]=0),this.P.DOMObservation[e.counterName]++,this.emitChange()},getSampleRum:function(){return this.P.inRumSample},getRumId:function(){return this.P.id},getRumHost:function(){return this.P.RumHost},getApiData:function(){return this.P.apis},getDOMObservationData:function(){return this.P.DOMObservation},getRumData:function(){return i.cloneDeep(this.P.data)},getScriptSrc:function(){return this.P.src}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Oe)},Oe:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.P.natives=e.sandboxedFunctions,this.P.initialized=!0,this.emitChange()},getAll:function(){return this.P.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.P.natives[e]||null},isInitialized:function(){return this.P.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(5),s=18e5;e.exports={initialize:function(){this.P={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Le),this.on(r.LOAD_SESSION_STATE,this.Pe)},getState:function(){return i.cloneDeep(this.P)},getSessionId:function(){return this.P.sessionId},Pe:function(e){this.P.sessionId=e.sessionId,this.P.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Le:function(){var e=a.now(),t=this.P.lastSessionTimestamp;(!this.P.sessionId||e-t>s)&&(this.P.sessionId=o.generate()),this.P.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.ke(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Fe),this.on(r.REGISTER_PREVIOUS_BATCH,this.Ve),this.on(r.REGISTER_TRACKER_VISITOR,this.Me),this.on(r.REGISTER_TRACKER_EVENT,this.Ue),this.on(r.REGISTER_TRACKER_DECISION,this.Be),this.on(r.RESET_TRACKER_EVENTS,this.je),this.on(r.RESET_TRACKER_STORE,this.ke),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Ge),this.on(r.SET_TRACKER_POLLING,this.He),this.on(r.SET_TRACKER_BATCHING,this.ze),this.on(r.SET_TRACKER_SEND_EVENTS,this.qe),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Ye),this.on(r.SET_TRACKER_DIRTY,this.Ke),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.We)},getPersistableState:function(){return this.P.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.P.data,decisions:this.P.decisions,decisionEvents:this.P.decisionEvents,previousBatches:this.P.previousBatches}:{}:null},Ye:function(e){i.isEmpty(this.P.data)||i.isEmpty(e.data)||(this.Fe(),this.P.previousBatches.push(this.getEventBatch())),this.P.data=e.data||{},this.P.decisions=e.decisions||[],this.P.decisionEvents=e.decisionEvents||[],i.isEmpty(this.P.previousBatches)||i.isEmpty(e.previousBatches)?this.P.previousBatches=e.previousBatches||[]:this.P.previousBatches=this.P.previousBatches.concat(e.previousBatches),this.emitChange()},Ke:function(e){this.P.isDirty=e,this.emitChange()},Ue:function(e){var t=this.Xe();!i.isEmpty(t.snapshots)&&i.isEmpty(this.P.decisionEvents)||this.$e(),this.Qe().events.push(e.event),this.P.decisions=e.decisions,this.Ke(!0)},Be:function(e){this.P.decisionEvents.push(e.decisionEvent),this.P.decisions=e.decisions,this.Ke(!0)},Me:function(e){i.isEmpty(this.P.data)?this.P.data=e.data:this.Fe(),this.P.data.visitors.push(e.visitor),this.P.decisions=e.decisions,this.P.decisionEvents=[],this.Ke(!0)},Ve:function(e){this.P.previousBatches.push(e),this.Ke(!0)},ke:function(){this.P={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},je:function(){var e=this.Xe();this.P.data.visitors=[e],e.snapshots=[],this.Ke(!0)},Ge:function(){this.P.previousBatches=[],this.Ke(!0)},He:function(e){this.P.polling=e,this.emitChange()},ze:function(e){this.P.shouldBatch=e,this.emitChange()},qe:function(e){this.P.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.P.data)},getPreviousBatches:function(){return i.cloneDeep(this.P.previousBatches)},Je:function(){return this.P.decisionEvents.slice()},Ze:function(){this.P.decisionEvents=[]},et:function(){return this.P.decisions.slice()},isPolling:function(){return this.P.polling},shouldBatch:function(){return this.P.shouldBatch},Qe:function(){return i.last(this.Xe().snapshots)},Xe:function(){return i.last(this.P.data.visitors)},$e:function(){var e=this.Je(),t=this.Xe();t.snapshots.push({decisions:this.et(),events:e}),this.Ze(),this.Ke(!0)},Fe:function(){this.P.decisionEvents.length>0&&this.$e()},hasEventsToSend:function(){if(!i.isEmpty(this.P.decisionEvents))return!0;if(!i.isEmpty(this.P.data)){var e=i.some(this.P.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.P.previousBatches)},canSend:function(){return this.P.canSend},We:function(e){var t=this.Xe();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.SET_UA_DATA,this.F)},F:function(e){i.isEmpty(this.P)&&(this.P=e.data)},get:function(){return i.cloneDeep(this.P)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.P=i.cloneDeep(o),this.on(r.REGISTER_VIEWS,this.tt),this.on(r.SET_VIEW_ACTIVE_STATE,this.nt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.it),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.rt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.at),this.on(r.SET_GLOBAL_TAGS,this.ot),this.on(r.ACTIVATE,this.st),this.on(r.SET_VIEW_BATCHING,this.ze)},getAll:function(){var e={};for(var t in this.P.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.P.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.P.viewStates[e]),n=this.P.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.P.viewStates[e]?this.P.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.P.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.P.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.P.globalTags)},st:function(){this.P.viewStates={},this.emitChange()},tt:function(e){i.each(e.views,i.bind((function(e){var t=e.id;this.P.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},nt:function(e){var t=e.view.id;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);this.P.viewStates[t].isActive=e.isActive,e.isActive?this.P.viewStates[t].activatedTimestamp=e.timestamp:(this.P.viewStates[t].parsedMetadata={},this.P.viewStates[t].userSuppliedMetadata={}),this.emitChange()},it:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},rt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},at:function(e){var t=e.pageId;this.P.viewStates[t]&&(this.P.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},ot:function(e){i.extend(this.P.globalTags,e),this.emitChange()},ze:function(e){this.P.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.P.views))},getPagesMap:function(){return a.safeReference(this.P.views)},get:function(e){return a.safeReference(this.P.views[e])},getByApiName:function(e){return a.safeReference(this.P.apiNamesToViews[e])},apiNameToId:function(e){var t=this.P.apiNamesToViews[e];if(t)return t.id},idToApiName:function(e){var t=this.P.views[e];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.P.views).length},getAllViewsForActivationType:function(e){return i.filter(this.P.views,{activationType:e})},F:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.P.views[e.id]=e,this.P.apiNamesToViews[e.apiName]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.ut),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.ct)},getVisitorProfile:function(){return this.P.profile},getVisitorProfileMetadata:function(){return this.P.metadata},getAttribute:function(e){var t=this.P.profile;return i.cloneDeep(a.getFieldValue(t,e))},getAttributeMetadata:function(e){return i.cloneDeep(this.P.metadata[e])},ct:function(e){this.P.profile=e.profile,this.P.metadata=e.metadata,this.emitChange()},ut:function(e){i.each(e.attributes,i.bind((function(e){var t=e.key;a.setFieldValue(this.P.profile,t,e.value),e.metadata&&i.forOwn(e.metadata,i.bind((function(e,n){a.setFieldValue(this.P.metadata,t.concat(n),e)}),this))}),this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.dt)},getCustomBehavioralAttributes:function(){return i.filter(this.P,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.P);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.P[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},dt:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(61).Event;e.exports={initialize:function(){this.P={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.F),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.ft),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.pt)},getEvents:function(){return this.P.events},getForeignEvents:function(){return this.P.foreignEvents},getForeignEventQueues:function(){return this.P.foreignEventQueues},F:function(e){this.P.events=e,this.emitChange()},ft:function(e){this.P.foreignEvents[e.key]=e.value},pt:function(e){this.P.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(62),s=n(19).getFieldValue,u=n(63);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=u.hashToHex(u.toByteString(this.digest()),u.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(64).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ht)},getBaseMap:function(){return this.P.baseMap},getEventQueue:function(){return this.P.eventQueue},getLastEvent:function(){return this.P.lastEvent},getCleared:function(){return this.P.cleared},getInitialized:function(){return this.P.initialized},ht:function(e){this.P[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={randomId:null},this.on(r.SET_VISITOR_ID,this.F)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.P.randomId},F:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26);e.exports={initialize:function(){this.P={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.vt),this.on(r.MERGE_VARIATION_ID_MAP,this.mt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this._t),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Et)},getVariationIdMap:function(){return i.cloneDeep(this.P.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.P.variationIdMap)},vt:function(e){var t=this.P.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.P.variationIdMap[e.layerId]=n,this.emitChange())},mt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.each(t||{},(function(e,t){n[t]?i.assign(n[t],e):n[t]=e})),this.P.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.P.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.P.preferredLayerMap)},getPreferredLayerId:function(e){return this.P.preferredLayerMap[e]},_t:function(e){this.P.preferredLayerMap[e.groupId]!==e.layerId&&(this.P.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Et:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.assign(n,t),this.P.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.yt),this.on(r.XDOMAIN_ADD_FRAME,this.It),this.on(r.XDOMAIN_SET_MESSAGE,this.Tt),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.St),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.At),this.on(r.XDOMAIN_SET_DISABLED,this.bt)},getMessages:function(){return i.cloneDeep(this.P.messages)},getNextMessageId:function(){return this.P.messages.length},getMessageById:function(e){return this.P.messages[e]},getSubscribers:function(){return this.P.subscribers},getFrames:function(){return this.P.frames},getNextFrameId:function(){return this.P.frames.length},getDefaultFrame:function(){return this.P.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.P.canonicalOrigins)},isDisabled:function(){return this.P.disabled},yt:function(e){this.P.defaultFrame=e},It:function(e){this.P.frames.push(e)},Tt:function(e){this.P.messages[e.messageId]=e.message},St:function(e){this.P.subscribers.push(e.subscriber)},At:function(e){this.P.canonicalOrigins=e.canonicalOrigins},bt:function(e){this.P.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getGroupsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])}}}),(function(e,t,n){var i=n(71);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){y.dispatch(m.SET_VISITOR_EVENTS,e)}function r(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return N.getEvents()}function l(){return x.getBaseMap()}function d(){return x.getEventQueue()}function f(){return x.getLastEvent()}function p(){return x.getCleared()}function h(){return x.getInitialized()}function g(){return i(c().concat(d())),a([]),c().length>O&&(i(c().slice(-O)),!0)}var v=n(2),m=n(7),_=n(24),E=n(72),y=n(9),I=n(23),T=n(73),S=t,A=n(61).Event,b=n(62),w=n(61).EventBase,D=n(87),R=n(16),N=R.get("stores/visitor_events"),x=R.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},O=1e3;t.initialize=function(e,t){if(!h()){S.wt(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){I.debug("Behavior store: adding event",e);var t=S.Dt(e);o(t),a(d().concat(t)),D.reindexIfNecessary(f(),c(),d()),S.Rt(d())},t.getEvents=function(){return d().length>0&&(g()&&D.sessionize(c()),S.Nt(c()),S.Rt(d())),c()},S.wt=function(e,t){S.xt(e,t)&&(S.Nt(c()),S.Rt(d())),D.sessionize(c())},S.xt=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return C.EVENTBASE in r?(i(S.Ct(e)),a(S.Ct(t))):(n=!0,i(S.Ot(e)),a(S.Ot(t))),d().length>0&&(g(),n=!0),i(S._updateBaseMapAndMaybeDedupe(c())),S._migrateEventBasesAndUpdateStore()&&(n=!0),n},S.Ot=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=S.Lt(i);t[n]=new A(r,i[b.FIELDS.TIME])}return t},S._migrateEventBasesAndUpdateStore=function(){var e=!1,t=S.Pt();return D.applyMigrations(t)&&(e=!0,r({}),i(S._updateBaseMapAndMaybeDedupe(c())),a(S._updateBaseMapAndMaybeDedupe(d()))),e},S.kt=function(){return _.now()},S.Dt=function(e){var t,n=e.name,i=e.type||"default",r=e.category||E.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=S.Ft(o);var s=S.kt(),u=new A(o,s,-1);return D.updateSessionId(f(),u),D.updateSessionIndex(f(),u),u},S._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=S.Ft(e[t].eventBase);return e},S.Nt=function(e){var t=S.Vt(e);T.persistBehaviorEvents(t)},S.Rt=function(e){var t=S.Vt(e);T.persistBehaviorEventQueue(t)},S.Mt=function(){p()||(i([]),a([]),S.Nt(c()),S.Rt(d()),r({}),o(null),s(!0))},S.Ft=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},S.Pt=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},S.Vt=function(e){for(var t=function(e){var t={};t[b.FIELDS.NAME]=e.getValueOrDefault([b.FIELDS.NAME]),t[b.FIELDS.TYPE]=e.getValueOrDefault([b.FIELDS.TYPE]);var n=e.getValueOrDefault([b.FIELDS.CATEGORY]);v.isUndefined(n)||(t[b.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([b.FIELDS.REVENUE]);v.isUndefined(i)||(t[b.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([b.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[b.FIELDS.OPTIONS]=r),t},n=C,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[b.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[b.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},S.Lt=function(e,t){var n=new w(e[b.FIELDS.NAME],e[b.FIELDS.TYPE],e[b.FIELDS.CATEGORY],e[b.FIELDS.OPTIONS],e[b.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},S.Ct=function(e){for(var t=C,n=[],i=0;i<e.length;i++)for(var r=e[i],a=S.Lt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new A(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return S.Ct(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return u(B.LAYER_MAP)||{}}function r(e,t){D.dispatch(R.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=K.getPreferredLayerMapString();
p(B.LAYER_MAP,e,!0)}function o(e){D.dispatch(R.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=O.now()),D.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i=t.provides;w.isArray(i)||(i=[i]);var r=t.isSticky&&!w.isUndefined(F.getFieldValue(e,i));if(!r){var a;try{var o=L.evaluate(t.getter);w.isFunction(o)&&(o=o((function(){return F.getFieldValue(e,i)}),(function(e){n(i,e)}))),w.isUndefined(o)||(t.isAsync?(a=o.then((function(e){n(i,e)}),(function(e){M.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),D.dispatch(R.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:a})):n(i,o))}catch(e){M.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return a}}}function u(e){var t=h(e),n=V.getItem(t);if(!n){var i=g(e);n=V.getItem(i),f(e,n)}return w.isString(n)&&(n=b(n)),n}function c(e){var t=[];return w.each(e,(function(e){w.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function l(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function d(e){var t=Y.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return w.each(V.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:b(V.getItem(e))};n.push(a)}})),n}function f(e,t){var n=h(e),i=g(e);V.setItem(n,t),V.removeItem(i)}function p(e,t,i){try{var r=h(e);i||(t=k.stringify(t));try{V.removeItem(g(e)),V.setItem(r,t)}catch(e){throw M.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(83).setItem(r,t)}catch(e){M.warn("Unable to persist visitor data:",e.message)}}function h(e){var n=Y.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function g(e){var t=Y.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function v(e,t){if(_(e,h(B.EVENT_QUEUE)))D.dispatch(R.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:x.deserialize(b(t))});else if(_(e,h(B.EVENTS)))D.dispatch(R.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:x.deserialize(b(t))});else if(_(e,h(B.LAYER_STATES)))D.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w.map(b(t),l),merge:!0});else if(_(e,h(B.VARIATION_MAP)))D.dispatch(R.MERGE_VARIATION_ID_MAP,{variationIdMap:b(t)});else if(_(e,h(B.VISITOR_PROFILE))){var n=["custom"],i=b(t);w.each(n,(function(e){var t=z.getPlugin(P.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=m(i,e,t.attributionType);if(!w.isEmpty(n)){var r=[];w.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:[e,i],value:t,metadata:a};r.push(o)})),D.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else M.debug("Attribute type",e,"not used by any audiences")}))}}function m(e,t,n){var i=W.getAttribute(t),r=W.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(w.isEmpty(i))return{data:a,metadata:o};var s={};return w.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===P.AttributionTypes.FIRST_TOUCH&&i>=a||n===P.AttributionTypes.LAST_TOUCH&&a>=i||w.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function _(e,t){return e.indexOf(t)>0}function E(){var e=W.getVisitorProfile(),t=W.getVisitorProfileMetadata(),n=z.getAllPlugins(P.PluginTypes.visitorProfileProviders);if(n){var i=w.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=w.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function y(e,t){N.initializeStore(e,t)}function I(e){D.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w.filter(e,(function(e){return!!e.decision}))})}function T(e){e=w.extend({lastSessionTimestamp:0,sessionId:null},e),D.dispatch(R.LOAD_SESSION_STATE,e)}function S(){return"oeu"+O.now()+"r"+Math.random()}function A(e){var t,n,i=z.getAllPlugins(P.PluginTypes.visitorProfileProviders),r=w.filter(i,(function(e){return w.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=w.reduce(t,(function(e,t,n){var i=t,a=w.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),D.dispatch(R.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function b(e){try{return k.parse(e)}catch(t){return M.debug("Failed to parse: ",e,t),null}}var w=n(2),D=n(9),R=n(7),N=n(70),x=n(71),C=n(74),O=n(24),L=n(16),P=n(25),k=n(26),F=n(19),V=n(80).LocalStorage,M=n(23),U=n(12).Promise,B=n(25).VisitorStorageKeys,j=L.get("stores/cookie_options"),G=L.get("stores/global"),H=L.get("stores/layer"),z=L.get("stores/plugins"),q=L.get("stores/session"),Y=L.get("stores/visitor_id"),K=L.get("stores/visitor_bucketing"),W=L.get("stores/visitor"),X=L.get("stores/provider_status");t.getIdFromCookies=function(){var e=t.getCurrentId();return e||(e=S()),{randomId:e}},t.getCurrentId=function(){return C.get(P.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return V.keys().length>0},t.setId=function(e){var n=Y.getBucketingId();D.dispatch(R.SET_VISITOR_ID,e),Y.getBucketingId()!==n&&t.loadData();try{t.maybePersistVisitorId(e)}catch(e){if(M.error("Visitor / Unable to persist visitorId, disabling tracking"),D.dispatch(R.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof C.MismatchError)throw M.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return u(B.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){D.dispatch(R.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=K.getVariationIdMapString();p(B.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){p(B.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){D.dispatch(R.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=w.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=w.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=w.partial(s,t),i=w(e).filter({isAsync:!0}).map(n).filter().value();return w.forEach(w.filter(e,(function(e){return!e.isAsync})),n),i.length>0?U.all(i):U.resolve()},t.loadData=function(){y(u(B.EVENTS)||[],u(B.EVENT_QUEUE)||[]);var e=d(B.LAYER_STATES);w.forEach(e,(function(e){e.item=w.map(e.item,l)})),I(c(e)),T(u(B.SESSION_STATE)||{}),A(u(B.VISITOR_PROFILE)||{});var n=u(B.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){p(B.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(B.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=H.getLayerStates(t.getNamespace());e=w.map(e,(function(e){return w.omit(e,"namespace")})),p(B.LAYER_STATES,e)},t.persistSessionState=function(){p(B.SESSION_STATE,q.getState())},t.persistVisitorProfile=function(){p(B.VISITOR_PROFILE,E())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return w.includes(e,n)&&w.includes(e,"_")&&w.includes(e,"$$")&&w.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){C.remove(P.COOKIES.VISITOR_UUID),e.randomId&&(j.getAutoRefresh()||t.getCurrentId()!==e.randomId?(C.set(P.COOKIES.VISITOR_ID,e.randomId),M.log("Persisting visitorId:",e.randomId)):M.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return W.getAttribute(e)},t.getPendingAttributeValue=function(e){return X.getPendingAttributeValue(e)},t.loadForeignData=function(){w.each(V.keys(),(function(e){var t=V.getItem(e);t&&v(e,t)}))},t.getNamespace=function(){return G.getNamespace()},t.serializeFieldKey=function(e){return w.isArray(e)?e.join("$$"):e},t.removeLegacySessionStateCookies=function(){var e=C.getAll();w.forEach(w.keys(e),(function(e){0===e.indexOf(P.COOKIES.SESSION_STATE+"$$")&&C.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(g,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return d.dispatch(c.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(75).create,o=n(24),s=n(79),u=n(39),c=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),p=t.SetError=a("CookieSetError"),h=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,u;n=s.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(u=t.safeDecodeURIComponent(i.substring(0,o)),void 0===c[u])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,c){a=r.extend({encodeValue:!0},a),c!==!1&&(c=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(u.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var g=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*g)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=a.encodeValue,m=t.get(e,v);if(m!==n){if(!m)throw new p('Failed to set cookie "'+e+'"');throw new h('Expected "'+n+'" for "'+e+'", got "'+m+'"')}}},t.remove=function(e,n){for(var i=u.getLocation().hostname.split(".");i.length>0;)t.set(e,null,r.extend({},n,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var g=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(76),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(77)(),a=n(78);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(75).create,s=n(81),u=n(39),c=t.Error=o("StorageError");try{r=u.getGlobal("localStorage")}catch(e){throw new c("Unable to read localStorage: "+e.toString())}if(!r)throw new c("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.Ut=e,this.Bt=t}var r=n(2),a=n(23),o="$$";i.prototype.jt=function(e){return[this.Bt,e].join(o)},i.prototype.Gt=function(e){return e.replace(this.Bt+o,"")},i.prototype.setItem=function(e,t){try{this.Ut.setItem(this.jt(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Ut.removeItem(this.jt(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Ut.getItem(this.jt(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Ut);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Bt)}),this)),r.bind(this.Gt,this))},i.prototype.allKeys=function(){return r.keys(this.Ut)},i.prototype.allValues=function(){return r.values(this.Ut)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return u.getGlobal("performance")}var r=n(7),a=n(75).create,o=n(24),s=n(9),u=n(39),c=n(16),l=c.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=g.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(g.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,u=n(7),c=n(16),l=n(9),d=n(84),f=n(75).create,p=n(24),h=n(79),g=n(26),v=n(86),m=n(73),_=n(39),E=n(23),y=c.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=h.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)},h.appendTo(h.querySelector("body"),i)})},t.loadCanonicalOrigins=function(e){l.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=m.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){_.addEventListener("message",i);var r=function(){return!!h.querySelector("body")},s=function(){return t.loadIframe(e,n)};return v.pollFor(r).then(s).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(85);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(84),s=n(16),u=n(9),c=n(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),u.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){u.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(c.error("Error in handler for event:",e,r),o.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(39),o=100,s=50;t.pollFor=function(e,t,n){var u,c;return i.isFunction(n)?c=n:(u=n||o,c=function(){return u--,u<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!c()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(61).Event,o=n(24),s=n(62),u=n(61).EventBase;t.CURRENT_SESSION_INDEX=0;var c=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<c},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new u("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),c=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,c="number"!=typeof c?n:c,e=new a(new u("",""),n,c,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var u=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>c&&(u+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,u);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(9),s=n(26),u=n(23),c=n(12).Promise,l=n(89),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new c(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),u.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(79),u=n(25),c=n(9),l=n(23),d=o.get("stores/sandbox"),f=n(39);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(u.SandboxedFunctions,(function(e){return n[e]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(23),a=n(91),o=n(16),s=o.get("stores/plugins"),u=n(7),c=n(25),l=n(9),d=[n(105),n(106),n(125)],f=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(u.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(c.PluginTypes.apiModules,e),t?(l.dispatch(u.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var l,f;return(l=o.find(a.experiments,{id:u}))?(f=o.find(l.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:l.name,id:l.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],c=e.getLayerStates();s.onlySingleExperiments&&(c=o.filter(c,(function(e){var n=t.get(e.layerId);return n&&d.isSingleExperimentPolicy(n.policy)})));var l=o.map(c,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=f.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(l,r):l;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(92),u=n(93),c=n(94),l=n(96),d=n(43),f=n(97);t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(e,t,n,i,r,a,u,d){var f={},p={},h={},g={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:f,pages:i.getPagesMap(),experiments:p,variations:h,projectId:d.getProjectId(),snippetId:d.getSnippetId(),accountId:d.getAccountId(),dcpServiceId:d.getDCPServiceId(),revision:d.getRevision(),clientVersion:s.VERSION},v=l.dereferenceChangeId;return o.each(n.getAll(),(function(e){c.defineProperty(f,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"campaign"),c.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return p[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){c.defineProperty(p,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"experiment"),c.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return h[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){c.defineProperty(h,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,v)})}))}),"variation"),t}),"variationMap","byId")}))}))})),g.groups=r.getGroupsMap(),g}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,c,l){return{getCampaignStates:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,c,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return c.isGlobalHoldback()},getActivationId:function(){return c.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=f.getExperimentAndVariation();return e&&(e.referrer=f.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:s.experiment,variation:s.variation};return d.isSingleExperimentPolicy(r.layer.policy)||o.extend(c,{campaign:s.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(98).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(104)}),(function(e,t,n){t.VERSION="0.116.1",t.ENGINE="js"}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var h=u.reduce(p,(function(e,t){return e+t.length}),0),g=d.length-1+(s?1:0),m=g*l.length,_=h+m;if(s&&(_+=f.length),_>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-_,y=d.length,I=[],T=d.length-1;T>=0;T--){var S=d[T],A=Math.min(S.length,Math.floor(E/y));E-=A,y--,I.unshift(S.substring(0,A))}var b=u.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),h=d.names,g=d.idStrings,m=u.reduce(g,(function(e,t){
return e+t.length}),0);if(m+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=a-m-c-s.length,E={};E.variation=Math.min(h.variation.length,Math.floor(_/3)),_-=E.variation,E.experiment=Math.min(h.experiment.length,Math.floor(_/2)),_-=E.experiment,E.layer=_;var y={};u.each(h,(function(e,t){y[t]=e.substring(0,E[t])}));var I=[];return v.isSingleExperimentPolicy(e.policy)||I.push(y.layer+g.layer),I=I.concat([y.experiment+g.experiment,y.variation+g.variation,s]),I.join(l)}var u=n(2),c=n(16),l=":",d="everyone_else",f="holdback",p="treatment",h="",g=n(23),v=n(43);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||h,experiment:t.name||h,variation:n.name||h};if(o&&(s=u.mapValues(s,i)),s.experiment===h&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(g.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=h),e===h)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(95),r=n(7),a=n(9),o=n(23);t.defineProperty=function(e,t,n,s,u){i(e,t,(function(){var e=["prop",s,u||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(22),s=n(94),u=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return c(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=u.getChange(e);return t?o.safeReference(t):e};var c=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(99).observeSelector,a=n(100).poll,o=n(102).waitForElement,s=n(103).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(_),a),this.observe(t,e)});return function(i){var r=_[i];n.observe(t,e),r.cancelObservation=function(){delete _[i],l.isEmpty(_)&&n.disconnect()}}}return function(e){var t=g.poll(l.partial(a,e));_[e].cancelObservation=function(){t(),delete _[e]}}}function r(e){var t=_[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(_[e]){if(o(_[e]))return 0===_[e].matchedCount&&l.isFunction(_[e].options.onTimeout)&&_[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(_[e].selector);t.length&&(l.each(t,(function(t){t.Ht&&t.Ht[e]||_[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;_[e]&&_[e].callbackQueue.length;){var t=_[e].callbackQueue.shift();if(u(t,e),_[e].matchedCount=_[e].matchedCount+1,_[e].callback(t),_[e]&&_[e].options.once)return void r(e)}}function u(e,t){e.Ht||(e.Ht={}),e.Ht[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),p=n(79),h=(n(25),n(9),n(5).generate),g=n(100),v=n(39),m=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),_={},E=function(e){(E=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=h();return n=l.assign({},m,n||{}),_[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},E(i),v.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(25),n(9),n(5).generate),u=n(39),c=n(101).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=c),l[t]||(l[t]={callbacks:{},id:u.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(99).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(100).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(85);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(106);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(2),r=n(7),a=n(90),o=n(91),s=n(107),u=n(25),c=n(108),l=n(115),d=n(6),f=n(75).create,p=n(24),h=n(116),g=n(85),v=n(9),m=n(26),_=n(23),E=n(119),y=n(120),I=n(73),T=n(83),S=n(16),A=S.get("stores/dimension_data"),b=S.get("stores/view_data"),w=S.get("stores/visitor_id"),D=S.get("stores/layer_data"),R=S.get("stores/directive"),N=86400,x=90,C=t.ApiListenerError=f("ApiListenerError");t.event=function(e){y.updateAllViewTags();var t=function(){var t=c.trackCustomEvent(e.eventName,e.tags);t?_.log("API / Tracking custom event:",e.eventName,e.tags):_.log("API / Not tracking custom event:",e.eventName)};w.getBucketingId()?t():v.dispatch(r.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=b.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?y.activateViaAPI(t,e.tags):(y.deactivate(t),_.log("API / Deactivated Page",y.description(t)))};w.getBucketingId()?i():v.dispatch(r.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){y.setGlobalTags(e.tags)},t.user=function(e){_.log("API / Setting visitor attributes:",e.attributes),i.each(e.attributes,(function(e,t){var n,i=t,a=A.getById(t)||A.getByApiName(t);a&&(i=a.id,n=a.segmentId||a.id);var o=function(){v.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:["custom",i],value:{id:n,value:e},metadata:{lastModified:p.now()}}]})};w.getBucketingId()?o():v.dispatch(r.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postVisitorProfileLoad,cleanupFn:o})}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;h.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<x&&(_.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",x,", setting to minimum."),t=x),_.log("API / Setting cookie age to",t,"days."),v.dispatch(r.SET_COOKIE_AGE,t*N)},t.extendCookieLifetime=function(e){e=i.extend({isEnabled:!0},e),_.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),v.dispatch(r.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){_.log("API / Setting cookie domain to",e.cookieDomain),v.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);_.log("API / Disabling tracking"),v.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else _.log("API / Disabling everything"),v.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),_.setLogMatcher(n),_.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(o[t]||a.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');E.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;d.makeAsyncRequest(t),d.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new C(e)}},g.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");g.off(e.token)},t.load=function(e){e.data=i.extend({},e.data),s.normalizeClientData(e.data),v.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");v.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=D.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=D.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);I.updateVariationIdMap(r,e.experimentId,a),w.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+m.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),T.loadCanonicalOrigins(e.canonicalOrigins)},t.disableCrossOrigin=function(){_.log("API / cross origin tracking is DISABLED"),v.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){R.shouldActivate()?l.emitActivateEvent():_.debug("Not activating.")},t.sendEvents=function(){l.emitSendEvents()},t.holdEvents=function(){l.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=P.description(t),i=X.isExpectingRedirect(),r=X.getLayerId();if(i&&r===t.id){var a=B.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,_(a,[B.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),k.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=B.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,_(a,[B.NonRedirectPolicies.TRACK_IMMEDIATELY],e),k.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r){var a=K.get(t.layerId),o=P.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),k.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()}),i=J.getByApiName(e),r=i&&i.pageId?h(i):z.getActiveViewTags(),a=y.extend({},r,t),o=i&&i.category?i.category:N.OTHER;return y.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:N.OTHER,r=h(e);return y.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:Y.getLayerStatesForAnalytics()});return y.extend(e,{eventTags:{}})}function c(e,t,n){var i=K.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=y.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=V.getReferrer()||D.getReferrer(),l={sessionId:H.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),decisionId:e,activationId:G.getActivationId(),namespace:G.getNamespace(),timestamp:b.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:G.getAccountId(),projectId:G.getProjectId(),revision:String(G.getRevision()),clientVersion:A.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,clientEngine:A.ENGINE,anonymizeIP:y.isNull(G.getAnonymizeIP())?void 0:G.getAnonymizeIP(),userFeatures:g(n),layerStates:Y.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:b.now(),revision:G.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:G.getProjectId(),accountId:G.getAccountId(),activationId:G.getActivationId(),sessionId:H.getSessionId(),visitorId:Z.getRandomId(),decision:t,decisionTicket:n,userFeatures:g(i),layerStates:Y.getLayerStatesForAnalytics()}}function f(e){var t={eventId:j.generate(),timestamp:b.now(),revision:G.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:G.getProjectId(),accountId:G.getAccountId(),activationId:G.getActivationId(),sessionId:H.getSessionId(),isGlobalHoldback:G.isGlobalHoldback(),visitorId:Z.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:g(e.visitorProfile)};return t}function p(e){var t=z.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function h(e){var t={};return e.pageId?p(e.pageId):t}function g(e){var t=q.getAllPlugins(R.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){k.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=m(e,n);k.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),k.debug("Calling each with data: ",t),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(t),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function m(e,t){var n=[];return y.each(q.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){k.error(e)}})),n}function _(e,t,n){var i=E(e,t);k.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),k.debug("Calling each with data: ",n),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(n),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function E(e,t){var n=[];return y.each(q.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(2),I=n(7),T=n(84),S=n(70),A=n(92),b=n(24),w=n(16),D=n(79),R=n(25),N=n(72),x=n(85),C=n(109),O=n(110),L=n(9),P=n(111),k=n(23),F=(n(82),n(12).Promise),V=n(97),M=n(112),U=n(114),B=n(113),j=n(5),G=w.get("stores/global"),H=w.get("stores/session"),z=w.get("stores/view"),q=w.get("stores/plugins"),Y=w.get("stores/layer"),K=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),X=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),Q=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee="COOKIE",te=!0,ne=1e3;t.trackClientActivation=function(){if(Q.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:O.CUSTOM,category:n.eventCategory,tags:y.omit(n.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),T.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:O.CUSTOM,tags:y.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return S.addEvent(r),v("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=K.get(e.layerId),a=j.generate();L.dispatch(I.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(ee){o=c(a,e,t);var s=X.isExpectingRedirect(),u=X.getLayerId();if(s&&u===n.id){M.persist(o,ee);var d=P.description(n);k.log("Relaying decision for redirect Campaign",d,P.description(n))}}if(!Q.shouldSendTrackingData())return void k.log("Analytics / Not tracking decision for Campaign",P.description(n));var f=$.getVisitorProfile();if(ee){var p=l(o,e.isLayerHoldback,f);i(p,n),r(a,e,t,f,!0)}else r(a,e,t,f,!1)},t.trackPostRedirectDecisionEvent=function(){if(!Q.shouldSendTrackingData())return F.resolve();if(W.hasTracked())return F.resolve();var e=W.get();if(!e)return F.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=B.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,_(i,[B.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new F(function(e,t){var n=x.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),x.off(n)}})}),a=U.makeTimeoutPromise(ne);return F.race([r,a]).then((function(){k.log("Calling trackers after successful sync")}),(function(e){k.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=B.TrackLayerDecisionTimingFlags.postRedirectPolicy,_(B.TrackLayerDecisionTimingFlags.postRedirectPolicy,[B.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){k.error("Error when calling trackers after sync:",e)}))}return _(B.TrackLayerDecisionTimingFlags.postRedirectPolicy,[B.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA),F.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(T.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return S.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e){var t=z.getViewState(e.id);if(!t.isActive)return void k.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:O.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return T.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:O.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData()?(S.addEvent(i),L.dispatch(I.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(9),u=o.get("stores/global"),c=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:a.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return m.error("Relay / Error computing redirect relay cookie: ",e),void p.emitError(e)}m.debug("Relay / Setting redirect relay cookie:",t);try{f.set(g.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){m.error("Relay / Failed to set redirect relay cookie",e),p.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=T[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+y+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(g.COOKIES.REDIRECT,!1);if(e){m.log("Relay / Found redirect cookie:",e);var t=o(e);if(!t.visitorId){m.warn("Relay / Missing required field visitorId, attempting to load from VISITOR_ID cookie");var n=f.get(g.COOKIES.VISITOR_ID);t.visitorId=l.isString(n)?n:null}return t}}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void m.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=S[i];if(!r&&(r=l.find(I,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+y)})),!r))return void m.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+y.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return m.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=E.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){m.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=E.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){m.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;v.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),v.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),v.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(74),p=n(84),h=n(16),g=n(25),v=n(9),m=n(23),_=n(113),E=h.get("stores/plugins"),y=".",I=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],T={},S={};l.forEach(I,(function(e){T[e.name]=e,S[e.relayName]=e})),t.persist=function(e,t){t===_.RedirectRelayMedia.COOKIE?i(e):m.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=a()),e){var t=[];return l.forEach(I,(function(n){(l.isNull(e[n.name])||l.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void m.error("Relay / Observed redirect data with missing fields:",t):(v.dispatch(d.LOAD_REDIRECT_DATA,e),v.dispatch(d.ADD_CLEANUP_FN,{lifecycle:g.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(e)}}),e)}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(39);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(85),u=n(109),c=n(94),l=n(96);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};c.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:u.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};c.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){
function i(){var e=Boolean(E.result(window.optimizely,"initialized"));b.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(y.LOAD_DIRECTIVE,{mutationObserverAPISupported:x.isMutationObserverAPISupported()})}function a(){var e=x.getUserAgent()||"";if(!E.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(E.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};E.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=T.get(A.COOKIES.OPT_OUT),n=R.getQueryParamValue(C.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.",a="true"===n||"false"===n;e?a&&n!==e?t.setOptOut("true"===n):b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):"true"===n&&t.setOptOut(!0),a&&x.alert("true"===n?i:r)}function s(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function u(){b.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=R.getQueryParamValue(C.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){b.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=x.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(C.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function h(){var e=T.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(C.TOKEN)||e;b.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function g(){var e=T.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(C.FORCE_AUDIENCES);if(n)t=T.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function v(){var e=T.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(C.FORCE_VARIATIONS);if(n)t=T.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceVariationIds:t}))}function m(){var e=R.getQueryParamValue(C.FORCE_TRACKING);e&&b.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function _(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var E=n(2),y=n(7),I=n(84),T=n(74),S=n(75).create,A=n(25),b=n(9),w=n(23),D=t.JSONParseError=S("JSONParseError"),R=n(117),N=n(26),x=n(39),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){_(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),p(),h(),g(),v(),m()};var O=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),T.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*O},!0)):T.remove(A.COOKIES.OPT_OUT),b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(118),r=n(39);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(39);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(25),s=n(85),u=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=g.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(115),s=n(121),u=n(24),c=n(16),l=n(25),d=n(110),f=n(9),p=n(23),h=n(122),g=c.get("stores/plugins"),v=c.get("stores/view"),m=c.get("stores/view_data"),_=c.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=h.getTagValue(t)}catch(e){e instanceof h.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(g.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=c.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=m.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var a=[];r.each(e,(function(e){var r=v.getViewState(e.id),s=t.createViewTicket();if(r.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,s)||t.deactivate(e)}catch(n){p.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else p.log("Not activating Page, already active ",t.description(e));else{try{if(!t.hasValidStaticConditions(e,s))return void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){p.error("Page / Error evaluating whether to activate page ",t.description(e),n)}a.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n});var u=_.getByPageId(e.id);i(u,!0)}})),r.isEmpty(a)||o.emitViewsActivated({views:a})},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=_.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=g.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var i=s.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return p.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),c.groupCollapsed('Condition / Applying operator "'+i+'" with args',u.stringify(r));try{n=d[i](r,t),c.debug("Condition / Result:",n)}finally{c.groupEnd()}return n}return n=t(e),c.debug("Condition / Evaluated:",u.stringify(e),":",n),n}var s=n(2),u=n(26),c=n(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(25).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(123),t.Error=n(124).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(75).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(127))}),(function(e,t,n){n(39);e.exports=n(128)}),(function(e,t,n){var i,r;/** @license
	 * jQuery JavaScript Library v1.11.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-11-13T20:27Z
	 */
!(function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!=typeof window?window:this,(function(n,a){function o(e){var t="length"in e&&e.length,n=ue.type(e);return"function"!==n&&!ue.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function s(e,t,n){if(ue.isFunction(t))return ue.grep(e,(function(e,i){return!!t.call(e,i,e)!==n}));if(t.nodeType)return ue.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(ve.test(t))return ue.filter(t,e,n);t=ue.filter(t,e)}return ue.grep(e,(function(e){return ue.inArray(e,t)>=0!==n}))}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e){var t=Ae[e]={};return ue.each(e.match(Se)||[],(function(e,n){t[n]=!0})),t}function l(){_e.addEventListener?(_e.removeEventListener("DOMContentLoaded",d,!1),n.removeEventListener("load",d,!1)):(_e.detachEvent("onreadystatechange",d),n.detachEvent("onload",d))}function d(){(_e.addEventListener||"load"===event.type||"complete"===_e.readyState)&&(l(),ue.ready())}function f(e,t,n){if(void 0===n&&1===e.nodeType){var i="data-"+t.replace(Ne,"-$1").toLowerCase();if(n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Re.test(n)?ue.parseJSON(n):n)}catch(e){}ue.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!ue.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function h(e,t,n,i){if(ue.acceptData(e)){var r,a,o=ue.expando,s=e.nodeType,u=s?ue.cache:e,c=s?e[o]:e[o]&&o;if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)return c||(c=s?e[o]=J.pop()||ue.guid++:o),u[c]||(u[c]=s?{}:{toJSON:ue.noop}),"object"!=typeof t&&"function"!=typeof t||(i?u[c]=ue.extend(u[c],t):u[c].data=ue.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==n&&(a[ue.camelCase(t)]=n),"string"==typeof t?(r=a[t],null==r&&(r=a[ue.camelCase(t)])):r=a,r}}function g(e,t,n){if(ue.acceptData(e)){var i,r,a=e.nodeType,o=a?ue.cache:e,s=a?e[ue.expando]:ue.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){ue.isArray(t)?t=t.concat(ue.map(t,ue.camelCase)):t in i?t=[t]:(t=ue.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!p(i):!ue.isEmptyObject(i))return}(n||(delete o[s].data,p(o[s])))&&(a?ue.cleanData([e],!0):oe.deleteExpando||o!=o.window?delete o[s]:o[s]=null)}}}function v(){return!0}function m(){return!1}function _(){try{return _e.activeElement}catch(e){}}function E(e){var t=Be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,i,r=0,a=typeof e.getElementsByTagName!==De?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==De?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||ue.nodeName(i,t)?a.push(i):ue.merge(a,y(i,t));return void 0===t||t&&ue.nodeName(e,t)?ue.merge([e],a):a}function I(e){Pe.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){return ue.nodeName(e,"table")&&ue.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function S(e){return e.type=(null!==ue.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=Qe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n,i=0;null!=(n=e[i]);i++)ue._data(n,"globalEval",!t||ue._data(t[i],"globalEval"))}function w(e,t){if(1===t.nodeType&&ue.hasData(e)){var n,i,r,a=ue._data(e),o=ue._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)ue.event.add(t,n,s[n][i])}o.data&&(o.data=ue.extend({},o.data))}}function D(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!oe.noCloneEvent&&t[ue.expando]){r=ue._data(t);for(i in r.events)ue.removeEvent(t,i,r.handle);t.removeAttribute(ue.expando)}"script"===n&&t.text!==e.text?(S(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),oe.html5Clone&&e.innerHTML&&!ue.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Pe.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function R(e,t){var i,r=ue(t.createElement(e)).appendTo(t.body),a=n.getDefaultComputedStyle&&(i=n.getDefaultComputedStyle(r[0]))?i.display:ue.css(r[0],"display");return r.detach(),a}function N(e){var t=_e,n=it[e];return n||(n=R(e,t),"none"!==n&&n||(nt=(nt||ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(nt[0].contentWindow||nt[0].contentDocument).document,t.write(),t.close(),n=R(e,t),nt.detach()),it[e]=n),n}function x(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=vt.length;r--;)if(t=vt[r]+n,t in e)return t;return i}function O(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=ue._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&Oe(i)&&(a[o]=ue._data(i,"olddisplay",N(i.nodeName)))):(r=Oe(i),(n&&"none"!==n||!r)&&ue._data(i,"olddisplay",r?n:ue.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function L(e,t,n){var i=ft.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function P(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=ue.css(e,n+Ce[a],!0,r)),i?("content"===n&&(o-=ue.css(e,"padding"+Ce[a],!0,r)),"margin"!==n&&(o-=ue.css(e,"border"+Ce[a]+"Width",!0,r))):(o+=ue.css(e,"padding"+Ce[a],!0,r),"padding"!==n&&(o+=ue.css(e,"border"+Ce[a]+"Width",!0,r)));return o}function k(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=rt(e),o=oe.boxSizing&&"border-box"===ue.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=at(e,t,a),(r<0||null==r)&&(r=e.style[t]),st.test(r))return r;i=o&&(oe.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(o?"border":"content"),i,a)+"px"}function F(e,t,n,i,r){return new F.prototype.init(e,t,n,i,r)}function V(){return setTimeout((function(){mt=void 0})),mt=ue.now()}function M(e,t){var n,i={height:e},r=0;for(t=t?1:0;r<4;r+=2-t)n=Ce[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function U(e,t,n){for(var i,r=(St[t]||[]).concat(St["*"]),a=0,o=r.length;a<o;a++)if(i=r[a].call(n,t,e))return i}function B(e,t,n){var i,r,a,o,s,u,c,l,d=this,f={},p=e.style,h=e.nodeType&&Oe(e),g=ue._data(e,"fxshow");n.queue||(s=ue._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,d.always((function(){d.always((function(){s.unqueued--,ue.queue(e,"fx").length||s.empty.fire()}))}))),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=ue.css(e,"display"),l="none"===c?ue._data(e,"olddisplay")||N(e.nodeName):c,"inline"===l&&"none"===ue.css(e,"float")&&(oe.inlineBlockNeedsLayout&&"inline"!==N(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",oe.shrinkWrapBlocks()||d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})));for(i in t)if(r=t[i],Et.exec(r)){if(delete t[i],a=a||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;h=!0}f[i]=g&&g[i]||ue.style(e,i)}else c=void 0;if(ue.isEmptyObject(f))"inline"===("none"===c?N(e.nodeName):c)&&(p.display=c);else{g?"hidden"in g&&(h=g.hidden):g=ue._data(e,"fxshow",{}),a&&(g.hidden=!h),h?ue(e).show():d.done((function(){ue(e).hide()})),d.done((function(){var t;ue._removeData(e,"fxshow");for(t in f)ue.style(e,t,f[t])}));for(i in f)o=U(h?g[i]:0,i,d),i in g||(g[i]=o.start,h&&(o.end=o.start,o.start="width"===i||"height"===i?1:0))}}function j(e,t){var n,i,r,a,o;for(n in e)if(i=ue.camelCase(n),r=t[i],a=e[n],ue.isArray(a)&&(r=a[1],a=e[n]=a[0]),n!==i&&(e[i]=a,delete e[n]),o=ue.cssHooks[i],o&&"expand"in o){a=o.expand(a),delete e[i];for(n in a)n in e||(e[n]=a[n],t[n]=r)}else t[i]=r}function G(e,t,n){var i,r,a=0,o=Tt.length,s=ue.Deferred().always((function(){delete u.elem})),u=function(){if(r)return!1;for(var t=mt||V(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,a=1-i,o=0,u=c.tweens.length;o<u;o++)c.tweens[o].run(a);return s.notifyWith(e,[c,a,n]),a<1&&u?n:(s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:ue.extend({},t),opts:ue.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:mt||V(),duration:n.duration,tweens:[],createTween:function(t,n){var i=ue.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?s.resolveWith(e,[c,t]):s.rejectWith(e,[c,t]),this}}),l=c.props;for(j(l,c.opts.specialEasing);a<o;a++)if(i=Tt[a].call(c,e,l,c.opts))return i;return ue.map(l,U,c),ue.isFunction(c.opts.start)&&c.opts.start.call(e,c),ue.fx.timer(ue.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function H(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,a=t.toLowerCase().match(Se)||[];if(ue.isFunction(n))for(;i=a[r++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function z(e,t,n,i){function r(s){var u;return a[s]=!0,ue.each(e[s]||[],(function(e,s){var c=s(t,n,i);return"string"!=typeof c||o||a[c]?o?!(u=c):void 0:(t.dataTypes.unshift(c),r(c),!1)})),u}var a={},o=e===Kt;return r(t.dataTypes[0])||!a["*"]&&r("*")}function q(e,t){var n,i,r=ue.ajaxSettings.flatOptions||{};for(i in t)void 0!==t[i]&&((r[i]?e:n||(n={}))[i]=t[i]);return n&&ue.extend(!0,e,n),e}function Y(e,t,n){for(var i,r,a,o,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}if(u[0]in n)a=u[0];else{for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){a=o;break}i||(i=o)}a=a||i}if(a)return a!==u[0]&&u.unshift(a),n[a]}function K(e,t,n,i){var r,a,o,s,u,c={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(a=l.shift();a;)if(e.responseFields[a]&&(n[e.responseFields[a]]=t),!u&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=a,a=l.shift())if("*"===a)a=u;else if("*"!==u&&u!==a){if(o=c[u+" "+a]||c["* "+a],!o)for(r in c)if(s=r.split(" "),s[1]===a&&(o=c[u+" "+s[0]]||c["* "+s[0]])){o===!0?o=c[r]:c[r]!==!0&&(a=s[0],l.unshift(s[1]));break}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+u+" to "+a}}}return{state:"success",data:t}}function W(e,t,n,i){var r;if(ue.isArray(t))ue.each(t,(function(t,r){n||$t.test(e)?i(e,r):W(e+"["+("object"==typeof r?t:"")+"]",r,n,i)}));else if(n||"object"!==ue.type(t))i(e,t);else for(r in t)W(e+"["+r+"]",t[r],n,i)}function X(){try{return new n.XMLHttpRequest}catch(e){}}function $(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function Q(e){return ue.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var J=[],Z=J.slice,ee=J.concat,te=J.push,ne=J.indexOf,ie={},re=ie.toString,ae=ie.hasOwnProperty,oe={},se="1.11.3",ue=function(e,t){return new ue.fn.init(e,t)},ce=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,le=/^-ms-/,de=/-([\da-z])/gi,fe=function(e,t){return t.toUpperCase()};ue.fn=ue.prototype={jquery:se,constructor:ue,selector:"",length:0,toArray:function(){return Z.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Z.call(this)},pushStack:function(e){var t=ue.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ue.each(this,e,t)},map:function(e){return this.pushStack(ue.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(Z.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:te,sort:J.sort,splice:J.splice},ue.extend=ue.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),"object"==typeof o||ue.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(i in r)e=o[i],n=r[i],o!==n&&(c&&n&&(ue.isPlainObject(n)||(t=ue.isArray(n)))?(t?(t=!1,a=e&&ue.isArray(e)?e:[]):a=e&&ue.isPlainObject(e)?e:{},o[i]=ue.extend(c,a,n)):void 0!==n&&(o[i]=n));return o},ue.extend({expando:"jQuery"+(se+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ue.type(e)},isArray:Array.isArray||function(e){return"array"===ue.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!ue.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==ue.type(e)||e.nodeType||ue.isWindow(e))return!1;try{if(e.constructor&&!ae.call(e,"constructor")&&!ae.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(oe.ownLast)for(t in e)return ae.call(e,t);for(t in e);return void 0===t||ae.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ie[re.call(e)]||"object":typeof e},globalEval:function(e){e&&ue.trim(e)&&(n.execScript||function(e){n["eval"].call(n,e)})(e)},camelCase:function(e){return e.replace(le,"ms-").replace(de,fe)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,a=e.length,s=o(e);if(n){if(s)for(;r<a&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;r<a&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ce,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?ue.merge(n,"string"==typeof e?[e]:e):te.call(n,e)),n},inArray:function(e,t,n){var i;if(t){if(ne)return ne.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r},map:function(e,t,n){var i,r=0,a=e.length,s=o(e),u=[];if(s)for(;r<a;r++)i=t(e[r],r,n),null!=i&&u.push(i);else for(r in e)i=t(e[r],r,n),null!=i&&u.push(i);return ee.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(r=e[t],t=e,e=r),ue.isFunction(e))return n=Z.call(arguments,2),i=function(){return e.apply(t||this,n.concat(Z.call(arguments)))},i.guid=e.guid=e.guid||ue.guid++,i},now:function(){return+new Date},support:oe}),ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){ie["[object "+t+"]"]=t.toLowerCase()}));var pe=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
(function(e){function t(e,t,n,i){var r,a,o,s,u,c,d,p,h,g;if((t?t.ownerDocument||t:B)!==O&&C(t),t=t||O,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!i&&P){if(11!==s&&(r=_e.exec(e)))if(o=r[1]){if(9===s){if(a=t.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&M(t,a)&&a.id===o)return n.push(a),n}else{if(r[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=r[3])&&I.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(I.qsa&&(!k||!k.test(e))){if(p=d=U,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=b(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+f(c[u]);h=Ee.test(e)&&l(t.parentNode)||t,g=c.join(",")}if(g)try{return J.apply(n,h.querySelectorAll(g)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return D(e.replace(ue,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[U]=!0,e}function r(e){var t=O.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=e.length;i--;)T.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i((function(t){return t=+t,i((function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=G++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c=[j,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[U]||(t[U]={}),(s=u[i])&&s[0]===j&&s[1]===a)return c[2]=s[2];if(u[i]=c,c[2]=e(t,n,o))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function g(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function m(e,t,n,r,a,o){return r&&!r[U]&&(r=m(r)),a&&!a[U]&&(a=m(a,o)),i((function(i,o,s,u){var c,l,d,f=[],p=[],h=o.length,m=i||g(t||"*",s.nodeType?[s]:s,[]),_=!e||!i&&t?m:v(m,f,e,s,u),E=n?a||(i?e:h||r)?[]:o:_;if(n&&n(_,E,s,u),r)for(c=v(E,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(E[p[l]]=!(_[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=E.length;l--;)(d=E[l])&&c.push(_[l]=d);a(null,E=[],c,u)}for(l=E.length;l--;)(d=E[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else E=v(E===o?E.splice(h,E.length):E),a?a(null,o,E,u):J.apply(o,E)}))}function _(e){for(var t,n,i,r=e.length,a=T.relative[e[0].type],o=a||T.relative[" "],s=a?1:0,u=p((function(e){return e===t}),o,!0),c=p((function(e){return ee(t,e)>-1}),o,!0),l=[function(e,n,i){var r=!a&&(i||n!==R)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=T.relative[e[s].type])l=[p(h(l),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[U]){for(i=++s;i<r&&!T.relative[e[i].type];i++);return m(s>1&&h(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<i&&_(e.slice(s,i)),i<r&&_(e=e.slice(i)),i<r&&f(e))}l.push(n)}return h(l)}function E(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,h="0",g=i&&[],m=[],_=R,E=i||a&&T.find["TAG"]("*",c),y=j+=null==_?1:Math.random()||.1,I=E.length;for(c&&(R=o!==O&&o);h!==I&&null!=(l=E[h]);h++){if(a&&l){for(d=0;f=e[d++];)if(f(l,o,s)){u.push(l);break}c&&(j=y)}r&&((l=!f&&l)&&p--,i&&g.push(l))}if(p+=h,r&&h!==p){for(d=0;f=n[d++];)f(g,m,o,s);if(i){if(p>0)for(;h--;)g[h]||m[h]||(m[h]=$.call(u));m=v(m)}J.apply(u,m),c&&!i&&m.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(j=y,R=_),g};return r?i(o):o}var y,I,T,S,A,b,w,D,R,N,x,C,O,L,P,k,F,V,M,U="sizzle"+1*new Date,B=e.document,j=0,G=0,H=n(),z=n(),q=n(),Y=function(e,t){return e===t&&(x=!0),0},K=1<<31,W={}.hasOwnProperty,X=[],$=X.pop,Q=X.push,J=X.push,Z=X.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),ae="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,_e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ee=/[+~]/,ye=/'|\\/g,Ie=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Se=function(){C()};try{J.apply(X=Z.call(B.childNodes),B.childNodes),X[B.childNodes.length].nodeType}catch(e){J={apply:X.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}I=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},C=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:B;return i!==O&&9===i.nodeType&&i.documentElement?(O=i,L=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Se,!1):n.attachEvent&&n.attachEvent("onunload",Se)),P=!A(i),I.attributes=r((function(e){return e.className="i",!e.getAttribute("className")})),I.getElementsByTagName=r((function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length})),I.getElementsByClassName=me.test(i.getElementsByClassName),I.getById=r((function(e){return L.appendChild(e).id=U,!i.getElementsByName||!i.getElementsByName(U).length})),I.getById?(T.find["ID"]=function(e,t){if("undefined"!=typeof t.getElementById&&P){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter["ID"]=function(e){var t=e.replace(Ie,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find["ID"],T.filter["ID"]=function(e){var t=e.replace(Ie,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find["TAG"]=I.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):I.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a},T.find["CLASS"]=I.getElementsByClassName&&function(e,t){if(P)return t.getElementsByClassName(e)},F=[],k=[],(I.qsa=me.test(i.querySelectorAll))&&(r((function(e){L.appendChild(e).innerHTML="<a id='"+U+"'></a><select id='"+U+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+U+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+U+"+*").length||k.push(".#.+[+~]")})),r((function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")}))),(I.matchesSelector=me.test(V=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&r((function(e){I.disconnectedMatch=V.call(e,"div"),V.call(e,"[s!='']:x"),F.push("!=",oe)})),k=k.length&&new RegExp(k.join("|")),F=F.length&&new RegExp(F.join("|")),t=me.test(L.compareDocumentPosition),M=t||me.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=t?function(e,t){if(e===t)return x=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!I.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===B&&M(B,e)?-1:t===i||t.ownerDocument===B&&M(B,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return x=!0,0;var n,r=0,a=e.parentNode,s=t.parentNode,u=[e],c=[t];if(!a||!s)return e===i?-1:t===i?1:a?-1:s?1:N?ee(N,e)-ee(N,t):0;if(a===s)return o(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;return r?o(u[r],c[r]):u[r]===B?-1:c[r]===B?1:0},i):O},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&C(e),n=n.replace(de,"='$1']"),I.matchesSelector&&P&&(!F||!F.test(n))&&(!k||!k.test(n)))try{var i=V.call(e,n);if(i||I.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,O,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==O&&C(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&C(e);var n=T.attrHandle[t.toLowerCase()],i=n&&W.call(T.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==i?i:I.attributes||!P?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(x=!I.detectDuplicates,N=!I.sortStable&&e.slice(0),e.sort(Y),x){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return N=null,e},S=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=S(t);return n},T=t.selectors={cacheLength:50,createPseudo:i,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ie,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(Ie,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=b(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ie,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=H[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&H(e,(function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,i){return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,h,g=a!==o?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),_=!u&&!s;if(v){if(a){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[o?v.firstChild:v.lastChild],o&&_){for(l=v[U]||(v[U]={}),c=l[e]||[],p=c[0]===j&&c[1],f=c[0]===j&&c[2],d=p&&v.childNodes[p];d=++p&&d&&d[g]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){l[e]=[j,p,f];break}}else if(_&&(c=(t[U]||(t[U]={}))[e])&&c[0]===j)f=c[1];else for(;(d=++p&&d&&d[g]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++f||(_&&((d[U]||(d[U]={}))[e]=[j,f]),d!==t)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(e,n){var r,a=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[U]?a(n):a.length>1?(r=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?i((function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])})):function(e){return a(e,0,r)}):a}},pseudos:{not:i((function(e){var t=[],n=[],r=w(e.replace(ue,"$1"));return r[U]?i((function(e,t,n,i){for(var a,o=r(e,null,i,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))})):function(e,i,a){return t[0]=e,r(t,null,a,n),t[0]=null,!n.pop()}})),has:i((function(e){return function(n){return t(e,n).length>0}})),contains:i((function(e){return e=e.replace(Ie,Te),function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}})),lang:i((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ie,Te).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos["empty"](e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:c((function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e})),gt:c((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},T.pseudos["nth"]=T.pseudos["eq"];for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[y]=s(y);for(y in{submit:!0,reset:!0})T.pseudos[y]=u(y);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,b=t.tokenize=function(e,n){var i,r,a,o,s,u,c,l=z[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=T.preFilter;s;){i&&!(r=ce.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),a.push({value:i,type:r[0].replace(ue," ")}),s=s.slice(i.length));for(o in T.filter)!(r=he[o].exec(s))||c[o]&&!(r=c[o](r))||(i=r.shift(),a.push({value:i,type:o,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},w=t.compile=function(e,t){var n,i=[],r=[],a=q[e+" "];if(!a){for(t||(t=b(e)),n=t.length;n--;)a=_(t[n]),a[U]?i.push(a):r.push(a);a=q(e,E(r,i)),a.selector=e}return a},D=t.select=function(e,t,n,i){var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&b(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&I.getById&&9===t.nodeType&&P&&T.relative[a[1].type]){if(t=(T.find["ID"](o.matches[0].replace(Ie,Te),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=he["needsContext"].test(e)?0:a.length;r--&&(o=a[r],!T.relative[s=o.type]);)if((u=T.find[s])&&(i=u(o.matches[0].replace(Ie,Te),Ee.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return J.apply(n,i),n;break}}return(c||w(e,d))(i,t,!P,n,Ee.test(e)&&l(t.parentNode)||t),n},I.sortStable=U.split("").sort(Y).join("")===U,I.detectDuplicates=!!x,C(),I.sortDetached=r((function(e){return 1&e.compareDocumentPosition(O.createElement("div"))})),r((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||a("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),I.attributes&&r((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||a("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),r((function(e){return null==e.getAttribute("disabled")}))||a(te,(function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),t})(n);ue.find=pe,ue.expr=pe.selectors,ue.expr[":"]=ue.expr.pseudos,ue.unique=pe.uniqueSort,ue.text=pe.getText,ue.isXMLDoc=pe.isXML,ue.contains=pe.contains;var he=ue.expr.match.needsContext,ge=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ve=/^.[^:#\[\.,]*$/;ue.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?ue.find.matchesSelector(i,e)?[i]:[]:ue.find.matches(e,ue.grep(t,(function(e){return 1===e.nodeType})))},ue.fn.extend({find:function(e){var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(ue(e).filter((function(){for(t=0;t<r;t++)if(ue.contains(i[t],this))return!0})));for(t=0;t<r;t++)ue.find(e,i[t],n);return n=this.pushStack(r>1?ue.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&he.test(e)?ue(e):e||[],!1).length}});var me,_e=n.document,Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ye=ue.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Ee.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||me).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof ue?t[0]:t,ue.merge(this,ue.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:_e,!0)),ge.test(n[1])&&ue.isPlainObject(t))for(n in t)ue.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(i=_e.getElementById(n[2]),i&&i.parentNode){if(i.id!==n[2])return me.find(e);this.length=1,this[0]=i}return this.context=_e,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ue.isFunction(e)?"undefined"!=typeof me.ready?me.ready(e):e(ue):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),ue.makeArray(e,this))};ye.prototype=ue.fn,me=ue(_e);var Ie=/^(?:parents|prev(?:Until|All))/,Te={children:!0,contents:!0,next:!0,prev:!0};ue.extend({dir:function(e,t,n){for(var i=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!ue(r).is(n));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),ue.fn.extend({has:function(e){var t,n=ue(e,this),i=n.length;return this.filter((function(){for(t=0;t<i;t++)if(ue.contains(this,n[t]))return!0}))},closest:function(e,t){for(var n,i=0,r=this.length,a=[],o=he.test(e)||"string"!=typeof e?ue(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&ue.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?ue.unique(a):a)},index:function(e){return e?"string"==typeof e?ue.inArray(this[0],ue(e)):ue.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ue.unique(ue.merge(this.get(),ue(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ue.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ue.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ue.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return ue.dir(e,"nextSibling")},prevAll:function(e){return ue.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ue.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ue.dir(e,"previousSibling",n)},siblings:function(e){return ue.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ue.sibling(e.firstChild)},contents:function(e){return ue.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ue.merge([],e.childNodes)}},(function(e,t){ue.fn[e]=function(n,i){var r=ue.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=ue.filter(i,r)),this.length>1&&(Te[e]||(r=ue.unique(r)),Ie.test(e)&&(r=r.reverse())),this.pushStack(r)}}));var Se=/\S+/g,Ae={};ue.Callbacks=function(e){e="string"==typeof e?Ae[e]||c(e):ue.extend({},e);var t,n,i,r,a,o,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,i=!0,a=o||0,o=0,r=s.length,t=!0;s&&a<r;a++)if(s[a].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:d.disable())},d={add:function(){if(s){var i=s.length;!(function t(n){ue.each(n,(function(n,i){var r=ue.type(i);"function"===r?e.unique&&d.has(i)||s.push(i):i&&i.length&&"string"!==r&&t(i)}))})(arguments),t?r=s.length:n&&(o=i,l(n))}return this},remove:function(){return s&&ue.each(arguments,(function(e,n){for(var i;(i=ue.inArray(n,s,i))>-1;)s.splice(i,1),t&&(i<=r&&r--,i<=a&&a--)})),this},has:function(e){return e?ue.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],r=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||i&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},ue.extend({Deferred:function(e){var t=[["resolve","done",ue.Callbacks("once memory"),"resolved"],["reject","fail",ue.Callbacks("once memory"),"rejected"],["notify","progress",ue.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ue.Deferred((function(n){ue.each(t,(function(t,a){var o=ue.isFunction(e[t])&&e[t];r[a[1]]((function(){var e=o&&o.apply(this,arguments);e&&ue.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?ue.extend(e,i):i}},r={};return i.pipe=i.then,ue.each(t,(function(e,a){var o=a[2],s=a[3];i[a[1]]=o.add,s&&o.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},r[a[0]+"With"]=o.fireWith})),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,a=Z.call(arguments),o=a.length,s=1!==o||e&&ue.isFunction(e.promise)?o:0,u=1===s?e:ue.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?Z.call(arguments):r,i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)a[r]&&ue.isFunction(a[r].promise)?a[r].promise().done(c(r,i,a)).fail(u.reject).progress(c(r,n,t)):--s;return s||u.resolveWith(i,a),u.promise()}});var be;ue.fn.ready=function(e){return ue.ready.promise().done(e),this},ue.extend({isReady:!1,readyWait:1,holdReady:function(e){e?ue.readyWait++:ue.ready(!0)},ready:function(e){if(e===!0?!--ue.readyWait:!ue.isReady){if(!_e.body)return setTimeout(ue.ready);ue.isReady=!0,e!==!0&&--ue.readyWait>0||(be.resolveWith(_e,[ue]),ue.fn.triggerHandler&&(ue(_e).triggerHandler("ready"),ue(_e).off("ready")))}}}),ue.ready.promise=function(e){if(!be)if(be=ue.Deferred(),"complete"===_e.readyState)setTimeout(ue.ready);else if(_e.addEventListener)_e.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("load",d,!1);else{_e.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var t=!1;try{t=null==n.frameElement&&_e.documentElement}catch(e){}t&&t.doScroll&&!(function e(){if(!ue.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}l(),ue.ready()}})()}return be.promise(e)};var we,De="undefined";for(we in ue(oe))break;oe.ownLast="0"!==we,oe.inlineBlockNeedsLayout=!1,ue((function(){var e,t,n,i;n=_e.getElementsByTagName("body")[0],n&&n.style&&(t=_e.createElement("div"),i=_e.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==De&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",oe.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))})),(function(){var e=_e.createElement("div");if(null==oe.deleteExpando){oe.deleteExpando=!0;try{delete e.test}catch(e){oe.deleteExpando=!1}}e=null})(),ue.acceptData=function(e){var t=ue.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)};var Re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ne=/([A-Z])/g;ue.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?ue.cache[e[ue.expando]]:e[ue.expando],!!e&&!p(e)},data:function(e,t,n){return h(e,t,n)},removeData:function(e,t){return g(e,t)},_data:function(e,t,n){return h(e,t,n,!0)},_removeData:function(e,t){return g(e,t,!0)}}),ue.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=ue.data(a),1===a.nodeType&&!ue._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=ue.camelCase(i.slice(5)),f(a,i,r[i])));ue._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each((function(){ue.data(this,e)})):arguments.length>1?this.each((function(){ue.data(this,e,t)})):a?f(a,e,ue.data(a,e)):void 0},removeData:function(e){return this.each((function(){ue.removeData(this,e)}))}}),ue.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=ue._data(e,t),n&&(!i||ue.isArray(n)?i=ue._data(e,t,ue.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=ue.queue(e,t),i=n.length,r=n.shift(),a=ue._queueHooks(e,t),o=function(){ue.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ue._data(e,n)||ue._data(e,n,{empty:ue.Callbacks("once memory").add((function(){ue._removeData(e,t+"queue"),ue._removeData(e,n)}))})}}),ue.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ue.queue(this[0],e):void 0===t?this:this.each((function(){var n=ue.queue(this,e,t);ue._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ue.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){ue.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=ue.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=ue._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ce=["Top","Right","Bottom","Left"],Oe=function(e,t){return e=t||e,"none"===ue.css(e,"display")||!ue.contains(e.ownerDocument,e)},Le=ue.access=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===ue.type(n)){r=!0;for(s in n)ue.access(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,ue.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(ue(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Pe=/^(?:checkbox|radio)$/i;!(function(){var e=_e.createElement("input"),t=_e.createElement("div"),n=_e.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",oe.leadingWhitespace=3===t.firstChild.nodeType,oe.tbody=!t.getElementsByTagName("tbody").length,oe.htmlSerialize=!!t.getElementsByTagName("link").length,oe.html5Clone="<:nav></:nav>"!==_e.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),oe.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",oe.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",oe.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,oe.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){oe.noCloneEvent=!1})),t.cloneNode(!0).click()),null==oe.deleteExpando){oe.deleteExpando=!0;try{delete t.test}catch(e){oe.deleteExpando=!1}}})(),(function(){var e,t,i=_e.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(oe[e+"Bubbles"]=t in n)||(i.setAttribute(t,"t"),oe[e+"Bubbles"]=i.attributes[t].expando===!1);i=null})();var ke=/^(?:input|select|textarea)$/i,Fe=/^key/,Ve=/^(?:mouse|pointer|contextmenu)|click/,Me=/^(?:focusinfocus|focusoutblur)$/,Ue=/^([^.]*)(?:\.(.+)|)$/;ue.event={global:{},add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,g,v=ue._data(e);if(v){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=ue.guid++),(o=v.events)||(o=v.events={}),(l=v.handle)||(l=v.handle=function(e){return typeof ue===De||e&&ue.event.triggered===e.type?void 0:ue.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(Se)||[""],s=t.length;s--;)a=Ue.exec(t[s])||[],p=g=a[1],h=(a[2]||"").split(".").sort(),p&&(c=ue.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=ue.event.special[p]||{},d=ue.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&ue.expr.match.needsContext.test(r),namespace:h.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,h,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),ue.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,g,v=ue.hasData(e)&&ue._data(e);if(v&&(l=v.events)){for(t=(t||"").match(Se)||[""],c=t.length;c--;)if(s=Ue.exec(t[c])||[],p=g=s[1],h=(s[2]||"").split(".").sort(),p){for(d=ue.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
u=a=f.length;a--;)o=f[a],!r&&g!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));u&&!f.length&&(d.teardown&&d.teardown.call(e,h,v.handle)!==!1||ue.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)ue.event.remove(e,p+t[c],n,i,!0);ue.isEmptyObject(l)&&(delete v.handle,ue._removeData(e,"events"))}},trigger:function(e,t,i,r){var a,o,s,u,c,l,d,f=[i||_e],p=ae.call(e,"type")?e.type:e,h=ae.call(e,"namespace")?e.namespace.split("."):[];if(s=l=i=i||_e,3!==i.nodeType&&8!==i.nodeType&&!Me.test(p+ue.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[ue.expando]?e:new ue.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=h.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:ue.makeArray(t,[e]),c=ue.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,t)!==!1)){if(!r&&!c.noBubble&&!ue.isWindow(i)){for(u=c.delegateType||p,Me.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||_e)&&f.push(l.defaultView||l.parentWindow||n)}for(d=0;(s=f[d++])&&!e.isPropagationStopped();)e.type=d>1?u:c.bindType||p,a=(ue._data(s,"events")||{})[e.type]&&ue._data(s,"handle"),a&&a.apply(s,t),a=o&&s[o],a&&a.apply&&ue.acceptData(s)&&(e.result=a.apply(s,t),e.result===!1&&e.preventDefault());if(e.type=p,!r&&!e.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),t)===!1)&&ue.acceptData(i)&&o&&i[p]&&!ue.isWindow(i)){l=i[o],l&&(i[o]=null),ue.event.triggered=p;try{i[p]()}catch(e){}ue.event.triggered=void 0,l&&(i[o]=l)}return e.result}},dispatch:function(e){e=ue.event.fix(e);var t,n,i,r,a,o=[],s=Z.call(arguments),u=(ue._data(this,"events")||{})[e.type]||[],c=ue.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=ue.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,a=0;(i=r.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,n=((ue.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],a=0;a<s;a++)i=t[a],n=i.selector+" ",void 0===r[n]&&(r[n]=i.needsContext?ue(n,this).index(u)>=0:ue.find(n,this,null,[u]).length),r[n]&&r.push(i);r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[ue.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Ve.test(r)?this.mouseHooks:Fe.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new ue.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||_e),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||_e,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==_()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(ue.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return ue.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=ue.extend(new ue.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?ue.event.trigger(r,null,t):ue.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},ue.removeEvent=_e.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var i="on"+t;e.detachEvent&&(typeof e[i]===De&&(e[i]=null),e.detachEvent(i,n))},ue.Event=function(e,t){return this instanceof ue.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:m):this.type=e,t&&ue.extend(this,t),this.timeStamp=e&&e.timeStamp||ue.now(),void(this[ue.expando]=!0)):new ue.Event(e,t)},ue.Event.prototype={isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},ue.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){ue.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||ue.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),oe.submitBubbles||(ue.event.special.submit={setup:function(){return!ue.nodeName(this,"form")&&void ue.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=ue.nodeName(t,"input")||ue.nodeName(t,"button")?t.form:void 0;n&&!ue._data(n,"submitBubbles")&&(ue.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),ue._data(n,"submitBubbles",!0))}))},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&ue.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!ue.nodeName(this,"form")&&void ue.event.remove(this,"._submit")}}),oe.changeBubbles||(ue.event.special.change={setup:function(){return ke.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(ue.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),ue.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),ue.event.simulate("change",this,e,!0)}))),!1):void ue.event.add(this,"beforeactivate._change",(function(e){var t=e.target;ke.test(t.nodeName)&&!ue._data(t,"changeBubbles")&&(ue.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||ue.event.simulate("change",this.parentNode,e,!0)})),ue._data(t,"changeBubbles",!0))}))},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return ue.event.remove(this,"._change"),!ke.test(this.nodeName)}}),oe.focusinBubbles||ue.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){ue.event.simulate(t,e.target,ue.event.fix(e),!0)};ue.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=ue._data(i,t);r||i.addEventListener(e,n,!0),ue._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=ue._data(i,t)-1;r?ue._data(i,t,r):(i.removeEventListener(e,n,!0),ue._removeData(i,t))}}})),ue.fn.extend({on:function(e,t,n,i,r){var a,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=m;else if(!i)return this;return 1===r&&(o=i,i=function(e){return ue().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=ue.guid++)),this.each((function(){ue.event.add(this,e,i,n,t)}))},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ue(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=m),this.each((function(){ue.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){ue.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return ue.event.trigger(e,t,n,!0)}});var Be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",je=/ jQuery\d+="(?:null|\d+)"/g,Ge=new RegExp("<(?:"+Be+")[\\s/>]","i"),He=/^\s+/,ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,qe=/<([\w:]+)/,Ye=/<tbody/i,Ke=/<|&#?\w+;/,We=/<(?:script|style|link)/i,Xe=/checked\s*(?:[^=]|=\s*.checked.)/i,$e=/^$|\/(?:java|ecma)script/i,Qe=/^true\/(.*)/,Je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ze={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:oe.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},et=E(_e),tt=et.appendChild(_e.createElement("div"));Ze.optgroup=Ze.option,Ze.tbody=Ze.tfoot=Ze.colgroup=Ze.caption=Ze.thead,Ze.th=Ze.td,ue.extend({clone:function(e,t,n){var i,r,a,o,s,u=ue.contains(e.ownerDocument,e);if(oe.html5Clone||ue.isXMLDoc(e)||!Ge.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(tt.innerHTML=e.outerHTML,tt.removeChild(a=tt.firstChild)),!(oe.noCloneEvent&&oe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ue.isXMLDoc(e)))for(i=y(a),s=y(e),o=0;null!=(r=s[o]);++o)i[o]&&D(r,i[o]);if(t)if(n)for(s=s||y(e),i=i||y(a),o=0;null!=(r=s[o]);o++)w(r,i[o]);else w(e,a);return i=y(a,"script"),i.length>0&&b(i,!u&&y(e,"script")),i=s=r=null,a},buildFragment:function(e,t,n,i){for(var r,a,o,s,u,c,l,d=e.length,f=E(t),p=[],h=0;h<d;h++)if(a=e[h],a||0===a)if("object"===ue.type(a))ue.merge(p,a.nodeType?[a]:a);else if(Ke.test(a)){for(s=s||f.appendChild(t.createElement("div")),u=(qe.exec(a)||["",""])[1].toLowerCase(),l=Ze[u]||Ze._default,s.innerHTML=l[1]+a.replace(ze,"<$1></$2>")+l[2],r=l[0];r--;)s=s.lastChild;if(!oe.leadingWhitespace&&He.test(a)&&p.push(t.createTextNode(He.exec(a)[0])),!oe.tbody)for(a="table"!==u||Ye.test(a)?"<table>"!==l[1]||Ye.test(a)?0:s:s.firstChild,r=a&&a.childNodes.length;r--;)ue.nodeName(c=a.childNodes[r],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(ue.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(a));for(s&&f.removeChild(s),oe.appendChecked||ue.grep(y(p,"input"),I),h=0;a=p[h++];)if((!i||ue.inArray(a,i)===-1)&&(o=ue.contains(a.ownerDocument,a),s=y(f.appendChild(a),"script"),o&&b(s),n))for(r=0;a=s[r++];)$e.test(a.type||"")&&n.push(a);return s=null,f},cleanData:function(e,t){for(var n,i,r,a,o=0,s=ue.expando,u=ue.cache,c=oe.deleteExpando,l=ue.event.special;null!=(n=e[o]);o++)if((t||ue.acceptData(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?ue.event.remove(n,i):ue.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c?delete n[s]:typeof n.removeAttribute!==De?n.removeAttribute(s):n[s]=null,J.push(r))}}}),ue.fn.extend({text:function(e){return Le(this,(function(e){return void 0===e?ue.text(this):this.empty().append((this[0]&&this[0].ownerDocument||_e).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,i=e?ue.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||ue.cleanData(y(n)),n.parentNode&&(t&&ue.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&ue.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&ue.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return ue.clone(this,e,t)}))},html:function(e){return Le(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(je,""):void 0;if("string"==typeof e&&!We.test(e)&&(oe.htmlSerialize||!Ge.test(e))&&(oe.leadingWhitespace||!He.test(e))&&!Ze[(qe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(ze,"<$1></$2>");try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(ue.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,(function(t){e=this.parentNode,ue.cleanData(y(this)),e&&e.replaceChild(t,this)})),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=ee.apply([],e);var n,i,r,a,o,s,u=0,c=this.length,l=this,d=c-1,f=e[0],p=ue.isFunction(f);if(p||c>1&&"string"==typeof f&&!oe.checkClone&&Xe.test(f))return this.each((function(n){var i=l.eq(n);p&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)}));if(c&&(s=ue.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(a=ue.map(y(s,"script"),S),r=a.length;u<c;u++)i=s,u!==d&&(i=ue.clone(i,!0,!0),r&&ue.merge(a,y(i,"script"))),t.call(this[u],i,u);if(r)for(o=a[a.length-1].ownerDocument,ue.map(a,A),u=0;u<r;u++)i=a[u],$e.test(i.type||"")&&!ue._data(i,"globalEval")&&ue.contains(o,i)&&(i.src?ue._evalUrl&&ue._evalUrl(i.src):ue.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Je,"")));s=n=null}return this}}),ue.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){ue.fn[e]=function(e){for(var n,i=0,r=[],a=ue(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),ue(a[i])[t](n),te.apply(r,n.get());return this.pushStack(r)}}));var nt,it={};!(function(){var e;oe.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,i;return n=_e.getElementsByTagName("body")[0],n&&n.style?(t=_e.createElement("div"),i=_e.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==De&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(_e.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(i),e):void 0}})();var rt,at,ot=/^margin/,st=new RegExp("^("+xe+")(?!px)[a-z%]+$","i"),ut=/^(top|right|bottom|left)$/;n.getComputedStyle?(rt=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)},at=function(e,t,n){var i,r,a,o,s=e.style;return n=n||rt(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||ue.contains(e.ownerDocument,e)||(o=ue.style(e,t)),st.test(o)&&ot.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a)),void 0===o?o:o+""}):_e.documentElement.currentStyle&&(rt=function(e){return e.currentStyle},at=function(e,t,n){var i,r,a,o,s=e.style;return n=n||rt(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),st.test(o)&&!ut.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"}),(function(){function e(){var e,t,i,r;t=_e.getElementsByTagName("body")[0],t&&t.style&&(e=_e.createElement("div"),i=_e.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a=o=!1,u=!0,n.getComputedStyle&&(a="1%"!==(n.getComputedStyle(e,null)||{}).top,o="4px"===(n.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(_e.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(i))}var t,i,r,a,o,s,u;t=_e.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=r&&r.style,i&&(i.cssText="float:left;opacity:.5",oe.opacity="0.5"===i.opacity,oe.cssFloat=!!i.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",oe.clearCloneStyle="content-box"===t.style.backgroundClip,oe.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,ue.extend(oe,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==o&&e(),o},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){return null==u&&e(),u}}))})(),ue.swap=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r};var ct=/alpha\([^)]*\)/i,lt=/opacity\s*=\s*([^)]*)/,dt=/^(none|table(?!-c[ea]).+)/,ft=new RegExp("^("+xe+")(.*)$","i"),pt=new RegExp("^([+-])=("+xe+")","i"),ht={position:"absolute",visibility:"hidden",display:"block"},gt={letterSpacing:"0",fontWeight:"400"},vt=["Webkit","O","Moz","ms"];ue.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=at(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":oe.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=ue.camelCase(t),u=e.style;if(t=ue.cssProps[s]||(ue.cssProps[s]=C(u,s)),o=ue.cssHooks[t]||ue.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=pt.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(ue.css(e,t)),a="number"),null!=n&&n===n&&("number"!==a||ue.cssNumber[s]||(n+="px"),oe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=ue.camelCase(t);return t=ue.cssProps[s]||(ue.cssProps[s]=C(e.style,s)),o=ue.cssHooks[t]||ue.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=at(e,t,i)),"normal"===a&&t in gt&&(a=gt[t]),""===n||n?(r=parseFloat(a),n===!0||ue.isNumeric(r)?r||0:a):a}}),ue.each(["height","width"],(function(e,t){ue.cssHooks[t]={get:function(e,n,i){if(n)return dt.test(ue.css(e,"display"))&&0===e.offsetWidth?ue.swap(e,ht,(function(){return k(e,t,i)})):k(e,t,i)},set:function(e,n,i){var r=i&&rt(e);return L(e,n,i?P(e,t,i,oe.boxSizing&&"border-box"===ue.css(e,"boxSizing",!1,r),r):0)}}})),oe.opacity||(ue.cssHooks.opacity={get:function(e,t){return lt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=ue.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===ue.trim(a.replace(ct,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=ct.test(a)?a.replace(ct,r):a+" "+r)}}),ue.cssHooks.marginRight=x(oe.reliableMarginRight,(function(e,t){if(t)return ue.swap(e,{display:"inline-block"},at,[e,"marginRight"])})),ue.each({margin:"",padding:"",border:"Width"},(function(e,t){ue.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+Ce[i]+t]=a[i]||a[i-2]||a[0];return r}},ot.test(e)||(ue.cssHooks[e+t].set=L)})),ue.fn.extend({css:function(e,t){return Le(this,(function(e,t,n){var i,r,a={},o=0;if(ue.isArray(t)){for(i=rt(e),r=t.length;o<r;o++)a[t[o]]=ue.css(e,t[o],!1,i);return a}return void 0!==n?ue.style(e,t,n):ue.css(e,t)}),e,t,arguments.length>1)},show:function(){return O(this,!0)},hide:function(){return O(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){Oe(this)?ue(this).show():ue(this).hide()}))}}),ue.Tween=F,F.prototype={constructor:F,init:function(e,t,n,i,r,a){this.elem=e,this.prop=n,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=a||(ue.cssNumber[n]?"":"px")},cur:function(){var e=F.propHooks[this.prop];return e&&e.get?e.get(this):F.propHooks._default.get(this)},run:function(e){var t,n=F.propHooks[this.prop];return this.options.duration?this.pos=t=ue.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ue.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ue.fx.step[e.prop]?ue.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ue.cssProps[e.prop]]||ue.cssHooks[e.prop])?ue.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ue.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ue.fx=F.prototype.init,ue.fx.step={};var mt,_t,Et=/^(?:toggle|show|hide)$/,yt=new RegExp("^(?:([+-])=|)("+xe+")([a-z%]*)$","i"),It=/queueHooks$/,Tt=[B],St={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=yt.exec(t),a=r&&r[3]||(ue.cssNumber[e]?"":"px"),o=(ue.cssNumber[e]||"px"!==a&&+i)&&yt.exec(ue.css(n.elem,e)),s=1,u=20;if(o&&o[3]!==a){a=a||o[3],r=r||[],o=+i||1;do s=s||".5",o/=s,ue.style(n.elem,e,o+a);while(s!==(s=n.cur()/i)&&1!==s&&--u)}return r&&(o=n.start=+o||+i||0,n.unit=a,n.end=r[1]?o+(r[1]+1)*r[2]:+r[2]),n}]};ue.Animation=ue.extend(G,{tweener:function(e,t){ue.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,i=0,r=e.length;i<r;i++)n=e[i],St[n]=St[n]||[],St[n].unshift(t)},prefilter:function(e,t){t?Tt.unshift(e):Tt.push(e)}}),ue.speed=function(e,t,n){var i=e&&"object"==typeof e?ue.extend({},e):{complete:n||!n&&t||ue.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ue.isFunction(t)&&t};return i.duration=ue.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ue.fx.speeds?ue.fx.speeds[i.duration]:ue.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){ue.isFunction(i.old)&&i.old.call(this),i.queue&&ue.dequeue(this,i.queue)},i},ue.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=ue.isEmptyObject(e),a=ue.speed(t,n,i),o=function(){var t=G(this,ue.extend({},e),a);(r||ue._data(this,"finish"))&&t.stop(!0)};return o.finish=o,r||a.queue===!1?this.each(o):this.queue(a.queue,o)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each((function(){var t=!0,r=null!=e&&e+"queueHooks",a=ue.timers,o=ue._data(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o)o[r]&&o[r].stop&&It.test(r)&&i(o[r]);for(r=a.length;r--;)a[r].elem!==this||null!=e&&a[r].queue!==e||(a[r].anim.stop(n),t=!1,a.splice(r,1));!t&&n||ue.dequeue(this,e)}))},finish:function(e){return e!==!1&&(e=e||"fx"),this.each((function(){var t,n=ue._data(this),i=n[e+"queue"],r=n[e+"queueHooks"],a=ue.timers,o=i?i.length:0;for(n.finish=!0,ue.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=a.length;t--;)a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));for(t=0;t<o;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish}))}}),ue.each(["toggle","show","hide"],(function(e,t){var n=ue.fn[t];ue.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(M(t,!0),e,i,r)}})),ue.each({slideDown:M("show"),slideUp:M("hide"),slideToggle:M("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){ue.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),ue.timers=[],ue.fx.tick=function(){var e,t=ue.timers,n=0;for(mt=ue.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||ue.fx.stop(),mt=void 0},ue.fx.timer=function(e){ue.timers.push(e),e()?ue.fx.start():ue.timers.pop()},ue.fx.interval=13,ue.fx.start=function(){_t||(_t=setInterval(ue.fx.tick,ue.fx.interval))},ue.fx.stop=function(){clearInterval(_t),_t=null},ue.fx.speeds={slow:600,fast:200,_default:400},ue.fn.delay=function(e,t){return e=ue.fx?ue.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}}))},(function(){var e,t,n,i,r;t=_e.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=t.getElementsByTagName("a")[0],n=_e.createElement("select"),r=n.appendChild(_e.createElement("option")),e=t.getElementsByTagName("input")[0],i.style.cssText="top:1px",oe.getSetAttribute="t"!==t.className,oe.style=/top/.test(i.getAttribute("style")),oe.hrefNormalized="/a"===i.getAttribute("href"),oe.checkOn=!!e.value,oe.optSelected=r.selected,oe.enctype=!!_e.createElement("form").enctype,n.disabled=!0,oe.optDisabled=!r.disabled,e=_e.createElement("input"),e.setAttribute("value",""),oe.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),oe.radioValue="t"===e.value})();var At=/\r/g;ue.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=ue.isFunction(e),this.each((function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,ue(this).val()):e,null==r?r="":"number"==typeof r?r+="":ue.isArray(r)&&(r=ue.map(r,(function(e){return null==e?"":e+""}))),t=ue.valHooks[this.type]||ue.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}));if(r)return t=ue.valHooks[r.type]||ue.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(At,""):null==n?"":n)}}}),ue.extend({valHooks:{option:{get:function(e){var t=ue.find.attr(e,"value");return null!=t?t:ue.trim(ue.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(oe.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ue.nodeName(n.parentNode,"optgroup"))){if(t=ue(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=ue.makeArray(t),o=r.length;o--;)if(i=r[o],ue.inArray(ue.valHooks.option.get(i),a)>=0)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),ue.each(["radio","checkbox"],(function(){ue.valHooks[this]={set:function(e,t){if(ue.isArray(t))return e.checked=ue.inArray(ue(e).val(),t)>=0}},oe.checkOn||(ue.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var bt,wt,Dt=ue.expr.attrHandle,Rt=/^(?:checked|selected)$/i,Nt=oe.getSetAttribute,xt=oe.input;ue.fn.extend({attr:function(e,t){return Le(this,ue.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){ue.removeAttr(this,e)}))}}),ue.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===De?ue.prop(e,t,n):(1===a&&ue.isXMLDoc(e)||(t=t.toLowerCase(),i=ue.attrHooks[t]||(ue.expr.match.bool.test(t)?wt:bt)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=ue.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void ue.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(Se);if(a&&1===e.nodeType)for(;n=a[r++];)i=ue.propFix[n]||n,ue.expr.match.bool.test(n)?xt&&Nt||!Rt.test(n)?e[i]=!1:e[ue.camelCase("default-"+n)]=e[i]=!1:ue.attr(e,n,""),e.removeAttribute(Nt?n:i)},attrHooks:{type:{set:function(e,t){if(!oe.radioValue&&"radio"===t&&ue.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),wt={set:function(e,t,n){return t===!1?ue.removeAttr(e,n):xt&&Nt||!Rt.test(n)?e.setAttribute(!Nt&&ue.propFix[n]||n,n):e[ue.camelCase("default-"+n)]=e[n]=!0,n}},ue.each(ue.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=Dt[t]||ue.find.attr;Dt[t]=xt&&Nt||!Rt.test(t)?function(e,t,i){var r,a;return i||(a=Dt[t],Dt[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,Dt[t]=a),r}:function(e,t,n){if(!n)return e[ue.camelCase("default-"+t)]?t.toLowerCase():null}})),xt&&Nt||(ue.attrHooks.value={set:function(e,t,n){return ue.nodeName(e,"input")?void(e.defaultValue=t):bt&&bt.set(e,t,n)}}),Nt||(bt={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},Dt.id=Dt.name=Dt.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},ue.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:bt.set},ue.attrHooks.contenteditable={set:function(e,t,n){bt.set(e,""!==t&&t,n)}},ue.each(["width","height"],(function(e,t){ue.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),oe.style||(ue.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ct=/^(?:input|select|textarea|button|object)$/i,Ot=/^(?:a|area)$/i;ue.fn.extend({prop:function(e,t){return Le(this,ue.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ue.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),ue.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,a,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return a=1!==o||!ue.isXMLDoc(e),a&&(t=ue.propFix[t]||t,r=ue.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t];
},propHooks:{tabIndex:{get:function(e){var t=ue.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Ot.test(e.nodeName)&&e.href?0:-1}}}}),oe.hrefNormalized||ue.each(["href","src"],(function(e,t){ue.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),oe.optSelected||(ue.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),ue.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){ue.propFix[this.toLowerCase()]=this})),oe.enctype||(ue.propFix.enctype="encoding");var Lt=/[\t\r\n\f]/g;ue.fn.extend({addClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c="string"==typeof e&&e;if(ue.isFunction(e))return this.each((function(t){ue(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(Se)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Lt," "):" ")){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o=ue.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c=0===arguments.length||"string"==typeof e&&e;if(ue.isFunction(e))return this.each((function(t){ue(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(Se)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Lt," "):"")){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");o=e?ue.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ue.isFunction(e)?this.each((function(n){ue(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var t,i=0,r=ue(this),a=e.match(Se)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==De&&"boolean"!==n||(this.className&&ue._data(this,"__className__",this.className),this.className=this.className||e===!1?"":ue._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Lt," ").indexOf(t)>=0)return!0;return!1}}),ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){ue.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),ue.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Pt=ue.now(),kt=/\?/,Ft=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ue.parseJSON=function(e){if(n.JSON&&n.JSON.parse)return n.JSON.parse(e+"");var t,i=null,r=ue.trim(e+"");return r&&!ue.trim(r.replace(Ft,(function(e,n,r,a){return t&&n&&(i=0),0===i?e:(t=r||n,i+=!a-!r,"")})))?Function("return "+r)():ue.error("Invalid JSON: "+e)},ue.parseXML=function(e){var t,i;if(!e||"string"!=typeof e)return null;try{n.DOMParser?(i=new DOMParser,t=i.parseFromString(e,"text/xml")):(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(e){t=void 0}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||ue.error("Invalid XML: "+e),t};var Vt,Mt,Ut=/#.*$/,Bt=/([?&])_=[^&]*/,jt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Gt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,zt=/^\/\//,qt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Yt={},Kt={},Wt="*/".concat("*");try{Mt=location.href}catch(e){Mt=_e.createElement("a"),Mt.href="",Mt=Mt.href}Vt=qt.exec(Mt.toLowerCase())||[],ue.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Mt,type:"GET",isLocal:Gt.test(Vt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ue.parseJSON,"text xml":ue.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?q(q(e,ue.ajaxSettings),t):q(ue.ajaxSettings,e)},ajaxPrefilter:H(Yt),ajaxTransport:H(Kt),ajax:function(e,t){function n(e,t,n,i){var r,l,m,_,y,T=t;2!==E&&(E=2,s&&clearTimeout(s),c=void 0,o=i||"",I.readyState=e>0?4:0,r=e>=200&&e<300||304===e,n&&(_=Y(d,I,n)),_=K(d,_,I,r),r?(d.ifModified&&(y=I.getResponseHeader("Last-Modified"),y&&(ue.lastModified[a]=y),y=I.getResponseHeader("etag"),y&&(ue.etag[a]=y)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=_.state,l=_.data,m=_.error,r=!m)):(m=T,!e&&T||(T="error",e<0&&(e=0))),I.status=e,I.statusText=(t||T)+"",r?h.resolveWith(f,[l,T,I]):h.rejectWith(f,[I,T,m]),I.statusCode(v),v=void 0,u&&p.trigger(r?"ajaxSuccess":"ajaxError",[I,d,r?l:m]),g.fireWith(f,[I,T]),u&&(p.trigger("ajaxComplete",[I,d]),--ue.active||ue.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,a,o,s,u,c,l,d=ue.ajaxSetup({},t),f=d.context||d,p=d.context&&(f.nodeType||f.jquery)?ue(f):ue.event,h=ue.Deferred(),g=ue.Callbacks("once memory"),v=d.statusCode||{},m={},_={},E=0,y="canceled",I={readyState:0,getResponseHeader:function(e){var t;if(2===E){if(!l)for(l={};t=jt.exec(o);)l[t[1].toLowerCase()]=t[2];t=l[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===E?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return E||(e=_[n]=_[n]||e,m[e]=t),this},overrideMimeType:function(e){return E||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(E<2)for(t in e)v[t]=[v[t],e[t]];else I.always(e[I.status]);return this},abort:function(e){var t=e||y;return c&&c.abort(t),n(0,t),this}};if(h.promise(I).complete=g.add,I.success=I.done,I.error=I.fail,d.url=((e||d.url||Mt)+"").replace(Ut,"").replace(zt,Vt[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=ue.trim(d.dataType||"*").toLowerCase().match(Se)||[""],null==d.crossDomain&&(i=qt.exec(d.url.toLowerCase()),d.crossDomain=!(!i||i[1]===Vt[1]&&i[2]===Vt[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(Vt[3]||("http:"===Vt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=ue.param(d.data,d.traditional)),z(Yt,d,t,I),2===E)return I;u=ue.event&&d.global,u&&0===ue.active++&&ue.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Ht.test(d.type),a=d.url,d.hasContent||(d.data&&(a=d.url+=(kt.test(a)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=Bt.test(a)?a.replace(Bt,"$1_="+Pt++):a+(kt.test(a)?"&":"?")+"_="+Pt++)),d.ifModified&&(ue.lastModified[a]&&I.setRequestHeader("If-Modified-Since",ue.lastModified[a]),ue.etag[a]&&I.setRequestHeader("If-None-Match",ue.etag[a])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&I.setRequestHeader("Content-Type",d.contentType),I.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Wt+"; q=0.01":""):d.accepts["*"]);for(r in d.headers)I.setRequestHeader(r,d.headers[r]);if(d.beforeSend&&(d.beforeSend.call(f,I,d)===!1||2===E))return I.abort();y="abort";for(r in{success:1,error:1,complete:1})I[r](d[r]);if(c=z(Kt,d,t,I)){I.readyState=1,u&&p.trigger("ajaxSend",[I,d]),d.async&&d.timeout>0&&(s=setTimeout((function(){I.abort("timeout")}),d.timeout));try{E=1,c.send(m,n)}catch(e){if(!(E<2))throw e;n(-1,e)}}else n(-1,"No Transport");return I},getJSON:function(e,t,n){return ue.get(e,t,n,"json")},getScript:function(e,t){return ue.get(e,void 0,t,"script")}}),ue.each(["get","post"],(function(e,t){ue[t]=function(e,n,i,r){return ue.isFunction(n)&&(r=r||i,i=n,n=void 0),ue.ajax({url:e,type:t,dataType:r,data:n,success:i})}})),ue._evalUrl=function(e){return ue.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ue.fn.extend({wrapAll:function(e){if(ue.isFunction(e))return this.each((function(t){ue(this).wrapAll(e.call(this,t))}));if(this[0]){var t=ue(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return ue.isFunction(e)?this.each((function(t){ue(this).wrapInner(e.call(this,t))})):this.each((function(){var t=ue(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=ue.isFunction(e);return this.each((function(n){ue(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){ue.nodeName(this,"body")||ue(this).replaceWith(this.childNodes)})).end()}}),ue.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!oe.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||ue.css(e,"display"))},ue.expr.filters.visible=function(e){return!ue.expr.filters.hidden(e)};var Xt=/%20/g,$t=/\[\]$/,Qt=/\r?\n/g,Jt=/^(?:submit|button|image|reset|file)$/i,Zt=/^(?:input|select|textarea|keygen)/i;ue.param=function(e,t){var n,i=[],r=function(e,t){t=ue.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=ue.ajaxSettings&&ue.ajaxSettings.traditional),ue.isArray(e)||e.jquery&&!ue.isPlainObject(e))ue.each(e,(function(){r(this.name,this.value)}));else for(n in e)W(n,e[n],t,r);return i.join("&").replace(Xt,"+")},ue.fn.extend({serialize:function(){return ue.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=ue.prop(this,"elements");return e?ue.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!ue(this).is(":disabled")&&Zt.test(this.nodeName)&&!Jt.test(e)&&(this.checked||!Pe.test(e))})).map((function(e,t){var n=ue(this).val();return null==n?null:ue.isArray(n)?ue.map(n,(function(e){return{name:t.name,value:e.replace(Qt,"\r\n")}})):{name:t.name,value:n.replace(Qt,"\r\n")}})).get()}}),ue.ajaxSettings.xhr=void 0!==n.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||$()}:X;var en=0,tn={},nn=ue.ajaxSettings.xhr();n.attachEvent&&n.attachEvent("onunload",(function(){for(var e in tn)tn[e](void 0,!0)})),oe.cors=!!nn&&"withCredentials"in nn,nn=oe.ajax=!!nn,nn&&ue.ajaxTransport((function(e){if(!e.crossDomain||oe.cors){var t;return{send:function(n,i){var r,a=e.xhr(),o=++en;if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)a[r]=e.xhrFields[r];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(r in n)void 0!==n[r]&&a.setRequestHeader(r,n[r]+"");a.send(e.hasContent&&e.data||null),t=function(n,r){var s,u,c;if(t&&(r||4===a.readyState))if(delete tn[o],t=void 0,a.onreadystatechange=ue.noop,r)4!==a.readyState&&a.abort();else{c={},s=a.status,"string"==typeof a.responseText&&(c.text=a.responseText);try{u=a.statusText}catch(e){u=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=c.text?200:404}c&&i(s,u,c,a.getAllResponseHeaders())},e.async?4===a.readyState?setTimeout(t):a.onreadystatechange=tn[o]=t:t()},abort:function(){t&&t(void 0,!0)}}}})),ue.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ue.globalEval(e),e}}}),ue.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)})),ue.ajaxTransport("script",(function(e){if(e.crossDomain){var t,n=_e.head||ue("head")[0]||_e.documentElement;return{send:function(i,r){t=_e.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||r(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}}));var rn=[],an=/(=)\?(?=&|$)|\?\?/;ue.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||ue.expando+"_"+Pt++;return this[e]=!0,e}}),ue.ajaxPrefilter("json jsonp",(function(e,t,i){var r,a,o,s=e.jsonp!==!1&&(an.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=ue.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(an,"$1"+r):e.jsonp!==!1&&(e.url+=(kt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ue.error(r+" was not called"),o[0]},e.dataTypes[0]="json",a=n[r],n[r]=function(){o=arguments},i.always((function(){n[r]=a,e[r]&&(e.jsonpCallback=t.jsonpCallback,rn.push(r)),o&&ue.isFunction(a)&&a(o[0]),o=a=void 0})),"script"})),ue.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||_e;var i=ge.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=ue.buildFragment([e],t,r),r&&r.length&&ue(r).remove(),ue.merge([],i.childNodes))};var on=ue.fn.load;ue.fn.load=function(e,t,n){if("string"!=typeof e&&on)return on.apply(this,arguments);var i,r,a,o=this,s=e.indexOf(" ");return s>=0&&(i=ue.trim(e.slice(s,e.length)),e=e.slice(0,s)),ue.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(a="POST"),o.length>0&&ue.ajax({url:e,type:a,dataType:"html",data:t}).done((function(e){r=arguments,o.html(i?ue("<div>").append(ue.parseHTML(e)).find(i):e)})).complete(n&&function(e,t){o.each(n,r||[e.responseText,t,e])}),this},ue.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){ue.fn[t]=function(e){return this.on(t,e)}})),ue.expr.filters.animated=function(e){return ue.grep(ue.timers,(function(t){return e===t.elem})).length};var sn=n.document.documentElement;ue.offset={setOffset:function(e,t,n){var i,r,a,o,s,u,c,l=ue.css(e,"position"),d=ue(e),f={};"static"===l&&(e.style.position="relative"),s=d.offset(),a=ue.css(e,"top"),u=ue.css(e,"left"),c=("absolute"===l||"fixed"===l)&&ue.inArray("auto",[a,u])>-1,c?(i=d.position(),o=i.top,r=i.left):(o=parseFloat(a)||0,r=parseFloat(u)||0),ue.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+o),null!=t.left&&(f.left=t.left-s.left+r),"using"in t?t.using.call(e,f):d.css(f)}},ue.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){ue.offset.setOffset(this,e,t)}));var t,n,i={top:0,left:0},r=this[0],a=r&&r.ownerDocument;if(a)return t=a.documentElement,ue.contains(t,r)?(typeof r.getBoundingClientRect!==De&&(i=r.getBoundingClientRect()),n=Q(a),{top:i.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:i.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):i},position:function(){if(this[0]){var e,t,n={top:0,left:0},i=this[0];return"fixed"===ue.css(i,"position")?t=i.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ue.nodeName(e[0],"html")||(n=e.offset()),n.top+=ue.css(e[0],"borderTopWidth",!0),n.left+=ue.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ue.css(i,"marginTop",!0),left:t.left-n.left-ue.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent||sn;e&&!ue.nodeName(e,"html")&&"static"===ue.css(e,"position");)e=e.offsetParent;return e||sn}))}}),ue.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n=/Y/.test(t);ue.fn[e]=function(i){return Le(this,(function(e,i,r){var a=Q(e);return void 0===r?a?t in a?a[t]:a.document.documentElement[i]:e[i]:void(a?a.scrollTo(n?ue(a).scrollLeft():r,n?r:ue(a).scrollTop()):e[i]=r)}),e,i,arguments.length,null)}})),ue.each(["top","left"],(function(e,t){ue.cssHooks[t]=x(oe.pixelPosition,(function(e,n){if(n)return n=at(e,t),st.test(n)?ue(e).position()[t]+"px":n}))})),ue.each({Height:"height",Width:"width"},(function(e,t){ue.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){ue.fn[i]=function(i,r){var a=arguments.length&&(n||"boolean"!=typeof i),o=n||(i===!0||r===!0?"margin":"border");return Le(this,(function(t,n,i){var r;return ue.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?ue.css(t,n,o):ue.style(t,n,i,o)}),t,a?i:void 0,a,null)}}))})),ue.fn.size=function(){return this.length},ue.fn.andSelf=ue.fn.addBack,i=[],r=function(){return ue}.apply(t,i),!(void 0!==r&&(e.exports=r));var un=n.jQuery,cn=n.$;return ue.noConflict=function(e){return n.$===ue&&(n.$=cn),e&&n.jQuery===ue&&(n.jQuery=un),ue},typeof a===De&&(n.jQuery=n.$=ue),ue}))}),(function(e,t,n){var i=n(39),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){var i=n(79),r=n(23),a=n(88);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var u=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:u})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;w.isNumber(e)&&0===me.getCount()?($.log("Activating after delay of",e,"ms because no Experiments are running"),Y.dispatch(C.SET_RUM_DATA,{data:{activateDfd:!0}}),ue.setTimeout(L.emitActivateEvent,e)):L.emitActivateEvent()}function r(e){Re.handleError(e.data.error,e.data.metadata)}function a(){w.isArray(window.optimizely)&&(window.optimizely=w.filter(window.optimizely,(function(e){var t=!0;return!De.push(e,t)})))}function o(e){return w.each(e,(function(e,t){X.setItem(t,e)})),e}function s(){var e=ge.getAccountId(),t="https://a221317523.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";ce.subscribe(w.bind(X.setItem,X));var i=ce.fetchAll().then((function(e){var t=we.getCanonicalOrigins();if(t){var n=ce.getXDomainUserId(e,t);n&&($.log("Syncing cross-origin visitor randomId:",n),se.maybePersistVisitorId({randomId:n}))}return e})).then(o),r=!!se.getCurrentId(),a=!!r&&se.hasSomeData();return r?a?$.log("xd / Existing visitor; has data on this origin"):$.log("xd / Existing visitor; new to this origin"):$.log("xd / New visitor"),te.all([ce.load(t,n)["catch"]((function(e){throw $.debug("xd / Failed to load iframe:",e),r&&!a&&u(!1,e),e})),i.then((function(e){if(se.loadForeignData(),r&&!a){var t=!w.isEmpty(e);$.debug("xd / Loaded foreign data? ",t),u(t)}}),(function(e){throw r&&!a&&($.debug("xd / Failed to load foreign data:",e),u(!1,e)),e})).then((function(){$.log("Loaded visitor data from foreign origins"),L.emitOriginsSyncedEvent()}),(function(e){$.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),$.debug("xd / Enqueuing sync to happen after visitorId set."),Y.dispatch(C.ADD_CLEANUP_FN,{lifecycle:G.Lifecycle.postVisitorProfileLoad,cleanupFn:L.emitOriginsSyncedEvent})}))])}function u(e,t){Y.dispatch(C.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function c(e){var t=Ie.getVisitorProfile();return se.populateEagerVisitorData(e,t)}function l(e,t,n){e=e||[];var i=ye.getAllPlugins(G.PluginTypes.visitorProfileProviders),r=ge.getGlobalHoldbackThreshold(),a=Ie.getVisitorProfile();se.populateLazyVisitorData(i,a);var o=Ae.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=Ie.getVisitorProfile();if(t){var c=be.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&U.isPageIdRelevant(t)?w.map(n,(function(e){return U.createTicket(w.extend({},l,{pageId:e}))})):[U.createTicket(l)]}function d(e){return{bucketingId:Ae.getBucketingId(),preferredLayerId:be.getPreferredLayerMap()[e.id]}}function f(e){var t=me.getAllByPageIds(e),n=he.getForceVariationIds(),i=he.getForceAudienceIds(),r=w.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=ve.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});$.log("Deciding Campaigns/Experiments for Page(s)",e);var a=w.map(r.groups,K.description).join(", ");$.log("Groups:",a);var o=w.map(r.individual,W.description).join(", ");$.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=w.map(r.groups,w.partial(p,n,i,e))||[],u=w.map(r.individual,(function(t){var r=w.filter(t.pageIds,w.partial(w.includes,e));return h(n,i,r,t)})),c=s.concat(u);return te.all(c).then((function(t){var n=w.filter(t,(function(e){return!!e}));return $.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",w.map(n,W.description).join(", ")),n}))}function p(e,n,i,r){try{var a=d(r),o=U.decideGroup(r,a);if(o.reason)return $.debug("Not activating Group",K.description(r),"; reason:",o.reason),te.resolve();var s=me.get(o.layerId);if(!s)return $.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),te.resolve();var u=w.filter(s.pageIds,w.partial(w.includes,i));return w.isEmpty(u)?($.debug("Not activating Group",K.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),te.resolve()):t.decideAndExecuteLayerASAP(e,n,u,s)}catch(e){return $.error("Error getting decision for Group",K.description(r),"; ",e),te.reject(e)}}function h(e,t,n,i){return new te(function(r,a){try{_(i,e,t,n,(function(a){w.each(a,(function(r){var a=r.pageId?[r.pageId]:n;$.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),g(i,e,t,a,r)})),r(i)}))}catch(e){$.error("Error getting decision for Campaign: "+W.description(i),e),a(e)}})}function g(e,t,n,i,r){var a=W.description(e);$.log("Activating Campaign",a,"on Page(s)",i),n.length&&($.log("Applying force audienceIds:",n,"to Campaign",a),r=w.cloneDeep(r),r.audienceIds=n);var o=T(e,r,t),s=!(!t.length&&!n.length),u=A(e,o,s)||[],c=b(u,i);if(v(c,e,o,i),w.forEach(i,(function(){O.trackDecisionEvent(o,r)})),L.emitLayerDecided({layer:e,decisionTicket:r,decision:o}),o.error)throw o.error;return U.isInCohort(o)?void m(c,e,o,i):void $.log("Not activating Campaign: "+W.description(e)+"; not in the cohort because:",o.reason)}function v(e,t,n,i){var r=W.description(t);$.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),w.forEach(e,x.prepareAction)}function m(e,t,n,i){var r=W.description(t);return $.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),te.all(w.map(e,(function(e){return x.executePreparedAction(e).then(w.partial(L.emitActionAppliedEvent,e))}))).then((function(){$.log("All page actions for",n,"applied:",e),L.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){$.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e,t,n,i,r){if(t.length||n.length)return void r(l([],void 0,i));var a=W.relatedAudienceIds(e),o=w.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]);I(o,W.getActivationTimeout(e),(function(){var t=l(o,e,i);w.map(t,(function(t){E(t,o,e)})),r(t)}))}function E(e,t,n){var i=w.map(e.audienceIds,w.bind(de.get,de)),r=w.filter(t,(function(t){return!w.includes(e.audienceIds,t.id)}));$.log("When deciding Campaign",W.description(n),"visitor is in audiences:",y(i),"and not in audiences:",y(r))}function y(e){var t=[];return w.each(e,(function(e){t.push(e.name,e)})),t}function I(e,t,n){var i=ye.getAllPlugins(G.PluginTypes.audienceMatchers),r=w.reduce(e,(function(e,t){return w.extend(e,P.requiredAudienceFieldsForConditions(t.conditions,i))}),{}),a=w.reduce(r,(function(e,t){if(w.isUndefined(se.getAttribute(t))){var n=se.getPendingAttributeValue(t);w.isUndefined(n)||e.push(n)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ne.firstToResolve(w.map(a,(function(e){return te.resolve(e).then((function(){var e=Ie.getVisitorProfile();if(o=w.filter(o,(function(t){return w.isUndefined(P.isInAudience(e,t,i))})),!w.isEmpty(o))throw new Error("At least one audience is still pending")}))})));te.race([s,new te(function(e,n){ue.setTimeout(n,t)})]).then((function(){$.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){$.log("Activating Campaign after timeout on Audiences",e),n()}))}function T(e,t,n){var i,r=W.description(e);return i=n.length?U.getDummyLayerDecision(e,n):U.decideLayer(e,t),$.log("Recording decision for Campaign",r,t,"->",i),W.recordLayerDecision(e.id,t,i),i.variationId&&i.experimentId&&se.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&se.updatePreferredLayerMap(e.groupId,e.id),i}function S(e){var t=pe.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();Y.dispatch(C.CLEAR_CLEANUP_FN,{lifecycle:e})}}function A(e,t,n){var i=W.description(e),r="NOT applying changes for Campaign";if(!n&&ge.isGlobalHoldback())return $.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return $.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return $.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return $.log("Got Actions for Campaign:",i,a),a}function b(e,t){return w.filter(e,(function(e){return w.isUndefined(e.pageId)||w.includes(t,e.pageId)}))}var w=n(2),D=n(75).create,R=t.ActivationCodeError=D("ActivationCodeError"),N=t.ProjectJSError=D("ProjectJSError"),x=n(132),C=n(7),O=n(108),L=n(115),P=n(136),k=n(74),F=n(84),V=n(107),M=n(24),U=n(137),B=n(16),j=n(79),G=n(25),H=n(85),z=n(109),q=n(142),Y=n(9),K=n(141),W=n(111),X=n(80).LocalStorage,$=n(23),Q=n(143),J=n(82),Z=n(119),ee=n(86),te=n(12).Promise,ne=n(144),ie=n(112),re=n(114),ae=n(134),oe=n(120),se=n(73),ue=n(39),ce=n(83),B=n(16),le=B.get("stores/session"),de=B.get("stores/audience_data"),fe=B.get("stores/action_data"),pe=B.get("stores/cleanup"),he=B.get("stores/directive"),ge=B.get("stores/global"),ve=B.get("stores/group_data"),me=B.get("stores/layer_data"),_e=B.get("stores/layer"),Ee=B.get("stores/pending_events"),ye=B.get("stores/plugins"),Ie=B.get("stores/visitor"),Te=B.get("stores/view_data"),Se=B.get("stores/view"),Ae=B.get("stores/visitor_id"),be=B.get("stores/visitor_bucketing"),we=B.get("stores/xdomain"),De=n(90),Re=n(145),Ne=n(1),xe=1e3,Ce=!1,Oe=1e3,Le=t;t.initialize=function(e){var n=e.clientData;if(V.normalizeClientData(e.clientData),H.on({filter:{type:"error"},handler:r}),Y.dispatch(C.DATA_LOADED,{data:n}),$.log("Initialized with DATA:",n),a(),he.isDisabled()||he.shouldOptOut())return void $.log("Controller / Is disabled");Ne.queueBeacons(),j.isReady()?Y.dispatch(C.SET_DOMCONTENTLOADED):j.addReadyHandler((function(){Y.dispatch(C.SET_DOMCONTENTLOADED)}));var o=!1,s=k.get(G.COOKIES.REDIRECT);if(s){var u=s.match(/^(\d+)\|(.*)/);if(u){$.debug("Found legacy redirect data:",s);var c=u[1],l=u[2];Y.dispatch(C.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),o=!0}}J.time("projectJS");var d=ge.getProjectJS();if(w.isFunction(d))try{q.apply(d)}catch(e){$.error("Error while executing projectJS: ",e),F.emitError(new N(e))}J.timeEnd("projectJS"),w.each(e.plugins||[],(function(e){try{e(Z)}catch(e){F.emitInternalError(e)}})),w.each(ge.getPlugins()||[],(function(e){try{q.apply(e,[Z])}catch(e){F.emitError(e)}})),o||ie.load();var f=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Ie.observe(se.persistVisitorProfile),_e.observe(se.persistLayerStates),le.observe(se.persistSessionState),Ee.observe(Q.persistPendingEvents),be.observe(se.persistVisitorBucketingStore),H.off(f)}});H.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),H.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var p=Q.getPendingEvents();if(p&&(Y.dispatch(C.LOAD_PENDING_EVENTS,{events:p}),Q.retryPendingEvents(p)),H.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),L.emitInitializedEvent(),!he.shouldActivate())return te.resolve();var h=[];if(we.isDisabled())i();else{var g=t.initializeXDomainStorage();if(h.push(g),we.getCanonicalOrigins()){var v=re.makeTimeoutPromise(Oe);te.race([g,v])["catch"]((function(e){$.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](Re.handleError)}else i()}return te.all(h)},t.activate=function(){try{var e=[];$.log("Activated client"),w.forEach(Se.getActiveViewStates(),(function(e){oe.deactivate(Te.get(e.id))})),S(G.Lifecycle.preActivate);var t=M.now();Y.dispatch(C.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Te.getAll();oe.registerViews(n),se.setId(se.getIdFromCookies()),e.push(O.trackPostRedirectDecisionEvent()),Y.dispatch(C.MERGE_VARIATION_ID_MAP,{variationIdMap:se.getVariationIdMap()}),Y.dispatch(C.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:se.getPreferredLayerMap()}),S(G.Lifecycle.postVisitorProfileLoad),e.push(c(ye.getAllPlugins(G.PluginTypes.visitorProfileProviders)).then((function(){$.log("Populated visitor profile")})));var i=l(),r=U.decideGlobal(i);$.log("Made global decision",i,"->",r),Y.dispatch(C.RECORD_GLOBAL_DECISION,r);var a=O.trackClientActivation();a?$.log("Tracked activation event",a):$.log("Not tracking activation event");var o=Le.setUpViewActivation(n);return Ce?oe.activateMultiple(o):w.each(o,(function(e){oe.activateMultiple([e])})),S(G.Lifecycle.postViewsActivated),S(G.Lifecycle.postActivate),L.emitActivatedEvent(),te.all(e).then((function(){H.emit({type:z.TYPES.LIFECYCLE,name:"activateDeferredDone"}),$.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),te.reject(e)}},Le.setUpViewActivation=function(e){var t=[];return w.each(e,(function(e){oe.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===G.ViewActivationTypes.callback?($.debug("Setting up conditional activation for Page",oe.description(e)),Le.activateViewOnCallback(e)):e.activationType===G.ViewActivationTypes.polling?($.debug("Setting up polling activation for Page",oe.description(e)),ee.pollFor(w.partial(q.apply,e.activationCode),null,w.partial(ae.isTimedOut,M.now())).then((function(){oe.activateMultiple([e])}))["catch"]((function(t){$.warn("Failed to activate view ",e,t)}))):e.activationType!==G.ViewActivationTypes.manual&&F.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Le.activateViewOnCallback=function(e){var t=function(t){var n=w.extend({},t,{pageName:e.apiName,type:"page"});De.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Se.isViewActive(e.id)}});try{q.apply(e.activationCode,[t,n])}catch(t){var i=new R("("+t.toString()+") in activationCode for "+oe.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=w.map(n,"id");try{if(!Ae.getBucketingId())throw new Error("View activated with no visitorId set");var r=f(i)["catch"](F.emitError);return t=te.all(w.map(n,(function(e){var t=function(){oe.parseViewTags(e);var t=O.trackViewActivation(e);
t?$.log("Tracked activation for Page",oe.description(e),t):$.log("Not Tracking activation for Page",oe.description(e))};return j.isReady()?te.resolve(t()):ee.pollFor(j.isReady,xe).then(t)}))),te.all([r,t])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);w.each(n,(function(e){var n=fe.getActionState(e);n&&(w.each(n,(function(e,n){if(e.cancel)try{e.cancel(),$.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){$.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),$.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){$.error("Controller / Error undoing change upon deactivation of page.",e)}})),Y.dispatch(C.REMOVE_ACTION_STATE,{actionId:e}),$.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={get:De.get,push:De.push},t=window.optimizely;w.isArray(t)&&w.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.initializeXDomainStorage=s,t.decideAndExecuteLayerASAP=h}),(function(e,t,n){function i(e,t,n){var i=m.getActionState(t.id);if(!i)return void p.warn("Action / Attempted to prepare change for inactive action: ",t);var r=m.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void p.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:y.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void p.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=_.getChange(t);if(!c){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void p.warn(d)}e[t]=new h(function(d){var f=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var v="change_"+c.src,E=u.makeAsyncRequest(v,(function(){return g.addScriptAsync("https://cdn.optimizely.com/public/221317523/data"+c.src,(function(){u.resolveRequest(v)}))})).then((function(){var e=_.getChange(c.id);e||s.emitError(new T("Failed to load async change from src: "+c.src)),i(e,n,l.now())}));f.push(E)}h.all(f).then((function(){var e=l.now(),i=m.getChangeApplier(t,n.id);return i?(p.debug("Action / Applying change:",c),i.apply().then((function(t){t?p.log(t):p.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",c),d()}))):(p.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){p.error("Action / Failed to apply change:",c,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(84),u=n(6),c=n(75).create,l=n(24),d=n(16),f=n(9),p=n(23),h=n(12).Promise,g=n(130),v=d.get("stores/global"),m=d.get("stores/action_data"),_=d.get("stores/change_data"),E=d.get("stores/session"),y=n(133),I=n(134);I.initialize();var T=c("ActionError");t.prepareAction=function(e){p.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:E.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:v.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=_.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=_.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){p.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return h.all(n).then((function(){p.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(24),a=n(16),o=a.get("stores/plugins"),s=n(25),u=n(23);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(135),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){return function(n){var i=n.type,a=t[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var s=r(a.fieldsNeeded,n),l=0;l<s.length;l++){var d=s[l],f=u.getFieldValue(e,d);if(o.isUndefined(f))return void c.debug("Audience / Required field",d,"for type",i,"has no value")}c.debug("Matching condition:",n,"to values:",e);var p=a.match(e,n);if(!o.isUndefined(p))return!!p}}function r(e,t){var n="function"==typeof e?e(t):e;return o.isString(n)&&(n=[n]),o.isArray(n)?n:(c.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(121),u=n(19),c=n(23),l=n(73);t.isInAudience=function(e,t,n){var r=i(e,n);c.groupCollapsed("Checking audience",t.name,t.id,t),c.debug("Visitor Profile:",e);var o;try{var u=s.evaluate(t.conditions,r)}catch(e){o=e,u=!1}return c.groupEnd(),o&&c.error("Audience / Error evaluating audience",a(t),":",o),c.log("Is "+(u?"in":"NOT in")+" audience:",a(t)),u},t.requiredAudienceFieldsForConditions=function e(t,n){var i={};return o.each(t,(function(t){if(o.isArray(t))o.extend(i,e(t,n));else if(o.isObject(t)){var a=n[t.type];if(a){var s=r(a.fieldsNeeded,t);o.each(s,(function(e){i[l.serializeFieldKey(e)]=e}))}}})),i}}),(function(e,t,n){function i(e,t){m.debug("Decision / Deciding layer for group: ",g.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)m.debug("Decision / Using preferredLayerMap to select layer for group:",g.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",u="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(u);return{layerId:null,reason:u}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=E.getPlugin(h.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=E.getAllPlugins(h.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return c.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(84),c=n(136),l=n(138),d=n(139),f=n(140).DecisionError,p=n(16),h=n(25),g=n(141),v=n(111),m=n(23),_=n(43),E=p.get("stores/plugins"),y=p.get("stores/global"),I=p.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:y.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){m.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){m.debug("Decision / Using decider's custom decideLayer.");var c=r.decideLayer(e,t);n=c.experiment,i=c.variation}else m.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",u.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(m.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(m.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=I.get(e.layerId);return!(_.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(63),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(138),a=n(121),o=n(140).DecisionError,s=n(23),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,c){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(76),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(84),a=n(25),o=n(26),s=n(80).LocalStorage,u=n(23),c=n(88),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(83).setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){var i=n(2),r=n(92),a=n(75).BaseError,o=n(24),s=n(16),u=n(79),c=n(23),l=n(39),d=n(88),f=s.get("stores/global"),p="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return d.request({url:p+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",h=e.message,g=e.stack||null;e instanceof a&&(h instanceof Error?(h=h.message,g=e.message.stack):g=null);var v={timestamp:o.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:s,message:h,stacktrace:g},m=i.map(f.getExperimental(),(function(e,t){return{key:"exp_"+t,value:String(e)}}));t&&i.forEach(t,(function(e,t){i.isObject(e)||m.push({key:t,value:String(e)})}),[]),i.isEmpty(m)||(v.metadata=m),c.error("Logging error",v),u.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:u.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(85),u=n(109),c=n(39),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=c.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){c.getGlobal(d)||c.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(148))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(150)),e.registerAudienceMatcher("behavior",n(152))}}),(function(e,t,n){var i=n(151);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(71),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(153),o=n(154);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return u.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return u.extend(i,{orderBy:[{field:[c.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(u.isUndefined(e))throw new Error("rule is undefined");if(!u.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(u.isArray(e["filter"])?u.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),u.isArray(e["sort"])?u.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],c="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));u.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+c+" is unknown"),u.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===a?((!u.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):u.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!u.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u=n(2),c={FIELDS:n(62).FIELDS,FIELDS_V0_2:n(62).FIELDS_V0_2},l=n(26),d=n(23),f=n(154);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return u.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),u.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[c.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return u.isArray(e)?{op:"between",args:[{field:[c.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return u.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||u.includes(u.values(c.FIELDS),e)||(n=[c.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",c.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",c.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",c.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&u.each(e.filters,(function(r){var a,o,u=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",c.FIELDS.TIME),o=s.aggregateField("max",c.FIELDS.TIME)),a){var l=u,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,u,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:u.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return u.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(u.each(e["sort"],(function(e){u.includes(["ascending","descending"],e["direction"])&&(u.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=u.filter(u.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&u.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return u.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?u.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):u.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(u.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return u.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[c.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!u.isArray(e)||!u.every(e,u.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=u.keys(c.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),u.includes(r,e[0])?n+" is not supported here":u.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!u.isString(e)&&!u.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!u.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!u.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(u.isArray(t)&&2===t.length&&u.isNumber(t[0])&&u.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(u.isString(t)||u.isArray(t)&&2===t.length&&u.isString(t[0])&&u.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!u.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=i.bind(a.log,a),s=n(24),u=n(19).getFieldValue,c=n(26),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);if(!i.isArray(t))return n;var r=u(e,t);return"undefined"==typeof r&&(r=n),r},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},p=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},h=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=p(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(h,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},g=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l(o,f),h=f.join(".");u[h]=p,s.push(encodeURIComponent(h)+"="+encodeURIComponent(c.stringify(p)))}var g=s.join("&");n.hasOwnProperty(g)||(n[g]={fieldValues:u,events:[]}),n[g].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var v=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],u=s["op"];if(u in t.aggregateOperators){var c=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(u,c),d=t.aggregateOperators[u]([c],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+u)}})),r},m=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},_=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l(t,s,0),c=l(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var u=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,c=t.generateAlias(e["op"],u);return c in o||(r.push({op:e["op"],args:e["args"]}),o[c]=!0),{field:[c]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var u=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<u.length;c++)e.hasOwnProperty(u[c])&&(s[u[c]]=e[u[c]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var E=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var u=e[t.clause.LIMIT];
(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(E(e[t.clause.FROM],n+1))),r},y=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return h(t,e)}))}))},I=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=I(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return h(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=g(e[t.clause.GROUP_BY],r),s=v(e[t.clause.AGGREGATE],o);r=m(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return h(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=_(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var u=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),u=Number(e[t.clause.OFFSET]));var c;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),c=u+Number(e[t.clause.LIMIT])),(u>0||!i.isUndefined(c))&&(r=r.slice(u,c),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=y(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",n);var i=E(e);if(i.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+i.join("\n"));var o=I(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(156))}}),(function(e,t,n){var i=n(2),r=n(157),a=n(151),o=n(26),s=n(153);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),u=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),c=a.getEvents();return r.evaluate(u,c)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(23),o={FIELDS:n(62).FIELDS},s=n(153),u=n(154);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var c=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=u.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(159)),e.registerAudienceMatcher("first_session",n(160))}}),(function(e,t,n){var i=n(62),r=n(151),a=n(19).getFieldValue,o=n(87).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(162))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(151),d=n(153),f=n(154);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(164)),e.registerVisitorProfileProvider(n(169)),e.registerVisitorProfileProvider(n(170)),e.registerAudienceMatcher("browser_version",n(171))}}),(function(e,t,n){var i=n(165);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(166),a=n(39),o=n(7),s=n(16),u=n(9),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),u.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in u)return e;var t=a.keys(u);return a.find(t,(function(t){var n=u[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(167);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),u=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(u.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:c[u.model]||"unknown",type:r(d,u.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},u={gc:["chrome","chromium","silk","yandex","maxthon"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",h="model",g="name",v="type",m="vendor",_="version",E="architecture",y="console",I="mobile",T="tablet",S="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(e,t){for(var n,i,r,o,s,u,l=0;l<t.length&&!s;){var f=t[l],p=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<p.length;r++)u=s[++i],o=p[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,u):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=u?u.replace(o[1],o[2]):a:this[o[0]]=u?o[1].call(this,u,o[2]):a:4==o.length&&(this[o[0]]=u?o[3].call(this,u.replace(o[1],o[2])):a):this[o]=u?u:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[g,_],[/(opios)[\/\s]+([\w\.]+)/i],[[g,"Opera Mini"],_],[/\s(opr)\/([\w\.]+)/i],[[g,"Opera"],_],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[g,_],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[g,"IE"],_],[/(edge)\/((\d+)?[\w\.]+)/i],[g,_],[/(yabrowser)\/([\w\.]+)/i],[[g,"Yandex"],_],[/(puffin)\/([\w\.]+)/i],[[g,"Puffin"],_],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[g,"UCBrowser"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[g,/_/g," "],_],[/(micromessenger)\/([\w\.]+)/i],[[g,"WeChat"],_],[/(QQ)\/([\d\.]+)/i],[g,_],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[g,_],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[_,[g,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[_,[g,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[_,[g,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[g,/(.+)/,"$1 WebView"],_],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[g,/(.+(?:g|us))(.+)/,"$1 $2"],_],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[_,[g,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[g,_],[/(dolfin)\/([\w\.]+)/i],[[g,"Dolphin"],_],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[g,"Chrome"],_],[/(coast)\/([\w\.]+)/i],[[g,"Opera Coast"],_],[/fxios\/([\w\.-]+)/i],[_,[g,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[_,[g,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[_,g],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[g,"GSA"],_],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[g,[_,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[g,_],[/(navigator|netscape)\/([\w\.-]+)/i],[[g,"Netscape"],_],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[g,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[h,m,[v,T]],[/applecoremedia\/[\w\.]+ \((ipad)/],[h,[m,"Apple"],[v,T]],[/(apple\s{0,1}tv)/i],[[h,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,h,[v,T]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[h,[m,"Amazon"],[v,T]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[h,D.str,R.device.amazon.model],[m,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[h,m,[v,I]],[/\((ip[honed|\s\w*]+);/i],[h,[m,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,h,[v,I]],[/\(bb10;\s(\w+)/i],[h,[m,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[h,[m,"Asus"],[v,T]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[h,"Xperia Tablet"],[v,T]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[h,[m,"Sony"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,h,[v,y]],[/android.+;\s(shield)\sbuild/i],[h,[m,"Nvidia"],[v,y]],[/(playstation\s[34portablevi]+)/i],[h,[m,"Sony"],[v,y]],[/(sprint\s(\w+))/i],[[m,D.str,R.device.sprint.vendor],[h,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,h,[v,T]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[h,/_/g," "],[v,I]],[/(nexus\s9)/i],[h,[m,"HTC"],[v,T]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[h,[m,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,h,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[h,[m,"Microsoft"],[v,y]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[m,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[h,[m,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[h,[m,"Motorola"],[v,T]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,w.trim],[h,w.trim],[v,S]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[m,"Samsung"],[v,S]],[/\(dtv[\);].+(aquos)/i],[h,[m,"Sharp"],[v,S]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],h,[v,T]],[/smart-tv.+(samsung)/i],[m,[v,S],h],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],h,[v,I]],[/sie-(\w+)*/i],[h,[m,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],h,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[h,[m,"Acer"],[v,T]],[/android.+([vl]k\-?\d{3})\s+build/i],[h,[m,"LG"],[v,T]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],h,[v,T]],[/(lg) netcast\.tv/i],[m,h,[v,S]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[h,[m,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[h,[m,"Lenovo"],[v,T]],[/linux;.+((jolla));/i],[m,h,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[m,h,[v,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,h,[v,I]],[/crkey/i],[[h,"Chromecast"],[m,"Google"]],[/android.+;\s(glass)\s\d/i],[h,[m,"Google"],[v,A]],[/android.+;\s(pixel c)\s/i],[h,[m,"Google"],[v,T]],[/android.+;\s(pixel xl|pixel)\s/i],[h,[m,"Google"],[v,I]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,I]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,T]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[h,[m,"Meizu"],[v,T]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[h,[m,"OnePlus"],[v,I]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[h,[m,"RCA"],[v,T]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[h,[m,"Dell"],[v,T]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[h,[m,"Verizon"],[v,T]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[m,"Barnes & Noble"],h,[v,T]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[h,[m,"NuVision"],[v,T]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[m,"ZTE"],h,[v,T]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[h,[m,"Swiss"],[v,I]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[h,[m,"Swiss"],[v,T]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[h,[m,"Zeki"],[v,T]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[m,"Dragon Touch"],h,[v,T]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[h,[m,"Insignia"],[v,T]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[h,[m,"NextBook"],[v,T]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],h,[v,I]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[m,"LvTel"],h,[v,I]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[h,[m,"Envizen"],[v,T]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[m,h,[v,T]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[h,[m,"MachSpeed"],[v,T]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,h,[v,T]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[h,[m,"Rotor"],[v,T]],[/android.+(KS(.+))\s+build/i],[h,[m,"Amazon"],[v,T]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[m,h,[v,T]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],m,h],[/(android.+)[;\/].+build/i],[h,[m,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[_,[g,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[g,_],[/rv\:([\w\.]+).*(gecko)/i],[_,g]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[g,_],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[g,[_,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[g,"Windows"],[_,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[g,"BlackBerry"],_],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[g,_],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[g,"Symbian"],_],[/\((series40);/i],[g],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[g,"Firefox OS"],_],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[g,_],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[g,"Chromium OS"],_],[/(sunos)\s?([\w\.]+\d)*/i],[[g,"Solaris"],_],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[g,_],[/(haiku)\s(\w+)/i],[g,_],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[_,/_/g,"."],[g,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[g,"Mac OS"],[_,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[g,_]]},x=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof x))return new x(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(N,t):N;return this.getBrowser=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return D.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return D.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};x.VERSION=o,x.BROWSER={NAME:g,MAJOR:p,VERSION:_},x.CPU={ARCHITECTURE:E},x.DEVICE={MODEL:h,VENDOR:m,TYPE:v,CONSOLE:y,MOBILE:I,SMARTTV:S,TABLET:T,WEARABLE:A,EMBEDDED:b},x.ENGINE={NAME:g,VERSION:_},x.OS={NAME:g,VERSION:_},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=x),t.UAParser=x):"function"===c&&n(168)?(i=function(){return x}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=x)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(172).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(174)),e.registerAudienceMatcher("campaign",n(175))}}),(function(e,t,n){var i=n(117);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(177)),e.registerAudienceMatcher("cookies",n(178))}}),(function(e,t,n){var i=n(74);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(180));var t=n(181);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,r={id:u.segmentId||u.id,value:t.value}):c||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=r,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(20);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(183)),e.registerVisitorProfileProvider(n(184)),e.registerAudienceMatcher("device",n(185))}}),(function(e,t,n){var i=n(165);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(187)),e.registerAudienceMatcher("device_type",n(188))}}),(function(e,t,n){var i=n(165);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(190)),e.registerAudienceMatcher("ip",n(192))}}),(function(e,t,n){var i=n(191);e.exports={isAsync:!0,provides:"IP",getter:[function(){return i.getIP()}]}}),(function(e,t,n){function i(){a.addScriptAsync(s)}var r=n(6),a=n(130),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t,n){var i=n(193).CIDR;e.exports={fieldsNeeded:["IP"],match:function(e,t){if(!e.hasOwnProperty("IP"))return!1;var n=e.IP,r=t["value"],a=t["match"];switch(a){case"prefix":if(0===n.indexOf(r))return!0;break;case"regex":try{var o=new RegExp(r)}catch(e){return!1}if(o.test(n))return!0;break;case"cidr":try{var s=new i(r);return s.containsIP(n)}catch(e){return!1}break;default:if(n===r&&""!==n)return!0}return!1}}}),(function(e,t,n){var i=t.CIDR=function(e){this.cidrString=e.trim();var t=a(this.cidrString);if(null===t)throw new Error("Invalid CIDR specification");this.maskedAddress=t.maskedAddress,this.mask=t.mask},r=4;i.prototype.containsIP=function(e){var t=o(e);if(null===t)throw new Error("Invalid ip: "+e);for(var n=0;n<r;n++)if((t[n]&this.mask[n])!==this.maskedAddress[n])return!1;return!0};var a=function(e){var t=e.split("/");if(2!==t.length)return null;var n=parseInt(t[1],10);if(isNaN(n)||n<0||n>32)return null;var i=o(t[0]);if(null===i)return null;for(var a=c(n),s=0;s<r;s++)i[s]=i[s]&a[s];return{maskedAddress:i,mask:a}},o=function(e){var t=e.split(".");if(t.length!==r)return null;for(var n=[],i=0;i<r;i++){var a=s(t[i]);if(null===a)return null;n[i]=a}return n},s=function(e){if(e.length>3)return null;var t=parseInt(e,10);return isNaN(t)?null:e!==t.toString()?null:t<0||t>255?null:t},u=[0,128,192,224,240,248,252,254,255],c=function(e){if(e<0||e>32)return null;for(var t=[],n=0;n<r;n++)t[n]=0;var i=Math.floor(e/8),a=e%8;for(n=0;n<i;n++)t[n]=255;return i<r&&(t[i]=u[a]),t}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(195)),e.registerAudienceMatcher("query",n(196))}}),(function(e,t,n){var i=n(117);e.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}}),(function(e,t,n){var i=n(2),r=n(20);t.fieldsNeeded=["queryParams"],t.match=function(e,t){var n=i.find(e.queryParams,(function(e){return e[0]===t.name}));return r.hasMatch(t.value,t.match,n?n[1]:null)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(198)),e.registerAudienceMatcher("referrer",n(199))}}),(function(e,t,n){var i=n(79),r=n(97);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(200);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(202)),e.registerAudienceMatcher("source_type",n(204))}}),(function(e,t,n){var i=n(117),r=n(79),a=n(97),o=n(203),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&o.guessDomain(e)!==o.guessDomain(i.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.guessDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(206)),e.registerVisitorProfileProvider(n(207)),e.registerAudienceMatcher("time_and_day",n(208))}}),(function(e,t,n){var i=n(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(209);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){function i(e,t){if(t["sVariableReference"])return t["sVariableReference"]||null;var n=t["sVariable"]?t["sVariable"]:f;return e.getGlobal(n)}function r(e){var t=["events","linkTrackEvents","linkTrackVars"];a.each(t,(function(t){a.isString(e[t])||(e[t]="")}))}var a=n(2),o=n(26),s=n(23),u=n(86),c=n(97),l=n(113),d=n(39),f="s",p=255,h="o",g="adobe_analytics",v="optimizelyLayerEvent",m="OptimizelyLayerDecision",_=n(16),E=n(93),y=_.get("stores/integration_settings"),I=["stores/layer_data",function(e){return function(t){var n=t.decision.layerId,i=t.decision.experimentId,r=t.decision.isLayerHoldback,o=t.decision.variationId,u=e.get(n),c=a.find(u.experiments,{id:i});if(c){var l=c["integrationSettings"]||u["integrationSettings"]||{},d=l[g];if(d){var f=a.find(c.variations,{
id:o});if(f){var h=E.generateAnalyticsString(u,c,f,r,p,!0);if(h)return S(h,d)["catch"]((function(e){s.warn("Tracker for",g,"failed:",e)}))}}}}}],T=function(e){var t=e.integrationSettings;if(t&&t[g]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},a=e.isLayerHoldback,o=E.generateAnalyticsString(n,i,r,a,p,!0);if(o)return S(o,t[g])["catch"]((function(e){s.warn("Tracker for",g,"failed:",e)}))}},S=function(e,t){var n,o=50,s=200;return u.pollFor((function(){var e=y.getReference(g);return n=a.extend({},e,t),i(d,n)}),s,o).then((function(t){var i,o,s=n.site_catalyst_eVar||null,u=n.site_catalyst_prop||null;s&&(i="eVar"+s),u&&(o="prop"+u),r(t);var l=t.linkTrackVars.split(",");i&&(e=e.substring(0,p),t[i]=e,l.indexOf(i)===-1&&l.push(i)),o&&(t[o]=e,l.indexOf(o)===-1&&l.push(o));var d=c.getReferrer();if(d&&(t.referrer=d),t.linkTrackVars.indexOf("events")===-1&&l.push("events"),t.linkTrackVars=a.filter(l).join(","),t.linkTrackEvents.indexOf(v)===-1){var f=t.linkTrackEvents.split(",");f.push(v),t.linkTrackEvents=a.filter(f).join(",")}if(t.events.indexOf(v)===-1){var g=t.events.split(",");g.push(v),t.events=a.filter(g).join(",")}t.tl(!0,h,m)}))},A={preRedirectPolicy:l.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:l.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:l.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:I,trackLayerDecision:T,serializeSettings:o.stringify,deserializeSettings:o.parse};e.exports=function(e){e.registerAnalyticsTracker("adobe_analytics",A)}}),(function(e,t,n){function i(e){function t(e,t,n){try{u(t),e[n]=t}catch(e){C.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=x.keys(ne),i=x.omit(e,n),r=x.pick(e,n),a=x.reduce(i,t,{}),o=x.reduce(r,(function(e,n,i){var r=ne[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){C.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=x.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return x.extend({entity_id:e.event.id,key:e.event.apiName,timestamp:e.timestamp,uuid:e.eventId,type:e.event.category},i(e.eventTags))}function o(e){return x.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:$,uuid:e.eventId,timestamp:e.timestamp}}function u(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=F.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function c(e){if(null==e)throw new Error("Metric value is null");if(!x.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return x.reduce(e,(function(e,t){try{u(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){V.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){Y.dispatch(P.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),D()}function f(e){var t=l(e);Y.dispatch(P.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function p(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:g(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:Q}]}]}]};Y.dispatch(P.REGISTER_PREVIOUS_BATCH,n),D()}function h(e){var t=x.isNull(K.getAnonymizeIP())?void 0:K.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision;var i={session_id:g(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=R(e.layerStates);Y.dispatch(P.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),D()}function g(e){return oe?ae:e}function v(e){var t={entity_id:e.layerId,type:Q,uuid:e.decisionId,timestamp:e.timestamp};Y.dispatch(P.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:R(e.layerStates)}),f(e.userFeatures),D()}function m(){if(!W.canSend())return void V.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(x.each(W.getPreviousBatches(),_),Y.dispatch(P.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(Y.dispatch(P.FINALIZE_BATCH_SNAPSHOT),_(W.getEventBatch()),Y.dispatch(P.RESET_TRACKER_EVENTS)))):void V.debug("Not sending events because there are no events to send")}function _(e){V.debug("Sending ticket:",e);var t=O.generate();j.retryableRequest({url:L,method:"POST",data:E(e)},t)}function E(e){var t=x.extend({},x.pick(e,["account_id","anonymize_ip","client_name","client_version","project_id","revision"]),{visitors:x.map(e.visitors,y)});return t}function y(e){return{visitor_id:e.visitor_id,session_id:ae,attributes:x.map(e.attributes,I),snapshots:x.map(e.snapshots,T)}}function I(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function T(e){var t=e.events;return t=S(t),{activationTimestamp:K.getActivationTimestamp(),decisions:x.map(e.decisions,A),events:x.map(t,b)}}function S(e){var t=x.reduce(e,(function(e,t){var n;if(n=t.type!==J||!x.isEmpty(t.tags)||!x.isEmpty(x.pick(t,x.keys(ne)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=x.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return x.values(t)}function A(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function b(e){return e.key===Q&&(e.type=Q,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return x.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function D(){function e(){var t=!ie||H.isLoaded();t&&m(),W.isPolling()&&B.setTimeout(e,te)}return W.shouldBatch()?void(W.isPolling()||(B.setTimeout(e,te),Y.dispatch(P.SET_TRACKER_POLLING,!0),B.setTimeout((function(){Y.dispatch(P.SET_TRACKER_BATCHING,!1),Y.dispatch(P.SET_TRACKER_POLLING,!1)}),ee))):void m()}function R(e){return x.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function N(){var e=W.getPersistableState();if(e)try{V.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),Y.dispatch(P.SET_TRACKER_DIRTY,!1)}catch(e){V.debug("Failed to persist pending batch:",e)}}var x=n(2),C=n(84),O=n(5),L="https://logx.optimizely.com/v1/events",P=n(7),k=n(75).create,F=n(26),V=n(23),M=n(113),U=n(73),B=n(39),j=n(88),G=n(16),H=n(79),z=n(85),q=n(109),Y=n(9),K=G.get("stores/global"),W=G.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),$="client_activation",Q="campaign_activated",J="view_activated",Z="multi-event",ee=1e4,te=1e3,ne={revenue:{validate:c,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:c,sanitize:Math.floor,excludeFeature:!0},value:{validate:c,sanitize:x.identity}},ie=!1,re=!1,ae="AUTO",oe=!0,se=[function(){return function(e){v(x.extend(e,e.decision))}}],ue=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?p(e):v(e)},ce=[function(){return function(e){d(r(e),e.userFeatures,R(e.layerStates))}}],le=[function(){return function(e){h(e),d(s(e),e.userFeatures,R(e.layerStates))}}],de=[function(){return function(e){d(o(e),e.userFeatures,R(e.layerStates))}}],fe=[function(){return function(e){d(a(e),e.userFeatures,R(e.layerStates))}}],pe={onLayerDecision:se,trackLayerDecision:ue,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:ce,onClientActivation:le,onClickEvent:fe,onCustomEvent:de};e.exports=function(e){e.registerAnalyticsTracker("optimizely",pe),z.on({filter:{type:q.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){Y.dispatch(P.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||m()}}),z.on({filter:{type:q.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){Y.dispatch(P.SET_TRACKER_SEND_EVENTS,!1)}}),Y.dispatch(P.SET_TRACKER_SEND_EVENTS,!re);var t=z.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(N),z.off(t)}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(213)),e.registerViewMatcher("url",n(214))}}),(function(e,t,n){var i=n(117);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(200);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(108),a=n(216),o=n(23),s=n(120);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=c(i,t)}catch(s){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),u),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(84),s=n(75).create,u=n(79),c=n(217),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(218)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){if(this.change=e,this.identifier=t.identifier,this.startTime=t.startTime,d.shouldObserveChangesIndefinitely()){h.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new v(E.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(E.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:E.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){g.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:E.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){h.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}}var r=n(2),a=n(7),o=n(84),s=n(135),u=n(75).create,c=n(220),l=n(221),d=n(16).get("stores/directive"),f=n(79),p=n(222),h=n(9),g=n(23),v=n(223),m=n(134),_=n(98).create(),E={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},y=u("ChangeOverheatError");i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=l();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:r.partial(m.isTimedOut,this.startTime),onTimeout:t}:d.isEditor()&&_.waitUntil(r.partial(m.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=_.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),n);var i=f.querySelectorAll(this.change.selector);r.each(i,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return g.debug("Not applying AppendChange to element",e,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);n(),this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n;switch(this.change.operator){case p.DOMInsertionType.AFTER:n=p.insertAdjacentHTMLType.AFTER_END;break;case p.DOMInsertionType.APPEND:n=p.insertAdjacentHTMLType.BEFORE_END;break;case p.DOMInsertionType.BEFORE:n=p.insertAdjacentHTMLType.BEFORE_BEGIN;break;case p.DOMInsertionType.PREPEND:n=p.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=p.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),c.setData(e,this.change.id,this.identifier,[]);var i,a,o=this.numberOfRootNodes(this.change.value)-1;n===p.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,a=this.getSiblingElements(i,o,!1)):n===p.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,a=this.getSiblingElements(i,o,!0)):n===p.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,a=this.getSiblingElements(i,o,!1)):n===p.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,a=this.getSiblingElements(i,o,!0)),a.unshift(i),r.each(a,r.bind((function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:f.parentElement(e);n.setAttribute(t,"");var i=c.getData(n,this.change.id,this.identifier)||[];i.push(e),c.setData(n,this.change.id,this.identifier,i),r.each(f.childrenOf(n),(function(e){e.setAttribute(t,"")}))}),this))},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(p.changeType.APPEND,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(135).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=n(2),a=n(23),o=n(39);i.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},i.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},i.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},i.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=i}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(221),o=n(222),s=n(142);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(139),r=n(140).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);