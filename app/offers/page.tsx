'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const linkVariants = {
 hover: {
  scale: 1.01,
  transition: {
   duration: 0.3,
  },
 },
 tap: {
  scale: 0.9,
 },
};

const pageVariants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1, transition: { duration: 1 } },
};

export default function Page() {
 return (
  <div>
   <h3 className='text-3xl font-bold text-center container-primary py-6'>
    Active Offers
   </h3>
   <motion.main
    className='container-primary py-4'
    initial='hidden'
    animate='visible'
    variants={pageVariants}>
    <div className='space-y-4'>
     <motion.div whileHover='hover' whileTap='tap' variants={linkVariants}>
      <Link
       href='/offers/95-accurate-tracking-in-7-days'
       className='text-xl font-semibold link-primary'>
       Offer 001
      </Link>
     </motion.div>
    </div>
   </motion.main>
  </div>
 );
}
