import { CloseIcon } from "@assets/svgs";
import {
  buttonStyle,
  closeButtonStyle,
  containerStyle,
  contentContainer,
  modalBackgroundStyle,
  titleContentContainerStyle,
  titleStyle,
} from "./ExplainModal.style";
import Button from "@components/commons/Button/Button";
import useWindowSize from "@hooks/useWindowSize";

interface ExplainModalProps {
  type?: "normal" | "profile" | "custom";
  title?: string;
  children?: React.ReactNode;
  buttonText: string;
  disabled?: boolean;
  onButtonClick: () => void;
  onCancel: () => void;
}

const ExplainModal: React.FC<ExplainModalProps> = ({
  type = "normal",
  title,
  children,
  buttonText,
  disabled,
  onButtonClick,
  onCancel,
}: ExplainModalProps) => {
  const { modalWidth, modalHeight } = useWindowSize();

  return (
    <div css={modalBackgroundStyle}>
      <div css={containerStyle(modalWidth, modalHeight)}>
        <CloseIcon type="button" css={closeButtonStyle} onClick={onCancel} />
        {type === "custom" ?
          children
          :
          <div css={titleContentContainerStyle(type)}>
            {title && <p css={titleStyle}>{title}</p>}
            <div css={contentContainer(modalHeight)}>
              {children}
            </div>
          </div>
        }
        <Button
          variant="action"
          customStyle={buttonStyle}
          onClick={onButtonClick}
          disabled={disabled}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default ExplainModal;
