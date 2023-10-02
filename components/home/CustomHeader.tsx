import React from "react";

const CustomHeader: React.FC<{ text: string }> = ({ text }) => {
 return (
  <h3 className='text-2xl font-semibold tracking-tighter leading-tight capitalize py-2  '>
   {text}
  </h3>
 );
};

export default CustomHeader;
