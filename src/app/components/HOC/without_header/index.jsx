import Actions from 'src/app/actions/actions'
import PropTypes from 'prop-types'

const withoutHeader = WrappedComponent => {
  class DisabledFooterComponent extends React.Component {
    componentDidMount() {
      this.props.dispatch(
        Actions.common.changeHeader({
          isShow: false
        })
      )
    }

    componentWillUnmount() {
      this.props.dispatch(
        Actions.common.changeHeader({
          isShow: true
        })
      )
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  DisabledFooterComponent.propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  return DisabledFooterComponent
}

export default withoutHeader
