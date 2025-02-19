import React from "react";
import { buttonContainer } from "./CustomButton/CustomButton.style";
import CustomButton from "./CustomButton/CustomButton";
import { saveButtonStyle, anotherSaveButtonStyle, deleteButtonStyle } from "./CustomButton/CustomButton.style";

interface ActionButtonProps {
  title: string;
  onSavePatch: () => void;
  onSavePost: () => void;
  onDelete: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onSavePatch, onSavePost, onDelete, disabled }) => {
  if (title === "새로운 업무 추가") {
    return (
      <CustomButton
        text="저장하기"
        onClick={onSavePost}
        disabled={disabled}
        customStyle={saveButtonStyle}
      />
    );
  }
  if (title === "업무 수정하기") {
    return (
      <div css={buttonContainer}>
        <CustomButton
          text="삭제하기"
          onClick={onDelete}
          disabled={disabled}
          customStyle={deleteButtonStyle}
        />
        <CustomButton
          text="저장하기"
          onClick={onSavePatch}
          disabled={disabled}
          customStyle={anotherSaveButtonStyle}
        />
      </div>
    );
  }
  return null;
};

export default ActionButton;
