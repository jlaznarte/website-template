/**
 * @file
 * H2020 main js file.
 */

var H2020 = {};

function $dc(v) {
  return document.createElement(v);
}

H2020.initNavForMobile = function (isLast) {
  if (H2020.initNavForMobileIsInit) {
    return true;
  }
  if (isLast) {
    H2020.initNavForMobileIsInit = true;
  }

  var mNav = jQuery("#main-navigation")[0];
  if (mNav) {
    var h = jQuery(".panel-heading", mNav)[0];
    h.onclick = function () {
      jQuery(this.parentNode).toggleClass("showMenu");
    }
    return true;
  }
  else {
    return H2020.initNavForMobileIsInit;
  }
};

H2020.setTabs = function (isLast) {

  if (H2020.setTabsIsInit) {
    return true;
  }
  if (isLast) {
    H2020.setTabsIsInit = true;
  }
  var tc = jQuery("#tabbedContent")[0];
  var regionIsSet = (jQuery("#tabbedContent .region-content-tab1")[0] || jQuery("#tabbedContent .region-content-tab2")[0] || jQuery("#tabbedContent .region-content-tab3")[0] || jQuery("#tabbedContent .region-content-tab4")[0] || jQuery("#tabbedContent .region-content-tab5")[0] || jQuery("#tabbedContent .region-content-tab6")[0] || jQuery("#tabbedContent .region-content-tab7")[0] || jQuery("#tabbedContent .region-content-tab8")[0]);

  if (tc && regionIsSet) {
    H2020.tabs = {};

    H2020.tabs.tc = tc;
    H2020.tabs.tabsTop = $dc('ul');
    H2020.tabs.tabsTop.tabs = [];
    H2020.tabs.tabsBot = $dc('ul');
    H2020.tabs.tabsBot.tabs = [];
    H2020.tabs.tabsTop.className = "tabsList";
    H2020.tabs.tabsBot.className = "tabsList tabsListBot";
    H2020.tabs.tTtl = jQuery(".region .tabTitle", tc);

    if (H2020.tabs.tTtl.length > 1) {
      var setFirstTab = 0;
      for (var i = 0; i < H2020.tabs.tTtl.length; i++) {
        if (window.location.hash == "#" + H2020.tabs.tTtl[i].getAttribute("id")) {
          setFirstTab = i;
        }
        H2020.tabs.tTtl[i].style.display = "none";
        H2020.tabs.tTtl[i].parentNode.className += " tabbedTab tabbedTab" + i;

        var liLclT = $dc("li");
        var liLclB = $dc("li");
        liLclT.tab = liLclB.tab = i;
        liLclT.className = liLclB.className = "tab tab" + i;
        liLclT.onclick = liLclB.onclick = function () {
          H2020.tabs.tc.className = "tabIsSet tabbed" + this.tab;
          if (H2020.tabs.readyToSetHashToURL) {
            window.location.href = "#" + H2020.tabs.tTtl[this.tab].getAttribute("id");
          }
        };

        var newItems = jQuery('.newItem', H2020.tabs.tTtl[i].parentNode);
        if (newItems.length > 0) {
          var newItemsSpan = $dc('span');
          newItemsSpan.className = 'statsItems newItems';
          newItemsSpan.innerHTML = newItems.length;
          H2020.tabs.tTtl[i].insertBefore(newItemsSpan, H2020.tabs.tTtl[i].firstChild);
        }

        liLclT.innerHTML = liLclB.innerHTML = H2020.tabs.tTtl[i].innerHTML;
        H2020.tabs.tabsTop.appendChild(liLclT);
        H2020.tabs.tabsTop.tabs[i] = liLclT;
        H2020.tabs.tabsBot.appendChild(liLclB);
        H2020.tabs.tabsBot.tabs[i] = liLclB;
      }

      tc.insertBefore(H2020.tabs.tabsTop, tc.firstChild);
      tc.appendChild(H2020.tabs.tabsBot);

      H2020.tabs.tabsTop.tabs[setFirstTab].onclick();
      H2020.tabs.readyToSetHashToURL = true;

      tc.className += " tabIsSet";
    }
    return true;
  }
  else {
    return H2020.setTabsIsInit;
  }
};

H2020.displayContentInPopup = function (isLast) {
  if (H2020.displayContentInPopupIsInit) {
    return true;
  }
  var ciP = jQuery(".displayContentInPopup");
  for (var i = 0; i < ciP.length; i++) {
    var l = jQuery("h5", ciP[i])[0];
    var p = jQuery(".thumbnailPreview", ciP[i])[0];
    if (!l && !p) {
      continue;
    }
    if (!l) {
      l = {};
    }
    if (!p) {
      p = {};
    }
    ciP[i].className += " displayContentInPopupIsSet";
    p.popCnt = l.popCnt = jQuery(".contentInPopup", ciP[i])[0];
    p.container = l.container = ciP[i];
    p.onclick = l.onclick = function () {
      var body = jQuery("body")[0];
      H2020.DCIP.cnt.appendChild(this.popCnt);
      H2020.DCIP.bg.popCnt = this.popCnt;
      H2020.DCIP.bg.referenceObject = this.parentNode;
      body.appendChild(H2020.DCIP.bg);
    };
    H2020.DCIP = {};
    H2020.DCIP.bg = $dc("div");
    H2020.DCIP.bg.className = "displayContentInPopup_popbg";
    H2020.DCIP.close = $dc("div");
    H2020.DCIP.close.className = "displayContentInPopup_close";
    H2020.DCIP.cnt = $dc("div");
    H2020.DCIP.cnt.className = "displayContentInPopup_pop";
    H2020.DCIP.bg.appendChild(H2020.DCIP.close);
    H2020.DCIP.bg.appendChild(H2020.DCIP.cnt);
    H2020.DCIP.close.onclick = function () {
      var body = jQuery("body")[0];
      H2020.DCIP.bg.referenceObject.appendChild(H2020.DCIP.bg.popCnt);
      body.removeChild(H2020.DCIP.bg);
    };
  }
  if (isLast || ciP.length > 0) {
    H2020.displayContentInPopupIsInit = true;
    return true;
  }
};

function initASAP() {
  var isInit = true;
  isInit = isInit && (H2020.setTabsIsInit = H2020.setTabs());
  if (!isInit) {
    setTimeout(initASAP, 50);
  }
};

initASAP();

(function ($) {
  Drupal.behaviors.h2020 = {
    attach: function (context, settings) {
      H2020.setTabs(true);
    }
  };

  var respMainNavIsInit = false;
  // Responsive main navigation.
  function respMainNav(force) {
    if (respMainNavIsInit) {
      return true;
    }
    var menuBt = $("#block-menu-block-main-navigation .panel-heading")[0];
    if (!menuBt) {
      return respMainNavIsInit;
    }
    menuBt.onclick = function () {
      $(this.parentNode).toggleClass("responsiveClosed");
      $("#block-views-parent-sections-block").toggleClass("hideWhenSmall");
      $("#block-views-newsroom-navigation-block").toggleClass("hideWhenSmall");
    }
    menuBt.onclick();
    menuBt.style.cursor = "pointer";
    respMainNavIsInit = true;
    return true;
  }

  $(document).ready(function () {

    respMainNav(true);

  });

})(jQuery);
