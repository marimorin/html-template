import React from 'react'
import PropTypes from 'prop-types'
import NavItem from '../../components/atoms/NavItem'

const DrawerGlobal = ({ isOpenDrawer, onCloseDrawer }) => {
  let baseClass = 'm-drawer-global'
  let icon = <i className="fa fa-chevron-circle-right" aria-hidden="true" />
  let items = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICE', path: '/service' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'CAMPAIGN', path: '/campaign' },
    { label: 'CONTACT', path: '/contact' },
  ]
  let resItems = items.map((item, i) => {
    let o = Object.assign(item, { baseClass, icon })
    return <NavItem key={`aaa-${i}`} {...o} />
  })
  return (
    <nav id="js-drawer-global" className={`${baseClass}`} role="navigation" aria-hidden={!isOpenDrawer} aria-labelledby="js-btn-hamburger">
      <div className={`${baseClass}__header`}>
        <div className={`${baseClass}__logo`}>HOGE STYLE</div>
        <button type="button" id="js-btn-drawer-close" className={`${baseClass}__button-close a-btn a-btn-icon a-btn-icon--close`} aria-controls="js-btn-hamburger" onClick={onCloseDrawer}><i className="fa fa-close" aria-hidden='true'></i></button>
      </div>
      <ul className={`${baseClass}__list`}>{resItems}</ul>
    </nav>
  )
}

DrawerGlobal.propTypes = {
  isOpenDrawer: PropTypes.bool,
  onCloseDrawer: PropTypes.func
}

export default DrawerGlobal
