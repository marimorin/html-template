import { createStore, applyMiddleware, compose } from 'redux'
// import reducer
import promisMiddleware from 'redux-promise'

const mockReducer = (state = 10, action) => {
  if (action.type === 'A') {
    return action.payload.time
  }
  return state + 1
}

const usedDevTools = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = usedDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const middlewareEnhancer = applyMiddleware(promisMiddleware)
const store = createStore(mockReducer, composeEnhancers(middlewareEnhancer))

export default store
