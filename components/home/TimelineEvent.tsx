import Image from "next/image";
interface TimelineEventProps {
 title: string;
 imageULR: string;
 description: string;
 isActive: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
 title,
 imageULR,
 description,
 isActive,
}) => {
 return (
  <div
   className={`relative flex items-center justify-between lg:justify-normal lg:even:flex-row-reverse group ${
    isActive ? "is-active" : ""
   }`}>
   <div
    className={`flex  items-center justify-center w-10 h-10 rounded-full border border-dark-secondary ${
     isActive ? "group-[.is-active]:bg-primary" : "text-dark-primary"
    } shadow shrink-0 lg:order-1 lg:group-even:-translate-x-1/2 lg:group-odd:translate-x-1/2`}>
    <svg
     className='fill-dark-primary'
     xmlns='http://www.w3.org/2000/svg'
     width='12'
     height={isActive ? "10" : "12"}>
     {isActive ? (
      <path
       fillRule='nonzero'
       d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
      />
     ) : (
      <path d='M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z' />
     )}
    </svg>
   </div>
   <div className='w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 shadow grid lg:grid-cols-4 items-start lg:items-center justify-center'>
    <div className='col-span-1 object-contain overflow-hidden w-32 lg:w-full'>
     <Image
      className='grayscale '
      width={1000}
      height={1000}
      src={imageULR}
      alt='icon'
     />
    </div>
    <div className='col-span-3'>
     <div className='font-bold title-tertiary py-2'>{title}</div>
     <div className='paragraph-primary'>{description}</div>
    </div>
   </div>
  </div>
 );
};

export default TimelineEvent;
