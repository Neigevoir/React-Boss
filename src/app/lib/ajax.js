import { stringify } from 'qs'

function getResponseResult(res) {
  let result = null
  if (res) {
    if (res.responseType === 'text') {
      result = res.responseText
    } else if (res.responseType === 'document') {
      result = res.responseXML
    } else {
      result = res.response
    }
  }
  return result
}

function handleData(params) {
  let data = null
  if (params) {
    if (params.method === 'POST') {
      data = JSON.stringify(params.data)
    }
  }
  return data
}

function addScriptTag(src) {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.src = src
  document.body.appendChild(script)
}

function generateCallbackFunction() {
  return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`
}

export default function Ajax(params) {
  if (
    Object.prototype.toString.call(params) !== '[object Object]' ||
    !params['url']
  ) {
    return null
  }

  const jsonpCallback = generateCallbackFunction()
  if (params.dataType === 'jsonp') {
    const url = `${params.url}?${stringify({
      ...params.data,
      callback: jsonpCallback
    })}`
    global[jsonpCallback] = params.success

    addScriptTag(url)
    return null
  }

  const http = new XMLHttpRequest()

  if (params.method === 'GET') {
    http.open(
      params.method,
      `${params.url}?${stringify(params.data)}`,
      params.Async || true
    )
  } else if (params.method === 'POST') {
    http.open(params.method, params.url, params.Async || true)
  } else {
    console.log('没有做其他Type的请求！')
  }

  http.timeout = params.Async && params.timeout ? params.timeout : 30

  http.responseType = params.dataType || 'json'

  http.withCredentials = params.withCredentials || false

  // NOTE:设置请求头
  for (const key in params.header) {
    if (params.header.hasOwnProperty(key)) {
      http.setRequestHeader(key, params.header[key])
    }
  }

  http.onreadystatechange = function(e) {
    const { readyState, status } = e.target
    if (readyState === 4) {
      // NOTE:不对全部状态码处理，只为处理200和304
      if ((status >= 200 && status < 300) || status === 304) {
        if (typeof params.success === 'function') {
          console.log(e.target)
          const result = getResponseResult(e.target)
          params.success(result, e.target)
        }
      } else {
        if (typeof params.error === 'function') {
          params.error(e.target)
        }
      }
    }
  }

  // 请求结束
  http.addEventListener('loadend', e => {
    if (typeof params.complete === 'function') {
      const result = getResponseResult(e.target)
      params.complete(result, e.target)
    }
  })
  // 请求出错
  http.addEventListener('error', e => {
    if (typeof params.error === 'function') {
      params.error(e.target)
    }
  })
  // 请求超时
  http.addEventListener('timeout', e => {
    if (typeof params.error === 'function') {
      params.error(e.target)
    }
  })

  http.send(handleData(params))
}
