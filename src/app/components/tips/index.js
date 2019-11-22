import { useEffect, useRef } from 'react'
import Actions from 'src/app/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'

export default function Tips() {
  const timer = useRef(null)
  const dispatch = useDispatch()
  const tips = useSelector(state => state.common.tips)
  const { time, isShow, image, content } = tips

  useEffect(() => {
    if (tips.isShow) {
      timer.current && clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        dispatch(Actions.common.resetTips())
      }, time * 1000)
    }
    return () => timer.current && clearTimeout(timer.current)
  }, [isShow, time])

  return (
    <div className={`${isShow ? 'tips' : 'hidden'}`}>
      {image && <img src={image} alt="" />}
      <span className="alert-content">{content}</span>
    </div>
  )
}
