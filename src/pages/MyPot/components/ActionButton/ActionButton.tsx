import { saveButtonStyle, buttonTextStyle, buttonContainer, deleteButtonStyle, anotherSaveButtonStyle } from "./ActionButton.style";

interface ActionButtonProps {
    title: string;
    onSave: () => void;
    onDelete: () => void;
  }
  
  const ActionButton: React.FC<ActionButtonProps> = ({ title, onSave, onDelete }) => (
    <>
      {title === "새로운 업무 추가" && (
        <div css={saveButtonStyle} onClick={onSave}>
          <button css={buttonTextStyle}>저장하기</button>
        </div>
      )}
      {title === "업무 수정하기" && (
        <div css={buttonContainer}>
          {onDelete && (
            <div css={deleteButtonStyle} onClick={onDelete}>
              <button css={buttonTextStyle}>삭제하기</button>
            </div>
          )}
          <div css={anotherSaveButtonStyle} onClick={onSave}>
            <button css={buttonTextStyle}>저장하기</button>
          </div>
        </div>
      )}
    </>
  );
  
  export default ActionButton;
  