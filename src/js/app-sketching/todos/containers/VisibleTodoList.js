import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Todo: ここでFilterから表示・非表示で絞り込まなければならない

const mapStateToProps = state => ({
  todos: state.todos
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
