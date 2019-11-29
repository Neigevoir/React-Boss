import { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const AsyncPosition = lazy(() => import('src/app/containers/position'))
const AsyncCompany = lazy(() => import('src/app/containers/company'))
const AsyncNotice = lazy(() => import('src/app/containers/notice'))
const AsyncLogin = lazy(() => import('src/app/containers/login'))
const AsyncUser = lazy(() => import('src/app/containers/user'))
const AsyncCompanyDetail = lazy(() =>
  import('src/app/containers/company_detail')
)

export default function LazyRouters() {
  return (
    <Switch>
      <Route exact path="/" component={AsyncPosition} />
      <Route path="/position" component={AsyncPosition} />
      <Route path="/company" component={AsyncCompany} />
      <Route path="/company_detail" component={AsyncCompanyDetail} />
      <Route path="/notice" component={AsyncNotice} />
      <Route path="/login" component={AsyncLogin} />
      <Route path="/user" component={AsyncUser} />
    </Switch>
  )
}
