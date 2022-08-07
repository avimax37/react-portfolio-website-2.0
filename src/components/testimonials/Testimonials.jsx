import React from 'react'
import './testimonials.css'

import { BsLinkedin } from 'react-icons/bs'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const data = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/vishal-kumar-shaw-21a985192/',
    name: 'Vishal Kumar Shaw',
    review: '"It is an absolute joy to work with Avinaba Bera. I have worked with him for almost 3+ years now for all our projects and our team has always received a first class service when it comes to any queries related to web development..... would highly recommend him as a web developer."'
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/anubhab-de-bhowmik-5371361b2/',
    name: 'Anubhab De Bhowmik',
    review: '"Good hardworking guy. Dependable."'
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/pratyay-basu-b84a38193/',
    name: 'Pratyay Basu',
    review: '"Avinaba Bera proved to be a great person as a well educated web developer who can be trusted. Loyal, insightful and independent. He is a reliable and forward thinking developer. He always maintains very good relation with group members. He is a truly remarkable person."'
  },
  {
    id: 4,
    link: 'https://www.linkedin.com/in/debjit-chattopadhyay-710336188/',
    name: 'Debjit Chattopadhyay',
    review: '"Avinaba Bera has a very strong working nature and has unparalleled problem solving skills. His performance at UEMK was golden. Deliver results and move on. That is his way. He always maintains very good relation with his team members. I recommend him as a web developer."'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation>

        {/* =============== DATA MAP METHOD =============== */}

        {
          data.map(({ link, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <a href={link} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials