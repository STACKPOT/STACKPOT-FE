import { signupButtonStyle } from "./SignupButton.style";

interface SignupButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button
      type="button"
      css={signupButtonStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SignupButton;
