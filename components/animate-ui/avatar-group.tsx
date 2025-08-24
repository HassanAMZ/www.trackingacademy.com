"use client";

import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type TooltipContentProps,
  type TooltipProps,
} from "@/components/animate-ui/tooltip";
import { cn } from "@/lib/utils";

type AvatarProps = TooltipProps & {
  children: React.ReactNode;
  zIndex: number;
  translate: string | number;
};

function AvatarContainer({ children, zIndex, translate, ...props }: AvatarProps) {
  return (
    <Tooltip {...props}>
      <TooltipTrigger>
        <div
          data-slot="avatar-container"
          className="relative transition-transform duration-200 hover:-translate-y-1"
          style={{ zIndex }}
        >
          <div>{children}</div>
        </div>
      </TooltipTrigger>
    </Tooltip>
  );
}

type AvatarGroupTooltipProps = TooltipContentProps;

function AvatarGroupTooltip(props: AvatarGroupTooltipProps) {
  return <TooltipContent {...props} />;
}

type AvatarGroupProps = Omit<React.ComponentProps<"div">, "translate"> & {
  children: React.ReactElement[];
  invertOverlap?: boolean;
  translate?: string | number;
  tooltipProps?: Omit<TooltipProps, "children">;
};

function AvatarGroup({
  ref,
  children,
  className,
  invertOverlap = false,
  translate = "-30%",
  tooltipProps = { side: "top", sideOffset: 24 },
  ...props
}: AvatarGroupProps) {
  return (
    <TooltipProvider openDelay={0} closeDelay={0}>
      <div
        ref={ref}
        data-slot="avatar-group"
        className={cn("flex h-8 flex-row items-center -space-x-2", className)}
        {...props}
      >
        {children?.map((child, index) => (
          <AvatarContainer
            key={index}
            zIndex={invertOverlap ? React.Children.count(children) - index : index}
            translate={translate}
            {...tooltipProps}
          >
            {child}
          </AvatarContainer>
        ))}
      </div>
    </TooltipProvider>
  );
}

export { AvatarGroup, AvatarGroupTooltip, type AvatarGroupProps, type AvatarGroupTooltipProps };
