/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

  Drupal.Views = {};

  /**
   * JQuery UI tabs, Views integration component.
   */
  Drupal.behaviors.viewsTabs = {
    attach: function (context) {
      if ($.viewsUi && $.viewsUi.tabs) {
        $('#views-tabset').once('views-processed').viewsTabs({
          selectedClass: 'active'
        });
      }

      $('a.views-remove-link').once('views-processed').click(function(event) {
        var id = $(this).attr('id').replace('views-remove-link-', '');
        $('#views-row-' + id).hide();
        $('#views-removed-' + id).attr('checked', true);
        event.preventDefault();
      });
      /**
    * Here is to handle display deletion
    * (checking in the hidden checkbox and hiding out the row).
    */
      $('a.display-remove-link')
        .addClass('display-processed')
        .click(function() {
          var id = $(this).attr('id').replace('display-remove-link-', '');
          $('#display-row-' + id).hide();
          $('#display-removed-' + id).attr('checked', true);
          return false;
        });
    }
  };

  /**
 * Helper function to parse a querystring.
 */
  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos != -1) {
      query = query.substring(pos + 1);
    }
    var pairs = query.split('&');
    for (var i in pairs) {
      if (typeof(pairs[i]) == 'string') {
        var pair = pairs[i].split('=');
        // Ignore the 'q' path argument, if present.
        if (pair[0] != 'q' && pair[1]) {
          args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
      }
    }
    return args;
  };

  /**
 * Helper function to return a view's arguments based on a path.
 */
  Drupal.Views.parseViewArgs = function (href, viewPath) {

    // Provide language prefix.
    if (Drupal.settings.pathPrefix) {
      var viewPath = Drupal.settings.pathPrefix + viewPath;
    }
    var returnObj = {};
    var path = Drupal.Views.getPath(href);
    // Ensure we have a correct path.
    if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
      var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
      returnObj.view_args = args;
      returnObj.view_path = path;
    }
    return returnObj;
  };

  /**
 * Strip off the protocol plus domain from an href.
 */
  Drupal.Views.pathPortion = function (href) {
    // Remove e.g. http://example.com if present.
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) == protocol) {
      // 2 is the length of the '//' that normally follows the protocol.
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  /**
 * Return the Drupal path portion of an href.
 */
  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(Drupal.settings.basePath.length, href.length);
    // 3 is the length of the '?q=' added to the url without clean urls.
    if (href.substring(0, 3) == '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i in chars) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function($) {
  /*
  * JavaScript controls for the new main site header.
  */

  Drupal.behaviors.jisc_ia_nav = {
    attach: function (context, settings) {
      
      // Initialise the interactions for the small viewport triggers.
      smallViewportInteractiveTriggers._init($('.jsUtilityTrigger'));

      // Create the new responsive header.
      responsiveSiteHeader._init(
        $('.jsSiteMasthead'),
        $('.jsMainNavSecondaryHook'),
        $('.jsMainNavTertiaryHook')
      );

      // Initialise the sticky header feature.
      stickyHeader._init($('.jsSiteMasthead'));
    }
  };  

  // The breakpoint where the main site header shifts from the small viewport styling to
  // the larger viewport styling.
  var SMALL_VIEWPORT_BREAKPOINT_PX = 757;
  
  /** 
   * Search and menu toggle controls on small viewports.
   */
  var smallViewportInteractiveTriggers = {
    /**
     * Hides all show/hides other than the pressed trigger element.
     * 
     * @param {elem} triggerElement the trigger element that has been pressed.
     * All show/hides which are not linked to this item will be hidden.
     */
    _collapseFNBShowHides: function(triggerElement) {
      $('[data-a11y-toggle]').not(triggerElement).each(function() {
        var a11yToggleID = $(this).attr('id');
        $('[aria-labelledby="' + a11yToggleID + '"]').attr('aria-hidden', true);
      });
    },

    /**
     * Resets all trigger icons except the one that has been pressed, i.e. switches any other
     * icons from a close icon to their default style.
     *
     * @param {elem} The icon with the trigger role to be ignored.
     */
    _resetFNBTriggerIcons: function(triggerElement) {
      $('.jsUtilityTrigger').not(triggerElement).each(function() {
        $(this).removeClass('has-menu-open');
      });
    },

    /**
     * Reset all trigger icons to their default state.
     */
    resetAllTriggerIcons: function() {
      this.triggerElement.removeClass('has-menu-open');      
    },

    /**
     * Reset all aria-hidden attributes to their default state.
     */
    resetAllAriaAttributes: function() {
      $('[data-a11y-toggle]').each(function() {
        var a11yToggleID = $(this).attr('id');
        $('[aria-labelledby="' + a11yToggleID + '"]').attr('aria-hidden', true);
      });
    },

    /**
     * Check if any menus are expanded in a small viewport.
     */
    updateMenuExpandedState: function() {
      this.menuExpanded = this.triggerElement.hasClass('has-menu-open');
    },

    _init: function(triggerElement) {

      this.triggerElement = triggerElement;
      this.menuExpanded = false;

      var that = this;
      this.triggerElement.click(function(e) {
        e.preventDefault();

        // Collapse all other show/hides.
        that._collapseFNBShowHides($(this));
    
        // Reset all other focussed navigation bar trigger icons.
        that._resetFNBTriggerIcons($(this));
    
        $(this).toggleClass('has-menu-open');

        that.menuExpanded = $(this).hasClass('has-menu-open');
      });
    }
  }
  
  /**
   * Make the site header responsive, ie if the list items on the secondary or tertiary 
   * navigation need to wrap on the next line, then adjust the height as necessary.
   */
  var responsiveSiteHeader = {    
    /**
     * Calculate the amount of spacing to be subtracted from the main navigation show/hide
     * on small screen viewports so that we can fit everything on the browser height.
     *
     * @returns {int} The height that the small viewport show/hide needs to be.
     */
    _getSmallScreenNavigationHeightPX: function() {
      // First check if list items exist, if not, return 0 so that we avoid unnecessary padding.
      if(this.MAIN_NAVIGATION_PANEL.find('li').first().length === 0)
        return 0;

      // Get the top margin from the first list element.
      var mainNavListItemMargin = this.MAIN_NAVIGATION_PANEL.find('li')
        .first().css('margin-top').replace(/[^-\d\.]/g, '') * 1;
      // Get bottom padding from main navigation panel.
      var mainNavPadding = this.MAIN_NAVIGATION_PANEL
        .css('padding-bottom').replace(/[^-\d\.]/g, '') * 1;
      
      var menuHeight = $(window).height() - this._siteHeader.height() - mainNavPadding;

      return menuHeight;
    },

    /**
     * The aria-hidden attribute is tied in with a11ytoggle and the site search and menu triggers
     * in the small viewport. In larger viewports the aria-hidden attriute is set to 'true'
     * however the side effect of this is that screenreaders ignore all navigation links.
     * Therefore, we remove the attribute in larger viewports (and also need handle trigger 
     * states as a result).
     */
    _updateViewportSizeAttributes: function() {
      // Window is currently being resized.
      this.resizing = true;

      // Check whether in the JS we have updated the data attribute to signify we are in a
      // small viewport. This data attribute helps prevent the flash of the small viewport
      // menus when resizing as the 'aria-hidden' attributes are also handle by JS. In short,
      // this data attr helps keep everything in sync. This issue stemmed from using the same
      // block of HTML for small and medium viewports.
      var smallVieport = $('.jsMenuTarget').attr('data-is-small-viewport') === 'true';

      if(isSmallViewport()) {
        // Here we have resized from a medium viewport to a small viewport however the data
        // attribute hasn't been set, so we set it.
        if(!smallVieport) {
          $('.jsMenuTarget').attr('data-is-small-viewport', true);
          smallViewportInteractiveTriggers.resetAllAriaAttributes();
          smallViewportInteractiveTriggers.resetAllTriggerIcons();
          smallViewportInteractiveTriggers.updateMenuExpandedState();
        }
      }
      else {
        if(smallVieport) {
          $('.jsMenuTarget')
            .attr('data-is-small-viewport', false)
            .removeAttr('aria-hidden');
          smallViewportInteractiveTriggers.resetAllTriggerIcons();
          smallViewportInteractiveTriggers.updateMenuExpandedState();
        }
        else {
          $('.jsMenuTarget').removeAttr('aria-hidden');
        }
      }
    },

    /**
     * Handle the aria attributes when the viewport transitions between small and medium.
     * This is typically handled in the _init() function, however since we don't need to
     * handle responsive padding in the absence of secondary/tertiary signposts, we
     * exit early. This function allows us to still update aria attributes before exit.
     */
    _addViewportSizeListener: function() {
      this._updateViewportSizeAttributes();
      var that = this;
      
      $(window).on('resize', function() {

        clearTimeout(that._resizeTimer);

        that._resizeTimer = setTimeout(function() {
          that._updateViewportSizeAttributes();
        }, that.RESIZE_INTERVAL_MILLISECONDS);
      });
    },

    /**
     * As there is a complex interplay between nested lists in the HTML and the visual separation
     * of the lists into two slices inside the site header, we use JavaScript to handle responsiveness
     * e.g. when list items wrap whilst resizing the viewport.
     */
    _updateSiteHeaderResponsiveness: function() {

      // Store the latest height of the tertiary navigation.
      var latestTertiaryNavHeight = this._tertiaryNavigation.height();

      // Check if the height has changed, ie if list items on the tertiary navigation have wrapped.
      if (this._tertiaryNavHeight !== latestTertiaryNavHeight) {
        if(!isSmallViewport()) {
          // Adjust the padding to suit the secondary navigation content height.
          var tertiaryHeight = (isIE11()) ? latestTertiaryNavHeight + 'px' : 
            convertPixelsToREM(latestTertiaryNavHeight) + 'rem';
          
          this._secondaryNavigation.css('padding-bottom', tertiaryHeight);
        }
        else {
          // If we are in a small viewport then we don't need to worry about secondary
          // or tertiary navigation.
          this._secondaryNavigation.css('padding-bottom', '0');
        }

        // Store the updated tertiary navigation height.
        this._tertiaryNavHeight = latestTertiaryNavHeight
      }

      if(!isPositionStickySupported()) {
        this._updateBodyContentPadding();
      }
    },

    /**
     * Add padding to the top of the body content that equates to the height of the main
     * site header. This is for cases where the sticky positioning property is unspported by 
     * browsers.
     */
    _updateBodyContentPadding: function() {      
      var headerHeight = (isIE11()) ? this._siteHeader.height() + 'px' : 
        convertPixelsToREM(this._siteHeader.height()) + 'rem';
      
      this.MAIN_BODY_CONTENT.css('padding-top', headerHeight);
    },

    /**
     * Set the height of the menu in small viewports to match the window size. This is to enable
     * users to scroll through and access the whole menu separately from anywhere on the page.
     */
    _updateSmallViewportMenuHeight: function() {
      // If we are in a small viewport, we need to set the height of the navigation menu show/hide.
      // This is to enable scrolling.
      if(isSmallViewport()) {
        var navigationHeight = (isIE11()) ? this._getSmallScreenNavigationHeightPX() + 'px' : 
          convertPixelsToREM(this._getSmallScreenNavigationHeightPX()) + 'rem';
        
        this.MAIN_NAVIGATION_PANEL.css({
          'max-height': navigationHeight,
          'overflow-y': 'scroll',
          '-webkit-overflow-scrolling': 'touch'
        });
      }
      else {
        // We don't want to set the height of the navigation show/hide if we are in medium
        // screen viewport.
        this.MAIN_NAVIGATION_PANEL.css({
          'max-height': '',
          'overflow-y': '',
          '-webkit-overflow-scrolling': ''
        });
      }
    },

    /**
     * Updates the padding of the secondary navigation slice so that it works nicely and
     * responsively with the tertiary navigation. This is only run when the page first loads.
     */
    _updateSecondaryNavigationPadding: function() {
      if(!isSmallViewport()) {
        // Apply padding below the secondary navigation using the tertiary content height.
        // But only if in medium or above sized viewport.
        var tertiaryHeight = (isIE11()) ? this._tertiaryNavHeight + 'px' : 
          convertPixelsToREM(this._tertiaryNavHeight) + 'rem';
        
        this._secondaryNavigation.css('padding-bottom', tertiaryHeight);
      }
    },

    /**
     * Initialise the responsive site header and create a window resize event.
     * 
     * @param {elem} siteHeader the main site header.
     * @param {elem} secondaryNavigation the secondary navigation element
     * @param {elem} tertiaryNavigation the tertiary navigation element
     */
    _init: function(siteHeader, secondaryNavigation, tertiaryNavigation) {        
      
      // If the site header doesn't exist, we don't need to handle responsiveness via
      // JavaScript.
      if(siteHeader.length === 0) {
        return;
      }
              
      // If the site header DOES exist:
      //   - if the secondary or tertiary navigation doesn't exist, we don't need
      //     to handle site header responsiveness via JavaScript, so we exit.
      //   - however, we still want to handle the menu flash that occurs
      //     when transitioning between small and medium viewports.
      if((secondaryNavigation.length === 0 && tertiaryNavigation.length === 0)
        && siteHeader.length !== 0) {
          this._addViewportSizeListener();
          return;
      }
      
      // Main body content following the main site header.
      this.MAIN_BODY_CONTENT = $('.jsMainContent');

      // Main navigation element. We store this to style the small viewport navigation show/hide.
      this.MAIN_NAVIGATION_PANEL = $('.jsMainNavHook');

      // Set interval for throttling window resize detection.
      this.RESIZE_INTERVAL_MILLISECONDS = 10;

      // If we need some extra spacing for the navigation show/hide on small viewports.
      this.ADDITIONAL_SPACING_BOTTOM_PX = 3;

      // Store parameters locally.
      this._siteHeader = siteHeader;
      this._secondaryNavigation = secondaryNavigation;
      this._tertiaryNavigation = tertiaryNavigation;
      this._tertiaryNavHeight = 0;
         
      // Window is resizing.
      this.resizing = false;
            
      // Throttle window resize events.
      this._resizeTimer = null;
      
      // The following only apply if a tertiary navigation slice exists.
      if(this._tertiaryNavigation.length !== 0) {
        // Store the height of the content in the tertiary navigation in REM units.
        this._tertiaryNavHeight = this._tertiaryNavigation.height();
        // Update the padding for the secondary navigation.
        this._updateSecondaryNavigationPadding();
        // Update site header responsive properties on initialisation.
        this._updateSiteHeaderResponsiveness();
      }

      // Update the top padding of the main body content if position: sticky is unsupported by
      // the browser.
      if(!isPositionStickySupported()) {
        this._updateBodyContentPadding();
      }
      
      // Set the height of the menu for small viewports.
      this._updateSmallViewportMenuHeight();
      // Set attribute to indicate viewport size.
      this._updateViewportSizeAttributes();

      // Store a reference to the responsive site header object.
      var that = this;

      // On window resize, set resizing to true (to disable any animation), 
      // and update the header style.
      $(window).on('resize', function() {

        clearTimeout(that._resizeTimer);

        that._resizeTimer = setTimeout(function() {
          if(that._tertiaryNavigation.length !== 0) {
            that._updateSiteHeaderResponsiveness();
          }
          that._updateSmallViewportMenuHeight();
          that._updateViewportSizeAttributes();
        }, that.RESIZE_INTERVAL_MILLISECONDS);
      });
    }
  }

  /**
   * Makes the site header 'sticky', ie:
   * (1) If user is at the top of the page, then ONLY hide the header after the 
   * user has scrolled down after a certain point (in this case, the height of the site header).
   * (2) If the user scrolls up always show the header.
   * (3) If the user scrolls back down and is beyond the initial threshold set at the top 
   * of the page then instantly hide the header.
   * (4) In small viewports, if the user has pressed a trigger and eg has expanded the menu
   * Then do not hide the site header when scrolling. If all triggers are inactive, then
   * resume sticky behaviour.
   *
   * @param {elem} stickyHeader the HTML element to make sticky.
   */
  var stickyHeader = {
    /**
     * Update the sticky-ness of the header based on scroll events.
     */
    _updateStickyHeader: function() {
      var that = this;

      // Update how much the user has scrolled.
      var latestScrollTop = $(window).scrollTop();

      // Get the cookie bar height if it is visible.
      var cookieBarHeight = (this.COOKIE_BAR.css('display') === 'block') ? 
        this.COOKIE_BAR.height() : 0;
      
      // If CSS property position: sticky is unsupported, then we are likely in IE
      // where the cookiebar is fixed, so we don't cater for its height.
      if(!isPositionStickySupported()) {
        cookieBarHeight = 0;
      }

      // The height threshold is how far we need to scroll down the page from the top
      // before we hide the main site header.
      var heightThreshold = this._stickyElement.height() + cookieBarHeight;

      // If the user has scrolled down and has passed the definted threshold.
      if (latestScrollTop > this._lastScrollTop && latestScrollTop > heightThreshold) {

        // If sticky is not supported by the browser (e.g. IE11) then move the body content up.
        if(!isPositionStickySupported()) {
            that._animationComplete = false;

          // JQuery animation is being applied as we need to programmatically calculate the
          // height and shift the sticky header. We can also synchronise the animations and
          // log when the animations are complete.

          var stickyElementHeight = (isIE11()) ? (this._stickyElement.height() * -1) + 'px' : 
            (convertPixelsToREM(this._stickyElement.height()) * -1) + 'rem';

          this._stickyElement.animate({
              top: stickyElementHeight
          }, {
              duration: that.STICKY_HEADER_HIDE_ANIMATION_DURATION,
              queue: false,
              complete: function(e) {
                that._animationComplete = true;
              }
          });
        }
        else {
          // If position sticky is supported then we just need to assign the right class.
          if(!this._stickyElement.hasClass(this.MASTHEAD_HIDDEN_CLASS)) {
            this._animationComplete = false;
            this._stickyElement.removeClass('is-visible').addClass(this.MASTHEAD_HIDDEN_CLASS);
          }
        }

        // Update the default scroll value.
        this._lastScrollTop = latestScrollTop;
      }
      else {
        // If sticky is not supported by the browser (e.g. IE11) then move the body content down.
        if(!isPositionStickySupported()) {
          that._animationComplete = false;

          // JQuery animation is being applied as we need to use JavaScript to calculate the
          // height and shift the sticky header. We can also synchronise the animations and
          // log when the animations are complete.

          this._stickyElement.animate({
            top: '0rem'
          }, {
            duration: that.STICKY_HEADER_HIDE_ANIMATION_DURATION,
            queue: false,
            complete: function(e) {
              that._animationComplete = true;
            }
          });
        }
        else {
          // If position sticky is supported then we just need to assign the right class.
          if(this._stickyElement.hasClass(this.MASTHEAD_HIDDEN_CLASS)) {
            this._animationComplete = false;
            this._stickyElement.removeClass(this.MASTHEAD_HIDDEN_CLASS).addClass('is-visible');
          }
        }

        // Update the default scroll value to the current scroll value.
        this._lastScrollTop = latestScrollTop;
      }
    },

    /**
     * Initialise the sticky header feature.
     */
    _init: function(stickyElement) {

      if(stickyElement.length === 0) {
        return;
      }

      // Slide animation time for the header to slide down and up.
      this.STICKY_HEADER_HIDE_ANIMATION_DURATION = 400;

      // Main body content following the main site header.
      this.MAIN_BODY_CONTENT = $('.jsMainContent');

      // How often should we monitor scroll events. We specifiy an interval as detecting scroll
      // events is process hungry.
      this.SCROLL_EVENT_INTERVAL = 200;

      // The class to add to the HTML element which causes it to hide when users scroll down.
      this.MASTHEAD_HIDDEN_CLASS = 'is-hidden';

      // The cookie bar element where users opt in or out of cookies.
      this.COOKIE_BAR = $('.cookie-bar');

      // Monitor scroll events.
      this._didScroll = false;

      // Scroll position.
      this._lastScrollTop = 0;

      // Monitor sticky header animation.
      this._animationComplete = true;

      // Store the element locally.
      this._stickyElement = stickyElement;

      // Store a reference to this function.
      var that = this;

      // Set sticky animation to complete when transition is over.
      this._stickyElement.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        that._animationComplete = true;
      });

      // Detect scroll events.
      $(window).scroll(function(event){
        that._didScroll = true;
      });

      /* 
        Set an interval to check for scroll events so that we can show or hide
        the main site header, but only if:
        1. The user is not resizing the window
        2. The main site header is currently animating ie sliding up or down
        3. In mobile view, the menu is closed.
      */
      setInterval(function() {
        if (that._didScroll 
          && !responsiveSiteHeader.resizing 
          && that._animationComplete
          && !smallViewportInteractiveTriggers.menuExpanded) {
          that._updateStickyHeader();
          that._didScroll = false;
        }
        responsiveSiteHeader.resizing = false;
      }, that.SCROLL_EVENT_INTERVAL);
    }
  }

  /**
   * Checks whether the current window is of small viewport size.
   * 
   * @returns {boolean} whether the current viewport is small.
   */
  function isSmallViewport () {
    return window.innerWidth < SMALL_VIEWPORT_BREAKPOINT_PX;
  }

  /**
   * Convert pixels to REM.
   *
   * @param {int} pixels the pixel value to convert.
   * @returns {int} the equivalent REM value based on the multiplier.
   */
  function convertPixelsToREM(pixels) {
    var htmlFontSizePx = parseInt($('html').css('font-size'), 10);
    return (pixels / htmlFontSizePx);
  }

  /**
   * Check if the the position: sticky CSS property is supported by the browser.
   */
  function isPositionStickySupported() {    
    return Modernizr.csspositionsticky;
  }

  /**
   * Detect whether we are using Internet Explorer 11.
   * 
   * Note: this function has been added to handle cases where we are in IE11 and
   * the default font size of the browser does not match other browsers. For instance,
   * in Chrome the default font size is 10px (ie 63.5% of 16ox), however IE11 calculates
   * this as 9.93px. Because we have to set some CSS properties via JavaScript, we need
   * this to be consistent, and therefore to get around this issue, for IE11 we use pixels 
   * rather than REM units.
   */
  function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }

})(jQuery);
;
