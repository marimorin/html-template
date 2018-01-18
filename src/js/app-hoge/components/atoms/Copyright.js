import React from 'react'
import PropTypes from 'prop-types'

const Copyright = ({ label }) => {
  return (
    <div className="a-copyright">
      <small>{label}</small>
    </div>
  )
}

Copyright.propTypes = {
  label: PropTypes.string
}

export default Copyright
