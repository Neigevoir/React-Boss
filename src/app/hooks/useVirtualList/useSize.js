import { useState, useRef, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { _slicedToArray } from './utils'

function useSize() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key]
  }

  var hasPassedInElement = args.length === 1
  var arg = useRef(args[0])
  arg.current = args[0]
  var element = useRef()

  var _useState = useState(function() {
      var initDOM =
        typeof arg.current === 'function' ? arg.current() : arg.current
      return {
        width: (initDOM || {}).clientWidth,
        height: (initDOM || {}).clientHeight
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1]

  useLayoutEffect(
    function() {
      var passedInElement =
        typeof arg.current === 'function' ? arg.current() : arg.current
      var targetElement = hasPassedInElement ? passedInElement : element.current

      if (!targetElement) {
        return function() {}
      }

      var resizeObserver = new ResizeObserver(function(entries) {
        entries.forEach(function(entry) {
          setState({
            width: entry.target.clientWidth,
            height: entry.target.clientHeight
          })
        })
      })
      resizeObserver.observe(targetElement)
      return function() {
        resizeObserver.disconnect()
      }
    },
    [hasPassedInElement, setState]
  )

  if (hasPassedInElement) {
    return [state]
  }

  return [state, element]
}

export default useSize
