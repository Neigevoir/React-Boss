import React from 'react'

export default class PositionNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
    this.navSlide = React.createRef()
  }

  handleChange = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const { listType, handleClick } = this.props
    const { isShow } = this.state
    return (
      <section className="navSlideBody">
        <nav className="navSlide">
          <span
            className={listType === 'recommend' ? 'slide select' : 'slide'}
            onClick={handleClick('recommend')}
          >
            推荐
          </span>
          <span
            className={listType === 'latest' ? 'slide select' : 'slide'}
            onClick={handleClick('latest')}
          >
            最新
          </span>
          <span
            className={listType === 'class1' ? 'slide select' : 'slide'}
            onClick={handleClick('class1')}
          >
            最热
          </span>
          <span className="slideSelect" onClick={this.handleChange}>
            <img
              className="Select"
              src={require('src/assets/images/Speaker.png')}
              alt=""
            />
          </span>
        </nav>
        <nav
          style={{
            WebkitTransform: `translateX(${isShow ? 0 : global.AvailWidth}px)`
          }}
          className="navRightSlide transition"
        >
          <span onClick={this.showSelectModal} className="slide">
            薪水
          </span>
          <span onClick={this.showSelectModal} className="slide">
            经验
          </span>
          <span onClick={this.showSelectModal} className="slide">
            公司规模
          </span>
          <span className="slideSelect" onClick={this.handleChange}>
            <img
              alt=""
              className="arrow"
              src={require('src/assets/images/arrow_right.png')}
            />
          </span>
        </nav>
      </section>
    )
  }
}
