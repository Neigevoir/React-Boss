const areaCodes = ['+86']

export default function PhoneInput(props) {
  const { changeTelephone } = props
  return (
    <div>
      <select>
        {_.map(areaCodes, (v, k) => {
          return <option key={k}>{v}</option>
        })}
      </select>
      <input
        type="tel"
        placeholder="请输入手机号"
        autoComplete="unspecified"
        required=""
        pattern="^1[34578]\d{9}$"
        maxLength="11"
        onChange={changeTelephone}
      />
    </div>
  )
}
