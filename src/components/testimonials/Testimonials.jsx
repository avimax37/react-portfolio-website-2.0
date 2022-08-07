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
    name: 'VISHAL KUMAR SHAW',
    review: 'It is an absolute joy to work with Avinaba Bera. I have worked with him for almost 3+ years now for all our projects and our team has always received a first class service when it comes to any queries related to web development..... would highly recommend him as a web developer.'
  },
  {
    id: 2,
    link: 'https://linkedin.com/in/avinaba-bera',
    name: 'Avinaba Bera',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident minima neque fugit numquam beatae autem perspiciatis commodi! Totam quas in sequi molestias placeat repellat, animi voluptatum? Modi, blanditiis animi.'
  },
  {
    id: 3,
    link: 'https://linkedin.com/in/avinaba-bera',
    name: 'Avinaba Bera',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident minima neque fugit numquam beatae autem perspiciatis commodi! Totam quas in sequi molestias placeat repellat, animi voluptatum? Modi, blanditiis animi.'
  },
  {
    id: 4,
    link: 'https://linkedin.com/in/avinaba-bera',
    name: 'Avinaba Bera',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident minima neque fugit numquam beatae autem perspiciatis commodi! Totam quas in sequi molestias placeat repellat, animi voluptatum? Modi, blanditiis animi.'
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