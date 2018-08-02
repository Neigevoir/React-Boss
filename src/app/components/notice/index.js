import React from 'react'
import { connect } from 'react-redux'
import NoticeAction from '../../actions/noticeAction'

function getState(state) {
  return {}
}
@connect(getState)
export default class Notice extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(NoticeAction.getNotice())
  }

  getNoticeDay = date => {
    let nowDate = new Date().getTime()
    let creatDate = date * 1000
    if (nowDate - 7 * 86400000 < creatDate) {
      return Math.floor((nowDate - creatDate) / 86400000) + '天前'
    }
    if (nowDate - 30 * 86400000 < creatDate) {
      return Math.floor((nowDate - creatDate) / (7 * 86400000)) + '周前'
    }
    if (nowDate - 365 * 86400000 < creatDate) {
      return Math.floor((nowDate - creatDate) / (30 * 86400000)) + '月前'
    }
  }

  render() {
    let { NoticeData } = this.props
    return (
      <div>
        <div className="noticeBody">
          <ul>
            {NoticeData &&
              NoticeData.message.map((v, i) => {
                return (
                  <li key={i} className="noticeContent">
                    <div ref="view" className="noticeview">
                      <div ref="content">
                        <h4>{v.title}</h4>
                        <p dangerouslySetInnerHTML={{ __html: v.message }} />
                        <h5 className="checkContent">
                          管理员发表于<b>{this.getNoticeDay(v.created_at)}</b>
                        </h5>
                      </div>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}
