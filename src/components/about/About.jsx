import React from 'react'
import './about.css'

import ME from '../../assets/dev_about.png'

import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            {/* =============== EXPERIENCE =============== */}

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            {/* =============== CERTIFICATES =============== */}

            <article className="about__card">
              <TbCertificate className='about__icon' />
              <h5>Certificates</h5>
              <small>4+ Certificates</small>
            </article>

            {/* =============== PROJECTS =============== */}

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          {/* =============== ABOUT ME =============== */}

          <p>
            I've spent the last 3+ years working with HTML, CSS, JavaScript, NodeJS, ReactJS, MongoDB learning everything from front-end to back-end. My experience as a front-end developer has helped me collaborate with fellow developers from all over our university. Additionally, working with experienced developers isn't an easy task, however, it has helped me become efficient, productive and fast even in a very stressful environment, which is an important skill in the tech industry.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about