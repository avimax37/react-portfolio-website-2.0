import React from 'react'
import './header.css'

import CTA from './CTA'
import ME from '../../assets/dev.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='home'>

      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Avinaba Bera</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

    </header>
  )
}

export default header