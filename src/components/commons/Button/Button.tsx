import { buttonStyle } from "./Button.style";

interface ButtonProps {
  children: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <button type="button" css={buttonStyle(color)}>
      {children}
    </button>
  );
};

export default Button;
