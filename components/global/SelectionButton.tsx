import { ButtonProps } from "@/types/index";
import { Paragraphmd } from "../typography/Heading";

const SelectionButton: React.FC<ButtonProps> = ({
 children,
 isSelected,
 color,
 onClick,
}) => (
 <button
  className='p-4 w-full flex border-2 rounded-md'
  style={{
   backgroundColor: isSelected ? color : "transparent",
   borderColor: isSelected ? "transparent" : color,
  }}
  onClick={onClick}>
  <Paragraphmd className='w-full'>{children}</Paragraphmd>
 </button>
);

export default SelectionButton;
