import { createActions } from 'redux-actions'
export const { openDrawer, closeDrawer, toggleDrawer } = createActions('OPEN_DRAWER', 'CLOSE_DRAWER', 'TOGGLE_DRAWER')

