"use client";

import React, { Suspense } from "react";
import Image from "next/image";

export default function ReasonsData02() {
 return (
  <div className='py-6'>
   <p className='text-accent text-center'>
    Configuring & Optimizing Website Tracking Setups 🚀
   </p>
   <h2 className='text-3xl font-bold text-center py-4 container-secondary'>
    Here's why you should trust our{" "}
    <div className='relative inline-block'>
     <span>expertise</span>
     <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent rounded-full'></span>
    </div>{" "}
    in website tracking?
   </h2>
   <p className='text-center container-secondary   py-8'>
    For 240+ clients and 25+ agencies, from startups to multi-million-dollar
    websites, we have made setting up and fixing tracking systems simple, fast,
    efficient, and successful.
   </p>
   <div className='rounded-lg'>
    <Suspense
     fallback={
      <Image
       src='/images/for-businesses/reason-comparison-horizontal.svg'
       alt='comparison image'
       width={400}
       height={525}
      />
     }>
     <video
      autoPlay
      loop
      muted
      className='hidden lg:block rounded-lg lg:p-5 p-2 bg-complementary w-full'
      onLoadedMetadata={(e) => {
       e.currentTarget.playbackRate = 1;
      }}>
      <source
       src='/videos/home/reason-comparison-horizontal.mp4'
       type='video/mp4'
      />
     </video>
    </Suspense>

    <Suspense
     fallback={
      <Image
       src='/images/for-businesses/reason-comparison-vertical.svg'
       alt='comparison image'
       width={400}
       height={525}
      />
     }>
     {/* Vertical video for screens smaller than md */}
     <video
      autoPlay
      loop
      muted
      className='lg:hidden rounded-lg lg:p-5 p-2 bg-dominant w-full'
      onLoadedMetadata={(e) => {
       e.currentTarget.playbackRate = 1;
      }}>
      <source
       src='/videos/home/reason-comparison-vertical.mp4'
       type='video/mp4'
      />
     </video>
    </Suspense>
   </div>
  </div>
 );
}
