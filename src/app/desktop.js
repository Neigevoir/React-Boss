import App from './router'

window.resizeEvent = () => {
  var event = document.createEvent('Event')
  event.initEvent('resize', false, true)
  window.dispatchEvent(event)
}

export default App
