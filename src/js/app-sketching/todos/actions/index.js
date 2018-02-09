import { createActions } from 'redux-actions'

let currentId = 0

export const { addTodo, toggleTodo } = createActions({
  ADD_TODO: text => ({ id: currentId++, text }),
  TOGGLE_TODO: id => ({ id })
})

export const { setVisibilityFilter } = createActions({
  SET_VISIBILITY_FILTER: filter => ({ filter })
})
