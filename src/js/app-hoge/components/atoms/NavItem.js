import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavItem = ({ baseClass, label, path, icon }) => {
  let labelLow = label.toLowerCase()
  return (
    <li className={`${baseClass}__item`}>
      <NavLink activeClassName="active" className={`${baseClass}__link ${baseClass}__link--${labelLow}`} to={`${path}`}>{icon}{label}</NavLink>
    </li>
  )
}

NavItem.propTypes = {
  baseClass: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.node,
}

export default NavItem
