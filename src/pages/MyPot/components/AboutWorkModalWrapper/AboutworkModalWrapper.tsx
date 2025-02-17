import { blurOverlayStyle, modalOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import AboutWorkModal from "../../MyPotStatus/AboutWorkModal/AboutWorkModal";
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
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />}
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <AboutWorkModal
            onClose={onClose}
            activeStatus={activeStatus}
            title={modalTitle}
            taskId={taskId}
          />
        </div>
      )}
    </>
  );
};

export default AboutWorkModalWrapper;
