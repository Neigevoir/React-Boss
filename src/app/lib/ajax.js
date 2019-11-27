const defaultOptions = {
  time: 5000,
  jsonpCallback: 'callback',
  jsonpCallbackFunction: null
}

function generateCallbackFunction() {
  return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`
}

const handleTimeOut = (timeout, res) => timeout && timeout(res)

const handleError = (error, res) => error && error(res)

const handleSuccess = (success, res) => success && success(res)

function handleData(data, isNotParams) {
  if (isNotParams) {
    return data
  } else {
    return JSON.stringify(data)
  }
}

function jsonToUrl(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// NOTE:成功后需要清理生成的script等
function clearJsonp(callbackFunction, scriptId, timeoutId) {
  timeoutId && clearTimeout(timeoutId)
  try {
    delete window[callbackFunction]
  } catch (e) {
    window[callbackFunction] = undefined
  }
  const script = document.getElementById(scriptId)
  script && document.getElementsByTagName('head')[0].removeChild(script)
}

export default function fetchJsonp(params) {
  const {
    url,
    data,
    success,
    error,
    jsonpCallbackFunction,
    jsonpCallback = defaultOptions.jsonpCallback,
    charset,
    isNotParams,
    time = defaultOptions.time,
    timeout
  } = params

  let timeoutId

  return new Promise((resolve, reject) => {
    const callbackFunction = jsonpCallbackFunction || generateCallbackFunction()
    const scriptId = `${jsonpCallback}_${callbackFunction}`
    const paramsUrl = jsonToUrl(handleData(data, isNotParams))
    const jsonUrl = `${global.apiUrl +
      url}?${jsonpCallback}=${callbackFunction}&${paramsUrl}`

    window[callbackFunction] = data => {
      handleSuccess(success, data)
      clearJsonp(callbackFunction, scriptId, timeoutId)
      resolve(data)
    }

    // NOTE：超时处理
    timeoutId = setTimeout(() => {
      reject(new Error(`JSONP request to ${url} timed out`))
      handleTimeOut(timeout)
      clearJsonp(callbackFunction, scriptId, timeoutId)
    }, time)

    // NOTE：增加Script标签发起请求
    const jsonpScript = document.createElement('script')
    jsonpScript.setAttribute('src', jsonUrl)
    if (charset) {
      jsonpScript.setAttribute('charset', charset)
    }
    jsonpScript.id = scriptId
    document.getElementsByTagName('head')[0].appendChild(jsonpScript)

    // Caught if got 404/500
    jsonpScript.onerror = () => {
      reject(new Error(`JSONP request to ${url} failed`))
      handleError(error)
      clearJsonp(callbackFunction, scriptId, timeoutId)
    }
  })
}
