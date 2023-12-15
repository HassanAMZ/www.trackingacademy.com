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
    <Paragraphmd className='font-semibold'>
     {label}
     {required && <span className='text-red-500 dark:text-red-400'>*</span>}
    </Paragraphmd>
   </label>
   <div className='mt-1'>
    <input
     type={type}
     id={id}
     value={value}
     onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
     required={required}
     className={`
            p-2 backgroundOverlay border
            focus:ring-indigo-500 focus:border-indigo-500 
            block w-full sm:text-sm 
            border-gray-300 rounded-md 
            dark:border-gray-600  dark:text-white 
            dark:focus:ring-indigo-500 dark:focus:border-indigo-500 
            ${required && !value ? "border-red-500 dark:border-red-400" : ""}
          `}
     aria-describedby={`${id}-helper-text`}
    />
   </div>
   {helperText && (
    <Paragraphsm
     className='mt-2 opacity-80 text-gray-500 dark:text-gray-400'
     id={`${id}-helper-text`}>
     {helperText}
    </Paragraphsm>
   )}
  </div>
 );
};

export default InputField;
