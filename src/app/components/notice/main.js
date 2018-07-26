import React from 'react'
import { connect } from 'react-redux'

import Header from '../header/main'
import Loading from '../ui/loading'

import NoticeAction from '../../actions/noticeAction'

class Notice extends React.PureComponent {
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
    let { NoticeData, NoticeType } = this.props
    return (
      <div>
        <Header
          title="广播"
          LeftBtn="返回"
          LeftBtnFunc={this.context.router.goBack}
        />
        <Loading type={NoticeType == 'Fetching' ? 'block' : 'hidden'} />
        <div className="noticeBody">
          <ul>
            {NoticeData
              ? NoticeData.message.map((v, i) => {
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
                })
              : ''}
          </ul>
        </div>
      </div>
    )
  }
}

function selectState(state, type) {
  switch (type) {
    case 'NoticeData':
      if (state.Notice) {
        return state.Notice.data
      }
      return null
    case 'NoticeType':
      if (state.Notice)
        return state.Notice.FetchType || state.Notice.status_code
      return 'hidden'
    default:
      return null
  }
}

function select(state) {
  return {
    NoticeData: selectState(state.NoticeReducer, 'NoticeData'),
    NoticeType: selectState(state.NoticeReducer, 'NoticeType')
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Notice)
