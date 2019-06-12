import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import Input from './components/input'
import withoutHeader from 'src/app/components/HOC/without_header'
import withoutFooter from 'src/app/components/HOC/without_footer'

import './index.scss'

@connect()
@withRouter
@withoutHeader
@withoutFooter
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.dataFrom = {
      tel: null,
      password: null
    }
  }

  changeTelephone = tel => (this.dataFrom.tel = tel)

  changePassword = pas => (this.dataFrom.password = pas)

  setTips = content => {
    this.props.dispatch(
      Actions.common.changeTips({
        isShow: true,
        content
      })
    )
  }

  handleLogin = () => {
    const { tel, password } = this.dataFrom
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
    const { tel, password } = this.dataFrom
    this.props.dispatch(
      Actions.user.getUserLogin(
        {
          username: tel,
          password: password
        },
        this.getLoginSuccess
      )
    )
  }

  getLoginSuccess = (dispatch, res) => {
    localStorage.setItem('token', res.token)
    this.props.dispatch(Actions.user.getLoginInfo(this.getLoginInfoSuccess))
  }

  getLoginInfoSuccess = () => {
    this.props.history.replace('/position')
  }

  handleGoback = () => this.props.history.goBack()

  render() {
    return (
      <div className="passwordLogin">
        <div className="paslogin">
          <div className="loginTitle">
            <span onClick={this.handleGoback}>返回</span>
          </div>
          <img src={require('src/assets/images/passwordBg.jpg')} alt="" />
          <ul className="loginBtnList">
            <li>
              <Input
                type="tel"
                placeholder="手机号"
                autoComplete="unspecified"
                required=""
                pattern="^1[34578]\d{9}$"
                maxLength="11"
                onChange={this.changeTelephone}
              />
            </li>
            <li>
              <Input
                // type={this.state.isShowPas ? 'password' : 'text'}
                type="password"
                placeholder="6-25位字母、数字或下划线"
                required=""
                pattern="^\d{6}$"
                maxLength="6"
                onChange={this.changePassword}
              />
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
