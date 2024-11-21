import React from "react";
import clsx from "clsx";

interface TextProps {
  alignment?: "start" | "center" | "end" | "justify";
  applyMargin?: boolean;
  as?:
    | "dt"
    | "dd"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "strong"
    | "legend"
    | "ol"
    | "ul"
    | "li";
  breakWord?: boolean;
  children: React.ReactNode;
  tone?:
    | "base"
    | "disabled"
    | "inherit"
    | "success"
    | "critical"
    | "caution"
    | "subdued"
    | "text-inverse"
    | "text-inverse-secondary"
    | "magic"
    | "magic-subdued";
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  id?: string;
  numeric?: boolean;
  truncate?: boolean;
  variant?:
    | "headingXs"
    | "headingSm"
    | "headingMd"
    | "headingLg"
    | "headingXl"
    | "heading2xl"
    | "heading3xl"
    | "bodyXs"
    | "bodySm"
    | "bodyMd"
    | "bodyLg";
  visuallyHidden?: boolean;
  textDecorationLine?: "line-through";
  className?: string;
}

const Text: React.FC<TextProps> = ({
  alignment,
  as: Component = "span",
  breakWord,
  children,
  applyMargin,
  tone,
  fontWeight,
  id,
  numeric,
  truncate,
  variant = "bodyMd",
  visuallyHidden,
  textDecorationLine,
  className,
  ...props
}) => {
  const alignmentClasses = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
    justify: "text-justify",
  };

  const toneClasses = {
    base: "text-[hsl(var(--foreground))]",
    disabled: "text-[hsl(var(--muted-foreground))]",
    inherit: "text-inherit",
    success: "text-[hsl(var(--primary))]",
    critical: "text-[hsl(var(--destructive))]",
    caution: "text-[hsl(var(--accent))]",
    subdued: "text-[hsl(var(--muted-foreground))]",
    "text-inverse": "text-[hsl(var(--foreground))]",
    "text-inverse-secondary": "text-[hsl(var(--secondary-foreground))]",
    magic: "text-[hsl(var(--primary))]",
    "magic-subdued": "text-[hsl(var(--secondary))]",
  };

  const fontWeightClasses = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const variantClasses = {
    heading3xl: "text-4xl lg:text-5xl font-bold",
    heading2xl: "text-3xl lg:text-4xl font-bold",
    headingXl: "text-2xl lg:text-3xl font-bold",
    headingLg: "text-xl lg:text-2xl font-semibold",
    headingMd: "text-lg lg:text-xl font-semibold",
    headingSm: "text-base lg:text-lg font-semibold",
    headingXs: "text-sm lg:text-base font-semibold",
    bodyLg: "text-lg font-normal",
    bodyMd: `text-base font-normal`,
    bodySm: "text-sm font-normal",
    bodyXs: "text-xs font-normal",
  };

  const listClasses = {
    ol: "list-decimal my-2 ml-4 ",
    ul: "list-disc list-inside my-2 ml-4",
  };

  const classes = clsx(
    alignment && alignmentClasses[alignment],
    breakWord && "break-words",
    numeric && "tabular-nums",
    truncate && "truncate",
    fontWeight && fontWeightClasses[fontWeight],
    visuallyHidden && "sr-only",
    tone && toneClasses[tone],
    textDecorationLine && `line-through`,
    variant && variantClasses[variant],
    Component === "ol" && listClasses.ol,
    Component === "ul" && listClasses.ul,
    className,
  );

  return (
    <Component id={id} className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Text;
