import Link from "next/link";

export default function Hero() {
 return (
  <div className='sm:p-8 p-3 bg-gray-800 bg-opacity-[30%] rounded-lg text-center'>
   <div className='py-5 mx-auto lg:max-w-[75vw]'>
    <div className='flex justify-center py-2'>
     <div className='relative rounded-full text-xs sm:text-sm text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'>
      Welcome to Hassan's Web Analytics Expertise!{` `}
      <Link href='/about-us' className='font-semibold text-my-purple'>
       <span className='absolute inset-0' aria-hidden='true'></span>
       Learn More <span aria-hidden='true'>&rarr;</span>
      </Link>
     </div>
    </div>
    <div className='flex gap-4 flex-col'>
     <h2 className='text-4xl font-bold'>
      Elevate your business decisions with accurate data.
     </h2>
     <p className='text-lg font-semibold'>
      <span className='opacity-80'>
       Elevating Marketing Strategies for Small Businesses through Advanced
       Tracking Implementation.
      </span>
     </p>
     <div className='flex pt-2 items-center justify-center gap-x-6'>
      <Link
       href='/services'
       className='rounded-md bg-gradient-to-tr from-my-purple to-my-pink px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:to-my-purple hover:from-my-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-purple'>
       Explore Services
      </Link>
      <Link
       href='/contact'
       className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-purple'>
       Get In Touch <span aria-hidden='true'> &nbsp;→ </span>
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}
