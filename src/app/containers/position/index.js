import React from 'react'
import { connect } from 'react-redux'
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

@connect(getState)
export default class Position extends React.PureComponent {
  constructor(props) {
    super(props)
    this.navSlide = React.createRef()
  }

  componentDidMount() {
    this.props.dispatch(
      Actions.position.getLinePosition(this.props.filters, 'recommend')
    )
    this.props.dispatch(
      Actions.header.changeHeader({
        title: '职位',
        leftBtn: '广告',
        handleLeft: this.gotoNotice,
        rightBtn: '搜索',
        handleRight: this.showSelectModal
      })
    )
  }

  gotoNotice = () => {
    console.log(1)
  }

  onScroll = () => {
    if (window.pageYOffset === 0) {
      console.log('已经到顶了！')
    }
  }

  getPositionList = state => () => {
    const { filters } = this.props
    const filter = { ...filters, type: state }
    this.props.dispatch(Actions.position.setFilters(filter))
    this.props.dispatch(Actions.position.getLinePosition(filter, state))
  }

  SearchShow = () => {
    this.refs.Search.SearchShow()
  }

  showSelectModal = e => {
    this.refs.SelectModal.changeType(e.target.innerHTML)
    this.refs.SelectModal.show()
  }

  render() {
    const { list, listType, filters, dispatch } = this.props
    return (
      <div className="positionBody">
        <PositionNav listType={listType} handleClick={this.getPositionList} />
        <PositionList
          ref="PositionList"
          dispatch={dispatch}
          filters={filters}
          listData={list}
          listType={listType}
        />
      </div>
    )
  }
}
