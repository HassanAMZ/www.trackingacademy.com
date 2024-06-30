import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TypographyP from '@/components/ui/typography-p';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Container from '@/components/ui/container';
import TypographyH1 from '@/components/ui/typography-h1';

export default function Hero() {
 return (
  <Container className='md:py-12 py-4'>
   <div className='md:grid md:grid-cols-5 flex flex-col items-start text-center md:text-left justify-center gap-4 '>
    <div className='space-y-3 md:col-span-3'>
     <TypographyH1>
      <span className='text-primary'>Get 95% Accurate Tracking</span> in 7 Days
      – Guaranteed! Turn your data into{' '}
      <span className='text-primary'>easy-to-use insights </span> and{' '}
      <span className='text-primary'>see your profits grow quickly</span>.
     </TypographyH1>
     <TypographyP applyMargin={false}>
      Our proven system ensures you have the most accurate conversion data, with
      minimal effort and no disruption to your current setup.
     </TypographyP>

     <div className='grid grid-cols-1 md:grid-cols-1 md:text-left text-center pb-4'>
      <div className='space-y-1 '>
       <TypographyP>✔ Setup and optimized within 7 days.</TypographyP>
       <TypographyP>✔ Achieve 95% tracking accuracy.</TypographyP>
       <TypographyP>✔ 95% accuracy or full refund.</TypographyP>
      </div>
     </div>

     <Button asChild className='px-10 py-4 w-full md:w-max'>
      <Link href='/contact'>Schedule A Meeting</Link>
     </Button>

     <div className='flex items-center justify-center md:justify-start gap-2'>
      <div className='relative h-8 w-8 grayscale'>
       <Avatar className='absolute left-0 top-0 z-1'>
        <AvatarImage
         src='/images/clients/malik-osama.jfif'
         alt='@malik-osama'
        />
        <AvatarFallback>MO</AvatarFallback>
       </Avatar>

       <Avatar className='absolute left-4 top-0 z-2'>
        <AvatarImage
         src='/images/clients/philipp-herglotz.jfif'
         alt='@philipp-herglotz'
        />
        <AvatarFallback>PH</AvatarFallback>
       </Avatar>

       <Avatar className='absolute left-8 top-0 z-3'>
        <AvatarImage
         src='/images/clients/imtiaz-ahmad.jfif'
         alt='@imtiaz-ahmad'
        />
        <AvatarFallback>IA</AvatarFallback>
       </Avatar>
      </div>
      <TypographyP applyMargin={false} className='pl-10'>
       1032+ websites configured & 300+ satisfied clients
      </TypographyP>
     </div>
    </div>

    <div className='w-full overflow-y-auto rounded-xl text-sm border md:col-span-2 overflow-hidden'>
     <table className='w-full'>
      <thead>
       <tr className='m-0 p-0 even:bg-muted'>
        <th className='px-2 py-3 whitespace-nowrap text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
         Amount Spent
        </th>
        <th className='px-2 py-3 whitespace-nowrap text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
         ROAS Before
        </th>
        <th className='px-2 py-3 whitespace-nowrap text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
         ROAS After
        </th>
       </tr>
      </thead>
      <tbody>
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $40,802
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.59
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         4.5
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $31,668
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.75
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         4.2
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $27,277
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.98
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         3.8
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $28,751
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.84
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         5.3
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $31,756
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.93
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         3.4
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $30,636
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         2.12
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         4.7
        </td>
       </tr>

       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $25,000
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         2.25
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         3.8
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $28,400
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.70
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         4.8
        </td>
       </tr>

       <tr className='m-0 p-0 even:bg-muted'>
        <td className='px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
         $307,390
        </td>
        <td className='px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right '>
         1.62
        </td>
        <td className='bpx-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
         5.0
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </Container>
 );
}
