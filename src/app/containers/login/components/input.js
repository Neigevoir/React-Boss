export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue || ''
    }
  }

  handleChange = e => {
    const { onChange } = this.props,
      { value } = e.target
    onChange && onChange(value)
    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="codeBtn">
        <span className="btnLogo">
          <img alt="" src={require('src/assets/images/phone.png')} />
        </span>
        <input
          {...this.props}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <span className="getCode" onClick={this.lookCode}>
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
}

Input.defaultProps = {
  type: 'tel',
  placeholder: '',
  onChange: () => {}
}
