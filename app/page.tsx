import Hero from '@/components/home/hero';
import WorkHistory from '@/components/home/work-history';
import Offer from '@/components/home/offer';
import ClientTestimonial from '@/components/home/testimonaials';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <WorkHistory />
      <Offer />
      <ClientTestimonial />
      <FrequentlyAskedQuestions />
    </main>
  );
}
