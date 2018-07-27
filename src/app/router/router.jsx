import React, { PureComponent } from 'react'
import Footer from 'src/app/components/footer'
import 'src/assets/styles/index/index.scss'
import { Route } from 'react-router-dom'
import * as AsyncComponents from 'src/app/router/ImportComponents'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Route
          path="/position"
          component={AsyncComponents.AsyncPositionContainer}
        />
        <Footer />
      </div>
    )
  }
}
