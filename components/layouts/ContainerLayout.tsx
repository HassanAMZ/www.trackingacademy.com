import { ContainerLayoutProps } from '@/types/index';
import { FC } from 'react';

const ContainerLayout: FC<ContainerLayoutProps> = ({ children, className, id }) => {
  return (
    <div id={id} className={`container-primary ${className || ''}`}>
      {children}
    </div>
  );
};

export default ContainerLayout;
