
    

    function getIds(item) {
      var fileId = [], dirId = [];
      item = $(item)

      if (item.is('.jsIsDir')) dirId.push($('.jsItemDirId:first').val())
      if (item.is('.jsIsFile')) fileId.push($('.jsItemFileId:first').val())
      if (fileId.length || dirId.length) return {fileId:fileId, dirId:dirId}

      var parentWithId = item.closest('div#contextMenu, .jsItem');
      if (parentWithId.is('div#contextMenu')) {
        var id = parentWithId.attr('data_id');
        if (id) {
          parentWithId.attr('data_type') == 'file' ? fileId.push(id) : dirId.push(id);
        } else {
          if (parentWithId.data('file_ids')) fileId = parentWithId.data('file_ids')
          if (parentWithId.data('file_ids')) dirId = parentWithId.data('dir_ids')
        }

      } else if (parentWithId.is('.jsItem')) {
        addId(parentWithId)
      } else if(typeof filesIdsForBatchDownload != 'undefined' && filesIdsForBatchDownload.length){
        fileId = filesIdsForBatchDownload;
      } else {
        var filesContainer = $('#files')
        // TODO this is crutch for includeSearchResultDetails
        if (filesContainer.length == 0)
          filesContainer = $('#searchResults')
        $('.jsItem.jsChecked', filesContainer).each(function () {
          addId($(this))
        })
      }
      if (!fileId.length && !dirId.length) dirId.push(currentDirId)
      return {fileId:fileId, dirId:dirId};

      function addId(parentWithId) {

        var attrWithId = parentWithId.attr('id') || "";

        if(attrWithId.indexOf("ml_folder_")==0){
          dirId.push(attrWithId.substring("ml_folder_".length, attrWithId.length))
        }

        else if(attrWithId.indexOf("ml_file_")==0){
          fileId.push(attrWithId.substring("ml_file_".length, attrWithId.length))
        }
      }
    }

    function copyDragItem(item) {
      var ids = getIds(item)
      ids.to = $("#contextMenu").attr('toFolderId')
      ids.cutMode = false
      var link = "/web/accountActions/paste"
      doForItems(link, ids, function (data) {
        callbackDragItemAction(data, {tReload:ids.dirId.length})
      })
    }

    function moveDragItem(item) {
      var ids = getIds(item)
      ids.to = $("#contextMenu").attr('toFolderId')
      ids.cutMode = true
      var link = "/web/accountActions/paste"
      doForItems(link, ids, function (data) {
        callbackDragItemAction(data, {tReload:ids.dirId.length})
      })
    }

    function callbackDragItemAction(data, options) {
      options = options || {}
      if (data.status == "ok") {
        options.newCurDirId && (currentDirId = options.newCurDirId)
        options.fReload !== false && AccountFacade.reloadCurrentDir()
        options.tReload && AccountFacade.reloadFolderTree()
        $.isFunction(options.success) && options.success();
      } else if (data.errors != null) {
        PopupModule.popupWithButtons({
          content:data.errors,
          type:"error",
          cancelCallback:options.closeCallback
        })
      }
      if (options.clearBuffer) copyPasteBuffer = {fileId:[], dirId:[]}
    }

    function removeItemFromMainMenu(item) {
      var ids = getIds(item)
      var link = "/web/accountActions/remove"
      var options = {}
      options.tReload = ids.dirId.length
      var isFinally = false
      if ($(item).closest('ul#mainMenu').length) {
        var files = $('#files')
        if (files.is('.jsFavoriteFiles')) {
          link = "/web/accountActions/removeFromFavorites"
        }
        else if (files.is('.jsRecycleBin')) {
          link = "/web/accountActions/removeFinally"
          isFinally = true
          options.tReload = false
        }
        if (files.is('.jsIncompleted')) {
          options.tReload = true
        }
      }

      var title, confirmMsg
      if ((ids.fileId.length + ids.dirId.length) == 1) {
        var itemName = ids.fileId.length ? getNameItem('file', ids.fileId[0]) : getNameItem('folder', ids.dirId[0])
        if (itemName.length > 30) itemName = itemName.substr(0, 20) + "..."
        title = ids.fileId.length ? "Delete file?" : "\u00bfDesea borrar la carpeta? "
        confirmMsg = !isFinally ? "\u00bfEst\u00e1s seguro de que quieres eliminar $[p1]? " : "\u00bfEst\u00e1s seguro de que quieres eliminar $[p2] de manera definitiva? "
        confirmMsg = confirmMsg.replace('$[p1]', '"' + itemName + '"')
        confirmMsg = confirmMsg.replace('$[p2]', '"' + itemName + '"')
      } else {
        title = "\u00bfDesea borrar los elementos? "
        confirmMsg = !isFinally ? "\u00bfEst\u00e1s seguro de querer borrar los elementos seleccionados? " : "\u00bfSeguro que desea borrar los elementos seleccionados permanentemente? "
      }

      //getNewDirAfterRemove(ids.dirId[0], options)
      //AccountFacade.updateBreadCrumbs();

      PopupModule.popupWithButtons({title:title, content:confirmMsg, type: 'trash', confirmButtonText:"Eliminar", buttonsType: 1,
        confirmCallback: function () {
        if (files && files.is('.jsIncompleted') && ($('.jsItem', files).length == ids.fileId.length)) options.newCurDirId = $('.jsRootId').val();
        else options.newCurDirId = getNewDirAfterRemove(ids.dirId);
        doForItems(link, ids, function (data) {
          callbackDragItemAction(data, options)
        })
      }})
    }

    function getNewDirAfterRemove(deletedDirsIds) {
      var currentPath = AccountFacade.getCurrentPath();
      for(var i=0; i<deletedDirsIds.length; i++){
        for(var j=0; j<currentPath.ids.length; j++){
          if(currentPath.ids[j]==deletedDirsIds[i]){
            currentPath.ids = currentPath.ids.slice(0, j);
            break;
          }
        }
      }
      return currentPath.ids.pop();
    }

    function renameItemFromMainMenu(item, event, success) {
      var oldElement, newNameInput
      var ids = getIds(item)
      var oldName = ids.fileId.length ? getNameItem('file', ids.fileId[0]) : getNameItem('folder', ids.dirId[0])

      // bread crumbs
      if ($(item).is(".jsRenameButton")) {
        oldElement = $(".pathItem.last")
        ids.fileId = []
        ids.dirId = [currentDirId]
        newNameInput = $('<input type="text" size="10" class="marginL5 f13 jsNewName" style="height:13px" value="' + oldElement.text() + '"/>')
      } else if ($(item).is('.renamePen')) { // properties
        if ($('input[name="dirId"]').length){
          oldElement = $(".propertiesItemName")
          ids.fileId = []
          ids.dirId = [$('input[name="dirId"]').val()]
        } else if ($('input[name="fileId"]').length){
          oldElement = $(".jsFilename")
          ids.fileId = [$('input[name="fileId"]').val()]
          ids.dirId = []
        }
        newNameInput = $('<input type="text" size="30" class="f13 lucida jsNewName" style="height:13px" value="' + Utils.trim(oldElement.text()) + '"/>')
      } else {
        if ($(item).closest("div#contextMenu").hasClass('jsFromTree')) {
          oldElement = $('#foldertree div[dir-id=' + ids.dirId[0] + '] a')
          newNameInput = $('<input type="text" size="10" class="marginL5 f15 jsNewName" style="height:15px" value="' + oldName + '"/>')
        }
        else {
          if ($('.jsIsThumbnail').length) newNameInput = $('<input type="text" size="10" class="floatLeft f12 lucida jsNewName" value="' + oldName + '"/>')
          else newNameInput = $('<input type="text" size="25" class="jsNewName" value="' + oldName + '"/>')

          if (ids.fileId.length) oldElement = $("#files #ml_file_" + ids.fileId[0] + " .jsName")
          else oldElement = $("#files #ml_folder_" + ids.dirId[0] + " .jsName")
        }
      }
      newNameInput.click(function (e) {
        e.stopPropagation()
      }).keydown(function (e) {
            if (e.which == 13) {
              e.preventDefault()
              e.stopPropagation()
              this.blur()
            }
            else if (e.which == 27) {
              $(this).replaceWith(oldElement)
              e.stopPropagation()
            }
          }).blur(function () {
            checkRenameFromMainMenu()
          }).bind('mousedown selectstart', function (e) {
            e.stopPropagation()
          })
      oldElement.replaceWith(newNameInput)
      newNameInput.focus()
      newNameInput.select()


      function checkRenameFromMainMenu() {
        ids.name = $("input.jsNewName").val()
        if (ids.name.length == 0) {
          PopupModule.popupWithButtons({content:'El nombre no puede estar vac\u00edo', type:'error'})
        } else {
          doForItems("/web/accountActions/rename", ids, function (data) {
            callbackDragItemAction(data, {tReload:ids.dirId.length, name:ids.name, closeCallback:function () {
              $('input.jsNewName').focus()
            }, success: function() {
              oldElement.text(ids.name)
              newNameInput.replaceWith(oldElement)
              success && success()
            }})
          })
        }
      }
    }

    function createFolderFromMainMenu(item, event) {
      var ids = getIds(item)
      if (!ids.dirId.length) ids.dirId.push(currentDirId)
      var newFolder

      var treeIcoClass = "folder";
      var listIcoClass = "folderp";
      if(LeftMenuHelper.treeNodes[ids.dirId[0]] && LeftMenuHelper.treeNodes[ids.dirId[0]].getIconClass(false)){
        treeIcoClass = LeftMenuHelper.treeNodes[ids.dirId[0]].getIconClass(false);
        listIcoClass = LeftMenuHelper.treeNodes[ids.dirId[0]].getIconClass(true);
      }

      if ($(item).closest("div#contextMenu").hasClass('jsFromTree')) {
        var parentItem = $("div#foldertree").find('div[dir-id="' + ids.dirId[0] + '"]:not([parent-dir-id="undefined"])')
        newFolder = $('#newFolderTree').clone()
        if (parentItem.length) {
          var leftImg = parentItem.closest('div[class*="webfx-tree-item"]').find('img:not(".menu-arrow")').not('img[id$="-icon"]')
          newFolder.prepend($('<img id="webfx-tree-object-indent-0"/>').attr("src", 'http://static.4shared.com/images/L.png?ver=2054435369'), leftImg.clone(), $('<img class="menu-arrow"/>').attr("src", 'http://static.4shared.com/images/L.png?ver=2054435369'), $('<img class="webfx-tree-icon icon16 '+treeIcoClass+'"/>').attr("src", 'http://static.4shared.com/images/spacer.gif?ver=1912669180'))
          newFolder.prependTo(parentItem.closest('div[class*="webfx-tree-item"]').next('div[class*="webfx-tree-container"]').show())
        } else {
          newFolder.prepend($('<img class="menu-arrow"/>').attr("src", 'http://static.4shared.com/images/L.png?ver=2054435369'), $('<img class="webfx-tree-icon icon16 '+treeIcoClass+'"/>').attr("src", 'http://static.4shared.com/images/spacer.gif?ver=1912669180'))
          newFolder.prependTo($('#foldertree div[dir-id=' + ids.dirId[0] + '] a').closest('div[class*="webfx-tree-item"]').next('div[class*="webfx-tree-container"]'))
        }
      } else {
        ids.dirId[0] = currentDirId;
        if (!$('.jsIsThumbnail').length) {
          newFolder = $('#newFolderTable').clone()
          newFolder.prependTo($("div#files"))
        } else {
          newFolder = $('#newFolderThumb').clone()
          newFolder.prependTo($("div#files div.filesTable"))
        }
      }
      if (LeftMenuHelper.treeNodes.hasOwnProperty(ids.dirId[0])) {
          var treeNode = LeftMenuHelper.treeNodes[ids.dirId[0]];
          if (treeNode.childNodes.length <= 0) {
              var itm = $('#foldertree div[dir-id=' + ids.dirId[0] + '] a').closest('div[class*="webfx-tree-item"]');
              itm.next('div[class*="webfx-tree-container"]').show();
              treeNode.expand()
          }
          else if (!treeNode.open) {
              treeNode.expand();
          }
      }

      $('.sharefolder', newFolder).removeClass('sharefolder').addClass(listIcoClass)
      newFolder.show()

      $('input.jsNewName', newFolder).click(function (e) {
        e.stopPropagation()
      }).keydown(function (e) {
            if (e.which == 13) {
              e.preventDefault()
              e.stopPropagation()
              this.blur()
            }
            else if (e.which == 27) newFolder.remove()
          }).bind('blur', checkCreateFolderFromMainMenu).bind('mousedown selectstart',function (e) {
            e.stopPropagation()
          }).focus()

      function checkCreateFolderFromMainMenu() {
        ids.name = $("input.jsNewName", newFolder).val()
        ids.isShared = Config.is4Sync ? 0 : 1
        $('input.jsNewName', newFolder).unbind('blur', checkCreateFolderFromMainMenu)
        doForItems("/web/accountActions/createFolder", ids, function (data) {
          callbackDragItemAction(data, {tReload:true, name:ids.name, closeCallback:function () {
            $('input.jsNewName', newFolder).bind('blur', checkCreateFolderFromMainMenu).focus()
          }})
        })
      }
    }

    var copyPasteBuffer = {fileId:[], dirId:[]}

    function prepareSelect(item) {
      copyPasteBuffer = getIds(item)
      fillCommandPasteInfo()
      $('#files .jsItem').removeClass('jsChecked')
      $(':checkbox').removeAttr('checked')
    }

    function selectForCopy(item) {
      prepareSelect(item)
      copyPasteBuffer.cutMode = false
      $(".jsCut").removeClass("jsCut")
      Events.fireEvent('set.menu.state')
    }

    function selectForMove(item) {
      prepareSelect(item)
      copyPasteBuffer.cutMode = true
      for (var i = 0; i < copyPasteBuffer.dirId.length; i++)
        $("#ml_folder_" + copyPasteBuffer.dirId[i]).addClass("jsCut")
      for (var i = 0; i < copyPasteBuffer.fileId.length; i++)
        $("#ml_file_" + copyPasteBuffer.fileId[i]).addClass("jsCut")
      Events.fireEvent('set.menu.state')
    }

    function pasteItemFromMainMenu(item) {
      var ids = copyPasteBuffer
      ids.to = getIds(item).dirId[0]
      if (!ids.to) ids.to = currentDirId;
      doForItems('/web/accountActions/paste', ids, function (data) {
        callbackDragItemAction(data, {tReload:ids.dirId.length, clearBuffer:false, closeCallback: reload})
        function reload() {
          if (ids.dirId.length + ids.fileId.length > 1) {
            AccountFacade.reloadCurrentDir()
            ids.dirId.length && AccountFacade.reloadFolderTree()
          }
        }
      })
    }

    function showCommandPaste() {
      var filesCount = (copyPasteBuffer.fileId) ? copyPasteBuffer.fileId.length : 0
      var dirsCount = (copyPasteBuffer.dirId) ? copyPasteBuffer.dirId.length : 0
      if (filesCount + dirsCount == 0) $('.commandPaste').removeClass('onlyVisibleMainMenuComponents')
      else $('.commandPaste').addClass('onlyVisibleMainMenuComponents')
      $('.commandPaste a').wrapInner('<div class="floatLeft"></div>')
      $('.commandPaste a').append('<div class="clearBufferButton floatLeft"></div>')

      $(".commandPaste .clearBufferButton").click(function(e) {
        copyPasteBuffer.dirId = []
        copyPasteBuffer.fileId = []
        $("div#files .jsCut").removeClass("jsCut")
        $(".commandPaste").hide()
        e.stopPropagation()
      })
    }

    var maxNamesInList = 10
    var maxCharactersInName = 20
    function fillCommandPasteInfo() {
      var filesCount = (copyPasteBuffer.fileId) ? copyPasteBuffer.fileId.length : 0
      var dirsCount = (copyPasteBuffer.dirId) ? copyPasteBuffer.dirId.length : 0
      if (filesCount + dirsCount == 0) return

      var summary = createBufferSummary()

      var pasteText = "Paste "
      if (filesCount > 0)
        pasteText += ((filesCount == 1) ? "$[p1] file" : "$[p1] files")
      if (filesCount > 0 && dirsCount > 0)
        pasteText += " and "
      if (dirsCount > 0)
        pasteText += ((dirsCount == 1) ? "$[p2] folder" : "$[p2] folders")
      if (!isNaN(summary.size))
        pasteText += ' (' + Utils.readablizeBytes(summary.size) + ')'
      pasteText = pasteText.replace(/\$\[p1\]/, filesCount).replace(/\$\[p2\]/, dirsCount)

      var tooltipText = ''
      var limit = summary.names.length > maxNamesInList ? maxNamesInList : summary.names.length
      for (var i = 0; i < limit; i++) {
        tooltipText += summary.names[i] + '\n'
      }
      if (summary.names.length > maxNamesInList)
        tooltipText += '...'

      $('.commandPaste a').text(pasteText)
      $('.commandPaste').attr('title', tooltipText);
    }

    function createBufferSummary() {
      var summary = {size:0, names:[]}

      if (copyPasteBuffer.dirId.length)
        appendToSummary(summary, copyPasteBuffer.dirId, 'folder')

      if (copyPasteBuffer.fileId.length)
        appendToSummary(summary, copyPasteBuffer.fileId, 'file')

      return summary

      function appendToSummary(summary, ids, type) {
        for (var i = 0; i < ids.length; i++) {
          var id = ids[i]
          var item = $('#ml_' + type + '_' + id)
          if (!item.length)
            item = $('#leftpanel div[dir-id=' + id + ']:first')

          summary.size += parseInt(item.attr('file-size'))

          if (i > maxNamesInList) continue;
          var name = getNameItem(type, id)
          if (name.length > maxCharactersInName) {
            name = name.substr(0, maxCharactersInName) + '...'
          }
          summary.names.push(name)
        }
      }
    }

    function emptyRecycleBinFromMainMenu() {
      PopupModule.popupWithButtons({title:"Empty Recycle Bin?",
        content:"\u00bfEst\u00e1s seguro de que deseas eliminar permanentemente todos los archivos de la Papelera de reciclaje?",
        type: 'trash', buttonsType: 1, confirmButtonText:"Empty", confirmCallback: function () {
        doForItems("/web/accountActions/emptyRecycleBin", {}, function (data) {
          callbackDragItemAction(data)
        })
      }})
    }

    function restoreItemOnOpen(item) {
      var ids = getIds(item)
      var title = ids.fileId.length ? 'Restore file?' : 'Restore folder?'
      var content = 'To use \"$[p0]\", first restore it from Recycle Bin'.replace("$[p0]", Utils.trim(item.text()))
      PopupModule.popupWithButtons({title:title, content: content, type: 'trash', buttonsType: 1,
        confirmButtonText:"Restaurar", confirmCallback: function () {
          doForItems("/web/accountActions/restoreFromRecycleBin", ids, function (data) {
            callbackDragItemAction(data,{tReload:ids.dirId.length})
          })
        }
      })
    }

    function restoreFilesFromMainMenu(item) {
      var ids = getIds(item)

      PopupModule.popupWithButtons({title:"\u00bfDesea restaurar? ",
        content:"\u00bfSeguro que desea restaurar su selecci\u00f3n? ",
        type: 'trash', buttonsType: 1, confirmButtonText:"Restaurar", confirmCallback: function () {
        doForItems("/web/accountActions/restoreFromRecycleBin", ids, function (data) {
          callbackDragItemAction(data,{tReload:true})

        })
      }})
    }

    function bgFileTaskFromMainMenu(item, event, type, isDownload) {
      var ids = getIds(item)
      var link = "/web/accountActions/bgFileTask"
      var popup = PopupModule.popup({title:getTitle(), content:getContent()})
      popup.find('[name=bgAction]').click(action)

      function getTitle() {
        return (isDownload ? 'Download as ' : 'Archive as ') +
            type.toLowerCase().replace(/^[a-z]/g, function (letter) {
              return letter.toUpperCase();
            })
      }

      function getContent() {
        var content = $('#bgDialogWrapper').clone()
        if (type != 'ZIP') $('.jsEncoding', content).remove()
        if (!isDownload) $('[name=bgAction]', content).text('Crear')
        if (typeof currentDirId != 'undefined' && typeof getNameItem == 'function') {
          var name = getNameItem("folder", (ids.dirId.length == 1 && !ids.fileId.length) ? ids.dirId[0] : currentDirId)
          if (name) $('[name=fileName]', content).attr('value', name)
        }
        if (!isDownload) content.find('.jsAdditionalText').remove()
        return content.html()
      }

      function action() {
        ids.fileName = popup.find('[name=fileName]').val()
        ids.encoding = popup.find('[name=encoding]').val()
        ids.type = type
        isDownload || (ids.toDir = currentDirId)
        doForItems(link, ids, callbackBGTask)
        popup.closePopup()
      }

      function callbackBGTask(data) {
        callbackDragItemAction(data, {fReload:false, success:function () {
          PopupModule.popupWithButtons({
            title:'Background task',
            content:"Your task was sent to the background. You can now close this window and we\'ll notify you when it\'s complete.",
            confirmButtonText:'Hecho',
            type:"wait",
            cancelCallback: AccountFacade.unCheckAll()
          })
          $.ajax({url:Config.cdDomain + 'web/system/tasks/runBGT', dataType:'jsonp', data:{'x-security':$.cookie('Login')}})
        }})
      }
    }

    function unInviteCurrentUserFromMainMenu(item) {
      var ids = getIds(item)
      var link = "/web/sharedFolderInvite/unInviteCurrentUser"

      doForItems(link, ids, function (data) {
        callbackDragItemAction(data, {'tReload': ids.dirId.length})
      })
    }

    function extractValues(source, temp) {
      var res = {}
      $(source).each(function () {
        res[$(this).attr("name").replace(temp, "")] = $(this).val()
      })
      return res
    }

    function saveBatchChanges() {
      var params = new Object();
      params.folderDescriptions = extractValues($('#filespace textarea[name^=d_descr]'), 'd_descr')
      params.fileDescriptions = extractValues($('#filespace textarea[name^=f_descr]'), 'f_descr')
      params.fileTitles = extractValues($('#filespace input[name ^= f_title]'), 'f_title')
      params.fileTags = extractValues($('#filespace input[name ^= f_tags]'), 'f_tags')

      AccountFacade.showLoadingDiv()
      $.ajax({
        type:"POST",
        url:"/web/accountActions/saveBatchChanges",
        contentType:'application/json',
        dataType:'json',
        data:JSON.stringify(params),
        success:function (data) {
          if (data.status == "ok") {
            notifyBlock.displayNotification("All changes have been applied!")
          } else {
            notifyBlock.displayNotification(data.error ? data.error : "Unknown error", "ERROR")
          }
        },
        complete:function () {
          AccountFacade.hideLoadingDiv()
        }
      })
    }

    function unMarkFilesFromMaimMenu(item) {
      var ids = getIds(item)
      ids.marked = false
      var link = "/web/accountActions/markAsPublic"

      doForItems(link, ids, function (data) {
        callbackDragItemAction(data)
      })
    }

    function doForItems(link, data, callback) {
      AccountFacade.showLoadingDiv()
      $.ajax({url:link, type:'post', data:data, traditional:true})
          .success(callback)
          .error(function(dataResponse, textStatus, errorThrown) { errorCallbackDoForItems(dataResponse, link, data, callback, textStatus, errorThrown) })
          .complete(function () {
            AccountFacade.hideLoadingDiv()
          })
    }

    function errorCallbackDoForItems(dataResponse, link, params, callback, textStatus, errorThrown) {
      if (!dataResponse.responseText) {
        notifyBlock.displayNotification("Unknown server error", "ERROR")
        return
      }
      try {
        var parsedJSON = JSON.parse(dataResponse.responseText)
        if (parsedJSON.resultCode == 'ERROR_PASSWORD_PROTECTED') {
          var ppfPopup = PopupModule.popup({
            title:$('#jsPPFBlockTitle').val(),
            content:$('.jsPPFBlockContent').html()
          })
          handlePasswordProtectedFolderPopupDoForItems(ppfPopup, link, params, callback)
        }
      } catch (e) {
        notifyBlock.displayNotification("Unknown server error", "ERROR")
      }
    }

    function handlePasswordProtectedFolderPopupDoForItems(popup, link, data, callback) {
      $('.jsPPFOk', popup).click(checkAndStoreFolderPassword)

      function checkAndStoreFolderPassword(event) {
        var params = { dirId : data.dirId[0], ppfPassword : $('input:password', popup).val() }
        $.ajax({ type: 'post', url: '/web/account/properties/dir/password', data: params, dataType: 'json',
          success: function(dataResponse) {
            if (dataResponse.status == 'ok') {
              popup.closePopup()
              doForItems(link, data, callback)
            } else $('.jsPPFInputError', popup).show() },
          error: function(dataResponse) { }
        })
      }

      $('input:password', popup).focus(function(event) { $('.jsPPFInputError', popup).hide() })

      $('.jsPPFOk', popup).next().click(function(event) { $('input.jsNewName').focus() })
    }

    function showFileLinksFromMainMenu(item) {
      var ids = getIds(item)
      startSharingForMultipleSelect(ids.fileId, ids.dirId)
    }

    function shareCurrentItemFromMainMenu(item) {
      var ids = getIds(item)
      if (ids.dirId.length + ids.fileId.length > 1) startSharingForMultipleSelect(ids.fileId, ids.dirId)
      else if (ids.dirId.length == 1) startSharingForFolder(ids.dirId)
      else if (ids.fileId.length == 1) startSharingForFile(ids.fileId)
      else startSharingForFolder(currentDirId)
    }

    function addFilesToMyAccountFromMainMenu(item){
      var ids = getIds(item)

      var link = "/web/accountActions/add2account"

      doForItems(link, {fileIds: ids.fileId},
        function (data) {

          if (data.status){

            var prefix = ids.fileId.length == 1 ? getNameItem('file', ids.fileId[0]) : (ids.fileId.length + ' archivos')

            notifyBlock.displayNotification(prefix + " has been successfully added to your account")

          } else {

            var errors = data.errors;
            var success = data.success;

            var errorsCount = $.map(errors, function(n, i) { return i; }).length;
            var successCount = $.map(success, function(n, i) { return i; }).length;

            var errorMessage = (function(){
              for(var key in errors){
                return errors[key];
              }
            })();

            if(!successCount)
              notifyBlock.displayNotification(errorMessage, "ERROR");
            else
              notifyBlock.displayNotification('Some of the items haven\'t been added to your account because of  " '+errorMessage+' "', "ERROR");

          }


          AccountFacade.unCheckAll()
        }
      )
    }

    function goToFolder(item) {
      var ids = getIds(item)
      changeDirLeft($("#ml_file_" + ids.fileId[0]).data('parentId'))
    }