import { createAction } from 'redux-actions'

function hackerNews() {
  const API_URL = 'https://hacker-news.firebaseio.com/v0/item/15723926.json';
  return fetch(API_URL).then(resp => {
    // if (resp.status !== 200) {
    const error = new Error(resp.statusText)
    error.data = resp
      throw error
    // }
    return resp.json()
  })
}

export const loading = createAction('LOADING')
export const loadData = createAction('LOAD_DATA', () => {
  return hackerNews()
    .then(data => data)
    .catch(err => err)
})

