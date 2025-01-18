import clsx from "clsx";
import React, { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("container mx-auto px-3", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export default Container;
