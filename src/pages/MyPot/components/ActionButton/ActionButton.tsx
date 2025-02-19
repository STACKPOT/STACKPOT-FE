import { saveButtonStyle, buttonTextStyle, buttonContainer, deleteButtonStyle, anotherSaveButtonStyle } from "./ActionButton.style";

interface ActionButtonProps {
  title: string;
  onSavePatch: () => void;
  onSavePost: () => void;
  onDelete: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onSavePatch, onSavePost, onDelete, disabled }) => (
  <>
    {title === "새로운 업무 추가" && (
      <button 
        type="button" 
        css={saveButtonStyle} 
        disabled={!disabled} 
        onClick={disabled ? onSavePost : undefined}
      >
        <span css={buttonTextStyle}>저장하기</span>
      </button>
    )}
    {title === "업무 수정하기" && (
      <div css={buttonContainer}>
        {onDelete && (
          <button 
            type="button"
            css={deleteButtonStyle}
            disabled={!disabled}
            onClick={disabled ? onDelete : undefined}
          >
            <span css={buttonTextStyle}>삭제하기</span>
          </button>
        )}
        <button 
          type="button" 
          css={anotherSaveButtonStyle}
          disabled={!disabled}
          onClick={disabled ? onSavePatch : undefined}
        >
          <span css={buttonTextStyle}>저장하기</span>
        </button>
      </div>
    )}
  </>
);

export default ActionButton;
