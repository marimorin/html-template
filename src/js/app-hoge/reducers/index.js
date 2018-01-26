import { combineReducers } from 'redux'
import drawer from './drawer'
import { handleActions } from 'redux-actions'
import { loading, loadData } from '../actions/promise';

const initialState = { status: loading }

const promise = handleActions({
  [loadData](state, action) {
    debugger
    return { status: action.type, data: action.payload }
  },
  [loading](state, action) {
    return { status: action.type }
  }
}, initialState)

export default combineReducers({
  drawer,
  promise
})
