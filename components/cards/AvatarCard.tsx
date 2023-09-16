import Link from "next/link";
import Image from "next/image";
import { AvatarCardProps, Avatar } from "@/types/index";
const AvatarCard: React.FC<AvatarCardProps> = ({ avatar }) => {
 return (
  <section className='sm:bg-gray-900 sm:bg-opacity-5 sm:shadow-md rounded-md  '>
   <Image
    className='rounded-md'
    width={4000}
    height={4000}
    src={avatar.images[0].link}
    alt={avatar.name}
   />
   <div className='p-2'>
    <p className='font-semibold text-left pt-2 pb-1'>{avatar.title}</p>
    <p className='text-left pb-1'>{avatar.description}</p>
   </div>
  </section>
 );
};

export default AvatarCard;
