import React from 'react';
import clsx from 'clsx';

interface TypographyOrderedListProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const TypographyOrderedList: React.FC<TypographyOrderedListProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <ol id={id} className={clsx('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {children}
    </ol>
  );
};

export default TypographyOrderedList;
