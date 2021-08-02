
function ImageThumbnailer() {
  return this
}

ImageThumbnailer._resize = function(image, maxWidth, maxHeight) {
  var ratio = 1

  var canvas = document.createElement('canvas')
  canvas.style.display = 'none'
  document.body.appendChild(canvas)

  var canvasCopy = document.createElement('canvas')
  canvasCopy.style.display = 'none'
  document.body.appendChild(canvasCopy)

  var ctx = canvas.getContext('2d');
  var copyContext = canvasCopy.getContext('2d')

  if (image.width > maxWidth)
    ratio = maxWidth / image.width
  else if (image.height > maxHeight)
    ratio = maxHeight / image.height

  canvasCopy.width = image.width
  canvasCopy.height = image.height

  try {
    copyContext.drawImage(image, 0, 0)
  } catch (e) {
    document.body.removeChild(canvas)
    document.body.removeChild(canvasCopy)
    return false
  }

  canvas.width = image.width * ratio
  canvas.height = image.height * ratio;

  // the line to change
  // ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);
  // the method signature you are using is for slicing
  ctx.drawImage(canvasCopy, 0, 0, canvas.width, canvas.height)

  var dataURL = canvas.toDataURL('image/jpeg')
  document.body.removeChild(canvas)
  document.body.removeChild(canvasCopy)

  return dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, '')
}

ImageThumbnailer.convert = function(files, options, callback) {
  options = $.extend(true, {
    maxWidth: 1024,
    maxHeight: 1024
  }, options)

  var result = []

  var _files = []
  for (var i = 0; i < files.length; i++) {
    var file = files[i]
    _files.push(file)
  }

  function readFile(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = document.createElement('img')
      img.src = e.target.result
      img.onload = function() {
        var data = ImageThumbnailer._resize(img, options.maxWidth, options.maxHeight)
        result.push(data)
        if (_files.length == 0) {
          callback(result)
          return
        }

        readFile(_files.pop())
      }
    }

    reader.readAsDataURL(file)
  }

  readFile(_files.pop())
}

ImageThumbnailer.isResizeSupport = function() {
  return $.browser.webkit || $.browser.mozilla
}

//just for caching pengind preview img
$(function(){
  $.get('/images/previewPending.gif?rev='+Config.revisionNum);
})

ImageThumbnailer.onThumbnailError = function(image) {
  image._attempts = image._attempts || 0
  if (image._attempts++ > 10) return

  var src = image._src || image.src

  function load() {
    //console.debug('onLoad ' + src)
    setTimeout(reloadImage, 4000)
  }

  $(image).attr('src', '/images/previewPending.gif?rev='+Config.revisionNum)
          .bind('load', function() { load() })

  function reloadImage() {
    image._src = src + (/\?/.test(src) ? '&' : '?') + 'rnd2=' + Math.random()
    $(image).unbind('load')
    $(image).attr('src', image._src)
  }
}