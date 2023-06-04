import Hero from "@/components/Hero";
import ServiceCard from "@/components/cards/ServiceCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import servicesDetails from "@/data/services-details";
export default function Page() {
 return (
  <main className='flex flex-col gap-2'>
   <Hero />
   <div className='bg-gray-900 bg-opacity-50 rounded-md  p-3'>
    <ContainerLayout>
     <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
      {servicesDetails.slice(0, 4).map((service, index) => {
       return (
        <div key={index} className='flex gap-1 flex-col'>
         <ServiceCard service={service} />
        </div>
       );
      })}
     </div>
    </ContainerLayout>
   </div>
  </main>
 );
}
