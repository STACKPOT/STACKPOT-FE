import { buttonStyle, statusBoardContainer, statusBoardStyle, statusTextStyle } from "../../MyPotStatus/MyPotStatus.style";
import { iconStyle } from "../../MyPotMain.style"
import { PotIcon } from "@assets/svgs";

interface StatusBoardProps {
  onOpenModal: () => void;
}

const StatusBoard: React.FC<StatusBoardProps> = ({ onOpenModal }) => (
  <div css={statusBoardContainer}>
    <div css={statusBoardStyle}>
      <div css={statusTextStyle}>업무 보드</div>
      <PotIcon css={iconStyle} />
    </div>
    <button css={buttonStyle} onClick={onOpenModal}>
      새로운 업무 추가
    </button>
  </div>
);

export default StatusBoard;
