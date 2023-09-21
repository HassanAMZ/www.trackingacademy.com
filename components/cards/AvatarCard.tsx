import Link from "next/link";
import Image from "next/image";
import { AvatarCardProps, Avatar } from "@/types/index";
const AvatarCard: React.FC<AvatarCardProps> = ({ avatar }) => {
 return (
  <section className='bg-gray-900 dark:bg-gray-100 dark:bg-opacity-10 bg-opacity-10 shadow-md rounded-md flex flex-col '>
   <Image
    className='rounded-md'
    width={4000}
    height={4000}
    src={avatar.images[0].link}
    alt={avatar.name}
   />
   <div className='p-2'>
    <p className='font-medium text-left pt-2 pb-1'>{avatar.title}</p>
    <p className='text-left pb-1'>{avatar.description}</p>
   </div>
  </section>
 );
};

export default AvatarCard;
