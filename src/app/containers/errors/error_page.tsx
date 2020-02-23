// import './index.scss'

interface WrongPageProps {
  errorHandle: () => void
  errorInfo: {
    name: string
    message: string
  }
}

export default function WrongPage(props: WrongPageProps) {
  return (
    <div className="wrong-page">
      <div className="wrong-img" onClick={props.errorHandle} />{' '}
      <div className="wrong-text">
        {' '}
        {!props.errorInfo ? (
          `未知错误！`
        ) : (
          <div>
            <p> {props.errorInfo.name} </p> <p> {props.errorInfo.message} </p>{' '}
          </div>
        )}{' '}
      </div>{' '}
    </div>
  )
}
