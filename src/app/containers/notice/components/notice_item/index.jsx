import { useMemo } from 'react'

export default function NoticeItem(props) {
  if (_.isEmpty(props.data)) {
    return null
  }
  const { date, message, title, created_at } = props.data

  const getNoticeDay = useMemo(() => {
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
  }, [date])

  return (
    <li className="noticeContent">
      <div ref="view" className="noticeview">
        <div ref="content">
          <h4>{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: message }} />
          <h5 className="checkContent">
            管理员发表于
            <b>{getNoticeDay(created_at)}</b>
          </h5>
        </div>
      </div>
    </li>
  )
}
