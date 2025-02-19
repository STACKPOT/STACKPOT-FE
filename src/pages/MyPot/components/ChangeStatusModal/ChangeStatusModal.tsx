import { useState } from "react";
import { CloseIcon } from "@assets/svgs";
import { cancelContainer, cancelIconStyle } from "../MemberIdModal/MemberIdModal.style";
import { changeButtonStyle, changebuttonTextStyle, innerContainer, mainContainer, titleTextStyle } from "./ChangeStatusModal.style";
import { badgeContainer, badgeStyle, selectedBadgeStyle, statusStyles } from "../StateBadgeSelect/StateBadgeSelect.style";
import theme from "@styles/theme";
import { AnotherTaskStatus } from "../../../../types/taskStatus";

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
      console.log(selectedStatus);
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
          <button type="button" css={getBadgeStyle("진행 전")} onClick={() => setSelectedStatus("진행 전")}> 
            진행 전
          </button>
          <button type="button" css={getBadgeStyle("진행 중")} onClick={() => setSelectedStatus("진행 중")}>
            진행 중
          </button>
          <button type="button" css={getBadgeStyle("완료")} onClick={() => setSelectedStatus("완료")}>
            완료
          </button>
        </div>
        <button type="button" css={changeButtonStyle} onClick={handleConfirm}>
          <p css={changebuttonTextStyle}>변경하기</p>
        </button>
      </div>
    </div>
  );
};

export default ChangeStatusModal;
