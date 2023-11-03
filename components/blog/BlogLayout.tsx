import { ReactNode, FC } from "react";
import { BlogLayoutProps } from "@/types/index";
import ContainerLayout from "../layouts/ContainerLayout";

const BlogLayout: FC<BlogLayoutProps> = ({ children, className, metadata }) => {
 return (
  <ContainerLayout className={`text-left ${className}`}>
   {metadata && (
    <div className='blog-metadata'>
     <h1>{metadata.title}</h1>
     <span>{metadata.date}</span>
     {/* You can expand this to display other metadata details as required */}
    </div>
   )}
   <main className=''>{children}</main>
  </ContainerLayout>
 );
};

export default BlogLayout;
