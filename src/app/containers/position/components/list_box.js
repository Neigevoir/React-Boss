import React from 'react'

export default class ListBox extends React.PureComponent {
  getHandleText = (text, length = 5) => {
    return Array.from(text).length > length ? text.substring(0, length) : text
  }

  render() {
    const { position, handleClick } = this.props
    return (
      <li onClick={handleClick}>
        <div className="position_content">
          <div className="positionTitle">
            <h3 className="positionName">前端工程师</h3>
            <h4 className="positionPay">
              <b className="money">8K-50k</b>
              <b>深圳</b>
              <b>3-5年</b>
              <b>本科</b>
            </h4>
          </div>
          <div className="positionCompany">
            <div>
              <img
                className="avator"
                src={position.image || require('src/assets/images/logo.jpg')}
                alt=""
              />
              <div className="company_pro clearfix">
                <span className="company_text">
                  {this.getHandleText(position.user.name)} |
                  {this.getHandleText(position.title)} | CEO
                </span>
                <span className="company_text">
                  {position.play_count} 人以上
                </span>
              </div>
            </div>
          </div>
          <span className="company_reply">最近回复：今日</span>
        </div>
      </li>
    )
  }
}
