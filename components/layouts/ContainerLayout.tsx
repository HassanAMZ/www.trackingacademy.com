import { ReactNode, FC } from "react";
import { ContainerLayoutProps } from "@/types/index";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ContainerLayout: FC<ContainerLayoutProps> = ({
 children,
 className,
 id,
}) => {
 return (
  <div
   id={id}
   className={`max-w-3xl container mx-auto px-2 ${className || ""}`}>
   <NavBar />
   {children}
   <Footer />
  </div>
 );
};

export default ContainerLayout;
