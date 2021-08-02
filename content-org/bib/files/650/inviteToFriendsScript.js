var FOLDER_TYPE = 0
var FILE_TYPE = 1
var MULTYSELECT_TYPE = 2

var PRIVATE_MODE = 0
var PUBLIC_MODE = 1

var state
var oldState
var fbInfo = new Object()
var isFromD1 = false

var ACCEPT_CODE_NO_SPACE = 106;
var RESOURCE_NO_MORE_AVAILABLE = 105;

jQuery.ajaxSettings.traditional = true;

var fbFriendsList = new Array();

var emailForRequestAccess = null

function initializeState() {
  state = new Object()
  state.entityId = 0;
  state.entityType = 0;
  state.entityName = "";
  state.invitePopup = 0;
  state.titleMsg = $("#startTitle").val();
  state.allEmails = "";
  state.owner = -1;
  state.message = "";
  state.fbLinks = null;
  state.externalFbId = "";
  state.externalFbName = "";
  state.externalFbAvatar = "";
  state.taginfo = false;
  state.fbSharingOff = $('#fbSharingOff').val();
  state.currentMode;
  state.contacts = new Array();
  state.popularFb = new Array();

  oldState = new Object()
  oldState.mode;
  oldState.mainPermissions;
  oldState.unInviteEmails = new Array();
  oldState.changedModes = new Object();
}

function presentPotentialEmails() {
  return $("#emails_tagsinput .tag").length || Config.mailPatterrn.test($('#emails_tag').val())
}

function showFileButtons() {
  if (state.entityType == MULTYSELECT_TYPE) return
  var isSendTab = $('.buttons .send', state.invitePopup).hasClass('active')
  $('#inviteLink, #cancelInvite, #errorInEmails, #closeShPopup, #saveHelper, #inviteLink span').hide()
  if (state.entityType == FILE_TYPE) {
    if (isSendTab && presentPotentialEmails()) $('#inviteLink, #cancelInvite').show();
    else $('#closeShPopup').show()
  } else showFolderButtons()
}

function unInvite(el) {
  var parent = $(el).parents('.invited')
  oldState.unInviteEmails.push($(parent).attr('inv-data'));
  parent.addClass('uninvited')
  showFolderButtons()
  return false
}

function permissionPopupShow(e, el) {
  hideAccessPopup()
  var toShow = el.find('.jsPermissions')
  var isVisible = toShow.css('display') == 'block'
  $('.jsPermissions').hide()
  isVisible ? toShow.hide() : toShow.show()
  var mode = el.hasClass('writePerm') ? 'write' : 'read'
  if (el.closest('#inviteList').length) toShow.css('top', e.pageY - toShow.offsetParent().offset().top + 10)
  el.find('.jsPermissionItem.' + mode + 'Permission input:radio').prop('checked', true)
  e.stopPropagation()
}

function permissionPopupAction(e, el) {
  e.stopPropagation()
  var jsPermissions = el.closest('.jsPermissions').hide()
  var currentPerm = jsPermissions.closest('.jsChangePermissions').hasClass('writePerm') ? 'write' : 'read'
  if (el.closest('.jsPermissionItem').hasClass(currentPerm + 'Permission')) return
  el.find('input:radio').prop('checked', true)
  changePermission(el)
}

function changePermission(el) {
  var newPerm = el.is('.readPermission') ? 'read' : 'write'
  var changePermissions = el.closest('.jsChangePermissions')
  changePermissions.removeClass('writePerm').removeClass('readPerm').addClass(newPerm + 'Perm')
  var invEl = el.closest('.invited')
  if (invEl.length) addChangedPermission(invEl.attr('inv-data'), newPerm)
  showFolderButtons()
}

function addChangedPermission(email, value) {
  if (oldState.changedModes[email] && (oldState.changedModes[email] != value)) {
    delete oldState.changedModes[email];
    return;
  } else oldState.changedModes[email] = value;
}

function showFolderButtons() {
  if (wasChanged()) {
    $('#saveFolderChanges, #cancelFolderChanges', state.invitePopup).show()
    $('#closeShPopup', state.invitePopup).hide()
    $('#saveHelper').show()
    $('.jsSuccessfullSent, #errorInEmails').hide()
  } else {
    $('#saveFolderChanges, #cancelFolderChanges', state.invitePopup).hide()
    $('#closeShPopup', state.invitePopup).show()
    $('#saveHelper').hide()
  }
}

function wasChanged() {
  var mainMode = $('#mainPermDropDown').hasClass('readPerm') ? 'read' : 'write'
  if (oldState.mainPermissions != mainMode || oldState.unInviteEmails.length || state.currentMode != oldState.mode ||
      splitEmails().length || $('.sharingPopupBody', state.invitePopup).hasClass('balloonsActiveBlock')) return true
  for (var i in oldState.changedModes) return true
  return false
}

function setInitState() {
  oldState.changedModes = new Object()
  oldState.unInviteEmails = []
  $('.sharingPopupBody', state.invitePopup).removeClass('balloonsActiveBlock')
  hideCustomMsg()
  showFolderButtons()
}

function saveShPopupChanges() {
  doInviteFolder()
  setInitState()
}

function cancelShPopupChanges() {
  $('#mainPermDropDown').removeClass('readPerm').removeClass('writePerm').addClass(oldState.mainPermissions + 'Perm')
  for (var i in oldState.changedModes)
    $('.invited[inv-data="' + i + '"] .jsChangePermissions').removeClass('readPerm').removeClass('writePerm').addClass((oldState.changedModes[i] == 'write' ? 'read' : 'write') + 'Perm')
  if (state.currentMode != oldState.mode) {
    setPopupMode(oldState.mode)
    state.currentMode = oldState.mode
  }
  $('.invited.uninvited').removeClass('uninvited')
  clearInvites()
  setInitState()
}

function refreshViewWithInvites(data) {
  var nameWithEmail = (state.owner.userName) ? state.owner.userName + ' (' + state.owner.invitedEmail + ')' : state.owner.invitedEmail
  var el = $("#viewWithInvitesDiv1").clone()
  el.attr('inv-data', state.owner.invitedEmail)
  el.find('img.inviteAva').attr('src', state.owner.avatarLink)
  el.find('div.inviteMail').html(nameWithEmail)
  $("#inviteList").html($('<div>').addClass('jsInviteList').css('height', '165px'))
  $('.jsInviteList').html(el).click(hideAccessPopup)
  for (var i = 0; i < data.invites.length; i++) {
    var currentInvite = data.invites[i];
    var email = currentInvite.invitedEmail;
    nameWithEmail = nameAndEmail(currentInvite)
    var status = (currentInvite.status.indexOf("Pending")>-1) ? '' : currentInvite.status
    var newDiv
    if (isFaceBookId(email)) {
      newDiv = $("#viewWithInvitesDiv2").clone()
      newDiv.removeAttr('id')
      newDiv.attr('inv-data', email)
      newDiv.find('img.inviteAva').attr({'src': currentInvite.avatarLink, 'id': 'av' + email})
      newDiv.find('.jsInviteMail').attr('id', 'inv' + email).html(nameWithEmail)
      newDiv.find('.jsInviteStatus').html(status)
      newDiv.find('div.changePermissions').removeClass('writePerm').removeClass('readPerm').addClass(currentInvite.userRight+'Perm')
    } else {
      newDiv = $("#viewWithInvitesDiv3").clone()
      newDiv.removeAttr('id')
      newDiv.attr('inv-data', email)
      newDiv.find('img.inviteAva').attr('src', currentInvite.avatarLink)
      newDiv.find('.jsInviteMail').html(nameWithEmail)
      newDiv.find('.jsInviteStatus').html(status)
      newDiv.find('div.changePermissions').removeClass('writePerm').removeClass('readPerm').addClass(currentInvite.userRight+'Perm')
    }
    $(".jsInviteList").append(newDiv);
  }
  if (data.invites.length > 2) {
    if (Config.isMobile || Config.isIpad) $('.jsInviteList').css({overflowY:"auto", height:'165px'})
    else $(".jsInviteList").slimScroll({height:'165px'}).closest('.slimScrollDiv').css({overflow: ""})
  }
}

function clearInvites() {
  $("#errorInEmails").hide()
  clearEmails()
  $('#emails_tag', state.invitePopup).val($('#emails_tag', state.invitePopup).data('default')).css({color: '#585b55', width: "300px"}).blur()
  $('#inviteLink, #saveFolderChanges').removeClass('loadingSpinnerLeft').removeClass('jsSpinner')
}

function prepareEmailsAndMessage() {
  state.message = $("#inviteMessage").val().replace(/^\s*/, "").replace(/\s*$/, "")

  if ($('#emails_tag').val() != "" && ($('#emails_tag').val() != $('#emails_tag').data('default')))
    $('#emails').addTag(($('#emails_tag').val()))

  return splitEmails()
}

function prepareRequestData() {
  var reqData = {
    encodedEntityId: state.entityId,
    wasChanged: false
  }

  if (state.currentMode != oldState.mode) {
    reqData.shareMode = state.currentMode
    reqData.wasChanged = true
  }

  var permissions = $('#mainPermDropDown').hasClass('readPerm') ? 'read' : 'write'
  if (oldState.mainPermissions != permissions) {
    reqData.permissions = permissions
    reqData.wasChanged = true
  }

  if (oldState.unInviteEmails.length) {
    reqData.unInviteEmails = oldState.unInviteEmails
    reqData.wasChanged = true
  }

  var pairs = []
  for (var i in oldState.changedModes) {
    pairs.push(i + '#' + oldState.changedModes[i])
  }
  if (pairs.length) {
    reqData.userPermissions = pairs
    reqData.wasChanged = true
  }

  var emails = prepareEmailsAndMessage()
  if (emails.length) {
    reqData.wasChanged = true
    for (var i = 0; i < emails.length; i++) {
      reqData['emails[' + i + '].email'] = emails[i]
    }
    reqData['userRights'] = $('#sendPermDropDown').is('.writePerm') ? 'write' : 'read'
    reqData['customInviteMessage'] = state.message
  }
  return reqData
}

function doInviteFolder() {
  if ($('#inviteLink').hasClass('jsSpinner')) return
  $('#saveFolderChanges').addClass('loadingSpinnerLeft').addClass('jsSpinner')

  var data = prepareRequestData()
  if (!data.wasChanged) {
    clearInvites()
    return
  }

  $.ajax({
    type:'post',
    dataType:'json',
    data: data,
    url:"/web/sharedFolderInvite/dir/invite",
    success:function (data) {
        if (data.status == "failed") {
          errorsInInvite(data.errors)
          return
        }

      setPopupMode(data.mode);
      oldState.mode = state.currentMode
      oldState.mainPermissions = data.permissions
      refreshViewWithInvites(data)
      refreshViewWithFacebookInvites()
      sendInvitesForFacebookUsers(data.fbLinks)
      reloadDirAndTree()

      clearInvites()
      showFolderButtons()

      if(data.errors){    //when not fail, but have some errors (for example when invite limit reached)
        notifyBlock.displayNotification(data.errors, "ERROR");
      }
    },
    error: function(data) { errorsInInvite(data.errors) }
  })
}

function doInviteFile() {
  if ($('#inviteLink').hasClass('jsSpinner')) return
  $('#inviteLink').addClass('loadingSpinnerLeft').addClass('jsSpinner')

  var emails = prepareEmailsAndMessage()
  if (!emails.length) return

  var reqData = {
    encodedEntityId:state.entityId,
    customInviteMessage:state.message,
    userRights:$('#sendPermDropDown').is('.writePerm') ? true : false
  }

  for (var i = 0; i < emails.length; i++) {
    reqData['emails[' + i + '].email'] = emails[i];
  }

  $.ajax({
    type:'post',
    dataType:'json',
    data:reqData,
    url:"/web/sharedFolderInvite/file/invite",
    success:function (data) {
      if (data.status == "failed") {
        errorsInInvite(data.errors)
        return
      }
      sendInvitesForFacebookUsers(data.fbLinks)
      clearInvites()
      showFileButtons()

      if(data.errors){    //when not fail, but have some errors (for example when invite limit reached)
        notifyBlock.displayNotification(data.errors, "ERROR");
      }
    },
    error: function(data) { errorsInInvite(data.errors) }
  })
}

function errorsInInvite(objMsg) {
  $('#inviteLink, #saveFolderChanges').removeClass('loadingSpinnerLeft').removeClass('jsSpinner')
  $("#saveHelper").hide();
  $("#errorInEmails").text($('.jsErrorInEmailsDefaultMessage').first().text())

  /* checking for a custom server error message */
  if (typeof objMsg == 'string') $("#errorInEmails").text(objMsg)
  else if (typeof objMsg == 'object') {
    for (var property in objMsg) {
      if (objMsg.hasOwnProperty(property) && typeof property == 'string') {
        $("#errorInEmails").text(objMsg[property].toString())
        break; /* breaking the cycle on the first matching element */
      }
    }
  }

  $("#errorInEmails").show()
}

function processFacebookFriendsLogic() {
  if (fbFriendsList.length == 0) {
    fbFriends({offset:0, limit:100})
  } else {
    refreshViewWithFacebookInvites()
    fillPromo1Div()
    asyncEventsPostActions()
  }
}

function processActiveInvites(data) {
  state.owner = data.owner
  refreshViewWithInvites(data)
}

function processEmailSuggesstions(data) {
  if (data.status == "ok") {
    state.allEmails = data.emails
    mergeFriendsLists()
  }
}

function processContactSuggesstions(data) {
  if (data.status == "ok") {
    state.contacts = data.friends
    state.contacts = $(state.contacts).sort(function (a, b) {
      return compare(a,b)
    })
  }
}

function clearEmails() {
  $('#emails').importTags('')
  $('.jsPromo').removeClass("checked")
  calculateInviteHeight(true)
}

var sharingDivHtml = $("#sharingPopup").html();

$(function () {
  $("#sharingPopup").html("");
})

function showDirectLinkForPremium() {
  $('#directLink').hide();
  $("#directLinkDiv").show();
}

function showDirectLinkForFree() {
  $('#directLink').show();
  $("#directLinkDiv").hide();
  $('#directLink').click(function (event) {
    showPromtForDirectLink(event);
  })
}

function showSendOkMessage() {
  if (state.entityType == FILE_TYPE) $('.jsSuccessfullSent').text($('#fileSuccessfullSent').val())
  if (state.entityType == FOLDER_TYPE) $('.jsSuccessfullSent').text($('#folderSuccessfullSent').val())
  $('.jsSuccessfullSent').show()
  setTimeout(function () {
    $('.jsSuccessfullSent').hide()
  }, 3000)
}

// ---------D!----------

function showPopupOnTheD1(id) {
  isFromD1 = true;
  startSharingForFile(id);
}

function startSharingFromD1(userIsPresent, needVerification, fileId) {
  if (!userIsPresent) Authenticate.showPopup({returnTo:document.location.href})
  else if (needVerification) promptVerifyEmail(window.event)
  else showPopupOnTheD1(fileId);
}

// ----------------- Public and Only my section ---------------------------

function processPermissionsInfo(data) {
  $('#mainPermDropDown').removeClass('writePerm').removeClass('readPerm').addClass(data.permissions+'Perm')
  oldState.mainPermissions = data.permissions
}

function processPublicInfo(info) {
  $('#downloadFileLink').val(info.simpleLink)
  hideAccessPopup()

  $('#fileHTMLembed').val(info.htmlEmbed)
  $('#fileForumEmbed').val(info.forumEmbed)
  if (info.embed) $('#fileEmbed').val(info.embed)
  else $('#fileEmbed').closest('.subdomain_inputs').hide()

  $('.tab.public').removeClass('jsActive')
  $("#tabPublicFile").addClass('jsActive');
  $('.tab.invite').removeClass('jsActive')
  $("#tabInviteMembersFile").addClass('jsActive');
}

function processPublicInfoMoreSharing(info) {
  //when one of the parent entity password protected - we can not change password for clild, so, password block will be hidden,
  // and block with explanation will be showed
  if(info.parentPasswordProtected){
    var message = $("#allreadyPasswordProtectedMess").val().replace("$[1]", info.parentPasswordProtected);
    $('#allreadyPasswordProtected span').text(message);
    $('#allreadyPasswordProtected').show();
    $('#passwordResult').hide()
  } else {
    $('#passwordInput').val(info.password);
    if (!info.password) {
      $('#passwordEnter').show()
      $('#passwordResult').hide()
    }
    else {
      $('#passwordResult').show()
      $('#changePasswordInput').val(info.password);
    }
  }
  $('#passwordBlock').hide()
  //when some childs allready password protected - we need confirmation window before save
  // cause password changing on parrent folder will overwrite passwords on child folders
  if(info.someChildPasswordProtected){
    $("#savePassword").attr("needConfirmation", "true");
  }

  $('#embedTA').val(info.embed)
  $('#widget_width').val(200)
  $('#widget_height').val(200)
  $('#widgetTA').val(info.widget)
  $("#prEmbed").attr("prLink", info.previewEmbed)
  $("#prWidget").attr("prLink", info.previewWidget)
  $('#previewLink').attr("href", info.previewEmbed)
  $('#htmlEmbed').val(info.htmlEmbed)
  $('#forumEmbed').val(info.forumEmbed)
  if (info.subdomain.length) {
    $('#subdomainValue').val(info.subdomain);
    $('#subdomainInput').val(info.shortSubdomain);
    $("#subdomainResult").show();
    $("#subdomainEnter").hide();
  }
  else {
    $("#subdomainResult").hide();
    $("#subdomainEnter").show();
  }
}

function subdomainSave(subdomain) {
  var notAvailable = $("#notavailable")
  $.getJSONAndProcessErrorWithLoading(
      "/web/sharedPopup/subdomainSave",
      {
        subdomain:subdomain,
        dir:state.entityId
      },
      function (data) {
        notAvailable.hide()
        $("#subdomainEnter").hide();
        $("#subdomainResult").show();
        $("#subdomainValue").val(data.subdomain);
      },
      function (data) {
        var error
        if (data && data.errors) error = data.errors
        if (error['subdomain'] && error['subdomain'][0]) error = error['subdomain'][0]
        notAvailable.html('<span>&nbsp;</span>' + (error ? error : notAvailable.attr('data-text'))).show()
      }
  );
}

function subdomainDelete() {
  $.getJSONAndProcessErrorWithLoading(
      "/web/sharedPopup/subdomainDelete",
      {
        dir:state.entityId
      },
      function (data) {
        $("#subdomainResult").hide();
        $("#subdomainInput").val(data.shortSubdomain);
        $("#subdomainEnter").show();
      }
  );
}

function reloadDirAndTree() {
  AccountFacade.unCheckAll()
  if (typeof currentDirId == 'undefined') return
  AccountFacade.reloadCurrentDir()
  AccountFacade.reloadFolderTree()
}

function savePassword(entityId, pass, isDelete) {
  $.postJSONAndProcessErrorWithLoading("/web/sharedPopup/savePassword",
      {
        encodedEntityId:entityId,
        pass:pass
      },
      function (data) {
        $("#passwordError").hide();
        if (isDelete) {
          $("#passwordEnter").show();
          $("#passwordResult").hide();
          $("#passwordChangedMessage").hide();
          $("#changePasswordInput").val("");
        }
        else {
          $("#passwordChangedMessage").show();
          $("#passwordEnter").hide();
          $("#passwordResult").show();
          $("#changePasswordInput").val(pass);
        }
      }
  )
}

$.getExternalJSONAndProcessErrorWithLoading = function (url, params, successHandler, errorHandler) {
  state.invitePopup.showLoading()
  return $.InternalJSONAndProcessError("GET", url, params, function internalSuccessHandler(data) {
    if (data.status == "ok") {
      successHandler(data)
    }
    else {
      state.invitePopup.hideLoading()
      errorHandler(data);
    }
  }, function internalErrorHandler() {
    state.invitePopup.hideLoading();
    errorHandler();
  });
};

$.getJSONAndProcessErrorWithLoading = function (url, params, successHandler, errorHandler) {
  state.invitePopup.showLoading()
  return $.InternalJSONAndProcessError("GET", url, params, function internalSuccessHandler(data) {
    state.invitePopup.hideLoading();
    if (data.status == "ok") {
      successHandler(data)
    }
    else {
      errorHandler(data);
    }
  }, function internalErrorHandler() {
    state.invitePopup.hideLoading();
    errorHandler();
  });
};

$.postJSONAndProcessErrorWithLoading = function (url, params, successHandler, errorHandler) {
  state.invitePopup.showLoading()
  return $.InternalJSONAndProcessError("POST", url, params, function internalSuccessHandler(data) {
    state.invitePopup.hideLoading();
    if (data.status == "ok") {
      successHandler(data)
    }
    else {
      errorHandler();
    }
  }, function internalErrorHandler() {
    state.invitePopup.hideLoading();
    errorHandler();
  });
};

function processDirectLinksForMultipleLinks(data) {
  if (data.showDirectLinks) {
    $("#multipleDirectLinks").show();
    $("#sf_DirectlinksTextarea").val(data.direct.join("\n"))
  }
  else {
    $("#directLinkForMultipleLinks").show();
    $("#directLinkForMultipleLinks").click(function (event) {
      showPromtForDirectLink(event);
    });
  }
}

function getMultipleSelectLinks(files, dirs, options) {
  showPopup(options);
  $.postJSONAndProcessErrorWithLoading(
      "/web/sharedPopup/getMultipleSelectLinks",
      {
        files:files,
        dirs:dirs
      },
      function (data) {
        activePublicTab()
        $("#sf_linksTextarea").val(data.plain.join("\n"))
        $("#sf_htmlEmbed").val(data.html.join("\n"))
        $("#sf_forumEmbed").val(data.forum.join("\n"))
        processDirectLinksForMultipleLinks(data)
      }
  );
}

// ----------------- General. Popup ---------------------------------------

function generateNewPopup() {
  $("#sharingPopup").html("");
  $("#sharingPopup").html(sharingDivHtml);
  initializeState();
}

function startSharingForFile(id, isRequestAccess) {
  generateNewPopup();
  openSharingPopup(id, FILE_TYPE, {isRequestAccess: isRequestAccess})
}

function startSharingForFolder(id, options) {
  generateNewPopup();
  openSharingPopup(id, FOLDER_TYPE, options)
}

function startSharingForMultipleSelect(files, dirs, options) {
  generateNewPopup();
  state.entityType = MULTYSELECT_TYPE
  state.titleMsg = "File links"
  getMultipleSelectLinks(files, dirs, options)
}

function fillTitle() {
  var entityName = state.entityName
  if (entityName.length > 40) entityName = entityName.substring(0, 40) + '...'
  var nameElement = $('.jsEntityName', state.invitePopup)
  $('.jsEntityNameText', nameElement).text(entityName)
  entityName = nameElement.html()
  state.titleMsg = ((state.entityType == FOLDER_TYPE) ? $("#sharingFolderTitle").val() : $("#sharingFileTitle").val()) + entityName
  state.invitePopup.setTitle(state.titleMsg);
}

function processDirectLink(data) {
  if (data.directLink && data.directLink != "") {
    $("#premiumDirectLink").val(data.directLink);
    showDirectLinkForPremium();
  }
  else {
    showDirectLinkForFree();
  }
}

function processItemIcon(data) {
  if (state.entityType == FILE_TYPE) {
    $("#itemIco").css("background-image", "url(" + data.mainIcon + ")");
  }
}

function processFBInfo(data) {
  $(".fbsharing").hide()
  if (state.entityType == FILE_TYPE) {
    fbInfo.picture = data.publicInfo.previewLink
    fbInfo.link = data.publicInfo.simpleLink
    fbInfo.name = state.entityName + ' - ' + $('#hosted').val() + ' ' + data.publicInfo.domain
    fbInfo.description = data.publicInfo.description

    if (state.entityName.lastIndexOf(".mp3") == state.entityName.length - 4)
      $(".fbsharing").show()
    return
  }
  if (state.entityType == FOLDER_TYPE) {
    fbInfo.picture = ""
    fbInfo.name = state.entityName
    fbInfo.description = ""
  }
}

function setPopupMode(mode) {
  state.currentMode = mode
  $('.tab').removeClass('active').removeClass('jsActive')
  if (mode == PUBLIC_MODE) $("#tabPublicFolder").addClass('jsActive')
  else if (mode == PRIVATE_MODE) $("#tabOnlyme").addClass('jsActive')

  setModeElements(mode)
}

function setModeElements(mode) {
  if (mode == PUBLIC_MODE) {
    $('.jsOnlyMembers', state.invitePopup).hide()
    setTypeDropdownMode('public')
  }
  else if (mode == PRIVATE_MODE) {
    $('.jsOnlyMembers', state.invitePopup).show()
    setTypeDropdownMode('onlyme')
  }
  showFolderButtons()
}

function setTypeDropdownMode(style) {
  var activeForType = $('.tab.jsActive.' + style)
  $('#currentSharingType').text($('.tabTitle', activeForType).text())
  $('.jsSharingTypeDescription').text($('.tabDescription', activeForType).text())
  if (style == 'public') $('#currentSharingTypeDescription .accessLabel').show()
  else $('#currentSharingTypeDescription .accessLabel').hide()
  $('#shareTabsCustomSelect').removeClass('public invite onlyme').addClass(style)
}

function processD1Logic() {
  if (isFromD1) {
    $("#titlePublicFileD1").show();
    $("#ImgTitlePublicFileD1").show();
  }
  else {
    $("#titlePublicFile").show();
    $("#ImgTitlePublicFile").show();
  }
}

function fillPopupInfoFolder(options) {
  showPopup(options);
  $.getExternalJSONAndProcessErrorWithLoading(
    "/web/sharedPopup/folderInfo/"+state.entityId, {},
    function (data) {
      state.popularFb = data.popularFb
      state.entityName = data.name
      oldState.mode = data.mode
      fillTitle()
      setPopupMode(data.mode)
      $('#simpleViewLink').val(data.simpleLink)
      processActiveInvites(data)
      processEmailSuggesstions(data)
      processContactSuggesstions(data)
      saveExternalFbData(data)
      setupTag2()
      getPromoTypeAndShowIt()
      processPermissionsInfo(data)
      processFBInfo(data)
      showFolderButtons()
      $('#invited_tab').show()
      setTimeout(state.invitePopup.hideLoading, 5000)
    },
    function getInfoError(data) {
      state.invitePopup.closePopup()
      PopupModule.popupWithButtons({
        title:'Error',
        content:(data && data.errors) ? data.errors : "Unknown error",
        type:'error'
      })
    }
  );
}

function fillPopupInfoFile(options) {
  showPopup(options);
  $.getExternalJSONAndProcessErrorWithLoading(
    "/web/sharedPopup/fileInfo/"+state.entityId, {},
    function (data) {
      state.popularFb = data.popularFb
      state.entityName = data.name
      fillTitle()
      activePublicTab()
      options && options.isRequestAccess ? showSendFileTab() : showFileLinkTab()
      processEmailSuggesstions(data)
      processContactSuggesstions(data)
      saveExternalFbData(data)
      setupTag2()
      getPromoTypeAndShowIt()
      processPublicInfo(data.publicInfo)
      processDirectLink(data)
      processItemIcon(data)
      processD1Logic()
      processFBInfo(data)
      setTimeout(state.invitePopup.hideLoading, 5000)
    },
    function getInfoError(data) {
      state.invitePopup.closePopup()
      PopupModule.popupWithButtons({
        title:'Error',
        content:(data && data.errors) ? data.errors : "Unknown error",
        type: 'error'
      })
    }
  );
}

function openSharingPopup(id, type, options) {
  state.entityId = id
  state.entityType = type
  if (state.entityType == FOLDER_TYPE) fillPopupInfoFolder(options)
  else if (state.entityType == FILE_TYPE) fillPopupInfoFile(options)
}

function activePublicTab() {
  hideCustomMsg()
  switch (state.entityType) {
    case FOLDER_TYPE :
      $('.sharing_content_tab').hide()
      $('#tabPublicFolder').show()
      $('#tabInviteMembersFolder').show()
      $('.tab.onlyme').show()
      $('.tab').removeClass('active')
      $('.tab.public').addClass('active')
      $('#public_tab').show()
      break
    case FILE_TYPE :
      $('.sharing_content_tab').hide()
      $('#tabPublicFile').show()
      $('#tabInviteMembersFile').show()
      $('.tab.onlyme').hide()
      $('.tab').removeClass('active')
      $('.tab.public').addClass('active')
      $('#files_public_tab').show()
      break
    case MULTYSELECT_TYPE :
      $('.sharing_content_tab').hide()
      $('.tab.onlyme').hide()
      $('.tab.invite').hide()
      $('#several_files_public_tab').show()
      $('.tab').removeClass('active')
      $('.tab.public').addClass('active')
      $('#tabPublicMultipleLinks').show()
      break
  }
}

function widgetSizeChange() {
  var w = ~~$('#widget_width').val()
  var h = ~~$('#widget_height').val()
  if (w < 200 || w > 2000 || h < 200 || h > 2000) return
  var link = $('#prWidget').attr('prLink')
  $('#widgetTA').val('<iframe marginWidth="0" marginHeight="0" src="' + link + ' scrolling="no" width="' + w + '" height="' + h + '"></iframe>');
  $('#previewLink').attr("href", "/web/embed/preview?w=" + w + "&h=" + h + "&s=no&b=yes&l=" + link);
}

function hideAccessPopup() {
  $('.shareTabs').fadeOut('fast')
}

function showPopup(options) {
  state.invitePopup = PopupModule.popup({
    title:state.titleMsg,
    content:$("#sharingPopup").html(),
    closeButton:false,
    loadingDiv:"popupLoadingBlocker",
    notCloseOthers:options && options.notCloseOthers,
    afterClose:options && options.afterClose
  })

  switch (state.entityType) {
    case FILE_TYPE:
      $('.shareSwitchersContainer', state.invitePopup).hide()
      $('.sharingPopupBody', state.invitePopup).addClass('filesSharing')
      break;
    case MULTYSELECT_TYPE:
      $('.shareSwitchersContainer', state.invitePopup).hide()
      $('.sharingLinkBlock', state.invitePopup).hide()
      break;
  }

  attachEventListeners()
}


function showPasswordTab() {
  $('#setSubdomain').removeClass("active")
  $('#passwordProtect').addClass("active")
  $('#subdomainBlock').hide()
  $('#passwordBlock').show()
  $('#protectPass').hide()
}

function showChangeSubdomain() {
  $('#passwordProtect').removeClass("active")
  $('#setSubdomain').addClass("active");
  $('#subdomainBlock').show();
  $('#passwordBlock').hide()
  $('#protectPass').hide()
}

function showFileLinkTab() {
  $('.sharing_content_subtab').hide();
  $('#f_links_tab').show();
  $('.buttons a').removeClass('active');
  $('.buttons li').removeClass('active');
  $('.buttons .links').addClass('active');
  $('.buttons .links').parent().addClass('active');
  showFileButtons()
}

function showSendFileTab() {
  $('.sharing_content_subtab').hide();
  $('#f_send_tab').show();

  if (!$("#f_send_tab #invited_tab").length) {
    var sendFileContent = $("#invited_tab").show();
    //$("#inviteListCont", sendFileContent).remove();
    $("#f_send_tab").html("").append(sendFileContent);
  }

  $('#invited_tab', state.invitePopup).height('').show()
  $('.sharingPopupBody').addClass('shareOneFile')
  $('.buttons a').removeClass('active');
  $('.buttons li').removeClass('active');
  $('.buttons .send').addClass('active');
  $('.buttons .send').parent().addClass('active');
  showFileButtons()
}

function showPromtForDirectLink(e) {
  try {
    promptGetPremium($('#dLinkPay').val(), $('#premiumRequired').val());
  } catch(ex) {
    window.location = "/premium.jsp"
  }
}

function fillEmailAfterRestore() {
  if (emailForRequestAccess) {
    $('#emails_tag').focus()
    $('#emails').addTag(tagData(emailForRequestAccess, emailForRequestAccess))
    emailForRequestAccess = null
  }
}


function asyncEventsPostActions() {
  setupTag1()
  fillEmailAfterRestore()
  state.invitePopup.hideLoading()
}

function attachEventListeners() {
  $('#saveFolderChanges').click(saveShPopupChanges)
  $('#cancelFolderChanges').click(cancelShPopupChanges)
  $('#closeShPopup').click(state.invitePopup.closePopup)

  /* change permissions popup */
  state.invitePopup.addClass('shPopup')
  $('.jsChangePermissions', state.invitePopup).click(function(e) { permissionPopupShow(e, $(this)) })
  $('.jsPermissionItem', state.invitePopup).click(function(e) { permissionPopupAction(e, $(this)) })
  $(document).add($('#inviteList')).unbind('click.jsChangePermissions.hide').bind('click.jsChangePermissions.hide', function(e) {
    if (!$(e.target).closest('.jsChangePermissions').length) $('.jsPermissions', state.invitePopup).hide()
  });
  /* end change permissions popup */

  $('.moreOptionsLink', state.invitePopup).click(function() {
    $.get('/web/sharedPopup/folderInfo/more/' + state.entityId, function(data) {
      var moreSharingPopup = PopupModule.popup({
        title: "More sharing options",
        element:$("#moreSharingOptionsWrapper"),
        closeButton:true,
        loadingDiv:"popupLoadingBlocker",
        notCloseOthers: true,
        afterClose: function() {state.invitePopup.show(); $('#popupLoadingBlocker', state.invitePopup).hide()}
      }).addClass('shPopup')
      state.invitePopup.hide()
      processPublicInfoMoreSharing(data.publicInfo)
      attachHandlersMoreSharing(moreSharingPopup)
    })
  })

  // Members only events

  $('.shareTabsCustomSelect', state.invitePopup).click(function () {
    $('.shareTabs').fadeToggle('fast')
  })

  $('.shareTabs .tab', state.invitePopup).click(hideAccessPopup)

  $('body').die('click').live('click', function (e) {
    if (e.target.className != 'openDropdownButton' && e.target.className.indexOf('tabTitle') < 0) {
      hideAccessPopup()
    }
  })

  $("#inviteList").click(function (event) {
    var el = event.target
    if ($(el).is('.inviteDelete')) unInvite(el)
    else {
      el = $(el).closest('.changePermissions')
      if ($(el).is('.changePermissions')) {
        permissionPopupShow(event, el)
        $('.jsPermissionItem', el).unbind('click').click(function(e) { permissionPopupAction(e, $(this)) })
      }
    }
    return false
  })

  $("#inviteLink").click(function (event) {
    doInviteFile()
    return false
  })

  $('#cancelInvite').click(function() {
    clearInvites()
    showFileButtons()
  })

  $("#selectFromFriends").click(function (event) {
    showFriendsLists()
    $("#searchFriendsInput").placeholder()
    return false
  })

  $('.jsOpenFbFriends').click(function () {
    $("#selectFromFriends").click()
    $("#fbBtn").click()
  })

  $("#promo2link").click(function () {
    jQuery.ajaxSetup({async:false})
    fbLogOut()
    fbLoginStatus(fbGetMeInfo)
    jQuery.ajaxSetup({async:true})
  })

  $("#promo3link").click(function () {
    fbLoginStatus(fbGetMeInfo)
  })

  $("#addCustomMsg").click(function () {
    if ($('#promo5:visible').length == 0)
      toggleCustomMsg()
      state.invitePopup.calculatePosition()
  })

// ----public events-----

  $("#changePerm").click(function (event) {
    propertiesFolderMenuItemClicked(state.entityId)
    state.invitePopup.closePopup()
  });
// ---Generic --------------

  $('#tabPublicFolder').click(function () {
    setPopupMode(PUBLIC_MODE)
  });

  $('#tabOnlyme').click(function () {
    setPopupMode(PRIVATE_MODE)
  })

  $('.buttons .links').click(showFileLinkTab)

  $('.buttons .embed').click(function () {
    $('.sharing_content_subtab').hide();
    $('#embed_tab').show();
    $('.buttons a').removeClass('active');
    $('.buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    return false;
  });

  $('.buttons .email').click(function () {
    $('.sharing_content_subtab').hide();
    $('.buttons a').removeClass('active');
    $('.buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    return false;

  });

  $('.buttons .subdomain').click(function () {
    $('.sharing_content_subtab').hide();
    $('#subdomain_tab').show();
    showChangeSubdomain();
    $('.buttons a').removeClass('active');
    $('.buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    showFileButtons()
    return false;

  });

  $('.buttons .send').click(function () {
    showSendFileTab();
    return false;
  });

//      files public buttons clicking

  $('#files_public_tab .buttons .links').click(function () {
    $('#files_public_tab .sharing_content_subtab').hide();
    $('#files_public_tab #f_links_tab').show();
    $('#files_public_tab .buttons a').removeClass('active');
    $('#files_public_tab .buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  });

  $('#files_public_tab .buttons .email').click(function () {
    $('#files_public_tab .sharing_content_subtab').hide();
    $('#files_public_tab .buttons a').removeClass('active');
    $('#files_public_tab .buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  });

  $('#files_public_tab .buttons .subdomain').click(function () {
    $('#files_public_tab .sharing_content_subtab').hide();
    $('#files_public_tab #f_subdomain_tab').show();

    $('#files_public_tab .buttons a').removeClass('active');
    $('#files_public_tab .buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  });

  //      several files public buttons clicking

  $('#several_files_public_tab .buttons .links').click(function () {
    $('#several_files_public_tab .sharing_content_subtab').hide();
    $('#several_files_public_tab #sf_links_tab').show();
    $('#several_files_public_tab .buttons a').removeClass('active');
    $('#several_files_public_tab .buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  });

  $('#several_files_public_tab .buttons .email').click(function () {
    $('#several_files_public_tab .sharing_content_subtab').hide();
    $('#several_files_public_tab .buttons a').removeClass('active');
    $('#several_files_public_tab .buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  });

  $('#several_files_public_tab .buttons .subdomain').click(function () {
    $('#several_files_public_tab .sharing_content_subtab').hide();
    $('#several_files_public_tab #sf_subdomain_tab').show();
    $('#several_files_public_tab .buttons a').removeClass('active');
    $('#several_files_public_tab .buttons li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  });

  $(".selectable", state.invitePopup).click(function () {
    this.select();
  });
  $(".selectable", state.invitePopup).blur(function () {
    Utils.deselectText(this)
  });

  $("#fbSend").click(function () {
    fbLoginStatus(fbSendPrivateMsg)
  });

  $("#fbPost").click(function () {
    fbLoginStatus(fbPostToTheWall)
  });

  attachEventListenersForFriendsDiv()
}


function attachHandlersMoreSharing(popup) {
  if (state.currentMode == PRIVATE_MODE) $('.accordBlock', popup).filter(':not(:first)').hide()
  $('.accordContent:first', popup).show()
  $('.accordTitle', popup).click(function(){
    var toOpen = $(this).next()
    if (toOpen.css('display') == 'block') return
    $('.accordContent').slideUp('fast')
    toOpen.slideDown('fast')
  })
  $('#passwordProtect', popup).click(showPasswordTab)
  $('#setSubdomain', popup).click(showChangeSubdomain)

  $("#subdomainSave", popup).click(function () {
    subdomainSave($("#subdomainInput", popup).val());
  })

  $("#subdomainDelete", popup).click(subdomainDelete)

  $('#prEmbed', popup).click(function () {
    $('#embed_folder', popup).show()
    $('#embed_widget', popup).hide()
    $('#prWidget', popup).removeClass("active")
    $('#prEmbed', popup).addClass("active");
    $('#previewLink', popup).attr("href", $('#prEmbed', popup).attr("prLink"))
  })

  $('#prWidget', popup).click(function () {
    $('#embed_folder', popup).hide()
    $('#embed_widget', popup).show()
    $('#prEmbed', popup).removeClass("active")
    $('#prWidget', popup).addClass("active");

    var w = ~~$('#widget_width', popup).val()
    var h = ~~$('#widget_height', popup).val()
    $('#previewLink', popup).attr("href", "/web/embed/preview?w=" + w + "&h=" + h + "&s=no&b=yes&l=" + $('#prWidget', popup).attr('prLink'));
  })

  $('#widget_width', popup).change(widgetSizeChange)
  $('#widget_height', popup).change(widgetSizeChange)

  $("#savePassword", popup).click(function () {
    var pass = $("#passwordInput", popup).val()
    if (pass) {
      if($("#savePassword", popup).attr("needConfirmation")){
        PopupModule.popupWithButtons({
              title:$("#passwordChangeConfirmTitle").val(),
              content:$("#passwordChangeConfirmBody").val(),
              confirmButtonText:$("#confirmButtonMsg").val(),
              cancelButtonText:$("#cancelButtonMsg").val(),
              buttonsType: 1,
              confirmCallback: function () {
                savePassword(state.entityId, pass)
              }
            })
      } else {
        savePassword(state.entityId, pass)
      }
    } else $("#passwordError", popup).show()
  })

  $("#passwordDelete", popup).click(function () {
    $("#passwordInput", popup).val("");
    savePassword(state.entityId, "", true)
  })

  $("#subdomainChange", popup).click(function () {
    $("#subdomainEnter", popup).show();
    $("#subdomainResult", popup).hide();
  });

  $("#changePassword", popup).click(function () {
    $("#passwordEnter", popup).show();
    $("#passwordResult", popup).hide();
  });

  $(".selectable", popup).click(function () {
    this.select();
  });
  $(".selectable", popup).blur(function () {
    Utils.deselectText(this)
  });

}

// ----  Facebook sharing -----------

function fbLoginStatus(func, params) {
  FB.getLoginStatus(function (response) {
    // if (console) console.log(1, response)
    if (response.status === 'connected') {
      func(params)
      //if (console) console.log(2, response)
    } else if (response.status === 'not_authorized') {
      fbLogin(func, params)
      //if (console) console.log(3, response)
    } else {
      fbLogin(func, params)
      //if (console) console.log(4, response)
    }
  });
}

function fbLogin(func, params) {
  FB.login(function (response) {
        if (response.authResponse) {
          func(params)
        }
      },
      {scope:'publish_stream, read_friendlists'}
  );
}

function fbSendPrivateMsg() {
  var id = state.entityId
  state.invitePopup.closePopup()
  FB.ui({
        method:'send',
        display:'iframe',
        link:fbInfo.link,
        picture:fbInfo.picture,
        name:fbInfo.name,
        description:fbInfo.description
      },
      function (response) {
        startSharingForFile(id)
      }
  );
}

function fbPostToTheWall() {
  var id = state.entityId
  state.invitePopup.closePopup()
  FB.ui({
        method:'feed',
        link:fbInfo.link,
        picture:fbInfo.picture,
        name:fbInfo.name,
        description:fbInfo.description
      },
      function (response) {
        startSharingForFile(id)
      });
}

// new sharing block - https://jira.4shared.com/browse/DEV-2969

function fbFriends(params) {
  FB.api('/me/friends',
      {
        fields:'name,id,picture',
        offset:params.offset,
        limit:params.limit
      },
      function (response) {
        if (response.data.length > 0) {
          fillFacebookFriendsList(response.data)
          fbFriends({offset:params.offset + params.limit, limit:params.limit})
        } else {
          refreshViewWithFacebookInvites()
          fillPromo1Div()
          mergeFriendsLists()
          fillFriendsListDiv(true)
          filterFriendsList()
          asyncEventsPostActions()
        }
      })
}

function fbSendRequest() {
  var sendUIDs = '';
  for(var key in state.fbLinks) {
    sendUIDs += key + ',';
  }

  FB.ui({method: 'apprequests',
    to: sendUIDs,
    message: $("#fbRequestSharedText").val().replace("$[p0]", state.entityName)
  }, function (response) {
    if (response && response.request) {
      changeInviteStatus(response.request)
      changePendingLabel("Invited")
      refreshViewWithFacebookInvites()
      showSendOkMessage()
    } else {
      removeSkippedFbInvites()
    }
  });
}

function changeInviteStatus(fbRequestId) {
  var ids = []
  for (var key in state.fbLinks) {
    var link = state.fbLinks[key]
    var inviteId = link.substring(link.indexOf("inviteId=") + 9)
    ids.push(inviteId)
  }
  $.getJSON("/web/sharedFolderInvite/changeInviteStatus", {ids:ids.join(","), fbRequestId:fbRequestId})
}

function removeSkippedFbInvites() {
  var ids = []
  for (var key in state.fbLinks) {
    var link = state.fbLinks[key]
    var inviteId = link.substring(link.indexOf("inviteId=") + 9)
    ids.push(inviteId)
  }
  $.getJSON("/web/sharedFolderInvite/removeSkipped", {ids:ids.join(",")})
}

function changePendingLabel(status) {
  $('.jsInviteStatus').each(function () {
    if (!$(this).text().length) {
      $(this).text(status)
      $(this).parent().show()
    }
  })
}

function fbGetMeInfo() {
  FB.api('/me',
      function (response) {
        if (response.error) showPromo4Div()
        else if (state.externalFbId && state.externalFbId == response.id) processFacebookFriendsLogic(); //fbCheckPermissions()
        else if (state.externalFbName) showPromo2Div()
      }
  )
}

function fbLogOut() {
  FB.logout();
}

function showFriendsLists() {
  fillFriendsListDiv(false)
  fillContactsListDiv()
  hideAll()
  $("#friendsListDiv").show().parent().show()
  $("#everyBtn").addClass("active")
  $(".sharingPopupBody").hide()
  $(".friendsListPopupBody").show()
  state.invitePopup.setTitle($('#contacts').val())
  filterFriendsList()
  copyTagsFrom1stTo2nd()
  calculateFriendsListDivHeightOnRemove()
  refreshButtonsState2()
  $('.hh').addClass('widePopup')
}

function hideFriendsLists() {
  state.invitePopup.setTitle(state.titleMsg)
  $(".friendsListPopupBody").hide()
  $(".sharingPopupBody").show()
  $('.hh').removeClass('widePopup')
}

function attachEventListenersForFriendsDiv() {
  function showFrDiv(el) {
    hideAll()
    $("#friendsListDiv").show().parent().show()
    el.addClass("active")
    filterFriendsList()
  }

  $("#everyBtn").click(function () {
    showFrDiv($(this))
  })

  $("#fbBtn").click(function () {
    showFrDiv($(this))
    showFbConnectBtnIfNecessary()
  })

  $("#twitterBtn").click(function () {
    showFrDiv($(this))
  })

  $("#emailBtn").click(function () {
    showFrDiv($(this))
  })

  $("#friends4sBtn").click(function () {
    hideAll()
    $("#contactsListDiv").show().parent().show()
    $("#friends4sBtn").addClass("active")
    filterContactsList()
    return false
  })

  $("#searchFriendsInput").keyup(function () {
    if ($('#friends4sBtn').hasClass('active')) filterContactsList()
    else filterFriendsList()
  })

  $("#p2_cancel").click(function () {
    hideFriendsLists()
  })

  $("#p2_ok").click(function () {
    hideFriendsLists()
    copyTagsFrom2ndTo1st()
    return false
  })

  if (Config.isMobile || Config.isIpad) $('#friendsListDiv').css({overflowY:"auto", height:'338px'})
  else $("#friendsListDiv").slimScroll({height:'338px'})
  if (Config.isMobile || Config.isIpad) $('#contactsListDiv').css({overflowY:"auto", height:'338px'})
  else $("#contactsListDiv").slimScroll({height:'338px'})

}

function hideAll() {
  $(".jsBtn").removeClass("active")
  $('#fbConnectDiv').hide()
  $('#promo3').hide()
  if ($("#friendsListDiv").parent(".slimScrollDiv").length)
    $("#friendsListDiv").parent().hide()
  else
    $("#friendsListDiv").hide()
  if ($("#contactsListDiv").parent(".slimScrollDiv").length)
    $("#contactsListDiv").parent().hide()
  else
    $("#contactsListDiv").hide()
}

function fillFacebookFriendsList(data) {
  for (var i = 0; i < data.length; i++) {
    var avatarLink = (data[i].picture.data.url.indexOf("UlIqmHJn-SK.gif") < 0) ? data[i].picture.data.url : "/images/user2.png"
    fbFriendsList.push({"invitedEmail":"fb" + data[i].id, "userName":Utils.trim(data[i].name), "avatarLink":avatarLink})
  }
}

function refreshViewWithFacebookInvites() {
  for (var i = 0; i < fbFriendsList.length; i++) {
    var o = fbFriendsList[i]
    $("#av" + o.invitedEmail).attr("src", o.avatarLink)
    $("#inv" + o.invitedEmail).html(o.userName)
    var el = $('#inviteList div[inv-data = "' + o.invitedEmail + '"]')
    if ($('.jsInviteStatus', el).text().length) el.show()
  }
}

function fillPromo1Div() {
  var length = fbFriendsList.length
  if (length == 0) {
    $('#promo1, .friendsFacesLabel, #fbBtn').hide()
    return
  }

  $(".jsPromo").remove()
  var friends = getFriendsFroView(10)
  var fbFriendsFaces = ''
  for (var i in friends) {
    var o = friends[i]
    var name = nameOrEmail(o)
    fbFriendsFaces += '<div uname="' + name + '" email="' + o.invitedEmail + '" class="jsPromo friendFace floatLeft marginR10">' +
            '<div class="friendsAva"><div class="checkBox"></div>' +
            '<img src="' + o.avatarLink + '" title="' + name + '"/>' +
            '</div>' +
            '<div class="friendsName alignCenter f11 ffshadow">' + name + '</div>' +
            '</div>'
  }
  $("#promo1content").prepend(fbFriendsFaces)

  $(".jsPromo").bind("click", function () {
    if ($(this).hasClass("checked")) {
      $(this).removeClass("checked")
      $('#emails').removeTag(tagData($(this).attr("uname"), $(this).attr("email")))
    } else {
      $(this).addClass("checked")
      $('#emails').addTag(tagData($(this).attr("uname"), $(this).attr("email")))
    }
    $('#emails_tag').focus()
  })

  hideAllPromo()
  $("#promo1").show()

  function getFriendsFroView(maxLen) {
    var friendsFroView = [];
    var friendsRandom = [];

    for (var i in fbFriendsList) {
      var friend = fbFriendsList[i]
      var index = $.inArray(friend.invitedEmail, state.popularFb)
      index != -1 ? friendsFroView[index] = friend : friendsRandom.push(friend)
    }

    for (var i = 0; i < friendsFroView.length; i++) {
      if (!friendsFroView[i]) {
        friendsFroView.splice(i, 1)
        i--
      }
    }

    while (maxLen - friendsFroView.length && friendsRandom.length) {
      var i = Math.floor(Math.random() * friendsRandom.length)
      friendsFroView.push(friendsRandom[i])
      friendsRandom.splice(i, 1)
    }
    return friendsFroView;
  }
}

function showPromo2Div() {
  $("#promo2img").attr("src", state.externalFbAvatar)
  $("#promo2img").attr("title", state.externalFbName)
  $("#promo2span").text(state.externalFbName)
  hideAllPromo()
  $("#promo2").show()
//  fbLogOut()
  asyncEventsPostActions()
}

function sendInvitesForFacebookUsers(fbLinks) {
  if (fbLinks) {
    state.fbLinks = fbLinks
    fbSendRequest()
  }
}

function setupTag1() {
  if (state.taginfo) return
  state.taginfo = true

  $('#emails').tagsInput({
    autocomplete_url:autocompleteCallback(),
    autocomplete:{selectFirst:false, html:true, width:"200px", height:"200px"},
    height:'auto',
    width:'auto',
    interactive:true,
    defaultText:$('#placeHolderEnterEmailAdresses').val(),
    onAddTag: function () {
      calculateInviteHeight()
      showFileButtons();
    },
    onRemoveTag:function (tag) {
      var pos = Utils.trim(tag).indexOf('!')
      var email = (pos > 0) ? tag.substring(pos + 1) : tag
      var el = $('#promo1content div[email = "' + email + '"]')
      $(el).removeClass("checked")
      calculateInviteHeight(false, true)
      showFileButtons();
    },
    unique:true,
    removeWithBackspace:true,
    minChars:0,
    maxChars:0, //if not provided there is no limit,
    placeholderColor:'#666666'
  });
  $('#emails_tag', state.invitePopup).focus(function() {
    if (state.entityType == FOLDER_TYPE) {
      $('.sharingPopupBody', state.invitePopup).addClass('balloonsActiveBlock')
      showFolderButtons()
    }
  }).keyup(showFileButtons).width(300)
  $(".ui-autocomplete").addClass("ui-autocomplete-p")
  $("#divEmails").click(function () {
    $('#emails_tag').focus()
  })
}

function setupTag2() {
  $('#tags_2').tagsInput({
    height:'auto',
    width:'auto',
    interactive:false,
    defaultText:'',
    onAddTag:function () {
      calculateFriendsListDivHeightOnAppend()
      refreshButtonsState2();
    },
    onRemoveTag:function (tag) {
      var pos = Utils.trim(tag).indexOf('!')
      var email = (pos > 0) ? tag.substring(pos + 1) : tag
      var el = $('.friendsListDiv div[email = "' + email + '"]')
      $(el).removeClass("jsSelected")
      calculateFriendsListDivHeightOnRemove()
      refreshButtonsState2();
    },
    unique:true,
    removeWithBackspace:true,
    minChars:0,
    maxChars:0, //if not provided there is no limit,
    placeholderColor:'#666666'
  });
}

function isFaceBookId(email) {
  return email.indexOf("fb") == 0 && email.indexOf("@") < 0
}

function nameAndEmail(item) {
  if (isFaceBookId(item.invitedEmail))
    return item.userName

  return (item.userName) ? item.userName + ' (' + item.invitedEmail + ')' : item.invitedEmail
}

function nameOrEmail(item) {
  return (item.userName) ? item.userName : item.invitedEmail
}

function filter(test, term) {
  test = test.toLowerCase()
  term = term.toLowerCase()
  if (test.indexOf(term) == 0 ||
      test.indexOf(" " + term) > 0 ||
      test.indexOf("." + term) > 0 ||
      test.indexOf("_" + term) > 0 ||
      test.indexOf("-" + term) > 0 ||
      test.indexOf("@" + term) > 0 ||
      test.indexOf("(" + term) > 0)
    return true
  return false
}

function autocompleteCallback() {
  var res = new Array()
  for (var i = 0; i < state.allEmails.length; i++) {
    var item = state.allEmails[i]
    var label =
        '<div class="uit" title="' + nameAndEmail(item) + '">' +
            '<img src="' + item.avatarLink + '" class="inviteAva floatLeft" />' + nameAndEmail(item) +
            '</div>'
    res.push({'label':label, 'value':tagData(nameOrEmail(item), item.invitedEmail)})
  }
  return res
}

function attachListItemEvent(clazz) {
  $("." + clazz).bind("click", function () {
    var el = $(this)
    var name = $(el).attr("uname");
    var email = $(el).attr("email");
    if ($(el).hasClass("jsSelected")) {
      $(el).removeClass("jsSelected")
      $('#tags_2').removeTag(tagData(name, email))
    } else {
      $(el).addClass("jsSelected")
      $('#tags_2').addTag(tagData(name, email))
    }
  })
}

function refreshButtonsState2() {
  if ($('#tags_2_tagsinput .tag span').length) $('#p2_ok').show()
  else $('#p2_ok').hide()
}

function fillFriendsListDiv(needRefresh) {
  if ($("#friendsListDiv .jsEl").length > 0 && !needRefresh)
    return;

  $($('#friendsListDiv').children()).remove()

  var oldChar = "#"
  for (var i = 0; i < state.allEmails.length; i++) {
    var o = state.allEmails[i]
    var name = nameAndEmail(o)
    if (oldChar != name.charAt(0).toUpperCase()) {
      oldChar = name.charAt(0).toUpperCase()
      $("#friendsListDiv").append(addAlphaBeta(oldChar))
    }
    var filterType = (isFaceBookId(o.invitedEmail) ? "js_fb" : "js_email")
    $("#friendsListDiv").append(
        '<div class="uit jsEl ' + filterType + '" email="' + o.invitedEmail + '" uname="' + nameOrEmail(o) + '">' +
            '<div class="imageWrapper floatLeft marginR10"><img src="' + o.avatarLink + '" class="inviteAva floatLeft" /></div><div class="friendName floatLeft">' + name +
            '</div></div>'
    )
  }

  attachListItemEvent('jsEl')
}

function fillContactsListDiv() {
  if ($("#contactsListDiv").children().length > 0)  return;

  var oldChar = "#"
  for (var i = 0; i < state.contacts.length; i++) {
    var o = state.contacts[i]
    var name = nameAndEmail(o)
    if (oldChar != name.charAt(0).toUpperCase()) {
      oldChar = name.charAt(0).toUpperCase()
      $("#contactsListDiv").append(addAlphaBeta(oldChar))
    }
    $("#contactsListDiv").append(
      '<div class="uit js_friends4s" email="' + o.invitedEmail + '" uname="' + nameOrEmail(o) + '">' +
        '<div class="imageWrapper floatLeft marginR10"><img src="' + o.avatarLink + '" class="inviteAva floatLeft" /></div><div class="friendName floatLeft">' + name +
        '</div></div>'
    )
  }

  attachListItemEvent('js_friends4s')
  filterContactsList()
}

function filterFriendsList() {
  var active = ($(".jsBtn.active").length > 0) ? $(".jsBtn.active").attr("id").replace("Btn", "") : "every"
  var type = "js_" + active
  term = Utils.trim($("#searchFriendsInput").val())
  var divs = $('#friendsListDiv .jsEl')
  $(divs).hide()
  $(".alfabetDivider").hide()

  if (type != "js_every")
    divs = $('#friendsListDiv .jsEl.' + type)

  if (term && term != "" && term != $("#searchFriendsInput").attr('placeholder')) {
    for (var i = 0; i < divs.length; i++) {
      var test = $(divs[i]).text()
      if (filter(test, term))
        $(divs[i]).show()
    }
  }
  else
    $(divs).show()

  var visible = $('#friendsListDiv .jsEl:visible')
  for (var i = 0; i < $(visible).length; i++) {
    var character = $(visible[i]).text().charAt(0).toUpperCase()
    $('.alfabetDivider:contains(' + character + ')').show()
  }
}

function filterContactsList(term) {
  term = Utils.trim($("#searchFriendsInput").val())
  var divs = $('#contactsListDiv .js_friends4s')
  $(divs).hide()
  $(".alfabetDivider").hide()

  if (term && term != "" && term != $("#searchFriendsInput").attr('placeholder')) {
    for (var i = 0; i < divs.length; i++) {
      var test = $(divs[i]).text()
      if (filter(test, term))
        $(divs[i]).show()
    }
  }
  else $(divs).show()

  var visible = $('#contactsListDiv .js_friends4s:visible')
  for (var i = 0; i < $(visible).length; i++) {
    var character = $(visible[i]).text().charAt(0).toUpperCase()
    $('.alfabetDivider:contains(' + character + ')').show()
  }
}

function addAlphaBeta(character) {
  return '<div class="alfabetDivider">' + character + '</div>'
}

function copyTagsFrom1stTo2nd() {
  $('.friendsListDiv div.jsSelected').removeClass("jsSelected")
  $('#tags_2').importTags('');
  var spans = $('#emails_tagsinput .tag span')
  for (var i = 0; i < spans.length; i++) {
    var name = Utils.trim($(spans[i]).text())
    var email = Utils.trim($(spans[i]).attr("data-inf"))
    $('#tags_2').addTag(tagData(name, email))
    $('.friendsListDiv div[email = "' + email + '"]').addClass("jsSelected")
  }
}

function copyTagsFrom2ndTo1st() {
  $('.friendsListDiv div.jsSelected').removeClass("jsSelected")
  $('.jsPromo').removeClass("checked")
  $('#emails').importTags('');
  var spans = $('#tags_2_tagsinput .tag span')
  for (var i = 0; i < spans.length; i++) {
    var name = Utils.trim($(spans[i]).text())
    var email = Utils.trim($(spans[i]).attr("data-inf"))
    $('#emails').addTag(tagData(name, email))
    $('#promo1content div[email = "' + email + '"]').addClass("checked")
  }
}

function splitEmails() {
  var result = []
  var spans = $('#emails_tagsinput .tag span')
  for (var i = 0; i < spans.length; i++) {
    result.push(Utils.trim($(spans[i]).attr("data-inf")))
  }
  return result
}

function mergeFriendsLists() {
  $.merge(state.allEmails, fbFriendsList)
  state.allEmails = $(state.allEmails).sort(function (a, b) {
    return compare(a,b)
  })
}

function compare(a, b) {
  return nameOrEmail(b).toLowerCase() < nameOrEmail(a).toLowerCase() ? 1 : -1;
}

function tagData(name, email) {
  return name + "!" + email
}

function showFbConnectBtnIfNecessary() {
  if (fbFriendsList.length > 0 || $('#promo5:visible').length > 0)
    return

  if (state.externalFbId) {
    $("#promo3img").attr("src", state.externalFbAvatar)
    $("#promo3img").attr("title", state.externalFbName)
    $("#promo3link").text(state.externalFbName)
    $("#fbConnectDiv").hide()
    $("#promo3").show()
    $("#friendsListDiv").append($("#promo3"))
    return
  }

  $("#fbConnectLink").attr("href", getFbLoginURL())
  $("#promo3").hide()
  $("#fbConnectDiv").show()
  $("#friendsListDiv").append($("#fbConnectDiv"))
}

function toggleCustomMsg() {
  if ($('.sharingPopupBody').hasClass('high')) {
    hideCustomMsg()
  } else {
    $('#inviteMessage').fadeIn('fast')
    $('.sharingPopupBody').addClass('high')
  }
}

function hideCustomMsg() {
  $('#inviteMessage').hide()
  $('.sharingPopupBody').removeClass('high')
}

function showPromo4Div() {
  $("#promo4link").attr("href", getFbLoginURL())
  hideAllPromo()
  $("#promo4").show()
  asyncEventsPostActions()
}

function getFbLoginURL() {
  var param = '?sharedentity=' + ((state.entityType == FOLDER_TYPE) ? 'd' : "f") + state.entityId
  return $("#fb_redir_param").val() + param
}

//used in home.jsp
function restoreSharingPopupAfterReload(sharedType, sharedId, email) {
  Events.addListener('facebook.script.loaded', function() {
    if (email) emailForRequestAccess = email
    if ("d" == sharedType)
      startSharingForFolder(sharedId)
    else if ("f" == sharedType)
      startSharingForFile(sharedId, true)
  })
}

function processAcceptInviteResult(params) {

  switch (params.acceptCode) {
    case RESOURCE_NO_MORE_AVAILABLE:
      PopupModule.popup({
        title:'Error',
        element:$('<div/>').html('<div class="errorPopupMessage">' + params.no_more_aviable_err + '</div>')
      })
      break;
    case ACCEPT_CODE_NO_SPACE:
      PopupModule.popup({
        title:'Error',
        element:$('<div/>').html('<div class="errorPopupMessage">' + params.not_enough_free_space_err + '</div>')
      })
      break;
    default :
      if (params.skipScroll) break
      var scrlListFnc = function () {
        //timeout for ie, cause ie will now scroll till element is not realy visible.
        setTimeout(function () {
          if (!params.acceptedEntityId) return
          AccountFacade.checkItem(params.entityType, params.acceptedEntityId);
          var item = AccountFacade.scrollToItem(params.entityType, params.acceptedEntityId);
          if (!item.length) {
            PopupModule.popup({
              title:'Error',
              element:$('<div/>').html('<div class="errorPopupMessage">' + (params.entityType == "FILE" ? params.file_was_moved_or_removed : params.folder_was_moved_or_removed) + '</div>')
            })
          }
        }, 1)
        Events.removeListener('folder.reload', scrlListFnc)
      }
      Events.addListener('folder.reload', scrlListFnc);
      break;
  }
}

function getPromoTypeAndShowIt() {
  if (state.fbSharingOff == 'true') {
    showPromo4Div()
    $('#promo4 .loginFBblock').hide()
    $('#promo4 .friendsFacesLabel').hide()
    return
  }
  if (!state.externalFbId) showPromo4Div()
  else if (fbFriendsList.length > 0)  processFacebookFriendsLogic()
  else
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        fbGetMeInfo()
      } else {
        showPromo2Div()
      }
    });
}

function saveExternalFbData(data) {
  state.externalFbId = data.externalFbId
  state.externalFbName = data.externalFbName
  state.externalFbAvatar = '//graph.facebook.com/' + data.externalFbId + '/picture'
}

function calculateInviteHeight(isClear, isRefresh) {
  var emailsforscroll = $('#emailsforscroll', state.invitePopup)
  if (!isClear && !isRefresh && $('#divEmails').height() >= 74) {
    if (Config.isMobile || Config.isIpad) emailsforscroll.css({overflowY:"auto", height:'74px'})
    else emailsforscroll.slimScroll({height:'74px'})
    calculateInviteHeight.isScroll = true
  } else if (calculateInviteHeight.isScroll) {
    emailsforscroll.parent().replaceWith(emailsforscroll);
    emailsforscroll.removeAttr('style')
    calculateInviteHeight.isScroll = false
  }
  isRefresh && calculateInviteHeight()
  !isClear && $("#emails_tag").focus()
}
calculateInviteHeight.isScroll = false

var isscroll2 = false
var heightValues = {general: 366, listMin: 194}
heightValues.tagsMax = heightValues.general - heightValues.listMin;

function calculateFriendsListDivHeightOnAppend() {
  var listH = heightValues.general - $(".friendsListFooter", state.invitePopup).height()
  if (listH < heightValues.listMin) listH = heightValues.listMin
  $(".friendsListDiv, .slimScrollDiv", state.invitePopup).height(listH)
  if (listH == heightValues.listMin) {
    if (Config.isMobile || Config.isIpad) $('#forscroll').css({overflowY:"auto", height:heightValues.tagsMax, position:'left'})
    else $("#forscroll").slimScroll({height:heightValues.tagsMax, position:'left'})
    isscroll2 = true
  }
}

function calculateFriendsListDivHeightOnRemove() {
  var spans = $('#tags_2_tagsinput .tag span', state.invitePopup)
  $('#tags_2', state.invitePopup).importTags('');

  var friendsList = $("div.friendsListFooter .innerRelative", state.invitePopup)
  friendsList.height(46)
  for (var i = 0; i < spans.length; i++) {
    var name = Utils.trim($(spans[i]).text())
    var email = Utils.trim($(spans[i]).attr("data-inf"))
    $('#tags_2', state.invitePopup).addTag(tagData(name, email))
  }
  friendsList.height("auto")
  $("#forscroll", state.invitePopup).height("auto")

  destroySlimscroll2()
  calculateFriendsListDivHeightOnAppend()
}

function destroySlimscroll2() {
  if (isscroll2) {
    $("#forscroll", state.invitePopup).parent().replaceWith($("#forscroll", state.invitePopup));
    isscroll2 = false
  }
}

function hideAllPromo() {
  $("#promo1").hide()
  $("#promo2").hide()
  $("#promo4").hide()
  $("#promo5").hide()
}
