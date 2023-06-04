import ServiceCard from "@/components/cards/ServiceCard";
import clientsDetails from "@/data/clients-details";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import ClientCard from "@/components/cards/ClientCard";

export default function Page() {
 return (
  <section>
   <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
    {clientsDetails.map((client, index) => {
     return (
      <div key={index} className='flex gap-1 flex-col'>
       <ClientCard client={client} />
      </div>
     );
    })}
   </div>
  </section>
 );
}
