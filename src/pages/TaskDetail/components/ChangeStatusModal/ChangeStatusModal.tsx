import { useState } from "react";
import { CloseIcon } from "@assets/svgs";
import {
  cancelContainer,
  cancelIconStyle,
} from "../../../MyPotDetail/components/MemberIdModal/MemberIdModal.style";
import {
  changeButtonStyle,
  changebuttonTextStyle,
  innerContainer,
  mainContainer,
  titleTextStyle,
} from "./ChangeStatusModal.style";
import { badgeContainer } from "../../../MyPotDetail/components/StateBadgeSelect/StateBadgeSelect.style";
import { AnotherTaskStatus } from "../../../../types/taskStatus";
import { taskStatue } from "../../../../constants/categories";
import { StateBadge } from "@components/index";

interface ChangeStatusModalProps {
  onClose: () => void;
  onConfirm: (status: AnotherTaskStatus) => void;
  initialStatus: AnotherTaskStatus;
}

const ChangeStatusModal: React.FC<ChangeStatusModalProps> = ({
  onClose,
  onConfirm,
  initialStatus,
}) => {
  const [selectedStatus, setSelectedStatus] =
    useState<AnotherTaskStatus | null>(initialStatus);

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
            <StateBadge
              type="select"
              content={status}
              onClick={() => setSelectedStatus(status)}
              selectedState={selectedStatus}
            />
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
