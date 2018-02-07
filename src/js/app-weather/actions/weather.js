import { createAction } from 'redux-actions'

export const hogeWeather = createAction('HOGE_WEATHER')

export const loadWeather = createAction('LOAD_WEATHER', () => {
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
})
