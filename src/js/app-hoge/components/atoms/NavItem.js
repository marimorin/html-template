import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavItem = ({ baseClass, label, path }) => {
  let labelLow = label.toLowerCase()
  return (
    <li className={`${baseClass}__item`}>
      <Link className={`${baseClass}__link ${baseClass}__link--${labelLow}`} to={`${path}`}>{label}</Link>
    </li>
  )
}

NavItem.propTypes = {
  baseClass: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string,
}

export default NavItem
