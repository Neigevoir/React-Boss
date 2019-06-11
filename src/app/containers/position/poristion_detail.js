import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Actions from 'src/app/actions/actions'

function getState(state, props) {
  const { list } = state.position,
    { index } = props.history.location.state
  return {
    position: list[index]
  }
}

@connect(getState)
@withRouter
export default class PositionDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'hidden',
      data: null,
      focus: 0
    }
  }

  componentDidMount() {}

  PositionColloct = () => {
    if (this.state.data) {
      if (this.state.data.user.is_focus) return
      this.props.dispatch(
        Actions.user.getUserShow({ uid: this.state.data.uid })
      )
    }
  }

  UserCommunication = () => {
    this.refs.InfoDetail.setState(
      {
        type: 'show',
        data: this.state.data
      },
      () => {
        this.refs.InfoDetail.getUserMessage()
      }
    )
  }

  getPositionData = data => {
    this.props.dispatch(Actions.user.getUserShow({ nid: data.nid }))
  }

  getHandleText = (text, length = 5) => {
    return Array.from(text).length > length ? text.substring(0, length) : text
  }

  render() {
    const { position } = this.state
    return (
      <div className="positionDetail">
        <div className="positionDetailBody">
          {position && (
            <ul className="detailBody">
              <li>
                <h4 className="fontDefaultColor">{position.title}</h4>
                <h5>8-50k {position.title}</h5>
                <h5>深圳 3-5年 本科</h5>
              </li>
              <li>
                <div>
                  <img alt="" className="avator" src={position.user.picture} />
                  <div className="company_pro">
                    <span className="company_text">
                      {this.getHandleText(position.user.nick_name)}|
                      {this.getHandleText(position.title)}| CEO
                    </span>
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              <li>
                <h4>职位描述</h4>
                <div>{position.description}</div>
              </li>
              <li>
                <h4>团队介绍</h4>
                <p>阿里巴巴</p>
              </li>
              <li>
                <h4>{position.scale}</h4>
                <p>134567890</p>
              </li>
            </ul>
          )}
          <div className="positionDetailBottom">
            <span
              className="positionDetailBtn positionColloct"
              onClick={this.PositionColloct}
            >
              <img alt="" className="btnIcon" src={require('')} />
              {position.focus ? '已关注' : '+收藏'}
            </span>
            <span
              className="positionDetailBtn"
              onClick={this.UserCommunication}
            >
              <img
                alt=""
                className="btnIcon"
                src="static/images/positionInfo.png"
              />
              立即沟通
            </span>
          </div>
        </div>
      </div>
    )
  }
}
