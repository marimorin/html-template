import React from 'react'
import { connect } from 'react-redux'
import { openDrawer, closeDrawer, toggleDrawer } from '../actions/drawer'
import App from '../components/App'

const mapStateToProps = state => ({
  openedDrawer: state.drawer.openedDrawer
})

const mapDispatchToProps = dispatch => ({
  openDrawer() { dispatch(openDrawer()) },
  closeDrawer() { dispatch(closeDrawer()) },
  toggleDrawer() { dispatch(toggleDrawer()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


