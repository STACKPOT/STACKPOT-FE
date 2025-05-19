import { AnotherTaskStatus } from "../../../../types/taskStatus";
import { firstSectionContainer } from "../TextInput/TextInput.style";
import { badgeContainer, badgeStyle, selectedBadgeStyle, statusStyles } from "./StateBadgeSelect.style";
import { labelTextStyle } from "../AboutWorkModal/AboutWorkModal.style"
import theme from "@styles/theme";
import { taskStatue } from "@constants/categories";

interface StatusBadgeSelectorProps {
  selectedStatus: AnotherTaskStatus | null;
  setSelectedStatus: (status: AnotherTaskStatus) => void;
}

const StatusBadgeSelector: React.FC<StatusBadgeSelectorProps> = ({ selectedStatus, setSelectedStatus }) => {
  const getBadgeStyle = (status: AnotherTaskStatus) => {
    const isSelected = selectedStatus === status;
    const badgeColor = statusStyles[status] || theme.color.object.alternative;
    return isSelected ? selectedBadgeStyle(badgeColor) : badgeStyle;
  };

  return (
    <div css={firstSectionContainer}>
      <div css={labelTextStyle}>업무 상태</div>
      <div css={badgeContainer}>
        {taskStatue.map((status) => (
          <button key={status} type="button" css={getBadgeStyle(status)} onClick={() => setSelectedStatus(status)}>
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusBadgeSelector;
