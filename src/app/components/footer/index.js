import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
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
  }

  render() {
    return (
      <ul id="nav" className="navigation">
        {_.map(this.footer, (v, k) => {
          return (
            <li key={k}>
              <NavLink
                className="active"
                activeClassName="RouterActive"
                to={`/${v.link}`}
              >
                <img alt="" src={require(`src/assets/images/${v.link}.png`)} />
                <span>{v.title}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }
}
