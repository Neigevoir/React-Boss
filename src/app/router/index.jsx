import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from 'src/app/components/header'
import Footer from 'src/app/components/footer'
import Loading from 'src/app/components/loading'
import Tips from 'src/app/components/tips'
import Actions from 'src/app/actions/actions'
import AsyncRouters from 'src/app/router/AsyncRouters'
import { useHistory } from 'react-router-dom'
import useRouterScroll from 'src/app/hooks/useRouterScroll.js'
import * as storage from 'src/app/lib/storage.js'
import 'src/assets/styles/all.scss'
import 'src/assets/styles/index/index.scss'

export default function Routers() {
  useRouterScroll()

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (_.isEmpty(storage.get('token', localStorage))) {
      history.replace('/login')
    } else {
      // const getInfoSuccess = () => history.replace('/position')
      dispatch(Actions.user.getLoginInfo())
    }
  }, [dispatch, history])

  return (
    <Suspense fallback={<div />}>
      <Header />
      <AsyncRouters />
      <Footer />
      <Loading />
      <Tips />
    </Suspense>
  )
}
