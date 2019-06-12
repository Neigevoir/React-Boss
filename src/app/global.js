let _global = undefined

if (typeof global !== 'undefined') _global = global
if (typeof window !== 'undefined') _global = window

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime()
  }
}
_global.ENV = 'development'

if (!window.requestAnimationFrame) {
  _global.requestAnimationFrame = function(fn) {
    setTimeout(fn, 17)
  }
}

_global.__Url__ = 'http://www.ih5.cn'

export default _global
