import React, { ReactNode, CSSProperties } from "react";

interface HeadingProps {
 children: ReactNode;
 className?: string;
 style?: CSSProperties; // Including style prop
}

const TitleHeader: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <h2 className={`text-5xl font-bold leading-none ${className}`} style={style}>
   {children}
  </h2>
 );
};
const SubTitleHeader: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <h3 className={`text-4xl font-bold leading-none ${className}`} style={style}>
   {children}
  </h3>
 );
};

const SubHeader: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h4
   className={`text-xl font-semibold tracking-normal ${className}`}
   style={style}>
   {children}
  </h4>
 );
};

const Paragraph: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <p
   className={`text-xl font-medium tracking-normal ${className}`}
   style={style}>
   {children}
  </p>
 );
};

export { TitleHeader, SubHeader, SubTitleHeader, Paragraph };
