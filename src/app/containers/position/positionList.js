import React from 'react'
import Actions from 'src/app/actions/actions'

export default class PositionList extends React.Component {
  constructor(props) {
    super(props)
    this.filters = props.filters
    this.PositionState = ['recommend', 'latest', 'class1']
    this.position = React.createRef()
    this.body = React.createRef()
  }

  componentDidMount() {
    this.body.current.style.height = window.screen.availHeight - 85 + 'px' //用作overflow
    this.addScroll()
  }

  getSearchList = res => {
    let newData = []
    Array.from(res.data).map((v, k) => {
      newData.push(v)
      return null
    })
    this.setState({
      PositionLine: newData
    })
  }

  onload = x => {
    let i
    this.PositionState.map((v, k) => {
      if (this.props.listType === v) i = k
      return null
    })
    if (x > 0) {
      if (this.props.listType === 'recommend') return
      this.props.select(this.PositionState[i - 1])
    } else {
      if (this.props.listType === 'class1') return
      this.props.select(this.PositionState[i + 1])
    }
    this.position.current.setAttribute('class', 'positionList')
    this.position.current.style.webkitTransform = `translateX(0px)`
  }

  getNewState = (num, width, type) => {
    const position = this.position.current
    position.setAttribute('class', 'positionList transition')
    if (type === 'x') {
      if (num > 0) {
        if (this.props.listType === 'recommend') return
        if (num < width * 0.3) {
          position.style.webkitTransform = `translateX(0px)`
          return
        }
        position.style.webkitTransform = `translateX(${width}px)`
      } else if (num < 0) {
        if (this.props.listType === 'class1') return
        if (num > -width * 0.3) {
          position.style.webkitTransform = `translateX(0px)`
          return
        }
        position.style.webkitTransform = `translateX(-${width}px)`
      } else {
        console.log('Silly B')
      }
    } else {
      if (this.body.current.scrollTop === 0) {
        position.style.webkitTransform = `translateY(0px)`
      }
    }
  }

  move = (num, type) => {
    const position = this.position.current
    if (type === 'x') {
      if (num > 0) {
        if (this.props.listType === 'recommend') return
        position.style.webkitTransform = `translateX(${num}px)`
      } else {
        if (this.props.listType === 'class1') return
        position.style.webkitTransform = `translateX(${num}px)`
      }
    } else {
      if (this.body.current.scrollTop === 0) {
        if (num > 0) {
          position.style.webkitTransform = `translateY(${num}px)`
        } else {
          // position.style.webkitTransform = 'translateY('+num+ 'px)';
        }
      }
    }
  }

  addScroll = () => {
    let startX,
      moveX,
      endX,
      startY,
      moveY,
      endY,
      Type,
      Num = 0

    this.position.current.addEventListener('touchstart', e => {
      moveX = 0
      Num = 0
      startX = e.touches[0].pageX
      startY = e.touches[0].pageY
    })
    this.position.current.addEventListener('touchmove', e => {
      endX = e.changedTouches[0].pageX
      endY = e.changedTouches[0].pageY
      moveX = endX - startX
      moveY = endY - startY
      Num += 1
      if (Num === 1) {
        if (Math.abs(moveY) < Math.abs(moveX)) {
          Type = 'x'
        } else {
          Type = 'y'
        }
      }
      if (Type === 'x') {
        e.preventDefault()
        this.move(moveX, 'x')
      }
      if (Type === 'y') {
        this.move(moveY, 'y')
        startX = endX
        moveX = 0
      }
    })
    this.position.current.addEventListener('touchend', e => {
      this.getNewState(moveX, e.view.screen.width, Type)
    })
    this.position.current.addEventListener('webkitTransitionEnd', e => {
      this.position.current.setAttribute('class', 'positionList')
      if (Type === 'x') {
        if (Math.abs(moveX) < global.AvailWidth * 0.3) {
        } else {
          this.onload(moveX)
        }
      } else {
        if (Math.abs(moveY) > parseInt(global.AvailHeight - 135, 10) * 0.25) {
          this.filters.num += 16
          this.props.dispatch(
            Actions.position.getLinePosition(this.filters, this.props.listType)
          )
        }
      }
    })
  }

  getLineData = state => {
    this.filters.num = 16
    this.filters.type = state
    this.props.dispatch(
      Actions.position.getLinePosition(this.filters, this.props.listType)
    )
    // PositionAction.getLinePosition(this.getPositionFormData);
  }

  getNowState = state => {
    this.getLineData(state)
  }

  positionDetail = v => () => {
    // this.refs.detail.getPositionData(v);
  }

  getHandleText = (text, length = 5) => {
    return Array.from(text).length > length ? text.substring(0, length) : text
  }

  render() {
    const { listData } = this.props
    return (
      <div ref={this.body} className="positionListBody">
        <div ref={this.position} className="positionList">
          <ul className="positionUl">
            {!_.isEmpty(listData) &&
              listData.reverse().map((v, k) => {
                return (
                  <li key={k} onClick={this.positionDetail(v)}>
                    <div className="position_content">
                      <div className="positionTitle">
                        <h3 className="positionName">前端工程师</h3>
                        <h4 className="positionPay">
                          <b className="money">8K-50k</b>
                          <b>深圳</b>
                          <b>3-5年</b>
                          <b>本科</b>
                        </h4>
                      </div>
                      <div className="positionCompany">
                        <div>
                          <img
                            className="avator"
                            src={
                              v.image || require('src/assets/images/logo.jpg')
                            }
                            alt=""
                          />
                          <div className="company_pro clearfix">
                            <span className="company_text">
                              {this.getHandleText(v.user.name)} |
                              {this.getHandleText(v.title)} | CEO
                            </span>
                            <span className="company_text">
                              {v.play_count}人以上
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="company_reply">最近回复：今日</span>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}
