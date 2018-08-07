let _global = undefined

if (typeof global !== 'undefined') _global = global
if (typeof window !== 'undefined') _global = window

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime()
  }
}

__webpack_public_path__ =
  process.env.NODE_ENV === 'production'
    ? process.env.PUBLIC_URL || 'https://static.letote.cn/'
    : '/'

_global.ENV = 'development'

//NOTE: AB-test
_global.applyFlags = function(flag) {
  _global.USE_CREDIT_OR_MOBILE = flag.get('USE_CREDIT_OR_MOBILE')
  _global.CARD = Number(flag.get('card'))
  _global.CARD_149 = flag.get('card_149')
}

_global.LeToteExperiments = {
  newOnboardingBundle: false,
  enableZhiMaCredit: false,
  enableNewYearActivity: true
}

_global.analytics = {
  track: function(category, opt_label, action = null) {
    window._hmt &&
      window._hmt.push([
        '_trackEvent',
        category,
        action || category,
        JSON.stringify(opt_label)
      ])
  },
  trackLink: function(link, describe, object) {}
}

//current env
const host = window.location.host
_global.currentEnv = host.includes('wechat-dev')
  ? 'dev'
  : host.includes('wechat-staging')
    ? 'staging'
    : host.includes('wechat') ? 'prod' : 'dev'

//questionnaire address
_global.questionnaireAddress = {
  dev: 'https://jinshuju.net/f/ZVI4OK',
  staging: 'https://jinshuju.net/f/M4zDYo',
  prod: 'https://jinshuju.net/f/un5pmz'
}

if (!window.requestAnimationFrame) {
  _global.requestAnimationFrame = function(fn) {
    setTimeout(fn, 17)
  }
}

_global.__Url__ = 'http://www.ih5.cn'
_global.__ISLOGIN__ = false

export default _global
