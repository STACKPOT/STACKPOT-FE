import { useState } from "react";
import { buttonContainer, buttonStyle, buttonTextStyle, container, innerContainer, titleContainer, titleTextStyle, cancelIconStyle, todoContainer, eachTodoContainer } from "./MyTodoModal.style";
import { cancelContainer } from "../AboutWorkModal/AboutWorkModal.style";
import { inputFieldStyle } from "@pages/MyPot/components/TextInput/TextInput.style";
import { saveButtonStyle } from "@pages/MyPot/components/ActionButton/ActionButton.style";
import { CloseIcon, DeleteIcon, TodoCheckIcon, TodoPlusButtonIcon } from "@assets/svgs";
import { noTaskTextContainer, noneTodoTextStyle } from "./MyTodoModal.style";

interface MyTodoModalProps {
  onClose: () => void; 
}

const MyTodoModal: React.FC<MyTodoModalProps> = ({ onClose }) => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (tasks.length >= 10) {
      alert("할 일은 최대 10개까지 추가할 수 있습니다.");
      return;
    }
    setTasks([...tasks, ""]);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleTaskChange = (index: number, value: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} onClick={onClose} />
        </div>

        <div css={titleContainer}>
          <text css={titleTextStyle}>나의 할 일</text>
          <div 
            css={buttonStyle} 
            className={tasks.length >= 10 ? 'max-tasks' : ''}
            onClick={handleAddTask}
          >
            <div css={buttonContainer}>
              <text css={buttonTextStyle}>할 일 추가</text>
              <TodoPlusButtonIcon />
            </div>
          </div>
        </div>  

        <div css={todoContainer} className={tasks.length === 0 ? 'empty' : ''}>
          {tasks.length === 0 ? (
            <div css={noTaskTextContainer}>
              <text css={noneTodoTextStyle}>{"<할 일 추가> 버튼을 눌러서 작성할 수 있어요."}</text>
            </div>
          ) : (
            tasks.map((task, index) => (
              <div key={index} css={eachTodoContainer}>
                <TodoCheckIcon />
                <input
                  type="text"
                  css={inputFieldStyle}
                  value={task}
                  onChange={(e) => handleTaskChange(index, e.target.value)}
                />
                <DeleteIcon onClick={() => handleDeleteTask(index)} /> 
              </div>
            ))
          )}
        </div>

        <div css={saveButtonStyle}>
          <button css={buttonTextStyle}>작성 완료</button>
        </div>
      </div>
    </div>  
  );
};

export default MyTodoModal;
