import { useSelector } from 'react-redux'
import './index.scss'

function renderChild(Child: any) {
  if (typeof Child === 'function') {
    return Child()
  }
  if (typeof Child === 'string') {
    return Child
  }
  if (_.isEmpty(Child)) {
    return null
  }
  return <Child />
}

interface HeaderState {
  common: {
    header: {
      leftBtn: string
      title: string
      rightBtn: string
      isShow: boolean
      opacity: string
    }
  }
}

export default function Header() {
  const header = useSelector((state: HeaderState) => state.common.header)
  const { leftBtn, title, rightBtn, isShow, opacity } = header
  return (
    <div
      style={{ backgroundColor: `rgba(83,202,189,${opacity})` }}
      className={isShow ? 'app-header' : 'hidden'}
    >
      {_.map([leftBtn, title, rightBtn], (v, k) => {
        return <div key={k}>{renderChild(v)}</div>
      })}
    </div>
  )
}
