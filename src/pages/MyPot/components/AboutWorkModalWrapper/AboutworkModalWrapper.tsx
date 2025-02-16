import { blurOverlayStyle, modalOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import AboutWorkModal from "../../MyPotStatus/AboutWorkModal/AboutWorkModal";
import { TaskStatus } from "types/taskStatus";

interface AboutWorkModalWrapperProps {
  isModalOpen: boolean;
  activeStatus: TaskStatus;
  modalTitle: string;
  onClose: () => void;
}

const AboutWorkModalWrapper: React.FC<AboutWorkModalWrapperProps> = ({
  isModalOpen,
  activeStatus,
  modalTitle,
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
          />
        </div>
      )}
    </>
  );
};

export default AboutWorkModalWrapper;
