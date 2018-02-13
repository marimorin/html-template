import React from 'react'

const Link = ({ active, children, onClick }) => {
  const elm = active
    ? <span>{children}</span>
    : <a href="#" onClick={e => {
      e.preventDefault()
      onClick()
    }}>{children}</a>
  return elm
}

export default Link
