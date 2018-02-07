import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { loadWeather, hogeWeather } from '../actions/weather'

class App extends Component {
  componentDidMount() {
    this.props.loadWeather();
  }
  render() {
    const { count, loadWeather, hogeWeather } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={e => loadWeather()}>Danger!</button>
        <button onClick={e => hogeWeather()}>Hoge!</button>
      </div>
    )
  }
}

export default connect(
  state => ({
      count: state.weather.status
  }),
  dispatch => ({
    loadWeather() { dispatch(loadWeather()) },
    hogeWeather() { dispatch(hogeWeather()) }
  })
)(App)
