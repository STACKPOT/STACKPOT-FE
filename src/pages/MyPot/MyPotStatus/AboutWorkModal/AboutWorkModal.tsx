// ../../components/AboutWorkModal.tsx
import { useState } from "react";
import { CloseIcon } from "@assets/svgs";
import { TextInput, DateInput, StatusBadgeSelector, ExplainationInputField, ContributorList, ActionButton } from "../../components/index"
import { mainContainer, subContainer, cancelContainer, cancelIconStyle, thirdContainer, titleContainer, titleTextStyle } from "./AboutWorkModal.style";
import { TaskStatus } from "../../../../types/taskStatus";

interface AboutWorkModalProps {
  onClose: () => void;
  onSave: (status: TaskStatus) => void;
  activeStatus: TaskStatus;
  title: string;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({ onClose, onSave, activeStatus, title }) => {
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(activeStatus);

  const handleSave = () => {
    onSave(selectedStatus);
    onClose();
  };

  return (
    <div css={mainContainer}>
      <div css={subContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} onClick={onClose} />
        </div>

        <div css={thirdContainer}>
          <div css={titleContainer}>
            <div css={titleTextStyle}>{title}</div>
          </div>

          <TextInput />
          <DateInput />
          <StatusBadgeSelector selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
          <ExplainationInputField placeholder="간단한 설명을 100자 이내로 작성해주세요" />
          <ContributorList />
          <ActionButton title={title} onSave={handleSave} onDelete={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default AboutWorkModal;
