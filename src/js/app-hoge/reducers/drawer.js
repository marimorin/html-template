import { handleActions } from 'redux-actions'
import { openDrawer, closeDrawer, toggleDrawer } from '../actions/drawer'

const initialState = {
  openedDrawer: false
}

const drawer = handleActions({
  [openDrawer](state) {
    return { ...state, openedDrawer: true }
  },
  [closeDrawer](state) {
    return { ...state, openedDrawer: false }
  },
  [toggleDrawer](state) {
    return { ...state, openedDrawer: !state.openedDrawer }
  }
}, initialState)

export default drawer

