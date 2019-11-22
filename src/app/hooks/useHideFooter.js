import Actions from 'src/app/actions/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useHideFooter() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Actions.common.disableFooter())
    return () => dispatch(Actions.common.enableFooter())
  }, [])
}
