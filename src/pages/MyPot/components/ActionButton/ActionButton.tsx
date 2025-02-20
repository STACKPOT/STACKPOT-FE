import React from "react";
import { buttonContainer } from "./ActionButton.style";
import { Button } from "@components/index";
import { saveButtonStyle, anotherSaveButtonStyle, deleteButtonStyle } from "./ActionButton.style";
import { WorkModal } from "@constants/categories";

interface ActionButtonProps {
  title: string;
  onSavePatch: () => void;
  onSavePost: () => void;
  onDelete: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onSavePatch, onSavePost, onDelete, disabled }) => {
  if (title === WorkModal[0]) {
    return (
      <Button onClick={onSavePost} disabled={!disabled} css={saveButtonStyle}>
        저장하기
      </Button>
    );
  }
  if (title === WorkModal[1]) {
    return (
      <div css={buttonContainer}>
        <Button onClick={onDelete} css={deleteButtonStyle}>
          삭제하기
        </Button>
        <Button onClick={onSavePatch} disabled={!disabled} css={anotherSaveButtonStyle}>
          저장하기
        </Button>
      </div>
    );
  }
  return null;
};

export default ActionButton;
