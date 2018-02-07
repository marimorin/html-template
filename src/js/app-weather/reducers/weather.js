import { handleActions } from 'redux-actions'
import { loadWeather, hogeWeather } from '../actions/weather'

const initialState = {
  status: 0
}
const weatherReducer = handleActions({
  [loadWeather](state, action) {
    return { ...state, status: action.payload.id }
  },
  [hogeWeather](state, action) {
    return { ...state, status: 'hoge' }
  }
}, initialState)

export default weatherReducer
