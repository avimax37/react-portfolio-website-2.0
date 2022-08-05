import React from 'react'
import './services.css'

import { FiCheck } from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* =============== START OF UI/UX =============== */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Working closely with developers to convert designs into a working product.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Making high-fidelity wireframes and layouts to show what the final design will look like.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Seeking to make apps and websites visually appealing and easy to navigate.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Performing user testing to validate design decisions and identify problems.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Conducting user research to identify any goals, needs and behaviors involved with a product interaction.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Developing user personas based on target customers.</p>
            </li>
          </ul>
        </article>

        {/* =============== START OF WEB DEVELOPMENT =============== */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Having in-depth knowledge of HTML and CSS.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Having good analytical skills to examine errors in the codes and correct those.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Ability to develop fully responsive web designs to ensure full functionality on various screen sizes.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Implementing complex features onto a website with the help of JavaScript.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Having good interpersonal skills is important to become a successful web developer.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Understanding the back-end basics of web development for collaborating with back-end developers.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Having the basic idea of Search Engine Optimization skills.</p>
            </li>
          </ul>
        </article>

        {/* =============== START OF CONTENT CREATION =============== */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Researching and analyzing information related to the key topic.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Knowing the audience before starting to create the content.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Creating short, medium and long content depending on the assignment.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Having options for photographic and videographic content with deep knowledge of those formats.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Searching optimization is at the heart of quality content.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Planning and creating content with the support of modern technology.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services