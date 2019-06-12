import { connect } from 'react-redux'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Actions from 'src/app/actions/actions'
import Input from './components/input'
import withoutHeader from 'src/app/components/HOC/without_header'
import withoutFooter from 'src/app/components/HOC/without_footer'
import './index.scss'

export default connect()(withRouter(withoutHeader(withoutFooter(Login))))

function Login(props) {
  const { history, dispatch } = props

  const [tel, setTel] = useState(null)

  const [password, setPassword] = useState(null)

  const changeTelephone = tel => setTel(tel)

  const changePassword = pas => setPassword(pas)

  const setTips = content => {
    dispatch(Actions.common.changeTips({ isShow: true, content }))
  }

  const handleLogin = () => {
    if (_.isEmpty(tel) && _.isEmpty(password)) {
      setTips('手机号和密码不能为空')
    } else if (_.isEmpty(tel)) {
      setTips('手机号不能为空')
    } else if (_.isEmpty(password)) {
      setTips('密码不能为空')
    } else {
      getLogin()
    }
  }

  const getLogin = () => {
    const data = { username: tel, password: password }
    dispatch(Actions.user.getUserLogin(data, getLoginSuccess))
  }

  const getLoginSuccess = (dispatch, res) => {
    localStorage.setItem('token', res.token)
    dispatch(Actions.user.getLoginInfo(() => history.replace('/position')))
  }

  return (
    <div className="passwordLogin">
      <div className="paslogin">
        <div className="loginTitle">
          <span onClick={history.goBack}>返回</span>
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
              onChange={changeTelephone}
            />
          </li>
          <li>
            <Input
              // type={this.state.isShowPas ? 'password' : 'text'}
              type="password"
              placeholder="6-25位字母、数字或下划线"
              required=""
              pattern="^\d{6}$"
              onChange={changePassword}
            />
          </li>
          <li className="voice">
            <u>忘记密码</u>
          </li>
          <li>
            <button className="loginBtn" onClick={handleLogin}>
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
