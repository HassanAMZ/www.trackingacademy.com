import clsx from "clsx";

export default function TypographyP({
  children,
  className,
  applyMargin = true,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  applyMargin?: boolean;
}>) {
  return (
    <p
      className={clsx(
        "leading-7",
        applyMargin && "[&:not(:first-child)]:mt-6",
        className,
      )}
    >
      {children}
    </p>
  );
}
