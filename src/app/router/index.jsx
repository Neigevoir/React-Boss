import { Router, Route } from 'react-router-dom'
// import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import Store from 'src/app/store/store.js'
import Layout from './router.jsx'
import { persistor } from 'src/app/store/store.js'
import { PersistGate } from 'redux-persist/es/integration/react'
// import WithErrorHandle from 'src/app/components/HOC/with_errorhandle/witherrorhandle'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

export default function App() {
  useEffect(() => {
    global.AvailWidth = window.screen.availWidth
    global.AvailHeight = window.screen.availWidth
  }, [])

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <Router history={history}>
          <Route path="/" component={Layout} />
        </Router>
      </PersistGate>
    </Provider>
  )
}
