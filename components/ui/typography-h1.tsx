import React from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

interface TypographyH1Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function TypographyH1({
  children,
  className,
  id,
}: TypographyH1Props) {
  return (
    <h1
      id={id}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
