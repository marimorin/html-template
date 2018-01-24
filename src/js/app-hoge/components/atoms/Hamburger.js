import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ openedDrawer, toggleDrawer }) => {
  return (
    <button className="a-btn a-btn-hamburger" onClick={ e => toggleDrawer() } aria-expanded={openedDrawer} aria-controls="a-overlay-global" data-action-type="toggle">
      {Array(3).fill(null).map((n, i) => <i key={`barKey-${i}`} className="a-btn-hamburger__bar" aria-hidden="true"></i>)}
    </button>
  )
}

Hamburger.propTypes = {
  openedDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func
}

export default Hamburger
