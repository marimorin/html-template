import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_DRAWER
} from '../actions/drawer'

const initialState = {
  openedDrawer: false
}

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
