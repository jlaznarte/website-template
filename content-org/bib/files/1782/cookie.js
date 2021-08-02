/**
 * Cookie policy settings:
 * - Google analytics tracking
 * - Notification cookie
 */
jQuery(function($) {
  'use strict';
  if (window.cookie_initialised) {
    return;
  }
  window.cookie_initialised = true;
  var translations = {};
  var height, div, hide_and_sign, notify_cookie_usage, show_notification, ga, is_mobile, resize;
  $('.translations').each(function() {
    var item = $(this);
    translations[item.data('name')] = item.data('value');
  });
  ga = $('#google_analytics');
  is_mobile = translations.cookie_is_mobile;

//_utma cookie: _setVisitorCookieTimeout(enter_cookie_timeout_value_in_milliseconds)

  var init_ga = function() {
    // -------------------------------
    // Google analytics tracking settings
    // -------------------------------
    window._gaq = [
      ['_setAccount', ga.data('t2')],
      ['_setCustomVar', 1, 'host', ga.data('host'), 2],
      ['_setDomainName', ga.data('domain')],
      ['_trackPageview'],
      ['_setVisitorCookieTimeout', 31557600000],
      ['_gat._anonymizeIp'],
      ['t2._setAccount', ga.data('t1')],
      ['t2._setDomainName', ga.data('domain')],
      ['t2._setAllowLinker', true],
      ['t2._setCustomVar', 1, 'host', ga.data('host'), 2],
      ['t2._trackPageview'],
      ['t2._setVisitorCookieTimeout', 31557600000],
      ['t2._gat._anonymizeIp']
    ];
    if (ga.data('t3') !== undefined) {
      window._gaq.push(
        ['t3._setAccount', ga.data('t3')], ['t3._setDomainName', ga.data('domain')], ['t3._setAllowLinker', true], ['t3._trackPageview'], ['t3._gat._anonymizeIp'], ['t2._setVisitorCookieTimeout', 31557600000]
      );
    }
    var n = document.createElement('script');
    n.type = 'text/javascript';
    n.async = true;
    n.src = 'https://www.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(n, s);
  };

  var get_tracker_list = function() {
    var tracker_list = [ga.data('t1'), ga.data('t2')];
    if (ga.data('t3') !== undefined) {
      tracker_list.push(ga.data('t3'));
    }
    return tracker_list;
  };
  // Set cookie policy
  var disable_google_analytics = document.cookie.replace(/(?:(?:^|.*;)\s*disable_google_analytics\s*=\s*([^;]*).*$)|^.*$/, "$1");
  var set_cp = $('#set_cookie_policy');
  if (set_cp.length) {
    // Fill the checkbox if ga-disable cookie exists
    set_cp.prop('checked', disable_google_analytics === 'true');

    /**
     * Remove/Put back Google analytics tracking
     */
    set_cp.click(function() {
      var checked = set_cp.is(':checked');
      var expire_date = new Date(checked ? Date.now() + 366 * 24 * 3600 * 1000 : 0);
      document.cookie = 'disable_google_analytics=' + (checked ? 'true' : 'false') +
        '; expires=' + expire_date.toUTCString() + '; path=/; domain=' + ga.data('domain');
    });
  }

  // -------------------------------
  // Notification cookie settings
  // -------------------------------
  notify_cookie_usage = document.cookie.replace(/(?:(?:^|.*;)\s*notify_cookie_usage\s*=\s*([^;]*).*$)|^.*$/, "$1");
  if (notify_cookie_usage !== 'true') {

    /**
     * Display notification bar
     */
    show_notification = function() {
      var button, supp, text;
      var cookie_text = translations.cookie_text;
      var cookie_close = translations.cookie_close;
      var cookie_close_btn = translations.cookie_close_btn; 
      if (cookie_close_btn === undefined){cookie_close_btn = 'OK'}
      button = $('<a/>').addClass('close_notification').attr('title', cookie_close).html(cookie_close_btn).on('click', hide_and_sign);
      text = ($('<span/>')).html(cookie_text);
      div = ($('<div/>')).addClass('cookie_notification mobile').append(text).append(button);
      supp = $('<div/>');
      if (is_mobile) {
        div.addClass('mobile');
        div.appendTo('body');
      } else {
        div.prependTo('body').after(supp);
      }
      height = div.height();
      div.height(0);
      if (!is_mobile) {
        div = div.add(supp);
      }
      return div;
    };

    /**
     * Close notification and set cookie
     */
    hide_and_sign = function() {
      document.cookie = 'notify_cookie_usage=true; expires=' +
        new Date(Date.now() + 366 * 24 * 3600 * 1000).toUTCString() + '; path=/; domain=' + ga.data('domain');
      return div.animate({
        height: '0px'
      }, {
        duration: 'fast',
        complete: function() {
          if (is_mobile) {
            $(window).off('resize', resize);
          }
          return div.detach();
        }
      });
    };

    /**
     * Resize notification for mobile devices
     */
    resize = function() {
      var height = div.height();
      div.get(0).style.height = '';
      window.HEIGHT = div.height();
      div.height(height);
      div.animate({
        height: window.HEIGHT
      }, {
        duration: 'fast'
      });
      return false;
    };

    show_notification().animate({
      height: height
    }, {
      duration: 'fast',
      complete: function() {

          $(window).on('resize', resize);

      }
    });
  }

  function initialize_cookie() {
    if (disable_google_analytics === 'true')
      get_tracker_list().forEach(function(id) {
        window['ga-disable-' + id] = true;
      });
    init_ga(ga.data);
  }

  initialize_cookie();
});
