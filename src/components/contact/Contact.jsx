import React from 'react'
import { useRef as UseRef } from "react";
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k4yr6j8', 'template_pbxzqcs', form.current, '3IO70AsVCw07oL308')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Grt In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>avimax37@gmail.com</h5>
            <a href="mailto:avimax37@gmail.com" target="_blank" rel="noopener noreferrer">Send me an Email</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Avinaba Bera</h5>
            <a href="https://linkedin.com/in/avinaba-bera" target="_blank" rel="noopener noreferrer">Connect with me</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 8617082239</h5>
            <a href="https://api.whatsapp.com/send?phone=8617082239" target="_blank" rel="noopener noreferrer">Send me a message</a>
          </article>
        </div>

        {/* CONTACT FORM */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact