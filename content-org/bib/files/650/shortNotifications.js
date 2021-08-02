$(function () {

  function showShortNotification() {
    $('#nloader').show();
    $.ajax({
      type:'get',
      dataType:'json',
      url:"/web/notification/showshort",
      success:function (data) {
        var list = data.infolist

        if (list.length > 0) {
          $('#nonotifications').hide()
          $('#ncontent').show()
        } else $('#nonotifications').show()

        $("#nscroll").children().remove()
        for (var i = 0; i < list.length; i++) {
          var event = list[i]

          var avatar = event.fromUserAvatarLink

          var info1Text = $('<div/>').text(event.info1).html()
          var info2Text = (event.info2 != "") ? "<br /><i class='f9 paddingT5'>" + $('<div/>').text(event.info2).html() + "</i>" : ""
          var info3Text = $('<div/>').text(event.info3).html()
          var fromUserName = $('<div/>').text(event.fromUserName).html()

          var eventType = event.type
          if (eventType == "SHARE_FILE" || eventType == "SHARE_FOLDER")  eventType = "tshare"
          else if (eventType == "COMMENT") eventType = "tcomment"
          else if (eventType == "CHAT_MESSAGE") eventType = "tmessage"
          else if (eventType == "SHARING_REQUEST_ACCESS") eventType = "trequest"
          else if (eventType == "BACKGROUND_FILE_TASK") {
            eventType = "tbgtask"
            var ext = event.iFileName.split('.').pop()
            avatar = $('#' + ext + 'Avatar').val()
            fromUserName = $('#archiveReadyDownload').val()
          } else if (eventType == 'BACKGROUND_GRAB_TASK') {
            eventType = 'timport'
            avatar = '/images/icons/import-notif-icon-50.png'
            fromUserName = ''
          }
          else if (eventType == "NEW_FRIEND_CONTACT") {
            eventType = "tinvite"
            fromUserName = ''
            info1Text = $('#contactRequestText').val().replace('$[p1]', '<span class="eventUserName">'+event.fromUserName+'</span>')
          }

          var unread = ""
          var unreadCount = 0
          if (event.status == 'NEW') {
            unread = "unread";
            unreadCount++
          }

          var classes = {
            tcomment:{}, tshare:{}, tmessage:{},
            tbgtask:{}, trequest:{}, tinvite:{}, timport:{}
          }

          for (var k in classes) {
            var v1 = $('#' + k + 'Text');
            var v2 = $('#' + k + 'TextUnread');
            classes[k] = {
              read: v1.val(),
              unread: v2.length ? v2.val() : v1.val()
            }
          }

          var newDiv = $("#nItemTmp1").clone()
          newDiv.removeAttr('id')
          newDiv.addClass(unread)
          newDiv.attr('data-inf', event.actionLink)
          newDiv.find('.uPhoto img').attr('src', avatar)
          newDiv.find('.eventUserName').html(fromUserName)
          newDiv.find('.info1').html(info1Text)
          newDiv.find('.eventFileName').html(event.iFileName)
          newDiv.find('.info2').html(info2Text)
          newDiv.find('.info3').html(info3Text)
          newDiv.find('.type').addClass(eventType)
          if (event.status == 'READ') {
            newDiv.addClass('read')
            newDiv.find('.linkWord').removeClass('bluePopupButton').addClass('grayPopupButton')
            newDiv.find('.linkWord span').text(classes[eventType].read)
          } else {
            newDiv.find('.linkWord span').text(classes[eventType].unread)
          }
          newDiv.show().click(function () {
            var link = $(this).attr('data-inf');
            if (link != '#') location.href = $(this).attr('data-inf')
          })
          $("#nscroll").append(newDiv)
        }
        $('#nloader').hide()

        $(".jsncounter").text(unreadCount)
        if (unreadCount > 0) $(".jsncounter").show()

        if ($("#nscroll").height() > 199) {
          if (Config.isMobile || Config.isIpad) $('#nscroll').css({overflowY:"auto", height:'200px'})
          else $("#nscroll").slimScroll({height:'200px'})
        }
      },
      error:function () {
        $('#nloader').hide();
        $('#ncontent').hide();
        $(".jsncounter").hide();
        $('#nonotifications').show();
      }
    })
  }

  function showFullNotification(page) {
    location.href = "/web/notification/showall?page=" + page;
  }

  function getNotificationCount() {
    if ($(".cnotifications").css("display") == "block")
      return;

    $.ajax({
      type:'get',
      dataType:'json',
      url:"/web/notification/count",
      data:getParams(),
      success:function (data) {
        if (data.unread > 0) {
          $(".jsncounter").text(data.unread);
          $(".jsncounter").show();
          Events.fireEvent("new.notification");
          if (data.space && typeof updateFreeSpaceBar == "function") updateFreeSpaceBar(data.space)
        }
      }
    })

    function getParams() {
      if ($('body.jsAccount').length && !AccountFacade.isSpecialDir(currentDirId))return {dirId:currentDirId}
    }
  }

  $('#notifications').click(function () {
    showShortNotification()
  })

  $('#notificationsAll').click(function () {
    showFullNotification(0)
  })

  $(document).click(function (event) {
    if ($(".cnotifications").css("display") == "block") {
      $(".jsncounter").text("0");
      $(".jsncounter").hide();
    }
  })

  setInterval(getNotificationCount, ~~$('#interval').val())

})