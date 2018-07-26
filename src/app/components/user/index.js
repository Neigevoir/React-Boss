import React from 'react'
import { connect } from 'react-redux'

import Header from '../header/main'

import '../../../styles/user/user.less'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.LoginInfo = this.LoginInfo.bind(this)
    this.showSettings = this.showSettings.bind(this)
    this.LeftBtnFunc = this.LeftBtnFunc.bind(this)
    this._initialize = this._initialize.bind(this)
  }

  componentDidMount() {
    this._initialize()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeOpacity)
  }

  _initialize() {
    this.refs.userAvator.style.width = window.screen.availWidth + 'px'
    this.refs.userAvator.style.height = window.screen.availWidth * 0.625 + 'px'
    let srcollY = window.screen.availWidth * 0.625 - 50
    window.addEventListener('scroll', this.changeOpacity.bind(this, srcollY))
  }

  changeOpacity(srcollY) {
    if (this.refs.header)
      this.refs.header.addOpacity(parseFloat(window.pageYOffset / srcollY))
  }

  showSettings() {
    this.refs.Settings.showState()
  }

  LoginInfo(res) {
    this.refs.loading.hidden()
    if (res.data.login) {
      this.setState({
        InfoData: res
      })
    }
    if (res.user != null) {
      this.setState({
        InfoData: res
      })
    }
  }

  getUserInfo(res) {
    this.setState({
      UserInfo: res
    })
  }

  LeftBtnFunc() {
    this.context.router.push('notice')
  }

  render() {
    let { UserInfo, InfoData } = this.props
    UserInfo = true
    return (
      <div>
        <Header
          ref="header"
          LeftBtn="广播"
          LeftBtnFunc={this.LeftBtnFunc}
          title={
            !InfoData ? (UserInfo ? UserInfo.name : '') : InfoData.data.name
          }
          titleHidden="true"
          RightBtn="设置"
          RightBtnFunc={this.showSettings}
        />
        {UserInfo ? (
          <div ref="body" className="userBody">
            <div className="userTop">
              <img
                ref="userAvator"
                className="userAvator"
                src="static/images/beaut.jpg"
              />
              <div className="user">
                <div className="userData">
                  <div className="userState">
                    <img
                      src={
                        InfoData
                          ? 'http://www.ih5.cn' + InfoData.data.picture
                          : UserInfo.avatar
                      }
                    />
                    <div className="State">
                      <h5>{InfoData ? InfoData.data.name : UserInfo.name}</h5>
                      <span>编辑100%</span>
                      <span>{UserInfo.state}</span>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="userPoint">
                    <h4>
                      {UserInfo.point}
                      <img src="../../../static/images/GoldCoin.png" />
                    </h4>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <ul className="navList">
              <li>
                <div className="userOpreation userOpreationBorder">
                  <img src="../../../static/images/message.png" />
                  <div className="operationText">
                    <span>{UserInfo.contact}</span>
                    <span>沟通过</span>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="userOpreation">
                  <img src="../../../static/images/collect.png" />
                  <div className="operationText">
                    <span>{UserInfo.collect}</span>
                    <span>收藏过</span>
                  </div>
                </div>
                <div className="clearfix" />
              </li>
              <li>
                <div className="PointOperation">
                  <div className="floatLeft">
                    <img src="../../../static/images/file.png" />
                    <span>上传附件简历</span>
                  </div>
                  <div className="floatRight">
                    <span>送20积分</span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              <li>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/task.png" />
                    <span>积分任务</span>
                  </div>
                  <div className="floatRight">
                    <span>获得积分越多，推荐排名越高</span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/trophy.png" />
                    <span>成就</span>
                  </div>
                  <div className="floatRight">
                    <span />
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/bean.png" />
                    <span>真豆</span>
                  </div>
                  <div className="floatRight">
                    <span>0</span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/money.png" />
                    <span>零钱</span>
                  </div>
                  <div className="floatRight">
                    <span>0元</span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              <li>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/case.png" />
                    <span>我的道具</span>
                  </div>
                  <div className="floatRight">
                    <span>
                      拥有：<b>0</b>
                    </span>
                    <span>
                      使用中:<b>0</b>
                    </span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              <li>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/case.png" />
                    <span>我的道具</span>
                  </div>
                  <div className="floatRight">
                    <span>
                      拥有：<b>0</b>
                    </span>
                    <span>
                      使用中:<b>0</b>
                    </span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              <li>
                <div className="Operation">
                  <div className="floatLeft">
                    <img src="../../../static/images/case.png" />
                    <span>我的道具</span>
                  </div>
                  <div className="floatRight">
                    <span>
                      拥有：<b>0</b>
                    </span>
                    <span>
                      使用中:<b>0</b>
                    </span>
                    <img src="../../../static/images/right.png" />
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

function selectState(state, type) {
  switch (type) {
    case 'UserData':
      if (state.UserData) {
        return state.UserData.data
      }
      return null
    case 'UserType':
      if (state.UserType) return state.UserType.status_code
      return null
  }
}

function select(state) {
  console.log(state)
  return {
    UserData: selectState(state.UserReducer, 'UserData'),
    UserType: selectState(state.UserReducer, 'UserType')
  }
}

export default connect(select)(User)
