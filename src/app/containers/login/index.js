import { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import useHideFooter from 'src/app/hooks/useHideFooter'
import useHideHeader from 'src/app/hooks/useHideHeader'
import PasswordInput from 'src/app/containers/login/components/password_input'
import PhoneInput from 'src/app/containers/login/components/phone_input'
import * as storage from 'src/app/lib/storage.js'
import './index.scss'

export default function Login() {
  useHideHeader()
  useHideFooter()

  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch()
  const history = useHistory()

  const changeTelephone = tel => setPhone(tel)

  const changePassword = pas => setPassword(pas)

  const setTips = content => {
    dispatch(Actions.common.changeTips({ isShow: true, content }))
  }

  const submitTipText = useMemo(() => {
    let text = ''
    if (_.isEmpty(phone) && _.isEmpty(password)) {
      text = '手机号和密码不能为空'
    } else if (_.isEmpty(phone)) {
      text = '手机号不能为空'
    } else if (_.isEmpty(password)) {
      text = '密码不能为空'
    }
    return text
  }, [phone, password])

  const handleLogin = () => {
    if (_.isEmpty(submitTipText)) {
      getLogin()
    } else {
      setTips(submitTipText)
    }
  }

  const getLogin = () => {
    dispatch(Actions.user.getUserLogin({ phone, password }, getLoginSuccess))
  }

  const getLoginSuccess = res => {
    if (res.token) {
      console.log(res.token)
      storage.set('token', res.token, localStorage)
      dispatch(Actions.user.getLoginInfo(() => history.replace('/position')))
    } else {
      setTips(res.error)
    }
  }

  return (
    <div className="login-container">
      <div>
        <h5 className="login-title">账号登录</h5>
        <ul className="login-input-container">
          <PhoneInput changeTelephone={changeTelephone} />
          <PasswordInput changePassword={changePassword} />
          <div className="login-btn-container">
            <button
              className="login-btn"
              disabled={!_.isEmpty(submitTipText)}
              onClick={handleLogin}
            >
              登录
            </button>
          </div>
        </ul>
        <div className="other-btn-container">
          <span>短信登录</span>
          <span className="forget-password">忘记密码?</span>
        </div>
      </div>
      <footer className="wechat-login-container">
        <span>微信登录</span>
        <img
          className="wechat-login-icon"
          alt=""
          src="https://www.easyicon.net/api/resizeApi.php?id=1230528&size=48"
        />
      </footer>
    </div>
  )
}
