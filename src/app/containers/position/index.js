import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import PositionList from 'src/app/containers/position/components/position_list'
import PositionNav from 'src/app/containers/position/components/seletc_nav'
import './index.scss'

function Title() {
  return <span className="header-left">移动Web前端</span>
}

export default function Position() {
  const list = useSelector(state => state.position.list)
  const filters = useSelector(state => state.position.filters)
  const listType = useSelector(state => state.position.listType)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    // props.dispatch(
    //   Actions.position.getLinePosition({ test: 1 }, (dispatch, res) => {
    //     console.log(res)
    //   })
    // )
    dispatch(
      Actions.common.changeHeader({
        title: '',
        leftBtn: () => <Title />,
        rightBtn: '搜索'
      })
    )
  }, [dispatch, history])

  const getPositionList = state => () => {
    const filter = { ...filters, type: state }
    dispatch(Actions.position.setFilters(filter))
    dispatch(Actions.position.getLinePosition(filter, state))
  }

  const listData = !_.isEmpty(list) ? [...list] : [{ id: 1 }, { id: 2 }]
  return (
    <div className="position-container">
      <PositionNav listType={listType} handleClick={getPositionList} />
      <PositionList
        dispatch={dispatch}
        filters={filters}
        listData={listData.reverse()}
        listType={listType}
      />
    </div>
  )
}
