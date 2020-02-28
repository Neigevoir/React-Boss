import Actions from 'src/app/actions/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useHideHeader() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Actions.common.changeHeader({ isShow: false }))
    return () => dispatch(Actions.common.changeHeader({ isShow: true }))
  }, [dispatch])
}
