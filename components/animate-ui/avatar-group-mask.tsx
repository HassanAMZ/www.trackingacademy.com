"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type TooltipContentProps,
  type TooltipProps,
} from "@/components/animate-ui/tooltip";
import { cn } from "@/lib/utils";
import * as React from "react";

type Align = "start" | "center" | "end";

type AvatarProps = TooltipProps & {
  children: React.ReactNode;
  align?: Align;
  invertOverlap?: boolean;
};

function AvatarContainer({ children, align, invertOverlap, ...props }: AvatarProps) {
  return (
    <Tooltip {...props}>
      <TooltipTrigger>
        <span
          data-slot="avatar-container"
          className={cn(
            align === "start" ? "items-start" : align === "center" ? "items-center" : "items-end",
            "relative grid aspect-[1/calc(1+var(--avatar-mask-ratio))] w-[var(--avatar-size)]",
            "[&_[data-slot=avatar]]:size-[var(--avatar-size)] [&_[data-slot=avatar]]:rounded-full",
            invertOverlap
              ? cn(
                  "[&:not(:first-of-type)]:[--circle:calc(((var(--avatar-border)*2)+var(--avatar-size))*0.5)]",
                  "[&:not(:first-of-type)]:mask-[radial-gradient(var(--circle)_var(--circle)_at_calc(var(--circle)-var(--avatar-column-size)-var(--avatar-border))_50%_,#0000_calc(var(--circle)-0.5px),#fff_var(--circle))]",
                  "[&:not(:first-of-type)]:mask-size-[100%_100%]",
                  "[&:not(:first-of-type)]:mask-position-[0_calc(var(--avatar-size)*var(--avatar-mask-base))]",
                  "[&:not(:first-of-type)]:transition-[mask-position] [&:not(:first-of-type)]:duration-300 [&:not(:first-of-type)]:ease-in-out",
                  "[&:hover+&]:mask-position-[0_calc(var(--avatar-size)_-_calc(var(--avatar-size)*(var(--avatar-mask-factor)+var(--avatar-mask-offset))))]",
                )
              : cn(
                  "[&:not(:last-of-type)]:[--circle:calc(((var(--avatar-border)*2)+var(--avatar-size))*0.5)]",
                  "[&:not(:last-of-type)]:mask-[radial-gradient(var(--circle)_var(--circle)_at_calc(var(--circle)+var(--avatar-column-size)-var(--avatar-border))_50%_,#0000_calc(var(--circle)-0.5px),#fff_var(--circle))]",
                  "[&:not(:last-of-type)]:mask-size-[100%_100%]",
                  "[&:not(:last-of-type)]:mask-position-[0_calc(var(--avatar-size)*var(--avatar-mask-base))]",
                  "[&:not(:last-of-type)]:transition-[mask-position] [&:not(:last-of-type)]:duration-300 [&:not(:last-of-type)]:ease-in-out",
                  "[&:has(+&:hover)]:mask-position-[0_calc(var(--avatar-size)_-_calc(var(--avatar-size)*(var(--avatar-mask-factor)+var(--avatar-mask-offset))))]",
                ),
            "[&>span]:transition-[translate] [&>span]:duration-300 [&>span]:ease-in-out",
            "[&:hover_span:first-of-type]:translate-y-[var(--avatar-translate-pct)]",
          )}
        >
          {children}
        </span>
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
  translate?: number;
  size?: string | number;
  border?: string | number;
  columnSize?: string | number;
  align?: Align;
  tooltipProps?: Omit<TooltipProps, "children">;
};

function AvatarGroup({
  ref,
  children,
  className,
  invertOverlap = false,
  size = "43px",
  border = "3px",
  columnSize = "37px",
  align = "end",
  translate = -30,
  tooltipProps = { side: "top", sideOffset: 12 },
  ...props
}: AvatarGroupProps) {
  const maskRatio = Math.abs(translate / 100);
  const alignOffset = align === "start" ? 0 : align === "center" ? maskRatio / 2 : maskRatio;
  const maskBase = alignOffset - maskRatio / 2;
  const maskFactor = 1 - alignOffset + maskRatio / 2;

  return (
    <TooltipProvider openDelay={0} closeDelay={0}>
      <div
        ref={ref}
        data-slot="avatar-group"
        style={
          {
            "--avatar-size": size,
            "--avatar-border": border,
            "--avatar-column-size": columnSize,
            "--avatar-translate-pct": `${translate}%`,
            "--avatar-mask-offset": -(translate / 100),
            "--avatar-mask-ratio": maskRatio,
            "--avatar-mask-base": maskBase,
            "--avatar-mask-factor": maskFactor,
            "--avatar-columns": React.Children.count(children),
          } as React.CSSProperties
        }
        className="h-[var(--avatar-size)] w-[calc(var(--avatar-column-size)*(var(--avatar-columns))+calc(var(--avatar-size)-var(--avatar-column-size)))]"
      >
        <span
          className={cn(
            "grid h-[var(--avatar-size)] grid-cols-[repeat(var(--avatar-columns),var(--avatar-column-size))]",
            align === "start"
              ? "content-start"
              : align === "center"
                ? "content-center"
                : "content-end",
            className,
          )}
          {...props}
        >
          {children?.map((child, index) => (
            <AvatarContainer
              key={index}
              invertOverlap={invertOverlap}
              {...tooltipProps}
              align={align}
            >
              {child}
            </AvatarContainer>
          ))}
        </span>
      </div>
    </TooltipProvider>
  );
}

export { AvatarGroup, AvatarGroupTooltip, type AvatarGroupProps, type AvatarGroupTooltipProps };
