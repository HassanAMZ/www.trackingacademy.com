import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Hero() {
 return (
  <ContainerLayout className=' '>
   <div className='rounded-md text-center bg-gray-900 bg-opacity-5 shadow-md py-5 sm:py-12 px-2'>
    <div className='flex justify-center pt-5 pb-3'>
     <div className='relative rounded-md text-xs sm:text-sm font-normal p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1 shadow-md'>
      Check Learning Resourses&nbsp;
      <Link href='/courses' className='font-semibold text-purple'>
       <span className='absolute inset-0' aria-hidden='true'></span>
       Explore Courses <span aria-hidden='true'>&rarr;</span>
      </Link>
     </div>
    </div>

    <div className='flex sm:gap-4 gap-2 flex-col'>
     <div className='text-4xl sm:text-5xl font-black tracking-tighter capitalize'>
      Grow your business with&nbsp;
      <span className='animate-text  bg-gradient-to-r from-red-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent capitalize '>
       Accurate data
      </span>
     </div>
     <p className='sm:text-lg font-medium'>
      <span className='opacity-70'>
       Improving Marketing Strategies for Small Businesses through Advanced
       Tracking Implementation.
      </span>
     </p>
     <div className='flex pt-2 items-center justify-center gap-x-4'>
      <Link
       href='/portfolio'
       className='rounded-md px-3.5 py-2.5 text-sm font-medium shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple bg-purple-50 border-2 border-purple-50 '>
       Show me the portfolio
      </Link>
      <Link
       href='/contact'
       className='rounded-md px-3.5 py-2.5 text-sm font-medium '>
       Get In Touch <span aria-hidden='true'> &nbsp;→ </span>
      </Link>
     </div>
    </div>
   </div>
  </ContainerLayout>
 );
}
