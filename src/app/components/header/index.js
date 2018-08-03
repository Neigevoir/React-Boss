import React from 'react'
import { connect } from 'react-redux'

function getState(state) {
  return {
    ...state.header
  }
}
@connect(getState)
export default class Header extends React.PureComponent {
  render() {
    const {
      leftBtn,
      handleLeft,
      title,
      handleRight,
      rightBtn,
      isShow,
      opacity
    } = this.props
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
}
