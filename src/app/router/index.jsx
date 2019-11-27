import { Suspense, useEffect } from 'react'
import Header from 'src/app/components/header'
import Footer from 'src/app/components/footer'
import Loading from 'src/app/components/loading'
import Tips from 'src/app/components/tips'
import Actions from 'src/app/actions/actions'
import * as AsyncComponents from 'src/app/router/ImportComponents'
import { Route, Switch, useHistory } from 'react-router-dom'
import useRouterScroll from 'src/app/hooks/useRouterScroll.js'
import * as storage from 'src/app/lib/storage.js'
import 'src/assets/styles/all.scss'
import 'src/assets/styles/index/index.scss'

export default function Routers(props) {
  const history = useHistory()

  useRouterScroll()

  useEffect(() => {
    if (_.isEmpty(storage.get('token', localStorage))) {
      history.replace('/login')
    } else {
      // Store.dispatch(Actions.user.getLoginInfo(getInfoSuccess))
    }
  }, [history])

  const getInfoSuccess = () => history.replace('/position')

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
        <Route path="/user" component={AsyncComponents.AsyncUser} />
      </Switch>
      <Footer pathname={props.location.pathname} />
      <Loading />
      <Tips />
    </Suspense>
  )
}
