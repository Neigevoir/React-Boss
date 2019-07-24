import React from 'react'
import { connect } from 'react-redux'

function getState(state) {
  return { ...state.common.header }
}
export default connect(getState)(Header)
function Header(props) {
  const {
    leftBtn,
    handleLeft,
    title,
    handleRight,
    rightBtn,
    isShow,
    opacity
  } = props
  return (
    <div
      style={{
        backgroundColor: `rgba(83,202,189,${opacity})`
      }}
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
