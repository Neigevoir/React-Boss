import './index.scss'
export default function ListBox(props) {
  const { item, handleClick } = props

  if (!item) {
    return null
  }

  const { title, conpany, hr, time, education, area, scale, money } = item.data

  return (
    <div className="position-content" onClick={handleClick}>
      <div className="position-title">
        <span>{title}</span>
        <span className="money">{money}</span>
      </div>
      <div className="company-info">
        <span>{conpany}</span>
        <span className="scale">{scale}</span>
      </div>
      <div className="position-info">
        <span className="text-box">{area}</span>
        <span className="text-box">{time}</span>
        <span className="text-box">{education}</span>
      </div>
      <div className="hr-info">
        <img
          className="hr-avator"
          src={require('src/assets/images/logo.jpg')}
          alt=""
        />
        <span className="hr-name">{hr}</span>
      </div>
    </div>
  )
}
