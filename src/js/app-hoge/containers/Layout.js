import React, { Component } from 'react'
import Header from './organisms/Header'
import Home from './pages/Home'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}
