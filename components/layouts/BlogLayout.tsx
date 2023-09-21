import { ReactNode, FC } from "react";
import { BlogLayoutProps } from "@/types/index";

const BlogLayout: FC<BlogLayoutProps> = ({ children, className, metadata }) => {
 return (
  <div className={`container mx-auto px-4 text-justify ${className}`}>
   {metadata && (
    <div className='blog-metadata'>
     <h1>{metadata.title}</h1>
     <span>{metadata.date}</span>
     {/* You can expand this to display other metadata details as required */}
    </div>
   )}
   {children}
  </div>
 );
};

export default BlogLayout;
