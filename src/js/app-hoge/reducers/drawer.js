import { handleActions } from 'redux-actions'
import { openDrawer, closeDrawer, toggleDrawer } from '../actions/drawer'

const initialState = {
  openedDrawer: false
}

const drawer = handleActions({
  [openDrawer](state) {
    return { ...state, openedDrawer: true }
  }
})

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_DRAWER:
      return Object.assign({}, state, { openedDrawer: true })
    case CLOSE_DRAWER:
      return Object.assign({}, state, { openedDrawer: false })
    case TOGGLE_DRAWER:
      return Object.assign({}, state, { openedDrawer: !state.openedDrawer })
    default:
      return state
  }
}

