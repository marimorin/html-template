import React from 'react'
import PropTypes from 'prop-types'
import NavItem from '../atoms/NavItem'

const NavHeader = ({ baseClass, items }) => {
  let resItems = items.map((item, i) => {
    return <NavItem baseClass={baseClass} key={`navHeadKey-${i}`} {...item} />
  })
  return (
    <nav className={`${baseClass}`}>
      <ul className={`${baseClass}__list`}>{resItems}</ul>
    </nav>
  )
}

NavHeader.propTypes = {
  baseClass: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
}

export default NavHeader
