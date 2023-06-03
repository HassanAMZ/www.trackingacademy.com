import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import servicesDetails from "@/data/services-details";
export default function Page() {
 return (
  <main>
   <Hero />
   <div className='grid grid-cols-2 md:grid-cols-4 gap-2 sm:py-8 py-4'>
    {servicesDetails.slice(0, 4).map((service, index) => {
     return (
      <div key={index} className='flex gap-1 flex-col'>
       <ServiceCard service={service} />
      </div>
     );
    })}
   </div>
   <div className='container mx-auto'>Home page</div>
  </main>
 );
}
