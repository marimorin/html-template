import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Todo: ここでFilterから表示・非表示で絞り込まなければならない

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed )
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed )
    default: break
  }
}

const mapStateToProps = state => ({
  todos: getTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onToggleTodo(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
