import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './index.scss'

const footer = [
  {
    title: '职位',
    link: 'position',
    active: ['/']
  },
  {
    title: '公司',
    link: 'company'
  },
  {
    title: '消息',
    link: 'information'
  },
  {
    title: '我的',
    link: 'user'
  }
]

export default function Footer(props) {
  const [pathname, setPathname] = useState(props.pathname)
  const isShow = useSelector(state => state.common.footer)

  useEffect(() => {
    setPathname(props.pathname)
  }, [props.pathname])

  return (
    <ul className={isShow ? 'navigation' : 'hidden'}>
      {_.map(footer, (v, k) => {
        const link = `/${v.link}`
        const isActive = pathname === v.link || _.includes(v.active, pathname)
        return (
          <NavLink
            key={k}
            className={`link ${isActive ? 'active' : ''}`}
            to={link}
          >
            <img alt="" src={require(`src/assets/images/${v.link}.png`)} />
            <span>{v.title}</span>
          </NavLink>
        )
      })}
    </ul>
  )
}
