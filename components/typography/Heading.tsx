import React, { ReactNode, CSSProperties } from "react";

interface HeadingProps {
 children: ReactNode;
 className?: string;
 style?: CSSProperties;
}

const Heading5xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h2 className={`text-5xl font-bold leading-none ${className}`} style={style}>
   {children}
  </h2>
 );
};

const Heading4xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h3 className={`text-4xl font-bold leading-none ${className}`} style={style}>
   {children}
  </h3>
 );
};

const Heading3xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h3 className={`text-3xl font-bold leading-none ${className}`} style={style}>
   {children}
  </h3>
 );
};

const Heading2xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h4 className={`text-2xl font-bold leading-snug ${className}`} style={style}>
   {children}
  </h4>
 );
};

const Headingxl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h4
   className={`text-xl font-semibold tracking-normal ${className}`}
   style={style}>
   {children}
  </h4>
 );
};

const Paragraphlg: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p
   className={`text-lg font-medium tracking-normal ${className}`}
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
   className={`text-md font-normal tracking-normal ${className}`}
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
   className={`text-sm font-medium tracking-normal ${className}`}
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
   className={`text-xs font-normal tracking-normal ${className}`}
   style={style}>
   {children}
  </p>
 );
};

export {
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
