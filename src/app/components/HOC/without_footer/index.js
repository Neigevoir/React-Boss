import Actions from 'src/app/actions/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function withoutFooter(WrappedComponent) {
  return function DisabledFooterComponent(props) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(Actions.common.disableFooter())
      return () => dispatch(Actions.common.enableFooter())
    }, [])
    return <WrappedComponent {...props} />
  }
}
