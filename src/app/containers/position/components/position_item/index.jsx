import './index.scss'
export default function ListBox(props) {
  const { data, handleClick } = props

  if (!data) {
    return null
  }

  const { position = {} } = data

  const getHandleText = (text = '', length = 5) => {
    return text.length > length ? text.substring(0, length) : text
  }

  return (
    <div className="position-content" onClick={handleClick}>
      <div className="position-title">
        <span>前端工程师</span>
        <span className="money">8K-50k</span>
      </div>
      <div className="company-info">
        <span>腾讯科技</span>
        <span className="scale">D轮</span>
      </div>
      <div className="position-info">
        <span className="text-box">深圳</span>
        <span className="text-box">3-5年</span>
        <span className="text-box">本科</span>
      </div>
      <div className="hr-info">
        <img
          className="hr-avator"
          src={position.image || require('src/assets/images/logo.jpg')}
          alt=""
        />
        <span className="hr-name">马云.董事长</span>
      </div>
    </div>
  )
}
