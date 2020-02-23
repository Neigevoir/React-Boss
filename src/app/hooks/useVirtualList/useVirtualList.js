import { useEffect, useState, useMemo, useCallback } from 'react'
import useSize from './useSize'
import { _slicedToArray } from './utils'

export default (function(list, options) {
  let _useSize = useSize(),
    _useSize2 = _slicedToArray(_useSize, 2),
    size = _useSize2[0],
    containerRef = _useSize2[1] // 暂时禁止 cache

  let _useState = useState({
      start: 0,
      end: 10
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1]

  let itemHeight = options.itemHeight,
    _options$overscan = options.overscan,
    overscan = _options$overscan === void 0 ? 5 : _options$overscan

  if (!itemHeight) {
    console.warn('please enter a valid itemHeight')
  }

  let getViewCapacity = function getViewCapacity(containerHeight) {
    if (typeof itemHeight === 'number') {
      return Math.ceil(containerHeight / itemHeight)
    }

    let _state$start = state.start,
      start = _state$start === void 0 ? 0 : _state$start
    let sum = 0
    let capacity = 0

    for (let i = start; i < list.length; i++) {
      let height = itemHeight(i)
      sum += height

      if (sum >= containerHeight) {
        capacity = i
        break
      }
    }

    return capacity - start
  }

  let getOffset = function getOffset(scrollTop) {
    if (typeof itemHeight === 'number') {
      return Math.floor(scrollTop / itemHeight) + 1
    }

    let sum = 0
    let offset = 0

    for (let i = 0; i < list.length; i++) {
      let height = itemHeight(i)
      sum += height

      if (sum >= scrollTop) {
        offset = i
        break
      }
    }

    return offset + 1
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let calculateRange = useCallback(function calculateRange() {
    let element = containerRef.current

    if (element) {
      let offset = getOffset(element.scrollTop)
      let viewCapacity = getViewCapacity(element.clientHeight)
      let from = offset - overscan
      let to = offset + viewCapacity + overscan
      setState({
        start: from < 0 ? 0 : from,
        end: to > list.length ? list.length : to
      })
    }
  })

  useEffect(() => {
    calculateRange()
  }, [size.width, size.height, calculateRange])
  let totalHeight = useMemo(
    function() {
      if (typeof itemHeight === 'number') {
        return list.length * itemHeight
      }

      return list.reduce(function(sum, _, index) {
        return sum + itemHeight(index)
      }, 0)
    },
    [itemHeight, list]
  )

  let getDistanceTop = function getDistanceTop(index) {
    if (typeof itemHeight === 'number') {
      let _height = index * itemHeight
      return _height
    }

    let height = list.slice(0, index).reduce(function(sum, _, i) {
      return sum + itemHeight(i)
    }, 0)

    return height
  }

  let scrollTo = function scrollTo(index) {
    if (containerRef.current) {
      containerRef.current.scrollTop = getDistanceTop(index)
      calculateRange()
    }
  }

  return {
    list: list.slice(state.start, state.end).map(function(ele, index) {
      return {
        data: ele,
        index: index + state.start
      }
    }),
    scrollTo: scrollTo,
    containerProps: {
      ref: function ref(ele) {
        containerRef.current = ele
      },
      onScroll: function onScroll(e) {
        e.preventDefault()
        calculateRange()
      },
      style: {
        overflowY: 'auto'
      }
    },
    wrapperProps: {
      style: {
        width: '100%',
        height: totalHeight,
        paddingTop: getDistanceTop(state.start)
      }
    }
  }
})
