import React from 'react'
import './testimonials.css';
import AVATAR1 from '../../assets/man.png'

import {Swiper , SwiperSlide}  from 'swiper/react';
import { Navigation, Pagination , Scrollbar , A11y } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data= [
  {
    id : 1,
    avatar : AVATAR1,
    name : "Jane Smith",
    review : "Mohammed Reda exceeded our expectations with the desktop application he developed for us. His expertise in C# and SQL Server was evident throughout the project. The application is user-friendly, robust, and has streamlined our inventory management process. Working with him was a pleasure, and his attention to detail and prompt communication were commendable."
  },
  {
    id : 2,
    avatar : AVATAR1,
    name : "David Johnson",
    review : "I am thoroughly impressed with the CRM system Mohammed Reda created for our business. His in-depth knowledge of C# and SQL Server translated into a seamless and efficient solution for managing our customer interactions. The system has transformed our customer relationships, and Mohammed's commitment to delivering on time was truly appreciated."
  },
  {
     id : 3,
    avatar : AVATAR1,
    name : "Sarah Williams",
    review : "Our accounting department is now running smoother than ever, thanks to Mohammed Reda's exceptional software skills. He designed a financial application using C# and SQL Server that has streamlined our budgeting and expense tracking. His attention to detail and ability to tailor the software to our specific needs were instrumental in its success"
  },
  
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[ Pagination ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable : true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={()=>console.log("slide change")}
      >
        {
          data.map(({id , avatar , name , review})=>{
            return(
              <SwiperSlide key={id} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
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