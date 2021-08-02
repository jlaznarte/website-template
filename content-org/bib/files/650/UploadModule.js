UploadModule.debug = true

UploadModule.FileSupported = function() {
  try {
    return typeof File != "undefined";
  } catch(e) {
    return false
  }
}

UploadModule.getAuthInfo = function(){
  var login = $.cookie('Login');
  var password = $.cookie('Password');
  var res = "";
  if(login && login.length>0 && login!='""' && password && password.length>0 && password!='""'){
    res+="&cuid="+login+"&cupa="+password;
  }
  return res;
}

UploadModule.dropFilesAvailable = function(){
  if ($.browser.msie || $.browser.opera)
    return false;
  if(typeof URL == 'undefined' || typeof URL.createObjectURL != 'function'
      || typeof FileReader == 'undefined' || typeof FileReader.prototype.readAsBinaryString != 'function'){
    return false;
  } else {
    return true;
  }

}

UploadModule.XhrUploadSupported = function() {
  try {
    return typeof (new XMLHttpRequest()).upload != "undefined"
  } catch(e) {
    return false
  }
}

UploadModule.canUploadDirectory = function() {
  try {
    return $.browser.webkit && !!('webkitdirectory' in document.createElement('input'))
  } catch(e) {
    return false
  }
}

UploadModule.addUIFileId = function(files){
  if(!UploadModule._uploadModuleFileViewId)
    UploadModule._uploadModuleFileViewId = 1
  for(var i in files){
    if(!files[i]._uiFileId){
      files[i]._uiFileId = UploadModule._uploadModuleFileViewId++
    }
    files[i]._loaded = 0
    if(files[i]._uploadDir === undefined){
      files[i]._uploadDir = UploadModule.getCurrentDirIdForUpload()
    }
  }
  return files
}

UploadModule.getNextFolderId = function(){
  if(!UploadModule._uploadModuleFolderViewId)
    UploadModule._uploadModuleFolderViewId = 1
  return ++UploadModule._uploadModuleFolderViewId
}

UploadModule.getCurrentDirIdForUpload = function(){
  if(typeof currentDirId == 'undefined') return
  if(AccountFacade.isSpecialDir(currentDirId)) return AjaxFacade.rootDirId
  return currentDirId
}

UploadModule.checkSize = function(file, options) {
  return UploadModule.getFileSize(file) < options.max_file_size;
}

UploadModule.checkSizeForCPUArch = function(file){
  var arch = Utils.getCpuArch()
  var size2gb = 2 * 1024 * 1024 * 1024 - 1024 //2GB - 1KB for 100% sure!!
  var size4gb = 4 * 1024 * 1024 * 1024 - 1024 //4GB - 1KB for 100% sure!!
  if($.browser.mozilla){
    return  UploadModule.getFileSize(file) < size2gb;
  } else {
    return ((arch == 32 && UploadModule.getFileSize(file) < size2gb)
      || (arch == 64 && UploadModule.getFileSize(file) < size4gb));
  }
}

/**
 *
 *
 * @param file
 * @return {Return file size, or undefined when we can not get file size}
 */
UploadModule.getFileSize = function(file) {
  if(file.size===undefined && file._data)file.size = file._data.length
  return file.size;
}

UploadModule.getFileName = function(file) {
  return file.fileName ? file.fileName : file.name
}

UploadModule.getFilesSize = function(files) {
  var total = 0;
  for(var i=0; i<files.length; i++){
    total+=UploadModule.getFileSize(files[i])
  }
  return total;
}

UploadModule.parseFolderHierarchy = function(files){
  var res = [];

  for(var i=0; i<files.length; i++){
    if(files[i].tempLocalDirId) continue;
    var path = extractPath(files[i]);
    files[i].tempLocalDirId = getLcFolderIdForPath(path, res);
  }

  return res;

  function getLcFolderIdForPath(path, res){
    var curEntity = res;
    for(var i=0; i<path.length; i++){
      curEntity = getFolderEntityByName(path[i], curEntity);
      if(i<path.length-1)curEntity = curEntity.childrens;
    }
    return curEntity.folderLocalId;
  }
  //folders.push({folderLocalId:currentFolderId, folderName:entries[i].name, childrens:childrens});
  function getFolderEntityByName(name, farr){
    var res = null;
    for(var i=0; i<farr.length && res==null; i++){
      if(farr[i].folderName==name) res = farr[i];
    }
    if(res==null){
      res = {folderLocalId:UploadModule.getNextFolderId(), folderName:name, childrens:[]};
      farr.push(res);
    }
    return res;
  }


  function extractPath(file) {
    if(!file.webkitRelativePath)return [];
    var arr = file.webkitRelativePath.split(/[\\/]/)
    arr.splice(arr.length - 1)
    return arr;
  }
}

/**
 * When we do drag-drop we not able to determine file/folder by any parameters. So, we need this hack;
 */
UploadModule.removeFoldersFromDroppedFiles = function(files, callback){
  if(typeof URL == 'undefined' || typeof URL.createObjectURL != 'function'
      || typeof FileReader == 'undefined' || typeof FileReader.prototype.readAsBinaryString != 'function'){
    callback(files);
    return;
  }

  var lcFiles = Utils.convertToPlainArray(files);
  var result = [];

  doCheck(lcFiles, result)

  function doCheck(inputFiles, outputFiles){

    if(!inputFiles.length){
      callback(outputFiles);
      return;
    }

    var file = inputFiles.shift();

    if(file.size && file.size>100000){
      outputFiles.push(file);
      doCheck(inputFiles, outputFiles);
      return;
    }

    try {
      var reader = new FileReader();
      reader.onerror = function(e) {
        //folder!
        doCheck(inputFiles, outputFiles);
        return;
      };
      reader.onload = function(e) {
        //posibleNotAFolder, lets check by AJAX
        var url = URL.createObjectURL(file);
        var xhr = new XMLHttpRequest();
        xhr.onerror=function(e){
          //folder!
          URL.revokeObjectURL(url);
          doCheck(inputFiles, outputFiles);
          return;
        }
        xhr.onload  = function(e){
          //file!
          URL.revokeObjectURL(url);
          outputFiles.push(file);
          doCheck(inputFiles, outputFiles);
          return;
        }
        xhr.open('GET', url, true)
        xhr.send();

      };
      reader.readAsDataURL(file);
    } catch (e) {
      //folder!
      doCheck(inputFiles, outputFiles);
      return;
    }
//    var xhr = $.ajax({
//      url: url,
//      type : "GET",
//      dataType : "text",
//      success: function(a){
//        outputFiles.push(file);
//        doCheck(inputFiles, outputFiles);
//        return;
//      },
//      error : function(a){
//        doCheck(inputFiles, outputFiles);
//        return;
//      }
//    });
  }

}

UploadModule.createFolderHierarchy = function(poptions){

  var options = {
    currentFolder : poptions.currentFolder,
    hierarchy : poptions.hierarchy,
    files : poptions.files,
    successCallback : poptions.successCallback,
    errorCallback :  poptions.errorCallback ? poptions.errorCallback : function(){},
    onFoldersCreated : poptions.onFoldersCreated || function(){},
    checkFolderExists : !!poptions.checkFolderExists
  }

  if(options.checkFolderExists){
    var baseFolderNames = [];
    for(var i=0; i<options.hierarchy.length; i++){
      baseFolderNames.push(options.hierarchy[i].folderName);
    }
    checkDirExists(baseFolderNames, options.files, getServerFolderIds);
  } else {
    for(var i in options.files){
      options.files[i]._skipExisting = true;
    }
    getServerFolderIds();
  }


  function getServerFolderIds(){

    var createFoldersRequest = {};

    createFoldersRequest.currentFolder =  options.currentFolder;
    createFoldersRequest.folderStructure = options.hierarchy;

    $.ajax
        ({

          type: "POST",
          url: '/web/myAccount/createFolderHierarchical',
          contentType: 'application/json',
          dataType: 'json',
          //json object to sent to the authentication url
          data: JSON.stringify(createFoldersRequest),

          success: setRealFolderIdsForFiles,

          error : function(xhr){

            var responseText = xhr.responseText;
            var responseObj = null;

            if(responseText){
              try{
                responseObj = JSON.parse(responseText)
              }catch (e){}
            }

            options.errorCallback(responseObj)
          }

        })
  }

  function setRealFolderIdsForFiles(realFolderIdsJsonStr){
    for(var i=0; i<options.files.length; i++){
      options.files[i]._uploadDir= realFolderIdsJsonStr.localToServerFoldersIdsMapping[options.files[i].tempLocalDirId];
    }
    options.onFoldersCreated();
    options.successCallback(options.files);
  }

  function checkDirExists(baseFolderPaths, files, callback) {
    var pathParam = '';

    for(var i=0; i<baseFolderPaths.length; i++){
      pathParam+='&path=' + baseFolderPaths[i];
    }


    $.ajax({
      type: 'get',
      url: '/rest/sharedFileUpload/checkDirExists?dirId=' + options.currentFolder + pathParam,
      success: function(data) {
        if (data) {
          onFolderExistsConfirm(function(result){
            if(result){
              for(var f in files){
                files[f]._skipExisting = result.skipExisting;
              }
              callback();
            } else {
              options.errorCallback();
            }
          });
        }else{
          callback();
        }
      },
      error : options.errorCallback
    })
  }

  function onFolderExistsConfirm(callback) {
    var element = $('#uploadFolderExistsDialog')
    var folderExistsPopup = PopupModule.popup({title: $('.jsUploadFolderExistsPopupTitle', element).val(),
    content: element.html()})
    $('.jsSkip', folderExistsPopup).click(function() {
      callback({
        skipExisting: true
      })
      folderExistsPopup.closePopup()
    })

    $('.jsDoNotSkip', folderExistsPopup).click(function() {
      callback({
        skipExisting: false
      })
      folderExistsPopup.closePopup()
    })

    $('.jsClose', folderExistsPopup).click(function() {
      callback(false)
    })
  }


}

UploadModule.getNewUploadUrl = function(file, callback) {
  // Change upload url for file
  $.ajax({
    type: 'post',
    url: '/rest/sharedFileUpload/newUploadUrl',
    data: {
      fileId: file._fileId
    },
    success: function(data) {
      file._newDcPath = data.newDcPath;
      callback(true)
    },
    error: function(xhr, textStatus, errorThrown) {
      callback(false)
    }
  })
}

/**
 * This is required when we select folder by button
 *
 * @param filesArray
 */
UploadModule.removeFoldersByDotInName = function(filesArray){
  var res = [];

  for(var i=0; i<filesArray.length; i++){
    if(filesArray[i].name!='.'){
      res.push(filesArray[i]);
    }
  }

  return res;
}

UploadModule.ProgressMeterComet = function(options) {
  var isRun = false

  this.start = function(callback, params) {
    isRun = true
    params = params||''
    Jsonp({
      url: options.dc_path + options.upload_form_handler.progress_meter_comet + params + '&' + Math.random(),
      jsonp: function(progressStatus) {
        if (!isRun) return
        if (!progressStatus.total) return

        if(typeof callback == 'function'){
          callback(progressStatus)
          return
        }
        options.onProgress(progressStatus)
      }
    })
  }

  this.stop = function() {
    isRun = false
  }

  return this
}

UploadModule.ProgressMeterJson = function(options) {
  var isRun = false;

  this.start = function(callback, params) {
    isRun = true;
    function doRequest(){
      $.ajax({
        url:options.dc_path + options.upload_form_handler.progress_meter_json + params + '&' + Math.random(),
        method : "get",
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        success:function(data){
          callback({files: data});
        },
        complete:function(){
          if(isRun) setTimeout(doRequest, 1000);
        }
      })
    }
    doRequest();
  }

  this.stop = function() {
    isRun = false;
  }

  return this
}

UploadModule.HandlerUploadForm = function(options) {

  //region private variables
  var _this = this

  var uploadStarts = false;
  var CORSAviable = (($.browser.msie && Utils.checkCORSAvailable()) || ($.browser.opera && ('withCredentials' in new XMLHttpRequest())));
  var progressMeter = (CORSAviable ? new UploadModule.ProgressMeterJson(options) : new UploadModule.ProgressMeterComet(options));
  var files = []
  var sessionUploadId = Math.random()
  var totalSize = 0
  var totalLoadedPerFile = []
  var form
  var isFileUploaded = false
  var currentUploadFile = null

  var filesForRetryFromScratch = [];

  //endregion

  //region specific pre-load handler code

  //remove multiselect from all file-inputs
  $.each($("input:file"), function(){
    $(this).replaceWith($(this).removeAttr('multiple').clone(true))
  })

  //create fake element for fake forms for upload
  if (!$('#HandlerUploadFormContainer').length) {
    $(document.body).append('<div id="HandlerUploadFormContainer"></div>')
  }
  var uploadQuiveContainer = $('#HandlerUploadFormContainer')

  //create fake element for fake forms for upload
  if (!$('#GetSizeFormsContainer').length) {
    $(document.body).append('<div id="GetSizeFormsContainer"></div>')
  }
  var getSizeFormsContainer = $('#GetSizeFormsContainer')

  //endregion

  //region private specific form methods
  function createFormForUploadInQueve(file, input){

    function frameOnloadCallback(frame){

      if(!currentUploadFile || !currentUploadFile.started ) return;

      var doc = null

      var error = null;

      try {
        doc = $(frame).contents()
      } catch (err) {
        error =  options.uploadErrors.dc_error
      }
      if(doc){
        if($.trim($(doc).text())=="blank"){
          //some bad browsers do onload for empty frame. for prevent this fact we will load special jsp
          return;
        }
        if($('#alert', doc).val()){
          var errorCode = $('#errorCode', doc).val()
          error = options.getErrorByErrorCode(errorCode);
        }else if($('#uploadedFileId', doc).val()){
          currentUploadFile._fileId = $('#uploadedFileId', doc).val()
          currentUploadFile._d1link = $('#fileUploadUrl', doc).val()
          currentUploadFile._previewLink = $('#previewUrl', doc).val()
          currentUploadFile._isUploaded = true;
          isFileUploaded = true
        }
      } else {
        error =  options.uploadErrors.dc_error
      }

      removeFile(currentUploadFile, error);
    }

    function getActionForForm(file){
      if(file._newDcPath)options.dc_path = file._newDcPath;

      var url =  options.dc_path + options.url;

      var action = url+(url.indexOf("?") == -1 ? "?" : "&")+'isForm=true&sessionUploadId='+sessionUploadId+'&fileUploadId='+file._uiFileId
      if(file._uploadDir){
        action += '&x-upload-dir='+file._uploadDir
      }
      if(AjaxFacade.rootDirId) action += '&x-root-dir=' + AjaxFacade.rootDirId
      if(file._updateKeepName){
        action+= '&keepName=' + file._updateKeepName;
      }
      if(file._updateFileId){
        action+= '&updateFileId=' + file._updateFileId;
      }
      return action
    }

    var fileId = file._uiFileId
    var lcForm = form ? form : options.upload_form;
    $(uploadQuiveContainer).append($('<form id="uploadForm_'+fileId+'" class="uploadForm_all"></form>')
        .attr('action', getActionForForm(file))
        .attr('target', 'uploadIFrame_'+fileId)
        .attr('enctype','multipart/form-data')
        .attr('encoding', 'multipart/form-data')
        .attr('method', 'post')
        .append($('input:not(:file)', lcForm).clone(true))
        .append(input).hide())

    $(uploadQuiveContainer).append($('<iframe id="uploadIFrame_'+fileId+'" src="/blankframe.jsp" name="uploadIFrame_'+fileId+'" class="uploadIFrame_all"></iframe>')
        .load(function(){frameOnloadCallback(this)}).hide())
  }

  function getFile(id){
    if(currentUploadFile && currentUploadFile._uiFileId == id)
      return currentUploadFile;
    for(var i in files){
      if(files[i]._uiFileId == id){
        return files[i]
      }
    }
  }

  function getFileFromInput(input){
    var res = null;
    if(input.length && input[0].files && input[0].files[0] && input[0].files[0].size){
      res = input[0].files[0];
    }else {
      res = {};
      var aName = input.val().split("\\")
      res.name = aName[aName.length-1]
    }
    res = UploadModule.addUIFileId([res])[0]
    res._fileInput = input;
    return res;
  }

  function getFileSize(file, input, callback) {
    var lcSesId =  Math.random()

    if(file._newDcPath)options.dc_path = file._newDcPath;

    var url =  (CORSAviable ? options.dc_path : "") + options.upload_form_handler.file_size_url + '?sessionUploadId='+ lcSesId;

    var fileId = file._uiFileId

    $(getSizeFormsContainer).append($('<form id="getSizeForm_'+fileId+'"></form>')
        .attr('action', url)
        .attr('target', 'sizeIFrame_'+fileId)
        .attr('enctype','multipart/form-data')
        .attr('encoding', 'multipart/form-data')
        .attr('method', 'post')
        .append(input).hide())

    $(getSizeFormsContainer).append($('<iframe name="sizeIFrame_'+fileId+'" class="sizeIFrame_all"></iframe>').hide())

    $('#getSizeForm_'+fileId, getSizeFormsContainer).submit()

    $.ajax({

      url:url+'&'+Math.random(),
      method : "get",
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      crossDomain: CORSAviable,
      success:function(data){
        Utils.stopFrame($('#sizeIFrame_'+fileId, getSizeFormsContainer), true)
        $("#getSizeForm_"+fileId).remove();
        if(!data.success){
          onError()
          return
        }
        file.size = data.size
        callback(file, input, null, true);
      },
      error:function(){
        Utils.stopFrame($('#sizeIFrame_'+fileId, getSizeFormsContainer), true)
        $("#getSizeForm_"+fileId).remove();
        onError()
      }
    })

    function onError(){
      var isConnectionIssue = false;
      Utils.checkConnectionAvaliable(function(isConnectionAviable){
        isConnectionIssue = !isConnectionAviable;
      }, true);

      options.onAddFiles([file])

      if(isConnectionIssue){
        filesForRetryFromScratch.push(file);
        options.onFileError(file, options.uploadErrors.connection_error_scratch)
      } else
        options.onFileError(file, options.uploadErrors.file_too_large_for_browser)

      if(!uploadStarts){
        options.onCleanup();
      }
    }
  }
  //endregion

  //region private standart api methods

  function startProgressMeter(){

    progressMeter.start(progressCallback, '?sessionUploadId='+sessionUploadId)

    function progressCallback(progress) {
      if (!progress.files) return
      for (var id in progress.files) {
        var fileInfo = progress.files[id]
        var file = getFile(fileInfo.fileId)
        if (!file) continue
        totalLoadedPerFile[fileInfo.fileId] = fileInfo.uploaded
        var totalLoaded = getLoaded();
        var progressStatus = {
          id:fileInfo.fileId,
          fileLoaded:fileInfo.uploaded,
          fileSize:file.size,
          loaded:totalLoaded,
          total:totalSize
        };
        options.onProgress(progressStatus)
      }
    }

    function getLoaded() {
      var totalLoaded = 0
      for (var id in totalLoadedPerFile) {
        totalLoaded += totalLoadedPerFile[id]
      }
      return totalLoaded
    }
  }

  function startUpload(){
    uploadStarts = true;
    options.onStart()
    startProgressMeter();
    uploadNextFile();
  }

  function uploadNextFile(){
    if(!files.length){
      clear()
    } else {
      currentUploadFile = files.shift();
      UploadModule.currentUploadSessionInfo.addToTotalAndValidateFreeSpace(currentUploadFile,
          function(){
            uploadFile(currentUploadFile)
          },
          function(error){
            removeFile(currentUploadFile, error)
          }
      )
    }
  }

  function uploadFile(file){
    createFormForUploadInQueve(file, file._fileInput);
    $('#uploadForm_'+file._uiFileId, uploadQuiveContainer).submit()
    file.started = true
  }

  function removeFile(file, error){
    for(var i=0; i<files.length; i++){
      if(files[i]==file)files.splice(i,1);
    }

    if(error){
      if(error.errorId == options.uploadErrors.can_not_upload_empty_file.errorId && file.size){
        error = options.uploadErrors.file_was_removed;
      }
      options.onFileError(file, error);
      if(error.needRetry){
        progressMeter.stop();
      }
    }

    if(!file._isUploaded){
      if(!error || !error.needRetry){
        if(file.size) totalSize -= file.size
        delete totalLoadedPerFile[file._uiFileId]
        UploadModule.currentUploadSessionInfo.subtractFromTotal(file);
      }
      if(!error){
        options.onFileCanceled(file);
        file._isCanceled = true;
      }
    } else {
      options.onFileUploaded(file);
    }

    if(currentUploadFile==file){
      $('#uploadForm_'+file._uiFileId+', #uploadIFrame_'+file._uiFileId, uploadQuiveContainer).filter('iframe').attr('src', '').end().remove();
      file.started = false;

      if(!error || !error.needRetry){
        uploadNextFile();
      }
    }

  }

  function clear(){
    uploadStarts = false
    currentUploadFile = null
    files = []
    totalSize = 0
    totalLoadedPerFile = []
    progressMeter.stop()
    $('iframe', uploadQuiveContainer).attr('src','');
    $(uploadQuiveContainer).html('');
    options.onCleanup();
  }

  //endregion

  //region public interface
  this.start = function(vForm) {
    var lcForm = vForm ? vForm : options.upload_form
    if (!$(':file[value!=]', lcForm).length) {
      alert(options.i18n.no_files_selected);
      return false
    }
    $(':file[value!=]', lcForm).each(function(index) {
      _this.add(null, this)
    });
  }

  this.update = function(input) {
    if (!form) form = input.parents('form:first');
    var updateParams = {};
    updateParams._updateKeepName = $('input[name=keepName]', form).val()
    updateParams._updateFileId = $('input[name=updateFileId]', form).val()
    _this.add(null, input, updateParams)
  }

  this.add = function(file, input, updateParams, isSizeCalculated) {

    if(!isSizeCalculated){
      input = $(input);

      if(!file || !file._uiFileId)
        file = getFileFromInput(input);

      $(input).replaceWith($(input).clone(true).val(""));

      if(updateParams){
        $.extend(file, updateParams)
      }

      if(!file.size){
        getFileSize(file, input, _this.add);
        return;
      }
    }

    options.onAddFiles([file])

    if(options.required_extensions && options.required_extensions.length
        && $.inArray(Utils.extractExtension(file.name), options.required_extensions)==-1){
      options.onFileError(file, options.uploadErrors.wrong_file_type)
    } else  if(UploadModule.getFileSize(file) === undefined){
      options.onFileError(file, options.uploadErrors.can_not_get_size)
    }else if(UploadModule.getFileSize(file) == 0){
      options.onFileError(file, options.uploadErrors.can_not_upload_empty_file)
    } else if(!UploadModule.checkSize(file, options)){
      options.onFileError(file, options.uploadErrors.file_too_large)
    } else if(!UploadModule.checkSizeForCPUArch(file)){
      options.onFileError(file, options.uploadErrors.file_too_large_for_browser)
    } else {
      files.push(file)
      totalSize+=file.size;
    }

    if (!uploadStarts)
      startUpload()

  }

  this.cancelFile = function(uiFileId){
    if (!uploadStarts) return
    var file = getFile(uiFileId)
    if(!file) return
    removeFile(file)
  }

  this.cancel = function() {
    if(currentUploadFile) {
      options.onFileCanceled(currentUploadFile);
      currentUploadFile._isCanceled = true;
    }
    for(var i=0; i<files.length; i++){
      if(!files[i]._isUploaded){
        options.onFileCanceled(files[i]);
        files[i]._isCanceled = true;
      }
    }
    clear();
  }

  this.isUploadInProgress = function(){
    return uploadStarts;
  }

  this.retry = function(fileId){
    if(currentUploadFile && currentUploadFile._uiFileId==fileId){
      options.onFileRetry(currentUploadFile)
      UploadModule.getNewUploadUrl(currentUploadFile, function(result){
        if(result){
          options.dc_path = currentUploadFile._newDcPath;
          startProgressMeter();
          uploadFile(currentUploadFile)
        } else {
          removeFile(currentUploadFile, options.uploadErrors.dc_error)
        }
      })
    } else {
      for(var i=0; i<filesForRetryFromScratch.length; i++){
        if(filesForRetryFromScratch[i]._uiFileId==fileId){
          _this.add(filesForRetryFromScratch[i], filesForRetryFromScratch[i]._fileInput);
          filesForRetryFromScratch.splice(i, 1);
          break;
        }
      }

    }
  }

  this.removeFromScratchRetry = function(fileId){
    for(var i=0; i<filesForRetryFromScratch.length; i++){
      if(filesForRetryFromScratch[i]._uiFileId==fileId){
        filesForRetryFromScratch.splice(i, 1);
        break;
      }
    }
  }

  //endregion

  return this
}

UploadModule.HandlerUploadFlash = function(options) {

  //region local variables
  var _self = this;

  var currentFile = null;
  var uploadStarts = false
  var files = []

  var uploadUrl = options.url +  (options.url.indexOf("?") == -1 ? "?" : "&") + 'isFlash=true&rnd=rnd' + UploadModule.getAuthInfo();
  //endregion


  //region specific pre-load handler code
  var uploader = new plupload.Uploader({
    runtimes : 'flash',
    container: 'flashContainer',
    browse_button : 'flashFileSelect',
    max_file_size : Math.floor(options.max_file_size / 1024 / 1024) + 'mb',
    multipart : true,
    multi_selection: true,
    url: uploadUrl,
    flash_swf_url : '/js/plupload/plupload.flash.swf?rnd' + Math.random()
  });

  $('#'+options.flash_select_files_id).wrap($("<div id='flashContainer'></div>").attr('class',$('#'+options.flash_select_files_id).attr('class'))).removeAttr('class');

  uploader.bind('FilesAdded', function(up, files, justUpload) {
    Events.fireEvent('hide.context.menus')

    if(justUpload){
      return;
    }

    _self.add(files.slice(0))
    files.splice(0, files.length);

  });

  uploader.bind('QueueChanged', function(puploader){
    if(uploader.state != plupload.STARTED && puploader.files.length){
      setTimeout(function(){
        uploader.start();
      }, 100);
    }
  })

  uploader.bind("BeforeUpload", function(up, file){

    if(file._newDcPath)options.dc_path = file._newDcPath;

    up.settings.url =  options.dc_path + uploadUrl + "&x-upload-dir=" + file._uploadDir;
  });

  uploader.bind('UploadProgress', function(up, file) {
    var progressStatus = {
      id: file._uiFileId,
      fileLoaded: file.loaded,
      fileSize : file.size
    };
    options.onProgress(progressStatus);
  });

  uploader.bind('FileUploaded', function(up, file, res) {
    var doc = $('<div>' + res.response + '</div>');

    if (doc.find('#uploadedFileId') && doc.find('#uploadedFileId').val()) {
      var sizeOk = doc.find('#sizeOk');
      file._d1link = doc.find('#fileUploadUrl').val()
      file._previewLink = doc.find('#previewUrl', doc).val()
      file._fileId = doc.find("#uploadedFileId").val();
      file._isUploaded = true;
      removeFile(file)
    } else if (doc.find('#alert') && doc.find('#alert').val()) {
      var errorCode = $('#errorCode', doc).val()
      var error = options.getErrorByErrorCode(errorCode)
      error = error || options.uploadErrors.dc_error
      removeFile(file, error)
    }
  });

  uploader.bind('Error', function(up, args) {
    var file =  uploader.files[0];
    if (args.code == -300) {
      removeFile(file, options.uploadErrors.flash_error);
    } else {
      removeFile(file, options.uploadErrors.dc_error);
    }
  })

  uploader.init()
  uploader.refresh()
  //endregion

  //region private standart api methods
  function startUpload() {
    uploadStarts = true
    options.onStart()
    uploadNextFile();
  }

  function uploadNextFile(){
    if(!files.length){
      clear();
    } else {
      currentFile = files.shift();
      UploadModule.currentUploadSessionInfo.addToTotalAndValidateFreeSpace(currentFile,
          function(){
            uploadFile(currentFile)
          },
          function(error){
            removeFile(currentFile, error)
          }
      )
    }
  }

  function removeFile(file, error){
    for(var i=0; i<files.length; i++){
      if(files[i]==file){
        files.splice(i,1);
        break;
      }
    }

    //currently we can not recover in flash, so, we will force No-retry
    if(error && (error.canRecover || error.needRetry)){
      error = $.extend(error, {
        canRecover : false,
        needRetry : false
      })
    }

    if(error){
      if(error.errorId == options.uploadErrors.can_not_upload_empty_file.errorId && file.size){
        error = options.uploadErrors.file_was_removed;
      }
      options.onFileError(file, error);
    }

    if(!file._isUploaded){
      if(!error || !error.needRetry){
        UploadModule.currentUploadSessionInfo.subtractFromTotal(file);
      }
      if(!error){
        options.onFileCanceled(file);
        file._isCanceled = true;
      }
    } else {
      options.onFileUploaded(file);
    }



    if(file==currentFile){
      //clear flash uploader

      if((!error || !error.needRetry)){
        uploader.splice(0, uploader.files.length);
        uploadNextFile();
      }
    }
  }

  function clear(){
    uploadStarts = false
    files = []
    currentFile = null;
    options.onCleanup();
  }

  function uploadFile(file){
    file = [file];
    uploader.trigger('FilesAdded', file, true)
  }

  //endregion

  this.add = function(file) {

    var lcFiles = Utils.convertToPlainArray(file);

    if(!lcFiles.length)return

    UploadModule.addUIFileId(lcFiles)
    options.onAddFiles(lcFiles)

    var tmpFilesArr  = lcFiles;
    lcFiles = [];

    for(var i=0; i<tmpFilesArr.length; i++){

      if(options.required_extensions && options.required_extensions.length
          && $.inArray(Utils.extractExtension(tmpFilesArr[i].name), options.required_extensions)==-1){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.wrong_file_type)
        continue;
      }

      if(UploadModule.getFileSize(tmpFilesArr[i]) == 0){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.can_not_upload_empty_file)
        continue;
      }

      if(!UploadModule.checkSize(tmpFilesArr[i], options)){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.file_too_large)
        continue;
      }

      if(!UploadModule.checkSizeForCPUArch(tmpFilesArr[i])){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.file_too_large_for_browser)
        continue;
      }

      lcFiles.push(tmpFilesArr[i])
    }

    files = files.concat(lcFiles);

    if (!uploadStarts)
      startUpload()
  }

  this.cancelFile = function(fileId){
    if(currentFile && currentFile._uiFileId==fileId  && uploader.state != plupload.STARTED){
      removeFile(currentFile);
      return;
    }

    for(var i=0; i<files.length; i++){
      if(files[i]._uiFileId==fileId){
        removeFile(files[i])
        return;
      }
    }
  }

  this.cancel = function() {
    var lcFiles = files;
    files = [];

    for(var i=0; i<lcFiles.length; i++){
      if(!lcFiles[i]._isUploaded){
        options.onFileCanceled(lcFiles[i]);
        lcFiles[i]._isCanceled = true
      }
    }

    if(currentFile && uploader.state != plupload.STARTED){
      options.onFileCanceled(currentFile);
      currentFile._isCanceled = true
    }

    if(uploader.state != plupload.STARTED){
      clear();
    }

  }

  this.retry = function(fileId){
    if(currentFile && currentFile._uiFileId==fileId){
      options.onFileRetry(currentFile)
      UploadModule.getNewUploadUrl(currentFile, function(result){
        if(result){
          uploader.start();
        } else {
          removeFile(currentFile, options.uploadErrors.dc_error)
        }
      })
    }
  }

  this.isUploadInProgress = function(){
    return uploadStarts;
  }
}

UploadModule.HandlerUploadXhr = function(options) {

  //region private variables
  var _self = this;

  var xhr
  var uploadStarts = false
  var files = []
  var totalSize = 0
  var totalLoaded = 0
  var currentLoaded = 0
  var currentFile = null
  var url = options.url.replace('upload.jsp', 'upload5.jsp')
  //endregion

  //region preload code for handler
  if ($.browser.safari) {
    $.each($("input:file"), function(){
      $(this).replaceWith($(this).removeAttr('multiple').clone(true))
    })
  }

  // Patch for Chrome
  if (XMLHttpRequest && !('sendAsBinary' in XMLHttpRequest.prototype)) {
    XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
      var data = new ArrayBuffer(datastr.length)
      var ui8a = new Uint8Array(data, 0)
      for (var i = 0; i < datastr.length; i++) {
        ui8a[i] = (datastr.charCodeAt(i) & 0xff)
      }
      this.send(data)
    }
  }
  //endregion

  //region private specific XHR upload methods
  function getFile(id){
    if(currentFile && currentFile._uiFileId == id){
      return currentFile;
    }
    for(var i in files){
      if(files[i]._uiFileId == id){
        return files[i]
      }
    }
  }

  function uploadFile(file) {

    xhr = new XMLHttpRequest()
    xhr._currentFile = file
    xhr.upload.onprogress = onProgress
    xhr.onreadystatechange = onReadyStateChange

    var keepName = file._updateKeepName;
    var updateFileId = file._updateFileId;

    if(file._newDcPath)options.dc_path = file._newDcPath;

    var lcUrl =  options.dc_path + url + (url.indexOf("?") == -1 ? "?" : "&")+"isAjax=true&sendHttpStatus=true";

    lcUrl+=UploadModule.getAuthInfo();

    xhr.open('POST', lcUrl + '&keepName=' + keepName +
        (file._data ? '&base64' : '') +
        (file._data ? '&content-length=' + file._data.length : '') +
        (updateFileId ? '&updateFileId=' + updateFileId : ''), true)
    if (file._uploadDir)
      xhr.setRequestHeader('x-upload-dir', file._uploadDir)
    xhr.setRequestHeader('x-root-dir', AjaxFacade.rootDirId)
    xhr.setRequestHeader('x-file-name', encodeURIComponent(file.fileName ? file.fileName : file.name))
    xhr.setRequestHeader('Content-Type', 'application/octet-stream')

    if (file._data)
      xhr.sendAsBinary(file._data)
    else
      xhr.send(file)

    function onProgress(e) {
      if (!uploadStarts) return
      if (!e.lengthComputable) return

      currentLoaded = e.loaded

      var progressStatus = {
        id: xhr._currentFile._uiFileId,
        fileLoaded: e.loaded,
        fileSize: UploadModule.getFileSize(xhr._currentFile),
        loaded: (totalLoaded + e.loaded),
        total: totalSize
      };
      options.onProgress(progressStatus)
    }

    function onXhrError(e) {

      var file = xhr._currentFile;

      var error = null;
      if(xhr.status==0){
        error = options.uploadErrors.connection_error;
      } else if(xhr.responseText){
        var response = null;
        try{
          response = $.parseJSON(xhr.responseText)
        } catch(e){}
        if(response){
          var errorCode = response.errorCode;
          if(errorCode){
            error = options.getErrorByErrorCode(errorCode);
          }
        }
      }

      if(!error){
        error = options.uploadErrors.dc_error;
      }

      removeFile(file, error);
    }

    function onReadyStateChange(e) {

      //request was canceled
      if(!xhr) return;

      var file = xhr._currentFile;
      if(!uploadStarts || file._isUploaded || file._isCanceled)return

      var isError = false;
      //4 - it mean that request is DONE
      if (xhr.readyState == 4) {
        if(xhr.status == 200){
          var response = null;
          try{
            response = $.parseJSON(xhr.responseText)
          } catch (e){}
          if(response && response.status == 'OK'){
            xhr._currentFile._fileId = response.uploadedFileId
            xhr._currentFile._d1link = response.fileUploadUrl
            xhr._currentFile._previewLink = response.previewUrl
            totalLoaded += xhr._currentFile.size;
            xhr._currentFile._isUploaded = true;
            removeFile(xhr._currentFile)
          } else {
            isError = true;
          }
        } else {
          isError = true;
        }
      }

      if(isError){
        onXhrError(e)
      }
    }
  }
  //endregion

  //region private standart api methods
  function startUpload() {
    uploadStarts = true
    totalLoaded = 0
    currentLoaded = 0
    options.onStart()
    uploadNextFile();
  }

  function uploadNextFile(){
    if(!files.length){
      clear();
    } else {
      currentFile = files.shift();
      UploadModule.currentUploadSessionInfo.addToTotalAndValidateFreeSpace(currentFile,
          function(){
            uploadFile(currentFile)
          },
          function(error){
            removeFile(currentFile, error)
          }
      )
    }
  }

  function removeFile(file, error){
    for(var i=0; i<files.length; i++){
      if(files[i]==file){
        files.splice(i,1);
        break;
      }
    }

    if(error){
      if(error.errorId == options.uploadErrors.can_not_upload_empty_file.errorId && file.size){
        error = options.uploadErrors.file_was_removed;
      }
      options.onFileError(file, error);
    }

    if(!file._isUploaded){
      if(!error || !error.needRetry){
        totalSize-=UploadModule.getFileSize(file);
        UploadModule.currentUploadSessionInfo.subtractFromTotal(file);
      }
      if(!error){
        options.onFileCanceled(file);
        file._isCanceled = true;
      }
    } else {

      options.onProgress({
        id: file._uiFileId,
        fileLoaded: UploadModule.getFileSize(file),
        fileSize: UploadModule.getFileSize(file),
        loaded: totalLoaded,
        total: totalSize
      });

      options.onFileUploaded(file);
    }

    if(file==currentFile){
      if(xhr && xhr.readyState!=4){
        xhr.abort();
      }
      if(!error || !error.needRetry){
        uploadNextFile();
      }
    }
  }

  function clear(){
    uploadStarts = false
    if (xhr) {
      xhr.abort()
      xhr = null;
    }
    files = []
    totalSize = 0
    totalLoaded = 0
    currentLoaded = 0
    currentFile = null;
    options.onCleanup();
  }
  //endregion

  //region public interface
  this.start = function() {
    var lcFiles = [];

    if (!$(':file[value!=]', options.upload_form).length) {
      alert(options.i18n.no_files_selected);
      return false
    }
    $('input[type=file]', options.upload_form).each(function() {
      for (var i = 0; i < this.files.length; i++) {
        lcFiles.push(this.files[i]);
        Utils.clearInput(this);
      }
    })
    _self.add(lcFiles);
  }

  this.add = function(file, input) {

    Utils.clearInput(input);

    var lcFiles = Utils.convertToPlainArray(file);

    lcFiles = UploadModule.removeFoldersByDotInName(lcFiles);


    UploadModule.addUIFileId(lcFiles)
    options.onAddFiles(lcFiles)

    if(!lcFiles.length)return;

    var tmpFilesArr  = lcFiles;
    lcFiles = [];

    for(var i=0; i<tmpFilesArr.length; i++){

      if(options.required_extensions && options.required_extensions.length
          && $.inArray(Utils.extractExtension(tmpFilesArr[i].name), options.required_extensions)==-1){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.wrong_file_type)
        continue;
      }

      if(UploadModule.getFileSize(tmpFilesArr[i]) === undefined){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.can_not_get_size)
        continue;
      }

      if(UploadModule.getFileSize(tmpFilesArr[i]) == 0){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.can_not_upload_empty_file)
        continue;
      }

      if(!UploadModule.checkSize(tmpFilesArr[i], options)){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.file_too_large)
        continue;
      }

      if(!UploadModule.checkSizeForCPUArch(tmpFilesArr[i])){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.file_too_large_for_browser)
        continue;
      }

      lcFiles.push(tmpFilesArr[i])
    }

    var filesSize = UploadModule.getFilesSize(lcFiles)

    files = files.concat(lcFiles);

    if (!uploadStarts) {
      totalSize=filesSize;
      startUpload()
    } else {
      totalSize+=filesSize;
    }
  }

  this.update = function(input) {
    var form = input.parents('form:first')
    var file = input[0].files[0]

    file._updateKeepName = $('input[name=keepName]', form).val()
    file._updateFileId = $('input[name=updateFileId]', form).val()

    _self.add(file);
  }

  this.cancelFile = function(fileId){
    if (!uploadStarts) return
    var file = getFile(fileId)
    if(!file) return
    removeFile(file)
  }

  this.cancel = function() {
    if(currentFile) {
      options.onFileCanceled(currentFile);
      currentFile._isCanceled = true
    }
    for(var i=0; i<files.length; i++){
      if(!files[i]._isUploaded){
        options.onFileCanceled(files[i]);
        files[i]._isCanceled = true
      }
    }
    clear();
  }

  this.retry = function(fileId){
    if(currentFile && currentFile._uiFileId==fileId){
      options.onFileRetry(currentFile)
      UploadModule.getNewUploadUrl(currentFile, function(result){
        if(result){
          uploadFile(currentFile)
        } else {
          removeFile(currentFile, options.uploadErrors.dc_error)
        }
      })
    }
  }

  this.removeFromScratchRetry = function(fileId){
  }

  this.isUploadInProgress = function(){
    return uploadStarts;
  }
  //endregion

  return this
}

UploadModule.HandlerUploadResumable = function(options) {

  //region private variables
  var _self = this

  var url = options.url.replace('upload.jsp', 'upload5.jsp')

  var currentFile = null;
  var xhr = null;
  var files = []
  var filesForRetryFromScratch = [];

  var uploadStarts = false
  var totalLoaded = 0
  var totalSize = 0

  //endregion

  //region preload code for handler
  options = $.extend(true, {
    resumable: {
      section_size: 500 * 1024,
      user_agents: 'chrome,firefox'
    },
    onResumableFileConfirm : function (file, callback){
      callback({
        resumeUpload: true,
        all: true
      })
    }
  }, options)
  //endregion

  //region private specific Resumable upload methods

  /**
   * Get file by UI File Id
   *
   * @param uiFileId
   * @return {*}
   */
  function getFile(id){
    if(currentFile && currentFile._uiFileId == id)
      return currentFile;
    for(var i in files){
      if(files[i]._uiFileId == id){
        return files[i]
      }
    }
  }

  /**
   * Upload File Using resumable
   *
   * @param file
   */
  function uploadFile(file) {

    if(!file._fileId && !file._updateFileId){
      createNewResumableFileOnServer(file);
    } else {
      sendNextSection(file);
    }

    /**
     * Create empty entry on server for new file
     *
     * @param file
     */
    function createNewResumableFileOnServer(file) {

      $.ajax({
        type: 'post',
        url: '/rest/sharedFileUpload/create?dirId=' + file._uploadDir + '&name=' + encodeURIComponent(file.fileName ? file.fileName : file.name) + '&size=' + file.size,
        success: function(data) {
          if (!data.status) {
            removeFile(file, options.uploadErrors.dc_error)
            return
          }

          file._url = data.url
          file._fileId = data.fileId
          file._d1link = data.d1link
          file._previewLink = data.previewUrl

          sendNextSection(file);
        },
        error: function() {
          removeFile(file, options.uploadErrors.dc_error)
        }
      })
    }


    /**
     * Send next section for file
     *
     * @param file
     */
    function sendNextSection(file){

      if(file!=currentFile){
        return;
      }

      var section = createNextSection(file)
      if(!section.length){
        currentFile._isUploaded = true;
        totalLoaded+=UploadModule.getFileSize(file);
        removeFile(currentFile)
      } else {
        sendSection(file, section)
      }

      /**
       * Calculate next section to send
       *
       * @param file
       * @return {Object}
       */
      function createNextSection(file) {
        //for update we need send whole file
        var sectionSize = file._updateFileId ? file.size : options.resumable.section_size;

        var start = null;
        var length = 0;

        if (!file._sections || !file._sections.length) {
          file._sections = []
          start = 0
        } else {
          var prev = file._sections[0]
          if (prev.start > 0) {
            // Пропущена первая секция
            start = 0
            length = prev.start
          } else {
            for (var i = 1; i < file._sections.length; i++) {
              if (prev.start + prev.length < file._sections[i].start) {
                start = prev.start + prev.length
                length = file._sections[i].start - (prev.start + prev.length)
                break
              }

              prev = file._sections[i]
            }
          }

          if (start == null)
            start = prev.start + prev.length
        }

        if (!length)
          length = Math.min(file.size - start, sectionSize)
        else
          length = Math.min(length, sectionSize);

        var section = {start: start, length: length}
        file._sections.push(section)

        return section
      }

      /**
       * Send section to server
       *
       * @param file
       * @param section
       */
      function sendSection(file, section) {

        xhr = new XMLHttpRequest()
        xhr._currentFile = file;
        xhr._currentLoaded = 0

        xhr.upload.onprogress = function(e) {

          //request was canceled  or completed
          if(!xhr) return;

          if (!e.lengthComputable) return

          file._loaded += e.loaded - xhr._currentLoaded
          xhr._currentLoaded = e.loaded

          var progressStatus = {
            fileId: file._fileId,
            id: file._uiFileId,
            fileLoaded: file._loaded,
            fileSize: file.size,
            loaded: totalLoaded + file._loaded,
            total: totalSize,
            file : file
          }
          options.onProgress(progressStatus)
        };

        xhr.onreadystatechange = function(e) {

          //request was canceled  or completed
          if(!xhr) return;

          if(!uploadStarts || file._isUploaded || file._isCanceled)return

          //4 - it mean that request is DONE
          if (xhr.readyState == 4) {
            var isError = false;
            if(xhr.status == 200){
              var response = null;
              try{
                response = $.parseJSON(xhr.responseText)
              } catch (exception){}
              if(response && response.status == 'OK'){
                sendNextSection(file)
              } else {
                isError = true
              }
            } else {
              isError = true;
            }

            if(isError){
              xhrOnError(e);
            }
          }
        };

        function xhrOnError(e) {

          if(!uploadStarts || file._isUploaded)return

          var error = null;
          if(xhr.status==0){
            error = options.uploadErrors.connection_error;
          } else if(xhr.responseText){
            var response = null;
            try{
              response = $.parseJSON(xhr.responseText)
            } catch(e){}
            if(response){
              var errorCode = response.errorCode;
              if(errorCode){
                error = options.getErrorByErrorCode(errorCode);
              }
            }
          }

          if(!error){
            error = options.uploadErrors.dc_error;
          }

          removeFile(file, error);
        }

        if(file._newDcPath)options.dc_path = file._newDcPath;

        var lcUrl =  options.dc_path + url + (url.indexOf("?") == -1 ? "?" : "&") + "sendHttpStatus=true"+UploadModule.getAuthInfo();

        var keepName = file._updateKeepName;
        var updateFileId = file._updateFileId;

        file._blobToSend = file.slice(section.start, section.length)

        xhr.open('POST', lcUrl +  (updateFileId ? ('&updateFileId=' + updateFileId + '&keepName=' + keepName)
            : '&resumableFileId=' + file._fileId + '&resumableFirstByte=' + section.start + '&sectionSize='+section.length), true)
        if (file._uploadDir)
          xhr.setRequestHeader('x-upload-dir', file._uploadDir)
        xhr.setRequestHeader('x-root-dir', AjaxFacade.rootDirId)
        xhr.setRequestHeader('x-file-name', encodeURIComponent(file.fileName ? file.fileName : file.name))
        xhr.setRequestHeader('Content-Type', 'application/octet-stream')
        xhr.send(file._blobToSend)
      }
    }
  }

  /**
   * Check that file is in current process
   *
   * @param file
   * @return {Boolean}
   */
  function isFileAllreadyInProcess(file){
    if(currentFile && currentFile.name==file.name && file.size == currentFile.size)return true
    for(var i=0; i<files.length; i++ ){
      if(files[i].name==file.name && file.size == files[i].size)return true
    }
    return false;
  }

  function pushForScratchRetry(files){
    for(var i=0; i<files.length; i++){
      options.onFileError(files[i], options.uploadErrors.main_server_error)
      filesForRetryFromScratch.push(files[i]);
    }
    if(!uploadStarts){
      options.onCleanup();
    }
  }

  /**
   * Check existing files on server, and remove it from file array
   *
   * @param files
   * @param callback
   * @return {*}
   */
  function checkExistingFiles(files, callback){

    var forSkipFiles = getFilesMarkedForSkip(files)
    if(!forSkipFiles.length) return callback()
    checkExistingOnServer(forSkipFiles, callback)

    function checkExistingOnServer(forSkipFiles, callback){

      var requestData = fillDataForRequest(forSkipFiles)

      $.ajax({
        type: 'post',
        url: '/rest/sharedFileUpload/checkExist',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('x-root-dir', AjaxFacade.rootDirId)
        },
        contentType: 'application/json;',
        data : JSON.stringify(requestData),
        success: function(responseData) {
          for(var uiFileId in responseData){
            if(responseData[uiFileId]){
              for(var i=0; i<files.length; i++){
                if(uiFileId==files[i]._uiFileId){
                  options.onFileCanceled(files[i])
                  files.splice(i, 1);
                  break;
                }
              }
            }
          }
          callback();
        },
        error: function() {
          pushForScratchRetry(files);
        }
      })

      function fillDataForRequest(forSkipFiles){
        var requestData = []
        for(var i=0; i<forSkipFiles.length; i++){
          requestData.push({uploadDirId : forSkipFiles[i]._uploadDir,
            fileName : UploadModule.getFileName(forSkipFiles[i]),
            fileSize : UploadModule.getFileSize(forSkipFiles[i]),
            uiId : forSkipFiles[i]._uiFileId})
        }
        return requestData;
      }
    }


    function getFilesMarkedForSkip(files){
      var res = [];
      for(var i=0; i<files.length; i++){
        if(files[i]._skipExisting){
          res.push(files[i]);
        }
      }
      return res;
    }
  }

  /**
   * Get and proceed incompleted file info from server
   *
   * @param files
   * @param opt
   * @param callback
   */
  function checkNotYetUploaded(files, opt, callback) {

    if(opt.forceNew){
      callback()
    } else {
      var folderServerIds = Utils.getFilesAndFolderIds(files).folderIdsArr;

      $.ajax({
        type: 'post',
        url: '/rest/sharedFileUpload/status',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('x-root-dir', AjaxFacade.rootDirId)
        },
        contentType: 'application/json; charset=utf-8',
        data : JSON.stringify(folderServerIds),
        success: function(incompletedInfo) {
          processIncompletedInfo(incompletedInfo, files, [])
        },
        error: function() {
            pushForScratchRetry(files);
        }
      })
    }

    function compareFileData(file, data) {
      return file.name == data.name && file.size == data.size && (!file._fileId || file._fileId == data.id)
    }

    function haveSections(file, data){
      for (var j in data) {
        if (compareFileData(file, data[j])){
          if(data[j].sections && data[j].sections[0]){
            return true;
          }
        }
      }
    }

    function setSections(file, data) {

      for (var j in data) {
        if (compareFileData(file, data[j])){
          file._url = data[j].url
          file._fileId = data[j].id
          file._d1link = data[j].d1link
          file._previewLink = data[j].previewUrl
          file._uploadDir = data[j].uploadDir
          file._sections = []

          var sections = data[j].sections
          for (var i in sections) {
            file._sections.push({start: parseInt(i), length: sections[i]})
            file._loaded += sections[i]
          }
          break;
        }
      }
    }

    function processIncompletedInfo(incompletedInfo, filesToProceed, proceededFiles){

      if (filesToProceed.length) {
        var currentFile = filesToProceed.pop();

        if (isFileAllreadyInProcess(currentFile)) {
          if (!opt.forceResume) {
            proceededFiles.push(currentFile);
          } else {
            options.onFileCanceled(currentFile);
          }
          processIncompletedInfo(incompletedInfo, filesToProceed, proceededFiles)
          return;
        }

        if (opt.forceNew || !haveSections(currentFile, incompletedInfo)) {
          proceededFiles.push(currentFile);
          processIncompletedInfo(incompletedInfo, filesToProceed, proceededFiles)
        }else if (opt.forceResume) {
          setSections(currentFile, incompletedInfo)
          proceededFiles.push(currentFile);
          processIncompletedInfo(incompletedInfo, filesToProceed, proceededFiles)
        } else {
          options.onResumableFileConfirm(currentFile, function (userAnswer) {
            if (userAnswer) {
              proceededFiles.push(currentFile);
              if (userAnswer.resumeUpload) {
                setSections(currentFile, incompletedInfo)
                if (userAnswer.all)opt.forceResume = true;
              } else {
                if (userAnswer.all)opt.forceNew = true;
              }
            }else {
              options.onFileCanceled(currentFile);
            }
            processIncompletedInfo(incompletedInfo, filesToProceed, proceededFiles)
          })
        }
      } else {
        while(proceededFiles.length){
          files.push(proceededFiles.pop());
        }
        callback()
      }

    }
  }

  //endregion

  //region private standart api methods

  /**
   * Base function for start upload
   */
  function startUpload() {
    uploadStarts = true
    options.onStart()
    totalLoaded = 0
    uploadNextFile();
  }

  /**
   * Start upload next file from queue
   */
  function uploadNextFile(){
    if(!files.length){
      clear();
    } else {
      currentFile = files.shift();
      UploadModule.currentUploadSessionInfo.addToTotalAndValidateFreeSpace(currentFile,
          function(){
            uploadFile(currentFile)
          },
          function(error){
            removeFile(currentFile, error)
          }
      )
    }
  }

  /**
   * Cleanup file(can handle cleanup on Error, Complete, Cancel)
   *
   * @param file
   * @param error
   */
  function removeFile(file, error){
    for(var i=0; i<files.length; i++){
      if(files[i]==file)files.splice(i,1);
    }

    if(error){
      if(error.errorId == options.uploadErrors.can_not_upload_empty_file.errorId && file.size){
        error = options.uploadErrors.file_was_removed;
      }
      options.onFileError(file, error);
    }

    if(!file._isUploaded){
      // clear sections
      file._sections = [];
      file._loaded = 0
      if(!error || !error.needRetry){
        totalSize-=UploadModule.getFileSize(file);
        UploadModule.currentUploadSessionInfo.subtractFromTotal(file);
        if(error && error.canRecover){
          filesForRetryFromScratch.push(file);
        }
      }
      if(!error){
        options.onFileCanceled(file);
        file._isCanceled = true;
      }
    } else {

      options.onProgress({
        id: file._uiFileId,
        fileLoaded: UploadModule.getFileSize(file),
        fileSize: UploadModule.getFileSize(file),
        loaded: totalLoaded,
        total: totalSize
      });

      options.onFileUploaded(file);
    }

    if(file==currentFile){
      if(xhr && xhr._currentFile && xhr._currentFile==file){
        xhr.abort();
        xhr=null;
      }
      if(!error || !error.needRetry){
        uploadNextFile();
      }
    }
  }

  /**
   *
   * Stop and clear upload
   */
  function clear(){
    uploadStarts = false
    if (xhr) xhr.abort()
    xhr = null;
    currentFile = null;
    files = []
    totalSize = 0
    totalLoaded = 0
    options.onCleanup();
  }
  //endregion

  /**
   * For compatible with old upload API
   */
  this.start = function() {

  }

  /**
   * Update file on server
   *
   * @param input
   */
  this.update = function(input) {
    var form = input.parents('form:first')
    var file = input[0].files[0]

    file._updateKeepName = $('input[name=keepName]', form).val()
    file._updateFileId = file._fileId = $('input[name=updateFileId]', form).val()

    _self.add(file, input, {forceNew : true});
  }

  /**
   * Add file in queue, when upload is not started - start upload
   *
   * @param file
   * @param input
   * @param opt
   */
  this.add = function(file, input, opt) {

    opt = $.extend({
      forceResume: false,
      forceNew: false,
      checkFolderExists : true,
      isScratchRetry : false
    }, opt)

    Utils.clearInput(input);

    var lcFiles = Utils.convertToPlainArray(file);

    var folderHir = UploadModule.parseFolderHierarchy(lcFiles);
    if(folderHir.length){
      UploadModule.createFolderHierarchy({
        currentFolder : UploadModule.getCurrentDirIdForUpload(),
        hierarchy : folderHir,
        files : lcFiles,
        successCallback : function(){
          _self.add(lcFiles, input, opt);
        },
        errorCallback : options.onFoldersCreationError,
        onFoldersCreated : options.onFoldersCreated,
        checkFolderExists : opt.checkFolderExists
      });
      return;
    }

    lcFiles = UploadModule.removeFoldersByDotInName(lcFiles);

    UploadModule.addUIFileId(lcFiles)

    options.onAddFiles(lcFiles)

    if(!lcFiles.length)return;

    var tmpFilesArr  = lcFiles;
    lcFiles = [];
    for(var i=0; i<tmpFilesArr.length; i++){



      if(options.required_extensions && options.required_extensions.length
          && $.inArray(Utils.extractExtension(tmpFilesArr[i].name), options.required_extensions)==-1){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.wrong_file_type)
        continue;
      }

      if(UploadModule.getFileSize(tmpFilesArr[i]) === undefined){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.can_not_get_size)
        continue;
      }

      if(UploadModule.getFileSize(tmpFilesArr[i]) == 0){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.can_not_upload_empty_file)
        continue;
      }

      if(!UploadModule.checkSize(tmpFilesArr[i], options)){
        options.onFileError(tmpFilesArr[i], options.uploadErrors.file_too_large)
        continue;
      }

      lcFiles.push(tmpFilesArr[i])
    }

    checkExistingFiles(lcFiles, function(){
      checkNotYetUploaded(lcFiles, opt, function() {

          totalSize+= UploadModule.getFilesSize(lcFiles)
          files = files.concat(lcFiles);

          if (!uploadStarts)
            startUpload()

      })
    })
  }

  /**
   * Cancel file by file ID
   *
   * @param fileId
   */
  this.cancelFile = function(fileId){
    if (!uploadStarts) return
    var file = getFile(fileId)
    if(!file) return
    removeFile(file)
  }

  /**
   *
   * Cancell Upload
   */
  this.cancel = function() {
    if(currentFile) {
      options.onFileCanceled(currentFile);
      currentFile._isCanceled = true;
    }

    for(var i=0; i<files.length; i++){
      if(!files[i]._isUploaded){
        options.onFileCanceled(files[i]);
        files[i]._isCanceled = true;
      }
    }
    clear();
  }

  this.removeFromScratchRetry = function(fileId){
    for(var i=0; i<filesForRetryFromScratch.length; i++){
      if(filesForRetryFromScratch[i]._uiFileId==fileId){
        filesForRetryFromScratch.splice(i, 1);
        break;
      }
    }
  }

  this.retry = function(fileId){
    if(currentFile && currentFile._uiFileId==fileId){
      options.onFileRetry(currentFile)
      UploadModule.getNewUploadUrl(currentFile, function(result){
        if(result){
          uploadFile(currentFile)

        } else {
          removeFile(currentFile, options.uploadErrors.dc_error)
        }
      })
    } else {
      var fileForScratchRetry = null;
      for(var i=0; i<filesForRetryFromScratch.length; i++){
        if(filesForRetryFromScratch[i]._uiFileId==fileId){
          fileForScratchRetry = filesForRetryFromScratch[i];
          filesForRetryFromScratch.splice(i,1);
          break;
        }
      }
      if(fileForScratchRetry){
        _self.add(fileForScratchRetry)
      }
    }
  }

  /**
   * Is file in process????
   *
   * @param file
   * @return {Boolean}
   */
  this.checkFile = function(file) {
    return isFileAllreadyInProcess(file);
  }

  this.isUploadInProgress = function(){
    return uploadStarts;
  }
  //endregion

  return this
}

UploadModule.getUploadHandler = function(options) {
  //:TODO KILL IT
  //return UploadModule.HandlerUploadXhr
  //return UploadModule.HandlerUploadForm

  $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
  if ($.browser.chrome) {
    $.browser.safari = false
  }
  //return UploadModule.HandlerUploadXhr

  //for all versions form upload, cause opera have issues with progress bar on https
  if($.browser.opera){
    return UploadModule.HandlerUploadForm;
  }

  if ($.browser.safari) {
    var userAgent = navigator.userAgent.toLowerCase()
    userAgent = userAgent.substring(userAgent.indexOf('version/') + 8)
    userAgent = userAgent.split(' ')[0]
    userAgent = userAgent.substring(0, userAgent.indexOf('.'))
    $.browser.version = userAgent

    if ($.browser.version < 5) {
      return UploadModule.HandlerUploadForm
    }
  }

  if (!!('multiple' in document.createElement('input')) && UploadModule.FileSupported() && UploadModule.XhrUploadSupported()) {

    File.prototype.slice =  File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

    if(File.prototype.slice){
      File.prototype.slice = UploadModule.blobSliceCrossBrowserFixDecorator(File.prototype.slice)
    }

    if (File.prototype.slice && (($.browser.mozilla && options.resumable.user_agents.indexOf('firefox') >= 0) || ($.browser.chrome && options.resumable.user_agents.indexOf('chrome') >= 0)))
      return UploadModule.HandlerUploadResumable
    else
      return UploadModule.HandlerUploadXhr
  } else
    return UploadModule.HandlerUploadForm
}

UploadModule.blobSliceCrossBrowserFixDecorator = function(func){
  return function(){
    var startByte = arguments[0];
    var length = arguments[1];
    var blobChunk = func.call(this, startByte, startByte+length)
    if(!blobChunk.size){
      if(this.size && startByte<this.size && length>0){
        blobChunk  = func.apply(this, arguments);
      }
    }
    return blobChunk;
  }
}

UploadModule.getAnonUploadHandler = function() {
  $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
  if ($.browser.chrome) {
    $.browser.safari = false
  }

  //for all versions form upload, cause opera have issues with progress bar on https
  if($.browser.opera){
    return UploadModule.HandlerUploadForm;
  }

  if ($.browser.safari) {
    var userAgent = navigator.userAgent.toLowerCase()
    userAgent = userAgent.substring(userAgent.indexOf('version/') + 8)
    userAgent = userAgent.split(' ')[0]
    userAgent = userAgent.substring(0, userAgent.indexOf('.'))
    $.browser.version = userAgent

    if ($.browser.version < 5) {
      return UploadModule.HandlerUploadForm
    }
  }

  if (!!('multiple' in document.createElement('input')) && UploadModule.FileSupported() && UploadModule.XhrUploadSupported()) {
    return UploadModule.HandlerUploadXhr
  } else
    return UploadModule.HandlerUploadForm
}


function UploadSessionInfo(options){

  var freeSpace = 0;
  var totalSize = 0;

  function getFreeSpace(file, successCallback, errorCallback) {

    if(!freeSpace){

      var dirId = file._uploadDir;

      // Anon upload
      if (!dirId) {
        freeSpace =  10 * 1024 * 1024 * 1024;
        successCallback()
        return;
      }

      dirId = dirId ? dirId : -1;

      $.ajax({
        type: 'get',
        url: '/rest/account/freeSpace?dirId=' + dirId,
        success: function(data) {
          freeSpace = data.freeSpace;
          successCallback()
        },
        error: function() {
          errorCallback(options.uploadErrors.dc_error)
        }
      })

    } else {
      successCallback()
    }
  }

  this.addToTotalAndValidateFreeSpace = function(file, onValid, onInvalid){

    totalSize += UploadModule.getFileSize(file);

    getFreeSpace(file, function(){
      if(freeSpace-totalSize>=0){
        onValid();
      } else {
        onInvalid(options.uploadErrors.not_enough_free_space);
      }
    }, function(error){
      //on error
      onInvalid(error);
    })
  }

  this.subtractFromTotal = function(file){
    totalSize-=UploadModule.getFileSize(file);
    totalSize = totalSize>0 ? totalSize :0
  }
}

function UploadModule(options) {

  var self = this;

  options.onCleanup = onCleanupDecorator(options.onCleanup);
  options.onFileError =  checkConnectionOnErrorDecorator(options.onFileError);

  options = $.extend(true, {

    upload_form: null,
    url: '/main/upload.jsp',

    progress_meter_url: null,

    // The maximum allowed file size
    max_file_size: 0,

    required_extensions : null,

    check_close : true,


    upload_form_handler:{
      file_size_url: '/rest/file/size',
      progress_meter_comet: '/servlet/ProgressStatus2',
      progress_meter_json: '/rest/file/progress'
    },

    onStart: function() { },
    onProgress: function(progressStatus) { },
    onError: function(error) { },
    onComplete: function() { },
    onConfirm: function(message) { return true },
    onCleanup: function() { },
    onFoldersCreated : function(){},

    onAddFiles: function(files) { },
    onFileUploaded: function(file) { },
    onFileCanceled: function(file){ },
    onFileError: function(file, error){ },
    onFileRetry : function(file){},

    i18n: {
      // Message shown when the file size exceeds maximum allowed file size
      file_size_exceeded: '',
      some_files_size_exceeded: '',
      no_files_selected: 'No files selected',
      resume_upload: 'Some files are in incomplete state. Continue upload ?',
      your_browser_not_supported: 'Your browser does not support the upload of large files',
      you_can_resume_upload: 'Your transfer have been canceled. You can resume the upload with the current percentage',
      you_cannot_upload: 'You cannot upload these files with current browser. Please try desktop version.',
      you_cannot_upload_flash: 'Multiupload failed. Try uploading via 4shared Desktop.',
      want_change_dc: 'The server is unavailable. Do you want to start upload to another server ? All uploaded data information will be lost.',
      not_enough_free_space : 'Not Enough Free Space',
      can_not_upload_empty_file : "File is empty or can't be found.",
      dc_error : "Unknown server error",
      connection_error : "Connection problem",
      file_uploading_from_another_place : "File upload has already been resumed from another browser.",
      file_was_removed : "File is empty or can't be found.",
      can_not_get_size : "Not able to get size",
      incompleted_was_deleted : "File was removed from server.",
      wrong_file_type : "Wrong file type.",
      pending_upload_page_close : "Your upload may be incomplete if you leave this page."
    }
  }, options);

  options.i18n.file_size_exceeded = options.i18n.file_size_exceeded.replace(/\[maxFileSize\]/, Utils.readablizeBytes(options.max_file_size, true))

  options.uploadErrors = {

    file_too_large                    : {errorId : 1,  canPremiumHelp  : true,   message : options.i18n.file_size_exceeded,  serverErrCode : 1},
    file_too_large_for_browser        : {errorId : 2,  message : options.i18n.your_browser_not_supported},
    not_enough_free_space             : {errorId : 3,  canPremiumHelp  : true,   message : options.i18n.not_enough_free_space, serverErrCode : 2},
    can_not_upload_empty_file         : {errorId : 4,  message : options.i18n.can_not_upload_empty_file, serverErrCode : 3},
    file_uploading_from_another_place : {errorId : 5,  canRecover : true, message : options.i18n.file_uploading_from_another_place, serverErrCode: 5},
    file_was_removed                  : {errorId : 6,  message: options.i18n.file_was_removed},
    incompleted_was_deleted           : {errorId : 7,  message : options.i18n.incompleted_was_deleted, serverErrCode: 6},

    dc_error                          : {errorId : 8,  canRecover : true,   needRetry : true, message : options.i18n.dc_error,  serverErrCode : 4},
    main_server_error                 : {errorId : 9,  canRecover : true,   message : options.i18n.dc_error},
    can_not_get_size                  : {errorId : 10, message : options.i18n.can_not_get_size},
    flash_error                       : {errorId : 11, message : options.i18n.you_cannot_upload_flash},

    connection_error                  : {errorId : 12, canRecover : true,   needRetry : true, message : options.i18n.connection_error},
    connection_error_scratch          : {errorId : 13, canRecover : true,   message : options.i18n.connection_error},
    connection_error_norecover        : {errorId : 14, message : options.i18n.connection_error},

    wrong_file_type                   : {errorId : 15, message : options.i18n.wrong_file_type, serverErrCode: 7}
  }

  options.getErrorByErrorCode = function(errorCode){
    for(i in options.uploadErrors){
      if(options.uploadErrors[i].serverErrCode==errorCode){
        return options.uploadErrors[i];
      }
    }
  }

  var handler = (options.uploadHandler) ? new options.uploadHandler(options) : new (UploadModule.getUploadHandler(options))(options)

  var flashHandler = null;

  UploadModule.currentUploadSessionInfo = new UploadSessionInfo(options);

  //region PreventClose
  /**
   * http://msdn.microsoft.com/en-us/library/ie/ms536907%28v=vs.85%29.aspx
   */
  if(!($.browser.msie && $.browser.version<9) && options.check_close){
    $(window).bind("beforeunload unload", function (){
      if(self.isUploadInProgress()){
        return options.i18n.pending_upload_page_close;
      }
    });
  }
  //endregion

  function onCleanupDecorator(func){
    return function(){
      if(!self.isUploadInProgress()){
        UploadModule.currentUploadSessionInfo = new UploadSessionInfo(options);
        func.apply(this, arguments);
      }
      favicon.remove(favicon.icons.uploadIcon)
    }
  }

  function checkConnectionOnErrorDecorator(onErrorFunc){
    return function(){

      //prevent connection error on page unload
      if(Utils.isUnload()){
        return;
      }

      var file = arguments[0];
      var error = arguments[1];

      var currentErrorId = error.errorId;

      var probablyHaveConnectionIssuesErrors = [
        options.uploadErrors.dc_error.errorId,
        options.uploadErrors.main_server_error.errorId,
        options.uploadErrors.flash_error.errorId
      ]

      if($.inArray( currentErrorId, probablyHaveConnectionIssuesErrors)!=-1){
        Utils.checkConnectionAvaliable(function(isConnectionAviable){
           if(isConnectionAviable){
             onErrorFunc(file, error);
           } else {
             if(!error.canRecover){
               onErrorFunc(file, options.uploadErrors.connection_error_norecover);
               return;
             }
             switch(currentErrorId)
             {
               case options.uploadErrors.dc_error.errorId:
                 onErrorFunc(file, options.uploadErrors.connection_error);
                 break;
               case options.uploadErrors.main_server_error.errorId:
                 onErrorFunc(file, options.uploadErrors.connection_error_scratch);
                 break;
               default :
                 break;
             }
           }
        }, true)
      } else {
        onErrorFunc(file, error);
      }
    }
  }

  this.isUploadInProgress = function(){
    return handler.isUploadInProgress() || (flashHandler && flashHandler.isUploadInProgress())
  }

  this.start = function() {
    handler.start()
  }

  this.add = function(file, input, opt) {
    handler.add(file, input, opt);
  }

  this.update = function(input) {
    handler.update(input);
  }

  this.cancel = function() {
    if (flashHandler && flashHandler.isUploadInProgress())
      flashHandler.cancel()
    if(handler.isUploadInProgress())
      handler.cancel()
  }

  this.cancelFile = function(uiFileId){
    handler.cancelFile(uiFileId)
    if (flashHandler)
      flashHandler.cancelFile(uiFileId)
  }

  this.initFlash = function() {
    if (!flashHandler)
      flashHandler = new UploadModule.HandlerUploadFlash(options);
  }

  this.retry = function(fileId){
    if(flashHandler)
      flashHandler.retry(fileId);
    handler.retry(fileId)
  }

  this.removeFromScratchRetry = function(fileId){
    handler.removeFromScratchRetry(fileId)
  }

  this.checkFile = function(file) {
    return handler.checkFile(file)
  }

  this.canResumeUpload = function() {
    return handler.constructor == UploadModule.HandlerUploadResumable;
  }

  return this;
}
