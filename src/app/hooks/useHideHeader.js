import Actions from 'src/app/actions/actions'
import { useEffect } from 'react'

export default function useHideHeader(WrappedComponent) {
  return function DisabledFooterComponent(props) {
    useEffect(() => {
      const { dispatch } = props
      dispatch(Actions.common.changeHeader({ isShow: false }))
      return () => {
        dispatch(Actions.common.changeHeader({ isShow: true }))
      }
    }, [])
    return <WrappedComponent {...props} />
  }
}
