import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Actions from 'src/app/actions/actions'
import useHideFooter from 'src/app/hooks/useHideFooter'
import NoticeItem from 'src/app/hooks/useHideFooter'

export default function NoticeContainer() {
  useHideFooter()

  const list = useSelector(state => state.notice.list)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (_.isEmpty(list)) {
      dispatch(Actions.notice.getNotice({ offset: '0', num: '99' }))
    }
    dispatch(
      Actions.common.changeHeader({
        title: '广告',
        leftBtn: '返回',
        handleLeft: history.goBack,
        rightBtn: ''
      })
    )
  }, [dispatch, list, history.goBack])

  return (
    <div className="noticeBody">
      {_.map(list, (v, i) => {
        return <NoticeItem data={v} key={i} />
      })}
    </div>
  )
}
