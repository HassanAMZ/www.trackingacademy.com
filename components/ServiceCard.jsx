import Link from "next/link";
import Image from "next/image";
const ServiceCard = ({ service }) => {
  // console.log(service)
  let formattedDescription = service.description.replace(/\n/g, "<br>");
  return (
    <>
      <div className='relative aspect-[4/3] sm:h-auto max-w-[150px] sm:max-w-full'>
        <Image
          className='rounded-lg'
          width={1000}
          height={750}
          src={service.featured_image_url}
          alt={service.title}
        />
      </div>
      <div className='flex flex-col'>
        <h3 className='line-clamp-2 font-semibold'>{service.title}</h3>
        <div className='flex gap-3 opacity-80'>
          <p className='bg-gray-800 bg-opacity-[30%] rounded-lg max-w-fit py-2'>
            from $ {service.packages[1].value[0]}
          </p>
          <p className='py-2'>{service.packages[2].value[2]} &nbsp;</p>
        </div>
        <Link
          href='/contact'
          className='px-2 py-1 border-[1.5px] text-xs border-gray-50 w-fit rounded-full font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-purple'>
          View Details &nbsp;
          {/* <span aria-hidden='true'>&nbsp; → </span> */}
        </Link>
      </div>{" "}
    </>
  );
};

export default ServiceCard;
