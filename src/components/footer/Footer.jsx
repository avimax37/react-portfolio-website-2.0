import React from 'react'
import './footer.css'

import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Avinaba Bera</a>

      {/* =============== FOOTER PERMALINKS =============== */}

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* =============== FOOTER SOCIALS =============== */}

      <div className="footer__socials">
        <a href="https://facebook.com/avinababera277/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://github.com/avimax37" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/IainSchneider" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>

      {/* =============== FOOTER COPYRIGHT =============== */}

      <div className="footer__copyright">
        <small>&copy; Avinaba Bera. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer