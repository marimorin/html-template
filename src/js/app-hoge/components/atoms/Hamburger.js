import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ openedDrawer, toggleDrawer }) => {
  return (
    <button id="js-btn-hamburger" className="a-btn a-btn-hamburger" onClick={ e => toggleDrawer() } aria-expanded={openedDrawer} aria-controls="js-drawer-global, js-overlay-global" data-action-type="toggle">
      {Array(3).fill(null).map((n, i) => <i key={`barKey-${i}`} className="a-btn-hamburger__bar" aria-hidden="true"></i>)}
    </button>
  )
}

Hamburger.propTypes = {
  openedDrawer: PropTypes.bool,
  toggleHamburger: PropTypes.func
}

export default Hamburger
