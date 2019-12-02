import { useSelector } from 'react-redux'
import './index.scss'

const sortItems = {
  recommend: '推荐',
  newest: '最新'
}

export default function PositionNav() {
  const sort = useSelector(state => state.position.sort)
  return (
    <section className="select-nav-container">
      <div className="select-nav-box">
        <nav className="nav-left">
          {_.map(sortItems, (v, k) => {
            return (
              <span
                className={`nav-item ${k === sort ? 'select' : ''}`}
                key={k}
              >
                {v}
              </span>
            )
          })}
        </nav>
        <nav className="nav-right">
          <span className="nav-item">深圳</span>
          <span className="nav-item">筛选</span>
          <span className="nav-item">关键词</span>
        </nav>
      </div>
    </section>
  )
}
