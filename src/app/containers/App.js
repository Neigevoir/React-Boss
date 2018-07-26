import React, { PureComponent } from 'react'
import Footer from 'src/app/components/footer'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
