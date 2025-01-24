import { SerializedStyles } from "@emotion/react";
import {
  beButtonStyle,
  buttonStyle,
  deButtonStyle,
  feButtonStyle,
  pmButtonStyle,
  potButtonStyle,
} from "./CategoryButton.style";

interface CategoryButtonProps {
  children: string;
  selected: boolean;
  onClick: (category: string) => void;
  style: "pot" | "FE" | "BE" | "PM" | "DE";
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  children,
  selected,
  onClick,
  style,
}: CategoryButtonProps) => {
  const buttonType: SerializedStyles =
    style === "pot"
      ? potButtonStyle(selected)
      : style === "FE"
      ? feButtonStyle(selected)
      : style === "BE"
      ? beButtonStyle(selected)
      : style === "PM"
      ? pmButtonStyle(selected)
      : style === "DE"
      ? deButtonStyle(selected)
      : potButtonStyle(selected);

  return (
    <button
      type="button"
      css={[buttonStyle, buttonType]}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
