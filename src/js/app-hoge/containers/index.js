import { connect } from 'react-redux'
import App from '../components/App'
import { openDrawer, closeDrawer, toggleDrawer } from '../actions/drawer'

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

