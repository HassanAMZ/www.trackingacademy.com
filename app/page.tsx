import Hero from "@/components/holders/Hero";
import RecentClientSlider from "@/components/holders/RecentClientSlider";
import Services from "@/components/holders/Services";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Page() {
 return (
  <main className='flex flex-col gap-2'>
   <Hero />
   {/* <Services /> */}
   <ContainerLayout>
    <h3 className='font-semibold'>Recent Web Analytics & Tracking Projects</h3>
    <RecentClientSlider />
   </ContainerLayout>
  </main>
 );
}
