import { blurOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
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
          <ConfirmModal onClose={onClose} onConfirm={onConfirm} />
        </div>
      )}
    </>
  );
};

export default ConfirmModalWrapper;
