import Hero from '@/components/home/hero';
import WorkHistory from '@/components/home/work-history';
import Offer from '@/components/home/offer';
import ClientTestimonial from '@/components/home/testimonaials';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import Navbar from '@/components/global/navbar';
import Services from '@/components/home/services';

import YoutubeEmbed from '@/components/global/youtube-embed';
import { TypographyH2 } from '@/components/ui/typography';
import CallToAction from '@/components/contact/call-to-action';
import Container from '@/components/ui/container';

export default function Home() {
 return (
  <main>
   <Navbar />
   <div className='space-y-4 lg:space-y-12'>
    <Hero />
    <WorkHistory />
    <YoutubeEmbed embedId='9MGpL_AmEYM' />
    <Offer />
    <Services />
    <Container>
     <TypographyH2 className='text-center'>
      Optimize Your Tracking in 7 Days! Get Started with No Risk.
     </TypographyH2>
     <CallToAction buttonText={'Get Started'} />
    </Container>

    <ClientTestimonial />
    <FrequentlyAskedQuestions />
   </div>
  </main>
 );
}
