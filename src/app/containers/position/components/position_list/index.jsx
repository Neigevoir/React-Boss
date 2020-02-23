import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Actions from 'src/app/actions/actions'
import { useVirtualList } from '@umijs/hooks'
import PositionItem from 'src/app/containers/position/components/position_item/index.tsx'
import './index.scss'

export default function PositionList(props) {
  const filters = props.filters
  const PositionState = ['recommend', 'latest', 'class1']
  const position = React.createRef()
  const body = React.createRef()

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    // this.body.current.style.height = window.screen.availHeight - 85 + 'px' //用作overflow
    // this.addScroll()
  }, [])

  const getSearchList = res => {
    let newData = []
    Array.from(res.data).map((v, k) => {
      newData.push(v)
      return null
    })
    this.setState({
      PositionLine: newData
    })
  }

  const onload = x => {
    let i
    this.PositionState.map((v, k) => {
      if (this.props.listType === v) i = k
      return null
    })
    if (x > 0) {
      if (this.props.listType === 'recommend') return
      this.props.select(this.PositionState[i - 1])
    } else {
      if (this.props.listType === 'class1') return
      this.props.select(this.PositionState[i + 1])
    }
    this.position.current.setAttribute('class', 'positionList')
    this.position.current.style.webkitTransform = `translateX(0px)`
  }

  const getNewState = (num, width, type) => {
    const position = this.position.current
    position.setAttribute('class', 'positionList transition')
    if (type === 'x') {
      if (num > 0) {
        if (this.props.listType === 'recommend') return
        if (num < width * 0.3) {
          position.style.webkitTransform = `translateX(0px)`
          return
        }
        position.style.webkitTransform = `translateX(${width}px)`
      } else if (num < 0) {
        if (this.props.listType === 'class1') return
        if (num > -width * 0.3) {
          position.style.webkitTransform = `translateX(0px)`
          return
        }
        position.style.webkitTransform = `translateX(-${width}px)`
      } else {
        console.log('Silly B')
      }
    } else {
      if (this.body.current.scrollTop === 0) {
        position.style.webkitTransform = `translateY(0px)`
      }
    }
  }

  const move = (num, type) => {
    const position = this.position.current
    if (type === 'x') {
      if (num > 0) {
        if (this.props.listType === 'recommend') return
        position.style.webkitTransform = `translateX(${num}px)`
      } else {
        if (this.props.listType === 'class1') return
        position.style.webkitTransform = `translateX(${num}px)`
      }
    } else {
      if (this.body.current.scrollTop === 0) {
        if (num > 0) {
          position.style.webkitTransform = `translateY(${num}px)`
        } else {
          // position.style.webkitTransform = 'translateY('+num+ 'px)';
        }
      }
    }
  }

  const addScroll = () => {
    let startX,
      moveX,
      endX,
      startY,
      moveY,
      endY,
      Type,
      Num = 0

    this.position.current.addEventListener('touchstart', e => {
      moveX = 0
      Num = 0
      startX = e.touches[0].pageX
      startY = e.touches[0].pageY
    })
    this.position.current.addEventListener('touchmove', e => {
      endX = e.changedTouches[0].pageX
      endY = e.changedTouches[0].pageY
      moveX = endX - startX
      moveY = endY - startY
      Num += 1
      if (Num === 1) {
        if (Math.abs(moveY) < Math.abs(moveX)) {
          Type = 'x'
        } else {
          Type = 'y'
        }
      }
      if (Type === 'x') {
        e.preventDefault()
        this.move(moveX, 'x')
      }
      if (Type === 'y') {
        this.move(moveY, 'y')
        startX = endX
        moveX = 0
      }
    })
    this.position.current.addEventListener('touchend', e => {
      this.getNewState(moveX, e.view.screen.width, Type)
    })
    this.position.current.addEventListener('webkitTransitionEnd', e => {
      this.position.current.setAttribute('class', 'positionList')
      if (Type === 'x') {
        if (Math.abs(moveX) < global.AvailWidth * 0.3) {
        } else {
          this.onload(moveX)
        }
      } else {
        if (Math.abs(moveY) > parseInt(global.AvailHeight - 135, 10) * 0.25) {
          this.filters.num += 16
          dispatch(
            Actions.position.getLinePosition(this.filters, this.props.listType)
          )
        }
      }
    })
  }

  const getLineData = state => {
    this.filters.num = 16
    this.filters.type = state
    this.props.dispatch(
      Actions.position.getLinePosition(this.filters, this.props.listType)
    )
    // PositionAction.getLinePosition(this.getPositionFormData);
  }

  const getNowState = state => {
    this.getLineData(state)
  }

  const gotoPositionDetail = index => () => {
    history.push({
      pathname: '/position_detail',
      state: {
        index
      }
    })
  }

  const { listData } = props
  const { list, containerProps, wrapperProps } = useVirtualList(listData, {
    overscan: 10,
    itemHeight: 143
  })
  return (
    <div className="position-list">
      {_.map(list, (v, k) => {
        return (
          <PositionItem key={k} item={v} handleClick={gotoPositionDetail(k)} />
        )
      })}
    </div>
  )
}
