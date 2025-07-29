import { CloseIcon, LoadingSpinnerIcon } from "@assets/svgs";
import {
  background,
  closeIconStyle,
  messageHightlightStyle,
  messageStyle,
  modalStyle,
  spinnerContainer,
  spinnerStyle,
} from "./SummaryLoadingModal.style";

interface SummaryLoadingModalProps {
  onClose: () => void;
}
const SummaryLoadingModal: React.FC<SummaryLoadingModalProps> = ({
  onClose,
}: SummaryLoadingModalProps) => {
  return (
    <div css={background}>
      <div css={modalStyle}>
        <CloseIcon css={closeIconStyle} type="button" onClick={onClose} />
        <p css={messageStyle}>
          나의 팟 활동 AI 요약을 시작할게요!{"\n"}
          <span css={messageHightlightStyle}>10초</span>정도 소요돼요.
        </p>
        <div css={spinnerContainer}>
          <LoadingSpinnerIcon css={spinnerStyle} />
        </div>
      </div>
    </div>
  );
};
export default SummaryLoadingModal;
