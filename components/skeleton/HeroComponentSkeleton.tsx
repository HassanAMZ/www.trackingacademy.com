import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";

const HeroComponentSkeleton: React.FC = () => {
 return (
  <ContainerLayout>
   <div className='animate-pulse flex flex-col space-y-4 px-5 py-20 md:p-14 backgroundOverlay'>
    {/* Skeleton for image group */}
    <div className='flex'>
     {[...Array(4)].map((_, idx) => (
      <div key={idx} className='rounded-full bg-gray-300 h-8 w-8'></div>
     ))}
    </div>

    {/* Skeleton for headings and text */}
    <div className='space-y-2'>
     <div className='h-12 bg-gray-300 rounded w-3/4'></div>
     <div className='h-12 bg-gray-300 rounded w-3/5'></div>
     <div className='h-6 bg-gray-300 rounded w-1/2'></div>
     <div className='h-6 bg-gray-300 rounded'></div>
    </div>

    {/* Skeleton for buttons */}
    <div className='flex space-x-4'>
     <div className='h-10 bg-gray-300 rounded w-24'></div>
     <div className='h-10 bg-gray-300 rounded w-24'></div>
    </div>
   </div>
  </ContainerLayout>
 );
};

export default HeroComponentSkeleton;
