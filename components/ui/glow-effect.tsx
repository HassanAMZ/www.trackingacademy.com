"use client";
import { cn } from "@/lib/utils";

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?: "rotate" | "pulse" | "breathe" | "colorShift" | "flowHorizontal" | "static";
  blur?: number | "softest" | "soft" | "medium" | "strong" | "stronger" | "strongest" | "none";
  scale?: number;
  duration?: number;
};

export function GlowEffect({
  className,
  style,
  colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F"],
  mode = "colorShift",
  blur = "medium",
  scale = 0.9,
  duration = 3,
}: GlowEffectProps) {
  const getBlurClass = (blur: GlowEffectProps["blur"]) => {
    if (typeof blur === "number") {
      return `blur-[${blur}px]`;
    }

    const presets = {
      softest: "blur-xs",
      soft: "blur-sm",
      medium: "blur-md",
      strong: "blur-lg",
      stronger: "blur-xl",
      strongest: "blur-xl",
      none: "blur-none",
    };

    return presets[blur as keyof typeof presets];
  };

  const getAnimationClass = (mode: GlowEffectProps["mode"]) => {
    switch (mode) {
      case "rotate":
        return "animate-spin";
      case "pulse":
        return "animate-pulse";
      case "breathe":
        return "animate-pulse";
      case "colorShift":
        return "animate-pulse";
      case "flowHorizontal":
        return "animate-pulse";
      case "static":
      default:
        return "";
    }
  };

  const getBackgroundStyle = (mode: GlowEffectProps["mode"]) => {
    switch (mode) {
      case "rotate":
      case "colorShift":
        return {
          background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
        };
      case "pulse":
      case "breathe":
        return {
          background: `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, transparent 100%)`,
        };
      case "flowHorizontal":
        return {
          background: `linear-gradient(to right, ${colors.join(", ")})`,
        };
      case "static":
      default:
        return {
          background: `linear-gradient(to right, ${colors.join(", ")})`,
        };
    }
  };

  return (
    <div
      style={
        {
          ...style,
          ...getBackgroundStyle(mode),
          "--scale": scale,
          willChange: "transform",
          backfaceVisibility: "hidden",
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        "scale-[var(--scale)] transform-gpu",
        getBlurClass(blur),
        getAnimationClass(mode),
        className,
      )}
    />
  );
}
