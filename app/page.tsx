import Hero from '@/components/home/hero';
import WorkHistory from '@/components/home/work-history';
import Offer from '@/components/home/offer';
import ClientTestimonial from '@/components/home/testimonaials';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import Navbar from '@/components/global/navbar';
import Services from '@/components/home/services';
import CallToAction from '@/components/home/call-to-action';

export default function Home() {
 return (
  <main>
   <Navbar />
   <div className='space-y-4 sm:space-y-8 lg:space-y-12'>
    <Hero />
    <WorkHistory />
    <Offer />
    <Services />
    <CallToAction presetNumber={8} />

    <ClientTestimonial />
    <FrequentlyAskedQuestions />
   </div>
  </main>
 );
}
