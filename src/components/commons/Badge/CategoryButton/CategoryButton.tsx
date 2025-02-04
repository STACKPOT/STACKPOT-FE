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
  style: "pot" | "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
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
      : style === "FRONTEND"
      ? feButtonStyle(selected)
      : style === "BACKEND"
      ? beButtonStyle(selected)
      : style === "PLANNING"
      ? pmButtonStyle(selected)
      : style === "DESIGN"
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
