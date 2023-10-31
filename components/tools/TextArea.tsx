import { Paragraphmd } from "@/components/typography/Heading";
import { InputFieldProps } from "@/types/index";

const TextArea: React.FC<InputFieldProps> = ({
 label,
 value,
 onChange,
 type = "text",
 required = false,
}) => (
 <label className='block'>
  <Paragraphmd className='dark:text-gray-200'>{label}</Paragraphmd>
  <textarea
   className={`
         py-2
         px-1 
         rounded-md 
         bg-transparent 
         peer 
         h-24 
         w-full 
         outline-none 
         text-sm 
         pr-2 
         border-2 
         ${required && !value ? "border-red-500" : "border-gray-500"} 
         dark:bg-gray-800 
         dark:text-white 
         dark:${required && !value ? "border-red-500" : "border-gray-500"}
       `}
   value={value}
   onChange={(e) => onChange(e.target.value)}
  />
 </label>
);

export default TextArea;
