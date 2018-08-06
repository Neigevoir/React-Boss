import React from 'react'
import { connect } from 'react-redux'

function getState(state) {
  return {
    ...state.loading
  }
}
@connect(getState)
export default class Loading extends React.PureComponent {
  render() {
    return (
      <div
        className={this.props.isShow ? 'loading animated fadeIn8' : 'hidden'}
      >
        <div className="loader-middle">
          <div className="loader">Loading...</div>
        </div>
      </div>
    )
  }
}
