import { SerializedStyles } from "@emotion/react";
import {
  actionButtonStyle,
  buttonStyle,
  landingButtonStyle,
  loginButtonStyle,
} from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: "login" | "action" | "landing";
  actionType?: "action" | "join";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  actionType = "action",
  onClick,
  ...props
}) => {
  const buttonType: SerializedStyles = (() => {
    switch (variant) {
      case "login":
        return loginButtonStyle;
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
      css={[buttonType, buttonStyle]}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
