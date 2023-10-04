import React, { ReactNode } from "react";

interface HeadingProps {
 children: ReactNode;
 className?: string;
}

const TitleHeader: React.FC<HeadingProps> = ({ children, className }) => {
 return (
  <h2 className={`text-5xl sm:text-7xl font-bold leading-none ${className}`}>
   {children}
  </h2>
 );
};
const SubHeader: React.FC<HeadingProps> = ({ children, className }) => {
 return (
  <h2 className={`text-2xl font-semibold tracking-normal  ${className}`}>
   {children}
  </h2>
 );
};
const Paragraph: React.FC<HeadingProps> = ({ children, className }) => {
 return (
  <h2 className={`text-xl font-medium tracking-normal ${className}`}>
   {children}
  </h2>
 );
};

export { TitleHeader, SubHeader, Paragraph };
