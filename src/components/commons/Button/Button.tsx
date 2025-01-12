import { useState } from "react";
import { css } from "@emotion/react";
import { buttonStyle, style4ButtonStyle, style5ButtonStyle } from "./Button.style";

interface ButtonProps {
  children?: string;
  variant?: "style1" | "style4" | "style5";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "style1",
  disabled,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState(children || "닉네임 생성하기"); 

  const handleClick = () => {
    if (variant === "style4") {
      setIsActive((prev) => !prev);
    } else if (variant === "style5") {
      setText("다시 생성하기"); 
      if (onClick) onClick(); 
    } else if (onClick) {
      onClick();
    }
  };

  const appliedStyle =
    variant === "style4"
      ? css`
          ${style4ButtonStyle};
          ${isActive ? "&.on" : "&.off"};
        `
      : variant === "style5"
      ? style5ButtonStyle
      : buttonStyle;

  return (
    <button
      type="button"
      css={appliedStyle}
      disabled={disabled}
      onClick={handleClick}
      className={isActive ? "on" : "off"}
    >
      {text}
    </button>
  );
};

export default Button;
