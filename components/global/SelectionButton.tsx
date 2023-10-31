import { ButtonProps } from "@/types/index";

const SelectionButton: React.FC<ButtonProps> = ({
 children,
 isSelected,
 color,
 onClick,
}) => (
 <button
  className='p-4 rounded-md w-full text-lg font-semibold'
  style={{
   backgroundColor: isSelected ? color : "transparent",
   borderColor: isSelected ? "transparent" : color,
   borderWidth: isSelected ? "2px" : "2px",
  }}
  onClick={onClick}>
  {children}
 </button>
);

export default SelectionButton;
