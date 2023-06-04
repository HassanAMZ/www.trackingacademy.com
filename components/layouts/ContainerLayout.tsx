import { ReactNode, FC } from "react";

interface ContainerLayoutProps {
 children: ReactNode;
 className?: string; // Optional className prop
}

const ContainerLayout: FC<ContainerLayoutProps> = ({ children, className }) => {
 return <div className={`container mx-auto p-3 ${className}`}>{children}</div>;
};

export default ContainerLayout;
