import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Logo = ({ label, path}) => {
  return (
    <div className="a-logo-header">
      <Link className="a-logo-header__link" to={path}>{label}</Link>
    </div>
  )
}

Logo.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string
}

export default Logo
