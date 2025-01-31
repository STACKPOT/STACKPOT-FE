import { buttonStyle, textStyle } from "./SaveButton.style";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const SaveButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" css={buttonStyle} onClick={onClick}>
      <div css={textStyle}>{children}</div>
    </button>
  );
};

export default SaveButton;
