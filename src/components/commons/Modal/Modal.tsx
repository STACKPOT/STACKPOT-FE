import {
  container,
  footer,
  button,
  titleStyle,
  messageStyle,
  background,
  closeIconStyle,
} from "./Modal.style";
import { CloseIcon } from "@assets/svgs";
import theme from "@styles/theme";

interface ModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div css={background}>
      <div css={container}>
        <CloseIcon css={closeIconStyle} onClick={onCancel} />
        <p css={titleStyle}>{title}</p>
        <p css={messageStyle}>{message}</p>
        <div css={footer}>
          <button
            css={button(theme.color.interactive.inactive)}
            onClick={onCancel}
          >
            아니요
          </button>
          <button css={button(theme.color.point.hero)} onClick={onConfirm}>
            네
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
