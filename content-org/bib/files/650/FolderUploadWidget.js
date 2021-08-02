function FolderUploadWidget(options) {
  options = $.extend(true, {
    upload_form: null,
    i18n: {
      minutes: 'min',
      seconds: 'sec',
      files: 'files',
      cancel_confirm: 'Do you want to cancel upload?',
      upload_was_interrupted: 'Upload was interrupted. Try again ?',
      files_are_different: 'These files are different. Please, select the same file.',
      upload: 'Upload',
      upload_completed:'Upload completed'
    }
  }, options);

  var _this = this;

  function showProgressBar() {
    $('#percent').html('0');
    $('#sizeOk').html('');
    
    $('#upload').hide();
    $('#frameUploadProgressBarWithStopButton').show();
  }

  function hideProgressBar() {
    options.upload_form[0].reset();
    $('#frameUploadProgressBarWithStopButton').hide();
    $('#upload').show();
    $('#progresswidth').attr('width', "1%");
  }

  var mulsupport = !Utils.checkMultiupload();

  $("#fid0").ready(function() {
    if (mulsupport) $('#fid0').attr("multiple", "multiple");
    else $('#fid0').removeAttr("multiple", "multiple");
  });

  $('#fid0').change(function() {
    $("#fileselectvalue").empty();
    if (document.getElementById("fid0").files != null) var numb = document.getElementById("fid0").files.length;
    if (mulsupport && numb > 1) {
        $("#fileselectvalue").append($(document.createElement("img")).attr({"src":"/images/icons/16x16/stack.png","id":"ico","class":"absmid","hspace":"3"}));
        var fileTitle = numb + " " + options.i18n.files;
    } else {
      var file = $(this).val();
      reWin = /.*\\(.*)/;
      fileTitle = file.replace(reWin, "$1");
      reUnix = /.*\/(.*)/;
      fileTitle = fileTitle.replace(reUnix, "$1");

      var RegExExt = /.*\.(.*)/;
      var ext = fileTitle.replace(RegExExt, "$1");

      var ico = '/icons/16x16/' + ext + '.gif';
      $("#fileselectvalue").append($(document.createElement("img")).attr({"src": ico, "id": "ico", "class": "absmid", "hspace": "2"}));
      $('#ico').error(function() {
        $(this).attr("src", "/icons/16x16/default.png");
      });
    }

    $('#fileselectvalue').append(fileTitle);
    _this.start();
  });

  $("#fid0").hover(function() {
   $(".fileselectcontainer").find('div.gv').addClass("hover").stop();
   $(".fileselectcontainer").find('div.gh').addClass("hover").stop();
  }, function() {
    $(".fileselectcontainer").find('div.gv').removeClass("hover").stop();
    $(".fileselectcontainer").find('div.gh').removeClass("hover").stop();
  });

  var successFiles = 0;

  var uploadModule = UploadModule.build({
    upload_form: options.upload_form,
    uploadHandler: UploadModule.getAnonUploadHandler(),

    onStart: function() {
      uploadStarts = true;
      favicon.change(favicon.icons.uploadIcon)
      showProgressBar();
    },

    // Callback is invoked each time we receive updated progress status from sever
    onProgress: function(progress) {
      var percent = Math.floor((progress.loaded / progress.total) * 100);
      var minimumProgressBarWidth = 1;
      $('#progresswidth').attr('width', Math.max(percent, minimumProgressBarWidth) + "%");
      $('#percent').html(percent);
      $('#sizeOk').html(Utils.readablizeBytes(progress.loaded));
    },

    onFileUploaded : function(){
      successFiles++;
    },

    onFileError: function(file, error){
      alert(file.name+": "+error.message)
      if(error.needRetry){
        setTimeout(function(){
          uploadModule.retry(file._uiFileId)
        }, 5000)
      }
    },

    onComplete: function(data) {
      uploadStarts = false

      hideProgressBar()
      if (data.status == "OK") {
        PopupModule.popupWithButtons({title: options.i18n.upload, content: options.i18n.upload_completed})
      }else if (data.status == "error") {
        PopupModule.popupWithButtons({content: data.errorMessage, type: 'error'})
      }
      document.location.reload()
    },

    onCancel:function() {
    },

    onConfirm: function(message) {
      return confirm(message)
    },

    onCleanup: function() {
      favicon.remove(favicon.icons.uploadIcon)
      uploadStarts = false
      if(successFiles){
        PopupModule.popupWithButtons({title: options.i18n.upload, content: options.i18n.upload_completed})
      }
      successFiles = 0;
      hideProgressBar()
      options.upload_form[0].reset()
      $("#fileselectvalue").html('')
      FolderActions.changeDir(currentDirId)
    }
  })

  this.start = uploadModule.start

  this.stop = function() {
    PopupModule.popupWithButtons({content: options.i18n.cancel_confirm, buttonsType: 1, confirmCallback: uploadModule.cancel})
  }

  return this;
}