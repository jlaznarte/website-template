var slideshowModule = {
  elements: {},
  currentId: 0,
  currentIndx: 0,
  nextIndx: 0,
  prevIndx: 0,
  resources: [],
  interval: null,
  intervalDelay: 3000,
  isSaving: false,
  isSingle: false,
  init: function() {
    slideshowModule.elements = {
      slideshow: $('#slideshowBlock'),
      wrapper: $('.jsWrapper', slideshowModule.elements.slideshow),
      holder: $('.jsHolder', slideshowModule.elements.slideshow),
      resizer: $('.jsResizer', slideshowModule.elements.slideshow),
      closeButton: $('.jsClose', slideshowModule.elements.slideshow),
      prevButton: $('.jsPrev', slideshowModule.elements.slideshow),
      nextButton: $('.jsNext', slideshowModule.elements.slideshow),
      rotateLButton: $('.jsRotateL', slideshowModule.elements.slideshow),
      rotateRButton: $('.jsRotateR', slideshowModule.elements.slideshow),
      error: $('.jsSlideshowError', slideshowModule.elements.slideshow),
      startStop: $('.jsStartStop', slideshowModule.elements.slideshow),
      bottom: $('.jsBottom', slideshowModule.elements.slideshow),
      toHide: $('.jsHideSlideShow', slideshowModule.elements.slideshow),
      currentImage: $('.jsCurrentImage', slideshowModule.elements.slideshow),
      leftImage: $('.jsImageLeft', slideshowModule.elements.slideshow),
      rightImage: $('.jsImageRight', slideshowModule.elements.slideshow)
    }

    slideshowModule.elements.closeButton.click(slideshowModule.closeSlideshow)

    this.elements.startStop.click(function() {
      if ($(this).hasClass('play')) slideshowModule.startSlideshow()
      else slideshowModule.stopSlideshow()
    })

    slideshowModule.elements.prevButton.click(function() {
      !slideshowModule.isSingle && slideshowModule.previous()
      slideshowModule.stopSlideshow()
    })
    slideshowModule.elements.nextButton.click(function() {
      !slideshowModule.isSingle && slideshowModule.next()
      slideshowModule.stopSlideshow()
    })

    $('.jsShare', slideshowModule.elements.slideshow).click(function() {
      if (slideshowModule.isSaving) return
      slideshowModule.stopSlideshow()
      var userIsPresent = true, needVerification = false
      if ($("#slideshowUserIsPresent").length)
        userIsPresent = $("#slideshowUserIsPresent").val() == "true"
      if ($("#slideshowNeedVerification").length)
        needVerification = $("#slideshowNeedVerification").val() == "true"
      startSharingFromD1(userIsPresent, needVerification, slideshowModule.currentId)
    })

    $('.jsDownload').click(function() {
      if (slideshowModule.isSaving) return
      slideshowModule.stopSlideshow()
      document.openD1Form.action = slideshowModule.resources[slideshowModule.currentIndx].dLink
      document.openD1Form.submit();
    })

    $('body').keydown(keyDownEvent)
    function keyDownEvent(event) {
      if (slideshowModule.isSaving) return
      if (slideshowModule.elements.wrapper.css('display') != 'block') return
      if (event.which == 27) slideshowModule.elements.closeButton.click()
      else if (event.which == 37) slideshowModule.elements.prevButton.click()
      else if (event.which == 39) slideshowModule.elements.nextButton.click()
    }

    slideshowModule.elements.rotateLButton.click(function() {
      slideshowModule.rotateImage(-90)
    })
    slideshowModule.elements.rotateRButton.click(function() {
      slideshowModule.rotateImage(90)
    })

    if (Config.is4Sync) {
      $(".jsSocial:not(.vk)", slideshowModule.elements.slideshow).show()
      if (Config.currentLanguage == "ru") $(".jsSocial.vk", slideshowModule.elements.slideshow).show()
    } else {
      $(".jsSocial.gp", slideshowModule.elements.slideshow).show()
      $(".jsSocial.tw", slideshowModule.elements.slideshow).show()
    }
  },
  closeSlideshow: function() {
    if (slideshowModule.isSaving) return
    $('body').removeClass('slideshowVisible')
    slideshowModule.stopSlideshow()
    slideshowModule.elements.wrapper.hide()
  },
  openSlideshow: function(dirId, startId, isPlay) {

    slideshowModule.openSlideshowPopup()

    if ((!dirId && !startId) || dirId == AccountFacade.SEARCH_RESULT_DIR_ID) {

      loadByFileIds();

    } else {

      loadByDirId();

    }

    function loadByFileIds() {

      var filesIds = []

      $('#slideshowAnchors input').each(function() {

        filesIds.push($(this).val())

      });

      if($.inArray(startId, filesIds) == -1){

        filesIds.push(startId);

      }

      if (filesIds.length) {

        $.ajax({
          type: 'post',
          url: "/web/account/slideshow/files",
          traditional: true,
          data: {fileId: filesIds},
          dataType: 'json',
          success: success,
          error: error
        });

      }
    }

    function loadByDirId() {

      $.ajax({

        type: 'post',
        url: "/web/account/slideshow/folder",
        data: {dirId: dirId},
        dataType: 'json',
        success: function(data){

          if(data && data.errorsCode=="0302"){

            loadByFileIds() //when access denied for file-dir (for example on d1 lets try load slideshow by fileID)

          } else {

            success(data);

          }

        },

        error: error

      })

    }


    function success(data) {
      slideshowModule.resources = data.photos
      if (!slideshowModule.resources || !slideshowModule.resources.length) {
        slideshowModule.closeSlideshow()
        return
      }

      if (slideshowModule.resources.length == 1) {
        slideshowModule.isSingle = true
        slideshowModule.elements.toHide.hide()
        slideshowModule.stopSlideshow()
      } else {
        slideshowModule.elements.toHide.show()
        slideshowModule.isSingle = false
      }

      slideshowModule.sortResources()
      slideshowModule.currentIndx = 0
      slideshowModule.currentId = slideshowModule.resources[0].id
      if (startId) {
        slideshowModule.currentId = startId
        for (var r in slideshowModule.resources) {
          if (slideshowModule.resources[r].id == slideshowModule.currentId)
            slideshowModule.currentIndx = parseInt(r)
          slideshowModule.resources[r].link +='?async&rand=' + Math.random()
        }
      }
      slideshowModule.calculateNextAndPrev(0)
      slideshowModule.elements.bottom.show()
      if ((!startId || isPlay) && !slideshowModule.isSingle) slideshowModule.startSlideshow()
    }
    function error(data) {
      console.log(data)
    }
  },
  sortResources: function() {
    if (AccountFacade && AccountFacade.info && AccountFacade.info.files) {
      var files = AccountFacade.info.files
      var tempResources = []
      for (var i = 0; i < files.length; i++) {
        for (var j = 0; j < slideshowModule.resources.length; j++) {
          if (files[i].id == slideshowModule.resources[j].id) {
            tempResources.push(slideshowModule.resources[j])
            break
          }
        }
      }
      slideshowModule.resources = tempResources
    }
  },
  openSlideshowPopup: function() {
    scroll(0, 0)
    $('body').addClass('slideshowVisible')
    slideshowModule.showLoader()
    slideshowModule.setSize(0, 0)
    slideshowModule.elements.slideshow.show()
    slideshowModule.elements.wrapper.show()
    slideshowModule.elements.bottom.hide()
    slideshowModule.elements.toHide.hide()
  },
  setNewImageInfo: function(shiftDirection) {
    slideshowModule.setRotateButtons()
    slideshowModule.setCurrentIndx()
    slideshowModule.setTotalIndx()
    slideshowModule.setName()
    slideshowModule.setImage(shiftDirection)
    slideshowModule.setSocialLinks()
  },
  setRotateButtons: function() {
    if (slideshowModule.resources[slideshowModule.currentIndx].canRotate) {
      slideshowModule.elements.rotateLButton.show()
      slideshowModule.elements.rotateRButton.show()
    } else {
      slideshowModule.elements.rotateLButton.hide()
      slideshowModule.elements.rotateRButton.hide()
    }
  },
  setSocialLinks: function() {
    var link =  slideshowModule.resources[slideshowModule.currentIndx].dLink
    $(".jsSocial.gp", slideshowModule.elements.slideshow).attr("href", "https://plus.google.com/share?url=" + link)
    $(".jsSocial.tw", slideshowModule.elements.slideshow).attr("href", "https://twitter.com/share?url=" + link)
    $(".jsSocial.fb", slideshowModule.elements.slideshow).attr("href", "https://www.facebook.com/sharer.php?u=" + link)
    $(".jsSocial.vk", slideshowModule.elements.slideshow).attr("href", "https://vk.com/share.php?url=" + link + "&title=" + slideshowModule.resources[slideshowModule.currentIndx].name + " - Download - 4sync")
  },
  setCurrentIndx: function() {
    $('.jsCurrentIndx', slideshowModule.elements.slideshow).text(slideshowModule.currentIndx + 1)
  },
  setTotalIndx: function() {
    $('.jsTotalIndx', slideshowModule.elements.slideshow).text(slideshowModule.resources.length)
  },
  setName: function() {
    $('.jsName', slideshowModule.elements.slideshow).text(slideshowModule.resources[slideshowModule.currentIndx].name)
  },
  setImage: function() {
    slideshowModule.showLoader()
    var indx = slideshowModule.currentIndx;
    slideshowModule.elements.currentImage.attr({src: slideshowModule.resources[slideshowModule.currentIndx].link}).reloadBackground({
      onSuccess: function() {
        if (indx != slideshowModule.currentIndx) return
        slideshowModule.hideLoader()
        slideshowModule.resizeHolder()
      }, onError: function() {
        if (indx != slideshowModule.currentIndx) return
        slideshowModule.setSize('', '')
        slideshowModule.hideLoader()
        slideshowModule.elements.error.show()
      }})
    if (slideshowModule.resources.length > 1) {
      slideshowModule.elements.leftImage.attr({src: slideshowModule.resources[slideshowModule.prevIndx].link}).reloadBackground()
      slideshowModule.elements.rightImage.attr({src: slideshowModule.resources[slideshowModule.nextIndx].link}).reloadBackground()
    }
  },
  resizeHolder: function() {
    $('body').append(slideshowModule.elements.currentImage)
    var h = slideshowModule.elements.currentImage.height()
    var w = slideshowModule.elements.currentImage.width()
    slideshowModule.elements.resizer.prepend(slideshowModule.elements.currentImage)
    if (h == 0) slideshowModule.setImage()
    slideshowModule.setSize(h, w)
    slideshowModule.elements.currentImage.show()
  },
  setSize: function(realHeight, realWidth) {
    if ((realHeight === 0 && realWidth === 0) || (realHeight && (realHeight < slideshowModule.elements.holder.height()))) {
      if ($.browser.msie) slideshowModule.elements.resizer.css({height: realHeight, width: realWidth})
      else slideshowModule.elements.resizer.css({maxHeight: realHeight, maxWidth: realWidth})
    } else {
      if ($.browser.msie) slideshowModule.elements.resizer.css({height: '', width: ''})
      else slideshowModule.elements.resizer.css({maxHeight: '', maxWidth: ''})
    }
  },
  next: function() {
    if (slideshowModule.isSaving) return
    slideshowModule.currentIndx = slideshowModule.nextIndx
    slideshowModule.calculateNextAndPrev(1)
  },
  previous: function() {
    if (slideshowModule.isSaving) return
    slideshowModule.currentIndx = slideshowModule.prevIndx
    slideshowModule.calculateNextAndPrev(-1)
  },
  calculateNextAndPrev: function(shiftDirection) {
    if (slideshowModule.currentIndx == slideshowModule.resources.length - 1) slideshowModule.nextIndx = 0
    else slideshowModule.nextIndx = slideshowModule.currentIndx + 1
    if (slideshowModule.currentIndx == 0) slideshowModule.prevIndx = slideshowModule.resources.length - 1
    else slideshowModule.prevIndx = slideshowModule.currentIndx - 1
    slideshowModule.currentId = slideshowModule.resources[slideshowModule.currentIndx].id
    slideshowModule.setNewImageInfo(shiftDirection)
  },
  startSlideshow: function() {
    if (slideshowModule.isSaving) return
    slideshowModule.elements.startStop.removeClass('play').addClass('pause')
    slideshowModule.interval = window.setInterval(slideshowModule.next, slideshowModule.intervalDelay)
  },
  stopSlideshow: function() {
    slideshowModule.elements.startStop.removeClass('pause').addClass('play')
    window.clearInterval(slideshowModule.interval)
  },
  showLoader: function() {
    slideshowModule.elements.error.hide()
    slideshowModule.elements.currentImage.hide()
    slideshowModule.elements.holder.css({backgroundImage: 'url(/images/ajax_loading_dark_bg.gif)'})
  },
  hideLoader: function() {
    slideshowModule.elements.holder.css({backgroundImage: 'none'})
  },

  /* Full expand */
  initFullExpand: function() {
    var container = $('#fullImageSize')
    function hideView() {
      container.hide()
    }
    container.draggable({cursor: "move", scroll: false, start: function() {
        container.css('cursor', 'move').unbind('click', hideView)
      }, stop: function() {
        container.css('cursor', 'url(/imageview/img/zoomout.cur), pointer').click(hideView)
      }
    })
    $('.expandImage').click(function(e) {
      var link = $(this).attr('data-link')
      container.css({backgroundImage: 'url(/imageview/img/loader.white.gif)', width: '60px', height: '60px'})
      setPosition(60, 60)
      container.unbind('click', hideView).click(hideView).show()
      $("img", container).hide().one('load', load).attr('src', link).each(function() {
        if (this.complete) $(this).trigger('load')
      })

      function load() {
        container.css({backgroundImage: 'none'})
        $(this).show()
        setPosition(this.height, this.width)
      }
      function setPosition(h, w) {
        var win = $(window)
        var y = e.clientY - h > 10 ? e.clientY + win.scrollTop() - h : 10 + win.scrollTop()
        var x = e.clientX - w > 10 ? e.clientX + win.scrollLeft() - w : 10 + win.scrollLeft()
        container.css({top: y, left: x, width: w, height: h})
      }
    })
  },

  /* Rotation */
  rotateImage: function(angle) {
    if (slideshowModule.isSaving || $('.slideshowStartStop.pause').length) return
    slideshowModule.isSaving = true
    slideshowModule.showLoader()
    $.ajax({
      url: '/web/account/dcurl?fileID=' + slideshowModule.currentId,
      type: 'get',
      success: function (data) {
        $.ajax({
          type:'get',
          dataType:'jsonp',
          url:data.url+'rest/image/srotate.jsonp?fileID=' + slideshowModule.currentId + '&angle=' + angle + '&' + Math.random(),
          success:function (data) {
            var link = data.url.replace('?rand=', '?async&rand=')
            slideshowModule.resources[slideshowModule.currentIndx].link = link
            var parentEl = $('#ml_file_' + slideshowModule.resources[slideshowModule.currentIndx].id)
            for (var i in AccountFacade.info.files) {
              if (AccountFacade.info.files[i].id == slideshowModule.currentId) {
                AccountFacade.info.files[i].prStyle = link.replace("/s7/","/s1/")
                break;
              }
            }
            if ($('.jsIsThumbnail').length) {
              parentEl.attr('style', '')
              var bg = 'background-image : url("' + AccountFacade.info.files[i].prStyle + '")'
              parentEl.find('.thumbPreviewImage').attr('style', bg).reloadBackground({onSuccess : function() { parentEl.css("background", "none") }})
            }
            if ($('body').hasClass('pageD1')) {
              $('#imageM').attr({src: link.replace("/s7/","/s3/")})
              Events.fireEvent('d1.reload.image')
            }
            slideshowModule.setImage()
            slideshowModule.isSaving = false
          },
          error: function() {
            notifyBlock.displayNotification($('.jsSaveRotationError').val(), 'ERROR')
            slideshowModule.isSaving = false
          }
        })
      },
      error: function() {
        notifyBlock.displayNotification($('.jsSaveRotationError').val(), 'ERROR')
        slideshowModule.isSaving = false
      }
    })
  }
}

$(function() {
  onChangeOrientation()
  $(window).resize(onChangeOrientation)
  slideshowModule.init()
  slideshowModule.initFullExpand()
})

function onChangeOrientation() {
  if ($(window).width() < $(window).height()) $('body').addClass('portrait')
  else $('body').removeClass('portrait')
}

