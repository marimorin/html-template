import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

const A = 'A'
const E = 'E'
const actionA = () => {
  return fetch('https://hacker-news.firebaseio.com/v0/item/15723926.json')
    .then(response => response.json())
    .then(json => {
      return { type: A, payload: json }
    })
    .catch(err => ({ type: E, payload: err }))
}

class App extends Component {
  render() {
    const { count, actionA } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <Button color="danger">Danger!</Button>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      count: state
    }
  },
  dispatch => ({
    actionA() {
      dispatch(actionA())
    }
  })
)(App)
