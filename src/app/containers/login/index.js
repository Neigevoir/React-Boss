import React from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import Actions from 'src/app/actions/actions'
// import PasLogin from './pasLogin'
// import UserAction from '../../action/userAction'

import './index.scss'

function getState(state, props) {
  // const { list, filters, listType } = state.customer
  return {}
}
@connect(getState)
export default class Login extends React.Component {
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
    this.props.dispatch(Actions.user.getLoginInfo())
  }

  hadCode = res => {
    // console.log(res);
    // this.refs.Tip.stateChange(res);
  }

  hadMistake = res => {
    if (res.token) {
      Actions.login.getLoginInfo()
      return
    }
    if (res.status_code === '203') this.refs.Tip.stateChange('不存在该验证码')
  }

  getLogin = () => {
    if (
      findDOMNode(this.refs.username).value === '' ||
      findDOMNode(this.refs.code).value === ''
    ) {
      this.refs.Tip.stateChange('请确认输入手机号或验证码！')
      return
    }
    // let data = {
    //   phone: findDOMNode(this.refs.username).value,
    //   code: findDOMNode(this.refs.code).value,
    //   pass: findDOMNode(this.refs.code).value
    // }
    // UserAction.getUserVerify(data)
  }

  getCode = () => {
    // if (this.refs.getCode.innerHTML !== '获取验证码') return
    // let regex = new RegExp(/^1[34578]\d{9}$/)
    // let test = regex.test(findDOMNode(this.refs.username).value)
    // if (test) {
    //   let [time, Account, that] = [60, , this]
    //   function RemainTime() {
    //     time--
    //     if (time > 0) {
    //       if (!that.refs.getCode) {
    //         clearTimeout(Account)
    //         return
    //       }
    //       that.refs.getCode.innerHTML = time + 'S'
    //       Account = setTimeout(RemainTime, 1000)
    //     } else {
    //       that.refs.getCode.innerHTML = '获取验证码'
    //       clearTimeout(Account)
    //     }
    //   }
    //   RemainTime()
    //   this.refs.Tip.stateChange('验证码已发送成功！')
    // UserAction.getUserCode({
    //   phone: findDOMNode(this.refs.username).value,
    //   type: 'forget'
    // })
    // } else {
    //   this.refs.Tip.stateChange('请确认输入手机号！')
    // }
  }

  passwordLogin = () => {
    this.refs.PasLogin.showState()
  }

  render() {
    return (
      <div>
        <div className="login">
          <img src={require('src/assets/images/loginBg.jpg')} alt="" />
          <ul className="loginBtnList">
            <li>
              <div className="codeBtn">
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
                />
              </div>
            </li>
            <li>
              <div className="codeBtn">
                <span className="btnLogo">
                  <img src={require('src/assets/images/phone.png')} alt="" />
                </span>
                <input
                  type="tel"
                  placeholder="验证码"
                  required=""
                  pattern="^\d{6}$"
                  maxLength="6"
                />
                <span className="getCode" onClick={this.getCode}>
                  获取验证码
                </span>
              </div>
            </li>
            <li className="voice">
              长时间收不到验证码，可尝试<u>语音接听验证码</u>
            </li>
            <li>
              <button className="loginBtn" onClick={this.getLogin}>
                进入
              </button>
            </li>
          </ul>
          <footer>
            <span className="loginFooter">用户协议</span>
            <span className="loginFooter" onClick={this.passwordLogin}>
              密码登录
            </span>
          </footer>
        </div>
      </div>
    )
  }
}
