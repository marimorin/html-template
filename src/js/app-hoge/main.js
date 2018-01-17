import React, { Component } from 'react'
import { render } from 'react-dom'
import Layout from './containers/Layout'

const App = () => {
  return (
    <Layout />
  )
}

render(<App />, document.querySelector('#app-hoge'))
