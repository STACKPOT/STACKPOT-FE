import { CloseIcon } from "@assets/svgs";
import { buttonStyle, closeButtonStyle, containerStyle, contentButtonContainerStyle, titleContentContainerStyle, titleStyle } from "./ExplainModal.style";

interface ExplainModalProps {
    title: string;
    children: React.ReactNode;
    buttonText: string;
    type?: "normal" | "contract";
    onButtonClick: () => void;
    onCancel: () => void;
}

const ExplainModal: React.FC<ExplainModalProps> = ({ title, children, buttonText, type, onButtonClick: onClick, onCancel }: ExplainModalProps) => {
    return (
        <div css={containerStyle((type === "contract" && "2.2rem") || "1.2rem")}>
            <CloseIcon css={closeButtonStyle} onClick={onCancel} />
            <div css={contentButtonContainerStyle((type === "contract" && "0.8rem") || "3.2rem")}>
                <div css={titleContentContainerStyle}>
                    <p css={titleStyle}>{title}</p>
                    {children}
                </div>
                <button css={buttonStyle} onClick={onClick}>{buttonText}</button>
            </div>
        </div>
    )
}
export default ExplainModal;

