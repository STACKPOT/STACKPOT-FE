import { AnotherTaskStatus } from "../../../../types/taskStatus";
import { firstSectionContainer } from "../TextInput/TextInput.style";
import { badgeContainer } from "./StateBadgeSelect.style";
import { labelTextStyle } from "../AboutWorkModal/AboutWorkModal.style";
import { taskStatue } from "@constants/categories";
import { StateBadge } from "@components/index";

interface StatusBadgeSelectorProps {
  selectedStatus: AnotherTaskStatus | null;
  setSelectedStatus: (status: AnotherTaskStatus) => void;
}

const StatusBadgeSelector: React.FC<StatusBadgeSelectorProps> = ({
  selectedStatus,
  setSelectedStatus,
}) => {
  return (
    <div css={firstSectionContainer}>
      <div css={labelTextStyle}>진행 상태</div>
      <div css={badgeContainer}>
        {taskStatue.map((status) => (
          <StateBadge
            key={status}
            badgeType="task"
            taskState={status}
            onClick={() => setSelectedStatus(status)}
            selected={status === selectedStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default StatusBadgeSelector;
