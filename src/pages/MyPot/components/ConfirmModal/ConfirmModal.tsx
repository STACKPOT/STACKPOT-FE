import { mainContainer, buttonContainer, cancelIconStyle, getButtonStyle, cancelContainer, explainContentStyle, innerContainer, warningTitleStyle } from "./ConfirmModal.style";
import { CloseIcon } from "@assets/svgs";

interface ConfirmModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onClose }) => {
  return (
    <div css={mainContainer}>
      <div css={innerContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} onClick={onClose}/>
        </div>

        <div css={warningTitleStyle}>업무 내용을 삭제하시겠습니까?</div>
        <div css={explainContentStyle}>삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?</div>
        <div css={buttonContainer}>
          <button css={getButtonStyle("아니오")} onClick={onClose}>아니오</button>
          <button css={getButtonStyle("예")} onClick={onConfirm}>예</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
