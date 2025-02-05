import { CloseIcon } from "@assets/svgs";
import {
  buttonStyle,
  closeButtonStyle,
  containerStyle,
  contentButtonContainerStyle,
  modalBackgroundStyle,
  subtitleStyle,
  titleContentContainerStyle,
  titleStyle,
} from "./ExplainModal.style";

interface ExplainModalProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
  onCancel: () => void;
}

const ExplainModal: React.FC<ExplainModalProps> = ({
  title,
  subtitle,
  children,
  buttonText,
  onButtonClick: onClick,
  onCancel,
}: ExplainModalProps) => {
  return (
    <div css={modalBackgroundStyle}>
      <div css={containerStyle}>
        <CloseIcon type="button" css={closeButtonStyle} onClick={onCancel} />
        <div css={contentButtonContainerStyle}>
          <div css={titleContentContainerStyle}>
            {title && <p css={titleStyle}>{title}</p>}
            {subtitle && <p css={subtitleStyle}>{subtitle}</p>}
            {children}
          </div>
          <button css={buttonStyle} onClick={onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExplainModal;
