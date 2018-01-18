import React from 'react'
import Logo from '../../components/atoms/Logo'

const Header = (props) => {
  let logoData = { label: "Hello!!", path: "/" }
  return (
    <header id="o-header" className="t-container" role="banner">
      <div className="t-content">
        <Logo {...logoData} />
      </div>
    </header>
  )
}

export default Header
