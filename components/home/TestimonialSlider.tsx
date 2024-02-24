"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import TestimonialCard from "../testimonial/TestimonialCard";
import React from "react";
import BookACall from "./BookACall";

const sliderSettings = {
 dots: true,
 infinite: true,
 speed: 500,
 slidesToShow: 3,
 slidesToScroll: 3,
 responsive: [
  {
   breakpoint: 1024,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
   },
  },
  {
   breakpoint: 600,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
   },
  },
 ],
};

export default function TestimonialSlider() {
 return (
  <div className='px-8'>
   <h2 className='title-primary container-primary py-12 text-center'>
    What others have to say about working with Tracking Academy
   </h2>
   <Slider {...sliderSettings}>
    <TestimonialCard
     person={{
      testimonial:
       "Fantastic job, did exactly what was asked and was very prompt with communication",
      position: "GA4 & Proper Conversion Tracking",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001.jpg",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial: "Very happy working with Hassan! Does a great job!",
      position: "Gads Setup",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/JamieNorsa.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Well, this was not the first project we did with Hassan, but definitely not the last! It is always an absolute pleasure to work with him. Hassan is fast, precise and super patient with our queries. For anyone looking for a top notch tracking expert, Hassan is the man and we look forward to working with him in the future.",
      position: "FixSet Up Advanced GA4 Reports",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/008.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Professional, fast and efficient at GA4 ecommerce tracking. He took the lead and solved our problem and I would definitely recommend working with him.",
      position: "GA4 ecommerce - bug fix - ecommerce tracking",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Very thorough and professional. Identified a problem with our meta tracking and implemented a complete overhaul that has resolved the problem. Would recommend.",
      position: "Audit Google Tag and FB/Tiktok Pixels",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/007.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial: "Another good experience from a high quality professional",
      position: "FB, GA and Shopify set up",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/MalikOsama.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
   </Slider>
  </div>
 );
}
