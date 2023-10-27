import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";

export const FirebaseAuthSkeleton = () => {
 return (
  <ContainerLayout className='backgroundOverlay p-2'>
   <div className='flex flex-col items-center gap-2 h-[50vh] justify-center animate-pulse'>
    <div className='bg-gray-300 rounded w-1/3 h-4'></div>
    <div className='flex gap-4 mt-2'>
     <div className='bg-gray-300 rounded w-[50vw] h-10'></div>
    </div>
   </div>
  </ContainerLayout>
 );
};
