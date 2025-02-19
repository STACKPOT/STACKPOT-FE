import { blurOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import { modalOverlayStyle } from "../ConfirmModalWrapper/ConfirmModalWrapper.style";
import ChangeStatusModal from "./ChangeStatusModal";
import { AnotherTaskStatus } from "../../../../types/taskStatus";

interface ChangeStatusModalWrapperProps {
  onClose: () => void;
  onConfirm: (status: AnotherTaskStatus) => void;
  isModalOpen: boolean;
  initialStatus: AnotherTaskStatus;
}

const ChangeStatusModalWrapper: React.FC<ChangeStatusModalWrapperProps> = ({
  onClose,
  onConfirm,
  isModalOpen,
  initialStatus
}) => {
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />}
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <ChangeStatusModal onConfirm={onConfirm} onClose={onClose} initialStatus={initialStatus} />
        </div>
      )}
    </>
  );
};

export default ChangeStatusModalWrapper;
