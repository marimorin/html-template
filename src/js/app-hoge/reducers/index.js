import { combineReducers } from 'redux'
import drawer from './drawer'
import hackerNewsReducer from './hackerNews'

export default combineReducers({ drawer, hacker: hackerNewsReducer })
