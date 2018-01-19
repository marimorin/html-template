import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ isOpenDrawer, onCloseDrawer }) => {
  return (
    <div className="a-overlay-global" aria-hidden={!isOpenDrawer} aria-controls="a-btn-hamburger" onClick={onCloseDrawer}></div>
  )
}

Overlay.propTypes = {
  isOpenDrawer: PropTypes.bool,
  onCloseDrawer: PropTypes.func
}

export default Overlay
