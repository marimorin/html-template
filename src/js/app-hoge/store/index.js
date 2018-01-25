import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import promiseMiddleware from 'redux-promise';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// 本番環境でない＆拡張がインストール済みかどうか
const useDevTools =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// 他のenhancerと結合する関数
const composeEnhancers = useDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middlewareEnhancer = applyMiddleware(promiseMiddleware);
// compose関数：複数の関数を結合する
const store = createStore(
  reducer,
  composeEnhancers(middlewareEnhancer)
);

export default store

