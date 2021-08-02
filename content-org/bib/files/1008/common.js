jQuery(function($) {
  'use strict';
  var translations = {};
  var track = function (type, action, label) {
    try {
      _gaq.push(['_trackEvent', type, action, label]);
      _gaq.push(['t2._trackEvent', type, action, label]);
    } catch (e) {}
  };

  /**
   * -------------------------------------------------------
   * Author
   * -------------------------------------------------------
   */
   /* Display author qtip */
  $(document).on('mouseover click', '.article-authors .author[data-url]', function(event) {
    var url = $(this).data('url');
    $(this).qtip({
      overwrite: false,
      content: {
          text: function(event, api) {
            track('authors-popup', 'load', url);
            $.ajax({url: url}).then(function(content) {
              track('authors-popup', 'show', url);
              api.set('content.text', content);
            }, function(xhr, status, error) {
              track('authors-popup', 'error-' + status, error);
              api.set('content.text', status + ': ' + error);
          });
          return '<div class="author-loading">' + translations.loading + '</div>';
        }
      },
      style: {
        classes: 'qtip-bootstrap' // Standard class + overrides
      },
      /*
      position: {
          target: 'mouse',
          adjust: {
            // Don't adjust continuously the mouse, just use initial position
            mouse: false
          }
      },
      */
      position: {
          target: 'mouse', // Use the mouse position as the position origin
          adjust: {
            // Don't adjust continuously the mouse, just use initial position
            mouse: false
          } 
      },
      show: {
        event: 'mouseover click',
        ready: true,
        solo: true // Hide other tooltips
      },
      hide: {
        fixed: true, // Stay
        delay: 500,
        inactive: 4000
      }
    }, event);
  });

  /* Author etal. */
  $('a.author_etal').click(function() {
    var etal = $(this);
    var dkey = etal.parents('article').data('dkey');
    if (!dkey) {
      return false;
    }
    var last_span = etal.prev();
    var author_url = etal.parent('.article-authors').data('url');
    etal.before($('#wait-progress').show());
    etal.remove();
    $.ajax({
      url: translations.authors_url,
      complete: function () {
        $('#wait-progress').hide();
      },
      success: function (data) {
        set_etal(data.authors, author_url, last_span);
      },
      dataType: 'json',
      type: 'post',
      data: {'dkey': dkey}
    });
  });

  function set_etal(authors, author_url, last_span) {
    var authors_count = authors.length;
    for (var i = 10; i < authors_count; i++) {
      var separator = (authors_count == (i+1)) ? ' ' + translations.separator_and + ' ' : ', ';
      var span = $("<span/>")
      .attr({
      'id' : 'author_' + authors[i].id_author,
      'class': 'author',
      'data-url': author_url + '?dkey=' + authors[i].dkey + '&n=' + authors[i].author_order
      })
      .text(authors[i].whole_name);
      last_span.after(span);
      span.before(separator);
      last_span = span;
    }
    return false;
  }

  /**
   * -------------------------------------------------------
   * Article functionalities
   * -------------------------------------------------------
   */
  /* Short summary */
  $('span.short-summary-button').click(function() {
    var sel = $(this);
    var dkey = stringEscape(sel.parents('article').data('dkey'));
    var summary_div = $('#short-summary_' + dkey);
    sel.text((summary_div.css('display') == 'none') ? translations.hide_short_summary : translations.show_short_summary);
    summary_div.toggle('slow');
    return false;
  });

  /* Show more/less articles tab */
  $('a.dl_tab').click(function() {
    var self = $(this);
    var duration = self.data('duration');
    $('.dl_tab').each(function(){
      var node_duration = $(this).data('duration');
      var target_li = $('#dl_head_' + node_duration);
      var target_div = $('#dl_div_' + node_duration);
      if (node_duration == duration) {
        target_li.addClass('active');
        target_div.show();
      } else {
        target_li.removeClass('active');
        target_div.hide();
      }
    });
    return false;
  });

  /* Graphical abstract */
  $('.GraphAbs').click(function() {
    $(this).toggleClass('big');
    return false;
  });

  /**
   * -------------------------------------------------------
   * Shopping cart
   * -------------------------------------------------------
   */
  function add_bindings() {
    $('.cart-box').on('click',function(e) {
      e.preventDefault();
      track('shopping-cart', 'open');
      open_cart();
    });

    $('body').on('click', 'a.btn-close-cart', function(){
      close_cart();
    });

    /* Add/remove article from cart */
    $('.btn-add-to-cart').click(function() {
      var self = $(this);
      var dkey = self.attr('data-dkey');
      var status = (self.attr('data-status') == 1) ? 0 : 1;
      var action = (status) ? 'remove' : 'add';
      update_cart_article_status(self, dkey, status).done(function() {
        track('shopping-cart', action + '-article', dkey);
      });
    });

    /* Add only button + redirect to services cart */
    $('.btn-checkout').click(function() {
      var self = $(this);
      var dkey = self.attr('data-dkey');
      var url = self.attr('data-checkout-url');
      update_cart_article_status(self, dkey, 1).done(function() {
        track('shopping-cart', 'add-article', dkey);
        document.location.href = url;
      });
    });
  }

  function add_cart_bindings() {
    /* Remove article from cart */
    $('.btn-cart-remove').one('click',function() {
      var self = $(this);
      var dkey = self.attr('data-dkey');
      if (update_cart_article_status(self, dkey, 0)) {
        self.parents('li.cart-article').hide('slow', function() {
          $(this).remove();
          update_cart_price();
          if ($('.cart-products-loaded li').length == 0) {
            close_cart();
          }
        });
      }
    });

    /* Clear cart */
    $('.btn-cart-clear').on('click',function() {
      clear_cart();
      // Slowly update & close visual
      $('ul.cart-products-loaded').hide('slow', function() {
        $(this).remove();
        update_cart_price();
        close_cart();
      });
    });
  }

  /* DIsplay cart qtip */
  function open_cart() {
    var qtip = $('.cart-box').qtip({
      content: {
        text: translations.loading_cart, // Popup loading message
        ajax: {
          url: translations.get_shopping_cart_url,
          success: function(content) {
            // Set qtip content
            this.set('content.text', content);
            add_cart_bindings();
          },
          error: function (xhr, status, error) {
            this.set('content.text', status + ': ' + error);
          }
        }
      },
      position: {
        my: 'top right',
        at: 'bottom left',
        target: $('.cart-box')
      },
      show: {
        target: $('.cart-box'),
        event: 'click',
        effect: function() {
          $(this).fadeTo(500, 1);
        }
      },
      hide: {
        target: $('.cart-box'),
        event: 'unfocus',
        effect: function() {
          $(this).slideUp();
        }
      },
      style: {
        classes: 'qtip-cart'
      }
    });
    qtip.qtip('show');
  }

  /* Hide cart */
  function close_cart() {
    $('.cart-box').qtip('hide');
  }

  /* Add/remove article from cart */
  function update_cart_article_status(button, dkey, status) {
    return $.ajax({
      url: translations.set_cart_article_status_url,
       beforeSend: function() {
        $(button).buttonLoader('start');
       },
      complete: function() {
        $(button).buttonLoader('stop');
      },
      success: function(data) {
        if (data.success === true) {
          set_cart_article_status(status);
          set_cart_count(data.cart_count);
          return true;
        }
      },
      error: function (xhr, status, error) {
        track('shopping-cart', 'error-' + status, error);
      },
      dataType: 'json',
      type: 'post',
      data: {
        'dkey': dkey,
        'status': status
      }
    });
  }

  /* Change cart article flag */
  function set_cart_article_status(status) {
    var btn = $('.btn-add-to-cart');
    if (status) {
      btn.attr('data-status', 1).addClass('article-in-cart').val(translations.remove_from_cart);
    } else {
      btn.attr('data-status', 0).removeClass('article-in-cart').val(translations.add_to_cart);
    }
  }

  /* Clear cart */
  function clear_cart() {
    $.get(translations.clear_shopping_cart_url, function() {
      set_cart_article_status(false);
      set_cart_count(0);
    });
  }

  /* Update cart amount */
  function update_cart_price() {
    var amount = 0;
    var cart_amount = $('.cart-amount');
    cart_amount.fadeOut();
    var cart_articles = $('.cart-products-loaded li');
    if (cart_articles.length > 0) {
      cart_articles.each(function(n) {
        var item_price = parseInt($(this).find('span.cart-article-price').attr('data-price')) || 0;
        amount += item_price;
      });
    }
    cart_amount.html(amount);
    cart_amount.fadeIn('slow');
  }

  /* Cart counter */
  function get_cart_count() {
    var cart = $('#cart-info');
    if (cart.length != 0 && cart.text()) {
      return parseInt(cart.text());
    }
    return 0;
  }

  function set_cart_count(count) {
    var counter = $('.cart-counter');
    if (count > 0) {
      counter.text(count);
      counter.fadeIn('slow');
    } else {
      counter.fadeOut();
    }
  }

  function initialize_cart_block() {
    add_bindings();
  }

   /**
   * -------------------------------------------------------
   * Other functionalities
   * -------------------------------------------------------
   */
  /* Get query string in dom */
  $.extend({
    getQueryString: function (name) {
      function parseParams() {
        var params = {},
        e,
        a = /\+/g, // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);
        while (e = r.exec(q))
        params[d(e[1])] = d(e[2]);
        return params;
      }
      if (!this.queryStringParams) {
        this.queryStringParams = parseParams();
      }
      return this.queryStringParams[name];
    }
  });

  function stringEscape(s) {
    return s ? s.replace(/\//g,'\\\/').replace(/\./g,'\\\.') : s;
  }

  function toggle_all(main_id, status) {
    var list = document.getElementById(main_id).getElementsByTagName('input');
    for (var i=0; i<list.length; i++) {
      if (list[i].type === 'checkbox') {
        if (status === true) {
          list[i].checked = true;
        } else if (status === false) {
          list[i].checked = false;
        } else {
          list[i].checked = !list[i].checked;
        }
      }
    }
    return false;
  }

  /* Input loading animation */
  $.fn.buttonLoader = function(action) {
      var self = $(this);
      if (action == 'start') {
        /*
        if ($(self).attr('disabled') == 'disabled') {
          e.preventDefault();
        }
        */
        $('.has-spinner').attr('disabled', 'disabled');
        self.val(translations.loading_cart);
        self.addClass('active');
      }
      if (action == 'stop') {
        self.removeClass('active');
        $('.has-spinner').removeAttr('disabled');
      }
    }

  /**
   * -------------------------------------------------------
   * Common initialize
   * -------------------------------------------------------
   */
  function initialize_common() {
    $('.translations').each(function () {
      var item = $(this);
      translations[item.data('name')] = item.data('value');
    });
    initialize_cart_block();
  }

  initialize_common();
});
