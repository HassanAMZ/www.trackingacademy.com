import { ReactNode, FC } from "react";
import { ContainerLayoutProps } from "@/types/index";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
const ContainerLayout: FC<ContainerLayoutProps> = ({
 children,
 className,
 id,
}) => {
 return (
  <div
   id={id}
   className={`max-w-3xl container mx-auto px-2  ${className || ""}`}>
   <Navbar />
   {children}

   <Footer />


  </div>
 );
};

export default ContainerLayout;
