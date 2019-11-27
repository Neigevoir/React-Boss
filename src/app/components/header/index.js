import { useSelector } from 'react-redux'

export default function Header() {
  const header = useSelector(state => state.common.header)
  const {
    leftBtn,
    handleLeft,
    title,
    handleRight,
    rightBtn,
    isShow,
    opacity
  } = header
  return (
    <div
      style={{ backgroundColor: `rgba(83,202,189,${opacity})` }}
      className={isShow ? 'title' : 'hidden'}
    >
      <span className="notice" onClick={handleLeft}>
        {leftBtn}
      </span>
      <span>{title}</span>
      <span className="search" onClick={handleRight}>
        {rightBtn}
      </span>
    </div>
  )
}
