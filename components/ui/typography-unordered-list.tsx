import React from "react";
import clsx from "clsx";

interface TypographyUnorderedListProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const TypographyUnorderedList: React.FC<TypographyUnorderedListProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <ul id={id} className={clsx("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
};

export default TypographyUnorderedList;
