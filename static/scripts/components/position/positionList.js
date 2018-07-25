import React from 'react'
import { connect } from 'react-redux'
import { getLinePosition, getSearchList } from '../../actions/positionAction'

import Loading from '../ui/loading'

class PositionList extends React.Component {
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
    this.PositionState = ['recommend', 'latest', 'class1']

    this.getLineData = this.getLineData.bind(this)
    this.addScroll = this.addScroll.bind(this)
    this.move = this.move.bind(this)
    this.getNewState = this.getNewState.bind(this)
    this.onload = this.onload.bind(this)
    this.positionDetail = this.positionDetail.bind(this)
    this.getLinePosition = this.getLinePosition.bind(this)
    this.getSearchList = this.getSearchList.bind(this)
    this.getNowState = this.getNowState.bind
  }

  componentWillMount() {
    // if(localStorage.getItem("token")){
    //     this.context.router.push("login");
    //     PositionAction.getLinePosition(this.getPositionFormData);
    // }
  }

  componentDidMount() {
    // this.refs.loading.show();  //用作过渡效果
    this.refs.body.style.height = window.screen.availHeight - 85 + 'px' //用作overflow
    this.addScroll()
  }

  componentWillUnmount() {}

  getSearchList(res) {
    let newData = []
    Array.from(res.data).map((v, k) => {
      newData.push(v)
    })
    this.setState({
      PositionLine: newData
    })
  }

  onload(x) {
    let i
    this.PositionState.map((v, k) => {
      if (this.state.type == v) i = k
    })
    if (x > 0) {
      if (this.state.type == 'recommend') return
      this.props.select(this.PositionState[i - 1])
    } else {
      if (this.state.type == 'class1') return
      this.props.select(this.PositionState[i + 1])
    }
    this.refs.position.setAttribute('class', 'positionList')
    this.refs.position.style.webkitTransform = 'translateX(' + 0 + 'px)'
  }

  getNewState(num, width, type) {
    this.refs.position.setAttribute('class', 'positionList transition')
    if (type == 'x') {
      if (num > 0) {
        if (this.state.type == 'recommend') return
        if (num < width * 0.3) {
          this.refs.position.style.webkitTransform = 'translateX(' + 0 + 'px)'
          return
        }
        this.refs.position.style.webkitTransform = 'translateX(' + width + 'px)'
      } else if (num < 0) {
        if (this.state.type == 'class1') return
        if (num > -width * 0.3) {
          this.refs.position.style.webkitTransform = 'translateX(' + 0 + 'px)'
          return
        }
        this.refs.position.style.webkitTransform =
          'translateX(-' + width + 'px)'
      } else {
        console.log('Silly B')
      }
    } else {
      if (this.refs.body.scrollTop == 0) {
        this.refs.position.style.webkitTransform = 'translateY(' + 0 + 'px)'
      }
    }
  }

  move(num, type) {
    if (type == 'x') {
      if (num > 0) {
        if (this.state.type == 'recommend') return
        this.refs.position.style.webkitTransform = 'translateX(' + num + 'px)'
      } else {
        if (this.state.type == 'class1') return
        this.refs.position.style.webkitTransform = 'translateX(' + num + 'px)'
      }
    } else {
      if (this.refs.body.scrollTop == 0) {
        if (num > 0) {
          this.refs.position.style.webkitTransform = 'translateY(' + num + 'px)'
        } else {
          // this.refs.position.style.webkitTransform = 'translateY('+num+ 'px)';
        }
      }
    }
  }

  addScroll(e) {
    let startX,
      moveX,
      endX,
      startY,
      moveY,
      endY,
      Type,
      Num = 0

    this.refs.position.addEventListener('touchstart', e => {
      moveX = 0
      Num = 0
      startX = e.touches[0].pageX
      startY = e.touches[0].pageY
    })
    this.refs.position.addEventListener('touchmove', e => {
      endX = e.changedTouches[0].pageX
      endY = e.changedTouches[0].pageY
      moveX = endX - startX
      moveY = endY - startY
      Num += 1
      if (Num == 1) {
        if (Math.abs(moveY) < Math.abs(moveX)) {
          Type = 'x'
        } else {
          Type = 'y'
        }
      }
      if (Type == 'x') {
        e.preventDefault()
        this.move(moveX, 'x')
      }
      if (Type == 'y') {
        this.move(moveY, 'y')
        startX = endX
        moveX = 0
      }
    })
    this.refs.position.addEventListener('touchend', e => {
      this.getNewState(moveX, e.view.screen.width, Type)
    })
    this.refs.position.addEventListener('webkitTransitionEnd', e => {
      this.refs.position.setAttribute('class', 'positionList')
      if (Type == 'x') {
        if (Math.abs(moveX) < window.screen.availWidth * 0.3) {
        } else {
          this.onload(moveX)
        }
      } else {
        if (
          Math.abs(moveY) >
          parseInt(window.screen.availHeight - 135) * 0.25
        ) {
          let PostData = this.getPositionFormData
          PostData.num += 16
          PostData.type = this.state.type
          // this.refs.loading.show();
          this.props.dispatch(
            getLinePosition(this.getPositionFormData, 'recommend')
          )
          // PositionAction.getLinePosition(PostData);
        }
      }
    })
  }

  getLineData(state) {
    this.getPositionFormData.num = 16
    this.getPositionFormData.type = state
    // this.refs.loading.show();
    this.props.dispatch(getLinePosition(this.getPositionFormData, 'recommend'))
    // PositionAction.getLinePosition(this.getPositionFormData);
  }

  getLinePosition(res) {
    this.setState(
      {
        PositionLine: res.data.reverse()
      },
      () => {
        this.refs.loading.hidden()
      }
    )
  }

  getNowState(state) {
    this.getLineData(state)
  }

  positionDetail(v) {
    // this.refs.detail.getPositionData(v);
  }

  render() {
    let PositionLine, bobo
    if (this.props.PositionLine) {
      bobo = this.props.PositionLine.positiondata
    }
    if (bobo) {
      PositionLine = bobo.data
    }
    return (
      <div ref="body" className="positionListBody">
        <div ref="position" className="positionList">
          <ul className="positionUl">
            {PositionLine
              ? PositionLine.map((v, k) => {
                  return (
                    <li key={k} onClick={this.positionDetail.bind(null, v)}>
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
                                v.image
                                  ? v.image
                                  : '../../../static/images/logo.jpg'
                              }
                            />
                            <div className="company_pro clearfix">
                              <span className="company_text">
                                {Array.from(v.user.name).length > 5
                                  ? v.user.name.substring(0, 5)
                                  : v.name}{' '}
                                |
                                {Array.from(v.title).length > 5
                                  ? v.title.substring(0, 5)
                                  : v.title}{' '}
                                | CEO
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
                })
              : ''}
          </ul>
        </div>
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
export default connect(select)(PositionList)
