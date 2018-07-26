import App from './router'
const appDirectory = '/'
//TODO: 暂时先用 '/'
const ASSET_HOST =
  process.env.NODE_ENV !== 'production' ? appDirectory : appDirectory

__webpack_public_path__ = ASSET_HOST // eslint-disable-line no-undef

window.resizeEvent = () => {
  var event = document.createEvent('Event')
  event.initEvent('resize', false, true)
  window.dispatchEvent(event)
}

export default App
