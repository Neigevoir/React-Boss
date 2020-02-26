import WrongPage from './error_page'

export default function ErrorBoundary(WrappedComponent) {
  return function WithErrorHandler(props) {
    const errorResolve = () => window.location.replace('/')
    try {
      return <WrappedComponent {...props} />
    } catch (error) {
      return <WrongPage errorInfo={error} errorHandle={errorResolve} />
    }
  }
}
