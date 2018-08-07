import Actions from 'src/app/actions/actions'
import PropTypes from 'prop-types'

const withoutFooter = WrappedComponent => {
  class DisabledFooterComponent extends React.Component {
    componentDidMount() {
      this.props.dispatch(
        Actions.common.changeFooter({
          isShow: false
        })
      )
    }

    componentWillUnmount() {
      this.props.dispatch(
        Actions.common.changeFooter({
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

export default withoutFooter
