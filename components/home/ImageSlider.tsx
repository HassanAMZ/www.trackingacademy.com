"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const ImageSlider = () => {
 const settings = {
  dots: false,
  infinite: true,
  speed: 6000,
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
     slidesToShow: 6,
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

 const clientTestimonial = [
  {
   id: 1,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "Conversion Event Setup and Checks for Google and Facebook Ads",
   feedback: "Great Work, thanks again and will be back",
  },
  {
   id: 2,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "GA4 & GTM tracking for React website",
   feedback:
    "Shahzada stands out for his exceptional professionalism and responsiveness. He consistently delivers results. 10/10 NPS from our side.",
  },
  {
   id: 3,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "GA4 Implementation",
   feedback:
    "Shahzada is highly professional, very responsive, and gets things done. Highly recommended and we'll keep working with him.",
  },
  {
   id: 4,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "Tracking & Conversion tag setup",
   feedback:
    "Shahzada finished his job with professional skill & prompt action, look forward to work with him in the future.",
  },
  {
   id: 5,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "URGENT: Set Up & Debug Conversions API Tracking for Meta",
   feedback:
    "Thanks for your help! Very responsive and resourceful to handle bugs and issues with our tracking systems for advertising.",
  },
  {
   id: 6,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "GTM and custom data layer setup",
   feedback:
    "Excellent experience with Shahzada. He is very knowledgably in all areas of tracking and analytics; I would highly recommend him.",
  },
  {
   id: 7,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "Fix Google Analytics - Setup GTM - Cross Site Tracking",
   feedback:
    "Helped to resolve analytic issues. Very responsive, very helpful. Highly recommended.",
  },
  {
   id: 8,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "Anytrack Custom integration",
   feedback: "The best tracking expert. As always, pleasure to work with you!",
  },
  {
   id: 9,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "FB and GTM Tracking",
   feedback: "Very nice person and great professional! I recommend!",
  },
  {
   id: 10,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "GA4 ecommerce - bug fix - ecommerce tracking",
   feedback:
    "Professional, fast and efficient at GA4 ecommerce tracking. He took the lead and solved our problem and I would definitely recommend working with him.",
  },
  {
   id: 11,
   imageURL: "/images/hero/mobilephonewebpage.png",
   name: "mango man",
   role: "apple",
   job: "GA4 & Proper Conversion Tracking",
   feedback:
    "Fantastic job, did exactly what was asked and was very prompt with communication.",
  },
 ];

 return (
  <div className='slider-container-shadow'>
   <Slider {...settings}>
    {clientTestimonial.map((testimonial, index) => (
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
          {testimonial.job}
         </p>
         <blockquote className='paragraph-primary  text-dark-primary line-clamp-5 md:line-clamp-4'>
          {testimonial.feedback}
         </blockquote>
        </div>
       </div>

       <div className='flex items-center justify-start gap-3 py-5 w-full'>
        <div className='min-w-10 min-h-10'>
         <Image
          src={testimonial.imageURL}
          alt={`Slide ${index}`}
          width={1080}
          height={1920}
          className='rounded-full w-10 h-10'
         />
        </div>

        <Link
         href='#'
         className='paragraph-secondary font-semibold text-dark-primary transition duration-500 ease-in-out'>
         {testimonial?.name || testimonial.job}
         {testimonial?.role || testimonial.job}
        </Link>
       </div>
      </div>
     </div>
    ))}
   </Slider>
  </div>
 );
};

export default ImageSlider;
