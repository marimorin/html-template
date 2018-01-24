import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ openedDrawer, closeDrawer }) => {
  return (
    <div className="a-overlay-global" aria-hidden={!openedDrawer} aria-controls="a-btn-hamburger" onClick={ e => closeDrawer()}></div>
  )
}

Overlay.propTypes = {
  isOpenDrawer: PropTypes.bool,
  onCloseDrawer: PropTypes.func
}

export default Overlay
