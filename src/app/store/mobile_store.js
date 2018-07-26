import Reducers from 'src/app/reducers/mobile/reducers'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import apiMiddleware from './api_middleware'
import thunkMiddleware from './thunk_middleware'
import eventMiddleware from './event_middleware'

const preloadedState = window.__PRELOADED_STATE__ || {},
  middleware = applyMiddleware(thunkMiddleware, apiMiddleware, eventMiddleware),
  reducers = combineReducers(Reducers)

export default createStore(
  reducers,
  preloadedState,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
