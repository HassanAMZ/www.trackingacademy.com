import React from "react";
import { cn } from "@/lib/utils";

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
    <ul id={id} className={cn("my-3 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
};

export default TypographyUnorderedList;
