"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import clientDetails from "@/data/clients-details";
const ImageSlider = () => {
 const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: true,
  arrows: false,
  responsive: [
   {
    breakpoint: 2100,
    settings: {
     slidesToShow: 5,
    },
   },
   {
    breakpoint: 1600,
    settings: {
     slidesToShow: 5,
    },
   },
   {
    breakpoint: 1280,
    settings: {
     slidesToShow: 4,
    },
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 3,
    },
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 3,
    },
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 2,
    },
   },
  ],
 };

 return (
  <div className='slider-container-shadow'>
   <Slider {...settings}>
    {clientDetails.map((testimonial, index) => (
     <div key={index} className='p-1'>
      <div className='text-left bg-light-primary rounded-md p-2 h-[450px]  py-5 px-2 md:px-5 flex flex-col gap-5 items-start justify-between'>
       <div className='flex flex-col gap-3 items-start justify-center'>
        <svg
         height='35px'
         className='mb-2 fill-primary'
         version='1.1'
         id='Capa_1'
         xmlns='http://www.w3.org/2000/svg'
         xmlnsXlink='http://www.w3.org/1999/xlink'
         x='0px'
         y='0px'
         viewBox='0 0 32 32'
         xmlSpace='preserve'>
         <g>
          <g id='right_x5F_quote'>
           <g>
            <path d='M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z'></path>
            <path d='M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z'></path>
           </g>
          </g>
         </g>
        </svg>
        <span>⭐⭐⭐⭐⭐</span>
        <div className='flex flex-col gap-2'>
         <p className='paragraph-primary font-bold text-dark-primary line-clamp-2'>
          {testimonial.title} &nbsp;-&nbsp;
          {testimonial.testimonial_details[0].project_title}
         </p>
         <blockquote className='paragraph-primary  text-dark-primary line-clamp-5 md:line-clamp-4'>
          {testimonial.testimonial_details[0].testimonial}
         </blockquote>
        </div>
       </div>

       <div className='flex items-center justify-start gap-3 py-5 w-full'>
        <div className='min-w-10 min-h-10'>
         <Image
          src={testimonial.images[0].link}
          alt={`Slide ${index}`}
          width={1080}
          height={1920}
          className='rounded-full w-10 h-10 scale-125'
         />
        </div>

        <a
         href={
          testimonial?.business_details.link ||
          testimonial?.business_details.email
         }
         className='paragraph-secondary font-semibold text-dark-primary transition duration-500 ease-in-out'>
         {testimonial?.client_details[0].name ||
          testimonial?.client_details[0].position}
        </a>
       </div>
      </div>
     </div>
    ))}
   </Slider>
  </div>
 );
};

export default ImageSlider;
