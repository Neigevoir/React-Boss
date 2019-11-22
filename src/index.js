import ReactDOM from 'react-dom'
import App from './app/desktop'
import registerServiceWorker from './registerServiceWorker'
import Darkmode from 'darkmode-js'
import './app/global'

new Darkmode().showWidget()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
