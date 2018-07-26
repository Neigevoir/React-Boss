import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import Store from 'src/app/store/store.js'
import Layout from 'src/app/containers/App.js'
// import { persistor } from 'src/app/store/store.js'
// import { PersistGate } from 'redux-persist/es/integration/react'
// import Tips from 'src/app/components/tips/tips'
import * as AsyncComponents from './ImportComponents'
// import WithErrorHandle from 'src/app/components/HOC/with_errorhandle/witherrorhandle'
const history = syncHistoryWithStore(browserHistory, Store)

class App extends React.PureComponent {
  componentWillMount() {
    window._hmt.push(['_setAutoPageview', true])
    window.addEventListener('pageshow', e => {
      // 通过persisted属性判断是否存在 BF Cache
      if (e.persisted) {
        window.location.reload()
      }
    })
  }

  scrollPosition = (preState, nextState) => {
    //storage current scroll position
    const preStoragePos = !window.SCROLL_ELEMENT
      ? document.documentElement.scrollTop || document.body.scrollTop
      : document[window.SCROLL_ELEMENT].scrollTop
    if (!window.SCROLL_ELEMENT && preStoragePos) {
      const { scrollTop } = document.body
      window.SCROLL_ELEMENT =
        scrollTop && _.isNumber(scrollTop) ? 'body' : 'documentElement'
    }
    const { pathname, search } = preState.location
    sessionStorage.setItem(pathname + search, preStoragePos)
    //restore next page scroll position
    if (window.SCROLL_ELEMENT) {
      const { pathname, search } = nextState.location
      let nextStoragePos = sessionStorage.getItem(pathname + search)
      nextStoragePos = nextStoragePos ? parseInt(nextStoragePos, 10) : 0
      document[window.SCROLL_ELEMENT].scrollTop = nextStoragePos
    }
  }

  onChangeHook = (preState, nextState, replace) => {
    this.scrollPosition(preState, nextState)
  }

  render() {
    return (
      <Provider store={Store}>
        {/* <PersistGate persistor={persistor} loading={<div>Loading...</div>}> */}
        <div>
          <Router history={history}>
            <Route path="/" component={Layout} onChange={this.onChangeHook}>
              <IndexRoute component={AsyncComponents.AsyncPositionContainer} />
              <Route
                path="/position"
                component={AsyncComponents.AsyncPositionContainer}
              />
            </Route>
            <Redirect from="*" to="/home" />
          </Router>
          {/* <Tips /> */}
        </div>
        {/* </PersistGate> */}
      </Provider>
    )
  }
}

export default App
