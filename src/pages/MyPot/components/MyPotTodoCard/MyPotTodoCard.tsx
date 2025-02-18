import { useState } from "react";
import { usePatchMyPotTodoStatus } from "apis/hooks/myPots/usePatchMyPotTodoStatus"; 
import { cardStyle, nicknameStyle, plusButtonStyle, profileImageStyle, statusContainer, todoContainer, todoListContainer, todoTextStyle } from "./MyPotTodoCard.style";
import { PlusButtonIcon } from "@assets/svgs";
import { MushroomImage } from "@assets/images";
import MyTodoModalWrapper from "../MyTodoModalWrapper/MyTodoModalWrapper";
import { Todo } from "apis/types/myPot";
import { CheckBox } from "@components/index";

interface MyPotTodoCardProps {
  nickname: string;
  todos: Todo[] | null;
  isFirst: boolean;
  potId: number;
  currentPage: number;
}

const MyPotTodoCard: React.FC<MyPotTodoCardProps> = ({ nickname, todos, isFirst, potId, currentPage  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: updateTodoStatus } = usePatchMyPotTodoStatus();

  const handlePlusButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectTodo = (todoId: number) => {
    updateTodoStatus({ potId, todoId },);
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
          {(todos ?? []).map((todo) => (
            todo.todoId !== null && (
              <div css={todoContainer} key={todo.todoId}>
                <CheckBox 
                  selected={todo.status === "COMPLETED"} 
                  onSelect={() => handleSelectTodo(todo.todoId!)}
                />
                <p css={todoTextStyle}>{todo.content}</p>
              </div>
            )
          ))}
        </div>
      </div>

      <MyTodoModalWrapper potId={potId} isModalOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default MyPotTodoCard;
