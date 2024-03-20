import React from "react";
import Image from "next/image";
import { ImageGeneralProps } from "@/types/index";

const Clients: React.FC<ImageGeneralProps> = ({ image }) => {
 return (
  <div className='px-6'>
   <Image
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    className='rounded-md'
   />
  </div>
 );
};

export default Clients;
