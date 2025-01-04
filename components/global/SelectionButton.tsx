import Text from "@/components/ui/text";
import { ButtonProps } from "@/types/index";

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
    <Text as="p" variant="bodyMd" className="w-full font-bold">
      {children}
    </Text>
  </button>
);

export default SelectionButton;
