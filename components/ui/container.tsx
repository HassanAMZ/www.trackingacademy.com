import clsx from 'clsx';

export default function Container({
  children,
  className,
  id,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  id?: string;
}>) {
  return (
    <div className={clsx('container mx-auto px-3', className)}>{children}</div>
  );
}
