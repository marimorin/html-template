import React, { Componet } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ addTodo }) => {
  let input
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.value.trim()) { return }
      addTodo(input.value)
      input.value = ''
    }}>
      <input ref={node => { input = node }} type="text"/>
      <button type="submit">追加</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodo(text) { dispatch(addTodo(text)) }
})

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
