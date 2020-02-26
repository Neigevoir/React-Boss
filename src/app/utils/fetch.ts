enum RequestMode {
  noCors = 'no-cors',
  sameOrigin = 'same-origin',
  cors = 'cors'
}

interface fetchParams {
  url: string
  data: object
  headers: {
    Authorization: string
  }
  type: string
  mode?: RequestMode
  credentials: string
  success: () => void
  error: () => void
}

const Fetch = (params: fetchParams) => {
  const {
    url,
    data,
    headers = {
      Authorization: 'Bearer {' + localStorage.getItem('token') + '}'
    },
    type = 'POST',
    mode = RequestMode.noCors,
    credentials,
    success = () => {},
    error = () => {}
  } = params
  const header = new Headers()
  for (let i in headers) {
    header.append(i, headers[i])
  }

  const searchParams = new URLSearchParams()
  for (let i in data) {
    searchParams.append(i, data[i])
  }

  // credentials:'include'   Fetch 跨域请求时默认不会带 cookie, 需要时得手动指定 credentials: 'include'
  const options = {
    method: type,
    body: searchParams,
    mode: mode,
    headers: header
  }

  return fetch(url, options).then(res => {
    if (res.ok) {
      success()
      return res.json()
    } else {
      error()
    }
    Promise.reject(new Error())
  })
}

export default Fetch
