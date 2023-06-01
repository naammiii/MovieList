import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Carousel({ title , data}) {
  return (
    <>
    <h2 style={{ margin: '5px'}}>{title}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{width: '60%'}}
      >
        <SwiperSlide 
        style={{backgroundColor: 'red', height: '300px'}}>{data['id']}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[1]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[2]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[3]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[4]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[5]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[6]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[7]}</SwiperSlide>
        <SwiperSlide style={{backgroundColor: 'red', height: '300px'}}>{data[8]}</SwiperSlide>
      </Swiper>
    </>
  );
}