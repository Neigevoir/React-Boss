import Actions from 'src/app/actions/actions'
import { useEffect } from 'react'

export default function withoutFooter(WrappedComponent) {
  return function DisabledFooterComponent(props) {
    useEffect(() => {
      const { dispatch } = props
      dispatch(Actions.common.changeFooter({ isShow: false }))
      return () => dispatch(Actions.common.changeFooter({ isShow: true }))
    }, [])
    return <WrappedComponent {...props} />
  }
}
