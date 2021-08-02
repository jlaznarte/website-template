(function ($) {
  $.fn.reloadBackground = function (options) {
    options = $.extend({
      onSuccess : function(){},
      onError: function(){}
    }, options);

    var template = /(^url\(['"]*)|(["']*\)$)/g
    return this.each(function () {
      var item = $(this)

      //support for reloading img src
      var isImg = item.is("img");

      var background = isImg ? item.attr("src") : item.css('background-image')
      if (!background) return

      //lest put empty img till original will load to prevent "error img displaying"
      if(isImg) item.attr("src","/images/spacer.gif");

      var url = background.replace(template, '')
      var newUrl = url
      var i = 1;
      var img = $('<img/>').hide()
      $('body').append(img)
      img.error(reload).load(load).attr('src', url)

      function reload() {
        if (i > 10) {
          $(this).remove()
          options.onError()
          return
        }
        var _this = $(this)
        var random = Math.random()
        setTimeout(generateNewUrl, i * 1000 + Math.floor(random * 700))
        i += i

        function generateNewUrl() {
          newUrl = url + (url.indexOf('?') == -1 ? '?' : '&') + 'rand=' + random
          _this.attr('src', newUrl)
        }
      }

      function load() {
        isImg ? item.attr("src" , background.replace(url, newUrl)) : item.css('background-image', background.replace(url, newUrl))
        $(this).remove()
        options.onSuccess();
      }
    })
  }
})(jQuery);