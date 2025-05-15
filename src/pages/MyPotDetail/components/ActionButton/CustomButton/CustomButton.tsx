import React from "react";
import { SerializedStyles } from "@emotion/react";
import { buttonTextStyle } from "./CustomButton.style";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  customStyle: SerializedStyles;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, disabled, customStyle }) => {
  return (
    <button
      type="button"
      css={customStyle}
      disabled={!disabled}
      onClick={disabled ? onClick : undefined}
    >
      <span css={buttonTextStyle}>{text}</span>
    </button>
  );
};

export default CustomButton;
