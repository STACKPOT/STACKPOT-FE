import { useState } from "react";
import { cardStyle, checkBoxStyle, nicknameStyle, plusButtonStyle, profileImageStyle, statusContainer, todoContainer, todoListContainer, todoTextStyle } from "./MyPotTodoCard.style";
import { CheckIcon, PlusButtonIcon } from "@assets/svgs";
import { MushroomImage } from "@assets/images";
import MyTodoModalWrapper from "../MyTodoModalWrapper/MyTodoModalWrapper";
import { Todo } from "apis/types/todo";

interface MyPotTodoCardProps {
  nickname: string;
  todos: Todo[];
  isFirst: boolean;
  potId: number;
  currentPage: number;
  onModalClose: () => void;
}

const MyPotTodoCard: React.FC<MyPotTodoCardProps> = ({ nickname, todos, isFirst, potId, currentPage, onModalClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlusButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onModalClose();  
  };

  return (
    <div css={cardStyle}>
      <img css={profileImageStyle} src={MushroomImage} />
      <div css={nicknameStyle}>
        <p>{nickname}</p>
        {isFirst && currentPage === 1 && <PlusButtonIcon css={plusButtonStyle} onClick={handlePlusButtonClick} />} 
      </div>
      <div css={statusContainer}>
        <div css={todoListContainer}>
          {(todos || []).map((todo, index) => ( 
            <div css={todoContainer} key={index}>
              <div css={checkBoxStyle}>
                {todo.status === "COMPLETED" && <CheckIcon />}
              </div>
              <p css={todoTextStyle}>{todo.content}</p>
            </div>
          ))}
        </div>
      </div>

      <MyTodoModalWrapper potId={potId} isModalOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default MyPotTodoCard;
