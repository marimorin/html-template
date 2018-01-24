import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './organisms/Header'
import NavGlobal from './organisms/NavGlobal'
import DrawerGlobal from './organisms/DrawerGlobal'
import Footer from './organisms/Footer'
import Main from './organisms/Main'
import Home from './pages/Home'
import About from './pages/About'
import Overlay from '../components/atoms/Overlay'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenDrawer: false
    }
  }

  handleClickHamburger(e) {
    e.preventDefault()
    this.setState({ isOpenDrawer: !this.state.isOpenDrawer })
  }

  handleCloseDrawer(e) {
    e.preventDefault()
    this.setState({ isOpenDrawer: false })
  }

  render() {
    return (
      <div className="t-wrapper">
        <Header isOpenDrawer={this.state.isOpenDrawer} toggleHamburger={ (e) => this.handleClickHamburger(e) } />
        <NavGlobal />
        <DrawerGlobal isOpenDrawer={this.state.isOpenDrawer} onCloseDrawer={ (e) => this.handleCloseDrawer(e) } />
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Main>
        <Footer />
        <Overlay isOpenDrawer={this.state.isOpenDrawer} onCloseDrawer={ (e) => this.handleCloseDrawer(e) } />
      </div>
    )
  }
}

