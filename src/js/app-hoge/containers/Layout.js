import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './organisms/Header'
import NavGlobal from './organisms/NavGlobal'
import Footer from './organisms/Footer'
import Main from './organisms/Main'
import Home from './pages/Home'
import About from './pages/About'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="t-wrapper">
          <Header />
          <NavGlobal />
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Switch>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

