import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App'
import Company from './components/company/main'
import Position from './components/position/main'
import Information from './components/information/main'
import User from './components/user/main'
import Notice from './components/notice/main'

const routers = (
    <Route path="/" component={ App }>
        <IndexRoute component={ Position } />
        <Route name="position" path="position" component={ Position } />
        <Route name="company" path="company" component={ Company } />
        <Route name="information" path="information" component={ Information } />
        <Route name="user" path="user" component={ User } />
        <Route name="notice" path="notice" component={ Notice } />
    </Route>
);

export default routers;
