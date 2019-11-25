import ReactDOM from 'react-dom'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import './app/global'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
