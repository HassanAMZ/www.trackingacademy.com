// app/components/loading.tsx

import React from 'react';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import Container from '@/components/ui/container';
import TypographyH3 from '@/components/ui/typography-h3';
import Navbar from '@/components/global/navbar';

const Loading: React.FC = () => {
 return (
  <React.Fragment>
   <Container className='grid place-content-center min-h-screen'>
    <Card className='w-full max-w-md'>
     <CardHeader>
      <CardTitle>
       <TypographyH3 className='text-center py-4'>Loading</TypographyH3>
      </CardTitle>
     </CardHeader>
     <CardContent className='flex flex-col items-center'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mb-4'></div>
      <CardDescription className='text-center'>
       The page is currently loading. Please wait a moment.
      </CardDescription>
     </CardContent>
    </Card>
   </Container>
  </React.Fragment>
 );
};

export default Loading;
