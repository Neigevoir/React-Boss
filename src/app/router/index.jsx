import { Suspense, useEffect, useRef } from 'react'
import Header from 'src/app/components/header'
import Footer from 'src/app/components/footer'
import Loading from 'src/app/components/loading'
import Tips from 'src/app/components/tips'
import Actions from 'src/app/actions/actions'
import * as AsyncComponents from 'src/app/router/ImportComponents'
import { Route, Switch, useHistory } from 'react-router-dom'
import * as storage from 'src/app/lib/storage.js'
import 'src/assets/styles/all.scss'
import 'src/assets/styles/index/index.scss'

export default function Routers(props) {
  const history = useHistory()

  useEffect(() => {
    if (_.isEmpty(storage.get('token', localStorage))) {
      history.replace('/password')
    } else {
      // Store.dispatch(Actions.user.getLoginInfo(getInfoSuccess))
    }
  }, [history])

  // NOTE:获取上一个Props
  const prevPropsRef = useRef()
  const prevProps = prevPropsRef.current
  useEffect(() => {
    prevPropsRef.current = props
    scrollPosition(prevProps, props)
  }, [prevProps, props, props.location.pathname])

  const getInfoSuccess = () => history.replace('/position')

  const scrollPosition = (preState, nextState) => {
    if (_.isEmpty(preState) || _.isEmpty(nextState)) {
      return null
    }
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

  return (
    <Suspense fallback={<div />}>
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
      <Footer pathname={props.location.pathname} />
      <Loading />
      <Tips />
    </Suspense>
  )
}
