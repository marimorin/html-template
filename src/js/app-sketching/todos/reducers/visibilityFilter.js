import { handleActions } from 'redux-actions'
import { setVisibilityFilter } from '../actions'

const initialState = "SHOW_ALL"
const visibilityFilter = handleActions({
  [setVisibilityFilter](state, { payload: { filter }}) {
    return filter
  }
}, initialState)

export default visibilityFilter
