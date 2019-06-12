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
  global.AvailWidth = window.screen.availWidth
  global.AvailHeight = window.screen.availWidth

  useEffect(() => {
    window.addEventListener('pageshow', e => {
      // 通过persisted属性判断是否存在 BF Cache
      e.persisted && window.location.reload()
    })
    fetch('http://localhost:8888/', {
      method: 'POST',
      mode: 'cors'
      // headers
      // credentials: 'same-origin'
    })
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          // success
          console.log(response)
          response
            .json()
            .then(data => {
              // body is json
              console.log(data)
            })
            .catch(e => {
              // body is not json -> sign out does this
              // errors can also get raised here from
              // invalid component render in response to success
              console.error(e)
            })
        } else {
          // errors
          response
            .json()
            .then(data => {
              // body is json
            })
            .catch(() => {
              // body is not json
            })
        }
      })
      .catch(e => {
        // network error
      })
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
