import { modalStyles } from "./Modal.style";
import { CloseIcon } from "@assets/svgs";
import { css } from "@emotion/react";
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
      <header css={modalStyles.header}>
        <CloseIcon onClick={onCancel} />
      </header>
      <div css={modalStyles.body}>
        <p
          css={css`
            color: ${theme.color.base.darkgray};
            ${theme.font.title1};
          `}
        >
          {title}
        </p>
        <p
          css={css`
            color: ${theme.color.object.assistive};
            ${theme.font.caption3};
          `}
        >
          {message}
        </p>
      </div>
      <div css={modalStyles.footer}>
        <button
          css={modalStyles.button(theme.color.object.hero)}
          onClick={onCancel}
        >
          아니요
        </button>
        <button
          css={modalStyles.button(theme.color.point.hero)}
          onClick={onConfirm}
        >
          네
        </button>
      </div>
    </div>
  );
};

export default Modal;
