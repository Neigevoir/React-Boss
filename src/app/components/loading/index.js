import { useSelector } from 'react-redux'

export default function Loading() {
  const isShow = useSelector(state => state.common.loading)
  return (
    <div className={isShow ? 'loading animated fadeIn8' : 'hidden'}>
      <div className="loader-middle">
        <div className="loader">Loading...</div>
      </div>
    </div>
  )
}
