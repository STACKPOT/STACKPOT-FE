import { AnotherTaskStatus } from "../../../../types/taskStatus";
import { firstSectionContainer } from "../TextInput/TextInput.style";
import { badgeContainer, badgeStyle, selectedBadgeStyle, statusStyles } from "./StateBadgeSelect.style";
import { labelTextStyle } from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal.style";
import theme from "@styles/theme";

interface StatusBadgeSelectorProps {
  selectedStatus: AnotherTaskStatus | null;
  setSelectedStatus: (status: AnotherTaskStatus) => void;
}

const StatusBadgeSelector: React.FC<StatusBadgeSelectorProps> = ({ selectedStatus, setSelectedStatus }) => {
  const getBadgeStyle = (status: AnotherTaskStatus) => {

    const isSelected = selectedStatus === status;
    const badgeColor = statusStyles[status] || theme.color.object.alternative;

    return isSelected
      ? selectedBadgeStyle(badgeColor)
      : badgeStyle;
  };

  return (
    <div css={firstSectionContainer}>
        <div css={labelTextStyle}>업무 상태</div>
        <div css={badgeContainer}>
          <button css={getBadgeStyle("진행 전")} onClick={() => setSelectedStatus("진행 전")}>진행 전</button>
          <button css={getBadgeStyle("진행 중")} onClick={() => setSelectedStatus("진행 중")}>진행 중</button>
          <button css={getBadgeStyle("완료")} onClick={() => setSelectedStatus("완료")}>완료</button>
        </div>
    </div>
  );
};

export default StatusBadgeSelector;
