import { connect } from 'react-redux'

function getState(state) {
  return { ...state.loading }
}
export default connect(getState)(Loading)
function Loading(props) {
  return (
    <div className={props.isShow ? 'loading animated fadeIn8' : 'hidden'}>
      <div className="loader-middle">
        <div className="loader">Loading...</div>
      </div>
    </div>
  )
}
