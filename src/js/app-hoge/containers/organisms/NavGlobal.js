import React from 'react'
import NavItem from '../../components/atoms/NavItem'

const NavGlobal = (props) => {
  let baseClass = 'o-nav-global'
  let navItems = [
    { label: 'HOME', path: '/'},
    { label: 'ABOUT', path: '/about'},
    { label: 'SERVICE', path: '/service'},
    { label: 'PRODUCTS', path: '/products'},
    { label: 'CAMPAIGN', path: '/campaign'},
    { label: 'CONTACT', path: '/contact'},
  ]
  let resultItems = navItems.map((item, i) => {
    let o = Object.assign(item, { baseClass })
    return <NavItem key={`itemKey-${i}`} {...o} />
  })
  return (
    <nav className={`${baseClass} t-container`} role="navigation">
      <ul className={`${baseClass} ${baseClass}__list t-content`}>{resultItems}</ul>
    </nav>
  )
}

export default NavGlobal
