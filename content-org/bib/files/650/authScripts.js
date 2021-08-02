/**
 * @namespace
 */
Authenticate = {};


//this small plugin will handle ajax-pre-validation in login forms
(function($){
  $.fn.loginForm = function(){

    return this.each(function(){

      var form = $(this);
      var loginInput = $(".jsInputLogin", form);
      var passwordInput = $(".jsInputPassword", form);

      var errorsField = $(".jsErrorPlace", form).hide();
      var capsWarning = $('.capsWarning', form).hide();

      var success = false;

      loginInput.add(passwordInput).keydown(function(){
        if(event.keyCode==13) {
          form.submit();
          return false
        }
      });

      form.submit(function(){
        if (success) return true;

        var login = loginInput.val();
        var password = passwordInput.val();

        errorsField.text("").hide();

        $.ajax({
          type : "post",
          url : "/web/login/validate",
          data : {login : login, password : password},
          dataType: "json",
          success: function (data) {
            success = data.success;
            if(!success){
              errorsField.text(data.errorMessage).show();
            } else {
              form.submit()
            }
          }
        })
        return false;
      })

      //caps checking
      passwordInput.caps(function(caps) {
        caps ? capsWarning.slideDown('slow') : capsWarning.slideUp('slow');
      });
    });
  }
}(jQuery));


//define Auth Popup
(function(){
  Authenticate.showPopup = function(options){
    options = $.extend({
      returnTo : null,
      isSignUp : false,
      title : '',
      callback : ''
    }, options);

    var params = {};

    if(options.callback){
      if(!options.returnTo) options.returnTo = document.location.href;
      options.returnTo += "#hashcall="+encodeURIComponent(options.callback).replace(/'/g, "%27");
    }


    if(options.returnTo)
      params.returnTo = encodeURIComponent(options.returnTo);

    $('body').css('cursor', 'wait');

    $.get('/authPopup.jsp',
        params,
        function(data){
          $('body').css('cursor', '');

          data = $("<div/>").html(data)

          var popup = PopupModule.popup({
            title:'Please Sign up or Login',
            element:data
          });

          attachEvents(popup, options.isSignUp)
        }
    );

    function attachEvents(popup, isSignUp){
      $('form.jsLoginForm', popup).loginForm();

      $("#loginSide", popup).bind('click focus', function() {
        $(this).animate({width: '298px'}, 400 );
        $('#signupSide').animate({width: '198px'}, 400 );
      });

      $('#signupSide', popup).bind('click focus', function() {
        $(this).animate({width: '298px'}, 400 );
        $('#loginSide').animate({width: '198px'}, 400 );
      })

      if(options.title){
          $('#authWindowTitle', popup).html(options.title)
      }

      var fieldForFocus = isSignUp? $('#signupEmailField, #signupPassField, #signupPassFieldRepeat') : $('#loginfield, #passfield');
      fieldForFocus.focusP();
      fieldForFocus.click();

      fieldForFocus = isSignUp ? $('#signupEmailField') : $('#loginfield');
      fieldForFocus.focusP();
    }
  }
})();



$(function(){

  //lets put events into login forms!
  (function(){
    $('form.jsLoginForm').loginForm();
  })();

});

(function(){
  var hash = document.location.hash;

  var prefix = "#hashcall=";

  var index = hash.indexOf(prefix)

  if(index!=-1){
    var signature = hash.substr(index+prefix.length, hash.length)
    if(signature) {
      signature = decodeURIComponent(signature).replace("%27", "'");

      $(function(){
        try{
          eval(signature)
        }catch (e){
          Utils.log("Something wrong happend during execute hash-callback, "+e);
        }
      });
    }
    document.location.hash =hash.substr(0, index);
  }

})();