import { CloseIcon } from "@assets/svgs";
import { buttonStyle, closeButtonStyle, containerStyle, contentButtonContainerStyle, modalBackgroundStyle, titleContentContainerStyle, titleStyle } from "./ExplainModal.style";

interface ExplainModalProps {
    title: string;
    children: React.ReactNode;
    buttonText: string;
    onButtonClick: () => void;
    onCancel: () => void;
}

const ExplainModal: React.FC<ExplainModalProps> = ({ title, children, buttonText: buttonContent, onButtonClick: onClick, onCancel }: ExplainModalProps) => {
    return (
        <div css={modalBackgroundStyle}>
            <div css={containerStyle}>
                <CloseIcon css={closeButtonStyle} onClick={onCancel} />
                <div css={contentButtonContainerStyle}>
                    <div css={titleContentContainerStyle}>
                        <p css={titleStyle}>{title}</p>
                        {children}
                    </div>
                    <button css={buttonStyle} onClick={onClick}>{buttonContent}</button>
                </div>
            </div>
        </div>
    )
}
export default ExplainModal;

