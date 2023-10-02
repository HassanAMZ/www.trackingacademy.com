import { ReactNode, FC } from "react";
import { ContainerLayoutProps } from "@/types/index";
const ContainerLayout: FC<ContainerLayoutProps> = ({
 children,
 className,
 id,
}) => {
 return (
  <div id={id} className={`container mx-auto p-2  ${className}`}>
   {children}
  </div>
 );
};

export default ContainerLayout;
