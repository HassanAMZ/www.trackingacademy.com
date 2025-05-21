import { FC, ReactNode } from "react";

interface ContainerLayoutProps {
  children: ReactNode;
  className?: string; // Optional className prop
  id?: string; // Optional id prop
}

const ContainerLayout: FC<ContainerLayoutProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div id={id} className={`container-primary ${className || ""}`}>
      {children}
    </div>
  );
};

export default ContainerLayout;
