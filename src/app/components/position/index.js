import React from 'react'
import { connect } from 'react-redux'
import Actions from 'src/app/actions/actions'

import PositionList from './positionList'

class Position extends React.Component {
  constructor(props) {
    super(props)

    this.getPositionFormData = {
      offset: 0,
      num: 16,
      fid: 0,
      uid: 0,
      like: 0,
      type: 'recommend'
    }

    this.getPositionList = this.getPositionList.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.TitleChange = this.TitleChange.bind(this)
    this.SearchShow = this.SearchShow.bind(this)
    this.showSelectModal = this.showSelectModal.bind(this)
    this.LeftBtnFunc = this.LeftBtnFunc.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(
      Actions.position.getLinePosition(this.getPositionFormData, 'recommend')
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.refs.navRightSlide.style.webkitTransform =
      'translateX(' + window.screen.availWidth + 'px)'
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  TitleChange(type) {
    if (type === 'show') {
      this.refs.navRightSlide.style.webkitTransform = 'translateX(' + 0 + 'px)'
    } else {
      this.refs.navRightSlide.style.webkitTransform =
        'translateX(' + window.screen.availWidth + 'px)'
    }
  }

  onScroll() {
    if (window.pageYOffset === 0) {
      console.log('已经到顶了！')
    }
  }

  getPositionList(state) {
    if (this.refs.PositionList) {
      console.log(this.refs.PositionList.getNowState())
      // this.refs.PositionList.getNowState(state);
    }
  }

  SearchShow() {
    this.refs.Search.SearchShow()
  }

  showSelectModal(e) {
    this.refs.SelectModal.changeType(e.target.innerHTML)
    this.refs.SelectModal.show()
  }

  LeftBtnFunc() {
    this.context.router.push('notice')
  }

  render() {
    const { PositionData } = this.props,
      position = 'recommend'
    return (
      <div className="positionBody">
        <section className="navSlideBody">
          <nav className="navSlide">
            <span
              className={
                position === 'recommend' ? 'slideRemon select' : 'slideRemon'
              }
              onClick={this.getPositionList.bind(null, 'recommend')}
            >
              推荐
            </span>
            <span
              className={position === 'latest' ? 'slideNew select' : 'slideNew'}
              onClick={this.getPositionList.bind(null, 'latest')}
            >
              最新
            </span>
            <span
              className={position === 'class1' ? 'slideHot select' : 'slideHot'}
              onClick={this.getPositionList.bind(null, 'class1')}
            >
              最热
            </span>
            <span
              className="slideSelect"
              onClick={this.TitleChange.bind(null, 'show')}
            >
              <img
                className="Select"
                src="../../static/images/Speaker.png"
                alt=""
              />
            </span>
          </nav>
          <nav ref="navRightSlide" className="navRightSlide transition">
            <span onClick={this.showSelectModal} className="slideRemon">
              薪水
            </span>
            <span onClick={this.showSelectModal} className="slideNew">
              经验
            </span>
            <span onClick={this.showSelectModal} className="slideHot">
              公司规模
            </span>
            <span
              className="slideSelect"
              onClick={this.TitleChange.bind(null, 'hidden')}
            >
              <img
                alt=""
                className="arrow"
                src="../../static/images/arrow_right.png"
              />
            </span>
          </nav>
        </section>
        <PositionList
          ref="PositionList"
          PositionLine={PositionData ? PositionData.Position : []}
        />
      </div>
    )
  }
}

function select(state) {
  return {
    PositionData: state.PositionReducer,
    PositionType: state.PositionReducer
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Position)
