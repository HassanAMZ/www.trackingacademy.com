// components/InputField.tsx

import React, { ChangeEvent } from "react";
import {
 Paragraphmd,
 Paragraphsm,
 Paragraphxs,
} from "@/components/typography/Heading";

interface InputFieldProps {
 label: string;
 helperText?: string;
 id: string;
 type?: string;
 required?: boolean;
 value: string;
 onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
 label,
 helperText,
 id,
 type = "text",
 required = false,
 value,
 onChange,
}) => {
 return (
  <div className='space-y-1'>
   <label htmlFor={id} className='block '>
    <p className='font-semibold '>
     {label}
     {required && <span className='text-danger'>*</span>}
    </p>
   </label>
   <div className='mt-1'>
    <input
     type={type}
     id={id}
     value={value}
     onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
     required={required}
     className={`p-2 border block w-full paragraph-primary rounded-md border-dark-secondary  text-light-primary ${
      required && !value ? "border-danger" : ""
     }`}
     aria-describedby={`${id}-helper-text`}
    />
   </div>
   {helperText && (
    <p
     className='mt-2 paragraph-secondary text-light-secondary'
     id={`${id}-helper-text`}>
     {helperText}
    </p>
   )}
  </div>
 );
};

export default InputField;
