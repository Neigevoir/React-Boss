import './index.scss'

const areaCodes = ['+86', '+10']

export default function PhoneInput(props) {
  const handleChange = e => {
    props.changeTelephone(e.currentTarget.value)
  }

  return (
    <div className="phone-input-container">
      <select className="area-select">
        {_.map(areaCodes, (v, k) => {
          return <option key={k}>{v}</option>
        })}
      </select>
      <input
        className="phone-input"
        type="tel"
        placeholder="请输入手机号"
        autoComplete="unspecified"
        required=""
        pattern="^1[34578]\d{9}$"
        maxLength="11"
        onChange={handleChange}
      />
    </div>
  )
}
