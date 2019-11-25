import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Actions from 'src/app/actions/actions'
import useHideFooter from 'src/app/hooks/useHideFooter'
import NoticeItem from 'src/app/hooks/useHideFooter'

export default function NoticeContainer(props) {
  useHideFooter()

  const list = useSelector(state => state.notice.list)
  const dispatch = useDispatch()

  useEffect(() => {
    if (_.isEmpty(list)) {
      dispatch(Actions.notice.getNotice({ offset: '0', num: '99' }))
    }
    dispatch(
      Actions.common.changeHeader({
        title: '广告',
        leftBtn: '返回',
        handleLeft: props.history.goBack,
        rightBtn: '',
        handleRight: () => {}
      })
    )
  }, [])

  return (
    <div className="noticeBody">
      {_.map(list, (v, i) => {
        return <NoticeItem data={v} key={i} />
      })}
    </div>
  )
}
