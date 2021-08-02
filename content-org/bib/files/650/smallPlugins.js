$(function () {
  $('form.jsFormFocus').each(function () {
    if (!$(":text, :password", this).filter("[value='']:visible").filter(':first').focus().length)
      $(":text, :password", this).filter(":visible").each(function () {
        var item = $(this)
        if (item.val() === item.prev().attr("placeholder")) return !item.focus()
      })
  });
});

(function ($) {
  $.hashNavigation = function (section, callback, callback2) {
    if (!location.hash) return
    var hash = location.hash.replace('%23', '#').split('#')[section]
    hash ? callback(hash) : callback2 && callback2()
  }
}(jQuery));
