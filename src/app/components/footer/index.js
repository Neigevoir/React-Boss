import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.scss'

function getState(state) {
  return { ...state.footer }
}
export default connect(getState)(Footer)
function Footer(props) {
  const footer = [
    {
      title: '职位',
      link: 'position'
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
  const [pathname, setPathname] = useState

  useEffect(() => {
    setPathname(props.pathname)
  }, [props.pathname])

  const { isShow } = props
  return (
    <ul id="nav" className={isShow ? 'navigation' : 'hidden'}>
      {_.map(footer, (v, k) => {
        return (
          <NavLink
            key={k}
            className="link"
            activeClassName="active"
            to={`/${v.link}`}
          >
            <img alt="" src={require(`src/assets/images/${v.link}.png`)} />
            <span>{v.title}</span>
          </NavLink>
        )
      })}
    </ul>
  )
}
