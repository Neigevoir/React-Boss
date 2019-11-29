import { Suspense, useEffect, useCallback } from 'react'
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

export default function Routers(props) {
  useRouterScroll()

  const dispatch = useDispatch()
  const history = useHistory()

  const getInfoSuccess = useCallback(() => history.replace('/position'), [
    history
  ])

  useEffect(() => {
    if (_.isEmpty(storage.get('token', localStorage))) {
      history.replace('/login')
    } else {
      dispatch(Actions.user.getLoginInfo(getInfoSuccess))
    }
  }, [dispatch, getInfoSuccess, history])

  return (
    <Suspense fallback={<div />}>
      <Header />
      <AsyncRouters />
      <Footer pathname={props.location.pathname} />
      <Loading />
      <Tips />
    </Suspense>
  )
}
