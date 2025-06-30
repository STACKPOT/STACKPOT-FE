import {
  container,
  footer,
  titleStyle,
  messageStyle,
  background,
  closeIconStyle,
  titleContentContainer,
} from "./Modal.style";
import { CloseIcon } from "@assets/svgs";
import Button from "../Button/Button";

interface ModalProps {
  title: string;
  message: string;
  confirmType?: "normal" | "neg";
  cancelButton?: string;
  confirmButton?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  confirmType = "normal",
  cancelButton,
  confirmButton,
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
          <Button variant="action" actionType="alt" onClick={onCancel}>
            {cancelButton ?? "취소"}
          </Button>
          <Button
            onClick={onConfirm}
            variant="action"
            actionType={confirmType === "neg" ? "neg" : "basic"}
          >
            {confirmButton ?? "동의합니다"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
