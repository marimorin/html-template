import React, { Component } from 'react'
import { render } from 'react-dom'

const Main = (props) => {
  return (
    <main id="o-main" className="t-container" role="main">
      <div className="t-content">
        { props.children }
      </div>
    </main>
  )
}

export default Main
