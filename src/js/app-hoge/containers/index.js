import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import CounterApp from '../components/App'

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = dispatch => ({
  onIncrement() { dispatch(increment()) },
  onDecrement() { dispatch(decrement()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


