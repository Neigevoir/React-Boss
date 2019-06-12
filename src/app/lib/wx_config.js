import Store from 'src/app/store/store.js'
import deviceType from './device_type'

// 开启调试模式 true or false
const DEBUG = false
//需要使用的JS接口列表
const WX_API_LIST = [
  'chooseImage',
  'previewImage',
  'uploadImage',
  'downloadImage',
  'openLocation',
  'getLocation',
  'openAddress',
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'hideMenuItems'
]

const isWechat = /MicroMessenger/i.test(navigator.userAgent)

let WX_CONFIG = null
// 配置
let ERROR_CONFIG = {}
const MAX_ERROR_CONFIG_PER_URL = 2

const bustCache = url => {
  //Clean WX_CONFIG if we bust cache
  WX_CONFIG = null
  // Limit retry count for per URL
  ERROR_CONFIG[url] =
    typeof ERROR_CONFIG[url] !== 'undefined' ? ERROR_CONFIG[url] + 1 : 0
  if (ERROR_CONFIG[url] > MAX_ERROR_CONFIG_PER_URL) return true
}

var VERIFY_NUMBER = 0

//FIXME: 处理Cancel，处理MAX_ERROR_CONFIG_PER_URL过期问题，比如只是十秒内不允许超过限度。
// 安卓的微信分享如products界面因为多个地方共用，ios可以init一次，但是安卓需要每次init
function wxInit(isFirstConfigUrl = true, bustConfigCache, isInit) {
  if (isFirstConfigUrl) VERIFY_NUMBER = 0

  if (!isWechat) return null //非微信浏览器不调用

  const url = whichUrl(isFirstConfigUrl)
  //if call wx api fail , init WX_CONFIG
  if (bustConfigCache && bustCache(url)) return null
  if (!WX_CONFIG || isInit) {
    fetch('/wechat/config', {
      method: 'POST',
      headers: {
        Accept: 'application/json', // needed for request.format.json?
        'Content-Type': 'application/json',
        'X-REQUESTED-WITH': 'XMLHttpRequest' // needed for request.xhr? which sidesteps mobylette
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        url
      })
    })
      .then(res => res.json())
      .then(json => {
        WX_CONFIG = {
          appId: json.appId, // 必填，公众号的唯一标识
          timestamp: json.timestamp, // 必填，生成签名的时间戳
          nonceStr: json.nonceStr, // 必填，生成签名的随机串
          signature: json.signature // 必填，签名，
        }
        /**
         * sdk认证
         */
        wx.config({
          ...WX_CONFIG,
          debug: DEBUG,
          jsApiList: WX_API_LIST
        })
        typeof bustConfigCache === 'function' && bustConfigCache()

        // 失效重新获取签名
        wx.error(res => {
          VERIFY_NUMBER++
          // wx config infomation
          const ERROR_INFO = {
            url,
            error: res,
            server_json: json
          }
          //send info to server
          Store.dispatch({
            type: 'SEND:WX:CONFIG:INFO',
            API: true,
            method: 'GET',
            url: `/static/sigerr?data=${encodeURIComponent(
              JSON.stringify(ERROR_INFO)
            )}`
          })
          WX_CONFIG = null
          if (process.env.NODE_ENV !== 'production')
            alert(`请截图给Tim\n${JSON.stringify(ERROR_INFO)}`)
          if (VERIFY_NUMBER <= 2) wxInit(false)
        })
      })
      .catch(error => console.log(error))
  } else {
    console.log(`Not Config!!!`)
  }
}

const whichUrl = isFirstConfigUrl => {
  const config_url = window.location.href.split('#')[0]
  return deviceType().isiOS
    ? isFirstConfigUrl
      ? global.FIRST_URL
      : config_url
    : isFirstConfigUrl
    ? config_url
    : global.FIRST_URL
}

export default wxInit
