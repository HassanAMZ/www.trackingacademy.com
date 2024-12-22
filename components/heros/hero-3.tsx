'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Container from '@/components/ui/container';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import TrackingTable from '../global/tracking-table';
import VideoPlayer from '../offers/offer-001/video-player';
import TestimonialsCarousel from '../offers/offer-002/testimonial-carousal';
import Text from '../ui/text';

const EnhancedHero = () => {
  function clsx(arg0: string, arg1: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="max-w-7xl">
        <div className="py-6 lg:py-12">
          <section className="grid gap-8 pb-12 lg:grid-cols-3 lg:pb-24">
            <div className="space-y-6 lg:col-span-2">
              <Badge variant="outline">Revolutionary Ad Tracking Post-iOS 17 World</Badge>
              <Text as="h1" variant="heading3xl">
                Done-For-You Ad Tracking Setup – Achieve 95% Accuracy in Just 3 Days!
              </Text>
              <Text as="h2" variant="headingMd" className="text-muted-foreground">
                Sit back while our experts set up a cutting-edge Cloud Tracking system for you. No
                guesswork—just results. Maximize your ROI effortlessly.
              </Text>

              <div className="flex items-center space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Let’s Handle Your Tracking Setup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">Check the case studies</Link>
                </Button>
              </div>

              <div className="max-w-2xl">
                <TestimonialsCarousel />
              </div>
            </div>

            <TrackingTable />
          </section>

          <article className="relative mx-auto max-w-4xl">
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                linear-gradient(
                  to right,
                  hsl(var(--primary)) 20%,
                  hsl(var(--secondary)) 50%,
                  hsl(var(--primary)) 80%
                )
              `,
                borderRadius: 'var(--radius)', // Matches your Tailwind border radius
              }}
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 20,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />

            <Card className="relative border-none bg-card/90 shadow-2xl backdrop-blur-sm">
              <CardHeader className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  The Precision Profit Package
                </Badge>
                <h2 className="text-3xl font-bold">We Handle Your Tracking Setup for You!</h2>
                <p className="text-muted-foreground">
                  Let us take care of your ad tracking from start to finish, ensuring your campaigns
                  are optimized for success with minimal effort on your part.
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">$1200</span>
                  <span className="text-xl text-muted-foreground">one-time payment</span>
                </div>
                <ul className="space-y-2">
                  {[
                    'Custom server-to-server tracking setup by experts',
                    'Precise data integration and configuration',
                    'Seamless tracking across all platforms',
                    'Real-time dashboards tailored to your business',
                    '24/7 priority support for peace of mind',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <Text as="span" variant="bodyMd" className="text-muted-foreground">
                        {feature}
                      </Text>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Let’s Handle Your Tracking Setup
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  30-day money-back guarantee • No questions asked
                </div>
              </CardFooter>
            </Card>
          </article>

          <section className="pb-12 pt-20">
            <div className="flex flex-col items-center gap-4 text-center">
              <Text as="h2" variant="headingXl">
                Stop Losing Money to Inaccurate Paid Ads Tracking
              </Text>
              <Text as="p" className="max-w-[700px]" variant="bodyLg">
                Tracking gaps are costing you money. If you don't know which ads work, every dollar
                you spend could be a dollar lost. Our service pinpoints your current issues and
                delivers a 95%+ accurate tracking solution.
              </Text>
            </div>
          </section>

          <section className="mt-12 rounded-lg bg-card/50 p-6">
            <Text as="h4" variant="headingXl" className="py-4 text-center">
              Why Our Done-For-You Service?
            </Text>
            <div className="py-6">
              <VideoPlayer
                src="/videos/home/reason-comparison-horizontal.mp4"
                placeholder="/images/home/reason-comparison-horizontal.gif"
                className="hidden sm:block"
              />
              <VideoPlayer
                src="/videos/home/reason-comparison-vertical.mp4"
                placeholder="/images/home/reason-comparison-vertical.gif"
                className="block sm:hidden"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Traditional Tracking</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-red-500" />
                    <span className="text-sm">Limited accuracy</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-red-500" />
                    <span className="text-sm">Affected by ad blockers</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-red-500" />
                    <span className="text-sm">Incomplete data</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Our Cloud Tracking</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">95% accuracy</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">Ad blocker resistant</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">Comprehensive insights</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Your Benefits</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Increased ROI</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Better decision making</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Time and cost savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default EnhancedHero;
