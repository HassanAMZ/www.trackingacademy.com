import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Hero() {
 return (
  <div className='rounded-md text-center'>
   <ContainerLayout className='pb-10 pt-5 sm:py-12 sm:bg-gray-900 sm:bg-opacity-5 sm:shadow-md rounded-md'>
    <div className='flex justify-center pt-5 pb-3'>
     <div className='relative rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1 shadow-md'>
      Welcome to Hassan's Web Analytics Expertise!&nbsp;
      <Link href='/about-us' className='font-semibold text-purple'>
       <span className='absolute inset-0' aria-hidden='true'></span>
       Learn More <span aria-hidden='true'>&rarr;</span>
      </Link>
     </div>
    </div>
    <div className='flex gap-4 flex-col'>
     <h2 className='text-4xl sm:text-5xl font-bold'>
      Elevate your business with accurate data.
     </h2>
     <p className='sm:text-lg font-semibold'>
      <span className='opacity-70'>
       Improving Marketing Strategies for Small Businesses through Advanced
       Tracking Implementation.
      </span>
     </p>
     <div className='flex pt-2 items-center justify-center gap-x-4'>
      <Link
       href='/portfolio'
       className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple bg-purple-50 border-2 border-purple-50'>
       Show me the portfolio
      </Link>
      <Link
       href='/contact'
       className='rounded-md px-3.5 py-2.5 text-sm font-semibold '>
       Get In Touch <span aria-hidden='true'> &nbsp;→ </span>
      </Link>
     </div>
    </div>
   </ContainerLayout>
  </div>
 );
}
