import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import servicesDetails from "@/data/services-details";
export default function Page() {
 return (
  <main>
   <Hero />
   <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 py-8'>
    {servicesDetails.slice(0, 3).map((service, index) => {
     return (
      <div key={index} className='flex gap-1 sm:flex-col flex-row'>
       <ServiceCard service={service} />
      </div>
     );
    })}
   </div>
   <div className='container mx-auto'>Home page</div>
  </main>
 );
}
