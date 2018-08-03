import React, { StrictMode, PureComponent } from 'react'
import Header from 'src/app/components/header'
import Footer from 'src/app/components/footer'
import Loading from 'src/app/components/loading'
import 'src/assets/styles/all.scss'
import 'src/assets/styles/index/index.scss'
import { Route, Switch } from 'react-router-dom'
import * as AsyncComponents from 'src/app/router/ImportComponents'
export default class App extends PureComponent {
  componentDidUpdate(prevProps, prevState) {
    this.scrollPosition(prevProps, this.props)
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
      <StrictMode>
        <div id="test">
          <Header />
          <Switch>
            <Route exact path="/" component={AsyncComponents.AsyncPosition} />
            <Route path="/position" component={AsyncComponents.AsyncPosition} />
            <Route path="/company" component={AsyncComponents.AsyncCompany} />
            <Route path="/notice" component={AsyncComponents.AsyncNotice} />
            <Route path="/login" component={AsyncComponents.AsyncLogin} />
          </Switch>
          <Footer pathname={this.props.location.pathname} />
          <Loading />
        </div>
      </StrictMode>
    )
  }
}
