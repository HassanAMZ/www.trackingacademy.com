import CustomLink from "@/components/mdx/CustomLink";
import ServiceCard from "@/components/global/ServiceCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import servicesDetails from "@/data/services-details";
export default function Hero() {
 return (
  <div className='rounded-md'>
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
 );
}
