import servicesDetails from "@/data/services-details";
import Image from "next/image";

type ServiceDetails = {
 pid: string;
 title: string;
 description: string;
 packages: {
  name: string;
  value: string[];
 }[];
 featured_image_url: string;
 supporting_image_url: string;
 href: string;
};

type PageProps = {
 params: {
  service: string;
 };
};

const Page: React.FC<PageProps> = ({ params }) => {
 let serviceId = params.service;
 let serviceObject = servicesDetails.find(
  (serviceDetails: ServiceDetails) => serviceDetails.pid === serviceId
 );

 if (serviceObject) {
  return (
   <>
    <h1 className='text-4xl font-semibold'>{serviceObject.title}</h1>
    <div className=''>
     <div className=''>
      <div className='relative aspect-[4/3] sm:h-auto max-w-[150px] sm:max-w-full'>
       <Image
        className='rounded-lg'
        width={1000}
        height={750}
        src={serviceObject.featured_image_url}
        alt={serviceObject.title}
       />
      </div>
      <div>
       <h3 className='text-xl'> Project Details</h3>
       <p
        dangerouslySetInnerHTML={{
         __html: serviceObject.description.replace(/\n/g, "<br>"),
        }}
       />
      </div>
      <div className='flex flex-col'>
       <div className='flex gap-3 opacity-80'>
        <p className='bg-gray-800 bg-opacity-[30%] rounded-lg max-w-fit py-2'>
         from $ {serviceObject.packages[1].value[0]}
        </p>
        <p className='py-2'>{serviceObject.packages[2].value[2]} &nbsp;</p>
       </div>
       d
      </div>
     </div>
     <div className=''></div>
    </div>
   </>
  );
 } else {
  return <div>Service not found</div>;
 }
};

export default Page;
