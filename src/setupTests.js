import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import _ from 'lodash'
import React from 'react'

configure({
  adapter: new Adapter()
})

const localStorageMock = (function() {
  var store = {}
  return {
    getItem: jest.fn(function(key) {
      return store[key]
    }),
    setItem: jest.fn(function(key, value) {
      store[key] = value.toString()
    }),
    clear: jest.fn(function() {
      store = {}
    }),
    removeItem: jest.fn(function(key) {
      delete store[key]
    })
  }
})()
global.localStorage = localStorageMock

const sessionStorageMock = (function() {
  var store = {}
  return {
    getItem: jest.fn(function(key) {
      return store[key]
    }),
    setItem: jest.fn(function(key, value) {
      store[key] = value.toString()
    }),
    clear: jest.fn(function() {
      store = {}
    }),
    removeItem: jest.fn(function(key) {
      delete store[key]
    })
  }
})()
global.sessionStorage = sessionStorageMock

/**
 * global lib
 */
global._ = _
global.React = React
