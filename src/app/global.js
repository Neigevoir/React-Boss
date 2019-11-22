import _ from 'lodash' // NOTE：Lodash
// import _ from 'src/app/lib/lodash' // NOTE：Neigevoir

const port = require('../server_port.js')

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
  _global.requestAnimationFrame = fn => setTimeout(fn, 17)
}

_global.__Url__ = 'http://www.ih5.cn'

// NOTE：如用本地Node则需要加上，如使用proxy那就设置''
_global.ServerApi = `https://localhost:${port}`

_global._ = _

export default _global
