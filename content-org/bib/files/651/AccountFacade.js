/**
 * @namespace For account functions
 */
AccountFacade = {};

AccountFacade.ACCOUNT_MODE_RELOAD = "accountModeReload"  // reload account after rename, upload and so on
AccountFacade.ACCOUNT_MODE_NO_RELOAD = "accountModeNoReload"  // not reload account after rename, upload and so on. We need it in case of opened options, playlists, etc.
AccountFacade.accountReloadMode = AccountFacade.ACCOUNT_MODE_RELOAD;

AccountFacade.RECYCLE_BIN_DIR_ID = 'StJ70-En'
AccountFacade.SEARCH_RESULT_DIR_ID = '67UaUnW7'
AccountFacade.INCOMPLETED_DIR_ID = 'cpLWtpmv'
AccountFacade.SHARED_FOLDERS_DIR_ID = 'ggFKXjP8'
AccountFacade.SHARED_TOOLS_DIR_ID = '1raEeMxb'
AccountFacade.FRIENDS_DIR_ID = 'VdF9WzF8'
AccountFacade.FAVORITES_DIR_ID = 'v_y2pOnK'
AccountFacade.MESSAGES_DIR_ID = 'g95sFWeO'
AccountFacade.SENT_MESSAGES_DIR_ID = 'tngvJxfz'
AccountFacade.FRIENDS_RECENT_DIR_ID = 'yb8xabwW'



AccountFacade.loadingDiv
AccountFacade.timeOut
AccountFacade.sId
AccountFacade.setSid = function(sId) {
  AccountFacade.sId = sId;
  return false;
}
AccountFacade.showLoadingDiv = function(element) {
  if (AccountFacade.loadingDiv) AccountFacade.loadingDiv.remove()
  AccountFacade.loadingDiv = $($('#accountLoadingDiv').html()).show()
  element = element || '#mainbar'
  $(element).prepend(AccountFacade.loadingDiv)
  AccountFacade.timeOut = setTimeout(function() {
    AccountFacade.loadingDiv.find(".load1").hide()
    AccountFacade.loadingDiv.find(".load2").show()
  }, 5000)
}

AccountFacade.hideLoadingDiv = function() {
  clearTimeout(AccountFacade.timeOut)
  AccountFacade.loadingDiv.remove()
}

AccountFacade.reloadCurrentDir = function() {
  if (AccountFacade.accountReloadMode == AccountFacade.ACCOUNT_MODE_RELOAD) {
    changeDirLeft(currentDirId)
  }
}


AccountFacade.specialDirIds =
    [AccountFacade.RECYCLE_BIN_DIR_ID,
      AccountFacade.SEARCH_RESULT_DIR_ID,
      AccountFacade.INCOMPLETED_DIR_ID,
      AccountFacade.SHARED_FOLDERS_DIR_ID,
      AccountFacade.SHARED_TOOLS_DIR_ID,
      AccountFacade.FRIENDS_DIR_ID,
      AccountFacade.FAVORITES_DIR_ID,
      AccountFacade.MESSAGES_DIR_ID,
      AccountFacade.SENT_MESSAGES_DIR_ID,
      AccountFacade.FRIENDS_RECENT_DIR_ID]


  function LeftMenuHelper() {
    return this;
  }

  LeftMenuHelper.ICON_ROOT = "froot";
  LeftMenuHelper.ICON_SHARED_WITH_ME_FOLDER = "sharedwme";
  LeftMenuHelper.ICON_RECYCLE_BIN = "ftrash";
  LeftMenuHelper.ICON_INCOMPLETED = "fincompleted";
  LeftMenuHelper.ICON_TOOLS = "ftools";
  LeftMenuHelper.ICON_FAVORITES = "ffavorites";
  LeftMenuHelper.ICON_FRIENDS = "ffriends";
  LeftMenuHelper.ICON_FRIENDS_RECENT = "frecent";
  LeftMenuHelper.ICON_FRIEND = "fsubscriber";
  LeftMenuHelper.ICON_WEB_DOWNLOAD = "fgrabbed";

LeftMenuHelper.specialDirsParams = {}
LeftMenuHelper.specialDirsParams[AccountFacade.RECYCLE_BIN_DIR_ID] = {icon:LeftMenuHelper.ICON_RECYCLE_BIN, openIcon:LeftMenuHelper.ICON_RECYCLE_BIN, cssClass:"gaClick", dataElement:30}
LeftMenuHelper.specialDirsParams[AccountFacade.INCOMPLETED_DIR_ID] = {icon:LeftMenuHelper.ICON_INCOMPLETED, openIcon:LeftMenuHelper.ICON_INCOMPLETED, cssClass:"gaClick", dataElement:28}
LeftMenuHelper.specialDirsParams[AccountFacade.SHARED_FOLDERS_DIR_ID] = {root:true, icon:LeftMenuHelper.ICON_SHARED_WITH_ME_FOLDER, openIcon:LeftMenuHelper.ICON_SHARED_WITH_ME_FOLDER, cssClass:"webfx-tree-root gaClick", dataElement:29, contClass:"contentBottomBorder"}
LeftMenuHelper.specialDirsParams[AccountFacade.SHARED_TOOLS_DIR_ID] = {root:true, icon:LeftMenuHelper.ICON_TOOLS, openIcon:LeftMenuHelper.ICON_TOOLS, cssClass:"webfx-tree-virtual gaClick", dataElement:31}
LeftMenuHelper.specialDirsParams[AccountFacade.FRIENDS_DIR_ID] = {root:true, icon:LeftMenuHelper.ICON_FRIENDS, openIcon:LeftMenuHelper.ICON_FRIENDS, cssClass:"webfx-tree-virtual gaClick", dataElement:32, isDefaultClosed:true, menu:"open"}
LeftMenuHelper.specialDirsParams[AccountFacade.FAVORITES_DIR_ID] = {icon:LeftMenuHelper.ICON_FAVORITES, openIcon:LeftMenuHelper.ICON_FAVORITES, cssClass:"gaClick", dataElement:26}
LeftMenuHelper.specialDirsParams[AccountFacade.FRIENDS_RECENT_DIR_ID] = {icon:LeftMenuHelper.ICON_FRIENDS_RECENT, openIcon:LeftMenuHelper.ICON_FRIENDS_RECENT, cssClass:"gaClick", dataElement:32.1, menu:"open"}


LeftMenuHelper.specialActions = {}
LeftMenuHelper.specialActions[AccountFacade.SHARED_TOOLS_DIR_ID] = {action:"changeDirToTools", params:true};





LeftMenuHelper.configureMenuNode = function (treeNode, objectNode) {

    if (LeftMenuHelper.specialDirsParams[objectNode.id]) {
      for (var key in LeftMenuHelper.specialDirsParams[objectNode.id]) {
        treeNode[key] = LeftMenuHelper.specialDirsParams[objectNode.id][key];
      }
    } else if (objectNode.nodeType == "rootFolder") {
      treeNode.openIcon = LeftMenuHelper.ICON_ROOT
      treeNode.icon = LeftMenuHelper.ICON_ROOT
      treeNode.cssClass="webfx-tree-root gaClick"
    } else {
      treeNode.icon = objectNode.iconClass
      treeNode.openIcon = objectNode.iconClass + "_open"
    }

    treeNode.imgDirId = objectNode.id
    treeNode.iconClass = objectNode.iconClass
  }

LeftMenuHelper.getStandardAction = function (id) {
    return "changeDirLeft('"+ id +"')";
  }

LeftMenuHelper.treeNodes = {}

LeftMenuHelper.objectTreeToJsTree = function (oNode, root) {
    var text = oNode.text;
    var action
    if (LeftMenuHelper.specialActions[oNode.id]) {
       if (LeftMenuHelper.specialActions[oNode.id].params)
          action = "javascript:"+ LeftMenuHelper.specialActions[oNode.id].action +"('"+oNode.id+"')";
       else
          action = "javascript:"+ LeftMenuHelper.specialActions[oNode.id].action +"()";
    }else {
      if (!root) action = LeftMenuHelper.getStandardAction(oNode.id);
    }
    var parent = null;
    var icon = oNode.icon;
    var openIcon = oNode.openIcon;

    var tNode;
    if (root){
      tNode = new WebFXTree(text,action);
      LeftMenuHelper.leftMenuRoot = tNode;
      tNode.isRoot = true;
    } else if (oNode.notItem) {
      tNode = new WebFXTree(text, action, false)
      tNode.dirId = oNode.id
      tNode.type = "folder"
      LeftMenuHelper.configureMenuNode(tNode, oNode);
    } else {
      tNode = new WebFXTreeItem(text, action, parent, icon, openIcon);
      tNode.dirId = oNode.id;
      tNode.type = "folder"; // there are only folders in the left menu
      tNode.dirSize = oNode.dirSize;

      LeftMenuHelper.configureMenuNode(tNode, oNode);
    }
    if (oNode.id)
      LeftMenuHelper.treeNodes[oNode.id] = tNode;
    var cs = oNode.children;
    if (cs != null){
      var l = cs.length;
      for (var i = 0; i < l; i++) {
        tNode.add( LeftMenuHelper.objectTreeToJsTree(cs[i],false));
      }
    }

    return tNode;
  }


  LeftMenuHelper.saveLeftMenuState = function () {
    if (LeftMenuHelper.leftMenuRoot && LeftMenuHelper.leftMenuRoot.getSelected()) {
      LeftMenuHelper.leftMenuSelectedNodeId = LeftMenuHelper.leftMenuRoot.getSelected().dirId;
    } else {
      LeftMenuHelper.leftMenuSelectedNodeId = null;
    }

  }

  LeftMenuHelper.recoverLeftMenuState = function () {
    if (currentDirId != null && LeftMenuHelper.leftMenuSelectedNodeId != currentDirId)
      LeftMenuHelper.leftMenuSelectedNodeId = currentDirId;

    if (LeftMenuHelper.leftMenuSelectedNodeId != null && LeftMenuHelper.treeNodes.hasOwnProperty(LeftMenuHelper.leftMenuSelectedNodeId)) {
      var nodeSelected = LeftMenuHelper.treeNodes[LeftMenuHelper.leftMenuSelectedNodeId]
      nodeSelected.select();
      nodeSelected.expand();
      nodeSelected.parentDirId == AccountFacade.SHARED_FOLDERS_DIR_ID ? nodeSelected.parentNode.expand() : { }

      if (nodeSelected.isRoot) return
      var node = nodeSelected
      while (!node.parentNode.isRoot) {
        node = node.parentNode
        if (!node.open) node.expand()
      }
    }
  }

/**
 * @class
 */
AccountFacade.PathObject = function(path, ids) {
  /**
   * @lends AccountFacade.PathObject
   */
  return {
    path : path,
    ids : ids
  };
}


/**
 * Return current folders path
 *
 * @static
 * @returns {AccountFacade.PathObject | null} pathObject - Object that contain list of id's and names of folders
 *
 */
AccountFacade.getCurrentPath = function(){
  var tNode = LeftMenuHelper.leftMenuRoot.getSelected();
  if (!tNode) return null;

  var path = [];
  var ids = [];
  while (tNode) {
    path.push(tNode.text);
    ids.push(tNode.dirId);
    tNode = tNode.parentNode;
  }
  path.pop(); // last elem is an unvisible root node.
  ids.pop();
  path.reverse();
  ids.reverse();
  return new AccountFacade.PathObject(path, ids);
}

/**
 * Update breadcrumbs for current path
 */
AccountFacade.updateBreadCrumbs = function (pathObj) {
  var isRightRename = AccountFacade.getRights(currentDirId)['Rename'];

  /** @type AccountFacade.PathObject */
  if (!pathObj) pathObj = AccountFacade.getCurrentPath();
  if (!AccountFacade.updateBreadCrumbs.rootId && pathObj && pathObj.ids[0]) {
    AccountFacade.updateBreadCrumbs.rootId = pathObj.ids[0]
    AccountFacade.updateBreadCrumbs.rootPath = pathObj.path[0]
  }
  if(pathObj) AccountFacade.showFullPath(pathObj.path, pathObj.ids,isRightRename);
}
AccountFacade.updateBreadCrumbs.rootId = ''
AccountFacade.updateBreadCrumbs.rootPath = ''


AccountFacade.showFullPath = function(namePath, idPath, isRightsRename) {
  var names = namePath;
  var ids = idPath;
  if (names.length <= 0) return;

  var arrowHTML = '<span class="icon9 navArrow"></span>';
  $("#pathString").html('<div class="icon16 ftree"></div>');
  $(".ftree").after('<a id="firstDir" href="javascript:changeDirLeft(\''+ids[0]+'\')" class="pathItem">'+names[0]+'</a>');

  if (names.length <= 1) {
    $("#firstDir").addClass("last");
    return;
  }

  //last dir
  var lastHtml = arrowHTML + '<a href="javascript:changeDirLeft(\''+ids[names.length-1]+'\')" class="pathItem last">'+names[names.length-1]+'</a>';
  if (isRightsRename)
    lastHtml = lastHtml + '<a href="#" class="jsRenameButton" onclick="return renameItemFromMainMenu(this, event)"><span class="icon9 navEdit"></span></a>';
  $("#firstDir").after(lastHtml);

  var maxPathWidth = $(".folderPath").width() - $("#navigationPanel").outerWidth()- $('.ftree').outerWidth() - $('#rightPart').width() - 20;
  var isLongLast = $('.pathItem.last').outerWidth() > maxPathWidth - $('#firstDir').outerWidth();
  names = Utils.formatDirPath(names, isLongLast);
  if (isLongLast && names.length > 2) $("#firstDir").next().after('...' + arrowHTML);
  else { //other dirs
    for (var i = names.length - 2; i > 0; i--){
      $("#firstDir").after(arrowHTML + '<a id="p'+i+'" href="javascript:changeDirLeft(\''+ids[i]+'\')" class="pathItem">'+names[i]+'</a>');
    }
  }

  var lastHtmlNode = $(".last", "#pathString")
  var flag = false;
  while ($("#pathString").width() > maxPathWidth) {
    flag = true;
    var str = lastHtmlNode.html();
    str = String(str).substr(0, str.length - 1)
    lastHtmlNode.html(str);
  }
  if (flag) lastHtmlNode.html(lastHtmlNode.html() + "...");
}

AccountFacade.refreshLeftMenuTree = function (callback) {

  var url = "/web/accountActions/getLeftMenuTree"
  AccountFacade.showLoadingDiv()

  LeftMenuHelper.saveLeftMenuState();

  $.post(url, {dirId:$('.jsRootId').val()}, function (data) {

    if (data.status == "ok") {
      var i
      for (i = 0; i < data.tree.children.length; i++) data.tree.children[i].notItem = true;
      var jsTreeItem = LeftMenuHelper.objectTreeToJsTree(data.tree,true);
      $("#foldertree").html(jsTreeItem.toString());
      Events.fireEvent('folder.tree.loaded')
      for(i=0; i< data.rights.length; i++) AccountFacade.setRights(data.rights[i])
    }

    LeftMenuHelper.recoverLeftMenuState();
    AccountFacade.updateBreadCrumbs();
    AccountFacade.hideLoadingDiv();
    Events.fireEvent('account.loaded')
    if (callback != undefined && callback != null)
      callback()
  })
}


AccountFacade.reloadFolderTree = function(callback) {
  AccountFacade.refreshLeftMenuTree(callback)
}

AccountFacade.openOrReloadFolderTree = function(callback) {
  var node = LeftMenuHelper.treeNodes[currentDirId]
  if(!node) return AccountFacade.refreshLeftMenuTree(callback)
  node.select()
  node.expand()
  AccountFacade.updateBreadCrumbs();
}

//cgdcont=1
AccountFacade.isSpecialDir = function(dir) {
  var flag = false;
  var i = 0;
  while (!flag && i < AccountFacade.specialDirIds.length) {
    flag = AccountFacade.specialDirIds[i] == dir;
    i++;
  }
  return flag;
}

AccountFacade.isRecycleBin = function(dir) {
  return dir == AccountFacade.RECYCLE_BIN_DIR_ID
}

AccountFacade.isSearchResult = function(dir) {
  return dir == AccountFacade.SEARCH_RESULT_DIR_ID
}

AccountFacade.isIncompletedDir = function(dir) {
  return dir == AccountFacade.INCOMPLETED_DIR_ID
}

AccountFacade.isSharedWithMeDir = function(dir) {
  return dir == AccountFacade.SHARED_FOLDERS_DIR_ID
}

AccountFacade.is4sharedToolsDir = function(dir) {
  return dir == AccountFacade.SHARED_TOOLS_DIR_ID
}

AccountFacade.isFriendsDir = function(dir) {
  return dir == AccountFacade.FRIENDS_DIR_ID
}

AccountFacade.isFavoriteFiles = function(dir) {
  return dir == AccountFacade.FAVORITES_DIR_ID
}


AccountFacade.userPromt = function(params, callback) {
  var id = Math.random()
  var content = '<form name="prompt" id="id' + id + '"><div class="lucida f13 dark-gray" style="padding: 0 5px 10px">' + params.description + '</div>' +
    '<div class="input-light-small floatLeft"><input type="text" name="promptText" value="' + params.value + '" style="width: 200px" /></div> ' +
    '<input type="submit" value="Ok" class="bluePopupButton marginT15 round5 floatLeft marginL10" style="height: 28px; margin-top: 0" /></form>';

  var promtPopup = PopupModule.popup({title: params.title, content: content});
  promtPopup.promptText.focus();
  promtPopup.promptText.select();

  $('form[id="id' + id + '"]').submit(function() {
    callback($('input[name=promptText]', this).val())
    promtPopup.hidePopup();
    return false
  })
}

AccountFacade.writeDragContent = ''
AccountFacade.writeDrag = function(params) {
  if (!AccountFacade.writeDragContent) {
    AccountFacade.writeDragContent = $('#writeDragMain').html()
    $('#writeDragMain').remove()
  }
  $('#wdMain').remove()

  var main = $(AccountFacade.writeDragContent).appendTo($(document.body))

  $('.dragDivTitle', main).html(params.title)
  if (params.content) {
    $('.dragDivContent', main).html(params.content)
  } else if (params.element) {
    $('.dragDivContent', main).html(params.element.html())
  }

  var dialog = new WriteDrag('wdMain')
  dialog.doNotHideFlag = true
  dialog.hideFlag = false
  dialog.set({}, undefined, params.width ? params.width : 410, 'c', 'c', undefined, params.height ? params.height : undefined)

  var onHide = function() {
    Events.removeListener('WriteDrag.hide', onHide)
    if (params.onClose) params.onClose()
  }
  Events.addListener('WriteDrag.hide', onHide)

  $('.close', main).unbind('click').click(function() {
    Events.removeListener('WriteDrag.hide', onHide)
    dialog.hide()
    if (params.onClose) params.onClose()
    return false
  })

  return dialog
}

AccountFacade.saveButtonPressed = function(button, pressed) {
  var value = $.cookie('pressed.buttons')

  var buttons = []
  var index = -1
  if (value) {
    value = value.replace(',,', ',')
    buttons = value.split(',')
    index = Utils.indexOf(buttons, button)
  }

  if (pressed && index < 0) {
    buttons.push(button)
  } else if (!pressed && index >= 0) {
    buttons.splice(index, 1)
  }

  $.cookie('pressed.buttons', buttons.length > 0 ? buttons.join(',') : '', {path: '/'})
}

AccountFacade.goToMessagePage = function(body, title){
  var form = $("<form action='/web/message' method='post'></form>")
  form.append($("<input type='hidden' name='body'>").val(body))
    .append("<input type='submit'/>")
  if(title){
    form.append($("<input type='hidden' name='title'>").val(title))
  }
  $("body").append(form)
  form.submit()
}


var features = {}
var dirRights = {}
var currentDirRight = {}
var virtualDirRights = {}

AccountFacade.setVirtualRights = function(rights) {
  virtualDirRights[rights.dirId] = rights
}

AccountFacade.getVirtualRights = function(id) {
  return virtualDirRights[id]
}

AccountFacade.setCurrentRights = function (right) {
  currentDirRight = right.commands;
}

AccountFacade.getCurrentRights = function () {
  return currentDirRight
}

AccountFacade.setRights = function (right) {
  dirRights['rights' + right.dirId] = right.commands;
}

AccountFacade.getRights = function (id) {
  if (dirRights['rights' + id]) return dirRights['rights' + id]
  return {'OpenDir':true}
}

AccountFacade.hasFeatures = function (feature) {
  return features[feature];
}

AccountFacade.setFeatures = function (featurez) {
  features = featurez
}

AccountFacade.useChangeDirSpring = function (dirId) {
    return ! (dirId == AccountFacade.SHARED_TOOLS_DIR_ID ||
              dirId == AccountFacade.FRIENDS_DIR_ID ||
              dirId == AccountFacade.FRIENDS_RECENT_DIR_ID ||
              dirId == AccountFacade.FAVORITES_DIR_ID)
}

AccountFacade.info = {}

AccountFacade.getDirType = function() {
  if (AccountFacade.isRecycleBin(currentDirId)) return "jsRecycleBin"
  if (AccountFacade.isIncompletedDir(currentDirId)) return "jsIncompleted"
  if (AccountFacade.isFavoriteFiles(currentDirId)) return "jsFavoriteFiles"
  if (AccountFacade.isSharedWithMeDir(currentDirId)) return "jsSharedWithMe"
  return ""
}

AccountFacade.showVisible = function (addContent, isResized) {
  var total = (AccountFacade.info.dirs.length + AccountFacade.info.files.length)
  if (total == 0) return

  var $files = $('#files')
  var $jsItemFirst = $('.jsItem:first')
  var outerHeightItem = $jsItemFirst.outerHeight()
  var f, col, colItems
  var f1 = function() {
    col = total / ($files.prop('scrollHeight') / outerHeightItem)
    colItems = Math.ceil($files.width() / $jsItemFirst.width()) * Math.ceil($files.height() / $jsItemFirst.height()) + 10

    f = function () {
      var start = ~~($files.scrollTop() / outerHeightItem * col)
      if (start == Infinity || colItems == Infinity) return
      for (var i = start; i < start + colItems; i++) addContent(i)
    }
    f()
  }
  f1()
  return isResized ? f1 : f
}

AccountFacade.fillFileListDetails = function(data) {
  var eventId = Math.random();

  AccountFacade.fillFileListDetails.latestEventId = eventId;

  var dirType = AccountFacade.getDirType()
  var notRecycledNotIncomplete = dirType!='jsIncompleted' && dirType!='jsRecycleBin'
  if (!$('#filespace').length) $("#files").remove()
  else $('#includeFileList *').remove()
  if (data) AccountFacade.setCurrentRights(data)

  $('#includeFileList').append('<div id="files"></div>')
  $("#files").addClass(dirType)
  var content = $('<table id="jsFilesTable" class="filesTable lucida ffshadow" cellspacing="0" cellpadding="0"/>')
  var tmp = $("#itemDetailTmp")
  var delta = 100;
  var folderI = 0;
  var fileI = 0;
  (function () {
    if(eventId!=AccountFacade.fillFileListDetails.latestEventId) return;

    var endFlag = true
    var max = folderI + delta
    for (var i = folderI; i < max; i++) {
      if (folderI == AccountFacade.info.dirs.length) break
      folderI++
      endFlag = false
      var clone = tmp.clone()
      var f = AccountFacade.info.dirs[i];
      var id = 'ml_folder_' + f.id
      $(".checkFiles", clone).attr("name", "ch_d").attr("value", f.id)
      clone.attr("file-size", f.size)
      clone.attr("id", id)
      content.append(clone)
    }
    if(folderI==AccountFacade.info.dirs.length){
      max = fileI + delta
      for (var i = fileI; i < max; i++) {
        if (fileI == AccountFacade.info.files.length) break
        fileI++
        endFlag = false
        var f = AccountFacade.info.files[i];
        var clone = tmp.clone()
        var id = 'ml_file_' + f.id
        $(".checkFiles", clone).attr("value", f.id)
        clone.attr("file-size", f.size)
        clone.attr("id", id)
        content.append(clone)
      }
    }
    if (endFlag) {
      $('#files').append(content)
      callback()
      Events.fireEvent('set.menu.state')
      Events.fireEvent('folder.reload')
      Events.fireEvent('account.items.loaded')
      AccountFacade.hideLoadingDiv()
    }
    else {
      setTimeout(arguments.callee, 0);
    }
  })();
  function callback() {
    var rows = $('#files tr:not(.searchDivider,.searchNoResults)');
    var addTmp = $("#col2DetailTmp").clone()

    if (!AccountFacade.getCurrentRights().DownloadAll) $('.jsDownload', addTmp).remove()
    if (dirType!='jsIncompleted') $('.jsReUpload', addTmp).remove()

    var total = (AccountFacade.info.dirs.length + AccountFacade.info.files.length)
    AccountFacade.showItemsCounter(total)

    $('#files').unbind('scroll').scroll(AccountFacade.showVisible(addContent))
    $(window).unbind('resize.acc').bind('resize.acc', AccountFacade.showVisible(addContent, true))

    function addContent(i) {
        if (i >= total) return

        var el = $(rows[i])
        if ($('.jsName', el).text().length) return

        var f = (i < AccountFacade.info.dirs.length) ? AccountFacade.info.dirs[i] : AccountFacade.info.files[i - AccountFacade.info.dirs.length]
        var clone = addTmp.clone()
        clone.removeAttr("id")
        clone.addClass(f.fileCss)
        $(".jsName", clone).prepend(f.name)
        $(".description", clone).html(f.descr)
        if (f.canEdit) el.addClass("jsCanEdit")
        if (f.canPreview && notRecycledNotIncomplete) el.addClass("jsCanPreview")
        if (f.parentId) el.data('parentId', f.parentId)
        if (f.isOwn) el.data('isOwn', f.isOwn)
        attachTipsForItemT(clone.find(".actionsTips"))
        if (AccountFacade.getCurrentRights().ShareItem) el.addClass("jsCanShare")
        if (i >= AccountFacade.info.dirs.length) {
          if (f.canPlay) el.addClass("jsCanPlay")
          var messageStart = $('#mesStart').val() + AccountFacade.info.files[i - AccountFacade.info.dirs.length].ftype;
          var messageEnd = $('#mesEnd').val() + AccountFacade.info.files[i - AccountFacade.info.dirs.length].dcount;
          var message = messageStart + "<br/>" + messageEnd;
          var tempItm = clone.find(".jsTip").attr("data-tip", message)
          attachTipsForItemLR($(tempItm), "r", "data-tip")
        } else {
          if (f.canPlay) el.addClass("jsFolderCanPlay")
          if (f.ownerName) $(".jsName", clone).append("<span>by "+f.ownerName+"</span>")
        }
        if (f.recoverPath) $(".jsName", clone).append("<span>from "+f.recoverPath+"</span>")
      el.append(clone).append('<td class="TfilesSize f11">' + Utils.readablizeBytes(f.size) + '</td>').append('<td class="TfilesModify f11 paddingL10">' + f.time + '</td>')
    }
    AccountFacade.becomeNotEmpty(total)
  }
}

AccountFacade.fillFileListThumbnails = function(data) {
  var eventId = Math.random();

  AccountFacade.fillFileListThumbnails.latestEventId = eventId;

  var dirType = AccountFacade.getDirType()
  var notRecycledNotIncomplete = dirType!='jsIncompleted' && dirType!='jsRecycleBin'
  if (!$('#filespace').length) $("#files").remove()
  else $('#includeFileList *').remove()
  if (data) AccountFacade.setCurrentRights(data)

  $('#includeFileList').append('<div id="files"></div>')
  $("#files").removeAttr("class").addClass(dirType).addClass("thumbnailView jsIsThumbnail")

  var content = $('<div id="jsFilesTable" class="filesTable"></div>')
  var tmp = $("#itemThumbnailTmp")
  var delta = 100;
  var folderI = 0;
  var fileI = 0;
  (function () {
    if(eventId!=AccountFacade.fillFileListThumbnails.latestEventId) return;

    var endFlag = true
    var max = folderI + delta
    for (var i = folderI; i < max; i++) {
      if (folderI == AccountFacade.info.dirs.length) break
      folderI++
      endFlag = false
      var clone = tmp.clone()
      var f = AccountFacade.info.dirs[i];
      var id = 'ml_folder_' + f.id
      $(".thumbFilenameCheckbox", clone).attr("name", "ch_d").attr("value", f.id)
      clone.attr("file-size", f.size)
      clone.attr("id", id)
      content.append(clone)
    }
    if(folderI==AccountFacade.info.dirs.length){
      max = fileI + delta
      for (var i = fileI; i < max; i++) {
        if (fileI == AccountFacade.info.files.length) break
        fileI++
        endFlag = false
        var f = AccountFacade.info.files[i];
        var clone = tmp.clone()
        var id = 'ml_file_' + f.id
        $(".thumbFilenameCheckbox", clone).attr("value", f.id)
        clone.attr("file-size", f.size)
        clone.attr("id", id)
        content.append(clone)
      }
    }
    if (endFlag) {
      $('#files').append(content)
      callback()
      Events.fireEvent('set.menu.state')
      Events.fireEvent('folder.reload')
      Events.fireEvent('account.items.loaded')
      AccountFacade.hideLoadingDiv()
    }
    else {
      setTimeout(arguments.callee, 0);
   }
  })();
  function callback() {
    var divs = $('#jsFilesTable').children().not('.searchDivider,.searchNoResults')
    var addTmp = $("#col2ThumbnailTmp").clone()
    if (!AccountFacade.getCurrentRights().DownloadAll) $('.jsDownload', addTmp).remove()

    var addTmp2 = $("#col3ThumbnailTmp").clone()

    var total = (AccountFacade.info.dirs.length + AccountFacade.info.files.length)
    AccountFacade.showItemsCounter(total)

    $('#files').unbind('scroll').scroll(AccountFacade.showVisible(addContent))
    $(window).unbind('resize.acc').bind('resize.acc', AccountFacade.showVisible(addContent, true))

    function addContent(i) {
      if (i >= total) return
      var el = $(divs[i])
      if ($('.jsName', el).text().length) return

      var f = (i < AccountFacade.info.dirs.length) ? AccountFacade.info.dirs[i] : AccountFacade.info.files[i - AccountFacade.info.dirs.length]
      var clone = addTmp.clone()
      clone.removeAttr("id")
      $(".jsName", clone).html(f.name)
      if (f.canEdit) el.addClass("jsCanEdit")
      if (f.canPreview && notRecycledNotIncomplete) el.addClass("jsCanPreview")
      if (f.parentId) el.data('parentId', f.parentId)
      if (f.isOwn) el.data('isOwn', f.isOwn)
      if (AccountFacade.getCurrentRights().ShareItem) el.addClass("jsCanShare")
      $(".thumbFilename", el).append(clone.children())

      clone = addTmp2.clone()
      clone.removeAttr("id")
      var bg = (f.prStyle) ? 'background-image : url("' + f.prStyle + '")' : ''
      $(".thumbPreviewImage", clone).addClass(f.typeCss).attr('style', bg).reloadBackground({
        onSuccess : function(){
          el.css("background","none");
        }
      });
      if ((f.typeCss.indexOf('image') > -1 || f.typeCss.indexOf('video') > -1)) el.addClass('imageThumb')
      $(".thumbFileTypeIcon", clone).addClass(f.fileCss)
      $(".hoverDescription", clone).html(f.descr)
      el.append(clone.children())
      if (i >= AccountFacade.info.dirs.length) {
        if (f.canPlay) el.addClass("jsCanPlay")
        var messageStart = $('#mesStart').val() + AccountFacade.info.files[i - AccountFacade.info.dirs.length].ftype;
        var messageEnd = $('#mesEnd').val() + AccountFacade.info.files[i - AccountFacade.info.dirs.length].dcount;
        var message = messageStart + "<br/>" + messageEnd;
        var tempItm = el.find(".thumbFileTypeIcon").attr("data-tip", message)
        attachTipsForItemLR($(tempItm[0]), "r", "data-tip")
        attachTipsForItemT(el.find(".actionsTips"))
      } else if (f.canPlay) el.addClass("jsFolderCanPlay")
    }
    AccountFacade.becomeNotEmpty(total)
  }
}

AccountFacade.sort = function() {
  var sortMode = AccountFacade.getSortMode()
  var mode = sortMode[0]
  var asc  = (sortMode[1] == 'true')
  var f = (mode == 'TIME' ? byModified : (mode == 'SIZE' ? bySize : byName))

  AccountFacade.info.dirs  = $(AccountFacade.info.dirs).sort(f)
  if (AccountFacade.sort.ownLength && AccountFacade.info.files.length && AccountFacade.info.files[0].hasOwnProperty('isOwn')) {
    var ownFiles = AccountFacade.info.files.slice(0, AccountFacade.sort.ownLength).sort(f)
    var otherFiles = AccountFacade.info.files.slice(AccountFacade.sort.ownLength, AccountFacade.info.files.length).sort(f)
    AccountFacade.info.files = ownFiles.concat(otherFiles)
  } else
    AccountFacade.info.files = $(AccountFacade.info.files).sort(f)

  function byName(a,b) {
    var a1 = $('<div></div>').html(a.name).text();
    var b1 = $('<div></div>').html(b.name).text();
    var parts1 = a1.split(/(\d+)/);
    var parts2 = b1.split(/(\d+)/);
    removeEmptyStrings(parts1);
    removeEmptyStrings(parts2);
    var i = 0, res = 0;
    var maxLength = parts1.length > parts2.length ? parts2.length : parts1.length;
    for (i = 0; i < maxLength; i++) {
      var num1 = parseInt(parts1[i]);
      var num2 = parseInt(parts2[i]);
      if (!isNaN(num1) && !isNaN(num2)) { // compare as numbers
        res = num1 - num2;
        if (!res) continue;
        return formatResult(res);
      } else { // compare as strings
        res = parts1[i].localeCompare(parts2[i]);
        if (!res) continue;
        return formatResult(res);
      }
    }
    res = parts1.length - parts2.length;
    return formatResult(res);

    function removeEmptyStrings(arr) {
      var n = Array.prototype.indexOf ? arr.indexOf("") : Utils.indexOf(arr, ""), newLength = arr.length;
      while (n != -1 && n <= newLength) {
        for (var l = n; l < newLength - 1; l++) arr[l] = arr[l + 1];
        n = Array.prototype.indexOf ? arr.indexOf("") : Utils.indexOf(arr, "");
        newLength--;
      }
      if (newLength != arr.length) arr = arr.slice(0, newLength);
    }

    function formatResult(res) {
      return (!asc) ? -1 * res : res;
    }
  }

  function bySize(a,b) {
    var res = a.size > b.size ? 1 : -1
    return (!asc) ? -1*res : res
  }

  function byModified(a,b) {
    var ma = a.time.split('-')
    var mb = b.time.split('-')
    var sa = ma[2]+ma[0]+ma[1]
    var sb = mb[2]+mb[0]+mb[1]
    var res = sa > sb ? 1 : -1
    return (!asc) ? -1*res : res
  }
}

AccountFacade.saveSortMode = function(mode, asc) {
  $.cookie("sortMode", mode + '-' + (asc ? 'true' : 'false'), {expires: 0, path: "/"})
}

AccountFacade.getSortMode = function() {
  var val = $.cookie("sortMode")
  return (val) ? val.split('-') : ["NAME", "true"]
}

AccountFacade.showItemsCounter = function(total) {
  var totalCount = $('.jsPagerCounter .jsTotal')
  if (total < 1 || !AccountFacade.useChangeDirSpring(currentDirId)) {
    totalCount.text('')
    return
  }
  totalCount.text(totalCount.data('translate').replace('$[p1]', total))
}

AccountFacade.unCheckAll = function() {
  $(':checked').removeAttr("checked")
  $('.jsChecked').removeClass('jsChecked')
  $('.trclick').removeClass('trclick') // for search results
  Events.fireEvent('set.menu.state')
}

/**
 *
 * @param itemType
 * @param itemId
 */
AccountFacade.getItem = function(itemType, itemId){
  var FOLDER_ID_PREFIX = "#ml_folder_"
  var FILE_ID_PREFIX = "#ml_file_"
  return $((itemType=="FILE"?FILE_ID_PREFIX:FOLDER_ID_PREFIX)+itemId);
}

/**
 * Scroll to specific file
 *
 * @param itemType (FOLDER|FILE)
 * @param itemId (number)
 *
 * @return item
 */
AccountFacade.scrollToItem = function(itemType, itemId){
  var FILES_SCROLL_ITEM = $("#files");
  var item = AccountFacade.getItem(itemType, itemId);
  if(!item.length) return item;
  FILES_SCROLL_ITEM.scrollTop(item.offset().top - FILES_SCROLL_ITEM.offset().top + FILES_SCROLL_ITEM.scrollTop() - FILES_SCROLL_ITEM.height()/2);

  return item;
}

/**
 * Scroll to specific file and select it
 *
 * @param itemType (FOLDER|FILE)
 * @param itemId (number)
 */
AccountFacade.checkItem = function(itemType, itemId){
  var item = AccountFacade.getItem(itemType, itemId);
  $(item).click();
  return item;
}

AccountFacade.updateNavButtons = function(backnext) {
  if (backnext.indexOf('back') > -1) $('#backBtn').removeClass('navBackNA').addClass('navBackA')
  else $('#backBtn').removeClass('navBackA').addClass('navBackNA');
  if (backnext.indexOf('next') > -1) $('#forwardBtn').removeClass('navNextNA').addClass('navNextA')
  else $('#forwardBtn').removeClass('navNextA').addClass('navNextNA');
}

AccountFacade.goBackAjax = function() {
  if ($('#backBtn').hasClass('navBackA'))
    changeDirLeftSpring({dirId:currentDirId, navigation:'back'})
}

AccountFacade.goForwardAjax = function() {
  if ($('#forwardBtn').hasClass('navNextA'))
    changeDirLeftSpring({dirId:currentDirId, navigation:'next'})
}

AccountFacade.allowSearch = function(allow){
  $.get("/web/account/setAllowSearch?allow="+!!allow, null, null, 'text')
}

AccountFacade.becomeNotEmpty = function (total) {
  if (!total) $('#files').append($('.jsEmptyFolderPlaceholder').clone().show())
  else $('#files .jsEmptyFolderPlaceholder').remove()
}
