"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationDuration = () => {
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const distanceToTravel = contentSize / 2;
    const actualSpeed = isHovered && speedOnHover ? speedOnHover : speed;
    return distanceToTravel / actualSpeed;
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="animate-infinite-scroll flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
          animationDuration: `${getAnimationDuration()}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
