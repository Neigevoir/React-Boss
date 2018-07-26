import React from 'react'
import { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme'
import configureStore from 'redux-mock-store'
import * as reducer from 'src/app/reducers/reducers'
import { routerReducer } from 'react-router-redux'
import apiMiddleware from './app/store/api_middleware'
import thunkMiddleware from './app/store/thunk_middleware'
import eventMiddleware from './app/store/event_middleware'

const middleware = [thunkMiddleware, apiMiddleware, eventMiddleware]
const mockStore = configureStore(middleware)
const allReducer = { ...reducer.default, routerReducer }
/**
 *
 * @param {*} Component test component
 * @param {object} props yout test component need props
 */
export const shallow = (Component, props) => {
  return enzymeShallow(<Component store={mockStore(allReducer)} {...props} />)
}

export const mount = (Component, props) => {
  return enzymeMount(
    <Component store={mockStore(allReducer)} {...props} dispatch={jest.fn()} />
  )
}
