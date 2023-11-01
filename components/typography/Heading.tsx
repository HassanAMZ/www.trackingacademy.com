import { HeadingProps } from "@/types/index";
import React, { ReactNode, CSSProperties } from "react";

const Headingxl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h6
   className={`text-xl font-semibold leading-tight ${className}`}
   style={style}>
   {children}
  </h6>
 );
};

const Heading2xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h5
   className={`text-2xl font-semibold leading-tight ${className}`}
   style={style}>
   {children}
  </h5>
 );
};

const Heading3xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h4
   className={`text-3xl font-semibold leading-tight   ${className}`}
   style={style}>
   {children}
  </h4>
 );
};

const Heading4xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h3
   className={`text-4xl font-semibold leading-none tracking-tight  ${className}`}
   style={style}>
   {children}
  </h3>
 );
};

const Heading5xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h2
   className={`text-5xl font-bold leading-none tracking-tight ${className}`}
   style={style}>
   {children}
  </h2>
 );
};
const Heading6xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h1
   className={`text-6xl font-black leading-none tracking-tight ${className}`}
   style={style}>
   {children}
  </h1>
 );
};

const Paragraphlg: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p
   className={`text-lg text-gray-700 dark:text-gray-300 ${className}`}
   style={style}>
   {children}
  </p>
 );
};
const Paragraphmd: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p
   className={`text-md text-gray-700 dark:text-gray-300 ${className}`}
   style={style}>
   {children}
  </p>
 );
};
const Paragraphsm: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p
   className={`text-sm text-gray-700 dark:text-gray-300 ${className}`}
   style={style}>
   {children}
  </p>
 );
};
const Paragraphxs: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p
   className={`text-xs text-gray-700 dark:text-gray-300 ${className}`}
   style={style}>
   {children}
  </p>
 );
};

export {
 Heading6xl,
 Heading5xl,
 Heading4xl,
 Heading3xl,
 Heading2xl,
 Headingxl,
 Paragraphlg,
 Paragraphmd,
 Paragraphsm,
 Paragraphxs,
};
