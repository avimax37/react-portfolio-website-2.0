import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/client1.jpg'
import AVTR2 from '../../assets/client1.jpg'
import AVTR3 from '../../assets/client1.jpg'
import AVTR4 from '../../assets/client1.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

{/* =============== DATA ARRAY MAPPING =============== */}

const data = [
  {
    avatar: AVTR1,
    name: 'Avinaba Bera',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident minima neque fugit numquam beatae autem perspiciatis commodi! Totam quas in sequi molestias placeat repellat, animi voluptatum? Modi, blanditiis animi.'
  },
  {
    avatar: AVTR2,
    name: 'Avinaba Bera',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident minima neque fugit numquam beatae autem perspiciatis commodi! Totam quas in sequi molestias placeat repellat, animi voluptatum? Modi, blanditiis animi.'
  },
  {
    avatar: AVTR3,
    name: 'Avinaba Bera',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident minima neque fugit numquam beatae autem perspiciatis commodi! Totam quas in sequi molestias placeat repellat, animi voluptatum? Modi, blanditiis animi.'
  },
  {
    avatar: AVTR4,
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
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt='Avatar' />
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