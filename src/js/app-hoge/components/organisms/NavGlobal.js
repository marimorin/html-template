import React from 'react'
import NavItem from '../atoms/NavItem'

const NavGlobal = (props) => {
  let baseClass = 'o-nav-global'
  let items = [
    { label: 'HOME', path: '/'},
    { label: 'ABOUT', path: '/about'},
    { label: 'SERVICE', path: '/service'},
    { label: 'PRODUCTS', path: '/products'},
    { label: 'CAMPAIGN', path: '/campaign'},
    { label: 'CONTACT', path: '/contact'},
  ]
  let resItems = items.map((item, i) => {
    let o = Object.assign(item, { baseClass })
    return <NavItem key={`itemKey-${i}`} {...o} />
  })
  return (
    <nav className={`${baseClass} t-container`} role="navigation">
      <ul className={`${baseClass} ${baseClass}__list t-content`}>{resItems}</ul>
    </nav>
  )
}

export default NavGlobal
