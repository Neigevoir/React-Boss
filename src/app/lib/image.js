import deviceType from './device_type'

const get_android_version = () => {
  var ua = navigator.userAgent.toLowerCase()
  var version = null
  if (ua.indexOf('android') > 0) {
    var reg = /android [\d._]+/gi
    var v_info = ua.match(reg)
    version = (v_info + '').replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.')
    version = parseInt(version.split('.')[0], 10)
  }

  return version
}

const isSupportWebP = (() => {
  const android_version = get_android_version()
  if (deviceType().isiOS) {
    return false
  } else {
    return android_version >= 4 ? true : false
  }
})()

const optimizeParams = (() =>
  isSupportWebP
    ? {
        notNeedSharpen: '?imageView2/0/format/webp',
        needSharpen: '?imageMogr2/sharpen/1/format/webp'
      }
    : {
        notNeedSharpen: '?imageView2/0',
        needSharpen: '?imageMogr2/sharpen/1'
      })()

const QImage = url => {
  if (url.indexOf('https://qimg.') === 0) {
    return `${url}${
      url.indexOf('giant_') > 0
        ? optimizeParams.notNeedSharpen
        : optimizeParams.needSharpen
    }`
  }
  return url
}

export default QImage
