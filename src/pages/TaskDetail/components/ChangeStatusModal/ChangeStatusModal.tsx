import { useState } from "react";
import { CloseIcon } from "@assets/svgs";
import {
  cancelContainer,
  cancelIconStyle,
  changeButtonStyle,
  changebuttonTextStyle,
  innerContainer,
  mainContainer,
  titleTextStyle,
} from "./ChangeStatusModal.style";
import { badgeContainer } from "../../../MyPotDetail/components/StateBadgeSelect/StateBadgeSelect.style";
import { AnotherTaskStatus } from "../../../../types/taskStatus";
import { taskStatue } from "../../../../constants/categories";
import { StateBadge, StateButton } from "@components/index";

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
            <StateButton
              key={status}
              state={status}
              onClick={() => setSelectedStatus(status)}
              selected={status === selectedStatus}
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
