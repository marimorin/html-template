import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from '../../components/atoms/Logo'

const Header = (props) => {
  return (
    <header id="o-header" className="t-container" role="banner">
      <div className="t-content">
        <Logo label="Hello!!" />
      </div>
    </header>
  )
}
Header.propTypes = {
  label: PropTypes.string
}

export default Header
