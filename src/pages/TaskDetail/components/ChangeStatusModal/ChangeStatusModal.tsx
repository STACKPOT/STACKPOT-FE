import { useState } from "react";
import { CloseIcon } from "@assets/svgs";
import { cancelContainer, cancelIconStyle } from "../../../MyPotDetail/components/MemberIdModal/MemberIdModal.style";
import { changeButtonStyle, changebuttonTextStyle, innerContainer, mainContainer, titleTextStyle } from "./ChangeStatusModal.style";
import { badgeContainer, badgeStyle, selectedBadgeStyle, statusStyles } from "../../../MyPotDetail/components/StateBadgeSelect/StateBadgeSelect.style";
import theme from "@styles/theme";
import { AnotherTaskStatus } from "../../../../types/taskStatus";
import { taskStatue } from "../../../../constants/categories";

interface ChangeStatusModalProps {
  onClose: () => void;
  onConfirm: (status: AnotherTaskStatus) => void;
  initialStatus: AnotherTaskStatus;
}

const ChangeStatusModal: React.FC<ChangeStatusModalProps> = ({ onClose, onConfirm, initialStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState<AnotherTaskStatus | null>(initialStatus);

  const getBadgeStyle = (status: AnotherTaskStatus) => {
    const isSelected = selectedStatus === status;
    const badgeColor = statusStyles[status] || theme.color.object.alternative;
    return isSelected ? selectedBadgeStyle(badgeColor) : badgeStyle;
  };

  const handleConfirm = () => {
    if (selectedStatus) {
      onConfirm(selectedStatus);
    }
  };

  return (
    <div css={mainContainer}>
      <div css={cancelContainer}>
        <CloseIcon css={cancelIconStyle} onClick={onClose} />
      </div>
      <div css={innerContainer}>
        <h1 css={titleTextStyle}>상태값을 변경할까요?</h1>
        <div css={badgeContainer}>
          {taskStatue.map((status) => (
            <button key={status} type="button" css={getBadgeStyle(status)} onClick={() => setSelectedStatus(status)}>
              {status}
            </button>
          ))}
        </div>
        <button type="button" css={changeButtonStyle} onClick={handleConfirm}>
          <p css={changebuttonTextStyle}>변경하기</p>
        </button>
      </div>
    </div>
  );
};

export default ChangeStatusModal;
