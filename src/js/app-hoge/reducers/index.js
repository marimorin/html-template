import { INCREMENT, DECREMENT } from '../actions/index'

const initialState = 0
export function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
