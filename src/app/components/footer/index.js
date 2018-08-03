import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.scss'

function getState(state) {
  return {
    ...state.footer
  }
}
@connect(getState)
export default class Footer extends PureComponent {
  constructor(props) {
    super(props)
    this.footer = [
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
    this.state = {
      pathname: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.pathname !== prevState.pathname
      ? {
          pathname: nextProps.pathname
        }
      : null
  }

  render() {
    const { isShow } = this.props
    return (
      <ul id="nav" className={isShow ? 'navigation' : 'hidden'}>
        {_.map(this.footer, (v, k) => {
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
}
