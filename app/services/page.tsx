import ServiceCard from "components/ServiceCard";
import servicesDetails from "@/data/services-details";

export default function Page() {
 return (
  <section>
   <div className='grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-2 sm:py-8 py-4'>
    {servicesDetails.map((service, index) => {
     return (
      <div key={index} className='flex gap-1 sm:flex-col flex-row'>
       <ServiceCard service={service} />
      </div>
     );
    })}
   </div>
  </section>
 );
}
