import { useState } from 'react'

export default function Input(props) {
  const [value, setValue] = useState(props.defaultValue || '')

  const handleChange = e => {
    const { value } = e.target
    props.onChange && props.onChange(value)
    setValue(value)
  }

  const lookCode = () => {}

  return (
    <div className="codeBtn">
      <span className="btnLogo">
        <img alt="" src={require('src/assets/images/phone.png')} />
      </span>
      <input {...props} value={value} onChange={handleChange} />
      <span className="getCode" onClick={lookCode}>
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
  )
}

Input.defaultProps = {
  type: 'tel',
  placeholder: '',
  onChange: () => {}
}
