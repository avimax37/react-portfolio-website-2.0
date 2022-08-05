import React from 'react'
import './services.css'
import { FiCheck } from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

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
              <p>Conducting user research to identify any goals, needs, behaviors, and pain points involved with a product interaction.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Developing user personas based on target customers.</p>
            </li>
          </ul>
        </article>

        {/* =============== END OF UI/UX =============== */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* =============== END OF WEB DEVELOPMENT =============== */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* =============== END OF CONTENT CREATION =============== */}

      </div>
    </section>
  )
}

export default Services