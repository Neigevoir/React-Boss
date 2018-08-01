import React from 'react'
import { connect } from 'react-redux'
import Actions from 'src/app/actions/actions'
import PositionList from './positionList'

function getState(state, props) {
  const { list, type } = state.position
  return {
    list,
    type
  }
}

@connect(getState)
export default class Position extends React.Component {
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
    this.navRightSlide = React.createRef()
  }

  componentWillMount() {
    this.props.dispatch(
      Actions.position.getLinePosition(this.getPositionFormData, 'recommend')
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.navRightSlide.current.style.webkitTransform =
      'translateX(' + window.screen.availWidth + 'px)'
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  TitleChange = type => () => {
    if (type === 'show') {
      this.navRightSlide.current.style.webkitTransform = `translateX(0px)`
    } else {
      this.navRightSlide.current.style.webkitTransform =
        'translateX(' + window.screen.availWidth + 'px)'
    }
  }

  onScroll = () => {
    if (window.pageYOffset === 0) {
      console.log('已经到顶了！')
    }
  }

  getPositionList = state => {
    if (this.refs.PositionList) {
      console.log(this.refs.PositionList.getNowState())
      // this.refs.PositionList.getNowState(state);
    }
  }

  SearchShow = () => {
    this.refs.Search.SearchShow()
  }

  showSelectModal = e => {
    this.refs.SelectModal.changeType(e.target.innerHTML)
    this.refs.SelectModal.show()
  }

  LeftBtnFunc = () => this.context.router.push('notice')

  render() {
    const { list, type } = this.props
    return (
      <div className="positionBody">
        <section className="navSlideBody">
          <nav className="navSlide">
            <span
              className={
                type === 'recommend' ? 'slideRemon select' : 'slideRemon'
              }
              onClick={this.getPositionList.bind(null, 'recommend')}
            >
              推荐
            </span>
            <span
              className={type === 'latest' ? 'slideNew select' : 'slideNew'}
              onClick={this.getPositionList.bind(null, 'latest')}
            >
              最新
            </span>
            <span
              className={type === 'class1' ? 'slideHot select' : 'slideHot'}
              onClick={this.getPositionList.bind(null, 'class1')}
            >
              最热
            </span>
            <span className="slideSelect" onClick={this.TitleChange('show')}>
              <img
                className="Select"
                src="../../static/images/Speaker.png"
                alt=""
              />
            </span>
          </nav>
          <nav ref={this.navRightSlide} className="navRightSlide transition">
            <span onClick={this.showSelectModal} className="slideRemon">
              薪水
            </span>
            <span onClick={this.showSelectModal} className="slideNew">
              经验
            </span>
            <span onClick={this.showSelectModal} className="slideHot">
              公司规模
            </span>
            <span className="slideSelect" onClick={this.TitleChange('hidden')}>
              <img
                alt=""
                className="arrow"
                src="../../static/images/arrow_right.png"
              />
            </span>
          </nav>
        </section>
        <PositionList ref="PositionList" listData={list} />
      </div>
    )
  }
}
