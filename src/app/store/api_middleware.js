import { stringify } from 'qs'

const getHeaders = action => {
  let headers = {
    // Authorization: `Bearer { ${localStorage.getItem('token')} }`, // ih5 need auth
    Accept: 'application/json', // needed for request.format.json?
    'Content-Type': 'application/json',
    'X-REQUESTED-WITH': 'XMLHttpRequest' // needed for request.xhr? which sidesteps mobylette
  }

  if (action.useFormUrlEncoding) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
  } else if (action.useMultipartFormEncoding) {
    delete headers['Content-Type'] // will be automatically set properly by `fetch`!
  }

  //used currently for external api request to zippopotam
  if (action.headers) headers = action.headers
  return headers
}

const success = (dispatch, action, data) => {
  dispatch({
    type: `${action.type}:SUCCESS`,
    response: data,
    data: action.data
  })

  if (typeof action.success === 'function') {
    action.success(dispatch, data, action.data)
  }
}

const error = (dispatch, action, data) => {
  dispatch({
    type: `${action.type}:ERROR`,
    response: data
      ? data
      : (data = {
          error: {
            message: '你的网络有问题!'
          }
        }),
    data: action.data
  })
  // FIXME:全局错误提示
  if (data && data.errors && data.errors.length > 0) {
    //sometimes api errors return  array or string
    const message = _.isArray(data.errors)
      ? data.errors.map(v => `${v.message} `)
      : data.errors
    dispatch({
      data: {
        isShow: true,
        content: message
      },
      type: 'TIPS:CHANGETIP'
    })
  } else if (data && data.message) {
    dispatch({
      data: {
        isShow: true,
        content: data.message
      },
      type: 'TIPS:CHANGETIP'
    })
  }

  if (typeof action.error === 'function') {
    action.error(dispatch, data, action.data)
  }
}

const complete = (dispatch, action, data) => {
  dispatch({
    type: `${action.type}:COMPLETE`,
    response: data,
    data: action.data
  })

  if (typeof action.complete === 'function') {
    action.complete(dispatch, data, action.data)
  }
}

export default ({ dispatch }) => next => action => {
  if (!action.API) return next(action)

  dispatch({ type: `${action.type}:STARTED`, data: action.data })

  const method = action.method || 'GET'

  let body,
    data,
    url = action.url

  if (method === 'GET' && action.data) {
    // get does not allow query parameters in the body
    // this accepts { key: value } where value can either be a string or an array.
    const query = stringify(action.data, { arrayFormat: 'brackets' })
    url += `?${query}`
  } else if (method !== 'GET') {
    data = action.data || {}
    if (method === 'DELETE') data._method = 'DELETE'
    if (action.useMultipartFormEncoding) {
      body = action.data
    } else if (action.useFormUrlEncoding) {
      body = stringify(action.data, { arrayFormat: 'brackets' })
    } else {
      body = JSON.stringify(data)
    }
  }

  const cache = window.__API_CACHE__
  if (method === 'GET' && cache && cache[url]) {
    if ((cache[url].status >= 200) & (cache[url].status < 400)) {
      success(dispatch, action, cache[url].body)
    } else {
      error(dispatch, action, cache[url].body)
    }
    complete(dispatch, action)
    delete cache[url]
    return
  }

  const credentials = 'same-origin' //cookie只能同域发送，不能跨域发送
  // let credentials = 'include'; //既可以同域发送，也可以跨域发送

  const headers = getHeaders(action)
  fetch(url, {
    method,
    body,
    headers,
    credentials
  })
    .then(response => {
      if (response.status >= 200 && response.status < 400) {
        // success
        response
          .json()
          .then(data => {
            // body is json
            const isError = data.errors // errors key is present in GraphQL response
            isError
              ? error(dispatch, action, data)
              : success(dispatch, action, data)
            complete(dispatch, action, data)
          })
          .catch(e => {
            // body is not json -> sign out does this
            // errors can also get raised here from
            // invalid component render in response to success
            console.error(e)
            success(dispatch, action)
            complete(dispatch, action)
          })
      } else {
        // errors
        response
          .json()
          .then(data => {
            // body is json
            error(dispatch, action, data)
            complete(dispatch, action, data)
          })
          .catch(() => {
            // body is not json
            error(dispatch, action)
            complete(dispatch, action)
          })
      }
    })
    .catch(e => {
      // network error
      error(dispatch, action)
      complete(dispatch, action)
      if (!e.match(/TypeError: Failed to fetch/)) {
        console.error(e)
      }
    })
}
