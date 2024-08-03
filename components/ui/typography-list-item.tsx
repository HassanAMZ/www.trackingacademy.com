import React from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

interface TypographyListItemPorps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const TypographyListItem: React.FC<TypographyListItemPorps> = ({
  children,
  className,
  id,
}) => {
  return (
    <li id={id} className={cn("", className)}>
      {children}
    </li>
  );
};

export default TypographyListItem;
