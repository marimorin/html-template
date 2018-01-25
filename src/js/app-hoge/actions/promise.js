// import { createActions } from 'redux-actions'
// export const { loading, loaded, error } = createActions('LOADING', 'LOADED', 'ERROR')
export const type = { LOADING: 'LOADING', LOADED: 'LOADED', ERROR: 'ERROR' }

const API_URL = 'https://hacker-news.firebaseio.com/v0/item/15723926.json';

/*
redux-promiseを使ったActionCreatorでは、
オブジェクトではなく、関数を返す必要がある
 */
function hackerNews() {
  /*
  ・fetchは、最初にresponseのみを返す
  ・Body.json()は、promiseを返す
   */
  return fetch(API_URL).then(resp => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export function loadData() {
  /*
  ん？関数ではなく、promiseを返すのか
  loadDataって、ActionCreatorだっけか。。
  thenやcatchでActionを返す
   */
  return hackerNews()
    .then(data => ({ type: type.LOADED, data: data }))
    .catch(err => ({ type: type.ERROR, error: err }));
}
