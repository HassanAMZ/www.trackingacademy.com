import { ButtonProps } from "@/types/index";
import { Paragraphmd } from "@/components/typography/Heading";

const SelectionButton: React.FC<ButtonProps> = ({
  children,
  isSelected,
  onClick,
}) => (
  <button
    className={`flex w-full rounded-lg border-2 p-4 ${
      isSelected
        ? "bg-complementary text-accent"
        : "text-complementary bg-accent"
    }`}
    onClick={onClick}
  >
    <Paragraphmd className="w-full font-bold">{children}</Paragraphmd>
  </button>
);

export default SelectionButton;
