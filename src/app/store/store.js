import * as Redux from 'redux'
import Reducers from '../reducers/reducers'
import apiMiddleware from './api_middleware'
import thunkMiddleware from './thunk_middleware'
import { routerReducer } from 'react-router-redux'
import { persistStore } from 'redux-persist'

const Store = ((Redux, Reducers) => {
  const preloadedState = window.__PRELOADED_STATE__,
    middleware = Redux.applyMiddleware(thunkMiddleware, apiMiddleware),
    reducers = Redux.combineReducers({
      ...Reducers,
      routing: routerReducer
    })

  return Redux.createStore(
    reducers,
    preloadedState,
    Redux.compose(
      middleware,
      window.devToolsExtension && process.env.NODE_ENV === 'development'
        ? window.devToolsExtension()
        : f => f
    )
  )
})(Redux, Reducers)

export const persistor = persistStore(Store)

export default Store
