import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory, Router, browserHistory } from 'react-router'
import router from './router'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{router}</Router>
  </Provider>,
  document.getElementById('container')
)
