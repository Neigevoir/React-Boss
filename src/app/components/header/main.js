import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'position',
      content: '',
      opacity: 0
    }
  }

  addOpacity = num => {
    this.refs.body.style = `background-color: rgba(83,202,189,${num})`
  }

  setStateType(newType) {
    this.setState({
      type: newType
    })
  }

  render() {
    const {
      titleHidden,
      LeftBtn,
      LeftBtnFunc,
      title,
      RightBtnFunc,
      RightBtn
    } = this.props
    return (
      <div
        ref="body"
        className={titleHidden === 'true' ? 'titleFiexd titleHidden' : 'title'}
      >
        <span className="notice" onClick={LeftBtnFunc}>
          {LeftBtn}
        </span>
        <span>{title}</span>
        <span className="search" onClick={RightBtnFunc}>
          <b>{RightBtn}</b>
        </span>
      </div>
    )
  }
}
