import { SerializedStyles } from "@emotion/react";
import {
  actionButtonStyle,
  buttonStyle,
  landingButtonStyle,
  ctaButtonStyle,
} from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "entry" | "action" | "landing";
  actionType?: "action" | "join" | "edit";
  onClick?: () => void;
  customStyle?: SerializedStyles;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  actionType = "action",
  onClick,
  disabled,
  customStyle,
  ...props
}) => {
  const buttonType: SerializedStyles = (() => {
    switch (variant) {
      case "entry":
        return ctaButtonStyle;
      case "action":
        return actionButtonStyle(actionType);
      case "landing":
        return landingButtonStyle;
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
