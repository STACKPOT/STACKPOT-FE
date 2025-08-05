import { PotIcon } from "@assets/svgs";
import {
  iconStyle,
  statusBoardContainer,
  statusBoardStyle,
  statusTextStyle,
} from "./StatusBoard.style";
import { Button } from "@components/index";

interface StatusBoardProps {
  onOpenModal: () => void;
}

const StatusBoard: React.FC<StatusBoardProps> = ({ onOpenModal }) => (
  <div css={statusBoardContainer}>
    <div css={statusBoardStyle}>
      <div css={statusTextStyle}>업무 보드</div>
      <PotIcon css={iconStyle} />
    </div>
    <Button variant="action" onClick={onOpenModal}>
      업무 보드 등록
    </Button>
  </div>
);

export default StatusBoard;
