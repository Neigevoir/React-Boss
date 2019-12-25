import { Router, Route } from 'react-router-dom'
// import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import Store from 'src/app/store/store.js'
import Routers from 'src/app/router'
import { persistor } from 'src/app/store/store.js'
import { PersistGate } from 'redux-persist/es/integration/react'
// import WithErrorHandle from 'src/app/components/HOC/with_errorhandle/witherrorhandle'
import { createBrowserHistory } from 'history'
import ErrorBoundary from 'src/app/containers/errors'
// import Darkmode from 'darkmode-js'

// new Darkmode().showWidget()

window.resizeEvent = () => {
  var event = document.createEvent('Event')
  event.initEvent('resize', false, true)
  window.dispatchEvent(event)
}

function App() {
  useEffect(() => {
    // fetch(`${ServerApi}/api/position/list`, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json', // needed for request.format.json?
    //     'Content-Type': 'application/json',
    //     'X-REQUESTED-WITH': 'XMLHttpRequest'
    //   },
    //   // mode: 'cors',
    //   body: JSON.stringify({
    //     test: 1
    //   }),
    //   credentials: 'same-origin'
    // }).then(response => {
    //   if (response.status >= 200 && response.status < 400) {
    //     // success
    //     response
    //       .json()
    //       .then(data => {
    //         // body is json
    //         console.log(data)
    //       })
    //       .catch(e => {
    //         // body is not json -> sign out does this
    //         // errors can also get raised here from
    //         // invalid component render in response to success
    //         console.error(e)
    //       })
    //   }
    // })
  }, [])

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <Router history={createBrowserHistory()}>
          <Route path="/" component={Routers} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default ErrorBoundary(App)
