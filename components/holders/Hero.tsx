import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Hero() {
 return (
  <ContainerLayout className=' '>
   <div className='rounded-md text-left sm:text-center backgroundOverlay sm:py-12'>
    <div className='flex justify-left sm:justify-center pt-5 pb-3'>
     <div className='relative rounded-md text-xs sm:text-base font-normal p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 hover:dark:ring-gray-100/20 gap-1 shadow-md '>
      Check Learning Resourses&nbsp;
      <Link href='/courses' className='font-medium text-purple'>
       <span className='absolute inset-0' aria-hidden='true'></span>
       Explore Courses <span aria-hidden='true'>&rarr;</span>
      </Link>
     </div>
    </div>

    <div className='flex sm:gap-4 gap-2 flex-col'>
     <div className='text-6xl leading-none sm:text-7xl font-bold tracking-tighter'>
      Grow your business with{" "}
      <span className='animate-text  capitalize '>Accurate data</span>
     </div>
     <p className='text-2xl leading-tight font-semibold'>
      <span className='opacity-70'>
       Improving Marketing Strategies for Small Businesses through Advanced
       Tracking Implementation.
      </span>
     </p>
     <div className='flex pt-2 items-center justify-left sm:justify-center gap-x-4'>
      <Link href='/portfolio' className='primaryButton'>
       Show me the Web Analytics Portfolio
       <span aria-hidden='true'> &nbsp;→ </span>
      </Link>
      {/* <Link
       href='/contact'
       className='rounded-md px-3.5 py-2.5 text-base font-medium '>
       Get In Touch <span aria-hidden='true'> &nbsp;→ </span>
      </Link> */}
     </div>
    </div>
   </div>
  </ContainerLayout>
 );
}
