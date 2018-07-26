import React from 'react'

export default class Loading extends React.PureComponent {
  render() {
    return (
      <div
        id="loading-page"
        className={
          this.props.type === 'block' ? 'loading animated fadeIn8' : 'hidden'
        }
      >
        <div className="loader-middle">
          <div className="loader">Loading...</div>
        </div>
      </div>
    )
  }
}
