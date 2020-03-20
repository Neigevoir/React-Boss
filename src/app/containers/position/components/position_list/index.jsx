import { useHistory } from 'react-router'
import { useVirtualList } from '@umijs/hooks'
import PositionItem from 'src/app/containers/position/components/position_item'
import './index.scss'

export default function PositionList(props) {
  const history = useHistory()

  const gotoPositionDetail = index => () => {
    history.push({
      pathname: '/position_detail',
      query: { positionId: index }
    })
  }

  const { listData } = props
  const { list, containerProps, wrapperProps } = useVirtualList(listData, {
    overscan: 10,
    itemHeight: 143
  })
  return (
    <div className="position-list" {...containerProps}>
      <div {...wrapperProps}>
        {_.map(list, (v, k) => {
          return (
            <PositionItem
              key={k}
              item={v}
              handleClick={gotoPositionDetail(k)}
            />
          )
        })}
      </div>
    </div>
  )
}
