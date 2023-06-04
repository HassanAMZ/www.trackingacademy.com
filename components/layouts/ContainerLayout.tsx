import { ReactNode, FC } from "react";

interface ContainerLayoutProps {
 children: React.ReactNode;
}
const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children }) => {
 return <div className=' container mx-auto p-2 max-w-5xl'>{children}</div>;
};
export default ContainerLayout;
