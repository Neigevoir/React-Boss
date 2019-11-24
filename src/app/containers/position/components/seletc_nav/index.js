import { useState } from 'react'
import style from './index.scss'

export default function PositionNav({ listType, handleClick }) {
  const [isShow, setIsShow] = useState(false)

  const handleChange = () => setIsShow(isShow => !isShow)

  const showSelectModal = () => {}

  return (
    <section className="select-nav-container">
      <div className="select-nav-box">
        <nav className="nav-left">
          <span className="nav-item">推荐</span>
          <span className="nav-item select">最新</span>
        </nav>
        <nav className="nav-right">
          <span className="nav-item">深圳</span>
          <span className="nav-item">筛选</span>
        </nav>
      </div>
    </section>
  )
}
