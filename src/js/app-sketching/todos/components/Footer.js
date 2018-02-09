import React, { Component } from 'react'
import Link from '../components/Link'

const Footer = (props) => {
  return (
    <div>
      <Link active={true}>All</Link>{' '}
      <Link active={true}>Active</Link>{' '}
      <Link active={true}>Completed</Link>
    </div>
  )
}

export default Footer
