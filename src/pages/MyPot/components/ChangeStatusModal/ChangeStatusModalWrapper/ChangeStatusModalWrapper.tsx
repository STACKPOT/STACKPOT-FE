import React from "react";
import ChangeStatusModal from "../ChangeStatusModal";
import { changeStatusModalOverlayStyle } from "./ChangeStatusModalWrapper.style";
import { AnotherTaskStatus } from "../../../../../types/taskStatus";

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
  initialStatus,
}) => {
  if (!isModalOpen) return null;

  return (
    <div css={changeStatusModalOverlayStyle}>
      <ChangeStatusModal
        onConfirm={onConfirm}
        onClose={onClose}
        initialStatus={initialStatus}
      />
    </div>
  );
};

export default ChangeStatusModalWrapper;
