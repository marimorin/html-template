import React, { Component } from 'react'

let Todo = ({ text, onClick, completed }) => {
  const t = completed ? <del>{text}</del> : text
  return (
    <li onClick={onClick}>{t}</li>
  )
}

export default Todo

