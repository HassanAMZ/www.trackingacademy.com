import ServiceCard from "@/components/cards/ServiceCard";
import servicesDetails from "@/data/services-details";

export default function Page() {
 return (
  <section>
   <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:py-8 py-4'>
    {servicesDetails.map((service, index) => {
     return (
      <div key={index} className='flex gap-1 flex-col'>
       <ServiceCard service={service} />
      </div>
     );
    })}
   </div>
  </section>
 );
}
