import { useState } from "react";
import { buttonContainer, buttonStyle, buttonTextStyle, container, innerContainer, titleContainer, titleTextStyle, cancelIconStyle } from "./MyTodoModal.style";
import { cancelContainer, firstSectionContainer, labelTextStyle, inputFieldStyle, saveButtonStyle } from "../AboutWorkModal/AboutWorkModal.style";
import { CloseIcon, PlusButtonIcon } from "@assets/svgs";

const MyTodoModal: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(["할 일 1"]); 

  const handleAddTask = () => {
    const newTaskNumber = tasks.length + 1;
    setTasks([...tasks, `할 일 ${newTaskNumber}`]); 
  };

  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} />
        </div>
        
        <div css={titleContainer}>
          <text css={titleTextStyle}>나의 할 일</text>
          <div css={buttonStyle}>
            <div css={buttonContainer} onClick={handleAddTask}>
              <text css={buttonTextStyle}>할 일 추가</text>
              <PlusButtonIcon />
            </div>
          </div>
        </div>  

        {tasks.map((task, index) => (
          <div key={index} css={firstSectionContainer}>
            <div css={labelTextStyle}>{task}</div>
            <input type="text" css={inputFieldStyle} />
          </div>
        ))}

        <div css={saveButtonStyle}>
          <button css={buttonTextStyle}>작성 완료</button>
        </div>

      </div>
    </div>  
  );
}

export default MyTodoModal;
