import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import reducers from '../reducers/reducers';
import { routeActions } from 'react-router-redux';
import { Router, Route, IndexRoute, Link, hashHistory,browserHistory  } from 'react-router'

// import '../../styles/index/index.css'
import '../../styles/index/index.less'

class App extends Component {

    static contextTypes = {
        router:React.PropTypes.object
    }

    constructor(props){
        super(props);
    }

    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter,lineData,routerPath } = this.props

        return (
            <div>
                <section>
                    {this.props.children}
                </section>
                <section>
                    <ul id="nav" className="navigation">
                        <li>
                            <Link className="active" activeClassName="RouterActive" to="/position">
                                <img src="../static/images/position.png" />
                                <span>职位</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="active" activeClassName="RouterActive" to="/company">
                                <img src="../static/images/company.png" />
                                <span>公司</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="active" activeClassName="RouterActive" to="/information">
                                <img src="../static/images/information.png" />
                                <span>消息</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="active" activeClassName="RouterActive" to="/user">
                                <img src="../static/images/user.png" />
                                <span>我的</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

function select(state) {
    return {
        lineData:state.lineData
    }
}

export default connect(select)(App)
