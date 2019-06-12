import App from './router'
const port = require('../server_port.js')

window.resizeEvent = () => {
  var event = document.createEvent('Event')
  event.initEvent('resize', false, true)
  window.dispatchEvent(event)
}

global.ServerApi = `https://localhost:${port}/`

export default App
