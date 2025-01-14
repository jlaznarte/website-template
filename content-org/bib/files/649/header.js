$(document).ready(function () {

  function headerControl(click_elem, target_elem, _this) {
    $('*', '.controls').removeClass('active')
    $(click_elem).addClass("active");

    if ($(target_elem).width() < $(click_elem).width() + 60) {
      if ($.browser.msie && parseInt($.browser.version) <= 7) {
        $(target_elem).css("width", $(click_elem).width() + 60);
      } else {
        $(target_elem).css("min-width", $(click_elem).width() + 60);
      }
    }

    if ($(target_elem).is(":visible")) {
      $(target_elem).fadeOut('fast', function () {
        $(click_elem).removeClass("active");
      });
    } else {
      $('.click_container').hide()
      $(target_elem).fadeIn('fast').show();
      $(document.body).mousedown(function (e) {
        var has = $(e.target).parents().hasClass('controls')
        if (has) return true

        $(target_elem).fadeOut('fast', function () {
          $(click_elem).removeClass("active");
        });
      })
    }

    $('input[name=login]', target_elem).focusP()
    return false;
  }

  $("#active_filter").click(function () {
    $("#active_filter").css("background-color", "#EFF8FF");
    $(".cclick_container.cfilter").show();
    $(this).parent().hover(function () {
    }, function () {
      $(".cclick_container.cfilter").hide();
      $("#active_filter").css("background", "none");
    });

    $(".cclick_container.cfilter a").click(function () {

      var elC = $(this).attr('class').split(" ")[0];

      $("#active_filter i").removeClass().addClass(elC);
      $(".cclick_container a").show().removeClass("clicked");

      $(".cclick_container" + elC).addClass("clicked");

      $(".cclick_container.cfilter").hide();
      $("#active_filter").css("background", "none");
    })
  });

  //Event: Settings tab click
  $(".settings .gear").click(function () {
    headerControl(".settings .gear", ".click_container.csettings", this);
  });

  $(".ncenter .notifications").click(function () {
    headerControl(".ncenter .notifications", ".click_container.cnotifications", this);
  });

  $("#loggedInInfo").click(function (e) {
    headerControl("#loggedInInfo", "#loggedInInfo .myAccountDropdownMenu", this);
    e.stopPropagation()
  });

  //Event: Login tab click
  $(".login .llink").click(function () {
    headerControl(".login .llink", ".click_container.clogin", this);
  });

  $(".smallHeader .sign .textlink").click(function () {
    headerControl(".smallHeader .sign .textlink", ".click_container.csign", this);
  });

  $(".ucp .textlink").click(function () {
    headerControl(".ucp .textlink", ".click_container.cucp", this);
  });

});