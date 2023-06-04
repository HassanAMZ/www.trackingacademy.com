import Link from "next/link";
import Image from "next/image";

import { BlogCardProps } from "@/types/index";

const BlogCard: React.FC<BlogCardProps> = ({
 postId,
 slug,
 cta,
 excerpt,
 title,
 url,
 date,
 category,
 featuredImage,
}) => {
 const imageUrl =
  featuredImage ||
  "https://flowbite.com/docs/images/blog/image-1.jpg?width=1920&height=1080";

 return (
  <div className='mx-auto'>
   <div className='bg-white shadow-md border border-gray-200 rounded-lg'>
    <a href={url}>
     <Image
      width={1920}
      height={1080}
      className='rounded-t-lg aspect-video'
      src={imageUrl}
      alt=''
     />
    </a>
    <div className='sm:p-3 p-2 flex flex-col'>
     <Link href={url}>
      <h5 className='text-gray-900 font-bold text-xl tracking-tight sm:mb-2 mb-1 line-clamp-2'>
       {title}
      </h5>
     </Link>
     {excerpt && (
      <div
       className='text-justify text-sm font-normal text-gray-700 mb-3 blog_post_card_excerpt line-clamp-3'
       dangerouslySetInnerHTML={{ __html: excerpt }}
      />
     )}
     <Link
      className='w-full text-gray-100 bg-my-purple hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center '
      href={url}>
      {cta}
     </Link>
    </div>
   </div>
  </div>
 );
};

export default BlogCard;
