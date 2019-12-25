import './index.scss'

export default function WrongPage(props) {
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
