import { useState } from "react";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo"; 
import { usePatchMyPotTodo } from "apis/hooks/myPots/usePatchMyPotTodo";
import { CloseIcon, DeleteIcon, TodoCheckIcon, TodoPlusButtonIcon } from "@assets/svgs";
import {
  buttonContainer,
  buttonStyle,
  buttonTextStyle,
  container,
  innerContainer,
  titleContainer,
  titleTextStyle,
  cancelIconStyle,
  todoContainer,
  eachTodoContainer,
  saveButtonStyle,
  noTaskTextContainer,
  noneTodoTextStyle,
} from "./MyTodoModal.style"; 
import { cancelContainer } from "../AboutWorkModal/AboutWorkModal.style";
import { inputFieldStyle } from "@pages/MyPot/components/TextInput/TextInput.style";
import { Todo } from "apis/types/myPot";

interface MyTodoModalProps {
  potId: number;
  onClose: () => void;
}

const MyTodoModal: React.FC<MyTodoModalProps> = ({ potId, onClose }) => {
  const { data, isLoading } = useGetMyPotTodo({ potId, page: 1, size: 3 });
  const { mutate: updateTasks } = usePatchMyPotTodo();

  const [localTasks, setLocalTasks] = useState<Todo[]>(data?.todos?.[0]?.todos ?? []);

  const handleAddTask = () => {
    if (localTasks.length >= 10) {
      alert("할 일은 최대 10개까지 추가할 수 있습니다.");
      return;
    }
    setLocalTasks([...localTasks, { todoId: null, content: "", status: "NOT_STARTED" }]);
  };

  const handleDeleteTask = (index: number) => {
    setLocalTasks(localTasks.filter((_, i) => i !== index));
  };

  const handleTaskChange = (index: number, value: string) => {
    setLocalTasks(prev => {
      const updatedTasks = [...prev];
      updatedTasks[index].content = value;
      return updatedTasks;
    });
  };

  const handleSaveTasks = () => {
    updateTasks({ potId, data: localTasks });
    onClose();
  };

  const isDisabled = localTasks.some(task => task.content.trim() === "");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} onClick={onClose} /> 
        </div>

        <div css={titleContainer}>
          <p css={titleTextStyle}>{data?.title ?? "나의 할 일"}</p>
          <div 
            css={buttonStyle} 
            className={localTasks.length >= 10 ? 'max-tasks' : ''}
            onClick={handleAddTask} 
          >
            <div css={buttonContainer}>
              <p css={buttonTextStyle}>할 일 추가</p>
              <TodoPlusButtonIcon /> 
            </div>
          </div>
        </div>  

        <div css={todoContainer} className={localTasks.length === 0 ? 'empty' : ''}>
          {localTasks.length === 0 ? (
            <div css={noTaskTextContainer}>
              <p css={noneTodoTextStyle}>{"<할 일 추가> 버튼을 눌러서 작성할 수 있어요."}</p>
            </div>
          ) : (
            localTasks.map((task, index) => (
              <div key={index} css={eachTodoContainer}>
                <TodoCheckIcon /> 
                <input
                  type="text"
                  css={inputFieldStyle} 
                  value={task.content}
                  onChange={(e) => handleTaskChange(index, e.target.value)}  
                />
                <DeleteIcon onClick={() => handleDeleteTask(index)} />
              </div>
            ))
          )}
        </div>

        <button 
          css={saveButtonStyle} 
          onClick={handleSaveTasks} 
          disabled={isDisabled} 
        >
          <div css={buttonTextStyle}>작성 완료</div>
        </button>
      </div>
    </div>  
  );
};

export default MyTodoModal;
