import { useParams } from "react-router-dom";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { User } from "apis/types/myPot";
import { Role } from "types/role";
import MyPotTodoCard from "../MyPotTodoCard/MyPotTodoCard";
import { gridContainerStyle } from "./MyPotTodoList.style";

interface MyPotTodoListProps {
  currentPage: number;
}

const MyPotTodoList: React.FC<MyPotTodoListProps> = ({ currentPage }) => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId) || 0;

  const { data } = useGetMyPotTodo({
    potId: potIdNumber,
    page: currentPage,
    size: 4,
  });

  return (
    <div css={gridContainerStyle}>
      {data?.todos.map((todoData: User, index: number) => (
        <MyPotTodoCard
          key={index}
          nickname={todoData.userNickname}
          userRole={todoData.userRole as Role}
          userId={todoData.userId}
          todos={todoData.todos}
          isFirst={index === 0}
          potId={potIdNumber}
          currentPage={currentPage}
        />
      ))}
    </div>
  );
};

export default MyPotTodoList;
