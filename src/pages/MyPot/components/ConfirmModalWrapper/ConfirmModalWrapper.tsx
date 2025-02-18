import { Modal } from "@components/index";
import { blurOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import { modalOverlayStyle } from "./ConfirmModalWrapper.style";

interface ConfirmModalWrapperProps {
  onClose: () => void;
  onConfirm: () => void;
  isModalOpen: boolean;
}

const ConfirmModalWrapper: React.FC<ConfirmModalWrapperProps> = ({ onClose, onConfirm, isModalOpen }) => {
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />}
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <Modal title={"업무 내용을 삭제하시겠습니까?"} message={"삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"} onCancel={onClose} onConfirm={onConfirm} />
        </div>
      )}
    </>
  );
};

export default ConfirmModalWrapper;
