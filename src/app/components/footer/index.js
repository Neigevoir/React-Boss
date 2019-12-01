import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './index.scss'

const footer = [
  {
    title: '职位',
    link: '/position',
    active: '/'
  },
  {
    title: '公司',
    link: '/company'
  },
  {
    title: '消息',
    link: '/information'
  },
  {
    title: '我的',
    link: '/user'
  }
]

export default function Footer() {
  const { pathname } = useLocation()
  const isShow = useSelector(state => state.common.footer)
  const url = useMemo(() => pathname, [pathname])
  return (
    <div className={isShow ? 'navigation' : 'hidden'}>
      {_.map(footer, (v, k) => {
        return (
          <NavLink
            key={k}
            className={`link ${url === (v.active || v.link) ? 'active' : ''}`}
            to={v.link}
          >
            <img alt="" src={require(`src/assets/images${v.link}.png`)} />
            <span>{v.title}</span>
          </NavLink>
        )
      })}
    </div>
  )
}
