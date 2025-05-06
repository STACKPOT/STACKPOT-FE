import { buttonStyle, potIconStyle, statusBoardContainer, statusBoardStyle, statusTextStyle } from "../../MyPotStatus.style";
import { PotIcon } from "@assets/svgs";

interface StatusBoardProps {
  onOpenModal: () => void;
}

const StatusBoard: React.FC<StatusBoardProps> = ({ onOpenModal }) => (
  <div css={statusBoardContainer}>
    <div css={statusBoardStyle}>
      <div css={statusTextStyle}>업무 보드</div>
      <PotIcon css={potIconStyle} />
    </div>
    <button css={buttonStyle} onClick={onOpenModal}>
      새로운 업무 추가
    </button>
  </div>
);

export default StatusBoard;
