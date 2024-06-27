import React from 'react';
import clsx from 'clsx';

interface TypographyH2Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function TypographyH2({
  children,
  className,
  id,
}: TypographyH2Props) {
  return (
    <h2
      id={id}
      className={clsx(
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}>
      {children}
    </h2>
  );
}
