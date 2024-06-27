import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TypographyH3 from '../ui/typography-h3';
import TypographyP from '../ui/typography-p';

export default function ToolsHeroSection() {
  return (
    <Card className='rounded-t-lg'>
      <CardContent className='flex flex-col justify-center items-start space-y-4 p-6'>
        <TypographyH3>UTM Builder Tools</TypographyH3>
        <TypographyP>
          Start building your UTMs for Google Ads, Facebook Ads, TikTok, or
          custom, all at one place
        </TypographyP>
        <div className='flex gap-x-4 justify-center'>
          <Link href='/tools/utm-builder#utm-builder' passHref>
            <Button className='font-bold'>Start Creating UTMs</Button>
          </Link>
          <Link href='/blog/ga4/understanding-utm-builder-tool' passHref>
            <Button variant={'link'} className='font-bold'>
              Read the Blog
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
