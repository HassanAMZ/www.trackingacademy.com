"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const linkHover = {
 hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export default function Home() {
 return (
  <div className='flex flex-col items-center justify-center'>
   <div className='container-primary py-3'>
    <nav className='shadow-md border rounded-lg p-2 grid place-content-center transition duration-300 ease-in-out w-full bg-accent'>
     <div className='text-lg font-semibold  text-complementary flex gap-2'>
      TrackingAcademy.com
     </div>
    </nav>
   </div>
   <div className='pt-12 text-center'>
    <h1 className='text-3xl font-bold container-primary'>
     DO YOU WANT TO <span className='text-accent'>FIX YOUR TRACKING?</span>
    </h1>
    <p>Click one of the three boxes below</p>
   </div>
   <div className='container-primary py-12'>
    <div className='p-6 text-center shadow-md rounded-lg border'>
     <h3 className='pb-6'>What best describes you?</h3>
     <div className='flex gap-5 sm:flex-row flex-col items-center justify-center max-w-3xl mx-auto'>
      <motion.div whileHover='hover' variants={linkHover}>
       <Link
        className='border rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-accent hover:text-complementary hover:shadow-xl w-full'
        href='/for-businesses'>
        <Image
         src='/static/icons/business-owner.png'
         width={1080}
         height={1080}
         className='w-32'
         alt='business-owner.png'
        />
        I am a Business Owner
       </Link>
      </motion.div>
      <motion.div whileHover='hover' variants={linkHover}>
       <Link
        className='border rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-accent hover:text-complementary hover:shadow-xl w-full'
        href='/for-agencies'>
        <Image
         src='/static/icons/agency-owner.png'
         width={1080}
         height={1080}
         className='w-32'
         alt='agency-owner.png'
        />
        I am a Agency Owner
       </Link>
      </motion.div>
      <motion.div whileHover='hover' variants={linkHover}>
       <Link
        className='border rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-accent hover:text-complementary hover:shadow-xl w-full'
        href='/for-freelancers'>
        <Image
         src='/static/icons/freelancer.png'
         width={1080}
         height={1080}
         className='w-32'
         alt='freelancer.png'
        />
        I am a Freelancer
       </Link>
      </motion.div>
     </div>
    </div>
   </div>
  </div>
 );
}
