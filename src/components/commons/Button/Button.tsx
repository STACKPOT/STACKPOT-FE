import { SerializedStyles } from "@emotion/react";
import {
  actionButtonStyle,
  buttonStyle,
  landingButtonStyle,
  loginButtonStyle,
} from "./Button.style";

interface ButtonProps {
  children: string;
  style: "login" | "action" | "landing";
  actionType?: "action" | "join";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  actionType = "action",
  onClick,
}) => {
  const buttonType: SerializedStyles = (() => {
    switch (style) {
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
    <button type="button" css={[buttonType, buttonStyle]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
