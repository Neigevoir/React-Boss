import { useEffect, useState } from 'react'
import useHideHeader from 'src/app/hooks/useHideHeader.js'
import useHideFooter from 'src/app/hooks/useHideFooter.js'
import Actions from 'src/app/actions/actions'
// import PasLogin from './pasLogin'
// import UserAction from '../../action/userAction'

import './index.scss'

export default function Login(props) {
  useHideHeader()
  useHideFooter()
  const { dispatch } = props
  const [tel, setTel] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // props.dispatch(Actions.user.getLoginInfo())
  }, [])

  const handleLogin = () => {
    if (_.isEmpty(tel) && _.isEmpty(password)) {
      dispatch(
        Actions.common.changeTips({
          isShow: true,
          content: '手机号和密码不能为空'
        })
      )
    } else if (_.isEmpty(tel)) {
      dispatch(
        Actions.common.changeTips({
          isShow: true,
          content: '手机号不能为空'
        })
      )
    } else if (_.isEmpty(password)) {
      dispatch(
        Actions.common.changeTips({
          isShow: true,
          content: '密码不能为空'
        })
      )
    } else {
      getLogin()
    }
  }

  const getLogin = () => {
    // NOTE:登录
  }

  return (
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
            <input type="text" placeholder="密码" />
          </div>
        </li>
        <li>
          <button className="loginBtn" onClick={handleLogin}>
            进入
          </button>
        </li>
      </ul>
    </div>
  )
}
