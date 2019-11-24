import './index.scss'
export default function ListBox(props) {
  const { data, handleClick } = props

  if (!data) {
    return null
  }

  const { position = {} } = data

  const getHandleText = (text = '', length = 5) => {
    return Array.from(text).length > length ? text.substring(0, length) : text
  }

  return (
    <div className="position-content" onClick={handleClick}>
      <div className="positionTitle">
        前端工程师
        <b className="money">8K-50k</b>
      </div>
      <div className="positionTitle">
        <h3 className="positionName">前端工程师</h3>
        <h4 className="positionPay">
          <b className="money">8K-50k</b>
          <b>深圳</b>
          <b>3-5年</b>
          <b>本科</b>
        </h4>
      </div>
      <div className="positionCompany">
        <div>
          <img
            className="avator"
            src={position.image || require('src/assets/images/logo.jpg')}
            alt=""
          />
          <div className="company_pro clearfix">
            <span className="company_text">
              {getHandleText(_.get(data, 'position.user.name', ''))} |
              {getHandleText(position.title)} | CEO
            </span>
            <span className="company_text">{position.play_count} 人以上</span>
          </div>
        </div>
      </div>
    </div>
  )
}
