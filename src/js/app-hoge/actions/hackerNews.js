import { createAction } from 'redux-actions'

function getHackerNews() {
  const API_URL = 'https://hacker-news.firebaseio.com/v0/item/15723926.json';
  return fetch(API_URL).then(resp => {
    if (resp.status !== 200) {
      const error = new Error()
      error.message = resp.statusText
      error.errorData = resp
      throw error
    }
    return resp.json()
  })
}

export const loadingHackerNews = createAction('LOADING_HACKER_NEWS')
export const loadHackerNews = createAction('LOAD_HACKER_NEWS', () => {
  const API_URL = 'https://hacker-news.firebaseio.com/v0/item/15723926.json';
  return fetch(API_URL)
    .then(resp => {
      if (resp.status !== 200) {
        const err = new Error()
        err.message = resp.statusText
        err.errorData = resp
        throw err
      }
      return resp.json()
    })
    .then(json => json)
    .catch(err => err)
})

