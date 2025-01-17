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
    <p className="w-full font-bold">{children}</p>
  </button>
);

export default SelectionButton;
