import { ReactNode, FC } from "react";
import { ContainerLayoutProps } from "@/types/index";
const ContainerLayout: FC<ContainerLayoutProps> = ({ children, className }) => {
 return <div className={`container mx-auto p-3  ${className}`}>{children}</div>;
};

export default ContainerLayout;
