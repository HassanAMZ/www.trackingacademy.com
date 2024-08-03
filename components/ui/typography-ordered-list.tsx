import React from "react";
import clsx from "clsx";
import { cn } from "../lib/utils";

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
    <ol id={id} className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}>
      {children}
    </ol>
  );
};

export default TypographyOrderedList;
