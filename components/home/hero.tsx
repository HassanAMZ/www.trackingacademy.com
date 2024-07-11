import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TypographyP from '@/components/ui/typography-p';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Container from '@/components/ui/container';
import TypographyH1 from '@/components/ui/typography-h1';
import { Star } from 'lucide-react';

export default function Hero() {
 return (
  <Container>
   <div className='md:grid md:grid-cols-5 flex flex-col items-start text-left justify-center gap-4 pt-4 lg:pt-8'>
    <div className='space-y-1 md:space-y-3 md:col-span-3'>
     <TypographyH1>
      <span className='text-primary'>Never Miss a Sale Again </span>- Track 95%
      of Your Conversions - <span className='text-primary'> Guaranteed!</span>
     </TypographyH1>

     <TypographyP applyMargin={false}>
      Our proven system ensures you have the most accurate conversion data, with
      minimal effort and no disruption to your current setup.
     </TypographyP>

     <div className='relative border px-6 py-2 rounded-lg w-full max-w-xl bg-secondary space-y-1'>
      <div className='absolute -top-4 right-0 flex space-x-1'>
       <Star />
       <Star />
       <Star />
       <Star />
       <Star />
      </div>
      <TypographyP applyMargin={false} className='italic font-semibold'>
       “Shahzada is great and extremely knowledgable and friendly. He Helped us
       out tremendously.”
      </TypographyP>
      <TypographyP applyMargin={false} className='text-xs pb-2'>
       Mark, <strong>CMO at LemonLawFirm </strong>
      </TypographyP>
      <div className='absolute -bottom-4 right-0 flex space-x-4 mb-2 mr-2'>
       <Button
        variant={'outline'}
        className='p-1 m-0 h-max font-semibold rounded-lg transform rotate-3 text-sm'>
        12.7 ROAS
       </Button>
       <Button
        variant={'outline'}
        className='p-1 m-0 h-max font-semibold rounded-lg transform -rotate-3 text-sm'>
        +64% Conversions
       </Button>
      </div>
     </div>

     <div className='grid grid-cols-1 text-left py-2 space-y-1'>
      <TypographyP>✔ 95% accuracy or full refund.</TypographyP>
      <TypographyP>✔ Improve Conversion Rates by 30%</TypographyP>
      <TypographyP>✔ Setup and optimized within 7 days.</TypographyP>
     </div>

     <Button asChild>
      <Link href='/contact'>Schedule a Meeting</Link>
     </Button>

     <div className='flex items-center justify-start gap-2'>
      <div className='relative h-8 w-8'>
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
      <TypographyP applyMargin={false} className='pl-8 text-sm'>
       1032+ websites configured with 95% accuracy
      </TypographyP>
     </div>
    </div>

    <div className='w-full rounded-xl text-sm border md:col-span-2 overflow-hidden'>
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
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         $18,121
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         2.5
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         4.2
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
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
         $27,151
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         1.31
        </td>
        <td className='px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
         5.1
        </td>
       </tr>
       <tr className='m-0 p-0 even:bg-muted hidden md:table-row'>
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
        <td className='bpx-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right relative'>
         5.0
         <svg
          width='130'
          height='130'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1240 600'
          className='absolute -top-12 -left-12 fill-primary'>
          <path d='M460.3 531c-106.7-3.3-217.2-12.7-315.6-56.5C88 448.7 32.7 394.4 37 327.8c3.2-36 29-64 53.5-88.3C191.8 144.2 332.1 108 465.9 86.2c164-25.2 332-22.5 495.8 2.7 15.7.9 175 34.4 136.2 49.7 73.3 30.4 139 103 86.1 181.7-32.6 46.3-85.7 73.2-135.4 97.6C963 457 870.8 479.5 779 498.6c-104.8 21.1-211.5 35-318.5 32.5Zm28.5-16.5c155.2 2.7 623.7-69.6 687.7-223.9 28.8-82.1-66-134.7-132.5-153a1727.2 1727.2 0 0 0-139-33.7c-6.6-1.8-18.7-1-17.8-10.6-216.3-22.4-493-11.6-689 89.6-56.6 31.2-163.8 103-138.7 178.2 13.4 45.7 52 79.2 94 98.8 105 45.6 222.2 53.2 335.3 54.6Z'></path>
         </svg>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </Container>
 );
}
