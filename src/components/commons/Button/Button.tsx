import { SerializedStyles } from "@emotion/react";
import {
  actionButtonStyle,
  buttonStyle,
  landingButtonStyle,
  ctaButtonStyle,
  fullButtonStyle,
} from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "cta" | "action" | "landing" | "full";
  actionType?: "basic" | "neg" | "alt";
  onClick?: () => void;
  customStyle?: SerializedStyles;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  actionType = "basic",
  onClick,
  disabled,
  customStyle,
  ...props
}) => {
  const buttonType: SerializedStyles = (() => {
    switch (variant) {
      case "cta":
        return ctaButtonStyle;
      case "action":
        return actionButtonStyle(actionType);
      case "landing":
        return landingButtonStyle;
      case "full":
        return fullButtonStyle(actionType);
      default:
        return buttonStyle;
    }
  })();

  return (
    <button
      type="button"
      css={[buttonStyle, buttonType, customStyle]}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
