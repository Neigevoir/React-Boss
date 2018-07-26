import api from '../api/LineDataApi'

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const LINE_DATA = 'LINE_DATA'
export const CHANGE_ROUTER = 'CHANGE_ROUTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  LINE_DATA: 'LINE_DATA'
}
/*
 * action 创建函数
 */
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function lineData(data) {
  return { type: LINE_DATA, data }
}

export function TestLineData(reddit) {
  return (dispatch, getState) => {
    return dispatch(fetchData(reddit))
  }
}

export function ActionRouter(path) {
  return { type: CHANGE_ROUTER, path }
}

function fetchData(reddit) {
  return dispatch => {
    return api.getLineData(reddit).then(res => {
      dispatch(receivePostS(res))
    })
  }
}

function receivePostS(lineData) {
  return { type: LINE_DATA, lineData }
}
