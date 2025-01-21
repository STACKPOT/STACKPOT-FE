import { SerializedStyles } from "@emotion/react";
import {
  actionButtonStyle,
  buttonStyle,
  loginButtonStyle,
} from "./Button.style";

interface ButtonProps {
  children: string;
  style: "login" | "action";
  actionType?: "action" | "join";
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  actionType = "action",
}) => {
  const buttonType: SerializedStyles =
    style === "login" ? loginButtonStyle : actionButtonStyle(actionType);

  return (
    <button type="button" css={[buttonType, buttonStyle]}>
      {children}
    </button>
  );
};

export default Button;
