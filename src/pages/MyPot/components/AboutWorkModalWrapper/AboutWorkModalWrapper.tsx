import React from "react";

import { TaskStatus } from "types/taskStatus";
import { aboutWorkModalOverlayStyle } from "./AboutWorkModalWrapper.style";
import AboutWorkModal from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal";

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
