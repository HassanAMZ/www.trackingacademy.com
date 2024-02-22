"use client";

import Image from "next/image";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
 const settings = {
  dots: false,
  infinite: true,
  speed: 8000,
  slidesToShow: 3,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: true,
  arrows: false,
  initialSlide: 0,
  lazyLoad: "anticipated" as LazyLoadTypes,
  responsive: [
   {
    breakpoint: 2100,
    settings: {
     slidesToShow: 7,
    },
   },
   {
    breakpoint: 1600,
    settings: {
     slidesToShow: 6,
    },
   },
   {
    breakpoint: 1280,
    settings: {
     slidesToShow: 5,
    },
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 4,
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

 const clientImages = [
  "makescents",
  "pandaparken",
  "holidayparken",
  "easyloanapproval",
  "nook",
  "equifund",
  "figment",
  "buyfreddie",
 ];
 return (
  <div className='slider-container-shadow'>
   <Slider {...settings}>
    {clientImages.map((image, index) => (
     <Image
      key={index}
      src={`/images/home/client-${image}-mobile-home.png`}
      alt={"client-makescents-mobile-home.png"}
      className='px-1 rounded-lg'
      width={1080}
      height={1920}
     />
    ))}
   </Slider>
  </div>
 );
};

export default ImageSlider;
