AjaxFacade.rootDirId = -1

function AjaxFacade() {
  var self = this

  function click() {
    AccountFacade.showLoadingDiv()

    var link = $(this)
    var container = link.attr('data-ajaxContainer') || 'includeFileList'

    AjaxFacade.call(link.attr('data-url'), container)
    
    return false
  }

  this.init = function() {
    $('*[data-url]').unbind('click', click).bind('click', click)
  }

  Events.addListener('ajax.content.loaded', this.init)
  Events.addListener('folder.reload', this.init)
  this.init()
  
  return this;
}

/**
 *  
 *  @param page URL to load
 *  @param container HTML element to set response text
 *  @param formContainer
 *  @param callback
 */
AjaxFacade.call = function(page, container, formContainer, callback) {
  container = container || 'includeFileList'

  AjaxFacade.log('[AjaxFacade.call]')
  AjaxFacade.dir(arguments)
  Events.fireEvent('show.modal.dialog')


  $.ajax({
    url: page,
    cashe: false,
    success: function(text, textStatus, XMLHttpRequest) {
      if(typeof collapseUpload == 'function')
        collapseUpload()
      $('#' + container).html(text)
      AjaxFacade.wrap(container, formContainer, callback)
    },
    complete: function() {
      AccountFacade.hideLoadingDiv()
    }
  }) 
}
AjaxFacade.wrap =  function (container, formContainer, callback) {
    $('#' + container).ready(function() {
      $('form', '#' + container).ajaxForm({
        iframe: false,
        beforeSubmit: function(params, form) {
          AjaxFacade.log('[AjaxFacade.ajaxForm.beforeSubmit]')

          var onSubmit = form.attr('data-submit')
          var check = onSubmit ? eval(form.attr('data-submit')) : true
          if (check) AccountFacade.showLoadingDiv()
          return check
        },
        complete: function() {
          AccountFacade.hideLoadingDiv()
        },
        success: function(responseText, statusText) {
          $('#' + (formContainer ? formContainer : container)).html(responseText)
          AjaxFacade.wrap(container, formContainer, callback)

          AjaxFacade.log('[AjaxFacade.ajaxForm.success]')
        },
        error: function(err) {
          AjaxFacade.log('[AjaxFacade.ajaxForm.error]')
          AjaxFacade.dir(err)
        }
      })

      Events.fireEvent('ajax.content.loaded', self.init)
      if (callback) callback()
    })
  }


AjaxFacade.debug = false

AjaxFacade.log = function(text) {
  if (!AjaxFacade.debug) return

  try {
    console.log(text)
  } catch(e) { }
}

AjaxFacade.dir = function(object) {
  if (!AjaxFacade.debug) return

  try {
    console.dir(object)
  } catch(e) { }
}

