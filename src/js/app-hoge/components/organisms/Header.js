import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../atoms/Logo'
import Hamburger from '../atoms/Hamburger'
import NavHeader from '../molecules/NavHeader'

const Header = (props) => {
  let logoData = { label: "Hello!!", path: "/" }
  let navHeaderData = {
    baseClass: 'm-nav-header',
    items: [
      { label: 'Greeting', path: '/greeting' },
      { label: 'Privacy', path: '/privacy' },
      { label: 'Legal', path: '/legal' },
    ]
  }
  return (
    <header id="o-header" className="t-container" role="banner">
      <div className="t-content">
        <Logo {...logoData} />
        <NavHeader {...navHeaderData} />
        <Hamburger {...props} />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
