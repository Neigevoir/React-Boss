import React, { PureComponent } from 'react'
import Header from 'src/app/components/header'
import Footer from 'src/app/components/footer'
import 'src/assets/styles/index/index.scss'
import { Route } from 'react-router-dom'
import * as AsyncComponents from 'src/app/router/ImportComponents'
export default class App extends PureComponent {
  render() {
    return (
      <div id="test">
        <Header />
        <Route path="/position" component={AsyncComponents.AsyncPosition} />
        {/* <Route path="/company" component={AsyncComponents.AsyncCompany} /> */}
        <Footer />
      </div>
    )
  }
}
