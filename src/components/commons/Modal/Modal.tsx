import { modalStyles } from "./Modal.style";
import { CloseBtn } from "@assets/svgs";
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
    <div css={modalStyles.container}>
      <div css={modalStyles.header}>
        <div css={modalStyles.title}>{title}</div>
        <div css={modalStyles.closeIcon} onClick={onCancel}>
          <CloseBtn />
        </div>
      </div>
      <div css={modalStyles.body}>{message}</div>
      <div css={modalStyles.footer}>
        <button
          css={modalStyles.button}
          style={{ color: theme.color.object.assistive }}
          onClick={onCancel}
        >
          아니요
        </button>
        <button
          css={modalStyles.button}
          style={{ color: theme.color.feedback.positive }}
          onClick={onConfirm}
        >
          네
        </button>
      </div>
    </div>
  );
};

export default Modal;
