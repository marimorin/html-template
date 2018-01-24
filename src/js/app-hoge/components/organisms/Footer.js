import React from 'react'
import Copyright from '../../components/atoms/Copyright'

const Footer = (props) => {
  let copyrightLabel = "(C) Copyrights. All Rights Reserved."
  return (
    <footer id="o-footer" className="t-container" role="contentinfo">
      <div className="t-content">
        <Copyright label={copyrightLabel} />
      </div>
    </footer>
  )
}

export default Footer
