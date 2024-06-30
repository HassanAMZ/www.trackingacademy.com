import React from 'react';
import TypographyH2 from '../ui/typography-h2';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '../lib/utils';
import Container from '../ui/container';

interface CallToActionProps {
 headingText?: string;
 buttonText?: string;
 href?: string;
 presetNumber?: number;
 className?: string;
}

const presets = [
 {
  heading: 'Watched the video? Apply Using The Button Below To Qualify',
  button: 'Schedule Your Call',
 },
 {
  heading: 'Watched the video? Apply Using The Button Below To Qualify',
  button: 'Apply Now',
 },
 {
  heading: 'Ensure 95% Accuracy! Optimize Your Tracking in 7 Days.',
  button: 'Optimize Now',
 },
 {
  heading: 'Never Miss a Sale Again! Get Your Free Check-Up Today.',
  button: 'Get Free Check-Up',
 },
 {
  heading: 'Improve Conversion Rates by 30%! Sign Up for Accurate Tracking.',
  button: 'Sign Up Now',
 },
 {
  heading: 'Transform Your Marketing! Enjoy 95% Accurate Conversion Data.',
  button: 'Transform Now',
 },
 {
  heading: 'Achieve 95% Accuracy! Contact Us for a Free Consultation.',
  button: 'Contact Us',
 },
 {
  heading: 'Optimize Your Tracking in 7 Days! Get Started with No Risk.',
  button: 'Get Started',
 },
 {
  heading: 'Track 95% of Your Conversions! See Results in 7 Days.',
  button: 'See Results',
 },
 {
  heading: 'Boost Sales and Accuracy! Start Your Free Trial Today.',
  button: 'Start Free Trial',
 },
];

const CallToAction: React.FC<CallToActionProps> = ({
 headingText,
 buttonText,
 presetNumber,
 href = '/contact',
 className,
}) => {
 const preset = presetNumber && presets[presetNumber - 1];
 const finalHeadingText = preset ? preset.heading : headingText;
 const finalButtonText = preset ? preset.button : buttonText;

 return (
  <Container>
   <TypographyH2 className='text-center'>{finalHeadingText}</TypographyH2>
   <Button asChild className={cn('font-medium w-full', className)}>
    <Link href={href}>{finalButtonText}</Link>
   </Button>
  </Container>
 );
};

export default CallToAction;
