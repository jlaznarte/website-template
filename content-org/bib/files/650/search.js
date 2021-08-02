$(function() {
  if (Config.is4Sync)
    $('.jsSearchFilter').find('.games,.featured_videos').hide()
  else {
    AjaxSuggestion.init($('#searchQuery'));
    $(document).click(AjaxSuggestion.hidePopup)
  }
  if ($('body').hasClass('jsMyAccount')) {
    $('.jsSearchFilter a').click(function() {
      return false;
    })
    $("#doSearch").click(doOwnAccountSearch)
    $('#search').submit(doOwnAccountSearch)
  } else {
    if (Config.is4Sync) {
      $('.searchbox').remove()
      return
    } else {
      $("#doSearch").click(doHeaderSearch)
      $('#search').submit(doHeaderSearch)
    }
  }
  $('#searchQuery').keydown(function(e) {
    if (e.which == 13)
      $('#search').submit()
  })
})

function doOwnAccountSearch(suggest) {
  if(!Config.is4Sync && AjaxSuggestion.popupShown() && AjaxSuggestion.selected >= 0 && !suggest) {
    doHeaderSearchSuggest($('#sugg'+AjaxSuggestion.selected).html());
    return false;
  }
  !Config.is4Sync && AjaxSuggestion.hidePopup()
  AccountFacade.showLoadingDiv()

  var categories = {
    photo: 3,
    music: 1,
    book: 5,
    video: 2,
    featured_videos: 2,
    games: 9
  }

  var category = $('#active_filter>i').attr('class');
  var searchQuery = $('#searchQuery');
  searchQuery.val(searchQuery.val().substr(0, 200))

  currentDirId = AccountFacade.SEARCH_RESULT_DIR_ID

  $("#pathString .pathItem.last").attr('href', 'javascript:void(0)')

  var params = {}
  if (categories[category]) params['category'] = categories[category]
  if (searchQuery.val()) params['query'] = searchQuery.val()

  $.get("/web/rest/v1/user/files", params, function(data1) {
    var files1 = convertNewFieldsToOld(data1, true)
    if (Config.is4Sync) {
      printFiles(files1, files1.length)
    } else {
      $.get("/web/rest/v1/files", params, function(data2) {
        var files2 = convertNewFieldsToOld(data2, false)
        printFiles(files1.concat(files2), files1.length, files2.length)
      })
    }
  })
  return false
}

function prepareSlideshowIds(files) {
  $('#slideshowAnchors').html('')
  for (var i in files) {
    if (Utils.isImage(files[i].name))
      $('#slideshowAnchors').append($('<input type="hidden" value="' + files[i].id + '"/>'))
  }
}

function printFiles(files, ownLength, notOwnLength) {
  var rights = AccountFacade.getVirtualRights(currentDirId)
  rights.commands.SlideShow = false
  var countImages = 0
  for (var i = 0; i < files.length; i++) {
    if (Utils.isImage(files[i].name)) countImages++
  }
  if (countImages) rights.commands.SlideShow = true

  AccountFacade.setCurrentRights(rights)

  //lets change breadcrumb
  var pathObj = AccountFacade.PathObject([], [])
  var term = Utils.escapeXSS($('#searchQuery').val());
  pathObj.ids.push(AccountFacade.updateBreadCrumbs.rootId)
  pathObj.path.push(AccountFacade.updateBreadCrumbs.rootPath)
  pathObj.ids.push(AccountFacade.SEARCH_RESULT_DIR_ID)
  pathObj.path.push($("#sBreadcrumbsPhrase").val() + (term.length ? " '" + $('<div/>').text(term).text() + "'" : ""))
  AccountFacade.updateBreadCrumbs(pathObj)
  //lets change breadcrumb


  if (webFXTreeHandler.selected)
    webFXTreeHandler.selected.deSelect()
  AccountFacade.info.dirs = []
  AccountFacade.info.files = files
  AccountFacade.sort.ownLength = ownLength
  Events.removeListener('account.items.loaded')
  Events.addListener('account.items.loaded', function() {
    if (currentDirId != AccountFacade.SEARCH_RESULT_DIR_ID) {
      Events.removeListener('account.items.loaded')
      return
    }
    var isThumbView = $(".jsIsThumbnail").length
    var contentDivider = isThumbView ? $('<div class="searchDivider"></div>') : $('<tr class="searchDivider"><td colspan="4"></td></tr>')
    var contentDividerOwn = contentDivider.clone().addClass('ownFiles')
    var noResultsText = $('#sNoResults').val()
    var noResults = isThumbView ? $('<div class="searchNoResults halfBlock">' + noResultsText + '</div>') : $('<tr class="searchNoResults halfBlock"><td colspan="4">' + noResultsText + '</td></tr>')
    var content = $('#jsFilesTable')
    if (!files.length)
      $("#files").append($('<div class="searchNoResults fullBlock">' + noResultsText + '</div>'))
    else {
      var term = Utils.escapeXSS($('#searchQuery').val());
      var phrase = term ? $("#sOwnFilesWithQuery").val() + ' "' + $('<div/>').text(term).text() + '"' : $("#sOwnFiles").val()
      isThumbView ? contentDividerOwn.html(phrase) : contentDividerOwn.children().html(phrase)
      content.prepend(contentDividerOwn)
      if (!ownLength) noResults.clone().insertAfter($('.searchDivider.ownFiles:first'))

      if (!Config.is4Sync) {
        phrase = $('#sFullFiles').val()
        var firstNotOwnEl = isThumbView ? $('#jsFilesTable').children().not('.searchDivider,.searchNoResults')[ownLength ? ownLength - 1 : 0] : $('#jsFilesTable').find('tr:not(.searchDivider,.searchNoResults)')[ownLength ? ownLength - 1 : 0]
        isThumbView ? contentDivider.html(phrase) : contentDivider.children().html(phrase)
        ownLength ? contentDivider.insertAfter(firstNotOwnEl) : contentDivider.insertBefore(firstNotOwnEl)
        if (notOwnLength === 0) noResults.clone().insertAfter(contentDivider)
        else if (notOwnLength >= 100)
            $("#files").append($('<div class="searchMoreResults"><div class="moreResultsButton inline" onclick="doHeaderSearch()">' + $('#sMoreResults').val() + '</div></div>'))
      }
    }
    AccountFacade.hideLoadingDiv()
  })

  prepareSlideshowIds(files)

  if (countImages * 2 >= files.length) {
    AccountFacade.fillFileListThumbnails()
  } else {
    AccountFacade.fillFileListDetails()
  }
}

function convertNewFieldsToOld(data, isOwnFiles) {
  var files = []
  for (var i = 0; i < data.files.length; i++) {
    var temp = {}
    temp.canEdit = false
    temp.canPreview = hasPreview(data.files[i].name, data.files[i].thumbnailUrl)
    temp.dcount = data.files[i].downloads
    temp.fileCss = Utils.getExtension(data.files[i].name) + "FileExt"
    temp.ftype = data.files[i].type
    temp.id = data.files[i].id
    temp.parentId = data.files[i].parentId
    temp.name = data.files[i].name
    temp.prStyle = data.files[i].thumbnailUrl
    temp.size = data.files[i].size
    var date = new Date(data.files[i].modified)
    temp.time = addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + '-' + date.getFullYear()
    var category = getCategoryName(data.files[i].name)
    temp.typeCss = category + (temp.canPreview ? " hasPreview" : "")
    if (category == 'audio') temp.canPlay = true
    temp.isOwn = isOwnFiles
    files.push(temp)
  }

  function addZero(i) {
    return (i < 10) ? "0" + i : i;
  }
  return files
}


function doHeaderSearch(suggest) {
  if(AjaxSuggestion.popupShown() && AjaxSuggestion.selected >= 0 && !suggest) {
    doHeaderSearchSuggest($('#sugg'+AjaxSuggestion.selected).html());
    return false;
  }
  var searchType = $('#active_filter>i').attr('class');
  var searchTerm = $('#searchQuery').val();
  var href = '';
  if (!!searchTerm) {
    href = $('#sPrefix').val() + $('.sLink.' + searchType).val() + '/' + Utils.getSearchName(searchTerm);
  } else {
    href = $('.jsSearchFilter a.' + searchType).attr('href');
  }
  document.location.href = href+(suggest?"?suggested":"");
  return false;
}

function doHeaderSearchSuggest(suggest) {
  $('#searchQuery').val(suggest);
  if ($('body').hasClass('jsMyAccount')) {
    doOwnAccountSearch(true);
    AjaxSuggestion.hidePopup()
  } else
    doHeaderSearch(true);
  return false;
}

function hasPreview(name, hasThumb) {
  var ext = Utils.getExtension(name)
  var category = getCategoryName(name)
  return $.inArray(ext , ["html", "htm", "jsp", "asp", "sql", "js", "css", "xml", "dtd", "properties", "tld", "txt"]) != -1 ||
      hasThumb ||
      (ext == "zip" && AccountFacade.hasFeatures('hasFeatureZipPreview')) ||
      (((category == "video" && ext != "mkv") || $.inArray(ext, ["midi", "aiff", "au"]) != -1) && AccountFacade.hasFeatures('hasFeaturePlayMusicFiles'))
}

function getCategoryName(name) {
  var ext = Utils.getExtension(name)
  switch (true) {
    case ($.inArray(ext , ["wav", "mp3", "m3u", "mid", "ra", "rm", "ram", "wma", "ape", "ogg", "m4a", "mpc"]) != -1):
      return "audio";
    case ($.inArray(ext , ["3gp", "mov", "avi", "mp4", "mpeg", "mpg", "flv", "m2ts", "webm", "asf", "wmv", "mkv"]) != -1):
      return "video";
    case ($.inArray(ext , ["bmp", "dwg", "gif", "jpg", "jpeg", "png", "psd", "tif", "tiff"]) != -1):
      return "image";
    case ($.inArray(ext , ["kmz", "package", "rar", "zip", "gz", "7z"]) != -1):
      return "compressed";
    case ($.inArray(ext , ["doc", "lit", "mdb", "pdf", "pps", "ppt", "rtf", "txt", "wps", "xls", "srt", "epub"]) != -1):
      return "office";
    case ($.inArray(ext , ["exe", "jar", "cod", "alx"]) != -1):
      return "program";
    case ($.inArray(ext , ["htm", "swf", "html"]) != -1):
      return "web";
    case ($.inArray(ext , ["nth", "prc", "sis", "ipa"]) != -1):
      return "mobile";
    case (ext == "apk"):
      return "android";
    default:
      return "other";
  }
}



