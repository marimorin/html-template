import { handleActions } from 'redux-actions'
import { addTodo, toggleTodo } from '../actions'

const initialState = []

const todos = handleActions({
  [addTodo](state, { payload: { id, text }}) {
    const todo = {
      id,
      text,
      completed: false
    }
    return [...state, todo ]
  },
  [toggleTodo](state, { payload: { id }}) {
    const newState = state.map(todo => {
      return (todo.id === id)
        ? { ...todo, completed: !todo.completed }
        : todo
    })
    return newState
  }
}, initialState)

export default todos
