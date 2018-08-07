import React from 'react'
import './index.scss'

export default class Tips extends React.PureComponent {
  isShow = arg => arg

  render() {
    return (
      <div
        className="globalTips"
        style={{ display: `${this.isShow(true) ? 'block' : 'none'}` }}
      >
        <div className="tip">
          <span className="tipText">嘿，这里不允许操作！</span>
        </div>
      </div>
    )
  }
}
