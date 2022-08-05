import React from 'react'

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {

  {/* =============== HEADER SOCIALS =============== */}

  return (
    <div className='header__socials'>
      <a href="https://github.com/avimax37" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://linkedin.com/in/avinaba-bera" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://twitter.com/IainSchneider" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials