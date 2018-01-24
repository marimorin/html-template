import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './organisms/Header'
import NavGlobal from './organisms/NavGlobal'
import DrawerGlobal from './organisms/DrawerGlobal'
import Footer from './organisms/Footer'
import Main from './organisms/Main'
import Home from './pages/Home'
import About from './pages/About'
import Overlay from '../components/atoms/Overlay'

const App = (props) => {
  return (
    <Router>
      <div className="t-wrapper">
        <Header {...props} />
        <NavGlobal />
        <DrawerGlobal {...props} />
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Main>
        <Footer />
        <Overlay {...props} />
      </div>
    </Router>
  )
}

export default App
