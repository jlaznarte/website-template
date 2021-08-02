jQuery(document).ready(function($) {
  $('.article .contributors:last ol.affiliation-list').hide();
  $('<p class="affiliation-list-reveal"><a href="#" class="view-more">+</a> Author Affiliations</p>').insertBefore($('.article .contributors:last ol.affiliation-list'));
  $('.article .contributors:last p.affiliation-list-reveal').click(function() {
    if($(this).find('a').text() == '+') {
      $(this).find('a').text('-');
    }
    else if($(this).find('a').text() == '-') {
      $(this).find('a').text('+');
    }
    $(this).next('ol.affiliation-list').toggle();
    return false;
  });
});
