import React from 'react';
import clsx from 'clsx';

interface TypographyH3Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function TypographyH3({
  children,
  className,
  id,
}: TypographyH3Props) {
  return (
    <h2
      id={id}
      className={clsx(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}>
      {children}
    </h2>
  );
}
