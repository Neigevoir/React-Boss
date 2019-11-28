import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import useHideFooter from 'src/app/hooks/useHideFooter'
import useHideHeader from 'src/app/hooks/useHideHeader'
import PasswordInput from 'src/app/containers/login/components/password_input'
import PhoneInput from 'src/app/containers/login/components/phone_input'
import './index.scss'

export default function Login() {
  useHideHeader()
  useHideFooter()

  const phone = useRef('')
  const password = useRef('')

  const dispatch = useDispatch()
  const history = useHistory()

  const changeTelephone = tel => (phone.current = tel)

  const changePassword = pas => (password.current = pas)

  const setTips = content => {
    dispatch(Actions.common.changeTips({ isShow: true, content }))
  }

  const handleLogin = () => {
    if (_.isEmpty(phone.current) && _.isEmpty(password.current)) {
      setTips('手机号和密码不能为空')
    } else if (_.isEmpty(phone.current)) {
      setTips('手机号不能为空')
    } else if (_.isEmpty(password.current)) {
      setTips('密码不能为空')
    } else {
      getLogin()
    }
  }

  const getLogin = () => {
    dispatch(
      Actions.user.getUserLogin(
        { phone: phone.current, password: password.current },
        getLoginSuccess
      )
    )
  }

  const getLoginSuccess = res => {
    if (res.error) {
      setTips(res.error)
      return null
    }
    console.log(res.token)
    // localStorage.setItem('token', res.token)
    // dispatch(Actions.user.getLoginInfo(() => history.replace('/position')))
  }

  return (
    <div className="login-container">
      <div>
        <h5 className="login-title">账号登录</h5>
        <ul className="login-input-container">
          <PhoneInput changeTelephone={changeTelephone} />
          <PasswordInput changePassword={changePassword} />
          <div className="login-btn-container">
            <button className="login-btn" onClick={handleLogin}>
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
