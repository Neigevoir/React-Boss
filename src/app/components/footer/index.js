import React, { PureComponent } from 'react'
import { Link } from 'react-router'
export default class Footer extends PureComponent {
  constructor(props) {
    super(props)
    this.footer = []
  }

  render() {
    return (
      <ul id="nav" className="navigation">
        <li>
          <Link
            className="active"
            activeClassName="RouterActive"
            to="/position"
          >
            <img alt="" src="../static/images/position.png" />
            <span>职位</span>
          </Link>
        </li>
        <li>
          <Link className="active" activeClassName="RouterActive" to="/company">
            <img alt="" src="../static/images/company.png" />
            <span>公司</span>
          </Link>
        </li>
        <li>
          <Link
            className="active"
            activeClassName="RouterActive"
            to="/information"
          >
            <img alt="" src="../static/images/information.png" />
            <span>消息</span>
          </Link>
        </li>
        <li>
          <Link className="active" activeClassName="RouterActive" to="/user">
            <img alt="" src="../static/images/user.png" />
            <span>我的</span>
          </Link>
        </li>
      </ul>
    )
  }
}
