import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
// import PasLogin from './pasLogin'
// import UserAction from '../../action/userAction'

import './index.scss'

function getState(state, props) {
  // const { list, filters, listType } = state.customer
  return {}
}
@connect(getState)
@withRouter
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tel: null,
      password: null,
      isShowPas: false
    }
  }

  componentDidMount() {
    this.props.dispatch(
      Actions.common.changeHeader({
        isShow: false
      })
    )
    this.props.dispatch(
      Actions.common.changeFooter({
        isShow: false
      })
    )
  }

  setTips = content => {
    this.props.dispatch(
      Actions.common.changeTips({
        isShow: true,
        content
      })
    )
  }

  handleLogin = () => {
    const { tel, password } = this.state
    if (_.isEmpty(tel) && _.isEmpty(password)) {
      this.setTips('手机号和密码不能为空')
    } else if (_.isEmpty(tel)) {
      this.setTips('手机号不能为空')
    } else if (_.isEmpty(password)) {
      this.setTips('密码不能为空')
    } else {
      this.getLogin()
    }
  }

  getLogin = () => {
    this.props.dispatch(
      Actions.user.getUserLogin({
        username: this.state.tel,
        password: this.state.password
      })
    )
  }

  handleGoback = () => this.props.history.goBack()

  render() {
    return (
      <div className="passwordLogin">
        <div className="paslogin">
          <div className="loginTitle">
            <a onClick={this.handleGoback}>返回</a>
          </div>
          <img src={require('src/assets/images/passwordBg.jpg')} alt="" />
          <ul className="loginBtnList">
            <li>
              <div>
                <span className="btnLogo">
                  <img src={require('src/assets/images/phone.png')} alt="" />
                </span>
                <input
                  type="tel"
                  placeholder="手机号"
                  autoComplete="unspecified"
                  required=""
                  pattern="^1[34578]\d{9}$"
                  maxLength="11"
                  onChange={this.changeTel}
                />
              </div>
            </li>
            <li>
              <div className="codeBtn">
                <span className="btnLogo">
                  <img alt="" src={require('src/assets/images/phone.png')} />
                </span>
                <input
                  type={this.state.isShowPas ? 'password' : 'text'}
                  placeholder="6-25位字母、数字或下划线"
                  required=""
                  pattern="^\d{6}$"
                  maxLength="6"
                  onChange={this.changePassword}
                />
                <span className="getCode" onClick={this.lookCode}>
                  {/* <img
                    alt=""
                    src={
                      this.state.isShowPas
                        ? require('src/assets/images/eye_closed.png')
                        : require('src/assets/images/eye.png')
                    }
                  /> */}
                </span>
              </div>
            </li>
            <li className="voice">
              <u>忘记密码</u>
            </li>
            <li>
              <button className="loginBtn" onClick={this.handleLogin}>
                登录
              </button>
            </li>
          </ul>
          <footer>
            <span className="loginFullFooter">用户协议</span>
          </footer>
        </div>
      </div>
    )
  }
}
