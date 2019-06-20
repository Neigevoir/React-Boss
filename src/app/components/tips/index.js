import { useEffect } from 'react'
import { connect } from 'react-redux'
import Actions from 'src/app/actions/actions'
import './index.scss'

function mapStateToProps(state) {
  return { ...state.common.tips }
}

export default connect(mapStateToProps)(Tips)

function Tips(props) {
  let timer = null

  useEffect(() => {
    if (props.isShow) {
      timer && clearTimeout(timer)
      setTime(props.timer)
    }
    return () => timer && clearTimeout(timer)
  }, [props.isShow])

  const setTime = timer => {
    timer = setTimeout(() => {
      props.dispatch(Actions.common.resetTips())
    }, timer * 1000)
  }

  return (
    <div className={`${props.isShow ? 'tips' : 'hidden'}`}>
      {props.image && <img src={props.image} alt="" />}
      <span className="alert-content">{props.content}</span>
    </div>
  )
}
