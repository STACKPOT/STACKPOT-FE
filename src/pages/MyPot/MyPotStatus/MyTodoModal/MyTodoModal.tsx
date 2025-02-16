import { useState, useEffect } from "react";
import { usePatchMyPotTodo }from "apis/hooks/myPots/usePatchMyPotTodo";
import { getMyPotTodo } from "apis/myPotAPI";
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
  const { mutate: patchTodo } = usePatchMyPotTodo();
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [loadingTasks, setLoadingTasks] = useState<boolean>(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getMyPotTodo({ potId, page: 1, size: 3 });
        if (response.isSuccess && response.result) {
          setTasks(
            response.result.todos?.[0]?.todos?.map(todo => ({
              todoId: todo.todoId,
              content: todo.content,
              status: todo.status,
            })) || []
          );
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생", error);
      } finally {
        setLoadingTasks(false);
      }
    };

    fetchTodos();
  }, [potId]);

  const handleAddTask = () => {
    if (tasks.length >= 10) {
      alert("할 일은 최대 10개까지 추가할 수 있습니다.");
      return;
    }
    setTasks([...tasks, { todoId: null, content: "", status: "NOT_STARTED" }]);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTaskChange = (index: number, value: string) => {
    setTasks(prev => {
      const updatedTasks = [...prev];
      updatedTasks[index].content = value;
      return updatedTasks;
    });
  };

  const handleSaveTasks = () => {
    patchTodo(
      { potId, data: tasks },
      {
        onSuccess: () => {
          alert("할 일이 저장되었습니다!");
          onClose();
        },
        onError: (error) => {
          console.error("저장 중 오류 발생", error);
        },
      }
    );
  };

  const isDisabled = tasks.some(task => task.content.trim() === "");

  if (loadingTasks) return <div>Loading...</div>;

  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} onClick={onClose} /> 
        </div>

        <div css={titleContainer}>
          <p css={titleTextStyle}>나의 할 일</p>
          <div 
            css={buttonStyle} 
            className={tasks.length >= 10 ? 'max-tasks' : ''}
            onClick={handleAddTask} 
          >
            <div css={buttonContainer}>
              <p css={buttonTextStyle}>할 일 추가</p>
              <TodoPlusButtonIcon /> 
            </div>
          </div>
        </div>  

        <div css={todoContainer} className={tasks.length === 0 ? 'empty' : ''}>
          {tasks.length === 0 ? (
            <div css={noTaskTextContainer}>
              <p css={noneTodoTextStyle}>{"<할 일 추가> 버튼을 눌러서 작성할 수 있어요."}</p>
            </div>
          ) : (
            tasks.map((task, index) => (
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
