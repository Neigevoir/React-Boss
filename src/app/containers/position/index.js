import { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import PositionList from './positionList'
import PositionNav from 'src/app/containers/position/components/nav.js'

function getState(state, props) {
  const { list, filters, listType } = state.position
  return {
    list,
    filters,
    listType
  }
}

export default connect(getState)(withRouter(Position))
function Position(props) {
  useEffect(() => {
    props.dispatch(
      Actions.position.getLinePosition({ test: 1 }, (dispatch, res) => {
        console.log(res)
      })
    )
    props.dispatch(
      Actions.common.changeHeader({
        title: '职位',
        leftBtn: '广告',
        handleLeft: gotoNotice,
        rightBtn: '搜索'
        // handleRight: this.showSelectModal
      })
    )
  }, [])

  const gotoNotice = () => props.history.push('/notice')

  const getPositionList = state => () => {
    const { filters } = props
    const filter = { ...filters, type: state }
    props.dispatch(Actions.position.setFilters(filter))
    props.dispatch(Actions.position.getLinePosition(filter, state))
  }

  const { list, listType, filters, dispatch } = props
  const listData = !_.isEmpty(list) ? [...list] : []
  return (
    <div className="positionBody">
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
