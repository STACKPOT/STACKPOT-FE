import { useState, useEffect } from "react";
import { usePatchTodo } from "../../../../apis/hooks/todos/usePatchTodo";
import { buttonContainer, buttonStyle, buttonTextStyle, container, innerContainer, titleContainer, titleTextStyle, cancelIconStyle, todoContainer, eachTodoContainer } from "./MyTodoModal.style";
import { cancelContainer } from "../AboutWorkModal/AboutWorkModal.style"; 
import { inputFieldStyle } from "@pages/MyPot/components/TextInput/TextInput.style"; 
import { saveButtonStyle } from "@pages/MyPot/components/ActionButton/ActionButton.style"; 
import { CloseIcon, DeleteIcon, TodoCheckIcon, TodoPlusButtonIcon } from "@assets/svgs"; 
import { noTaskTextContainer, noneTodoTextStyle } from "./MyTodoModal.style";  
import { GetTodos } from "apis/getTodoAPI";

interface MyTodoModalProps {
  potId: number; 
  onClose: () => void; 
}

const MyTodoModal: React.FC<MyTodoModalProps> = ({ potId, onClose }) => {
  const { patchTodoRequest, loading, error } = usePatchTodo(); 
  const [tasks, setTasks] = useState<{ todoId: number | null, content: string, status: string }[]>([]);  
  const [loadingTasks, setLoadingTasks] = useState<boolean>(true); 

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await GetTodos(4);  
        if (response.isSuccess && response.result) {
          const allTodos = response.result.todos.flatMap((user) => 
            user.todos.map((todo) => ({
              todoId: todo.todoId,
              content: todo.content,
              status: todo.status,
            }))
          );
          setTasks(allTodos); 
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
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
  };

  const handleTaskChange = (index: number, value: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].content = value;
    setTasks(updatedTasks);
  };

  const handleSaveTasks = async () => {
    try {
      const tasksToSend = tasks.map(task => ({
        todoId: task.todoId || null,
        content: task.content,
        status: task.status || "NOT_STARTED",
      }));

      await patchTodoRequest(potId, tasksToSend);

      alert("할 일이 저장되었습니다!");
      onClose();
    } catch (error) {
      console.error("저장 중 오류 발생", error);
    }
  };

  if (loadingTasks || loading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

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
                  value={task.content}
                  onChange={(e) => handleTaskChange(index, e.target.value)}  
                />
                <DeleteIcon onClick={() => handleDeleteTask(index)} />
              </div>
            ))
          )}
        </div>

        <div css={saveButtonStyle}>
          <button css={buttonTextStyle} onClick={handleSaveTasks}>작성 완료</button>
        </div>
      </div>
    </div>  
  );
};

export default MyTodoModal;
