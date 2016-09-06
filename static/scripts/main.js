import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory, Router,browserHistory } from 'react-router';
import router from './router';
import configureStore from './store/configureStore'

// import { createStore } from 'redux'
// import App from './containers/App'
// import todoApp from './reducers/reducers'
// import { Router, Route, IndexRoute, Link, hashHistory,browserHistory  } from 'react-router'
// import '../styles/index/index.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {router}
        </Router>
    </Provider>,
    document.getElementById('container')
)
