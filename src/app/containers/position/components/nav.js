import { useState } from 'react'

export default function PositionNav({ listType, handleClick }) {
  const [isShow, setIsShow] = useState(false)

  const handleChange = () => setIsShow(isShow => !isShow)

  const showSelectModal = () => {}

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
        <span className="slideSelect" onClick={handleChange}>
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
        <span onClick={showSelectModal} className="slide">
          薪水
        </span>
        <span onClick={showSelectModal} className="slide">
          经验
        </span>
        <span onClick={showSelectModal} className="slide">
          公司规模
        </span>
        <span className="slideSelect" onClick={handleChange}>
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
