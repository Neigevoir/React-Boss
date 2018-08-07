import React, { PureComponent } from 'react'
import Header from 'src/app/components/header'
import Footer from 'src/app/components/footer'
import Loading from 'src/app/components/loading'
import Actions from 'src/app/actions/actions'
import * as AsyncComponents from 'src/app/router/ImportComponents'
import { Route, Switch, withRouter } from 'react-router-dom'
import Store from 'src/app/store/store.js'
import 'src/assets/styles/all.scss'
import 'src/assets/styles/index/index.scss'

@withRouter
export default class App extends PureComponent {
  componentDidMount() {
    const token = localStorage.getItem('token')
    if (_.isEmpty(token)) {
      this.props.history.replace('/password')
    } else {
      Store.dispatch(Actions.user.getLoginInfo(this.getInfoSuccess))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollPosition(prevProps, this.props)
  }

  getInfoSuccess = () => {
    // this.props.history.replace('/position')
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

  render() {
    return (
      // <StrictMode>
      <div id="test">
        <Header />
        <Switch>
          <Route exact path="/" component={AsyncComponents.AsyncPosition} />
          <Route path="/position" component={AsyncComponents.AsyncPosition} />
          <Route path="/company" component={AsyncComponents.AsyncCompany} />
          <Route
            path="/company_detail"
            component={AsyncComponents.AsyncCompanyDetail}
          />
          <Route path="/notice" component={AsyncComponents.AsyncNotice} />
          <Route path="/login" component={AsyncComponents.AsyncLogin} />
          <Route path="/password" component={AsyncComponents.AsyncPassword} />
          <Route path="/user" component={AsyncComponents.AsyncUser} />
        </Switch>
        <Footer pathname={this.props.location.pathname} />
        <Loading />
      </div>
      // </StrictMode>
    )
  }
}
