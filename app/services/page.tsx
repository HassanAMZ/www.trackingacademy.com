import ServiceCard from "@/components/global/ServiceCard";
import servicesDetails from "@/data/services-details";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Page() {
 return (
  <section>
   <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2'>
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
