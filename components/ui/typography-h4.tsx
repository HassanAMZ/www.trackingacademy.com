import React from 'react';
import clsx from 'clsx';

interface TypographyH4Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function TypographyH4({
  children,
  className,
  id,
}: TypographyH4Props) {
  return (
    <h2
      id={id}
      className={clsx(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}>
      {children}
    </h2>
  );
}
