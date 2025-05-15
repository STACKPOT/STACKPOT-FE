import { blurOverlayStyle } from "../../pages/MyPotStatus/MyPotStatus.style";
import { modalOverlayStyle } from "../ConfirmModalWrapper/ConfirmModalWrapper.style";
import MemberIdModal from "../MemberIdModal/MemberIdModal";

interface MemberIdModalWrapperProps {
  onClose: () => void;
  isModalOpen: boolean;
}

const MemberIdModalWrapper: React.FC<MemberIdModalWrapperProps> = ({ onClose, isModalOpen }) => {
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />}
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <MemberIdModal onClose={onClose} />
        </div>
      )}
    </>
  );
};

export default MemberIdModalWrapper;
