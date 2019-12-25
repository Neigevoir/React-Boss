import WrongPage from './error_page'

export default function ErrorBoundary(WrappedComponent) {
  return class WithErrorHandler extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
      this.Jspattern = new RegExp(/^Loading chunk (\d)+ failed\./)
      this.Csspattern = new RegExp(/^Loading CSS chunk (\d)+ failed\./)
    }

    componentDidCatch(error, info) {
      const isJsChunkLoadingFailed = this.Jspattern.test(error.message)
      const isCssChunkLoadingFailed = this.Csspattern.test(error.message)
      if (isJsChunkLoadingFailed || isCssChunkLoadingFailed) {
        window.location.replace(window.location.href)
      } else {
        this.setState({
          hasError: true,
          error,
          errorInfo: info
        })
      }
    }

    errorResolve = () => window.location.replace('/')

    render() {
      const { hasError, error } = this.state
      return hasError ? (
        <WrongPage errorInfo={error} errorHandle={this.errorResolve} />
      ) : (
        <WrappedComponent {...this.props} />
      )
    }
  }
}
