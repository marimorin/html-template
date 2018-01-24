import React from 'react'

const App = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ e => onIncrement(e) }>+</button>
      <button onClick={ e => onDecrement(e) }>-</button>
    </div>
  )
}

export default App

