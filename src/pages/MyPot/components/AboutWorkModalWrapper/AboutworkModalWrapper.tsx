import React from "react";
import AboutWorkModal from "../../MyPotStatus/AboutWorkModal/AboutWorkModal";
import { aboutWorkModalOverlayStyle } from "./AboutWorkModalWrapper.style";
import { TaskStatus } from "types/taskStatus";

interface AboutWorkModalWrapperProps {
  isModalOpen: boolean;
  activeStatus: TaskStatus;
  modalTitle: string;
  taskId: number | null;
  onClose: () => void;
}

const AboutWorkModalWrapper: React.FC<AboutWorkModalWrapperProps> = ({
  isModalOpen,
  activeStatus,
  modalTitle,
  taskId,
  onClose,
}) => {
  if (!isModalOpen) return null;

  return (
    <div css={aboutWorkModalOverlayStyle}>
      <AboutWorkModal
        onClose={onClose}
        activeStatus={activeStatus}
        title={modalTitle}
        taskId={taskId}
      />
    </div>
  );
};

export default AboutWorkModalWrapper;
