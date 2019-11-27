import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import usePrevious from './usePrevious'

function savePreScroll(prePathname, preSearch) {
  const preStoragePos = !window.SCROLL_ELEMENT
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document[window.SCROLL_ELEMENT].scrollTop
  if (!window.SCROLL_ELEMENT && preStoragePos) {
    const { scrollTop } = document.body
    window.SCROLL_ELEMENT = _.isNumber(scrollTop) ? 'body' : 'documentElement'
  }
  sessionStorage.setItem(prePathname + preSearch, preStoragePos)
}

function scrollNextPostion(pathname, search) {
  if (window.SCROLL_ELEMENT) {
    const nextStoragePos = Number(sessionStorage.getItem(pathname + search))
    document[window.SCROLL_ELEMENT].scrollTop = nextStoragePos || 0
  }
}

export default function useRouterScroll() {
  const { pathname, search } = useLocation()

  const prePathname = usePrevious(pathname)
  const preSearch = usePrevious(search)

  useEffect(() => {
    savePreScroll(prePathname, preSearch)
    scrollNextPostion(pathname, search)
  }, [pathname, search, prePathname, preSearch])
}
