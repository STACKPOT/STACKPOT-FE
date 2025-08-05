import { usePatchMyPotTodoStatus } from "apis/hooks/myPots/usePatchMyPotTodoStatus";
import {
  cardStyle,
  nicknameStyle,
  profileImageStyle,
  statusContainer,
  todoContainer,
  todoListContainer,
  todoTextStyle,
} from "./MyPotTodoCard.style";
import { Todo } from "apis/types/myPot";
import { CheckBox } from "@components/index";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface MyPotTodoCardProps {
  nickname: string;
  userRole: Role;
  userId: number;
  todos: Todo[] | null;
  isFirst: boolean;
  potId: number;
  currentPage: number;
}

const MyPotTodoCard: React.FC<MyPotTodoCardProps> = ({
  nickname,
  userRole,
  userId,
  todos,
  isFirst,
  potId,
  currentPage,
}) => {
  const { mutate: updateTodoStatus } = usePatchMyPotTodoStatus();
  const navigate = useNavigate();

  const handleSelectTodo = (todoId: number) => {
    if (!isFirst || currentPage !== 1) return;
    updateTodoStatus({ potId, todoId });
  };

  const handleProfileClick = () => {
    navigate(`${routes.userProfile}/${userId}`);
  };

  return (
    <div css={cardStyle}>
      <img
        css={profileImageStyle}
        src={roleImages[userRole] || roleImages.UNKNOWN}
        alt="프로필"
        onClick={handleProfileClick}
      />
      <div css={nicknameStyle}>
        <p onClick={handleProfileClick}>{nickname}</p>
      </div>
      <div css={statusContainer}>
        <div css={todoListContainer}>
          {(todos ?? []).map(
            (todo) =>
              todo.todoId !== null && (
                <div css={todoContainer} key={todo.todoId}>
                  <CheckBox
                    selected={todo.status === "COMPLETED"}
                    onSelect={() => handleSelectTodo(todo.todoId!)}
                    disabled={!isFirst || currentPage !== 1}
                  />
                  <p css={todoTextStyle}>{todo.content}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPotTodoCard;
