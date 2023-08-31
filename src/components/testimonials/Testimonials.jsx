import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar1.png'
import AVTR3 from '../../assets/avatar1.png'
import AVTR4 from '../../assets/avatar1.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: '...',
    review: `Hope you are`
  },
  {
    avatar: AVTR2,
    name: '...',
    review: `the first`
  },
  {
    avatar: AVTR3,
    name: '...',
    review: `to fill`
  },
  {
    avatar: AVTR4,
    name: '...',
    review: `out this !`
  }
]


const Testimonials = ({ theme }) => {
  return (
    <section id='testimonials' className={theme}>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map((props, index) => {
            return(
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={props.avatar} />
                </div>
                <h5 className='client__name'>{props.name}</h5>  
                <small className='client__review'>
                  {props.review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
