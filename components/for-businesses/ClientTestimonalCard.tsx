import Image from "next/image";
import React from "react";
import Divider from "../offers/Divider";

interface ClientTestimonialCardProps {
 client: {
  name: string;
  businessName: string;
 };
 category?: string;
 cms?: string;
 businessDetails: string;
 imageUrl: string;
 results: string;
}

const ClientTestimonialCard: React.FC<ClientTestimonialCardProps> = ({
 client,
 category,
 cms,
 businessDetails,
 imageUrl,
 results,
}) => {
 return (
  <section>
   <div className='space-y-4'>
    <div>
     <span className='text-xl font-bold text-danger'>
      {client.businessName} ({category}: {cms})
     </span>

     <span>: {businessDetails}</span>
    </div>
    <div className='rounded-md border border-dominant shadow-md filter object-contain overflow-hidden bg-complementary/10'>
     <Image
      src={imageUrl}
      alt={`Client ${client.name}`}
      width={1920}
      height={1080}
      className=' scale-x-[104%] scale-y-[102%] aspect-video'
     />
    </div>

    <div>
     <span className='text-xl font-bold text-danger'>Results:&nbsp;</span>
     <span>"{results}"</span>
    </div>
   </div>
   <Divider />
  </section>
 );
};

export default ClientTestimonialCard;
