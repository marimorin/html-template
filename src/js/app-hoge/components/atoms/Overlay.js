import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ openedDrawer, closeDrawer }) => {
  return (
    <div className="a-overlay-global" aria-hidden={!openedDrawer} aria-controls="a-btn-hamburger" onClick={ e => closeDrawer()}></div>
  )
}

Overlay.propTypes = {
  openedDrawer: PropTypes.bool,
  closeDrawer: PropTypes.func
}

export default Overlay
