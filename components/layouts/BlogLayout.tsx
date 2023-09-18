import { ReactNode, FC } from "react";
import { ContainerLayoutProps } from "@/types/index";
const BlogLayout: FC<ContainerLayoutProps> = ({ children, className }) => {
 return (
  <div className={`container mx-auto px-3 text-justify ${className}`}>
   {children}
  </div>
 );
};

export default BlogLayout;
