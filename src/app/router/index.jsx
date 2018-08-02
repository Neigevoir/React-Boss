import { Router, Route } from 'react-router-dom'
// import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import Store from 'src/app/store/store.js'
import Layout from './router.jsx'
// import { persistor } from 'src/app/store/store.js'
// import { PersistGate } from 'redux-persist/es/integration/react'
// import WithErrorHandle from 'src/app/components/HOC/with_errorhandle/witherrorhandle'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    global.AvailWidth = window.screen.availWidth
    global.AvailHeight = window.screen.availWidth
  }

  componentDidMount() {
    window.addEventListener('pageshow', e => {
      // 通过persisted属性判断是否存在 BF Cache
      e.persisted && window.location.reload()
    })
  }

  render() {
    return (
      <Provider store={Store}>
        {/* <PersistGate persistor={persistor} loading={<div>Loading...</div>}> */}
        <Router history={history}>
          <Route path="/" component={Layout} />
        </Router>
        {/* </PersistGate> */}
      </Provider>
    )
  }
}

export default App
