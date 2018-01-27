import { handleActions } from 'redux-actions'
import { loadingHackerNews, loadHackerNews } from '../actions/hackerNews';

const initialState = { status: loadingHackerNews }

const hackerNewsReducer = handleActions({
  [loadingHackerNews](state, { type }) {
    return { status: type }
  },
  [loadHackerNews](state, { type, payload }) {
    const newState = payload instanceof Error
      ? { status: 'ERROR', data: payload.errorData }
      : { status: 'LOADED', data: payload }
    return newState
  },
}, initialState)

export default hackerNewsReducer
