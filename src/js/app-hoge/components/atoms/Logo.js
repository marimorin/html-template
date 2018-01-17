import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Logo = (props) => {
  return (
    <div className="a-logo-header">
      <a className="a-logo-header__link" href="/">{props.label}</a>
    </div>
  )
}
Logo.propTypes = {
  label: PropTypes.string
}

export default Logo
