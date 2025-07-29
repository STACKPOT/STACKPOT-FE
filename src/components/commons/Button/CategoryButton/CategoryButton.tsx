import { SerializedStyles } from "@emotion/react";
import {
  backgroundButtonStyle,
  buttonStyle,
  potButtonStyle,
} from "./CategoryButton.style";

interface CategoryButtonProps {
  children: string;
  selected: boolean;
  onClick: (category: string) => void;
  style?: "basic"| "background";
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  children,
  selected,
  onClick,
  style="basic",
}: CategoryButtonProps) => {
  const buttonType: SerializedStyles =
    style === "basic"
      ? potButtonStyle(selected)
      : backgroundButtonStyle(selected);

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
