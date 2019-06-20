import { useEffect } from 'react'
import { connect } from 'react-redux'
import Actions from 'src/app/actions/actions'
import WithoutFooter from 'src/app/components/HOC/without_footer'

function getState(state) {
  return {
    list: state.notice.list
  }
}

export default connect(getState)(WithoutFooter(Notice))
function Notice(props) {
  const { history, dispatch } = props

  useEffect(() => {
    if (_.isEmpty(props.list)) {
      dispatch(
        Actions.notice.getNotice({
          offset: '0',
          num: '99'
        })
      )
    }
    dispatch(
      Actions.common.changeHeader({
        title: '广告',
        leftBtn: '返回',
        handleLeft: history.goBack,
        rightBtn: '',
        handleRight: () => {}
      })
    )
  }, [])

  const getNoticeDay = date => {
    const nowDate = new Date().getTime(),
      creatDate = date * 1000
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

  const { list } = props
  return (
    <div className="noticeBody">
      <ul>
        {list &&
          list.map((v, i) => {
            return (
              <li key={i} className="noticeContent">
                <div ref="view" className="noticeview">
                  <div ref="content">
                    <h4>{v.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: v.message }} />
                    <h5 className="checkContent">
                      管理员发表于
                      <b>{getNoticeDay(v.created_at)}</b>
                    </h5>
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
