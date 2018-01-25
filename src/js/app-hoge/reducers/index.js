import { combineReducers } from 'redux'
import drawer from './drawer'
import { type } from '../actions/promise';

const initialState = { status: 'LOADING' }
const promise = (state = initialState, action) => {
  if (action.type === type.LOADING) {
    return initialState;
  } else if (action.type === type.LOADED) {
    return { status: 'LOADED', data: action.data };
  } else if (action.type === type.ERROR) {
    return { status: 'ERROR', error: action.error };
  }
  return state;
}

export default combineReducers({
  drawer,
  promise
})
