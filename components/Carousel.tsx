import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Router from 'next/router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Carousel({ data, title }) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (!element.primaryImage) data[i].primaryImage = { url: '/images/404PosterNotFound.jpg' }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 className="d-block text-center rounded p-2" style={{ backgroundColor: '#40babd', width: 'fit-content', fontFamily: 'courier, monospace', color: 'white' }}>{title.toUpperCase()}</h2>
      </div>
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
        style={{ width: '60%' }}
      >
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[8].id)} ><Image src={data[8].primaryImage.url} alt={data[8].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[7].id)} ><Image src={data[7].primaryImage.url} alt={data[7].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[6].id)} ><Image src={data[6].primaryImage.url} alt={data[6].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[5].id)} ><Image src={data[5].primaryImage.url} alt={data[5].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[4].id)} ><Image src={data[4].primaryImage.url} alt={data[4].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[3].id)} ><Image src={data[3].primaryImage.url} alt={data[3].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[2].id)} ><Image src={data[2].primaryImage.url} alt={data[2].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[1].id)} ><Image src={data[1].primaryImage.url} alt={data[1].titleText.text} height={300} width={200} /></SwiperSlide>
        <SwiperSlide style={{ height: '300px', cursor: 'pointer' }} onClick={() => Router.push('/title/' + data[0].id)} ><Image src={data[0].primaryImage.url} alt={data[0].titleText.text} height={300} width={200} /></SwiperSlide>
      </Swiper>
    </>
  );
}