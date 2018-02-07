import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger'

const usedDevTools = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = usedDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const middlewareEnhancer = applyMiddleware(promiseMiddleware, logger);
const store = createStore(reducer, composeEnhancers(middlewareEnhancer));

export default store

