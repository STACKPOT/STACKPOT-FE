import { blurOverlayStyle, modalOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import AboutWorkModal from "../../MyPotStatus/AboutWorkModal/AboutWorkModal";

interface AboutWorkModalWrapperProps {
  isModalOpen: boolean;
  activeStatus: "진행 전" | "진행 중" | "완료" | null;
  modalTitle: string;
  onClose: () => void;
  onSave: (newStatus: "진행 전" | "진행 중" | "완료" | null) => void;
}

const AboutWorkModalWrapper: React.FC<AboutWorkModalWrapperProps> = ({
  isModalOpen,
  activeStatus,
  modalTitle,
  onClose,
  onSave,
}) => {
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />}
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <AboutWorkModal
            onClose={onClose}
            activeStatus={activeStatus}
            onSave={onSave}
            title={modalTitle}
          />
        </div>
      )}
    </>
  );
};

export default AboutWorkModalWrapper;
