jQuery(document).ready(function($) {

  $('#menu-mobile').mmenu({
     'offCanvas': {
      'pageSelector': '#journal-webpage',
        'position': 'right',
        'zposition': 'front'
     }
  });


  $( ".custom.search" ).click(function() {
        if ($("div#search").hasClass("hidden")) {
            $('div#search').show();
            $('div#search form').show();
            $( "div#search.hidden" ).switchClass( "hidden", "active", 500, "easeInOutQuad" );
            $( "#search form input[type=text]" ).focus();
        }
        else{
            $( "div#search.active" ).switchClass( "active", "hidden", 500, "easeInOutQuad" );
            $( "#search-form input[type=text]" ).focusout();
            $('div#search form').hide();
        };
    });



  //afficher / masquer les filtres solr en mobile

  if ($('body').is("#com_solr")){
    $('.block.side>h2').addClass("switch active");

    $('.block.side>h2').click(function(){
        $('div.facet-list').toggle();
        $('.block.side>h2').toggleClass('active','');
    });


  };


  // affichage des messages de warning
  // faire plus generique si il en existe d autres
  if($("#system-message-container")){
      $("#system-message-container dt.warning").parents("#system-message-container").addClass("msg msg-warning");
      $("#system-message-container dt.warning").html("<span class='ico ico-warning'></span>")

      $("#system-message-container dt.message").parents("#system-message-container").addClass("msg msg-info");
      $("#system-message-container dt.message").html("<span class='ico ico-info'></span>")

  }


  // plus/moins sur .readMore
  // <div class="readMore"> <p>...<span class="btn"></span></p> <div class="readMore-full"></div></div>
  $(".readMore .readMore-full").hide();
  $(".readMore .btn").addClass("btn-show");
  $(".readMore .btn").html("+");

  $(".readMore .btn").on("click.readMore",function(){
    var $this = $(this);

    if($this.hasClass("btn-show")){
      $this.html("-");
      $(this).parent().siblings(".readMore-full").slideDown(500);
    } else {
      $this.html("+");
      $(this).parent().siblings(".readMore-full").slideUp(500);   
    }

    $this.toggleClass("btn-show", "btn-hide");
  });



  // full small equations +/-
  $(".img-inline img").each(function(){
    $this=$(this);
    if($this.height() < 30){
      $this.addClass("resized-small resizable");
    }
  });

  $("img.resizable").on("click", function(){
    $(this).toggleClass("resized-small","");
  });




});


