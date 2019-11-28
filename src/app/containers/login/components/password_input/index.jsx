import './index.scss'

export default function PasswordInput(props) {
  const { changePassword } = props
  return (
    <div className="password-input-container">
      <input
        className="password-input"
        type="password"
        placeholder="请输入密码"
        required=""
        pattern="^\d{6}$"
        onChange={changePassword}
      />
    </div>
  )
}
