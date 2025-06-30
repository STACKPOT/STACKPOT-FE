import {
  container,
  footer,
  button,
  titleStyle,
  messageStyle,
  background,
  closeIconStyle,
  titleContentContainer,
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
        <div css={titleContentContainer}>
          <p css={titleStyle}>{title}</p>
          <p css={messageStyle}>{message}</p>
        </div>
        <div css={footer}>
          <button
            css={button(theme.color.interactive.inactive)}
            onClick={onCancel}
          >
            취소
          </button>
          <button
            css={button(theme.color.point.hero)}
            onClick={onConfirm}
            type="button"
          >
            동의합니다
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
