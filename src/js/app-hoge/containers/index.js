import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
import {
  open as openDrawer,
  close as closeDrawer,
  toggle as toggleDrawer
} from '../actions/drawer'

export default connect(
  state => ({
    openedDrawer: state.drawer.openedDrawer
  }),
  dispatch => ({
    openDrawer() { dispatch(openDrawer()) },
    closeDrawer() { dispatch(closeDrawer()) },
    toggleDrawer() { dispatch(toggleDrawer()) },
  })
)(App)

