import { ButtonProps } from "@/types/index";
import { Paragraphmd } from "@/components/typography/Heading";

const SelectionButton: React.FC<ButtonProps> = ({
 children,
 isSelected,
 onClick,
}) => (
 <button
  className={`p-4 w-full flex border-2 rounded-lg ${
   isSelected ? "text-accent bg-complementary" : "text-complementary bg-accent"
  }`}
  onClick={onClick}>
  <Paragraphmd className='w-full font-bold'>{children}</Paragraphmd>
 </button>
);

export default SelectionButton;
