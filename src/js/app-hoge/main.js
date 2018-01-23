import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { increment, decrement } from './actions/index'
import { counter } from './reducers/index'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './containers/Layout'

const CounterApp = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ e => onIncrement(e) }>+</button>
      <button onClick={ e => onDecrement(e) }>-</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state
})
const mapDispatchToProps = dispatch => ({
  onIncrement() { dispatch(increment()) },
  onDecrement() { dispatch(decrement()) },
})

const Hoge = connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const store = createStore(counter)

render(
  <Provider store={store}>
    <Hoge />
  </Provider>,
  document.querySelector('#app-hoge')
)

// const App = () => {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   )
// }
//
// render(<App />, document.querySelector('#app-hoge'))

