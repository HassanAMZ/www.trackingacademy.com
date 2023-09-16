import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import ClientCard from "@/components/cards/ClientCard";
import clientDetails from "@/data/clients-details";
import { Client, ClientDetails } from "@/types/index";

const RecentClients: React.FC = () => {
 return (
  <div className=' rounded-md'>
   <ContainerLayout className='flex flex-col gap-2'>
    <h1 className='text-center'>
     Recent Web Analytics & Tracking Implementation Projects
    </h1>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
     {clientDetails.slice(0, 4).map((client: Client, index: number) => {
      return (
       <div key={index} className='flex gap-1 flex-col'>
        <ClientCard client={client} />
       </div>
      );
     })}
    </div>
   </ContainerLayout>
  </div>
 );
};

export default RecentClients;
