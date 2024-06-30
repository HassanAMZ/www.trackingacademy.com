import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export const FirebaseAuthSkeleton = () => {
 return (
  <section className='py-2'>
   <Card className='rounded-t-lg bg-secondary'>
    <CardContent className='flex flex-col items-center gap-2 justify-center h-[30vh]'>
     <Skeleton className='h-4 w-[250px]' />
     <div className='flex flex-col w-full items-center gap-2 justify-center'>
      <Skeleton className='h-12 w-[200px] rounded-lg' />
      <div className='text-sm gap-6 flex items-center justify-center'>
       <div className='relative h-8 w-8 pt-4'>
        <Skeleton className='absolute left-0 top-0 h-8 w-8 rounded-full' />
        <Skeleton className='absolute left-4 top-0 h-8 w-8 rounded-full' />
        <Skeleton className='absolute left-8 top-0 h-8 w-8 rounded-full' />
       </div>
       <Skeleton className='h-4 w-[150px]' />
      </div>
     </div>
    </CardContent>
   </Card>
  </section>
 );
};
