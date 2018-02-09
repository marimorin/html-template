import React from 'react'

const Link = ({ active, children }) => {
  const elm = active
    ? <span>{children}</span>
    : <a href="#">{children}</a>
  return elm
}

export default Link
