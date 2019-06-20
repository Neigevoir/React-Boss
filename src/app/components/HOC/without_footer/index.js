import Actions from 'src/app/actions/actions'
import { useEffect } from 'react'

export default function withoutFooter(WrappedComponent) {
  return function DisabledFooterComponent(props) {
    useEffect(() => {
      const { dispatch } = props

      dispatch(Actions.common.enableFooter())
      return () => dispatch(Actions.common.disableFooter())
    }, [])
    return <WrappedComponent {...props} />
  }
}
