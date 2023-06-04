import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import ClientCard from "@/components/cards/ClientCard";
import clientDetails from "@/data/clients-details";

interface ClientDetail {
 heading: string;
 description: string;
}

interface Client {
 id: string;
 title: string;
 tags: string[];
 details: ClientDetail[];
 images: { name: string; link: string }[];
 project_details: { heading: string; title: string; link: string }[];
}

const RecentClients: React.FC = () => {
 return (
  <div className='bg-gray-900 bg-opacity-50 rounded-md'>
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
