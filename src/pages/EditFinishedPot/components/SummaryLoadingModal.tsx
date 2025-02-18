import { CloseIcon, LoadingSpinnerIcon } from "@assets/svgs";
import { background, closeIconStyle, messageHightlightStyle, messageStyle, modalStyle, spinnerContainer, spinnerStyle } from "./SummaryLoadingModal.style";

interface SummaryLoadingModalProps {
    onClose: () => void;
}
const SummaryLoadingModal: React.FC<SummaryLoadingModalProps> = ({ onClose }: SummaryLoadingModalProps) => {
    return (
        <div css={background}>
            <div css={modalStyle}>
                <CloseIcon css={closeIconStyle} type="button" onClick={onClose} />
                <p css={messageStyle}>
                    AI가 나의 팟 활동을 <span css={messageHightlightStyle}>요약 중</span>이에요!
                    {`\n10초 정도 걸려요`}</p>
                <div css={spinnerContainer}>
                    <LoadingSpinnerIcon css={spinnerStyle} />
                </div>
            </div>
        </div>
    )
}
export default SummaryLoadingModal;